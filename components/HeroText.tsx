"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsapConfig";

export default function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".brand-letter");
    const subtitleEl = containerRef.current.querySelector(".hero-subtitle");
    const ownerEl = containerRef.current.querySelector(".hero-owner");

    // delay: 1.5 lines up with the cinematic intro timeline — text
    // only starts revealing once the particle field + 3D card are
    // already visible underneath it.
    const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 1.5 });

    tl.fromTo(
      letters,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.05 }
    )
      .fromTo(
        subtitleEl,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        ownerEl,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const brandName = "SCH";

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      <h1
        className="flex text-7xl font-display font-black tracking-tight md:text-9xl"
        style={{
          background:
            "linear-gradient(135deg, #fff 0%, #00f5ff 40%, #0080ff 70%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 40px rgba(0,245,255,0.4))",
        }}
      >
        {brandName.split("").map((char, index) => (
          <span
            key={index}
            className="brand-letter inline-block"
            style={{ willChange: "transform, opacity" }}
          >
            {char}
          </span>
        ))}
      </h1>

      <p className="hero-subtitle max-w-md text-lg text-neutral-400 md:text-xl">
        Sinchan — turning two photos into one living dimension.
      </p>

      <p className="hero-owner font-mono text-sm uppercase tracking-widest text-cyan-400/80">
        By Rian Riyandi
      </p>
    </div>
  );
}
