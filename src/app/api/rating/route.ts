import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.APPS_SCRIPT_URL!;

export async function POST(request: NextRequest) {
    try {
        const { slug, rating } = await request.json();

        if (!slug || !rating || rating < 1 || rating > 5) {
            return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
        }

        await fetch(WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify({
                type: 'rating',
                slug,
                rating: Number(rating),
                timestamp: new Date().toISOString(),
            }),
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Rating API error:', err);
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
    }
}
