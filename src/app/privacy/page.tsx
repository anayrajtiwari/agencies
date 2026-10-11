import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Server,
  EyeOff,
  Scale,
  FileCheck,
  Mail,
  BookOpen,
  ArrowUpRight,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Archival Data Governance Ledger | Agencies by SHRI",
  description:
    "Official data governance covenant for Agencies by SHRI (SHRI Organization). Governed under Indian law with ephemeral server telemetry, TLS-encrypted SMTP intake, zero tracking pixels, and absolute client data sovereignty.",
  keywords: [
    "Agencies by SHRI Privacy Policy",
    "Data Governance Ledger",
    "SHRI Organization",
    "Anay Raj Tiwari",
    "Zero Tracking Policy",
    "Ephemeral Server Telemetry",
  ],
  openGraph: {
    title: "Privacy Policy — Archival Data Governance Ledger | Agencies by SHRI",
    description:
      "Stateless data governance, TLS-encrypted intake dispatches, zero tracking pixels, and absolute privacy sovereignty under Agencies by SHRI.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#171614] selection:bg-[#E8E2D5] selection:text-[#171614] relative py-12 px-4 sm:px-8 dot-grid">
      {/* Background warm ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[440px] bg-[radial-gradient(ellipse_at_center,_#F0EBE1_0%,_transparent_70%)] rounded-full pointer-events-none"
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
              href="/terms"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#9E988D] hover:text-[#171614] transition-colors"
            >
              <BookOpen size={13} />
              <span>Terms of Service</span>
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
              LEGAL MANUSCRIPT // CODEX PRIVATIS
            </span>
            <span className="text-[11px] font-mono text-[#9E988D] tracking-wider uppercase">
              REF: SHRI-PRV-2026.10
            </span>
            <span className="text-[11px] font-mono text-[#9E988D] tracking-wider uppercase">
              JURISDICTION: REPUBLIC OF INDIA
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171614] leading-[1.08] mb-6">
            The Archival Privacy Ledger &amp; <br />
            <span className="font-serif italic font-normal text-[#171614]">
              Data Governance Covenant.
            </span>
          </h1>

          <p className="text-[#6B665E] text-base sm:text-lg font-normal max-w-3xl leading-relaxed mb-8">
            Agencies by SHRI operates under an uncompromising principle of digital sovereignty.
            We collect only what prospective partners deliberately share, persist zero marketing
            telemetry, deploy no behavioral tracking scripts, and treat every project intake brief
            as a strictly confidential strategic artifact.
          </p>

          {/* Archival Specification Ledger Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#171614]/10 shadow-[0_2px_12px_rgba(23,22,20,0.02)]">
            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Operating Entity
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#171614] block">
                Agencies by SHRI
              </span>
              <span className="text-[11px] text-[#6B665E]">SHRI Organization</span>
            </div>

            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Studio Leadership
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#171614] block">
                Anay Raj Tiwari
              </span>
              <span className="text-[11px] text-[#6B665E]">Founder &amp; Principal</span>
            </div>

            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Surveillance / Pixels
              </span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-[#C25E38] block">
                Absolute Zero (0%)
              </span>
              <span className="text-[11px] text-[#6B665E]">No Trackers or Ads</span>
            </div>

            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#9E988D] mb-1 font-semibold">
                Governing Law
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-[#171614] block">
                Republic of India
              </span>
              <span className="text-[11px] text-[#6B665E]">DPDPA / IT Act 2000</span>
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
                  Identity &amp; Institutional Authority
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">01 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Entity Architecture &amp; Studio Directorate
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                This Data Governance Ledger governs all digital transmissions and user interactions
                conducted through the web domain{" "}
                <strong className="text-[#171614] font-medium">agencies.shri.org.in</strong> and its
                associated web endpoints. The practice operates under the trade and institutional banner of{" "}
                <strong className="text-[#171614] font-medium">Agencies by SHRI</strong>, an autonomous
                strategic creative studio and digital growth division within the broader{" "}
                <a
                  href="https://shri.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171614] underline decoration-[#171614]/30 hover:decoration-[#C25E38] transition-colors"
                >
                  SHRI Organization
                </a>{" "}
                ecosystem.
              </p>
              <p>
                The studio’s executive direction, strategic advisory protocols, and engineering governance
                are led directly by{" "}
                <a
                  href="https://anay.shri.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171614] underline decoration-[#171614]/30 hover:decoration-[#C25E38] transition-colors font-medium"
                >
                  Anay Raj Tiwari
                </a>
                . Unlike high-volume consumer platforms, Agencies by SHRI is an intentional, boutique
                advisory practice working with a limited cohort of category architects. We do not operate
                mass-market tracking architectures or behavioral data pools.
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
                  Direct Ingestion Scope
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">02 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Data Collected via Direct Intake Submissions
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                We collect personal and corporate information only when you explicitly submit it to us
                via our dedicated intake terminal (<code className="text-xs bg-[#F7F5EE] px-1.5 py-0.5 rounded text-[#171614] border border-[#171614]/10">/api/contact</code>)
                or through direct bilateral correspondence. The intake data fields are strictly delimited to:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <span className="block text-xs font-mono text-[#C25E38] uppercase tracking-wider mb-1 font-semibold">
                  Field 01 // Identification
                </span>
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                  Full Legal or Representative Name
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  Provided to identify the founder, principal, or executive sponsor submitting the dossier.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <span className="block text-xs font-mono text-[#C25E38] uppercase tracking-wider mb-1 font-semibold">
                  Field 02 // Enterprise
                </span>
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                  Company or Entity Name
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  Identifies the corporate brand, venture, or institution seeking strategic creative engagement.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <span className="block text-xs font-mono text-[#C25E38] uppercase tracking-wider mb-1 font-semibold">
                  Field 03 // Routing
                </span>
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                  Official Email Address
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  Used solely for bilateral consultative dispatch, candidate qualification, and invitation scheduling.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <span className="block text-xs font-mono text-[#C25E38] uppercase tracking-wider mb-1 font-semibold">
                  Field 04 // Substance
                </span>
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                  Project Brief &amp; Strategic Objectives
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  The qualitative brief, scope outlines, target timeline, or deck link required to evaluate cohort fit.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBF9F5] border-l-4 border-l-[#C25E38] border border-[#171614]/8 text-xs text-[#6B665E] leading-relaxed">
              <strong className="text-[#171614] font-medium">Exclusion of Sensitive Ingestion:</strong>{" "}
              Agencies by SHRI never solicits or processes payment card details, government identification numbers,
              biometric data, or account credentials through our public web portal. Any financial transactions occur
              strictly via formal institutional banking channels under countersigned agreements.
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
                  Stateless Infrastructure
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">03 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Ephemeral Server Telemetry &amp; Threat Defense
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                To preserve system uptime and protect against automated denial-of-service (DDoS) attempts,
                malicious crawling, and automated spam, our application implements an ephemeral,
                in-memory rate limiting defense within the edge runtime:
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <Server size={20} className="text-[#C25E38] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                    In-Memory IP Rate Limiting (15-Minute Sliding Window)
                  </h3>
                  <p className="text-xs text-[#6B665E] leading-relaxed">
                    When a submission is sent to <code className="bg-[#FFFFFF] px-1 py-0.5 rounded text-[#171614]">/api/contact</code>,
                    the server inspects the connecting IP address via the standard <code className="bg-[#FFFFFF] px-1 py-0.5 rounded text-[#171614]">x-forwarded-for</code> header.
                    A maximum of five (5) dispatches per IP address is permitted within a 15-minute sliding window.
                  </p>
                  <p className="text-xs text-[#171614] font-medium mt-2">
                    ✓ Absolute Non-Persistence: This check is conducted purely in transient RAM (<code className="text-xs font-mono">Map&lt;string, number[]&gt;</code>).
                    No IP address is ever committed to a database, persisted to disk, or transferred to third-party logging providers.
                    Once the sliding window expires, all associated timestamps are immediately garbage-collected and destroyed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8">
                <ShieldCheck size={20} className="text-[#C25E38] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1">
                    Invisible Honeypot Bot Trap
                  </h3>
                  <p className="text-xs text-[#6B665E] leading-relaxed">
                    Our forms incorporate hidden trap fields inaccessible to human visitors. Automated web crawlers
                    and scrapers that populate this hidden field are silently absorbed by the server. Their payload
                    is rejected without SMTP transmission and without polluting operational systems.
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
                  Direct In-Transit Security
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">04 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Secure Dispatch via TLS-Encrypted SMTP
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                Conventional agencies frequently channel prospective client briefs through third-party marketing CRMs,
                unvetted form aggregators, or cloud webhook middlewares that sell or ingest proprietary briefs into AI models.
                Agencies by SHRI maintains a direct, air-gapped intake architecture:
              </p>

              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#171614]">
                  <Lock size={14} className="text-[#C25E38]" />
                  <span>DIRECT DISPATCH ARCHITECTURE:</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#6B665E] bg-[#FFFFFF] p-3 rounded-xl border border-[#171614]/8">
                  Client Intake Portal ➔ Serverless Node Edge ➔ TLS/SSL Handshake ➔ agenciesbyshri@gmail.com
                </div>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  Upon submission, the intake payload is packaged in memory and transferred over a TLS-encrypted
                  SMTP socket directly to our primary executive mailbox (<strong className="text-[#171614]">agenciesbyshri@gmail.com</strong>).
                  No intermediate SaaS CRM or relational store maintains an unencrypted record of your transmission.
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
                  Commercialization Prohibition
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">05 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Zero Tracking Pixels &amp; Zero Sale of Client Data
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                We believe executive decision-makers and high-conviction founders deserve complete digital dignity.
                Our digital presence operates under an immutable guarantee:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8 text-center sm:text-left">
                <EyeOff size={22} className="text-[#C25E38] mb-3" />
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1.5">
                  Zero Surveillance Pixels
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  No Meta / Facebook Pixels, Google Tag Manager beacons, TikTok tags, or LinkedIn insight trackers are injected into this manuscript.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8 text-center sm:text-left">
                <FileCheck size={22} className="text-[#C25E38] mb-3" />
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1.5">
                  Zero Advertising Cookies
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  We deploy zero cross-site profiling cookies, zero third-party advertising cookies, and zero behavioral session tracking scripts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F5EE] border border-[#171614]/8 text-center sm:text-left">
                <Scale size={22} className="text-[#C25E38] mb-3" />
                <h3 className="text-sm font-sans font-semibold text-[#171614] mb-1.5">
                  Zero Sale of Information
                </h3>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  We categorically do not sell, rent, lease, monetize, or trade your contact info or project dossiers to any commercial data brokers.
                </p>
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
                  Client Sovereignty
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">06 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Data Retention &amp; Sovereign Right to Erasure
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed mb-6">
              <p>
                We do not warehouse stale records. Intake dossiers are retained in our secure email records solely
                for the active duration of our evaluation cycle or during the lifetime of an executed client Statement
                of Work (SOW). If an inquiry does not materialize into a mutual partnership, the records are archived
                and routinely purged.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F5EE] border border-[#171614]/10 space-y-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#C25E38]" />
                <h3 className="text-sm font-sans font-semibold text-[#171614]">
                  How to Execute Your Right to Immediate Erasure (Purging)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed">
                You retain complete sovereign authority over your submissions. At any point, you may instruct us
                to permanently delete and purge all copies of your brief, company dossiers, and email threads from
                our leadership records.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-[#FFFFFF] rounded-xl border border-[#171614]/8">
                <div>
                  <span className="text-[11px] font-mono text-[#9E988D] uppercase block">
                    Direct Purge Request Channel
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#171614]">
                    Subject: [ERASURE REQUEST] Permanent Purge of Project Dossier
                  </span>
                </div>
                <a
                  href="mailto:agenciesbyshri@gmail.com?subject=%5BERASURE%20REQUEST%5D%20Permanent%20Purge%20of%20Project%20Dossier"
                  className="inline-flex items-center gap-1.5 bg-[#F7F5EE] hover:bg-[#EDE8DC] text-[#171614] px-3.5 py-1.5 rounded-full text-xs font-sans font-medium border border-[#171614]/10 transition-colors"
                >
                  <Mail size={12} className="text-[#C25E38]" />
                  <span>Request Erasure</span>
                </a>
              </div>
              <p className="text-xs text-[#9E988D]">
                Purge requests are acknowledged and permanently fulfilled within 72 business hours under direct leadership supervision.
              </p>
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
                  Jurisdictional Enactment
                </span>
              </div>
              <span className="text-xs font-mono text-[#9E988D]">07 / 07</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#171614] font-normal tracking-tight mb-4">
              Governing Law &amp; Legal Jurisdiction
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B665E] leading-relaxed">
              <p>
                This Data Governance Ledger, our digital practices, and all matters arising from or relating
                to your interaction with this platform shall be governed by, interpreted, and construed in
                accordance with the substantive laws of the{" "}
                <strong className="text-[#171614] font-medium">Republic of India</strong>, including the
                Digital Personal Data Protection Act (DPDPA), the Information Technology Act, 2000, and the
                rules framed thereunder.
              </p>
              <p>
                Any legal proceeding, controversy, or dispute arising out of or regarding this policy shall
                be brought exclusively before the courts of competent jurisdiction located in India.
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
                AUTHENTICATED ARCHIVAL LEDGER
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B665E] leading-relaxed max-w-xl">
              Ratified under the executive seal of Agencies by SHRI (SHRI Organization).
              For formal legal notices, data protection inquiries, or consultative clarification, reach our direct desk.
            </p>
            <div className="mt-3 text-xs font-mono text-[#9E988D]">
              DIRECTORATE: ANAY RAJ TIWARI • OFFICIAL DESK: AGENCIESBYSHRI@GMAIL.COM
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#EDE8DC] text-[#171614] font-sans font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full border border-[#171614]/10 transition-all"
            >
              <span>Examine Terms of Service</span>
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
            <Link href="/terms" className="hover:text-[#171614] transition-colors">
              TERMS OF SERVICE
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
