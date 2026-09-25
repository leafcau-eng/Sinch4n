"use client";

import { motion } from "framer-motion";
import { ABOUT_FAQS } from "@/lib/aboutFaqs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutFAQ() {
  return (
    <section className="relative w-full px-6 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto max-w-2xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400/60">
          FAQ
        </p>
        <h2 className="font-display mt-3 border-l-4 border-cyan-400 pl-3 text-2xl font-bold text-white md:text-3xl">
          Pertanyaan Umum
        </h2>
        <div className="mt-6 space-y-6">
          {ABOUT_FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="text-white">{f.q}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">{f.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
