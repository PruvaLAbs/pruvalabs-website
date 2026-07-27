"use client";

import { FormEvent, useEffect, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "Bir iş fikrini uygulanabilir adımlara ayır",
  "Bu hafta için sade bir çalışma planı hazırla",
  "Bir metni daha profesyonel hale getirmeme yardım et",
];

export function PruvAIChat() {
  const [draft, setDraft] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [accessState, setAccessState] = useState<
    "checking" | "required" | "granted" | "not_required" | "unavailable"
  >("checking");
  const [serviceState, setServiceState] = useState<
    "checking" | "ready" | "activation_required" | "unavailable"
  >("checking");
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void Promise.all([
      fetch("/api/pruvai/status", { cache: "no-store" }).then(
        async (response) =>
          (await response.json()) as { status?: string },
      ),
      fetch("/api/pruvai/access", { cache: "no-store" }).then(
        async (response) =>
          (await response.json()) as { status?: string },
      ),
    ])
      .then(([service, access]) => {
        if (!active) {
          return;
        }
        if (service.status === "ready") {
          setServiceState("ready");
        } else if (service.status === "activation_required") {
          setServiceState("activation_required");
        } else {
          setServiceState("unavailable");
        }
        if (access.status === "granted") {
          setAccessState("granted");
        } else if (access.status === "not_required") {
          setAccessState("not_required");
        } else if (access.status === "required") {
          setAccessState("required");
        } else {
          setAccessState("unavailable");
        }
      })
      .catch(() => {
        if (active) {
          setServiceState("unavailable");
          setAccessState("unavailable");
        }
      });
    return () => {
      active = false;
    };
  }, []);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = accessCode.trim();
    if (!code || busy) {
      return;
    }
    setBusy(true);
    setNotice(null);
    try {
      const response = await fetch("/api/pruvai/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const result = (await response.json()) as { status?: string };
      if (response.ok && result.status === "granted") {
        setAccessCode("");
        setAccessState("granted");
      } else {
        setNotice(
          response.status === 429
            ? "Çok fazla erişim denemesi yapıldı. Birkaç dakika sonra tekrar deneyin."
            : "Sponsor erişim kodu geçerli değil.",
        );
      }
    } catch {
      setNotice("Sponsor erişimi şu anda doğrulanamıyor.");
    } finally {
      setBusy(false);
    }
  }

  async function send(message: string) {
    const clean = message.trim();
    if (!clean || busy) {
      return;
    }
    if (serviceState !== "ready") {
      setNotice(
        serviceState === "activation_required"
          ? "PruvAI canlı model bağlantısı güvenli aktivasyon bekliyor."
          : "PruvAI servisine şu anda ulaşılamıyor.",
      );
      return;
    }
    if (
      accessState === "checking" ||
      accessState === "required" ||
      accessState === "unavailable"
    ) {
      setNotice("Devam etmek için sponsor erişim kodunu girin.");
      return;
    }

    setBusy(true);
    setNotice(null);
    setDraft("");
    setMessages((current) => [
      ...current,
      { role: "user", content: clean },
    ]);

    try {
      const response = await fetch("/api/pruvai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean }),
      });
      const result = (await response.json()) as {
        status?: string;
        answer?: string;
        error_code?: string;
      };
      if (!response.ok || result.status !== "answered" || !result.answer) {
        if (response.status === 401) {
          setAccessState("required");
          setMessages([]);
        }
        setNotice(
          response.status === 401
            ? "Sponsor oturumunun süresi doldu. Erişim kodunu yeniden girin."
            : response.status === 429
            ? "Kısa süre içinde çok fazla mesaj gönderildi. Bir dakika sonra tekrar deneyin."
            : "PruvAI canlı model bağlantısı henüz etkin değil. Güvenli aktivasyon tamamlandığında burada yanıt verecek.",
        );
        return;
      }
      setMessages((current) => [
        ...current,
        { role: "assistant", content: result.answer! },
      ]);
    } catch {
      setNotice(
        "PruvAI servisine şu anda ulaşılamıyor. Lütfen daha sonra tekrar deneyin.",
      );
    } finally {
      setBusy(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(draft);
  }

  const accessGranted =
    accessState === "granted" || accessState === "not_required";
  const canChat = serviceState === "ready" && accessGranted;
  const statusLabel =
    serviceState === "checking" || accessState === "checking"
      ? "Bağlantı kontrol ediliyor"
      : serviceState === "activation_required"
        ? "Aktivasyon bekleniyor"
        : serviceState === "unavailable"
          ? "Servis kullanılamıyor"
          : accessState === "required"
            ? "Sponsor erişimi"
            : accessState === "unavailable"
              ? "Erişim doğrulanamıyor"
              : "PruvAI hazır";

  return (
    <section
      id="pruvai-chat"
      className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-950">PruvAI</p>
              <p className="mt-1 text-sm text-slate-500">
                Kontrollü erken erişim
              </p>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
              {statusLabel}
            </span>
          </div>
        </div>

        <div
          aria-live="polite"
          className="min-h-80 space-y-5 bg-[#F7F8FA] px-5 py-8 sm:px-8"
        >
          {messages.length === 0 ? (
            <div className="mx-auto max-w-2xl py-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Nasıl yardımcı olabilirim?
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Sorunuzu doğal biçimde yazın. Yanıt PruvaLabs tarafından
                çalıştırılan yerel PruvAI modelinden gelecek.
              </p>
              {serviceState === "ready" && accessState === "required" ? (
                <form
                  onSubmit={unlock}
                  className="mx-auto mt-8 max-w-md rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm"
                >
                  <label
                    htmlFor="pruvai-access-code"
                    className="text-sm font-bold text-slate-800"
                  >
                    Sponsor erişim kodu
                  </label>
                  <div className="mt-3 flex gap-2">
                    <input
                      id="pruvai-access-code"
                      value={accessCode}
                      onChange={(event) => setAccessCode(event.target.value)}
                      autoComplete="one-time-code"
                      maxLength={128}
                      className="min-w-0 flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      placeholder="Erişim kodunu girin"
                    />
                    <button
                      type="submit"
                      disabled={busy || !accessCode.trim()}
                      className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white disabled:bg-slate-300"
                    >
                      Aç
                    </button>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Erişim görüşme süresiyle sınırlıdır ve tarayıcıda güvenli,
                    imzalı bir oturum olarak tutulur.
                  </p>
                </form>
              ) : canChat ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      disabled={!canChat}
                      onClick={() => void send(suggestion)}
                      className="rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm font-semibold leading-6 text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 disabled:cursor-wait disabled:opacity-60"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-5 text-sm leading-6 text-slate-600 shadow-sm">
                  {serviceState === "activation_required"
                    ? "PruvAI arayüzü hazır. Yerel cevap motoru güvenli biçimde bağlandığında mesaj alanı otomatik olarak etkinleşecek."
                    : serviceState === "unavailable"
                      ? "PruvAI cevap motoruna şu anda ulaşılamıyor. Arayüz yanlış bir hazır durumu göstermeden güvenli biçimde bekliyor."
                      : "PruvAI bağlantısı ve erişim durumu kontrol ediliyor."}
                </div>
              )}
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-2xl rounded-3xl bg-slate-950 px-5 py-4 text-white"
                    : "mr-auto max-w-2xl rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-800"
                }
              >
                <p className="whitespace-pre-wrap leading-7">
                  {message.content}
                </p>
              </div>
            ))
          )}
          {notice ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
              {notice}
            </div>
          ) : null}
        </div>

        <form
          onSubmit={submit}
          className="border-t border-slate-200 bg-white p-4 sm:p-6"
        >
          <div className="flex items-end gap-3 rounded-3xl border border-slate-300 bg-white p-2 pl-5 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100">
            <label htmlFor="pruvai-message" className="sr-only">
              PruvAI&apos;ya mesaj
            </label>
            <textarea
              id="pruvai-message"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void send(draft);
                }
              }}
              maxLength={12000}
              rows={1}
              disabled={!canChat || busy}
              placeholder="PruvAI'ya mesaj gönder"
              className="max-h-40 min-h-11 flex-1 resize-none bg-transparent py-2.5 text-slate-950 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:text-slate-400"
            />
            <button
              type="submit"
              disabled={!canChat || busy || !draft.trim()}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-slate-950 text-lg font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              aria-label="Mesajı gönder"
            >
              {busy ? "…" : "↑"}
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            PruvAI önemli konularda hata yapabilir. Kritik bilgileri doğrulayın.
          </p>
        </form>
      </div>
    </section>
  );
}
