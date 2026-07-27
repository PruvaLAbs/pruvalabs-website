import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projeler",
  description: "PruvaLabs geliştirme alanları ve PruvAI projesi.",
};

const projects = [
  {
    title: "PruvAI",
    category: "Yapay zekâ platformu",
    text: "Kendi çekirdeği, kalıcı hafızası, belge kanıtı ve güvenlik katmanları olan çok amaçlı yapay zekâ.",
    href: "/pruvai",
    status: "Aktif geliştirme",
  },
  {
    title: "Mobil ürünler",
    category: "iOS ve Android",
    text: "Performans, erişilebilirlik ve net kullanıcı akışlarına odaklanan mobil uygulama deneyimleri.",
    href: "/products",
    status: "Ürün alanı",
  },
  {
    title: "Kelime ve bulmaca sistemleri",
    category: "Çoklu dil",
    text: "Dil havuzları, ilerleme yapıları ve zihinsel egzersiz odaklı mobil deneyimler.",
    href: "/products",
    status: "Geliştirildi",
  },
  {
    title: "İş uygulamaları",
    category: "Operasyon ve takip",
    text: "Kayıt, takip, raporlama ve karar süreçlerini sadeleştiren iş sistemleri.",
    href: "/services",
    status: "Geliştirme alanı",
  },
  {
    title: "Yönetim panelleri",
    category: "Admin ve dashboard",
    text: "Karmaşık verileri anlaşılır hale getiren, aksiyon odaklı yönetim arayüzleri.",
    href: "/services",
    status: "Geliştirme alanı",
  },
  {
    title: "Backend ve entegrasyonlar",
    category: "API ve altyapı",
    text: "Web, mobil ve yapay zekâ ürünlerinin güvenilir biçimde birlikte çalışmasını sağlayan altyapılar.",
    href: "/about",
    status: "Teknik altyapı",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-950">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-700">
          Projeler
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Fikirden çalışan ürüne uzanan üretim.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          Yapay zekâ, mobil ürün, web sistemi ve teknik altyapıyı tek ürün
          yaklaşımı içinde geliştiriyoruz.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className={
                index === 0
                  ? "rounded-[1.75rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-300/50 transition hover:-translate-y-1"
                  : "rounded-[1.75rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/50"
              }
            >
              <p className={index === 0 ? "text-sm font-bold text-sky-300" : "text-sm font-bold text-sky-700"}>
                {project.category}
              </p>
              <h2 className="mt-5 text-2xl font-bold">{project.title}</h2>
              <p className={index === 0 ? "mt-4 leading-7 text-slate-300" : "mt-4 leading-7 text-slate-600"}>
                {project.text}
              </p>
              <span
                className={
                  index === 0
                    ? "mt-7 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-slate-200"
                    : "mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600"
                }
              >
                {project.status}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-sky-100 p-8 sm:p-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Ana odak: PruvAI.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-700">
            Kullanılan modele bağımlı kalmayan, kendi ürün çekirdeği üzerinde
            büyüyen bir yapay zekâ inşa ediyoruz.
          </p>
          <Link
            href="/pruvai"
            className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white"
          >
            PruvAI&apos;ı incele
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
