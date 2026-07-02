const sections = [
  {
    title: "İşletme Bilgileri",
    items: [
      "İşletme adı",
      "Sektör",
      "Adres",
      "Telefon",
      "Web sitesi",
      "Sosyal medya hesapları",
    ],
  },
  {
    title: "Çalışma Saatleri",
    items: [
      "Açılış saati",
      "Kapanış saati",
      "Kapalı günler",
      "Özel gün kuralları",
    ],
  },
  {
    title: "Rezervasyon Kuralları",
    items: [
      "Rezervasyon alınacak saatler",
      "Maksimum kişi sayısı",
      "Minimum kişi sayısı",
      "Masa / kapasite bilgisi",
      "İptal kuralı",
      "Özel notlar",
    ],
  },
  {
    title: "WhatsApp Bildirimi",
    items: [
      "İşletme WhatsApp numarası",
      "Bildirim alacak kişi",
      "Bildirim mesaj formatı",
      "Onay / iptal akışı",
    ],
  },
  {
    title: "AI Cevap Bilgileri",
    items: [
      "Cevap tonu",
      "Sık sorulan sorular",
      "Menü / hizmet bilgisi",
      "Fiyat bilgileri",
      "Yönlendirme kuralları",
    ],
  },
  {
    title: "Canlıya Hazırlık",
    items: [
      "Canlı backend",
      "Canlı database",
      "Vercel API bağlantısı",
      "WhatsApp API",
      "Giriş güvenliği",
      "KVKK metni",
    ],
  },
];

export default function AssistOnboardingPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-sky-700">
            ← Pruva Asistan
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/assist/admin" className="hover:text-slate-950">
              Admin
            </a>
            <a href="/assist/brand" className="hover:text-slate-950">
              Marka Paneli
            </a>
            <a href="/contact" className="hover:text-slate-950">
              İletişim
            </a>
          </nav>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Şirket Kurulumu
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              İşletmeyi Pruva Asistan’a bağlama listesi.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Eksik bilgi kalmasın. Her işletme bu listeyle hazırlanır.
            </p>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-sky-100 p-6">
            <p className="text-sm text-sky-800">Durum</p>
            <h2 className="mt-2 text-3xl font-semibold">Pilot hazırlık</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Bilgiler tamamlanınca canlı bağlantıya geçilir.
            </p>
          </div>
        
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Veri açıklaması</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Pruva Asistan müşteri mesajı ve rezervasyon bilgilerini hizmet için işler.
          </p>
          <div className="mt-4">

          <a href="/legal/kvkk" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
            KVKK / Veri Açıklaması
          </a>

          </div>
        </div>

      </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>

              <div className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F6F8FB] px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-3xl font-semibold">İlk hedef</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Bir işletme seçilir. Bilgiler tamamlanır. WhatsApp bildirim numarası
            bağlanır. Canlı rezervasyon akışı test edilir.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              İşletme Bağla
            </a>
            <a
              href="/assist/production"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
            >
              Canlı Hazırlık
            </a>
            <a
              href="/assist/admin"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
            >
              Admin Panel
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
