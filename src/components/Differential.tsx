"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function Differential() {
    const { t } = useLanguage();
    const d = t.differential;

    return (
        <section className="py-20 bg-primary-light/30">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                        {d.title}
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        {d.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Col 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
                        <h3 className="text-xl font-bold text-neutral-500 mb-6 text-center">{d.col1.title}</h3>
                        <ul className="space-y-4 mb-8 flex-1">
                            {d.col1.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-neutral-500">
                                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2: Crescitech (Featured) */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary transform md:-translate-y-4 relative z-10 flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                            {d.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">{d.col2.title}</h3>
                        <ul className="space-y-4 mb-8 flex-1">
                            {d.col2.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-neutral-900 font-medium">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center mt-auto">
                            <Button href="/modelo-6c" className="w-full">
                                {d.col2.cta}
                            </Button>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
                        <h3 className="text-xl font-bold text-neutral-500 mb-6 text-center">{d.col3.title}</h3>
                        <ul className="space-y-4 mb-8 flex-1">
                            {d.col3.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-neutral-500">
                                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
