"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "CSJ Sistemas",
    role: "Programador Junior",
    period: "Agosto de 2023 – O momento",
    duration: "2 anos 8 meses (total na empresa 3a 8m)",
    type: "Remoto",
    description: "Desenvolvimento de novos aplicativos em React e React Native. Backend com C# (.NET Core). Implementação de melhorias e evoluções em sistemas corporativos existentes.",
    skills: ["React", "React Native", ".NET Core", "C#", "Entity Framework", "Web API"],
    isCurrent: true,
  },
  {
    company: "CSJ Sistemas",
    role: "Programa Trainee",
    period: "Agosto de 2022 – Agosto de 2023",
    duration: "1 ano 1 mês",
    type: "Híbrido",
    description: "Atuação como desenvolvedor fullstack em diversos sistemas. Contribuição com integrações complexas e desenvolvimento de novas funcionalidades.",
    skills: ["Fullstack", "Integrations", "Development"],
    isCurrent: false,
  },
  {
    company: "Universidade Federal Rural do Semi-Árido - Ufersa",
    role: "Monitor de Estrutura de Dados 1",
    period: "Fevereiro de 2020 – Fevereiro de 2021",
    duration: "1 ano 1 mês",
    type: "Estágio",
    description: "Monitoria acadêmica auxiliando alunos no aprendizado de algoritmos e estruturas de dados fundamentais.",
    skills: ["Algoritmos", "Estrutura de Dados", "C Language"],
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-8 md:py-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-px bg-secondary/30" />
            <span className="font-label text-secondary text-[10px] font-bold tracking-[0.3em] uppercase">Carreira</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-8 tracking-tighter text-balance"
          >
            Experiência <span className="text-secondary">Profissional</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-8 md:p-12 rounded-[2.5rem] bg-surface-container-low border border-white/5 transition-all hover:border-white/10 bento-inner-shadow"
            >
              {/* Left Side: Meta info (4 columns) */}
              <div className="lg:col-span-4">
                <div className="flex flex-col gap-4">
                  <div className={`w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest font-label md:text-[11px] ${exp.isCurrent ? 'bg-primary/20 text-primary border border-primary/20 animate-pulse' : 'bg-surface-container text-on-surface-variant border border-white/5'}`}>
                    {exp.isCurrent ? "Atual" : "Anterior"}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  
                  <div className="flex flex-col gap-2 opacity-60">
                    <div className="flex items-center gap-2 text-sm font-label font-bold text-on-surface-variant">
                      <Calendar size={14} className="text-secondary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-label font-bold uppercase tracking-widest text-on-surface-variant">
                      <MapPin size={14} className="text-secondary" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Description (8 columns) */}
              <div className="lg:col-span-8 flex flex-col justify-between gap-8 py-2">
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-4 tracking-tight">
                    {exp.role}
                  </h4>
                  <p className="text-on-surface-variant font-body leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-surface-container font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Accent */}
              {exp.isCurrent && (
                <div className="absolute top-0 right-12 w-32 h-32 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-all duration-700" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
