import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-neutral-50 pt-16 pb-8 border-t border-neutral-200">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block relative w-[140px] h-[35px] mb-6">
                            <Image
                                src="/assets/logocrescitech.PNG"
                                alt="Crescitech"
                                fill
                                className="object-contain object-left grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        </Link>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Transformando negócios com inteligência artificial estratégica, ética e focada em resultados reais.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">Quem Somos</Link></li>
                            <li><Link href="/pilares" className="hover:text-primary transition-colors">Nossos Pilares</Link></li>
                            <li><Link href="/modelo-6c" className="hover:text-primary transition-colors">Modelo 6C</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">Soluções</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="/solucoes#diagnostico" className="hover:text-primary transition-colors">Diagnóstico Estratégico</Link></li>
                            <li><Link href="/solucoes#consultoria" className="hover:text-primary transition-colors">Consultoria Personalizada</Link></li>
                            <li><Link href="/solucoes#treinamento" className="hover:text-primary transition-colors">Treinamento e Capacitação</Link></li>
                            <li><Link href="/solucoes#ferramentas" className="hover:text-primary transition-colors">Desenvolvimento de Ferramentas</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">Contato</h4>
                        <ul className="space-y-2 text-sm text-neutral-600">
                            <li><Link href="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
                            <li><a href="https://wa.me/5511965650546" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
                            <li><a href="mailto:contato@crescitech.com.br" className="hover:text-primary transition-colors">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Crescitech. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="hover:text-neutral-900">Política de Privacidade</Link>
                        <Link href="/termos" className="hover:text-neutral-900">Termos de Uso</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
