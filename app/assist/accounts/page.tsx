import { getBrands } from "@/lib/pruva-api";

export default async function AssistAccountsPage() {
  const brands = await getBrands();
  const brandList = brands?.data ?? [];

  const accounts =
    brandList.length > 0
      ? brandList.map((brand) => ({
          name: brand.brand_name,
          slug: brand.brand_file?.replace(".json", "") || "mavi_kose_bistro",
          status: "Aktif pilot",
          channels: ["WhatsApp", "Instagram DM"],
          assistants: ["Müşteri Cevap", "Rezervasyon"],
          notification: "Tanımlı",
        }))
      : [
          {
            name: "Mavi Köşe Bistro",
            slug: "mavi_kose_bistro",
            status: "Aktif pilot",
            channels: ["WhatsApp", "Instagram DM"],
            assistants: ["Müşteri Cevap", "Rezervasyon"],
            notification: "Tanımlı",
          },
        ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-sky-700">
            ← Pruva Asistan
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            <a href="/assist/brand" className="hover:text-slate-950">
              Marka Paneli
            </a>
            <a href="/assist/admin" className="hover:text-slate-950">
              Admin
            </a>
            <a href="/assist/operations" className="hover:text-slate-950">
              Operasyon
            </a>
          </nav>
        </header>

        <div className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Markalar
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            AI asistan bağlı işletmeler.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Her marka kendi kanalları, AI asistanları, rezervasyon kuralları ve
            bildirim ayarlarıyla yönetilir.
          </p>
        </div>

        <section className="grid gap-5">
          {accounts.map((account) => (
            <a
              key={account.slug}
              href={`/assist/accounts/${account.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-cyan-200/50 hover:bg-white/[0.06]"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr_0.9fr_auto] lg:items-center">
                <div>
                  <p className="text-sm text-slate-500">İşletme</p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {account.name}
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-emerald-200">
                    {account.status}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Kanallar</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {account.channels.map((channel) => (
                      <span
                        key={channel}
                        className="rounded-full border border-sky-200 bg-sky-100/10 px-3 py-1 text-xs text-sky-700"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-500">AI asistanlar</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {account.assistants.map((assistant) => (
                      <span
                        key={assistant}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                      >
                        {assistant}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#F6F8FB] px-4 py-3 text-sm text-slate-600">
                  WhatsApp: {account.notification}
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <h2 className="text-3xl font-semibold">
            Her marka kendi bilgi havuzuyla çalışır.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-900/80">
            AI cevapları; işletme bilgileri, çalışma saatleri, rezervasyon
            kuralları ve tanımlı kanal ayarlarına göre üretilir.
          </p>
        </section>
      </section>
    </main>
  );
}
