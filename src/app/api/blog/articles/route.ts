export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog/posts';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzJVGw5rxL04jwmnr44X3dl_5bDtEkiKuEJlwI6cVVBrDSHUqRCRNBpGVozDNyHitp/exec';

async function fetchTab(tab: string) {
    try {
        const res = await fetch(`${APPS_SCRIPT_URL}?mode=read&tab=${tab}`, {
            method: 'GET', redirect: 'follow',
            headers: { Accept: 'application/json' },
            signal: AbortSignal.timeout(12_000),
        });
        if (!res.ok) return [];
        const json = await res.json();
        return Array.isArray(json?.rows) ? json.rows : [];
    } catch { return []; }
}

export async function GET() {
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
    };

    try {
        // Busca artigos do Sheets e statuses em paralelo
        const [sheetsArticles, sheetsStatuses] = await Promise.all([
            fetchTab('artigos'),
            fetchTab('statuses'),
        ]);

        // Mapa de status salvos pelo painel (slug → status)
        const statusMap: Record<string, string> = {};
        for (const row of sheetsStatuses) {
            if (row.slug) statusMap[row.slug] = row.status;
        }

        // Artigos do Sheets com status published
        const publishedFromSheets = sheetsArticles
            .filter((a: any) => {
                const status = statusMap[a.slug] ?? a.status;
                return status === 'published' && a.slug && a.title;
            })
            .map((a: any) => ({
                slug: a.slug,
                title: a.title,
                summary: a.summary || '',
                category: a.category || '',
                coverImage: a.coverImage || 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
                publishedAt: a.createdAt ? a.createdAt.split('T')[0] : new Date().toISOString().split('T')[0],
                publishedAtFormatted: new Date(a.createdAt || Date.now()).toLocaleDateString('pt-BR', {
                    day: '2-digit', month: 'short', year: 'numeric'
                }).toUpperCase(),
                readingTime: a.readingTime || '5 min',
                content: a.content || '',
                tags: a.tags || [],
                status: 'published' as const,
            }));

        const sheetsSlugs = new Set(publishedFromSheets.map((a: any) => a.slug));

        // Artigos do posts.ts respeitando status do Sheets
        const fromCode = blogPosts.filter(p => {
            const status = statusMap[p.slug] ?? p.status;
            return status === 'published' && !sheetsSlugs.has(p.slug);
        });

        const all = [...publishedFromSheets, ...fromCode].sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );

        return NextResponse.json({ ok: true, articles: all }, { status: 200, headers });
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        const fallback = blogPosts.filter(p => p.status === 'published');
        return NextResponse.json({ ok: true, articles: fallback, fallback: true, message }, { status: 200, headers });
    }
}
