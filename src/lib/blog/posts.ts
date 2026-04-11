export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  coverImage: string;
  publishedAt: string;        // formato: "2026-02-12"
  publishedAtFormatted: string; // formato: "12 FEV 2026"
  readingTime: string;
  content: string;            // HTML string
  tags: string[];
  status: 'published' | 'archived' | 'deleted';
}

export const categories = [
  "Todos",
  "IA Hoje",
  "Automações",
  "Ferramentas",
  "Futuro",
  "Modelo 6C",
  "Gestão",
  "Transformação Digital",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "como-ia-transforma-pequenas-empresas-2026",
    title: "Como a IA está transformando pequenas empresas em 2026",
    summary: "Descubra as principais tendências de inteligência artificial que estão acessíveis para PMEs e como aplicá-las hoje.",
    category: "Transformação Digital",
    coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    publishedAt: "2026-02-12",
    publishedAtFormatted: "12 FEV 2026",
    readingTime: "6 min",
    tags: ["IA", "PMEs", "Tendências", "2026"],
    status: 'published',
    content: `
      <h2>A IA deixou de ser privilégio das grandes empresas</h2>
      <p>Até pouco tempo atrás, implementar inteligência artificial era algo restrito a corporações com orçamentos milionários e equipes de data science. Em 2026, esse cenário mudou completamente. Ferramentas como ChatGPT, Claude, Gemini e dezenas de soluções verticais tornaram a IA acessível para qualquer empresa, independentemente do tamanho.</p>
      <p>Para os donos de pequenas e médias empresas, isso representa uma oportunidade histórica: competir em igualdade de condições com players maiores em áreas como atendimento ao cliente, análise de dados e automação de processos.</p>
      
      <h2>As 5 aplicações mais impactantes para PMEs hoje</h2>
      
      <h3>1. Atendimento ao cliente automatizado</h3>
      <p>Chatbots com IA conseguem resolver até 70% das dúvidas dos clientes sem intervenção humana. Isso reduz custos operacionais e garante atendimento 24/7.</p>
      
      <h3>2. Geração e qualificação de leads</h3>
      <p>Ferramentas de IA analisam o comportamento dos visitantes do seu site e identificam quais têm maior probabilidade de se tornar clientes, otimizando o tempo da equipe comercial.</p>
      
      <h3>3. Automação de tarefas repetitivas</h3>
      <p>Processos como emissão de notas fiscais, agendamento de reuniões, envio de e-mails de follow-up e atualização de planilhas podem ser totalmente automatizados com ferramentas de IA acessíveis.</p>
      
      <h3>4. Análise preditiva simples</h3>
      <p>Prever quais produtos venderão mais no próximo mês ou identificar clientes com risco de churn já é possível com ferramentas no-code que qualquer dono de empresa consegue usar.</p>
      
      <h3>5. Criação de conteúdo em escala</h3>
      <p>Descrições de produtos, posts para redes sociais, e-mails de marketing — tudo isso pode ser gerado por IA em minutos, liberando sua equipe para tarefas estratégicas.</p>
      
      <h2>Por onde começar?</h2>
      <p>O maior erro das empresas ao adotar IA é tentar fazer tudo de uma vez. Nossa recomendação é começar pelo processo que mais consome tempo da sua equipe hoje e automatizá-lo com uma solução de IA específica para aquela tarefa. A Crescitech oferece um diagnóstico gratuito para identificar qual é o ponto de maior alavancagem para a IA na sua empresa.</p>
    `
  },
  {
    slug: "5-erros-comuns-ao-implementar-ia",
    title: "5 erros comuns ao implementar IA no seu negócio",
    summary: "Evite os principais erros que fazem empresas perderem dinheiro em projetos de tecnologia sem estratégia.",
    category: "Gestão",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    publishedAt: "2026-02-05",
    publishedAtFormatted: "05 FEV 2026",
    readingTime: "5 min",
    tags: ["Gestão", "Estratégia", "Erros", "IA"],
    status: 'published',
    content: `
      <h2>A empolgação pode ser uma armadilha</h2>
      <p>Implementar inteligência artificial no negócio virou tendência, e com razão: os resultados podem ser transformadores. Mas a pressa para "ter IA" sem planejamento é uma das principais causas de projetos fracassados e dinheiro desperdiçado.</p>
      
      <h2>Erro 1: Começar pela tecnologia, não pelo problema</h2>
      <p>A pergunta certa não é "qual ferramenta de IA devo usar?", mas "qual problema preciso resolver?". Empresas que escolhem a solução antes de entender o problema geralmente implementam tecnologia cara para resolver um problema que poderia ser resolvido com um processo mais simples.</p>
      
      <h2>Erro 2: Subestimar a mudança cultural</h2>
      <p>Ferramentas de IA exigem que as pessoas mudem como trabalham. Sem treinamento e engajamento da equipe, até a melhor tecnologia será subutilizada ou sabotada passivamente pelos colaboradores.</p>
      
      <h2>Erro 3: Não definir métricas de sucesso</h2>
      <p>Como você saberá se a implementação funcionou? Muitas empresas instalam soluções de IA sem definir KPIs claros. Resultado: impossível saber se o investimento valeu a pena.</p>
      
      <h2>Erro 4: Esperar resultados imediatos</h2>
      <p>Projetos de IA têm uma curva de aprendizado. Os melhores resultados aparecem após ajustes e otimizações ao longo do tempo. Abandonar um projeto nas primeiras semanas é um dos erros mais caros.</p>
      
      <h2>Erro 5: Não ter suporte especializado</h2>
      <p>IA é uma área em constante evolução. Implementar sem acompanhamento de quem entende do assunto significa descobrir os problemas na marra, geralmente com impacto no negócio. Na Crescitech, começamos sempre pelo mapeamento do contexto da empresa antes de recomendar qualquer ferramenta.</p>
    `
  },
  {
    slug: "o-que-e-o-modelo-6c",
    title: "O que é o Modelo 6C e por que ele funciona?",
    summary: "Conheça a metodologia exclusiva da Crescitech que garante uma jornada de maturidade digital estruturada.",
    category: "Modelo 6C",
    coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    publishedAt: "2026-01-28",
    publishedAtFormatted: "28 JAN 2026",
    readingTime: "7 min",
    tags: ["Modelo 6C", "Metodologia", "Crescitech"],
    status: 'published',
    content: `
      <h2>Uma metodologia criada para a realidade das PMEs</h2>
      <p>A maioria dos frameworks de implementação de IA foi criada para grandes empresas, com recursos abundantes e equipes dedicadas. O Modelo 6C foi desenvolvido pela Crescitech especificamente para a realidade das pequenas e médias empresas brasileiras: recursos limitados, urgência por resultado e pouca familiaridade com tecnologia.</p>
      
      <h2>Os 6 pilares do Modelo 6C</h2>
      
      <h3>C1 — Conhecer</h3>
      <p>Diagnóstico profundo da empresa: processos atuais, nível de maturidade tecnológica, dores mais urgentes e oportunidades de maior impacto.</p>
      
      <h3>C2 — Conectar</h3>
      <p>Alinhamento estratégico entre as possibilidades da IA e os objetivos de negócio da empresa. Aqui definimos prioridades e o roadmap realista de implementação.</p>
      
      <h3>C3 — Criar</h3>
      <p>Desenvolvimento ou seleção das soluções de IA mais adequadas para cada contexto. Podemos criar soluções customizadas ou adaptar ferramentas existentes.</p>
      
      <h3>C4 — Capacitar</h3>
      <p>Treinamento da equipe para usar e evoluir as novas ferramentas. Uma empresa verdadeiramente madura em IA é aquela cuja equipe entende o que está usando.</p>
      
      <h3>C5 — Crescer</h3>
      <p>Implementação, acompanhamento dos primeiros resultados e ajustes finos. É nessa fase que os primeiros ROIs ficam visíveis.</p>
      
      <h3>C6 — Continuar</h3>
      <p>Suporte contínuo, evolução das soluções e adaptação às mudanças do mercado. A IA evolui rápido — seu negócio precisa evoluir junto.</p>
      
      <h2>Por que funciona?</h2>
      <p>O Modelo 6C funciona porque não pula etapas. Cada C é pré-requisito para o próximo. Empresas que chegam até o C6 têm uma estrutura sólida de IA que escala com o crescimento do negócio.</p>
    `
  },
  {
    slug: "automacao-processos-sem-programar",
    title: "Automatize processos sem saber programar: as melhores ferramentas no-code",
    summary: "Conheça as plataformas que permitem criar automações poderosas sem escrever uma linha de código.",
    category: "Automações",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    publishedAt: "2026-01-20",
    publishedAtFormatted: "20 JAN 2026",
    readingTime: "8 min",
    tags: ["Automações", "No-Code", "Ferramentas", "Produtividade"],
    status: 'published',
    content: `
      <h2>Automação não é mais coisa só para programadores</h2>
      <p>A revolução no-code transformou a automação de processos em algo acessível para qualquer pessoa com disposição para aprender. Hoje, qualquer funcionário pode criar fluxos automatizados sofisticados usando interfaces visuais intuitivas.</p>
      
      <h2>As melhores plataformas para PMEs</h2>
      
      <h3>Make (antigo Integromat)</h3>
      <p>Uma das plataformas mais poderosas para criar automações entre diferentes aplicativos. Conecta mais de 1.500 ferramentas e permite criar fluxos complexos com lógica condicional, loops e transformações de dados.</p>
      
      <h3>Zapier</h3>
      <p>O mais popular do mercado. Interface simples, mais de 5.000 integrações e excelente documentação. Ideal para automações diretas. Tem plano gratuito generoso para começar.</p>
      
      <h3>n8n</h3>
      <p>Opção open-source que pode ser hospedada no seu próprio servidor. Mais complexo de configurar, mas sem limitações de uso e com total controle dos seus dados.</p>
      
      <h3>Notion + Automações</h3>
      <p>Se sua empresa já usa o Notion como hub de trabalho, as automações nativas da plataforma podem resolver muitos casos de uso sem precisar de ferramentas externas.</p>
      
      <h2>Por onde começar</h2>
      <p>Mapeie os processos mais repetitivos da sua empresa: envio de e-mails de confirmação, agendamento de reuniões, notificações para a equipe. Esses são os candidatos ideais para a primeira automação. Comece simples, valide e expanda.</p>
    `
  },
  {
    slug: "chatbots-com-ia-atendimento-247",
    title: "Chatbots com IA: como ter atendimento 24/7 sem contratar mais pessoas",
    summary: "Entenda como implementar um chatbot inteligente que realmente resolve problemas dos seus clientes.",
    category: "Ferramentas",
    coverImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    publishedAt: "2026-01-15",
    publishedAtFormatted: "15 JAN 2026",
    readingTime: "6 min",
    tags: ["Chatbots", "Atendimento", "IA", "Ferramentas"],
    status: 'published',
    content: `
      <h2>O cliente quer resposta agora</h2>
      <p>Pesquisas mostram que 80% dos consumidores esperam resposta imediata quando entram em contato com uma empresa. Para uma PME com equipe reduzida, atender essa expectativa 24 horas por dia parecia impossível. Com IA, não é.</p>
      
      <h2>O que um chatbot com IA consegue fazer hoje</h2>
      <p>Os chatbots de nova geração, alimentados por modelos de linguagem como GPT-4 e Claude, vão muito além de responder perguntas frequentes. Eles conseguem: entender perguntas complexas em linguagem natural, consultar bases de dados em tempo real, qualificar leads, agendar reuniões e acionar humanos quando necessário.</p>
      
      <h2>Como escolher a solução certa</h2>
      
      <h3>Para atendimento via WhatsApp</h3>
      <p>Plataformas como Wati, Respond.io e Typebot permitem criar chatbots para WhatsApp Business sem programação. Integram com CRMs e sistemas de gestão.</p>
      
      <h3>Para atendimento no site</h3>
      <p>Intercom, Crisp e Tidio têm planos acessíveis e oferecem IA nativa para responder perguntas dos visitantes com base no conteúdo do seu site.</p>
      
      <h3>Para soluções customizadas</h3>
      <p>Se nenhuma plataforma pronta atende seu caso específico, é possível criar um chatbot customizado usando as APIs do OpenAI ou Anthropic. A Crescitech tem expertise nesse tipo de projeto.</p>
      
      <h2>Dica de ouro</h2>
      <p>Um chatbot bem configurado com uma base de conhecimento completa resolve 70-80% das interações. O restante deve ser transferido para um humano sem atritos. Nunca deixe o cliente sem resposta.</p>
    `
  },
  {
    slug: "analise-preditiva-para-pmes",
    title: "Análise preditiva para pequenas empresas: do dado à decisão",
    summary: "Como usar seus próprios dados para prever tendências e tomar decisões melhores, sem precisar de um cientista de dados.",
    category: "IA Hoje",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    publishedAt: "2026-01-08",
    publishedAtFormatted: "08 JAN 2026",
    readingTime: "7 min",
    tags: ["Análise Preditiva", "Dados", "IA Hoje", "Decisões"],
    status: 'published',
    content: `
      <h2>Seus dados já têm as respostas</h2>
      <p>Toda empresa gera dados. Vendas por período, comportamento de clientes, sazonalidade, padrões de compra — tudo isso está registrado em algum lugar. O problema é que a maioria das PMEs não consegue transformar esses dados em insights acionáveis. A análise preditiva com IA muda isso.</p>
      
      <h2>Casos de uso práticos</h2>
      
      <h3>Previsão de demanda</h3>
      <p>Saber quais produtos venderão mais no próximo mês permite otimizar o estoque, reduzir custos e evitar rupturas. Isso é especialmente valioso para empresas com produtos sazonais.</p>
      
      <h3>Identificação de clientes em risco de churn</h3>
      <p>Modelos preditivos conseguem identificar clientes que têm maior probabilidade de cancelar ou deixar de comprar. Com essa informação, você pode agir proativamente antes de perder o cliente.</p>
      
      <h3>Precificação dinâmica</h3>
      <p>Ajustar preços com base na demanda, concorrência e comportamento do cliente pode aumentar significativamente a margem sem perder volume.</p>
      
      <h2>Ferramentas acessíveis para começar</h2>
      <p>Google Looker Studio (gratuito), Microsoft Power BI e Tableau têm recursos de análise preditiva acessíveis. Para casos mais avançados, plataformas como DataRobot e H2O.ai oferecem AutoML sem necessidade de programação.</p>
    `
  },
  {
    slug: "ia-no-marketing-sem-perder-autenticidade",
    title: "IA no marketing digital: como usar sem perder a autenticidade",
    summary: "Estratégias práticas para usar inteligência artificial no marketing sem soar robótico ou genérico.",
    category: "Ferramentas",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    publishedAt: "2025-12-22",
    publishedAtFormatted: "22 DEZ 2025",
    readingTime: "6 min",
    tags: ["Marketing", "IA", "Conteúdo", "Ferramentas"],
    status: 'published',
    content: `
      <h2>IA como copiloto, não como piloto automático</h2>
      <p>O maior erro que as empresas cometem ao usar IA no marketing é terceirizar completamente a criação de conteúdo para ela. O resultado é conteúdo genérico, sem personalidade e facilmente identificável como gerado por máquina. A abordagem correta é usar a IA como um copiloto: ela acelera, você direciona.</p>
      
      <h2>Como usar IA no marketing de forma estratégica</h2>
      
      <h3>Pesquisa e ideação</h3>
      <p>Use IA para gerar ideias de pautas, analisar o que está funcionando para concorrentes e identificar lacunas de conteúdo no seu mercado. Isso economiza horas de pesquisa manual.</p>
      
      <h3>Primeiros rascunhos</h3>
      <p>Deixe a IA criar o esqueleto do conteúdo — estrutura, argumentos principais, dados de suporte. Você entra com a voz da marca, exemplos reais e o toque humano que diferencia.</p>
      
      <h3>Personalização em escala</h3>
      <p>IA permite personalizar e-mails, landing pages e anúncios para diferentes segmentos de clientes sem multiplicar o trabalho da equipe.</p>
      
      <h2>A linha que não deve ser cruzada</h2>
      <p>Nunca publique conteúdo gerado por IA sem revisão humana. Erros factuais, tom inadequado e falta de personalidade são problemas frequentes. A IA gera, o humano cuida da qualidade.</p>
    `
  },
  {
    slug: "futuro-da-ia-nas-empresas-2027",
    title: "O futuro da IA nas empresas: o que esperar para 2027",
    summary: "Uma análise das tendências que vão moldar como as empresas usarão inteligência artificial nos próximos anos.",
    category: "Futuro",
    coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    publishedAt: "2025-12-15",
    publishedAtFormatted: "15 DEZ 2025",
    readingTime: "8 min",
    tags: ["Futuro", "Tendências", "IA", "2027"],
    status: 'published',
    content: `
      <h2>A IA está evoluindo mais rápido do que qualquer previsão</h2>
      <p>Em 2023, poucos imaginariam que em 2026 teríamos modelos de IA capazes de raciocinar, escrever código completo, analisar documentos complexos e operar computadores de forma autônoma. O ritmo de evolução acelerou e tudo indica que os próximos anos trarão mudanças ainda mais profundas.</p>
      
      <h2>Tendências para ficar de olho</h2>
      
      <h3>Agentes de IA autônomos</h3>
      <p>2027 será o ano dos agentes. Sistemas de IA que não apenas respondem perguntas, mas executam tarefas complexas de forma autônoma: pesquisar, decidir, agir e reportar resultados.</p>
      
      <h3>IA multimodal no dia a dia</h3>
      <p>Modelos que processam texto, imagem, áudio e vídeo simultaneamente se tornarão a norma, abrindo possibilidades para automação visual de processos que hoje exigem intervenção humana.</p>
      
      <h3>Personalização extrema</h3>
      <p>Sistemas de IA aprenderão o comportamento específico de cada cliente e adaptarão toda a experiência — preços, conteúdo, atendimento — de forma individual e em tempo real.</p>
      
      <h2>O que sua empresa deve fazer hoje</h2>
      <p>Construir a cultura e a infraestrutura de dados necessárias para aproveitar essas tecnologias quando chegarem. Empresas que começam a jornada de IA hoje estarão muito à frente em 2027.</p>
    `
  },
  {
    slug: "como-treinar-equipe-para-ia",
    title: "Como treinar sua equipe para usar IA sem resistência",
    summary: "Estratégias práticas para engajar colaboradores na adoção de ferramentas de inteligência artificial.",
    category: "Gestão",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    publishedAt: "2025-12-08",
    publishedAtFormatted: "08 DEZ 2025",
    readingTime: "6 min",
    tags: ["Gestão", "Equipe", "Capacitação", "Mudança"],
    status: 'published',
    content: `
      <h2>A maior barreira da IA não é tecnológica</h2>
      <p>Implementamos dezenas de projetos de IA em empresas dos mais variados tamanhos. A conclusão é sempre a mesma: a tecnologia raramente é o problema. As pessoas, sim. Medo de ser substituído, resistência à mudança e ceticismo sobre os resultados são os maiores obstáculos.</p>
      
      <h2>Como construir uma cultura de IA</h2>
      
      <h3>1. Comece pelo porquê</h3>
      <p>Explique para a equipe por que a empresa está investindo em IA. Foque nos benefícios para eles: menos tarefas chatas, mais tempo para trabalho estratégico e criativo. Nunca apresente a IA como substituta de pessoas.</p>
      
      <h3>2. Identifique os entusiastas</h3>
      <p>Em toda empresa existe alguém que já usa ChatGPT no dia a dia pessoal. Encontre essas pessoas e transforme-as em embaixadores internos da IA. O aprendizado peer-to-peer é muito mais eficaz que treinamentos formais.</p>
      
      <h3>3. Crie espaço para experimentação</h3>
      <p>Reserve tempo para que as equipes experimentem ferramentas de IA sem pressão por resultado. A curiosidade guiada produz aprendizado genuíno.</p>
      
      <h3>4. Celebre os casos de sucesso</h3>
      <p>Quando alguém economiza 2 horas usando IA para automatizar um relatório, compartilhe isso com toda a empresa. Resultados concretos de colegas são o melhor argumento para a adoção.</p>
    `
  },
  {
    slug: "como-medir-roi-projetos-ia",
    title: "Como medir o ROI de projetos de IA na sua empresa",
    summary: "Métricas e frameworks práticos para provar (ou refutar) se seus investimentos em IA estão valendo a pena.",
    category: "IA Hoje",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    publishedAt: "2025-11-30",
    publishedAtFormatted: "30 NOV 2025",
    readingTime: "7 min",
    tags: ["ROI", "Métricas", "IA Hoje", "Gestão"],
    status: 'published',
    content: `
      <h2>Se você não mede, não sabe se está funcionando</h2>
      <p>Um dos maiores problemas com projetos de IA nas empresas é a falta de métricas claras de sucesso. Sem elas, é impossível saber se o investimento valeu a pena — ou identificar o que precisa ser ajustado.</p>
      
      <h2>Framework para medir ROI de IA</h2>
      
      <h3>Passo 1: Defina a baseline antes de começar</h3>
      <p>Antes de implementar qualquer solução de IA, documente o estado atual: quanto tempo sua equipe gasta em determinada tarefa, qual é a taxa de erro, quanto custa o processo atual. Sem essa referência, você não tem como medir a melhoria.</p>
      
      <h3>Passo 2: Classifique os benefícios</h3>
      <p>Benefícios diretos (fáceis de medir): redução de horas trabalhadas, diminuição de erros, aumento de conversão. Benefícios indiretos (mais difíceis): satisfação do cliente, qualidade das decisões, velocidade de inovação.</p>
      
      <h3>Passo 3: Calcule o custo total</h3>
      <p>Inclua: licenças de software, tempo de implementação, treinamento da equipe, suporte e manutenção. Muitas empresas calculam apenas o custo da ferramenta e se surpreendem com o custo real.</p>
      
      <h3>Passo 4: Acompanhe ao longo do tempo</h3>
      <p>ROI de IA raramente aparece nos primeiros 30 dias. Defina checkpoints de 3, 6 e 12 meses. Os melhores projetos têm ROI crescente ao longo do tempo, à medida que a equipe domina a ferramenta.</p>
    `
  },
  {
    slug: 'artigo-teste',
    title: 'Artigo Teste',
    summary: 'Este é um artigo de teste para validar o painel.',
    category: 'Ferramentas',
    coverImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    publishedAt: '2026-02-18',
    publishedAtFormatted: '18 DE FEV. DE 2026',
    readingTime: '2 min',
    content: '<h2>Teste</h2><p>Conteúdo de teste do painel admin.</p>',
    tags: ['Teste', 'IA'],
    status: 'published' as const,
  }
];

export const publishedPosts = blogPosts.filter(p => p.status === 'published');
