"use client";

// components/SelectedWork.tsx
//
// Direvisi setelah keputusan arsitektur SCH Labz (koreksi dari Rian):
// - AI Creator Hub / Prospecting Engine / AI Radar TETAP visibility
//   "hidden" di ProjectV2 (lib/projects.ts TIDAK disentuh) — tidak ada
//   CTA yang dirender untuk 3 ini, cuma badge "Case study coming soon".
//   Disengaja: menghindari CTA yang menuju halaman kosong.
// - Tagline 3 sistem ini adalah copy YANG DIBERIKAN LANGSUNG oleh Rian
//   di chat — bukan ditulis dari asumsi/histori kerja. Disimpan sebagai
//   override lokal DI FILE INI, bukan di ProjectV2.shortDescription —
//   supaya field case-study asli (Overview/Problem/dst di ProjectV2)
//   tetap kosong/TODO apa adanya sampai ada konten terverifikasi.
// - Business Website System (agregat, BUKAN entry ProjectV2): CTA
//   "Explore Demos →" ke /portfolio#projects — TIDAK PERNAH ke
//   schlabz.com mana pun. schlabz.com/portfolio (admin, bug auth) dan
//   schlabz.com/templates (butuh login) sengaja tidak dipakai — lihat
//   SECURITY FOLLOW-UP, dicatat terpisah dari redesign ini.
// - Urutan card eksplisit per-slot (bukan filter+append) supaya match
//   persis grid 2x2 yang diminta: AI Creator Hub / Prospecting Engine
//   di baris atas, Business Website System / AI Radar di baris bawah.

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS_V2, type ProjectV2 } from "@/lib/projects";

interface AggregateCard {
  kind: "aggregate";
  title: string;
  category: string;
  shortDescription: string;
  href: string;
  ctaLabel: string;
}

type WorkCard = ProjectV2 | AggregateCard;

// Tagline override, KHUSUS untuk card Selected Work — bukan sumber
// data case-study. Kata-kata ini persis seperti yang diberikan Rian.
const SELECTED_WORK_TAGLINE: Record<string, string> = {
  "ai-creator-hub": "AI-powered content ecosystem",
  "prospecting-engine": "Automated prospecting + website generation system",
  "ai-radar": "Automated intelligence monitoring system",
};

const BUSINESS_WEBSITE_SYSTEM_CARD: AggregateCard = {
  kind: "aggregate",
  title: "Business Website System",
  category: "Business Website",
  shortDescription: "Automated website generation for business prospects",
  // href: schlabz.com/dashboard/new -- dikonfirmasi Rian sebagai
  // entry point publik yang disengaja. Residual: nav di halaman
  // itu sendiri masih link ke schlabz.com/portfolio (admin panel,
  // SECURITY FOLLOW-UP terpisah, belum ditutup).
  href: "https://sch-demo.vercel.app/dashboard/new",
  ctaLabel: "Explore Templates →",
};

function isAggregate(card: WorkCard): card is AggregateCard {
  return "kind" in card && card.kind === "aggregate";
}

function getProjectV2(slug: string): ProjectV2 {
  const p = PROJECTS_V2.find((x) => x.slug === slug);
  if (!p) {
    throw new Error(`SelectedWork: project not found for slug "${slug}"`);
  }
  return p;
}

function WorkCardView({ card }: { card: WorkCard }) {
  const aggregate = isAggregate(card);
  const isPublicCaseStudy = !aggregate && card.visibility === "public";
  const label = aggregate ? card.category : card.projectType;
  const description = aggregate
    ? card.shortDescription
    : SELECTED_WORK_TAGLINE[card.slug] ?? card.shortDescription;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-[20px] p-7 border border-cyan-400/20 bg-white/[0.03] backdrop-blur-md flex flex-col"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/60 uppercase mb-3">
        {label}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {!aggregate && !isPublicCaseStudy && (
        <span className="inline-block w-fit mb-4 font-mono text-[10px] px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 uppercase tracking-wide">
          Case study coming soon
        </span>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {/* External URL -- <a target=_blank>, bukan <Link>, konsisten
            dengan liveUrl/githubUrl di bawah. */}
        {aggregate && (
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] px-4 py-2 rounded-full bg-cyan-400 text-black font-bold uppercase tracking-wide"
          >
            {card.ctaLabel}
          </a>
        )}

        {isPublicCaseStudy && (
          <Link
            href={`/portfolio/${card.slug}`}
            className="font-mono text-[11px] px-4 py-2 rounded-full bg-cyan-400 text-black font-bold uppercase tracking-wide"
          >
            View Case Study →
          </Link>
        )}

        {!aggregate && card.liveUrl && (
          <a
            href={card.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-300 uppercase tracking-wide"
          >
            Live
          </a>
        )}

        {!aggregate && card.githubUrl && (
          <a
            href={card.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] px-4 py-2 rounded-full border border-white/20 text-neutral-300 uppercase tracking-wide"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  // Urutan eksplisit, match grid 2x2: baris 1 = AI Creator Hub /
  // Prospecting Engine, baris 2 = Business Website System / AI Radar.
  const cards: WorkCard[] = [
    getProjectV2("ai-creator-hub"),
    getProjectV2("prospecting-engine"),
    BUSINESS_WEBSITE_SYSTEM_CARD,
    getProjectV2("ai-radar"),
  ];

  return (
    <section id="work" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-cyan-400/70 uppercase border border-cyan-400/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/[0.02]">
          Selected Work
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((card) => (
          <WorkCardView
            key={isAggregate(card) ? card.title : card.slug}
            card={card}
          />
        ))}
      </div>
    </section>
  );
}
