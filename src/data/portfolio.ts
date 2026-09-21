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
      uz: "2 yildan ortiq amaliy tajribaga ega Frontend va Mobil (Flutter / Android) dasturchiman. Techsoft'da qurilish firmalari uchun mo'ljallangan yirik boshqaruv platformasi (uyqurilish.uz), uning mijozlarni jalb qiluvchi rasmiy landing platformasi (builderp.uz) hamda qulay mobil ilovalar ishlab chiqishda ishtirok etganman. Toza arxitektura (Clean Architecture), yuqori unumdorlik va qulay foydalanuvchi tajribasini (UX) yaratishga alohida e'tibor qarataman.",
      en: "Frontend & Mobile (Flutter / Android) developer with 2+ years of hands-on software engineering experience. At Techsoft, contributed to the core construction management platform (uyqurilish.uz), its product landing & client acquisition portal (builderp.uz), and mobile applications. Focused on clean architecture, performance, and great UX.",
    },
    location: "Jizzax, O'zbekiston",
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
      domain: "uyqurilish.uz / builderp.uz",
      role: {
        uz: "Frontend Dasturchi",
        en: "Frontend Developer",
      },
      period: {
        uz: "Mart 2025 — Iyul 2026 (1 yil 5 oy)",
        en: "Mar 2025 — Jul 2026 (1 yr 5 mos)",
      },
      description: {
        uz: "Quruvchi firmalar o'z faoliyatini to'liq yuritishi uchun mo'ljallangan uyqurilish.uz platformasi va unga yangi korporativ mijozlarni jalb qilishga qaratilgan builderp.uz landing sahifasini ishlab chiqishda qatnashdim. Qurilish obyektlari nazorati, ombor qoldiqlari, ishchilar boshqaruvi va moliyaviy arizalar modullarini yaratdim. Katta hajmdagi ma'lumotlar bilan ishlashda unumdorlikni oshirish uchun TanStack Virtual va optimallashtirilgan kesh mexanizmlarini joriy etdim.",
        en: "Developed the core management platform uyqurilish.uz for construction firms, alongside builderp.uz as the product landing page for lead generation and client acquisition. Engineered site monitoring, inventory, workforce, and financial requisition modules with TanStack Virtual for high performance.",
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
        uz: "Amaliyotchi Dasturchi",
        en: "Practical Trainee / Intern",
      },
      period: {
        uz: "Aprel 2024 — Yanvar 2025 (10 oy)",
        en: "Apr 2024 — Jan 2025 (10 mos)",
      },
      description: {
        uz: "Dasturlash ta'limi bilan birgalikda to'liq amaliyot o'tadim. Clean Architecture, SOLID tamoyillari va jamoaviy ishlash metodologiyasini amalda qo'llab, Android (Kotlin, Jetpack Compose) va Flutter texnologiyalarida bir nechta mustaqil mobil loyihalarni ishlab chiqdim.",
        en: "Completed an intensive engineering curriculum alongside hands-on project internships. Applied Clean Architecture and SOLID design principles to build scalable Android (Kotlin/Compose) and Flutter mobile apps.",
      },
      stack: [
        "Android",
        "Flutter",
        "Kotlin",
        "Dart",
        "Clean Architecture",
        "Jetpack Compose",
        "Bloc",
      ],
    },
  ],
  stats: [
    {
      value: "2+ yil",
      label: { uz: "Amaliy Tajriba", en: "Hands-on Experience" },
    },
    {
      value: "10+",
      label: { uz: "Amaliy Loyihalar", en: "Completed Projects" },
    },
    {
      value: "100%",
      label: { uz: "Clean Architecture", en: "Clean Architecture" },
    },
    {
      value: "2 ta",
      label: { uz: "Asosiy Yo'nalish (Web & Mobile)", en: "Focus (Web & Mobile)" },
    },
  ],
  projects: [
    {
      id: "uyqurilish",
      category: "frontend",
      title: {
        uz: "UyQurilish.uz — Quruvchi Firmalar Uchun Boshqaruv Platformasi",
        en: "UyQurilish.uz — Construction Firm Management Platform",
      },
      subtitle: {
        uz: "Qurilish kompaniyalari faoliyatini to'liq avtomatlashtiruvchi platforma",
        en: "Core management platform engineered for construction enterprises",
      },
      description: {
        uz: "Quruvchi firmalar o'z biznes jarayonlarini yuritishi uchun mo'ljallangan yirik boshqaruv platformasi. Ombor qoldiqlari, qurilish obyektlari borishi, ishchilar brigadalari hamda moliyaviy to'lov arizalarini to'liq nazorat qilish imkonini beradi. TanStack Virtual texnologiyasi hisobiga katta hajmdagi ma'lumotlar jadvallari ultra-tezkor ishlaydi.",
        en: "Comprehensive management system built for construction firms to streamline daily operations, warehouse stock, construction site progress, workforce scheduling, and financial requisitions. Powered by TanStack Virtual for rapid table rendering.",
      },
      tags: [
        "React 19",
        "TypeScript",
        "Vite",
        "Zustand",
        "TanStack Query",
        "Tailwind CSS",
        "Shadcn UI",
        "TanStack Virtual",
        "GitLab CI/CD",
      ],
      liveUrl: "https://uyqurilish.uz",
      featured: true,
      metrics: {
        uz: "Asosiy Boshqaruv Tizimi",
        en: "Core Management Platform",
      },
    },
    {
      id: "builderp",
      category: "frontend",
      title: {
        uz: "BuildERP.uz — Rasmiy Landing & Taqdimot Sahifasi",
        en: "BuildERP.uz — Official Product Landing Page",
      },
      subtitle: {
        uz: "Platforma uchun yangi mijozlar va qurilish firmalarini jalb qilish sayti",
        en: "Client acquisition and product showcase portal",
      },
      description: {
        uz: "Qurilish firmalariga platforma imkoniyatlarini tanishtiruvchi va yangi mijozlarni (lidlarni) jalb qiluvchi zamonaviy landing page. Tizimning barcha afzalliklari, narxlari va interaktiv namoyishi taqdim etilgan, yuqori konversiya hamda SEO talablariga to'liq moslashtirilgan.",
        en: "Product showcase and lead generation landing page designed to attract and onboard construction companies. Features interactive demonstrations, feature overviews, high SEO optimization, and responsive user experience.",
      },
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SEO",
        "Responsive UI",
        "Conversion UX",
      ],
      liveUrl: "https://builderp.uz",
      featured: true,
      metrics: {
        uz: "Mijozlarni Jalb Qilish Sayti",
        en: "Lead Generation Landing",
      },
    },
    {
      id: "sqb-mobile",
      category: "android",
      title: {
        uz: "SQB Mobile — Mobil Bank Ilovasi",
        en: "SQB Mobile — Banking Application",
      },
      subtitle: {
        uz: "O'zsanoatqurilishbank ilovasi asosidagi xavfsiz bank yechimi",
        en: "Mobile banking system clone built with Jetpack Compose",
      },
      description: {
        uz: "Xavfsiz biometrik avtorizatsiya (Face/Fingerprint), bank kartalari boshqaruvi, P2P pul o'tkazmalari va tranzaksiyalar tarixini o'z ichiga olgan mobil bank ilovasi. Clean Architecture va ko'p modulli (Multi-Module) arxitektura tamoyillari asosida ishlab chiqilgan.",
        en: "Mobile banking application featuring biometric auth, card lifecycle management, peer-to-peer transfers, and transactional history. Built following Multi-Module and Clean Architecture principles.",
      },
      tags: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Multi Module",
        "MVI",
        "Hilt",
        "Retrofit",
        "Room",
        "OAuth2",
        "Voyager",
        "Orbit",
      ],
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
        uz: "Texnomart Clone — E-Commerce Mobil Ilova",
        en: "Texnomart Clone — E-Commerce Mobile App",
      },
      subtitle: {
        uz: "Elektronika do'koni mobil ilovasining qulay talqini",
        en: "Modern electronic goods shopping app with Yandex Maps",
      },
      description: {
        uz: "Mahsulotlar katalogi, qidiruv va filtrlash tizimi, savat boshqaruvi hamda Yandex Xarita orqali eng yaqin filiallarni aniqlash imkoniyatiga ega elektron tijorat ilovasi. BLoC arxitekturasi yordamida holatlar barqaror boshqariladi.",
        en: "Comprehensive mobile shopping experience featuring instant product search, cart management, and interactive Yandex Maps store locator powered by Bloc state management.",
      },
      tags: [
        "Flutter",
        "Dart",
        "Bloc",
        "Dio",
        "Retrofit",
        "Hive",
        "Freezed",
        "Yandex Maps",
        "Shimmer",
      ],
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
        uz: "Find My Friends — Jonli Geolokatsiya Ilovasi",
        en: "Find My Friends — Live Geolocation App",
      },
      subtitle: {
        uz: "Foydalanuvchilar joylashuvini xaritada real vaqtda kuzatish",
        en: "Real-time location tracking on interactive map",
      },
      description: {
        uz: "GPS koordinatalarini real vaqt rejimida Firebase orqali uzatish va Yandex Xarita ustida foydalanuvchilar harakatini jonli ko'rsatish imkoniyatini beruvchi geolokatsiya ilovasi.",
        en: "Real-time location tracking app that synchronizes GPS coordinates via Firebase and renders interactive live movement on Yandex Maps.",
      },
      tags: [
        "Flutter",
        "Firebase",
        "Hive",
        "Yandex Maps",
        "Real-time GPS",
        "Dart",
      ],
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
        uz: "Markaziy Bankning rasmiy API'si asosida ishlaydi",
        en: "Official exchange rates from the Central Bank of Uzbekistan",
      },
      description: {
        uz: "O'zbekiston Respublikasi Markaziy Banki rasmiy API ma'lumotlari asosida amaldagi kurslarni kuzatish va tezkor konvertatsiya qilish imkonini beruvchi ilova. Oflayn kesh tizimi bilan ta'minlangan.",
        en: "Currency conversion application powered by official Central Bank of Uzbekistan API, featuring instant calculations and offline data caching.",
      },
      tags: [
        "Flutter",
        "Dio",
        "Retrofit",
        "Hive",
        "Multi-language",
        "State Management",
      ],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Currency-Converter",
      featured: false,
    },
    {
      id: "weather-app",
      category: "flutter",
      title: {
        uz: "Weather App — Ob-havo Ma'lumotlari",
        en: "Weather App — 5-Day Forecast",
      },
      subtitle: {
        uz: "Aniq ob-havo bashorati va dinamik interfeys",
        en: "Minimalist local weather forecasting app",
      },
      description: {
        uz: "GPS orqali avtomatik joylashuvni aniqlash, 5 kunlik va soatbay ob-havo ma'lumotlarini taqdim etuvchi zamonaviy mobil ilova.",
        en: "Weather forecast app featuring GPS auto-detection, hourly and 5-day forecasts, and responsive dark/light mode UI.",
      },
      tags: [
        "Flutter",
        "GetX",
        "Dio",
        "Geolocator GPS",
        "Shimmer",
        "SharedPreferences",
      ],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/weather",
      featured: false,
    },
    {
      id: "dictionary-app",
      category: "android",
      title: {
        uz: "Inglizcha-O'zbekcha Ovozli Lug'at",
        en: "English-Uzbek Audio Dictionary",
      },
      subtitle: {
        uz: "Ovozli qidiruv va audio talaffuz imkoniyati",
        en: "Offline dictionary with voice input & pronunciation",
      },
      description: {
        uz: "Ovoz orqali qidirish (Speech-to-Text) va so'zlarni to'g'ri talaffuz qilish (Text-to-Speech) tizimlariga ega, to'liq oflayn ishlovchi lug'at ilovasi. Room DB bilan integratsiya qilingan.",
        en: "Offline dictionary featuring speech-to-text voice search and text-to-speech pronunciation, backed by an optimized Room database.",
      },
      tags: [
        "Android",
        "Kotlin",
        "Room DB",
        "Text-to-Speech",
        "Speech-to-Text",
        "Navigation",
      ],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Dictionary",
      featured: false,
    },
    {
      id: "music-player",
      category: "android",
      title: {
        uz: "Modern Music Player — Audio Pleer",
        en: "Modern Android Music Player",
      },
      subtitle: {
        uz: "ExoPlayer va Media3 bilan yaratilgan zamonaviy pleer",
        en: "Local audio player with background playback and fluid animations",
      },
      description: {
        uz: "Google Media3 ExoPlayer tizimi asosida qurilgan audio pleer. Fondagi jarayonlar (Foreground Service) va MotionLayout animatsiyalari bilan boyitilgan.",
        en: "Local audio player built with Google Media3 ExoPlayer, background audio services, lock screen controls, and MotionLayout animations.",
      },
      tags: [
        "Android",
        "Kotlin",
        "Hilt",
        "Media3",
        "ExoPlayer",
        "MotionLayout",
      ],
      githubUrl: "https://github.com/Imotdinov-Bunyodbek/Music-Player",
      featured: false,
    },
    {
      id: "news-app",
      category: "android",
      title: {
        uz: "News App — Global Yangiliklar",
        en: "Global News Mobile App",
      },
      subtitle: {
        uz: "Jetpack Compose va Kotlin Flow orqali yaratilgan ilova",
        en: "Real-time news feed crafted with Jetpack Compose",
      },
      description: {
        uz: "Zamonaviy Jetpack Compose va reaktiv Kotlin Flow oqimlari orqali xalqaro yangiliklar tasmasini taqdim etuvchi va tarmoq holatini monitoring qiluvchi mobil ilova.",
        en: "Real-time news application built with Jetpack Compose and Kotlin Flow, featuring network status observation and modular codebase.",
      },
      tags: [
        "Android",
        "Jetpack Compose",
        "Multi Module",
        "Dagger-Hilt",
        "Kotlin Flow",
      ],
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
      category: {
        uz: "Mobile (Flutter & Android)",
        en: "Mobile (Flutter & Android)",
      },
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
