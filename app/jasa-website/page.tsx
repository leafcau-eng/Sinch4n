import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { DEMO_GROUPS } from "@/lib/demoLinks";
import { getIndustryContent } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Bisnis",
  description:
    "Jasa pembuatan website untuk berbagai jenis bisnis, lengkap dengan contoh demo yang bisa dicoba.",
  alternates: { canonical: "/jasa-website" },
};

const ACCENTS = [
  { text: "text-cyan-400", border: "hover:border-cyan-400", pill: "bg-cyan-400" },
  { text: "text-purple-400", border: "hover:border-purple-400", pill: "bg-purple-400" },
  { text: "text-pink-400", border: "hover:border-pink-400", pill: "bg-pink-400" },
  { text: "text-amber-400", border: "hover:border-amber-400", pill: "bg-amber-400" },
  { text: "text-emerald-400", border: "hover:border-emerald-400", pill: "bg-emerald-400" },
];

export default function JasaWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-200">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
          Jasa Pembuatan Website Bisnis
        </h1>
        <p className="mt-5 text-neutral-300">
          Pilih jenis bisnis Anda untuk melihat contoh website yang sudah kami buat, lengkap dengan fitur dan harga.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {DEMO_GROUPS.map((g, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const content = getIndustryContent(g.industri);
            return (
              <li key={g.industri}>
                <Link
                  href={`/jasa-website/${g.industri}`}
                  className={`group flex flex-col overflow-hidden rounded-xl border border-white/10 transition-all ${accent.border}`}
                >
                  {g.thumbnail && (
                    <div className="relative h-36 w-full overflow-hidden bg-neutral-800">
                      <img
                        src={g.thumbnail}
                        alt={g.label}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span className={`absolute left-3 top-3 h-1.5 w-1.5 rounded-full ${accent.pill}`} />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col px-4 py-3">
                    <span className={`font-mono text-sm font-bold text-white transition-colors group-hover:${accent.text}`}>
                      {g.label}
                    </span>
                    {content?.intro && (
                      <p
                        className="mt-1 text-xs leading-relaxed text-neutral-400"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {content.intro}
                      </p>
                    )}
                    <span className={`mt-3 self-start font-mono text-[11px] uppercase tracking-wide ${accent.text}`}>
                      Lihat lengkapnya →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
