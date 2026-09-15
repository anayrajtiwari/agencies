"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, SearchCheck, Mail, Rocket, ArrowRight, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Application Intake",
    desc: "Submit your project goals, current digital footprint, and targeted milestones through our structured intake form or direct dossier dispatch.",
    icon: FileText,
  },
  {
    step: "02",
    title: "SHRI Agencies Review",
    desc: "Every submission undergoes strict criteria evaluation by the SHRI Agencies team. We assess technical ambition, design compatibility, and alignment for our upcoming cohort.",
    icon: SearchCheck,
  },
  {
    step: "03",
    title: "Direct Email Outreach",
    desc: "Shortlisted applicants are contacted directly via the email address provided in their application. We outline our evaluation, tailored scope recommendations, and consultation scheduling.",
    icon: Mail,
  },
  {
    step: "04",
    title: "Sprint Kickoff & Deployment",
    desc: "Once mutual alignment is confirmed, sprint agreements are locked in and technical execution commences for high-voltage release in October 2026.",
    icon: Rocket,
  },
];

export default function HowToWorkWithUs({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = "agenciesbyshri@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="how-to-work" className="py-32 px-4 sm:px-8 relative overflow-hidden bg-[#0c0d13]">
      
      {/* Ambient background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d8ff36]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-[#d8ff36] text-[10px] font-sans font-bold uppercase tracking-[0.4em] block mb-3">
              Process & Criteria
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
              How to Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ff36] to-white">
                With Us
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-300 font-normal text-sm leading-relaxed mb-3">
              We operate on an intentional cohort basis. Every application is reviewed directly by the SHRI Agencies team to evaluate strategic criteria before accepting a project.
            </p>
            <span className="text-xs font-mono uppercase text-[#d8ff36] tracking-wider block">
              Criteria: Technical Ambition • Founder Conviction • October 2026 Delivery
            </span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-[#12141d]/85 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-[#d8ff36]/40 transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-white group-hover:text-[#d8ff36] group-hover:border-[#d8ff36]/40 transition-all">
                      <Icon size={20} />
                    </div>
                    <span className="text-2xl font-sans font-black text-gray-700 group-hover:text-white/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#d8ff36] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                  Phase {item.step} of 04
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* UNIFIED: Engage '26 & Email Contact Section */}
        <motion.div
          id="engage"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#d8ff36]/30 bg-gradient-to-br from-[#161a29] via-[#12141d] to-[#0a0b0f] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle Corner Glows */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#d8ff36]/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#8b5cf6]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
            
            {/* Left: Engage & Rationale */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d8ff36]/15 border border-[#d8ff36]/40 text-[#d8ff36] text-[10px] font-sans font-bold uppercase tracking-widest">
                  <Sparkles size={12} />
                  <span>October 2026 Batch • 10 Partners Only</span>
                </span>
                <span className="text-xs font-mono uppercase text-gray-400">
                  Direct Gmail App Channel
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none mb-4">
                Engage SHRI Agencies
              </h3>

              <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                All applications are reviewed directly by the SHRI Agencies team. If you prefer direct correspondence rather than filling forms,{" "}
                <Link
                  href="/contact"
                  className="text-[#d8ff36] font-bold underline underline-offset-4 decoration-[#d8ff36]/50 hover:decoration-[#d8ff36] hover:text-white transition-colors"
                >
                  click here
                </Link>{" "}
                to visit our official email desk where you can write directly to{" "}
                <strong className="text-white font-mono">agenciesbyshri@gmail.com</strong>.
                Your email will be received immediately on our Gmail app and evaluated within 24 hours.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#d8ff36] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(216,255,54,0.3)]"
                >
                  <Mail size={14} />
                  <span>Click Here to Email Directly</span>
                  <ArrowRight size={14} />
                </Link>

                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <span>Submit Intake Dossier</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Interactive Email Box Card */}
            <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    Official Inbox
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#d8ff36]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d8ff36] animate-pulse" />
                    Monitored
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-sm sm:text-base text-white font-bold select-all break-all mb-4">
                  {emailAddress}
                </div>

                <p className="text-gray-400 text-xs font-normal leading-relaxed mb-6">
                  Direct access to leadership. Send deck, repo links, and timeline requirements.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}?subject=[SHRI Agencies Intake] Project Brief`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#d8ff36]/10 hover:bg-[#d8ff36] text-[#d8ff36] hover:text-black font-sans text-xs font-bold uppercase tracking-wider border border-[#d8ff36]/30 transition-colors"
                >
                  <span>Compose</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
