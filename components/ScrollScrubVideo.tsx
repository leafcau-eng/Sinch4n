"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollScrubVideoProps {
  src: string;          // video hasil encode: ffmpeg ... -g 1 (keyframe tiap frame)
  poster?: string;      // fallback + frame awal sebelum metadata siap
  scrubHeight?: number; // tinggi track scroll dalam vh (default 280)
  children?: ReactNode; // overlay opsional (caption/teks) di atas video
}

/**
 * ScrollScrubVideo — GSAP ScrollTrigger version
 * Video di-scrub frame-by-frame mengikuti progress scroll.
 * Wrapper setinggi `scrubHeight`vh, video sticky memenuhi layar.
 * scrub: 0.6 memberi smoothing bawaan GSAP (pengganti lerp manual).
 *
 * WAJIB: encode video dengan keyframe tiap frame supaya seek mulus:
 * ffmpeg -i in.mp4 -vf scale=720:-2 -g 1 -crf 28 -pix_fmt yuv420p \
 *   -movflags faststart -an out.mp4
 */
export default function ScrollScrubVideo({
  src,
  poster,
  scrubHeight = 280,
  children,
}: ScrollScrubVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    // Reduced motion: tampilkan poster saja, tanpa scrub
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    // "Aktivasi" video muted di iOS/Android supaya bisa di-seek programatik
    video.play().then(() => video.pause()).catch(() => {});

    let tween: gsap.core.Tween | undefined;

    const setup = () => {
      if (!video.duration) return;
      tween = gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6, // smoothing: makin besar makin "berat"
        },
      });
    };

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", setup);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [src]);

  return (
    <section
      ref={wrapperRef}
      style={{ height: `${scrubHeight}vh` }}
      className="relative bg-[#020408]"
      aria-label="Showreel"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        {/* Vignette tipis biar nyatu sama tema gelap */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,4,8,0.6) 0%, transparent 20%, transparent 80%, rgba(2,4,8,0.8) 100%)",
          }}
        />
        {children && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-16">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
