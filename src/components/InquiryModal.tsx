"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle, Send, Flame } from "lucide-react";

export default function InquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Deep SEO & AI Retrieval",
  ]);
  const [budget, setBudget] = useState("$10k - $25k");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteOrHandle: "",
    details: "",
  });

  const availableServices = [
    "Deep SEO & AI Retrieval",
    "Bespoke Next.js Web Craft",
    "Founder Social Syndicate",
    "Full Brand Identity",
  ];

  const budgetOptions = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-[#12141d] p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#d8ff36]/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#8b5cf6]/15 blur-3xl pointer-events-none rounded-full" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d8ff36]/10 border border-[#d8ff36]/30 text-[#d8ff36] text-[10px] font-mono uppercase tracking-widest mb-2">
                  <Flame size={12} />
                  <span>October 2026 Batch Application</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Engage SHRI Agencies
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
                  Tell us what you&apos;re building. We take a strictly limited number of partners per batch.
                </p>
              </div>

              {/* Service Pills */}
              <div className="mb-5">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-gray-400 mb-2">
                  Required Capabilities
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const active = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all ${
                          active
                            ? "bg-[#d8ff36] text-black border-[#d8ff36] font-bold"
                            : "bg-black/50 text-gray-400 border-white/10 hover:border-white/25"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tier */}
              <div className="mb-5">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-gray-400 mb-2">
                  Capital Allocation (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`text-xs font-mono py-2 rounded-xl border text-center transition-all ${
                        budget === b
                          ? "bg-[#8b5cf6]/20 border-[#8b5cf6] text-[#8b5cf6] font-bold"
                          : "bg-black/50 text-gray-400 border-white/10 hover:border-white/25"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="founder@company.com"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                  Website, GitHub, or X / Twitter Handle
                </label>
                <input
                  type="text"
                  value={formData.websiteOrHandle}
                  onChange={(e) => setFormData({ ...formData, websiteOrHandle: e.target.value })}
                  placeholder="https://yourbrand.com or @handle"
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                  Project Vision / Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly describe your objectives and what you want to achieve for October 2026..."
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d8ff36] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#d8ff36] text-black font-black text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all transform active:scale-95 shadow-[0_0_25px_rgba(216,255,54,0.3)]"
              >
                <Send size={14} />
                <span>Submit October &apos;26 Application</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#d8ff36]/10 border border-[#d8ff36]/40 flex items-center justify-center mx-auto mb-6 text-[#d8ff36]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-2">
                Application Received.
              </h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto font-light leading-relaxed mb-8">
                Your dossier for the <strong className="text-white">October 2026 Batch</strong> has been queued. Anay Raj Tiwari or a principal architect will reach out within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Return to Portal
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
