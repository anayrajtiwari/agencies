"use client";

import React from "react";

const itemsRow1 = [
  { text: "Strategic Creative Studio", italic: false },
  { text: "Coming This October", italic: true },
  { text: "End-to-End Management", italic: false },
  { text: "Social Media Growth", italic: true },
  { text: "Search Authority", italic: false },
  { text: "Deep Search SEO", italic: true },
  { text: "Brand Positioning", italic: false },
  { text: "Digital Presence", italic: true },
  { text: "Web Engineering", italic: false },
  { text: "Bespoke Web Craft", italic: true },
];

export default function MarqueeTicker() {
  return (
    <div className="py-5 overflow-hidden border-y border-[#171614]/10 bg-[#F5F1E8]/70 backdrop-blur-sm relative z-20 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {[...itemsRow1, ...itemsRow1, ...itemsRow1].map((item, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm tracking-wide text-[#4A4742] flex items-center gap-6"
          >
            <span className={item.italic ? "font-serif italic text-[#171614] text-base" : "font-sans font-medium uppercase text-xs tracking-widest text-[#6B665E]"}>
              {item.text}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#171614]/25" />
          </span>
        ))}
      </div>
    </div>
  );
}
