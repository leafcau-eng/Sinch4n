// lib/projects.ts
//
// Data model baru (Phase 12A) — TERPISAH dari lib/projectsData.ts
// (PROJECTS lama tetap dipakai CategoryShowcase, tidak dihapus).
// File ini fondasi untuk case-study route /portfolio/project/[slug].
//
// SEMUA field yang kontennya belum pernah diverifikasi diisi `null`
// secara eksplisit — bukan dikosongkan diam-diam, bukan dikarang.

export type ProjectStatus = "live" | "draft" | "archived" | "experiment";
export type ProjectVisibility = "public" | "hidden";
export type ProjectType =
  | "AI System"
  | "Automation"
  | "Business Website"
  | "Experiment";

export interface ProjectV2 {
  slug: string;
  title: string;
  category: string;
  projectType: ProjectType;
  shortDescription: string;
  description: string | null;
  problem: string | null;
  solution: string | null;
  architecture: string | null;
  features: string[] | null;
  technologies: string[];
  images: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  status: ProjectStatus;
  visibility: ProjectVisibility;
}

export const PROJECTS_V2: ProjectV2[] = [
  // ---- 8 project real, migrasi dari lib/projectsData.ts ----
  // description/problem/solution/architecture/features = null:
  // belum pernah ada sumber tertulis untuk ini, bukan dikosongkan sengaja.
  // githubUrl = null: repo Termux ADA (Laundry, Widiyanti, dst — lihat
  // audit sebelumnya) tapi pemetaan slug->repo belum dikonfirmasi 1:1,
  // jadi belum dipasang sebagai link publik.
  {
    slug: "laundry-cipamokolan",
    title: "Specialist Laundry Cipamokolan",
    category: "laundry",
    projectType: "Business Website",
    shortDescription:
      "Website UMKM laundry dengan kalkulator harga otomatis, before/after slider, dan order langsung ke WhatsApp.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://laundry-spesialist.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://laundry-spesialist.vercel.app/",
    githubUrl: null, // TODO: konfirmasi apakah ini leafcau-eng/Laundry
    status: "live",
    visibility: "public",
  },
  {
    slug: "wedding-balhaz-widiyanti-v1",
    title: "Undangan Pernikahan Balhaz & Widiati (Versi 1)",
    category: "wedding",
    projectType: "Business Website",
    shortDescription:
      "Website undangan pernikahan digital dengan RSVP online, hitung mundur acara, info acara lengkap dengan Google Maps, dan amplop digital (DANA & transfer bank).",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://wedding-balhaz-widiyanti.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://wedding-balhaz-widiyanti.vercel.app/",
    githubUrl: null, // TODO: ada 2 repo (Widiyanti, widiyanti-web) — konfirmasi mana yang deploy
    status: "live",
    visibility: "public",
  },
  {
    slug: "wedding-balhaz-widianti-v2",
    title: "Undangan Pernikahan Balhaz & Widianti (Versi 2)",
    category: "wedding",
    projectType: "Business Website",
    shortDescription:
      "Versi alternatif undangan pernikahan digital dengan musik latar dan tampilan responsive untuk klien yang sama.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://wedding-balhaz-widianti.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://wedding-balhaz-widianti.vercel.app/",
    githubUrl: null, // TODO: ada 3 repo (Widianti2/3, Wedding-balhaz-widianti) — konfirmasi
    status: "live",
    visibility: "public",
  },
  {
    slug: "parfum-premium-demo",
    title: "Parfum Premium Demo",
    category: "parfum",
    projectType: "Business Website",
    shortDescription:
      "Hero carousel crossfade untuk brand parfum/wewangian premium. 2 varian aroma, navbar elegan, desain gold premium.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/contoh-parfum&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://sch-demo.vercel.app/demo/contoh-parfum",
    githubUrl: null,
    status: "live",
    visibility: "public",
  },
  {
    slug: "petshop-premium-demo",
    title: "Petshop Premium Demo",
    category: "petshop",
    projectType: "Business Website",
    shortDescription:
      "All-in-one petshop: grooming, klinik, & produk. Desain hijau premium dengan booking form.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/contoh-petshop&screenshot=true&embed=screenshot.url",
    ],
    liveUrl: "https://sch-demo.vercel.app/demo/contoh-petshop",
    githubUrl: null,
    status: "live",
    visibility: "public",
  },
  {
    slug: "toko-umkm-demo",
    title: "Toko UMKM Demo",
    category: "toko-umkm",
    projectType: "Business Website",
    shortDescription:
      "E-commerce demo premium untuk toko online UMKM. Cart + checkout via WhatsApp.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/contoh-toko-umkm&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://sch-demo.vercel.app/demo/contoh-toko-umkm",
    githubUrl: null,
    status: "live",
    visibility: "public",
  },
  {
    slug: "car-showroom-elite-demo",
    title: "Car Showroom Elite Demo",
    category: "car-showroom",
    projectType: "Business Website",
    shortDescription:
      "Showroom mobil mewah cyberpunk dengan video background & podium 3D. Untuk dealer/rental supercar.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/contoh-car-elite&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://sch-demo.vercel.app/demo/contoh-car-elite",
    githubUrl: null,
    status: "live",
    visibility: "public",
  },
  {
    slug: "property-elite-demo",
    title: "Property Elite Demo",
    category: "property",
    projectType: "Business Website",
    shortDescription:
      "Cyberpunk dark luxury untuk developer properti elite. Video drone, unit switcher, smart home.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: ["HTML", "CSS", "JS"],
    images: [
      "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/contoh-property-elite&screenshot=true&meta=false&embed=screenshot.url",
    ],
    liveUrl: "https://sch-demo.vercel.app/demo/contoh-property-elite",
    githubUrl: null,
    status: "live",
    visibility: "public",
  },

  // ---- 3 stub Selected Work, sesuai daftar di Phase 12A ----
  // visibility "hidden": belum ada bukti publik apapun (dikonfirmasi
  // audit — ecosystem_status cuma kasih nama+status, bukan proof).
  // technologies SENGAJA [] bukan diisi dari AIEcosystem.tsx — komponen
  // itu 100% hardcoded/dekoratif (dikonfirmasi turn sebelumnya), bukan
  // sumber fakta soal stack produk beneran.
  {
    slug: "ai-creator-hub",
    title: "AI Creator Hub",
    category: "ai-system",
    projectType: "AI System",
    shortDescription: "TODO — belum ada case-study copy.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: [],
    images: [],
    liveUrl: null, // TODO: cek ecosystem_status.url di Supabase
    githubUrl: null,
    status: "draft",
    visibility: "hidden",
  },
  {
    slug: "prospecting-engine",
    title: "Prospecting Engine",
    category: "automation",
    projectType: "Automation",
    shortDescription: "TODO — belum ada case-study copy.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: [],
    images: [],
    liveUrl: null,
    githubUrl: null, // repo ada (leafcau-eng/prospecting-engine), belum diputuskan mau di-expose atau nggak
    status: "draft",
    visibility: "hidden",
  },
  {
    slug: "ai-radar",
    title: "AI Radar",
    category: "ai-system",
    projectType: "AI System",
    shortDescription: "TODO — belum ada case-study copy.",
    description: null,
    problem: null,
    solution: null,
    architecture: null,
    features: null,
    technologies: [],
    images: [],
    liveUrl: null,
    githubUrl: null,
    status: "draft",
    visibility: "hidden",
  },
];

export function getProjectBySlug(slug: string): ProjectV2 | undefined {
  return PROJECTS_V2.find((p) => p.slug === slug);
}

export function getPublicProjects(): ProjectV2[] {
  return PROJECTS_V2.filter((p) => p.visibility === "public");
}
