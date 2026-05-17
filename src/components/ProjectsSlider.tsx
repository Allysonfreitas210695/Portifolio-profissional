"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "Mesafy",
    description:
      "Organiza o restaurante por dentro: comandas digitais, comunicação direta com a cozinha e visão clara do faturamento em tempo real — do bistrô ao grupo com várias unidades.",
    image: "/projects/masafy.png",
    link: "https://mesafy-teal.vercel.app/",
    tags: ["Next.js", "Tailwind 4", "Prisma", "Framer Motion"],
    color: "from-orange-600/20",
  },
  {
    id: 1,
    title: "BarberAgenda Online",
    description:
      "Mais que agendamento: o cliente reserva sozinho pelo celular, o profissional acompanha sua agenda do dia e o dono enxerga faturamento, comissões e ocupação em um só lugar.",
    image: "/projects/barber_agenda_online.png",
    link: "https://barberagendaonline.com.br/",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Multi-tenant", "Tailwind"],
    color: "from-orange-500/20",
  },
  {
    id: 2,
    title: "EspumaGo",
    description:
      "O cliente acompanha seu serviço pelo celular como se fosse um delivery. O lava-jato organiza fila, equipe e produção sem perder nenhum pedido — em veículos, estofados ou colchões.",
    image: "/projects/espuma_go.png",
    link: "https://www.espumago.com.br/",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Real-time", "Tailwind"],
    color: "from-cyan-500/20",
  },
  {
    id: 3,
    title: "FrotaSimples",
    description:
      "Tira a gestão da frota pública das planilhas: cada veículo, motorista, manutenção e abastecimento rastreável — com prestação de contas pronta para auditoria e transparência.",
    image: "/projects/frota_simples.png",
    link: "https://frota-simples.vercel.app/",
    tags: ["Next.js", "Prisma", "PostgreSQL", "B2G", "Tailwind"],
    color: "from-emerald-500/20",
  },
  {
    id: 4,
    title: "OdontoSys",
    description:
      "Da primeira consulta ao tratamento concluído: agenda, prontuário digital e histórico financeiro do paciente conectados em uma única plataforma — clínica organizada, paciente fidelizado.",
    image: "/projects/odonto_sys.png",
    link: "https://odonto-sys-henna.vercel.app",
    tags: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui", "Tailwind"],
    color: "from-blue-500/20",
  },
  {
    id: 5,
    title: "Mente Contábil",
    description:
      "Dá ao contador visão executiva da carteira: indicadores, alertas e relatórios que transformam dados brutos em decisão estratégica para o cliente final.",
    image: "/projects/mente_contabil.png",
    link: "https://ledger-mind-xi.vercel.app",
    tags: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui", "Tailwind"],
    color: "from-purple-500/20",
  },
];

export default function ProjectsSlider() {
  return (
    <section id="projetos" className="bg-surface overflow-hidden py-8 md:py-12">
      <div className="mx-auto mb-16 flex max-w-7xl flex-col justify-between gap-8 px-6 text-center sm:px-8 md:mb-20 md:flex-row md:items-end md:text-left">
        <div>
          <h2 className="font-headline mb-6 text-4xl font-bold tracking-tighter md:text-5xl">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-on-surface-variant font-body max-w-xl text-lg leading-relaxed">
            Uma seleção de sistemas onde a engenharia de software resolve desafios técnicos e de
            negócios com alta performance.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="text-on-surface-variant font-label flex items-center gap-4 text-xs tracking-widest uppercase">
            <span>Scroll para explorar</span>
            <div className="bg-outline-variant h-px w-12" />
          </div>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 px-6 py-10 sm:px-8 md:gap-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[300px] shrink-0 cursor-pointer md:w-[450px]"
            >
              <motion.div
                className="ambient-shadow relative h-[220px] w-full overflow-hidden rounded-3xl border border-white/5 md:h-[300px] md:rounded-4xl"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: "easeOut" as any }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t ${project.color} to-transparent opacity-60`}
                />

                {/* Overlay on hover */}
                <div className="bg-primary/10 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-2xl"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </div>
              </motion.div>

              <div className="mt-8 px-4">
                <div className="mb-4 flex gap-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-label text-primary/70 text-[10px] font-bold tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="font-label text-primary/70 text-[10px] font-bold tracking-widest uppercase">
                      ...
                    </span>
                  )}
                </div>
                <h3 className="font-headline group-hover:text-primary mb-3 text-2xl font-bold tracking-tight transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant font-body line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="bg-surface-container-high relative h-1 w-48 overflow-hidden rounded-full">
          <motion.div
            className="bg-primary absolute top-0 left-0 h-full w-1/3 rounded-full"
            animate={{ x: ["0%", "200%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
