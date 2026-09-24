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
  "showroom-mobil": {
    h1: "Jasa Pembuatan Website Showroom Mobil",
    metaTitle: "Jasa Pembuatan Website Showroom & Jual Beli Mobil | SCH",
    metaDescription:
      "Jasa pembuatan website untuk showroom mobil bekas maupun baru. Katalog unit dengan harga, simulasi kredit, trade in, dan booking test drive via WhatsApp.",
    intro:
      "Website untuk showroom mobil bekas dan baru, rental mobil eksklusif, sampai dealer dengan simulasi kredit dan trade in. Katalog unit dengan harga dan spesifikasi, lalu calon pembeli booking test drive atau tanya unit lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pembeli Mobil Membandingkan Sebelum Datang",
      paragraf: [
        "Sebelum ke showroom, calon pembeli biasanya sudah membandingkan beberapa unit secara online: harga, tahun, kilometer, transmisi, dan kondisi. Website yang menampilkan katalog lengkap membuat showroom masuk daftar pertimbangan sejak tahap ini.",
        "Untuk showroom yang menjual dengan kredit, simulasi cicilan dan opsi trade in membantu pembeli menghitung kemampuan mereka sebelum datang. Untuk showroom mobil mewah, sisi eksklusivitas dan concierge lebih ditonjolkan dibanding daftar harga panjang.",
        "Tiga contoh di bawah menunjukkan tiga pendekatan: showroom mobil bekas sederhana, showroom lengkap dengan smart finder dan kalkulator kredit, dan showroom mobil mewah bergaya eksklusif.",
      ],
    },
    features: [
      "Katalog unit dengan filter tipe (MPV, SUV, sedan, hatchback)",
      "Harga, tahun, kilometer, transmisi, dan bahan bakar tiap unit",
      "Simulasi kredit dan estimasi cicilan",
      "Trade in mobil lama",
      "Booking test drive",
      "Galeri showroom",
      "Testimoni pembeli",
      "FAQ",
      "Chat WhatsApp per unit",
    ],
    cocokUntuk: ["Showroom mobil bekas", "Dealer mobil baru", "Rental mobil mewah", "Showroom dengan simulasi kredit"],
    harga: null,
    faqs: [
      {
        q: "Apakah harga dan spesifikasi tiap unit bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan harga, tahun, kilometer, transmisi, dan bahan bakar untuk tiap unit di katalog.",
      },
      {
        q: "Apakah website bisa membantu pembeli menghitung cicilan?",
        a: "Bisa. Salah satu contoh website punya kalkulator kredit yang menghitung estimasi cicilan bulanan dari harga mobil, DP, dan tenor.",
      },
      {
        q: "Apakah trade in mobil lama bisa ditampilkan sebagai layanan?",
        a: "Bisa. Salah satu contoh website punya estimator trade in awal berdasarkan kondisi mobil.",
      },
      {
        q: "Bagaimana calon pembeli booking test drive?",
        a: "Tombol booking test drive dan tombol chat per unit membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan showroom saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama showroom, unit, harga, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  bengkel: {
    h1: "Jasa Pembuatan Website Bengkel",
    metaTitle: "Jasa Pembuatan Website Bengkel Motor & Mobil | SCH",
    metaDescription:
      "Jasa pembuatan website untuk bengkel motor dan mobil. Daftar layanan dan harga, estimasi biaya servis, paket servis, dan booking via WhatsApp.",
    intro:
      "Website untuk bengkel motor dan mobil. Daftar layanan dengan kisaran harga, estimator biaya servis, paket servis, dan tombol booking yang membuka WhatsApp untuk kondisi darurat maupun servis terjadwal.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pelanggan Bengkel Ingin Tahu Biaya Sebelum Servis",
      paragraf: [
        "Kekhawatiran umum soal bengkel adalah biaya yang membengkak di luar perkiraan. Pelanggan ingin tahu kisaran harga sebelum kendaraan diperiksa, dan ingin update yang jelas selama proses servis.",
        "Website bengkel bisa menampilkan kisaran harga per jenis servis, paket servis dengan rincian isi, dan alur kerja dari booking sampai kendaraan siap diambil. Kalkulator estimasi biaya membantu pelanggan memperkirakan biaya sebelum datang.",
        "Untuk kondisi darurat seperti mogok, tombol panggilan langsung dan WhatsApp yang mudah ditemukan sangat membantu.",
      ],
    },
    features: [
      "Daftar layanan dengan kisaran harga: ganti oli, tune up, servis rem, servis AC, ganti aki, ganti ban",
      "Kalkulator estimasi biaya servis",
      "Paket servis (basic, standard, premium) dengan rincian isi",
      "Galeri before & after",
      "Alur servis dari booking sampai pengambilan",
      "Testimoni pelanggan",
      "FAQ",
      "Booking via WhatsApp dan kontak darurat",
    ],
    cocokUntuk: ["Bengkel motor", "Bengkel mobil", "Bengkel umum", "Servis kendaraan darurat"],
    harga: null,
    faqs: [
      {
        q: "Apakah harga servis bisa ditampilkan di website bengkel?",
        a: "Bisa. Contoh website menampilkan kisaran harga untuk tiap jenis layanan, dari ganti oli sampai perbaikan kelistrikan.",
      },
      {
        q: "Apakah ada fitur untuk menghitung estimasi biaya sebelum servis?",
        a: "Bisa. Contoh website punya kalkulator yang menampilkan kisaran harga dan estimasi waktu pengerjaan untuk layanan yang dipilih.",
      },
      {
        q: "Bagaimana pelanggan booking servis?",
        a: "Tombol booking membuka WhatsApp dengan pesan yang sudah terisi. Untuk kondisi darurat, ada juga tombol panggilan langsung.",
      },
      {
        q: "Apakah paket servis bisa ditampilkan lengkap dengan rinciannya?",
        a: "Bisa. Contoh website menampilkan paket basic, standard, dan premium dengan daftar isi dan estimasi waktu pengerjaan.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan bengkel saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama bengkel, layanan, harga, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  carwash: {
    h1: "Jasa Pembuatan Website Cuci Kendaraan",
    metaTitle: "Jasa Pembuatan Website Cuci Mobil & Motor (Car Wash) | SCH",
    metaDescription:
      "Jasa pembuatan website untuk usaha cuci mobil dan motor. Daftar paket dan harga, before & after, lokasi cabang, dan booking via WhatsApp.",
    intro:
      "Website untuk usaha cuci mobil dan motor, termasuk detailing dan coating. Daftar paket dengan harga, hasil before & after, lokasi cabang, dan tombol booking yang membuka WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pelanggan Car Wash Memilih dari Harga dan Hasil",
      paragraf: [
        "Pelanggan cuci kendaraan biasanya membandingkan harga per paket dan ingin tahu berapa lama prosesnya. Untuk layanan detailing dan coating yang lebih mahal, mereka juga ingin melihat hasil kerja sebelumnya.",
        "Website menampilkan katalog paket dengan harga, dari cuci reguler sampai coating nano ceramic, galeri before & after, dan lokasi tiap cabang lengkap dengan kontak masing-masing.",
        "Untuk usaha dengan banyak cabang, menampilkan alamat dan kontak tiap cabang secara terpisah memudahkan pelanggan memilih lokasi terdekat.",
      ],
    },
    features: [
      "Katalog paket dengan filter: motor, mobil, detailing, coating",
      "Harga tiap paket",
      "Galeri before & after",
      "Lokasi dan kontak tiap cabang",
      "Promo kunjungan pertama",
      "Testimoni pelanggan",
      "FAQ",
      "Booking via WhatsApp",
    ],
    cocokUntuk: ["Cuci mobil", "Cuci motor", "Detailing kendaraan", "Coating kendaraan"],
    harga: null,
    faqs: [
      {
        q: "Apakah harga tiap paket cuci bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan harga untuk tiap paket, dari cuci motor reguler sampai coating nano ceramic.",
      },
      {
        q: "Apakah hasil detailing bisa ditampilkan sebelum dan sesudah?",
        a: "Bisa. Contoh website punya galeri before & after untuk layanan detailing dan cuci premium.",
      },
      {
        q: "Bagaimana kalau usaha punya lebih dari satu cabang?",
        a: "Contoh website menampilkan alamat dan kontak tiap cabang secara terpisah, sehingga pelanggan bisa memilih lokasi terdekat.",
      },
      {
        q: "Bagaimana pelanggan booking?",
        a: "Tombol booking membuka WhatsApp dengan pesan yang sudah terisi, dan beberapa paket punya tombol booking sendiri.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan usaha saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama usaha, paket, harga, lokasi, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  petshop: {
    h1: "Jasa Pembuatan Website Petshop & Grooming",
    metaTitle: "Jasa Pembuatan Website Petshop & Grooming | SCH",
    metaDescription:
      "Jasa pembuatan website untuk petshop, grooming, dan pet hotel. Layanan, harga, produk, galeri, FAQ, dan booking via WhatsApp. Lihat contohnya.",
    intro:
      "Website untuk petshop, grooming, dan pet hotel. Layanan dan harga, katalog produk, kondisi penginapan, profil groomer, dan booking lewat WhatsApp tampil dalam satu halaman.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pemilik Hewan Ingin Tahu Siapa yang Merawat Peliharaannya",
      paragraf: [
        "Sebelum menitipkan atau membawa hewan grooming, pemilik ingin tahu layanan apa yang tersedia, kisaran harganya, bagaimana hewan dirawat selama di tempat, dan siapa yang menangani.",
        "Website menjawabnya lewat daftar layanan dan produk dengan harga, penjelasan pengalaman menginap langkah demi langkah, profil groomer, galeri fasilitas, dan testimoni dari pemilik hewan lain.",
        "Tombol booking membuka WhatsApp dengan pesan yang sudah terisi, sehingga pemilik hewan bisa langsung menanyakan ketersediaan.",
      ],
    },
    features: [
      "Layanan grooming dengan harga dan durasi",
      "Katalog produk (makanan, snack, mainan, aksesoris) dengan harga",
      "Pet hotel: tahapan penginapan dari check-in sampai check-out",
      "Profil groomer",
      "Galeri grooming, hotel, toko, dan area bermain",
      "Testimoni pemilik hewan",
      "FAQ",
      "Booking via WhatsApp, alamat, dan jam buka",
    ],
    cocokUntuk: ["Petshop", "Pet grooming", "Pet hotel", "Toko perlengkapan hewan"],
    harga: null,
    faqs: [
      {
        q: "Apakah harga grooming dan produk bisa ditampilkan di website?",
        a: "Bisa. Contoh website menampilkan harga tiap layanan grooming dan produk yang dijual.",
      },
      {
        q: "Apakah kondisi pet hotel bisa dijelaskan ke pemilik hewan?",
        a: "Bisa. Contoh website menjelaskan tahapan penginapan dari check-in, pemeriksaan kesehatan, waktu bermain dan makan, sampai check-out.",
      },
      {
        q: "Bagaimana pemilik hewan booking lewat website?",
        a: "Tombol booking membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah profil groomer bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan foto, pengalaman, dan keahlian tiap groomer.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan petshop saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama, layanan, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  "klinik-hewan": {
    h1: "Jasa Pembuatan Website Klinik Hewan",
    metaTitle: "Jasa Pembuatan Website Klinik Hewan & Dokter Hewan | SCH",
    metaDescription:
      "Jasa pembuatan website untuk klinik hewan. Layanan medis, jadwal vaksin, profil dokter hewan, fasilitas, FAQ, dan booking janji temu via WhatsApp.",
    intro:
      "Website untuk klinik hewan dan dokter hewan. Layanan medis dengan kisaran harga, panduan jadwal vaksin, profil dokter hewan, fasilitas medis, dan form janji temu yang terhubung ke WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pemilik Hewan Butuh Kepastian Sebelum ke Klinik",
      paragraf: [
        "Saat hewan peliharaan sakit, pemilik sering panik dan tidak tahu harus konsultasi dulu atau langsung datang. Mereka juga ingin tahu layanan apa saja yang tersedia dan kisaran biayanya sebelum memutuskan.",
        "Website klinik hewan bisa membantu lewat panduan gejala umum, daftar layanan dengan kisaran harga, jadwal vaksin, profil dan spesialisasi dokter hewan, serta fasilitas medis yang tersedia seperti rontgen, laboratorium, dan rawat inap.",
        "Untuk kondisi darurat, nomor kontak langsung yang mudah ditemukan sangat membantu. Form janji temu yang terhubung ke WhatsApp mempercepat proses booking.",
      ],
    },
    features: [
      "Layanan medis dengan kisaran harga",
      "Panduan jadwal vaksin",
      "Profil dan spesialisasi dokter hewan",
      "Fasilitas medis: rontgen, laboratorium, rawat inap, ruang operasi",
      "Artikel edukasi kesehatan hewan",
      "Testimoni pemilik hewan",
      "FAQ",
      "Form janji temu dan kontak darurat via WhatsApp",
    ],
    cocokUntuk: ["Klinik hewan", "Dokter hewan", "Praktik dokter hewan", "Rawat inap hewan"],
    harga: null,
    faqs: [
      {
        q: "Apakah kisaran harga layanan medis bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan kisaran harga untuk general check-up, vaksinasi, dan grooming, dengan catatan biaya final ditentukan setelah pemeriksaan dokter.",
      },
      {
        q: "Apakah jadwal vaksin bisa dijelaskan di website?",
        a: "Bisa. Contoh website menampilkan panduan jadwal vaksin sebagai edukasi umum untuk pemilik hewan.",
      },
      {
        q: "Bagaimana pemilik hewan membuat janji temu?",
        a: "Contoh website punya form janji temu yang mengirim detail booking lewat WhatsApp, termasuk nama dokter yang dipilih.",
      },
      {
        q: "Apakah kontak darurat bisa ditampilkan terpisah?",
        a: "Bisa. Contoh website menampilkan tombol panggilan darurat dan WhatsApp darurat di bagian atas halaman.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan klinik saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama klinik, dokter, layanan, harga, dan kontak diganti sesuai klinik Anda.",
      },
    ],
  },
  klinik: {
    h1: "Jasa Pembuatan Website Klinik",
    metaTitle: "Jasa Pembuatan Website Klinik Kesehatan | SCH",
    metaDescription:
      "Jasa pembuatan website untuk klinik kesehatan umum. Daftar layanan, fasilitas, promo, testimoni, dan buat janji konsultasi via WhatsApp. Lihat contohnya.",
    intro:
      "Website untuk klinik kesehatan umum: konsultasi dokter umum dan spesialis, kesehatan gigi, mata, jantung, sampai laboratorium. Layanan, fasilitas, dan cara membuat janji tampil jelas.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pasien Ingin Tahu Layanan dan Fasilitas Sebelum Datang",
      paragraf: [
        "Calon pasien biasanya mencari klinik terdekat lalu ingin memastikan layanan yang mereka butuhkan tersedia, apakah ada dokter spesialis, dan bagaimana fasilitasnya.",
        "Website menampilkan daftar layanan mulai dari konsultasi umum, spesialis, gigi, mata, jantung, sampai laboratorium, dilengkapi foto fasilitas seperti ruang tunggu, ruang periksa, laboratorium, dan apotek.",
        "Promo untuk kunjungan pertama dan testimoni pasien membantu meyakinkan calon pasien baru, lalu mereka bisa membuat janji lewat WhatsApp.",
      ],
    },
    features: [
      "Daftar layanan: umum, spesialis, gigi, mata, jantung, laboratorium",
      "Galeri fasilitas: ruang tunggu, ruang periksa, laboratorium, apotek",
      "Promo untuk kunjungan pertama",
      "Testimoni pasien",
      "Buat janji via WhatsApp",
      "Alamat dan jam operasional",
    ],
    cocokUntuk: ["Klinik umum", "Klinik keluarga", "Klinik dengan dokter spesialis"],
    harga: null,
    faqs: [
      {
        q: "Layanan apa saja yang bisa ditampilkan di website klinik?",
        a: "Contoh website menampilkan konsultasi umum, konsultasi spesialis, kesehatan gigi, kesehatan mata, kesehatan jantung, dan laboratorium.",
      },
      {
        q: "Bagaimana pasien membuat janji lewat website?",
        a: "Tombol buat janji membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah fasilitas klinik bisa ditampilkan dalam bentuk foto?",
        a: "Bisa. Contoh website punya galeri ruang tunggu, ruang periksa, laboratorium, dan apotek.",
      },
      {
        q: "Apakah promo bisa dicantumkan di website?",
        a: "Bisa. Contoh website menampilkan promo konsultasi gratis untuk kunjungan pertama sebagai contoh.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan klinik saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama klinik, layanan, foto, dan kontak diganti sesuai klinik Anda.",
      },
    ],
  },
  "klinik-gigi": {
    h1: "Jasa Pembuatan Website Klinik Gigi",
    metaTitle: "Jasa Pembuatan Website Klinik Gigi & Dokter Gigi | SCH",
    metaDescription:
      "Jasa pembuatan website untuk klinik gigi. Concern finder, before & after, profil dokter gigi, alur treatment, FAQ, dan booking via WhatsApp.",
    intro:
      "Website untuk klinik gigi dan dokter gigi: dari perawatan umum, estetik, ortodonti, sampai bedah mulut. Concern finder membantu pasien mengarahkan keluhan ke treatment yang tepat, lalu booking konsultasi lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pasien Sering Ragu Sebelum ke Dokter Gigi",
      paragraf: [
        "Banyak orang menunda ke dokter gigi karena tidak yakin keluhannya perlu treatment apa, atau merasa cemas dengan prosesnya. Website bisa mengurangi keraguan itu.",
        "Contoh di bawah punya Concern Finder, tempat pasien memilih keluhannya (gigi berlubang, ngilu, kuning, dan sebagainya) untuk diarahkan ke treatment yang relevan. Ada juga galeri before & after, profil dokter gigi dan spesialisasinya, serta alur treatment dari konsultasi sampai follow-up.",
        "FAQ menjawab kekhawatiran umum seperti dental anxiety dan kepastian harga, sebelum pasien membuat janji lewat form yang terhubung ke WhatsApp.",
      ],
    },
    features: [
      "Concern Finder: pilih keluhan gigi",
      "Galeri before & after (whitening, behel)",
      "Profil dokter gigi dan spesialisasi",
      "Alur treatment: konsultasi sampai follow-up",
      "Testimoni pasien",
      "FAQ termasuk soal dental anxiety",
      "Form janji temu via WhatsApp",
    ],
    cocokUntuk: ["Klinik gigi", "Dokter gigi umum", "Ortodonti (behel)", "Estetik gigi (whitening)"],
    harga: null,
    faqs: [
      {
        q: "Apa itu Concern Finder di website klinik gigi?",
        a: "Fitur di contoh website tempat pasien memilih keluhannya, misalnya gigi berlubang atau gigi tidak rapi, untuk diarahkan ke treatment yang sesuai.",
      },
      {
        q: "Apakah hasil before & after bisa ditampilkan?",
        a: "Bisa. Contoh website punya galeri before & after untuk whitening dan behel.",
      },
      {
        q: "Bagaimana pasien membuat janji?",
        a: "Contoh website punya form janji temu yang memilih dokter, tanggal, dan keluhan, lalu mengirim detailnya lewat WhatsApp.",
      },
      {
        q: "Apakah website bisa membahas rasa takut ke dokter gigi?",
        a: "Bisa. Contoh website punya FAQ yang menjelaskan cara klinik menangani pasien dengan dental anxiety.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan klinik saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama klinik, dokter, treatment, dan kontak diganti sesuai klinik Anda.",
      },
    ],
  },
  laundry: {
    h1: "Jasa Pembuatan Website Laundry",
    metaTitle: "Jasa Pembuatan Website Laundry Kiloan | SCH",
    metaDescription:
      "Jasa pembuatan website untuk laundry kiloan. Kalkulator estimasi biaya, daftar layanan dan harga, area antar-jemput, dan order via WhatsApp.",
    intro:
      "Website untuk usaha laundry kiloan dan dry clean. Kalkulator estimasi biaya, daftar layanan dengan harga per kilo, area antar-jemput, dan tombol order yang mengirim rincian pesanan lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pelanggan Laundry Ingin Tahu Harga Sebelum Order",
      paragraf: [
        "Pertanyaan pertama calon pelanggan laundry hampir selalu sama: berapa harga per kilo, berapa lama selesai, dan apakah ada antar-jemput ke lokasi mereka.",
        "Website bisa menjawabnya lewat kalkulator estimasi biaya: pelanggan memasukkan berat cucian dan memilih layanan, lalu langsung melihat estimasi harga dan waktu selesai. Daftar layanan, area antar-jemput, dan cara kerja juga ditampilkan.",
        "Tombol order mengirim rincian pesanan (layanan, berat, estimasi biaya) langsung ke WhatsApp, jadi pemilik usaha tidak perlu bertanya ulang.",
      ],
    },
    features: [
      "Kalkulator estimasi biaya berdasarkan berat dan jenis layanan",
      "Daftar layanan dengan harga per kilo: reguler, express, setrika saja, dry clean",
      "Area layanan dan antar-jemput",
      "Cara kerja: jemput, cuci, setrika, antar",
      "Galeri fasilitas",
      "Testimoni pelanggan",
      "FAQ",
      "Order via WhatsApp dengan rincian pesanan otomatis",
    ],
    cocokUntuk: ["Laundry kiloan", "Laundry express", "Dry clean", "Laundry dengan antar-jemput"],
    harga: null,
    faqs: [
      {
        q: "Apakah pelanggan bisa menghitung estimasi biaya sebelum order?",
        a: "Bisa. Contoh website punya kalkulator: pelanggan memasukkan berat cucian dan memilih layanan, lalu estimasi harga dan waktu selesai muncul otomatis.",
      },
      {
        q: "Apakah area antar-jemput bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan daftar area yang mendapat layanan antar-jemput gratis.",
      },
      {
        q: "Bagaimana pelanggan order lewat website?",
        a: "Tombol order mengirim pesan WhatsApp yang sudah berisi rincian layanan, berat, dan estimasi biaya, jadi pelanggan tinggal mengirim.",
      },
      {
        q: "Apakah harga per jenis layanan bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan harga per kilo untuk layanan reguler, express, setrika saja, dan dry clean.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan usaha laundry saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama usaha, harga, area layanan, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  parfum: {
    h1: "Jasa Pembuatan Website Parfum",
    metaTitle: "Jasa Pembuatan Website Toko Parfum | SCH",
    metaDescription:
      "Jasa pembuatan website untuk toko parfum dan brand parfum lokal. Katalog varian dengan harga, storytelling aroma, FAQ, dan order via WhatsApp.",
    intro:
      "Website untuk toko parfum dan brand parfum lokal. Katalog varian dengan harga, cerita di balik tiap aroma, dan tombol order atau konsultasi lewat WhatsApp. Dua gaya contoh di bawah menunjukkan pendekatan storytelling dan pendekatan katalog.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Parfum Dijual Lewat Cerita dan Kepercayaan",
      paragraf: [
        "Parfum sulit dijelaskan lewat foto saja karena pembeli tidak bisa mencium aromanya lewat layar. Karena itu website parfum biasanya mengandalkan storytelling: notes aroma (top, heart, base), karakter wangi, dan momen pemakaian yang cocok.",
        "Selain cerita, pembeli online juga ingin kepastian soal keaslian produk, harga per varian atau per ukuran, dan kebijakan tukar jika aroma tidak cocok. FAQ soal originalitas dan pengiriman membantu meyakinkan pembeli baru.",
        "Dua contoh di bawah menunjukkan dua gaya berbeda: satu fokus ke storytelling brand dengan satu produk unggulan, satu lagi fokus ke katalog dengan beberapa varian, harga, dan FAQ lengkap.",
      ],
    },
    features: [
      "Storytelling notes aroma: top, heart, base",
      "Katalog varian dengan harga",
      "Rating dan testimoni",
      "FAQ keaslian produk dan pengiriman",
      "Order atau konsultasi via WhatsApp",
    ],
    cocokUntuk: ["Toko parfum", "Brand parfum lokal", "Reseller parfum"],
    harga: null,
    faqs: [
      {
        q: "Apakah website parfum bisa menampilkan notes aroma secara detail?",
        a: "Bisa. Contoh website menampilkan notes top, heart, dan base untuk tiap varian, lengkap dengan cerita di balik aromanya.",
      },
      {
        q: "Apakah harga tiap varian bisa ditampilkan?",
        a: "Bisa. Salah satu contoh website menampilkan harga mulai dari untuk tiap varian parfum.",
      },
      {
        q: "Bagaimana website meyakinkan pembeli soal keaslian produk?",
        a: "Salah satu contoh website punya FAQ yang menjelaskan status reseller resmi dan kode batch untuk verifikasi keaslian.",
      },
      {
        q: "Bagaimana pelanggan order atau konsultasi?",
        a: "Tombol order dan konsultasi membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan brand parfum saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama brand, varian, harga, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  rental: {
    h1: "Jasa Pembuatan Website Rental Mobil",
    metaTitle: "Jasa Pembuatan Website Rental Mobil | SCH",
    metaDescription:
      "Jasa pembuatan website untuk rental mobil dan kendaraan. Katalog armada dengan harga per hari, status ketersediaan, area layanan, dan booking WhatsApp.",
    intro:
      "Website untuk rental mobil, van, dan bus pariwisata. Katalog armada lengkap dengan harga per hari dan status ketersediaan, cara booking yang jelas, dan tombol booking lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Apa yang Dicari Penyewa Sebelum Menghubungi Rental?",
      paragraf: [
        "Orang yang mencari rental biasanya ingin cepat tahu: unit apa yang tersedia, berapa harga per hari, berapa kapasitas dan jenis transmisinya, serta apakah bisa dengan sopir. Kalau semua itu harus ditanyakan lewat chat, prosesnya lambat.",
        "Website menampilkan katalog per jenis kendaraan (city car, MPV, SUV, van, luxury, bus) dengan kapasitas, transmisi, bahan bakar, tahun, harga, dan status tersedia atau sedang disewa.",
        "Cara booking dijelaskan langkah demi langkah, area layanan ditampilkan, dan penyewa cukup menekan tombol WhatsApp untuk menanyakan ketersediaan.",
      ],
    },
    features: [
      "Katalog armada dengan filter jenis kendaraan",
      "Spesifikasi tiap unit: kapasitas, transmisi, bahan bakar, tahun",
      "Harga per hari",
      "Status ketersediaan dan label promo",
      "Alur booking langkah demi langkah",
      "Area layanan dan antar-jemput",
      "Promo spesial",
      "Testimoni pelanggan",
      "FAQ sewa",
      "Booking via WhatsApp, alamat, dan jam layanan",
    ],
    cocokUntuk: ["Rental mobil", "Rental kendaraan", "Sewa van dan bus", "Rental dengan sopir", "Transfer bandara"],
    harga: null,
    faqs: [
      {
        q: "Apakah website rental bisa menampilkan harga per unit?",
        a: "Bisa. Contoh website menampilkan harga per hari untuk tiap unit, dari city car sampai bus pariwisata.",
      },
      {
        q: "Apakah status ketersediaan unit bisa ditampilkan?",
        a: "Bisa. Contoh website memberi label Tersedia, Disewa, atau Promo pada tiap unit.",
      },
      {
        q: "Bagaimana penyewa memesan lewat website?",
        a: "Contoh website memakai tombol booking yang membuka WhatsApp dengan pesan yang sudah terisi, serta penjelasan alur booking empat langkah.",
      },
      {
        q: "Apakah area layanan dan antar-jemput bisa dicantumkan?",
        a: "Bisa. Contoh website menampilkan daftar area layanan, termasuk transfer bandara dan hotel.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan rental saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama rental, armada, harga, foto, area, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  peternakan: {
    h1: "Jasa Pembuatan Website Peternakan",
    metaTitle: "Jasa Pembuatan Website Peternakan & Ternak Qurban | SCH",
    metaDescription:
      "Jasa pembuatan website untuk peternakan dan penjual ternak qurban dan aqiqah. Paket ternak dengan bobot dan harga, alur pesan, galeri kandang, dan WhatsApp.",
    intro:
      "Website untuk peternakan dan penjual ternak qurban dan aqiqah. Paket domba dan sapi dengan bobot dan harga, alur pemesanan, kondisi kandang, dan tombol pesan lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pembeli Ternak Ingin Yakin Sebelum Bayar",
      paragraf: [
        "Membeli ternak qurban atau aqiqah adalah keputusan besar. Pembeli ingin tahu jenis dan bobot ternak, harganya, bagaimana ternak dirawat, apakah bisa dilihat langsung, dan kapan diantar.",
        "Website menjawabnya dengan paket ternak yang menampilkan bobot dan harga, bagian standar dan sertifikasi, galeri kandang, alur pemesanan dari pilih ternak sampai kirim, serta FAQ tentang kunjungan ke kandang dan jadwal pengiriman.",
        "Pembeli lalu bisa memesan atau menanyakan ketersediaan lewat WhatsApp.",
      ],
    },
    features: [
      "Paket ternak dengan bobot dan harga",
      "Paket aqiqah",
      "Alur pemesanan: pilih ternak, booking dan DP, cek kandang, kirim",
      "Bagian standar dan sertifikasi peternakan",
      "Galeri kandang dan ternak",
      "Testimoni pembeli",
      "FAQ kunjungan kandang dan pengiriman",
      "Pesan via WhatsApp, alamat, dan jam kunjungan",
    ],
    cocokUntuk: ["Peternakan domba", "Peternakan sapi", "Penjual ternak qurban", "Paket aqiqah"],
    harga: null,
    faqs: [
      {
        q: "Apakah website peternakan bisa menampilkan paket dan harga ternak?",
        a: "Bisa. Contoh website menampilkan paket domba dan sapi dengan kisaran bobot dan harga, serta paket aqiqah.",
      },
      {
        q: "Bagaimana pembeli memesan lewat website?",
        a: "Contoh website menjelaskan alur empat langkah, dan tombol pesan membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah bisa menampilkan sertifikasi dan standar kesehatan ternak?",
        a: "Bisa. Contoh website punya bagian khusus untuk standar dan sertifikasi, yang isinya Anda sesuaikan dengan kondisi peternakan Anda.",
      },
      {
        q: "Apakah kondisi kandang bisa ditampilkan?",
        a: "Bisa. Contoh website punya galeri kawanan ternak dan fasilitas kandang, serta info alamat dan jam kunjungan.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan peternakan saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama, paket, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  advokat: {
    h1: "Jasa Pembuatan Website Advokat & Kantor Hukum",
    metaTitle: "Jasa Pembuatan Website Advokat & Kantor Hukum | SCH",
    metaDescription:
      "Jasa pembuatan website untuk advokat dan kantor hukum. Bidang praktik, profil tim, alur konsultasi, FAQ, dan tombol konsultasi via WhatsApp.",
    intro:
      "Website untuk advokat, kantor hukum, dan konsultan hukum. Bidang praktik, profil tim, alur konsultasi, dan FAQ dijelaskan dengan jelas, lalu calon klien bisa mengajukan konsultasi lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Calon Klien Hukum Mencari Kejelasan",
      paragraf: [
        "Orang yang sedang menghadapi masalah hukum biasanya belum tahu harus ke siapa. Mereka perlu memahami bidang apa yang ditangani, siapa advokatnya, bagaimana proses konsultasi, dan bagaimana menghubungi kantor.",
        "Contoh di bawah membantu dengan Konsultasi Finder: calon klien memilih situasinya (pidana, perdata, korporat, atau keluarga), lalu melihat bidang praktik yang sesuai. Bidang praktik, profil tim, dan alur konsultasi empat langkah tampil di halaman yang sama.",
        "Untuk kantor hukum, isi website sebaiknya disesuaikan dengan ketentuan kode etik profesi advokat.",
      ],
    },
    features: [
      "Konsultasi Finder: pilih situasi hukum",
      "Bidang praktik dengan tombol konsultasi per bidang",
      "Profil tim advokat dan bidang keahlian",
      "Alur konsultasi empat langkah",
      "Wilayah praktik",
      "Galeri kantor",
      "FAQ konsultasi",
      "Konsultasi via WhatsApp, alamat, dan jam kerja",
    ],
    cocokUntuk: ["Advokat", "Kantor hukum", "Firma hukum", "Konsultan hukum"],
    harga: null,
    faqs: [
      {
        q: "Apa yang tampil di website kantor hukum?",
        a: "Contoh website menampilkan bidang praktik, profil tim, alur konsultasi, wilayah praktik, galeri kantor, FAQ, dan kontak.",
      },
      {
        q: "Apa itu Konsultasi Finder?",
        a: "Fitur di contoh website tempat calon klien memilih situasinya, misalnya pidana, perdata, korporat, atau keluarga, untuk menemukan bidang praktik yang tepat.",
      },
      {
        q: "Bagaimana calon klien menghubungi kantor?",
        a: "Tombol konsultasi membuka WhatsApp dengan pesan yang sudah terisi. Alamat dan jam kerja juga tampil di halaman.",
      },
      {
        q: "Apakah isi website bisa disesuaikan dengan kode etik advokat?",
        a: "Bisa. Semua teks di template bisa diganti, sehingga Anda dapat menyesuaikan klaim dan bagian yang ditampilkan dengan ketentuan profesi.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan kantor saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama kantor, tim, bidang praktik, foto, dan kontak diganti sesuai kantor Anda.",
      },
    ],
  },
  "las-fabrikasi": {
    h1: "Jasa Pembuatan Website Las & Fabrikasi",
    metaTitle: "Jasa Pembuatan Website Las & Fabrikasi | SCH",
    metaDescription:
      "Jasa pembuatan website untuk bengkel las dan fabrikasi. Daftar layanan, kisaran harga per meter, alur kerja, galeri hasil, dan estimasi via WhatsApp.",
    intro:
      "Website untuk bengkel las dan fabrikasi: pagar besi, canopy, railing, teralis, dan pekerjaan custom. Layanan, kisaran harga, alur kerja, dan hasil kerja tampil jelas, dan calon pelanggan bisa meminta estimasi lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pelanggan Las Ingin Tahu Harga dan Prosesnya",
      paragraf: [
        "Pelanggan pekerjaan las biasanya membandingkan beberapa bengkel. Mereka ingin tahu jenis pekerjaan yang diterima, kisaran harga per meter, bagaimana prosesnya, dan seperti apa hasil kerja sebelumnya.",
        "Website menampilkan daftar layanan, kisaran harga per meter atau per meter persegi dengan catatan bahwa harga akhir tergantung model dan material, alur kerja dari kirim ukuran sampai pemasangan, dan galeri hasil kerja dengan keterangan proyek.",
        "Calon pelanggan cukup mengirim ukuran dan foto lokasi lewat WhatsApp untuk meminta estimasi.",
      ],
    },
    features: [
      "Daftar layanan: pagar, canopy, railing, teralis, fabrikasi custom",
      "Kisaran harga per meter atau per meter persegi",
      "Alur kerja: kirim ukuran, estimasi, pengerjaan, pemasangan",
      "Galeri hasil kerja dengan keterangan proyek",
      "Testimoni pelanggan",
      "FAQ pengerjaan",
      "Tombol hitung estimasi via WhatsApp",
      "Alamat bengkel",
    ],
    cocokUntuk: ["Bengkel las", "Fabrikasi besi", "Pagar dan canopy", "Railing dan teralis", "Konstruksi baja ringan"],
    harga: null,
    faqs: [
      {
        q: "Bisakah website bengkel las menampilkan kisaran harga?",
        a: "Bisa. Contoh website menampilkan kisaran harga per meter atau per meter persegi untuk pagar, canopy, dan railing, dengan catatan harga akhir tergantung model dan material.",
      },
      {
        q: "Bagaimana pelanggan meminta estimasi?",
        a: "Tombol hitung estimasi membuka WhatsApp dengan pesan yang sudah terisi, lalu pelanggan mengirim ukuran dan foto lokasi.",
      },
      {
        q: "Bisakah hasil kerja ditampilkan?",
        a: "Bisa. Contoh website punya galeri hasil kerja lengkap dengan keterangan jenis pekerjaan dan lokasi.",
      },
      {
        q: "Bisakah alur kerja dijelaskan di website?",
        a: "Bisa. Contoh website menjelaskan empat langkah: kirim ukuran, terima estimasi, proses pengerjaan, lalu pasang dan cek.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan bengkel saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama bengkel, layanan, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  percetakan: {
    h1: "Jasa Pembuatan Website Percetakan & Kemasan",
    metaTitle: "Jasa Pembuatan Website Percetakan & Kemasan | SCH",
    metaDescription:
      "Jasa pembuatan website untuk percetakan dan kemasan custom. Katalog dengan harga per lembar dan per pcs, cara pesan, promo, FAQ, dan order via WhatsApp.",
    intro:
      "Website untuk percetakan, fotocopy, dan kemasan custom. Katalog produk dengan harga per lembar, per pcs, atau per meter persegi, cara pesan yang jelas, dan tombol order lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Pelanggan Cetak Ingin Harga yang Jelas",
      paragraf: [
        "Pelanggan percetakan datang dengan kebutuhan yang berbeda: dokumen, stiker, banner, undangan, atau kemasan produk. Yang mereka tanyakan hampir selalu sama: berapa harganya, minimal order berapa, dan berapa lama jadi.",
        "Website menampilkan katalog per kategori dengan harga per lembar, per pcs, per meter persegi, atau per box, cara pesan tiga langkah, promo, dan FAQ tentang minimal order, format file, dan lama pengerjaan.",
        "Pelanggan bisa langsung mengirim desain atau bertanya lewat WhatsApp.",
      ],
    },
    features: [
      "Katalog dengan filter kategori: dokumen, kemasan, stiker dan label, foto dan banner, undangan dan kartu nama",
      "Harga per lembar, per pcs, per meter persegi, atau per box",
      "Label Bestseller dan Baru",
      "Galeri hasil cetak dan kemasan",
      "Cara pesan tiga langkah",
      "Promo",
      "Testimoni pelanggan",
      "FAQ minimal order, format file, dan lama pengerjaan",
      "Order via WhatsApp, alamat toko",
    ],
    cocokUntuk: ["Percetakan", "Fotocopy dan print", "Kemasan custom UMKM", "Stiker dan label", "Banner dan undangan"],
    harga: null,
    faqs: [
      {
        q: "Bisakah website percetakan menampilkan daftar harga?",
        a: "Bisa. Contoh website menampilkan harga per lembar, per pcs, per meter persegi, dan per box, dikelompokkan per kategori produk.",
      },
      {
        q: "Bagaimana pelanggan memesan?",
        a: "Contoh website menjelaskan tiga langkah: kirim desain, konfirmasi harga dan jumlah, lalu cetak dan ambil atau kirim. Tombol order membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Bisakah minimal order dan waktu pengerjaan dijelaskan?",
        a: "Bisa. Contoh website punya bagian FAQ untuk minimal order kemasan, format file desain, dan lama pengerjaan.",
      },
      {
        q: "Bisakah hasil cetak ditampilkan?",
        a: "Bisa. Contoh website punya galeri proses cetak, finishing kemasan, dan hasil kemasan custom.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan percetakan saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama toko, produk, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  bakery: {
    h1: "Jasa Pembuatan Website Bakery",
    metaTitle: "Jasa Pembuatan Website Bakery & Toko Kue | SCH",
    metaDescription:
      "Jasa pembuatan website untuk bakery, toko kue, dan catering. Katalog produk, harga, galeri, FAQ pemesanan, dan tombol order WhatsApp. Lihat contohnya.",
    intro:
      "Website untuk bakery, toko kue, dessert shop, dan usaha catering. Produk, harga, galeri, dan cara pemesanan tampil jelas, dan pelanggan bisa langsung memesan atau bertanya lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Kenapa Bakery Perlu Website Sendiri?",
      paragraf: [
        "Pelanggan bakery biasanya mencari kue untuk sebuah momen: ulang tahun, pernikahan, atau acara kantor. Mereka perlu melihat pilihan produk, kisaran harga, dan seberapa jauh hari harus memesan sebelum memutuskan.",
        "Website menyusun semua itu dalam satu tempat: kategori produk dari kue ulang tahun sampai catering, produk unggulan lengkap dengan harga, galeri, testimoni, dan jawaban pertanyaan yang sering muncul seperti waktu pemesanan, desain custom, pengiriman, dan pembayaran.",
        "Contoh di bawah memadukan bakery dan catering dalam satu website, dengan tombol pesan dan tombol tanya admin lewat WhatsApp.",
      ],
    },
    features: [
      "Kategori produk: kue ulang tahun, wedding cake, dessert box, snack box, catering",
      "Produk unggulan dengan harga",
      "Galeri produk",
      "Keunggulan bisnis: bahan, custom design, pengiriman",
      "Testimoni pelanggan",
      "FAQ pemesanan",
      "Tombol pesan dan tanya admin via WhatsApp",
      "Alamat dan jam buka",
    ],
    cocokUntuk: ["Bakery", "Toko kue", "Custom cake", "Dessert shop", "Snack box dan lunch box", "Catering"],
    harga: null,
    faqs: [
      {
        q: "Apakah website bakery bisa menampilkan harga produk?",
        a: "Bisa. Contoh website menampilkan produk unggulan lengkap dengan harga, dari kue reguler sampai wedding cake dan snack box.",
      },
      {
        q: "Bagaimana pelanggan memesan lewat website bakery?",
        a: "Contoh website memakai tombol pesan dan tombol tanya admin yang membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah bisa menjelaskan aturan pemesanan seperti waktu pesan dan pembayaran?",
        a: "Bisa. Contoh website punya FAQ yang menjelaskan waktu pemesanan, desain custom, delivery, pesanan korporat, dan metode pembayaran.",
      },
      {
        q: "Apakah satu website bisa untuk bakery sekaligus catering?",
        a: "Bisa. Contoh di halaman ini menampilkan kue, dessert box, snack box, lunch catering, dan buffet catering dalam satu website.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan bisnis saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama bisnis, produk, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  "baby-spa": {
    h1: "Jasa Pembuatan Website Baby Spa",
    metaTitle: "Jasa Pembuatan Website Baby Spa | SCH",
    metaDescription:
      "Jasa pembuatan website untuk baby spa dan mom & baby care. Program, paket, profil terapis, panduan kunjungan pertama, dan booking WhatsApp. Lihat contohnya.",
    intro:
      "Website untuk baby spa dan layanan perawatan bayi. Program, paket sesi, profil terapis, standar kebersihan, dan panduan kunjungan pertama dijelaskan dengan tenang, lalu orang tua bisa booking lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Apa yang Ingin Diketahui Orang Tua Sebelum Booking?",
      paragraf: [
        "Orang tua yang mencari baby spa biasanya ingin kepastian sebelum membawa bayinya: program apa yang cocok untuk usia bayi, siapa terapisnya, bagaimana kebersihan ruangan, dan apa yang akan terjadi selama sesi.",
        "Website bisa menjawab itu di awal. Contoh di bawah punya pemilih usia dan tujuan sesi, daftar program dengan harga, paket, alur sesi, profil terapis, penjelasan sterilisasi dan kontrol suhu, serta panduan kunjungan pertama.",
        "Dengan begitu orang tua datang dengan tahu apa yang perlu dibawa dan apa yang akan dilakukan, dan booking cukup lewat satu pesan WhatsApp.",
      ],
    },
    features: [
      "Baby Care Journey: pilih usia bayi dan tujuan sesi",
      "Program populer dengan harga",
      "Paket sesi",
      "Alur sesi (What To Expect)",
      "Profil terapis",
      "Standar kebersihan dan keamanan",
      "Panduan kunjungan pertama",
      "Tips perawatan bayi",
      "Galeri fasilitas",
      "Testimoni orang tua",
      "FAQ",
      "Booking WhatsApp, alamat, dan jam buka",
    ],
    cocokUntuk: ["Baby spa", "Baby massage", "Baby swim", "Kelas sensory play", "Newborn care"],
    harga: null,
    faqs: [
      {
        q: "Apa yang tampil di website baby spa?",
        a: "Contoh website menampilkan program dan harga, paket sesi, profil terapis, alur sesi, standar kebersihan, panduan kunjungan pertama, galeri, testimoni, dan FAQ.",
      },
      {
        q: "Bagaimana orang tua menemukan program yang cocok?",
        a: "Contoh website punya Baby Care Journey: orang tua memilih usia bayi dan tujuan sesi, lalu melihat program yang sesuai.",
      },
      {
        q: "Bagaimana orang tua booking lewat website?",
        a: "Tombol booking membuka WhatsApp dengan pesan yang sudah terisi. Alamat dan jam buka juga tampil di halaman yang sama.",
      },
      {
        q: "Apakah bisa menampilkan paket langganan atau paket beberapa sesi?",
        a: "Bisa. Contoh website menampilkan paket 4 sesi, 8 sesi, dan paket newborn care satu bulan beserta isinya.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan bisnis saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama, program, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  florist: {
    h1: "Jasa Pembuatan Website Florist",
    metaTitle: "Jasa Pembuatan Website Florist & Toko Bunga | SCH",
    metaDescription:
      "Jasa pembuatan website untuk florist dan toko bunga. Katalog bouquet, pilihan momen, info pengiriman, dan order via WhatsApp. Lihat contohnya.",
    intro:
      "Website untuk florist dan toko bunga. Bouquet unggulan, pilihan bunga berdasarkan momen, info batas pengiriman hari yang sama, dan tombol tanya admin lewat WhatsApp ada dalam satu halaman.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Bunga Dicari Berdasarkan Momen",
      paragraf: [
        "Orang biasanya membeli bunga untuk momen tertentu: ulang tahun, wisuda, pernikahan, kelahiran, atau ucapan duka cita. Pertanyaan pertama mereka bukan nama bunganya, tapi bunga apa yang pantas untuk momen itu.",
        "Karena itu contoh di bawah menyusun bunga berdasarkan momen, lalu menampilkan bouquet unggulan dengan harga, galeri, testimoni, dan FAQ soal pengiriman, custom warna, pembayaran, dan kesegaran bunga.",
        "Untuk florist, jam batas pemesanan juga penting. Contoh ini menampilkan info pengiriman hari yang sama dan kapan pengiriman berikutnya tersedia.",
      ],
    },
    features: [
      "Pilihan bunga berdasarkan momen: birthday, graduation, anniversary, wedding, sympathy, new baby",
      "Bouquet unggulan dengan harga dan label Best Seller",
      "Info pengiriman hari yang sama dan batas jam pesan",
      "Custom rangkaian",
      "Galeri rangkaian",
      "Testimoni pelanggan",
      "FAQ pemesanan dan pengiriman",
      "Tombol tanya admin via WhatsApp",
      "Alamat dan jam buka",
    ],
    cocokUntuk: ["Florist", "Toko bunga", "Bouquet wedding", "Karangan duka cita", "Hampers bunga"],
    harga: null,
    faqs: [
      {
        q: "Bisakah website florist menampilkan katalog bouquet dengan harga?",
        a: "Bisa. Contoh website menampilkan bouquet unggulan dengan nama, deskripsi singkat, dan harga mulai dari.",
      },
      {
        q: "Bisakah pelanggan memilih bunga berdasarkan momen?",
        a: "Bisa. Contoh website menyediakan pilihan momen seperti birthday, graduation, anniversary, wedding, sympathy, dan new baby.",
      },
      {
        q: "Bisakah website menampilkan info same-day delivery?",
        a: "Bisa. Contoh website menampilkan batas jam pemesanan untuk pengiriman hari yang sama dan info kapan pengiriman berikutnya tersedia.",
      },
      {
        q: "Bagaimana pelanggan memesan?",
        a: "Contoh website memakai tombol tanya admin yang membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan bisnis saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama toko, bouquet, harga, area pengiriman, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  fotografer: {
    h1: "Jasa Pembuatan Website Fotografer",
    metaTitle: "Jasa Pembuatan Website Fotografer & Studio Foto | SCH",
    metaDescription:
      "Jasa pembuatan website untuk fotografer dan studio foto. Portofolio berfilter, paket harga, testimoni, FAQ, dan booking WhatsApp. Lihat contohnya.",
    intro:
      "Website untuk fotografer dan studio foto. Portofolio yang bisa difilter, paket dan harga yang jelas, testimoni, dan tombol booking WhatsApp untuk tiap paket.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Portofolio Menjual, Paket yang Jelas Mempercepat Keputusan",
      paragraf: [
        "Klien fotografer memilih dari hasil kerja. Portofolio yang tertata per jenis, seperti wedding, prewedding, portrait, family, commercial, dan event, membantu mereka menemukan foto yang mirip dengan yang mereka butuhkan.",
        "Setelah itu mereka perlu tahu paketnya: berapa lama sesi, berapa foto yang diedit, berapa lokasi, dan kapan hasilnya dikirim. Contoh di bawah menampilkan tiga paket lengkap dengan isinya.",
        "Tiap paket punya tombol booking sendiri yang membuka WhatsApp dengan pesan yang menyebut paket yang dipilih, sehingga percakapan langsung dimulai dari kebutuhan yang jelas.",
      ],
    },
    features: [
      "Portofolio dengan filter: wedding, prewedding, portrait, family, commercial, event",
      "Proyek pilihan dengan cerita singkat",
      "Paket dan harga dengan rincian isi",
      "Tombol booking per paket via WhatsApp",
      "Profil studio",
      "Testimoni klien",
      "Link Instagram",
      "FAQ",
      "Alamat dan jam operasional",
    ],
    cocokUntuk: ["Fotografer wedding", "Studio foto", "Fotografer prewedding", "Foto portrait dan keluarga", "Fotografer komersial"],
    harga: null,
    faqs: [
      {
        q: "Bisakah portofolio fotografer difilter per jenis pemotretan?",
        a: "Bisa. Contoh website punya filter wedding, prewedding, portrait, family, commercial, dan event.",
      },
      {
        q: "Bisakah paket dan harga ditampilkan?",
        a: "Bisa. Contoh website menampilkan tiga paket dengan harga, durasi sesi, jumlah foto edited, jumlah lokasi, dan waktu pengiriman.",
      },
      {
        q: "Bagaimana klien booking lewat website?",
        a: "Setiap paket punya tombol booking yang membuka WhatsApp dengan pesan yang menyebut nama paketnya.",
      },
      {
        q: "Bisakah website terhubung ke Instagram?",
        a: "Contoh website menampilkan link ke akun Instagram studio dan menyiapkan bagian untuk cuplikan foto.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan studio saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama studio, foto, paket, harga, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  salon: {
    h1: "Jasa Pembuatan Website Salon",
    metaTitle: "Jasa Pembuatan Website Salon | SCH",
    metaDescription:
      "Jasa pembuatan website untuk salon rambut dan beauty studio. Menu layanan dengan harga dan durasi, before & after, profil stylist, dan booking WhatsApp.",
    intro:
      "Website untuk salon rambut, beauty studio, nail art, dan perawatan wajah. Menu layanan lengkap dengan harga dan durasi, hasil before & after, profil stylist, dan tombol booking WhatsApp tampil dalam satu halaman.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Apa yang Dicari Pelanggan Sebelum Booking Salon?",
      paragraf: [
        "Sebelum datang, pelanggan salon biasanya ingin tahu layanan apa saja yang tersedia, kira-kira berapa harganya, berapa lama prosesnya, dan seperti apa hasilnya. Kalau informasi itu tersebar di story dan chat, mereka harus bertanya satu per satu.",
        "Website menyatukan semuanya: menu layanan per kategori (rambut, wajah, nail, spa) dengan harga dan durasi, foto sebelum dan sesudah, profil stylist, ulasan, promo, alamat, dan jam buka.",
        "Tombol booking membuka WhatsApp dengan pesan yang sudah terisi, jadi pelanggan tinggal mengirim.",
      ],
    },
    features: [
      "Menu layanan dengan harga dan durasi",
      "Layanan unggulan dengan label Best Seller dan Popular",
      "Kategori layanan: rambut, wajah, nail, spa",
      "Galeri before & after",
      "Profil stylist",
      "Ulasan klien",
      "Promo spesial",
      "Booking via WhatsApp dengan pesan otomatis",
      "Alamat dan jam buka",
    ],
    cocokUntuk: ["Salon rambut", "Beauty studio", "Nail art", "Perawatan wajah", "Spa"],
    harga: null,
    faqs: [
      {
        q: "Apakah pelanggan bisa booking lewat website salon?",
        a: "Tombol booking di contoh website mengarah ke WhatsApp dengan pesan yang sudah terisi. Pelanggan cukup menekan tombol lalu mengirim pesan.",
      },
      {
        q: "Apakah harga layanan bisa ditampilkan di website?",
        a: "Bisa. Contoh website menampilkan harga dan durasi tiap layanan. Anda juga bisa mengarahkan pelanggan bertanya harga lewat WhatsApp.",
      },
      {
        q: "Apakah bisa menampilkan foto hasil kerja?",
        a: "Bisa. Contoh website punya galeri before & after untuk layanan seperti warna rambut dan perm.",
      },
      {
        q: "Apakah profil stylist bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan foto, jabatan, dan keahlian tiap stylist.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan salon saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama salon, layanan, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  "makeup-artist": {
    h1: "Jasa Pembuatan Website Makeup Artist",
    metaTitle: "Jasa Pembuatan Website Makeup Artist (MUA) | SCH",
    metaDescription:
      "Jasa pembuatan website untuk makeup artist dan beauty studio. Portofolio berfilter, paket per acara, Beauty Style Finder, FAQ, dan booking WhatsApp.",
    intro:
      "Website untuk makeup artist (MUA) dan beauty studio yang menerima wedding, wisuda, pesta, dan pemotretan. Portofolio berfilter per acara, paket harga, dan booking konsultasi lewat WhatsApp.",
    heroImage: null,
    heroAlt: null,
    edukasi: {
      judul: "Klien MUA Memilih dari Portofolio dan Paket",
      paragraf: [
        "Klien makeup artist biasanya sudah punya acara: wedding, engagement, wisuda, atau pesta. Mereka mencari look yang cocok, lalu ingin tahu paket dan kisaran harganya.",
        "Contoh di bawah membantu itu lewat Beauty Style Finder, di mana klien memilih acara, gaya, dan budget. Ada juga portofolio yang difilter per jenis acara, paket dengan rincian isi dan durasi, serta galeri transformasi.",
        "Profil artist, testimoni, dan FAQ menjawab pertanyaan yang sering muncul sebelum booking, lalu klien bisa memesan konsultasi lewat WhatsApp.",
      ],
    },
    features: [
      "Beauty Style Finder: pilih acara, gaya, dan budget",
      "Featured looks",
      "Portofolio dengan filter jenis acara",
      "Paket harga per acara dengan rincian isi dan durasi",
      "Galeri transformasi before & after",
      "Profil makeup artist dan hair stylist",
      "Testimoni klien",
      "FAQ",
      "Booking konsultasi via WhatsApp",
      "Alamat",
    ],
    cocokUntuk: ["Makeup artist (MUA)", "Makeup wedding", "Makeup wisuda dan pesta", "Beauty studio"],
    harga: null,
    faqs: [
      {
        q: "Apakah portofolio MUA bisa difilter per jenis acara?",
        a: "Bisa. Contoh website punya filter wedding, engagement, graduation, party, photoshoot, dan corporate.",
      },
      {
        q: "Apakah paket dan harga bisa ditampilkan?",
        a: "Bisa. Contoh website menampilkan paket dengan harga mulai dari, durasi, dan rincian isi, misalnya makeup, hair styling, dan trial.",
      },
      {
        q: "Apa itu Beauty Style Finder?",
        a: "Fitur di contoh website tempat klien memilih acara, gaya, dan budget, lalu halaman menyesuaikan dengan pilihannya.",
      },
      {
        q: "Bagaimana klien booking?",
        a: "Tombol booking konsultasi membuka WhatsApp dengan pesan yang sudah terisi.",
      },
      {
        q: "Apakah contoh ini bisa disesuaikan dengan bisnis saya?",
        a: "Contoh di halaman ini adalah template demo dengan data contoh. Nama, paket, harga, foto, dan kontak diganti sesuai bisnis Anda.",
      },
    ],
  },
  // Contoh (isi kalau faktanya sudah ada):
  // bakery: { h1: null, intro: null, features: null, cocokUntuk: null, harga: null, faqs: null },
};

export function getIndustryContent(slug: string): IndustryContent | null {
  return INDUSTRY_CONTENT[slug] ?? null;
}
