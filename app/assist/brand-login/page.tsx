export default function BrandLoginPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-10">
        <a href="/assist" className="text-sm font-semibold text-sky-700">
          ← Pruva Asistan
        </a>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Marka Girişi
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              İşletme paneli.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Mesajları, cevapları ve rezervasyonları görün.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
            <h2 className="text-2xl font-semibold">Marka Paneli</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Demo için devam edin.
            </p>

            <div className="mt-6 space-y-3">
              <label className="block">
                <span className="text-sm text-slate-500">E-posta</span>
                <input
                  disabled
                  placeholder="marka@isletme.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F6F8FB] px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-500">Şifre</span>
                <input
                  disabled
                  placeholder="••••••••"
                  type="password"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F6F8FB] px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </label>
            </div>

            <a
              href="/assist/brand"
              className="mt-6 block rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Panele Gir
            </a>

            <a
              href="/assist/accounts/mavi_kose_bistro"
              className="mt-3 block rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-700"
            >
              Ayarları Gör
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
