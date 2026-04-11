import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Termos de Uso | Crescitech',
    description:
        'Termos e condições de uso do site da Crescitech — consultoria em inteligência artificial para PMEs.',
};

export default function TermosPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para o início
                    </Link>

                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            Termos de Uso
                        </h1>
                        <p className="text-lg text-neutral-600">
                            Última atualização: 22 de fevereiro de 2026
                        </p>
                    </div>

                    <div className="space-y-12 text-neutral-700 leading-relaxed">
                        {/* 1. Aceitação dos Termos */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                1. Aceitação dos Termos
                            </h2>
                            <p>
                                Ao acessar e utilizar o site da Crescitech, você concorda integralmente com estes Termos de Uso. Se você não concordar com qualquer disposição aqui descrita, recomendamos que não utilize nosso site. O uso continuado do site após eventuais alterações nestes termos constitui aceitação das novas condições.
                            </p>
                        </section>

                        {/* 2. Descrição dos Serviços */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                2. Descrição dos Serviços
                            </h2>
                            <p className="mb-4">
                                O site da Crescitech é uma plataforma informativa que oferece:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Conteúdo institucional:</strong> informações sobre nossos serviços de consultoria em inteligência artificial para pequenas e médias empresas (PMEs).
                                </li>
                                <li>
                                    <strong>Blog e materiais educacionais:</strong> artigos, guias, e-books e checklists sobre IA aplicada a negócios.
                                </li>
                                <li>
                                    <strong>Formulários de contato:</strong> canais para solicitação de atendimento, agendamento de conversas e download de recursos.
                                </li>
                                <li>
                                    <strong>Metodologia Modelo 6C:</strong> apresentação da nossa metodologia proprietária de consultoria.
                                </li>
                            </ul>
                        </section>

                        {/* 3. Uso Permitido */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                3. Uso Permitido
                            </h2>
                            <p className="mb-4">
                                Você está autorizado a utilizar nosso site para:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Navegar e consultar informações sobre nossos serviços.</li>
                                <li>Ler artigos e conteúdos do blog para fins educacionais e informativos.</li>
                                <li>Fazer download de recursos disponibilizados gratuitamente.</li>
                                <li>Entrar em contato conosco para solicitar informações ou serviços de consultoria.</li>
                                <li>Compartilhar links de conteúdos do site, desde que com a devida atribuição à Crescitech.</li>
                            </ul>
                        </section>

                        {/* 4. Uso Proibido */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                4. Uso Proibido
                            </h2>
                            <p className="mb-4">
                                É expressamente proibido:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Tentativas de invasão:</strong> acessar áreas restritas do site, tentar explorar vulnerabilidades ou realizar engenharia reversa de qualquer componente.
                                </li>
                                <li>
                                    <strong>Coleta automatizada (scraping):</strong> utilizar robôs, crawlers ou qualquer ferramenta automatizada para extrair conteúdo do site sem autorização expressa.
                                </li>
                                <li>
                                    <strong>Uso comercial não autorizado:</strong> reproduzir, distribuir ou comercializar nosso conteúdo (textos, imagens, metodologias) sem autorização prévia por escrito.
                                </li>
                                <li>
                                    <strong>Envio de dados falsos:</strong> preencher formulários com informações falsas ou com o objetivo de spam.
                                </li>
                                <li>
                                    <strong>Uso que prejudique terceiros:</strong> utilizar o site de qualquer forma que possa danificar, sobrecarregar ou comprometer seu funcionamento.
                                </li>
                            </ul>
                        </section>

                        {/* 5. Propriedade Intelectual */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                5. Propriedade Intelectual
                            </h2>
                            <p className="mb-4">
                                Todo o conteúdo disponível no site da Crescitech é protegido por direitos autorais e de propriedade intelectual, incluindo, mas não se limitando a:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Textos e artigos:</strong> todo o conteúdo editorial, incluindo artigos do blog, descrições de serviços e materiais institucionais.
                                </li>
                                <li>
                                    <strong>Modelo 6C:</strong> metodologia proprietária da Crescitech para diagnóstico e implementação de soluções de IA em PMEs. Sua reprodução sem autorização é proibida.
                                </li>
                                <li>
                                    <strong>Recursos para download:</strong> e-books, guias e checklists são disponibilizados para uso pessoal e educacional. A redistribuição ou comercialização desses materiais é proibida.
                                </li>
                                <li>
                                    <strong>Marca e identidade visual:</strong> o nome Crescitech, logotipo e demais elementos visuais são de propriedade exclusiva da empresa.
                                </li>
                            </ul>
                        </section>

                        {/* 6. Limitação de Responsabilidade */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                6. Limitação de Responsabilidade
                            </h2>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Conteúdo informativo:</strong> as informações disponibilizadas no site têm caráter educacional e informativo. Não substituem consultoria profissional individualizada.
                                </li>
                                <li>
                                    <strong>Consultoria formal:</strong> a contratação de serviços de consultoria requer formalização em contrato específico. Informações do site não constituem oferta vinculante.
                                </li>
                                <li>
                                    <strong>Resultados:</strong> não garantimos resultados específicos com base nas informações do site. Cada negócio possui particularidades que só podem ser avaliadas em um processo de consultoria dedicado.
                                </li>
                                <li>
                                    <strong>Disponibilidade:</strong> nos esforçamos para manter o site disponível e atualizado, mas não garantimos funcionamento ininterrupto ou ausência total de erros.
                                </li>
                            </ul>
                        </section>

                        {/* 7. Links Externos */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                7. Links para Sites de Terceiros
                            </h2>
                            <p>
                                Nosso site pode conter links para sites ou serviços de terceiros (como WhatsApp, Google e outras plataformas). A Crescitech não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas desses sites externos. Recomendamos que você revise os termos e políticas de cada site que visitar.
                            </p>
                        </section>

                        {/* 8. Modificações dos Termos */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                8. Modificações dos Termos
                            </h2>
                            <p>
                                A Crescitech reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. A data da última atualização será sempre indicada no topo desta página. O uso continuado do site após a publicação de alterações constitui aceitação dos novos termos. Recomendamos que você revise esta página periodicamente.
                            </p>
                        </section>

                        {/* 9. Lei Aplicável e Foro */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                9. Lei Aplicável e Foro
                            </h2>
                            <p>
                                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Para a resolução de eventuais conflitos decorrentes destes termos, fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, com exclusão de qualquer outro, por mais privilegiado que seja.
                            </p>
                        </section>

                        {/* 10. Contato */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                10. Contato
                            </h2>
                            <p className="mb-4">
                                Para dúvidas ou esclarecimentos sobre estes Termos de Uso, entre em contato conosco:
                            </p>
                            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                                <p className="font-semibold text-neutral-900 mb-2">Crescitech — Consultoria em Inteligência Artificial</p>
                                <ul className="space-y-1">
                                    <li>
                                        E-mail:{' '}
                                        <a href="mailto:contato@crescitech.com.br" className="text-primary hover:underline">
                                            contato@crescitech.com.br
                                        </a>
                                    </li>
                                    <li>
                                        WhatsApp:{' '}
                                        <a
                                            href="https://wa.me/5511965650546"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            +55 11 96565-0546
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </main>
    );
}
