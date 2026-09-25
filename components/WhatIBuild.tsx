"use client";

// components/WhatIBuild.tsx
//
// Phase 12B — section positioning "What I Build". Copy persis dari
// keputusan Rian, capability-framing bukan klaim hasil bisnis — tidak
// ada angka/metric/klaim capability yang belum terverifikasi.
//
// Revisi klik: card sekarang bisa dibuka jadi modal detail
// (Untuk Apa / Keuntungan / Kelebihan / Contoh Nyata). Grid dan style
// card asli tidak diubah, cuma ditambah onClick + state.

import { useState } from "react";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/whatIBuildDetails";
import DetailModal, { type DetailModalContent } from "@/components/DetailModal";

export default function WhatIBuild() {
  const [active, setActive] = useState<DetailModalContent | null>(null);

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20">
      <div className="mb-10">
        <h2 className="font-display border-l-4 border-cyan-400 pl-3 text-2xl font-bold text-white md:text-3xl">
          What I Build
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {CAPABILITIES.map((c) => (
          <motion.button
            key={c.title}
            type="button"
            onClick={() => setActive(c)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-[20px] p-7 border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-purple-500/[0.06] backdrop-blur-md text-left transition-colors hover:border-cyan-400/50 cursor-pointer"
          >
            <h3 className="font-mono text-sm font-bold uppercase tracking-wide mb-2 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {c.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {c.description}
            </p>
            <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-cyan-400/50">
              Lihat detail →
            </span>
          </motion.button>
        ))}
      </div>

      <DetailModal content={active} onClose={() => setActive(null)} />
    </section>
  );
}
