"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
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
    <footer className="bg-[#07080b] border-t border-white/10 pt-20 pb-12 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#d8ff36]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Callout */}
        <div className="rounded-3xl border border-white/10 bg-[#12141d]/70 p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#d8ff36] block mb-2">
              Limited Batch • 10 Partners Only
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Ready to ship this October?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
              Applications are reviewed on a rolling basis. Lock in your sprint early.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-full transition-all"
            >
              <Mail size={14} className="text-[#d8ff36]" />
              <span>Direct Email</span>
            </Link>

            <button
              onClick={onOpenInquiry}
              className="bg-[#d8ff36] text-black font-sans font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(216,255,54,0.3)]"
            >
              Claim October Batch
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-white/10">
          <div>
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#d8ff36] mb-4">
              Pillars
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">Deep SEO Authority</a>
              <a href="#services" className="hover:text-white transition-colors">Bespoke Next.js Craft</a>
              <a href="#services" className="hover:text-white transition-colors">Social Narrative Syndicate</a>
              <a href="#services" className="hover:text-white transition-colors">Visual Hegemony</a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#d8ff36] mb-4">
              Interactive
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-gray-400">
              <a href="#how-to-work" className="hover:text-white transition-colors">How to Work with Us</a>
              <a href="#estimator" className="hover:text-white transition-colors">Scope Estimator</a>
              <a href="#vault" className="hover:text-white transition-colors">The Vault</a>
              <Link href="/contact" className="hover:text-[#d8ff36] transition-colors">Direct Email Desk</Link>
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
            <span>HIGH VOLTAGE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
