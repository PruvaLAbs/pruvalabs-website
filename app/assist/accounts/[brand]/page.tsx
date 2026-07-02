import {
  getNotificationLogs,
  getReservations,
} from "@/lib/pruva-api";

type AssistAccountDetailPageProps = {
  params: Promise<{
    brand: string;
  }>;
};

export default async function AssistAccountDetailPage({
  params,
}: AssistAccountDetailPageProps) {
  const { brand } = await params;

  const [reservations, notifications] = await Promise.all([
    getReservations(),
    getNotificationLogs(),
  ]);

  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];

  const brandName =
    brand === "mavi_kose_bistro" ? "Mavi Köşe Bistro" : brand;

  const knowledgeItems = [
    "İşletme adı ve açıklaması",
    "Adres ve iletişim bilgileri",
    "Çalışma saatleri",
    "Rezervasyon kuralları",
    "Sık sorulan sorular",
    "WhatsApp bildirim numarası",
  ];

  const channels = [
    {
      name: "WhatsApp",
      status: "Aktif",
    },
    {
      name: "Instagram DM",
      status: "Hazır",
    },
  ];

  const assistants = [
    {
      name: "Müşteri Cevap Asistanı",
      text: "Adres, saat, bilgi ve genel müşteri sorularını cevaplar.",
    },
    {
      name: "Rezervasyon Asistanı",
      text: "Uygun müşterilerden rezervasyon bilgilerini toplar.",
    },
  ];

  const rules = [
    "Tarih, saat ve kişi sayısı alınır.",
    "Eksik bilgi varsa müşteri tamamlamaya yönlendirilir.",
    "Uygun talepler rezervasyon kaydına çevrilir.",
    "Rezervasyon detayları işletmeye WhatsApp’tan bildirilir.",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F8FB] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist/accounts" className="text-sm font-semibold text-sky-700">
            ← Markalar
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

        <div className="grid gap-6 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              İşletme Profili
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              {brandName}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              AI cevapları bu işletmeye özel bilgi havuzu, kanal ayarları ve
              rezervasyon kurallarına göre üretilir.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-5 py-4">
            <p className="text-xs text-emerald-200/80">Durum</p>
            <p className="mt-1 text-lg font-semibold text-emerald-100">
              Aktif pilot
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Rezervasyon</p>
            <p className="mt-3 text-4xl font-semibold">{reservationList.length}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Bildirim</p>
            <p className="mt-3 text-4xl font-semibold">{notificationList.length}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Kanal</p>
            <p className="mt-3 text-4xl font-semibold">{channels.length}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">AI asistan</p>
            <p className="mt-3 text-4xl font-semibold">{assistants.length}</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">İşletme bilgi havuzu</h2>
            <p className="mt-2 text-sm text-slate-500">
              AI bu bilgilerle cevap üretir.
            </p>

            <div className="mt-6 grid gap-3">
              {knowledgeItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4 text-sm text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Rezervasyon kuralları</h2>
            <p className="mt-2 text-sm text-slate-500">
              Uygun talepler bu akışa göre işlenir.
            </p>

            <div className="mt-6 space-y-3">
              {rules.map((rule, index) => (
                <div
                  key={rule}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Aktif kanallar</h2>
            <div className="mt-6 space-y-3">
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <p className="font-semibold">{channel.name}</p>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    {channel.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Aktif AI asistanlar</h2>
            <div className="mt-6 space-y-3">
              {assistants.map((assistant) => (
                <div
                  key={assistant.name}
                  className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <p className="font-semibold">{assistant.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {assistant.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Son rezervasyonlar</h2>
            <div className="mt-6 space-y-3">
              {reservationList.slice(0, 4).map((reservation) => (
                <div
                  key={reservation.id}
                  className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <p className="font-semibold">{reservation.customer_name}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    {reservation.party_size} kişi · {reservation.reservation_date} ·{" "}
                    {reservation.reservation_time}
                  </p>
                </div>
              ))}

              {reservationList.length === 0 ? (
                <p className="text-sm text-slate-500">Henüz rezervasyon yok.</p>
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">Son bildirimler</h2>
            <div className="mt-6 space-y-3">
              {notificationList.slice(0, 4).map((notification) => (
                <div
                  key={notification.id}
                  className="rounded-2xl border border-slate-200 bg-[#F6F8FB] p-4"
                >
                  <p className="font-semibold">Bildirim #{notification.id}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    İşletmeye gönderildi
                  </p>
                </div>
              ))}

              {notificationList.length === 0 ? (
                <p className="text-sm text-slate-500">Henüz bildirim yok.</p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-sky-200 bg-sky-100 p-8 text-slate-950">
          <h2 className="text-3xl font-semibold">
            AI cevapları işletmeye özel verilerle çalışır.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-900/80">
            Marka bilgisi, kanal ayarları ve rezervasyon kuralları güncel
            oldukça AI daha doğru cevap verir.
          </p>
        </section>
      </section>
    </main>
  );
}
