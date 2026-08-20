import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import CustomCursor from "@/components/CustomCursor";

const SITE_URL = "https://sinch4n.vercel.app";
const SITE_TITLE = "SCH — Rian Riyandi | AI-Powered Systems for Business";
const SITE_DESCRIPTION =
  "I build AI-powered systems for business — websites, automation, AI, and data, built end to end.";

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
    locale: "en_US",
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
    <html lang="en">
      <body className="bg-[#0a0a0a] antialiased cursor-none">
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
