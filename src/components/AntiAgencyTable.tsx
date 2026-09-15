"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

const rows = [
  {
    feature: "Core Team & Architecture",
    oldAgency: "14 Account Managers + offshore interns with generic Figma kits",
    shriAgency: "Direct engineering & narrative design by principal founders",
    isWin: true,
  },
  {
    feature: "SEO & AI Indexing",
    oldAgency: "Keyword-stuffed low-effort blogs that trigger Google spam penalties",
    shriAgency: "Deep technical graphs, IndexNow API, llms.txt & LLM retrieval",
    isWin: true,
  },
  {
    feature: "Web Development Stack",
    oldAgency: "Bloated 80-plugin WordPress or clunky Webflow with slow load times",
    shriAgency: "Next.js 15, V8 zero-dependency builds, <50ms TTI and pure React 19",
    isWin: true,
  },
  {
    feature: "Timeline & Velocity",
    oldAgency: "Endless discovery calls, scope creep, and 9-month delivery delays",
    shriAgency: "Hard deadline batch deployment shipping October 2026",
    isWin: true,
  },
  {
    feature: "Pricing & Retainers",
    oldAgency: "Vague $15k/mo retainers with zero clear deliverable accountability",
    shriAgency: "Transparent scope-driven sprints with verified organic milestones",
    isWin: true,
  },
];

export default function AntiAgencyTable({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  return (
    <section id="why-us" className="py-32 px-4 sm:px-8 relative overflow-hidden bg-[#0e1017]">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-mono uppercase tracking-widest mb-3">
            <ShieldAlert size={12} />
            <span>The Anti-Agency Thesis</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Old Agency Playbooks Are Dead.
          </h2>
          <p className="text-gray-400 font-light text-sm max-w-xl mx-auto mt-4">
            We built SHRI Agencies because we got tired of watching visionary founders get ripped off by generic marketing agencies.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-white/10 bg-[#12141d]/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 p-6 bg-black/40 text-xs font-mono uppercase tracking-wider">
            <div className="md:col-span-4 text-gray-500">Differentiator</div>
            <div className="md:col-span-4 text-rose-400 mt-2 md:mt-0">Traditional Agency</div>
            <div className="md:col-span-4 text-[#d8ff36] mt-2 md:mt-0 flex items-center gap-1.5 font-bold">
              <Sparkles size={12} />
              <span>SHRI Agencies (Oct &apos;26)</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 hover:bg-white/[0.02] transition-colors items-start">
                <div className="md:col-span-4 font-mono text-xs font-semibold text-white">
                  {row.feature}
                </div>

                <div className="md:col-span-4 text-xs text-gray-400 flex items-start gap-2">
                  <X size={14} className="text-rose-400 shrink-0 mt-0.5" />
                  <span>{row.oldAgency}</span>
                </div>

                <div className="md:col-span-4 text-xs text-gray-200 flex items-start gap-2 font-medium">
                  <Check size={14} className="text-[#d8ff36] shrink-0 mt-0.5" />
                  <span>{row.shriAgency}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Action */}
          <div className="p-8 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-gray-400">
              Ready to leave the template era behind?
            </span>
            <button
              onClick={onOpenInquiry}
              className="bg-[#d8ff36] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95"
            >
              Lock In October Batch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
