"use client";

// components/ProjectGrid.tsx
//
// REVISI: ditambah 2 props OPSIONAL supaya komponen ini bisa dipakai
// di dua tempat:
//   1. Portfolio utama (TANPA props) — behavior SAMA PERSIS seperti
//      sebelumnya: tombol filter ALL/LAUNDRY/dst muncul, default "all".
//   2. Halaman kategori app/portfolio/[category]/page.tsx (DENGAN
//      props lockedCategory + hideFilters) — grid langsung ke-filter
//      ke 1 kategori, tombol filter disembunyikan karena sudah di
//      halaman khusus.
//
// Tidak ada perubahan pada logic/tampilan lama jika props baru ini
// tidak diisi (default value menjaga behavior asli).

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, FILTERS, type Project } from "@/lib/projectsData";

function ProjectCard({
  project,
  onPreview,
}: {
  project: Project;
  onPreview: (project: Project) => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  }

  return (
    <motion.div
      data-cursor-hover="true"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${
          isHovering ? -8 : 0
        }px)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s, border-color 0.3s",
      }}
      className="group relative overflow-hidden border border-cyan-400/20 bg-[rgba(8,20,40,0.7)] backdrop-blur-xl"
    >
      <div
        className="relative flex h-[200px] items-center justify-center overflow-hidden"
        style={{ background: project.color }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-4xl opacity-40">{project.thumb}</div>
          <div className="font-mono text-[0.65rem] tracking-wider text-neutral-400">
            {project.name}
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(2,4,8,0.92)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <button
            data-cursor-hover="true"
            onClick={() => onPreview(project)}
            className="border border-cyan-400 bg-cyan-400/10 px-5 py-2 font-mono text-[0.6rem] tracking-wider text-cyan-400 transition-all hover:scale-105 hover:bg-cyan-400/25"
          >
            🔍 Live Preview
          </button>
          {project.url && (
            <a
              data-cursor-hover="true"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 bg-purple-500/10 px-5 py-2 font-mono text-[0.6rem] tracking-wider text-purple-400 transition-all hover:scale-105 hover:bg-purple-500/25"
            >
              🌐 Visit Site
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 font-mono text-[0.6rem] tracking-wider text-cyan-400 uppercase">
          {project.category.replace("-", " ")}
        </div>
        <div className="mb-3 font-display text-base font-bold tracking-tight text-white">
          {project.name}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-neutral-400">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-purple-500/30 bg-purple-500/5 px-2.5 py-1 font-mono text-[0.55rem] tracking-wide text-purple-400/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PreviewModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-[rgba(2,4,8,0.95)] backdrop-blur-xl"
        >
          <div className="flex w-full max-w-5xl items-center justify-between border-b border-cyan-400/20 px-8 py-6">
            <div className="font-display text-sm text-cyan-400">
              {project.name}
            </div>
            <button
              data-cursor-hover="true"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center border border-cyan-400/20 text-neutral-400 transition-all hover:border-cyan-400 hover:text-cyan-400"
            >
              ✕
            </button>
          </div>

          <div className="flex w-full max-w-5xl flex-1 items-center justify-center px-8 py-4">
            {project.url ? (
              <iframe
                src={project.url}
                className="h-full w-full border border-cyan-400/20 bg-white"
              />
            ) : (
              <p className="text-center text-neutral-400">
                Project ini belum memiliki URL live. Hubungi via WhatsApp
                untuk demo langsung!
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProjectGridProps {
  // Jika diisi, grid langsung terkunci ke kategori ini (dipakai oleh
  // halaman app/portfolio/[category]/page.tsx). Jika tidak diisi
  // (undefined), behavior default = "all", sama seperti sebelumnya.
  lockedCategory?: string;
  // Jika true, tombol filter ALL/LAUNDRY/dst disembunyikan. Dipakai
  // bersamaan dengan lockedCategory di halaman kategori, karena
  // user sudah eksplisit memilih kategori sebelum sampai di sini.
  hideFilters?: boolean;
  // Jika true, judul section "Projects" disembunyikan (halaman
  // kategori biasanya sudah punya judulnya sendiri di luar komponen
  // ini, lihat app/portfolio/[category]/page.tsx).
  hideTitle?: boolean;
}

export default function ProjectGrid({
  lockedCategory,
  hideFilters = false,
  hideTitle = false,
}: ProjectGridProps = {}) {
  const [activeFilter, setActiveFilter] = useState(lockedCategory ?? "all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative z-10 px-6 py-24 text-center md:px-12">
      {!hideTitle && (
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Projects
        </h2>
      )}

      {!hideFilters && (
        <div className="my-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              data-cursor-hover="true"
              onClick={() => setActiveFilter(filter.value)}
              className={`border px-5 py-2 font-mono text-[0.65rem] tracking-wider uppercase transition-all ${
                activeFilter === filter.value
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                  : "border-cyan-400/20 text-neutral-400 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className={`grid gap-6 text-left [grid-template-columns:repeat(auto-fill,minmax(340px,1fr))] ${hideFilters ? "mt-10" : ""}`}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onPreview={setPreviewProject}
          />
        ))}
      </div>

      <PreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
}
