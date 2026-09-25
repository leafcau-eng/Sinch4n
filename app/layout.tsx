import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const SITE_URL = "https://sinch4n.vercel.app";
const SITE_TITLE = "SCH — Website & Digital Systems for Business | Rian Riyandi";
const SITE_DESCRIPTION =
  "Website bisnis, automation, dan custom digital systems untuk membantu bisnis membangun kehadiran digital dan workflow yang lebih terstruktur.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | SCH",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "SCH",
    images: [{ url: "/images/rian-portrait.png", alt: "Rian Riyandi" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/rian-portrait.png", alt: "Rian Riyandi" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#0a0a0a] antialiased cursor-none">
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        {children}
        <Footer />
      </body>
    </html>
  );
}
