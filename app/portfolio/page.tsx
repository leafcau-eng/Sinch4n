// app/portfolio/page.tsx
//
// Assembles /portfolio. Urutan section saat ini (Phase 12B):
// Hero -> Selected Work -> What I Build -> How I Build -> About ->
// Technical Ecosystem (#systems: ProjectNodeGraph + AIEcosystem) ->
// Radar Feed -> Business Website demos (#projects: CategoryShowcase) ->
// Ebook -> CTA (#cta).
//
// Catatan routing kategori: halaman per-kategori dulu ada di
// app/portfolio/[category]/page.tsx. Folder itu sudah dikonsolidasi ke
// app/portfolio/[slug]/page.tsx (cek ProjectV2 dulu, fallback ke grid
// kategori PROJECTS/FILTERS) — file ini cuma link ke situ lewat
// CategoryShowcase, tidak ada yang berubah di sini akibat konsolidasi itu.

import Navbar from "@/components/Navbar";
import HeroIntro from "@/components/HeroIntro";
import SelectedWork from "@/components/SelectedWork";
import WhatIBuild from "@/components/WhatIBuild";
import HowIBuild from "@/components/HowIBuild";
import ProjectNodeGraph, {
  EcosystemNode,
} from "@/components/ProjectNodeGraph";
import RadarFeedPanel, { RadarFeedData } from "@/components/RadarFeedPanel";
import { createClient } from "@/lib/supabase-server";
import {
  PortfolioParticles,
  PortfolioScene,
} from "@/components/PortfolioClientScene";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work, systems, and business websites built by Rian Riyandi -- AI automation, prospecting, and conversion-focused websites, built end to end.",
};

const PHOTO_TWO_URL =
  "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png";
const PHOTO_ONE_URL = PHOTO_TWO_URL;

const FEED_ITEM_LIMIT = 10;

async function getEcosystemStatus(): Promise<EcosystemNode[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ecosystem_status")
      .select("product_key, display_name, status, url, display_order")
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Failed to fetch ecosystem_status:", error.message);
      return [];
    }

    return data ?? [];
  } catch (err) {
    console.error("Unexpected error fetching ecosystem_status:", err);
    return [];
  }
}

// ============================================================
// Fetch data untuk RadarFeedPanel: 10 item terbaru + total count +
// count 24 jam terakhir, untuk ai_news dan jobs. Fetch SEKALI saat
// page di-render (tidak polling), sesuai keputusan.
// ============================================================
async function getRadarFeedData(): Promise<RadarFeedData | null> {
  try {
    const supabase = createClient();
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

    const [
      aiNewsItemsRes,
      aiNewsTotalRes,
      aiNewsTodayRes,
      jobsItemsRes,
      jobsTotalRes,
      jobsTodayRes,
    ] = await Promise.all([
      supabase
        .from("ai_news")
        .select("id, title, source_name, source_url")
        .order("ingested_at", { ascending: false })
        .limit(FEED_ITEM_LIMIT),
      supabase.from("ai_news").select("*", { count: "exact", head: true }),
      supabase
        .from("ai_news")
        .select("*", { count: "exact", head: true })
        .gte("ingested_at", since24h),
      supabase
        .from("jobs")
        .select("id, title, source_name, source_url")
        .eq("status", "active")
        .order("created_at", { ascending: false })
        .limit(FEED_ITEM_LIMIT),
      supabase
        .from("jobs")
        .select("*", { count: "exact", head: true })
        .eq("status", "active"),
      supabase
        .from("jobs")
        .select("*", { count: "exact", head: true })
        .eq("status", "active")
        .gte("created_at", since24h),
    ]);

    if (aiNewsItemsRes.error || jobsItemsRes.error) {
      console.error(
        "Failed to fetch radar feed:",
        aiNewsItemsRes.error?.message,
        jobsItemsRes.error?.message
      );
      return null;
    }

    return {
      aiNews: {
        items: aiNewsItemsRes.data ?? [],
        totalCount: aiNewsTotalRes.count ?? 0,
        todayCount: aiNewsTodayRes.count ?? 0,
      },
      jobs: {
        items: jobsItemsRes.data ?? [],
        totalCount: jobsTotalRes.count ?? 0,
        todayCount: jobsTodayRes.count ?? 0,
      },
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error("Unexpected error fetching radar feed:", err);
    return null;
  }
}

export default async function PortfolioPage() {
  const [ecosystemNodes, radarFeedData] = await Promise.all([
    getEcosystemStatus(),
    getRadarFeedData(),
  ]);

  return (
    <main className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <PortfolioParticles />

      <Navbar />

      <div className="relative">
        <PortfolioScene textureAUrl={PHOTO_ONE_URL} textureBUrl={PHOTO_TWO_URL} />
        <HeroIntro />
      </div>

      <SelectedWork />

      <WhatIBuild />

      <HowIBuild />

      {/* #systems: anchor untuk Navbar "Systems". Supporting Proof --
          AI Radar + satu diagram sistem (ProjectNodeGraph), sesuai IA
          final. AIEcosystem (tree diagram statis, hardcoded) dilepas
          dari homepage -- file TIDAK dihapus dari project, cuma tidak
          di-render di sini. ProjectNodeGraph dipertahankan: data-driven
          (Supabase ecosystem_status), terhubung ke nama sistem yang
          sama di Selected Work. */}
      <div id="systems" className="relative w-full">
        <p className="text-center font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase pt-16 pb-2">
          Supporting Proof
        </p>
        <RadarFeedPanel data={radarFeedData} />
        <ProjectNodeGraph nodes={ecosystemNodes} />
      </div>

      {/* About copy sengaja tidak klaim tahun pengalaman, jumlah
          client, atau revenue — belum ada datanya. */}
      <section
        id="about"
        className="relative w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-[#0a0a0a]"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-cyan-400/60 uppercase mb-4">
          About
        </p>
        <p className="max-w-xl text-lg sm:text-xl text-neutral-200 leading-relaxed mb-3">
          I build software systems that connect AI, automation, data, and business workflows.
        </p>
        <p className="max-w-xl text-neutral-400 leading-relaxed mb-6">
          My work ranges from business websites to AI-powered internal tools and automated prospecting systems.
        </p>
        <p className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
          Based in Indonesia · Available for freelance / project work
        </p>
      </section>

      
      
      {/* Nomor WhatsApp sama persis dengan yang sudah dipakai di
          HeroIntro.tsx — tidak ada URL baru yang diasumsikan. */}
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
        <a
          href="https://wa.me/6283870880997"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-400 text-black font-mono text-sm tracking-wide uppercase font-bold transition-transform hover:scale-105"
        >
          Start a Project →
        </a>
      </section>
    </main>
  );
}
