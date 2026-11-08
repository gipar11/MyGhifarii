"use client";
import { motion } from "motion/react";
import { Mail, Briefcase, Code, ArrowRight } from "lucide-react"; // Ganti Linkedin jadi Briefcase

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-surface/50 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Kiri: Info & Sosial Media */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <span className="text-primary font-medium tracking-wide">Contact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Let's Work <br /> Together
          </h2>
          
          <p className="text-textMuted text-lg mb-8 max-w-sm">
            Have a project, collaboration, or just want to say hi? Feel free to reach out!
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <a href="mailto:ghifari@gmail.com" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-primary/50 transition-colors">
                <Mail size={18} />
              </div>
              <span className="font-medium">ghifari@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ghifari" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-primary/50 transition-colors">
                <Briefcase size={18} /> {/* Ganti Linkedin jadi Briefcase */}
              </div>
              <span className="font-medium">linkedin.com/in/ghifari</span>
            </a>
            <a href="https://github.com/ghifari" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-primary/50 transition-colors">
                <Code size={18} />
              </div>
              <span className="font-medium">github.com/ghifari</span>
            </a>
          </div>
        </motion.div>

        {/* Kanan: Form Kontak */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border border-surface/80 rounded-2xl p-8 shadow-2xl"
        >
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-textMuted mb-1.5 block">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-surface border border-surface/50 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-textMuted mb-1.5 block">Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-surface border border-surface/50 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-textMuted mb-1.5 block">Your Message</label>
              <textarea 
                rows={4}
                placeholder="Hello, I'd like to talk about..." 
                className="w-full bg-surface border border-surface/50 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="mt-2 w-full bg-primary text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-glow transition-all"
            >
              Send Message <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}