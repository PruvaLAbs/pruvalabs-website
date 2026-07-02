export default function ProductsPage() {
  const productAreas = [
    {
      title: "Pruva Asistan",
      text: "Sosyal medya ve WhatsApp mesajlarını cevaplayan, uygun talepleri rezervasyona çeviren AI operasyon sistemi.",
      href: "/products/pruva-assist",
      cta: "Ürünü İncele",
      featured: true,
    },
    {
      title: "Mobil Ürünler",
      text: "App Store ve Google Play odaklı mobil uygulama ve oyun deneyimleri.",
      href: "/projects",
      cta: "Projeleri Gör",
      featured: false,
    },
    {
      title: "İş Sistemleri",
      text: "Ön muhasebe, yönetim paneli, kayıt, takip ve operasyon uygulamaları.",
      href: "/projects",
      cta: "Projeleri Gör",
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="text-sm font-semibold text-sky-700">
            ← Ana sayfa
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/products/pruva-assist" className="hover:text-slate-950">
              Pruva Asistan
            </a>
            <a href="/products/pruva-assist" className="font-semibold text-sky-700 hover:text-sky-700">
              AI Sisteme Geç
            </a>
          </nav>
        </header>

        <div className="py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Ürünler
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Çalışan dijital ürünler ve AI sistemleri.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            PruvaLabs; mobil ürünler, iş sistemleri ve AI destekli operasyon
            çözümleri geliştirir. Ana odak ürünümüz Pruva Asistan’tir.
          </p>
        </div>

        <section className="grid gap-5 lg:grid-cols-3">
          {productAreas.map((product) => (
            <a
              key={product.title}
              href={product.href}
              className={
                product.featured
                  ? "rounded-3xl border border-cyan-200/40 bg-sky-100 p-7 text-slate-950 shadow-2xl shadow-slate-200/70 transition hover:bg-sky-200"
                  : "rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-sky-300 hover:bg-white"
              }
            >
              <p
                className={
                  product.featured
                    ? "text-sm font-semibold uppercase tracking-[0.25em] text-slate-800/70"
                    : "text-sm font-semibold uppercase tracking-[0.25em] text-sky-700"
                }
              >
                {product.featured ? "Öne çıkan ürün" : "Ürün alanı"}
              </p>

              <h2 className="mt-4 text-3xl font-semibold">{product.title}</h2>

              <p
                className={
                  product.featured
                    ? "mt-4 leading-7 text-slate-700"
                    : "mt-4 leading-7 text-slate-600"
                }
              >
                {product.text}
              </p>

              <span
                className={
                  product.featured
                    ? "mt-8 inline-flex rounded-full bg-[#F6F8FB] px-5 py-3 text-sm font-semibold text-slate-950"
                    : "mt-8 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950"
                }
              >
                {product.cta} →
              </span>
            </a>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Pruva Asistan canlı sistemine geçin.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Marka girişi, admin girişi, operasyon paneli ve pilot marka
                ekranları tek merkezde.
              </p>
            </div>

            <a
              href="/products/pruva-assist"
              className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Pruva Asistan’a Geç
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
