'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    slug: string;
}

export function StarRating({ slug }: StarRatingProps) {
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(`crescitech_rating_${slug}`);
        if (saved) {
            setSelected(parseInt(saved));
            setSubmitted(true);
        }
    }, [slug]);

    const handleRate = async (rating: number) => {
        if (submitted || loading) return;
        setLoading(true);

        try {
            await fetch('/api/rating', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug, rating }),
            });
            localStorage.setItem(`crescitech_rating_${slug}`, rating.toString());
            setSelected(rating);
            setSubmitted(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const labels = ['', 'Ruim', 'Regular', 'Bom', 'Muito bom', 'Excelente'];

    return (
        <div className="flex flex-col items-center gap-3 py-10 border-t border-b border-neutral-100 my-10">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
                {submitted ? 'Obrigado pela avaliação!' : 'O que você achou deste artigo?'}
            </p>

            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => handleRate(star)}
                        onMouseEnter={() => !submitted && setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        disabled={submitted || loading}
                        aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
                        className="transition-transform hover:scale-110 disabled:cursor-default focus:outline-none"
                    >
                        <Star
                            size={36}
                            className={`transition-colors duration-150 ${star <= (hovered || selected)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-neutral-200'
                                }`}
                        />
                    </button>
                ))}
            </div>

            {/* Label do hover ou da avaliação dada */}
            <p className="text-sm text-neutral-400 h-5">
                {submitted
                    ? `Você avaliou: ${labels[selected]} (${selected}/5)`
                    : hovered
                        ? labels[hovered]
                        : ''}
            </p>
        </div>
    );
}
