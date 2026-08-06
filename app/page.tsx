import type { Metadata } from "next";
import Link from "next/link";
import {
  CapabilityIcon,
  PruvAIFlow,
  PruvAIHeroVisual,
} from "@/components/pruvai-visuals";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "PruvaLabs | Teknoloji ve Dijital Ürün Laboratuvarı",
  description:
    "PruvaLabs; yapay zekâ, web, mobil ve backend ürünleri geliştiren teknoloji laboratuvarıdır.",
  alternates: {
    canonical: "/",
  },
};

const capabilities = [
  {
    number: "01",
    icon: "api" as const,
    title: "API ile bağlanır",
    text: "Web, mobil ve kurumsal ürünlere entegre edilir.",
  },
  {
    number: "02",
    icon: "adapt" as const,
    title: "İhtiyaca uyarlanır",
    text: "Görevleri ve yanıtları ürüne göre yapılandırılır.",
  },
  {
    number: "03",
    icon: "control" as const,
    title: "Kontrollü çalışır",
    text: "Yetki, politika ve izleme katmanlarıyla yönetilir.",
  },
  {
    number: "04",
    icon: "expand" as const,
    title: "Ürünle büyür",
    text: "Yeni veri ve yeteneklerle genişletilebilir.",
  },
];

const services = [
  "Yapay zekâ ürünleri",
  "Web ve mobil uygulamalar",
  "Ürün tasarımı",
  "Backend ve API sistemleri",
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
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              PruvaLabs yapay zekâ teknolojisi
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              Yapay zekâyı ürünlerin gerçek bir parçasına dönüştürüyoruz.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              PruvAI, ürünlere API ile entegre edilen PruvaLabs yapay zekâ altyapısıdır.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pruvai"
                className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                PruvAI&apos;ı keşfet
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-950"
              >
                Entegrasyonu konuşalım
              </Link>
            </div>
          </div>

          <PruvAIHeroVisual />
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            PruvAI nasıl değer sağlar?
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Bir sohbet aracı değil, ürün altyapısı.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="pruvai-card group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/50"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-100">
                  <CapabilityIcon name={item.icon} />
                </span>
                <p className="text-sm font-bold text-sky-700">{item.number}</p>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative border-y border-slate-200 bg-white py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              Nasıl çalışır?
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Üründen kontrollü sonuca.
            </h2>
          </div>
          <div className="mt-10">
            <PruvAIFlow />
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
              PruvaLabs teknoloji laboratuvarı
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Fikirden çalışan ürüne.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Yapay zekâ, web ve mobil ürünleri tek yapıda geliştiriyoruz.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Web uygulamaları",
              "Mobil ürünler",
              "Yapay zekâ sistemleri",
              "Ürün tasarımı",
              "Backend ve API sistemleri",
              "Yönetim panelleri",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                <span className="mr-3 text-sky-300">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              PruvaLabs
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Uçtan uca ürün geliştirme.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Strateji, tasarım, yazılım ve yapay zekâ tek ekipte.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service}
                href="/services"
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <p className="text-xl font-bold">{service}</p>
                <span className="mt-8 inline-flex text-sm font-bold text-sky-700">
                  İncele <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-sky-100 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Ürününüzü yapay zekâyla güçlendirelim.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Projenizi ve entegrasyon ihtiyacınızı paylaşın.
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
