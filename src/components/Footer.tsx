"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#07080b] border-t border-white/10 pt-16 pb-12 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#d8ff36]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-white/10">
          <div>
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#d8ff36] mb-4">
              Pillars
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">Deep SEO & AI Retrieval</a>
              <a href="#services" className="hover:text-white transition-colors">Social Narrative Syndicate</a>
              <a href="#services" className="hover:text-white transition-colors">Visual Identity Hegemony</a>
              <a href="#vault" className="hover:text-white transition-colors">Ecosystem Portfolio</a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#d8ff36] mb-4">
              Engagement
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-gray-400">
              <a href="#how-to-work" className="hover:text-white transition-colors">How to Work with Us</a>
              <a href="#engage" className="hover:text-white transition-colors">October &apos;26 Batch</a>
              <Link href="/contact" className="hover:text-[#d8ff36] transition-colors flex items-center gap-1.5">
                <Mail size={12} className="text-[#d8ff36]" />
                <span>Direct Email Desk</span>
              </Link>
              <button
                onClick={onOpenInquiry}
                className="text-left text-xs font-sans text-gray-400 hover:text-white transition-colors"
              >
                Intake Application
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#d8ff36] mb-4">
              Ecosystem
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-gray-400">
              <a href="https://shri.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <span>SHRI Organization</span>
                <ArrowUpRight size={12} />
              </a>
              <a href="https://anay.shri.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Anay Raj Tiwari</span>
                <ArrowUpRight size={12} />
              </a>
              <a href="https://rzglyph.shri.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Glyph-CLI</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#d8ff36] mb-4">
              Contact & Time
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d8ff36] animate-pulse" />
                <span className="text-white font-medium">October &apos;26 Inception</span>
              </div>
              <span className="font-mono text-xs text-gray-300">agenciesbyshri@gmail.com</span>
              <span className="font-mono text-[11px] text-gray-500">{time || "00:00:00 UTC"}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans font-medium uppercase tracking-widest text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} SHRI AGENCIES • SHRI DIVISION 03
          </div>
          <div className="flex items-center gap-6">
            <span>NO TEMPLATES</span>
            <span>NO FLUFF</span>
            <span>DIRECT ARCHITECTURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
