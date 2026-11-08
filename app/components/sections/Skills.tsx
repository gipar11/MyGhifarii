"use client";
import { motion } from "motion/react";

const skillsData = [
  { name: "Next.js", category: "Frontend", icon: "N" },
  { name: "React", category: "Frontend", icon: "⚛" },
  { name: "TypeScript", category: "Frontend", icon: "TS" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🌊" },
  { name: "Laravel", category: "Backend", icon: "L" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Power BI", category: "Data", icon: "📊" },
  { name: "Figma", category: "Design", icon: "🎨" },
  { name: "Docker", category: "Tools", icon: "🐳" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Technical Skills</h2>
          <p className="text-textMuted">Technologies and tools I use to build amazing things.</p>
        </motion.div>

        {/* Filter Buttons (Hiasan visual dulu) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Frontend", "Backend", "Database", "Tools", "Others"].map((cat, i) => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 ? "bg-primary text-white" : "bg-surface text-textMuted hover:text-textMain border border-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Ikon */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-surface border border-surface/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-textMain">{skill.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
