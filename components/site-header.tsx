import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "PruvAI", href: "/pruvai" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Hizmetler", href: "/services" },
  { label: "Projeler", href: "/projects" },
  { label: "Blog/Rehber", href: "/blog" },
  { label: "İletişim", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" aria-label="PruvaLabs Ana Sayfa" className="flex items-center">
            <Image
              src="/pruvalabs-logo.png"
              alt="PruvaLabs"
              width={788}
              height={694}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </Link>
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-4">
          <nav
            aria-label="Ana menü"
            className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-slate-600 lg:w-auto lg:justify-end lg:gap-7 lg:overflow-visible lg:pb-0"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/pruvai"
                    ? "inline-flex self-center rounded-full bg-slate-950 px-4 py-2 font-semibold leading-none text-white transition hover:bg-slate-800"
                    : "inline-flex self-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 leading-none transition hover:bg-white hover:text-slate-950 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden shrink-0 lg:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
