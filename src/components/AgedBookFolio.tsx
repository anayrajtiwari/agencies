"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Globe,
  Share2,
  Search,
  Compass,
  Code2,
  FileText,
  SearchCheck,
  Layers,
  BookOpen,
  Feather,
} from "lucide-react";
import Link from "next/link";

interface FolioMetadata {
  id: string;
  roman: string;
  title: string;
  subtitle: string;
  salute: string;
}

const folios: FolioMetadata[] = [
  {
    id: "services",
    roman: "I",
    title: "Specialized Capabilities & Strategic Scope",
    subtitle: "Four disciplines of strategic presence engineered under direct leadership.",
    salute: "To Founders, Category Architects & Discerning Partners:",
  },
  {
    id: "vault",
    roman: "II",
    title: "The Vault of Ecosystem Architecture",
    subtitle: "Selected public works and live infrastructure engineered across SHRI.",
    salute: "To Observers of Systems, Craft & Performance:",
  },
  {
    id: "how-to-work",
    roman: "III",
    title: "Methodology & Cohort Selection",
    subtitle: "Intentional seasonal engagement model. Limited strictly to ten partners.",
    salute: "Concerning Cohort Intake, Criteria & Execution Protocols:",
  },
  {
    id: "engage",
    roman: "IV",
    title: "Official Direct Correspondence",
    subtitle: "Direct communication with principal leadership via official agency inbox.",
    salute: "Direct Inquiries & Project Brief Submissions:",
  },
];

const servicesData = [
  {
    id: "01",
    tag: "END-TO-END MANAGEMENT",
    title: "Social Media Growth",
    desc: "Strategic content direction, community management, and high-resonance narratives across Instagram, X (Twitter), and YouTube.",
    deliverables: ["Content Direction", "Community Moderation", "Narrative Architecture", "Multi-Platform Reach"],
    metric: "High-Resonance Reach",
    icon: Share2,
  },
  {
    id: "02",
    tag: "SEARCH AUTHORITY",
    title: "Deep Search SEO",
    desc: "Technical SEO, IndexNow instant search syndication, structured Schema markup, LLM / AI retrieval indexing (llms.txt), and ranking authority.",
    deliverables: ["Technical Schema", "IndexNow Instant Sync", "LLM Semantic Indexing", "Organic Authority"],
    metric: "+340% Search Visibility",
    icon: Search,
  },
  {
    id: "03",
    tag: "BRAND POSITIONING",
    title: "Digital Presence",
    desc: "Transforming obscure brands into authoritative industry leaders through cohesive aesthetic identity and cross-platform presence.",
    deliverables: ["Aesthetic Systems", "Cross-Platform Presence", "Authority Architecture", "Category Moat"],
    metric: "Category Moat",
    icon: Compass,
  },
  {
    id: "04",
    tag: "WEB ENGINEERING",
    title: "Bespoke Web Craft",
    desc: "High-performance Next.js web portals, interactive animations, zero-dependency tooling, and bespoke digital experiences.",
    deliverables: ["Next.js High-Performance", "Interactive Motion", "Zero-Dependency Tooling", "Bespoke Portals"],
    metric: "<50ms Fluid Performance",
    icon: Code2,
  },
];

const vaultData = [
  {
    title: "Shri Hari Redirect Initiative",
    domain: "shri.org.in",
    url: "https://shri.org.in",
    category: "Conglomerate Architecture",
    metric: "Institutional Portal",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    desc: "The central multi-disciplinary institution uniting software systems, tangible physical computing (SHRI ELA), digital presence agency, and quantitative capital systems.",
    tags: ["Next.js", "Sacred Geometry", "Four Pillars"],
  },
  {
    title: "Anay Raj Tiwari — Journal",
    domain: "anay.shri.org.in",
    url: "https://anay.shri.org.in",
    category: "Founder Digital Garden",
    metric: "Thought Leadership",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "Personal digital garden, systems architecture reflections, open-source build logs, and human-centric computing philosophy of Anay Raj Tiwari, founder and systems architect.",
    tags: ["Systems Architecture", "Personal Brand", "Philosophy"],
  },
  {
    title: "Glyph-CLI Documentation",
    domain: "rzglyph.shri.org.in",
    url: "https://rzglyph.shri.org.in",
    category: "Developer Documentation Hub",
    metric: "<50ms V8 Compiles",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    desc: "Official interactive documentation manual and developer portal for Glyph-CLI (rz-glyph-cli), the minimal, zero-dependency static documentation compiler built in pure V8.",
    tags: ["Developer Tooling", "Zero-Dependency", "Fast V8"],
  },
];

