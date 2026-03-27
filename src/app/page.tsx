import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsSlider from "@/components/ProjectsSlider";
import { Sparkles, Code, Globe, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      <Hero />

      {/* Trust Bar Placeholder */}
      <section className="py-12 md:py-20 border-y border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-8 font-headline font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] text-center text-on-surface-variant">
          <span className="flex items-center gap-2"><Globe size={16} /> Global Scale</span>
          <span className="flex items-center gap-2"><Code size={16} /> Performance First</span>
          <span className="flex items-center gap-2"><Zap size={16} /> Rapid Deployment</span>
          <span className="flex items-center gap-2"><Sparkles size={16} /> Premium Design</span>
        </div>
      </section>

      <Services />

      <ProjectsSlider />
      
      {/* Footer / Contact Preview */}
      <section id="contato" className="py-24 md:py-40 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative bg-linear-to-br from-surface-container-low to-background p-8 md:p-32 rounded-3xl md:rounded-[3.5rem] border border-white/5 overflow-hidden group">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-headline font-bold mb-8 leading-[1.1] tracking-tighter">
              Vamos construir o <br />
              <span className="text-gradient">próximo extraordinário?</span>
            </h2>
            <p className="text-base md:text-xl text-on-surface-variant font-body mb-12 max-w-2xl mx-auto leading-relaxed">
              Minha curadoria técnica e estética está à disposição do seu negócio. 
              Transformo desafios complexos em soluções digitais que convertem e encantam.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <button className="px-8 md:px-12 py-4 md:py-5 bg-white text-slate-950 rounded-2xl font-headline font-bold text-base md:text-lg hover:bg-primary transition-colors shadow-2xl shadow-primary/20">
                Solicitar Orçamento
              </button>
              <button className="px-8 md:px-12 py-4 md:py-5 bg-surface-container text-on-surface border border-white/10 rounded-2xl font-headline font-bold text-base md:text-lg hover:bg-surface-container-high transition-colors">
                WhatsApp
              </button>
            </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 group-hover:bg-primary/20 transition-colors" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10" />
        </div>
      </section>

      <footer className="py-16 md:py-20 px-6 sm:px-8 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 md:gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-headline font-bold text-primary text-lg">A</div>
              <span className="text-2xl font-bold font-headline tracking-tighter text-on-surface text-balance">Allyson Freitas</span>
            </div>
            <p className="text-sm font-label text-on-surface-variant tracking-wider max-w-xs">
              © 2024 Allyson Freitas. <br />
              Digital Curator • Fullstack Developer B2B.
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold font-label uppercase tracking-widest text-on-surface-variant">Social</h4>
              <a href="#" className="text-sm font-headline font-bold hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-sm font-headline font-bold hover:text-primary transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold font-label uppercase tracking-widest text-on-surface-variant">Projetos</h4>
              <a href="#" className="text-sm font-headline font-bold hover:text-primary transition-colors">BarberAgenda</a>
              <a href="#" className="text-sm font-headline font-bold hover:text-primary transition-colors">Mente Contábil</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold font-label uppercase tracking-widest text-on-surface-variant">Legal</h4>
              <a href="#" className="text-sm font-headline font-bold hover:text-primary transition-colors">Curated Design</a>
              <a href="#" className="text-sm font-headline font-bold hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
