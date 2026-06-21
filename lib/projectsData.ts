export type Project = {
  id: number;
  name: string;
  category: string;
  desc: string;
  tech: string[];
  url: string;
  thumb: string;
  color: string;
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
  },
];

export const FILTERS = [
  { label: "All", value: "all" },
  { label: "Laundry", value: "laundry" },
  { label: "Landing Page", value: "landing-page" },
  { label: "Website", value: "website" },
  { label: "Meta Ads", value: "meta-ads" },
  { label: "Digital Project", value: "digital-project" },
  { label: "Client Work", value: "client-work" },
];
