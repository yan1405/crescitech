"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    const f = t.footer;

    return (
        <footer className="bg-neutral-50 pt-16 pb-8 border-t border-neutral-200">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1">
                        <Link href="/" className="inline-block relative w-[140px] h-[35px] mb-6">
                            <Image
                                src="/assets/logocrescitech.PNG"
                                alt="Crescitech"
                                fill
                                className="object-contain object-left grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        </Link>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            {f.tagline}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">{f.company}</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">{f.about}</Link></li>
                            <li><Link href="/pilares" className="hover:text-primary transition-colors">{f.pillars}</Link></li>
                            <li><Link href="/modelo-6c" className="hover:text-primary transition-colors">{f.model6c}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">{f.solutionsTitle}</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="/solucoes#diagnostico" className="hover:text-primary transition-colors">{f.diagnostic}</Link></li>
                            <li><Link href="/solucoes#consultoria" className="hover:text-primary transition-colors">{f.consulting}</Link></li>
                            <li><Link href="/solucoes#treinamento" className="hover:text-primary transition-colors">{f.training}</Link></li>
                            <li><Link href="/solucoes#ferramentas" className="hover:text-primary transition-colors">{f.tools}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">{f.contactTitle}</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="/contato" className="hover:text-primary transition-colors">{f.contact}</Link></li>
                            <li><a href="https://wa.me/5511959963937" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{f.whatsapp}</a></li>
                            <li><a href="mailto:contato@crescitech.com.br" className="hover:text-primary transition-colors">{f.email}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Crescitech. {f.rights}</p>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="hover:text-neutral-900">{f.privacy}</Link>
                        <Link href="/termos" className="hover:text-neutral-900">{f.terms}</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
