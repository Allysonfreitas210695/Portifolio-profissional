"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Desenvolvimento de novos aplicativos Web e Mobile do zero.",
  "Manutenção, refatoração e evolução de sistemas corporativos legados.",
  "Integração com APIs REST, serviços internos e sistemas de terceiros.",
  "Foco em performance, escalabilidade e boas práticas.",
  "Aprimoramento contínuo em tecnologias modernas.",
];

export default function About() {
  return (
    <section id="sobre" className="py-8 md:py-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Section Header (4 columns) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-px bg-primary/30" />
              <span className="font-label text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Trajetória</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-8 tracking-tighter text-balance"
            >
              Transformando Desafios em <br />
              <span className="text-gradient">Soluções Robustas</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-3xl bg-surface-container-low border border-white/5 bento-inner-shadow">
                <div className="text-3xl font-headline font-bold text-primary mb-1 tracking-tighter">+4 Anos</div>
                <div className="text-xs uppercase tracking-widest font-label text-on-surface-variant font-bold opacity-60">Experiência Profissional</div>
              </div>
              <div className="p-6 rounded-3xl bg-surface-container-low border border-white/5 bento-inner-shadow">
                <div className="text-3xl font-headline font-bold text-secondary mb-1 tracking-tighter">Fullstack</div>
                <div className="text-xs uppercase tracking-widest font-label text-on-surface-variant font-bold opacity-60">Foco em Evolução Técnica</div>
              </div>
            </motion.div>
          </div>

          {/* About Text (7 columns) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl font-body text-on-surface-variant leading-relaxed">
                Sou desenvolvedor <span className="text-on-surface font-semibold">Fullstack</span> com expertise no desenvolvimento de novos aplicativos e na evolução de sistemas corporativos. Atuo no frontend, backend e mobile, entregando integrações complexas como APIs de pagamentos e sistemas internos.
              </p>
              
              <p className="text-on-surface-variant font-body leading-relaxed opacity-80">
                Minha abordagem é focada em garantir soluções robustas, performáticas e alinhadas às necessidades do negócio. Estou em constante evolução técnica, dominando ecossistemas modernos para criar valor real através do código.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-8 border-t border-white/5">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    <span className="text-sm md:text-base text-on-surface-variant font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] -z-10" />
    </section>
  );
}
