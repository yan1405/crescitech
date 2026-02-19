import { Suspense } from 'react';
import BlogClient from '@/components/blog/BlogClient';

export default function BlogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400">Carregando artigos...</div>}>
            <BlogClient />
        </Suspense>
    );
}
