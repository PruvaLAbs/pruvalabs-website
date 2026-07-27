import { NextResponse } from "next/server";
import { pruvaiGatewayConfig } from "@/lib/pruvai-gateway";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type BackendHealth = {
  status?: unknown;
  product?: unknown;
  enabled?: unknown;
  external_ai_api_used?: unknown;
  direct_product_api_exposed?: unknown;
};

function noStoreJson(
  body: Record<string, unknown>,
  status: number,
): NextResponse {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export async function GET(): Promise<NextResponse> {
  let backendUrl: string;
  try {
    backendUrl = pruvaiGatewayConfig().backendUrl;
  } catch {
    return noStoreJson(
      {
        status: "activation_required",
        product: "PruvAI",
        external_ai_api_used: false,
      },
      200,
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5_000);
  let response: Response;
  let health: BackendHealth;
  try {
    response = await fetch(`${backendUrl}/healthz`, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    health = (await response.json()) as BackendHealth;
  } catch {
    return noStoreJson(
      {
        status: "unavailable",
        product: "PruvAI",
        external_ai_api_used: false,
      },
      503,
    );
  } finally {
    clearTimeout(timeout);
  }

  const ready =
    response.ok &&
    health.status === "ready" &&
    health.product === "PruvAI" &&
    health.enabled === true &&
    health.external_ai_api_used === false &&
    health.direct_product_api_exposed === false;
  return noStoreJson(
    {
      status: ready ? "ready" : "unavailable",
      product: "PruvAI",
      external_ai_api_used: false,
    },
    ready ? 200 : 503,
  );
}
