"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Target, Cpu, BookOpen, BarChart3, Sprout, Network } from "lucide-react";

const pillars = [
  {
    title: "Propósito Claro",
    description: "Acreditamos que toda transformação começa com um porquê bem definido. Um propósito claro orienta escolhas, direciona estratégias e conecta inovação a resultados reais. Na CRESCITECH, cada projeto nasce da missão de gerar impacto positivo e sustentável nos negócios.",
    icon: <Target className="w-10 h-10" />,
  },
  {
    title: "Tecnologia como Ferramenta",
    description: "Para nós, inteligência artificial é meio, não fim. Usamos a tecnologia como uma aliada estratégica, sempre a serviço dos objetivos humanos e organizacionais. Automatizar, prever e otimizar só faz sentido quando há direção e intenção por trás.",
    icon: <Cpu className="w-10 h-10" />,
  },
  {
    title: "Aprendizado Contínuo",
    description: "O mundo muda rápido. Por isso, cultivamos a aprendizagem como prática permanente. Formamos líderes e equipes com mentalidade de evolução, adaptabilidade e protagonismo. Saber aprender é a maior competência da era digital.",
    icon: <BookOpen className="w-10 h-10" />,
  },
  {
    title: "Decisões Baseadas em Dados",
    description: "A intuição é valiosa, mas decisões sólidas exigem dados concretos. Promovemos a cultura analítica com ferramentas acessíveis e práticas. Tornamos a inteligência de dados parte do cotidiano, melhorando processos, produtos e resultados.",
    icon: <BarChart3 className="w-10 h-10" />,
  },
  {
    title: "Impacto Sustentável",
    description: "Crescimento que não gera valor duradouro é ilusão. Buscamos impacto que permanece: financeiro, social, humano. Ajudamos nossos clientes a inovar com responsabilidade, integrando eficiência, ética e visão de longo prazo.",
    icon: <Sprout className="w-10 h-10" />,
  },
  {
    title: "Processos Inteligentes",
    description: "Não basta fazer mais rápido: é preciso fazer melhor. Reestruturamos rotinas com inteligência e automação, liberando tempo para o que realmente importa. Processos inteligentes geram fluidez, escalabilidade e excelência operacional.",
    icon: <Network className="w-10 h-10" />,
  },
];

export default function PilaresPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">Nossos Pilares</h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              A base que sustenta cada transformação. Conheça os princípios que guiam nossa atuação e garantem resultados consistentes.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars Grid */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{pillar.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
