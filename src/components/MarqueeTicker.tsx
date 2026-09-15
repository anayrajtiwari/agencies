"use client";

import React from "react";

const itemsRow1 = [
  "⚡ DEEP SEARCH SEO",
  "✦ AI RETRIEVAL INDEXING",
  "🔥 0 TO 100K NARRATIVE ARCHITECTURE",
  "🚀 BESPOKE NEXT.JS 15 BUILDS",
  "🎯 ZERO CANVA TEMPLATES",
  "🏴‍☠️ THE ANTI-AGENCY DOCTRINE",
  "✨ HIGH-VOLTAGE BRAND PRESENCE",
  "💎 LAUNCHING OCTOBER 2026",
];

const itemsRow2 = [
  "INDEXNOW INSTANT SYNDICATION",
  "VIRAL SHORT-FORM DIRECTION",
  "LLMS.TXT GENERATION",
  "KINETIC MOTION DESIGN",
  "ORGANIC SEARCH DOMINANCE",
  "FOUNDER PERSONAL BRANDING",
  "CONVERTING TECHNICAL ROADMAPS",
  "SANCTUARY SECURITY PROTOCOLS",
];

export default function MarqueeTicker() {
  return (
    <div className="py-6 overflow-hidden border-y border-white/10 bg-[#0e1017]/80 backdrop-blur-md relative z-20 select-none">
      
      {/* Row 1 - Forward */}
      <div className="animate-marquee whitespace-nowrap mb-3 flex items-center gap-8">
        {[...itemsRow1, ...itemsRow1].map((item, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white/80 flex items-center gap-3 font-semibold"
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
            className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#d8ff36]/70 flex items-center gap-3"
          >
            <span className="text-gray-600">✦</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
