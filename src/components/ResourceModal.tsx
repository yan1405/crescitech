'use client';

import { useState } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { Resource } from '@/lib/resources';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwzJVGw5rxL04jwmnr44X3dl_5bDtEkiKuEJlwI6cVVBrDSHUqRCRNBpGVozDNyHitp/exec';

interface Props {
    resource: Resource | null;
    onClose: () => void;
}

export function ResourceModal({ resource, onClose }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!resource) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                body: JSON.stringify({
                    type: 'resource_download',
                    nome: name,
                    email,
                    recurso: resource.title,
                    recurso_id: resource.id,
                    timestamp: new Date().toISOString(),
                }),
            });
        } catch {
            // CORS em localhost é esperado — funciona em produção
        } finally {
            setSubmitted(true);
            setLoading(false);
        }
    };

    const handleClose = () => {
        setName('');
        setEmail('');
        setSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 z-10">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                    <X size={20} />
                </button>

                {!submitted ? (
                    <>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                {resource.title}
                            </h3>
                            <p className="text-sm text-neutral-500">
                                Informe seus dados para receber o material gratuitamente.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-white font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                {loading ? 'Aguarde...' : 'Enviar'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            Tudo certo!
                        </h3>
                        <p className="text-sm text-neutral-500 mb-6">
                            Clique abaixo para baixar seu material.
                        </p>
                        <a
                            href={resource.downloadUrl || "#"}
                            download
                            className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
                            onClick={handleClose}
                        >
                            <Download size={16} />
                            Clique aqui para baixar
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
