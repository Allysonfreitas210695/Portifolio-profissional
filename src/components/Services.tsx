"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Layout, Cpu } from "lucide-react";

const services = [
  {
    title: "Backend Core",
    description: "Backends robustos e APIs escaláveis com .NET (C#), Node.js, NestJS e Django.",
    icon: <Cpu className="text-primary" size={24} />,
    size: "lg:col-span-2",
    bg: "bg-primary/5",
  },
  {
    title: "Frontend & UI",
    description: "Interfaces modernas com Next.js, React, TypeScript, Tailwind, Bootstrap e shadcn/ui.",
    icon: <Layout className="text-secondary" size={24} />,
    size: "lg:col-span-1",
    bg: "bg-secondary/5",
  },
  {
    title: "Cloud & DevOps",
    description: "Experiência em Azure, AWS e Jenkins, com foco em CI/CD e deploy contínuo.",
    icon: <Zap className="text-primary" size={24} />,
    size: "lg:col-span-1",
    bg: "bg-primary/5",
  },
  {
    title: "Infra & DB",
    description: "Gestão de bancos PostgreSQL, SQL Server e DynamoDB (NoSQL) de alta criticidade.",
    icon: <Layers className="text-secondary" size={24} />,
    size: "lg:col-span-2",
    bg: "bg-secondary/5",
  },
];

export default function Services() {
  return (
    <section id="habilidades" className="py-8 md:py-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 justify-center lg:justify-start mb-6"
          >
            <div className="w-12 h-px bg-primary/30" />
            <span className="font-label text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Tech Stack</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-balance"
          >
            Habilidades & <br />
            <span className="text-gradient">Especialidades Técnicas</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-4xl border border-white/5 overflow-hidden transition-all hover:border-white/10 ${service.bg} ${service.size}`}
            >
              <div className="relative z-10">
                <div className="mb-8 w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>

              {/* Decorative elements inside bento item */}
              <div className="absolute inset-0 bento-inner-shadow pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
