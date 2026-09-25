"use client";

import { useEffect, useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8.2 19.5L3 21Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 9c0-.5.4-1 .9-1h.6c.3 0 .5.2.6.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.8 1.2 1.6 2 2 .2.1.4.1.5 0l.6-.5c.2-.1.4-.2.6-.1l1.4.6c.2.1.4.3.4.6v.6c0 .5-.5.9-1 .9-3.3 0-6.1-2.8-6.1-6Z"
      />
    </svg>
  );
}

type Props = {
  phone: string;
  message: string;
  hideWhenVisibleId?: string;
};

export default function FloatingWhatsApp({ phone, message, hideWhenVisibleId }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!hideWhenVisibleId) return;
    const target = document.getElementById(hideWhenVisibleId);
    if (!target) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, [hideWhenVisibleId]);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-13 w-13 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0a0a0a]/90 text-cyan-400 backdrop-blur-md shadow-[0_0_20px_rgba(0,245,255,0.25)] transition-all duration-300 hover:scale-110 hover:border-cyan-400 ${
        hidden ? "translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
      style={{ width: 52, height: 52 }}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
