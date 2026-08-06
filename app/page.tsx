import type { Metadata } from "next";
import Link from "next/link";
import { PruvaLabsHeroVisual } from "@/components/pruvai-visuals";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "PruvaLabs | Teknoloji ve Dijital Ürün Laboratuvarı",
  description:
    "PruvaLabs; yapay zekâ, web, mobil, ürün tasarımı ve backend sistemleri geliştiren teknoloji laboratuvarıdır.",
  alternates: {
    canonical: "/",
  },
};

const expertise = [
  {
    title: "Yapay zekâ",
    text: "Ürünlere entegre edilen yapay zekâ sistemleri.",
  },
  {
    title: "Web ve mobil",
    text: "Hızlı, sade ve ölçeklenebilir dijital ürünler.",
  },
  {
    title: "Ürün tasarımı",
    text: "Kullanıcı odaklı arayüz ve deneyim tasarımı.",
  },
  {
    title: "Backend ve API",
    text: "Güvenilir servisler ve ürün altyapıları.",
  },
];

const products = [
  {
    title: "PruvAI",
    category: "Yapay zekâ platformu",
    text: "Dijital ürünlere API ile entegre edilen PruvaLabs yapay zekâ altyapısı.",
    href: "/pruvai",
  },
  {
    title: "Harbor Puzzle",
    category: "Mobil oyun",
    text: "iOS ve Android için geliştirilen liman temalı bulmaca deneyimi.",
    href: "/projects",
  },
  {
    title: "Word Hunt Journey",
    category: "Mobil oyun",
    text: "Çok dilli kelime bulmaca ve ilerleme deneyimi.",
    href: "/projects",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F7F8FA] text-slate-950">
      <SiteHeader />
      <img
        src="/pruvalabs-logo.png"
        alt=""
        aria-hidden="true"
        className="pruvalabs-watermark pointer-events-none fixed left-1/2 top-1/2 z-0 hidden w-[720px] opacity-[0.08] lg:block"
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              PruvaLabs teknoloji laboratuvarı
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Fikirleri güçlü dijital ürünlere dönüştürüyoruz.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Yapay zekâ, web, mobil ve backend sistemlerini tek yapıda geliştiriyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Projeleri incele
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-950"
              >
                Projenizi paylaşın
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <span>Yapay zekâ</span>
              <span>Web</span>
              <span>Mobil</span>
              <span>Ürün tasarımı</span>
              <span>Backend</span>
            </div>
          </div>

          <PruvaLabsHeroVisual />
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              Uzmanlık alanları
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Ürünün her katmanını birlikte geliştiriyoruz.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Strateji, tasarım ve mühendisliği tek ürün yaklaşımında buluşturuyoruz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="h-1.5 w-12 rounded-full bg-sky-500 transition group-hover:w-20" />
                <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
                Öne çıkan ürün
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                PruvAI
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Dijital ürünlere entegre edilen, ihtiyaca göre uyarlanan yapay zekâ altyapısı.
              </p>
              <Link
                href="/pruvai"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
              >
                PruvAI&apos;ı incele
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["API entegrasyonu", "Web, mobil ve kurumsal sistemlere bağlanır."],
                ["Ürüne özel", "Görevler ve davranışlar ihtiyaca göre yapılandırılır."],
                ["Kontrollü", "Yetki, politika ve izleme katmanlarıyla yönetilir."],
                ["Genişletilebilir", "Yeni veri kaynakları ve yeteneklerle büyür."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              Ürünler ve projeler
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Geliştirdiğimiz ürünler.
            </h2>
          </div>
          <Link href="/projects" className="text-sm font-bold text-sky-700">
            Tüm projeler →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
                {product.category}
              </p>
              <h3 className="mt-5 text-2xl font-bold">{product.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{product.text}</p>
              <span className="mt-8 inline-flex text-sm font-bold text-sky-700">
                İncele <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-sky-100 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Fikrinizi çalışan bir ürüne dönüştürelim.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Web, mobil, yapay zekâ veya özel yazılım projenizi paylaşın.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-slate-800"
            >
              İletişime geç
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
