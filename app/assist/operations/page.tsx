import { ReservationActionButtons } from "@/components/reservation-action-buttons";
import {
  getNotificationLogs,
  getPilotReadiness,
  getReservations,
} from "@/lib/pruva-api";

export default async function AssistOperationsPage() {
  const [readiness, reservations, notifications] = await Promise.all([
    getPilotReadiness(),
    getReservations(),
    getNotificationLogs(),
  ]);

  const reservationList = reservations?.data ?? [];
  const notificationList = notifications?.data ?? [];

  const pendingReservations = reservationList.filter(
    (reservation) => reservation.status === "pending"
  );

  const visibleReservations =
    pendingReservations.length > 0 ? pendingReservations : reservationList;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/assist" className="text-sm font-semibold text-cyan-200">
            ← Pruva Assist
          </a>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="/assist/accounts" className="hover:text-white">
              Markalar
            </a>
            <a href="/assist/accounts/mavi_kose_bistro" className="hover:text-white">
              Pilot Marka
            </a>
          </nav>
        </header>

        <div className="grid gap-6 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Operasyon Merkezi
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Rezervasyonları tek ekrandan yönetin.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Bekleyen talepleri görün, onaylayın veya iptal edin. Bildirimler
              ve sistem durumu aynı ekranda takip edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-5 py-4">
            <p className="text-xs text-emerald-200/80">Sistem durumu</p>
            <p className="mt-1 text-lg font-semibold text-emerald-100">
              Hazır
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">Bekleyen</p>
            <p className="mt-3 text-4xl font-semibold">
              {pendingReservations.length}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">Toplam kayıt</p>
            <p className="mt-3 text-4xl font-semibold">
              {reservationList.length}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">Bildirim</p>
            <p className="mt-3 text-4xl font-semibold">
              {notificationList.length}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Rezervasyonlar</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Öncelik bekleyen taleplerde.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {visibleReservations.length > 0 ? (
                visibleReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-semibold">
                            {reservation.customer_name}
                          </h3>
                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                            {reservation.status}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {reservation.party_size} kişi · {reservation.reservation_date} ·{" "}
                          {reservation.reservation_time}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                          #{reservation.id}
                        </p>
                      </div>

                      <ReservationActionButtons reservationId={reservation.id} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-slate-400">
                  Henüz rezervasyon kaydı yok.
                </div>
              )}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold">Son bildirimler</h2>
            <p className="mt-2 text-sm text-slate-400">
              İşletmeye giden son kayıtlar.
            </p>

            <div className="mt-6 space-y-3">
              {notificationList.length > 0 ? (
                notificationList.slice(0, 5).map((notification) => (
                  <div
                    key={notification.id}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                  >
                    <p className="text-sm font-semibold">
                      Bildirim #{notification.id}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      İşletmeye gönderildi
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {notification.status || "Gönderildi"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-400">
                  Henüz bildirim yok.
                </div>
              )}
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
