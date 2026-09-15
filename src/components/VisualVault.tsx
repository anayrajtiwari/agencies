"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Eye, Sparkles } from "lucide-react";

const caseStudies = [
  {
    title: "Project Obsidian: Developer Portal",
    client: "Local Compiler Infrastructure",
    category: "Web Engineering & SEO",
    metric: "40ms Page Load • 100/100 Lighthouse",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    desc: "Engineered a zero-bloat static documentation compiler ecosystem with client-side fuzzy search, dark aesthetic layouts, and Instant IndexNow ping syndication.",
    tags: ["Next.js 15", "V8 Engine", "Deep SEO", "Tailwind"],
  },
  {
    title: "Quantum Gadgets: Physical Computing",
    client: "Hardware Research Initiative",
    category: "Brand Positioning & Launch",
    metric: "120K Impressions in 48h",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    desc: "Bridged tangible microcontrollers and electronic gadgetry with high-status digital storytelling, aesthetic teardown imagery, and cult hardware community building.",
    tags: ["Hardware ELA", "Narrative Design", "Video Direction"],
  },
  {
    title: "Aura Capital: Algorithmic Systems",
    client: "Quantitative Capital Lab",
    category: "Visual Identity & Motion",
    metric: "$14M Pipeline Exposure",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    desc: "Crafted a brutalist luxury institutional brand identity with bespoke mathematical diagrams, custom typography, and high-frequency portal UX.",
    tags: ["Brand System", "Typography", "Quantitative UX"],
  },
  {
    title: "Oni-Ofix: User-Space Package Manager",
    client: "Developer Tooling Suite",
    category: "Growth & Product Marketing",
    metric: "Top 5 Trending on Dev Feeds",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    desc: "Positioned a rootless Linux & Android installer as the sanctuary alternative to bloated traditional package ecosystems through sharp, provocative copywriting.",
    tags: ["Technical Ghostwriting", "X/Twitter Loops", "Authority SEO"],
  },
];

export default function VisualVault({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="vault" className="py-32 px-4 sm:px-8 relative overflow-hidden bg-[#0a0b0f]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#8b5cf6]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-[10px] font-mono uppercase tracking-widest mb-3">
              <Layers size={12} />
              <span>Aesthetic Proof</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
              The Vault of Works
            </h2>
          </div>

          <p className="text-gray-400 font-light text-xs sm:text-sm max-w-md">
            A glimpse into the visual direction and architectural craft deployed across our high-conviction ecosystem.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className="group relative rounded-3xl border border-white/10 overflow-hidden bg-[#12141d]/70 flex flex-col justify-between hover:border-[#d8ff36]/40 transition-all duration-500 min-h-[460px]"
            >
              {/* Background Image with tactile texture and dark gradient overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter brightness-50 contrast-125"
                style={{ backgroundImage: `url('${study.image}')` }}
              />

              {/* Gradient dark mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-[#0a0b0f]/80 to-black/40" />

              {/* Top Meta Bar */}
              <div className="relative z-10 p-8 sm:p-10 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[#d8ff36]">
                  {study.category}
                </span>

                <span className="text-xs font-mono uppercase text-gray-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {study.metric}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-8 sm:p-10 pt-0">
                <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
                  {study.client}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-3 group-hover:text-[#d8ff36] transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {study.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#d8ff36] hover:text-white transition-colors"
                  >
                    <span>Engage</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
