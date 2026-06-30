import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Web Sitesi",
    text: "Modern, hızlı ve profesyonel web siteleri.",
  },
  {
    title: "Mobil App",
    text: "App Store ve Google Play odaklı mobil ürünler.",
  },
  {
    title: "AI Otomasyon",
    text: "İşletmeler için AI destekli otomasyon akışları.",
  },
  {
    title: "Dashboard",
    text: "Operasyon, kayıt ve takip için sade yönetim panelleri.",
  },
  {
    title: "Oyun & MVP",
    text: "Fikirden çalışan ürüne hızlı prototip ve MVP geliştirme.",
  },
  {
    title: "Ürün Tasarımı",
    text: "Kullanıcı odaklı, temiz ve uygulanabilir ürün arayüzleri.",
  },
];

const projects = [
  {
    title: "Pruva Asistan",
    text: "İşletmeler için AI müşteri iletişimi ve rezervasyon sistemi.",
    href: "/products/pruva-assist",
  },
  {
    title: "Mobil Ürünler",
    text: "Yayınlanabilir mobil uygulama ve oyun deneyimleri.",
    href: "/projects",
  },
  {
    title: "Yönetim Panelleri",
    text: "İş süreçleri, kayıt, takip ve bildirim ekranları.",
    href: "/projects",
  },
];

const process = [
  {
    number: "01",
    title: "Planlama",
    text: "İhtiyacı netleştirir, ürün yapısını çıkarırız.",
  },
  {
    number: "02",
    title: "Tasarım",
    text: "Sade, anlaşılır ve kullanılabilir arayüz hazırlarız.",
  },
  {
    number: "03",
    title: "Geliştirme",
    text: "Next.js, backend, API ve panel yapısını kurarız.",
  },
  {
    number: "04",
    title: "Yayınlama",
    text: "Canlıya alma, test ve iyileştirme sürecini yönetiriz.",
  },
];

const blogPosts = [
  {
    title: "AI asistan işletmelerde ne işe yarar?",
    href: "/blog",
  },
  {
    title: "Özel yazılım mı, hazır sistem mi?",
    href: "/blog",
  },
  {
    title: "Modern web sitesi nasıl olmalı?",
    href: "/blog",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <SiteHeader />
      <img
        src="/pruvalabs-logo.png"
        alt=""
        className="pointer-events-none fixed left-1/2 top-1/2 z-0 hidden w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08] lg:block"
      />


      <section className="relative overflow-hidden bg-transparent">

        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-100/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-slate-100/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
              PruvaLabs.
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Teknoloji Laboratuvarı
            </h1>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:pruvalabs@gmail.com?subject=Projemi%20Anlatmak%20İstiyorum"
                className="rounded-full border border-slate-200 bg-[#F8FAFC]/30 px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                Projeni Anlat
              </a>
              <Link
                href="/products/pruva-assist"
                className="rounded-full border border-slate-200 bg-[#F8FAFC]/30 px-7 py-4 text-center text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 hover:shadow-xl hover:shadow-slate-200/70"
              >
                Pruva Asistan
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-[2rem] border border-slate-200 bg-[#F8FAFC]/35 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 sm:p-5">
            <div className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-[#F8FAFC]/30 p-5 text-slate-950 transition hover:bg-white sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
                Öne Çıkan Ürün
              </p>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Pruva Asistan</h2>
              <p className="mt-4 leading-7 text-slate-600">
                AI destekli müşteri cevaplama ve rezervasyon sistemi.
              </p>

              <div className="mt-7 grid gap-3">
                {["Müşteri yazar", "Asistan cevaplar", "İşletmeye bildirir"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-[#F8FAFC]/30 px-4 py-3 text-sm text-slate-700 transition hover:bg-white hover:shadow-sm hover:shadow-slate-200/60"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>

              <Link
                href="/products/pruva-assist"
                className="mt-7 inline-flex rounded-full bg-sky-100 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-200"
              >
                Ürünü İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
            Hakkımızda
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Fikirleri çalışan dijital ürünlere dönüştürüyoruz.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
          <p className="text-lg leading-8 text-slate-600">
            PruvaLabs; AI sistemleri, web uygulamaları, mobil ürünler ve yönetim
            panelleri geliştiren bir teknoloji laboratuvarıdır. Sade, kaliteli
            ve profesyonel ürünler üretmeye odaklanır.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-slate-950"
          >
            Hakkımızda
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
                Hizmetler
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Uzmanlık alanlarımız.
              </h2>
            </div>

            <Link href="/services" className="text-sm font-bold text-slate-950">
              Tüm hizmetler →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="rounded-[1.75rem] border border-slate-200 bg-[#F6F8FB] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-sky-700">
                  Daha Fazla →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/60 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-200">
                Pruva Asistan
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                AI destekli müşteri iletişimi.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Pruva Asistan; işletmelerin müşteri mesajlarını karşılamasına,
                rezervasyon bilgisi toplamasına ve işletmeye bildirim
                göndermesine yardımcı olur.
              </p>
            </div>

            <Link
              href="/products/pruva-assist"
              className="rounded-full bg-sky-100 px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-200"
            >
              Pruva Asistan’ı Gör
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
                Projeler
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Son çalışmalarımız.
              </h2>
            </div>

            <Link href="/projects" className="text-sm font-bold text-slate-950">
              Projeleri gör →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="rounded-[1.75rem] border border-slate-200 bg-[#F6F8FB] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
                Blog&Rehber
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Rehber içerikler.
              </h2>
            </div>

            <Link href="/blog" className="text-sm font-bold text-slate-950">
              Tüm yazılar →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="rounded-[1.75rem] border border-slate-200 bg-[#F6F8FB] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <h3 className="text-2xl font-bold">{post.title}</h3>
                <span className="mt-6 inline-flex text-sm font-bold text-sky-700">
                  Oku →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="rounded-[2rem] bg-cyan-100 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Geleceğe birlikte adım atalım.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Web, mobil, AI otomasyon veya dijital ürün fikriniz için
                PruvaLabs ile iletişime geçin.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-slate-800"
            >
              İletişim
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
