"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";

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

const PHOTO_ONE_URL =
  "https://i.ibb.co.com/ksf232R1/file-0000000066d071f58ad62c9d9efd993f.png";
const PHOTO_TWO_URL =
  "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png";

export default function PortfolioPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <Navbar />

      <Suspense fallback={null}>
        <ScrollMorphScen3e
          textureAUrl={PHOTO_ONE_URL}
          textureBUrl={PHOTO_TWO_URL}
        />
      </Suspense>

      <ProjectGrid />
    </main>
  );
}
