"use client";

import { useEffect, useState } from "react";

type KnowledgeItem = {
  id: string;
  title: string;
  content: string;
  category: string;
  is_active: boolean;
  created_at?: string;
};

type KnowledgeResponse = {
  success: boolean;
  brand_key?: string;
  brand_name?: string;
  knowledge_count?: number;
  knowledge_items?: KnowledgeItem[];
  error?: string;
};

type TestMessageResponse = {
  success: boolean;
  brand_key?: string;
  brand_name?: string;
  tone?: string;
  voice?: string;
  intent?: string;
  reply?: string;
  needs_human_review?: boolean;
  confidence?: number;
  source?: string;
  error?: string;
};

type ToneUpdateResponse = {
  success: boolean;
  brand_key?: string;
  brand_name?: string;
  tone?: string;
  voice?: string;
  error?: string;
};

const API_BASE = "/api";

export default function PruvaCoreAdminPage() {
  const [brandKey, setBrandKey] = useState("demo_cafe");
  const [tone, setTone] = useState("samimi, kısa, net");
  const [message, setMessage] = useState("Çalışma saatleriniz nedir?");
  const [loadingKnowledge, setLoadingKnowledge] = useState(false);
  const [loadingTone, setLoadingTone] = useState(false);
  const [loadingTest, setLoadingTest] = useState(false);
  const [knowledge, setKnowledge] = useState<KnowledgeResponse | null>(null);
  const [testResult, setTestResult] = useState<TestMessageResponse | null>(null);
  const [error, setError] = useState("");

  async function loadKnowledge() {
    setError("");
    setLoadingKnowledge(true);

    try {
      const response = await fetch(
        `${API_BASE}/pruva-core/brands/${encodeURIComponent(brandKey)}/knowledge`,
        {
          cache: "no-store",
        }
      );

      const data = (await response.json()) as KnowledgeResponse;
      setKnowledge(data);

      if (!data.success) {
        setError(data.error || "Marka bilgileri alınamadı.");
      }
    } catch {
      setError("Backend bağlantısı kurulamadı.");
    } finally {
      setLoadingKnowledge(false);
    }
  }

  async function updateTone() {
    setError("");
    setLoadingTone(true);
    setTestResult(null);

    try {
      const response = await fetch(`${API_BASE}/pruva-core/brand-tone/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand_key: brandKey,
          tone,
        }),
      });

      const data = (await response.json()) as ToneUpdateResponse;

      if (!data.success) {
        setError(data.error || "Tone güncellenemedi.");
        return;
      }

      setTone(data.tone || tone);
    } catch {
      setError("Tone güncelleme bağlantısı kurulamadı.");
    } finally {
      setLoadingTone(false);
    }
  }

  async function sendTestMessage() {
    setError("");
    setLoadingTest(true);
    setTestResult(null);

    try {
      const response = await fetch(`${API_BASE}/pruva-core/test-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand_key: brandKey,
          message,
          channel: "Panel Test",
        }),
      });

      const data = (await response.json()) as TestMessageResponse;
      setTestResult(data);

      if (!data.success) {
        setError(data.error || "Test mesajı başarısız oldu.");
      }
    } catch {
      setError("Backend bağlantısı kurulamadı.");
    } finally {
      setLoadingTest(false);
    }
  }

  useEffect(() => {
    loadKnowledge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
        <div>
          <a href="/" className="text-sm font-semibold text-cyan-200">
            ← Ana sayfa
          </a>

          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Pruva Core Panel
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Marka hafızasını görüntüle, test mesajı gönder ve Pruva AI cevabını kontrol et.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <label className="text-sm font-semibold text-slate-200">
            Brand Key
          </label>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              value={brandKey}
              onChange={(event) => setBrandKey(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
              placeholder="demo_cafe"
            />

            <button
              onClick={loadKnowledge}
              disabled={loadingKnowledge}
              className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 disabled:opacity-60"
            >
              {loadingKnowledge ? "Yükleniyor..." : "Bilgileri Getir"}
            </button>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div>
              <label className="text-sm font-semibold text-slate-200">
                Marka tonu
              </label>

              <select
                value={tone}
                onChange={(event) => setTone(event.target.value)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
              >
                <option value="samimi, kısa, net">Samimi</option>
                <option value="kurumsal, profesyonel, net">Kurumsal</option>
                <option value="resmi, efendim, net">Resmi</option>
                <option value="organik, doğal, sade">Organik</option>
                <option value="premium, lüks, resmi">Premium</option>
              </select>
            </div>

            <button
              onClick={updateTone}
              disabled={loadingTone}
              className="self-end rounded-xl border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-100 disabled:opacity-60"
            >
              {loadingTone ? "Güncelleniyor..." : "Tone Güncelle"}
            </button>
          </div>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </p>
          ) : null}
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold">Marka Bilgileri</h2>

            <p className="mt-2 text-sm text-slate-400">
              {knowledge?.brand_name
                ? `${knowledge.brand_name} · ${knowledge.knowledge_count || 0} bilgi`
                : "Henüz bilgi yüklenmedi."}
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {knowledge?.knowledge_items?.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-slate-900/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {item.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.content}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    {item.is_active ? "Aktif" : "Pasif"}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold">Test Mesajı</h2>

            <label className="mt-5 block text-sm font-semibold text-slate-200">
              Kullanıcı mesajı
            </label>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-3 min-h-32 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
              placeholder="Çalışma saatleriniz nedir?"
            />

            <button
              onClick={sendTestMessage}
              disabled={loadingTest}
              className="mt-4 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 disabled:opacity-60"
            >
              {loadingTest ? "Cevap alınıyor..." : "Test Mesajı Gönder"}
            </button>

            {testResult ? (
              <div className="mt-5 rounded-xl border border-white/10 bg-slate-900 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  AI Cevabı
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-100">
                  {testResult.reply || testResult.error}
                </p>

                <div className="mt-4 grid gap-2 text-xs text-slate-400">
                  <p>Tone: {testResult.tone || "-"}</p>
                  <p>Voice: {testResult.voice || "-"}</p>
                  <p>Intent: {testResult.intent || "-"}</p>
                  <p>Source: {testResult.source || "-"}</p>
                  <p>Confidence: {testResult.confidence ?? "-"}</p>
                  <p>
                    Human Review:{" "}
                    {testResult.needs_human_review === true
                      ? "Gerekli"
                      : "Gerekli değil"}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </section>
    </main>
  );
}
