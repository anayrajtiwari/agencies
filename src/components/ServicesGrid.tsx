"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, Share2, Palette, ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "01",
    tag: "SEARCH AUTHORITY",
    title: "Deep Search & AI Retrieval (SEO)",
    desc: "We don't just optimize for Google; we index your entire brand into Perplexity, ChatGPT, Bing, and LLM search agents through IndexNow, Schema graph hierarchy, and llms.txt.",
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    deliverables: [
      "Instant IndexNow API Syndication",
      "LLM & AI Agent Semantic Graphs",
      "High-Resonance Technical SEO",
      "Zero-Bloat Schema Markup",
    ],
    metric: "+340% Impressions",
    color: "from-[#d8ff36]/15 via-transparent to-transparent",
    accent: "text-[#d8ff36]",
    icon: Search,
  },
  {
    id: "02",
    tag: "HIGH VOLTAGE DEV",
    title: "Bespoke Web Craft & Portals",
    desc: "Next.js 15, GPU-composited kinetic animations, sub-50ms render trees. Websites that look like museum-grade editorial magazines and convert like high-frequency terminals.",
    bgImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    deliverables: [
      "Next.js 15 & React 19 Architecture",
      "Tailwind & Custom Kinetic Shaders",
      "100/100 Lighthouse Performance",
      "Zero-Dependency Static Compilers",
    ],
    metric: "<50ms TTI",
    color: "from-[#8b5cf6]/15 via-transparent to-transparent",
    accent: "text-[#8b5cf6]",
    icon: Code2,
  },
  {
    id: "03",
    tag: "VIRAL SYNDICATE",
    title: "Social Media & Narrative Direction",
    desc: "End-to-end founder positioning, X/Twitter thread architectures, viral short-form editing, and high-status brand commentary. We turn quiet builders into industry icons.",
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    deliverables: [
      "High-Status Founder Positioning",
      "X/Twitter & LinkedIn Ghostwriting",
      "Short-Form Video Post-Production",
      "Organic Community Flywheels",
    ],
    metric: "0 to 100K Audience",
    color: "from-amber-500/15 via-transparent to-transparent",
    accent: "text-amber-400",
    icon: Share2,
  },
  {
    id: "04",
    tag: "AESTHETIC HEGEMONY",
    title: "Visual Identity & Design Systems",
    desc: "Tactile typographic systems, brutalist luxury art direction, motion design guidelines, and unmistakable aesthetic assets that distinguish you from Canva-templated rivals.",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    deliverables: [
      "Complete Brand Design Language",
      "Custom Typography & Iconography",
      "Tactile 3D & Collage Motion Kits",
      "High-Converting Sales Collateral",
    ],
    metric: "Unmistakable Moat",
    color: "from-rose-500/15 via-transparent to-transparent",
    accent: "text-rose-400",
    icon: Palette,
  },
];

export default function ServicesGrid({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  return (
    <section id="services" className="py-32 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#d8ff36]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-[#d8ff36] text-[10px] font-mono uppercase tracking-[0.4em] block mb-3">
              ✦ Weaponized Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
              Services Built For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ff36] to-white">
                Category Leaders
              </span>
            </h2>
          </div>

          <p className="text-gray-400 font-light text-xs sm:text-sm max-w-sm">
            Every engagement is bespoke. We don&apos;t run retainers with junior temps. You get raw engineering power and aggressive taste.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-[#12141d]/80 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden hover:border-[#d8ff36]/50 hover:bg-[#151824] transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Background image reveal on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none filter grayscale contrast-125"
                  style={{ backgroundImage: `url('${service.bgImage}')` }}
                />

                {/* Gradient tint */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-[#d8ff36] group-hover:border-[#d8ff36]/40 transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border border-white/15 text-gray-300 bg-white/5 uppercase">
                        {service.tag}
                      </span>
                    </div>

                    <span className="text-xl font-mono font-bold text-gray-700 group-hover:text-white/40 transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-4 group-hover:text-[#d8ff36] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <CheckCircle2 size={13} className="text-[#d8ff36] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d8ff36]">
                    {service.metric}
                  </span>

                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white/80 group-hover:text-[#d8ff36] transition-colors"
                  >
                    <span>Request Scope</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
