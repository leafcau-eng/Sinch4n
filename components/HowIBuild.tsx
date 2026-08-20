"use client";

// components/HowIBuild.tsx
//
// Phase 12B — section "How I Build". Tujuannya nunjukkin cara berpikir/
// proses, BUKAN dokumentasi teknis lengkap, dan BUKAN klaim bahwa semua
// project selalu pakai urutan persis ini — makanya ada subtitle disclaimer
// eksplisit ("not every project touches every step") daripada nge-hedge
// tiap baris satu-satu, yang malah bikin section ini kepanjangan/ribet.

import { Fragment } from "react";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Problem", description: "Understand the constraint before proposing a solution." },
  { n: "02", title: "Architecture", description: "Map the system — data, components, dependencies — before writing code." },
  { n: "03", title: "AI / Automation", description: "Apply AI and automation where they remove repetitive work." },
  { n: "04", title: "Database", description: "Structure data so it stays queryable and safe to build on." },
  { n: "05", title: "Integration", description: "Connect systems and existing tools without duplicating logic." },
  { n: "06", title: "Deployment", description: "Ship, verify, and monitor — a passing build isn't the finish line." },
];

export default function HowIBuild() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-4">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          How I Build
        </span>
      </div>
      <p className="text-center text-xs text-neutral-500 mb-12 max-w-md mx-auto">
        A general shape, not a fixed formula — not every project touches every step.
      </p>

      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {STEPS.map((step, i) => (
          <Fragment key={step.n}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-1 py-5 lg:py-0 lg:text-center border-t lg:border-t-0 border-white/5 first:border-t-0"
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
            </motion.div>

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
    </section>
  );
}
