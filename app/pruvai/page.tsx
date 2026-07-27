import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "PruvAI",
  description:
    "PruvAI'ın çekirdeğini, yeteneklerini ve gelişim yaklaşımını keşfedin.",
  alternates: {
    canonical: "/pruvai",
  },
};

const layers = [
  {
    title: "Intelligence Core",
    text: "Soruyu parçalayan, doğru çalışma yolunu seçen ve yanıtı oluşturan ana karar katmanı.",
  },
  {
    title: "Evidence",
    text: "Belge ve kaynaklardan ilgili kanıtları bularak cevapların dayanağını görünür kılar.",
  },
  {
    title: "Memory",
    text: "Konuşma geçmişini kalıcı ve kontrollü biçimde kullanarak süreklilik sağlar.",
  },
  {
    title: "Policy",
    text: "Güvenlik, kapsam ve davranış kurallarını yanıt üretiminin doğal bir parçası yapar.",
  },
];

const today = [
  "Gerçek yerel model ile çalışabilen ürün runtime'ı",
  "Kalıcı konuşmalar ve mesaj geçmişi",
  "Belge yükleme, indeksleme ve kaynaklı yanıt",
  "Kanıt ve güvenlik kontrolleri",
];

const next = [
  "Genel kullanıma uygun hesap ve çalışma alanı yapısı",
  "Dosya ve araç deneyiminin genişletilmesi",
  "Üretim gözlemi, kota ve yönetim kontrolleri",
  "Web ile ürün uygulamasının güvenli bağlantısı",
];

export default function PruvAIPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F8FA] text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute left-1/2 top-12 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-100 via-cyan-50 to-violet-100 blur-3xl" />
        <div className="relative mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-[1.4rem] bg-slate-950 text-2xl font-bold text-white shadow-xl">
            P
          </div>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
            PruvaLabs yapay zekâsı
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-[-0.05em] sm:text-7xl">
            PruvAI
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Soruyu anlayan, doğru kanıtı bulan, konuşmayı hatırlayan ve güvenli
            biçimde yanıtlayan çok amaçlı yapay zekâ.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:pruvalabs@gmail.com?subject=PruvAI%20Erken%20Erişim"
              className="rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Erken erişim için yaz
            </a>
            <Link
              href="/projects"
              className="rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-950"
            >
              Geliştirme yaklaşımı
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            PruvAI henüz genel kullanıma açılmamıştır.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-px bg-slate-200 sm:grid-cols-3">
          {[
            ["Durum", "Aktif geliştirme"],
            ["Çalışma", "Yerel model destekli"],
            ["Yaklaşım", "Kanıt ve güven odaklı"],
          ].map(([label, value]) => (
            <div key={label} className="bg-white px-6 py-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                {label}
              </p>
              <p className="mt-3 text-lg font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              Çekirdek mimari
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Her yanıt dört temel katmandan geçer.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              PruvAI&apos;ın kalıcı değeri yalnızca kullandığı modelde değil;
              modelin etrafındaki karar, kanıt, hafıza ve güvenlik sistemindedir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {layers.map((layer, index) => (
              <article
                key={layer.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/50"
              >
                <p className="text-sm font-bold text-sky-700">
                  0{index + 1}
                </p>
                <h3 className="mt-7 text-2xl font-bold">{layer.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
                Bugün hazır
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight">
                Çekirdek ve yerel ürün temeli.
              </h2>
              <div className="mt-8 grid gap-3">
                {today.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                  >
                    <span className="mr-3 text-emerald-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
                Sıradaki aşama
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight">
                Güvenli genel kullanım.
              </h2>
              <div className="mt-8 grid gap-3">
                {next.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                  >
                    <span className="mr-3 text-sky-300">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
          Basit kullanım, derin teknoloji
        </p>
        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Hedefimiz: aç, sor ve işini tamamla.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Karmaşık yetenekler arka planda çalışırken kullanıcı yalnızca doğal
          biçimde neye ihtiyacı olduğunu anlatır. PruvAI doğru akışı seçer.
        </p>
        <a
          href="mailto:pruvalabs@gmail.com?subject=PruvAI%20Hakkında"
          className="mt-9 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          PruvAI hakkında konuşalım
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
