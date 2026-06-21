import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getDemoProjects } from "@/lib/getDemoProjects";

export default async function DemoGeneratorPage() {
  const demos = await getDemoProjects();

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      <Navbar />

      <div className="px-6 pt-32 pb-8 md:px-12 text-center">
        <Link
          href="/portfolio"
          className="inline-block mb-6 font-mono text-[11px] text-cyan-400/70 hover:text-cyan-400 transition-colors"
        >
          ← Kembali ke Portfolio
        </Link>
        <p
          className="font-mono text-[10px] tracking-[0.4em] uppercase mb-3"
          style={{ color: "#facc15" }}
        >
          Auto-Generated
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          Generator Demo Website
        </h1>
        <p className="text-neutral-400 text-sm max-w-md mx-auto">
          {demos.length} demo website udah dibuat — tiap nama bisnis di bawah ini hasil generate otomatis dalam hitungan menit.
        </p>
      </div>

      <div className="px-6 pb-24 md:px-12">
        <div className="grid gap-5 max-w-5xl mx-auto [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {demos.map((demo) => (
            <a
              key={demo.prospect_id}
              href={`https://sch-demo.vercel.app/demo/${demo.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[16px] p-6 border transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #1a1500 0%, #0d2137 60%, #1a0d37 100%)",
                borderColor: "rgba(250,204,21,0.25)",
              }}
            >
              <span
                className="block font-mono text-[10px] uppercase tracking-wider mb-2"
                style={{ color: "#facc15" }}
              >
                {demo.category}
              </span>
              <div className="text-base font-bold text-white mb-1">
                {demo.business_name}
              </div>
              <div className="text-[11px] text-neutral-500">{demo.template_id}</div>
              <span
                className="inline-block mt-4 font-mono text-[11px]"
                style={{ color: "#facc15" }}
              >
                Lihat Demo →
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
