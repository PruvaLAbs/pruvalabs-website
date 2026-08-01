import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "KVKK ve Veri Yaklaşımı",
  description:
    "PruvaLabs ve PruvAI'ın veri minimizasyonu, şeffaflık ve kullanıcı kontrolü yaklaşımı.",
  alternates: {
    canonical: "/legal/kvkk",
  },
};

const principles = [
  {
    title: "Amaçla sınırlı veri",
    text: "Yalnızca sunulan ürün veya hizmet için gerekli bilgiler işlenir.",
  },
  {
    title: "Şeffaflık",
    text: "PruvAI genel kullanıma açılmadan önce veri türleri, amaçları ve saklama süreleri açıkça belirtilir.",
  },
  {
    title: "Kullanıcı kontrolü",
    text: "Hesap, konuşma ve dosya verileri için erişim ve silme yolları ürün deneyimine eklenir.",
  },
  {
    title: "Güvenli işleme",
    text: "Erişim kontrolleri, kayıtlar ve gerekli teknik önlemler ürün katmanlarında uygulanır.",
  },
];

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-950">
      <SiteHeader />
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
          Veri açıklaması
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          KVKK ve veri yaklaşımı.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          PruvAI&apos;ı geliştirirken veri minimizasyonu, açıklanabilirlik ve
          kullanıcı kontrolünü ürünün temel gereksinimleri olarak ele alıyoruz.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7"
            >
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-sky-100 p-7">
          <p className="leading-7 text-slate-700">
            PruvAI henüz genel kullanıma açık değildir. Ürün açılmadan önce
            aydınlatma metni ve hizmete özel veri politikaları bu sayfada
            yayınlanacaktır.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
