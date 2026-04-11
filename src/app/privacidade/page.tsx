import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Política de Privacidade | Crescitech',
    description:
        'Saiba como a Crescitech coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
};

export default function PrivacidadePage() {
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
                            Política de Privacidade
                        </h1>
                        <p className="text-lg text-neutral-600">
                            Última atualização: 22 de fevereiro de 2026
                        </p>
                    </div>

                    <div className="space-y-12 text-neutral-700 leading-relaxed">
                        {/* 1. Introdução */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                1. Introdução
                            </h2>
                            <p className="mb-4">
                                A Crescitech (&quot;nós&quot;, &quot;nosso&quot; ou &quot;nossa&quot;) tem o compromisso de proteger a privacidade e os dados pessoais de todos os visitantes e usuários do nosso site. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
                            </p>
                            <p>
                                Ao utilizar nosso site e nossos serviços, você declara estar ciente e de acordo com as práticas descritas nesta política. Caso não concorde, recomendamos que não utilize nosso site.
                            </p>
                        </section>

                        {/* 2. Dados Coletados */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                2. Dados Pessoais Coletados
                            </h2>
                            <p className="mb-4">
                                Coletamos dados pessoais nas seguintes situações:
                            </p>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                2.1 Formulários de Contato e Agendamento
                            </h3>
                            <p className="mb-2">
                                Ao preencher nossos formulários, podemos coletar:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                                <li>Nome completo</li>
                                <li>Endereço de e-mail</li>
                                <li>Número de telefone</li>
                                <li>Tipo de pessoa (Física ou Jurídica)</li>
                                <li>Nome da empresa (quando aplicável)</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                2.2 Formulários de Download de Recursos
                            </h3>
                            <p className="mb-4">
                                Ao solicitar materiais educacionais (e-books, guias e checklists), podemos coletar seu nome e e-mail para envio do recurso.
                            </p>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                2.3 Dados de Navegação (Cookies e Analytics)
                            </h3>
                            <p>
                                Utilizamos o Google Analytics 4 (ID: G-LPWYQE67EP) para coletar dados anonimizados sobre a navegação no site, como páginas visitadas, tempo de permanência, origem do tráfego e tipo de dispositivo. Esses dados não identificam você pessoalmente.
                            </p>
                        </section>

                        {/* 3. Finalidade do Uso */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                3. Finalidade do Uso dos Dados
                            </h2>
                            <p className="mb-4">
                                Utilizamos os dados coletados para as seguintes finalidades:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Responder solicitações de contato:</strong> entrar em contato via e-mail, telefone ou WhatsApp para atender sua solicitação de consultoria ou informações.
                                </li>
                                <li>
                                    <strong>Enviar recursos solicitados:</strong> disponibilizar materiais educacionais que você solicitou através dos formulários de download.
                                </li>
                                <li>
                                    <strong>Melhorar a experiência do site:</strong> analisar o comportamento de navegação para aprimorar o conteúdo, a usabilidade e o desempenho do site.
                                </li>
                                <li>
                                    <strong>Análise de tráfego:</strong> compreender quais conteúdos e páginas são mais relevantes para nossos visitantes.
                                </li>
                            </ul>
                        </section>

                        {/* 4. Armazenamento e Compartilhamento */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                4. Armazenamento e Compartilhamento de Dados
                            </h2>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                4.1 Onde seus dados são armazenados
                            </h3>
                            <p className="mb-4">
                                Os dados coletados através dos formulários são armazenados de forma segura no Google Sheets, utilizando a infraestrutura do Google Cloud Platform, que opera com padrões internacionais de segurança (ISO 27001, SOC 2).
                            </p>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                4.2 Serviços de terceiros
                            </h3>
                            <p className="mb-2">
                                Os seguintes serviços de terceiros podem ter acesso a dados:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                                <li><strong>Google Analytics 4:</strong> dados anonimizados de navegação para análise de tráfego.</li>
                                <li><strong>Google Sheets / Google Apps Script:</strong> armazenamento e processamento dos dados de formulários.</li>
                                <li><strong>Netlify:</strong> hospedagem do site (não tem acesso direto aos dados de formulários).</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                4.3 Compromisso de não venda de dados
                            </h3>
                            <p>
                                A Crescitech <strong>não vende, aluga ou comercializa</strong> seus dados pessoais com terceiros, em nenhuma hipótese.
                            </p>
                        </section>

                        {/* 5. Cookies e Rastreamento */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                5. Cookies e Tecnologias de Rastreamento
                            </h2>
                            <p className="mb-4">
                                Nosso site utiliza cookies para melhorar sua experiência de navegação e coletar dados analíticos.
                            </p>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                5.1 Cookies utilizados
                            </h3>
                            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                                <li><strong>Google Analytics 4 (G-LPWYQE67EP):</strong> cookies de análise de tráfego (_ga, _ga_*) com duração de até 2 anos.</li>
                                <li><strong>Cookies de sessão:</strong> cookies técnicos necessários para o funcionamento do site.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                5.2 Como desabilitar cookies
                            </h3>
                            <p>
                                Você pode desabilitar cookies a qualquer momento nas configurações do seu navegador. Note que a desabilitação de cookies pode afetar a funcionalidade de algumas partes do site. Para desabilitar especificamente o Google Analytics, você pode instalar o{' '}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    complemento de desativação do Google Analytics
                                </a>.
                            </p>
                        </section>

                        {/* 6. Direitos do Titular (LGPD) */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                6. Seus Direitos (LGPD)
                            </h2>
                            <p className="mb-4">
                                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos em relação aos seus dados pessoais:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Confirmação e acesso:</strong> saber se tratamos seus dados e obter uma cópia das informações que temos sobre você.
                                </li>
                                <li>
                                    <strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.
                                </li>
                                <li>
                                    <strong>Exclusão:</strong> solicitar a eliminação dos seus dados pessoais, salvo nas hipóteses de obrigação legal de retenção.
                                </li>
                                <li>
                                    <strong>Portabilidade:</strong> solicitar a transferência dos seus dados para outro fornecedor de serviço.
                                </li>
                                <li>
                                    <strong>Revogação de consentimento:</strong> retirar seu consentimento a qualquer momento, sem comprometer a licitude do tratamento realizado anteriormente.
                                </li>
                                <li>
                                    <strong>Oposição:</strong> opor-se ao tratamento de dados quando realizado com base em hipóteses que não o consentimento.
                                </li>
                            </ul>
                            <p className="mt-4">
                                Para exercer qualquer um desses direitos, entre em contato conosco através dos canais indicados na seção 9.
                            </p>
                        </section>

                        {/* 7. Segurança */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                7. Segurança dos Dados
                            </h2>
                            <p className="mb-4">
                                A Crescitech adota medidas técnicas e organizacionais adequadas para proteger seus dados pessoais, incluindo:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Comunicação criptografada via HTTPS/TLS em todo o site.</li>
                                <li>Acesso restrito ao painel administrativo com autenticação por senha e cookies seguros (httpOnly).</li>
                                <li>Sanitização de dados de entrada para prevenção de ataques XSS e injeção de código.</li>
                                <li>Variáveis de ambiente para proteção de credenciais e URLs sensíveis.</li>
                                <li>Infraestrutura de hospedagem (Netlify) e armazenamento (Google Cloud) com certificações de segurança.</li>
                            </ul>
                            <p className="mt-4">
                                Apesar de nossos esforços, nenhum sistema é 100% seguro. Caso identifique qualquer vulnerabilidade, pedimos que nos comunique imediatamente.
                            </p>
                        </section>

                        {/* 8. Alterações */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                8. Alterações nesta Política
                            </h2>
                            <p>
                                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou na legislação vigente. A data da última atualização será sempre indicada no topo desta página. Recomendamos que você revise esta política regularmente. O uso continuado do site após alterações constitui aceite das novas condições.
                            </p>
                        </section>

                        {/* 9. Contato */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                9. Contato
                            </h2>
                            <p className="mb-4">
                                Para dúvidas, solicitações ou exercício dos seus direitos previstos na LGPD, entre em contato conosco:
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
