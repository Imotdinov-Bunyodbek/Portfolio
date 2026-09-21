export type ProjectCategory = "all" | "frontend" | "flutter" | "android";

export interface Project {
  id: string;
  category: "frontend" | "flutter" | "android";
  title: {
    uz: string;
    en: string;
  };
  subtitle?: {
    uz: string;
    en: string;
  };
  description: {
    uz: string;
    en: string;
  };
  features?: {
    uz: string[];
    en: string[];
  };
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: {
    uz: string;
    en: string;
  };
}

export interface SkillGroup {
  category: {
    uz: string;
    en: string;
  };
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Bunyodbek Imotdinov",
    role: {
      uz: "Frontend & Flutter / Mobile Dasturchi",
      en: "Frontend & Flutter / Mobile Developer",
    },
    bio: {
      uz: "2.5 yillik tijoriy tajribaga ega dasturchi. Yirik korporativ ERP tizimlari (builderp.uz), zamonaviy veb platformalar (uyqurilish.uz) hamda Flutter va Android (Kotlin) da murakkab mobil ilovalar (SQB Bank kloni, Texnomart va boshqalar) yaratishga ixtisoslashganman.",
      en: "Software developer with 2.5+ years of production experience. Specialized in enterprise ERP platforms (builderp.uz), modern responsive web solutions (uyqurilish.uz), and advanced mobile applications using Flutter & Android (SQB Bank clone, Texnomart clone, etc.).",
    },
    location: "Toshkent, O'zbekiston",
    phone: "+998 95 008 40 48",
    email: "imotdinovbunyodbek2@gmail.com",
    github: "https://github.com/Imotdinov-Bunyodbek",
    telegram: "https://t.me/imotdinov",
    telegramUsername: "@imotdinov",
    availableForHire: true,
    resumes: {
      frontend: "/bunyodbek-frontend-resume.pdf",
      flutter: "/bunyodbek-flutter-resume.pdf",
    },
  },
  experience: [
    {
      company: "Techsoft",
      domain: "builderp.uz",
      role: {
        uz: "Frontend Dasturchi",
        en: "Frontend Developer",
      },
      period: {
        uz: "Mart 2025 — Hozirgacha (1 yil 7 oy)",
        en: "Mar 2025 — Present (1 yr 7 mos)",
      },
      description: {
        uz: "Kompaniya ichki jarayonlarini raqamlashtirish va avtomatlashtirishga qaratilgan yirik korporativ ERP-tizimi (builderp.uz). Ombor hisobi (Inventory), qurilish obyektlari va binolarni monitoring qilish, xodimlar va brigadalar boshqaruvi hamda moliyaviy to'lov arizalari (Money Requisitions) modullarini ishlab chiqish.",
        en: "Enterprise Resource Planning (ERP) platform for business automation and digitalization (builderp.uz). Engineered warehouse inventory, construction site monitoring, workforce management, and financial requisition flows.",
      },
      stack: [
        "React 19",
        "TypeScript",
        "Vite",
        "Zustand",
        "TanStack React Query",
        "Tailwind CSS",
        "Radix UI (Shadcn UI)",
        "React Hook Form",
        "Zod",
        "TanStack Virtual",
        "Recharts",
        "GitLab CI/CD",
      ],
    },
    {
      company: "GITA Dasturchilar Akademiyasi",
      domain: "Tashkent",
      role: {
        uz: "Dasturchi talaba / Intern",
        en: "Student, Intern",
      },
      period: {
        uz: "Aprel 2024 — Yanvar 2025 (10 oy)",
        en: "Apr 2024 — Jan 2025 (10 mos)",
      },
      description: {
        uz: "Dasturiy ta'minot arxitekturasi, Clean Architecture, SOLID tamoyillari, murakkab mobil va veb arxitekturalarini chuqur o'rganish va amaliy loyihalarda qo'llash.",
        en: "Intensive training in software architecture, Clean Architecture, SOLID principles, and building complex mobile and web systems.",
      },
      stack: ["Android", "Flutter", "Kotlin", "Dart", "Clean Architecture"],
    },
  ],
  stats: [
    {
      value: "2.5+",
      label: { uz: "Yillik Tajriba", en: "Years Experience" },
    },
    {
      value: "10+",
      label: { uz: "Real & Amaliy Loyihalar", en: "Production Projects" },
    },
    {
      value: "100%",
      label: { uz: "Toza & Clean Code", en: "Clean Architecture" },
    },
    {
      value: "2 ta",
      label: { uz: "Yo'nalish (Web + Mobile)", en: "Domains (Web + Mobile)" },
    },
  ],
  projects: [
    {
      id: "builderp",
      category: "frontend",
      title: {
        uz: "BuildERP - Yirik Korporativ ERP Tizimi",
        en: "BuildERP - Enterprise ERP Platform",
      },
      subtitle: {
        uz: "Techsoft kompaniyasida yaratilgan yirik biznes platformasi",
        en: "Enterprise system developed at Techsoft",
      },
      description: {
        uz: "Ombor hisobi (Inventory), qurilish obyektlari monitoringi, xodimlar boshqaruvi va moliyaviy arizalar (Money Requisitions) raqamlashtirilgan keng qamrovli tizim. TanStack Virtual orqali katta hajmdagi ma'lumotlar ultra-tezkor render qilinadi.",
        en: "Comprehensive enterprise ERP for warehouse inventory, construction site monitoring, workforce management, and financial money requisitions with ultra-fast virtualized tables.",
      },
      tags: ["React 19", "TypeScript", "Vite", "Zustand", "TanStack Query", "Tailwind CSS", "Shadcn UI", "Recharts", "GitLab CI/CD"],
      liveUrl: "https://builderp.uz",
      featured: true,
      metrics: {
        uz: "Real Korporativ ERP Loyiha",
        en: "Live Enterprise ERP Project",
      },
    },
    {
      id: "uyqurilish",
      category: "frontend",
      title: {
        uz: "UyQurilish.uz - Qurilish & Arxitektura Portali",
        en: "UyQurilish.uz - Construction & Architecture Portal",
      },
      subtitle: {
        uz: "O'zbekistondagi uy va binolar qurilish xizmatlari portali",
        en: "Full construction and architecture service platform in Uzbekistan",
      },
      description: {
        uz: "Xonadonlar, uylar va binolar qurilishi, arxitektura loyihalash va smeta xizmatlarini taqdim etuvchi keng ko'lamli veb platforma. Yuqori SEO, moslashuvchan dizayn va yuqori tezlik.",
        en: "Production web platform offering turnkey residential construction, architectural blueprints, and automated estimation services with top SEO scores and responsive UX.",
      },
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Responsive UI"],
      liveUrl: "https://uyqurilish.uz",
      featured: true,
      metrics: {
        uz: "Real Ishlab Turgan Tijoriy Loyiha",
        en: "Live Production Client Project",
      },
    },
    {
      id: "sqb-mobile",
      category: "android",
      title: {
        uz: "SQB Mobile - Mobil Bank Ilovasi",
        en: "SQB Mobile - Banking App Clone",
      },
      subtitle: {
        uz: "O'zsanoatqurilishbank mobil ilovasining to'liq kloni",
        en: "Complete mobile banking system with security & card management",
      },
      description: {
        uz: "Avtorizatsiya (PIN-kod, biometriya), bank kartalarini to'liq boshqarish (qo'shish, o'chirish, tahrirlash), pul o'tkazmalari, o'tkazmalar tarixi, keshirash va xavfsiz OAuth2 avtorizatsiya.",
        en: "Mobile banking app with PIN auth, card lifecycle management, peer-to-peer transfers, transactional ledger, multi-module architecture, and OAuth2 security.",
      },
      tags: ["Android", "Kotlin", "Jetpack Compose", "Multi Module", "MVI", "Hilt", "Retrofit", "Room", "OAuth2", "Voyager", "Orbit"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/SQB-bank-clone",
      featured: true,
      metrics: {
        uz: "Multi-Module & Jetpack Compose",
        en: "Multi-Module Architecture",
      },
    },
    {
      id: "texnomart-clone",
      category: "flutter",
      title: {
        uz: "Texnomart Clone - E-Commerce Mobil Ilova",
        en: "Texnomart Clone - E-Commerce Mobile App",
      },
      subtitle: {
        uz: "Yirik elektronika do'koni mobil ilovasi",
        en: "Modern electronic goods e-commerce app with cart & maps",
      },
      description: {
        uz: "Mahsulotlar katalogi, savat boshqaruvi, tovarlarni filtrlash hamda Yandex Xarita orqali do'konlarni qidirish va ko'rsatish tizimi.",
        en: "Online shopping experience featuring categorized catalog, interactive cart management, local caching with Hive, and Yandex Maps store locator.",
      },
      tags: ["Flutter", "Dart", "Bloc", "Dio", "Retrofit", "Hive", "Freezed", "Yandex Maps", "Shimmer"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Texnomart-clone",
      featured: true,
      metrics: {
        uz: "Bloc & Yandex Maps integratsiyasi",
        en: "Bloc State Management & Maps",
      },
    },
    {
      id: "find-my-friends",
      category: "flutter",
      title: {
        uz: "Find My Friends - Jonli Geolokatsiya",
        en: "Find My Friends - Live Geolocation App",
      },
      subtitle: {
        uz: "Do'stlar joylashuvini real vaqt rejimida xaritada kuzatish",
        en: "Real-time location sharing on interactive map",
      },
      description: {
        uz: "Xavfsiz ro'yxatdan o'tish, real vaqtda do'stlarning GPS koordinatalarini uzatish va Yandex Maps orqali jonli kuzatish tizimi.",
        en: "Real-time location sharing application allowing users to track friends on interactive Yandex Maps with Firebase synchronization.",
      },
      tags: ["Flutter", "Firebase", "Hive", "Yandex Maps", "Real-time GPS", "Dart"],
      featured: false,
    },
    {
      id: "currency-converter",
      category: "flutter",
      title: {
        uz: "Valyuta Kurslari & Konverter",
        en: "Currency Converter (CBU API)",
      },
      subtitle: {
        uz: "Markaziy Bank API si asosida valyuta konvertatsiyasi",
        en: "Exchange rate calculations based on Central Bank of Uzbekistan API",
      },
      description: {
        uz: "O'zbekiston Respublikasi Markaziy Bankining rasmiy API'si orqali amaldagi va arxiv kurslarni ko'rsatish, valyutani hisoblash va ko'p tillilik.",
        en: "Currency converter app calculating exchange rates via official Central Bank of Uzbekistan API, with historical charts and offline caching.",
      },
      tags: ["Flutter", "Dio", "Retrofit", "Hive", "Multi-language", "State Management"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Currency-Converter",
      featured: false,
    },
    {
      id: "weather-app",
      category: "flutter",
      title: {
        uz: "Weather App - Ob-havo Ilovasi",
        en: "Weather App - 5-Day Forecast",
      },
      subtitle: {
        uz: "To'liq o'zbek tilidagi ob-havo prognozi",
        en: "Modern weather forecasting application in Uzbek language",
      },
      description: {
        uz: "GPS orqali avtomatik joylashuvni aniqlash, 5 kunlik va soatbay ob-havo bashorati, qidiruv va tungi/kunduzgi mavzu rejimi.",
        en: "Weather forecast application with GPS auto-detection, hourly and 5-day forecasts, search and light/dark theme support.",
      },
      tags: ["Flutter", "GetX", "Dio", "Geolocator GPS", "Shimmer", "SharedPreferences"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/weather",
      featured: false,
    },
    {
      id: "dictionary-app",
      category: "android",
      title: {
        uz: "English-Uzbek Audio Dictionary",
        en: "English-Uzbek Audio Dictionary",
      },
      subtitle: {
        uz: "Ovozli qidiruv va so'zlarni talaffuz qiluvchi lug'at",
        en: "Bilingual dictionary with Speech-to-Text and Text-to-Speech",
      },
      description: {
        uz: "Inglizcha-o'zbekcha lug'at. Ovoz orqali qidirish (Speech-to-Text) va so'zlarni to'g'ri ovozda talaffuz qilib berish (Text-to-Speech) imkoniyati.",
        en: "Offline English-Uzbek dictionary featuring voice input search and audio pronunciation powered by Room database and TTS.",
      },
      tags: ["Android", "Kotlin", "Room DB", "Text-to-Speech", "Speech-to-Text", "Navigation"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Dictionary",
      featured: false,
    },
    {
      id: "music-player",
      category: "android",
      title: {
        uz: "Modern Music Player",
        en: "Modern Android Music Player",
      },
      subtitle: {
        uz: "ExoPlayer va Media3 bilan yaratilgan zamonaviy pleer",
        en: "Local audio player with background playback and fluid animations",
      },
      description: {
        uz: "Musiqa fayllarini yuqori sifatda ijro etuvchi, fonda ishlash va MotionLayout animatsiyalariga ega mobil ilova.",
        en: "Audio player built with Google's Media3 ExoPlayer, background audio services, MotionLayout animations and modern notification controls.",
      },
      tags: ["Android", "Kotlin", "Hilt", "Media3", "ExoPlayer", "MotionLayout"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Music-Player",
      featured: false,
    },
    {
      id: "news-app",
      category: "android",
      title: {
        uz: "News App - Global Yangiliklar",
        en: "Global News Mobile App",
      },
      subtitle: {
        uz: "Jetpack Compose va Kotlin Flow orqali yaratilgan yangiliklar ilovasi",
        en: "News reader powered by Kotlin Coroutines, Flow and Compose",
      },
      description: {
        uz: "Dunyo yangiliklarini onlayn kuzatish, internet aloqasi holatini tekshiruvchi validator va toza reaktiv oqimlar.",
        en: "Real-time news application built with Jetpack Compose, Kotlin Flow, Coroutines and network state monitoring.",
      },
      tags: ["Android", "Jetpack Compose", "Multi Module", "Dagger-Hilt", "Kotlin Flow"],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/News-App",
      featured: false,
    },
  ] as Project[],
  skillGroups: [
    {
      category: { uz: "Frontend & Web", en: "Frontend & Web" },
      skills: [
        "React (v19)",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Vite",
        "Vue.js",
        "Nuxt.js",
        "Tailwind CSS",
        "Radix UI / Shadcn UI",
        "TanStack Query",
        "Zustand / Pinia",
        "React Hook Form / Zod",
        "TanStack Virtual",
        "Recharts",
      ],
    },
    {
      category: { uz: "Mobile (Flutter & Android)", en: "Mobile (Flutter & Android)" },
      skills: [
        "Flutter & Dart",
        "Android (Kotlin / Java)",
        "Jetpack Compose",
        "Bloc & GetX & Riverpod",
        "Multi Module Architecture",
        "Clean Architecture & SOLID",
        "Retrofit & Dio",
        "Room & SQLite & Hive",
        "Dagger-Hilt",
        "Yandex Maps & Google Maps API",
        "ExoPlayer / Media3",
        "Firebase",
      ],
    },
    {
      category: { uz: "DevOps, Asboblar & Tarmoq", en: "DevOps, Tools & APIs" },
      skills: [
        "Git & GitHub",
        "GitLab CI/CD",
        "Docker & Docker-compose",
        "Nginx",
        "REST API & WebSocket",
        "JWT Authentication",
        "Swagger",
        "Postman",
        "pnpm / npm",
      ],
    },
  ] as SkillGroup[],
};
