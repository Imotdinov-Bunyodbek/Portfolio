"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  lang: "uz" | "en";
  setLang: (lang: "uz" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: lang === "uz" ? "Men Haqimda" : "About" },
    { href: "#projects", label: lang === "uz" ? "Loyihalar" : "Projects" },
    { href: "#skills", label: lang === "uz" ? "Texnologiyalar" : "Skills" },
    { href: "#experience", label: lang === "uz" ? "Tajriba" : "Experience" },
    { href: "#contact", label: lang === "uz" ? "Aloqa" : "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 glass-nav ${
        isScrolled
          ? "bg-brand-black/90 shadow-2xl shadow-black/50 py-3"
          : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a href="#hero" className="group flex items-center gap-3 cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-violet p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-brand-blue/20">
            <div className="w-full h-full bg-brand-surface rounded-[11px] flex items-center justify-center font-bold text-lg text-white">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
                BI
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wide text-white group-hover:text-brand-cyan transition-colors">
              BUNYODBEK.DEV
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider">
              FRONTEND &middot; MOBILE
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-white/[0.06]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Lang Selector */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-white/[0.04] border border-white/[0.08] p-0.5 rounded-lg text-xs font-mono">
            <button
              onClick={() => setLang("uz")}
              className={`px-2 py-1 rounded transition-colors ${
                lang === "uz"
                  ? "bg-brand-cyan/20 text-brand-cyan font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              UZ
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded transition-colors ${
                lang === "en"
                  ? "bg-brand-cyan/20 text-brand-cyan font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{lang === "uz" ? "ISHGA TAYYOR" : "AVAILABLE"}</span>
          </div>

          <a
            href="#contact"
            className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet text-white shadow-lg shadow-brand-blue/25 hover:shadow-brand-violet/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-1.5"
          >
            <span>{lang === "uz" ? "Bog'lanish" : "Let's Talk"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger & Lang Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "uz" ? "en" : "uz")}
            className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-brand-cyan"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/[0.05] border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-white/[0.08] mt-4 flex flex-col gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-brand-cyan rounded-lg hover:bg-white/[0.04]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-white"
          >
            {lang === "uz" ? "Bog'lanish" : "Let's Talk"}
          </a>
        </div>
      )}
    </header>
  );
}
