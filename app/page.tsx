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

const ShaderBackground = dynamic(
  () => import("@/components/ShaderBackground"),
  { ssr: false }
);

export default function Home() {
  const webglSupported = useWebGLSupport();
  const [showParticles, setShowParticles] = useState(false);
  const [showShader, setShowShader] = useState(false);

  useEffect(() => {
    const shaderTimer = setTimeout(() => setShowShader(true), 100);
    const particleTimer = setTimeout(() => setShowParticles(true), 300);
    return () => {
      clearTimeout(shaderTimer);
      clearTimeout(particleTimer);
    };
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#020408]">
      {/* Layer 0: pure black base */}
      <div className="absolute inset-0 bg-[#020408]" />

      {/* Layer 1: GLSL shader — flowing dark gradient cinematic */}
      {webglSupported !== false && showShader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Suspense fallback={null}>
            <ShaderBackground />
          </Suspense>
        </motion.div>
      )}

      {/* Layer 2: particle depth field */}
      {webglSupported !== false && showParticles && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0"
        >
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </motion.div>
      )}

      {/* CSS fallback glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,128,255,0.10), transparent 60%)",
        }}
      />

      <Navbar />

      {/* Layer 3: text + CTA */}
      <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-6 text-center">
        <HeroText />
        <div className="mt-8">
          <EnterButton href="/portfolio" />
        </div>
      </section>
    </main>
  );
}
