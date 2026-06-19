"use client";

import { motion } from "framer-motion";

/**
 * EnterButton
 * ------------
 * The portal-like CTA. Two layers create the effect:
 *   1. A pulsing glow border (via animated boxShadow / border color)
 *   2. A "light sweep" — a thin bright gradient that slides across
 *      the button on hover, like a scan line passing through.
 */
export default function EnterButton({ href }: { href: string }) {
  return (
    <motion.a
      data-cursor-hover="true"
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 15px rgba(0,245,255,0.25)",
          "0 0 30px rgba(0,245,255,0.5)",
          "0 0 15px rgba(0,245,255,0.25)",
        ],
      }}
      transition={{
        opacity: { delay: 2.2, duration: 0.6 },
        y: { delay: 2.2, duration: 0.6 },
        boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="group relative overflow-hidden rounded-full border border-cyan-400/60 px-8 py-3 font-mono text-sm tracking-widest text-cyan-300 uppercase"
    >
      {/* Light sweep: a bright diagonal gradient that slides from
          left to right on hover, like scanning the button. */}
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative z-10">ENTER EXPERIENCE →</span>
    </motion.a>
  );
}
