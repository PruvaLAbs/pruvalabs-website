import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "PruvaLabs ile PruvAI, yapay zekâ sistemleri, ürün geliştirme ve iş birlikleri hakkında iletişime geçin.",
  alternates: {
    canonical: "/contact",
  },
};

const contactItems = [
  {
    label: "E-posta",
    value: "pruvalabs@gmail.com",
    action: "E-posta gönder",
    href: "mailto:pruvalabs@gmail.com",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@pruvalabs",
    action: "Profili aç",
    href: "https://www.instagram.com/pruvalabs",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    value: "@pruvalabs",
    action: "Profili aç",
    href: "https://twitter.com/pruvalabs",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-6 w-6">
        <path d="M5 4h4.2L19 20h-4.2L5 4Z" />
        <path d="M5 20 19 4" />
      </svg>
    ),
  },
];

const contactAreas = [
  "PruvAI ve yapay zekâ entegrasyonları",
  "Web ve mobil ürünler",
  "Backend ve API sistemleri",
  "Ürün ve teknoloji iş birlikleri",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
              İletişim
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
              PruvaLabs ile iletişime geçin.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              PruvAI, yapay zekâ sistemleri, ürün geliştirme ve iş birlikleri için bize ulaşabilirsiniz.
            </p>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-7 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
                Hangi konularda konuşabiliriz?
              </p>
              <div className="mt-6 grid gap-3">
                {contactAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                    <span className="font-semibold leading-7">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60 sm:p-7">
            <div className="border-b border-slate-100 pb-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
                Doğrudan iletişim
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Size uygun kanalı seçin.
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Size uygun kanaldan PruvaLabs ekibine doğrudan ulaşın.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer noopener" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-100">
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-slate-500">{item.label}</span>
                    <span className="mt-1 block truncate text-lg font-bold text-slate-950 sm:text-xl">{item.value}</span>
                  </span>
                  <span className="hidden text-sm font-bold text-sky-700 sm:inline-flex">
                    {item.action} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:py-16">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
              Gizlilik ve veri
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              İletişim ve veri yaklaşımımızı inceleyin.
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              PruvAI genel kullanıma açılmadan önce veri işleme kapsamı ve kullanıcı kontrolleri açık biçimde yayınlanacaktır.
            </p>
          </div>
          <Link
            href="/legal/kvkk"
            className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            KVKK / Veri Açıklaması
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
