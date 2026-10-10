"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3EFE6] border-t border-[#171614]/10 pt-20 pb-12 px-4 sm:px-8 relative overflow-hidden text-[#171614]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16 border-b border-[#171614]/10">
          <div>
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#9E988D] mb-4">
              Pillars
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-[#6B665E]">
              <a href="#services" className="hover:text-[#171614] transition-colors">Social Media Growth</a>
              <a href="#services" className="hover:text-[#171614] transition-colors">Deep Search SEO</a>
              <a href="#services" className="hover:text-[#171614] transition-colors">Digital Presence</a>
              <a href="#services" className="hover:text-[#171614] transition-colors">Bespoke Web Craft</a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#9E988D] mb-4">
              Engagement
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-[#6B665E]">
              <a href="#how-to-work" className="hover:text-[#171614] transition-colors">How to Work with Us</a>
              <a href="#engage" className="hover:text-[#171614] transition-colors">Engage Agency (October &apos;26)</a>
              <Link href="/contact" className="hover:text-[#171614] transition-colors flex items-center gap-1.5">
                <Mail size={12} className="text-[#C25E38]" />
                <span>Direct Email Desk</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#9E988D] mb-4">
              Ecosystem
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-sans text-[#6B665E]">
              <a href="https://shri.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#171614] transition-colors flex items-center gap-1">
                <span>SHRI Organization</span>
                <ArrowUpRight size={12} />
              </a>
              <a href="https://anay.shri.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#171614] transition-colors flex items-center gap-1">
                <span>Anay Raj Tiwari</span>
                <ArrowUpRight size={12} />
              </a>
              <a href="https://rzglyph.shri.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#171614] transition-colors flex items-center gap-1">
                <span>Glyph-CLI</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#9E988D] mb-4">
              Direct Contact
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans text-[#6B665E]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] animate-pulse" />
                <span className="text-[#171614] font-medium">Coming This October</span>
              </div>
              <a
                href="mailto:agenciesbyshri@gmail.com"
                className="font-sans font-medium text-xs text-[#171614] hover:text-[#C25E38] transition-colors"
              >
                agenciesbyshri@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#9E988D] gap-4">
          <div>
            © {new Date().getFullYear()} AGENCIES • STRATEGIC CREATIVE STUDIO • BY SHRI
          </div>
          <div className="flex items-center gap-6 font-medium">
            <span>STRATEGIC PRACTICE</span>
            <span>HUMAN CRAFT</span>
            <span>HIGH CONVICTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
