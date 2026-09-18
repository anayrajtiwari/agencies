"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, Palette, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    tag: "SEARCH AUTHORITY",
    title: "Deep Search & AI Retrieval",
    desc: "We engineer presence for the modern retrieval era. Indexing your complete brand taxonomy across Google, Perplexity, ChatGPT, and AI search agents through IndexNow, structured schema graphs, and llms.txt.",
    deliverables: [
      "IndexNow Instant API Syndication",
      "LLM & AI Agent Semantic Knowledge Graphs",
      "High-Frequency Technical Search Architecture",
      "Structured JSON-LD Entity Hierarchy",
    ],
    metric: "+340% Search Visibility Surge",
    icon: Search,
  },
  {
    id: "02",
    tag: "NARRATIVE SYNDICATE",
    title: "Social Narrative & Direction",
    desc: "End-to-end founder narrative engineering, high-status X/Twitter thread architectures, short-form visual direction, and industry commentary. We transform technical builders into undeniable category icons.",
    deliverables: [
      "Executive Founder Thought Leadership",
      "X/Twitter & LinkedIn Narrative Ghostwriting",
      "Editorial Short-Form Post-Production",
      "Organic Community Flywheels",
    ],
    metric: "0 to 100K Audience Cultivation",
    icon: Share2,
  },
  {
    id: "03",
    tag: "VISUAL HEGEMONY",
    title: "Visual Identity & Systems",
    desc: "Bespoke typographic curation, editorial art direction, motion design guidelines, and unmistakable aesthetic collateral. We build digital identities that command immediate respect and eliminate competitive parity.",
    deliverables: [
      "Complete Brand Design Language & Book",
      "Custom Typographic Systems & Palette",
      "Tactile Motion & Presentation Kits",
      "High-Converting Pitch & Sales Collateral",
    ],
    metric: "Unmistakable Aesthetic Moat",
    icon: Palette,
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
              Specialized Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08]">
              Strategic craft, built for <br />
              <span className="font-serif italic font-normal text-[#171614]">
                category defining brands.
              </span>
            </h2>
          </div>

          <p className="text-[#6B665E] font-sans text-sm max-w-sm leading-relaxed">
            Every engagement is strictly bespoke. We partner with only ten high-conviction companies per cohort to guarantee direct founder attention and flawless execution.
          </p>
        </div>

        {/* 3-Column Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B665E] bg-[#F7F5EE] border border-[#171614]/8 px-3 py-1 rounded-full inline-block mb-4 group-hover:border-[#C25E38]/30 transition-colors duration-300">
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
