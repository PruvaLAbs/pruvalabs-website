"use client";

import { useState, useTransition } from "react";

export function DemoPageReservationButton() {
  const [isBeklemede, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function createDemoRezervasyon() {
    setMessage(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/demo-reservation", {
          method: "POST",
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          setMessage("Demo rezervasyon oluşturulamadı.");
          return;
        }

        const reservationId =
          result?.data?.data?.reservation?.reservation_id ||
          result?.data?.data?.reservation_record?.reservation_id;

        setMessage(
          reservationId
            ? `Demo rezervasyon oluşturuldu. Rezervasyon #${reservationId}`
            : "Demo rezervasyon oluşturuldu.",
        );

        setTimeout(() => {
          window.location.reload();
        }, 900);
      } catch {
        setMessage("Demo rezervasyon sırasında hata oluştu.");
      }
    });
  }

  return (
    <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-cyan-100">
            Canlı demo aksiyonu
          </p>
          <p className="mt-1 text-xs leading-5 text-cyan-100/70">
            Tek tıkla Instagram DM simülasyonu oluştur; rezervasyonu ve işletme
            bildirimini canlı metriklerde göster.
          </p>
        </div>

        <button
          type="button"
          onClick={createDemoRezervasyon}
          disabled={isBeklemede}
          className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isBeklemede ? "Oluşturuluyor..." : "Canlı demo oluştur"}
        </button>
      </div>

      {message ? (
        <p className="mt-4 text-sm text-cyan-100">{message}</p>
      ) : null}
    </div>
  );
}
