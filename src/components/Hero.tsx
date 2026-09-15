"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Flame, ShieldCheck, Zap, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-8 pt-36 pb-20 overflow-hidden dot-matrix-bg">
      
      {/* ── Background Imagery & Collage Layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* FIXED: Top-Left Background Atmosphere (No longer pitch black) */}
        <div 
          className="absolute -top-16 -left-16 w-[550px] h-[550px] rounded-3xl opacity-25 filter grayscale contrast-125 -rotate-12 blur-[1px] bg-cover bg-center transition-all"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop')`,
          }}
        />
        {/* Top-Left Ambient Glow Bloom */}
        <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-[#d8ff36]/15 blur-[140px] rounded-full" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/12 blur-[120px] rounded-full" />
        <div className="absolute top-6 left-6 w-60 h-60 halftone-accent pointer-events-none" />

        {/* Top-Right Background Image */}
        <div 
          className="absolute -top-10 -right-20 w-[550px] h-[550px] rounded-3xl opacity-20 filter grayscale contrast-150 rotate-12 blur-[1px] bg-cover bg-center transition-all"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop')`,
          }}
        />

        {/* Bottom-Left Background Image */}
        <div 
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full opacity-15 filter contrast-125 -rotate-6 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop')`,
          }}
        />

        {/* Dynamic center & right ambient color blooms */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#d8ff36]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-[#8b5cf6]/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-64 h-64 halftone-accent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Floating sticker tags (Zero Unicode emojis, pure SVG icons) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <motion.div
            initial={{ rotate: -4, scale: 0.9 }}
            animate={{ rotate: -2, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.08 }}
            className="sticker-tag bg-[#d8ff36] text-black border border-black cursor-pointer shadow-[3px_3px_0px_#000]"
          >
            <Flame size={12} className="fill-black" />
            <span>LAUNCHING THIS OCTOBER 2026</span>
          </motion.div>

          <motion.div
            initial={{ rotate: 3, scale: 0.9 }}
            animate={{ rotate: 2, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.08 }}
            className="sticker-tag bg-[#8b5cf6] text-white border border-white/20 cursor-pointer shadow-[3px_3px_0px_#000]"
          >
            <Zap size={12} className="fill-white" />
            <span>DIRECT FOUNDER ARCHITECTURE</span>
          </motion.div>

          <motion.div
            initial={{ rotate: -2, scale: 0.9 }}
            animate={{ rotate: -1, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.08 }}
            className="sticker-tag bg-[#1c202d] text-gray-300 border border-white/10 cursor-pointer hidden sm:inline-flex"
          >
            <ShieldCheck size={12} className="text-[#d8ff36]" />
            <span>STRICT BATCH SELECTION</span>
          </motion.div>
        </div>

        {/* Punchy Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-8"
        >
          WE MAKE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ff36] via-white to-[#8b5cf6]">NOISY BRANDS</span> <br />
          IMPOSSIBLE TO IGNORE.
        </motion.h1>

        {/* Subhead / Rationale */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl leading-relaxed mb-10"
        >
          No bloated retainers. No recycled templates. Just weaponized SEO authority, organic narrative architecture, and high-status brand positioning that commands the internet.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#d8ff36] text-black font-extrabold text-sm uppercase tracking-wider px-9 py-4 rounded-full hover:bg-white hover:shadow-[0_0_35px_rgba(216,255,54,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Lock In October &apos;26 Batch</span>
            <ArrowRight size={16} />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#12141d]/90 hover:bg-[#1a1e2b] text-white font-sans font-semibold text-xs uppercase tracking-widest px-7 py-4 rounded-full border border-white/10 hover:border-[#d8ff36]/50 transition-all"
          >
            <Mail size={14} className="text-[#d8ff36]" />
            <span>Direct Email Desk</span>
          </Link>
        </motion.div>

        {/* High-Impact Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-left"
        >
          <div className="p-4 rounded-2xl bg-[#12141d]/60 border border-white/5 backdrop-blur-md">
            <span className="text-3xl sm:text-4xl font-black text-[#d8ff36] tracking-tight block">
              +340%
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Search Retrieval Surge
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#12141d]/60 border border-white/5 backdrop-blur-md">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight block">
              10
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Partners Per Cohort
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#12141d]/60 border border-white/5 backdrop-blur-md">
            <span className="text-3xl sm:text-4xl font-black text-[#8b5cf6] tracking-tight block">
              100%
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Bespoke Craft & Code
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#12141d]/60 border border-white/5 backdrop-blur-md">
            <span className="text-3xl sm:text-4xl font-black text-[#d8ff36] tracking-tight block">
              OCT &apos;26
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Official Inception
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
