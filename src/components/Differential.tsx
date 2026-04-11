import React from "react";
import { Container } from "@/components/ui/Container";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Differential() {
    return (
        <section className="py-20 bg-primary-light/30">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                        Por que escolher a Crescitech?
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Nossa abordagem combina o melhor da consultoria estratégica com a agilidade e inovação que seu negócio precisa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Infoprodutores */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
                        <h3 className="text-xl font-bold text-neutral-500 mb-6 text-center">Infoprodutores</h3>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-neutral-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Conteúdos genéricos e massificados</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Sem acompanhamento direto</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Foco apenas na teoria, pouca prática</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: Crescitech (Featured) */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary transform md:-translate-y-4 relative z-10 flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                            A Escolha Ideal
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Crescitech</h3>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-neutral-900 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Consultoria estratégica personalizada</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-900 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Acompanhamento próximo e contínuo</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-900 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Mergulho na sua cultura e processos</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-900 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Foco em resultados reais e mensuráveis</span>
                            </li>
                        </ul>
                        <div className="text-center mt-auto">
                            <Button href="/modelo-6c" className="w-full">
                                Conheça o Modelo 6C
                            </Button>
                        </div>
                    </div>

                    {/* Card 3: Grandes Consultorias */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
                        <h3 className="text-xl font-bold text-neutral-500 mb-6 text-center">Grandes Consultorias</h3>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-neutral-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Soluções padronizadas e engessadas</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Distantes da realidade das PMEs</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Custos proibitivos para pequenos negócios</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
