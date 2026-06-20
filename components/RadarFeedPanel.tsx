"use client";

// components/RadarFeedPanel.tsx
//
// Panel ringkasan "Live Radar Feed" — ditampilkan SEBELUM
// ProjectNodeGraph (SCH Ecosystem) di app/portfolio/page.tsx.
//
// Beda dengan RadarSubtitle (counter di node graph, lihat
// ProjectNodeGraph.tsx) yang polling tiap 5 menit — panel ini
// fetch SEKALI saat halaman dibuka (decision log: "cukup fetch
// sekali, statis sampai reload"). Datanya di-fetch di Server
// Component (app/portfolio/page.tsx), bukan client-side, supaya
// tidak ada request tambahan dari browser untuk fitur ini.

import { motion } from "framer-motion";

export interface RadarFeedItem {
  id: string;
  title: string;
  source_name: string;
  source_url: string;
}

export interface RadarFeedData {
  aiNews: {
    items: RadarFeedItem[];
    totalCount: number;
    todayCount: number;
  };
  jobs: {
    items: RadarFeedItem[];
    totalCount: number;
    todayCount: number;
  };
  fetchedAt: string; // ISO string, waktu fetch terjadi (server time)
}

interface RadarFeedPanelProps {
  data: RadarFeedData | null;
}

function formatCount(n: number): string {
  return n.toLocaleString("id-ID");
}

// Format "21 Jun 2026 · 02:48" dari ISO string, locale Indonesia.
function formatTimestamp(iso: string): string {
  const date = new Date(iso);
  const datePart = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timePart = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${datePart} · ${timePart}`;
}

function FeedSection({
  icon,
  title,
  items,
  totalCount,
  todayCount,
  unitLabel,
  newLabel,
  accentColor,
  fetchedAt,
}: {
  icon: string;
  title: string;
  items: RadarFeedItem[];
  totalCount: number;
  todayCount: number;
  unitLabel: string; // "artikel" | "lowongan"
  newLabel: string; // "baru masuk" | "baru"
  accentColor: string;
  fetchedAt: string;
}) {
  const remaining = totalCount - items.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-[460px] mx-auto mb-5 rounded-2xl border backdrop-blur-md px-4 py-4"
      style={{
        borderColor: `${accentColor}4D`, // ~30% opacity
        background: `${accentColor}08`,
        boxShadow: `0 0 24px ${accentColor}14`,
      }}
    >
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-mono text-[13px] font-bold text-white">
          {icon} {title}
        </span>
        <span className="font-mono text-[9px] text-neutral-500">
          {formatTimestamp(fetchedAt)}
        </span>
      </div>

      <p className="font-mono text-[11px] text-neutral-400 mb-3">
        <span style={{ color: accentColor }} className="font-bold">
          {formatCount(todayCount)} {unitLabel}
        </span>{" "}
        {newLabel}
      </p>

      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-[10.5px] leading-snug text-neutral-300 px-2 py-1 rounded-md border-l-2 border-transparent hover:bg-white/[0.04] transition-colors"
            style={
              {
                "--hover-border": accentColor,
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.borderLeftColor = accentColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderLeftColor = "transparent";
            }}
          >
            <span style={{ color: `${accentColor}CC` }}>
              [{item.source_name}]
            </span>{" "}
            <span className="text-neutral-200">{item.title}</span>
          </a>
        ))}
      </div>

      {remaining > 0 && (
        <p className="font-mono text-[10px] text-neutral-600 italic text-center mt-2.5">
          ...dan {formatCount(remaining)} lainnya
        </p>
      )}
    </motion.div>
  );
}

export default function RadarFeedPanel({ data }: RadarFeedPanelProps) {
  // Tidak ada data (fetch gagal / belum ada row) — jangan render
  // section kosong yang bikin layout aneh.
  if (!data) return null;

  return (
    <section className="relative z-10 w-full px-4 pt-8 pointer-events-auto">
      <div className="text-center mb-5">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          Live Radar Feed
        </span>
      </div>

      <FeedSection
        icon="🤖"
        title="SCH AI Radar Update"
        items={data.aiNews.items}
        totalCount={data.aiNews.totalCount}
        todayCount={data.aiNews.todayCount}
        unitLabel="artikel"
        newLabel="baru masuk"
        accentColor="#4ade80"
        fetchedAt={data.fetchedAt}
      />

      <FeedSection
        icon="💼"
        title="SCH Job Radar Update"
        items={data.jobs.items}
        totalCount={data.jobs.totalCount}
        todayCount={data.jobs.todayCount}
        unitLabel="lowongan"
        newLabel="baru"
        accentColor="#22d3ee"
        fetchedAt={data.fetchedAt}
      />

      {/* Connector turun ke arah ProjectNodeGraph di bawahnya */}
      <div className="relative max-w-[460px] mx-auto h-12">
        <svg
          viewBox="0 0 460 48"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
        >
          <style>{`
            .sch-feed-connector { stroke-dasharray: 6 6; animation: sch-feed-dash 1.2s linear infinite; }
            @keyframes sch-feed-dash { to { stroke-dashoffset: -24; } }
          `}</style>
          <path
            d="M 130 0 C 130 24, 230 24, 230 48"
            fill="none"
            stroke="#4ade80"
            strokeWidth="1.2"
            opacity="0.6"
            className="sch-feed-connector"
          />
          <path
            d="M 330 0 C 330 24, 230 24, 230 48"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.2"
            opacity="0.6"
            className="sch-feed-connector"
          />
        </svg>
      </div>
    </section>
  );
}
