import { getAllArticles } from '@/lib/blog/fetchArticles';
import BlogFilter from '@/components/blog/BlogFilter';
import { BlogHero } from '@/components/blog/BlogHero';

export default async function BlogPage() {
    const articles = await getAllArticles();

    return (
        <div className="bg-white">
            <BlogHero />
            <BlogFilter articles={articles} />
        </div>
    );
}
