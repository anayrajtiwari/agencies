"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Globe } from "lucide-react";

const ecosystemWebsites = [
  {
    title: "SHRI — Shri Hari Redirect Initiative",
    domain: "shri.org.in",
    url: "https://shri.org.in",
    category: "Conglomerate Portal",
    metric: "Parent Ecosystem",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    desc: "The central corporate and philosophical portal uniting software systems, tangible hardware gadgets (SHRI ELA), digital presence agency, and quantitative capital under sacred geometric harmony.",
    tags: ["Next.js", "Sacred Geometry", "Four Pillars", "Institutional"],
    accentColor: "border-[#d8ff36]/30 group-hover:border-[#d8ff36]",
    badgeBg: "bg-[#d8ff36]/10 text-[#d8ff36] border-[#d8ff36]/30",
  },
  {
    title: "Anay Raj Tiwari — Founder's Journal",
    domain: "anay.shri.org.in",
    url: "https://anay.shri.org.in",
    category: "Founder Digital Garden",
    metric: "Thought Leadership",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "Personal reflection hub, systems design essays, open-source build logs, and human-centric computing philosophy of Anay Raj Tiwari, founder and systems architect of SHRI.",
    tags: ["Systems Architecture", "Personal Brand", "Philosophy", "Essays"],
    accentColor: "border-[#8b5cf6]/30 group-hover:border-[#8b5cf6]",
    badgeBg: "bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/30",
  },
  {
    title: "Glyph-CLI — Documentation Engine",
    domain: "rzglyph.shri.org.in",
    url: "https://rzglyph.shri.org.in",
    category: "Developer Portal & Manual",
    metric: "<50ms V8 Compiles",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    desc: "Official interactive documentation portal and user manual for Glyph-CLI (rz-glyph-cli), the minimal, zero-dependency Markdown/MDX documentation compiler built in pure V8.",
    tags: ["Developer Tooling", "Zero-Dependency", "Fast V8", "Technical SEO"],
    accentColor: "border-amber-500/30 group-hover:border-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
];

export default function VisualVault() {
  return (
    <section id="vault" className="py-32 px-4 sm:px-8 relative overflow-hidden bg-[#0a0b0f]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#8b5cf6]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#d8ff36]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-[10px] font-sans font-bold uppercase tracking-widest mb-3">
              <Layers size={12} />
              <span>Ecosystem Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
              The Vault of Works
            </h2>
          </div>

          <p className="text-gray-300 font-normal text-xs sm:text-sm max-w-md">
            Live web platforms and portals engineered across the SHRI ecosystem demonstrating our commitment to craft, speed, and architectural authority.
          </p>
        </div>

        {/* 3 Meaningful Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystemWebsites.map((site, idx) => (
            <motion.a
              key={site.domain}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group relative rounded-3xl border ${site.accentColor} overflow-hidden bg-[#12141d]/85 flex flex-col justify-between transition-all duration-500 min-h-[480px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1.5`}
            >
              {/* Background Image with texture */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter brightness-40 contrast-125"
                style={{ backgroundImage: `url('${site.image}')` }}
              />

              {/* Gradient dark mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-[#0a0b0f]/85 to-black/50" />

              {/* Top Meta Bar */}
              <div className="relative z-10 p-7 sm:p-8 flex items-center justify-between">
                <span className={`text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${site.badgeBg}`}>
                  {site.category}
                </span>

                <span className="text-xs font-mono uppercase text-gray-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {site.metric}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-7 sm:p-8 pt-0">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d8ff36] mb-2 font-bold">
                  <Globe size={13} />
                  <span>{site.domain}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                  {site.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                  {site.desc}
                </p>

                {/* Tags & Action Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {site.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider text-white group-hover:text-[#d8ff36] transition-colors">
                    <span>Visit Portal</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
