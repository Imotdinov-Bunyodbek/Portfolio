"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, ProjectCategory } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";
import {
  Send,
  ExternalLink,
  Code2,
  Sparkles,
  Globe,
  Mail,
  MapPin,
  CheckCircle2,
  Terminal,
  Cpu,
  Smartphone,
  Briefcase,
  FileDown,
  Layers,
  Phone,
  Filter,
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"uz" | "en">("uz");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const { personal, stats, projects, skillGroups, experience } = PORTFOLIO_DATA;

  const t = {
    heroTag:
      lang === "uz"
        ? "Yangi loyihalar va hamkorlikka tayyorman"
        : "Available for new roles & projects",
    greeting: lang === "uz" ? "Salom, men" : "Hello, I am",
    viewProjects: lang === "uz" ? "Loyihalarim" : "View Projects",
    contactMe: lang === "uz" ? "Bog'lanish" : "Contact Me",
    experienceTitle: lang === "uz" ? "Ish Tajribasi" : "Work Experience",
    experienceDesc:
      lang === "uz"
        ? "Jamoaviy va korporativ loyihalarda orttirilgan amaliy tajriba"
        : "Production experience in corporate and collaborative software projects",
    projectsTitle: lang === "uz" ? "Asosiy Loyihalarim" : "Featured Projects",
    projectsDesc:
      lang === "uz"
        ? "Frontend, Flutter va Android yo'nalishlarida amalga oshirilgan amaliy ishlarim"
        : "Web, Flutter, and native Android applications built with modern engineering standards",
    allProjects: lang === "uz" ? "Barchasi" : "All",
    frontendTab: "Web & Frontend",
    flutterTab: "Flutter Apps",
    androidTab: "Android (Kotlin)",
    skillsTitle:
      lang === "uz" ? "Texnologiyalar & Stack" : "Tech Stack & Skills",
    skillsDesc:
      lang === "uz"
        ? "Ishlab chiqish jarayonida muntazam qo'llaydigan asosiy texnologiyalarim"
        : "Core tools and technologies I use to build robust digital products",
    liveDemo: lang === "uz" ? "Saytni ko'rish" : "Live Demo",
    sourceCode: lang === "uz" ? "GitHub Kod" : "Source Code",
    downloadFrontendResume:
      lang === "uz" ? "Frontend CV (PDF)" : "Frontend CV (PDF)",
    downloadFlutterResume:
      lang === "uz" ? "Flutter CV (PDF)" : "Flutter CV (PDF)",
    rights:
      lang === "uz" ? "Barcha huquqlar himoyalangan" : "All rights reserved",
    letsWork:
      lang === "uz" ? "Keling, birgalikda ishlaymiz" : "Let's work together",
    letsWorkDesc:
      lang === "uz"
        ? "Yangi loyiha, hamkorlik yoki bo'sh ish o'rni bo'yicha takliflarga doim ochiqman. Men bilan qulay usulda bog'lanishingiz mumkin."
        : "Open for full-time opportunities, high-impact projects, and engineering collaborations. Feel free to get in touch.",
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-cyan-500/15 to-blue-600/15 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[850px] right-[-100px] w-[550px] h-[550px] bg-purple-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[1700px] left-[-100px] w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold tracking-tight group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-sm group-hover:scale-105 transition-transform">
              BI
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Bunyodbek.dev
            </span>
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a
                href="#experience"
                className="hover:text-cyan-400 transition-colors"
              >
                {lang === "uz" ? "Tajriba" : "Experience"}
              </a>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
              >
                {lang === "uz" ? "Loyihalar" : "Projects"}
              </a>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition-colors"
              >
                {lang === "uz" ? "Ko'nikmalar" : "Skills"}
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                {lang === "uz" ? "Aloqa" : "Contact"}
              </a>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-1 text-xs font-semibold">
              <button
                onClick={() => setLang("uz")}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === "uz"
                    ? "bg-cyan-500 text-slate-950 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === "en"
                    ? "bg-cyan-500 text-slate-950 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{t.heroTag}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {t.greeting}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            {personal.role[lang]}
          </p>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {personal.bio[lang]}
          </p>

          {/* Buttons: Projects, Telegram, CV Downloads */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <Code2 className="w-4 h-4" />
              <span>{t.viewProjects}</span>
            </a>

            <a
              href={personal.telegram}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-medium border border-slate-800 transition-all flex items-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Telegram ({personal.telegramUsername})</span>
            </a>

            <a
              href={personal.resumes.frontend}
              download
              className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all flex items-center gap-2 text-sm font-medium active:scale-95"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>{t.downloadFrontendResume}</span>
            </a>

            <a
              href={personal.resumes.flutter}
              download
              className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all flex items-center gap-2 text-sm font-medium active:scale-95"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>{t.downloadFlutterResume}</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-800/80">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm flex flex-col items-center"
              >
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 text-center font-medium">
                  {stat.label[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <div className="mb-10">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
            <Briefcase className="w-4 h-4" />
            <span>CAREER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {t.experienceTitle}
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            {t.experienceDesc}
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    <span>{item.company}</span>
                    {item.company === "Techsoft" ? (
                      <span className="inline-flex items-center gap-2">
                        <a
                          href="https://uyqurilish.uz"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 inline-flex items-center gap-1"
                        >
                          uyqurilish.uz <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="https://builderp.uz"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 inline-flex items-center gap-1"
                        >
                          builderp.uz <ExternalLink className="w-3 h-3" />
                        </a>
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-400">
                        {item.domain}
                      </span>
                    )}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-0.5">
                    {item.role[lang]}
                  </p>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 w-fit">
                  {item.period[lang]}
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with Filtering */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {t.projectsTitle}
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              {t.projectsDesc}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 w-fit">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.allProjects} ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "frontend"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.frontendTab}
            </button>
            <button
              onClick={() => setActiveCategory("flutter")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "flutter"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.flutterTab}
            </button>
            <button
              onClick={() => setActiveCategory("android")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "android"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.androidTab}
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isHighlight =
              project.id === "uyqurilish" ||
              project.id === "builderp" ||
              project.id === "sqb-mobile";

            return (
              <div
                key={project.id}
                className={`relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  project.id === "uyqurilish" || project.id === "builderp"
                    ? "md:col-span-2 bg-gradient-to-b from-slate-900/90 to-slate-950 border-cyan-500/40 shadow-xl shadow-cyan-950/20 p-6 sm:p-8"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700/80 p-6"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400">
                        {project.category === "frontend" && (
                          <Globe className="w-5 h-5" />
                        )}
                        {project.category === "flutter" && (
                          <Smartphone className="w-5 h-5" />
                        )}
                        {project.category === "android" && (
                          <Terminal className="w-5 h-5" />
                        )}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title[lang]}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                            {project.subtitle[lang]}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-xs font-bold uppercase rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {project.metrics && (
                    <div className="mb-4">
                      <span className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        ● {project.metrics[lang]}
                      </span>
                    </div>
                  )}

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold transition-all shadow-md active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.liveDemo}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{t.sourceCode}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <div className="mb-10">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
            <Cpu className="w-4 h-4" />
            <span>ARCHITECTURE & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {t.skillsTitle}
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            {t.skillsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg text-white">
                  {group.category[lang]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs font-medium hover:border-cyan-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action & Contact */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden text-center">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {t.letsWork}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg mb-8">
            {t.letsWorkDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personal.telegram}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: {personal.telegramUsername}</span>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-base border border-slate-700 transition-all flex items-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{personal.phone}</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-base border border-slate-700 transition-all flex items-center gap-2 active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{personal.email}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm mt-8">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>{personal.location}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
