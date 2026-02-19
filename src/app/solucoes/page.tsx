"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Search, Users, GraduationCap, Wrench, Compass, ShieldCheck } from "lucide-react";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "diagnostico",
      title: "Diagnóstico Estratégico com IA",
      icon: <Search className="w-8 h-8" />,
      description: "Análise profunda da maturidade digital da sua empresa para identificar oportunidades reais de aplicação de IA. Entregamos um roadmap claro e acionável, alinhado aos seus objetivos de negócio.",
      lottieUrl: "/assets/diagnostico.lottie",
      imageAlt: "Análise estratégica de dados e métricas de negócios",
      features: [
        "Mapeamento de processos e gargalos",
        "Identificação de oportunidades de automação",
        "Análise de dados e infraestrutura",
        "Plano de ação priorizado",
      ]
    },
    {
      id: "consultoria",
      title: "Consultoria Personalizada",
      icon: <Users className="w-8 h-8" />,
      description: "Implementação prática de soluções de IA com acompanhamento contínuo. Atuamos lado a lado com sua equipe para garantir que a tecnologia gere valor real e seja adotada com sucesso.",
      lottieUrl: "/assets/consultoria.lottie",
      imageAlt: "Reunião estratégica de consultoria empresarial",
      features: [
        "Implementação de ferramentas de IA",
        "Otimização de fluxos de trabalho",
        "Acompanhamento de resultados",
        "Ajustes e melhorias contínuas",
      ]
    },
    {
      id: "treinamento",
      title: "Treinamento e Capacitação",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Prepare sua equipe para a era da inteligência artificial. Nossos treinamentos são práticos, focados no dia a dia e adaptados para diferentes níveis de conhecimento técnico.",
      lottieUrl: "/assets/treinamento.lottie",
      imageAlt: "Treinamento corporativo e capacitação profissional",
      features: [
        "Workshops práticos (mão na massa)",
        "Letramento em IA para não-técnicos",
        "Treinamento em ferramentas específicas",
        "Desenvolvimento de cultura data-driven",
      ]
    },
    {
      id: "ferramentas",
      title: "Desenvolvimento de Ferramentas",
      icon: <Wrench className="w-8 h-8" />,
      description: "Desenvolvemos soluções customizadas para resolver dores específicas do seu negócio. De chatbots inteligentes a dashboards preditivos, criamos o que você precisa.",
      lottieUrl: "/assets/Dev.lottie",
      imageAlt: "Desenvolvimento de software e ferramentas tecnológicas",
      features: [
        "Chatbots e assistentes virtuais",
        "Automação de processos repetitivos",
        "Dashboards inteligentes",
        "Integração de APIs de IA",
      ]
    },
    {
      id: "mentoria",
      title: "Mentoria Estratégica para Líderes",
      icon: <Compass className="w-8 h-8" />,
      description: "Apoio individualizado para gestores que precisam liderar a transformação digital. Aprenda a tomar decisões mais assertivas apoiadas por dados e inteligência artificial.",
      lottieUrl: "/assets/mentoria.lottie",
      imageAlt: "Mentoria e desenvolvimento de liderança estratégica",
      features: [
        "Sessões individuais ou em grupo",
        "Análise de cenários e tendências",
        "Apoio na tomada de decisão",
        "Desenvolvimento de visão estratégica",
      ]
    },
    {
      id: "regulacao",
      title: "Regulação e Boas Práticas",
      icon: <ShieldCheck className="w-8 h-8" />,
      description: "Garanta que sua empresa utilize IA de forma ética, segura e em conformidade com as regulações vigentes. Proteja seu negócio e seus clientes com governança sólida.",
      lottieUrl: "/assets/regulamentacao.lottie",
      imageAlt: "Documentação de compliance e boas práticas empresariais",
      features: [
        "Criação de políticas de uso de IA",
        "Análise de riscos e compliance",
        "Diretrizes éticas e de privacidade",
        "Workshops de conscientização",
      ]
    },
  ];

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">Nossas Soluções</h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Tecnologia, estratégia e pessoas. Conheça como nossas soluções integradas podem acelerar o crescimento do seu negócio.
            </p>
          </div>
        </Container>
      </section>

      <Container className="pb-24">
        <div className="space-y-24">
          {solutions.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`scroll-mt-24 flex flex-col gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  {item.icon}
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">{item.title}</h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`https://wa.me/5511965650546?text=Olá,%20estou%20interessado%20em%20saber%20mais%20sobre%20${encodeURIComponent(item.title)}.`}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tenho interesse
                </Button>
              </div>
              <div className="flex-1 w-full relative aspect-[4/3] bg-neutral-100 rounded-2xl border border-neutral-200 overflow-hidden shadow-lg">
                <DotLottiePlayer
                  src={item.lottieUrl}
                  autoplay
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-neutral-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ainda com dúvida sobre qual a melhor solução?</h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Não se preocupe. Agende uma conversa diagnóstica gratuita e nós ajudaremos a identificar o melhor caminho para sua empresa.
          </p>
          <Button
            size="lg"
            href="https://wa.me/5511965650546?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com um consultor
          </Button>
        </div>
      </Container>
    </div>
  );
}
