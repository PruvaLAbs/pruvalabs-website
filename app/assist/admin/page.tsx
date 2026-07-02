import {
  getBrands,
  getIncomingMessages,
  getNotificationLogs,
  getReplyLogs,
  getReservations,
} from "@/lib/pruva-api";

export default async function AdminPanelPage() {
  const [brands, incomingMessages, replyLogs, reservations, notifications] =
    await Promise.all([
      getBrands(),
      getIncomingMessages(),
      getReplyLogs(),
      getReservations(),
      getNotificationLogs(),
    ]);

  const brandList = brands?.data ?? [];
  const messageList = incomingMessages?.data ?? [];
  const replyList = replyLogs?.data ?? [];
  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];

  const stats = [
    { label: "Marka", value: String(brandList.length || 1) },
    { label: "Gelen mesaj", value: String(messageList.length) },
    { label: "AI cevabı", value: String(replyList.length) },
    { label: "Rezervasyon", value: String(reservationList.length) },
    { label: "Bildirim", value: String(notificationList.length) },
  ];

  const latestReplies = replyList.slice(0, 5);
  const latestMessages = messageList.slice(0, 5);
  const latestReservations = reservationList.slice(0, 5);
  const latestNotifications = notificationList.slice(0, 5);

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
            <a href="/assist/operations" className="hover:text-slate-950">
              Operasyon
            </a>
            <a href="/assist/accounts" className="hover:text-slate-950">
              Markalar
            </a>
          </nav>
        </header>

        <div className="grid gap-6 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Admin Paneli
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Pruva Asistan operasyon merkezi.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Markalar, gelen mesajlar, AI cevapları, rezervasyonlar ve işletme
              bildirimleri PruvaLabs tarafından buradan takip edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-sky-100 px-5 py-4">
            <p className="text-xs text-sky-700/80">Yetki</p>
            <p className="mt-1 text-lg font-semibold text-sky-700">
              PruvaLabs Admin
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-5">
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
              Sistemin müşterilere verdiği son AI cevapları.
            </p>

            <div className="mt-6 space-y-4">
              {latestReplies.length > 0 ? (
                latestReplies.map((reply) => (
                  <div
                    key={reply.id}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-sky-700">
                        Cevap #{reply.id}
                      </p>
                      <p className="text-xs text-slate-500">
                        {reply.brand || "Marka yok"} · {reply.channel || "Kanal yok"}
                      </p>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">Müşteri mesajı</p>
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
              <h2 className="text-2xl font-semibold">Gelen mesajlar</h2>

              <div className="mt-6 space-y-3">
                {latestMessages.length > 0 ? (
                  latestMessages.map((message) => (
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
                        {message.brand || "Marka yok"} · {message.channel || "Kanal yok"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Henüz gelen mesaj yok.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">Markalar</h2>

              <div className="mt-6 space-y-3">
                {brandList.length > 0 ? (
                  brandList.map((brand) => (
                    <a
                      key={brand.brand_file || brand.brand_name}
                      href={`/assist/accounts/${brand.brand_file?.replace(".json", "") || "mavi_kose_bistro"}`}
                      className="block rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4 transition hover:border-cyan-200/50"
                    >
                      <p className="font-semibold">
                        {brand.brand_name || "Marka adı yok"}
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        {brand.sector || "Sektör yok"} · {brand.location || "Konum yok"}
                      </p>
                      <p className="mt-2 text-xs text-emerald-700">
                        {brand.reservation_notifications
                          ? "Bildirim aktif"
                          : "Bildirim kapalı"}
                      </p>
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Marka kaydı yok.</p>
                )}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Rezervasyonlar</h2>

            <div className="mt-6 space-y-3">
              {latestReservations.length > 0 ? (
                latestReservations.map((reservation) => (
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

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Son işletme bildirimleri</h2>

            <div className="mt-6 space-y-3">
              {latestNotifications.length > 0 ? (
                latestNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                  >
                    <p className="font-semibold">
                      Bildirim #{notification.id}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {notification.message || "Bildirim metni yok"}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      {notification.recipient || "Alıcı yok"} ·{" "}
                      {notification.status || "Durum yok"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">Henüz bildirim yok.</p>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <h2 className="text-3xl font-semibold">
            Admin paneli gerçek operasyon verisini gösterir.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-900/80">
            Gelen mesaj, AI cevabı, rezervasyon ve bildirim kayıtları aynı
            merkezden takip edilir.
          </p>
        </section>
      </section>
    </main>
  );
}
