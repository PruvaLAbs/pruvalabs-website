export default function BrandLoginPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-10">
        <a href="/assist" className="text-sm font-semibold text-cyan-200">
          ← Pruva Assist
        </a>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Marka Girişi
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              İşletmenizin AI paneline girin.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Mesajları, AI cevaplarını, rezervasyonları ve WhatsApp
              bildirimlerini tek ekrandan takip edin.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
            <h2 className="text-2xl font-semibold">Marka paneli</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Demo aşamasında giriş doğrulaması kapalıdır. Pilot markayı
              görüntülemek için devam edin.
            </p>

            <div className="mt-6 space-y-3">
              <label className="block">
                <span className="text-sm text-slate-400">E-posta</span>
                <input
                  disabled
                  placeholder="marka@isletme.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Şifre</span>
                <input
                  disabled
                  placeholder="••••••••"
                  type="password"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </label>
            </div>

            <a
              href="/assist/brand"
              className="mt-6 block rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Demo Marka Paneline Gir
            </a>

            <a
              href="/assist/accounts/mavi_kose_bistro"
              className="mt-3 block rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
            >
              Pilot Marka Ayarlarını Gör
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
