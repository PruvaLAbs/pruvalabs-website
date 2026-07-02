const checklist = [
  {
    title: "Canlı Backend",
    status: "Gerekli",
    items: [
      "Backend canlı sunucuya alınır",
      "HTTPS aktif olur",
      "Health endpoint çalışır",
      "API domain hazırlanır",
    ],
  },
  {
    title: "Canlı Database",
    status: "Gerekli",
    items: [
      "PostgreSQL canlı ortamda kurulur",
      "Tablolar oluşturulur",
      "Backup planı eklenir",
      "Bağlantı bilgileri gizli tutulur",
    ],
  },
  {
    title: "Vercel Bağlantısı",
    status: "Gerekli",
    items: [
      "PRUV_API_BASE_URL eklenir",
      "Frontend canlı API’ye bağlanır",
      "Build tekrar alınır",
      "Canlı sayfalar test edilir",
    ],
  },
  {
    title: "WhatsApp API",
    status: "Gerekli",
    items: [
      "Meta Business hesabı hazırlanır",
      "WhatsApp numarası bağlanır",
      "Webhook URL tanımlanır",
      "Bildirim mesajları test edilir",
    ],
  },
  {
    title: "Giriş Güvenliği",
    status: "Gerekli",
    items: [
      "Admin girişi gerçek olur",
      "Marka girişi gerçek olur",
      "Rol sistemi eklenir",
      "Her marka sadece kendi verisini görür",
    ],
  },
  {
    title: "Canlı Test",
    status: "Son adım",
    items: [
      "Test müşteri mesajı gönderilir",
      "AI cevabı kontrol edilir",
      "Rezervasyon oluşturulur",
      "İşletmeye bildirim gider",
    ],
  },
];

export default function AssistProductionPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-sky-700">
            ← Pruva Asistan
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/assist/onboarding" className="hover:text-slate-950">
              Kurulum
            </a>
            <a href="/legal/kvkk" className="hover:text-slate-950">
              KVKK
            </a>
            <a href="/assist/admin" className="hover:text-slate-950">
              Admin
            </a>
          </nav>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Canlı Hazırlık
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Pruva Asistan canlıya alma listesi.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Bir işletmeye bağlamadan önce bu adımlar tamamlanır.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm text-amber-800">Durum</p>
            <h2 className="mt-2 text-3xl font-semibold">Canlı hazırlık</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Demo hazır. Canlı bağlantı için backend ve WhatsApp gerekir.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {checklist.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {group.status}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#F6F8FB] px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8">
          <h2 className="text-3xl font-semibold">Canlı hedef</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Frontend Vercel’de kalır. Backend canlı API olur. Database canlı
            olur. WhatsApp gerçek işletme numarasına bağlanır.
          </p>
        </section>
      </section>
    </main>
  );
}
