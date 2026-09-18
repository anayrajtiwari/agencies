"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandLogoProps {
  variant?: "full" | "emblem" | "heading";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  variant = "full",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  if (variant === "emblem") {
    return (
      <div className={`relative rounded-full overflow-hidden border border-[#171614]/15 shadow-sm bg-[#F5F1E8] ${className}`}>
        <Image
          src="/logo.jpeg"
          alt="Agencies, by SHRI"
          width={48}
          height={48}
          className="w-full h-full object-cover"
          priority={priority}
        />
      </div>
    );
  }

  if (variant === "heading") {
    return (
      <div className={`flex flex-col items-center select-none text-center ${className}`}>
        {/* Top Sacred Diamond Accent */}
        <div className="flex items-center justify-end w-full max-w-[280px] sm:max-w-[420px] md:max-w-[540px] pr-6 sm:pr-10 mb-1">
          <div className="flex items-center gap-1.5 text-[#8A241C]">
            <span className="w-1 h-1 rounded-full bg-[#8A241C]" />
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#8A241C]"
            >
              <polygon points="12,2 22,12 12,22 2,12" />
            </svg>
            <span className="w-1 h-1 rounded-full bg-[#8A241C]" />
          </div>
        </div>

        {/* The Overline Bracket Bar */}
        <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[620px] flex items-center justify-between relative px-2">
          <div className="w-3 h-3 border-t-2 border-l-2 border-[#171614] rounded-tl-sm -mb-[2px]" />
          <div className="flex-1 h-[2px] bg-[#171614]" />
          <div className="w-3 h-3 border-t-2 border-r-2 border-[#171614] rounded-tr-sm -mb-[2px]" />
        </div>

        {/* Master Wordmark: AGENCIES */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-[#171614] tracking-[0.06em] leading-[0.95] py-2 sm:py-3">
          AGENCIES
        </h1>

        {/* Sub-Banner: •—— BY SHRI ——• */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2 text-[#8A241C]">
          {/* Left Floral Floret & Line */}
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#8A241C]" />
            <span className="text-[10px] sm:text-xs">✤</span>
            <div className="w-8 sm:w-16 h-[1.5px] bg-[#8A241C]" />
          </div>

          <span className="font-serif font-semibold text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#171614] uppercase">
            BY SHRI
          </span>

          {/* Right Floral Floret & Line */}
          <div className="flex items-center gap-1.5">
            <div className="w-8 sm:w-16 h-[1.5px] bg-[#8A241C]" />
            <span className="text-[10px] sm:text-xs">✤</span>
            <span className="w-1 h-1 rounded-full bg-[#8A241C]" />
          </div>
        </div>

        {/* Date Anchor: ESTD 2026 */}
        <span className="font-sans text-[9px] sm:text-[11px] font-medium tracking-[0.35em] text-[#6B665E] uppercase mt-2.5">
          ESTD 2026
        </span>
      </div>
    );
  }

  // Default "full" image logo display with authentic high-res emblem
  const sizeClasses = {
    sm: "w-28 sm:w-36",
    md: "w-44 sm:w-56",
    lg: "w-64 sm:w-80",
    hero: "w-72 sm:w-96 md:w-[460px] lg:w-[520px]",
  }[size];

  return (
    <div className={`relative ${sizeClasses} ${className}`}>
      <Image
        src="/logo.jpeg"
        alt="Agencies, by SHRI • ESTD 2026"
        width={1254}
        height={1254}
        priority={priority}
        className="w-full h-auto object-contain drop-shadow-[0_4px_24px_rgba(23,22,20,0.06)] rounded-2xl"
      />
    </div>
  );
}
