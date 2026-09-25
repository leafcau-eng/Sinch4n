"use client";

import CtaButton from "@/components/CtaButton";
import { trackWhatsAppClick } from "@/lib/gtag";

export default function AboutWhatsAppCTA() {
  return (
    <CtaButton
      href="https://wa.me/6283870880997"
      onClick={() => trackWhatsAppClick("About Page CTA")}
    >
      Start a Project →
    </CtaButton>
  );
}
