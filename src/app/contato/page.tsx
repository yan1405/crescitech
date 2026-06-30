"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContatoPage() {
    const { t } = useLanguage();
    const page = t.contatoPage;

    return (
        <div className="bg-white">
            <section className="bg-neutral-50 py-24 mb-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">{page.title}</h1>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            {page.subtitle}
                        </p>
                    </div>
                </Container>
            </section>

            <Container className="pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">{page.card1.title}</h3>
                        <p className="text-neutral-600 mb-8">
                            {page.card1.text}
                        </p>
                        <Button size="lg" className="w-full">
                            {page.card1.cta}
                        </Button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">{page.card2.title}</h3>
                        <p className="text-neutral-600 mb-8">
                            {page.card2.text}
                        </p>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full border-green-600 text-green-600 hover:bg-green-50"
                            href="https://wa.me/5511965650546?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20em%20IA%20da%20Crescitech."
                        >
                            {page.card2.cta}
                        </Button>
                    </div>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-12 max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-neutral-900 mb-8">{page.otherContact}</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        <div className="flex items-center justify-center gap-3 text-neutral-600">
                            <Mail className="w-5 h-5 text-primary" />
                            <a href="mailto:contato@crescitech.com.br" className="hover:text-primary transition-colors">contato@crescitech.com.br</a>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-neutral-600">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>{page.location}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
