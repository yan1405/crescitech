import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SolutionCard } from "@/components/SolutionCard";
import {
    Search,
    Users,
    GraduationCap,
    Wrench,
    Compass,
    ShieldCheck
} from "lucide-react";

const solutions = [
    {
        title: "Diagnóstico Estratégico com IA",
        description: "Análise e planejamento de ação com base na cultura e na realidade do cliente.",
        icon: <Search className="w-7 h-7" />,
        href: "/solucoes#diagnostico",
        lottieUrl: "/assets/diagnostico.lottie",
        imageAlt: "Análise estratégica de dados e métricas de negócios",
    },
    {
        title: "Consultoria Personalizada",
        description: "Soluções sob medida com foco em resultados concretos e aplicação prática.",
        icon: <Users className="w-7 h-7" />,
        href: "/solucoes#consultoria",
        lottieUrl: "/assets/consultoria.lottie",
        imageAlt: "Reunião estratégica de consultoria empresarial",
    },
    {
        title: "Treinamento e Capacitação",
        description: "Programas para equipes e lideranças com foco em aplicação real da IA.",
        icon: <GraduationCap className="w-7 h-7" />,
        href: "/solucoes#treinamento",
        lottieUrl: "/assets/treinamento.lottie",
        imageAlt: "Treinamento corporativo e capacitação profissional",
    },
    {
        title: "Desenvolvimento de Ferramentas",
        description: "Criação de ferramentas inteligentes integradas aos processos da sua empresa.",
        icon: <Wrench className="w-7 h-7" />,
        href: "/solucoes#ferramentas",
        lottieUrl: "/assets/Dev.lottie",
        imageAlt: "Desenvolvimento de software e ferramentas tecnológicas",
    },
    {
        title: "Mentoria Estratégica",
        description: "Suporte direto para gestores liderarem com inovação e decisões inteligentes.",
        icon: <Compass className="w-7 h-7" />,
        href: "/solucoes#mentoria",
        lottieUrl: "/assets/mentoria.lottie",
        imageAlt: "Mentoria e desenvolvimento de liderança estratégica",
    },
    {
        title: "Regulação e Boas Práticas",
        description: "Criação de políticas internas de uso responsável e ético da IA.",
        icon: <ShieldCheck className="w-7 h-7" />,
        href: "/solucoes#regulacao",
        lottieUrl: "/assets/regulamentacao.lottie",
        imageAlt: "Documentação de compliance e boas práticas empresariais",
    },
];

export function Solutions() {
    return (
        <section id="solutions" className="py-20 lg:py-32 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                        Nossas Soluções
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Descubra como podemos acelerar seu negócio com inteligência artificial aplicada de forma estratégica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={solution.title}
                            {...solution}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        size="lg"
                        href="https://wa.me/5511965650546?text=Olá,%20desejo%20falar%20com%20um%20consultor."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fale com um Consultor
                    </Button>
                </div>
            </Container>
        </section>
    );
}
