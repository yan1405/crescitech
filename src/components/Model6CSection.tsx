"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Model6CSection() {
    const steps = [
        { id: "01", label: "Consciência", desc: "Entendimento do cenário atual e oportunidades." },
        { id: "02", label: "Capacitação", desc: "Preparação de times e lideranças." },
        { id: "03", label: "Concepção", desc: "Desenho da estratégia e soluções." },
        { id: "04", label: "Construção", desc: "Desenvolvimento e implementação." },
        { id: "05", label: "Conexão", desc: "Integração com ecossistema e processos." },
        { id: "06", label: "Crescimento", desc: "Escala e mensuração de resultados." },
    ];

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                            Modelo 6C de Maturidade em IA
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            Nossa metodologia proprietária garante que a adoção de Inteligência Artificial aconteça com clareza, estrutura e foco em impacto real. Respeitamos o estágio de maturidade digital da sua organização para promover uma evolução sustentável.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                <p className="font-medium text-neutral-800">Transformação estruturada passo a passo</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                                <p className="font-medium text-neutral-800">Fim da ansiedade e da paralisia tecnológica</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                                <p className="font-medium text-neutral-800">Resultados mensuráveis em cada etapa</p>
                            </div>
                        </div>
                        <Button
                            href="https://wa.me/5511965650546?text=Olá,%20desejo%20falar%20com%20um%20especialista."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fale com um Especialista
                        </Button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-primary/30 transition-colors"
                                >
                                    <div className="text-4xl font-bold text-primary/20 mb-2">{step.id}</div>
                                    <h3 className="font-bold text-neutral-900 mb-1">{step.label}</h3>
                                    <p className="text-sm text-neutral-500 leading-snug">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background decoration */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-light/50 rounded-full blur-3xl -z-0 opacity-50" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-0 opacity-50" />
                    </div>

                </div>
            </Container>
        </section>
    );
}
