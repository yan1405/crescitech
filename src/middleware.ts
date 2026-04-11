import { NextRequest, NextResponse } from 'next/server';

const SESSION_TOKEN_LENGTH = 64; // 32 bytes em hex

function isValidSession(value: string | undefined): boolean {
  return typeof value === 'string' && value.length === SESSION_TOKEN_LENGTH;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permitir acesso à página de login e à API de auth sem autenticação
  if (
    pathname === '/admin-crescitech/login' ||
    pathname.startsWith('/api/admin/auth')
  ) {
    // Se já autenticado e tentando acessar login, redirecionar ao painel
    const session = request.cookies.get('admin-session')?.value;
    if (pathname === '/admin-crescitech/login' && isValidSession(session)) {
      return NextResponse.redirect(new URL('/admin-crescitech', request.url));
    }
    return NextResponse.next();
  }

  // Verificar cookie de sessão para rotas admin (inclui RSC e prefetch)
  const sessionCookie = request.cookies.get('admin-session')?.value;

  if (!isValidSession(sessionCookie)) {
    const loginUrl = new URL('/admin-crescitech/login', request.url);
    const response = NextResponse.redirect(loginUrl);
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    return response;
  }

  // Sessão válida — adicionar header para evitar cache de páginas autenticadas
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  return response;
}

export const config = {
  matcher: [
    '/admin-crescitech',
    '/admin-crescitech/:path*',
  ],
};
