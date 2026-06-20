"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEcosystemCounts } from "@/hooks/useEcosystemCounts";

// ============================================================
// Tipe data — sekarang merefleksikan lifecycle ecosystem_status
// (lihat Migration 003): planned | building | active | offline
// + 2 value lama yang dipertahankan untuk kompatibilitas:
// development | online
// ============================================================
export type EcosystemStatus =
  | "active"
  | "building"
  | "planned"
  | "offline"
  | "development" // legacy, dipertahankan untuk kompatibilitas
  | "online"; // legacy, dipertahankan untuk kompatibilitas

export interface EcosystemNode {
  product_key: string;
  display_name: string;
  status: EcosystemStatus;
  url: string | null;
  display_order: number;
}

interface ProjectNodeGraphProps {
  nodes: EcosystemNode[];
}

// Warna per status. Key huruf kecil karena data dari Supabase
// disimpan lowercase (lihat schema ecosystem_status.status).
const STATUS_COLOR: Record<EcosystemStatus, string> = {
  active: "#22d3ee",
  building: "#fbbf24",
  planned: "#a78bfa",
  offline: "#6b7280",
  development: "#a78bfa", // legacy, warna sama dengan planned
  online: "#34d399", // legacy
};

const STATUS_LABEL: Record<EcosystemStatus, string> = {
  active: "Active",
  building: "Building",
  planned: "Planned",
  offline: "Offline",
  development: "Development",
  online: "Online",
};

const CREATOR_HUB_COLOR = "#22d3ee";

// product_key yang dianggap sebagai pusat ekosistem (center node).
// Sesuai data seed: 'ai-creator-hub'.
const CENTER_PRODUCT_KEY = "ai-creator-hub";

// product_key yang menampilkan live counter (lihat useEcosystemCounts).
// Hanya AI Radar & Job Radar yang punya data count real dari Supabase
// (ai_news, jobs) — node lain tidak punya sumber count yang relevan.
const AI_RADAR_KEY = "ai-radar";
const JOB_RADAR_KEY = "job-radar";

// Format angka ringkas, mis. 1953 -> "1.953" (locale id-ID, titik
// sebagai pemisah ribuan, sesuai konvensi angka Indonesia).
function formatCount(n: number): string {
  return n.toLocaleString("id-ID");
}

const LINE_DURATION = 0.6;
const LINE_STAGGER = 0.15;
const NODE_STAGGER = 0.1;

// ============================================================
// Helper: hitung posisi radial (x, y dalam persen) untuk N node
// mengelilingi pusat, menggantikan koordinat x/y hardcoded yang
// dulu ada di NODES[]. Pusat selalu di (50, 50).
// ============================================================
function computeRadialPositions(count: number) {
  const radius = 38; // persen, jarak dari pusat
  const positions: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    // mulai dari atas (-90deg / -PI/2), searah jarum jam
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle) * 1.1; // sedikit elips, biar pas di card portrait
    positions.push({ x, y });
  }
  return positions;
}

// ============================================================
// Subtitle live counter, khusus node AI Radar & Job Radar.
// Tampil di bawah label status (mis. "Active" + "1.953 Articles · +1.953 Today").
// Return null untuk node lain / saat data belum tersedia (masih
// fetch pertama kali) — tidak menampilkan placeholder kosong yang
// bikin layout "lompat" begitu data datang.
// ============================================================
function RadarSubtitle({
  productKey,
  counts,
}: {
  productKey: string;
  counts: ReturnType<typeof useEcosystemCounts>["counts"];
}) {
  if (!counts) return null;

  if (productKey === AI_RADAR_KEY) {
    return (
      <span className="mt-0.5 font-mono text-[7px] text-neutral-400 text-center leading-tight">
        {formatCount(counts.aiRadar.total)} Articles
        <br />+{formatCount(counts.aiRadar.today)} Today
      </span>
    );
  }

  if (productKey === JOB_RADAR_KEY) {
    return (
      <span className="mt-0.5 font-mono text-[7px] text-neutral-400 text-center leading-tight">
        {formatCount(counts.jobRadar.total)} Jobs
        <br />+{formatCount(counts.jobRadar.today)} New
      </span>
    );
  }

  return null;
}

