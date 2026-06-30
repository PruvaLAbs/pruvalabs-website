import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© 2025 PruvaLabs. Tüm hakları saklıdır.</p>

        <div className="flex flex-wrap gap-5">
          <Link href="/blog" className="hover:text-slate-950">
            Blog&Rehber
          </Link>
          <Link href="/legal/privacy" className="hover:text-slate-950">
            Gizlilik Politikası
          </Link>
          <Link href="/contact" className="hover:text-slate-950">
            İletişim
          </Link>
        </div>
      </div>
    </footer>
  );
}
