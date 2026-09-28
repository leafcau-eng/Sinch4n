"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const PIPELINE = [
  "Discover",
  "Prospek",
  "Buat Demo",
  "Kirim",
  "Tracking",
  "Follow-Up",
  "Pipeline",
  "Deal",
];

export default function AboutProofOfWork() {
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
          Dibuktikan Sebelum Dijual
        </p>
        <h2 className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">
          Bukan Cuma Teori — Pernah Menghadapi Masalahnya Langsung
        </h2>

        <p className="mt-5 leading-relaxed text-neutral-300">
          Sebelum menawarkan sistem ke klien, Rian Riyandi lebih dulu memakai
          sistemnya sendiri selama sekitar 3 bulan untuk menjalankan
          prospecting jasa website — bukan sekadar rancangan di atas kertas,
          tapi dipraktikkan sampai terbukti berjalan di lapangan.
        </p>
        <p className="mt-4 leading-relaxed text-neutral-300">
          Prospek yang dikelola tembus lebih dari 1.000 dalam satu workflow.
          Ternyata masalah sebenarnya bukan menemukan prospek, tapi mengelola
          ribuan prospek tanpa kehilangan jejak: siapa yang sudah dikirimi
          demo, siapa yang harus di-follow-up hari ini, dan mana yang masih
          berpotensi. Dari kebutuhan nyata itulah arsitektur sistem berikut
          dirancang dan diuji sendiri sebelum dipakai untuk membangun website
          dan automation untuk klien SCH.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-cyan-300/80">
          {PIPELINE.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-cyan-400/20 bg-white/[0.03] px-3 py-1">
                {step}
              </span>
              {i < PIPELINE.length - 1 && (
                <span className="text-cyan-400/30" aria-hidden>
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <a
          href="https://schlabz.com/story"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400/80 underline underline-offset-2 transition-colors hover:text-cyan-300"
        >
          Baca cerita lengkapnya →
        </a>
      </motion.div>
    </section>
  );
}
