"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsapConfig";

const PHOTO_CODING =
  "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png";
const PHOTO_PORTRAIT = PHOTO_CODING;

export default function ScrollMorphScene({
  textureAUrl,
  textureBUrl,
}: {
  textureAUrl?: string;
  textureBUrl?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const photoARef = useRef<HTMLImageElement>(null);
  const photoBRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // ── Timeline animasi sekali jalan (tanpa pin/scroll) ──────────
      const tl = gsap.timeline();

      // Phase 1: Glow intensify
      tl.fromTo(
        glowRef.current,
        { opacity: 0.3, scale: 0.8 },
        { opacity: 1, scale: 1.4, duration: 4 },
        0
      );

      // Phase 1: Scan line sweep
      tl.fromTo(
        scanRef.current,
        { top: "110%", opacity: 0.8 },
        { top: "-10%", opacity: 0, duration: 3 },
        0.5
      );

      // Phase 2: Text reveal
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 2 },
        6
      );

      // Continuous: container subtle parallax
      tl.fromTo(
        containerRef.current,
        { y: 0 },
        { y: -30, duration: 10 },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ── Particle-like background dots ── */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,245,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.4,
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none z-0"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,128,255,0.18) 0%, rgba(123,47,255,0.10) 50%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Photo container ── */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        {/* Foto B — coding */}
        <img
          ref={photoBRef}
          src={PHOTO_CODING}
          alt="Rian coding"
          className="absolute"
          style={{
            height: "85vh",
            width: "auto",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.4,
            mixBlendMode: "lighten" as const,
            maskImage: "radial-gradient(ellipse 100% 110% at 50% 45%, black 35%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 100% 110% at 50% 45%, black 35%, transparent 100%)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* ── Scan line effect ── */}
      <div
        ref={scanRef}
        className="absolute left-0 right-0 pointer-events-none z-20"
        style={{
          top: "110%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.8), rgba(123,47,255,0.6), transparent)",
          boxShadow: "0 0 20px rgba(0,245,255,0.5), 0 0 40px rgba(0,245,255,0.2)",
        }}
      />

      {/* ── Bottom text reveal ── */}
      <div
        ref={textRef}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 text-center opacity-0"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-cyan-400/60 uppercase mb-2">
          Creative Developer
        </p>
        <p className="font-mono text-sm tracking-widest text-neutral-500 uppercase">
          Rian Riyandi
        </p>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30">
        <span className="font-mono text-[10px] tracking-widest text-cyan-400/30 uppercase">
          Scroll
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-cyan-400/30 to-transparent animate-pulse" />
      </div>

      {/* ── Corner frame accents ── */}
      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute ${cls} w-6 h-6 border-cyan-400/20 pointer-events-none z-30`}
        />
      ))}
    </div>
  );
}
