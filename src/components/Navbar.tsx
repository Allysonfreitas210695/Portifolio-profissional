"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ${
        scrolled
          ? "bg-surface-container-low/60 top-6 w-[95%] max-w-5xl rounded-full border border-white/10 px-2 py-3 shadow-2xl backdrop-blur-xl md:w-[90%]"
          : "top-0 w-full bg-transparent px-0 py-8"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all sm:px-8 ${scrolled ? "px-4 sm:px-6" : ""}`}
      >
        <Magnetic>
          <motion.div
            className="group flex cursor-pointer items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="from-primary to-secondary font-headline flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br text-lg font-bold text-slate-950 transition-transform group-hover:rotate-12">
              A
            </div>
            {!scrolled && (
              <span className="font-headline text-on-surface hidden truncate text-lg font-bold tracking-tighter sm:block sm:text-xl">
                Allyson Freitas
              </span>
            )}
          </motion.div>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-headline text-on-surface-variant hover:text-primary group relative text-[12px] font-bold tracking-widest uppercase transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
              <span className="bg-primary absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <Magnetic>
            <a 
              href="https://wa.me/5584998138643"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary font-headline rounded-full bg-white px-6 py-2 text-[10px] font-bold tracking-wider text-slate-950 uppercase shadow-xl transition-colors"
            >
              WhatsApp
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`text-on-surface rounded-full p-2 md:hidden ${scrolled ? "bg-white/5" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className={`bg-surface-container-low/95 absolute top-full left-0 mt-4 w-full rounded-[2.5rem] border border-white/10 p-8 shadow-2xl backdrop-blur-xl md:hidden`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-headline text-on-surface hover:text-primary text-2xl font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5584998138643"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary font-headline w-full rounded-2xl py-5 text-lg font-bold text-center text-slate-950"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
