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

const wordMaskVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
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

export default function Hero({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-8 pt-36 pb-24 overflow-hidden bg-[#FBF9F5] dot-grid">
      
      {/* ── Ambient Warm Lighting & Subtle Texture ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft warm sunbeam / radial glow with slow breathing float */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[950px] h-[520px] bg-gradient-to-b from-[#F0EBE1] via-[#F7F3EB]/70 to-transparent blur-[130px] rounded-full"
        />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#EFE9DD]/50 blur-[140px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-[#F3EFE6]/60 blur-[130px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
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
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#171614]/10 shadow-[0_2px_12px_rgba(23,22,20,0.04)] mb-8 select-none"
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

        {/* Master Editorial Headline with Masked Word Reveals */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-[#171614] leading-[1.08] max-w-4xl mb-8">
          <span className="inline-block overflow-hidden py-1">
            <motion.span variants={wordMaskVariants} className="inline-block">
              We cultivate brands
            </motion.span>
          </span>{" "}
          <span className="inline-block overflow-hidden py-1">
            <motion.span variants={wordMaskVariants} className="inline-block">
              that become
            </motion.span>
          </span>{" "}
          <span className="inline-block overflow-hidden py-1">
            <motion.span
              variants={wordMaskVariants}
              className="font-serif italic font-normal text-[#171614] underline decoration-[#171614]/20 underline-offset-8 inline-block"
            >
              impossible to ignore.
            </motion.span>
          </span>
        </h1>

        {/* Articulate Editorial Subtext */}
        <motion.p
          variants={fadeUpVariants}
          className="text-base sm:text-lg md:text-xl text-[#6B665E] font-sans font-normal max-w-2xl leading-relaxed mb-12"
        >
          A strategic creative practice by SHRI. We engineer search authority, narrative direction, and visual identity systems for high-conviction founders and category-defining teams.
        </motion.p>

        {/* Action Controls with Spring Feedback */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            onClick={onOpenInquiry}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#2E2C28] shadow-[0_4px_16px_rgba(23,22,20,0.12)] cursor-pointer"
          >
            <span>Apply for October Cohort</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#F3EFE6] text-[#171614] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full border border-[#171614]/10 transition-colors shadow-sm"
            >
              <Mail size={14} className="text-[#6B665E]" />
              <span>Direct Email Desk</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Editorial Metrics Strip with Staggered Entrance */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-20 pt-10 border-t border-[#171614]/10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-left"
        >
          {[
            { metric: "+340%", label: "Organic search visibility surge" },
            { metric: "10", label: "Partners per seasonal cohort" },
            { metric: "0", label: "Templates or outsourced fluff" },
            { metric: "Oct '26", label: "Target deployment milestone" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 group cursor-default"
            >
              <span className="text-3xl sm:text-4xl font-serif font-normal text-[#171614] tracking-tight block group-hover:text-[#C25E38] transition-colors duration-300">
                {item.metric}
              </span>
              <span className="text-xs font-sans text-[#6B665E] block leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
