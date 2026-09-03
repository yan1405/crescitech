import { blogPosts } from './posts';

export interface Article {
    slug: string;
    title: string;
    summary: string;
    category: string;
    coverImage: string;
    publishedAt: string;
    publishedAtFormatted: string;
    readingTime: string;
    content: string;
    tags: string[];
    status: string;
}

interface SheetRow {
    slug?: string;
    title?: string;
    summary?: string;
    category?: string;
    coverImage?: string;
    publishedAt?: string;
    publishedAtFormatted?: string;
    readingTime?: string;
    content?: string;
    tags?: string[] | string;
    status?: string;
    createdAt?: string;
}

const FALLBACK_COVER = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80';

// Artigos criados pelo painel admin chegam do Google Sheets como texto puro:
// "tags" pode vir como string ("IA, PMEs") em vez de array. Normalizamos aqui
// para nunca quebrar um .map()/.some() feito assumindo um array.
function normalizeTags(tags: SheetRow['tags']): string[] {
    if (Array.isArray(tags)) return tags.filter(Boolean);
    if (typeof tags === 'string' && tags.trim()) {
        return tags.split(',').map(t => t.trim()).filter(Boolean);
    }
    return [];
}

function normalizeRow(row: SheetRow): Article | null {
    if (!row.slug || !row.title) return null;
    const createdAt = row.createdAt || new Date().toISOString();
    return {
        slug: row.slug,
        title: row.title,
        summary: row.summary || '',
        category: row.category || '',
        coverImage: row.coverImage || FALLBACK_COVER,
        publishedAt: row.publishedAt || createdAt.split('T')[0],
        publishedAtFormatted: row.publishedAtFormatted || new Date(createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit', month: 'short', year: 'numeric',
        }).toUpperCase(),
        readingTime: row.readingTime || '5 min',
        content: row.content || '',
        tags: normalizeTags(row.tags),
        status: row.status || 'published',
    };
}

async function fetchSheetRows(): Promise<SheetRow[]> {
    // Em build time no Netlify evitamos o fetch externo (evita timeout de 60s).
    // Em runtime (requisição real) o fetch abaixo roda normalmente.
    if (process.env.NETLIFY === 'true') return [];

    const baseUrl = process.env.APPS_SCRIPT_URL;
    if (!baseUrl) return [];

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10_000);
        const res = await fetch(`${baseUrl}?mode=read&tab=artigos`, {
            next: { revalidate: 300 },
            redirect: 'follow',
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (!res.ok) return [];
        const json = await res.json();
        return Array.isArray(json?.rows) ? json.rows : [];
    } catch {
        return [];
    }
}

/**
 * Retorna todos os artigos publicados: os do Sheets (criados pelo painel admin)
 * mesclados com os do código (posts.ts) — nunca substituindo um pelo outro.
 * Em caso de slug duplicado, o artigo do Sheets tem prioridade (é o mais recente).
 */
export async function getAllArticles(): Promise<Article[]> {
    const staticArticles = blogPosts.filter(p => p.status === 'published') as Article[];

    const rows = await fetchSheetRows();
    const sheetArticles = rows
        .map(normalizeRow)
        .filter((a): a is Article => a !== null && a.status === 'published');

    const sheetSlugs = new Set(sheetArticles.map(a => a.slug));
    const merged = [
        ...sheetArticles,
        ...staticArticles.filter(a => !sheetSlugs.has(a.slug)),
    ];

    return merged.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Busca um artigo por slug, tentando primeiro o Sheets (dados mais recentes)
 * e caindo para o conteúdo estático (posts.ts) quando não encontrado.
 * Sempre retorna os campos normalizados (tags como array, etc.) para nunca
 * quebrar a renderização da página do artigo.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const rows = await fetchSheetRows();
    const foundRow = rows.find(r => r.slug === slug);
    if (foundRow) {
        const normalized = normalizeRow(foundRow);
        if (normalized && normalized.status === 'published') return normalized;
    }

    const staticPost = blogPosts.find(p => p.slug === slug && p.status === 'published');
    return staticPost ? (staticPost as Article) : null;
}
