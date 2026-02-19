"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function Modelo6CPage() {
    const steps = [
        {
            id: "01",
            title: "Consciência",
            description: "O primeiro passo é entender onde estamos e para onde podemos ir. Realizamos um diagnóstico profundo da maturidade digital, identificando dores latentes e oportunidades de alto impacto. Não há transformação sem clareza.",
            benefits: ["Mapeamento de maturidade", "Identificação de gargalos", "Definição de objetivos claros"]
        },
        {
            id: "02",
            title: "Capacitação",
            description: "Tecnologia sem pessoas preparadas é desperdício. Investimos no letramento digital de times e lideranças, criando uma cultura que abraça a inovação em vez de temê-la.",
            benefits: ["Workshops práticos", "Mudança de mindset", "Preparação para mudança"]
        },
        {
            id: "03",
            title: "Concepção",
            description: "Hora de desenhar a solução ideal. Criamos um roadmap estratégico que prioriza iniciativas de acordo com a viabilidade técnica e o potencial de retorno para o negócio.",
            benefits: ["Design de soluções", "Priorização estratégica", "Análise de viabilidade"]
        },
        {
            id: "04",
            title: "Construção",
            description: "Mão na massa. Desenvolvemos e implementamos as soluções desenhadas, seja através de ferramentas proprietárias, integrações ou configurações de plataformas de mercado.",
            benefits: ["Desenvolvimento ágil", "Prototipagem rápida", "Implementação técnica"]
        },
        {
            id: "05",
            title: "Conexão",
            description: "A IA não pode ser uma ilha. Integramos as novas ferramentas aos processos e sistemas existentes, garantindo que a informação flua sem barreiras por toda a organização.",
            benefits: ["Integração de sistemas", "Automação de fluxos", "Unificação de dados"]
        },
        {
            id: "06",
            title: "Crescimento",
            description: "O fim do ciclo é apenas o começo da escala. Monitoramos os resultados, ajustamos rotas e expandimos o sucesso para outras áreas, criando um ciclo virtuoso de inovação.",
            benefits: ["Mensuração de ROI", "Otimização contínua", "Expansão da iniciativas"]
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-24 pb-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">Modelo 6C</h1>
                        <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                            Uma metodologia proprietária desenvolvida para garantir que a jornada de IA da sua empresa seja estruturada, segura e focada em resultados reais.
                        </p>

                    </div>
                </Container>
            </section>

            <Container className="pb-24">
                <div className="space-y-20 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative pl-12 lg:pl-0">
                            <div className="hidden lg:block absolute left-[-80px] top-0 text-6xl font-bold text-neutral-100 select-none">
                                {step.id}
                            </div>

                            <div className="lg:border-l-2 lg:border-neutral-100 lg:pl-12 relative">
                                <span className="lg:hidden absolute left-[-48px] top-1 text-2xl font-bold text-primary">
                                    {step.id}
                                </span>

                                <h2 className="text-3xl font-bold text-neutral-900 mb-6">{step.title}</h2>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                                    <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-4">
                                        O que entregamos nesta etapa:
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {step.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-neutral-700">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                                <span className="text-sm font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                        Quer aplicar o Modelo 6C no seu negócio?
                    </h2>
                    <Button
                        size="lg"
                        href="https://wa.me/5511965650546?text=Olá,%20desejo%20falar%20com%20um%20especialista."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fale com um especialista
                    </Button>
                </div>
            </Container>
        </div>
    );
}
