import { notFound } from 'next/navigation';
import { blogPosts, publishedPosts } from '@/lib/blog/posts';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/StarRating';
import type { Metadata } from 'next';
import { sanitizeHtml } from '@/lib/sanitize';

interface Props {
    params: Promise<{ slug: string }>;
}

// generateStaticParams pré-gera apenas os slugs do posts.ts (build time)
// Artigos do Sheets são cacheados por 5 minutos (revalidate: 300)
export async function generateStaticParams() {
    return publishedPosts.map(post => ({ slug: post.slug }));
}

async function getArticle(slug: string) {
    // Em build time no Netlify, usar apenas dados estáticos (evita timeout de 60s)
    if (process.env.NETLIFY === 'true') {
        console.log(`[blog/${slug}] Build no Netlify detectado, usando dados estáticos`);
        return blogPosts.find(p => p.slug === slug) || null;
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
            const found = rows.find((a: Record<string, unknown>) => a.slug === slug && a.status === 'published');
            if (found) return found;
        }
    } catch {
        console.log(`[blog/${slug}] Fetch timeout ou erro, usando dados estáticos`);
    }

    return blogPosts.find(p => p.slug === slug) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    // Para metadata usamos publishedPosts estático (build-time) como fallback rápido
    const post = publishedPosts.find(p => p.slug === slug);
    if (!post) return {};
    return {
        title: `${post.title} | Blog Crescitech`,
        description: post.summary,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getArticle(slug);
    if (!post) notFound();

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <Container>
                <article className="max-w-4xl mx-auto">

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para o Blog
                    </Link>

                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-xs font-semibold uppercase tracking-wide rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 mb-8 pb-8 border-b border-neutral-200">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.publishedAtFormatted}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} de leitura
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Tag className="w-4 h-4" />
                            {(post.tags || []).map((tag: string) => (
                                <span key={tag} className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div
                        className="prose prose-lg prose-neutral max-w-none
              prose-headings:font-bold prose-headings:text-neutral-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-neutral-900 prose-strong:font-semibold
              prose-ul:my-6 prose-li:my-2
              prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
                    />

                    <StarRating slug={slug} />

                    <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                            Gostou do conteúdo?
                        </h3>
                        <p className="text-neutral-700 mb-6">
                            Fale com a Crescitech e descubra como aplicar essas ideias no seu negócio.
                        </p>
                        <Button
                            href={`https://wa.me/5511965650546?text=${encodeURIComponent('Olá! Li o artigo "' + post.title + '" no blog da Crescitech e gostaria de saber mais.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fale com um Especialista
                        </Button>
                    </div>

                </article>
            </Container>
        </div>
    );
}
