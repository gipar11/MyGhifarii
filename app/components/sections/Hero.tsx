"use client";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Teks Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }} 
        >
          <p className="text-primary font-medium mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-4 text-textMain">
            Muhammad <span className="text-primary">Ghifari</span><br />Ar Rozaq
          </h1>
          <p className="text-textMuted text-lg mb-6">
            Full Stack Developer &bull; UI/UX Designer &bull; Business Intelligence
          </p>
          <p className="text-textMuted/80 max-w-md mb-8">
            Building digital solutions through technology, design, and data.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-glow transition-all">
              Explore My Projects <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 border border-surface text-textMain px-6 py-3 rounded-lg font-medium hover:border-primary transition-all">
              Download CV <Download size={18} />
            </button>
          </div>
        </motion.div>

        {/* Foto Kanan (Placeholder dulu) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-surface bg-surface flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
             <span className="text-textMuted z-20">[Foto Profil Kamu]</span>
          </div>
          
          <div className="absolute bottom-4 right-4 md:right-10 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-surface text-xs text-textMain z-20">
            Sistem Informasi &bull; UBSI &bull; Semester 5
          </div>
        </motion.div>
      </div>
    </section>
  );
}