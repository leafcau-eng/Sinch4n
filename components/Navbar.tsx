"use client";

// components/Navbar.tsx
//
// Responsive pass: link inline sebelumnya (4 link + logo, selalu
// tampil) berisiko crowded di ~320-375px. Ditambah hamburger untuk
// <lg: nav desktop TIDAK berubah (link/href/label sama persis),
// cuma disembunyikan di bawah lg dan dipindah ke panel toggle.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/portfolio#work" },
  { label: "Systems", href: "/portfolio#systems" },
  { label: "About", href: "/portfolio#about" },
  { label: "Contact", href: "/portfolio#cta" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-12"
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-widest text-white">
          SCH
        </Link>

        {/* Desktop/tablet: sama persis nav lama, cuma di-gate ke lg+ */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-neutral-300 font-mono uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-cyan-400">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile/tablet: hamburger, tap target 44x44 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 -mr-2"
        >
          <span className={`block h-px w-6 bg-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 pt-6 text-sm text-neutral-300 font-mono uppercase tracking-wide">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
