import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const cards = [
  {
    title: "Ürün odaklı geliştirme",
    text: "Fikir aşamasından çalışan ürüne kadar sade, anlaşılır ve uygulanabilir sistemler kurarız.",
  },
  {
    title: "Güçlü teknik altyapı",
    text: "Web, mobil, AI, panel ve backend tarafını birlikte düşünerek ürünün sağlam çalışmasına odaklanırız.",
  },
  {
    title: "Sade ve profesyonel yaklaşım",
    text: "Kullanıcıyı yormayan, anlaşılır ve uzun vadede geliştirilebilir dijital ürünler üretiriz.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
          Hakkımızda
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
          Fikirleri prototipe, prototipleri çalışan ürüne dönüştüren modern bir
          yazılım ve ürün laboratuvarıdır.
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
          PruvaLabs. web siteleri, kişisel/kurumsal bloglar, mobil uygulamalar,
          AI destekli araçlar, yönetim panelleri ve ölçeklenebilir ürün
          prototipleri geliştirir. Amacımız istediğiniz gibi görünen ama güçlü
          çalışan dijital ürünler üretmek.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70"
            >
              <h2 className="text-2xl font-bold tracking-tight">{card.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
