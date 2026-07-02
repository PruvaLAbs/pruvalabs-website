export default function ContactPage() {
  const contactItems = [
    {
      label: "E-posta",
      value: "pruvalabs@gmail.com",
      href: "mailto:pruvalabs@gmail.com",
    },
    {
      label: "Instagram",
      value: "PruvaLabs",
      href: "https://www.instagram.com/pruvalabs",
    },
    {
      label: "Twitter",
      value: "PruvaLabs",
      href: "https://twitter.com/pruvalabs",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-10">
        <a href="/" className="text-sm font-semibold text-sky-700">
          ← Ana sayfa
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
          İletişim
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          PruvaLabs ile iletişime geçin.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Pruva Asistan, AI sistemleri, ürün geliştirme ve iş birlikleri için
          bize ulaşabilirsiniz.
        </p>

        <div className="mt-10 grid gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 hover:bg-white"
            >
              <p className="text-sm text-slate-600">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
            </a>
          ))}
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
    </main>
  );
}
