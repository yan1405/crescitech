'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { resources, Resource } from '@/lib/resources';
import { Check, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ResourceModal } from '@/components/ResourceModal';

const typeBadgeColors: Record<string, string> = {
    PDF: 'bg-red-50 text-red-600',
    Checklist: 'bg-green-50 text-green-600',
    Template: 'bg-blue-50 text-blue-600',
    Ebook: 'bg-purple-50 text-purple-600',
};

export default function RecursosPage() {
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Recursos Gratuitos
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            Materiais práticos para acelerar a jornada de IA da sua empresa.
                            Baixe gratuitamente.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Resources Grid */}
            <Container className="pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resources.map((resource) => (
                        <div
                            key={resource.id}
                            className="bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            {/* Cover image */}
                            <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                                <Image
                                    src={resource.coverImage}
                                    alt={resource.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Type badge over image */}
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
                                {/* Category */}
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                    {resource.category}
                                </p>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-neutral-900 mb-3 leading-snug">
                                    {resource.title}
                                </h2>

                                {/* Description */}
                                <p className="text-neutral-600 text-sm mb-5">
                                    {resource.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-1.5 mb-6">
                                    {resource.highlights.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    onClick={() => setSelectedResource(resource)}
                                    className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-xl px-4 py-3 transition-colors hover:opacity-90"
                                >
                                    <Download className="w-4 h-4" />
                                    Baixar Gratuitamente
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Modal */}
            <ResourceModal
                resource={selectedResource}
                onClose={() => setSelectedResource(null)}
            />
        </div>
    );
}
