import "server-only";

export type PruvAIGatewayConfig = {
  backendUrl: string;
  gatewaySecret: string;
  gatewayOrigin: string | null;
};

export function pruvaiGatewayConfig(): PruvAIGatewayConfig {
  const backendUrl = process.env.PRUVAI_BACKEND_URL?.trim().replace(/\/$/, "");
  const gatewaySecret = process.env.PRUVAI_GATEWAY_SECRET?.trim() ?? "";

  if (!backendUrl || !gatewaySecret || Buffer.byteLength(gatewaySecret) < 32) {
    throw new Error("pruvai_gateway_not_configured");
  }

  const parsed = new URL(backendUrl);
  const allowLoopback =
    process.env.PRUVAI_ALLOW_LOOPBACK_BACKEND?.trim().toLowerCase() ===
    "true";
  const allowedLoopback =
    allowLoopback &&
    parsed.protocol === "http:" &&
    ["127.0.0.1", "localhost"].includes(parsed.hostname);
  if (
    (!allowedLoopback && parsed.protocol !== "https:") ||
    parsed.username ||
    parsed.password ||
    parsed.search ||
    parsed.hash ||
    !["", "/"].includes(parsed.pathname)
  ) {
    throw new Error("pruvai_backend_url_invalid");
  }

  const configuredOrigin =
    process.env.PRUVAI_GATEWAY_ORIGIN?.trim().replace(/\/$/, "") ?? "";
  let gatewayOrigin: string | null = null;
  if (configuredOrigin) {
    const parsedOrigin = new URL(configuredOrigin);
    if (
      parsedOrigin.protocol !== "https:" ||
      !parsedOrigin.hostname ||
      parsedOrigin.username ||
      parsedOrigin.password ||
      parsedOrigin.search ||
      parsedOrigin.hash ||
      !["", "/"].includes(parsedOrigin.pathname)
    ) {
      throw new Error("pruvai_gateway_origin_invalid");
    }
    gatewayOrigin = configuredOrigin;
  }

  return { backendUrl, gatewaySecret, gatewayOrigin };
}
