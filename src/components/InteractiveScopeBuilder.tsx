"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, Zap, Sparkles, ArrowRight } from "lucide-react";

interface DeliverableOption {
  id: string;
  label: string;
  category: string;
  points: number;
}

const options: DeliverableOption[] = [
  { id: "web", label: "Bespoke Next.js 15 Web Portal", category: "Code", points: 3 },
  { id: "seo", label: "Deep Search & AI / LLM Retrieval Index", category: "SEO", points: 2 },
  { id: "social", label: "Founder Personal Brand Architecture", category: "Social", points: 2 },
  { id: "video", label: "Viral Short-Form Content Engine", category: "Social", points: 3 },
  { id: "brand", label: "Complete Brutalist Brand Identity System", category: "Design", points: 3 },
  { id: "syndicate", label: "IndexNow Automated Search Pings", category: "SEO", points: 1 },
];

export default function InteractiveScopeBuilder({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(["web", "seo"]);
  const [timeline, setTimeline] = useState<"october" | "rush">("october");

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPoints = selectedIds.reduce((sum, id) => {
    const opt = options.find((o) => o.id === id);
    return sum + (opt?.points || 0);
  }, 0);

  const getTier = () => {
    if (totalPoints >= 9) return { label: "TOTAL MARKET TAKEOVER", weeks: "4 Sprints", color: "text-[#d8ff36]" };
    if (totalPoints >= 5) return { label: "CATEGORY HEGEMONY", weeks: "3 Sprints", color: "text-[#8b5cf6]" };
    return { label: "RADICAL LAUNCHPAD", weeks: "2 Sprints", color: "text-amber-400" };
  };

  const tier = getTier();

  return (
    <section id="estimator" className="py-32 px-4 sm:px-8 relative overflow-hidden dot-matrix-bg">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Container */}
        <div className="rounded-3xl border border-white/15 bg-[#12141d]/90 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d8ff36]/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5cf6]/10 blur-[100px] pointer-events-none rounded-full" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8ff36]/10 border border-[#d8ff36]/30 text-[#d8ff36] text-[10px] font-mono uppercase tracking-widest mb-3">
                <Calculator size={12} />
                <span>Interactive Tool</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Design Your Sprint Scope
              </h2>
            </div>
            
            <span className="text-xs font-mono uppercase text-gray-400">
              Batch: <strong className="text-[#d8ff36]">October 2026</strong>
            </span>
          </div>

          {/* Deliverables Picker */}
          <div className="mb-10">
            <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
              Step 1: Select Your Strategic Components
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {options.map((opt) => {
                const isSelected = selectedIds.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "border-[#d8ff36] bg-[#d8ff36]/10 text-white shadow-[0_0_20px_rgba(216,255,54,0.15)]"
                        : "border-white/5 bg-black/40 text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                          isSelected
                            ? "bg-[#d8ff36] border-[#d8ff36] text-black"
                            : "border-white/20 bg-black/50 text-transparent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-mono font-medium">{opt.label}</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 ml-2">
                      {opt.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Speed Selector */}
          <div className="mb-10">
            <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
              Step 2: Delivery Cadence
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setTimeline("october")}
                className={`p-4 rounded-2xl border text-center font-mono text-xs uppercase tracking-wider transition-all ${
                  timeline === "october"
                    ? "border-[#d8ff36] bg-[#d8ff36]/10 text-[#d8ff36]"
                    : "border-white/10 bg-black/40 text-gray-400 hover:border-white/20"
                }`}
              >
                <span className="block font-bold text-sm text-white mb-1">Standard Oct Batch</span>
                <span>Ships October 2026</span>
              </button>

              <button
                onClick={() => setTimeline("rush")}
                className={`p-4 rounded-2xl border text-center font-mono text-xs uppercase tracking-wider transition-all ${
                  timeline === "rush"
                    ? "border-[#8b5cf6] bg-[#8b5cf6]/10 text-[#8b5cf6]"
                    : "border-white/10 bg-black/40 text-gray-400 hover:border-white/20"
                }`}
              >
                <span className="block font-bold text-sm text-white mb-1">Accelerated Priority</span>
                <span>Immediate Architecture</span>
              </button>
            </div>
          </div>

          {/* Live Estimate Output Banner */}
          <div className="rounded-2xl bg-black/70 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">
                Estimated Sprint Architecture
              </div>
              <div className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${tier.color}`}>
                {tier.label}
              </div>
              <div className="text-xs font-mono text-gray-400 mt-1">
                {selectedIds.length} Pillars Selected • {tier.weeks} Deployment Window
              </div>
            </div>

            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d8ff36] text-black font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(216,255,54,0.3)]"
            >
              <span>Lock In This Scope</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
