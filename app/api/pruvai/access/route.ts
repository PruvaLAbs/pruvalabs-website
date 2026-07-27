import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createSponsorAccessToken,
  sponsorDemoConfig,
  validSponsorAccessToken,
  verifySponsorCode,
} from "@/lib/pruvai-demo-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ACCESS_COOKIE = "pruvai_sponsor_access";
const MAX_REQUEST_BYTES = 4096;
const ATTEMPT_LIMIT = 5;
const ATTEMPT_WINDOW_MS = 10 * 60 * 1000;

type AttemptStore = Map<string, number[]>;

const globalAttempts = globalThis as typeof globalThis & {
  pruvaiSponsorAttempts?: AttemptStore;
};
const attempts: AttemptStore =
  globalAttempts.pruvaiSponsorAttempts ??
  (globalAttempts.pruvaiSponsorAttempts = new Map());

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

function requestOrigin(request: Request): string {
  const origin = request.headers.get("origin")?.replace(/\/$/, "") ?? "";
  if (!origin || origin !== new URL(request.url).origin) {
    throw new Error("pruvai_origin_blocked");
  }
  return origin;
}

function requestSubject(request: Request): string {
  const cloudflare = request.headers.get("cf-connecting-ip")?.trim();
  if (cloudflare) {
    return `cf:${cloudflare}`;
  }
  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",", 1)[0]
    ?.trim();
  return `fallback:${forwarded || "local"}`;
}

function admitAttempt(subject: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(subject) ?? []).filter(
    (timestamp) => timestamp > now - ATTEMPT_WINDOW_MS,
  );
  if (recent.length >= ATTEMPT_LIMIT) {
    attempts.set(subject, recent);
    return false;
  }
  recent.push(now);
  attempts.set(subject, recent);
  return true;
}

export async function GET(): Promise<NextResponse> {
  try {
    const config = sponsorDemoConfig();
    if (!config.enabled) {
      return noStoreJson(
        { status: "not_required", sponsor_demo: false },
        200,
      );
    }
    const cookieStore = await cookies();
    const granted = validSponsorAccessToken(
      cookieStore.get(ACCESS_COOKIE)?.value,
    );
    return noStoreJson(
      {
        status: granted ? "granted" : "required",
        sponsor_demo: true,
        access_minutes: config.accessSeconds / 60,
      },
      200,
    );
  } catch {
    return noStoreJson(
      { status: "unavailable", error_code: "sponsor_demo_not_configured" },
      503,
    );
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  let origin: string;
  let code: string;
  try {
    origin = requestOrigin(request);
    const length = Number(request.headers.get("content-length") ?? "0");
    if (
      !Number.isFinite(length) ||
      length < 0 ||
      length > MAX_REQUEST_BYTES
    ) {
      return noStoreJson(
        { status: "failed", error_code: "invalid_request" },
        400,
      );
    }
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_REQUEST_BYTES) {
      return noStoreJson(
        { status: "failed", error_code: "invalid_request" },
        400,
      );
    }
    const payload: unknown = JSON.parse(raw);
    if (
      typeof payload !== "object" ||
      payload === null ||
      Array.isArray(payload) ||
      Object.keys(payload).some((key) => key !== "code") ||
      typeof (payload as { code?: unknown }).code !== "string"
    ) {
      throw new Error("invalid_access_contract");
    }
    code = (payload as { code: string }).code.trim();
  } catch {
    return noStoreJson(
      { status: "failed", error_code: "invalid_request" },
      400,
    );
  }

  let config: ReturnType<typeof sponsorDemoConfig>;
  try {
    config = sponsorDemoConfig();
  } catch {
    return noStoreJson(
      { status: "unavailable", error_code: "sponsor_demo_not_configured" },
      503,
    );
  }
  if (!config.enabled) {
    return noStoreJson(
      { status: "not_required", sponsor_demo: false },
      200,
    );
  }

  const subject = requestSubject(request);
  if (!admitAttempt(subject)) {
    return noStoreJson(
      { status: "rate_limited", error_code: "sponsor_access_rate_limited" },
      429,
    );
  }
  if (!verifySponsorCode(code, config)) {
    return noStoreJson(
      { status: "denied", error_code: "sponsor_code_invalid" },
      401,
    );
  }
  attempts.delete(subject);

  const response = noStoreJson(
    {
      status: "granted",
      sponsor_demo: true,
      access_minutes: config.accessSeconds / 60,
    },
    200,
  );
  response.cookies.set(
    ACCESS_COOKIE,
    createSponsorAccessToken(config),
    {
      httpOnly: true,
      secure: new URL(origin).protocol === "https:",
      sameSite: "strict",
      path: "/",
      maxAge: config.accessSeconds,
      priority: "high",
    },
  );
  return response;
}

export async function DELETE(request: Request): Promise<NextResponse> {
  try {
    requestOrigin(request);
  } catch {
    return noStoreJson(
      { status: "failed", error_code: "invalid_request" },
      400,
    );
  }
  const response = noStoreJson({ status: "closed" }, 200);
  response.cookies.set(ACCESS_COOKIE, "", {
    httpOnly: true,
    secure: new URL(request.url).protocol === "https:",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
