"use client";

// components/WhatIBuild.tsx
//
// Phase 12B — section positioning "What I Build". Copy persis dari
// keputusan Rian, capability-framing bukan klaim hasil bisnis — tidak
// ada angka/metric/klaim capability yang belum terverifikasi.

import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "AI Automation",
    description: "Systems that automate repetitive business operations.",
  },
  {
    title: "Business Websites",
    description: "Conversion-focused websites for businesses.",
  },
  {
    title: "Prospecting Systems",
    description:
      "Automated prospect discovery, qualification, and outreach workflows.",
  },
  {
    title: "AI Content Systems",
    description:
      "Tools for creating, organizing, and processing AI-generated content.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          What I Build
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {CAPABILITIES.map((c) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-[20px] p-7 border border-cyan-400/20 bg-white/[0.03] backdrop-blur-md"
          >
            <h3 className="font-mono text-sm font-bold text-cyan-300 uppercase tracking-wide mb-2">
              {c.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {c.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
