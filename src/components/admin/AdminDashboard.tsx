"use client";

import { useState, useEffect, useCallback } from "react";
import { Users, Star, Download, RefreshCw, BarChart2, Lock } from "lucide-react";

type Period = "7d" | "30d" | "90d" | "all";

interface SheetsTotals {
    leads: number;
    downloads: number;
    ratings: number;
    starsAverage: number | null;
}

interface SheetsResponse {
    ok: boolean;
    period: Period;
    totals: SheetsTotals;
    error?: string;
    message?: string;
}

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
    { value: "7d", label: "7 dias" },
    { value: "30d", label: "30 dias" },
    { value: "90d", label: "90 dias" },
    { value: "all", label: "Tudo" },
];

export function AdminDashboard() {
    const [period, setPeriod] = useState<Period>("30d");
    const [refreshKey, setRefreshKey] = useState(0);
    const [bust, setBust] = useState(false);
    const [data, setData] = useState<SheetsTotals | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const doFetch = useCallback(async (p: Period, withBust: boolean) => {
        const url = withBust
            ? `/api/admin/sheets?period=${p}&_t=${Date.now()}`
            : `/api/admin/sheets?period=${p}`;

        if (process.env.NODE_ENV === "development") {
            console.log("[AdminDashboard] fetch", { period: p, url });
        }

        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url, { cache: "no-store" });
            const json: SheetsResponse = await res.json();
            if (!json.ok) {
                setError(json.message ?? json.error ?? "Erro desconhecido na API.");
                setData(null);
            } else {
                setData(json.totals);
            }
        } catch {
            setError("Não foi possível conectar à API. Verifique sua conexão.");
            setData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    // Dispara fetch sempre que period ou refreshKey mudam
    useEffect(() => {
        doFetch(period, bust);
    }, [period, refreshKey, doFetch, bust]);

    const handlePeriodChange = (p: Period) => {
        setBust(false);
        setPeriod(p);
    };

    const handleRefresh = () => {
        setBust(true);
        setRefreshKey((k) => k + 1);
    };

    const starsDisplay =
        data?.starsAverage != null
            ? data.starsAverage.toFixed(1) + " ⭐"
            : "—";

    const cards = [
        {
            label: "Leads captados",
            value: data ? data.leads : "—",
            icon: Users,
            color: "bg-blue-50 text-blue-600",
        },
        {
            label: "Downloads",
            value: data ? data.downloads : "—",
            icon: Download,
            color: "bg-green-50 text-green-600",
        },
        {
            label: "Avaliações",
            value: data ? data.ratings : "—",
            icon: Star,
            color: "bg-yellow-50 text-yellow-600",
        },
        {
            label: "Média de estrelas",
            value: data ? starsDisplay : "—",
            icon: Star,
            color: "bg-purple-50 text-purple-600",
        },
    ];

    return (
        <div>
            {/* Cabeçalho */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

                <div className="flex items-center gap-3 flex-wrap">
                    {/* Seletor de período */}
                    <div className="flex rounded-lg border border-slate-200 overflow-hidden text-sm">
                        {PERIOD_OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => handlePeriodChange(opt.value)}
                                disabled={loading}
                                className={`px-3 py-1.5 transition-colors ${period === opt.value
                                    ? "bg-primary text-white font-semibold"
                                    : "bg-white text-slate-600 hover:bg-slate-50"
                                    } disabled:opacity-50`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>

                    {/* Botão Atualizar */}
                    <button
                        onClick={handleRefresh}
                        disabled={loading}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                        {loading ? "Atualizando…" : "Atualizar"}
                    </button>
                </div>
            </div>

            {/* Aviso de erro */}
            {error && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    ⚠️ {error}
                </div>
            )}

            {/* Cards de métricas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {cards.map((card) => (
                    <div
                        key={card.label}
                        className="bg-white rounded-xl border border-slate-100 shadow-sm p-6"
                    >
                        <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${card.color}`}
                        >
                            <card.icon className="w-5 h-5" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">
                            {loading ? (
                                <span className="inline-block w-12 h-7 bg-slate-100 rounded animate-pulse" />
                            ) : (
                                card.value
                            )}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">{card.label}</p>
                    </div>
                ))}
            </div>

            {/* Bloco GA4 — bloqueado */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <BarChart2 className="w-5 h-5 text-slate-400" />
                        <h2 className="text-lg font-semibold text-slate-900">
                            Google Analytics (GA4)
                        </h2>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        <Lock className="w-3 h-3" />
                        Bloqueado
                    </span>
                </div>
                <p className="text-sm text-slate-500">
                    Conexão pendente. Em breve métricas de tráfego estarão disponíveis.
                </p>
            </div>
        </div>
    );
}
