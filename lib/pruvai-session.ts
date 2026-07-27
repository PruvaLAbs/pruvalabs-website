import "server-only";

import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

const SESSION_PATTERN = /^[A-Za-z0-9_-]{43}$/;
const CONVERSATION_PATTERN = /^[A-Za-z0-9_-]{1,128}$/;

function secret(): Buffer {
  const value = process.env.PRUVAI_SESSION_SECRET?.trim() ?? "";
  const encoded = Buffer.from(value, "utf8");

  if (encoded.length < 32) {
    throw new Error("pruvai_session_secret_invalid");
  }

  return encoded;
}

function signature(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export function createSessionId(): string {
  return randomBytes(32).toString("base64url");
}

export function validSessionId(value: string | undefined): value is string {
  return typeof value === "string" && SESSION_PATTERN.test(value);
}

export function sealConversationId(conversationId: string): string {
  if (!CONVERSATION_PATTERN.test(conversationId)) {
    throw new Error("pruvai_conversation_id_invalid");
  }

  return `${conversationId}.${signature(conversationId)}`;
}

export function openConversationId(
  sealed: string | undefined,
): string | null {
  if (typeof sealed !== "string") {
    return null;
  }

  const separator = sealed.lastIndexOf(".");
  if (separator < 1) {
    return null;
  }

  const conversationId = sealed.slice(0, separator);
  const presented = sealed.slice(separator + 1);
  if (!CONVERSATION_PATTERN.test(conversationId)) {
    return null;
  }

  const expected = signature(conversationId);
  const presentedBytes = Buffer.from(presented, "utf8");
  const expectedBytes = Buffer.from(expected, "utf8");
  if (
    presentedBytes.length !== expectedBytes.length ||
    !timingSafeEqual(presentedBytes, expectedBytes)
  ) {
    return null;
  }

  return conversationId;
}
