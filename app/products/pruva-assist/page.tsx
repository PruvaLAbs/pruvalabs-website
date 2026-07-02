export default function PruvaAssistProductPage() {
  const features = [
    {
      title: "Mesaj anlama",
      text: "Müşteri ne istiyor, anlar.",
    },
    {
      title: "Doğru cevap",
      text: "İşletme bilgilerine göre cevap verir.",
    },
    {
      title: "Rezervasyon",
      text: "Gerekli bilgileri toplar.",
    },
    {
      title: "Bildirim",
      text: "İşletmeye haber verir.",
    },
  ];

  const flow = [
    "Müşteri yazar",
    "AI mesajı anlar",
    "Pruva Asistan cevap üretir",
    "Rezervasyon bilgisi toplanır",
    "İşletmeye bildirim gider",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_34%)]" />

        <header className="relative z-10 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="text-sm font-semibold text-sky-700">
            ← PruvaLabs.
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/products" className="hover:text-slate-950">
              Ürünler
            </a>
            <a href="/assist" className="font-semibold text-sky-700 hover:text-sky-800">
              Pruva Asistan
            </a>
          </nav>
        </header>

        <div className="relative z-10 grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Pruva Asistan
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              İşletmeler için Pruva Asistan ve rezervasyon sistemi.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Pruva Asistan; WhatsApp, Instagram DM ve benzeri kanallardan gelen
              müşteri mesajlarını anlar, işletme bilgilerine göre cevap üretir,
              rezervasyon bilgilerini toplar ve işletmeye operasyon bildirimi
              oluşturur.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/assist"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                İncele
              </a>
              <a
                href="mailto:pruvalabs@gmail.com?subject=Pruva%20Asistan%20Demo%20Talebi"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
              >
                Demo İste
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
            <p className="text-sm text-slate-500">AI çalışma akışı</p>
            <div className="mt-5 space-y-3">
              {flow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="relative z-10 grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-sky-200 hover:bg-sky-50"
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.text}
              </p>
            </div>
          ))}
        </section>

        <section className="relative z-10 mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-sky-700">Kimler için?</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Mesaj alan işletmeler
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Restoranlar, kafeler, hizmet işletmeleri ve sosyal medya üzerinden
              düzenli müşteri talebi alan markalar için uygundur.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-sky-700">Ne sağlar?</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Daha düzenli iş
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Müşteri cevapları, rezervasyon talepleri, bildirimler ve marka
              kayıtları tek sistemde takip edilebilir hale gelir.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-sky-700">Nasıl başlar?</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Bilgiler eklenir
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Çalışma saatleri, rezervasyon kuralları, adres, iletişim, sık
              sorular ve marka tonu sisteme eklenir.
            </p>
          </div>
        </section>

        <section className="relative z-10 mt-8 rounded-[2rem] border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Pruva Asistan, PruvaLabs AI ürünüdür.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                Müşteri mesajı, AI cevabı, rezervasyon ve işletme bildirimi aynı
                ürün akışında birleşir.
              </p>
            </div>

            <a
              href="/assist"
              className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Pruva Asistan’a Geç
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
