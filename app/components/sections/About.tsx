"use client";
import { motion } from "motion/react";
import { Briefcase, Trophy, Users } from "lucide-react";
import { dictionary } from "@/app/data/dictionary";

export default function About({ lang }: { lang: "ID" | "EN" }) {
  const t = dictionary[lang].about;

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Kiri: Foto Profil */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-surface bg-surface"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          
          {/* Tag <img> untuk memanggil foto asli */}
          <img 
            src="/ghifar.jpg" 
            alt="Ghifari" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
        </motion.div>

        {/* Kanan: Teks & Statistik */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <span className="text-primary font-medium tracking-wide">{lang === "ID" ? "Tentang Saya" : "About Me"}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t.title}</h2>
          
          <p className="text-textMuted text-lg leading-relaxed mb-8">
            {t.desc}
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface border border-surface/50 rounded-xl p-5 text-center">
              <Briefcase className="text-primary mx-auto mb-2" size={24} />
              <span className="block text-2xl font-bold text-textMain mb-1">12+</span>
              <span className="text-xs text-textMuted">{t.statProjects}</span>
            </div>
            <div className="bg-surface border border-surface/50 rounded-xl p-5 text-center">
              <Trophy className="text-yellow-500 mx-auto mb-2" size={24} />
              <span className="block text-2xl font-bold text-textMain mb-1">8</span>
              <span className="text-xs text-textMuted">{t.statCerts}</span>
            </div>
            <div className="bg-surface border border-surface/50 rounded-xl p-5 text-center">
              <Users className="text-blue-400 mx-auto mb-2" size={24} />
              <span className="block text-2xl font-bold text-textMain mb-1">3+</span>
              <span className="text-xs text-textMuted">{t.statComp}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}