const stepsData = [
  {
    step: "01",
    title: "Direct Project Brief",
    desc: "Submit your project goals, technical ambitions, and desired milestones directly to our official email desk (agenciesbyshri@gmail.com).",
    icon: FileText,
  },
  {
    step: "02",
    title: "Agencies Leadership Review",
    desc: "Every brief is thoroughly evaluated by the Agencies leadership under SHRI. We review technical scope, founder conviction, and cohort compatibility.",
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
    desc: "Sprint agreements are finalized and execution begins immediately, locking in focused momentum toward immediate sprint deployment.",
    icon: Layers,
  },
];

// Complex jagged torn paper polygon with realistic rips, notches, and deckled fiber contours
const tornPaperPolygon =
  "polygon(0.0% 1.64%, 3.33% 1.19%, 6.67% 1.03%, 10.0% 2.08%, 13.33% 0.81%, 16.67% 1.46%, 20.0% 1.6%, 23.33% 1.7%, 26.67% 0.85%, 30.0% 1.95%, 33.33% 1.12%, 36.67% 1.88%, 40.0% 0.92%, 43.33% 1.75%, 46.67% 1.14%, 50.0% 2.21%, 53.33% 0.78%, 56.67% 1.65%, 60.0% 1.2%, 63.33% 2.02%, 66.67% 0.91%, 70.0% 1.54%, 73.33% 1.18%, 76.67% 2.14%, 80.0% 0.87%, 83.33% 1.72%, 86.67% 1.05%, 90.0% 2.31%, 93.33% 0.89%, 96.67% 1.68%, 100.0% 1.35%, 98.6% 3.33%, 99.1% 6.67%, 97.9% 10.0%, 99.2% 13.33%, 98.4% 16.67%, 99.1% 20.0%, 98.2% 23.33%, 99.3% 26.67%, 98.1% 30.0%, 99.2% 33.33%, 98.3% 36.67%, 99.0% 40.0%, 98.1% 43.33%, 99.3% 46.67%, 98.2% 50.0%, 99.1% 53.33%, 98.0% 56.67%, 99.2% 60.0%, 98.3% 63.33%, 99.1% 66.67%, 98.2% 70.0%, 99.3% 73.33%, 98.0% 76.67%, 99.2% 80.0%, 98.4% 83.33%, 99.1% 86.67%, 98.2% 90.0%, 99.3% 93.33%, 98.1% 96.67%, 98.9% 100.0%, 96.67% 98.8%, 93.33% 99.1%, 90.0% 97.9%, 86.67% 99.2%, 83.33% 98.3%, 80.0% 99.1%, 76.67% 98.0%, 73.33% 99.2%, 70.0% 98.4%, 66.67% 99.1%, 63.33% 98.2%, 60.0% 99.3%, 56.67% 98.1%, 53.33% 99.2%, 50.0% 98.3%, 46.67% 99.0%, 43.33% 98.1%, 40.0% 99.3%, 36.67% 98.2%, 33.33% 99.1%, 30.0% 98.0%, 26.67% 99.2%, 23.33% 98.3%, 20.0% 99.1%, 16.67% 98.2%, 13.33% 99.3%, 10.0% 98.0%, 6.67% 99.2%, 3.33% 98.4%, 0.0% 98.9%, 1.8% 96.67%, 0.9% 93.33%, 2.1% 90.0%, 0.8% 86.67%, 1.7% 83.33%, 1.1% 80.0%, 2.0% 76.67%, 0.9% 73.33%, 1.6% 70.0%, 1.2% 66.67%, 2.1% 63.33%, 0.8% 60.0%, 1.7% 56.67%, 1.1% 53.33%, 2.2% 50.0%, 0.9% 46.67%, 1.8% 43.33%, 1.2% 40.0%, 2.0% 36.67%, 0.8% 33.33%, 1.7% 30.0%, 1.1% 26.67%, 2.1% 23.33%, 0.9% 20.0%, 1.6% 16.67%, 1.2% 13.33%, 2.1% 10.0%, 0.8% 6.67%, 1.8% 3.33%)";

