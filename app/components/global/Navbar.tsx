"use client";
import { Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-wider text-textMain">
          GHIFARI.
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMuted">
          <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#analytics" className="hover:text-primary transition-colors">Analytics</Link>
          <Link href="#achievements" className="hover:text-primary transition-colors">Achievements</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full border border-surface text-textMuted hover:text-primary transition-colors">
            <Sun size={18} />
          </button>
          <button className="px-4 py-1.5 rounded-full border border-surface text-xs font-semibold flex items-center gap-1 hover:border-primary transition-colors text-textMain">
            ID <span className="text-textMuted">/</span> EN
          </button>
        </div>
      </div>
    </nav>
  );
}