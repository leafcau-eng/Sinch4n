"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export type DetailModalContent = {
  title: string;
  detailTitle: string;
  untukApa: string;
  keuntungan: string;
  kelebihan: string;
  contohNyata: string;
};

type Props = {
  content: DetailModalContent | null;
  onClose: () => void;
};

const ROWS: {
  key: keyof Pick<
    DetailModalContent,
    "untukApa" | "keuntungan" | "kelebihan" | "contohNyata"
  >;
  icon: string;
  label: string;
}[] = [
  { key: "untukApa", icon: "🎯", label: "Untuk Apa?" },
  { key: "keuntungan", icon: "✨", label: "Keuntungannya Apa?" },
  { key: "kelebihan", icon: "⚡", label: "Kelebihannya Apa?" },
  { key: "contohNyata", icon: "💡", label: "Contoh Penggunaan Nyata" },
];

export default function DetailModal({ content, onClose }: Props) {
  useEffect(() => {
    if (!content) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [content, onClose]);

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-[20px] border border-cyan-400/20 bg-[#0a0a0a] p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-4 top-4 text-neutral-500 transition-colors hover:text-cyan-400"
            >
              ✕
            </button>

            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400/70">
              {content.title}
            </h3>
            <h2 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
              {content.detailTitle}
            </h2>

            <div className="mt-6 space-y-6">
              {ROWS.map((row) => (
                <div key={row.key}>
                  <p className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                    <span aria-hidden>{row.icon}</span>
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {content[row.key]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
