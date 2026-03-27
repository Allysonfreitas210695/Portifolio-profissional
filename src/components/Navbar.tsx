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
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl shadow-black/20' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        <Magnetic>
          <motion.div 
            className="flex items-center gap-2 group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-8 h-8 shrink-0 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center font-headline font-bold text-slate-950 text-lg group-hover:rotate-12 transition-transform">
              A
            </div>
            <span className="text-lg sm:text-xl font-headline font-bold text-on-surface tracking-tighter truncate">
              Allyson Freitas
            </span>
          </motion.div>
        </Magnetic>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-headline font-bold text-[13px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          
          <Magnetic>
            <button className="px-6 py-2 bg-white text-slate-950 hover:bg-primary transition-colors rounded-full font-headline font-bold text-xs uppercase tracking-wider ambient-shadow">
              Orçamento
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-surface-container-low/95 backdrop-blur-xl border-b border-outline-variant p-6 sm:p-8 shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-headline font-bold text-on-surface"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-primary text-slate-950 rounded-xl font-headline font-bold">
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
