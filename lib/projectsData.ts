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
];

export const FILTERS = [
  { label: "All", value: "all" },
  { label: "Laundry", value: "laundry" },
  { label: "Wedding", value: "wedding" },
  { label: "Landing Page", value: "landing-page" },
  { label: "Website", value: "website" },
  { label: "Meta Ads", value: "meta-ads" },
  { label: "Digital Project", value: "digital-project" },
  { label: "Client Work", value: "client-work" },
];
