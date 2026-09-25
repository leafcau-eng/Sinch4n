import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";
import ProjectNodeGraph, { EcosystemNode } from "@/components/ProjectNodeGraph";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { createClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects" },
  description:
    "Selected work and systems built by Rian Riyandi -- AI automation, prospecting, and conversion-focused websites, built end to end.",
};

async function getEcosystemStatus(): Promise<EcosystemNode[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ecosystem_status")
      .select("product_key, display_name, status, url, display_order")
      .order("display_order", { ascending: true });
    if (error) {
      console.error("Failed to fetch ecosystem_status:", error.message);
      return [];
    }
    return data ?? [];
  } catch (err) {
    console.error("Unexpected error fetching ecosystem_status:", err);
    return [];
  }
}

export default async function ProjectsPage() {
  const ecosystemNodes = await getEcosystemStatus();
  return (
    <main className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-32">
        <h1 className="mx-auto max-w-5xl px-4 bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
          Projects
        </h1>
      </div>
      <SelectedWork />
      <div className="relative w-full">
        <p className="text-center font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase pt-16 pb-2">
          Supporting Proof
        </p>
        <ProjectNodeGraph nodes={ecosystemNodes} />
      </div>
      <FloatingWhatsApp
        phone="6283870880997"
        message="Halo, saya tertarik dengan project SCH."
      />
    </main>
  );
}
