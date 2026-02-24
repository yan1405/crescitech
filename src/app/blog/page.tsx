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
    try {
        const res = await fetch(
            `${process.env.APPS_SCRIPT_URL}?mode=read&tab=artigos`,
            { next: { revalidate: 300 }, redirect: 'follow' }
        );
        if (res.ok) {
            const json = await res.json();
            const rows = Array.isArray(json?.rows) ? json.rows : [];
            const published = rows.filter(
                (a: Article) => a.status === 'published'
            );
            if (published.length > 0) return published;
        }
    } catch { /* fallback para dados estáticos */ }

    return blogPosts.filter(p => p.status === 'published') as Article[];
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
