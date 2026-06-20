"use client";

// hooks/useEcosystemCounts.ts
//
// Polling hook, fetch /api/ecosystem-counts setiap 5 menit.
// Dipakai oleh ProjectNodeGraph untuk menampilkan live counter
// di node AI Radar & Job Radar.
//
// Kenapa polling, bukan Supabase Realtime: scraper hanya jalan
// tiap 6 jam (lihat decision log), jadi data secara faktual jarang
// berubah. Polling ringan jauh lebih hemat resource di mobile
// dibanding koneksi WebSocket yang menyala terus-menerus untuk
// menunggu perubahan yang jarang terjadi.

import { useEffect, useState, useCallback } from "react";

const POLL_INTERVAL_MS = 5 * 60 * 1000; // 5 menit

export interface EcosystemCounts {
  aiRadar: { total: number; today: number };
  jobRadar: { total: number; today: number };
  fetchedAt: string;
}

export function useEcosystemCounts() {
  const [counts, setCounts] = useState<EcosystemCounts | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCounts = useCallback(async () => {
    try {
      const res = await fetch("/api/ecosystem-counts", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: EcosystemCounts = await res.json();
      setCounts(data);
      setError(null);
    } catch (err) {
      // Gagal fetch TIDAK menghapus data lama yang sudah ada di state —
      // counter tetap menampilkan angka terakhir yang berhasil diambil,
      // daripada tiba-tiba kosong/error di UI.
      console.error("useEcosystemCounts: fetch failed", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }, []);

  useEffect(() => {
    fetchCounts(); // fetch pertama kali saat mount
    const interval = setInterval(fetchCounts, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchCounts]);

  return { counts, error };
}
