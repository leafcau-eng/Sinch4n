"use client";

// components/HowIBuild.tsx
//
// Phase 12B — section "How I Build". Tujuannya nunjukkin cara berpikir/
// proses, BUKAN dokumentasi teknis lengkap, dan BUKAN klaim bahwa semua
// project selalu pakai urutan persis ini — makanya ada subtitle disclaimer
// eksplisit ("not every project touches every step") daripada nge-hedge
// tiap baris satu-satu, yang malah bikin section ini kepanjangan/ribet.
//
// Revisi klik: tiap step sekarang bisa dibuka jadi modal detail
// (Untuk Apa / Keuntungan / Kelebihan / Contoh Nyata). Layout step +
// panah tidak diubah, cuma ditambah onClick + state.

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { STEPS } from "@/lib/howIBuildDetails";
import DetailModal, { type DetailModalContent } from "@/components/DetailModal";

export default function HowIBuild() {
  const [active, setActive] = useState<DetailModalContent | null>(null);

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20">
      <div className="mb-4">
        <h2 className="font-display border-l-4 border-cyan-400 pl-3 text-2xl font-bold text-white md:text-3xl">
          How I Build
        </h2>
      </div>
      <p className="text-xs text-neutral-500 mb-12 max-w-md">
        A general shape, not a fixed formula — not every project touches every step.
      </p>

      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {STEPS.map((step, i) => (
          <Fragment key={step.n}>
            <motion.button
              type="button"
              onClick={() => setActive(step)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-1 py-5 lg:py-0 lg:text-center border-t lg:border-t-0 border-white/5 first:border-t-0 text-left lg:cursor-pointer transition-opacity hover:opacity-80"
            >
              <span className="font-mono text-[10px] text-cyan-400/60 block mb-1">
                {step.n}
              </span>
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wide mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed lg:max-w-[150px] lg:mx-auto">
                {step.description}
              </p>
            </motion.button>

            {i < STEPS.length - 1 && (
              <div
                className="hidden lg:flex items-center justify-center text-cyan-400/25 text-base px-1"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <DetailModal content={active} onClose={() => setActive(null)} />
    </section>
  );
}
