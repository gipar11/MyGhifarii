"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex items-center justify-center mb-6"
      >
        <div className="absolute w-40 h-40 border border-primary/30 rounded-full rotate-45 blur-sm" />
        <div className="absolute w-52 h-52 border border-primary/20 rounded-[40%] -rotate-12" />
        <h1 className="text-6xl font-heading font-bold text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
          GH
        </h1>
      </motion.div>
      <h2 className="text-2xl font-bold tracking-[0.3em] font-heading mb-8">GHIFARI.</h2>
      
      <div className="w-64 h-1 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="h-full bg-primary"
        />
      </div>
      <p className="mt-4 text-textMuted text-sm">Loading Portfolio...</p>
    </motion.div>
  );
}