"use client";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { dictionary } from "@/app/data/dictionary";
import { useState } from "react";

export default function Contact({ lang }: { lang: "ID" | "EN" }) {
  const t = dictionary[lang].contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Fungsi untuk mengirim form ke Web3Forms
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d8872d56-ac99-4778-b01a-0ba792d8edfe"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        (event.target as HTMLFormElement).reset(); 
        setTimeout(() => setStatus("idle"), 3000); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-surface/50 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Kiri: Info & Sosial Media */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <span className="text-primary font-medium tracking-wide">{lang === "ID" ? "Kontak" : "Contact"}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">{t.title}</h2>
          <p className="text-textMuted text-lg mb-8 max-w-sm">{t.desc}</p>

          <div className="flex flex-col gap-4 mb-8">
            {/* Email */}
            <a href="mailto:jirikilukashi@gmail.com" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-primary/50 transition-colors"><Mail size={18} /></div>
              <span className="font-medium">jirikilukashi@gmail.com</span>
            </a>
            
            {/* WhatsApp */}
            <a href="https://wa.me/6285210151369" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMuted hover:text-green-500 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-green-500/50 transition-colors"><FaWhatsapp size={18} /></div>
              <span className="font-medium">+62 852-1015-1369</span>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/muhammad-ghifari-ar-rozaq/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMuted hover:text-blue-500 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-blue-500/50 transition-colors"><FaLinkedin size={18} /></div>
              <span className="font-medium">muhammad-ghifari-ar-rozaq</span>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/gipar11" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMuted hover:text-textMain transition-colors group">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-surface/50 group-hover:border-textMain/50 transition-colors"><FaGithub size={18} /></div>
              <span className="font-medium">github.com/gipar11</span>
            </a>
          </div>
        </motion.div>

        {/* Kanan: Form Kontak */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-background border border-surface/80 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-textMuted mb-1.5 block">{t.name}</label>
              <input type="text" name="name" required className="w-full bg-surface border border-surface/50 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-textMuted mb-1.5 block">{t.email}</label>
              <input type="email" name="email" required className="w-full bg-surface border border-surface/50 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-textMuted mb-1.5 block">{t.message}</label>
              <textarea name="message" required rows={4} className="w-full bg-surface border border-surface/50 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="mt-2 w-full bg-primary text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-glow transition-all disabled:opacity-50"
            >
              {status === "loading" ? "Mengirim..." : status === "success" ? "Pesan Terkirim!" : status === "error" ? "Gagal, Coba Lagi" : t.btnSend}
              <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}