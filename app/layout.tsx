import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "SCH | Sinchan — by Rian Riyandi",
  description:
    "SCH (Sinchan): combine two photos into a single living 3D dimension.",
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
