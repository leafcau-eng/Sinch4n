// Konten unik per kategori. HANYA isi fakta yang sudah diverifikasi.
// Kategori tanpa entry di sini => halaman noindex + tidak masuk sitemap.
// Field null/kosong tidak dirender.

export type IndustryContent = {
  h1: string | null;
  intro: string | null;
  features: string[] | null;
  cocokUntuk: string[] | null;
  harga: string | null;
  faqs: { q: string; a: string }[] | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  heroImage?: string | null;
  heroAlt?: string | null;
  edukasi?: { judul: string; paragraf: string[] } | null;
};

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  // Contoh (isi kalau faktanya sudah ada):
  // bakery: { h1: null, intro: null, features: null, cocokUntuk: null, harga: null, faqs: null },
};

export function getIndustryContent(slug: string): IndustryContent | null {
  return INDUSTRY_CONTENT[slug] ?? null;
}
