"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Target, Cpu, BookOpen, BarChart3, Sprout, Network } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [
    <Target className="w-10 h-10" />,
    <Cpu className="w-10 h-10" />,
    <BookOpen className="w-10 h-10" />,
    <BarChart3 className="w-10 h-10" />,
    <Sprout className="w-10 h-10" />,
    <Network className="w-10 h-10" />,
];

export default function PilaresPage() {
    const { t } = useLanguage();
    const page = t.pilaresPage;

    return (
        <div className="bg-white">
            <section className="pt-24 pb-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            {page.title}
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            {page.subtitle}
                        </p>
                    </div>
                </Container>
            </section>

            <section className="pb-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {page.pillars.map((pillar, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {pillarIcons[index]}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">{pillar.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
