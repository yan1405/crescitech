"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ExternalLink, RefreshCw } from "lucide-react";
import { blogPosts } from "@/lib/blog/posts";

type Period = "7d" | "30d" | "90d" | "all";

interface RatingBySlug {
    slug: string;
    total: number;
    sum: number;
    average: number | null;
}

interface SheetsTotals {
    ratings: number;
    starsAverage: number | null;
}

interface SheetsResponse {
    ok: boolean;
    totals: SheetsTotals;
    data: { ratingsBySlug: RatingBySlug[] };
    error?: string;
    message?: string;
}

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
    { value: "7d", label: "7 dias" },
    { value: "30d", label: "30 dias" },
    { value: "90d", label: "90 dias" },
    { value: "all", label: "Tudo" },
];

function StarDisplay({ rating }: { rating: number | null }) {
    const filled = rating != null ? Math.round(rating) : 0;
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star
                    key={s}
                    size={14}
                    className={
                        s <= filled ? "fill-yellow-400 text-yellow-400" : "text-slate-200"
                    }
                />
            ))}
        </div>
    );
}

export function RatingsDashboard() {
    const [period, setPeriod] = useState<Period>("30d");
    const [refreshKey, setRefreshKey] = useState(0);
    const [bust, setBust] = useState(false);
    const [totals, setTotals] = useState<SheetsTotals | null>(null);
    const [ratingsBySlug, setRatingsBySlug] = useState<RatingBySlug[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const doFetch = useCallback(async (p: Period, withBust: boolean) => {
        const url = withBust
            ? `/api/admin/sheets?period=${p}&_t=${Date.now()}`
            : `/api/admin/sheets?period=${p}`;

        if (process.env.NODE_ENV === "development") {
            console.log("[RatingsDashboard] fetch", { period: p, url });
        }

        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url, { cache: "no-store" });
            const json: SheetsResponse = await res.json();
            if (!json.ok) {
                setError(json.message ?? json.error ?? "Erro desconhecido na API.");
                setTotals(null);
                setRatingsBySlug([]);
            } else {
                setTotals(json.totals);
                setRatingsBySlug(json.data?.ratingsBySlug ?? []);
            }
        } catch {
            setError("Não foi possível conectar à API. Verifique sua conexão.");
            setTotals(null);
            setRatingsBySlug([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Dispara fetch sempre que period ou refreshKey mudam
    useEffect(() => {
        doFetch(period, bust);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [period, refreshKey]);

    const handlePeriodChange = (p: Period) => {
        setBust(false);
        setPeriod(p);
    };

    const handleRefresh = () => {
        setBust(true);
        setRefreshKey((k) => k + 1);
    };

    // Ordenação: maior average primeiro (null por último), empate: maior total primeiro
    const sorted = [...ratingsBySlug].sort((a, b) => {
        if (a.average === null && b.average === null) return b.total - a.total;
        if (a.average === null) return 1;
        if (b.average === null) return -1;
        if (b.average !== a.average) return b.average - a.average;
        return b.total - a.total;
    });

    const avgDisplay =
        totals?.starsAverage != null
            ? totals.starsAverage.toFixed(1)
            : "—";

    return (
        <div>
            {/* Cabeçalho */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Avaliações</h1>
                    <p className="text-slate-500 mt-1">Notas dos leitores por artigo</p>
                </div>

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

            {/* Cards superiores */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
                    <p className="text-sm text-slate-500 mb-1">Avaliação média geral</p>
                    <p className="text-4xl font-bold text-slate-900">
                        {loading ? (
                            <span className="inline-block w-20 h-10 bg-slate-100 rounded animate-pulse" />
                        ) : (
                            <>⭐ {avgDisplay}</>
                        )}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">de todos os artigos</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center">
                    <p className="text-sm text-slate-500 mb-1">Total de avaliações</p>
                    <p className="text-4xl font-bold text-slate-900">
                        {loading ? (
                            <span className="inline-block w-16 h-10 bg-slate-100 rounded animate-pulse" />
                        ) : (
                            totals?.ratings ?? "—"
                        )}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">votos recebidos</p>
                </div>
            </div>

            {/* Tabela */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-slate-100 bg-slate-50">
                            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Artigo
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Estrelas
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Média
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Votos
                            </th>
                            <th className="px-4 py-3" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {loading && sorted.length === 0 ? (
                            // Skeleton rows durante o primeiro carregamento
                            Array.from({ length: 4 }).map((_, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4">
                                        <span className="inline-block w-48 h-4 bg-slate-100 rounded animate-pulse" />
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="inline-block w-20 h-4 bg-slate-100 rounded animate-pulse" />
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="inline-block w-10 h-4 bg-slate-100 rounded animate-pulse" />
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="inline-block w-8 h-4 bg-slate-100 rounded animate-pulse" />
                                    </td>
                                    <td className="px-4 py-4" />
                                </tr>
                            ))
                        ) : sorted.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-slate-400 text-sm">
                                    Nenhuma avaliação encontrada para este período.
                                </td>
                            </tr>
                        ) : (
                            sorted.map((r) => {
                                const post = blogPosts.find((p) => p.slug === r.slug);
                                return (
                                    <tr
                                        key={r.slug}
                                        className="hover:bg-slate-50/50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-slate-800 line-clamp-1">
                                                {post?.title || r.slug}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <StarDisplay rating={r.average} />
                                        </td>
                                        <td className="px-4 py-4">
                                            {r.average != null ? (
                                                <>
                                                    <span className="font-semibold text-slate-900">
                                                        {r.average.toFixed(1)}
                                                    </span>
                                                    <span className="text-slate-400">/5</span>
                                                </>
                                            ) : (
                                                <span className="text-slate-400">—</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-4 text-slate-600">{r.total}</td>
                                        <td className="px-4 py-4">
                                            <a
                                                href={`/blog/${r.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
