"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12"
    >
      <Link href="/" className="text-sm font-semibold tracking-widest text-white">
        SCH
      </Link>

      <div className="flex items-center gap-8 text-sm text-neutral-300">
        <Link href="/upload" className="transition-colors hover:text-white">
          Try It
        </Link>
        <a href="#about" className="transition-colors hover:text-white">
          About
        </a>
      </div>
    </motion.nav>
  );
}
