import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createSessionId,
  openConversationId,
  sealConversationId,
  validSessionId,
} from "@/lib/pruvai-session";
import {
  sponsorDemoConfig,
  validSponsorAccessToken,
} from "@/lib/pruvai-demo-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_COOKIE = "pruvai_session";
const CONVERSATION_COOKIE = "pruvai_conversation";
const SPONSOR_ACCESS_COOKIE = "pruvai_sponsor_access";
const MAX_REQUEST_BYTES = 16_384;

type BackendAnswer = {
  status: string;
  conversation_id: string;
  answer: string;
  model: string | null;
  external_ai_api_used: boolean;
};

function configuration(): {
  backendUrl: string;
  gatewaySecret: string;
  gatewayOrigin: string | null;
} {
  const backendUrl = process.env.PRUVAI_BACKEND_URL?.trim().replace(/\/$/, "");
  const gatewaySecret = process.env.PRUVAI_GATEWAY_SECRET?.trim() ?? "";

  if (!backendUrl || !gatewaySecret || Buffer.byteLength(gatewaySecret) < 32) {
    throw new Error("pruvai_gateway_not_configured");
  }

  const parsed = new URL(backendUrl);
  const allowLoopback =
    process.env.PRUVAI_ALLOW_LOOPBACK_BACKEND?.trim().toLowerCase() ===
    "true";
  const localDevelopment =
    (process.env.NODE_ENV !== "production" || allowLoopback) &&
    parsed.protocol === "http:" &&
    ["127.0.0.1", "localhost"].includes(parsed.hostname);
  if (
    (!localDevelopment && parsed.protocol !== "https:") ||
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
  const expected = new URL(request.url).origin;
  if (origin !== expected) {
    throw new Error("pruvai_origin_blocked");
  }
  return origin;
}

export async function POST(request: Request): Promise<NextResponse> {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (
    !Number.isFinite(contentLength) ||
    contentLength < 0 ||
    contentLength > MAX_REQUEST_BYTES
  ) {
    return noStoreJson(
      { status: "failed", error_code: "message_too_large" },
      413,
    );
  }

  let message: string;
  let origin: string;
  try {
    origin = requestOrigin(request);
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_REQUEST_BYTES) {
      return noStoreJson(
        { status: "failed", error_code: "message_too_large" },
        413,
      );
    }
    const payload: unknown = JSON.parse(raw);
    if (
      typeof payload !== "object" ||
      payload === null ||
      Array.isArray(payload) ||
      Object.keys(payload).some((key) => key !== "message") ||
      typeof (payload as { message?: unknown }).message !== "string"
    ) {
      throw new Error("invalid_message_contract");
    }
    message = (payload as { message: string }).message.trim();
    if (!message || message.length > 12_000) {
      throw new Error("invalid_message_contract");
    }
  } catch {
    return noStoreJson(
      { status: "failed", error_code: "invalid_request" },
      400,
    );
  }

  let config: ReturnType<typeof configuration>;
  try {
    config = configuration();
  } catch {
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "pruvai_activation_required",
      },
      503,
    );
  }

  const cookieStore = await cookies();
  try {
    const demo = sponsorDemoConfig();
    if (
      demo.enabled &&
      !validSponsorAccessToken(
        cookieStore.get(SPONSOR_ACCESS_COOKIE)?.value,
      )
    ) {
      return noStoreJson(
        {
          status: "unauthorized",
          error_code: "sponsor_access_required",
        },
        401,
      );
    }
  } catch {
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "sponsor_demo_not_configured",
      },
      503,
    );
  }
  const existingSession = cookieStore.get(SESSION_COOKIE)?.value;
  const sessionId = validSessionId(existingSession)
    ? existingSession
    : createSessionId();
  const conversationId = openConversationId(
    cookieStore.get(CONVERSATION_COOKIE)?.value,
  );

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);
  let response: Response;
  try {
    response = await fetch(
      `${config.backendUrl}/api/v1/public/chat`,
      {
        method: "POST",
        cache: "no-store",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          "X-PruvAI-Gateway-Key": config.gatewaySecret,
          "X-PruvAI-Origin": config.gatewayOrigin ?? origin,
          "X-PruvAI-Session": sessionId,
        },
        body: JSON.stringify({
          message,
          conversation_id: conversationId,
        }),
      },
    );
  } catch {
    clearTimeout(timeout);
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "pruvai_runtime_unavailable",
      },
      503,
    );
  }
  clearTimeout(timeout);

  let backend: Partial<BackendAnswer>;
  try {
    backend = (await response.json()) as Partial<BackendAnswer>;
  } catch {
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "pruvai_response_invalid",
      },
      502,
    );
  }
  if (
    !response.ok ||
    backend.status !== "answered" ||
    typeof backend.conversation_id !== "string" ||
    typeof backend.answer !== "string" ||
    backend.external_ai_api_used !== false
  ) {
    const status = response.status === 429 ? 429 : 503;
    return noStoreJson(
      {
        status: status === 429 ? "rate_limited" : "unavailable",
        error_code:
          status === 429
            ? "pruvai_rate_limited"
            : "pruvai_runtime_unavailable",
      },
      status,
    );
  }

  const outgoing = noStoreJson(
    {
      status: "answered",
      answer: backend.answer,
      model: backend.model ?? null,
    },
    200,
  );
  const secure = new URL(origin).protocol === "https:";
  outgoing.cookies.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    secure,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
  outgoing.cookies.set(
    CONVERSATION_COOKIE,
    sealConversationId(backend.conversation_id),
    {
      httpOnly: true,
      secure,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    },
  );
  return outgoing;
}
