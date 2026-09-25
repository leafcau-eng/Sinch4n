import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatIBuild from "@/components/WhatIBuild";
import HowIBuild from "@/components/HowIBuild";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description:
    "About Rian Riyandi (SCH) -- what I build and how I build it: AI automation, prospecting systems, and business websites.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-32" />
      <WhatIBuild />
      <HowIBuild />

      <section
        id="about"
        className="relative w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-[#0a0a0a]"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-cyan-400/60 uppercase mb-4">
          About
        </p>
        <p className="max-w-xl text-lg sm:text-xl text-neutral-200 leading-relaxed mb-3">
          I build software systems that connect AI, automation, data, and business workflows.
        </p>
        <p className="max-w-xl text-neutral-400 leading-relaxed mb-6">
          My work ranges from business websites to AI-powered internal tools and automated prospecting systems.
        </p>
        <p className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
          Based in Indonesia · Available for freelance / project work
        </p>
      </section>

      <section
        id="cta"
        className="relative w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-[#0a0a0a]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Have a system in mind?
        </h2>
        <p className="text-neutral-400 max-w-md mx-auto mb-10">
          Tell me what you&apos;re trying to build.
        </p>
        <a
          href="https://wa.me/6283870880997"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-400 text-black font-mono text-sm tracking-wide uppercase font-bold transition-transform hover:scale-105"
        >
          Start a Project →
        </a>
      </section>
    </main>
  );
}
