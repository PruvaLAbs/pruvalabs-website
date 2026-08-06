export function PruvAISimulation() {
  const nodes = [
    { x: 18, y: 24, label: "API", delay: "-0.7s" },
    { x: 82, y: 22, label: "Veri", delay: "-1.6s" },
    { x: 14, y: 70, label: "Araç", delay: "-2.4s" },
    { x: 84, y: 72, label: "Güvenlik", delay: "-3.2s" },
    { x: 50, y: 10, label: "Hafıza", delay: "-4s" },
    { x: 50, y: 90, label: "Sonuç", delay: "-4.8s" },
  ];

  return (
    <div
      role="img"
      aria-label="PruvAI yapay zekâ çekirdeğinde veri, hafıza, güvenlik, araç ve API akışlarını gösteren canlı sistem simülasyonu"
      className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-300/50"
      data-no-translate
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(186,230,253,0.72),transparent_31%),linear-gradient(to_bottom_right,rgba(248,250,252,0.92),rgba(255,255,255,0.98))]" />
      <div className="absolute inset-[7%] rounded-full border border-sky-100" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-sky-200/80" />
      <div className="pruvai-sim-orbit absolute inset-[26%] rounded-full border border-sky-300/70" />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="pruvai-core-gradient" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="55%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <filter id="pruvai-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {nodes.map((node) => (
          <g key={node.label}>
            <path
              className="pruvai-sim-line"
              d={`M50 50 L${node.x} ${node.y}`}
            />
            <circle
              className="pruvai-sim-packet"
              cx="50"
              cy="50"
              r="0.9"
              style={{ animationDelay: node.delay }}
            >
              <animateMotion
                dur="4.8s"
                repeatCount="indefinite"
                begin={node.delay}
                path={`M0 0 L${node.x - 50} ${node.y - 50}`}
              />
            </circle>
          </g>
        ))}

        <circle cx="50" cy="50" r="13" fill="url(#pruvai-core-gradient)" filter="url(#pruvai-glow)" />
        <circle className="pruvai-sim-ring" cx="50" cy="50" r="17" fill="none" stroke="#38bdf8" strokeWidth="0.55" strokeDasharray="2 3" />
        <circle className="pruvai-sim-ring-reverse" cx="50" cy="50" r="21" fill="none" stroke="#bae6fd" strokeWidth="0.45" strokeDasharray="1 4" />
        <path className="pruvai-sim-neural" d="M44 48c2-5 10-5 12 0-3 1-3 5 0 6-3 5-9 5-12 0 3-2 3-4 0-6Z" fill="none" stroke="#e0f2fe" strokeWidth="0.65" />
        <circle cx="47" cy="48" r="0.9" fill="#7dd3fc" />
        <circle cx="53" cy="48" r="0.9" fill="#7dd3fc" />
        <circle cx="50" cy="53" r="0.9" fill="#7dd3fc" />
        <path d="M47.8 48.4 50 52.2l2.2-3.8" fill="none" stroke="#7dd3fc" strokeWidth="0.5" />
      </svg>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="pruvai-sim-node absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600 shadow-lg shadow-slate-200/60 backdrop-blur sm:text-xs"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: node.delay }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-500 align-middle" />
          {node.label}
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <p className="text-lg font-bold tracking-tight sm:text-xl">PruvAI</p>
        <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-sky-200 sm:text-[9px]">
          Intelligence Engine
        </p>
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[10px] font-semibold text-slate-500 shadow-sm backdrop-blur sm:text-xs">
        <span className="pruvai-sim-status h-2 w-2 rounded-full bg-sky-500" />
        Sistem akışı aktif
      </div>
    </div>
  );
}
