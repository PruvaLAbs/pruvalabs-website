import {
  getBrands,
  getNotificationLogs,
  getReservations,
} from "@/lib/pruva-api";

export default async function AdminPanelPage() {
  const [brands, reservations, notifications] = await Promise.all([
    getBrands(),
    getReservations(),
    getNotificationLogs(),
  ]);

  const brandList = brands?.data ?? [];
  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];

  const stats = [
    { label: "Marka", value: String(brandList.length || 1) },
    { label: "Rezervasyon", value: String(reservationList.length) },
    { label: "WhatsApp bildirimi", value: String(notificationList.length) },
    { label: "Aktif kanal", value: "2" },
  ];

  const adminAreas = [
    {
      title: "Marka bilgileri",
      text: "Adres, telefon, çalışma saatleri ve işletme açıklamaları.",
    },
    {
      title: "AI bilgi havuzu",
      text: "AI’ın cevap verirken kullanacağı işletme verileri.",
    },
    {
      title: "Rezervasyon kuralları",
      text: "Saat, kapasite, kişi sayısı ve özel şartlar.",
    },
    {
      title: "Kanal ayarları",
      text: "WhatsApp, Instagram DM ve diğer mesaj kanalları.",
    },
    {
      title: "Cevap kontrolü",
      text: "AI cevapları incelenir, geliştirilir ve iyileştirilir.",
    },
    {
      title: "Bildirim yönetimi",
      text: "Rezervasyonların gideceği WhatsApp numaraları.",
    },
  ];

  const reviewItems = [
    {
      label: "Cevap kalitesi",
      value: "İncelenebilir",
    },
    {
      label: "Marka verisi",
      value: "Güncellenebilir",
    },
    {
      label: "Kanal durumu",
      value: "Yönetilebilir",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-cyan-200">
            ← Pruva Assist
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="/assist/brand" className="hover:text-white">
              Marka Paneli
            </a>
            <a href="/assist/operations" className="hover:text-white">
              Operasyon
            </a>
            <a href="/assist/accounts" className="hover:text-white">
              Markalar
            </a>
          </nav>
        </header>

        <div className="grid gap-6 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Admin Paneli
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              AI operasyonu buradan yönetilir.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Marka bilgileri, AI cevapları, kanallar, rezervasyon kuralları ve
              bildirim akışları tek merkezde.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-200/30 bg-cyan-300/10 px-5 py-4">
            <p className="text-xs text-cyan-200/80">Yetki</p>
            <p className="mt-1 text-lg font-semibold text-cyan-100">
              PruvaLabs Admin
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold">Yönetim alanları</h2>
            <p className="mt-2 text-sm text-slate-400">
              PruvaLabs’ın müdahale edeceği ana sistem parçaları.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {adminAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                >
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-2xl font-semibold">Kalite kontrol</h2>
              <p className="mt-2 text-sm text-slate-400">
                AI cevapları ve marka verileri sürekli geliştirilebilir.
              </p>

              <div className="mt-6 space-y-3">
                {reviewItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                  >
                    <p className="text-sm text-slate-300">{item.label}</p>
                    <p className="text-sm font-semibold text-cyan-100">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-200/30 bg-cyan-300 p-6 text-slate-950">
              <h2 className="text-2xl font-semibold">
                Marka verisi değiştikçe AI gelişir.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-900/80">
                Admin paneli, her markanın bilgi havuzunu güncel tutmak ve AI
                cevap kalitesini artırmak için kullanılır.
              </p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
