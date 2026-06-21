// app/portfolio/[category]/page.tsx
//
// Halaman khusus per kategori (mis. /portfolio/laundry). Diakses
// dari klik kartu di components/CategoryShowcase.tsx (Portfolio
// utama). Menampilkan ProjectGrid yang sudah terkunci ke 1
// kategori, tanpa tombol filter (karena user sudah eksplisit
// memilih kategori sebelum sampai di sini).
//
// notFound() dipanggil kalau kategori di URL tidak punya project
// sama sekali — mencegah halaman kosong yang membingungkan.

import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECTS, FILTERS } from "@/lib/projectsData";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const projectsInCategory = PROJECTS.filter((p) => p.category === category);

  // Kategori tidak dikenal / tidak ada project sama sekali -> 404,
  // bukan halaman kosong yang membingungkan pengunjung.
  if (projectsInCategory.length === 0) {
    notFound();
  }

  const categoryLabel =
    FILTERS.find((f) => f.value === category)?.label ?? category;

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

      <ProjectGrid lockedCategory={category} hideFilters hideTitle />
    </main>
  );
}
