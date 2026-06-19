"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsapConfig";

const PHOTO_PORTRAIT =
  "https://i.ibb.co.com/ksf232R1/file-0000000066d071f58ad62c9d9efd993f.png";

export default function ScrollMorphScene({
  textureAUrl,
  textureBUrl,
}: {
  textureAUrl?: string;
  textureBUrl?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1.5,
        },
      });

      // Phase 1 (0→30%): Foto zoom in dramatis + glow naik
      tl.fromTo(imgRef.current,
        { scale: 1.0, filter: "brightness(0.75) saturate(0.9)" },
        { scale: 1.22, filter: "brightness(1.05) saturate(1.2)", duration: 3 },
        0
      );
      tl.fromTo(glowRef.current,
        { opacity: 0.2, scale: 0.7 },
        { opacity: 1.0, scale: 1.6, duration: 3 },
        0
      );
      // Scan line sweep bawah → atas
      tl.fromTo(scanRef.current,
        { top: "105%", opacity: 1 },
        { top: "-5%", opacity: 0.3, duration: 2.5 },
        0.3
      );
      // Scroll hint fade out
      tl.to(scrollHintRef.current,
        { opacity: 0, duration: 1 },
        0
      );

      // Phase 2 (30→70%): Foto mengecil ke kiri atas
      tl.to(photoRef.current,
        {
          top: "24px",
          left: "24px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          duration: 4,
          ease: "power2.inOut",
        },
        3
      );
      tl.to(imgRef.current,
        { scale: 1.0, filter: "brightness(0.9) saturate(1.0)", duration: 4 },
        3
      );
      // Overlay grid muncul
      tl.fromTo(overlayRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 3 },
        4.5
      );
      // Label nama muncul
      tl.fromTo(labelRef.current,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 2 },
        5.5
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">

      {/* ── Particle dots background ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,245,255,0.18) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          opacity: 0.35,
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none z-0"
        style={{
          width: "700px",
          height: "700px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(0,100,255,0.15) 0%, rgba(123,47,255,0.08) 50%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Photo ── */}
      <div
        ref={photoRef}
        className="absolute z-20 overflow-hidden"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(55vw, 420px)",
          height: "min(80vh, 560px)",
          borderRadius: "16px",
          willChange: "top, left, width, height, border-radius",
          boxShadow: "0 0 60px rgba(0,245,255,0.15), 0 0 120px rgba(123,47,255,0.08)",
        }}
      >
        <img
          ref={imgRef}
          src={PHOTO_PORTRAIT}
          alt="Rian Riyandi"
          className="w-full h-full object-cover object-top"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 90% at 50% 45%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 90% at 50% 45%, black 50%, transparent 100%)",
            willChange: "transform, filter",
          }}
        />

        {/* Inner glow border */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 40px rgba(0,245,255,0.08)",
            borderRadius: "inherit",
          }}
        />
      </div>

      {/* ── Nama label (muncul saat foto mengecil) ── */}
      <div
        ref={labelRef}
        className="absolute z-30 pointer-events-none"
        style={{ top: "32px", left: "156px", opacity: 0 }}
      >
        <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/60 uppercase">
          Creative Developer
        </p>
        <p className="font-mono text-xs tracking-widest text-white/80 uppercase mt-0.5">
          Rian Riyandi
        </p>
      </div>

      {/* ── "Projects" overlay text (muncul saat scroll) ── */}
      <div
        ref={overlayRef}
        className="absolute z-10 pointer-events-none"
        style={{ opacity: 0, bottom: "15%", left: "50%", transform: "translateX(-50%)" }}
      >
        <p className="font-mono text-[10px] tracking-[0.5em] text-cyan-400/40 uppercase text-center">
          Scroll to explore projects ↓
        </p>
      </div>

      {/* ── Scan line ── */}
      <div
        ref={scanRef}
        className="absolute left-0 right-0 pointer-events-none z-30"
        style={{
          top: "105%",
          height: "1.5px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,245,255,0.9) 30%, rgba(123,47,255,0.7) 70%, transparent 100%)",
          boxShadow: "0 0 16px rgba(0,245,255,0.5)",
        }}
      />

      {/* ── Corner accents ── */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute ${cls} w-5 h-5 border-cyan-400/25 pointer-events-none z-30`}
        />
      ))}

      {/* ── Scroll hint ── */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
      >
        <span className="font-mono text-[10px] tracking-widest text-cyan-400/35 uppercase">
          Scroll
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-cyan-400/35 to-transparent animate-pulse" />
      </div>
    </div>
  );
}
