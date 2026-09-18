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

        {/* Master Brand Heading (Styled exactly after authentic logo img.jpeg) */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col items-center select-none text-center mb-10 w-full"
        >
          {/* Top Diamond Accent */}
          <div className="flex items-center justify-end w-full max-w-[280px] sm:max-w-[420px] md:max-w-[560px] pr-4 sm:pr-8 mb-1">
            <div className="flex items-center gap-1.5 text-[#8A241C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A241C]" />
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#8A241C]">
                <polygon points="12,2 22,12 12,22 2,12" />
              </svg>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A241C]" />
            </div>
          </div>

          {/* Top Bracket Bar with Curled Corner Terminations */}
          <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[620px] flex items-center justify-between relative px-2">
            <div className="w-3.5 h-3.5 border-t-2 border-l-2 border-[#171614] rounded-tl-sm -mb-[2px]" />
            <div className="flex-1 h-[2px] bg-[#171614]" />
            <div className="w-3.5 h-3.5 border-t-2 border-r-2 border-[#171614] rounded-tr-sm -mb-[2px]" />
          </div>

          {/* Master Wordmark: AGENCIES */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-serif font-bold text-[#171614] tracking-[0.06em] leading-[0.95] py-2 sm:py-3">
            AGENCIES
          </h1>

          {/* Sub-Banner: •—— BY SHRI ——• */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2 text-[#8A241C]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A241C]" />
              <span className="text-xs sm:text-sm">✤</span>
              <div className="w-8 sm:w-16 h-[1.5px] bg-[#8A241C]" />
            </div>

            <span className="font-serif font-semibold text-xs sm:text-sm md:text-base tracking-[0.3em] text-[#171614] uppercase">
              BY SHRI
            </span>

            <div className="flex items-center gap-1.5">
              <div className="w-8 sm:w-16 h-[1.5px] bg-[#8A241C]" />
              <span className="text-xs sm:text-sm">✤</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A241C]" />
            </div>
          </div>

          {/* Date Anchor: ESTD 2026 */}
          <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-[#6B665E] uppercase mt-3">
            ESTD 2026
          </span>
        </motion.div>

        {/* Editorial Sub-Headline */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#171614] max-w-2xl mb-4 leading-tight"
        >
          We cultivate brands that become{" "}
          <span className="font-serif italic font-normal underline decoration-[#171614]/20 underline-offset-8">
            impossible to ignore.
          </span>
        </motion.h2>

        {/* Articulate Editorial Subtext */}
        <motion.p
          variants={fadeUpVariants}
          className="text-sm sm:text-base md:text-lg text-[#6B665E] font-sans font-normal max-w-xl leading-relaxed mb-12"
        >
          A strategic creative practice by SHRI. Cultivating category-defining presence through deep search & AI retrieval, narrative direction, and bespoke identity systems.
        </motion.p>

        {/* Action Controls with Spring Feedback */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#2E2C28] shadow-[0_4px_16px_rgba(23,22,20,0.12)] cursor-pointer"
            >
              <Mail size={14} className="text-[#FBF9F5]" />
              <span>Direct Email Desk</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#F3EFE6] text-[#171614] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full border border-[#171614]/10 transition-colors shadow-sm"
            >
              <span>Explore Capabilities</span>
              <ArrowRight size={14} className="text-[#6B665E]" />
            </a>
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
