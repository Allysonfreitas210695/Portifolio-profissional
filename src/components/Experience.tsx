"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "CSJ Sistemas",
    role: "Programador Junior",
    period: "Agosto de 2023 – O momento",
    duration: "2 anos 8 meses",
    type: "Remoto",
    description:
      "Desenvolvimento de novos aplicativos em React e React Native. Backend com C# (.NET Core). Implementação de melhorias e evoluções em sistemas corporativos existentes.",
    skills: ["React", "React Native", ".NET Core", "C#", "Entity Framework", "Web API"],
    isCurrent: true,
  },
  {
    company: "CSJ Sistemas",
    role: "Programador Trainee",
    period: "Agosto de 2022 – Agosto de 2023",
    duration: "1 ano 1 mês",
    type: "Híbrido",
    description:
      "Atuação como desenvolvedor fullstack em diversos sistemas. Contribuição com integrações complexas e desenvolvimento de novas funcionalidades.",
    skills: ["Fullstack", "Integrations", "Development"],
    isCurrent: false,
  },
  {
    company: "Universidade Federal Rural do Semi-Árido - Ufersa",
    role: "Monitor de Estrutura de Dados 1",
    period: "Fevereiro de 2020 – Fevereiro de 2021",
    duration: "1 ano 1 mês",
    type: "Estágio",
    description:
      "Monitoria acadêmica auxiliando alunos no aprendizado de algoritmos e estruturas de dados fundamentais.",
    skills: ["Algoritmos", "Estrutura de Dados", "C Language"],
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="bg-surface overflow-hidden py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2"
          >
            <div className="bg-secondary/30 h-px w-12" />
            <span className="font-label text-secondary text-[10px] font-bold tracking-[0.3em] uppercase">
              Carreira
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline mb-8 text-4xl font-bold tracking-tighter text-balance md:text-5xl lg:text-6xl"
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
              className="group bg-surface-container-low bento-inner-shadow relative grid grid-cols-1 gap-8 rounded-[2.5rem] border border-white/5 p-8 transition-all hover:border-white/10 md:p-12 lg:grid-cols-12 lg:gap-16"
            >
              {/* Left Side: Meta info (4 columns) */}
              <div className="lg:col-span-4">
                <div className="flex flex-col gap-4">
                  <div
                    className={`font-label w-fit rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase md:text-[11px] ${exp.isCurrent ? "bg-primary/20 text-primary border-primary/20 animate-pulse border" : "bg-surface-container text-on-surface-variant border border-white/5"}`}
                  >
                    {exp.isCurrent ? "Atual" : "Anterior"}
                  </div>

                  <h3 className="font-headline text-on-surface group-hover:text-primary text-2xl font-bold tracking-tight transition-colors md:text-3xl">
                    {exp.company}
                  </h3>

                  <div className="flex flex-col gap-2 opacity-60">
                    <div className="font-label text-on-surface-variant flex items-center gap-2 text-sm font-bold">
                      <Calendar size={14} className="text-secondary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="font-label text-on-surface-variant flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
                      <MapPin size={14} className="text-secondary" />
                      <span>{exp.type}</span>
                    </div>
                    <div className="font-label text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Description (8 columns) */}
              <div className="flex flex-col justify-between gap-8 py-2 lg:col-span-8">
                <div>
                  <h4 className="font-headline text-on-surface mb-4 text-xl font-bold tracking-tight">
                    {exp.role}
                  </h4>
                  <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-container font-label text-on-surface-variant rounded-lg border border-white/5 px-3 py-1 text-[10px] font-bold tracking-wider uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Accent */}
              {exp.isCurrent && (
                <div className="bg-primary/10 group-hover:bg-primary/20 absolute top-0 right-12 -z-10 h-32 w-32 rounded-full blur-[80px] transition-all duration-700" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
