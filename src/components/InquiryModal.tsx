"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function InquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Deep Search & AI Retrieval",
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
    "Deep Search & AI Retrieval",
    "Social Narrative Direction",
    "Visual Identity & Systems",
    "Complete Brand Architecture",
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
          className="fixed inset-0 bg-[#171614]/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-2xl rounded-3xl border border-[#171614]/15 bg-[#FBF9F5] p-6 sm:p-10 shadow-[0_20px_60px_rgba(23,22,20,0.15)] z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#171614]/5 text-[#6B665E] hover:text-[#171614] hover:bg-[#171614]/10 transition-colors"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAE0] border border-[#171614]/10 text-[#171614] text-[11px] font-sans font-medium mb-2.5">
                  <Sparkles size={12} className="text-[#C25E38]" />
                  <span>October 2026 Cohort Application</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#171614] leading-tight">
                  Engage SHRI Agencies
                </h3>
                <p className="text-[#6B665E] text-xs sm:text-sm font-normal mt-1">
                  Tell us what you are building. Every application is reviewed directly by our leadership team.
                </p>
              </div>

              {/* Service Pills */}
              <div className="mb-5">
                <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-2">
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
                        className={`text-xs font-sans px-3.5 py-1.5 rounded-full border transition-all ${
                          active
                            ? "bg-[#171614] text-[#FBF9F5] border-[#171614] font-medium"
                            : "bg-[#FFFFFF] text-[#6B665E] border-[#171614]/10 hover:border-[#171614]/30"
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
                <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-2">
                  Capital Allocation Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`text-xs font-sans py-2 rounded-xl border text-center transition-all ${
                        budget === b
                          ? "bg-[#171614] text-[#FBF9F5] border-[#171614] font-medium"
                          : "bg-[#FFFFFF] text-[#6B665E] border-[#171614]/10 hover:border-[#171614]/30"
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
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full bg-[#FFFFFF] border border-[#171614]/12 rounded-xl px-4 py-2.5 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="founder@company.com"
                    className="w-full bg-[#FFFFFF] border border-[#171614]/12 rounded-xl px-4 py-2.5 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                  Website, GitHub, or X / Twitter Handle
                </label>
                <input
                  type="text"
                  value={formData.websiteOrHandle}
                  onChange={(e) => setFormData({ ...formData, websiteOrHandle: e.target.value })}
                  placeholder="https://yourbrand.com or @handle"
                  className="w-full bg-[#FFFFFF] border border-[#171614]/12 rounded-xl px-4 py-2.5 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B665E] mb-1">
                  Project Vision & Strategic Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly describe what you want to achieve for our target October 2026 release..."
                  className="w-full bg-[#FFFFFF] border border-[#171614]/12 rounded-xl px-4 py-2.5 text-xs text-[#171614] placeholder-[#9E988D] focus:outline-none focus:border-[#171614] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#171614] text-[#FBF9F5] font-sans font-medium text-xs tracking-wider uppercase py-3.5 rounded-full hover:bg-[#2E2C28] transition-all shadow-sm active:scale-95"
              >
                <Send size={13} />
                <span>Submit Cohort Application</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#F3EFE6] border border-[#171614]/10 flex items-center justify-center mx-auto mb-5 text-[#C25E38]">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#171614] mb-3">
                Application Received.
              </h3>
              <p className="text-[#6B665E] text-xs sm:text-sm max-w-md mx-auto font-normal leading-relaxed mb-8">
                Your dossier for the <strong className="text-[#171614] font-medium">October 2026 Cohort</strong> has been queued. Anay Raj Tiwari or a principal architect will review your materials and contact you directly via your provided email address.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#171614] text-[#FBF9F5] font-sans text-xs font-medium uppercase tracking-wider px-8 py-3 rounded-full hover:bg-[#2E2C28] transition-all shadow-sm"
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
