"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesGrid from "@/components/ServicesGrid";
import VisualVault from "@/components/VisualVault";
import HowToWorkWithUs from "@/components/HowToWorkWithUs";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0b0f] text-[#f2f3f7] relative selection:bg-[#d8ff36] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Hero Section (With fixed top-left lighting & texture) */}
      <Hero onOpenInquiry={() => setInquiryOpen(true)} />

      {/* High-Velocity Marquee Ticker */}
      <MarqueeTicker />

      {/* Services Grid (Deep Search, Social Syndicate, Brand Hegemony) */}
      <ServicesGrid onOpenInquiry={() => setInquiryOpen(true)} />

      {/* The Visual Vault (Live Websites: shri.org.in, anay.shri.org.in, rzglyph.shri.org.in) */}
      <VisualVault />

      {/* How to Work with Us + Unified Engage '26 & Email Contact Desk */}
      <HowToWorkWithUs onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Footer */}
      <Footer onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Interactive Inquiry Drawer / Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
