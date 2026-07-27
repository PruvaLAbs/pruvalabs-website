"use client";

import { FormEvent, useState } from "react";

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  async function send(message: string) {
    const clean = message.trim();
    if (!clean || busy) {
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
        setNotice(
          response.status === 429
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
              Aktivasyon hazırlanıyor
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
                Sorunuzu doğal biçimde yazın. Canlı model bağlantısı etkin
                olduğunda yanıt aynı ekranda görünecek.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void send(suggestion)}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm font-semibold leading-6 text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
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
              placeholder="PruvAI'ya mesaj gönder"
              className="max-h-40 min-h-11 flex-1 resize-none bg-transparent py-2.5 text-slate-950 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={busy || !draft.trim()}
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
