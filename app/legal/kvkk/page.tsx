const sections = [
  {
    title: "Hangi bilgiler alınır?",
    items: [
      "Müşteri adı",
      "Telefon numarası",
      "Mesaj içeriği",
      "Rezervasyon tarihi",
      "Rezervasyon saati",
      "Kişi sayısı",
      "Müşteri notu",
    ],
  },
  {
    title: "Neden alınır?",
    items: [
      "Müşteri mesajını cevaplamak",
      "Rezervasyon talebini oluşturmak",
      "İşletmeye bildirim göndermek",
      "Hizmet kalitesini artırmak",
      "Hata ve işlem kayıtlarını takip etmek",
    ],
  },
  {
    title: "Kim görür?",
    items: [
      "Yetkili PruvaLabs ekibi",
      "İlgili işletme yetkilisi",
      "Yetkili operasyon kullanıcısı",
    ],
  },
  {
    title: "Nasıl korunur?",
    items: [
      "Yetki kontrollü panel erişimi",
      "Sınırlı veri gösterimi",
      "Kayıtlı işlem geçmişi",
      "Güvenli API bağlantısı",
      "Canlı sistemde güvenli veritabanı",
    ],
  },
];

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
        <a href="/" className="text-sm font-semibold text-sky-700">
          ← PruvaLabs
        </a>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Veri Açıklaması
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            KVKK ve veri kullanımı.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Pruva Asistan, müşteri mesajlarını ve rezervasyon bilgilerini hizmet
            vermek için işler.
          </p>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>

              <div className="mt-5 space-y-3">
                {section.items.map((item) => (
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
          <h2 className="text-3xl font-semibold">Kısa açıklama</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Veriler yalnızca müşteri iletişimi, rezervasyon yönetimi ve işletme
            bildirimi için kullanılır. Gereksiz veri toplanmaz.
          </p>
        </section>
      </section>
    </main>
  );
}
