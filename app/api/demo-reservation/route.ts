import { NextResponse } from "next/server";

const API_BASE_URL = process.env.PRUV_API_BASE_URL || "http://127.0.0.1:8000";

const demoScenarios = [
  {
    message: "Adım Deniz, 2 kişi saat 20.00 için rezervasyon yapmak istiyorum",
    customer_name: "Deniz Pilot",
    customer_external_id: "ig_deniz_pilot_demo",
  },
  {
    message: "Adım Elif, 4 kişi saat 19.30 için masa ayırmak istiyorum",
    customer_name: "Elif Pilot",
    customer_external_id: "ig_elif_pilot_demo",
  },
  {
    message: "Adım Bora, 3 kişi saat 21.00 için rezervasyon istiyorum",
    customer_name: "Bora Pilot",
    customer_external_id: "ig_bora_pilot_demo",
  },
];

export async function POST() {
  const scenario =
    demoScenarios[Math.floor(Math.random() * demoScenarios.length)];

  try {
    const response = await fetch(`${API_BASE_URL}/webhooks/meta/simulate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: scenario.message,
        brand_file: "mavi_kose_bistro.json",
        channel: "Instagram",
        customer_name: scenario.customer_name,
        customer_external_id: scenario.customer_external_id,
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
