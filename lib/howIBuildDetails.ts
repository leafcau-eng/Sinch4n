export type StepDetail = {
  n: string;
  title: string;
  description: string;
  detailTitle: string;
  untukApa: string;
  keuntungan: string;
  kelebihan: string;
  contohNyata: string;
};

export const STEPS: StepDetail[] = [
  {
    n: "01",
    title: "Problem",
    description: "Understand the constraint before proposing a solution.",
    detailTitle: "Memahami Masalah Sebelum Memberi Solusi",
    untukApa:
      "Sebelum menulis satu baris kode pun, saya luangkan waktu untuk benar-benar memahami bisnis Anda. Apa yang bikin repot? Berapa banyak waktu yang terbuang untuk pekerjaan manual? Apa target jangka panjang Anda?",
    keuntungan:
      "Sistem yang dibangun benar-benar menjawab kebutuhan nyata, bukan sekadar keren secara teknis tapi tidak berguna. Anda tidak membayar untuk fitur yang tidak Anda butuhkan.",
    kelebihan:
      "Pendekatan ini menghindari kesalahan mahal di kemudian hari. Lebih baik diskusi 1 jam di awal daripada revisi berbulan-bulan setelah sistem jadi.",
    contohNyata:
      "Sebelum bikin sistem, saya tanya dulu: 'Berapa jam per hari tim Anda habiskan untuk balas chat pelanggan?' Jika jawabannya 4 jam, berarti targetnya jelas — pangkas jadi 30 menit.",
  },
  {
    n: "02",
    title: "Architecture",
    description: "Map the system — data, components, dependencies — before writing code.",
    detailTitle: "Merancang Cetak Biru Sistem Sebelum Membangun",
    untukApa:
      "Saya buat peta lengkap sistemnya: data apa yang masuk, bagaimana diproses, disimpan di mana, dan apa output-nya. Ini seperti blueprint rumah sebelum tukang mulai membangun.",
    keuntungan:
      "Sistem yang dibangun rapi dan terstruktur, sehingga mudah dikembangkan di masa depan saat bisnis Anda bertambah besar. Tidak ada kode yang 'tumpang tindih' atau berantakan.",
    kelebihan:
      "Anda bisa melihat dan menyetujui rancangan sistemnya sebelum masuk ke tahap coding. Jadi tidak ada kejutan di tengah jalan — semua transparan sejak awal.",
    contohNyata:
      "Diagram alur: Data pesanan masuk dari WhatsApp → diproses sistem → masuk ke database → otomatis kirim invoice ke email pelanggan → update stok di spreadsheet.",
  },
  {
    n: "03",
    title: "AI / Automation",
    description: "Apply AI and automation where they remove repetitive work.",
    detailTitle: "Menerapkan AI Hanya di Tempat yang Tepat",
    untukApa:
      "Tidak semua pekerjaan butuh AI. Saya menganalisis bagian mana dari bisnis Anda yang paling repetitif dan paling banyak menghabiskan waktu, lalu di situlah AI dan otomatisasi diterapkan.",
    keuntungan:
      "Investasi Anda benar-benar berdampak. Anda tidak membayar mahal untuk AI di bagian yang sebenarnya tidak perlu. Fokus pada efisiensi maksimal dengan biaya minimal.",
    kelebihan:
      "Saya paham kapan pakai AI, kapan pakai script sederhana, dan kapan tetap butuh sentuhan manusia. Ini yang membedakan sistem yang pintar dengan sistem yang hanya ikut-ikutan tren.",
    contohNyata:
      "Chat pelanggan yang kompleks bisa pakai AI. Tapi untuk auto-kirim invoice bulanan, cukup pakai script sederhana. Keduanya diintegrasikan dalam satu sistem yang mulus.",
  },
  {
    n: "04",
    title: "Database",
    description: "Structure data so it stays queryable and safe to build on.",
    detailTitle: "Data yang Aman, Rapi, dan Mudah Diakses Kembali",
    untukApa:
      "Saya menyusun struktur penyimpanan data agar semua informasi bisnis Anda — data pelanggan, transaksi, stok, laporan — tersimpan dengan aman dan mudah dicari kembali kapan pun dibutuhkan.",
    keuntungan:
      "Anda tidak perlu lagi cari data di tumpukan file Excel yang berantakan. Semua data tersusun rapi dan bisa diakses dalam hitungan detik. Laporan bulanan bisa dibuat otomatis.",
    kelebihan:
      "Struktur database dirancang agar scalable — artinya, saat bisnis Anda bertambah besar dan data makin banyak, sistem tetap cepat dan tidak ngelag. Data lama tetap aman dan tidak hilang.",
    contohNyata:
      "Database pelanggan dengan riwayat pembelian, sehingga Anda tahu siapa pelanggan paling loyal. Sistem stok yang otomatis berkurang setiap ada penjualan.",
  },
  {
    n: "05",
    title: "Integration",
    description: "Connect systems and existing tools without duplicating logic.",
    detailTitle: "Menghubungkan Sistem Baru dengan Alat yang Sudah Anda Pakai",
    untukApa:
      "Anda tidak perlu membuang tools yang sudah biasa dipakai tim — WhatsApp, Google Sheets, Email, Instagram, atau CRM yang sudah ada. Saya menghubungkan sistem baru dengan semua tools tersebut agar saling terhubung dan berkomunikasi otomatis.",
    keuntungan:
      "Tim Anda tidak perlu belajar sistem baru dari nol. Mereka tetap pakai tools favorit mereka, tapi sekarang semuanya saling terhubung dan bekerja lebih efisien. Tidak ada data yang harus diinput dua kali.",
    kelebihan:
      "Integrasi ini dirancang tanpa mengganggu operasional harian. Sistem baru langsung nyambung dengan yang lama, tanpa downtime, tanpa drama.",
    contohNyata:
      "Pesanan dari WhatsApp otomatis masuk ke Google Sheets. Data pelanggan dari website otomatis tersinkron ke CRM. Notifikasi pembayaran masuk ke grup Telegram tim finance.",
  },
  {
    n: "06",
    title: "Deployment",
    description: "Ship, verify, and monitor — a passing build isn't the finish line.",
    detailTitle: "Peluncuran yang Teruji dan Terpantau",
    untukApa:
      "Setelah sistem siap, saya tidak langsung lepas tangan. Saya pastikan sistemnya berjalan lancar di lingkungan nyata, diuji dengan berbagai skenario, dan dipantau performanya secara berkala.",
    keuntungan:
      "Anda bisa tenang. Sistem yang diluncurkan sudah melalui pengujian ketat, sehingga kecil kemungkinan ada error atau masalah di kemudian hari. Kalau pun ada, bisa cepat dideteksi dan diperbaiki.",
    kelebihan:
      "Saya memberikan garansi monitoring di awal peluncuran. Jadi Anda tidak sendirian menghadapi sistem baru — ada saya yang siap backup kalau ada kendala teknis.",
    contohNyata:
      "Sebelum launch, sistem diuji: apa yang terjadi kalau 100 orang chat bersamaan? Apa yang terjadi kalau koneksi internet putus? Setelah lolos, baru di-deploy ke server production.",
  },
];
