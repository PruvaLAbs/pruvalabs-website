import { ReservationActionButtons } from "@/components/reservation-action-buttons";
import {
  getIncomingMessages,
  getNotificationLogs,
  getPilotReadiness,
  getReplyLogs,
  getReservations,
} from "@/lib/pruva-api";

export default async function AssistOperationsPage() {
  const [readiness, reservations, notifications, incomingMessages, replyLogs] =
    await Promise.all([
      getPilotReadiness(),
      getReservations(),
      getNotificationLogs(),
      getIncomingMessages(),
      getReplyLogs(),
    ]);

  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];
  const messageList = incomingMessages?.data ?? [];
  const replyList = replyLogs?.data ?? [];

  const pendingReservations = reservationList.filter(
    (reservation) => reservation.status === "pending",
  );

  const approvedReservations = reservationList.filter(
    (reservation) => reservation.status === "approved",
  );

  const cancelledReservations = reservationList.filter((reservation) => {
    const status = reservation.status || "";
    return status === "cancelled" || status === "canceled";
  });

  const visibleReservations =
    pendingReservations.length > 0 ? pendingReservations : reservationList;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-sky-700">
            ← Pruva Asistan
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/assist/brand" className="hover:text-slate-950">
              Marka Paneli
            </a>
            <a href="/assist/admin" className="hover:text-slate-950">
              Admin Paneli
            </a>
            <a href="/assist/accounts/mavi_kose_bistro" className="hover:text-slate-950">
              Pilot Marka
            </a>
          </nav>
        </header>

        <div className="grid gap-6 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Operasyon Merkezi
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Rezervasyon ve mesaj akışı tek ekranda.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Gelen müşteri mesajları, AI cevapları, rezervasyon talepleri ve
              işletmeye gönderilen bildirimler buradan takip edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
            <p className="text-xs text-emerald-700/80">Sistem durumu</p>
            <p className="mt-1 text-lg font-semibold text-emerald-700">
              Hazır
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Bekleyen</p>
            <p className="mt-3 text-4xl font-semibold">
              {pendingReservations.length}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Onaylanan</p>
            <p className="mt-3 text-4xl font-semibold">
              {approvedReservations.length}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">İptal</p>
            <p className="mt-3 text-4xl font-semibold">
              {cancelledReservations.length}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Mesaj</p>
            <p className="mt-3 text-4xl font-semibold">{messageList.length}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Bildirim</p>
            <p className="mt-3 text-4xl font-semibold">
              {notificationList.length}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Rezervasyonlar</h2>
            <p className="mt-2 text-sm text-slate-500">
              Öncelik bekleyen taleplerde. Onay veya iptal işlemi buradan yapılır.
            </p>

            <div className="mt-6 space-y-4">
              {visibleReservations.length > 0 ? (
                visibleReservations.slice(0, 8).map((reservation) => (
                  <div
                    key={reservation.id}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-semibold">
                            {reservation.customer_name || "Müşteri adı yok"}
                          </h3>
                          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                            {reservation.status || "pending"}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                          {reservation.party_size || "-"} kişi ·{" "}
                          {reservation.reservation_date || "Tarih yok"} ·{" "}
                          {reservation.reservation_time || "Saat yok"}
                        </p>

                        {reservation.note ? (
                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            Not: {reservation.note}
                          </p>
                        ) : null}

                        <p className="mt-2 text-xs text-slate-500">
                          Rezervasyon #{reservation.id} ·{" "}
                          {reservation.notification_status || "Bildirim bekliyor"}
                        </p>
                      </div>

                      <ReservationActionButtons
                        reservationId={reservation.id}
                        status={reservation.status}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-6 text-slate-500">
                  Henüz rezervasyon kaydı yok.
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">Son müşteri mesajları</h2>

              <div className="mt-6 space-y-3">
                {messageList.length > 0 ? (
                  messageList.slice(0, 5).map((message) => (
                    <div
                      key={message.id}
                      className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                    >
                      <p className="text-sm font-semibold text-sky-700">
                        Mesaj #{message.id}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {message.message_text || "Mesaj metni yok"}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        {message.brand || "Marka yok"} ·{" "}
                        {message.channel || "Kanal yok"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Henüz mesaj yok.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">Bildirimler</h2>

              <div className="mt-6 space-y-3">
                {notificationList.length > 0 ? (
                  notificationList.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                    >
                      <p className="text-sm font-semibold">
                        Bildirim #{notification.id}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {notification.message || "İşletmeye gönderildi"}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        {notification.recipient || "Alıcı yok"} ·{" "}
                        {notification.status || "Gönderildi"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Henüz bildirim yok.</p>
                )}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">AI cevap kayıtları</h2>
          <p className="mt-2 text-sm text-slate-500">
            Müşteri mesajına karşılık üretilen son AI cevapları.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {replyList.length > 0 ? (
              replyList.slice(0, 6).map((reply) => (
                <div
                  key={reply.id}
                  className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-5"
                >
                  <p className="text-sm font-semibold text-sky-700">
                    AI Cevap #{reply.id}
                  </p>

                  <p className="mt-4 text-sm text-slate-500">Müşteri</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    {reply.user_message || "Müşteri mesajı yok"}
                  </p>

                  <p className="mt-4 text-sm text-slate-500">AI</p>
                  <p className="mt-1 text-sm leading-6 text-sky-700">
                    {reply.ai_reply || reply.reply_text || "AI cevabı yok"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">Henüz AI cevap kaydı yok.</p>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
