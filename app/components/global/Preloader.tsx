"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex items-center justify-center mb-8 w-36 h-36"
      >
        {/* 1. Siluet Cahaya Berputar (Orbit) */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-transparent to-primary/20 blur-md"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* 2. Garis Orbit Tipis yang berputar berlawanan arah */}
        <motion.div 
          className="absolute inset-1 rounded-full border border-primary/20 border-t-primary"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* 3. Cahaya Denyut (Pulse) */}
        <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
        
        {/* 4. Logo GH (Dipotong jadi bulat) */}
        <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center bg-background">
            <img 
              src="/logo GH.png" 
              alt="GH Logo" 
              // Kita perkecil ukurannya sedikit agar pas di dalam lingkaran
              className="w-full h-full object-cover scale-110" 
            />
        </div>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl font-bold tracking-[0.3em] font-heading mb-8 text-textMain"
      >
        GHIFARI
      </motion.h2>
      
      {/* Progress Bar Loading */}
      <div className="w-64 h-1 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-primary"
        />
      </div>
      <p className="mt-4 text-textMuted text-sm animate-pulse">Loading...</p>
    </motion.div>
  );
}