import { ABOUT_FAQS } from "@/lib/aboutFaqs";

const SITE_URL = "https://sinch4n.vercel.app";

export default function AboutLocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#person`,
        name: "Rian Riyandi",
        jobTitle: "Founder, SCH Digital Agency",
        url: `${SITE_URL}/about`,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/about#business`,
        name: "SCH Digital Agency",
        founder: { "@id": `${SITE_URL}/about#person` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gg. Hj Iyad, Kp. Haurwangi, RT 04 RW 02",
          addressLocality: "Haurwangi",
          addressRegion: "Kabupaten Cianjur",
          addressCountry: "ID",
        },
        telephone: "+6283870880997",
        url: `${SITE_URL}/about`,
        areaServed: "ID",
        makesOffer: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Websites" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prospecting Systems" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Digital Systems" } },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ABOUT_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
