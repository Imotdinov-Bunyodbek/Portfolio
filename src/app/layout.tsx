import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bunyodbek Imotdinov | Portfolio & Full-Stack Developer",
  description: "Bunyodbek Imotdinov - Full-stack & Frontend Dasturchi. Uyqurilish.uz muallifi va zamonaviy veb loyihalar ishlab chiquvchisi.",
  keywords: ["Bunyodbek Imotdinov", "Frontend Developer", "Full Stack", "Uyqurilish.uz", "Next.js", "React", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
