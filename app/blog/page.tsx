const featuredPosts = [
  {
    tag: "AI Rehberi",
    title: "AI asistan işletmelerde gerçekten ne işe yarar?",
    summary:
      "AI asistan, sadece otomatik cevap veren bir kutu değildir. Doğru kurulduğunda müşteri mesajlarını karşılar, sık sorulan soruları yanıtlar, rezervasyon gibi işleri düzene sokar ve işletmenin zamanını geri kazandırır.",
    readTime: "5 dk",
  },
  {
    tag: "Web Sitesi",
    title: "Modern bir web sitesi artık sadece güzel görünmek zorunda değil",
    summary:
      "Hızlı açılan, telefonda rahat kullanılan, sade anlatan ve ziyaretçiyi doğru yere götüren web siteleri daha güven verir. Tasarım kadar performans ve net akış da önemlidir.",
    readTime: "4 dk",
  },
  {
    tag: "Otomasyon",
    title: "Küçük işletmeler AI otomasyona nereden başlamalı?",
    summary:
      "İlk adım her işi otomatikleştirmek değildir. En çok tekrar eden mesajları, rezervasyon taleplerini, bilgi alma süreçlerini ve takip işlerini seçmek daha sağlıklı bir başlangıçtır.",
    readTime: "6 dk",
  },
];

const guidePosts = [
  {
    title: "Rezervasyon alan işletmeler için AI asistan mantığı",
    text:
      "Restoran, klinik, güzellik salonu veya randevulu çalışan bir işletme için en büyük sorun çoğu zaman mesaj trafiğidir. AI asistan bu trafiği düzenli hale getirebilir.",
  },
  {
    title: "Dashboard neden sadece grafik ekranı değildir?",
    text:
      "İyi bir dashboard, işletmenin karar almasını kolaylaştırır. Ne oldu, ne bekliyor, hangi müşteriyle ilgilenilmeli gibi sorulara hızlı cevap verir.",
  },
  {
    title: "MVP geliştirirken yapılan en büyük hata",
    text:
      "Ürünü ilk günden devasa yapmak yerine, fikrin çalışıp çalışmadığını gösterecek en sade versiyonla başlamak daha doğrudur.",
  },
  {
    title: "AI cevapları neden işletmeye özel bilgiyle çalışmalı?",
    text:
      "Genel cevap veren bir AI çoğu zaman yetersiz kalır. Saatler, fiyatlar, kurallar, lokasyon ve ton gibi bilgiler işletmeye özel tanımlanmalıdır.",
  },
  {
    title: "Web sitesi yaptırırken önce ne netleşmeli?",
    text:
      "Tasarım başlamadan önce hedef, kullanıcı, içerik yapısı ve istenen aksiyon netleşmelidir. İyi web sitesi önce iyi planla başlar.",
  },
  {
    title: "Sade tasarım neden daha profesyonel görünür?",
    text:
      "Az ama doğru metin, rahat boşluklar, okunabilir renkler ve net butonlar kullanıcıyı yormaz. Profesyonellik çoğu zaman fazlalıkları çıkarmaktır.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex items-center justify-between border-b border-slate-200 pb-6">
          <a href="/" className="text-sm font-semibold text-sky-700">
            ← Ana sayfa
          </a>
          <a href="/contact" className="text-sm font-semibold text-slate-600 hover:text-slate-950">
            İletişim
          </a>
        </header>

        <section className="py-16">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
            Blog&Rehber
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            İşletmeler için sade teknoloji rehberi.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            AI, web, mobil ürünler ve dijital operasyonlar hakkında anlaşılır,
            pratik ve güncel içerikler.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-bold text-sky-800">
                  {post.tag}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {post.readTime}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                {post.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {post.summary}
              </p>
            </article>
          ))}
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
                Rehberler
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Kısa, net ve işe yarar notlar.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {guidePosts.map((post) => (
              <article
                key={post.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <h3 className="text-2xl font-bold tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {post.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-sky-100 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Bir konuyu merak mı ediyorsunuz?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                AI asistan, web sitesi, mobil uygulama veya dijital ürün
                geliştirme hakkında bize yazın. Rehber içeriklerimizi gerçek
                ihtiyaçlara göre hazırlıyoruz.
              </p>
            </div>

            <a
              href="mailto:pruvalabs@gmail.com?subject=Blog%20ve%20Rehber%20Konu%20Önerisi"
              className="rounded-full bg-slate-900 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Konu Öner
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
