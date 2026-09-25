import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { DEMO_GROUPS } from "@/lib/demoLinks";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Bisnis",
  description:
    "Jasa pembuatan website untuk berbagai jenis bisnis, lengkap dengan contoh demo yang bisa dicoba.",
  alternates: { canonical: "/jasa-website" },
};

export default function JasaWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-200">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
          Jasa Pembuatan Website Bisnis
        </h1>
        <p className="mt-5 text-neutral-300">
          Pilih jenis bisnis Anda untuk melihat contoh website yang sudah kami buat.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {DEMO_GROUPS.map((g) => (
            <li key={g.industri}>
              <Link
                href={`/jasa-website/${g.industri}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 transition-all hover:border-cyan-400"
              >
                {g.thumbnail && (
                  <div className="relative h-36 w-full overflow-hidden bg-neutral-800">
                    <img
                      src={g.thumbnail}
                      alt={g.label}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <div className="flex items-center justify-between px-4 py-3 font-mono text-sm">
                  <span className="text-white group-hover:text-cyan-400 transition-colors">{g.label}</span>
                  <span aria-hidden className="text-neutral-500 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
