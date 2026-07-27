import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  {
    number: "01",
    title: "Soruyu anlar",
    text: "Niyeti, bağlamı ve konuşmanın yönünü birlikte değerlendirir.",
  },
  {
    number: "02",
    title: "Kanıtı bulur",
    text: "Yanıtı yüklenen belgeler ve güvenilir bilgi katmanlarıyla temellendirir.",
  },
  {
    number: "03",
    title: "Hafızayı korur",
    text: "Konuşmanın sürekliliğini bozmadan ilgili geçmişi kullanır.",
  },
  {
    number: "04",
    title: "Güvenle yanıtlar",
    text: "Politika ve doğrulama katmanlarından geçen açık cevaplar üretir.",
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
    <main className="min-h-screen overflow-x-hidden bg-[#F7F8FA] text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              PruvAI aktif geliştirmede
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              Yapay zekâ, sade bir deneyimle güçlü olmalı.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              PruvAI; PruvaLabs tarafından geliştirilen, kendi çekirdeği,
              hafızası, kanıt sistemi ve güvenlik katmanları bulunan yapay zekâ
              platformudur.
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
                Bizimle iletişime geç
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="pruvai-orb absolute -inset-10 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-violet-100 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/50 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                    P
                  </div>
                  <div>
                    <p className="font-bold">PruvAI</p>
                    <p className="text-xs text-slate-500">PruvaLabs AI</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Yerel çekirdek
                </span>
              </div>

              <div className="py-10 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-xl font-bold text-white">
                  P
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight">
                  Nasıl yardımcı olabilirim?
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Sorunuzu yazın, birlikte çözelim.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Bir belgeyi özetle",
                  "Fikrimi geliştirelim",
                  "Bir plan hazırla",
                  "Bilgiyi doğrula",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-300 bg-white p-3 shadow-sm">
                <span className="flex-1 text-sm text-slate-400">
                  PruvAI&apos;a mesaj gönder
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white">
                  ↑
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            PruvAI nasıl çalışır?
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Cevaptan önce bağlam, kanıt ve güven.
          </h2>
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
              Tek ürün, büyüyen yetenekler
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              PruvAI bir sohbet kutusundan fazlası.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Belgeyle çalışma, kalıcı konuşmalar, kaynak gösterimi ve güvenli
              yanıt üretimi aynı çekirdekte birleşir. Yeni araçlar bu temel
              üzerine kontrollü biçimde eklenir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Kalıcı konuşma hafızası",
              "Belge temelli yanıtlar",
              "Kaynak ve kanıt görünürlüğü",
              "Politika ve güvenlik kontrolleri",
              "Yerel model çalışma seçeneği",
              "Genişleyebilir araç mimarisi",
            ].map((item) => (
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

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              PruvaLabs
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Fikirleri çalışan dijital ürünlere dönüştürüyoruz.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              PruvAI&apos;ı geliştirirken edindiğimiz ürün, yazılım ve yapay zekâ
              deneyimini farklı dijital ürünlerde de kullanıyoruz.
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

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-sky-100 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                PruvAI&apos;ın gelişimini birlikte şekillendirelim.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Kullanım senaryonuzu, ihtiyacınızı veya iş birliği fikrinizi
                bize anlatın.
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
