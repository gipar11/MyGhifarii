"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <span className="text-primary font-medium tracking-wide">Data Analytics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Turning Data <br /> into Insights
          </h2>
          
          <p className="text-textMuted text-lg mb-8">
            Interactive dashboard to visualize important data and insights. I use tools like Power BI, Python, and SQL to extract value from raw data.
          </p>

          <button className="flex items-center gap-2 bg-surface border border-surface/50 text-textMain px-6 py-3 rounded-lg font-medium hover:border-primary transition-all">
            View Dashboard <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Kanan: Mockup Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface border border-surface/50 rounded-2xl p-6 relative"
        >
          <div className="flex justify-between items-center mb-8 border-b border-surface/50 pb-4">
            <span className="font-semibold text-sm">Overview</span>
            <span className="text-xs text-textMuted bg-background px-3 py-1 rounded-full border border-surface">Last 30 days</span>
          </div>

          {/* Angka Statistik */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <p className="text-xs text-textMuted mb-1">Total Visitors</p>
              <h4 className="text-2xl font-bold font-heading">24.5K</h4>
              <span className="text-xs text-green-400">↑ 12.5%</span>
            </div>
            <div>
              <p className="text-xs text-textMuted mb-1">Projects Viewed</p>
              <h4 className="text-2xl font-bold font-heading">8.2K</h4>
              <span className="text-xs text-green-400">↑ 18.7%</span>
            </div>
            <div>
              <p className="text-xs text-textMuted mb-1">Conversion Rate</p>
              <h4 className="text-2xl font-bold font-heading">3.7%</h4>
              <span className="text-xs text-yellow-400">↑ 0.9%</span>
            </div>
          </div>

          {/* Grafik Garis Palsu (CSS) */}
          <div className="h-32 w-full relative border-b border-l border-surface/50 flex items-end">
             {/* SVG Garis Grafik */}
             <svg viewBox="0 0 100 40" className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none">
                <path d="M0,40 Q10,20 20,30 T40,10 T60,25 T80,5 T100,20 L100,40 L0,40 Z" fill="url(#gradient)" opacity="0.2"/>
                <path d="M0,40 Q10,20 20,30 T40,10 T60,25 T80,5 T100,20" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
             </svg>
          </div>
          {/* Grafik Batang Palsu (CSS) */}
          <div className="flex gap-2 mt-4 h-12 items-end justify-end">
            <div className="w-6 bg-primary/20 h-1/3 rounded-t"></div>
            <div className="w-6 bg-primary/40 h-2/3 rounded-t"></div>
            <div className="w-6 bg-primary h-full rounded-t"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}