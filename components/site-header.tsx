import Link from "next/link";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Hizmetler", href: "/services" },
  { label: "Projeler", href: "/projects" },
  { label: "Blog&Rehber", href: "/blog" },
  { label: "İletişim", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="PruvaLabs Ana Sayfa" className="flex items-center">
            <img
              src="/pruvalabs-logo.png"
              alt="PruvaLabs"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>
        </div>

        <nav className="flex w-full gap-3 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-slate-600 lg:w-auto lg:justify-end lg:gap-7 lg:overflow-visible lg:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:bg-white hover:text-slate-950 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
