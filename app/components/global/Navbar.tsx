"use client";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  lang: "ID" | "EN";
  setLang: (lang: "ID" | "EN") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-wider text-textMain">
          GHIFARI.
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMuted">
          <Link href="#home" className="hover:text-primary transition-colors">{lang === "ID" ? "Home" : "Home"}</Link>
          <Link href="#about" className="hover:text-primary transition-colors">{lang === "ID" ? "Tentang" : "About"}</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">{lang === "ID" ? "Keahlian" : "Skills"}</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">{lang === "ID" ? "Proyek" : "Projects"}</Link>
          <Link href="#analytics" className="hover:text-primary transition-colors">{lang === "ID" ? "Analitik" : "Analytics"}</Link>
          <Link href="#achievements" className="hover:text-primary transition-colors">{lang === "ID" ? "Prestasi" : "Achievements"}</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">{lang === "ID" ? "Kontak" : "Contact"}</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full border border-surface text-textMuted hover:text-primary transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
            className="px-4 py-1.5 rounded-full border border-surface text-xs font-semibold flex items-center gap-1 hover:border-primary transition-colors text-textMain"
          >
            {lang} <span className="text-textMuted">/</span> {lang === "ID" ? "EN" : "ID"}
          </button>
        </div>
      </div>
    </nav>
  );
}