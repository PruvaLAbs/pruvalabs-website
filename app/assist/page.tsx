import {
  getBrands,
  getIncomingMessages,
  getNotificationLogs,
  getReplyLogs,
  getReservations,
} from "@/lib/pruva-api";

export default async function AssistPage() {
  const [reservations, notifications, brands, incomingMessages, replyLogs] =
    await Promise.all([
      getReservations(),
      getNotificationLogs(),
      getBrands(),
      getIncomingMessages(),
      getReplyLogs(),
    ]);

  const pilotBrand =
    brands?.data?.find((brand) => brand.brand_name === "Mavi Köşe Bistro") ||
    brands?.data?.[0];

  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];
  const messageList = incomingMessages?.data ?? [];
  const replyList = replyLogs?.data ?? [];

  const latestReservation = reservationList[0];
  const latestNotification = notificationList[0];

  const flow = [
    {
      title: "Mesajı anlar",
      text: "Müşterinin ne istediğini anlar.",
    },
    {
      title: "Cevap verir",
      text: "İşletme bilgilerine göre cevaplar.",
    },
    {
      title: "Rezervasyon alır",
      text: "Tarih, saat ve kişi sayısını alır.",
    },
    {
      title: "Bildirim gönderir",
      text: "Rezervasyonu işletmeye gönderir.",
    },
  ];

  const summary = [
    { label: "AI durum", value: "Aktif" },
    { label: "Pilot marka", value: pilotBrand?.brand_name || "Mavi Köşe Bistro" },
    { label: "Gelen mesaj", value: String(messageList.length) },
    { label: "AI cevabı", value: String(replyList.length) },
    {
      label: "Rezervasyon",
      value: latestReservation
        ? `#${latestReservation.id} · ${latestReservation.customer_name}`
        : "Kayıt yok",
    },
    {
      label: "Bildirim",
      value: latestNotification ? `#${latestNotification.id}` : "Kayıt yok",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_34%)]" />

        <header className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-6">
          <a href="/" className="text-sm font-semibold text-sky-700">
            ← PruvaLabs.
          </a>

          <nav className="flex gap-4 text-sm text-slate-600">
            <a href="/assist/brand-login" className="hover:text-slate-950">
              Marka Girişi
            </a>
            <a href="/assist/admin-login" className="hover:text-slate-950">
              Admin Girişi
            </a>
          </nav>
        </header>

        <div className="relative z-10 grid flex-1 gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              AI Asistan
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
              Pruva Asistan
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
              İşletmeler için geliştirilen AI Asistan ve rezervasyon
              sistemidir. Müşteri mesajlarını anlar, işletme bilgilerine göre
              cevap üretir ve rezervasyon akışını yönetir.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/assist/brand-login"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Marka Girişi
              </a>
              <a
                href="/assist/production"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
              >
                Canlı Hazırlık
              </a>
              <a
                href="/assist/onboarding"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
              >
                Şirket Kurulumu
              </a>
              <a
                href="/assist/operations"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
              >
                Operasyon
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Durum</p>
                <h2 className="mt-1 text-2xl font-semibold">Hazır</h2>
              </div>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 ring-1 ring-sky-200">
                Aktif
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {summary.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="relative z-10 grid gap-4 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {flow.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-sky-200 hover:bg-sky-50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">
                {index + 1}
              </span>
              <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
