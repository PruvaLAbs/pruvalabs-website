import { NextResponse } from "next/server";

const API_BASE_URL = process.env.PRUV_API_BASE_URL || "http://127.0.0.1:8000";

type ReservationActionRequest = {
  reservation_id?: number;
  action?: "approve" | "cancel";
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservationActionRequest;

    if (!body.reservation_id || !body.action) {
      return NextResponse.json(
        {
          success: false,
          error: "reservation_id ve action zorunludur.",
        },
        {
          status: 400,
        },
      );
    }

    const endpoint =
      body.action === "approve"
        ? "/reservations/approve"
        : "/reservations/cancel";

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reservation_id: body.reservation_id,
      }),
    });

    const data = await response.json();

    return NextResponse.json(
      {
        success: response.ok && data?.success !== false,
        data,
      },
      {
        status: response.ok ? 200 : 500,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Bilinmiyor error",
      },
      {
        status: 500,
      },
    );
  }
}
