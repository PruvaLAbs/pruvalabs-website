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
      <SiteHeader />
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
          İletişim
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          PruvaLabs ile iletişime geçin.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          PruvAI, yapay zekâ sistemleri, ürün geliştirme ve iş birlikleri için
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
          <h2 className="text-2xl font-semibold">Gizlilik ve veri</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            PruvAI genel kullanıma açılmadan önce veri işleme kapsamı ve kullanıcı
            kontrolleri açık biçimde yayınlanacaktır.
          </p>
          <div className="mt-4">
            <Link
              href="/legal/kvkk"
              className="text-sm font-semibold text-sky-700 hover:text-sky-800"
            >
              KVKK / Veri Açıklaması
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
