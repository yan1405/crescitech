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
        id: 'guia-maturidade-ia',
        title: 'Guia: Avalie o nível de maturidade em IA da sua empresa',
        description: 'Um guia prático com 20 questões que revelam em qual estágio de adoção de IA sua empresa está e quais os próximos passos recomendados.',
        type: 'PDF',
        category: 'Diagnóstico',
        coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
        downloadUrl: '#',
        highlights: [
            '20 questões de diagnóstico',
            'Pontuação por dimensão',
            'Plano de ação por nível de maturidade',
            'Exemplos práticos de PMEs',
        ],
    },
    {
        id: 'checklist-automacoes',
        title: 'Checklist: 30 processos que você pode automatizar hoje',
        description: 'Lista completa dos processos mais comuns em PMEs que podem ser automatizados com ferramentas acessíveis, sem precisar programar.',
        type: 'Checklist',
        category: 'Automações',
        coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
        downloadUrl: '#',
        highlights: [
            '30 processos mapeados',
            'Ferramentas recomendadas para cada um',
            'Estimativa de tempo economizado',
            'Nível de dificuldade de implementação',
        ],
    },
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
    {
        id: 'ebook-roi-ia',
        title: 'Ebook: Como calcular o ROI de projetos de IA',
        description: 'Guia completo com metodologia, planilha de cálculo e casos reais para você provar o retorno sobre investimento em IA para sua diretoria.',
        type: 'Ebook',
        category: 'Gestão',
        coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
        downloadUrl: '#',
        highlights: [
            'Metodologia de cálculo de ROI',
            'Planilha de acompanhamento incluída',
            'Cases reais de PMEs brasileiras',
            'Templates de apresentação para diretoria',
        ],
    },
];
