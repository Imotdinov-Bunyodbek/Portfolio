import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Bunyodbek Imotdinov — Creative Developer & Mobile Engineer",
  description:
    "Bunyodbek Imotdinov - Frontend va Flutter/Android dasturchi. Yuqori unumdorlik, interaktiv animatsiyalar va toza arxitektura.",
  keywords: [
    "Bunyodbek Imotdinov",
    "Frontend Developer",
    "Flutter Developer",
    "Android",
    "Next.js",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`scroll-smooth ${plusJakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-brand-black text-slate-100 font-sans antialiased selection:bg-brand-violet/30 selection:text-brand-cyan overflow-x-hidden relative">
        <CursorFollower />
        <div className="fixed inset-0 subtle-grid pointer-events-none z-0" />
        <div className="bg-mesh-pattern fixed inset-0 pointer-events-none z-0" />
        {children}
      </body>
    </html>
  );
}
