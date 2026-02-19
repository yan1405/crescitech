'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Calendar, ArrowRight, Search, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { blogPosts, categories as staticCategories } from '@/lib/blog/posts';

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

export default function BlogClient() {
    const [articles, setArticles] = useState<Article[]>(
        blogPosts.filter(p => p.status === 'published') as Article[]
    );
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todos');

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        fetch('/api/blog/articles', { signal: controller.signal })
            .then(r => r.json())
            .then(data => {
                clearTimeout(timeout);
                if (Array.isArray(data.articles) && data.articles.length > 0) {
                    setArticles(data.articles);
                }
            })
            .catch(() => clearTimeout(timeout));

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, []);

    // Categorias: parte das estáticas + novas do Sheets
    const categories = useMemo(() => {
        const fromApi = articles.map(a => a.category).filter(Boolean);
        const merged = Array.from(new Set([...staticCategories, ...fromApi]));
        return merged;
    }, [articles]);

    const filtered = useMemo(() => {
        return articles.filter(post => {
            const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
            const q = search.toLowerCase();
            const matchesSearch =
                q === '' ||
                post.title.toLowerCase().includes(q) ||
                post.summary.toLowerCase().includes(q) ||
                (post.tags || []).some(tag => tag.toLowerCase().includes(q));
            return matchesCategory && matchesSearch;
        });
    }, [articles, search, activeCategory]);


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

            <section className="pb-8 bg-white border-b border-neutral-100">
                <Container>
                    <div className="flex flex-col gap-4 py-4">
                        <div className="relative max-w-xl mx-auto w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Pesquisar artigos..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1 justify-center flex-wrap">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        'px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-colors',
                                        activeCategory === cat
                                            ? 'bg-primary text-white'
                                            : 'bg-neutral-100 text-neutral-600 hover:bg-primary-light hover:text-primary'
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <Container className="py-12 pb-24">
                <p className="text-sm text-neutral-400 mb-8">
                    Exibindo{' '}
                    <span className="font-semibold text-neutral-700">{filtered.length}</span>{' '}
                    {filtered.length === 1 ? 'artigo' : 'artigos'}
                </p>

                {filtered.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-neutral-400 text-lg">
                            Nenhum artigo encontrado para &quot;{search}&quot;
                        </p>
                        <button
                            onClick={() => { setSearch(''); setActiveCategory('Todos'); }}
                            className="mt-4 text-primary text-sm font-semibold hover:underline"
                        >
                            Limpar filtros
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filtered.map(post => (
                            <article key={post.slug} className="flex flex-col h-full group">
                                <div className="bg-neutral-100 h-56 rounded-2xl mb-6 overflow-hidden relative">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex items-center gap-3 text-xs font-semibold text-primary mb-3">
                                    <span className="bg-primary-light px-2 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-neutral-600 mb-6 flex-grow">{post.summary}</p>
                                <div className="flex items-center justify-between pt-6 border-t border-neutral-100 mt-auto">
                                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.publishedAtFormatted}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readingTime}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                                    >
                                        Ler artigo <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}
