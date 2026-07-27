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
import { pruvaiGatewayConfig } from "@/lib/pruvai-gateway";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_COOKIE = "pruvai_session";
const CONVERSATION_COOKIE = "pruvai_conversation";
const SPONSOR_ACCESS_COOKIE = "pruvai_sponsor_access";
const MAX_REQUEST_BYTES = 16_384;
const MAX_FIRST_EVENT_BYTES = 65_536;
const STREAM_TIMEOUT_MS = 180_000;

type CreatedEvent = {
  type?: unknown;
  conversation_id?: unknown;
  external_ai_api_used?: unknown;
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

function requestOrigin(request: Request): string {
  const origin = request.headers.get("origin")?.replace(/\/$/, "") ?? "";
  const expected = new URL(request.url).origin;
  if (origin !== expected) {
    throw new Error("pruvai_origin_blocked");
  }
  return origin;
}

function combine(chunks: Uint8Array[], total: number): Uint8Array {
  const result = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return result;
}

function firstEvent(payload: Uint8Array): CreatedEvent {
  const text = new TextDecoder("utf-8", { fatal: true }).decode(payload);
  const boundary = text.indexOf("\n\n");
  if (boundary < 0) {
    throw new Error("pruvai_stream_first_event_incomplete");
  }
  const dataLine = text
    .slice(0, boundary)
    .split("\n")
    .find((line) => line.startsWith("data: "));
  if (!dataLine) {
    throw new Error("pruvai_stream_first_event_invalid");
  }
  return JSON.parse(dataLine.slice(6)) as CreatedEvent;
}

export async function POST(request: Request): Promise<Response> {
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

  let config: ReturnType<typeof pruvaiGatewayConfig>;
  try {
    config = pruvaiGatewayConfig();
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
  const upstreamAbort = new AbortController();
  const timeout = setTimeout(
    () => upstreamAbort.abort(),
    STREAM_TIMEOUT_MS,
  );

  let upstream: Response;
  try {
    upstream = await fetch(
      `${config.backendUrl}/api/v1/public/chat/stream`,
      {
        method: "POST",
        cache: "no-store",
        signal: upstreamAbort.signal,
        headers: {
          Accept: "text/event-stream",
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

  if (!upstream.ok || !upstream.body) {
    clearTimeout(timeout);
    await upstream.body?.cancel().catch(() => undefined);
    const status = upstream.status === 429 ? 429 : 503;
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
  if (
    !upstream.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("text/event-stream")
  ) {
    clearTimeout(timeout);
    upstreamAbort.abort();
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "pruvai_response_invalid",
      },
      502,
    );
  }

  const reader = upstream.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  let prefix: Uint8Array;
  let created: CreatedEvent;
  try {
    while (true) {
      const next = await reader.read();
      if (next.done || !next.value) {
        throw new Error("pruvai_stream_ended_before_created");
      }
      chunks.push(next.value);
      total += next.value.byteLength;
      if (total > MAX_FIRST_EVENT_BYTES) {
        throw new Error("pruvai_stream_first_event_too_large");
      }
      prefix = combine(chunks, total);
      if (new TextDecoder().decode(prefix).includes("\n\n")) {
        created = firstEvent(prefix);
        break;
      }
    }
  } catch {
    clearTimeout(timeout);
    upstreamAbort.abort();
    await reader.cancel().catch(() => undefined);
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "pruvai_response_invalid",
      },
      502,
    );
  }

  if (
    created.type !== "response.created" ||
    typeof created.conversation_id !== "string" ||
    created.external_ai_api_used !== false
  ) {
    clearTimeout(timeout);
    upstreamAbort.abort();
    await reader.cancel().catch(() => undefined);
    return noStoreJson(
      {
        status: "unavailable",
        error_code: "pruvai_response_invalid",
      },
      502,
    );
  }

  const initial = prefix!;
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(initial);
      void (async () => {
        try {
          while (true) {
            const next = await reader.read();
            if (next.done) {
              controller.close();
              break;
            }
            if (next.value) {
              controller.enqueue(next.value);
            }
          }
        } catch {
          controller.error(new Error("pruvai_stream_interrupted"));
        } finally {
          clearTimeout(timeout);
          await reader.cancel().catch(() => undefined);
        }
      })();
    },
    async cancel(reason) {
      clearTimeout(timeout);
      upstreamAbort.abort(reason);
      await reader.cancel(reason).catch(() => undefined);
    },
  });

  const outgoing = new NextResponse(body, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/event-stream; charset=utf-8",
      "X-Accel-Buffering": "no",
      "X-Content-Type-Options": "nosniff",
    },
  });
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
    sealConversationId(created.conversation_id),
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
