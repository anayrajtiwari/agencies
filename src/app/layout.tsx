import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHRI Agencies | Strategic Growth, SEO & Digital Authority",
  description:
    "We build noisy brands impossible to ignore. Technical SEO, social media domination, bespoke web craft, and high-impact digital presence. Launching October 2026.",
  keywords: [
    "SHRI Agencies",
    "Digital Presence Agency",
    "Deep SEO",
    "Social Media Growth",
    "Brand Authority",
    "Anay Raj Tiwari",
    "High Voltage Web Craft",
  ],
  openGraph: {
    title: "SHRI Agencies | The Anti-Agency for Visionaries",
    description:
      "Deep search SEO, viral content syndication, and high-velocity web engineering. Launching October 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0a0b0f] text-[#f2f3f7] antialiased selection:bg-[#d8ff36] selection:text-black">
        {/* Full-page tactile film grain overlay */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
