import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// POST — Login
export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD não configurada nas variáveis de ambiente.');
      return NextResponse.json(
        { success: false, message: 'Erro de configuração do servidor.' },
        { status: 500 }
      );
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json(
        { success: false, message: 'Senha incorreta.' },
        { status: 401 }
      );
    }

    const token = generateSessionToken();
    const isProduction = process.env.NODE_ENV === 'production';

    const response = NextResponse.json({ success: true });

    response.cookies.set('admin-session', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 horas
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: 'Erro ao processar a requisição.' },
      { status: 400 }
    );
  }
}

// DELETE — Logout
export async function DELETE() {
  const response = NextResponse.json({ success: true });

  response.cookies.set('admin-session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
