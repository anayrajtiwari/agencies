"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, Compass, Code2, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    tag: "END-TO-END MANAGEMENT",
    title: "Social Media Growth",
    desc: "Strategic content direction, community management, and high-resonance narratives across Instagram, X (Twitter), and YouTube.",
    deliverables: [
      "Strategic Content Direction",
      "Community Management & Moderation",
      "High-Resonance Cross-Platform Narratives",
      "Instagram, X (Twitter) & YouTube Growth",
    ],
    metric: "End-to-End Execution",
    icon: Share2,
  },
  {
    id: "02",
    tag: "SEARCH AUTHORITY",
    title: "Deep Search SEO",
    desc: "Technical SEO, IndexNow instant search syndication, structured Schema markup, LLM / AI retrieval indexing (llms.txt), and ranking authority.",
    deliverables: [
      "Technical SEO & Schema Markup",
      "IndexNow Instant Search Syndication",
      "LLM / AI Retrieval Indexing (llms.txt)",
      "Organic Search Ranking Authority",
    ],
    metric: "+340% Search Visibility Surge",
    icon: Search,
  },
  {
    id: "03",
    tag: "BRAND POSITIONING",
    title: "Digital Presence",
    desc: "Transforming obscure brands into authoritative industry leaders through cohesive aesthetic identity and cross-platform presence.",
    deliverables: [
      "Cohesive Aesthetic Identity Systems",
      "Cross-Platform Presence & Touchpoints",
      "Industry Authority Architecture",
      "Category Leadership & Narrative Moat",
    ],
    metric: "Category-Defining Authority",
    icon: Compass,
  },
  {
    id: "04",
    tag: "WEB ENGINEERING",
    title: "Bespoke Web Craft",
    desc: "High-performance Next.js web portals, interactive animations, zero-dependency tooling, and bespoke digital experiences.",
    deliverables: [
      "High-Performance Next.js Web Portals",
      "Tactile & Interactive Framer Animations",
      "Zero-Dependency Tooling & CLI Utilities",
      "Bespoke Digital & Visual Experiences",
    ],
    metric: "<50ms Fluid Performance",
    icon: Code2,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 px-4 sm:px-8 relative bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-[#171614]/10 pb-10">
          <div>
            <span className="text-[#C25E38] font-sans text-xs font-semibold tracking-widest uppercase block mb-3">
              Strategic Creative Studio • Coming This October
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08]">
              Strategic craft, built for <br />
              <span className="font-serif italic font-normal text-[#171614]">
                category defining brands.
              </span>
            </h2>
          </div>

          <p className="text-[#6B665E] font-sans text-sm max-w-sm leading-relaxed">
            Assisting brands, founders, and organizations in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and clear digital positioning.
          </p>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
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
                className="group rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,22,20,0.02)] hover:shadow-[0_20px_40px_rgba(23,22,20,0.06)] hover:border-[#171614]/20 transition-all duration-300"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#171614]/6">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="w-12 h-12 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8 flex items-center justify-center text-[#171614] group-hover:bg-[#171614] group-hover:text-[#FBF9F5] group-hover:border-[#171614] transition-all duration-300"
                    >
                      <Icon size={20} />
                    </motion.div>

                    <span className="font-serif text-3xl text-[#9E988D] italic font-light select-none group-hover:text-[#C25E38] transition-colors duration-300">
                      {service.id}
                    </span>
                  </div>

                  <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#6B665E] bg-[#F7F5EE] border border-[#171614]/8 px-3 py-1 rounded-full inline-block mb-4 group-hover:border-[#C25E38]/30 transition-colors duration-300">
                    {service.tag}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#171614] tracking-tight mb-4 group-hover:text-[#C25E38] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#6B665E] text-xs sm:text-sm font-normal leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-10 pt-6 border-t border-[#171614]/6">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-[#4A4742] group/item">
                        <div className="w-4 h-4 rounded-full bg-[#F3EFE6] group-hover/item:bg-[#171614] group-hover/item:text-[#FBF9F5] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200">
                          <Check size={10} className="text-[#171614] group-hover/item:text-[#FBF9F5]" />
                        </div>
                        <span className="leading-snug group-hover/item:text-[#171614] transition-colors duration-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-6 border-t border-[#171614]/8 flex items-center justify-between">
                  <span className="font-serif italic text-xs text-[#171614] font-medium">
                    {service.metric}
                  </span>

                  <Link
                    href="/contact"
                    className="group/btn inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#171614] hover:text-[#C25E38] transition-colors cursor-pointer"
                  >
                    <span>Direct Brief</span>
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
