"use client";

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
import { useLanguage } from "@/context/LanguageContext";

const solutionIcons = [
    <Search className="w-7 h-7" />,
    <Users className="w-7 h-7" />,
    <GraduationCap className="w-7 h-7" />,
    <Wrench className="w-7 h-7" />,
    <Compass className="w-7 h-7" />,
    <ShieldCheck className="w-7 h-7" />,
];

const solutionHrefs = [
    "/solucoes#diagnostico",
    "/solucoes#consultoria",
    "/solucoes#treinamento",
    "/solucoes#ferramentas",
    "/solucoes#mentoria",
    "/solucoes#regulacao",
];

const solutionLotties = [
    "/assets/diagnostico.lottie",
    "/assets/consultoria.lottie",
    "/assets/treinamento.lottie",
    "/assets/dev.lottie",
    "/assets/mentoria.lottie",
    "/assets/regulamentacao.lottie",
];

const solutionAlts = [
    "Análise estratégica de dados e métricas de negócios",
    "Reunião estratégica de consultoria empresarial",
    "Treinamento corporativo e capacitação profissional",
    "Desenvolvimento de software e ferramentas tecnológicas",
    "Mentoria e desenvolvimento de liderança estratégica",
    "Documentação de compliance e boas práticas empresariais",
];

export function Solutions() {
    const { t } = useLanguage();

    return (
        <section id="solutions" className="py-20 lg:py-32 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                        {t.solutions.title}
                    </h2>
                    <p className="text-lg text-neutral-600">
                        {t.solutions.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {t.solutions.items.map((solution, index) => (
                        <SolutionCard
                            key={solution.title}
                            title={solution.title}
                            description={solution.description}
                            icon={solutionIcons[index]}
                            href={solutionHrefs[index]}
                            lottieUrl={solutionLotties[index]}
                            imageAlt={solutionAlts[index]}
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
                        {t.solutions.cta}
                    </Button>
                </div>
            </Container>
        </section>
    );
}
