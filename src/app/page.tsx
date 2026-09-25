"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, ProjectCategory } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import TiltCard from "@/components/TiltCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import ContactSection from "@/components/ContactSection";
import {
  ExternalLink,
  Code2,
  Terminal,
  ArrowRight,
  ArrowUp,
  FileDown,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"uz" | "en">("uz");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const { personal, projects, skillGroups, experience } = PORTFOLIO_DATA;

  const marqueeItems = [
    "FRONTEND ARCHITECTURE",
    "REACT 19 & NEXT.JS",
    "FLUTTER & DART",
    "ANDROID JETPACK COMPOSE",
    "CLEAN ARCHITECTURE",
    "TANSTACK VIRTUAL & QUERY",
    "STATE MANAGEMENT (ZUSTAND/BLOC)",
    "60 FPS FLUID MOTION",
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative overflow-hidden">
      {/* Dynamic Animated Blobs in Background */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-brand-cyan/15 via-brand-blue/15 to-brand-violet/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow z-0" />
      <div className="fixed bottom-16 right-10 w-96 h-96 bg-brand-pink/10 rounded-full blur-[130px] pointer-events-none animate-float-slow z-0" />
      <div className="fixed top-32 left-8 w-80 h-80 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none animate-float-rev z-0" />

      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      <main className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
        >
          {/* Floating Pill 1 (Left) */}
          <div className="hidden lg:block absolute left-12 top-1/3 p-3.5 glass-panel rounded-2xl animate-float-slow shadow-2xl border-white/10 pointer-events-none">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>&lt;CleanArchitecture /&gt;</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-mono">
              React 19 &middot; Flutter &middot; Compose
            </p>
          </div>

          {/* Floating Pill 2 (Right) */}
          <div className="hidden lg:block absolute right-16 top-2/5 p-3.5 glass-panel rounded-2xl animate-float-rev shadow-2xl border-white/10 pointer-events-none">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-violet">
              <span className="w-2 h-2 rounded-full bg-brand-violet" />
              <span>high_performance.state</span>
            </div>
            <div className="flex gap-1.5 mt-2">
              <span className="w-3.5 h-3.5 rounded-full bg-brand-cyan" />
              <span className="w-3.5 h-3.5 rounded-full bg-brand-blue" />
              <span className="w-3.5 h-3.5 rounded-full bg-brand-violet" />
              <span className="w-3.5 h-3.5 rounded-full bg-brand-pink" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Status Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6 hover:border-brand-cyan/40 transition-all">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
              </span>
              <span className="text-xs font-mono text-slate-300 tracking-wide uppercase">
                {lang === "uz"
                  ? "Frontend & Mobil Dasturlash Muhandisi"
                  : "Bridging Elegant Code & High Performance UX"}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white">
              {personal.name} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
                {personal.role[lang]}
              </span>
            </h1>

            {/* Bio */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {personal.bio[lang]}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet text-white font-semibold text-sm tracking-wide shadow-xl shadow-brand-blue/30 hover:shadow-brand-violet/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{lang === "uz" ? "Loyihalarimni Ko'rish" : "View My Work"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:text-white hover:bg-white/[0.08] hover:border-white/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === "uz" ? "Bog'lanish" : "Let's Talk"}</span>
                <span className="text-brand-cyan">&rarr;</span>
              </a>
            </div>

            {/* Resume Download Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={personal.resumes.frontend}
                download
                className="px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Frontend CV (PDF)</span>
              </a>
              <a
                href={personal.resumes.flutter}
                download
                className="px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-brand-violet" />
                <span>Flutter CV (PDF)</span>
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="mt-8 flex items-center gap-6 text-slate-400 text-xs font-mono">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                GITHUB
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href={personal.telegram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                TELEGRAM
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-brand-cyan transition-colors"
              >
                EMAIL
              </a>
            </div>
          </div>
        </section>

        {/* ==================== INFINITE MARQUEE ==================== */}
        <Marquee items={marqueeItems} />

        {/* ==================== ABOUT & STATS SECTION ==================== */}
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Holographic Avatar Card */}
            <div className="lg:col-span-5">
              <TiltCard>
                <div className="glow-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-brand-surface via-brand-card to-[#1a2238] border border-white/10 flex items-center justify-center">
                    {/* Concentric rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-64 h-64 rounded-full border border-dashed border-white/10 animate-spin" />
                      <div className="w-48 h-48 rounded-full border border-brand-blue/20" />
                      <div className="w-32 h-32 rounded-full border border-brand-violet/30" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center p-6">
                      <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-violet p-[2px] shadow-2xl shadow-brand-blue/30 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full bg-brand-black rounded-[14px] flex items-center justify-center overflow-hidden">
                          <Code2 className="w-14 h-14 text-brand-cyan" />
                        </div>
                      </div>
                      <h3 className="mt-4 font-display font-bold text-xl text-white">
                        {personal.name}
                      </h3>
                      <p className="font-mono text-xs text-brand-cyan mt-1">
                        {personal.location}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {lang === "uz" ? "Yangi loyihalarga tayyorman" : "Open for engineering roles"}
                      </div>
                    </div>

                    {/* HUD labels */}
                    <div className="absolute top-3 left-3 font-mono text-[9px] text-slate-500">
                      STACK: REACT 19 &middot; FLUTTER
                    </div>
                    <div className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-500">
                      SYS: PRODUCTION READY
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-white/5 pt-4">
                    <span>SPECIALTY</span>
                    <span className="text-white font-medium">
                      Web & Mobile Architecture
                    </span>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Right Narrative & Stats */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-[2px] bg-brand-cyan" />
                <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                  01 / {lang === "uz" ? "MEN HAQIMDA" : "ABOUT ME"}
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                {lang === "uz" ? (
                  <>
                    Yuqori unumdorlik va{" "}
                    <span className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
                      toza arxitekturaga
                    </span>{" "}
                    asoslangan raqamli mahsulotlar.
                  </>
                ) : (
                  <>
                    Engineering robust digital experiences with{" "}
                    <span className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
                      Clean Architecture
                    </span>
                    .
                  </>
                )}
              </h2>

              <p className="mt-6 text-slate-300 text-base leading-relaxed">
                {personal.bio[lang]}
              </p>

              {/* Animated Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-cyan/30 transition-colors">
                  <div className="font-display font-extrabold text-3xl text-white">
                    <AnimatedCounter target={2} suffix="+ yil" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {lang === "uz" ? "Amaliy Tajriba" : "Experience"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/30 transition-colors">
                  <div className="font-display font-extrabold text-3xl text-white">
                    <AnimatedCounter target={10} suffix="+" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {lang === "uz" ? "Muvaffaqiyatli Loyiha" : "Projects"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-violet/30 transition-colors">
                  <div className="font-display font-extrabold text-3xl text-white">
                    <AnimatedCounter target={100} suffix="%" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Clean Architecture
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-pink/30 transition-colors">
                  <div className="font-display font-extrabold text-3xl text-white">
                    <AnimatedCounter target={2} suffix=" ta" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Web & Mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS SHOWCASE ==================== */}
        <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-[2px] bg-brand-cyan" />
                <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                  02 / {lang === "uz" ? "LOYIHALAR" : "FEATURED WORK"}
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
                {lang === "uz" ? "Asosiy Loyihalarim" : "Selected Engineering Works"}
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 mt-6 md:mt-0 overflow-x-auto max-w-full">
              {(
                [
                  { id: "all", label: lang === "uz" ? "Barchasi" : "All" },
                  { id: "frontend", label: "Frontend" },
                  { id: "flutter", label: "Flutter" },
                  { id: "android", label: "Android" },
                ] as const
              ).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-brand-cyan text-brand-black font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {filteredProjects.map((project, idx) => {
              const isLarge = idx % 3 === 0;
              const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
              const accentColor =
                project.category === "frontend"
                  ? "text-brand-cyan"
                  : project.category === "flutter"
                  ? "text-brand-blue"
                  : "text-brand-violet";

              const primaryUrl = project.liveUrl || project.githubUrl;

              return (
                <div key={project.id} className={`${colSpan}`}>
                  <TiltCard>
                    <div className="glow-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full group relative z-10">
                      {/* Project Visual Frame */}
                      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 relative border border-white/10 group-hover:border-brand-cyan/40 transition-all duration-500 p-6 flex flex-col justify-between">
                        {/* Browser mockup top bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-full">
                            {project.category.toUpperCase()} &middot; {project.id}
                          </div>
                          <div className="w-4" />
                        </div>

                        {/* Mid Graphical Visual */}
                        <div className="my-auto py-2">
                          <span className={`text-[11px] font-mono uppercase ${accentColor}`}>
                            {project.metrics?.[lang] || "PRODUCTION APP"}
                          </span>
                          <h4 className="text-xl font-display font-bold text-white mt-1 line-clamp-2">
                            {project.title[lang]}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                            {project.subtitle?.[lang]}
                          </p>
                        </div>

                        <div className="text-[10px] font-mono text-slate-500 flex justify-between">
                          <span>CLEAN ARCHITECTURE</span>
                          <span>STABLE BUILD</span>
                        </div>

                        {/* Zoom Overlay Badge on Hover with Clickable Link */}
                        {primaryUrl && (
                          <a
                            href={primaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="absolute inset-0 bg-brand-black/75 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto backdrop-blur-sm transition-all duration-300 flex items-center justify-center cursor-pointer z-30"
                          >
                            <span className="px-5 py-2.5 rounded-full bg-white text-brand-black font-semibold text-xs tracking-wider uppercase transform translate-y-3 group-hover:translate-y-0 transition-all shadow-xl flex items-center gap-1.5 hover:scale-105 pointer-events-auto">
                              <span>
                                {project.liveUrl
                                  ? lang === "uz"
                                    ? "Loyihani Ko'rish"
                                    : "Launch Live Demo"
                                  : lang === "uz"
                                  ? "Kodni Ko'rish"
                                  : "View Source Code"}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </a>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-20">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-mono uppercase ${accentColor}`}>
                              {project.category}
                            </span>
                            <span className="text-slate-600">&bull;</span>
                            <span className="text-xs font-mono text-slate-400">Featured</span>
                          </div>
                          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                            {project.description[lang]}
                          </p>
                        </div>

                        {/* Action Buttons & Links */}
                        <div className="flex items-center gap-2 shrink-0 relative z-40">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-cyan/20 hover:bg-brand-cyan text-brand-cyan hover:text-brand-black border border-brand-cyan/40 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm relative z-40 pointer-events-auto"
                              title="Live Demo"
                            >
                              <span>Demo</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-brand-violet hover:text-white border border-white/20 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all cursor-pointer shadow-sm relative z-40 pointer-events-auto"
                              title="Source Code"
                            >
                              <span>Code</span>
                              <Code2 className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-white/5 relative z-20">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================== SKILLS & ARSENAL ==================== */}
        <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-[2px] bg-brand-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                03 / {lang === "uz" ? "TEXNOLOGIYALAR" : "CAPABILITIES"}
              </span>
              <span className="w-2.5 h-[2px] bg-brand-cyan" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
              {lang === "uz" ? "Texnik Arsenal & Ko'nikmalar" : "Technical Arsenal & Stack"}
            </h2>
            <p className="text-slate-400 text-sm mt-4">
              {lang === "uz"
                ? "Yuqori darajadagi frontend tizimlari, mobil ilovalar va barqaror arxitektura vositalari."
                : "A balanced blend of scalable frontend architecture, mobile engineering, and clean design patterns."}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => {
              const borderColors = [
                "border-brand-cyan/20 text-brand-cyan",
                "border-brand-blue/20 text-brand-blue",
                "border-brand-violet/20 text-brand-violet",
                "border-brand-pink/20 text-brand-pink",
              ];
              const dotColors = [
                "bg-brand-cyan",
                "bg-brand-blue",
                "bg-brand-violet",
                "bg-brand-pink",
              ];

              return (
                <div
                  key={group.category.uz}
                  className="glow-card rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl bg-white/[0.04] border flex items-center justify-center mb-4 ${
                        borderColors[idx % 4]
                      }`}
                    >
                      <Terminal className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {group.category[lang]}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-2 cursor-default"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${dotColors[idx % 4]}`}
                          />
                          <span className="text-xs font-mono text-slate-200">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500">
                    Production Standard
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================== EXPERIENCE TIMELINE ==================== */}
        <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-[2px] bg-brand-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                04 / {lang === "uz" ? "ISH TAJRIBASI" : "CAREER MILESTONES"}
              </span>
              <span className="w-2.5 h-[2px] bg-brand-cyan" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
              {lang === "uz" ? "Bosqichlar va Tajriba" : "Journey & Experience"}
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              {lang === "uz"
                ? "Jamoada va korporativ loyihalarda orttirilgan amaliy muhandislik tajribasi."
                : "Where I've made direct impact, shipped production systems, and scaled UI."}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-violet shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className="relative flex flex-col sm:flex-row items-start mb-16 group"
                >
                  {/* Left (Desktop) */}
                  {isEven ? (
                    <div className="sm:w-1/2 sm:pr-12 pl-12 sm:pl-0 sm:text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mb-2">
                        {exp.period[lang]}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-cyan transition-colors">
                        {exp.role[lang]}
                      </h3>
                      <div className="font-mono text-xs text-slate-400">
                        {exp.company} &middot; {exp.domain}
                      </div>
                      <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                        {exp.description[lang]}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:justify-end">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="hidden sm:block sm:w-1/2 sm:pr-12" />
                  )}

                  {/* Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-brand-surface border-2 border-brand-cyan shadow-lg shadow-brand-cyan/50 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  </div>

                  {/* Right (Desktop) */}
                  {!isEven ? (
                    <div className="sm:w-1/2 pl-12 sm:pl-12">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-brand-blue/10 border border-brand-blue/20 text-brand-blue mb-2">
                        {exp.period[lang]}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-blue transition-colors">
                        {exp.role[lang]}
                      </h3>
                      <div className="font-mono text-xs text-slate-400">
                        {exp.company} &middot; {exp.domain}
                      </div>
                      <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                        {exp.description[lang]}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="hidden sm:block sm:w-1/2 sm:pl-12" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <ContactSection lang={lang} />
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/[0.08] bg-brand-surface py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-violet flex items-center justify-center text-[10px] font-display font-bold text-white">
              BI
            </div>
            <span className="font-mono text-slate-400">
              &copy; 2025 Bunyodbek Imotdinov. Built with Next.js, Stitch Aura & Clean Code.
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono">
            <a href="#hero" className="hover:text-white transition-colors cursor-pointer">
              TOP
            </a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">
              ABOUT
            </a>
            <a href="#projects" className="hover:text-white transition-colors cursor-pointer">
              PROJECTS
            </a>
            <a href="#contact" className="hover:text-white transition-colors cursor-pointer">
              CONTACT
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-brand-cyan/40 hover:text-brand-cyan transition-all font-mono cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
