// app/api/ecosystem-counts/route.ts
//
// API route kecil, KHUSUS untuk polling count dari AIRadarCounter
// (lihat hooks/useEcosystemCounts.ts). Dipanggil dari client
// setiap 5 menit (lihat decision log Fase 2 — UI/Desain).
//
// Public read only, sama seperti RLS yang sudah berlaku di
// ai_news & jobs (Migration 002). Tidak ada auth/session di sini.

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = createClient();

    const [
      { count: aiNewsTotal },
      { count: aiNewsToday },
      { count: jobsTotal },
      { count: jobsToday },
    ] = await Promise.all([
      supabase.from("ai_news").select("*", { count: "exact", head: true }),
      supabase
        .from("ai_news")
        .select("*", { count: "exact", head: true })
        .gte("ingested_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
      supabase
        .from("jobs")
        .select("*", { count: "exact", head: true })
        .eq("status", "active"),
      supabase
        .from("jobs")
        .select("*", { count: "exact", head: true })
        .eq("status", "active")
        .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
    ]);

    return NextResponse.json({
      aiRadar: {
        total: aiNewsTotal ?? 0,
        today: aiNewsToday ?? 0,
      },
      jobRadar: {
        total: jobsTotal ?? 0,
        today: jobsToday ?? 0,
      },
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to fetch ecosystem counts:", err);
    return NextResponse.json(
      { error: "Failed to fetch ecosystem counts" },
      { status: 500 }
    );
  }
}
