import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  {
    number: "01",
    title: "API ile bağlanır",
    text: "Web, mobil ve kurumsal ürünlere güvenli servis katmanları üzerinden entegre edilir.",
  },
  {
    number: "02",
    title: "İhtiyaca uyarlanır",
    text: "Görevleri, veri kaynakları ve yanıt biçimleri kullanım senaryosuna göre yapılandırılır.",
  },
  {
    number: "03",
    title: "Kontrollü çalışır",
    text: "Yetkilendirme, politika, izleme ve insan onayı katmanlarıyla yönetilir.",
  },
  {
    number: "04",
    title: "Ürünle büyür",
    text: "Yeni araçlar, veri kaynakları ve sektörel yetenekler kontrollü biçimde eklenebilir.",
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
    <main className="brand-watermark-shell min-h-screen overflow-x-hidden bg-[#F7F8FA] text-slate-950">
      <SiteHeader />
      <Image
        src="/pruvalabs-logo.png"
        alt=""
        aria-hidden="true"
        width={788}
        height={694}
        className="brand-watermark"
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              PruvaLabs yapay zekâ teknolojisi
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              Yapay zekâyı dijital ürünlerin gerçek bir parçasına dönüştürüyoruz.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              PruvAI; PruvaLabs tarafından geliştirilen, API üzerinden
              kullanılabilen ve farklı ürünlere entegre edilebilen yapay zekâ
              modeli ve altyapısıdır.
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
                Entegrasyon hakkında konuşalım
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
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  Entegre edilebilir
                </span>
              </div>

              <div className="py-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-700">
                  Tek yapay zekâ çekirdeği
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Farklı ürünlere, farklı görevlere uyarlanabilir.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  PruvAI; kullanıcı asistanı, kurumsal bilgi sistemi, analiz,
                  raporlama ve otomasyon senaryolarında ürünün kendi deneyimi
                  içinde çalışabilir.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Web platformları",
                  "iOS ve Android",
                  "Kurumsal yazılımlar",
                  "Özel API sistemleri",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600"
                  >
                    <span className="mr-2 text-sky-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-950 p-4 text-white">
                <span className="text-sm font-semibold">API · Entegrasyon · Özelleştirme</span>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
            PruvAI nasıl değer sağlar?
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Hazır bir sohbet aracı değil, ürün altyapısı.
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
              Bir modelden daha fazlası
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              PruvAI, yönetilebilir bir yapay zekâ sistemi olarak geliştirildi.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Karar, kanıt, hafıza, güvenlik ve entegrasyon katmanları aynı
              altyapıda birleşir. Böylece yapay zekâ, ürünün kurallarına ve
              operasyonlarına uyum sağlayabilir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "API tabanlı kullanım",
              "Ürüne özel davranışlar",
              "Belge ve veri entegrasyonu",
              "Politika ve erişim kontrolleri",
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
              Yapay zekâ modeli ve altyapısı geliştirme yetkinliğimizi; web,
              mobil, ürün tasarımı ve backend mühendisliği deneyimimizle bir
              araya getiriyoruz.
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
                Ürününüz için yapay zekâ altyapısı geliştirelim.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Kullanım senaryonuzu ve entegrasyon ihtiyacınızı bize anlatın.
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
