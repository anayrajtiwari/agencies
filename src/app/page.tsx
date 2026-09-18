"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesGrid from "@/components/ServicesGrid";
import VisualVault from "@/components/VisualVault";
import HowToWorkWithUs from "@/components/HowToWorkWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#171614] relative selection:bg-[#E8E2D5] selection:text-[#171614]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (With fixed top-left lighting & texture) */}
      <Hero />

      {/* High-Velocity Marquee Ticker */}
      <MarqueeTicker />

      {/* Services Grid (Deep Search, Social Syndicate, Brand Hegemony) */}
      <ServicesGrid />

      {/* The Visual Vault (Live Websites: shri.org.in, anay.shri.org.in, rzglyph.shri.org.in) */}
      <VisualVault />

      {/* How to Work with Us + Unified Engage '26 & Email Contact Desk */}
      <HowToWorkWithUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
