"use client";
import { motion } from "motion/react";
import { ArrowRight, Award, Trophy, Medal } from "lucide-react";

const achievementsData = [
  {
    title: "Web Development Certificate",
    date: "Dec 2024",
    icon: <Award className="text-yellow-500 w-8 h-8" />,
    color: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    title: "UI/UX Design Certificate",
    date: "Aug 2024",
    icon: <Trophy className="text-orange-500 w-8 h-8" />,
    color: "bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Data Analytics Certificate",
    date: "Jun 2024",
    icon: <Medal className="text-blue-400 w-8 h-8" />,
    color: "bg-blue-400/10 border-blue-400/20",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              <span className="text-primary font-medium tracking-wide text-sm">Achievements</span>
            </div>
            <h2 className="text-4xl font-heading font-bold mb-2">My Certificates<br />& Achievements</h2>
            <p className="text-textMuted max-w-md">
              A showcase of my learning journey and accomplishments.
            </p>
          </motion.div>

          <div className="flex gap-2 bg-surface p-1.5 rounded-full border border-surface/50 self-start md:self-auto">
            {["Sertifikat", "Organisasi", "Kompetisi"].map((filter, i) => (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface border border-surface/50 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 hover:bg-surface/80 transition-all cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold font-heading mb-2 text-textMain">{item.title}</h3>
              <p className="text-sm text-textMuted mb-4">{item.date}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
           <button className="flex items-center gap-2 border border-surface text-textMain px-6 py-3 rounded-lg font-medium hover:border-primary transition-all">
              View All <ArrowRight size={18} />
           </button>
        </div>

      </div>
    </section>
  );
}