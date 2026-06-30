const API_BASE_URL = process.env.PRUV_API_BASE_URL || "http://127.0.0.1:8000";

export type HealthResponse = {
  status?: string;
  service?: string;
  environment?: string;
  debug_mode?: boolean;
  version?: string;
  database?: {
    connected?: boolean;
    missing_tables?: string[];
    tables?: string[];
  };
};

export type PilotChecklistItem = {
  key: string;
  title: string;
  status: "done" | "todo" | "blocked";
  detail: string;
};

export type PilotChecklistResponse = {
  pilot_ready?: boolean;
  summary?: {
    done?: number;
    todo?: number;
    blocked?: number;
    total?: number;
  };
  checklist?: PilotChecklistItem[];
  version?: string;
};

export type PilotReadinessResponse = {
  pilot_ready?: boolean;
  blocking_issues?: string[];
  checks?: Record<string, boolean>;
  brand_files?: string[];
  version?: string;
};

export type ReservationItem = {
  id?: number;
  conversation_id?: number;
  brand?: string;
  channel?: string;
  customer_name?: string;
  party_size?: number;
  reservation_date?: string | null;
  reservation_time?: string | null;
  note?: string;
  status?: string;
  notification_status?: string;
  created_at?: string;
};

export type ReservationListResponse = {
  success?: boolean;
  count?: number;
  data?: ReservationItem[];
};

export type NotificationLogItem = {
  id?: number;
  reservation_id?: number;
  brand?: string;
  channel?: string;
  recipient?: string;
  message?: string;
  status?: string;
  created_at?: string;
};

export type NotificationLogResponse = {
  success?: boolean;
  count?: number;
  data?: NotificationLogItem[];
};

export type ErrorLogItem = {
  id?: number;
  endpoint?: string;
  error_type?: string;
};

export type ErrorLogResponse = {
  success?: boolean;
  count?: number;
  data?: ErrorLogItem[];
};

export type BrandItem = {
  brand_file?: string;
  brand_name?: string;
  sector?: string;
  location?: string;
  tone?: string;
  business_whatsapp_number?: string;
  reservation_notifications?: boolean;
  pilot_status?: string;
  pilot_notes?: string;
};

export type BrandsResponse = {
  success?: boolean;
  error?: string | null;
  count?: number;
  data?: BrandItem[];
  version?: string;
};

export type BrandValidationResponse = {
  valid?: boolean;
  pilot_ready?: boolean;
  brand_file?: string;
  brand_name?: string;
  missing_fields?: string[];
  placeholder_fields?: string[];
  version?: string;
};

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch {
    return null;
  }
}

export async function getHealth() {
  return fetchJson<HealthResponse>("/health");
}

export async function getPilotReadiness() {
  return fetchJson<PilotReadinessResponse>("/pilot-readiness");
}

export async function getPilotChecklist() {
  return fetchJson<PilotChecklistResponse>("/pilot-checklist");
}

export async function getReservations() {
  return fetchJson<ReservationListResponse>("/reservations?limit=200");
}

export async function getNotificationLogs() {
  return fetchJson<NotificationLogResponse>("/notification-logs?limit=50");
}

export async function getErrorLogs() {
  return fetchJson<ErrorLogResponse>("/error-logs?limit=20");
}

export async function getBrands() {
  return fetchJson<BrandsResponse>("/brands");
}

export async function getBrandValidation(brandFile: string) {
  return fetchJson<BrandValidationResponse>(
    `/brands/validate?brand_file=${encodeURIComponent(brandFile)}`,
  );
}

export type IncomingMessageItem = {
  id?: number;
  brand?: string;
  channel?: string;
  sender_id?: string;
  message_text?: string;
  raw_payload?: string;
  created_at?: string;
};

export type IncomingMessageResponse = {
  success?: boolean;
  count?: number;
  data?: IncomingMessageItem[];
};

export type ReplyLogItem = {
  id?: number;
  brand?: string;
  channel?: string;
  incoming_message_id?: number;
  user_message?: string;
  ai_reply?: string;
  reply_text?: string;
  confidence?: number;
  created_at?: string;
};

export type ReplyLogResponse = {
  success?: boolean;
  count?: number;
  data?: ReplyLogItem[];
};

export async function getIncomingMessages() {
  return fetchJson<IncomingMessageResponse>("/incoming-messages?limit=50");
}

export async function getReplyLogs() {
  return fetchJson<ReplyLogResponse>("/reply-logs?limit=50");
}
