"use client";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  lang: "ID" | "EN";
  setLang: (lang: "ID" | "EN") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu HP

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

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Daftar menu agar tidak nulis ulang
  const menuItems = [
    { name: "Home", id: "home" },
    { name: lang === "ID" ? "Tentang" : "About", id: "about" },
    { name: lang === "ID" ? "Keahlian" : "Skills", id: "skills" },
    { name: lang === "ID" ? "Proyek" : "Projects", id: "projects" },
    { name: lang === "ID" ? "Analitik" : "Analytics", id: "analytics" },
    { name: lang === "ID" ? "Prestasi" : "Achievements", id: "achievements" },
    { name: lang === "ID" ? "Kontak" : "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo & Teks Brand */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <motion.div 
            className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 flex items-center justify-center bg-background relative"
            animate={{ 
              boxShadow: ["0px 0px 10px rgba(59,130,246,0.2)", "0px 0px 20px rgba(59,130,246,0.6)", "0px 0px 10px rgba(59,130,246,0.2)"] 
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <img src="/logo GH.png" alt="GH Logo" className="w-full h-full object-cover scale-110" />
          </motion.div>
          
          <span className="text-base font-heading italic font-bold tracking-tighter text-shimmer">
            GHIFARI
          </span>
        </Link>
        
        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMuted">
          {menuItems.map((item) => (
            <Link key={item.id} href={`#${item.id}`} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Tombol Tema, Bahasa, & Hamburger */}
        <div className="flex items-center space-x-4 z-50">
          <button onClick={toggleTheme} className="p-2 rounded-full border border-surface text-textMuted hover:text-primary transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
            className="px-4 py-1.5 rounded-full border border-surface text-xs font-semibold flex items-center gap-1 hover:border-primary transition-colors text-textMain"
          >
            {lang} <span className="text-textMuted">/</span> {lang === "ID" ? "EN" : "ID"}
          </button>

          {/* Tombol Hamburger (Hanya muncul di HP) */}
          <button 
            className="md:hidden p-2 text-textMain"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu untuk HP */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-surface shadow-xl flex flex-col px-6 py-4 space-y-4"
          >
            {menuItems.map((item) => (
              <Link 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={closeMenu} // Tutup menu saat link diklik
                className="text-textMain font-medium text-lg hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}