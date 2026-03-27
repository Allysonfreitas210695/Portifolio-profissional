"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BarberAgenda Online",
    description: "Sistema completo de agendamento e gestão B2B para barbearias de alto padrão. O estilo que você merece, com a praticidade que você precisa.",
    image: "/projects/barber-hero.png",
    tags: ["Next.js", "Tailwind 4", "Prisma", "Dashboard"],
    color: "from-orange-500/20",
  },
  {
    id: 2,
    title: "Mente Contábil",
    description: "Sistema de gestão e contabilidade inteligente.",
    image: "/projects/mente-contabil.png",
    tags: ["Next.js", "Prisma", "Tailwind"],
    color: "from-purple-500/20",
  },
];

export default function ProjectsSlider() {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tighter">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-on-surface-variant font-body max-w-xl text-lg leading-relaxed">
            Uma seleção de sistemas onde a engenharia de software resolve desafios técnicos e de negócios com alta performance.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4 items-center text-on-surface-variant font-label text-xs uppercase tracking-widest">
            <span>Scroll para explorar</span>
            <div className="w-12 h-px bg-outline-variant" />
          </div>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-8 py-10 px-6 sm:px-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="shrink-0 w-[300px] md:w-[450px] group cursor-pointer"
            >
              <motion.div 
                className="relative h-[220px] md:h-[300px] w-full rounded-3xl md:rounded-4xl overflow-hidden ambient-shadow border border-white/5"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: "easeOut" as any }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-linear-to-t ${project.color} to-transparent opacity-60`} />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </div>
              </motion.div>

              <div className="mt-8 px-4">
                <div className="flex gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold font-label uppercase tracking-widest text-primary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="relative w-48 h-1 bg-surface-container-high rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary rounded-full w-1/3"
            animate={{ x: ["0%", "200%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
