import DOMPurify from 'isomorphic-dompurify';

const ALLOWED_TAGS = [
  // Estrutura
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'br', 'hr',
  // Formatação
  'strong', 'b', 'em', 'i', 'u', 's', 'mark', 'small', 'sub', 'sup', 'code', 'pre',
  // Listas
  'ul', 'ol', 'li',
  // Links e mídia (sem video/source/picture — risco de src externo)
  'a', 'img', 'figure', 'figcaption',
  // Tabelas
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
  // Citações
  'blockquote', 'cite', 'q',
  // Outros
  'details', 'summary', 'abbr', 'time',
];

const ALLOWED_ATTR = [
  'href', 'target', 'rel', 'src', 'alt', 'title', 'width', 'height',
  'class', 'id', 'loading', 'decoding',
  'colspan', 'rowspan', 'scope',
  'datetime', 'open',
];

// Forçar rel="noopener noreferrer" em links com target="_blank"
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    const target = node.getAttribute('target');
    if (target === '_blank') {
      node.setAttribute('rel', 'noopener noreferrer');
    }
    // Bloquear href com protocolos perigosos (extra safety)
    const href = node.getAttribute('href') || '';
    if (href.startsWith('javascript:') || href.startsWith('data:')) {
      node.removeAttribute('href');
    }
  }

  // Restringir src de <img> a domínios confiáveis ou caminhos relativos
  if (node.tagName === 'IMG') {
    const src = node.getAttribute('src') || '';
    const isRelative = src.startsWith('/') || src.startsWith('./');
    const isTrustedDomain =
      src.startsWith('https://images.unsplash.com/') ||
      src.startsWith('https://crescitech.com.br/');
    if (!isRelative && !isTrustedDomain) {
      node.removeAttribute('src');
      node.setAttribute('alt', '[imagem bloqueada]');
    }
  }
});

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ['target'],
  });
}
