"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesGrid from "@/components/ServicesGrid";
import HowToWorkWithUs from "@/components/HowToWorkWithUs";
import InteractiveScopeBuilder from "@/components/InteractiveScopeBuilder";
import VisualVault from "@/components/VisualVault";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0b0f] text-[#f2f3f7] relative selection:bg-[#d8ff36] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenInquiry={() => setInquiryOpen(true)} />

      {/* High-Velocity Marquee Ticker */}
      <MarqueeTicker />

      {/* Services Grid (Deep Search, Next.js Craft, Social, Brand) */}
      <ServicesGrid onOpenInquiry={() => setInquiryOpen(true)} />

      {/* How to Work with Us (Criteria, Process & Direct Email link) */}
      <HowToWorkWithUs onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Interactive Scope & Sprint Builder */}
      <InteractiveScopeBuilder onOpenInquiry={() => setInquiryOpen(true)} />

      {/* The Visual Vault (Images in background + Case Studies) */}
      <VisualVault onOpenInquiry={() => setInquiryOpen(true)} />

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
