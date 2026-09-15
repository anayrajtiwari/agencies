"use client";

import React from "react";

const itemsRow1 = [
  "DEEP SEARCH SEO",
  "AI RETRIEVAL INDEXING",
  "NARRATIVE ARCHITECTURE",
  "BESPOKE NEXT.JS 15 BUILDS",
  "CUSTOM TAILORED CODE",
  "HOW TO WORK WITH US",
  "HIGH-VOLTAGE BRAND PRESENCE",
  "LAUNCHING OCTOBER 2026",
];

const itemsRow2 = [
  "INDEXNOW INSTANT SYNDICATION",
  "SHORT-FORM VIDEO DIRECTION",
  "LLMS.TXT GENERATION",
  "KINETIC MOTION DESIGN",
  "ORGANIC SEARCH DOMINANCE",
  "FOUNDER PERSONAL BRANDING",
  "TECHNICAL ROADMAP ARCHITECTURE",
  "REVIEW & EMAIL DIRECT OUTREACH",
];

export default function MarqueeTicker() {
  return (
    <div className="py-6 overflow-hidden border-y border-white/10 bg-[#0e1017]/80 backdrop-blur-md relative z-20 select-none">
      
      {/* Row 1 - Forward */}
      <div className="animate-marquee whitespace-nowrap mb-3 flex items-center gap-8">
        {[...itemsRow1, ...itemsRow1].map((item, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-white/90 flex items-center gap-3 font-semibold"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8ff36]" />
          </span>
        ))}
      </div>

      {/* Row 2 - Reverse */}
      <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-8">
        {[...itemsRow2, ...itemsRow2].map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#d8ff36]/80 flex items-center gap-3 font-medium"
          >
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
