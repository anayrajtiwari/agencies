"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, Mail, Send, ExternalLink, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const emailAddress = "agenciesbyshri@gmail.com";
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoUrl = () => {
    const encodedSubject = encodeURIComponent(subject ? `[Agencies by SHRI] ${subject}` : "[Agencies by SHRI] Project Inquiry");
    const fullBody = `Name/Company: ${name}\nEmail: ${email}\n\nProject Details:\n${message}\n\nSent via Agencies, by SHRI Web Portal`;
    return `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodeURIComponent(fullBody)}`;
  };

  const getGmailWebUrl = () => {
    const encodedSubject = encodeURIComponent(subject ? `[Agencies by SHRI] ${subject}` : "[Agencies by SHRI] Project Inquiry");
    const fullBody = `Name/Company: ${name}\nEmail: ${email}\n\nProject Details:\n${message}\n\nSent via Agencies, by SHRI Web Portal`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}&body=${encodeURIComponent(fullBody)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus("error");
      setStatusMessage("Please provide your name, contact email, and project overview.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subject || "October 2026 Cohort Application & Brief",
          message,
          honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Your brief has been delivered directly to the Agencies Directorate.");
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error || "Unable to send brief directly. Please use 'Open in Gmail Web' below."
        );
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Network error encountered. Please click 'Open in Gmail Web' below to dispatch immediately.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#171614] selection:bg-[#E8E2D5] selection:text-[#171614] relative py-12 px-4 sm:px-8 dot-grid">
      
      {/* Background paper texture & warm ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#F0EBE1] to-transparent blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto relative z-10"
      >
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#171614]/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase font-semibold tracking-wider text-[#6B665E] hover:text-[#171614] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Portal</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] animate-pulse" />
            <span className="text-[11px] font-sans font-medium text-[#171614] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#171614]/10 shadow-sm">
              Direct Desk Monitored
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="text-[#C25E38] font-sans text-xs font-semibold tracking-widest uppercase block mb-3">
            Official Direct Communication
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08] mb-4">
            Direct Email Desk & <br />
            <span className="font-serif italic font-normal text-[#171614]">
              Leadership Inbox.
            </span>
          </h1>
          <p className="text-[#6B665E] text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
            Send your project dossier, pitch deck, or requirements directly to our dedicated agency inbox. Messages submitted here are delivered straight to our primary Gmail app and reviewed promptly by the Agencies team under SHRI.
          </p>
        </div>

        {/* Primary Email Banner Card */}
        <div className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-10 mb-10 shadow-[0_4px_24px_rgba(23,22,20,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8 flex items-center justify-center text-[#171614] shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#9E988D] block mb-1 font-medium">
                Official Agency Email Address
              </span>
              <span className="text-xl sm:text-2xl font-sans font-semibold text-[#171614] tracking-tight break-all select-all">
                {emailAddress}
              </span>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-[#F7F5EE] hover:bg-[#EDE8DC] text-[#171614] font-sans font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full border border-[#171614]/10 transition-all shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#C25E38]" />
                <span className="text-[#C25E38]">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Address</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Interactive Email Composer Form */}
        <div className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-6 sm:p-10 mb-12 shadow-[0_4px_24px_rgba(23,22,20,0.03)]">
          
          {submitStatus === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#EDE2C5] border-2 border-[#8A241C]/40 flex items-center justify-center text-[#8A241C] shadow-inner mb-2">
                <Check size={28} />
              </div>
              <h2 className="text-2xl font-serif text-[#171614]">
                Brief Received &amp; Logged
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4D38] max-w-lg mx-auto leading-relaxed">
                Your dossier has been delivered directly to the Agencies Directorate inbox (<strong>{emailAddress}</strong>). Principal architects under SHRI will evaluate scope and reply directly to <strong>{email}</strong> within 24–48 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitStatus("idle");
                    setMessage("");
                    setSubject("");
                  }}
                  className="inline-flex items-center gap-2 bg-[#171614] text-[#FAF4E4] font-sans font-medium text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#2E2C28] transition-colors cursor-pointer"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#171614]/8">
                <div>
                  <h2 className="text-lg font-sans font-bold text-[#171614] tracking-tight">
                    Compose Your Direct Brief
                  </h2>
                  <p className="text-xs text-[#6B665E] mt-0.5">
                    Submit directly via our Gmail gateway or generate an instant client link.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans font-medium text-[#6B665E]">
                  <ShieldCheck size={14} className="text-[#C25E38]" />
                  <span>Direct to Gmail App</span>
                </div>
              </div>

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-[#FBF0EE] border border-[#8A241C]/30 text-xs text-[#8A241C] leading-relaxed">
                  <div className="font-semibold mb-1">Transmission Notice:</div>
                  <div>{statusMessage}</div>
                </div>
              )}

              {/* Hidden honeypot anti-bot trap */}
              <input
                type="text"
                name="user_verification_trap"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                      Your Name &amp; Organization <span className="text-[#8A241C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Satoshi Nakamoto (Stealth AI)"
                      className="w-full bg-[#F7F5EE] border border-[#171614]/10 rounded-xl px-4 py-3 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                      Your Contact Email Address <span className="text-[#8A241C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. satoshi@example.com"
                      className="w-full bg-[#F7F5EE] border border-[#171614]/10 rounded-xl px-4 py-3 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                    Subject / Objective
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. October 2026 Cohort Application &amp; Brief"
                    className="w-full bg-[#F7F5EE] border border-[#171614]/10 rounded-xl px-4 py-3 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                    Message &amp; Project Scope <span className="text-[#8A241C]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your project scope, timeline, goals, and links to your current product or repository..."
                    className="w-full bg-[#F7F5EE] border border-[#171614]/10 rounded-xl px-4 py-3 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Action Triggers */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#171614] hover:bg-[#2E2C28] text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase px-7 py-3.5 rounded-full transition-all shadow-sm cursor-pointer disabled:opacity-50 min-h-[44px]"
                >
                  <Send size={13} />
                  <span>{isSubmitting ? "Dispatching to Inbox..." : "Submit Direct Brief"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={getGmailWebUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#F7F5EE] border border-[#171614]/10 text-[#171614] font-sans font-semibold text-xs tracking-wider uppercase px-5 py-3.5 rounded-full hover:bg-[#EDE8DC] transition-all cursor-pointer min-h-[44px]"
                  >
                    <span>Open in Gmail Web</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#F7F5EE] border border-[#171614]/10 text-[#6B665E] hover:text-[#171614] font-sans font-medium text-xs tracking-wider uppercase px-5 py-3.5 rounded-full hover:bg-[#EDE8DC] transition-all cursor-pointer min-h-[44px]"
                  >
                    <span>Mail Client</span>
                  </a>
                </div>
              </div>
            </form>
          )}

        </div>

        {/* Operating Principles Footer Bar */}
        <div className="text-center pt-8 border-t border-[#171614]/10 text-xs font-sans text-[#9E988D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Official Inbox: agenciesbyshri@gmail.com</span>
          <span>AGENCIES • AN INITIATIVE BY SHRI • DIVISION 03</span>
        </div>

      </motion.div>
    </main>
  );
}
