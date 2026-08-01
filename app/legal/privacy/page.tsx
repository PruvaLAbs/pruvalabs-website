import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "PruvaLabs ürünleri ve PruvAI için gizlilik, veri işleme ve kullanıcı kontrolü yaklaşımı.",
  alternates: {
    canonical: "/legal/privacy",
  },
};

const sections = [
  {
    title: "1. Toplanan bilgiler",
    text: "Kullanılan ürün veya hizmete göre iletişim, hesap, kullanım, cihaz ve performans bilgileri toplanabilir. PruvAI genel kullanıma açıldığında ürünün işlediği veri türleri ayrıca açıklanacaktır.",
  },
  {
    title: "2. Bilgilerin kullanımı",
    text: "Bilgiler hizmeti sunmak, güvenliği sağlamak, performansı geliştirmek, hataları gidermek ve destek vermek amacıyla kullanılabilir.",
  },
  {
    title: "3. Yapay zekâ verileri",
    text: "PruvAI ile paylaşılan konuşma ve dosyaların saklanma, silinme ve model geliştirmede kullanılma koşulları ürün açılmadan önce kullanıcıya açıkça sunulacaktır.",
  },
  {
    title: "4. Veri paylaşımı ve saklama",
    text: "PruvaLabs kullanıcı verilerini satmaz. Gerekli teknik sağlayıcılarla yalnızca hizmet için gereken ölçüde paylaşım yapılabilir; veriler ihtiyaç süresi sonunda silinir veya anonimleştirilir.",
  },
  {
    title: "5. İletişim",
    text: "Gizlilik ile ilgili sorularınız için pruvalabs@gmail.com adresinden bize ulaşabilirsiniz.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-950">
      <SiteHeader />
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
          PruvaLabs · PruvAI
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Gizlilik Politikası
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Son güncelleme: 27 Temmuz 2026
        </p>
        <p className="mt-8 text-lg leading-8 text-slate-600">
          PruvaLabs, geliştirdiği dijital ürünlerde ve PruvAI&apos;da kullanıcı
          gizliliğini ürün tasarımının temel bir parçası olarak ele alır.
        </p>

        <div className="mt-10 space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-7"
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{section.text}</p>
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
