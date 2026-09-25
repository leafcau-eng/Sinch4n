"use client";

import { trackWhatsAppClick } from "@/lib/gtag";

export default function AboutWhatsAppCTA() {
  return (
    <a
      href="https://wa.me/6283870880997"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("About Page CTA")}
      className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-400 text-black font-mono text-sm tracking-wide uppercase font-bold transition-transform hover:scale-105"
    >
      Start a Project →
    </a>
  );
}
