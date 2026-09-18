"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-8 pt-36 pb-24 overflow-hidden bg-[#FBF9F5] dot-grid">
      
      {/* ── Ambient Warm Lighting & Subtle Texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft warm sunbeam / radial glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#F0EBE1] via-[#F7F3EB]/60 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#EFE9DD]/50 blur-[140px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-[#F3EFE6]/60 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Refined Cohort Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#171614]/10 shadow-[0_2px_8px_rgba(23,22,20,0.04)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] animate-pulse" />
          <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-[#171614]">
            Autumn 2026 Cohort
          </span>
          <span className="w-1 h-1 rounded-full bg-[#171614]/20" />
          <span className="font-serif italic text-xs text-[#6B665E]">
            Direct Leadership Review
          </span>
        </motion.div>

        {/* Master Human Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-[#171614] leading-[1.08] max-w-4xl mb-8"
        >
          We cultivate brands that become{" "}
          <span className="font-serif italic font-normal text-[#171614] underline decoration-[#171614]/15 underline-offset-8">
            impossible to ignore.
          </span>
        </motion.h1>

        {/* Articulate Editorial Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#6B665E] font-sans font-normal max-w-2xl leading-relaxed mb-12"
        >
          A strategic creative practice by SHRI. We engineer search authority, narrative direction, and visual identity systems for high-conviction founders and category-defining teams.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#2E2C28] transition-all shadow-[0_4px_16px_rgba(23,22,20,0.12)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Apply for October Cohort</span>
            <ArrowRight size={14} />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#F3EFE6] text-[#171614] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full border border-[#171614]/10 transition-all shadow-sm"
          >
            <Mail size={14} className="text-[#6B665E]" />
            <span>Direct Email Desk</span>
          </Link>
        </motion.div>

        {/* Editorial Metrics Strip with delicate dividers */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-[#171614]/10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-left"
        >
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-normal text-[#171614] tracking-tight block">
              +340%
            </span>
            <span className="text-xs font-sans text-[#6B665E]">
              Organic search visibility surge
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-normal text-[#171614] tracking-tight block">
              10
            </span>
            <span className="text-xs font-sans text-[#6B665E]">
              Partners per seasonal cohort
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-normal text-[#171614] tracking-tight block">
              0
            </span>
            <span className="text-xs font-sans text-[#6B665E]">
              Templates or outsourced fluff
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-normal text-[#171614] tracking-tight block">
              Oct &apos;26
            </span>
            <span className="text-xs font-sans text-[#6B665E]">
              Target deployment milestone
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
