"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Navbar({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-8 max-w-5xl mx-auto">
      <nav className="bg-[#FBF9F5]/90 backdrop-blur-md border border-[#171614]/10 rounded-full px-5 py-3 shadow-[0_4px_24px_rgba(23,22,20,0.04)] flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full bg-[#171614] flex items-center justify-center text-[#FBF9F5] font-sans font-bold text-xs tracking-tight transition-transform group-hover:scale-105">
            SA
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-bold text-sm tracking-tight text-[#171614] uppercase">
              SHRI AGENCIES
            </span>
            <span className="hidden sm:inline-block font-serif italic text-xs text-[#6B665E]">
              Strategic Practice
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-sans font-medium text-[#6B665E]">
          <a href="#services" className="hover:text-[#171614] transition-colors">Services</a>
          <a href="#vault" className="hover:text-[#171614] transition-colors">The Vault</a>
          <a href="#how-to-work" className="hover:text-[#171614] transition-colors">How to Work</a>
          <Link href="/contact" className="hover:text-[#171614] transition-colors flex items-center gap-1.5">
            <Mail size={13} className="text-[#171614]" />
            <span>Direct Email</span>
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wide px-5 py-2 rounded-full hover:bg-[#2E2C28] transition-all shadow-sm active:scale-95"
          >
            <span>October &apos;26 Cohort</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#171614] hover:text-[#6B665E]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 p-5 bg-[#FBF9F5]/95 backdrop-blur-xl border border-[#171614]/10 rounded-2xl shadow-lg flex flex-col gap-4 font-sans text-sm font-medium"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5">Services</a>
            <a href="#vault" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5">The Vault</a>
            <a href="#how-to-work" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5">How to Work</a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5 flex items-center gap-2">
              <Mail size={14} />
              <span>Direct Email</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-center bg-[#171614] text-[#FBF9F5] font-medium py-3 rounded-full text-xs tracking-wider uppercase mt-2"
            >
              Apply for October Cohort
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
