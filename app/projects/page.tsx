export default function ProjectsPage() {
  const projects = [
    {
      title: "Pruva Assist",
      category: "AI operasyon sistemi",
      text: "Sosyal medya ve WhatsApp mesajlarını cevaplayan, uygun talepleri rezervasyona çeviren AI asistan sistemi.",
      href: "/products/pruva-assist",
      status: "Canlı pilot",
    },
    {
      title: "Mobil oyun ürünleri",
      category: "App Store / Google Play",
      text: "Farklı cihazlarda akıcı çalışması hedeflenen, hafıza dostu mobil oyun ve bulmaca deneyimleri.",
      href: "/products",
      status: "Yayında ürünler",
    },
    {
      title: "Kelime ve bulmaca sistemleri",
      category: "Çoklu dil yapıları",
      text: "Çoklu dil havuzları, görev yapıları, ilerleme sistemleri ve zihinsel egzersiz odaklı mobil deneyimler.",
      href: "/products",
      status: "Geliştirildi",
    },
    {
      title: "İş uygulamaları",
      category: "Operasyon ve takip",
      text: "Ön muhasebe, kayıt, takip, raporlama ve yönetim ekranları üzerine geliştirilen iş sistemleri.",
      href: "/products",
      status: "Geliştirildi",
    },
    {
      title: "Yönetim panelleri",
      category: "Admin / dashboard",
      text: "Marka, operasyon, rezervasyon, bildirim ve kullanıcı hareketlerini yönetmeye yönelik panel yapıları.",
      href: "/assist/admin",
      status: "Aktif geliştirme",
    },
    {
      title: "Backend ve entegrasyonlar",
      category: "API / cloud",
      text: "Firebase, Supabase, Appwrite, API servisleri, veritabanı ve bildirim akışlarıyla çalışan altyapılar.",
      href: "/about",
      status: "Teknik altyapı",
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
            <a href="/products" className="hover:text-slate-950">
              Ürünler
            </a>
            <a href="/products/pruva-assist" className="font-semibold text-sky-700 hover:text-sky-700">
              Pruva Assist
            </a>
          </nav>
        </header>

        <div className="py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Projeler
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Fikirden çalışan ürüne uzanan üretim.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            PruvaLabs; mobil ürünler, iş sistemleri, yönetim panelleri ve AI
            destekli operasyon yapıları geliştirir.
          </p>
        </div>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 hover:bg-white"
            >
              <p className="text-sm font-semibold text-sky-700">
                {project.category}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {project.text}
              </p>
              <span className="mt-6 inline-flex rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                {project.status}
              </span>
            </a>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Ana odak: Pruva Assist.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                Sosyal medya mesajlarını cevaplayan, rezervasyonları yöneten ve
                işletmeye WhatsApp’tan bildiren AI operasyon sistemi.
              </p>
            </div>

            <a
              href="/products/pruva-assist"
              className="rounded-full bg-[#F6F8FB] px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Pruva Assist’e Geç
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
