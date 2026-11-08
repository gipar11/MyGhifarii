"use client";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projectsData = [
  {
    title: "Dashboard Analytics",
    desc: "Interactive dashboard to visualize important data and insights.",
    tech: "Next.js • Tailwind CSS",
    type: "Data",
    imgColor: "bg-blue-900/40",
  },
  {
    title: "E-Commerce App",
    desc: "A full-featured online store with cart and payment integration.",
    tech: "Laravel • MySQL",
    type: "Web",
    imgColor: "bg-purple-900/40",
  },
  {
    title: "Portfolio Website",
    desc: "My personal branding site built with modern web tech.",
    tech: "Next.js • Framer Motion",
    type: "UI/UX",
    imgColor: "bg-teal-900/40",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              <span className="text-primary font-medium tracking-wide text-sm">My Projects</span>
            </div>
            <h2 className="text-4xl font-heading font-bold mb-2">Some of My Works</h2>
            <p className="text-textMuted max-w-md">
              A collection of projects I've built, from academic assignments to personal projects.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-surface p-1.5 rounded-full border border-surface/50">
            {["All", "Web", "UI/UX", "Data"].map((filter, i) => (
              <button 
                key={filter}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  i === 0 ? "bg-primary text-white" : "text-textMuted hover:text-textMain"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface border border-surface/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
            >
              {/* Thumbnail Mockup */}
              <div className={`h-48 ${project.imgColor} relative flex items-center justify-center border-b border-surface/50`}>
                 {/* Efek layar dashboard palsu */}
                 <div className="w-3/4 h-3/4 bg-background/80 rounded-t-lg border border-surface shadow-2xl flex flex-col p-2 gap-2">
                    <div className="w-full h-4 bg-surface rounded flex items-center px-2 gap-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex gap-2 h-full">
                      <div className="w-1/4 h-full bg-surface rounded"></div>
                      <div className="w-3/4 h-full bg-surface rounded"></div>
                    </div>
                 </div>
                 {/* Icon external link saat hover */}
                 <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-primary"/>
                 </div>
              </div>
              
              {/* Konten Project */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary mb-2 block">{project.tech}</span>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-textMuted">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol View All */}
        <div className="mt-12 flex justify-start">
           <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-glow transition-all">
              View All Projects <ArrowRight size={18} />
           </button>
        </div>

      </div>
    </section>
  );
}