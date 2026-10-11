import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://agencies.shri.org.in"),
  alternates: {
    canonical: "https://agencies.shri.org.in",
  },
  title: {
    default: "Agencies by SHRI — Strategic Creative Studio & Growth Agency",
    template: "%s | Agencies by SHRI",
  },
  description:
    "Agencies by SHRI is a bespoke strategic creative studio & digital growth agency by Anay Raj Tiwari. Social media growth, deep search SEO, and web craft.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  keywords: [
    // Primary Brand & Name Permutations
    "Agencies",
    "Agencies By SHRI",
    "Agencies by SHRI",
    "Agencies SHRI",
    "SHRI Agencies",
    "SHRI Agency",
    "Shri Hari Redirect Initiative Agency",
    "SHRI Division 03",
    "Agencies by Shri Hari Redirect Initiative",

    // Founder & Ecosystem (Matching onedayisnoneday authority)
    "Anay Raj Tiwari",
    "Anay Tiwari",
    "Founder Anay Raj Tiwari",
    "SHRI",
    "Shri Hari Redirect Initiative",
    "SHRI Ecosystem",
    "Glyph-CLI",
    "SHRI ELA",
    "Systems Architecture",
    "Digital Presence Agency",

    // Core Practice & High-Intent Capabilities
    "Strategic Creative Studio",
    "Social Media Growth",
    "Bespoke Social Media Management",
    "Deep Search SEO",
    "Search Authority",
    "AEO",
    "Answer Engine Optimization",
    "GEO",
    "Generative Engine Optimization",
    "Brand Positioning",
    "Digital Presence",
    "Bespoke Web Craft",
    "Web Engineering",
    "Founders Growth Studio",
    "Luxury Growth Agency",
    "Seasonal Cohort Agency",
  ],
  authors: [
    { name: "Anay Raj Tiwari", url: "https://anay.shri.org.in" },
    { name: "SHRI Team", url: "https://shri.org.in" },
  ],
  creator: "Anay Raj Tiwari",
  publisher: "Shri Hari Redirect Initiative",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agencies.shri.org.in",
    siteName: "Agencies by SHRI",
    title: "Agencies by SHRI — Strategic Creative Studio & Growth Agency",
    description:
      "Bespoke social media management, organic search authority (Deep Search SEO), brand positioning, and web engineering. Division 03 of Shri Hari Redirect Initiative, founded by Anay Raj Tiwari.",
    images: [
      {
        url: "https://agencies.shri.org.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agencies by SHRI — Strategic Creative Studio & Digital Presence Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencies by SHRI — Strategic Creative Studio & Growth Agency",
    description:
      "Bespoke social media management, organic search authority (Deep Search SEO), brand positioning, and web engineering. Division 03 of Shri Hari Redirect Initiative, founded by Anay Raj Tiwari.",
    images: ["https://agencies.shri.org.in/og-image.png"],
    creator: "@__anay___",
    site: "@__anay___",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
