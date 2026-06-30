'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { resources, Resource } from '@/lib/resources';
import { Check, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ResourceModal } from '@/components/ResourceModal';
import { useLanguage } from '@/context/LanguageContext';

const typeBadgeColors: Record<string, string> = {
    PDF: 'bg-red-50 text-red-600',
    Checklist: 'bg-green-50 text-green-600',
    Template: 'bg-blue-50 text-blue-600',
    Ebook: 'bg-purple-50 text-purple-600',
};

export default function RecursosPage() {
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const { t } = useLanguage();
    const page = t.recursosPage;

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            {page.title}
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            {page.subtitle}
                        </p>
                    </div>
                </Container>
            </section>

            <Container className="pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resources.map((resource) => {
                        const resourcesT = (t as any).resources ?? {};
                        const r = resourcesT[resource.id];
                        const title = r?.title ?? resource.title;
                        const description = r?.description ?? resource.description;
                        const category = r?.category ?? resource.category;
                        const highlights = r?.highlights ?? resource.highlights;

                        return (
                        <div
                            key={resource.id}
                            className="bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                                <Image
                                    src={resource.coverImage}
                                    alt={title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span
                                    className={cn(
                                        'absolute top-4 left-4 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full',
                                        typeBadgeColors[resource.type]
                                    )}
                                >
                                    {resource.type}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                    {category}
                                </p>
                                <h2 className="text-xl font-bold text-neutral-900 mb-3 leading-snug">
                                    {title}
                                </h2>
                                <p className="text-neutral-600 text-sm mb-5">
                                    {description}
                                </p>
                                <ul className="space-y-1.5 mb-6">
                                    {highlights.map((item: string) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setSelectedResource(resource)}
                                    className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-xl px-4 py-3 transition-colors hover:opacity-90"
                                >
                                    <Download className="w-4 h-4" />
                                    {page.downloadCta}
                                </button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Container>

            <ResourceModal
                resource={selectedResource}
                onClose={() => setSelectedResource(null)}
            />
        </div>
    );
}
