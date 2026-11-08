"use client";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projectsData = [
  {
    title: "AeroZenith",
    desc: "Platform web berbasis Laravel untuk manajemen data dan operasional.",
    tech: "Laravel • MySQL • Bootstrap",
    type: "Web",
    imgColor: "bg-blue-900/40",
    image: "/aerozenith.jpg", // <-- Nama file gambar di folder public
    link: "https://github.com/gipar11", // <-- Ganti dengan link asli AeroZenith
  },
  {
    title: "UI/UX App Design",
    desc: "Desain aplikasi mobile untuk pemesanan makanan sehat menggunakan Figma.",
    tech: "Figma • UI/UX Research",
    type: "UI/UX",
    imgColor: "bg-purple-900/40",
    image: "/logo figma.png", // <-- Nama file gambar di folder public
    link: "https://www.linkedin.com/in/muhammad-ghifari-ar-rozaq/", 
  },
  {
    title: "Sistem Informasi",
    desc: "Sistem manajemen data untuk kebutuhan akademik dan organisasi.",
    tech: "PHP • CodeIgniter • MySQL",
    type: "Web",
    imgColor: "bg-teal-900/40",
    image: "", // <-- Kosongkan jika belum ada gambar
    link: "https://github.com/gipar11",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              <span className="text-primary font-medium tracking-wide text-sm">My Projects</span>
            </div>
            <h2 className="text-4xl font-heading font-bold mb-2">Some of My Works</h2>
            <p className="text-textMuted max-w-md">A collection of projects I've built, from academic assignments to personal projects.</p>
          </motion.div>

          <div className="flex gap-2 bg-surface p-1.5 rounded-full border border-surface/50">
            {["All", "Web", "UI/UX", "Data"].map((filter, i) => (
              <button key={filter} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${i === 0 ? "bg-primary text-white" : "text-textMuted hover:text-textMain"}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.a
              href={project.link} target="_blank" rel="noreferrer" key={project.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface border border-surface/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer flex flex-col"
            >
              {/* Thumbnail (Gambar Asli atau Kotak Warna) */}
              <div className={`h-48 ${project.imgColor} relative flex items-center justify-center border-b border-surface/50 overflow-hidden`}>
                 
                 {project.image ? (
                   // Jika ada gambar, tampilkan gambarnya
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                 ) : (
                   // Jika tidak ada gambar, tampilkan kotak mockup (seperti Sistem Informasi)
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
                 )}
                 
                 <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ExternalLink size={16} className="text-primary"/>
                 </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-medium text-primary mb-2 block">{project.tech}</span>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-textMuted">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
           <a href="https://github.com/gipar11" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-glow transition-all">
              View All Projects <ArrowRight size={18} />
           </a>
        </div>

      </div>
    </section>
  );
}