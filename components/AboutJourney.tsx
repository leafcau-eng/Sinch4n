"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutJourney() {
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
          The Journey
        </p>
        <h2 className="font-display mt-3 border-l-4 border-cyan-400 pl-3 text-2xl font-bold text-white md:text-3xl">
          Mengapa Saya Membangun SCH?
        </h2>
        <p className="mt-5 leading-relaxed text-neutral-300">
          Banyak bisnis menghabiskan waktu berjam-jam untuk pekerjaan manual
          yang repetitif. Saya membangun SCH Digital Agency dengan satu misi:
          memangkas pekerjaan manual itu menggunakan{" "}
          <span className="text-cyan-400">AI Automation</span> dan sistem
          otomatisasi. Dari <span className="text-cyan-400">Cianjur</span>,
          saya membangun sistem yang tidak hanya sekadar website, tetapi alat
          yang benar-benar bekerja untuk bisnis dan{" "}
          <span className="text-cyan-400">UMKM</span>.
        </p>
      </motion.div>
    </section>
  );
}
