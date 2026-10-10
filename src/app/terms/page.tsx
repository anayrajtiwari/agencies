import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ShieldAlert,
  Scale,
  Sparkles,
  ArrowUpRight,
  Code2,
  FileCheck2,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Archival Covenant of Engagement | Agencies by SHRI",
  description:
    "Official Terms of Service governing access to agencies.shri.org.in. Codifying non-binding project intake, mutual confidentiality, intellectual property sovereignty, and Indian legal jurisdiction under Agencies by SHRI.",
  keywords: [
    "Agencies by SHRI Terms of Service",
    "Archival Covenant of Engagement",
    "SHRI Organization",
    "Anay Raj Tiwari",
    "Statement of Work Protocol",
    "Intellectual Property Sovereignty",
  ],
  openGraph: {
    title: "Terms of Service — Archival Covenant of Engagement | Agencies by SHRI",
    description:
      "Operational covenants, non-binding intake protocols, intellectual property boundaries, and acceptable use terms under Agencies by SHRI.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#171614] selection:bg-[#E8E2D5] selection:text-[#171614] relative py-12 px-4 sm:px-8 dot-grid">
      {/* Background warm ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[440px] bg-gradient-to-b from-[#F0EBE1] to-transparent blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top Navigation */}
        <nav
          aria-label="Legal Ledger Navigation"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14 pb-6 border-b border-[#171614]/10"
        >
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase font-semibold tracking-wider text-[#6B665E] hover:text-[#171614] transition-colors group"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1 text-[#C25E38]"
              />
              <span>← Return to Ledger</span>
            </Link>

            <span className="hidden sm:inline text-[#171614]/20">•</span>

            <Link
              href="/privacy"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#9E988D] hover:text-[#171614] transition-colors"
            >
              <FileText size={13} />
              <span>Privacy Policy</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:agenciesbyshri@gmail.com"
              className="inline-flex items-center gap-2.5 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#171614]/10 shadow-[0_1px_4px_rgba(23,22,20,0.03)] hover:border-[#C25E38]/40 transition-all text-xs font-sans text-[#171614] group"
              title="Official Agency Desk"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] animate-pulse" />
              <span className="text-[#6B665E] hidden sm:inline">Official Directorate:</span>
              <span className="font-medium group-hover:text-[#C25E38] transition-colors">
                agenciesbyshri@gmail.com
              </span>
            </a>
          </div>
        </nav>

        {/* Editorial Manuscript Header */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[#C25E38] font-sans text-[11px] font-semibold tracking-widest uppercase bg-[#C25E38]/10 px-2.5 py-1 rounded-sm border border-[#C25E38]/20">
              LEGAL MANUSCRIPT // CODEX CONVENIENS
            </span>
            <span className="text-[11px] font-mono text-[#9E988D] tracking-wider uppercase">
              REF: SHRI-TRM-2026.10
            </span>
            <span className="text-[11px] font-mono text-[#9E988D] tracking-wider uppercase">
              JURISDICTION: REPUBLIC OF INDIA
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08] mb-6">
            The Archival Terms of Service &amp; <br />
            <span className="font-serif italic font-normal text-[#171614]">
              Covenant of Engagement.
            </span>
          </h1>

          <p className="text-[#6B665E] text-base sm:text-lg font-normal max-w-3xl leading-relaxed mb-8">
            This manuscript sets forth the binding covenants, intellectual property rights, non-binding
            intake conditions, and acceptable use boundaries governing all access to the Agencies by SHRI
            digital portal and our strategic consultative interactions.
          </p>

          {/* Archival Specification Ledger Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#171614]/10 shadow-[0_2px_12px_rgba(23,22,20,0.02)]">
            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Domain Scope
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#171614] block">
                agencies.shri.org.in
              </span>
              <span className="text-[11px] text-[#6B665E]">Web &amp; Intake Portals</span>
            </div>

            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Intake Status
              </span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-[#C25E38] block">
                Strictly Non-Binding
              </span>
              <span className="text-[11px] text-[#6B665E]">Requires Signed SOW</span>
            </div>

            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Client Ownership
              </span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-[#171614] block">
                100% Retained
              </span>
              <span className="text-[11px] text-[#6B665E]">Submitted Materials</span>
            </div>

            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Legal Jurisdiction
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#171614] block">
                Republic of India
              </span>
              <span className="text-[11px] text-[#6B665E]">Exclusive Courts</span>
            </div>
          </div>
        </header>

        {/* Numbered Ledger Sections */}
        <div className="space-y-8">
          {/* SECTION 01 */}
          <section
            id="section-01"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 01
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  Scope of Covenant
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">01 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Scope of Agreement &amp; Platform Governance
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern access to, browsing of, and transmissions conducted through{" "}
                <strong className="text-[#171614] font-medium">agencies.shri.org.in</strong>, its interactive web manuscripts,
                intake endpoints (<code className="text-xs bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#171614] border border-[#171614]/10">/api/contact</code>),
                and all official communication channels maintained by{" "}
                <strong className="text-[#171614] font-medium">Agencies by SHRI</strong>, an autonomous strategic studio unit
                of the{" "}
                <a
                  href="https://shri.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171614] underline decoration-[#171614]/30 hover:decoration-[#C25E38] transition-colors"
                >
                  SHRI Organization
                </a>
                , led by{" "}
                <a
                  href="https://anay.shri.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171614] underline decoration-[#171614]/30 hover:decoration-[#C25E38] transition-colors font-medium"
                >
                  Anay Raj Tiwari
                </a>
                .
              </p>
              <p>
                By navigating this portal, interacting with our digital ledger components, or dispatching candidate briefs,
                you explicitly agree to comply with and be bound by these Terms and our companion{" "}
                <Link href="/privacy" className="text-[#171614] underline decoration-[#171614]/30 hover:decoration-[#C25E38]">
                  Privacy Policy
                </Link>
                . If you disagree with any portion of these provisions, you must immediately terminate your session.
              </p>
            </div>
          </section>

          {/* SECTION 02 */}
          <section
            id="section-02"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 02
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  Engagement Protocols
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">02 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Non-Binding Project Intake &amp; SOW Precondition
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                The digital intake terminal on this website allows prospective founders, category architects,
                and institutions to submit candidate briefs for evaluation. It is strictly understood and agreed:
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#C25E38]" />
                  <h3 className="text-sm font-sans font-semibold text-[#171614]">
                    Zero Retainer Incurrence via Brief Submission
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                  Submitting a project overview, timeline, or strategic objective through <code className="bg-[#FFFFFF] px-1 py-0.5 rounded text-[#171614]">/api/contact</code> or direct email does{" "}
                  <strong className="text-[#171614]">NOT</strong> constitute a binding client relationship, agency retainer,
                  legal representation, or contractual obligation on the part of Agencies by SHRI.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck2 size={16} className="text-[#C25E38]" />
                  <h3 className="text-sm font-sans font-semibold text-[#171614]">
                    Condition Precedent: Executed Statement of Work (SOW)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                  No agency execution, strategic consulting, SEO deployment, or custom web engineering work commences
                  until a tailored, formal <strong className="text-[#171614]">Statement of Work (SOW)</strong> and Master
                  Services Agreement have been bilaterally drafted, reviewed, and countersigned by both authorized parties.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <div className="flex items-center gap-2 mb-2">
                  <Scale size={16} className="text-[#C25E38]" />
                  <h3 className="text-sm font-sans font-semibold text-[#171614]">
                    Cohort Discretion &amp; Capacity Caps
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                  Agencies by SHRI maintains an intentional, capacity-capped engagement structure (e.g., strictly ten
                  partners per cohort cycle). We reserve the unreserved right to accept, decline, or postpone any inquiry
                  at our sole discretion based on alignment, bandwidth, and strategic feasibility.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 03 */}
          <section
            id="section-03"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 03
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  Bilateral Sacred Trust
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">03 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Mutual Confidentiality &amp; Non-Disclosure
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                We operate with the highest regard for proprietary institutional assets. All prospective briefs,
                brand blueprints, market strategies, pitch drafts, and correspondence transmitted through our
                portal or direct email desk are held in strict bilateral confidence:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock size={15} className="text-[#C25E38]" />
                    <span className="text-xs font-sans font-semibold text-[#171614] uppercase tracking-wider">
                      Agency Duty of Confidence
                    </span>
                  </div>
                  <p className="text-xs text-[#6B665E] leading-relaxed">
                    Agencies by SHRI will not disseminate, leak, disclose, or publish any candidate briefs or private corporate
                    roadmaps to external third parties without your prior written authorization.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock size={15} className="text-[#C25E38]" />
                    <span className="text-xs font-sans font-semibold text-[#171614] uppercase tracking-wider">
                      Client Reciprocal Duty
                    </span>
                  </div>
                  <p className="text-xs text-[#6B665E] leading-relaxed">
                    Prospective partners agree that proprietary frameworks, audit findings, pricing schedules, and strategic
                    recommendations presented by Agencies by SHRI during intake dialogues shall remain confidential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 04 */}
          <section
            id="section-04"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 04
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  IP Sovereignty &amp; Division
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">04 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Intellectual Property Rights &amp; Sovereignty
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                We believe in pristine intellectual property hygiene. Ownership is separated strictly as follows:
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#F7F5EE] border-l-4 border-l-[#171614] border border-[#171614]/8">
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                  1. Absolute Client Sovereignty (100% Retained)
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                  Prospective and active clients retain unequivocal 100% ownership over all pre-existing trade secrets,
                  brand marks, logos, trademarked names, raw marketing dossiers, and materials provided to Agencies by SHRI.
                  Nothing within this website or the intake transmission transfers any ownership of client property to the agency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F5EE] border-l-4 border-l-[#C25E38] border border-[#171614]/8">
                <div className="flex items-center gap-2 mb-1">
                  <Code2 size={16} className="text-[#C25E38]" />
                  <h3 className="text-sm font-sans font-semibold text-[#171614]">
                    2. Agency Proprietary Systems &amp; AgedBookFolio Architecture
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                  Agencies by SHRI, the SHRI Organization, and founder Anay Raj Tiwari retain exclusive intellectual property,
                  copyright, and proprietary ownership over all agency methodologies, brand marks, and interactive web manuscript
                  source code—including the proprietary <strong className="text-[#171614]">AgedBookFolio</strong> multi-page archival
                  book simulation engine, tactile pagination mechanics, and typographic architecture deployed on this domain.
                </p>
                <p className="text-xs text-[#9E988D] mt-2 font-mono">
                  PROHIBITION: No mechanical reproduction, unauthorized cloning, commercial redistribution, or reverse engineering of the AgedBookFolio engine is permitted without written license.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 05 */}
          <section
            id="section-05"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 05
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  Integrity Standards
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">05 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Acceptable Use &amp; Infrastructure Defense
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                Access to our digital ledger is predicated upon dignified, ethical use. You covenant that you will not:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6B665E]">
              <div className="p-3.5 rounded-xl bg-[#F7F5EE] border border-[#171614]/8 flex items-start gap-2.5">
                <ShieldAlert size={16} className="text-[#C25E38] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#171614]">Automated Attacks:</strong> Launch or facilitate DDoS attacks, vulnerability fuzzing, or automated request floods against our infrastructure.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F5EE] border border-[#171614]/8 flex items-start gap-2.5">
                <ShieldAlert size={16} className="text-[#C25E38] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#171614]">Rate-Limit Circumvention:</strong> Attempt to bypass our 15-minute / 5-submission IP rate limiting through proxy rotation, header forgery, or bot nets.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F5EE] border border-[#171614]/8 flex items-start gap-2.5">
                <ShieldAlert size={16} className="text-[#C25E38] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#171614]">Aggressive Scraping:</strong> Execute web scraping, content extraction spiders, or automated ingestion into commercial AI training sets without prior permission.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F5EE] border border-[#171614]/8 flex items-start gap-2.5">
                <ShieldAlert size={16} className="text-[#C25E38] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#171614]">Spam &amp; Deception:</strong> Submit deceptive project inquiries, unsolicited commercial advertisements, phishing payloads, or attempt honeypot bypasses.
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 06 */}
          <section
            id="section-06"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 06
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  Liability Boundaries
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">06 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Limitation of Liability &amp; &ldquo;As-Is&rdquo; Warranty Disclaimer
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                This digital presence, including the AgedBookFolio interactive manuscript, is provided on an{" "}
                <strong className="text-[#171614]">&ldquo;as-is&rdquo;</strong> and{" "}
                <strong className="text-[#171614]">&ldquo;as-available&rdquo;</strong> basis without warranty of any kind,
                whether express, implied, statutory, or otherwise.
              </p>
              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/10 text-xs sm:text-sm text-[#6B665E] space-y-2 leading-relaxed">
                <p>
                  To the maximum extent permitted by applicable law, Agencies by SHRI, the SHRI Organization,
                  and founder Anay Raj Tiwari disclaim all warranties—including implied warranties of merchantability,
                  fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  In no event shall Agencies by SHRI or its leadership be liable for any indirect, special, incidental,
                  consequential, or punitive damages (including loss of profits, business opportunity, goodwill, or data)
                  arising out of or in connection with your access to, use of, or inability to access this portal or its intake forms.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 07 */}
          <section
            id="section-07"
            className="rounded-3xl border border-[#171614]/10 bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_4px_24px_rgba(23,22,20,0.02)] relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#171614]/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C25E38] uppercase">
                  LEDGER ENTRY 07
                </span>
                <span className="text-xs text-[#9E988D]">//</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E988D] font-medium">
                  Jurisdiction &amp; Venue
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">07 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Governing Jurisdiction: Republic of India
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                These Terms of Service and any dispute, controversy, or claim arising out of or in connection
                with this website or candidate intake submissions shall be governed by, interpreted, and enforced
                in accordance with the substantive laws of the{" "}
                <strong className="text-[#171614] font-medium">Republic of India</strong>, without regard to its conflict
                of law principles.
              </p>
              <p>
                Any legal suit, action, or proceeding arising under these Terms shall be instituted exclusively in the courts
                of competent jurisdiction in India. Both parties irrevocably consent and submit to the exclusive personal
                jurisdiction of such courts.
              </p>
            </div>
          </section>
        </div>

        {/* Archival Directorate Sign-Off Box */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#F7F5EE] border border-[#171614]/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles size={16} className="text-[#C25E38]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171614]">
                AUTHENTICATED ARCHIVAL COVENANT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed max-w-xl">
              Codified under the executive seal of Agencies by SHRI (SHRI Organization).
              For legal inquiries, partnership contracts, or formal Statement of Work requests, contact our leadership desk.
            </p>
            <div className="mt-3 text-xs font-mono text-[#9E988D]">
              DIRECTORATE: ANAY RAJ TIWARI • OFFICIAL DESK: AGENCIESBYSHRI@GMAIL.COM
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#EDE8DC] text-[#171614] font-sans font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full border border-[#171614]/10 transition-all"
            >
              <span>Examine Privacy Policy</span>
              <ArrowUpRight size={14} className="text-[#C25E38]" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#6B665E] hover:text-[#171614] transition-colors py-2 px-3"
            >
              <span>Return to Ledger</span>
            </Link>
          </div>
        </div>

        {/* Bottom Micro Ledger */}
        <footer className="mt-12 pt-6 border-t border-[#171614]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#9E988D] gap-4">
          <div>
            © {new Date().getFullYear()} AGENCIES • STRATEGIC CREATIVE STUDIO • BY SHRI
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-[#171614] transition-colors">
              HOME LEDGER
            </Link>
            <span className="text-[#171614]/10">•</span>
            <Link href="/privacy" className="hover:text-[#171614] transition-colors">
              PRIVACY POLICY
            </Link>
            <span className="text-[#171614]/10">•</span>
            <Link href="/contact" className="hover:text-[#171614] transition-colors">
              DIRECT DESK
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
