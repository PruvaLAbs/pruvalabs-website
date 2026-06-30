export default function PruvaAssistProductPage() {
  const features = [
    {
      title: "Mesajları karşılar",
      text: "Instagram, WhatsApp ve sosyal medya mesajlarını işletme bilgilerine göre yanıtlar.",
    },
    {
      title: "Rezervasyon toplar",
      text: "İsim, telefon, tarih, saat ve kişi sayısı gibi bilgileri düzenli şekilde alır.",
    },
    {
      title: "Kuralları kontrol eder",
      text: "Çalışma saati, uygunluk ve işletme şartlarına göre rezervasyon akışını yönetir.",
    },
    {
      title: "WhatsApp’tan bildirir",
      text: "Rezervasyon detaylarını tanımlı işletme numarasına WhatsApp üzerinden iletir.",
    },
  ];

  const flow = [
    "Müşteri mesaj atar",
    "Pruva Asistan cevaplar",
    "Rezervasyon bilgisi alınır",
    "İşletmeye WhatsApp bildirimi gider",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="text-sm font-semibold text-sky-700">
            ← PruvaLabs
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/products" className="hover:text-slate-950">
              Ürünler
            </a>
            <a href="/assist" className="font-semibold text-sky-700 hover:text-sky-700">
              Pruva Asistan’e Geç
            </a>
          </nav>
        </header>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Pruva Asistan
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              İşletmeler için AI mesaj ve rezervasyon sistemi.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Pruva Asistan, sosyal medya ve WhatsApp mesajlarını işletme
              bilgilerine göre cevaplar. Rezervasyon isteyen müşterileri doğru
              akışa alır ve detayları işletmeye bildirir.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/assist"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Canlı Sisteme Geç
              </a>
              <a
                href="/assist/brand-login"
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-cyan-200 hover:text-sky-700"
              >
                Marka Girişi
              </a>
              <a
                href="/assist/admin-login"
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-cyan-200 hover:text-sky-700"
              >
                Admin Girişi
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <p className="text-sm text-slate-600">Basit akış</p>
            <div className="mt-5 space-y-3">
              {flow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.text}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-sky-700">Kimler için?</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Mesaj trafiği olan işletmeler
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Restoranlar, kafeler, hizmet işletmeleri ve sosyal medya üzerinden
              müşteri talebi alan markalar için uygundur.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-sky-700">Ne sağlar?</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Daha düzenli operasyon
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Müşteri mesajları, rezervasyon talepleri ve işletme bildirimleri
              tek sistemde takip edilebilir hale gelir.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-sky-700">Nasıl başlar?</p>
            <h2 className="mt-3 text-2xl font-semibold">
              İşletme bilgileri tanımlanır
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Çalışma saatleri, rezervasyon kuralları, adres, iletişim ve sık
              sorulan bilgiler sisteme girilir.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Pruva Asistan canlı sistemini inceleyin.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                Pilot marka, rezervasyon akışı, WhatsApp bildirimi ve operasyon
                paneli hazır.
              </p>
            </div>

            <a
              href="/assist"
              className="rounded-full bg-[#F6F8FB] px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Pruva Asistan’e Geç
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
