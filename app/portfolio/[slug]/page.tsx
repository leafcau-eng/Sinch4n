// app/portfolio/[slug]/page.tsx
//
// Phase 12B slice 1 — konsolidasi routing. Menggantikan DUA folder:
//   - app/portfolio/[category]/page.tsx  (grid kategori, PROJECTS lama)
//   - app/portfolio/project/[slug]/page.tsx  (case study, ProjectV2 — provisional dari 12A)
// Next.js tidak izinkan 2 dynamic segment beda nama di 1 level path,
// jadi digabung: cek ProjectV2 dulu, fallback ke kategori lama.
//
// PENTING — urutan precedence: ProjectV2 dicek LEBIH DULU. Kalau nanti
// ada slug ProjectV2 baru yang kebetulan sama persis dengan salah satu
// category value lama, ProjectV2 yang menang. Belum ada collision hari
// ini (dicek manual), tapi perlu diingat kalau nambah entry baru.
//
// Behavior kategori DIPERTAHANKAN 1:1 sama seperti [category]/page.tsx
// lama — bagian ini BUKAN redesign, cuma pindah lokasi.
//
// Phase 12B slice 4 — ProjectCaseStudy direstructure ke 8 section
// sesuai spec: Overview, Problem, What I Built, How It Works/
// Architecture, Key Features, Technology, Proof/Screenshots,
// Live Demo/GitHub. SETIAP section conditional: render HANYA kalau
// field terkait ada isinya. Field null/TODO TIDAK dirender sebagai
// placeholder apapun — sengaja hilang dari halaman, bukan diganti
// teks pengganti. TIDAK ADA copy baru ditulis di sini maupun di
// lib/projects.ts — murni perubahan struktur presentasi.
//
// FIX slice 4: <Navbar /> sebelumnya HILANG dari branch ini (cuma ada
// di branch fallback-kategori di bawah) — halaman case study individual
// nggak punya navigasi sama sekali. Ditambahkan sekarang.

import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECTS, FILTERS } from "@/lib/projectsData";
import type { Metadata } from "next";
import { getProjectBySlug, PROJECTS_V2, type ProjectV2 } from "@/lib/projects";

interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

// Reuse lookup logic yang sama persis dengan page body di bawah --
// tidak ada data baru, cuma dipakai untuk title/description.
// Project hidden sengaja TIDAK dapat metadata spesifik (fallback ke
// "Not Found"), supaya tidak ada title project yang leak sebelum
// notFound() render 404 di page body.
export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (project && project.visibility === "public") {
    return {
      title: project.title,
      description: project.shortDescription,
    };
  }

  const projectsInCategory = PROJECTS.filter((p) => p.category === slug);
  if (projectsInCategory.length > 0) {
    const categoryLabel = FILTERS.find((f) => f.value === slug)?.label ?? slug;
    return {
      title: categoryLabel,
      description: `${categoryLabel} projects and templates.`,
    };
  }

  return { title: "Not Found" };
}

export function generateStaticParams() {
  const projectSlugs = PROJECTS_V2.filter((p) => p.visibility === "public").map(
    (p) => ({ slug: p.slug })
  );
  const categorySlugs = Array.from(new Set(PROJECTS.map((p) => p.category))).map(
    (category) => ({ slug: category })
  );
  return [...projectSlugs, ...categorySlugs];
}

export default async function PortfolioSlugPage({ params }: SlugPageProps) {
  const { slug } = await params;

  // 1) Coba sebagai project individual (ProjectV2) dulu.
  const project = getProjectBySlug(slug);
  if (project) {
    if (project.visibility !== "public") {
      notFound();
    }
    return <ProjectCaseStudy project={project} />;
  }

  // 2) Fallback: kategori lama — behavior sama persis [category]/page.tsx.
  const projectsInCategory = PROJECTS.filter((p) => p.category === slug);
  if (projectsInCategory.length > 0) {
    const categoryLabel = FILTERS.find((f) => f.value === slug)?.label ?? slug;
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
          <p className="font-mono text-[10px] tracking-[0.4em] text-cyan-400/70 uppercase mb-3">
            Category
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
            {categoryLabel}
          </h1>
        </div>
        <ProjectGrid lockedCategory={slug} hideFilters hideTitle />
      </main>
    );
  }

  // 3) Tidak match dua-duanya.
  notFound();
}

function ProjectCaseStudy({ project }: { project: ProjectV2 }) {
  // Overview: pakai description kalau ada; fallback ke shortDescription
  // (field required, selalu ada) supaya section ini tidak hilang total
  // untuk project yang baru punya data minimal. Bukan copy baru — dua
  // field ini sudah ada di data, cuma dipilih salah satu untuk render.
  const overviewText = project.description ?? project.shortDescription;

  const hasLiveOrGithub = Boolean(project.liveUrl || project.githubUrl);

  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="px-6 py-24 md:px-16">
        <Link
          href="/portfolio"
          className="inline-block mb-8 font-mono text-[11px] text-cyan-400/70 hover:text-cyan-400 transition-colors"
        >
          ← Kembali ke Portfolio
        </Link>

        <p className="font-mono text-[10px] tracking-[0.4em] text-cyan-400/60 uppercase mb-3">
          {project.projectType}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
          {project.title}
        </h1>

        {/* 1. Overview */}
        <Section title="Overview">{overviewText}</Section>

        {/* 2. Problem */}
        {project.problem && <Section title="Problem">{project.problem}</Section>}

        {/* 3. What I Built */}
        {project.solution && (
          <Section title="What I Built">{project.solution}</Section>
        )}

        {/* 4. How It Works / Architecture */}
        {project.architecture && (
          <Section title="How It Works / Architecture">
            {project.architecture}
          </Section>
        )}

        {/* 5. Key Features */}
        {project.features && project.features.length > 0 && (
          <Section title="Key Features">
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* 6. Technology */}
        {project.technologies.length > 0 && (
          <Section title="Technology">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* 7. Proof / Screenshots */}
        {project.images.length > 0 && (
          <Section title="Proof / Screenshots">
            <div className="flex flex-col gap-4 max-w-2xl">
              {project.images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={project.title}
                  className="w-full rounded-xl border border-white/10"
                />
              ))}
            </div>
          </Section>
        )}

        {/* 8. Live Demo / GitHub */}
        {hasLiveOrGithub && (
          <div className="flex gap-4 mt-10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-cyan-400 text-black font-mono text-sm uppercase"
              >
                Live Demo →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-white/20 text-white font-mono text-sm uppercase"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mb-8">
      <h2 className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase mb-2">
        {title}
      </h2>
      <div className="text-neutral-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
