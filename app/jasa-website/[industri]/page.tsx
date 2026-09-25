import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { DEMO_GROUPS, demoUrl } from "@/lib/demoLinks";
import { DEMO_DETAILS } from "@/lib/demoDetails";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getIndustryContent } from "@/lib/industries";

type Props = { params: Promise<{ industri: string }> };

const findGroup = (slug: string) => DEMO_GROUPS.find((g) => g.industri === slug);

const prettify = (slug: string) =>
  slug
    .replace(/^contoh-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export function generateStaticParams() {
  return DEMO_GROUPS.map((g) => ({ industri: g.industri }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industri } = await params;
  const group = findGroup(industri);
  if (!group) return { title: "Not Found" };
  const content = getIndustryContent(industri);
  return {
    title: content?.metaTitle ?? `Jasa Pembuatan Website ${group.label}`,
    description:
      content?.metaDescription ??
      content?.intro ??
      `Contoh website ${group.label} yang sudah kami buat, lengkap dengan demo yang bisa dicoba.`,
    alternates: { canonical: `/jasa-website/${industri}` },
    robots: content ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function IndustriPage({ params }: Props) {
  const { industri } = await params;
  const group = findGroup(industri);
  if (!group) notFound();
  const content = getIndustryContent(industri);

  const jsonLd =
    content?.faqs && content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-200">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <nav className="mb-6 font-mono text-xs uppercase tracking-wide text-neutral-500">
          <Link href="/" className="hover:text-cyan-400">SCH</Link>
          {" / "}
          <Link href="/jasa-website" className="hover:text-cyan-400">Jasa Website</Link>
          {" / "}
          <span className="text-neutral-300">{group.label}</span>
        </nav>

        <h1 className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
          {content?.h1 ?? `Jasa Pembuatan Website ${group.label}`}
        </h1>

        {content?.intro && (
          <p className="mt-5 text-base leading-relaxed text-neutral-300">{content.intro}</p>
        )}

        {content?.heroImage && content.heroAlt && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={content.heroImage}
              alt={content.heroAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {content?.edukasi && content.edukasi.paragraf.length > 0 && (
          <section className="mt-12">
            <h2 className="border-l-4 border-cyan-400 pl-3 font-display text-xl font-bold text-white">{content.edukasi.judul}</h2>
            <div className="mt-4 grid gap-4 text-neutral-300 leading-relaxed">
              {content.edukasi.paragraf.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12">
          <h2 className="border-l-4 border-cyan-400 pl-3 font-display text-xl font-bold text-white">Contoh Website {group.label}</h2>
          <ul className="mt-4 grid gap-4">
            {group.demos.map((d) => {
              const detail = DEMO_DETAILS[d];
              if (!detail) {
                return (
                  <li key={d}>
                    <a
                      href={demoUrl(d)}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 font-mono text-sm transition-colors hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <span>{prettify(d)}</span>
                      <span aria-hidden>↗</span>
                    </a>
                  </li>
                );
              }
              return (
                <li key={d}>
                  <a
                    href={detail.url ?? demoUrl(d)}
                    target="_blank"
                    rel="noopener"
                    className="group block overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-purple-500/[0.06] transition-colors hover:border-cyan-400"
                  >
                    {detail.image && (
                      <div className="relative aspect-video w-full">
                        <Image
                          src={detail.image}
                          alt={detail.alt ?? `Contoh website ${detail.jenis} ${detail.nama}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 768px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-mono text-[11px] uppercase tracking-wide text-purple-300/90">
                          {detail.jenis}
                        </p>
                        <span className="rounded-full bg-cyan-400 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-black">
                          Lihat Website ↗
                        </span>
                      </div>
                      <h3 className="mt-3 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-xl font-bold text-transparent">{detail.nama}</h3>
                      <p className="mt-2 text-sm text-neutral-400">{detail.deskripsi}</p>
                      {detail.fitur && detail.fitur.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2 font-mono text-[11px]">
                          {detail.fitur.map((x) => (
                            <li key={x} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-cyan-100">
                              {x}
                            </li>
                          ))}
                        </ul>
                      )}
                      <span className="mt-5 flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(0,245,255,0.35)] transition-transform group-hover:scale-[1.02]">Lihat Website →</span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {content?.features && content.features.length > 0 && (
          <section className="mt-12">
            <h2 className="border-l-4 border-cyan-400 pl-3 font-display text-xl font-bold text-white">
              Fitur Website {group.label}
            </h2>
            <ul className="mt-4 grid gap-2 font-mono text-sm sm:grid-cols-2">
              {content.features.map((f) => (
                <li key={f} className="text-neutral-300">
                  <span className="text-cyan-400">▸</span> {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        {content?.cocokUntuk && content.cocokUntuk.length > 0 && (
          <section className="mt-12">
            <h2 className="border-l-4 border-cyan-400 pl-3 font-display text-xl font-bold text-white">
              Website {group.label} Cocok untuk
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
              {content.cocokUntuk.map((c) => (
                <li key={c} className="rounded-full border border-white/10 px-3 py-1">
                  {c}
                </li>
              ))}
            </ul>
          </section>
        )}

        {content?.harga && (
          <section className="mt-12">
            <h2 className="border-l-4 border-cyan-400 pl-3 font-display text-xl font-bold text-white">Harga</h2>
            <p className="mt-3 text-neutral-300">{content.harga}</p>
          </section>
        )}

        {content?.faqs && content.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="border-l-4 border-cyan-400 pl-3 font-display text-xl font-bold text-white">FAQ</h2>
            <div className="mt-4 grid gap-4">
              {content.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-white">{f.q}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="cta" className="mt-16 rounded-2xl border border-cyan-400/20 p-6 text-center">
          <h2 className="font-display text-xl font-bold text-white">
            Butuh website {group.label}?
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Ceritakan kebutuhan bisnis Anda, kami bantu dari template hingga custom.
          </p>
          <a
            href={`https://wa.me/6283870880997?text=${encodeURIComponent(`Halo, saya tertarik dengan jasa website ${group.label}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-cyan-400 px-8 py-3 font-mono text-sm uppercase tracking-wide text-black transition-transform hover:scale-105"
          >
            Mulai Project →
          </a>
        </section>

        <FloatingWhatsApp
          phone="6283870880997"
          message={`Halo, saya tertarik dengan jasa website ${group.label}.`}
          hideWhenVisibleId="cta"
        />

        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </div>
    </main>
  );
}
