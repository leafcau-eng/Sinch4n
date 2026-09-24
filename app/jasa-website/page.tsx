import type { Metadata } from "next";
import Link from "next/link";
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
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {DEMO_GROUPS.map((g) => (
            <li key={g.industri}>
              <Link
                href={`/jasa-website/${g.industri}`}
                className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 font-mono text-sm transition-colors hover:border-cyan-400 hover:text-cyan-400"
              >
                <span>{g.label}</span>
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
