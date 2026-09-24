// Sumber data demo/template per kategori industri.
// Hanya berisi slug demo yang sudah diverifikasi ada. Konten penjelasan
// per kategori (fitur, FAQ, dll) diisi terpisah, null kalau belum ada.

export const DEMO_BASE = "https://schlabz.com/demo";

export type DemoGroup = {
  industri: string; // slug URL: /jasa-website/[industri]
  label: string;
  thumbnail: string; // foto representatif dari Unsplash
  demos: string[]; // slug setelah /demo/
};

export const DEMO_GROUPS: DemoGroup[] = [
  { industri: "bakery",         label: "Bakery",               thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=70", demos: ["contoh-bakery-flagship"] },
  { industri: "baby-spa",       label: "Baby Spa",             thumbnail: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&q=70", demos: ["contoh-baby-spa"] },
  { industri: "salon",          label: "Salon",                thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=70", demos: ["contoh-salon"] },
  { industri: "makeup-artist",  label: "Makeup Artist",        thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=70", demos: ["contoh-beauty-studio"] },
  { industri: "florist",        label: "Florist",              thumbnail: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=70", demos: ["contoh-florist-flagship"] },
  { industri: "petshop",        label: "Petshop",              thumbnail: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=70", demos: ["contoh-petshop","contoh-petshop-flagship"] },
  { industri: "klinik-hewan",   label: "Klinik Hewan",         thumbnail: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=70", demos: ["contoh-vet-flagship"] },
  { industri: "fotografer",     label: "Fotografer",           thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=70", demos: ["contoh-fotografer"] },
  { industri: "klinik",         label: "Klinik",               thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=70", demos: ["contoh-klinik"] },
  { industri: "klinik-gigi",    label: "Klinik Gigi",          thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=70", demos: ["contoh-klinik-gigi-flagship"] },
  { industri: "laundry",        label: "Laundry",              thumbnail: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=70", demos: ["contoh-laundry-premium","contoh-laundry-flagship"] },
  { industri: "parfum",         label: "Parfum",               thumbnail: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=70", demos: ["contoh-parfum","contoh-parfum-flagship"] },
  { industri: "showroom-mobil", label: "Showroom Mobil",       thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=70", demos: ["contoh-car-elite","contoh-showroom-premium","contoh-car-showroom-flagship"] },
  { industri: "bengkel",        label: "Bengkel",              thumbnail: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=70", demos: ["contoh-bengkel"] },
  { industri: "carwash",        label: "Carwash",              thumbnail: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=70", demos: ["contoh-carwash"] },
  { industri: "properti",       label: "Properti",             thumbnail: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70", demos: ["contoh-property-elite"] },
  { industri: "villa",          label: "Villa",                thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=70", demos: ["contoh-villa"] },
  { industri: "wedding",        label: "Wedding",              thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=70", demos: ["contoh-wedding-premium"] },
  { industri: "undangan",       label: "Undangan",             thumbnail: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=70", demos: ["contoh-undangan"] },
  { industri: "kuliner",        label: "Kuliner",              thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=70", demos: ["contoh-kuliner"] },
  { industri: "kafe",           label: "Kafe",                 thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=70", demos: ["contoh-kafe"] },
  { industri: "makanan-ringan", label: "Makanan Ringan",       thumbnail: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=70", demos: ["contoh-makanan-ringan-flagship"] },
  { industri: "kursus",         label: "Kursus",               thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=70", demos: ["contoh-kursus"] },
  { industri: "sekolah",        label: "Sekolah",              thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=70", demos: ["contoh-sekolah"] },
  { industri: "gym",            label: "Gym",                  thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=70", demos: ["contoh-gym"] },
  { industri: "sports-club",    label: "Sports Club",          thumbnail: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=70", demos: ["contoh-sports-club-flagship"] },
  { industri: "rental",         label: "Rental Mobil",               thumbnail: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=70", demos: ["contoh-rental"] },
  { industri: "umkm",           label: "UMKM & Jasa Umum",     thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=70", demos: ["contoh-basic","contoh-medium","contoh-jasa","contoh-toko-umkm"] },
  { industri: "peternakan",     label: "Peternakan",           thumbnail: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=70", demos: ["contoh-peternakan-flagship"] },
  { industri: "advokat",        label: "Advokat",              thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=70", demos: ["contoh-advokat-flagship"] },
  { industri: "las-fabrikasi",  label: "Las & Fabrikasi",      thumbnail: "https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=600&q=70", demos: ["contoh-las-fabrikasi-flagship"] },
  { industri: "percetakan",     label: "Percetakan & Kemasan", thumbnail: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=600&q=70", demos: ["contoh-percetakan-kemasan-flagship"] },
];

export const demoUrl = (slug: string) => `${DEMO_BASE}/${slug}`;
