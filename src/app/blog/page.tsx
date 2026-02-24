import { Container } from '@/components/ui/Container';
import { blogPosts } from '@/lib/blog/posts';
import BlogFilter from '@/components/blog/BlogFilter';

interface Article {
    slug: string;
    title: string;
    summary: string;
    category: string;
    coverImage: string;
    publishedAt: string;
    publishedAtFormatted: string;
    readingTime: string;
    tags: string[];
    status: string;
}

async function getArticles(): Promise<Article[]> {
    const staticArticles = blogPosts.filter(p => p.status === 'published') as Article[];

    // Em build time no Netlify, usar apenas dados estáticos (evita timeout de 60s)
    if (process.env.NETLIFY === 'true') {
        console.log('[blog] Build no Netlify detectado, usando dados estáticos');
        return staticArticles;
    }

    // Em runtime, tentar fetch com timeout de 10 segundos
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10_000);

        const res = await fetch(
            `${process.env.APPS_SCRIPT_URL}?mode=read&tab=artigos`,
            { next: { revalidate: 300 }, redirect: 'follow', signal: controller.signal }
        );

        clearTimeout(timeoutId);

        if (res.ok) {
            const json = await res.json();
            const rows = Array.isArray(json?.rows) ? json.rows : [];
            const published = rows.filter(
                (a: Article) => a.status === 'published'
            );
            if (published.length > 0) return published;
        }
    } catch {
        console.log('[blog] Fetch timeout ou erro, usando dados estáticos');
    }

    return staticArticles;
}

export default async function BlogPage() {
    const articles = await getArticles();

    return (
        <div className="bg-white">
            <section className="pt-32 pb-12">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Blog
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            Insights, tendências e guias práticos sobre inteligência
                            artificial, gestão e transformação digital.
                        </p>
                    </div>
                </Container>
            </section>

            <BlogFilter articles={articles} />
        </div>
    );
}
