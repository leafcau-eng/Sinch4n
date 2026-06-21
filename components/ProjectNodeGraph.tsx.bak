"use client";

import { useState } from "react";
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

const CREATOR_HUB_COLOR = "#22d3ee";
const CREATOR_HUB_URL = "https://ai-creator-hub.vercel.app";

const NODES: ProjectNode[] = [
  { id: "creator-hub", label: "AI Creator Hub", status: "Active", x: 50, y: 12 },
  { id: "auto-clipper", label: "Auto Clipper", status: "Building", x: 82.9, y: 31 },
  { id: "ai-writer", label: "AI Writer", status: "Active", x: 82.9, y: 69 },
  { id: "video-studio", label: "Video Studio", status: "Development", x: 50, y: 88 },
  { id: "asset-manager", label: "Asset Manager", status: "Active", x: 17.1, y: 69 },
  { id: "automation-engine", label: "Automation Engine", status: "Online", x: 17.1, y: 31 },
];

const LINE_DURATION = 0.6;
const LINE_STAGGER = 0.15;
const NODE_STAGGER = 0.1;
const NODES_START = LINE_DURATION + NODES.length * LINE_STAGGER + 0.15;

function CreatorHubCard({ x, y, delay }: { x: number; y: number; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease: "backOut" }}
      className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
        <a
          href={CREATOR_HUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (typeof window !== "undefined" && window.innerWidth < 768 && !open) {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className="relative block"
        >
          <div className="sch-creator-hub-glow relative flex flex-col items-center justify-center w-24 sm:w-28 px-3 py-3 rounded-xl border-2 bg-white/[0.05] backdrop-blur-md cursor-pointer">
            <span className="absolute -top-1 -right-1">
              <span className="block w-2.5 h-2.5 rounded-full bg-emerald-400 sch-blink-dot" />
            </span>
            <span className="font-mono text-[11px] text-neutral-100 text-center leading-tight font-semibold">
              AI Creator Hub
            </span>
            <span className="mt-1 font-mono text-[8px] uppercase tracking-wider" style={{ color: CREATOR_HUB_COLOR }}>
              Active
            </span>
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-52 rounded-xl border border-cyan-400/30 bg-[#0a0a0f]/95 backdrop-blur-xl px-4 py-3 shadow-2xl z-40 transition-all duration-300 ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            } md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto`}
          >
            <p className="font-mono text-xs text-emerald-400 mb-1">🟢 AI Creator Hub</p>
            <p className="font-mono text-[10px] text-neutral-300 mb-2">Status: Online</p>
            <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider mb-1">Modules</p>
            <ul className="font-mono text-[10px] text-neutral-300 space-y-0.5 mb-2">
              <li>• AI Writer</li>
              <li>• Image Studio</li>
              <li>• Asset Manager</li>
              <li>• Video Studio</li>
            </ul>
            <p className="font-mono text-[10px] text-cyan-400">Click to Launch →</p>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectNodeGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 w-full max-w-3xl mx-auto px-4 py-10 pointer-events-auto"
    >
      <style>{`
        @keyframes sch-dash { to { stroke-dashoffset: -40; } }
        @keyframes sch-glow-pulse {
          0%, 100% { box-shadow: 0 0 8px 2px var(--glow-color, rgba(34,211,238,0.5)); }
          50% { box-shadow: 0 0 20px 6px var(--glow-color, rgba(34,211,238,0.8)); }
        }
        .sch-node-glow { animation: sch-glow-pulse 2.4s ease-in-out infinite; }
        .sch-flow-line { stroke-dasharray: 6 6; animation: sch-dash 1.2s linear infinite; }

        .sch-creator-hub-glow {
          border-color: rgba(34,211,238,0.5);
          box-shadow: 0 0 10px 3px rgba(34,211,238,0.5);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .group:hover .sch-creator-hub-glow {
          box-shadow: 0 0 22px 6px rgba(34,211,238,0.85);
          transform: scale(1.05);
        }
        @keyframes sch-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .sch-blink-dot {
          animation: sch-blink 2s ease-in-out infinite;
          box-shadow: 0 0 6px 2px rgba(52,211,153,0.7);
        }
      `}</style>

      <div className="text-center mb-6">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          Currently Building
        </span>
      </div>

      {/* Desktop radial layout */}
      <div className="hidden md:block relative w-full aspect-square max-w-xl mx-auto">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <filter id="sch-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {NODES.map((n, i) => {
            const delay = i * LINE_STAGGER;
            const isCreatorHub = n.id === "creator-hub";
            const color = isCreatorHub ? CREATOR_HUB_COLOR : STATUS_COLOR[n.status];
            const pathD = `M 50 50 L ${n.x} ${n.y}`;
            return (
              <g key={n.id}>
                <motion.line
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke={color}
                  strokeWidth={isCreatorHub ? "0.6" : "0.4"}
                  strokeOpacity="0.7"
                  filter="url(#sch-glow-filter)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: LINE_DURATION, delay, ease: "easeInOut" }}
                />
                <motion.line
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke={color}
                  strokeWidth={isCreatorHub ? "0.6" : "0.4"}
                  strokeOpacity="0.6"
                  className="sch-flow-line"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: delay + LINE_DURATION }}
                />
                {isCreatorHub && (
                  <circle r="1" fill={CREATOR_HUB_COLOR}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path={pathD} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: NODES_START, ease: "backOut" }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: "50%" }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="sch-node-glow flex flex-col items-center justify-center w-24 h-24 rounded-full border border-cyan-400/40 bg-white/[0.04] backdrop-blur-md"
            style={{ "--glow-color": "rgba(34,211,238,0.5)" } as React.CSSProperties}
          >
            <span className="font-mono text-sm font-bold text-cyan-300">SCH</span>
            <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Core</span>
          </motion.div>
        </motion.div>

        {/* Surrounding nodes */}
        {NODES.map((n, i) => {
          const nodeDelay = NODES_START + 0.15 + i * NODE_STAGGER;
          if (n.id === "creator-hub") {
            return <CreatorHubCard key={n.id} x={n.x} y={n.y} delay={nodeDelay} />;
          }
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: nodeDelay, ease: "backOut" }}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                className="sch-node-glow flex flex-col items-center justify-center w-20 sm:w-24 px-2 py-2 rounded-xl border bg-white/[0.04] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 cursor-default"
                style={{ borderColor: `${STATUS_COLOR[n.status]}55`, "--glow-color": `${STATUS_COLOR[n.status]}66` } as React.CSSProperties}
              >
                <span className="font-mono text-[10px] text-neutral-200 text-center leading-tight">{n.label}</span>
                <span className="mt-1 font-mono text-[8px] uppercase tracking-wider" style={{ color: STATUS_COLOR[n.status] }}>
                  {n.status}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile vertical flow */}
      <div className="md:hidden flex flex-col items-center gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="sch-node-glow flex flex-col items-center justify-center w-20 h-20 rounded-full border border-cyan-400/40 bg-white/[0.04] backdrop-blur-md"
          style={{ "--glow-color": "rgba(34,211,238,0.5)" } as React.CSSProperties}
        >
          <span className="font-mono text-sm font-bold text-cyan-300">SCH</span>
          <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Core</span>
        </motion.div>

        {NODES.map((n, i) => {
          const isCreatorHub = n.id === "creator-hub";
          return (
            <div key={n.id} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
                className="w-px h-6 origin-top"
                style={{ background: isCreatorHub ? CREATOR_HUB_COLOR : STATUS_COLOR[n.status] }}
              />
              {isCreatorHub ? (
                <a
                  href={CREATOR_HUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 bg-white/[0.04] backdrop-blur-md sch-creator-hub-glow transition-transform active:scale-95"
                >
                  <span className="relative w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 sch-blink-dot" />
                  </span>
                  <div className="text-left">
                    <p className="font-mono text-xs text-neutral-200">AI Creator Hub</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                      Online · Tap to Launch →
                    </p>
                  </div>
                </a>
              ) : (
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
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
