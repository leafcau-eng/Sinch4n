"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const ABOUT_FAQS = [
  {
    q: "Apa itu SCH Digital Agency?",
    a: "SCH Digital Agency adalah agensi digital yang didirikan oleh Rian Riyandi, berfokus pada pembuatan website bisnis, AI automation, dan custom digital systems.",
  },
  {
    q: "Di mana lokasi SCH Digital Agency?",
    a: "SCH Digital Agency berlokasi di Kp. Haurwangi, Kec. Haurwangi, Kabupaten Cianjur, Jawa Barat.",
  },
  {
    q: "Layanan apa saja yang ditawarkan SCH Digital Agency?",
    a: "SCH Digital Agency menawarkan pembuatan website bisnis, AI automation, prospecting systems, dan custom digital systems untuk berbagai jenis usaha.",
  },
];

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
        <h2 className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">
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
