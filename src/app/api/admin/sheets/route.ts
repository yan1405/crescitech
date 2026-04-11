export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL!;

// ── Tipos ──────────────────────────────────────────────────────────────────

type Period = "7d" | "30d" | "90d" | "all";

interface LeadRow {
    createdAt: string | null;
    nome: string;
    telefone: string;
    email: string;
    tipo: string;
    empresa: string;
}

interface DownloadRow {
    createdAt: string | null;
    nome: string;
    email: string;
    recurso: string;
    recurso_id: string;
}

interface RatingRow {
    createdAt: string | null;
    slug: string;
    stars: number | null;
}

interface RatingBySlug {
    slug: string;
    total: number;
    sum: number;
    average: number | null;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function getPeriodMs(period: Period): number | null {
    const map: Record<Period, number | null> = {
        "7d": 7 * 24 * 60 * 60 * 1000,
        "30d": 30 * 24 * 60 * 60 * 1000,
        "90d": 90 * 24 * 60 * 60 * 1000,
        all: null,
    };
    return map[period] ?? map["30d"];
}

function isInPeriod(createdAt: string | null, cutoff: number | null): boolean {
    if (cutoff === null) return true; // "all"
    if (!createdAt) return false;
    const ts = new Date(createdAt).getTime();
    if (isNaN(ts)) return false;
    return Date.now() - ts <= cutoff;
}

async function fetchTab<T>(tab: string): Promise<T[]> {
    const url = `${APPS_SCRIPT_URL}?mode=read&tab=${tab}`;
    const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { Accept: "application/json" },
        // Apps Script pode demorar; 15 s é suficiente
        signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) {
        throw new Error(`Apps Script retornou ${res.status} para tab=${tab}`);
    }
    const json = await res.json();
    return Array.isArray(json?.rows) ? (json.rows as T[]) : [];
}

// ── Handler ────────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
    const requestId = `admin_sheets_${Date.now()}`;
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
    };

    try {
        const { searchParams } = new URL(request.url);
        const rawPeriod = searchParams.get("period") ?? "30d";
        const period: Period = (["7d", "30d", "90d", "all"] as Period[]).includes(
            rawPeriod as Period
        )
            ? (rawPeriod as Period)
            : "30d";

        const cutoff = getPeriodMs(period);

        // 3 GETs em paralelo
        const [allLeads, allDownloads, allRatings] = await Promise.all([
            fetchTab<LeadRow>("leads"),
            fetchTab<DownloadRow>("downloads"),
            fetchTab<RatingRow>("ratings"),
        ]);

        // Filtrar por período
        const leads = allLeads.filter((r) => isInPeriod(r.createdAt, cutoff));
        const downloads = allDownloads.filter((r) =>
            isInPeriod(r.createdAt, cutoff)
        );
        const ratings = allRatings.filter(
            (r) => isInPeriod(r.createdAt, cutoff) && r.stars !== null && r.stars >= 1 && r.stars <= 5
        );

        // Totais
        const starsSum = ratings.reduce((acc, r) => acc + (r.stars ?? 0), 0);
        const starsAverage =
            ratings.length > 0
                ? Math.round((starsSum / ratings.length) * 100) / 100
                : null;

        // Agregação por slug
        const slugMap = new Map<string, { total: number; sum: number }>();
        for (const r of ratings) {
            const slug = r.slug || "(sem slug)";
            const prev = slugMap.get(slug) ?? { total: 0, sum: 0 };
            slugMap.set(slug, {
                total: prev.total + 1,
                sum: prev.sum + (r.stars ?? 0),
            });
        }
        const ratingsBySlug: RatingBySlug[] = Array.from(slugMap.entries()).map(
            ([slug, { total, sum }]) => ({
                slug,
                total,
                sum,
                average: total > 0 ? Math.round((sum / total) * 100) / 100 : null,
            })
        );

        return NextResponse.json(
            {
                ok: true,
                requestId,
                period,
                totals: {
                    leads: leads.length,
                    downloads: downloads.length,
                    ratings: ratings.length,
                    starsAverage,
                },
                data: {
                    leads,
                    downloads,
                    ratings,
                    ratingsBySlug,
                },
            },
            { status: 200, headers }
        );
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[${requestId}] Erro em /api/admin/sheets:`, message);
        return NextResponse.json(
            {
                ok: false,
                requestId,
                error: "FETCH_ERROR",
                message,
            },
            { status: 500, headers }
        );
    }
}
