"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutHero() {
  return (
    <section className="relative w-full px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400/60">
            Digital Agency &amp; AI Automation
          </p>
          <h1 className="font-display mt-4 bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-5xl">
            Membangun Sistem Digital dari Haurwangi untuk Bisnis Anda.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Rian Riyandi adalah founder SCH Digital Agency. Perjalanannya dimulai
            dari rasa penasaran terhadap teknologi, dan kini berfokus membantu
            bisnis serta UMKM bertransformasi digital melalui AI, otomatisasi,
            dan website modern.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto h-56 w-44 overflow-hidden rounded-lg border border-cyan-400/30 md:h-64 md:w-52"
        >
          <Image
            src="/images/rian-portrait.png"
            alt="Rian Riyandi, founder SCH Digital Agency"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
