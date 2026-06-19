"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
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

const PHOTO_PORTRAIT =
  "https://i.ibb.co.com/ksf232R1/file-0000000066d071f58ad62c9d9efd993f.png";
const PHOTO_CODING =
  "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png";

function HeroPhotoSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-[320px] md:max-w-[380px] cursor-none"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Glow border */}
        <motion.div
          className="absolute -inset-[2px] rounded-2xl"
          animate={{
            boxShadow: hovered
              ? "0 0 40px rgba(0,245,255,0.5), 0 0 80px rgba(123,47,255,0.3)"
              : "0 0 20px rgba(0,245,255,0.2), 0 0 40px rgba(123,47,255,0.1)",
          }}
          transition={{ duration: 0.4 }}
          style={{
            background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,47,255,0.15))",
            borderRadius: "1rem",
          }}
        />

        {/* Photo container */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Portrait photo */}
          <motion.img
            src={PHOTO_PORTRAIT}
            alt="Rian Riyandi"
            className="w-full object-cover"
            style={{ height: "460px", objectPosition: "center top" }}
            animate={{ scale: hovered ? 1.04 : 1.0, opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Coding photo — hover reveal */}
          <motion.img
            src={PHOTO_CODING}
            alt="Rian Riyandi coding"
            className="absolute inset-0 w-full object-cover"
            style={{ height: "460px", objectPosition: "center top" }}
            animate={{ scale: hovered ? 1.04 : 1.0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Bottom fade blend */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 40%, rgba(2,4,8,0.75) 100%)",
            }}
          />

          {/* Scan line on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: hovered
                ? "linear-gradient(180deg, transparent 0%, rgba(0,245,255,0.05) 50%, transparent 100%)"
                : "transparent",
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Corner accents */}
        {[
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((cls, i) => (
          <div
            key={i}
            className={`absolute ${cls} w-4 h-4 border-cyan-400/40 pointer-events-none`}
          />
        ))}

        {/* Name label on hover */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-cyan-400/80 uppercase whitespace-nowrap"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.3 }}
        >
          {hovered ? "Rian — Coding" : "Rian Riyandi"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function HeroLeft() {
  return (
    <motion.div
      className="flex flex-col gap-5 z-10"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <motion.p
        className="font-mono text-xs tracking-[0.3em] text-cyan-400/60 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Creative Developer
      </motion.p>

      <h1
        className="text-8xl md:text-[110px] font-black tracking-tight leading-none"
        style={{
          background: "linear-gradient(135deg, #fff 0%, #00f5ff 40%, #0080ff 70%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 40px rgba(0,245,255,0.35))",
        }}
      >
        {"SCH".split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.08, duration: 0.7, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="max-w-sm text-base text-neutral-400 leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        Sinchan — turning two photos into one living dimension.
      </motion.p>

      <motion.p
        className="font-mono text-sm uppercase tracking-widest text-cyan-400/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.6 }}
      >
        By Rian Riyandi
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.6 }}
      >
        <EnterButton href="/portfolio" />
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const webglSupported = useWebGLSupport();
  const [showParticles, setShowParticles] = useState(false);
  const [showShader, setShowShader] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowShader(true), 100);
    const t2 = setTimeout(() => setShowParticles(true), 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#020408]">
      <div className="absolute inset-0 bg-[#020408]" />

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

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 65% 50%, rgba(0,128,255,0.07), transparent 60%)",
        }}
      />

      <Navbar />

      <section className="relative z-10 flex h-screen w-full items-center justify-center px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
          <HeroLeft />
          <HeroPhotoSplit />
        </div>
      </section>
    </main>
  );
}
