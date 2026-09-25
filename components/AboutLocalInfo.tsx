"use client";

import { motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/gtag";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const MAPS_EMBED_SRC =
  "https://www.google.com/maps?cid=9129227683805728737&output=embed";

export default function AboutLocalInfo() {
  return (
    <section className="relative w-full px-6 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400/60">
            Kontak &amp; Lokasi
          </p>
          <h2 className="font-display mt-3 border-l-4 border-cyan-400 pl-3 text-2xl font-bold text-white">
            SCH Digital Agency
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-neutral-300">
            <li className="flex gap-3">
              <span aria-hidden>📍</span>
              <span>
                Gg. Hj Iyad, Kp. Haurwangi, RT 04 RW 02, Kec. Haurwangi,
                Kab. Cianjur
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden>📱</span>
              <a
                href="https://wa.me/6283870880997"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("About Local Info")}
                className="hover:text-cyan-400"
              >
                0838-7088-0997 (WhatsApp)
              </a>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg border border-cyan-400/20">
          <iframe
            title="Lokasi SCH Digital Agency"
            src={MAPS_EMBED_SRC}
            width="100%"
            height="220"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert-[0.92] contrast-[1.1]"
          />
        </div>
      </motion.div>
    </section>
  );
}