function CenterCard({
  node,
  delay,
}: {
  node: EcosystemNode;
  delay: number;
}) {
  const [open, setOpen] = useState(false);
  const hasUrl = Boolean(node.url);

  const content = (
    <>
      <div className="sch-creator-hub-glow relative flex flex-col items-center justify-center w-24 sm:w-28 px-3 py-3 rounded-xl border-2 bg-white/[0.05] backdrop-blur-md cursor-pointer">
        <span className="absolute -top-1 -right-1">
          <span className="block w-2.5 h-2.5 rounded-full bg-emerald-400 sch-blink-dot" />
        </span>
        <span className="font-mono text-[11px] text-neutral-100 text-center leading-tight font-semibold">
          {node.display_name}
        </span>
        <span
          className="mt-1 font-mono text-[8px] uppercase tracking-wider"
          style={{ color: CREATOR_HUB_COLOR }}
        >
          {STATUS_LABEL[node.status]}
        </span>
      </div>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-52 rounded-xl border border-cyan-400/30 bg-[#0a0a0f]/95 backdrop-blur-xl px-4 py-3 shadow-2xl z-40 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto`}
      >
        <p className="font-mono text-xs text-emerald-400 mb-1">
          🟢 {node.display_name}
        </p>
        <p className="font-mono text-[10px] text-neutral-300 mb-2">
          Status: {STATUS_LABEL[node.status]}
        </p>
        {hasUrl && (
          <p className="font-mono text-[10px] text-cyan-400">
            Click to Launch →
          </p>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease: "backOut" }}
      className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{ left: "50%", top: "50%" }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {hasUrl ? (
          <a
            href={node.url!}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (
                typeof window !== "undefined" &&
                window.innerWidth < 768 &&
                !open
              ) {
                e.preventDefault();
                setOpen(true);
              }
            }}
            className="relative block"
          >
            {content}
          </a>
        ) : (
          <div className="relative block">{content}</div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectNodeGraph({ nodes }: ProjectNodeGraphProps) {
  const { counts } = useEcosystemCounts();

  // Tidak ada data — render apa-apa daripada bikin diagram kosong aneh.
  if (!nodes || nodes.length === 0) {
    return null;
  }

  // Urutkan sesuai display_order (sudah seharusnya terurut dari query,
  // tapi dijaga di sini juga supaya komponen tidak bergantung pada
  // urutan caller).
  const sorted = [...nodes].sort((a, b) => a.display_order - b.display_order);

  const centerNode = sorted.find((n) => n.product_key === CENTER_PRODUCT_KEY);
  const orbitNodes = sorted.filter((n) => n.product_key !== CENTER_PRODUCT_KEY);

  const positions = computeRadialPositions(orbitNodes.length);
  const NODES_START =
    LINE_DURATION + orbitNodes.length * LINE_STAGGER + 0.15;

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
          SCH Ecosystem
        </span>
      </div>

      {/* Desktop radial layout */}
      <div className="hidden md:block relative w-full aspect-square max-w-xl mx-auto">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        >
          <defs>
            <filter id="sch-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {orbitNodes.map((n, i) => {
            const delay = i * LINE_STAGGER;
            const color = STATUS_COLOR[n.status];
            const pos = positions[i];
            const pathD = `M 50 50 L ${pos.x} ${pos.y}`;
            return (
              <g key={n.product_key}>
                <motion.line
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke={color}
                  strokeWidth="0.4"
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
                  x2={pos.x}
                  y2={pos.y}
                  stroke={color}
                  strokeWidth="0.4"
                  strokeOpacity="0.6"
                  className="sch-flow-line"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: delay + LINE_DURATION }}
                />
                {n.status === "active" && (
                  <circle r="1" fill={color}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path={pathD} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Center node */}
        {centerNode ? (
          <CenterCard node={centerNode} delay={NODES_START} />
        ) : (
          // Fallback: kalau product 'ai-creator-hub' tidak ditemukan
          // di data (mis. belum di-seed), tetap render label generik
          // alih-alih merender kosong/error.
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: NODES_START, ease: "backOut" }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: "50%", top: "50%" }}
          >
            <div className="sch-node-glow flex flex-col items-center justify-center w-24 h-24 rounded-full border border-cyan-400/40 bg-white/[0.04] backdrop-blur-md">
              <span className="font-mono text-sm font-bold text-cyan-300">SCH</span>
              <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">
                Core
              </span>
            </div>
          </motion.div>
        )}

        {/* Orbit nodes */}
        {orbitNodes.map((n, i) => {
          const nodeDelay = NODES_START + 0.15 + i * NODE_STAGGER;
          const pos = positions[i];
          return (
            <motion.div
              key={n.product_key}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: nodeDelay, ease: "backOut" }}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="sch-node-glow flex flex-col items-center justify-center w-20 sm:w-24 px-2 py-2 rounded-xl border bg-white/[0.04] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 cursor-default"
                style={
                  {
                    borderColor: `${STATUS_COLOR[n.status]}55`,
                    "--glow-color": `${STATUS_COLOR[n.status]}66`,
                  } as React.CSSProperties
                }
              >
                <span className="font-mono text-[10px] text-neutral-200 text-center leading-tight">
                  {n.display_name}
                </span>
                <span
                  className="mt-1 font-mono text-[8px] uppercase tracking-wider"
                  style={{ color: STATUS_COLOR[n.status] }}
                >
                  {STATUS_LABEL[n.status]}
                </span>
                <RadarSubtitle productKey={n.product_key} counts={counts} />
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
          <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">
            Core
          </span>
        </motion.div>

        {sorted
          .filter((n) => n.product_key !== CENTER_PRODUCT_KEY || true) // tampilkan semua termasuk center, urutan asli
          .map((n, i) => {
            const isCenter = n.product_key === CENTER_PRODUCT_KEY;
            const hasUrl = Boolean(n.url);
            return (
              <div key={n.product_key} className="flex flex-col items-center w-full">
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
                  className="w-px h-6 origin-top"
                  style={{
                    background: isCenter
                      ? CREATOR_HUB_COLOR
                      : STATUS_COLOR[n.status],
                  }}
                />
                {isCenter ? (
                  hasUrl ? (
                    <a
                      href={n.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 bg-white/[0.04] backdrop-blur-md sch-creator-hub-glow transition-transform active:scale-95"
                    >
                      <span className="relative w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 sch-blink-dot" />
                      </span>
                      <div className="text-left">
                        <p className="font-mono text-xs text-neutral-200">
                          {n.display_name}
                        </p>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                          {STATUS_LABEL[n.status]} · Tap to Launch →
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 bg-white/[0.04] backdrop-blur-md sch-creator-hub-glow">
                      <span className="relative w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 sch-blink-dot" />
                      </span>
                      <div className="text-left">
                        <p className="font-mono text-xs text-neutral-200">
                          {n.display_name}
                        </p>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                          {STATUS_LABEL[n.status]}
                        </p>
                      </div>
                    </div>
                  )
                ) : (
                  <div
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-white/[0.04] backdrop-blur-md transition-transform active:scale-95"
                    style={{ borderColor: `${STATUS_COLOR[n.status]}55` }}
                  >
                    <span
                      className="w-2 h-2 rounded-full sch-node-glow"
                      style={
                        {
                          backgroundColor: STATUS_COLOR[n.status],
                          "--glow-color": `${STATUS_COLOR[n.status]}aa`,
                        } as React.CSSProperties
                      }
                    />
                    <div className="text-left">
                      <p className="font-mono text-xs text-neutral-200">
                        {n.display_name}
                      </p>
                      <p
                        className="font-mono text-[9px] uppercase tracking-wider"
                        style={{ color: STATUS_COLOR[n.status] }}
                      >
                        {STATUS_LABEL[n.status]}
                      </p>
                      <RadarSubtitle productKey={n.product_key} counts={counts} />
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
