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
  { industri: "salon", label: "Salon & Beauty", demos: ["contoh-salon", "contoh-beauty-studio"] },
  { industri: "florist", label: "Florist", demos: ["contoh-florist-flagship"] },
  { industri: "petshop", label: "Petshop & Vet", demos: ["contoh-petshop", "contoh-petshop-flagship", "contoh-vet-flagship"] },
  { industri: "fotografer", label: "Fotografer", demos: ["contoh-fotografer"] },
  { industri: "klinik", label: "Klinik", demos: ["contoh-klinik", "contoh-klinik-gigi-flagship"] },
  { industri: "laundry", label: "Laundry", demos: ["contoh-laundry-premium", "contoh-laundry-flagship"] },
  { industri: "parfum", label: "Parfum", demos: ["contoh-parfum", "contoh-parfum-flagship"] },
  { industri: "otomotif", label: "Otomotif", demos: ["contoh-car-elite", "contoh-showroom-premium", "contoh-car-showroom-flagship", "contoh-bengkel", "contoh-carwash"] },
  { industri: "properti", label: "Properti & Villa", demos: ["contoh-property-elite", "contoh-villa"] },
  { industri: "wedding", label: "Wedding & Undangan", demos: ["contoh-wedding-premium", "contoh-undangan"] },
  { industri: "kuliner", label: "Kuliner & Kafe", demos: ["contoh-kuliner", "contoh-kafe", "contoh-makanan-ringan-flagship"] },
  { industri: "pendidikan", label: "Kursus & Sekolah", demos: ["contoh-kursus", "contoh-sekolah"] },
  { industri: "fitness", label: "Gym & Sports Club", demos: ["contoh-gym", "contoh-sports-club-flagship"] },
  { industri: "rental", label: "Rental", demos: ["contoh-rental"] },
  { industri: "umkm", label: "UMKM & Jasa Umum", demos: ["contoh-basic", "contoh-medium", "contoh-jasa", "contoh-toko-umkm"] },
  { industri: "peternakan", label: "Peternakan", demos: ["contoh-peternakan-flagship"] },
  { industri: "advokat", label: "Advokat", demos: ["contoh-advokat-flagship"] },
  { industri: "las-fabrikasi", label: "Las & Fabrikasi", demos: ["contoh-las-fabrikasi-flagship"] },
  { industri: "percetakan", label: "Percetakan & Kemasan", demos: ["contoh-percetakan-kemasan-flagship"] },
];

export const demoUrl = (slug: string) => `${DEMO_BASE}/${slug}`;
