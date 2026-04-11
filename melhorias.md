# Relatório de Análise - site_crescitech_v2

## 1. Visão Geral do Projeto

| Item | Detalhe |
|---|---|
| **Framework** | Next.js 16.1.6 (App Router) + React 19 |
| **Linguagem** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Deploy** | Netlify |
| **Backend** | Google Apps Script (Sheets) como BaaS |
| **Total de arquivos src/** | ~47 arquivos |
| **Páginas** | 8 rotas públicas + 1 admin + 3 API routes |

---

## 2. Arquitetura (Nota: 7.5/10)

### Pontos positivos:
- Boa separação de responsabilidades: `components/`, `lib/`, `context/`, `app/`
- Componentes UI reutilizáveis em `ui/` (Button, Container)
- Padrão de Provider/Context bem implementado para o BookingModal
- ConditionalLayout inteligente para esconder Header/Footer no admin
- Path aliases (`@/`) configurados corretamente

### Pontos de melhoria:

- **Sem autenticação no admin** — A rota `/admin-crescitech` está completamente aberta. Qualquer pessoa com o URL tem acesso total ao painel, incluindo criar/deletar artigos e ver dados de leads. Isso é **crítico**.

- **Webhook URL hardcoded em 4 arquivos diferentes** — O mesmo Google Apps Script URL aparece em:
  - `src/components/MultiStepForm.tsx:77`
  - `src/app/api/rating/route.ts:3`
  - `src/app/api/admin/sheets/route.ts:7`
  - `src/app/api/blog/articles/route.ts:7`
  - `src/app/blog/[slug]/page.tsx:24`

  Deveria ser uma variável de ambiente (`NEXT_PUBLIC_*` ou `process.env.*`).

- **Admin não é responsivo** — O sidebar é fixo com `w-64` e `ml-64`, sem suporte mobile. Em telas menores fica inutilizável.

- **Arquivo `tailwind.config.ts` possivelmente redundante** com as definições de `@theme` no `globals.css` (Tailwind v4 usa CSS-first config). As cores no config (`#0066FF`) divergem do globals.css (`#0066CC`).

---

## 3. Qualidade do Código (Nota: 7/10)

### Pontos positivos:
- TypeScript com `strict: true`
- Interfaces bem definidas nos componentes e API routes
- Boa tipagem nos API handlers (Period, LeadRow, etc.)
- Uso adequado de `cn()` (clsx + tailwind-merge) para classes condicionais
- Componente Button com `forwardRef` e variantes bem estruturadas

### Pontos de melhoria:

- **`dangerouslySetInnerHTML` sem sanitização** em `src/app/blog/[slug]/page.tsx:115` — Os artigos do blog (tanto do `posts.ts` quanto do Google Sheets) são renderizados como HTML puro. Artigos vindos do Sheets são input externo e representam **risco de XSS**.

- **`console.log` em produção** — `src/components/MultiStepForm.tsx:88` tem múltiplos `console.log('Enviando dados:', payload)` que expõe dados de usuários no console do browser.

- **Validação de telefone inconsistente** — Em `src/components/MultiStepForm.tsx:42-44`, há um regex `phoneRegex` criado mas nunca utilizado. A validação real só checa `length < 10`.

- **`eslint-disable` sem justificativa** em `src/components/admin/AdminDashboard.tsx:69` — `// eslint-disable-next-line react-hooks/exhaustive-deps` mascara a falta de `doFetch` no array de dependências.

- **Uso de `any`** em várias partes das API routes de blog (`src/app/api/blog/articles/route.ts:43`, `src/app/api/blog/articles/route.ts:47`) e no Button (`props as any`).

- **Imagens `.PNG` em maiúsculo** — As imagens usam extensão `.PNG` (maiúsculo), o que pode causar problemas em servidores Linux case-sensitive.

---

## 4. Desempenho (Nota: 6.5/10)

### Pontos positivos:
- Uso de `next/font` (Inter) para otimização de fontes
- `next/image` usado na maioria dos lugares com `sizes` e `priority` adequados
- API routes usam `Promise.all` para requests paralelos ao Google Sheets
- `viewport: { once: true }` no Framer Motion evita re-animações

### Pontos de melhoria:

- **Excesso de "use client"** — Quase todos os componentes são Client Components, até os que não precisariam ser (About, Differential, Solutions). Isso aumenta o bundle JS enviado ao browser e anula o benefício do Server Components do Next.js.

- **`@dotlottie/react-player` carregado sincronamente** — Cada SolutionCard carrega o player Lottie de forma síncrona. Com 6 cards na home, são 6 players Lottie renderizados simultaneamente. Deveria usar `dynamic(() => import(...), { ssr: false })`.

- **Vídeo no Hero sem poster** — O `<video>` em `src/components/Hero.tsx:65-74` não tem atributo `poster`, causando tela branca até o vídeo carregar.

- **`images.remotePatterns: hostname: '**'`** em `next.config.ts:9` — Aceita imagens de QUALQUER domínio. Além de ser um risco de segurança, impede o Next.js de otimizar o cache de imagens adequadamente.

- **Blog faz fetch no client + server** — A página `blog/page.tsx` renderiza via `BlogClient` que faz um `useEffect` fetch, e a página `blog/[slug]/page.tsx` faz fetch direto no server. O pattern é inconsistente e o blog listing poderia ser Server Component.

- **WhatsApp button com animação infinita** — O `motion.div` com `repeat: Infinity` em `src/components/WhatsAppButton.tsx:33-41` roda animação CSS/JS continuamente, consumindo recursos mesmo quando não visível.

- **Framer Motion em excesso** — Quase todo componente usa Framer Motion para animações simples (fade-in) que poderiam ser feitas com CSS puro (`@keyframes` + Intersection Observer), reduzindo significativamente o bundle.

---

## 5. Funcionalidades e Funcionamento (Nota: 7.5/10)

### Pontos positivos:
- Sistema de booking modal com multi-step form bem pensado
- Blog híbrido (posts do código + Google Sheets) com fallback
- Máscara de telefone funcional
- Star rating com persistência em localStorage
- Admin dashboard com filtros por período
- Busca e filtros no blog funcionais
- Carousel de testimonials com auto-play e navegação

### Pontos de melhoria:

- **Links no Footer apontam para páginas inexistentes**: `/sobre`, `/carreiras`, `/privacidade`, `/termos` — não existem no projeto. Resulta em 404.

- **Tooltip do WhatsApp nunca aparece** — Em `src/components/WhatsAppButton.tsx:48` usa `group-hover:opacity-100` mas o elemento pai não tem a classe `group`.

- **MultiStepForm fallback silencioso** — O fallback `no-cors` em `src/components/MultiStepForm.tsx:132-148` assume sucesso sem confirmação. O usuário pode receber "Mensagem Enviada!" mesmo se o envio falhou.

- **Arquivo `hero-video.mp4` não encontrado no public/** — O vídeo referenciado em `src/components/Hero.tsx:72` não existe nos arquivos do projeto. Pode estar faltando no git (gitignore?) ou gerar erro silencioso.

- **Artigos do Sheets sem cache** — Cada visualização de post faz um fetch `cache: 'no-store'` ao Google Apps Script. Em caso de muitos acessos simultâneos, pode atingir o rate limit do Apps Script (fácil de estourar).

---

## 6. Segurança (Nota: 5/10) — CRÍTICO

| Problema | Severidade | Local |
|---|---|---|
| Admin sem autenticação | **CRÍTICA** | `/admin-crescitech` |
| XSS via `dangerouslySetInnerHTML` com dados externos | **ALTA** | `blog/[slug]/page.tsx:115` |
| Webhook URL exposta no client-side | **MÉDIA** | `MultiStepForm.tsx:77` |
| `remotePatterns: '**'` aceita qualquer domínio | **MÉDIA** | `next.config.ts:9` |
| Dados de usuário logados no console | **BAIXA** | `MultiStepForm.tsx:88` |

---

## 7. Resumo Executivo

| Categoria | Nota | Status |
|---|---|---|
| Arquitetura | 7.5/10 | Boa estrutura, precisa de env vars e auth |
| Qualidade de Código | 7.0/10 | Tipagem boa, precisa de sanitização e limpeza |
| Desempenho | 6.5/10 | Excesso de client components e JS desnecessário |
| Funcionalidades | 7.5/10 | Completo, com alguns links quebrados |
| Segurança | 5.0/10 | Admin aberto e XSS são riscos críticos |
| **NOTA GERAL** | **6.7/10** | |

---

## 8. Top 5 Ações Prioritárias

1. **Implementar autenticação no admin** (ex: middleware com senha, NextAuth, ou básico HTTP auth)
2. **Sanitizar HTML do blog** com uma lib como `DOMPurify` antes do `dangerouslySetInnerHTML`
3. **Mover a webhook URL para variável de ambiente** (`.env.local` com `NEXT_PUBLIC_WEBHOOK_URL`)
4. **Converter componentes estáticos para Server Components** (remover `"use client"` de About, Differential, Footer, etc.)
5. **Criar as páginas faltantes** (`/sobre`, `/carreiras`, `/privacidade`, `/termos`) ou remover os links
