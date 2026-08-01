import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Ürünler",
  description: "PruvaLabs ürünleri ve ana yapay zekâ platformu PruvAI.",
  alternates: {
    canonical: "/products",
  },
};

const productAreas = [
  {
    title: "PruvAI",
    label: "Ana ürün",
    text: "Kanıt, hafıza ve güvenlik katmanlarıyla geliştirilen çok amaçlı yapay zekâ platformu.",
    href: "/pruvai",
  },
  {
    title: "Mobil ürünler",
    label: "iOS ve Android",
    text: "Sade deneyim, güçlü performans ve yayınlanabilir ürün kalitesine odaklanan uygulamalar.",
    href: "/projects",
  },
  {
    title: "İş sistemleri",
    label: "Web ve operasyon",
    text: "İş akışlarını sadeleştiren yönetim, takip ve karar destek uygulamaları.",
    href: "/projects",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-950">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
          Ürünler
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Kalıcı teknoloji üzerine kurulan sade ürünler.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          Ana odağımız PruvAI. Mobil ve web ürünlerimizi de aynı yalınlık,
          güvenilirlik ve sürdürülebilir geliştirme yaklaşımıyla üretiyoruz.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {productAreas.map((product, index) => (
            <Link
              key={product.title}
              href={product.href}
              className={
                index === 0
                  ? "group rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/50 transition hover:-translate-y-1"
                  : "group rounded-[2rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/50"
              }
            >
              <p
                className={
                  index === 0
                    ? "text-sm font-bold uppercase tracking-[0.25em] text-sky-300"
                    : "text-sm font-bold uppercase tracking-[0.25em] text-sky-700"
                }
              >
                {product.label}
              </p>
              <h2 className="mt-6 text-3xl font-bold">{product.title}</h2>
              <p
                className={
                  index === 0
                    ? "mt-4 leading-7 text-slate-300"
                    : "mt-4 leading-7 text-slate-600"
                }
              >
                {product.text}
              </p>
              <span className="mt-10 inline-flex text-sm font-bold">
                İncele <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-sky-100 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                PruvAI&apos;ın temelini keşfedin.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Bugün çalışan yetenekleri ve genel kullanıma giden geliştirme
                yolunu tek sayfada görün.
              </p>
            </div>
            <Link
              href="/pruvai"
              className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white"
            >
              PruvAI&apos;a git
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
