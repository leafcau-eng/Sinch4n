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
  "contoh-property-elite": {
    nama: "Neo-Dago Group",
    jenis: "Developer Properti Mewah",
    deskripsi:
      "Contoh website developer properti mewah bergaya futuristik: unit aktif dengan spesifikasi, fasilitas smart home, daftar harga per tipe, dan konsultasi agent via WhatsApp.",
    fitur: ["Unit + spesifikasi", "Fasilitas unggulan", "Harga per tipe", "Konsultasi WhatsApp"],
  },
  "contoh-villa": {
    nama: "The Sayan Villa",
    jenis: "Villa & Penginapan",
    deskripsi:
      "Contoh website villa di Ubud dengan tipe kamar berharga per malam, fasilitas lengkap, galeri, destinasi wisata terdekat, FAQ, dan booking via WhatsApp.",
    fitur: ["Tipe kamar + harga", "Fasilitas", "Destinasi terdekat", "FAQ", "Booking WhatsApp"],
  },
  "contoh-wedding-premium": {
    nama: "Elysian Wedding Organizer",
    jenis: "Wedding Organizer",
    deskripsi:
      "Contoh website wedding organizer dengan paket layanan (WO penuh, dekorasi, dokumentasi, MUA), portofolio momen pasangan, testimoni, dan konsultasi gratis via WhatsApp.",
    fitur: ["Paket layanan", "Portofolio", "Testimoni", "Konsultasi gratis WhatsApp"],
  },
  "contoh-undangan": {
    nama: "Undangan Digital by SCH",
    jenis: "Undangan Pernikahan Digital",
    deskripsi:
      "Contoh undangan pernikahan digital dengan profil mempelai, love story, rangkaian acara, hitung mundur, galeri, RSVP, dan amplop digital.",
    fitur: ["Profil mempelai", "Rangkaian acara", "Hitung mundur", "RSVP", "Amplop digital"],
  },
  "contoh-car-elite": {
    nama: "SCH Elite Showroom",
    jenis: "Showroom Mobil Mewah",
    deskripsi:
      "Contoh website showroom mobil mewah bergaya eksklusif, menampilkan unit supercar dengan spesifikasi performa dan booking concierge via WhatsApp.",
    fitur: ["Unit supercar", "Spesifikasi performa", "Concierge", "Booking WhatsApp"],
  },
  "contoh-showroom-premium": {
    nama: "Prime Auto Showroom",
    jenis: "Showroom Mobil Bekas",
    deskripsi:
      "Contoh website showroom mobil bekas dengan katalog unit berfilter tipe, harga, kondisi, galeri showroom, testimoni, FAQ, dan chat WhatsApp per unit.",
    fitur: ["Katalog berfilter", "Harga + kondisi", "Galeri", "FAQ", "Chat per unit"],
  },
  "contoh-car-showroom-flagship": {
    nama: "Prima Motor Showroom",
    jenis: "Showroom Mobil (Lengkap)",
    deskripsi:
      "Contoh website showroom mobil paling lengkap: Smart Car Finder, kalkulator kredit, estimator trade in, katalog unit dengan cicilan, dan booking test drive.",
    fitur: ["Smart Car Finder", "Kalkulator kredit", "Trade in", "Katalog + cicilan", "Booking test drive"],
  },
  "contoh-bengkel": {
    nama: "Bengkel Jaya Motor",
    jenis: "Bengkel Motor & Mobil",
    deskripsi:
      "Contoh website bengkel dengan Digital Service Advisor, kalkulator estimasi biaya servis, paket servis berjenjang, before & after, dan booking WhatsApp.",
    fitur: ["Service Advisor", "Estimasi biaya", "Paket servis", "Before & after", "Booking WhatsApp"],
  },
  "contoh-carwash": {
    nama: "Sparkle Car Wash",
    jenis: "Cuci & Detailing Kendaraan",
    deskripsi:
      "Contoh website cuci kendaraan dengan katalog paket berharga (motor, mobil, detailing, coating), before & after, tiga lokasi cabang, dan booking WhatsApp.",
    fitur: ["Katalog paket + harga", "Before & after", "Multi-cabang", "Booking WhatsApp"],
  },
  "contoh-petshop-flagship": {
    nama: "SCH Pet Lifestyle Center",
    jenis: "Petshop, Grooming & Pet Hotel",
    deskripsi:
      "Contoh website petshop lengkap: Pet Assistant untuk rekomendasi layanan, grooming dan produk berharga, tahapan pet hotel, profil groomer, galeri, dan booking WhatsApp.",
    fitur: ["Pet Assistant", "Grooming + harga", "Pet hotel", "Profil groomer", "Booking WhatsApp"],
  },
  "contoh-vet-flagship": {
    nama: "SCH Pet Clinic",
    jenis: "Klinik Hewan",
    deskripsi:
      "Contoh website klinik hewan dengan Pet Care Assistant, layanan medis berharga, jadwal vaksin, profil dokter hewan, fasilitas medis, dan booking janji temu.",
    fitur: ["Pet Care Assistant", "Layanan + harga", "Jadwal vaksin", "Profil dokter hewan", "Booking WhatsApp"],
  },
  "contoh-klinik": {
    nama: "Klinik Sehat Bersama",
    jenis: "Klinik Kesehatan Umum",
    deskripsi:
      "Contoh website klinik umum dengan daftar layanan (umum, spesialis, gigi, mata, jantung, lab), galeri fasilitas, promo kunjungan pertama, dan buat janji via WhatsApp.",
    fitur: ["Daftar layanan", "Galeri fasilitas", "Promo", "Testimoni", "Buat janji WhatsApp"],
  },
  "contoh-klinik-gigi-flagship": {
    nama: "SCH Dental Care",
    jenis: "Klinik Gigi",
    deskripsi:
      "Contoh website klinik gigi dengan Concern Finder, galeri before & after, profil dokter gigi, alur treatment, FAQ dental anxiety, dan form janji temu WhatsApp.",
    fitur: ["Concern Finder", "Before & after", "Profil dokter gigi", "Alur treatment", "Booking WhatsApp"],
  },
  "contoh-laundry-flagship": {
    nama: "Fresh Laundry Bandung",
    jenis: "Laundry Kiloan",
    deskripsi:
      "Contoh website laundry dengan kalkulator estimasi biaya, daftar layanan berharga per kilo, area antar-jemput, dan tombol order WhatsApp dengan rincian pesanan otomatis.",
    fitur: ["Kalkulator estimasi", "Harga per kilo", "Area antar-jemput", "Order WhatsApp"],
  },
  "contoh-parfum": {
    nama: "SCH Parfum",
    jenis: "Toko Parfum (gaya storytelling)",
    deskripsi:
      "Contoh website parfum bergaya storytelling brand, menonjolkan satu produk unggulan lengkap dengan notes top, heart, dan base.",
    fitur: ["Storytelling notes aroma", "Satu produk unggulan", "Kontak WhatsApp"],
  },
  "contoh-parfum-flagship": {
    nama: "Lumière Parfum",
    jenis: "Toko Parfum (gaya katalog)",
    deskripsi:
      "Contoh website parfum bergaya katalog dengan beberapa varian berharga, rating, testimoni, FAQ keaslian produk dan pengiriman, serta konsultasi via WhatsApp.",
    fitur: ["Katalog varian + harga", "Testimoni", "FAQ keaslian", "Konsultasi WhatsApp"],
  },
  "contoh-rental": {
    nama: "Bandung Car Rental",
    jenis: "Rental Mobil & Kendaraan",
    deskripsi:
      "Contoh website rental dengan katalog armada dari city car sampai bus, harga per hari, status ketersediaan, area layanan, alur booking, dan booking via WhatsApp.",
    fitur: ["Katalog armada", "Harga per hari", "Status ketersediaan", "Area layanan", "Booking WhatsApp"],
  },
  "contoh-peternakan-flagship": {
    nama: "Peternakan Barokah Qurban",
    jenis: "Peternakan Qurban & Aqiqah",
    deskripsi:
      "Contoh website peternakan dengan paket domba dan sapi berbobot dan berharga, paket aqiqah, alur pemesanan, galeri kandang, FAQ, dan pesan via WhatsApp.",
    fitur: ["Paket + bobot + harga", "Alur pemesanan", "Galeri kandang", "FAQ", "Pesan WhatsApp"],
  },
  "contoh-advokat-flagship": {
    nama: "Kantor Hukum Wijaya & Rekan",
    jenis: "Advokat & Kantor Hukum",
    deskripsi:
      "Contoh website kantor hukum dengan Konsultasi Finder, bidang praktik, profil tim advokat, alur konsultasi empat langkah, FAQ, dan konsultasi via WhatsApp.",
    fitur: ["Konsultasi Finder", "Bidang praktik", "Profil tim", "Alur konsultasi", "WhatsApp"],
  },
  "contoh-las-fabrikasi-flagship": {
    nama: "Las Perkasa Jaya",
    jenis: "Las & Fabrikasi",
    deskripsi:
      "Contoh website bengkel las dengan daftar layanan, kisaran harga per meter, alur kerja, galeri hasil kerja berketerangan proyek, FAQ, dan estimasi via WhatsApp.",
    fitur: ["Daftar layanan", "Kisaran harga", "Alur kerja", "Galeri hasil kerja", "Estimasi WhatsApp"],
  },
  "contoh-percetakan-kemasan-flagship": {
    nama: "Cetak Cepat Jaya",
    jenis: "Percetakan & Kemasan",
    deskripsi:
      "Contoh website percetakan dengan katalog berfilter kategori, harga per lembar dan per pcs, cara pesan tiga langkah, promo, FAQ, dan order via WhatsApp.",
    fitur: ["Katalog berfilter", "Harga per satuan", "Cara pesan", "Promo", "Order WhatsApp"],
  },
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
