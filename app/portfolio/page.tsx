"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import HeroIntro from "@/components/HeroIntro";
import ProjectNodeGraph from "@/components/ProjectNodeGraph";
import AIEcosystem from "@/components/AIEcosystem";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const ScrollMorphScen3e = dynamic(
  () => import("@/components/ScrollMorphScen3e"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a]">
        <span className="text-sm tracking-widest text-neutral-500">
          LOADING SCENE...
        </span>
      </div>
    ),
  }
);

const PHOTO_TWO_URL =
  "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png";
const PHOTO_ONE_URL = PHOTO_TWO_URL;

export default function PortfolioPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <Navbar />

      <div className="relative">
        <Suspense fallback={null}>
          <ScrollMorphScen3e
            textureAUrl={PHOTO_ONE_URL}
            textureBUrl={PHOTO_TWO_URL}
          />
        </Suspense>
        <HeroIntro />
      </div>

      <ProjectNodeGraph />
      <AIEcosystem />

      <div id="projects">
        <ProjectGrid />
      </div>

      <section
        id="contact"
        className="relative w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-[#0a0a0a]"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-cyan-400/70 uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Hubungi Saya
        </h2>
        <p className="text-neutral-400 text-sm max-w-md mb-8">
          Punya project atau ide? Yuk diskusikan bareng.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="px-8 py-3 rounded-full bg-cyan-400 text-black font-mono text-sm tracking-wide uppercase transition-transform hover:scale-105"
        >
          Kirim Email
        </a>
      </section>
    </main>
  );
}
