"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Clock } from "lucide-react";

const education = [
  {
    institution: "Universidade Federal Rural do Semi-Árido - Ufersa",
    degree: "Bacharelado em Engenharia de Software",
    major: "Computer Software Engineering",
    period: "Março de 2024 – o momento",
    description: "Cursando Engenharia de Software com foco em modernas práticas de engenharia de software e arquiteturas escaláveis.",
    isCurrent: true,
  },
  {
    institution: "Universidade Federal Rural do Semi-Árido - Ufersa",
    degree: "Bacharelado em Tecnologia da Informação",
    major: "Graduação",
    period: "Janeiro de 2019 – Novembro de 2024",
    description: "Concluído curso de Bacharelado em Tecnologia da Informação na UFERSA, com sólida base técnica em algoritmos, sistemas de informação e desenvolvimento.",
    isCurrent: false,
  },
];

export default function Education() {
  return (
    <section id="educacao" className="py-8 md:py-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 justify-center lg:justify-start mb-6"
          >
            <div className="w-12 h-px bg-primary/30" />
            <span className="font-label text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Educação</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-8 tracking-tighter text-balance"
          >
            Formação <span className="text-gradient">Acadêmica</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 md:p-10 rounded-4xl bg-surface-container-low border border-white/5 overflow-hidden transition-all hover:border-white/10 bento-inner-shadow h-full"
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="mb-8 w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-8 bg-primary/30 rounded-full" />
                    <div className="flex items-center gap-2 text-primary font-bold font-label text-[10px] uppercase tracking-widest">
                      <Clock size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-headline font-bold mb-2 tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-on-surface-variant text-sm font-label font-bold uppercase tracking-widest opacity-60 mb-6">
                    {edu.institution}
                  </div>
                  
                  <p className="text-on-surface-variant font-body leading-relaxed opacity-80 line-clamp-4">
                    {edu.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-6 border-t border-white/5 text-primary/70 font-label text-[11px] font-bold uppercase tracking-widest">
                   <BookOpen size={14} />
                   <span>{edu.major}</span>
                </div>
              </div>
              
              {/* Subtle background detail */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
