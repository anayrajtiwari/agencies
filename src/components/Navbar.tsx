"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "The Vault", href: "#vault" },
  { label: "How to Work", href: "#how-to-work" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ transform: "translateZ(0)" }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-8 max-w-5xl mx-auto"
    >
      <nav className="bg-[#FBF9F5]/90 backdrop-blur-md border border-[#171614]/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_4px_24px_rgba(23,22,20,0.04)] flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-8 h-8 rounded-full overflow-hidden border border-[#171614]/15 shadow-sm bg-[#F5F1E8] shrink-0"
          >
            <Image
              src="/logo.jpeg"
              alt="Agencies, by SHRI"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-sm tracking-[0.08em] text-[#171614] uppercase group-hover:text-[#C25E38] transition-colors duration-300">
              AGENCIES
            </span>
            <span className="hidden sm:inline-block font-serif italic text-xs text-[#6B665E]">
              by SHRI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links with Hover Pill Indicator */}
        <div className="hidden md:flex items-center gap-1 text-[13px] font-sans font-medium text-[#6B665E]">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative px-3.5 py-1.5 rounded-full transition-colors hover:text-[#171614]"
            >
              <span className="relative z-10">{item.label}</span>
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="nav-hover-pill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                  className="absolute inset-0 rounded-full bg-[#171614]/5 z-0"
                />
              )}
            </a>
          ))}

          <Link
            href="/contact"
            className="relative px-3.5 py-1.5 rounded-full text-[#171614] hover:text-[#C25E38] transition-colors flex items-center gap-1.5"
          >
            <Mail size={13} className="text-[#C25E38]" />
            <span>Direct Email</span>
          </Link>
        </div>

        {/* Action Button with Spring Physics */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="hidden sm:inline-flex"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wide px-5 py-2 rounded-full hover:bg-[#2E2C28] transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#171614] hover:text-[#6B665E] transition-colors"
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
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 p-5 bg-[#FBF9F5]/95 backdrop-blur-xl border border-[#171614]/10 rounded-2xl shadow-lg flex flex-col gap-4 font-sans text-sm font-medium"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5">Services</a>
            <a href="#vault" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5">The Vault</a>
            <a href="#how-to-work" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5">How to Work</a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#171614] py-1 border-b border-[#171614]/5 flex items-center gap-2">
              <Mail size={14} className="text-[#C25E38]" />
              <span>Direct Email</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#171614] text-[#FBF9F5] font-medium py-3 rounded-full text-xs tracking-wider uppercase mt-2 shadow-sm block"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
