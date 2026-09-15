"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Mail, Send, ExternalLink, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const emailAddress = "agenciesbyshri@gmail.com";
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoUrl = () => {
    const encodedSubject = encodeURIComponent(subject ? `[SHRI Agencies Intake] ${subject}` : "[SHRI Agencies Intake] Project Inquiry");
    const fullBody = `Name/Company: ${name}\n\nProject Details:\n${message}\n\nSent via SHRI Agencies Web Portal`;
    return `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodeURIComponent(fullBody)}`;
  };

  const getGmailWebUrl = () => {
    const encodedSubject = encodeURIComponent(subject ? `[SHRI Agencies Intake] ${subject}` : "[SHRI Agencies Intake] Project Inquiry");
    const fullBody = `Name/Company: ${name}\n\nProject Details:\n${message}\n\nSent via SHRI Agencies Web Portal`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}&body=${encodeURIComponent(fullBody)}`;
  };

  return (
    <main className="min-h-screen bg-[#0a0b0f] text-[#f2f3f7] selection:bg-[#d8ff36] selection:text-black dot-matrix-bg relative py-12 px-4 sm:px-8">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d8ff36]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase font-bold tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portal</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d8ff36] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8ff36] bg-[#d8ff36]/10 px-3 py-1 rounded-full border border-[#d8ff36]/30">
              Direct Channel Active
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="text-[#d8ff36] text-[10px] font-sans font-bold uppercase tracking-[0.4em] block mb-3">
            Official Communication
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none mb-4">
            Direct Email Desk
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
            Send your project dossier, pitch deck, or requirements directly to our dedicated agency inbox. Messages submitted here are delivered straight to our primary Gmail app and reviewed promptly by the SHRI Agencies team.
          </p>
        </div>

        {/* Primary Email Banner Card */}
        <div className="rounded-3xl border border-[#d8ff36]/30 bg-[#12141d]/90 backdrop-blur-2xl p-8 sm:p-10 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#d8ff36]/10 border border-[#d8ff36]/30 flex items-center justify-center text-[#d8ff36] shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1">
                Official Agency Email
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white tracking-tight break-all select-all">
                {emailAddress}
              </span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#d8ff36] text-white hover:text-black font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full border border-white/20 hover:border-[#d8ff36] transition-all shrink-0"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Interactive Email Composer Form */}
        <div className="rounded-3xl border border-white/10 bg-[#12141d]/75 backdrop-blur-xl p-8 sm:p-10 mb-12 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-xl font-bold uppercase text-white tracking-tight">
                Compose Your Email
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Fill in the details below to generate a pre-formatted message for our inbox.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck size={14} className="text-[#d8ff36]" />
              <span>Direct to Gmail App</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                Your Name & Organization
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Satoshi Nakamoto (Founder, Stealth AI)"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. October 2026 Batch Application & Web Scope"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                Message & Overview
              </label>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline your project scope, timeline, goals, and links to your current product or repository..."
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors resize-none"
              />
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={getMailtoUrl()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d8ff36] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(216,255,54,0.3)]"
            >
              <Send size={14} />
              <span>Send via Email Client</span>
            </a>

            <a
              href={getGmailWebUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Open in Gmail Web</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Operating Principles Footer Bar */}
        <div className="text-center pt-8 border-t border-white/10 text-xs font-mono text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Inquiries to agenciesbyshri@gmail.com</span>
          <span>SHRI AGENCIES • DIVISION 03</span>
        </div>

      </div>
    </main>
  );
}
