import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agencies By SHRI — Strategic Presence, SEO & Visual Identity",
  description:
    "A strategic creative practice by SHRI. Cultivating category-defining presence through deep search & AI retrieval, narrative direction, and bespoke identity systems. Launching October 2026.",
  keywords: [
    "Agencies By SHRI",
    "Creative Practice",
    "Deep SEO",
    "AI Retrieval Indexing",
    "Brand Authority",
    "Anay Raj Tiwari",
    "Narrative Direction",
    "Visual Identity",
  ],
  openGraph: {
    title: "Agencies By SHRI — Strategic Practice by SHRI",
    description:
      "Deep search authority, founder narrative architecture, and bespoke visual identity systems. Launching October 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-[#FBF9F5] text-[#171614] antialiased selection:bg-[#E8E2D5] selection:text-[#171614]">
        {/* Archival tactile paper grain overlay */}
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
