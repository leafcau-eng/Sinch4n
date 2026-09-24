// Sumber data demo/template per kategori industri.
// Hanya berisi slug demo yang sudah diverifikasi ada. Konten penjelasan
// per kategori (fitur, FAQ, dll) diisi terpisah, null kalau belum ada.

export const DEMO_BASE = "https://schlabz.com/demo";

export type DemoGroup = {
  industri: string; // slug URL: /jasa-website/[industri]
  label: string;
  demos: string[]; // slug setelah /demo/
};

export const DEMO_GROUPS: DemoGroup[] = [
  { industri: "bakery", label: "Bakery", demos: ["contoh-bakery-flagship"] },
  { industri: "baby-spa", label: "Baby Spa", demos: ["contoh-baby-spa"] },
  { industri: "salon", label: "Salon", demos: ["contoh-salon"] },
  { industri: "makeup-artist", label: "Makeup Artist", demos: ["contoh-beauty-studio"] },
  { industri: "florist", label: "Florist", demos: ["contoh-florist-flagship"] },
  { industri: "petshop", label: "Petshop", demos: ["contoh-petshop","contoh-petshop-flagship"] },
  { industri: "klinik-hewan", label: "Klinik Hewan", demos: ["contoh-vet-flagship"] },
  { industri: "fotografer", label: "Fotografer", demos: ["contoh-fotografer"] },
  { industri: "klinik", label: "Klinik", demos: ["contoh-klinik"] },
  { industri: "klinik-gigi", label: "Klinik Gigi", demos: ["contoh-klinik-gigi-flagship"] },
  { industri: "laundry", label: "Laundry", demos: ["contoh-laundry-premium","contoh-laundry-flagship"] },
  { industri: "parfum", label: "Parfum", demos: ["contoh-parfum","contoh-parfum-flagship"] },
  { industri: "showroom-mobil", label: "Showroom Mobil", demos: ["contoh-car-elite","contoh-showroom-premium","contoh-car-showroom-flagship"] },
  { industri: "bengkel", label: "Bengkel", demos: ["contoh-bengkel"] },
  { industri: "carwash", label: "Carwash", demos: ["contoh-carwash"] },
  { industri: "properti", label: "Properti", demos: ["contoh-property-elite"] },
  { industri: "villa", label: "Villa", demos: ["contoh-villa"] },
  { industri: "wedding", label: "Wedding", demos: ["contoh-wedding-premium"] },
  { industri: "undangan", label: "Undangan", demos: ["contoh-undangan"] },
  { industri: "kuliner", label: "Kuliner", demos: ["contoh-kuliner"] },
  { industri: "kafe", label: "Kafe", demos: ["contoh-kafe"] },
  { industri: "makanan-ringan", label: "Makanan Ringan", demos: ["contoh-makanan-ringan-flagship"] },
  { industri: "kursus", label: "Kursus", demos: ["contoh-kursus"] },
  { industri: "sekolah", label: "Sekolah", demos: ["contoh-sekolah"] },
  { industri: "gym", label: "Gym", demos: ["contoh-gym"] },
  { industri: "sports-club", label: "Sports Club", demos: ["contoh-sports-club-flagship"] },
  { industri: "rental", label: "Rental", demos: ["contoh-rental"] },
  { industri: "umkm", label: "UMKM & Jasa Umum", demos: ["contoh-basic","contoh-medium","contoh-jasa","contoh-toko-umkm"] },
  { industri: "peternakan", label: "Peternakan", demos: ["contoh-peternakan-flagship"] },
  { industri: "advokat", label: "Advokat", demos: ["contoh-advokat-flagship"] },
  { industri: "las-fabrikasi", label: "Las & Fabrikasi", demos: ["contoh-las-fabrikasi-flagship"] },
  { industri: "percetakan", label: "Percetakan & Kemasan", demos: ["contoh-percetakan-kemasan-flagship"] },
];

export const demoUrl = (slug: string) => `${DEMO_BASE}/${slug}`;
