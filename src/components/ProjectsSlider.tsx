"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
  tags: string[];
  color: string;
};

const projects: Project[] = [
  {
    id: 0,
    title: "Mesafy",
    description:
      "Organiza o restaurante por dentro: comandas digitais, comunicação direta com a cozinha e visão clara do faturamento em tempo real — do bistrô ao grupo com várias unidades.",
    features: [
      "Comandas digitais com envio direto para a cozinha",
      "Acompanhamento de faturamento em tempo real por mesa",
      "Suporte a múltiplas unidades no mesmo painel",
      "Histórico de pedidos e relatórios gerenciais",
    ],
    image: "/projects/masafy.png",
    link: "https://mesafy-teal.vercel.app/",
    tags: ["Next.js", "Tailwind 4", "Shadcn/ui", "Prisma", "Framer Motion", "Vitest"],
    color: "from-orange-600/20",
  },
  {
    id: 1,
    title: "BarberAgenda Online",
    description:
      "Mais que agendamento: o cliente reserva sozinho pelo celular, o profissional acompanha sua agenda do dia e o dono enxerga faturamento, comissões e ocupação em um só lugar.",
    features: [
      "Agendamento autônomo pelo celular sem precisar ligar",
      "Painel da agenda diária para o profissional",
      "Relatórios de faturamento, comissões e ocupação",
      "Arquitetura multi-tenant para múltiplas barbearias",
    ],
    image: "/projects/barber_agenda_online.png",
    link: "https://barberagendaonline.com.br/",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Multi-tenant", "Tailwind", "SES", "S3", "Shadcn/ui", "Framer Motion", "TypeScript", "Better Auth", "Vitest", "Turso", "Upstash"],
    color: "from-orange-500/20",
  },
  {
    id: 2,
    title: "EspumaGo",
    description:
      "O cliente acompanha seu serviço pelo celular como se fosse um delivery. O lava-jato organiza fila, equipe e produção sem perder nenhum pedido — em veículos, estofados ou colchões.",
    features: [
      "Rastreio do pedido em tempo real pelo cliente",
      "Gestão de fila e equipe de produção",
      "Suporte a veículos, estofados e colchões",
      "Notificações automáticas de status do serviço",
    ],
    image: "/projects/espuma_go.png",
    link: "https://www.espumago.com.br/",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Real-time", "Tailwind", "Shadcn/ui", "Upstash", "SES", "S3", "Vitest"],
    color: "from-cyan-500/20",
  },
  {
    id: 3,
    title: "FrotaSimples",
    description:
      "Tira a gestão de frotas das planilhas: controle total sobre veículos, motoristas, manutenções e abastecimentos em tempo real — reduzindo custos operacionais e otimizando a logística da sua empresa.",
    features: [
      "Controle detalhado de manutenções preventivas e corretivas",
      "Monitoramento de abastecimentos e consumo médio por veículo",
      "Cadastro centralizado de motoristas e histórico de utilização",
      "Relatórios inteligentes de custos e desempenho operacional",
    ],
    image: "/projects/frota_simples.png",
    link: "https://frota-simples.vercel.app/",
    tags: ["Next.js", "Prisma", "PostgreSQL", "B2B", "Tailwind", "Shadcn/ui", "Vitest"],
    color: "from-emerald-500/20",
  },
  {
    id: 4,
    title: "OdontoSys",
    description:
      "Da primeira consulta ao tratamento concluído: agenda, prontuário digital e histórico financeiro do paciente conectados em uma única plataforma — clínica organizada, paciente fidelizado.",
    features: [
      "Agendamento de consultas e tratamentos",
      "Prontuário digital completo por paciente",
      "Histórico financeiro e cobrança integrados",
      "Dashboard de ocupação e faturamento da clínica",
    ],
    image: "/projects/odonto_sys.png",
    link: "https://odonto-sys-henna.vercel.app",
    tags: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui", "Tailwind", "Vitest"],
    color: "from-blue-500/20",
  },
  {
    id: 5,
    title: "Caixinha",
    description:
      "Caixinha é uma plataforma de gestão financeira pessoal que permite controlar receitas e despesas de forma simples e inteligente.\n\nO usuário registra suas movimentações, organiza por categorias e acompanha o fluxo de caixa por meio de um dashboard com gráficos e relatórios. A plataforma também consegue ler comprovantes e recibos automaticamente, extraindo os dados da transação sem precisar digitar nada.\n\nCom base no histórico financeiro, o sistema gera insights personalizados apontando padrões de gasto e oportunidades de economia. Além disso, conta com um painel administrativo completo para gerenciamento de usuários, envio de mensagens e registro de todas as ações realizadas na plataforma.",
    features: [
      "Controle de receitas e despesas por categoria",
      "Dashboard com gráficos e relatórios de fluxo de caixa",
      "Leitura automática de comprovantes e recibos via IA",
      "Insights personalizados de padrões de gasto e economia",
      "Painel administrativo com gestão de usuários e mensagens",
    ],
    image: "/projects/caixinha.png",
    link: "https://caixinha-br.vercel.app",
    tags: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui", "Tailwind", "Vitest"],
    color: "from-purple-500/20",
  },
];

export default function ProjectsSlider() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
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
              <span>Clique para ver detalhes</span>
              <div className="bg-outline-variant h-px w-12" />
            </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-6 px-6 py-10 sm:px-8 md:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            {[...projects, ...projects].map((project, index) => (
              <button
                key={`${project.id}-${index}`}
                onClick={() => setSelected(project)}
                className="group w-[300px] shrink-0 cursor-pointer text-left md:w-[450px]"
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
                  <p className="text-on-surface-variant font-body line-clamp-3 text-sm leading-relaxed">
                    {project.description.split("\n\n")[0]}
                  </p>
                </div>
              </button>
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

      {/* Modal de detalhes */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <motion.div
              className="bg-surface-container relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagem */}
              <div className="relative h-48 w-full shrink-0 sm:h-64">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 672px"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t ${selected.color} to-transparent opacity-80`}
                />
                <button
                  onClick={() => setSelected(null)}
                  className="bg-surface-container/80 hover:bg-surface-container absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
                  aria-label="Fechar"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Conteúdo scrollável */}
              <div className="overflow-y-auto p-6 sm:p-8">
                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high font-label text-primary text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Título */}
                <h2 className="font-headline mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {selected.title}
                </h2>

                {/* Descrição */}
                <div className="text-on-surface-variant font-body mb-6 space-y-3 text-sm leading-relaxed sm:text-base">
                  {selected.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Funcionalidades */}
                <div className="mb-8">
                  <h3 className="font-headline mb-3 text-sm font-bold tracking-widest uppercase text-primary/70">
                    Funcionalidades
                  </h3>
                  <ul className="space-y-2">
                    {selected.features.map((feat, i) => (
                      <li key={i} className="font-body text-on-surface-variant flex items-start gap-3 text-sm sm:text-base">
                        <span className="bg-primary/20 text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold">
                          {i + 1}
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão */}
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary font-label inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
                >
                  Abrir projeto
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
