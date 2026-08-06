type CapabilityIconName = "api" | "adapt" | "control" | "expand";

type CapabilityIconProps = {
  name: CapabilityIconName;
  className?: string;
};

export function CapabilityIcon({
  name,
  className = "h-6 w-6",
}: CapabilityIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "api") {
    return (
      <svg {...commonProps}>
        <circle cx="5" cy="12" r="2.25" />
        <circle cx="19" cy="6" r="2.25" />
        <circle cx="19" cy="18" r="2.25" />
        <path d="M7.1 11.1 16.8 6.9M7.1 12.9l9.7 4.2" />
      </svg>
    );
  }

  if (name === "adapt") {
    return (
      <svg {...commonProps}>
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10M4 12h4M12 12h8" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="8" cy="17" r="2" />
        <circle cx="10" cy="12" r="2" />
      </svg>
    );
  }

  if (name === "control") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 5.5 5.8v5.1c0 4.1 2.6 7.8 6.5 10.1 3.9-2.3 6.5-6 6.5-10.1V5.8L12 3Z" />
        <path d="m8.9 12 2 2 4.2-4.4" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <path d="M17 14v6M14 17h6" />
    </svg>
  );
}

type ProductIconName = "web" | "mobile" | "api" | "business";

function ProductIcon({ name }: { name: ProductIconName }) {
  const commonProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "web") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 7h.01M10 7h.01" />
      </svg>
    );
  }

  if (name === "mobile") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10 5h4M11 18.5h2" />
      </svg>
    );
  }

  if (name === "api") {
    return (
      <svg {...commonProps}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="19" cy="17" r="2" />
        <path d="m7 11.3 10-3.6M7 12.7l10 3.6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 21V7l8-4 8 4v14M8 9h2M14 9h2M8 13h2M14 13h2M9 21v-4h6v4" />
    </svg>
  );
}

const heroNodes: Array<{
  title: string;
  label: string;
  icon: ProductIconName;
  position: string;
  delay: string;
}> = [
  {
    title: "Web",
    label: "Platformlar",
    icon: "web",
    position: "left-3 top-7 sm:left-7 sm:top-10",
    delay: "0s",
  },
  {
    title: "Mobil",
    label: "iOS · Android",
    icon: "mobile",
    position: "right-3 top-7 sm:right-7 sm:top-10",
    delay: "-1.2s",
  },
  {
    title: "API",
    label: "Entegrasyon",
    icon: "api",
    position: "bottom-7 left-3 sm:bottom-10 sm:left-7",
    delay: "-2.4s",
  },
  {
    title: "Kurumsal",
    label: "Sistemler",
    icon: "business",
    position: "bottom-7 right-3 sm:bottom-10 sm:right-7",
    delay: "-3.6s",
  },
];

export function PruvAIHeroVisual() {
  return (
    <div
      role="img"
      aria-label="PruvAI çekirdeğinin web, mobil, API ve kurumsal sistemlerle bağlantısını gösteren şema"
      className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-300/50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(186,230,253,0.62),transparent_32%),linear-gradient(to_bottom_right,rgba(248,250,252,0.88),rgba(255,255,255,0.98))]" />
      <div className="absolute inset-5 rounded-[1.75rem] border border-slate-100" />
      <div className="absolute inset-10 rounded-[1.5rem] border border-dashed border-sky-200/80" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-sky-300"
        aria-hidden="true"
      >
        <path className="pruvai-flow-line" d="M50 50 20 20" />
        <path className="pruvai-flow-line" d="M50 50 80 20" />
        <path className="pruvai-flow-line" d="M50 50 20 80" />
        <path className="pruvai-flow-line" d="M50 50 80 80" />
      </svg>

      <div className="pruvai-core absolute left-1/2 top-1/2 z-20 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-sky-200 bg-white shadow-2xl shadow-sky-200/70 sm:h-40 sm:w-40">
        <div className="absolute inset-3 rounded-full border border-dashed border-sky-200" />
        <div className="relative text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
            P
          </div>
          <p className="mt-3 text-base font-bold tracking-tight text-slate-950 sm:text-lg">
            PruvAI
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700">
            AI Core
          </p>
        </div>
      </div>

      {heroNodes.map((node) => (
        <div
          key={node.title}
          className={`pruvai-node absolute z-30 flex min-w-[7.75rem] items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-3 py-3 shadow-lg shadow-slate-200/60 backdrop-blur ${node.position}`}
          style={{ animationDelay: node.delay }}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
            <ProductIcon name={node.icon} />
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-900">
              {node.title}
            </span>
            <span className="block text-[11px] text-slate-500">{node.label}</span>
          </span>
        </div>
      ))}

      <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 backdrop-blur sm:bottom-5">
        API · Güvenlik · Özelleştirme
      </div>
    </div>
  );
}

const flowSteps = [
  {
    number: "01",
    title: "Ürününüz",
    text: "Web, mobil veya kurumsal sistem",
    icon: "adapt" as CapabilityIconName,
  },
  {
    number: "02",
    title: "PruvAI API",
    text: "Güvenli entegrasyon katmanı",
    icon: "api" as CapabilityIconName,
  },
  {
    number: "03",
    title: "Veri ve araçlar",
    text: "İzinli kaynaklar ve görevler",
    icon: "expand" as CapabilityIconName,
  },
  {
    number: "04",
    title: "Kontrollü sonuç",
    text: "İzlenen ve yönetilen yanıt",
    icon: "control" as CapabilityIconName,
  },
];

export function PruvAIFlow() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
      {flowSteps.map((step, index) => (
        <div key={step.number} className="contents">
          <article className="pruvai-card group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:-translate-y-0.5 group-hover:bg-sky-100">
                <CapabilityIcon name={step.icon} className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-sky-700">
                {step.number}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
          </article>

          {index < flowSteps.length - 1 ? (
            <div className="pruvai-arrow hidden items-center justify-center px-1 text-sky-500 lg:flex" aria-hidden="true">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M14 7l5 5-5 5" />
              </svg>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
