"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import AgedBookFolio from "@/components/AgedBookFolio";
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

      {/* The Archival Aged Book: Turning Pages for Capabilities, The Vault, Process & Engage */}
      <AgedBookFolio />

      {/* Footer */}
      <Footer />
    </main>
  );
}
