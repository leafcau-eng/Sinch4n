"use client";

// components/CategoryShowcase.tsx
//
// Kartu kategori ringkas di Portfolio utama (gaya "Versi A" dari
// mockup: gradient diagonal, ikon raksasa transparan di pojok,
// dot pattern, tombol CTA solid). Klik kartu -> pindah ke
// app/portfolio/[category]/page.tsx.
//
// Jumlah project ("N template tersedia") DIHITUNG OTOMATIS dari
// PROJECTS di lib/projectsData.ts, bukan hardcoded — supaya kalau
// nanti ditambah project baru di kategori yang sama, teksnya
// otomatis update tanpa perlu ubah komponen ini.
//
// Kategori dengan 0 project TIDAK ditampilkan (sesuai keputusan:
// sembunyikan dulu sampai ada isinya).

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projectsData";

// Metadata tampilan per kategori (ikon, label, warna). Ditambah
// manual setiap kali ada kategori baru yang sudah punya project.
// Kategori yang tidak terdaftar di sini tapi ada di PROJECTS akan
// pakai fallback default di bawah.
const CATEGORY_META: Record<
  string,
  { emoji: string; label: string; gradient: string; glowColor: string }
> = {
  laundry: {
    emoji: "🧺",
    label: "Laundry Business",
    gradient: "linear-gradient(135deg, #0d3c2f 0%, #0a1f3c 60%, #1a0d3c 100%)",
    glowColor: "74,222,128",
  },
  wedding: {
    emoji: "💍",
    label: "Wedding Business",
    gradient: "linear-gradient(135deg, #3c0d2f 0%, #1f0a3c 60%, #0d1a3c 100%)",
    glowColor: "244,114,182",
  },
};

const DEFAULT_META = {
  emoji: "✨",
  label: "Project",
  gradient: "linear-gradient(135deg, #0d2137, #1a0d37)",
  glowColor: "34,211,238",
};

export default function CategoryShowcase() {
  // Hitung kategori unik + jumlah project per kategori, dari data asli.
  const categoryCounts = PROJECTS.reduce<Record<string, number>>(
    (acc, project) => {
      acc[project.category] = (acc[project.category] ?? 0) + 1;
      return acc;
    },
    {}
  );

  const categories = Object.entries(categoryCounts); // [["laundry", 1], ...]

  // Tidak ada kategori dengan project sama sekali — jangan render
  // section kosong.
  if (categories.length === 0) return null;

  return (
    <section className="relative z-10 w-full px-4 py-16">
      <div className="text-center mb-8">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          Browse by Category
        </span>
        <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-white">
          Project Showcase
        </h2>
      </div>

      <div className="grid gap-5 max-w-md mx-auto [grid-template-columns:1fr] sm:max-w-2xl sm:[grid-template-columns:repeat(2,1fr)]">
        {categories.map(([categoryValue, count]) => {
          const meta = CATEGORY_META[categoryValue] ?? {
            ...DEFAULT_META,
            label: categoryValue,
          };

          return (
            <Link key={categoryValue} href={`/portfolio/${categoryValue}`}>
              <motion.div
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[20px] p-7 overflow-hidden cursor-pointer border"
                style={{
                  background: meta.gradient,
                  borderColor: `rgba(${meta.glowColor},0.25)`,
                  boxShadow: `0 8px 32px rgba(${meta.glowColor},0.12)`,
                }}
              >
                {/* Ikon raksasa transparan di pojok */}
                <span
                  className="absolute pointer-events-none select-none"
                  style={{
                    fontSize: "110px",
                    opacity: 0.12,
                    right: "-20px",
                    top: "-20px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  {meta.emoji}
                </span>

                {/* Dot pattern halus */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    opacity: 0.5,
                  }}
                />

                <div className="relative z-[2]">
                  <span className="block text-3xl mb-2.5">{meta.emoji}</span>
                  <div className="text-lg font-bold text-white mb-1">
                    {meta.label}
                  </div>
                  <div
                    className="text-[11px] mb-3.5"
                    style={{ color: `rgb(${meta.glowColor})` }}
                  >
                    {count} {count === 1 ? "template tersedia" : "template tersedia"}
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold px-4 py-2 rounded-full text-black"
                    style={{ background: `rgb(${meta.glowColor})` }}
                  >
                    Lihat Project →
                  </span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