// Direction-aware 3D leaf turning physics:
// Forward (direction = 1): exits rotating to -80° towards the spine, enters rotating down from +80°
// Backward (direction = -1): exits peeling to +80°, enters rotating over from -80° at the spine
const leafVariants: Variants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
    x: direction > 0 ? 12 : -12,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.62,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
    x: direction > 0 ? -12 : 12,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function AgedBookFolio() {
  const [currentFolio, setCurrentFolio] = useState(0);
  const [direction, setDirection] = useState(1);
  const [copied, setCopied] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [mobileLeafView, setMobileLeafView] = useState<"letter" | "plate">("letter");
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const emailAddress = "agenciesbyshri@gmail.com";
  
  // Audio state refs for bulletproof mobile and desktop playback
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const isAudioLoadingRef = useRef<boolean>(false);
  const htmlAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize or resume audio context upon user interaction
  const initAudio = () => {
    if (typeof window === "undefined") return;

    try {
      // 1. Initialize HTML5 Audio fallback
      if (!htmlAudioRef.current && typeof Audio !== "undefined") {
        const audio = new Audio("/page-flip.mp3");
        audio.preload = "auto";
        audio.volume = 0.65;
        htmlAudioRef.current = audio;
      }

      // 2. Initialize Web Audio API for instantaneous mobile playback
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (AudioCtxClass) {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtxClass();
        }
        if (audioContextRef.current.state === "suspended") {
          audioContextRef.current.resume();
        }

        if (!audioBufferRef.current && !isAudioLoadingRef.current) {
          isAudioLoadingRef.current = true;
          fetch("/page-flip.mp3")
            .then((res) => res.arrayBuffer())
            .then((arrayBuffer) => {
              if (audioContextRef.current) {
                return audioContextRef.current.decodeAudioData(arrayBuffer);
              }
              return null;
            })
            .then((decodedBuffer) => {
              if (decodedBuffer) {
                audioBufferRef.current = decodedBuffer;
              }
              isAudioLoadingRef.current = false;
            })
            .catch(() => {
              isAudioLoadingRef.current = false;
            });
        }
      }
    } catch {
      // Safe no-op
    }
  };

  // Pre-load audio buffer and setup listeners on mount
  useEffect(() => {
    initAudio();

    // Global first user interaction listener to unlock audio engine immediately on mobile
    const unlockAudio = () => {
      initAudio();
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("touchend", unlockAudio);
      window.removeEventListener("click", unlockAudio);
    };

    window.addEventListener("touchstart", unlockAudio, { passive: true });
    window.addEventListener("touchend", unlockAudio, { passive: true });
    window.addEventListener("click", unlockAudio, { passive: true });

    return () => {
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("touchend", unlockAudio);
      window.removeEventListener("click", unlockAudio);
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        try {
          audioContextRef.current.close();
        } catch {
          // Ignore
        }
      }
    };
  }, []);

  // Play page-turn sound synchronized with leaf turn
  const playPageTurnSound = () => {
    if (typeof window === "undefined") return;

    // Trigger audio init if not already loaded
    initAudio();

    // Strategy 1: Web Audio API (Zero latency, perfectly reliable on mobile after user interaction)
    try {
      const ctx = audioContextRef.current;
      const buffer = audioBufferRef.current;
      if (ctx && buffer) {
        if (ctx.state === "suspended") {
          ctx.resume();
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.65;
        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(0);
        return;
      }
    } catch {
      // Fall through to HTML5 audio
    }

    // Strategy 2: Direct HTML5 Audio playback on user gesture
    try {
      const sound = new Audio("/page-flip.mp3");
      sound.volume = 0.65;
      const playPromise = sound.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (htmlAudioRef.current) {
            try {
              htmlAudioRef.current.currentTime = 0;
              htmlAudioRef.current.play().catch(() => {});
            } catch {
              // Ignore
            }
          }
        });
      }
    } catch {
      // Safe fallback
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const turnToFolio = (idx: number) => {
    if (idx === currentFolio || isFlipping) return;
    playPageTurnSound();
    setDirection(idx > currentFolio ? 1 : -1);
    setIsFlipping(true);
    setCurrentFolio(idx);
    setTimeout(() => setIsFlipping(false), 650);
  };

  const nextFolio = () => {
    if (isFlipping) return;
    playPageTurnSound();
    setDirection(1);
    setIsFlipping(true);
    setCurrentFolio((prev) => (prev < folios.length - 1 ? prev + 1 : 0));
    setTimeout(() => setIsFlipping(false), 650);
  };

  const prevFolio = () => {
    if (isFlipping) return;
    playPageTurnSound();
    setDirection(-1);
    setIsFlipping(true);
    setCurrentFolio((prev) => (prev > 0 ? prev - 1 : folios.length - 1));
    setTimeout(() => setIsFlipping(false), 650);
  };

  // Touch swipe gestures for mobile phones
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
    initAudio();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    // Require prominent horizontal swipe > 45px with minimal vertical angle
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        nextFolio();
      } else {
        prevFolio();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextFolio();
      if (e.key === "ArrowLeft") prevFolio();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentFolio, isFlipping]);

  // Hash link listener for external navbar clicks
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "services") turnToFolio(0);
      else if (hash === "vault") turnToFolio(1);
      else if (hash === "how-to-work") turnToFolio(2);
      else if (hash === "engage") turnToFolio(3);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [currentFolio]);

  const activeFolio = folios[currentFolio];

  return (
    <section
      id="book"
      className="py-14 sm:py-24 md:py-32 px-2.5 sm:px-6 md:px-8 relative bg-[#F4EFE6] bg-gradient-to-b from-[#FAF7F0] via-[#F4EFE6] to-[#ECE5D8] overflow-hidden text-[#171614] border-t border-[#171614]/10 dot-grid"
    >
      {/* Invisible anchor targets */}
      <div id="services" className="absolute -top-24 pointer-events-none" />
      <div id="vault" className="absolute -top-24 pointer-events-none" />
      <div id="how-to-work" className="absolute -top-24 pointer-events-none" />
      <div id="engage" className="absolute -top-24 pointer-events-none" />

      {/* Atmospheric warm ambient study lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden sm:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(234,225,207,0.35)_40%,transparent_70%)] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header Above the Book: Tome Title & Chapter Ribbon Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-[#171614]/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={14} className="text-[#8A241C]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A241C]">
                The Directorate Grimoire • Volume I
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#171614]">
              The Register of <span className="italic text-[#8A241C]">Practice & Works</span>
            </h2>
          </div>

          {/* Chapter Selection Ribbon Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none select-none max-w-full">
            {folios.map((f, i) => {
              const isSelected = i === currentFolio;
              return (
                <button
                  key={f.id}
                  onClick={() => turnToFolio(i)}
                  className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-t-lg font-sans text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-1.5 sm:gap-2 border-t-2 ${
                    isSelected
                      ? "bg-[#1E140C] text-[#FAF4E4] font-semibold border-[#8A241C] shadow-md"
                      : "bg-[#E6DFD2] text-[#6E5531] hover:text-[#171614] border-transparent hover:bg-[#DDD4C2]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#8A241C]" : "bg-[#8A7968]"}`} />
                  <span>Folio {f.roman}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── THE LEATHER-BOUND DESK CASING (STATIONARY / NEVER ROTATES) ── */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-xl sm:rounded-2xl p-2.5 sm:p-6 md:p-8 bg-[#1F1710] border-2 border-[#382B1E] shadow-[0_25px_80px_rgba(25,18,12,0.22),0_10px_30px_rgba(25,18,12,0.12)] overflow-hidden"
        >
          
          {/* Leather tooling border around the desk frame */}
          <div className="absolute inset-1.5 rounded-xl border border-[#8A241C]/30 pointer-events-none" />

          {/* Mobile Leaf Type Segmented Toggle (Only on phones/tablets) */}
          <div className="flex lg:hidden items-center justify-center mb-3 select-none">
            <div className="inline-flex p-1 bg-[#2C2117] rounded-full border border-[#483726]">
              <button
                onClick={() => {
                  if (mobileLeafView !== "letter") {
                    playPageTurnSound();
                    setMobileLeafView("letter");
                  }
                }}
                className={`px-3.5 py-1 rounded-full font-sans text-[11px] font-semibold tracking-wider transition-all cursor-pointer ${
                  mobileLeafView === "letter"
                    ? "bg-[#8A241C] text-[#FAF4E4] shadow-sm"
                    : "text-[#9E8E7C] hover:text-[#FAF4E4]"
                }`}
              >
                Dispatch Letter
              </button>
              <button
                onClick={() => {
                  if (mobileLeafView !== "plate") {
                    playPageTurnSound();
                    setMobileLeafView("plate");
                  }
                }}
                className={`px-3.5 py-1 rounded-full font-sans text-[11px] font-semibold tracking-wider transition-all cursor-pointer ${
                  mobileLeafView === "plate"
                    ? "bg-[#8A241C] text-[#FAF4E4] shadow-sm"
                    : "text-[#9E8E7C] hover:text-[#FAF4E4]"
                }`}
              >
                Archival Plate
              </button>
            </div>
          </div>

          {/* ── THE TWO-PAGE SPREAD ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
            
            {/* ════════ LEFT PAGE: THE ARCHIVAL MANUSCRIPT FRONTISPIECE ════════ */}
            {/* STAYS STATIONARY ON DESKTOP; TOGGLED VIA SWITCHER ON MOBILE */}
            <div className={`relative p-1 sm:p-4 ${mobileLeafView === "plate" ? "block lg:block lg:col-span-5" : "hidden lg:block lg:col-span-5"}`}>
              
              {/* Outer charred scorched backing layer for torn edge contrast */}
              <div
                className="absolute inset-0 bg-[#0E0A07] rounded-xl pointer-events-none"
                style={{
                  clipPath: tornPaperPolygon,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  transform: "translateZ(0)",
                }}
              />

              {/* The Inner Cream Aged Parchment with Scorched Deckle Edges */}
              <div
                className="relative w-full h-full min-h-[500px] sm:min-h-[580px] lg:min-h-[720px] p-5 sm:p-8 flex flex-col justify-between rounded-xl overflow-hidden"
                style={{
                  clipPath: tornPaperPolygon,
                  backgroundColor: "#F7F2E2",
                  backgroundImage: `radial-gradient(circle at 15% 50%, rgba(255, 250, 238, 0.98) 35%, rgba(246, 238, 218, 0.94) 65%, rgba(218, 198, 155, 0.95) 86%, rgba(130, 98, 52, 0.98) 96%, rgba(22, 16, 10, 0.99) 100%)`,
                  boxShadow: `
                    inset 0 0 45px rgba(125, 95, 45, 0.35),
                    inset 0 0 16px rgba(35, 25, 15, 0.65),
                    inset 0 0 4px rgba(15, 10, 5, 0.9)
                  `,
                  border: "1px solid rgba(75, 55, 30, 0.5)",
                  transform: "translateZ(0)",
                }}
              >
                {/* Yellowish-amber foxing and blackish burnt corner vignettes */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#1C140D]/75 via-[#8F6A35]/35 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1C140D]/75 via-[#8F6A35]/35 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Left Frontispiece Content */}
                <div className="relative z-10 space-y-6">
                  
                  {/* Archival Directorate Header */}
                  <div className="pb-4 border-b border-[#6E5531]/30 flex items-center justify-between text-[10px] font-sans uppercase tracking-[0.25em] text-[#6E5531]">
                    <span>ARCHIVES • SHRI DIVISION 03</span>
                    <span>OCTOBER 2026</span>
                  </div>

                  {/* Elaborate Calligraphic Roman Chapter Identifier */}
                  <div className="py-2 text-center flex flex-col items-center">
                    <span className="font-serif italic text-6xl sm:text-7xl md:text-8xl text-[#8A241C] font-normal leading-none block select-none drop-shadow-sm">
                      {activeFolio.roman}
                    </span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4A3B28] mt-2 block">
                      FOLIO {activeFolio.roman} OF IV
                    </span>
                  </div>

                  {/* Sacred Seal / Insignia Plate */}
                  <div className="py-4 my-2 border-y border-[#6E5531]/25 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#8A241C]/40 bg-[#EDE2C5] flex items-center justify-center text-[#8A241C] shadow-inner mb-3">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#8A241C]">
                        <polygon points="12,2 22,12 12,22 2,12" />
                      </svg>
                    </div>
                    <span className="font-serif font-bold text-sm tracking-[0.2em] text-[#171614] uppercase">
                      AGENCIES BY SHRI
                    </span>
                    <span className="font-serif italic text-xs text-[#6E5531] mt-0.5">
                      Directorate of Digital Presence & Growth
                    </span>
                  </div>

                  {/* Chapter Context & Summary */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#171614] font-medium leading-snug">
                      {activeFolio.title}
                    </h3>
                    <p className="font-sans text-xs text-[#5C4D38] leading-relaxed">
                      {activeFolio.subtitle}
                    </p>
                  </div>

                  {/* Chapter Navigation Roster */}
                  <div className="pt-2 space-y-1.5 text-xs font-sans">
                    {folios.map((f, i) => (
                      <button
                        key={f.id}
                        onClick={() => turnToFolio(i)}
                        className={`w-full text-left py-1.5 px-2.5 rounded transition-colors flex items-center justify-between cursor-pointer ${
                          i === currentFolio
                            ? "bg-[#E6D7B5] text-[#8A241C] font-semibold"
                            : "text-[#6E5531] hover:bg-[#EFE3C7] hover:text-[#171614]"
                        }`}
                      >
                        <span className="font-serif italic mr-2">{f.roman}.</span>
                        <span className="flex-1 truncate">{f.title}</span>
                        <span className="text-[10px] opacity-60">p.{i + 1}</span>
                      </button>
                    ))}
                  </div>

                </div>

                {/* Left Page Bottom Footer Stamp */}
                <div className="relative z-10 pt-4 mt-6 border-t border-[#6E5531]/25 flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#7D643E]">
                  <span>AUTHENTIC MANUSCRIPT</span>
                  <span className="text-[#8A241C] font-medium">10 PARTNERS MAX</span>
                </div>

              </div>
            </div>

            {/* ════════ CENTER BINDING SPINE & CREASE ════════ */}
            {/* The stationary center fold of the book */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center relative pointer-events-none">
              {/* Deep Shadow Valley of the Book Spine */}
              <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-black/55 via-black/25 to-black/55" />
              {/* Stitched Gold Spine Thread Accents */}
              <div className="h-full w-[1.5px] bg-[#9C7F52]/40" />
            </div>

            {/* ════════ RIGHT PAGE: THE SINGLE LETTER PAGE (TURNS ON SPINE) ════════ */}
            {/* ONLY THIS SINGLE PAGE FLIPS OVER WHEN TURNING! */}
            <div
              className={`relative p-1 sm:p-4 ${mobileLeafView === "letter" ? "block lg:block lg:col-span-6" : "hidden lg:block lg:col-span-6"}`}
              style={{ perspective: "2200px" }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentFolio}
                  custom={direction}
                  variants={leafVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                  }}
                  className="relative w-full h-full min-h-[500px] sm:min-h-[580px] lg:min-h-[720px] flex flex-col justify-between"
                >
                  
                  {/* Outer charred scorched backing layer for torn edge contrast */}
                  <div
                    className="absolute inset-0 bg-[#0E0A07] rounded-xl pointer-events-none"
                    style={{
                      clipPath: tornPaperPolygon,
                      boxShadow: "0 14px 40px rgba(0,0,0,0.85)",
                      transform: "translateZ(0)",
                    }}
                  />

                  {/* The Inner Cream Aged Parchment with Irregular Torn & Scorched Borders */}
                  <div
                    className="relative w-full h-full flex flex-col justify-between p-4 sm:p-8 md:p-10 rounded-xl overflow-hidden"
                    style={{
                      clipPath: tornPaperPolygon,
                      backgroundColor: "#FAF5E6",
                      backgroundImage: `radial-gradient(circle at 80% 50%, rgba(255, 252, 242, 0.98) 40%, rgba(247, 239, 220, 0.95) 68%, rgba(220, 201, 160, 0.94) 87%, rgba(135, 102, 54, 0.98) 96%, rgba(22, 16, 10, 0.99) 100%)`,
                      boxShadow: `
                        inset 0 0 45px rgba(125, 95, 45, 0.35),
                        inset 0 0 16px rgba(35, 25, 15, 0.65),
                        inset 0 0 4px rgba(15, 10, 5, 0.9)
                      `,
                      border: "1px solid rgba(75, 55, 30, 0.5)",
                      transform: "translateZ(0)",
                    }}
                  >
                    
                    {/* Yellowish-amber foxing and blackish burnt corner vignettes */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#1C140D]/75 via-[#8F6A35]/35 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#1C140D]/75 via-[#8F6A35]/35 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black/25 via-transparent to-transparent pointer-events-none" />

                    {/* ── THE LETTERHEAD & MARGINS (STRICTLY CONFINED TO THIS SINGLE SHEET) ── */}
                    <div className="relative z-10 flex-grow">
                      
                      {/* Mobile Illuminated Folio Seal Header (Only shown on mobile) */}
                      <div className="lg:hidden pb-3 mb-3 border-b border-[#6E5531]/25 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full border border-[#8A241C]/40 bg-[#EDE2C5] flex items-center justify-center text-[#8A241C] shadow-inner shrink-0">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#8A241C]">
                              <polygon points="12,2 22,12 12,22 2,12" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-serif italic font-bold text-xs text-[#8A241C] block leading-none">
                              Folio {activeFolio.roman}
                            </span>
                            <span className="font-sans text-[8px] uppercase tracking-wider text-[#6E5531]">
                              AGENCIES BY SHRI
                            </span>
                          </div>
                        </div>
                        <span className="font-sans text-[9px] uppercase tracking-wider text-[#7D643E] bg-[#EDE0C2] px-2 py-0.5 rounded border border-[#6E5531]/15">
                          p.{currentFolio + 1} of IV
                        </span>
                      </div>

                      {/* Letterhead Top Row */}
                      <div className="pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#6E5531]/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Feather size={14} className="text-[#8A241C]" />
                          <span className="font-serif italic font-semibold text-xs tracking-wider text-[#171614]">
                            Official Directorate Dispatch
                          </span>
                        </div>
                        <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#6E5531]">
                          Ref: SHRI-AGY-{activeFolio.roman}
                        </span>
                      </div>

                      {/* Formal Letter Salutation */}
                      <div className="mb-4 sm:mb-6">
                        <span className="font-serif italic text-xs text-[#8A241C] block mb-1">
                          {activeFolio.salute}
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#171614] font-normal leading-snug">
                          {activeFolio.title}
                        </h4>
                      </div>

                      {/* ════════ LETTER BODY CONTENT (STRICTLY CONFINED TO THIS PAGE) ════════ */}
                      
                      {/* ── FOLIO I LETTER: THE 4 CAPABILITIES ── */}
                      {currentFolio === 0 && (
                        <div className="space-y-4">
                          <p className="font-sans text-xs text-[#5C4D38] leading-relaxed mb-3 sm:mb-4">
                            We assist brands, founders, and organizations in cultivating thoughtful digital presence through bespoke social media management, organic SEO authority, and clear digital positioning.
                          </p>

                          <div className="divide-y divide-[#6E5531]/20 border-y border-[#6E5531]/20">
                            {servicesData.map((svc) => (
                              <div key={svc.id} className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 group">
                                <div className="space-y-1 flex-1 min-w-0">
                                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <span className="font-serif italic text-sm text-[#8A241C] font-semibold">
                                      {svc.id}.
                                    </span>
                                    <h5 className="font-serif font-bold text-xs sm:text-sm text-[#171614] group-hover:text-[#8A241C] transition-colors">
                                      {svc.title}
                                    </h5>
                                    <span className="text-[9px] font-sans font-semibold uppercase tracking-wider text-[#6E5531] bg-[#EDE0C2] px-1.5 py-0.2 rounded border border-[#6E5531]/15">
                                      {svc.tag}
                                    </span>
                                  </div>
                                  <p className="font-sans text-[11px] text-[#5C4D38] leading-relaxed">
                                    {svc.desc}
                                  </p>
                                </div>

                                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#6E5531]/10">
                                  <span className="font-serif italic text-[11px] text-[#8A241C]">
                                    {svc.metric}
                                  </span>
                                  <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-0.5 text-[10px] font-sans font-semibold uppercase text-[#171614] hover:text-[#8A241C] px-2 py-0.5 rounded bg-[#FAF5E6] sm:bg-transparent border sm:border-0 border-[#6E5531]/20"
                                  >
                                    <span>Brief</span>
                                    <ArrowUpRight size={10} />
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── FOLIO II LETTER: THE VAULT PLATES ── */}
                      {currentFolio === 1 && (
                        <div className="space-y-4">
                          <p className="font-sans text-xs text-[#5C4D38] leading-relaxed mb-3">
                            Production platforms engineered across the SHRI ecosystem demonstrating our uncompromising standard of speed, craft, and architectural authority:
                          </p>

                          <div className="space-y-2.5 sm:space-y-3">
                            {vaultData.map((site, i) => (
                              <a
                                key={site.domain}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-lg bg-[#EFE3C7]/60 border border-[#6E5531]/20 hover:border-[#8A241C]/40 hover:bg-[#E8DAC0] transition-colors block group cursor-pointer"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1.5">
                                  <div className="flex items-center gap-2">
                                    <span className="font-serif italic text-xs text-[#8A241C] font-semibold">
                                      Plate {i + 1}.
                                    </span>
                                    <h5 className="font-serif font-bold text-xs sm:text-sm text-[#171614] group-hover:text-[#8A241C] transition-colors">
                                      {site.title}
                                    </h5>
                                  </div>

                                  <span className="inline-flex items-center self-start sm:self-auto gap-1 text-[10px] font-sans text-[#171614] font-medium bg-[#FAF5E6] px-2 py-0.5 rounded border border-[#6E5531]/15">
                                    <Globe size={10} className="text-[#8A241C]" />
                                    <span>{site.domain}</span>
                                    <ArrowUpRight size={10} />
                                  </span>
                                </div>

                                <p className="font-sans text-[11px] text-[#5C4D38] leading-relaxed mb-2">
                                  {site.desc}
                                </p>

                                <div className="flex items-center justify-between text-[10px] font-sans text-[#6E5531]">
                                  <span className="uppercase tracking-wider">{site.category}</span>
                                  <span className="font-serif italic">{site.metric}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── FOLIO III LETTER: SELECTION PROTOCOLS ── */}
                      {currentFolio === 2 && (
                        <div className="space-y-4">
                          <p className="font-sans text-xs text-[#5C4D38] leading-relaxed mb-3">
                            We operate exclusively on an intentional seasonal cohort model. Every submission is reviewed directly by Agencies leadership under SHRI:
                          </p>

                          <div className="space-y-2.5 sm:space-y-3">
                            {stepsData.map((st) => {
                              const Icon = st.icon;
                              return (
                                <div
                                  key={st.step}
                                  className="p-2.5 sm:p-3 rounded-lg bg-[#EFE3C7]/60 border border-[#6E5531]/20 flex items-start gap-2.5 sm:gap-3"
                                >
                                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E2D3B3] border border-[#6E5531]/20 flex items-center justify-center text-[#171614] shrink-0 mt-0.5">
                                    <Icon size={13} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="font-serif font-bold text-xs sm:text-sm text-[#171614] truncate">
                                        {st.step}. {st.title}
                                      </h5>
                                      <span className="text-[9px] font-sans uppercase tracking-widest text-[#8A241C] font-semibold shrink-0 ml-2">
                                        Stage {st.step}
                                      </span>
                                    </div>
                                    <p className="font-sans text-[11px] text-[#5C4D38] leading-relaxed">
                                      {st.desc}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="pt-2 text-center">
                            <span className="font-serif italic text-xs text-[#171614]">
                              Criteria: Technical Ambition • Strategic Fit • Active Intake
                            </span>
                          </div>
                        </div>
                      )}

                      {/* ── FOLIO IV LETTER: DIRECT DISPATCH DESK ── */}
                      {currentFolio === 3 && (
                        <div className="space-y-4 sm:space-y-5">
                          <p className="font-sans text-xs text-[#5C4D38] leading-relaxed">
                            Every project brief is scrutinized directly by our principal architects. If you wish to correspond directly, our official email desk is open for inquiries:
                          </p>

                          {/* Archival Envelope Box */}
                          <div className="p-3.5 sm:p-5 rounded-xl bg-[#EFE3C7]/80 border-2 border-[#6E5531]/30 shadow-sm space-y-3">
                            <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#6E5531]">
                              <span>Official Agency Inbox</span>
                              <span className="text-[#8A241C] font-semibold">Live Monitored</span>
                            </div>

                            <div className="p-2.5 sm:p-3 rounded-lg bg-[#FAF5E6] border border-[#6E5531]/20 font-serif italic text-sm sm:text-lg md:text-xl text-[#171614] select-all break-all text-center">
                              {emailAddress}
                            </div>

                            <p className="font-sans text-[11px] text-[#5C4D38] leading-relaxed text-center">
                              Direct line to our leadership team. Send briefs, pitch decks, repository links, or timeline objectives.
                            </p>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                              <button
                                onClick={handleCopy}
                                className="flex-1 py-2.5 sm:py-2 px-3 rounded-full bg-[#FAF5E6] hover:bg-[#EAE0C7] text-[#171614] font-sans text-xs font-semibold border border-[#6E5531]/20 transition-colors cursor-pointer flex items-center justify-center gap-1.5 min-h-[42px] sm:min-h-0"
                              >
                                {copied ? (
                                  <>
                                    <Check size={12} className="text-[#8A241C]" />
                                    <span className="text-[#8A241C]">Copied Address</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy size={12} />
                                    <span>Copy Address</span>
                                  </>
                                )}
                              </button>

                              <a
                                href={`mailto:${emailAddress}?subject=[Agencies by SHRI] Project Brief`}
                                className="py-2.5 sm:py-2 px-4 rounded-full bg-[#171614] hover:bg-[#2D2319] text-[#FAF4E4] font-sans text-xs font-medium transition-colors inline-flex items-center justify-center gap-1 min-h-[42px] sm:min-h-0"
                              >
                                <span>Compose</span>
                                <ArrowUpRight size={12} />
                              </a>
                            </div>
                          </div>

                          <div className="text-center pt-1">
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase text-[#8A241C] hover:underline underline-offset-4"
                            >
                              <span>Open Full Contact Desk Portal</span>
                              <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* ── LETTER SIGN-OFF & PAGE-TURN TRIGGER ── */}
                    <div className="relative z-10 pt-3 sm:pt-4 mt-5 sm:mt-6 border-t border-[#6E5531]/30 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="font-serif italic text-xs text-[#171614] block">
                          Agencies, by SHRI
                        </span>
                        <span className="font-sans text-[9px] uppercase tracking-widest text-[#6E5531] block">
                          ESTD 2026 • DIVISION 03
                        </span>
                      </div>

                      {/* Interactive Next Page Turn Button */}
                      <button
                        onClick={nextFolio}
                        className="group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#E8D9BA] hover:bg-[#DFCFA8] text-[#171614] font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-[#6E5531]/25 transition-all cursor-pointer shadow-sm min-h-[40px]"
                      >
                        <span>
                          {currentFolio < folios.length - 1 ? "Turn Leaf" : "Folio I"}
                        </span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Curled Paper Corner Dog-Ear */}
                    <div
                      onClick={nextFolio}
                      title="Turn Page"
                      className="absolute bottom-0 right-0 w-10 sm:w-12 h-10 sm:h-12 cursor-pointer z-30 group"
                    >
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-t-[28px] sm:border-t-[36px] border-r-[28px] sm:border-r-[36px] border-t-[#D5C29C] border-r-[#1F1710] shadow-md group-hover:scale-110 transition-transform" />
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Desk Footer Controls */}
          <div className="mt-4 pt-4 border-t border-[#332A22] flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#9E8E7C] gap-3 px-1 sm:px-2">
            <div className="flex items-center justify-between w-full sm:w-auto gap-3 order-2 sm:order-1">
              <button
                onClick={prevFolio}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-1.5 px-4 rounded-full bg-[#241C14] hover:bg-[#32271C] text-[#FAF4E4] border border-[#3E3022] transition-colors cursor-pointer min-h-[42px] sm:min-h-0"
              >
                <ArrowLeft size={13} />
                <span>Previous</span>
              </button>

              <span className="text-[11px] font-sans text-[#C25E38] sm:hidden font-medium">
                Folio {activeFolio.roman} / IV
              </span>

              <button
                onClick={nextFolio}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-1.5 px-4 rounded-full bg-[#241C14] hover:bg-[#32271C] text-[#FAF4E4] border border-[#3E3022] transition-colors cursor-pointer min-h-[42px] sm:min-h-0"
              >
                <span>Next</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <span className="font-serif italic text-[11px] sm:text-xs text-[#C25E38] text-center order-1 sm:order-2">
              Swipe left/right, tap tabs, or use buttons to turn leaves
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
