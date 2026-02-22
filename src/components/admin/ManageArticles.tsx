'use client';

import { useState, useEffect, useCallback } from 'react';
import { blogPosts } from '@/lib/blog/posts';
import { ExternalLink, Archive, Trash2, RotateCcw, RefreshCw } from 'lucide-react';

type Status = 'published' | 'archived' | 'deleted';
type Tab = 'published' | 'archived';

interface ArticleItem {
    slug: string;
    title: string;
    category: string;
    publishedAtFormatted: string;
    status: Status;
}

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL!;
const WEBHOOK_URL = APPS_SCRIPT_URL;

async function saveStatusToSheets(slug: string, status: Status) {
    await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'article_status', slug, status }),
    });
}

export function ManageArticles() {
    const [statuses, setStatuses] = useState<Record<string, Status>>(
        Object.fromEntries(blogPosts.map(p => [p.slug, p.status as Status]))
    );
    const [sheetsArticles, setSheetsArticles] = useState<ArticleItem[]>([]);
    const [activeTab, setActiveTab] = useState<Tab>('published');
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState<string | null>(null);

    const loadStatuses = useCallback(async () => {
        setLoading(true);
        try {
            const [statusRes, articlesRes] = await Promise.all([
                fetch(`${APPS_SCRIPT_URL}?mode=read&tab=statuses`, { redirect: 'follow', signal: AbortSignal.timeout(10_000) }),
                fetch(`${APPS_SCRIPT_URL}?mode=read&tab=artigos`, { redirect: 'follow', signal: AbortSignal.timeout(10_000) }),
            ]);

            // Carrega statuses
            const statusJson = await statusRes.json();
            const statusRows = Array.isArray(statusJson?.rows) ? statusJson.rows : [];
            const sheetsStatuses: Record<string, Status> = {};
            for (const row of statusRows) {
                if (row.slug) sheetsStatuses[row.slug] = row.status as Status;
            }

            // Carrega artigos do Sheets
            const articlesJson = await articlesRes.json();
            const articlesRows = Array.isArray(articlesJson?.rows) ? articlesJson.rows : [];
            const loaded: ArticleItem[] = articlesRows
                .filter((a: any) => a.slug && a.title)
                .map((a: any) => ({
                    slug: a.slug,
                    title: a.title,
                    category: a.category || '',
                    publishedAtFormatted: new Date(a.createdAt || Date.now()).toLocaleDateString('pt-BR', {
                        day: '2-digit', month: 'short', year: 'numeric'
                    }).toUpperCase(),
                    status: (sheetsStatuses[a.slug] ?? a.status ?? 'published') as Status,
                }));

            setSheetsArticles(loaded);

            // Atualiza statuses dos artigos do posts.ts
            setStatuses(prev => {
                const merged = { ...prev };
                for (const [slug, status] of Object.entries(sheetsStatuses)) {
                    merged[slug] = status;
                }
                return merged;
            });
        } catch { }
        setLoading(false);
    }, []);

    useEffect(() => { loadStatuses(); }, [loadStatuses]);

    const setStatus = async (slug: string, status: Status) => {
        setSaving(slug);
        setStatuses(prev => ({ ...prev, [slug]: status }));
        setSheetsArticles(prev => prev.map(a => a.slug === slug ? { ...a, status } : a));
        await saveStatusToSheets(slug, status);
        setSaving(null);
    };

    const codeArticles: ArticleItem[] = blogPosts.map(p => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        publishedAtFormatted: p.publishedAtFormatted,
        status: statuses[p.slug] ?? p.status as Status,
    }));

    const allArticles = [
        ...codeArticles,
        ...sheetsArticles.filter(a => !codeArticles.find(c => c.slug === a.slug)),
    ];

    const published = allArticles.filter(p => p.status === 'published');
    const archived = allArticles.filter(p => p.status === 'archived');
    const current = activeTab === 'published' ? published : archived;

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-slate-900">Gerenciar Artigos</h1>
                <button
                    onClick={loadStatuses}
                    disabled={loading}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Atualizar
                </button>
            </div>
            <p className="text-slate-500 text-sm mb-8">
                Arquivar remove o artigo do blog público. As mudanças são salvas no Google Sheets e aplicadas após o próximo deploy.
            </p>

            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setActiveTab('published')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'published' ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                    Publicados ({published.length})
                </button>
                <button
                    onClick={() => setActiveTab('archived')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'archived' ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                    Arquivados ({archived.length})
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-slate-100 bg-slate-50">
                            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Título</th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Categoria</th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Data</th>
                            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4"><span className="inline-block w-48 h-4 bg-slate-100 rounded animate-pulse" /></td>
                                    <td className="px-4 py-4"><span className="inline-block w-20 h-4 bg-slate-100 rounded animate-pulse" /></td>
                                    <td className="px-4 py-4"><span className="inline-block w-24 h-4 bg-slate-100 rounded animate-pulse" /></td>
                                    <td className="px-4 py-4" />
                                </tr>
                            ))
                        ) : current.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-slate-400 text-sm">
                                    {activeTab === 'published' ? 'Nenhum artigo publicado.' : 'Nenhum artigo arquivado.'}
                                </td>
                            </tr>
                        ) : (
                            current.map((post) => (
                                <tr key={post.slug} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-slate-800">{post.title}</p>
                                        <p className="text-xs text-slate-400 font-mono">{post.slug}</p>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                                    </td>
                                    <td className="px-4 py-4 text-slate-500">{post.publishedAtFormatted}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            {saving === post.slug && <RefreshCw className="w-3 h-3 animate-spin text-slate-400" />}
                                            {activeTab === 'published' && (
                                                <a href={`/blog/${post.slug}`} target="_blank" className="text-slate-400 hover:text-primary transition-colors" title="Ver artigo">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {activeTab === 'published' ? (
                                                <button onClick={() => setStatus(post.slug, 'archived')} disabled={saving === post.slug} className="text-slate-400 hover:text-orange-500 transition-colors disabled:opacity-50" title="Arquivar artigo">
                                                    <Archive className="w-4 h-4" />
                                                </button>
                                            ) : (
                                                <button onClick={() => setStatus(post.slug, 'published')} disabled={saving === post.slug} className="text-slate-400 hover:text-green-600 transition-colors disabled:opacity-50" title="Reativar artigo">
                                                    <RotateCcw className="w-4 h-4" />
                                                </button>
                                            )}
                                            <button onClick={() => setConfirmDelete(post.slug)} className="text-slate-400 hover:text-red-500 transition-colors" title="Apagar artigo">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {confirmDelete && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Apagar artigo?</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            O artigo será removido do blog público após o próximo deploy. Pode ser reativado pelo painel.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors">
                                Cancelar
                            </button>
                            <button
                                onClick={() => { setStatus(confirmDelete, 'deleted'); setConfirmDelete(null); }}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
                            >
                                Apagar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
