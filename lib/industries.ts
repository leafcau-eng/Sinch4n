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
  salon: {
    h1: "Jasa Pembuatan Website Salon & Beauty",
    metaTitle: "Jasa Pembuatan Website Salon & Beauty | SCH",
    metaDescription:
      "Jasa pembuatan website untuk salon, beauty studio, dan makeup artist. Layanan, harga, portofolio, dan booking WhatsApp dalam satu halaman. Lihat contohnya.",
    intro:
      "Website untuk salon, beauty studio, makeup artist, nail art, dan bisnis perawatan kecantikan lainnya. Layanan, harga, portofolio, dan tombol booking WhatsApp tampil rapi di satu halaman, sehingga calon pelanggan bisa langsung menghubungi Anda.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Apa yang Dicari Pelanggan Sebelum Booking Salon?",
      paragraf: [
        "Sebelum datang atau booking, pelanggan biasanya ingin tahu tiga hal: layanan apa saja yang tersedia, kira-kira berapa harganya, dan seperti apa hasilnya. Kalau informasi itu tersebar di story dan chat, mereka harus bertanya satu per satu.",
        "Website menyatukan semuanya: daftar layanan dengan harga dan durasi, foto hasil sebelum dan sesudah, profil stylist atau makeup artist, ulasan, alamat, dan jam buka. Tombol booking langsung membuka WhatsApp dengan pesan yang sudah terisi.",
        "Salon rambut dan makeup artist punya kebutuhan berbeda. Salon perlu menu layanan yang jelas, sedangkan makeup artist perlu portofolio dan paket per acara seperti wedding, wisuda, atau pesta. Karena itu dua contoh di bawah dibuat dengan struktur yang berbeda.",
      ],
    },
    features: [
      "Daftar layanan dengan harga dan durasi",
      "Layanan unggulan dengan label Best Seller dan Popular",
      "Kategori layanan: rambut, wajah, nail, spa",
      "Galeri before & after",
      "Portofolio dengan filter jenis acara",
      "Paket harga per acara",
      "Beauty Style Finder: pilih acara, gaya, dan budget",
      "Profil stylist dan makeup artist",
      "Ulasan dan testimoni klien",
      "Promo spesial",
      "Booking via WhatsApp dengan pesan otomatis",
      "Alamat dan jam buka",
      "FAQ layanan",
    ],
    cocokUntuk: [
      "Salon rambut",
      "Beauty studio",
      "Makeup artist (MUA)",
      "Nail art",
      "Perawatan wajah",
      "Spa",
    ],
    harga: null,
    faqs: [
      {
        q: "Apakah pelanggan bisa booking lewat website salon?",
        a: "Tombol booking di contoh website mengarah ke WhatsApp dengan pesan yang sudah terisi, misalnya permintaan booking appointment. Pelanggan cukup menekan tombol lalu mengirim pesan.",
      },
      {
        q: "Apakah harga layanan bisa ditampilkan di website?",
        a: "Bisa. Contoh website menampilkan harga per layanan lengkap dengan durasi, serta paket dengan harga mulai dari. Anda juga bisa memilih mengarahkan pelanggan bertanya harga lewat WhatsApp.",
      },
      {
        q: "Apakah bisa menampilkan foto hasil kerja?",
        a: "Bisa. Contoh salon punya galeri before & after, sedangkan contoh beauty studio punya portofolio dengan filter jenis acara dan transformation gallery.",
      },
      {
        q: "Website mana yang cocok untuk salon dan mana untuk makeup artist?",
        a: "Contoh salon menonjolkan menu layanan, harga, dan profil stylist. Contoh beauty studio menonjolkan portofolio, paket per acara, dan pemilihan gaya. Keduanya bisa disesuaikan dengan bisnis Anda.",
      },
      {
        q: "Apakah website contoh ini bisa disesuaikan dengan bisnis saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama bisnis, layanan, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  // Contoh (isi kalau faktanya sudah ada):
  // bakery: { h1: null, intro: null, features: null, cocokUntuk: null, harga: null, faqs: null },
};

export function getIndustryContent(slug: string): IndustryContent | null {
  return INDUSTRY_CONTENT[slug] ?? null;
}
