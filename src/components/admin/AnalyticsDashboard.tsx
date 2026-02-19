'use client';

import { BarChart2, Users, Eye, MousePointer, TrendingUp } from 'lucide-react';

const visitorsData = [
    { day: 'Seg', visitors: 142 },
    { day: 'Ter', visitors: 198 },
    { day: 'Qua', visitors: 175 },
    { day: 'Qui', visitors: 223 },
    { day: 'Sex', visitors: 289 },
    { day: 'Sáb', visitors: 156 },
    { day: 'Dom', visitors: 134 },
];

const topPages = [
    { page: '/blog/como-ia-transforma-pequenas-empresas-2026', views: 412 },
    { page: '/blog/chatbots-com-ia-atendimento-247', views: 287 },
    { page: '/recursos', views: 234 },
    { page: '/blog/o-que-e-o-modelo-6c', views: 198 },
    { page: '/contato', views: 167 },
];

const traffic = [
    { source: 'Google', percent: 45, color: 'bg-blue-500' },
    { source: 'Direto', percent: 28, color: 'bg-green-500' },
    { source: 'WhatsApp', percent: 15, color: 'bg-emerald-500' },
    { source: 'Instagram', percent: 8, color: 'bg-pink-500' },
    { source: 'Outros', percent: 4, color: 'bg-slate-400' },
];

const ctas = [
    { label: 'Agendar Conversa', clicks: 87 },
    { label: 'Fale com um Especialista', clicks: 64 },
    { label: 'Baixar Gratuitamente', clicks: 43 },
    { label: 'Ver no WhatsApp', clicks: 38 },
];

const maxVisitors = Math.max(...visitorsData.map(d => d.visitors));

export function AnalyticsDashboard() {
    const totalVisitors = visitorsData.reduce((acc, d) => acc + d.visitors, 0);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
                <p className="text-slate-500 mt-1">Visão geral do desempenho do site</p>
            </div>

            {/* Banner demonstrativo */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 mb-8 flex items-center gap-3">
                <BarChart2 className="w-4 h-4 text-blue-500 shrink-0" />
                <p className="text-sm text-blue-700">Dados de demonstração — conecte o Google Analytics para dados reais.</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Visitantes (7 dias)', value: totalVisitors, icon: Users, color: 'bg-blue-50 text-blue-600' },
                    { label: 'Pageviews', value: '3.241', icon: Eye, color: 'bg-purple-50 text-purple-600' },
                    { label: 'Taxa de Conversão', value: '4,2%', icon: TrendingUp, color: 'bg-green-50 text-green-600' },
                    { label: 'CTAs Clicados', value: '232', icon: MousePointer, color: 'bg-orange-50 text-orange-600' },
                ].map((card) => (
                    <div key={card.label} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${card.color}`}>
                            <card.icon className="w-5 h-5" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">{card.value}</p>
                        <p className="text-sm text-slate-500 mt-1">{card.label}</p>
                    </div>
                ))}
            </div>

            {/* Gráfico de visitantes */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-8">
                <h2 className="text-base font-semibold text-slate-900 mb-6">Visitantes — últimos 7 dias</h2>
                <div className="flex items-end gap-3 h-40">
                    {visitorsData.map((d) => (
                        <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                            <span className="text-xs text-slate-500">{d.visitors}</span>
                            <div
                                className="w-full bg-primary rounded-t-lg transition-all"
                                style={{ height: `${(d.visitors / maxVisitors) * 100}%` }}
                            />
                            <span className="text-xs text-slate-400">{d.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top páginas */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                    <h2 className="text-base font-semibold text-slate-900 mb-4">Top 5 páginas</h2>
                    <div className="flex flex-col gap-3">
                        {topPages.map((p) => (
                            <div key={p.page} className="flex items-center justify-between">
                                <p className="text-xs text-slate-600 font-mono truncate max-w-[70%]">{p.page}</p>
                                <span className="text-sm font-semibold text-slate-800">{p.views}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Origem do tráfego */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                    <h2 className="text-base font-semibold text-slate-900 mb-4">Origem do tráfego</h2>
                    <div className="flex flex-col gap-3">
                        {traffic.map((t) => (
                            <div key={t.source}>
                                <div className="flex justify-between text-xs text-slate-600 mb-1">
                                    <span>{t.source}</span>
                                    <span>{t.percent}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className={`${t.color} h-2 rounded-full`} style={{ width: `${t.percent}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTAs */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mt-8">
                <h2 className="text-base font-semibold text-slate-900 mb-4">CTAs mais clicados</h2>
                <div className="flex flex-col gap-3">
                    {ctas.map((c) => (
                        <div key={c.label} className="flex items-center justify-between">
                            <p className="text-sm text-slate-600">{c.label}</p>
                            <span className="text-sm font-semibold text-slate-800">{c.clicks} cliques</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
