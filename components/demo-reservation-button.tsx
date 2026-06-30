"use client";

import { useState, useTransition } from "react";

export function DemoReservationButton() {
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

        setMessage("Demo rezervasyon oluşturuldu. Liste yenileniyor...");

        setTimeout(() => {
          window.location.reload();
        }, 800);
      } catch {
        setMessage("Demo rezervasyon isteğinde hata oluştu.");
      }
    });
  }

  return (
    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-100">
            Canlı demo senaryosu
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Instagram DM simülasyonu oluştur, AI rezervasyonu kaydetsin ve dashboard canlı güncellensin.
          </p>
        </div>

        <button
          type="button"
          onClick={createDemoRezervasyon}
          disabled={isBeklemede}
          className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isBeklemede ? "Oluşturuluyor..." : "Demo rezervasyon oluştur"}
        </button>
      </div>

      {message ? (
        <p className="mt-4 text-sm text-cyan-100">{message}</p>
      ) : null}
    </div>
  );
}
