"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function BlogHero() {
    const { t } = useLanguage();
    const page = (t as any).blogPage;

    return (
        <section className="pt-32 pb-12">
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
    );
}
