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
  "contoh-bakery-flagship": {
    nama: "SCH Bakery & Catering",
    jenis: "Bakery & Catering",
    deskripsi:
      "Contoh website bakery dan catering: kategori dari kue ulang tahun sampai buffet, produk unggulan dengan harga, galeri, testimoni, FAQ pemesanan, dan tombol pesan via WhatsApp.",
    fitur: ["Kategori produk", "Harga produk", "Galeri", "FAQ pemesanan", "Order WhatsApp"],
  },
  "contoh-baby-spa": {
    nama: "Little Bloom Baby Spa",
    jenis: "Baby Spa",
    deskripsi:
      "Contoh website baby spa dengan pemilih usia dan tujuan sesi, program dan paket berharga, profil terapis, standar kebersihan, panduan kunjungan pertama, dan booking WhatsApp.",
    fitur: ["Baby Care Journey", "Program + paket", "Profil terapis", "Kebersihan", "Booking WhatsApp"],
  },
  "contoh-florist-flagship": {
    nama: "SCH Florist",
    jenis: "Florist",
    deskripsi:
      "Contoh website florist dengan pilihan bunga berdasarkan momen, bouquet unggulan berharga, info pengiriman hari yang sama, galeri, testimoni, dan FAQ.",
    fitur: ["Pilih momen", "Bouquet + harga", "Info same-day delivery", "Galeri", "FAQ"],
  },
  "contoh-fotografer": {
    nama: "Lumina Studio",
    jenis: "Fotografer & Studio Foto",
    deskripsi:
      "Contoh website fotografer dengan portofolio berfilter, proyek pilihan, tiga paket dengan rincian harga, testimoni klien, FAQ, dan booking WhatsApp per paket.",
    fitur: ["Portofolio berfilter", "Paket + harga", "Booking per paket", "Testimoni", "FAQ"],
  },
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
