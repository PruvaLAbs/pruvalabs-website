import {
  getIncomingMessages,
  getNotificationLogs,
  getReplyLogs,
  getReservations,
} from "@/lib/pruva-api";

export default async function BrandPanelPage() {
  const [incomingMessages, replyLogs, reservations, notifications] =
    await Promise.all([
      getIncomingMessages(),
      getReplyLogs(),
      getReservations(),
      getNotificationLogs(),
    ]);

  const messageList = incomingMessages?.data ?? [];
  const replyList = replyLogs?.data ?? [];
  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];

  const stats = [
    { label: "Gelen mesaj", value: String(messageList.length) },
    { label: "AI cevabı", value: String(replyList.length) },
    { label: "Rezervasyon", value: String(reservationList.length) },
    { label: "Bildirim", value: String(notificationList.length) },
  ];

  const channels = [
    { name: "WhatsApp", status: "Aktif" },
    { name: "Instagram DM", status: "Hazır" },
  ];

  const assistants = [
    {
      name: "Müşteri Cevap Asistanı",
      text: "İşletme bilgilerine göre müşteri sorularını cevaplar.",
    },
    {
      name: "Rezervasyon Asistanı",
      text: "Tarih, saat, kişi sayısı ve not bilgilerini toplayarak rezervasyon akışını başlatır.",
    },
  ];

  const visibleReplies = replyList.slice(0, 6);
  const visibleMessages = messageList.slice(0, 6);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-sky-700">
            ← Pruva Asistan
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/assist/accounts/mavi_kose_bistro" className="hover:text-slate-950">
              Marka Ayarları
            </a>
            <a href="/assist/operations" className="hover:text-slate-950">
              Operasyon
            </a>
            <a href="/assist/admin" className="hover:text-slate-950">
              Admin
            </a>
          </nav>
        </header>

        <div className="grid gap-6 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Marka Paneli
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Mavi Köşe Bistro AI paneli.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Mesaj, cevap, rezervasyon ve bildirim tek ekranda.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
            <p className="text-xs text-emerald-700/80">Durum</p>
            <p className="mt-1 text-lg font-semibold text-emerald-700">
              Aktif pilot
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">AI cevapları</h2>
            <p className="mt-2 text-sm text-slate-500">
              Sistemin müşterilere verdiği son cevaplar.
            </p>

            <div className="mt-6 space-y-4">
              {visibleReplies.length > 0 ? (
                visibleReplies.map((reply) => (
                  <div
                    key={reply.id}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-sky-700">
                        Cevap #{reply.id}
                      </p>
                      <p className="text-xs text-slate-500">
                        {reply.channel || "Kanal kaydı yok"}
                      </p>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">Müşteri</p>
                    <p className="mt-1 leading-7 text-slate-200">
                      {reply.user_message || "Müşteri mesajı kaydı yok"}
                    </p>

                    <p className="mt-4 text-sm text-slate-500">AI cevabı</p>
                    <p className="mt-1 leading-7 text-sky-700">
                      {reply.ai_reply || reply.reply_text || "AI cevap kaydı yok"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-5 text-sm text-slate-500">
                  Henüz AI cevap kaydı yok.
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">Kanallar</h2>

              <div className="mt-6 space-y-3">
                {channels.map((channel) => (
                  <div
                    key={channel.name}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                  >
                    <p className="font-semibold">{channel.name}</p>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                      {channel.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">AI asistanlar</h2>

              <div className="mt-6 space-y-3">
                {assistants.map((assistant) => (
                  <div
                    key={assistant.name}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                  >
                    <p className="font-semibold">{assistant.name}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {assistant.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Gelen mesajlar</h2>

            <div className="mt-6 space-y-3">
              {visibleMessages.length > 0 ? (
                visibleMessages.map((message) => (
                  <div
                    key={message.id}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                  >
                    <p className="text-sm font-semibold text-sky-700">
                      Mesaj #{message.id}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {message.message_text || "Mesaj metni kaydı yok"}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      {message.channel || "Kanal kaydı yok"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">Henüz gelen mesaj yok.</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Rezervasyonlar</h2>

            <div className="mt-6 space-y-3">
              {reservationList.slice(0, 6).length > 0 ? (
                reservationList.slice(0, 6).map((reservation) => (
                  <div
                    key={reservation.id}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                  >
                    <p className="font-semibold">
                      {reservation.customer_name || "Müşteri adı yok"}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      {reservation.party_size || "-"} kişi ·{" "}
                      {reservation.reservation_date || "Tarih yok"} ·{" "}
                      {reservation.reservation_time || "Saat yok"}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Durum: {reservation.status || "pending"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">Henüz rezervasyon yok.</p>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <h2 className="text-3xl font-semibold">
            Marka, AI’ın tüm konuşmalarını görebilir.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-900/80">
            Hangi müşteri yazdı, AI ne cevap verdi, rezervasyon oluştu mu:
            hepsi panelden takip edilir.
          </p>
        </section>
      </section>
    </main>
  );
}
