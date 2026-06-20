"use client";

// components/PortfolioClientScene.tsx
//
// File baru, dibuat untuk memperbaiki build error:
//   "ssr: false is not allowed with next/dynamic in Server Components.
//    Please move it into a Client Component."
//
// Next.js 16 melarang `dynamic(..., { ssr: false })` dipanggil langsung
// di dalam Server Component (app/portfolio/page.tsx). Solusinya: pindahkan
// SEMUA pemanggilan dynamic({ ssr:false }) ke file Client Component
// terpisah ini, lalu import komponen ini secara biasa (tanpa dynamic)
// dari page.tsx.
//
// Komponen ini membungkus ParticleBackground & ScrollMorphScen3e —
// dua-duanya sebelumnya di-load via dynamic({ ssr:false }) langsung
// di page.tsx.

import dynamic from "next/dynamic";
import { Suspense } from "react";

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

interface PortfolioParticlesProps {
  // Dipisah sebagai komponen kecil sendiri supaya page.tsx bisa
  // menaruhnya persis di posisi yang sama seperti sebelumnya
  // (sebelum Navbar, sebagai background layer).
}

export function PortfolioParticles(_props: PortfolioParticlesProps) {
  return (
    <Suspense fallback={null}>
      <ParticleBackground />
    </Suspense>
  );
}

interface PortfolioSceneProps {
  textureAUrl: string;
  textureBUrl: string;
}

export function PortfolioScene({
  textureAUrl,
  textureBUrl,
}: PortfolioSceneProps) {
  return (
    <Suspense fallback={null}>
      <ScrollMorphScen3e textureAUrl={textureAUrl} textureBUrl={textureBUrl} />
    </Suspense>
  );
}
