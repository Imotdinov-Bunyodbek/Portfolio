"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ContactSectionProps {
  lang: "uz" | "en";
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const { personal } = PORTFOLIO_DATA;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/10 to-brand-violet/15 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative glass-panel rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 overflow-hidden">
        {/* Ambient Corner Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Info */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-[2px] bg-brand-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                05 / {lang === "uz" ? "HAMKORLIK" : "COLLABORATION"}
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              {lang === "uz" ? "Ajoyib loyiha " : "Let's build something "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
                {lang === "uz" ? "yaratamiz." : "extraordinary."}
              </span>
            </h2>

            <p className="mt-6 text-slate-300 text-base leading-relaxed">
              {lang === "uz"
                ? "Yangi startap, murakkab veb/mobil tizim yoki korporativ platforma yaratmoqchimisiz? Men bilan qulay usulda bog'laning, birgalikda eng samarali yechimni topamiz."
                : "Have a bold concept, an upcoming product redesign, or an interactive web/mobile app in mind? Reach out and let's craft something unforgettable together."}
            </p>

            <div className="mt-8 flex flex-col gap-4 font-mono text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-brand-cyan transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/40">
                  <Mail className="w-4 h-4 text-brand-cyan" />
                </div>
                <span>{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-slate-300 hover:text-brand-blue transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-brand-blue/40">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <span>{personal.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-violet" />
                </div>
                <span>{personal.location} &middot; Masofaviy / Remote</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={personal.telegram}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all font-mono text-xs flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram: {personal.telegramUsername}</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-brand-violet/50 hover:bg-brand-violet/10 transition-all font-mono text-xs"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-brand-surface/80 p-6 sm:p-8 rounded-2xl border border-white/10"
            >
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {lang === "uz" ? "Ismingiz" : "Your Name"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === "uz" ? "Masalan: Javohir" : "e.g. Alex Morgan"}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {lang === "uz" ? "Email yoki Telegram" : "Email or Telegram"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === "uz" ? "email@manzil.uz yoki @username" : "alex@company.com"}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {lang === "uz" ? "Loyiha haqida qisqacha" : "Project Brief & Goals"}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    lang === "uz"
                      ? "Loyiha turi, muddat va talablar haqida..."
                      : "Tell me about your product timeline, goals, and technical requirements..."
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                />
              </div>

              {submitted ? (
                <div className="flex items-center justify-center gap-2 text-center text-xs font-mono text-emerald-400 py-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {lang === "uz"
                      ? "Xabar qabul qilindi! Tez orada aloqaga chiqaman."
                      : "Message received! I will reply within 24 hours."}
                  </span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet text-white font-semibold text-sm tracking-wide shadow-lg shadow-brand-blue/30 hover:shadow-brand-violet/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <span>
                    {isSubmitting
                      ? lang === "uz"
                        ? "Yuborilmoqda..."
                        : "Dispatching..."
                      : lang === "uz"
                      ? "Xabar Yuborish"
                      : "Send Message"}
                  </span>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
