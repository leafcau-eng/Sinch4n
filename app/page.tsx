"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Navbar from "@/components/Navbar";
import EnterButton from "@/components/EnterButton";
import ScrollScrubVideo from "@/components/ScrollScrubVideo";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const ShaderBackground = dynamic(
  () => import("@/components/ShaderBackground"),
  { ssr: false }
);

// FIX #2: asset lokal via next/image, bukan ImgBB
const PHOTO_PORTRAIT = "/images/rian-portrait.png";
const VIDEO_SCRUB = "/videos/showreel-scrub.mp4";
const VIDEO_POSTER = "/images/rian-coding.png"; // foto coding jadi poster/frame awal video

/* ------------------------------------------------------------------ */
/* Hero photo — tilt hanya di device yang punya hover (FIX #3, #6)     */
/* ------------------------------------------------------------------ */
function HeroPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion(); // FIX #7
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!canHover || reduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    // FIX #6: cursor-none dihapus
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-[320px] md:max-w-[380px]"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={reduceMotion ? false : { opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} // FIX #5
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Glow border */}
        <div
          className="absolute -inset-[2px] rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,47,255,0.15))",
            boxShadow:
              "0 0 20px rgba(0,245,255,0.2), 0 0 40px rgba(123,47,255,0.1)",
          }}
        />

        {/* Foto: next/image, host lokal */}
        <div className="relative h-[460px] w-full overflow-hidden rounded-2xl">
          <Image
            src={PHOTO_PORTRAIT}
            alt="Rian Riyandi"
            fill
            priority
            sizes="(max-width: 768px) 320px, 380px"
            className="object-cover object-top"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(2,4,8,0.75) 100%)",
            }}
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
            className={`absolute ${cls} pointer-events-none h-4 w-4 border-cyan-400/40`}
          />
        ))}

        {/* Nama selalu tampil — tidak lagi tergantung hover (FIX #3) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-cyan-400/80">
          Rian Riyandi
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero text — timeline dipadatkan, total ≤1.2s (FIX #5)               */
/* ------------------------------------------------------------------ */
function HeroLeft() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5, ease: "easeOut" as const },
  });

  return (
    <div className="z-10 flex flex-col gap-5">
      <motion.p
        {...fade(0.1)}
        className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60"
      >
        Creative Developer
      </motion.p>

      <h1
        className="text-8xl font-black leading-none tracking-tight md:text-[110px]"
        style={{
          background:
            "linear-gradient(135deg, #fff 0%, #00f5ff 40%, #0080ff 70%, #7b2fff 100%)",
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
            initial={reduceMotion ? false : { y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        {...fade(0.5)}
        className="max-w-sm text-base leading-relaxed text-neutral-400"
      >
        Sinchan — scroll down and step into the next dimension.
      </motion.p>

      <motion.p
        {...fade(0.6)}
        className="font-mono text-sm uppercase tracking-widest text-cyan-400/80"
      >
        By Rian Riyandi
      </motion.p>

      <motion.div {...fade(0.7)}>
        <EnterButton href="/portfolio" />
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll cue di bawah hero                                            */
/* ------------------------------------------------------------------ */
function ScrollCue() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        Scroll
      </span>
      <motion.div
        className="h-8 w-px bg-gradient-to-b from-cyan-400/70 to-transparent"
        animate={reduceMotion ? undefined : { scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Homepage — scroll journey (Opsi B)                                  */
/* ------------------------------------------------------------------ */
export default function Home() {
  const webglSupported = useWebGLSupport();
  const reduceMotion = useReducedMotion(); // FIX #7
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [showFx, setShowFx] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    const t = setTimeout(() => setShowFx(true), 100);
    return () => clearTimeout(t);
  }, []);

  const renderWebGL = webglSupported !== false && showFx && !reduceMotion;

  return (
    // FIX #1: tidak ada lagi h-screen + overflow-hidden di root
    <main className="relative w-full bg-[#020408]">
      <Navbar />

      {/* ============ SECTION 1: HERO (100vh) ============ */}
      <section className="relative h-screen w-full overflow-hidden">
        {renderWebGL && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Suspense fallback={null}>
              {/* FIX #4: mobile cukup satu layer WebGL (shader saja) */}
              <ShaderBackground />
              {isMobile === false && <ParticleBackground />}
            </Suspense>
          </motion.div>
        )}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 65% 50%, rgba(0,128,255,0.07), transparent 60%)",
          }}
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 md:px-16">
          <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
            <HeroLeft />
            <HeroPhoto />
          </div>
        </div>

        <ScrollCue />
      </section>

      {/* ============ SECTION 2: SCROLL SCRUB VIDEO (280vh) ============ */}
      {/* Transisi dari foto ke "dimensi berikutnya" — frame ikut scroll */}
      <ScrollScrubVideo
        src={VIDEO_SCRUB}
        poster={VIDEO_POSTER}
        scrubHeight={280}
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400/70">
          Entering the dimension
        </p>
      </ScrollScrubVideo>

      {/* ============ SECTION 3: SETELAH VIDEO ============ */}
      <section
        id="work"
        className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 py-24 md:px-16"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">
          Selected Work
        </p>
        <h2 className="max-w-2xl text-center text-4xl font-black tracking-tight text-white md:text-6xl">
          You made it through.
          <br />
          Now see what I build.
        </h2>
        <p className="max-w-md text-center text-neutral-400">
          Motion graphics, interactive web experiences, and automation
          pipelines — crafted end to end.
        </p>
        <EnterButton href="/portfolio" />
      </section>
    </main>
  );
}
