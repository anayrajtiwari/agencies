"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu, X, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="bg-[#12141d]/85 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#d8ff36] flex items-center justify-center text-black font-black text-xs group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(216,255,54,0.4)]">
            SA
          </div>
          <div>
            <span className="font-sans font-black tracking-wider text-sm text-white uppercase group-hover:text-[#d8ff36] transition-colors">
              SHRI AGENCIES
            </span>
            <span className="hidden sm:inline-block ml-2 text-[9px] font-sans font-bold uppercase tracking-widest text-[#d8ff36] bg-[#d8ff36]/10 px-2 py-0.5 rounded-full border border-[#d8ff36]/30">
              OCTOBER &apos;26
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-sans font-semibold tracking-wider uppercase text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#vault" className="hover:text-white transition-colors">The Vault</a>
          <a href="#how-to-work" className="hover:text-white transition-colors">How to Work</a>
          <Link href="/contact" className="hover:text-[#d8ff36] transition-colors flex items-center gap-1.5">
            <Mail size={12} className="text-[#d8ff36]" />
            <span>Direct Email</span>
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 bg-[#d8ff36] text-black font-sans font-extrabold text-xs uppercase tracking-wider px-5 py-2 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles size={13} className="text-black" />
            <span>Engage (Oct &apos;26)</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 p-5 bg-[#12141d]/95 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-4 font-sans text-xs font-semibold uppercase tracking-wider"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#d8ff36]">Services</a>
          <a href="#vault" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#d8ff36]">The Vault</a>
          <a href="#how-to-work" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#d8ff36]">How to Work</a>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#d8ff36] flex items-center gap-1.5">
            <Mail size={12} className="text-[#d8ff36]" />
            <span>Direct Email</span>
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full text-center bg-[#d8ff36] text-black font-bold py-2.5 rounded-full uppercase tracking-wider mt-2"
          >
            Engage for October &apos;26
          </button>
        </motion.div>
      )}
    </nav>
  );
}
