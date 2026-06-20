"use client";

import { motion } from "framer-motion";

type NodeStatus = "Active" | "Building" | "Development" | "Online";

interface ProjectNode {
  id: string;
  label: string;
  status: NodeStatus;
  x: number;
  y: number;
}

const STATUS_COLOR: Record<NodeStatus, string> = {
  Active: "#22d3ee",
  Building: "#fbbf24",
  Development: "#a78bfa",
  Online: "#34d399",
};

const NODES: ProjectNode[] = [
  { id: "creator-hub", label: "AI Creator Hub", status: "Active", x: 50, y: 12 },
  { id: "auto-clipper", label: "Auto Clipper", status: "Building", x: 82.9, y: 31 },
  { id: "ai-writer", label: "AI Writer", status: "Active", x: 82.9, y: 69 },
  { id: "video-studio", label: "Video Studio", status: "Development", x: 50, y: 88 },
  { id: "asset-manager", label: "Asset Manager", status: "Active", x: 17.1, y: 69 },
  { id: "automation-engine", label: "Automation Engine", status: "Online", x: 17.1, y: 31 },
];

export default function ProjectNodeGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-3xl mx-auto px-4 py-10 pointer-events-auto"
    >
      <style>{`
        @keyframes sch-dash { to { stroke-dashoffset: -40; } }
        @keyframes sch-glow-pulse {
          0%, 100% { box-shadow: 0 0 8px 2px var(--glow-color, rgba(34,211,238,0.5)); }
          50% { box-shadow: 0 0 20px 6px var(--glow-color, rgba(34,211,238,0.8)); }
        }
        .sch-line { stroke-dasharray: 6 6; animation: sch-dash 1.2s linear infinite; }
        .sch-node-glow { animation: sch-glow-pulse 2.4s ease-in-out infinite; }
      `}</style>

      <div className="text-center mb-8">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          Currently Building
        </span>
      </div>

      {/* Desktop radial layout */}
      <div className="hidden md:block relative w-full aspect-square max-w-xl mx-auto">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <filter id="sch-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {NODES.map((n) => (
            <line
              key={n.id}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke={STATUS_COLOR[n.status]}
              strokeWidth="0.4"
              strokeOpacity="0.6"
              className="sch-line"
              filter="url(#sch-glow-filter)"
            />
          ))}
        </svg>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 flex flex-col items-center justify-center w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 bg-white/[0.04] backdrop-blur-md sch-node-glow"
          style={{ left: "50%", top: "50%", "--glow-color": "rgba(34,211,238,0.5)" } as React.CSSProperties}
        >
          <span className="font-mono text-sm font-bold text-cyan-300">SCH</span>
          <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Core</span>
        </motion.div>

        {NODES.map((n, i) => (
          <motion.div
            key={n.id}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div
              className="sch-node-glow flex flex-col items-center justify-center w-20 sm:w-24 px-2 py-2 rounded-xl border bg-white/[0.04] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 cursor-default"
              style={{ borderColor: `${STATUS_COLOR[n.status]}55`, "--glow-color": `${STATUS_COLOR[n.status]}66` } as React.CSSProperties}
            >
              <span className="font-mono text-[10px] text-neutral-200 text-center leading-tight">{n.label}</span>
              <span className="mt-1 font-mono text-[8px] uppercase tracking-wider" style={{ color: STATUS_COLOR[n.status] }}>
                {n.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile vertical flow */}
      <div className="md:hidden flex flex-col items-center gap-0">
        <div
          className="sch-node-glow flex flex-col items-center justify-center w-20 h-20 rounded-full border border-cyan-400/40 bg-white/[0.04] backdrop-blur-md"
          style={{ "--glow-color": "rgba(34,211,238,0.5)" } as React.CSSProperties}
        >
          <span className="font-mono text-sm font-bold text-cyan-300">SCH</span>
          <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Core</span>
        </div>

        {NODES.map((n, i) => (
          <div key={n.id} className="flex flex-col items-center">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-px h-6"
              style={{ background: STATUS_COLOR[n.status] }}
            />
            <div
              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-white/[0.04] backdrop-blur-md transition-transform active:scale-95"
              style={{ borderColor: `${STATUS_COLOR[n.status]}55` }}
            >
              <span
                className="w-2 h-2 rounded-full sch-node-glow"
                style={{ backgroundColor: STATUS_COLOR[n.status], "--glow-color": `${STATUS_COLOR[n.status]}aa` } as React.CSSProperties}
              />
              <div className="text-left">
                <p className="font-mono text-xs text-neutral-200">{n.label}</p>
                <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: STATUS_COLOR[n.status] }}>
                  {n.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
