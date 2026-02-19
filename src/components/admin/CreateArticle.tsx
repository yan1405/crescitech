'use client';

import { useState } from 'react';
import { Send, Eye, FileText } from 'lucide-react';

const CATEGORIES = [
    'Transformação Digital', 'Gestão', 'Modelo 6C', 'Automações',
    'Ferramentas', 'IA Hoje', 'Futuro'
];

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwzJVGw5rxL04jwmnr44X3dl_5bDtEkiKuEJlwI6cVVBrDSHUqRCRNBpGVozDNyHitp/exec';

function generateSlug(title: string) {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

export function CreateArticle() {
    const [form, setForm] = useState({
        title: '', category: '', summary: '', tags: '',
        readingTime: '5', content: '', coverImage: ''
    });
    const [tab, setTab] = useState<'form' | 'preview'>('form');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const slug = generateSlug(form.title);
    const today = new Date();
    const publishedAtFormatted = today.toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'short', year: 'numeric'
    }).toUpperCase();

    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setSuccess(false);
        setError(null);
    };

    const handlePublish = async () => {
        if (!form.title || !form.category || !form.summary || !form.content) {
            setError('Preencha todos os campos obrigatórios: Título, Categoria, Resumo e Conteúdo.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'new_article',
                    slug,
                    title: form.title,
                    category: form.category,
                    summary: form.summary,
                    tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
                    readingTime: `${form.readingTime} min`,
                    content: form.content,
                    coverImage: form.coverImage || 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
                    publishedAt: today.toISOString().split('T')[0],
                    publishedAtFormatted,
                    status: 'published',
                    createdAt: new Date().toISOString(),
                }),
            });

            setSuccess(true);
            setForm({ title: '', category: '', summary: '', tags: '', readingTime: '5', content: '', coverImage: '' });
            setTab('form');
        } catch {
            setError('Erro ao publicar. Verifique sua conexão e tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Criar Artigo</h1>
                    <p className="text-slate-500 text-sm mt-1">Preencha os campos e publique direto no Google Sheets.</p>
                </div>

                {/* Toggle Form / Prévia */}
                <div className="flex rounded-lg border border-slate-200 overflow-hidden text-sm">
                    <button
                        onClick={() => setTab('form')}
                        className={`flex items-center gap-1.5 px-4 py-2 transition-colors ${tab === 'form' ? 'bg-primary text-white font-semibold' : 'bg-white text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <FileText className="w-4 h-4" /> Formulário
                    </button>
                    <button
                        onClick={() => setTab('preview')}
                        className={`flex items-center gap-1.5 px-4 py-2 transition-colors ${tab === 'preview' ? 'bg-primary text-white font-semibold' : 'bg-white text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <Eye className="w-4 h-4" /> Prévia
                    </button>
                </div>
            </div>

            {/* Sucesso */}
            {success && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 font-medium">
                    ✅ Artigo salvo no Google Sheets com sucesso! Faça o deploy para publicar no blog.
                </div>
            )}

            {/* Erro */}
            {error && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    ⚠️ {error}
                </div>
            )}

            {tab === 'form' ? (
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 space-y-5">

                    {/* Título */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Título <span className="text-red-400">*</span></label>
                        <input
                            type="text"
                            value={form.title}
                            onChange={e => handleChange('title', e.target.value)}
                            placeholder="Título do artigo"
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        {slug && <p className="text-xs text-slate-400 mt-1 font-mono">slug: {slug}</p>}
                    </div>

                    {/* Categoria */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Categoria <span className="text-red-400">*</span></label>
                        <select
                            value={form.category}
                            onChange={e => handleChange('category', e.target.value)}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            <option value="">Selecione...</option>
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    {/* Imagem de Capa */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            URL da Imagem de Capa
                        </label>
                        <input
                            type="url"
                            value={form.coverImage}
                            onChange={e => handleChange('coverImage', e.target.value)}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        {form.coverImage && (
                            <div className="mt-2 rounded-lg overflow-hidden h-56 relative">
                                <img src={form.coverImage} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <p className="text-xs text-slate-400 mt-1">
                            Sugestão: use <a href="https://unsplash.com" target="_blank" className="text-primary underline">unsplash.com</a> para imagens gratuitas
                        </p>
                    </div>

                    {/* Resumo */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resumo <span className="text-red-400">*</span></label>
                        <textarea
                            value={form.summary}
                            onChange={e => handleChange('summary', e.target.value)}
                            placeholder="Resumo do artigo"
                            rows={3}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        />
                    </div>

                    {/* Tags e Tempo de leitura */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tags</label>
                            <input
                                type="text"
                                value={form.tags}
                                onChange={e => handleChange('tags', e.target.value)}
                                placeholder="IA, PMEs, Gestão"
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tempo de leitura (min)</label>
                            <input
                                type="number"
                                value={form.readingTime}
                                onChange={e => handleChange('readingTime', e.target.value)}
                                min={1}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Conteúdo (HTML) <span className="text-red-400">*</span></label>
                        <textarea
                            value={form.content}
                            onChange={e => handleChange('content', e.target.value)}
                            placeholder="<h2>Título</h2><p>Texto...</p>"
                            rows={10}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        />
                    </div>

                    {/* Botão Publicar */}
                    <div className="flex justify-end pt-2">
                        <button
                            onClick={handlePublish}
                            disabled={loading}
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            <Send className="w-4 h-4" />
                            {loading ? 'Publicando…' : 'Publicar Artigo'}
                        </button>
                    </div>
                </div>

            ) : (
                /* PRÉVIA VISUAL */
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 max-w-2xl">
                    {form.coverImage && (
                        <div className="rounded-lg overflow-hidden h-64 relative mb-4">
                            <img src={form.coverImage} alt="Capa" className="w-full h-full object-cover" />
                        </div>
                    )}
                    {form.category && (
                        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {form.category}
                        </span>
                    )}
                    <h1 className="text-2xl font-bold text-slate-900 mt-4 mb-2">
                        {form.title || 'Título do artigo'}
                    </h1>
                    <p className="text-slate-500 text-sm mb-1">{publishedAtFormatted} · {form.readingTime} min de leitura</p>
                    {form.tags && (
                        <div className="flex gap-2 flex-wrap mt-2 mb-4">
                            {form.tags.split(',').map(t => t.trim()).filter(Boolean).map(tag => (
                                <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                            ))}
                        </div>
                    )}
                    <p className="text-slate-600 text-sm border-l-4 border-primary pl-4 mb-6 italic">
                        {form.summary || 'Resumo do artigo aparecerá aqui.'}
                    </p>
                    <div
                        className="prose prose-sm max-w-none text-slate-700"
                        dangerouslySetInnerHTML={{ __html: form.content || '<p>Conteúdo do artigo aparecerá aqui.</p>' }}
                    />
                </div>
            )}
        </div>
    );
}
