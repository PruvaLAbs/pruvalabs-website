import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Web Sitesi",
    text:
      "Markanızı sade, hızlı ve güven veren bir web sitesiyle anlatırız. Gereksiz kalabalık yerine net akış, okunabilir içerik ve güçlü bir ilk izlenim kurarız.",
  },
  {
    title: "Mobil App",
    text:
      "iOS ve Android tarafında kullanılabilir, temiz ve yayınlanabilir mobil uygulamalar geliştiririz. Fikirden mağaza sürecine kadar ürünü adım adım hazırlarız.",
  },
  {
    title: "AI Otomasyon",
    text:
      "Tekrar eden işleri azaltan, müşteri mesajlarını düzenleyen ve operasyonu hızlandıran AI destekli akışlar kurarız. Amaç teknolojiyi karmaşıklaştırmak değil, işi kolaylaştırmaktır.",
  },
  {
    title: "Dashboard",
    text:
      "İşletmenin ne olduğunu, ne beklediğini ve neye müdahale etmesi gerektiğini tek ekrandan görmesini sağlayan yönetim panelleri tasarlarız.",
  },
  {
    title: "Oyun & MVP",
    text:
      "Bir fikrin çalışıp çalışmadığını görmek için en sade ve doğru ilk versiyonu geliştiririz. Gereksiz özelliklerle vakit kaybetmeden ürünü test edilebilir hale getiririz.",
  },
  {
    title: "Ürün Tasarımı",
    text:
      "Kullanıcının yorulmadan anlayacağı, sade ve uygulanabilir arayüzler hazırlarız. Tasarımda gösterişten çok akışa, okunabilirliğe ve güven hissine odaklanırız.",
  },
  {
    title: "Backend & API",
    text:
      "Web, mobil ve AI sistemlerinin arkasında çalışan güvenilir altyapıları kurarız. Veri, kullanıcı, bildirim ve entegrasyon süreçlerini düzenli hale getiririz.",
  },
  {
    title: "Bakım ve Geliştirme",
    text:
      "Yayına alınan ürünlerin zamanla gelişmesi gerekir. Hataları giderir, yeni ihtiyaçları ekler ve ürünü canlı kullanımda güçlendirmeye devam ederiz.",
  },
];

const principles = [
  "Hızlı Geliştirme",
  "Temiz Arayüz",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
              Hizmetler
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
              İhtiyaca göre dijital çözümler
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Her projeye aynı kalıpla yaklaşmıyoruz. Önce ihtiyacı netleştiriyor,
            sonra web, mobil, AI, panel veya altyapı tarafında en doğru çözümü
            kuruyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <div
              key={item}
              className="rounded-full border border-slate-200 bg-white px-5 py-4 text-center text-sm font-bold text-slate-700 shadow-sm shadow-slate-200/60"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
              >
                <h2 className="text-3xl font-bold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-5 leading-8 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10">
        <div className="rounded-[2rem] bg-sky-100 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-800">
                Başlangıç
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Projenizi önce birlikte sadeleştirelim.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                Aklınızdaki fikri, ihtiyacı veya mevcut sorunu bize anlatın.
                Ne yapılmalı, hangi sırayla ilerlenmeli ve ilk versiyon nasıl
                kurulmalı birlikte netleştirelim.
              </p>
            </div>

            <a
              href="mailto:pruvalabs@gmail.com?subject=Projemi%20Anlatmak%20İstiyorum"
              className="rounded-full bg-slate-900 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Projeni Anlat
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
