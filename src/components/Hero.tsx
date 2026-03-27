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
        <div className="grid grid-cols-1 items-center gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Left Column: Content */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-primary/10 border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1"
              variants={itemVariants}
            >
              <Sparkles size={14} className="text-primary" />
              <span className="font-label text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                Fullstack Developer
              </span>
            </motion.div>

            <motion.h1
              className="font-headline mb-8 text-5xl leading-[0.9] font-bold tracking-tighter text-balance md:text-8xl"
              variants={itemVariants}
            >
              Transformando <br />
              Código em <span className="text-gradient">Arte Digital</span>
            </motion.h1>

            <motion.p
              className="text-on-surface-variant font-body mb-12 max-w-xl text-lg leading-relaxed md:text-xl"
              variants={itemVariants}
            >
              Arquiteto de experiências digitais de alto impacto. Fundindo precisão técnica com
              estética editorial para criar o extraordinário no B2B.
            </motion.p>

            <motion.div className="flex flex-col gap-6 sm:flex-row" variants={itemVariants}>
              <Magnetic>
                <button className="group bg-primary font-headline ambient-shadow relative overflow-hidden rounded-xl px-8 py-4 text-lg font-bold text-slate-950 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <span className="relative z-10 flex items-center gap-2">
                    Iniciar Projeto{" "}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </button>
              </Magnetic>

              <Magnetic>
                <button className="bg-surface-container-low text-on-surface border-outline-variant font-headline hover:bg-surface-container rounded-xl border px-8 py-4 text-lg font-bold transition-colors">
                  Ver Portfólio
                </button>
              </Magnetic>
            </motion.div>

            <motion.div
              className="mt-16 flex items-center gap-8 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              variants={itemVariants}
            >
              <div className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                Trusted by
              </div>
              <div className="bg-outline-variant h-px w-12" />
              {/* Simple aesthetic icons could go here */}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" as any, delay: 0.5 }}
          >
            <div className="group relative z-10 aspect-square w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/logo.png"
                alt="Allyson Freitas"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 ring-inset" />
            </div>

            {/* Decorative "Aura" */}
            <div className="bg-primary/10 absolute -top-20 -right-20 -z-10 h-[140%] w-[140%] animate-pulse rounded-full blur-[100px]" />
            <div className="bg-secondary/5 absolute -bottom-10 -left-10 -z-10 h-[80%] w-[80%] rounded-full blur-[80px]" />

            {/* Floating Card UI Element */}
            <motion.div
              className="glass-card ambient-shadow absolute bottom-4 left-4 md:-bottom-6 md:-left-6 z-20 rounded-2xl p-3 md:p-4 scale-90 md:scale-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full">
                  <Sparkles size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-on-surface text-[10px] md:text-xs font-bold whitespace-nowrap">Digital Curator</div>
                  <div className="text-on-surface-variant text-[8px] md:text-[10px] whitespace-nowrap">Artesanal & Técnico</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
