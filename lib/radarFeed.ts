// lib/radarFeed.ts
//
// Dipindah dari app/portfolio/page.tsx (4 Sep 2026) -- radar feed sekarang
// jadi bagian dari case study "AI Radar" (app/portfolio/[slug]/page.tsx),
// bukan section umum di halaman listing. Logic fetch TIDAK berubah sama
// sekali, cuma pindah lokasi supaya bisa dipakai halaman detail.

import { createClient } from "@/lib/supabase-server";
import type { RadarFeedData } from "@/components/RadarFeedPanel";

const FEED_ITEM_LIMIT = 10;

export async function getRadarFeedData(): Promise<RadarFeedData | null> {
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
