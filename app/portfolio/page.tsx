// app/portfolio/page.tsx
//
// REVISI 4: ProjectGrid (grid detail + filter) diganti dengan
// CategoryShowcase (kartu kategori ringkas). Grid detail per
// kategori sekarang ada di app/portfolio/[category]/page.tsx,
// diakses lewat klik kartu kategori. Keputusan: ganti TOTAL,
// bukan ditambah berdampingan — menghindari duplikasi tampilan
// project yang sama di 2 tempat sekaligus.

import Navbar from "@/components/Navbar";
import CategoryShowcase from "@/components/CategoryShowcase";
import HeroIntro from "@/components/HeroIntro";
import ProjectNodeGraph, {
  EcosystemNode,
} from "@/components/ProjectNodeGraph";
import AIEcosystem from "@/components/AIEcosystem";
import RadarFeedPanel, { RadarFeedData } from "@/components/RadarFeedPanel";
import { createClient } from "@/lib/supabase-server";
import {
  PortfolioParticles,
  PortfolioScene,
} from "@/components/PortfolioClientScene";

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

      <RadarFeedPanel data={radarFeedData} />
      <ProjectNodeGraph nodes={ecosystemNodes} />
      <AIEcosystem />

      <div id="projects">
        <CategoryShowcase />
      </div>

      <section
        id="ebook"
        className="relative w-full py-24 px-4 flex flex-col items-center justify-center text-center bg-[#0a0a0a]"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-pink-400/70 uppercase mb-4">
          Produk Digital
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Koleksi Ebook Self-Dev &amp; Bisnis
        </h2>
        <p className="text-neutral-400 text-sm max-w-md mx-auto mb-10">
          1000+ ebook pilihan — mindset, bisnis, finansial, hingga trading. Bayar sekali, akses selamanya.
        </p>

        <div
          className="relative w-full max-w-md mx-auto rounded-[20px] p-8 overflow-hidden border"
          style={{
            background: "linear-gradient(135deg, #3c0d2f 0%, #1f0a3c 60%, #0d1a3c 100%)",
            borderColor: "rgba(244,114,182,0.25)",
            boxShadow: "0 8px 32px rgba(244,114,182,0.15)",
          }}
        >
          <span
            className="absolute pointer-events-none select-none"
            style={{ fontSize: "110px", opacity: 0.12, right: "-20px", top: "-20px", transform: "rotate(-15deg)" }}
          >
            📚
          </span>
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              opacity: 0.5,
            }}
          />

          <div className="relative z-[2] text-left">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-pink-400/15 text-pink-300 border border-pink-400/30">
                🔥 1.200+ Pembeli Puas
              </span>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
                ⚡ 23 orang lihat sekarang
              </span>
            </div>

            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm text-neutral-400 line-through">Rp2.500.000+</span>
              <span className="text-3xl font-bold text-white">Rp79.000</span>
            </div>
            <p className="text-[11px] text-pink-300 mb-6">Bayar sekali · Akses selamanya</p>

            <a
              href="https://ebook-selfdev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 rounded-full bg-pink-400 text-black font-mono text-sm tracking-wide uppercase font-bold transition-transform hover:scale-[1.02]"
            >
              🛒 Lihat &amp; Beli Sekarang
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
