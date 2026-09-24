// Detail per demo untuk visual card. HANYA isi fakta yang sudah diberikan.
// Key = slug demo (sama dengan di demoLinks.ts). Demo tanpa entry => tampil sebagai link teks biasa.
export type DemoDetail = {
  nama: string;
  jenis: string;
  deskripsi: string;
  fitur?: string[];
  image?: string; // /images/demo/<slug>.jpg
  alt?: string; // kosong => dibuat dari jenis + nama
  url?: string; // kosong => pakai demoUrl(slug)
};

export const DEMO_DETAILS: Record<string, DemoDetail> = {
  // "contoh-salon": { nama: "", jenis: "", deskripsi: "", fitur: [], image: "/images/demo/contoh-salon.jpg" },
};
