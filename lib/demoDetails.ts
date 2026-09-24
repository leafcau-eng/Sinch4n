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
  "contoh-salon": {
    nama: "Miin Beauty Studio",
    jenis: "Salon & Beauty Studio",
    deskripsi:
      "Contoh website salon bergaya Korean beauty studio: layanan unggulan, menu lengkap dengan harga dan durasi, before & after, profil stylist, ulasan klien, dan booking via WhatsApp.",
    fitur: ["Menu layanan + harga", "Before & after", "Profil stylist", "Ulasan klien", "Booking WhatsApp"],
  },
  "contoh-beauty-studio": {
    nama: "Radiance MUA & Beauty Studio",
    jenis: "Makeup Artist & Beauty Studio",
    deskripsi:
      "Contoh website makeup artist dengan Beauty Style Finder (pilih acara, gaya, budget), portofolio berfilter, paket per acara, FAQ, dan booking konsultasi via WhatsApp.",
    fitur: ["Style Finder", "Portofolio berfilter", "Paket per acara", "FAQ", "Booking WhatsApp"],
  },
  // "contoh-salon": { nama: "", jenis: "", deskripsi: "", fitur: [], image: "/images/demo/contoh-salon.jpg" },
};
