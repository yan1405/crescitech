export interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'PDF' | 'Checklist' | 'Template' | 'Ebook';
    category: string;
    coverImage: string;
    downloadUrl: string;
    highlights: string[];
}

export const resources: Resource[] = [
    {
        id: 'template-prompts-pmes',
        title: 'Template: 50 prompts prontos para PMEs',
        description: 'Coletânea de prompts testados e otimizados para usar no ChatGPT, Claude e outras IAs no contexto de pequenas e médias empresas.',
        type: 'Template',
        category: 'Ferramentas',
        coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
        downloadUrl: '#',
        highlights: [
            '50 prompts organizados por categoria',
            'Vendas e prospecção',
            'Atendimento ao cliente',
            'Gestão e operações',
        ],
    },
];
