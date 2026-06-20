"use client";

import { motion } from "framer-motion";

interface EcoNode {
  id: string;
  label: string;
}

const OUTER_NODES: EcoNode[] = [
  { id: "nextjs", label: "Next.js" },
  { id: "supabase", label: "Supabase" },
  { id: "ai-writer", label: "AI Writer" },
  { id: "image-studio", label: "Image Studio" },
  { id: "asset-manager", label: "Asset Manager" },
  { id: "claude", label: "Claude" },
  { id: "flux", label: "Flux / OpenAI" },
  { id: "video-processing", label: "Video Processing" },
  { id: "python-worker", label: "Python Worker" },
  { id: "ffmpeg", label: "FFmpeg" },
  { id: "whisper", label: "Whisper" },
  { id: "auto-clipper", label: "Auto Clipper" },
  { id: "storage", label: "Storage" },
];

// Koneksi tambahan antar node (selain semua node otomatis konek ke center)
const CROSS_LINKS: [string, string][] = [
  ["ai-writer", "claude"],
  ["image-studio", "flux"],
  ["video-processing", "ffmpeg"],
  ["video-processing", "auto-clipper"],
  ["auto-clipper", "whisper"],
  ["python-worker", "ffmpeg"],
  ["python-worker", "whisper"],
  ["supabase", "storage"],
  ["asset-manager", "storage"],
];

const TOTAL = OUTER_NODES.length;
const RADIUS = 40;

function getPos(index: number) {
  const angle = (index / TOTAL) * 2 * Math.PI - Math.PI / 2;
  const x = 50 + RADIUS * Math.cos(angle);
  const y = 50 + RADIUS * Math.sin(angle);
  return { x, y };
}

const POS_MAP: Record<string, { x: number; y: number }> = {};
OUTER_NODES.forEach((n, i) => {
  POS_MAP[n.id] = getPos(i);
});

function curvedPath(x1: number, y1: number, x2: number, y2: number, bend: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = (-dy / len) * bend;
  const ny = (dx / len) * bend;
  return `M ${x1} ${y1} Q ${mx + nx} ${my + ny} ${x2} ${y2}`;
}

export default function AIEcosystem() {
  const centerPaths = OUTER_NODES.map((n, i) => {
    const p = POS_MAP[n.id];
    const bend = i % 2 === 0 ? 3 : -3;
    return {
      id: `center-${n.id}`,
      d: curvedPath(50, 50, p.x, p.y, bend),
    };
  });

  const crossPaths = CROSS_LINKS.map(([a, b], i) => {
    const pa = POS_MAP[a];
    const pb = POS_MAP[b];
    const bend = i % 2 === 0 ? 2.5 : -2.5;
    return {
      id: `cross-${a}-${b}`,
      d: curvedPath(pa.x, pa.y, pb.x, pb.y, bend),
    };
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12 pointer-events-auto"
    >
      <style>{`
        @keyframes sch-eco-pulse {
          0%, 100% { box-shadow: 0 0 10px 2px var(--glow-color, rgba(34,211,238,0.45)); }
          50% { box-shadow: 0 0 22px 6px var(--glow-color, rgba(34,211,238,0.85)); }
        }
        .sch-eco-glow { animation: sch-eco-pulse 2.6s ease-in-out infinite; }
        @keyframes sch-eco-line-brighten {
          0%, 80%, 100% { opacity: 0.35; }
          90% { opacity: 0.9; }
        }
        .sch-eco-line { animation: sch-eco-line-brighten 4s ease-in-out infinite; }
      `}</style>

      <div className="text-center mb-8">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-purple-300/80 uppercase border border-purple-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          AI Ecosystem
        </span>
      </div>

      <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md md:max-w-xl mx-auto">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <linearGradient id="sch-eco-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <filter id="sch-eco-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {crossPaths.map((p, i) => (
            <g key={p.id} className="sch-eco-line" style={{ animationDelay: `${i * 0.25}s` }}>
              <path d={p.d} fill="none" stroke="url(#sch-eco-gradient)" strokeWidth="0.35" strokeOpacity="0.5" filter="url(#sch-eco-blur)" />
              <circle r="0.6" fill="#22d3ee">
                <animateMotion dur={`${3 + (i % 4)}s`} repeatCount="indefinite" path={p.d} />
              </circle>
            </g>
          ))}

          {centerPaths.map((p, i) => (
            <g key={p.id} className="sch-eco-line" style={{ animationDelay: `${i * 0.18}s` }}>
              <path d={p.d} fill="none" stroke="url(#sch-eco-gradient)" strokeWidth="0.45" strokeOpacity="0.65" filter="url(#sch-eco-blur)" />
              <circle r="0.7" fill="#a78bfa">
                <animateMotion dur={`${2.4 + (i % 5) * 0.4}s`} repeatCount="indefinite" path={p.d} />
              </circle>
            </g>
          ))}
        </svg>

        {/* Center node */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="sch-eco-glow absolute z-20 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50 bg-white/[0.05] backdrop-blur-md"
          style={{ left: "50%", top: "50%", "--glow-color": "rgba(34,211,238,0.6)" } as React.CSSProperties}
        >
          <span className="font-mono text-[10px] sm:text-xs font-bold text-cyan-300">SCH OS</span>
        </motion.div>

        {/* Outer nodes */}
        {OUTER_NODES.map((n, i) => {
          const p = POS_MAP[n.id];
          return (
            <motion.div
              key={n.id}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <div
                className="sch-eco-glow flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border bg-white/[0.04] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 cursor-default whitespace-nowrap"
                style={{ borderColor: "rgba(167,139,250,0.4)", "--glow-color": "rgba(167,139,250,0.5)" } as React.CSSProperties}
              >
                <span className="font-mono text-[7px] sm:text-[9px] text-neutral-200">{n.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
