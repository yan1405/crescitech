"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Model6CSection() {
    const { t } = useLanguage();
    const s = t.model6cSection;

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                            {s.title}
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            {s.subtitle}
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                                <p className="font-medium text-neutral-800">{s.benefit1}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                                <p className="font-medium text-neutral-800">{s.benefit2}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                                <p className="font-medium text-neutral-800">{s.benefit3}</p>
                            </div>
                        </div>
                        <Button
                            href="https://wa.me/5511959963937?text=Olá,%20desejo%20falar%20com%20um%20especialista."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {s.cta}
                        </Button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            {s.steps.map((step, i) => (
                                <motion.div
                                    key={step.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-primary/30 transition-colors"
                                >
                                    <div className="text-4xl font-bold text-primary/20 mb-2">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="font-bold text-neutral-900 mb-1">{step.label}</h3>
                                    <p className="text-sm text-neutral-500 leading-snug">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-light/50 rounded-full blur-3xl -z-0 opacity-50" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-0 opacity-50" />
                    </div>

                </div>
            </Container>
        </section>
    );
}
