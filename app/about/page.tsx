import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatIBuild from "@/components/WhatIBuild";
import HowIBuild from "@/components/HowIBuild";
import AboutHero from "@/components/AboutHero";
import AboutJourney from "@/components/AboutJourney";
import AboutLocalInfo from "@/components/AboutLocalInfo";
import AboutFAQ from "@/components/AboutFAQ";
import AboutLocalBusinessSchema from "@/components/AboutLocalBusinessSchema";
import AboutWhatsAppCTA from "@/components/AboutWhatsAppCTA";

export const metadata: Metadata = {
  title: "Tentang SCH Digital Agency | Jasa Website & AI Cianjur",
  alternates: { canonical: "/about" },
  description:
    "Rian Riyandi, founder SCH Digital Agency di Cianjur. Spesialis pembuatan website modern, sistem AI, dan otomatisasi bisnis di Haurwangi, Cianjur.",
  openGraph: {
    title: "Tentang SCH Digital Agency | Jasa Website & AI Cianjur",
    description:
      "Rian Riyandi, founder SCH Digital Agency di Cianjur. Spesialis pembuatan website modern, sistem AI, dan otomatisasi bisnis di Haurwangi, Cianjur.",
    url: "/about",
    type: "profile",
    images: [{ url: "/images/rian-portrait.png", alt: "Rian Riyandi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang SCH Digital Agency | Jasa Website & AI Cianjur",
    description:
      "Rian Riyandi, founder SCH Digital Agency di Cianjur. Spesialis pembuatan website modern, sistem AI, dan otomatisasi bisnis di Haurwangi, Cianjur.",
    images: [{ url: "/images/rian-portrait.png", alt: "Rian Riyandi" }],
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-16" />
      <article>
        <AboutHero />
        <AboutJourney />
        <WhatIBuild />
        <HowIBuild />
        <AboutLocalInfo />
        <AboutFAQ />
      </article>

      <section
        id="cta"
        className="relative w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-[#0a0a0a]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Have a system in mind?
        </h2>
        <p className="text-neutral-400 max-w-md mx-auto mb-10">
          Tell me what you&apos;re trying to build.
        </p>
        <AboutWhatsAppCTA />
      </section>

      <AboutLocalBusinessSchema />
    </main>
  );
}
