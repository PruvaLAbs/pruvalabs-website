import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "PruvaLabs web sitesi ve PruvAI ürünleri için kullanım koşulları bilgisi.",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-950">
      <SiteHeader />
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
          PruvaLabs · PruvAI
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Kullanım Koşulları
        </h1>
        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-8">
          <p className="leading-8 text-slate-600">
            PruvaLabs web sitesi ve ürünleri için kullanım koşulları bu alanda
            yayınlanır. PruvAI henüz genel kullanıma açık değildir; erken erişim,
            pilot ve ticari kullanım koşulları ilgili erişim aşamasında ayrıca
            sunulacaktır.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
