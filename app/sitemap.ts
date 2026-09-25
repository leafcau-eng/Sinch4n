import type { MetadataRoute } from "next";
import { DEMO_GROUPS } from "@/lib/demoLinks";
import { getIndustryContent } from "@/lib/industries";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sinch4n.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const industries = DEMO_GROUPS.filter((g) => getIndustryContent(g.industri)).map((g) => ({
    url: `${BASE}/jasa-website/${g.industri}`,
    lastModified: now,
    priority: 0.7,
  }));
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/portfolio`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.8 },
    ...industries,
  ];
}
