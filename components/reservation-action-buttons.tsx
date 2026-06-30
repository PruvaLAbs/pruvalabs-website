"use client";

import { useState, useTransition } from "react";

type ReservationActionButtonsProps = {
  reservationId?: number;
  status?: string;
};

function normalizeStatus(status?: string) {
  return (status || "").toLowerCase();
}

export function ReservationActionButtons({
  reservationId,
  status,
}: ReservationActionButtonsProps) {
  const [isBekliyor, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const normalizedStatus = normalizeStatus(status);
  const isFinal =
    normalizedStatus === "approved" ||
    normalizedStatus === "cancelled" ||
    normalizedStatus === "canceled";

  function submitAction(action: "approve" | "cancel") {
    if (!reservationId) {
      setMessage("Rezervasyon ID bulunamadı.");
      return;
    }

    setMessage(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/reservations/action", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reservation_id: reservationId,
            action,
          }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          setMessage("İşlem tamamlanamadı.");
          return;
        }

        setMessage(
          action === "approve"
            ? "Rezervasyon onaylandı. Liste yenileniyor..."
            : "Rezervasyon iptal edildi. Liste yenileniyor...",
        );

        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch {
        setMessage("Rezervasyon işleminde hata oluştu.");
      }
    });
  }

  if (isFinal) {
    return (
      <p className="mt-3 text-xs text-slate-500">
        Bu rezervasyon için işlem tamamlandı.
      </p>
    );
  }

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => submitAction("approve")}
          disabled={isBekliyor}
          className="rounded-full bg-emerald-300 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Onayla
        </button>

        <button
          type="button"
          onClick={() => submitAction("cancel")}
          disabled={isBekliyor}
          className="rounded-full border border-red-300/30 px-3 py-1.5 text-xs font-semibold text-red-200 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-60"
        >
          İptal et
        </button>
      </div>

      {message ? (
        <p className="mt-2 text-xs text-cyan-200">{message}</p>
      ) : null}
    </div>
  );
}
