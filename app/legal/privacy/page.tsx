export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Toplanan Bilgiler",
      text: "Ürün ve hizmetlere bağlı olarak iletişim bilgileri, kullanım bilgileri, cihaz bilgileri ve performans verileri toplanabilir.",
    },
    {
      title: "2. Bilgilerin Kullanımı",
      text: "Bilgiler hizmetleri sunmak, performansı geliştirmek, hataları gidermek, güvenliği sağlamak ve destek vermek için kullanılabilir.",
    },
    {
      title: "3. Veri Paylaşımı",
      text: "PruvaLabs. kullanıcı verilerini satmaz. Gerekli durumlarda teknik hizmet sağlayıcıları veya yasal mercilerle sınırlı paylaşım yapılabilir.",
    },
    {
      title: "4. Veri Saklama",
      text: "Veriler gerekli süre boyunca saklanır; gereklilik ortadan kalktığında silinir, anonimleştirilir veya güvenli şekilde imha edilir.",
    },
    {
      title: "5. İletişim",
      text: "Gizlilik Politikası ile ilgili sorularınız için pruvalabs@gmail.com adresinden bize ulaşabilirsiniz.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-10">
        <a href="/" className="text-sm font-semibold text-sky-700">
          ← Ana sayfa
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
          www.pruvalabs.com
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Gizlilik Politikası
        </h1>

        <p className="mt-4 text-sm text-slate-600">
          Son güncelleme: 27 Nisan 2026
        </p>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          PruvaLabs. geliştirdiği web siteleri, mobil uygulamalar ve diğer
          dijital ürünler kapsamında kullanıcı gizliliğine önem verir.
        </p>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.text}</p>
            
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
          ))}
        </div>
      </section>
    </main>
  );
}
