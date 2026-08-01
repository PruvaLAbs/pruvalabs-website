import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "PruvAI | Entegre Edilebilir Yapay Zekâ Teknolojisi",
  description:
    "PruvAI, PruvaLabs tarafından geliştirilen; dijital ürünlere entegre edilebilen, kanıt, hafıza ve güvenlik katmanlarıyla çalışan yapay zekâ platformudur.",
  alternates: {
    canonical: "/pruvai",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PruvAI | PruvaLabs Yapay Zekâ Platformu",
    description:
      "PruvAI; kanıt, hafıza ve güvenlik katmanlarıyla geliştirilen PruvaLabs yapay zekâ platformudur.",
    url: "/pruvai",
  },
};

const pruvaiJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "PruvAI | PruvaLabs Yapay Zekâ Platformu",
  url: "https://www.pruvalabs.com/pruvai",
  dateModified: "2026-08-01",
  inLanguage: "tr-TR",
  description:
    "PruvAI, PruvaLabs tarafından geliştirilen; kanıt, hafıza ve güvenlik katmanlarıyla yanıt üreten çok amaçlı yapay zekâ platformudur.",
  about: {
    "@type": "SoftwareApplication",
    name: "PruvAI",
    applicationCategory: "Artificial intelligence platform",
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: "PruvaLabs",
      url: "https://www.pruvalabs.com",
    },
  },
};

const capabilities = [
  {
    number: "01",
    title: "API ile kullanılabilir",
    text: "Web, mobil ve kurumsal yazılım altyapılarına güvenli servis katmanları üzerinden bağlanabilir.",
  },
  {
    number: "02",
    title: "Ürüne göre uyarlanabilir",
    text: "Davranış, görev, veri erişimi ve yanıt biçimleri kullanım senaryosuna göre yapılandırılabilir.",
  },
  {
    number: "03",
    title: "Kontrollü çalışır",
    text: "Yetkilendirme, politika, insan onayı, izleme ve hata yönetimi ürün akışının parçası olarak ele alınır.",
  },
  {
    number: "04",
    title: "Genişleyebilir",
    text: "Yeni veri kaynakları, araçlar ve sektörel yetenekler aynı yapıya kontrollü biçimde eklenebilir.",
  },
];

const useCases = [
  "Dijital ürün ve kullanıcı asistanları",
  "Kurumsal bilgi ve belge sistemleri",
  "Analiz, özetleme ve raporlama",
  "İçerik üretimi ve iş akışı otomasyonu",
  "E-ticaret ve müşteri deneyimi çözümleri",
  "Sektöre özel yapay zekâ uygulamaları",
];

const integrationSteps = [
  {
    title: "Kullanım alanı",
    text: "Yapay zekânın ürün içerisinde üstleneceği görev ve sağlayacağı değer belirlenir.",
  },
  {
    title: "Sistem analizi",
    text: "Mevcut altyapı, veri kaynakları, güvenlik gereksinimleri ve bağlantı noktaları incelenir.",
  },
  {
    title: "Yapılandırma",
    text: "PruvAI davranışları, görev sınırları, yanıt biçimleri ve kontrol kuralları projeye uyarlanır.",
  },
  {
    title: "Entegrasyon",
    text: "API veya projeye uygun bağlantı yöntemiyle sistem ürüne dahil edilir ve izlenir.",
  },
];

export default function PruvAIPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F8FA] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pruvaiJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-100 via-cyan-50 to-violet-100 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
              PruvaLabs yapay zekâ teknolojisi
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-[-0.05em] sm:text-7xl">
              PruvAI
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              PruvaLabs tarafından geliştirilen; API üzerinden kullanılabilen,
              mevcut sistemlere entegre edilebilen ve farklı kullanım alanlarına
              göre özelleştirilebilen yapay zekâ modeli ve altyapısı.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Entegrasyon hakkında görüşelim
              </Link>
              <a
                href="#yetenekler"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-950"
              >
                Teknolojiyi inceleyin
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="pruvai-orb absolute -inset-10 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-violet-100 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/50 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                    P
                  </div>
                  <div>
                    <p className="text-lg font-bold">PruvAI</p>
                    <p className="text-xs text-slate-500">AI Integration Layer</p>
                  </div>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  PruvaLabs
                </span>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  ["Web platformu", "API bağlantısı"],
                  ["Mobil uygulama", "Özel asistan"],
                  ["Kurumsal sistem", "Veri ve raporlama"],
                ].map(([product, capability]) => (
                  <div
                    key={product}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <span className="font-semibold text-slate-800">{product}</span>
                    <span className="text-sm text-sky-700">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
                  Tek çekirdek
                </p>
                <p className="mt-3 leading-7 text-slate-200">
                  Farklı ürünlere, farklı görevlere ve farklı veri yapılarına
                  uyarlanabilen yönetilebilir yapay zekâ altyapısı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="yetenekler" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            Ürün altyapısı
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Bir sohbet ekranından daha fazlası.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            PruvAI, ayrı bir uygulamayla sınırlı değildir. Yapay zekâyı web
            platformlarının, mobil uygulamaların ve kurumsal yazılımların doğal
            bir parçasına dönüştürmek için geliştirilmiştir.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/50"
            >
              <p className="text-sm font-bold text-sky-700">{item.number}</p>
              <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
              Kullanım alanları
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Her ürüne aynı yapay zekâyı eklemiyoruz.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Model davranışları, veri kaynakları, erişim izinleri, görevler ve
              yanıt biçimleri projenin ihtiyacına göre yapılandırılır.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-slate-200"
              >
                <span className="mr-3 text-sky-300">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-sky-100 bg-sky-50/70 p-7 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            Resmî bilgi ve güven notu
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            PruvAI nedir?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            PruvAI, PruvaLabs tarafından geliştirilen çok amaçlı yapay zekâ
            platformudur. Yanıt üretirken uygun olduğunda kanıt ve belge
            bağlamını görünür kılmayı; belirsizlik, kaynak yetersizliği veya
            erişilemeyen bilgi durumlarında ise bunları açıkça belirtmeyi hedefler.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Kaynak", "Desteklenen yanıtlarda dayanağı görünür kılar."],
              ["Sınır", "Yeterli kanıt yoksa kesinlik iddia etmez."],
              ["Durum", "Genel kullanıma henüz açılmamıştır."],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-sky-100 bg-white p-5"
              >
                <h3 className="font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm text-slate-500">
            Son güncelleme: 1 Ağustos 2026 · Bu sayfa PruvAI için PruvaLabs
            resmî ürün bilgisidir.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              Entegrasyon yaklaşımı
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Mevcut sisteminizi değiştirmeden yapay zekâ yetenekleri kazandırın.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Yapay zekânın ürün içerisindeki görevi, teknik altyapısı ve güvenli
              çalışma sınırları birlikte belirlenir. Entegrasyon, ürünün mevcut
              deneyimini koruyacak şekilde planlanır.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {integrationSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/50"
              >
                <p className="text-sm font-bold text-sky-700">0{index + 1}</p>
                <h3 className="mt-7 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-sky-100 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
                PruvaLabs AI
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Ürününüz için yapay zekâ altyapısı geliştirelim.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Kullanım senaryonuzu paylaşın; PruvAI&apos;ın ürününüze nasıl
                entegre edilebileceğini birlikte değerlendirelim.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Projenizi paylaşın
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
