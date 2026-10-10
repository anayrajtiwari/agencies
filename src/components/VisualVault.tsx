"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Layers } from "lucide-react";

const ecosystemWebsites = [
  {
    title: "Shri Hari Redirect Initiative",
    domain: "shri.org.in",
    url: "https://shri.org.in",
    category: "Conglomerate Architecture",
    metric: "Institutional Portal",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    desc: "The central multi-disciplinary institution uniting software systems, tangible physical computing (SHRI ELA), digital presence agency, and quantitative capital systems under sacred geometric harmony.",
    tags: ["Next.js", "Sacred Geometry", "Four Pillars", "Institutional"],
  },
  {
    title: "Anay Raj Tiwari — Journal",
    domain: "anay.shri.org.in",
    url: "https://anay.shri.org.in",
    category: "Founder Digital Garden",
    metric: "Thought Leadership",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "Personal digital garden, systems architecture reflections, open-source build logs, and human-centric computing philosophy of Anay Raj Tiwari, founder and systems architect of SHRI.",
    tags: ["Systems Architecture", "Personal Brand", "Philosophy", "Essays"],
  },
  {
    title: "Glyph-CLI Documentation",
    domain: "rzglyph.shri.org.in",
    url: "https://rzglyph.shri.org.in",
    category: "Developer Documentation Hub",
    metric: "<50ms V8 Compiles",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    desc: "Official interactive documentation manual and developer portal for Glyph-CLI (rz-glyph-cli), the minimal, zero-dependency static documentation compiler built in pure V8.",
    tags: ["Developer Tooling", "Zero-Dependency", "Fast V8", "Technical SEO"],
  },
];

export default function VisualVault() {
  return (
    <section id="vault" className="py-32 px-4 sm:px-8 relative bg-[#F5F2EA] border-t border-[#171614]/8">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-[#171614]/10 pb-10">
          <div>
            <span className="text-[#C25E38] font-sans text-xs font-semibold tracking-widest uppercase block mb-3">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08]">
              The Vault of <br />
              <span className="font-serif italic font-normal text-[#171614]">
                Ecosystem Architecture.
              </span>
            </h2>
          </div>

          <p className="text-[#6B665E] font-sans text-sm max-w-sm leading-relaxed">
            Live web platforms and portals engineered across the SHRI ecosystem demonstrating our uncompromising standard of speed, craft, and architectural authority.
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
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }}
              className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] overflow-hidden flex flex-col justify-between group shadow-[0_4px_20px_rgba(23,22,20,0.02)] hover:shadow-[0_20px_40px_rgba(23,22,20,0.06)] hover:border-[#171614]/20 transition-all duration-300 cursor-pointer"
            >
              {/* Image Preview with warm gradient overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-[#EAE5DA]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108 filter brightness-95 group-hover:brightness-100"
                  style={{ backgroundImage: `url('${site.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/75 via-[#171614]/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Floating domain pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[11px] font-sans text-[#171614] font-medium shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Globe size={11} className="text-[#C25E38]" />
                    <span>{site.domain}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[#FFFFFF]">
                  <span className="text-[10px] font-sans uppercase tracking-wider font-semibold opacity-90">
                    {site.category}
                  </span>
                  <span className="font-serif italic text-xs opacity-90">
                    {site.metric}
                  </span>
                </div>
              </div>

              {/* Textual Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-sans font-bold text-[#171614] tracking-tight mb-3 group-hover:text-[#C25E38] transition-colors duration-300">
                    {site.title}
                  </h3>

                  <p className="text-[#6B665E] text-xs leading-relaxed mb-6 font-normal">
                    {site.desc}
                  </p>
                </div>

                {/* Tags and Action */}
                <div className="pt-6 border-t border-[#171614]/8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {site.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-sans text-[#7A756D] bg-[#F7F5EE] border border-[#171614]/6 px-2.5 py-0.5 rounded-md group-hover:border-[#171614]/15 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#171614] group-hover:text-[#C25E38] transition-colors">
                    <span>Visit Live</span>
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
