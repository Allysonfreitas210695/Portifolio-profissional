"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import Magnetic from "./Magnetic";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <section className="mesh-gradient relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Content (Asymmetrical 60%) */}
          <motion.div
            className="lg:w-[60%] order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-primary/5 border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm"
              variants={itemVariants}
            >
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="font-label text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                Fullstack Developer
              </span>
            </motion.div>

            <motion.h1
              className="font-headline mb-8 text-4xl leading-[1] font-bold tracking-tighter text-balance md:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Desenvolvedor Fullstack <br />
              <span className="text-mask">.NET & Next.js</span>
            </motion.h1>

            <motion.p
              className="text-on-surface-variant font-body mb-12 max-w-xl text-lg leading-relaxed md:text-xl opacity-80"
              variants={itemVariants}
            >
              Mais de 4 anos de experiência na <strong>CSJ Sistemas</strong> em São José dos Campos, 
              entregando soluções escaláveis com precisão técnica e as melhores práticas de mercado.
            </motion.p>

            <motion.div className="flex flex-col gap-6 sm:flex-row" variants={itemVariants}>
              <Magnetic>
                <a 
                  href="https://wa.me/5584998138643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-primary font-headline ambient-shadow relative overflow-hidden rounded-2xl px-10 py-5 text-lg font-bold text-slate-950 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                >
                  Fale Comigo
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="#projetos"
                  className="bg-surface-container-low text-on-surface border-white/5 font-headline hover:bg-surface-container rounded-2xl border px-10 py-5 text-lg font-bold transition-all hover:border-white/10 text-center"
                >
                  Ver Projetos
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-6 opacity-40 transition-all duration-700 hover:opacity-100"
              variants={itemVariants}
            >
              <div className="font-label text-on-surface-variant text-[10px] tracking-[0.3em] font-bold uppercase">
                Principais Tecnologias
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm font-headline font-bold">
                <span className="text-secondary">.NET / C#</span>
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>REACT</span>
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>AZURE</span>
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>POSTGRESQL</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image (Asymmetrical 40%) */}
          <motion.div
            className="relative lg:w-[40%] order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" as any, delay: 0.4 }}
          >
            <div className="group relative z-10 aspect-4/5 w-full overflow-hidden rounded-[3rem] border border-white/10 ambient-shadow bg-surface-container">
              <Image
                src="/logo.png"
                alt="Allyson Freitas"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Decorative Decorative Blobs */}
            <div className="bg-primary/20 absolute -top-12 -right-12 -z-10 h-64 w-64 animate-pulse rounded-full blur-[100px]" />
            <div className="bg-secondary/10 absolute -bottom-12 -left-12 -z-10 h-48 w-48 rounded-full blur-[80px]" />

            {/* Floating Card UI Element */}
            <motion.div
              className="glass-card bento-inner-shadow ambient-shadow absolute -bottom-6 -right-6 lg:-left-12 z-20 rounded-3xl p-5 scale-90 md:scale-100 border border-white/10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as any }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-on-surface text-sm font-bold tracking-tight">Especialista Fullstack</div>
                  <div className="text-on-surface-variant text-[11px] font-medium leading-tight">+4 Anos de Experiência Real</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
