import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://agencies.shri.org.in"),
  title: "Strategic Creative Studio — Digital Presence & Growth Agency | By SHRI",
  description:
    "Assisting brands, founders, and organizations in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and clear digital positioning. Live Now — Open for Client Engagements.",
  keywords: [
    "Strategic Creative Studio",
    "Digital Presence",
    "Growth Agency",
    "Social Media Growth",
    "Deep Search SEO",
    "Brand Positioning",
    "Bespoke Web Craft",
    "Agencies By SHRI",
    "Anay Raj Tiwari",
  ],
  openGraph: {
    title: "Strategic Creative Studio — Digital Presence & Growth Agency | By SHRI",
    description:
      "Assisting brands, founders, and organizations in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and clear digital positioning. Live Now — Open for Client Engagements.",
    url: "https://agencies.shri.org.in",
    siteName: "Agencies by SHRI",
    type: "website",
  },
  alternates: {
    canonical: "https://agencies.shri.org.in",
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
        <JsonLd />
        {/* Archival tactile paper grain overlay */}
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
