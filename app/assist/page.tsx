import {
  getBrands,
  getNotificationLogs,
  getReservations,
} from "@/lib/pruva-api";

export default async function AssistPage() {
  const [reservations, notifications, brands] = await Promise.all([
    getReservations(),
    getNotificationLogs(),
    getBrands(),
  ]);

  const pilotBrand =
    brands?.data?.find((brand) => brand.brand_name === "Mavi Köşe Bistro") ||
    brands?.data?.[0];

  const latestReservation = reservations?.data?.[0];
  const latestNotification = notifications?.data?.[0];

  const flow = [
    {
      title: "Müşteri yazar",
      text: "WhatsApp veya sosyal medya üzerinden mesaj gelir.",
    },
    {
      title: "Asistan cevaplar",
      text: "Pruva Asistan işletme bilgilerine göre yanıt verir.",
    },
    {
      title: "İşletmeye bildirir",
      text: "Rezervasyon oluşursa detaylar işletmeye iletilir.",
    },
  ];

  const summary = [
    {
      label: "Sistem",
      value: "Hazır",
    },
    {
      label: "Marka",
      value: pilotBrand?.brand_name || "Mavi Köşe Bistro",
    },
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
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="/" className="text-sm font-semibold text-cyan-200">
            ← PruvaLabs.
          </a>

          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="/assist/brand-login" className="hover:text-white">
              Marka Girişi
            </a>
            <a href="/assist/admin-login" className="hover:text-white">
              Admin Girişi
            </a>
          </nav>
        </header>

        <div className="grid flex-1 gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              AI ASİSTAN SİSTEMİ
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
              Pruva Asistan
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">
              AI destekli müşteri cevaplama ve rezervasyon sistemi.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/assist/brand-login"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Marka Girişi
              </a>
              <a
                href="/assist/admin-login"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
              >
                Admin Girişi
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Canlı durum</p>
                <h2 className="mt-1 text-2xl font-semibold">Sistem hazır</h2>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
                Aktif
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {summary.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="grid gap-4 pb-10 md:grid-cols-3">
          {flow.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                {index + 1}
              </span>
              <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
