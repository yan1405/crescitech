"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Search, Users, GraduationCap, Wrench, Compass, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

const DotLottiePlayer = dynamic(
    () => import("@dotlottie/react-player").then(mod => mod.DotLottiePlayer),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 animate-pulse rounded-xl" />
        ),
    }
);

const solutionIds = ["diagnostico", "consultoria", "treinamento", "ferramentas", "mentoria", "regulacao"];
const solutionIcons = [
    <Search className="w-8 h-8" />,
    <Users className="w-8 h-8" />,
    <GraduationCap className="w-8 h-8" />,
    <Wrench className="w-8 h-8" />,
    <Compass className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
];
const solutionLotties = [
    "/assets/diagnostico.lottie",
    "/assets/consultoria.lottie",
    "/assets/treinamento.lottie",
    "/assets/dev.lottie",
    "/assets/mentoria.lottie",
    "/assets/regulamentacao.lottie",
];

export default function SolutionsPage() {
    const { t } = useLanguage();
    const page = t.solutionsPage;

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

            <Container className="pb-24">
                <div className="space-y-24">
                    {page.items.map((item, index) => (
                        <div
                            key={solutionIds[index]}
                            id={solutionIds[index]}
                            className={`scroll-mt-24 flex flex-col gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                        >
                            <div className="flex-1">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                                    {solutionIcons[index]}
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-900 mb-4">{item.title}</h2>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                    {item.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-neutral-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    href={`https://wa.me/5511959963937?text=Olá,%20estou%20interessado%20em%20saber%20mais%20sobre%20${encodeURIComponent(item.title)}.`}
                                    variant="outline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {page.interested}
                                </Button>
                            </div>
                            <div className="flex-1 w-full relative aspect-[4/3] bg-neutral-100 rounded-2xl border border-neutral-200 overflow-hidden shadow-lg">
                                <DotLottiePlayer
                                    src={solutionLotties[index]}
                                    autoplay
                                    loop
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-neutral-50 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">{page.doubt.title}</h3>
                    <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                        {page.doubt.text}
                    </p>
                    <Button
                        size="lg"
                        href="https://wa.me/5511959963937?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {page.doubt.cta}
                    </Button>
                </div>
            </Container>
        </div>
    );
}
