"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.5, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function Node({
  label,
  sub,
  highlight,
}: {
  label: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      variants={itemVariant}
      className={`sch-eco-glow relative z-10 flex flex-col items-center justify-center rounded-xl border backdrop-blur-md px-4 py-2.5 text-center transition-transform duration-300 hover:scale-105 ${
        highlight
          ? "border-cyan-400/60 bg-cyan-400/[0.06] w-28 h-16"
          : "border-purple-400/30 bg-white/[0.04]"
      }`}
      style={
        {
          "--glow-color": highlight
            ? "rgba(34,211,238,0.55)"
            : "rgba(167,139,250,0.35)",
        } as React.CSSProperties
      }
    >
      <span
        className={`font-mono ${
          highlight ? "text-sm text-cyan-300 font-bold" : "text-[10px] sm:text-xs text-neutral-200"
        }`}
      >
        {label}
      </span>
      {sub && (
        <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-500 mt-0.5">
          {sub}
        </span>
      )}
    </motion.div>
  );
}

function VLine({ h = 24 }: { h?: number }) {
  return (
    <motion.div
      variants={itemVariant}
      className="sch-eco-vline w-px"
      style={{ height: h, background: "linear-gradient(#22d3ee, #a78bfa)" }}
    />
  );
}

function BranchConnector({ count }: { count: number }) {
  const positions = Array.from({ length: count }, (_, i) => ((i + 1) / (count + 1)) * 100);
  return (
    <motion.svg
      variants={itemVariant}
      viewBox="0 0 100 20"
      className="w-full h-5 overflow-visible"
      preserveAspectRatio="none"
    >
      {positions.map((x, i) => (
        <path
          key={i}
          d={`M 50 0 V 8 H ${x} V 20`}
          fill="none"
          stroke="url(#sch-tree-gradient)"
          strokeWidth="0.6"
          className="sch-eco-line"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
      <defs>
        <linearGradient id="sch-tree-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

function Branch({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center gap-3">{children}</div>;
}

export default function AIEcosystem() {
  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 pointer-events-auto">
      <style>{`
        @keyframes sch-eco-pulse {
          0%, 100% { box-shadow: 0 0 8px 2px var(--glow-color, rgba(167,139,250,0.35)); }
          50% { box-shadow: 0 0 18px 5px var(--glow-color, rgba(167,139,250,0.6)); }
        }
        .sch-eco-glow { animation: sch-eco-pulse 2.6s ease-in-out infinite; }
        @keyframes sch-eco-line-brighten {
          0%, 80%, 100% { opacity: 0.35; }
          90% { opacity: 0.95; }
        }
        .sch-eco-line { animation: sch-eco-line-brighten 3.5s ease-in-out infinite; }
        @keyframes sch-eco-vline-flow {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        .sch-eco-vline { animation: sch-eco-vline-flow 2s ease-in-out infinite; }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-purple-300/80 uppercase border border-purple-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          AI Ecosystem
        </span>
      </motion.div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center"
      >
        <Node label="USER" />
        <VLine />
        <Node label="Next.js" />
        <VLine />
        <Node label="Supabase" />
        <VLine />
        <Node label="SCH OS" highlight sub="Core" />

        <div className="w-full max-w-xl">
          <BranchConnector count={4} />
        </div>

        <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-10">
          <Branch>
            <Node label="AI Writer" />
            <VLine h={20} />
            <Node label="Claude" />
          </Branch>

          <Branch>
            <Node label="Image Studio" />
            <VLine h={20} />
            <Node label="Flux / OpenAI" />
          </Branch>

          <Branch>
            <Node label="Asset Manager" />
            <VLine h={20} />
            <Node label="Storage" />
          </Branch>

          <Branch>
            <Node label="Video Processing" />
            <VLine h={20} />
            <Node label="Python Worker" />
            <div className="w-40">
              <BranchConnector count={3} />
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
              <Branch>
                <Node label="FFmpeg" />
              </Branch>
              <Branch>
                <Node label="Whisper" />
                <VLine h={16} />
                <Node label="Storage" />
              </Branch>
              <Branch>
                <Node label="Auto Clipper" />
              </Branch>
            </div>
          </Branch>
        </div>
      </motion.div>
    </section>
  );
}
