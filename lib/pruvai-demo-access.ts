import "server-only";

import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

const TOKEN_PATTERN =
  /^([0-9]{10})\.([A-Za-z0-9_-]{22})\.([A-Za-z0-9_-]{43})$/;

export type SponsorDemoConfig = {
  enabled: boolean;
  code: string;
  accessSeconds: number;
};

function exactFlag(name: string, fallback: boolean): boolean {
  const raw = process.env[name]?.trim().toLowerCase();
  if (!raw) {
    return fallback;
  }
  if (raw !== "true" && raw !== "false") {
    throw new Error(`${name.toLowerCase()}_invalid`);
  }
  return raw === "true";
}

function signingSecret(): Buffer {
  const raw = process.env.PRUVAI_SESSION_SECRET?.trim() ?? "";
  const encoded = Buffer.from(raw, "utf8");
  if (encoded.length < 32) {
    throw new Error("pruvai_session_secret_invalid");
  }
  return encoded;
}

function signature(value: string): string {
  return createHmac("sha256", signingSecret())
    .update(`sponsor-access:${value}`)
    .digest("base64url");
}

function safeEqual(left: string, right: string): boolean {
  const leftBytes = Buffer.from(left, "utf8");
  const rightBytes = Buffer.from(right, "utf8");
  return (
    leftBytes.length === rightBytes.length &&
    timingSafeEqual(leftBytes, rightBytes)
  );
}

export function sponsorDemoConfig(): SponsorDemoConfig {
  const enabled = exactFlag("PRUVAI_SPONSOR_DEMO_MODE", false);
  if (!enabled) {
    return { enabled: false, code: "", accessSeconds: 0 };
  }

  const code = process.env.PRUVAI_SPONSOR_CODE?.trim() ?? "";
  if (Buffer.byteLength(code, "utf8") < 12) {
    throw new Error("pruvai_sponsor_code_invalid");
  }
  const minutes = Number(
    process.env.PRUVAI_SPONSOR_ACCESS_MINUTES?.trim() ?? "60",
  );
  if (!Number.isInteger(minutes) || minutes < 5 || minutes > 120) {
    throw new Error("pruvai_sponsor_access_minutes_invalid");
  }
  signingSecret();
  return {
    enabled: true,
    code,
    accessSeconds: minutes * 60,
  };
}

export function verifySponsorCode(
  presented: string,
  config: SponsorDemoConfig,
): boolean {
  return (
    config.enabled &&
    Buffer.byteLength(presented, "utf8") >= 12 &&
    safeEqual(presented, config.code)
  );
}

export function createSponsorAccessToken(
  config: SponsorDemoConfig,
  nowSeconds = Math.floor(Date.now() / 1000),
): string {
  if (!config.enabled) {
    throw new Error("pruvai_sponsor_demo_not_enabled");
  }
  const expires = nowSeconds + config.accessSeconds;
  const nonce = randomBytes(16).toString("base64url");
  const value = `${expires}.${nonce}`;
  return `${value}.${signature(value)}`;
}

export function validSponsorAccessToken(
  token: string | undefined,
  nowSeconds = Math.floor(Date.now() / 1000),
): boolean {
  if (typeof token !== "string") {
    return false;
  }
  const matched = TOKEN_PATTERN.exec(token);
  if (!matched) {
    return false;
  }
  const expires = Number(matched[1]);
  if (
    !Number.isSafeInteger(expires) ||
    expires <= nowSeconds ||
    expires > nowSeconds + 2 * 60 * 60
  ) {
    return false;
  }
  const value = `${matched[1]}.${matched[2]}`;
  return safeEqual(matched[3], signature(value));
}
