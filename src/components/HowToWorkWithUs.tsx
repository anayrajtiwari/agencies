"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, SearchCheck, Mail, Rocket, ArrowRight, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Direct Project Brief",
    desc: "Submit your project goals, technical ambitions, and desired milestones directly to our official email desk (agenciesbyshri@gmail.com).",
    icon: FileText,
  },
  {
    step: "02",
    title: "SHRI Agencies Review",
    desc: "Every brief is thoroughly evaluated by the SHRI Agencies leadership. We review technical scope, founder conviction, and cohort compatibility.",
    icon: SearchCheck,
  },
  {
    step: "03",
    title: "Direct Response & Roadmap",
    desc: "Following review, we contact you directly at your email address to present our tailored architectural roadmap and schedule a discovery consultation.",
    icon: Mail,
  },
  {
    step: "04",
    title: "Sprint Kickoff & Deployment",
    desc: "Sprint agreements are finalized and execution begins immediately, locking in focused momentum toward our target October 2026 release.",
    icon: Rocket,
  },
];

export default function HowToWorkWithUs() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "agenciesbyshri@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="how-to-work" className="py-32 px-4 sm:px-8 relative bg-[#FBF9F5] border-t border-[#171614]/8">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-[#171614]/10 pb-10">
          <div>
            <span className="text-[#C25E38] font-sans text-xs font-semibold tracking-widest uppercase block mb-3">
              Process & Selection Criteria
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08]">
              How to Work <br />
              <span className="font-serif italic font-normal text-[#171614]">
                With Us.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[#6B665E] font-sans text-sm leading-relaxed mb-2">
              We operate exclusively on an intentional seasonal cohort model. Every submission is reviewed directly by the SHRI Agencies team prior to partnership.
            </p>
            <span className="text-xs font-mono text-[#171614] font-medium tracking-wide block">
              Criteria: Technical Ambition • Strategic Fit • October 2026 Target
            </span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,22,20,0.02)] hover:shadow-[0_16px_36px_rgba(23,22,20,0.05)] hover:border-[#171614]/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#171614]/6">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5EE] border border-[#171614]/8 flex items-center justify-center text-[#171614] group-hover:bg-[#171614] group-hover:text-[#FBF9F5] transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <span className="font-serif italic text-3xl text-[#9E988D] font-light select-none group-hover:text-[#C25E38] transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-[#171614] tracking-tight mb-3 group-hover:text-[#C25E38] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[#6B665E] text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#171614]/6 text-[10px] font-mono uppercase tracking-widest text-[#9E988D] group-hover:text-[#171614] transition-colors duration-300">
                  Stage {item.step} of 04
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* UNIFIED: Engage '26 & Direct Email Desk */}
        <motion.div
          id="engage"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-[#171614]/12 bg-[#F3EFE6] p-8 sm:p-12 shadow-[0_8px_32px_rgba(23,22,20,0.03)] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#171614]/10 text-[11px] font-sans font-medium text-[#171614] mb-4 shadow-sm">
                <Sparkles size={12} className="text-[#C25E38]" />
                <span>October 2026 Cohort • 10 Partners Only</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#171614] leading-[1.1] mb-4">
                Engage SHRI Agencies & <br />
                <span className="font-serif italic font-normal text-[#171614]">
                  Direct Email Correspondence.
                </span>
              </h3>

              <p className="text-[#6B665E] text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Every project brief is scrutinized directly by our principal architects. If you wish to correspond directly,{" "}
                <Link
                  href="/contact"
                  className="text-[#171614] font-semibold underline underline-offset-4 decoration-[#171614]/40 hover:decoration-[#171614] hover:text-[#C25E38] transition-colors"
                >
                  click here
                </Link>{" "}
                to visit our dedicated contact desk where our official email address (
                <strong className="text-[#171614] font-mono font-medium">agenciesbyshri@gmail.com</strong>
                ) is provided. You can write your email directly, and we will receive it immediately on our primary Gmail app.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[#2E2C28] transition-all shadow-sm w-full sm:w-auto"
                  >
                    <Mail size={14} className="text-[#FBF9F5]" />
                    <span>Click Here to Email Us</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Direct Email Address Card */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#171614]/10 rounded-2xl p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#9E988D] font-medium">
                    Official Agency Inbox
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#C25E38]">
                    <span className="w-2 h-2 rounded-full bg-[#C25E38] animate-pulse" />
                    Live Gmail Desk
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5EE] border border-[#171614]/8 font-mono text-sm sm:text-base text-[#171614] font-semibold select-all break-all mb-4 transition-colors hover:border-[#171614]/20">
                  {emailAddress}
                </div>

                <p className="text-[#6B665E] text-xs font-normal leading-relaxed mb-6">
                  Direct line to our leadership team. Send briefs, pitch decks, repository links, or timeline objectives.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[#171614]/8">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#F7F5EE] hover:bg-[#EDE8DC] text-[#171614] font-sans text-xs font-medium border border-[#171614]/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#C25E38]" />
                      <span className="font-semibold text-[#C25E38]">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${emailAddress}?subject=[SHRI Agencies] Project Brief`}
                  className="group inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-full bg-[#171614] hover:bg-[#2E2C28] text-[#FBF9F5] font-sans text-xs font-medium transition-colors"
                >
                  <span>Compose</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
