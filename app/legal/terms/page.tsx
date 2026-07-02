export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-10">
        <a href="/" className="text-sm font-semibold text-sky-700">
          ← Ana sayfa
        </a>
        <h1 className="mt-12 text-4xl font-semibold">Kullanım Koşulları</h1>
        <p className="mt-6 leading-8 text-slate-600">
          PruvaLabs web sitesi ve ürünleri için kullanım koşulları bu alanda
          yayınlanacaktır. Pilot ve ticari kullanım detayları ayrıca sözleşme
          kapsamında netleştirilir.
        </p>
      
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Veri açıklaması</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Pruva Asistan müşteri mesajı ve rezervasyon bilgilerini hizmet için işler.
          </p>
          <div className="mt-4">

          <a href="/legal/kvkk" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
            KVKK / Veri Açıklaması
          </a>

          </div>
        </div>

      </section>
    </main>
  );
}
