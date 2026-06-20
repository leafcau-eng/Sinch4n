"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectNodeGraph from "@/components/ProjectNodeGraph";

const ROLES = ["AI Automation Engineer", "Web Developer", "Freelancer"];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.65.35-1.1.63-1.35-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.5.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.61 1.03 2.72 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49C19.13 20.57 22 16.75 22 12.25 22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2ZM1.5 8.25h3v12.75h-3V8.25Zm6 0h2.88v1.74h.04c.4-.76 1.4-1.74 2.88-1.74 3.08 0 3.65 2.03 3.65 4.66v7.09h-3v-6.29c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.64-2.42 3.32v6.4h-3V8.25Z" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.9 2H22l-7.6 8.68L23 22h-6.9l-5.4-7.06L4.4 22H1.3l8.13-9.3L1 2h7.06l4.9 6.47L18.9 2Zm-2.42 18h1.9L8.66 4h-2L16.48 20Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.43 1.16-2.6 2.6-2.6c.26 0 .51.04.74.11v-3.13a5.78 5.78 0 0 0-.74-.05A5.73 5.73 0 0 0 4 15.39a5.73 5.73 0 0 0 5.73 5.73a5.73 5.73 0 0 0 5.73-5.73v-6.34a8.83 8.83 0 0 0 5.18 1.66V7.65a4.86 4.86 0 0 1-3.04-1.83z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.64 12.64 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.876 19.876 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.661a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3L19.5 4.95c.73-.33 1.43.18 1.16 1.3l-3 14.13c-.21.95-.76 1.18-1.55.74l-4.27-3.13-2.05 1.97c-.23.23-.42.42-.86.42z" />
    </svg>
  );
}

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/Leaf-cau-eng", icon: GithubIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@shinch4n86", icon: TikTokIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "LinkedIn", href: "#", icon: LinkedinIcon },
  { name: "Twitter", href: "#", icon: TwitterXIcon },
  { name: "Discord", href: "#", icon: DiscordIcon },
  { name: "Telegram", href: "#", icon: TelegramIcon },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroIntro() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center overflow-hidden px-6 pointer-events-none">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,245,255,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(123,47,255,0.08) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,245,255,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl mx-auto text-center px-6 py-12 sm:px-12 sm:py-16 pointer-events-auto"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-cyan-400/70 uppercase mb-4">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          SCH
        </h1>

        <div className="h-8 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={ROLES[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm sm:text-base tracking-widest text-neutral-300 uppercase"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10">
          Membangun website modern, workflow otomatis, dan AI tools yang
          membantu bisnis bekerja lebih cepat dan efisien.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() => scrollToId("projects")}
            className="group relative px-8 py-3 rounded-full bg-cyan-400 text-black font-mono text-sm tracking-wide uppercase overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Lihat Project</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => scrollToId("contact")}
            className="px-8 py-3 rounded-full border border-cyan-400/40 text-cyan-400 font-mono text-sm tracking-wide uppercase transition-all hover:bg-cyan-400/10 hover:border-cyan-400"
          >
            Hubungi Saya
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </motion.div>

      <ProjectNodeGraph />
    </div>
  );
}
