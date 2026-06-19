"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import EnterButton from "@/components/EnterButton";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const HeroPhotoCard = dynamic(
  () => import("@/components/HeroPhotoCard"),
  { ssr: false }
);

const PHOTO_ONE_URL =
  "https://i.ibb.co.com/ksf232R1/file-0000000066d071f58ad62c9d9efd993f.png";
const PHOTO_TWO_URL =
  "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png";

/**
 * ================================================================
 * Home — "Entering a 3D creative dimension"
 * ================================================================
 * INTRO SEQUENCE TIMELINE (~2.5s total, driven by Framer Motion's
 * `delay` on each layer rather than a single master timeline —
 * simpler to reason about per-element, and each layer animates
 * independently so a slow device doesn't block the others):
 *
 *   0.0s -> 0.3s   Pure black, nothing visible yet
 *   0.3s -> 1.1s   Particle background fades in (depth layer)
 *   0.8s -> 1.8s   3D hologram card scales/fades in
 *   1.5s -> 2.3s   "SCH" text reveals letter by letter
 *   2.2s -> 2.8s   Enter Experience button fades in last
 *
 * WEBGL FALLBACK:
 * If useWebGLSupport() resolves to false, we skip both Canvas-based
 * components entirely and show a CSS gradient background instead —
 * this keeps the page from breaking on devices/browsers that can't
 * run WebGL (some embedded webviews, very old phones).
 * ================================================================
 */
export default function Home() {
  const webglSupported = useWebGLSupport();
  const [showParticles, setShowParticles] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Stagger mounting the heavy Canvas components themselves
    // (not just their CSS opacity) — this means the GPU work for
    // the particle field doesn't compete with the photo card's
    // texture loading at the exact same instant, smoothing out the
    // intro on slower devices.
    const particleTimer = setTimeout(() => setShowParticles(true), 300);
    const cardTimer = setTimeout(() => setShowCard(true), 800);
    return () => {
      clearTimeout(particleTimer);
      clearTimeout(cardTimer);
    };
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#020408]">
      {/* Layer 0: pure black base, always present so there's never
          a flash of white before anything else loads. */}
      <div className="absolute inset-0 bg-[#020408]" />

      {/* Layer 1: particle depth field, fades in starting at 0.3s.
          Skipped entirely if WebGL isn't supported. */}
      {webglSupported !== false && showParticles && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </motion.div>
      )}

      {/* CSS fallback glow, used both as a base ambient layer and
          as the sole background if WebGL is unavailable. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,128,255,0.12), transparent 60%)",
        }}
      />

      <Navbar />

      {/* Layer 2: the hologram 3D card, scales + fades in starting
          at 0.8s. Skipped if WebGL isn't supported. */}
      {webglSupported !== false && showCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-[5]"
        >
          <Suspense fallback={null}>
            <HeroPhotoCard
              colorMapUrl={PHOTO_ONE_URL}
              depthMapUrl={PHOTO_TWO_URL}
            />
          </Suspense>
        </motion.div>
      )}

      {/* Layer 3: text + CTA, sits above everything */}
      <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-6 text-center">
        <HeroText />

        <div className="mt-8">
          <EnterButton href="/portfolio" />
        </div>
      </section>
    </main>
  );
}
