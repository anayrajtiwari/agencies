"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};


const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-8 pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FBF9F5] dot-grid">
      
      {/* ── Ambient Warm Lighting & Subtle Texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft warm sunbeam / radial glow with zero-cost CSS radial gradient */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[950px] h-[520px] bg-[radial-gradient(ellipse_at_center,rgba(240,235,225,0.85)_0%,rgba(247,243,235,0.45)_50%,transparent_75%)] rounded-full" />
        <div className="hidden sm:block absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(239,233,221,0.5)_0%,transparent_70%)] rounded-full" />
        <div className="hidden sm:block absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(243,239,230,0.6)_0%,transparent_70%)] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full"
      >
        
        {/* Floating Cohort Badge with Gentle Levitation */}
        <motion.div
          variants={fadeUpVariants}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#171614]/10 shadow-[0_2px_12px_rgba(23,22,20,0.04)] mb-6 sm:mb-8 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] animate-pulse" />
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#171614]">
            STRATEGIC CREATIVE STUDIO
          </span>
          <span className="w-1 h-1 rounded-full bg-[#171614]/20" />
          <span className="font-serif italic text-[11px] sm:text-xs text-[#C25E38] font-medium">
            LIVE NOW
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={fadeUpVariants} className="mb-6 sm:mb-8 text-center flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-serif font-normal tracking-tight text-[#171614] leading-[1.04] sm:leading-[0.98] max-w-4xl px-2">
            Digital Presence <br />
            <span className="italic font-normal text-[#C25E38]">& Growth Agency</span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3 select-none">
            <span className="h-[1px] w-6 sm:w-14 bg-[#171614]/15" />
            <p className="text-sm sm:text-lg md:text-xl font-serif tracking-wide text-[#171614]">
              <span className="italic text-[#C25E38] font-normal mr-1.5">By</span>
              <span className="font-semibold tracking-[0.2em] uppercase text-xs sm:text-base md:text-lg">
                SHRI
              </span>
            </p>
            <span className="h-[1px] w-6 sm:w-14 bg-[#171614]/15" />
          </div>

          <span className="font-sans text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#9E988D] mt-2">
            ESTD 2026 • DIVISION 03
          </span>
        </motion.div>

        {/* Editorial Subtext */}
        <motion.p
          variants={fadeUpVariants}
          className="text-sm sm:text-lg md:text-xl font-serif italic text-[#171614]/50 tracking-wide mb-8 sm:mb-10 text-center px-4"
        >
          Advising select brands and ambitious founders. Open for active engagement.
        </motion.p>

        {/* Action Controls with Spring Feedback */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center justify-center w-full px-4"
        >
          <motion.div
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-[11px] sm:text-xs tracking-wider uppercase px-5 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#2E2C28] shadow-[0_4px_16px_rgba(23,22,20,0.12)] cursor-pointer text-center"
            >
              <Mail size={14} className="text-[#FBF9F5] shrink-0" />
              <span>ENGAGE AGENCY • TRANSMIT BRIEF</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
