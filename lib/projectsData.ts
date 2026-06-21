export type Project = {
  id: number;
  name: string;
  category: string;
  desc: string;
  tech: string[];
  url: string;
  thumb: string;
  color: string;
  thumbnailUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Specialist Laundry Cipamokolan",
    category: "laundry",
    desc: "Website UMKM laundry dengan kalkulator harga otomatis, before/after slider, dan order langsung ke WhatsApp.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://laundry-spesialist.vercel.app/",
    thumb: "🧺",
    color: "linear-gradient(135deg,#0d3c2f,#0d1f3c)",
    thumbnailUrl: "https://api.microlink.io/?url=https://laundry-spesialist.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 2,
    name: "Undangan Pernikahan Balhaz & Widiati (Versi 1)",
    category: "wedding",
    desc: "Website undangan pernikahan digital dengan RSVP online, hitung mundur acara, info acara lengkap dengan Google Maps, dan amplop digital (DANA & transfer bank).",
    tech: ["HTML", "CSS", "JS"],
    url: "https://wedding-balhaz-widiyanti.vercel.app/",
    thumb: "💍",
    color: "linear-gradient(135deg,#3c0d2f,#0d1a3c)",
    thumbnailUrl: "https://api.microlink.io/?url=https://wedding-balhaz-widiyanti.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 3,
    name: "Undangan Pernikahan Balhaz & Widianti (Versi 2)",
    category: "wedding",
    desc: "Versi alternatif undangan pernikahan digital dengan musik latar dan tampilan responsive untuk klien yang sama.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://wedding-balhaz-widianti.vercel.app/",
    thumb: "💍",
    color: "linear-gradient(135deg,#2f0d3c,#0a0d3c)",
    thumbnailUrl: "https://api.microlink.io/?url=https://wedding-balhaz-widianti.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 4,
    name: "Parfum Premium Demo",
    category: "parfum",
    desc: "Hero carousel crossfade untuk brand parfum/wewangian premium. 2 varian aroma, navbar elegan, desain gold premium.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://sch-demo.vercel.app/demo/parfum",
    thumb: "🌸",
    color: "linear-gradient(135deg,#3c0d2f,#1a0d3c)",
    thumbnailUrl: "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/parfum&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 5,
    name: "Petshop Premium Demo",
    category: "petshop",
    desc: "All-in-one petshop: grooming, klinik, & produk. Desain hijau premium dengan booking form.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://sch-demo.vercel.app/demo/petshop",
    thumb: "🐾",
    color: "linear-gradient(135deg,#0d3c1f,#0d2137)",
    thumbnailUrl: "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/petshop&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 6,
    name: "Toko UMKM Demo",
    category: "toko-umkm",
    desc: "E-commerce demo premium untuk toko online UMKM. Cart + checkout via WhatsApp.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://sch-demo.vercel.app/demo/toko-umkm",
    thumb: "🛒",
    color: "linear-gradient(135deg,#3c2f0d,#1a0d37)",
    thumbnailUrl: "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/toko-umkm&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 7,
    name: "Car Showroom Elite Demo",
    category: "car-showroom",
    desc: "Showroom mobil mewah cyberpunk dengan video background & podium 3D. Untuk dealer/rental supercar.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://sch-demo.vercel.app/demo/car-showroom",
    thumb: "🏎️",
    color: "linear-gradient(135deg,#0d1f3c,#1a0d0d)",
    thumbnailUrl: "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/car-showroom&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    id: 8,
    name: "Property Elite Demo",
    category: "property",
    desc: "Cyberpunk dark luxury untuk developer properti elite. Video drone, unit switcher, smart home.",
    tech: ["HTML", "CSS", "JS"],
    url: "https://sch-demo.vercel.app/demo/property",
    thumb: "🏙️",
    color: "linear-gradient(135deg,#0d2137,#0d3c3c)",
    thumbnailUrl: "https://api.microlink.io/?url=https://sch-demo.vercel.app/demo/property&screenshot=true&meta=false&embed=screenshot.url",
  },
];

export const FILTERS = [
  { label: "All", value: "all" },
  { label: "Laundry", value: "laundry" },
  { label: "Wedding", value: "wedding" },
  { label: "Parfum", value: "parfum" },
  { label: "Petshop", value: "petshop" },
  { label: "Toko UMKM", value: "toko-umkm" },
  { label: "Car Showroom", value: "car-showroom" },
  { label: "Property", value: "property" },
  { label: "Landing Page", value: "landing-page" },
  { label: "Website", value: "website" },
  { label: "Meta Ads", value: "meta-ads" },
  { label: "Digital Project", value: "digital-project" },
  { label: "Client Work", value: "client-work" },
];
