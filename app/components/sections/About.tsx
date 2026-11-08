"use client";
import { motion } from "motion/react";
import { Briefcase, Trophy, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Kiri: Foto (Placeholder dulu) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-surface bg-surface"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          <span className="absolute inset-0 flex items-center justify-center text-textMuted z-20">[Foto Ghifari Formal]</span>
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
            <span className="text-primary font-medium tracking-wide">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get to Know Me</h2>
          
          <p className="text-textMuted text-lg leading-relaxed mb-8">
            I'm an Information Systems student at UBSI, passionate about web development, UI/UX design, and data analytics. I enjoy turning complex problems into simple and elegant digital solutions.
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface border border-surface/50 rounded-xl p-5 text-center">
              <Briefcase className="text-primary mx-auto mb-2" size={24} />
              <span className="block text-2xl font-bold text-textMain mb-1">12+</span>
              <span className="text-xs text-textMuted">Projects</span>
            </div>
            <div className="bg-surface border border-surface/50 rounded-xl p-5 text-center">
              <Trophy className="text-yellow-500 mx-auto mb-2" size={24} />
              <span className="block text-2xl font-bold text-textMain mb-1">8</span>
              <span className="text-xs text-textMuted">Certificates</span>
            </div>
            <div className="bg-surface border border-surface/50 rounded-xl p-5 text-center">
              <Users className="text-blue-400 mx-auto mb-2" size={24} />
              <span className="block text-2xl font-bold text-textMain mb-1">3+</span>
              <span className="text-xs text-textMuted">Competitions</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}