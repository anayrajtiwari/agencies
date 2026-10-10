import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strategic Creative Studio — Digital Presence & Growth Agency | By SHRI",
  description:
    "Assisting brands, founders, and organizations in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and clear digital positioning. Coming this October.",
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
      "Assisting brands, founders, and organizations in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and clear digital positioning. Coming this October.",
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
