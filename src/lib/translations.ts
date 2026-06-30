export type Lang = "pt" | "en" | "fr";

const translations = {
    pt: {
        header: {
            nav: {
                home: "Home",
                solutions: "Soluções",
                pillars: "Pilares",
                model6c: "Modelo 6C",
                blog: "Blog",
                resources: "Recursos",
            },
            cta: "Agendar Conversa",
        },
        hero: {
            headline1: "Transforme seu negócio com",
            headline2: "Inteligência Artificial",
            headline3: "estratégica",
            subheadline: "Consultoria especializada em IA para empresas que querem crescer com inteligência, eficiência e propósito.",
            cta1: "Agendar Conversa",
            cta2: "Veja Nossas Soluções",
            videoFallback: "Seu navegador não suporta vídeos.",
        },
        about: {
            title: "Quem Somos",
            p1: "A Crescitech é uma consultoria estratégica especializada em transformação digital para Pequenas e Médias Empresas. Nossa missão é democratizar o acesso à Inteligência Artificial, tornando-a uma ferramenta real de crescimento sustentável.",
            p2: "Diferente de cursos genéricos ou consultorias distantes, somos parceiros estratégicos que mergulham na realidade de cada cliente.",
            cta: "Conheça Nossa Metodologia",
        },
        solutions: {
            title: "Nossas Soluções",
            subtitle: "Descubra como podemos acelerar seu negócio com inteligência artificial aplicada de forma estratégica.",
            cta: "Fale com um Consultor",
            items: [
                {
                    title: "Diagnóstico Estratégico com IA",
                    description: "Análise e planejamento de ação com base na cultura e na realidade do cliente.",
                },
                {
                    title: "Consultoria Personalizada",
                    description: "Soluções sob medida com foco em resultados concretos e aplicação prática.",
                },
                {
                    title: "Treinamento e Capacitação",
                    description: "Programas para equipes e lideranças com foco em aplicação real da IA.",
                },
                {
                    title: "Desenvolvimento de Ferramentas",
                    description: "Criação de ferramentas inteligentes integradas aos processos da sua empresa.",
                },
                {
                    title: "Mentoria Estratégica",
                    description: "Suporte direto para gestores liderarem com inovação e decisões inteligentes.",
                },
                {
                    title: "Regulação e Boas Práticas",
                    description: "Criação de políticas internas de uso responsável e ético da IA.",
                },
            ],
        },
        differential: {
            title: "Por que escolher a Crescitech?",
            subtitle: "Nossa abordagem combina o melhor da consultoria estratégica com a agilidade e inovação que seu negócio precisa.",
            badge: "A Escolha Ideal",
            col1: {
                title: "Infoprodutores",
                items: [
                    "Conteúdos genéricos e massificados",
                    "Sem acompanhamento direto",
                    "Foco apenas na teoria, pouca prática",
                ],
            },
            col2: {
                title: "Crescitech",
                items: [
                    "Consultoria estratégica personalizada",
                    "Acompanhamento próximo e contínuo",
                    "Mergulho na sua cultura e processos",
                    "Foco em resultados reais e mensuráveis",
                ],
                cta: "Conheça o Modelo 6C",
            },
            col3: {
                title: "Grandes Consultorias",
                items: [
                    "Soluções padronizadas e engessadas",
                    "Distantes da realidade das empresas",
                    "Custos proibitivos para pequenos negócios",
                ],
            },
        },
        model6cSection: {
            title: "Modelo 6C de Maturidade em IA",
            subtitle: "Nossa metodologia proprietária garante que a adoção de Inteligência Artificial aconteça com clareza, estrutura e foco em impacto real. Respeitamos o estágio de maturidade digital da sua organização para promover uma evolução sustentável.",
            benefit1: "Transformação estruturada passo a passo",
            benefit2: "Fim da ansiedade e da paralisia tecnológica",
            benefit3: "Resultados mensuráveis em cada etapa",
            cta: "Fale com um Especialista",
            steps: [
                { label: "Consciência", desc: "Entendimento do cenário atual e oportunidades." },
                { label: "Capacitação", desc: "Preparação de times e lideranças." },
                { label: "Concepção", desc: "Desenho da estratégia e soluções." },
                { label: "Construção", desc: "Desenvolvimento e implementação." },
                { label: "Conexão", desc: "Integração com ecossistema e processos." },
                { label: "Crescimento", desc: "Escala e mensuração de resultados." },
            ],
        },
        blogPreview: {
            title: "Insights e Tendências",
            subtitle: "Conteúdo atualizado para manter você à frente no mercado.",
            allArticles: "Ver todos os artigos",
            readMore: "Ler mais",
        },
        finalCta: {
            title: "Pronto para transformar seu negócio com Inteligência Artificial?",
            subtitle: "Agende uma conversa estratégica sem compromisso e descubra como podemos ajudar sua empresa a crescer.",
            cta1: "Agendar Conversa Agora",
            cta2: "Falar no WhatsApp",
        },
        footer: {
            tagline: "Transformando negócios com inteligência artificial estratégica, ética e focada em resultados reais.",
            company: "Empresa",
            about: "Quem Somos",
            pillars: "Nossos Pilares",
            model6c: "Modelo 6C",
            solutionsTitle: "Soluções",
            diagnostic: "Diagnóstico Estratégico",
            consulting: "Consultoria Personalizada",
            training: "Treinamento e Capacitação",
            tools: "Desenvolvimento de Ferramentas",
            contactTitle: "Contato",
            contact: "Fale Conosco",
            whatsapp: "WhatsApp",
            email: "Email",
            rights: "Todos os direitos reservados.",
            privacy: "Política de Privacidade",
            terms: "Termos de Uso",
        },
        solutionsPage: {
            title: "Nossas Soluções",
            subtitle: "Tecnologia, estratégia e pessoas. Conheça como nossas soluções integradas podem acelerar o crescimento do seu negócio.",
            interested: "Tenho interesse",
            doubt: {
                title: "Ainda com dúvida sobre qual a melhor solução?",
                text: "Não se preocupe. Agende uma conversa diagnóstica gratuita e nós ajudaremos a identificar o melhor caminho para sua empresa.",
                cta: "Falar com um consultor",
            },
            deliverLabel: "O que entregamos nesta etapa:",
            items: [
                {
                    title: "Diagnóstico Estratégico com IA",
                    description: "Análise profunda da maturidade digital da sua empresa para identificar oportunidades reais de aplicação de IA. Entregamos um roadmap claro e acionável, alinhado aos seus objetivos de negócio.",
                    features: [
                        "Mapeamento de processos e gargalos",
                        "Identificação de oportunidades de automação",
                        "Análise de dados e infraestrutura",
                        "Plano de ação priorizado",
                    ],
                },
                {
                    title: "Consultoria Personalizada",
                    description: "Implementação prática de soluções de IA com acompanhamento contínuo. Atuamos lado a lado com sua equipe para garantir que a tecnologia gere valor real e seja adotada com sucesso.",
                    features: [
                        "Implementação de ferramentas de IA",
                        "Otimização de fluxos de trabalho",
                        "Acompanhamento de resultados",
                        "Ajustes e melhorias contínuas",
                    ],
                },
                {
                    title: "Treinamento e Capacitação",
                    description: "Prepare sua equipe para a era da inteligência artificial. Nossos treinamentos são práticos, focados no dia a dia e adaptados para diferentes níveis de conhecimento técnico.",
                    features: [
                        "Workshops práticos (mão na massa)",
                        "Letramento em IA para não-técnicos",
                        "Treinamento em ferramentas específicas",
                        "Desenvolvimento de cultura data-driven",
                    ],
                },
                {
                    title: "Desenvolvimento de Ferramentas",
                    description: "Desenvolvemos soluções customizadas para resolver dores específicas do seu negócio. De chatbots inteligentes a dashboards preditivos, criamos o que você precisa.",
                    features: [
                        "Chatbots e assistentes virtuais",
                        "Automação de processos repetitivos",
                        "Dashboards inteligentes",
                        "Integração de APIs de IA",
                    ],
                },
                {
                    title: "Mentoria Estratégica para Líderes",
                    description: "Apoio individualizado para gestores que precisam liderar a transformação digital. Aprenda a tomar decisões mais assertivas apoiadas por dados e inteligência artificial.",
                    features: [
                        "Sessões individuais ou em grupo",
                        "Análise de cenários e tendências",
                        "Apoio na tomada de decisão",
                        "Desenvolvimento de visão estratégica",
                    ],
                },
                {
                    title: "Regulação e Boas Práticas",
                    description: "Garanta que sua empresa utilize IA de forma ética, segura e em conformidade com as regulações vigentes. Proteja seu negócio e seus clientes com governança sólida.",
                    features: [
                        "Criação de políticas de uso de IA",
                        "Análise de riscos e compliance",
                        "Diretrizes éticas e de privacidade",
                        "Workshops de conscientização",
                    ],
                },
            ],
        },
        pilaresPage: {
            title: "Nossos Pilares",
            subtitle: "A base que sustenta cada transformação. Conheça os princípios que guiam nossa atuação e garantem resultados consistentes.",
            pillars: [
                {
                    title: "Propósito Claro",
                    description: "Acreditamos que toda transformação começa com um porquê bem definido. Um propósito claro orienta escolhas, direciona estratégias e conecta inovação a resultados reais. Na CRESCITECH, cada projeto nasce da missão de gerar impacto positivo e sustentável nos negócios.",
                },
                {
                    title: "Tecnologia como Ferramenta",
                    description: "Para nós, inteligência artificial é meio, não fim. Usamos a tecnologia como uma aliada estratégica, sempre a serviço dos objetivos humanos e organizacionais. Automatizar, prever e otimizar só faz sentido quando há direção e intenção por trás.",
                },
                {
                    title: "Aprendizado Contínuo",
                    description: "O mundo muda rápido. Por isso, cultivamos a aprendizagem como prática permanente. Formamos líderes e equipes com mentalidade de evolução, adaptabilidade e protagonismo. Saber aprender é a maior competência da era digital.",
                },
                {
                    title: "Decisões Baseadas em Dados",
                    description: "A intuição é valiosa, mas decisões sólidas exigem dados concretos. Promovemos a cultura analítica com ferramentas acessíveis e práticas. Tornamos a inteligência de dados parte do cotidiano, melhorando processos, produtos e resultados.",
                },
                {
                    title: "Impacto Sustentável",
                    description: "Crescimento que não gera valor duradouro é ilusão. Buscamos impacto que permanece: financeiro, social, humano. Ajudamos nossos clientes a inovar com responsabilidade, integrando eficiência, ética e visão de longo prazo.",
                },
                {
                    title: "Processos Inteligentes",
                    description: "Não basta fazer mais rápido: é preciso fazer melhor. Reestruturamos rotinas com inteligência e automação, liberando tempo para o que realmente importa. Processos inteligentes geram fluidez, escalabilidade e excelência operacional.",
                },
            ],
        },
        modelo6cPage: {
            title: "Modelo 6C",
            subtitle: "Uma metodologia proprietária desenvolvida para garantir que a jornada de IA da sua empresa seja estruturada, segura e focada em resultados reais.",
            deliverLabel: "O que entregamos nesta etapa:",
            cta: {
                title: "Quer aplicar o Modelo 6C no seu negócio?",
                button: "Fale com um especialista",
            },
            steps: [
                {
                    title: "Consciência",
                    description: "O primeiro passo é entender onde estamos e para onde podemos ir. Realizamos um diagnóstico profundo da maturidade digital, identificando dores latentes e oportunidades de alto impacto. Não há transformação sem clareza.",
                    benefits: ["Mapeamento de maturidade", "Identificação de gargalos", "Definição de objetivos claros"],
                },
                {
                    title: "Capacitação",
                    description: "Tecnologia sem pessoas preparadas é desperdício. Investimos no letramento digital de times e lideranças, criando uma cultura que abraça a inovação em vez de temê-la.",
                    benefits: ["Workshops práticos", "Mudança de mindset", "Preparação para mudança"],
                },
                {
                    title: "Concepção",
                    description: "Hora de desenhar a solução ideal. Criamos um roadmap estratégico que prioriza iniciativas de acordo com a viabilidade técnica e o potencial de retorno para o negócio.",
                    benefits: ["Design de soluções", "Priorização estratégica", "Análise de viabilidade"],
                },
                {
                    title: "Construção",
                    description: "Mão na massa. Desenvolvemos e implementamos as soluções desenhadas, seja através de ferramentas proprietárias, integrações ou configurações de plataformas de mercado.",
                    benefits: ["Desenvolvimento ágil", "Prototipagem rápida", "Implementação técnica"],
                },
                {
                    title: "Conexão",
                    description: "A IA não pode ser uma ilha. Integramos as novas ferramentas aos processos e sistemas existentes, garantindo que a informação flua sem barreiras por toda a organização.",
                    benefits: ["Integração de sistemas", "Automação de fluxos", "Unificação de dados"],
                },
                {
                    title: "Crescimento",
                    description: "O fim do ciclo é apenas o começo da escala. Monitoramos os resultados, ajustamos rotas e expandimos o sucesso para outras áreas, criando um ciclo virtuoso de inovação.",
                    benefits: ["Mensuração de ROI", "Otimização contínua", "Expansão da iniciativas"],
                },
            ],
        },
        contatoPage: {
            title: "Vamos Conversar?",
            subtitle: "Estamos prontos para entender seu momento e desenhar a melhor solução para o seu negócio.",
            card1: {
                title: "Agendar Conversa",
                text: "Escolha o melhor dia e horário na nossa agenda para uma apresentação inicial sem compromisso.",
                cta: "Abrir Agenda (Calendly)",
            },
            card2: {
                title: "Falar no WhatsApp",
                text: "Prefere uma resposta mais rápida? Fale diretamente com nossa equipe comercial pelo WhatsApp.",
                cta: "Iniciar Conversa",
            },
            otherContact: "Outras formas de contato",
            location: "São Paulo, SP - Brasil",
        },
        recursosPage: {
            title: "Recursos Gratuitos",
            subtitle: "Materiais práticos para acelerar a jornada de IA da sua empresa. Baixe gratuitamente.",
            downloadCta: "Baixar Gratuitamente",
        },
    },

    en: {
        header: {
            nav: {
                home: "Home",
                solutions: "Solutions",
                pillars: "Pillars",
                model6c: "Model 6C",
                blog: "Blog",
                resources: "Resources",
            },
            cta: "Schedule a Chat",
        },
        hero: {
            headline1: "Transform your business with",
            headline2: "Artificial Intelligence",
            headline3: "strategy",
            subheadline: "Specialized AI consulting for companies that want to grow with intelligence, efficiency and purpose.",
            cta1: "Schedule a Chat",
            cta2: "See Our Solutions",
            videoFallback: "Your browser does not support videos.",
        },
        about: {
            title: "Who We Are",
            p1: "Crescitech is a strategic consulting firm specialized in digital transformation for Small and Medium Enterprises. Our mission is to democratize access to Artificial Intelligence, making it a real tool for sustainable growth.",
            p2: "Unlike generic courses or distant consultancies, we are strategic partners who dive deep into the reality of each client.",
            cta: "Discover Our Methodology",
        },
        solutions: {
            title: "Our Solutions",
            subtitle: "Discover how we can accelerate your business with strategically applied artificial intelligence.",
            cta: "Talk to a Consultant",
            items: [
                {
                    title: "Strategic AI Diagnosis",
                    description: "Analysis and action planning based on the client's culture and reality.",
                },
                {
                    title: "Personalized Consulting",
                    description: "Tailored solutions focused on concrete results and practical application.",
                },
                {
                    title: "Training & Enablement",
                    description: "Programs for teams and leadership focused on real AI application.",
                },
                {
                    title: "Tool Development",
                    description: "Creation of intelligent tools integrated into your company's processes.",
                },
                {
                    title: "Strategic Mentoring",
                    description: "Direct support for managers to lead with innovation and intelligent decisions.",
                },
                {
                    title: "Regulation & Best Practices",
                    description: "Creation of internal policies for responsible and ethical AI use.",
                },
            ],
        },
        differential: {
            title: "Why choose Crescitech?",
            subtitle: "Our approach combines the best of strategic consulting with the agility and innovation your business needs.",
            badge: "The Ideal Choice",
            col1: {
                title: "Info-product Vendors",
                items: [
                    "Generic and mass-produced content",
                    "No direct support",
                    "Theory-focused, little practice",
                ],
            },
            col2: {
                title: "Crescitech",
                items: [
                    "Personalized strategic consulting",
                    "Close and continuous follow-up",
                    "Deep dive into your culture and processes",
                    "Focus on real and measurable results",
                ],
                cta: "Discover the 6C Model",
            },
            col3: {
                title: "Large Consulting Firms",
                items: [
                    "Standardized and rigid solutions",
                    "Disconnected from business reality",
                    "Prohibitive costs for small businesses",
                ],
            },
        },
        model6cSection: {
            title: "6C AI Maturity Model",
            subtitle: "Our proprietary methodology ensures that AI adoption happens with clarity, structure and a focus on real impact. We respect your organization's digital maturity stage to promote sustainable evolution.",
            benefit1: "Structured transformation step by step",
            benefit2: "End of anxiety and technological paralysis",
            benefit3: "Measurable results at every stage",
            cta: "Talk to a Specialist",
            steps: [
                { label: "Consciousness", desc: "Understanding the current scenario and opportunities." },
                { label: "Capability", desc: "Preparation of teams and leadership." },
                { label: "Conception", desc: "Design of strategy and solutions." },
                { label: "Construction", desc: "Development and implementation." },
                { label: "Connection", desc: "Integration with ecosystem and processes." },
                { label: "Growth", desc: "Scaling and measuring results." },
            ],
        },
        blogPreview: {
            title: "Insights & Trends",
            subtitle: "Updated content to keep you ahead in the market.",
            allArticles: "View all articles",
            readMore: "Read more",
        },
        finalCta: {
            title: "Ready to transform your business with Artificial Intelligence?",
            subtitle: "Schedule a no-commitment strategic conversation and discover how we can help your company grow.",
            cta1: "Schedule a Chat Now",
            cta2: "Talk on WhatsApp",
        },
        footer: {
            tagline: "Transforming businesses with strategic, ethical AI focused on real results.",
            company: "Company",
            about: "Who We Are",
            pillars: "Our Pillars",
            model6c: "Model 6C",
            solutionsTitle: "Solutions",
            diagnostic: "Strategic Diagnosis",
            consulting: "Personalized Consulting",
            training: "Training & Enablement",
            tools: "Tool Development",
            contactTitle: "Contact",
            contact: "Get in Touch",
            whatsapp: "WhatsApp",
            email: "Email",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
        },
        solutionsPage: {
            title: "Our Solutions",
            subtitle: "Technology, strategy and people. Discover how our integrated solutions can accelerate your business growth.",
            interested: "I'm interested",
            doubt: {
                title: "Still unsure which solution is the best fit?",
                text: "Don't worry. Schedule a free diagnostic conversation and we will help identify the best path for your company.",
                cta: "Talk to a consultant",
            },
            deliverLabel: "What we deliver at this stage:",
            items: [
                {
                    title: "Strategic AI Diagnosis",
                    description: "In-depth analysis of your company's digital maturity to identify real AI application opportunities. We deliver a clear and actionable roadmap aligned with your business objectives.",
                    features: [
                        "Process and bottleneck mapping",
                        "Identification of automation opportunities",
                        "Data and infrastructure analysis",
                        "Prioritized action plan",
                    ],
                },
                {
                    title: "Personalized Consulting",
                    description: "Practical implementation of AI solutions with continuous follow-up. We work side by side with your team to ensure the technology generates real value and is adopted successfully.",
                    features: [
                        "Implementation of AI tools",
                        "Workflow optimization",
                        "Results monitoring",
                        "Continuous adjustments and improvements",
                    ],
                },
                {
                    title: "Training & Enablement",
                    description: "Prepare your team for the era of artificial intelligence. Our training programs are practical, focused on daily operations and adapted for different levels of technical knowledge.",
                    features: [
                        "Hands-on workshops",
                        "AI literacy for non-technical staff",
                        "Training in specific tools",
                        "Data-driven culture development",
                    ],
                },
                {
                    title: "Tool Development",
                    description: "We develop custom solutions to solve specific pain points of your business. From intelligent chatbots to predictive dashboards, we build what you need.",
                    features: [
                        "Chatbots and virtual assistants",
                        "Repetitive process automation",
                        "Intelligent dashboards",
                        "AI API integration",
                    ],
                },
                {
                    title: "Strategic Mentoring for Leaders",
                    description: "Individualized support for managers who need to lead digital transformation. Learn to make more assertive decisions backed by data and artificial intelligence.",
                    features: [
                        "Individual or group sessions",
                        "Scenario and trend analysis",
                        "Decision-making support",
                        "Strategic vision development",
                    ],
                },
                {
                    title: "Regulation & Best Practices",
                    description: "Ensure your company uses AI ethically, safely and in compliance with current regulations. Protect your business and your customers with solid governance.",
                    features: [
                        "AI usage policy creation",
                        "Risk analysis and compliance",
                        "Ethical and privacy guidelines",
                        "Awareness workshops",
                    ],
                },
            ],
        },
        pilaresPage: {
            title: "Our Pillars",
            subtitle: "The foundation that sustains every transformation. Discover the principles that guide our work and ensure consistent results.",
            pillars: [
                {
                    title: "Clear Purpose",
                    description: "We believe every transformation begins with a well-defined why. A clear purpose guides choices, directs strategies and connects innovation to real results. At CRESCITECH, every project is born from the mission to generate positive and sustainable business impact.",
                },
                {
                    title: "Technology as a Tool",
                    description: "For us, artificial intelligence is a means, not an end. We use technology as a strategic ally, always in service of human and organizational objectives. Automating, predicting and optimizing only makes sense when there is direction and intention behind it.",
                },
                {
                    title: "Continuous Learning",
                    description: "The world changes fast. That is why we cultivate learning as a permanent practice. We develop leaders and teams with an evolution mindset, adaptability and agency. Knowing how to learn is the greatest competency of the digital era.",
                },
                {
                    title: "Data-Driven Decisions",
                    description: "Intuition is valuable, but solid decisions require concrete data. We promote analytical culture with accessible and practical tools. We make data intelligence part of everyday operations, improving processes, products and results.",
                },
                {
                    title: "Sustainable Impact",
                    description: "Growth that does not generate lasting value is an illusion. We seek impact that endures: financial, social, human. We help our clients innovate responsibly, integrating efficiency, ethics and long-term vision.",
                },
                {
                    title: "Intelligent Processes",
                    description: "It is not enough to move faster: you need to do better. We restructure routines with intelligence and automation, freeing time for what truly matters. Intelligent processes generate fluidity, scalability and operational excellence.",
                },
            ],
        },
        modelo6cPage: {
            title: "Model 6C",
            subtitle: "A proprietary methodology developed to ensure that your company's AI journey is structured, safe and focused on real results.",
            deliverLabel: "What we deliver at this stage:",
            cta: {
                title: "Want to apply the 6C Model to your business?",
                button: "Talk to a specialist",
            },
            steps: [
                {
                    title: "Consciousness",
                    description: "The first step is understanding where we are and where we can go. We perform a deep diagnosis of digital maturity, identifying latent pain points and high-impact opportunities. There is no transformation without clarity.",
                    benefits: ["Maturity mapping", "Bottleneck identification", "Clear objective definition"],
                },
                {
                    title: "Capability",
                    description: "Technology without prepared people is waste. We invest in digital literacy for teams and leadership, creating a culture that embraces innovation rather than fearing it.",
                    benefits: ["Practical workshops", "Mindset shift", "Change readiness"],
                },
                {
                    title: "Conception",
                    description: "Time to design the ideal solution. We create a strategic roadmap that prioritizes initiatives according to technical feasibility and return potential for the business.",
                    benefits: ["Solution design", "Strategic prioritization", "Feasibility analysis"],
                },
                {
                    title: "Construction",
                    description: "Getting our hands dirty. We develop and implement the designed solutions, whether through proprietary tools, integrations or market platform configurations.",
                    benefits: ["Agile development", "Rapid prototyping", "Technical implementation"],
                },
                {
                    title: "Connection",
                    description: "AI cannot be an island. We integrate new tools with existing processes and systems, ensuring information flows without barriers throughout the organization.",
                    benefits: ["Systems integration", "Flow automation", "Data unification"],
                },
                {
                    title: "Growth",
                    description: "The end of the cycle is just the beginning of scaling. We monitor results, adjust routes and expand success to other areas, creating a virtuous cycle of innovation.",
                    benefits: ["ROI measurement", "Continuous optimization", "Initiative expansion"],
                },
            ],
        },
        contatoPage: {
            title: "Let's Talk?",
            subtitle: "We are ready to understand your moment and design the best solution for your business.",
            card1: {
                title: "Schedule a Chat",
                text: "Choose the best day and time in our calendar for an initial presentation with no commitment.",
                cta: "Open Calendar (Calendly)",
            },
            card2: {
                title: "Talk on WhatsApp",
                text: "Prefer a faster response? Speak directly with our commercial team via WhatsApp.",
                cta: "Start Conversation",
            },
            otherContact: "Other ways to contact us",
            location: "São Paulo, SP - Brazil",
        },
        recursosPage: {
            title: "Free Resources",
            subtitle: "Practical materials to accelerate your company's AI journey. Download for free.",
            downloadCta: "Download for Free",
        },
    },

    fr: {
        header: {
            nav: {
                home: "Accueil",
                solutions: "Solutions",
                pillars: "Piliers",
                model6c: "Modèle 6C",
                blog: "Blog",
                resources: "Ressources",
            },
            cta: "Planifier un Échange",
        },
        hero: {
            headline1: "Transformez votre entreprise avec",
            headline2: "l'Intelligence Artificielle",
            headline3: "stratégique",
            subheadline: "Conseil spécialisé en IA pour les entreprises qui souhaitent croître avec intelligence, efficacité et sens.",
            cta1: "Planifier un Échange",
            cta2: "Voir Nos Solutions",
            videoFallback: "Votre navigateur ne prend pas en charge les vidéos.",
        },
        about: {
            title: "Qui Sommes-Nous",
            p1: "Crescitech est un cabinet de conseil stratégique spécialisé dans la transformation numérique pour les Petites et Moyennes Entreprises. Notre mission est de démocratiser l'accès à l'Intelligence Artificielle, en en faisant un véritable outil de croissance durable.",
            p2: "Contrairement aux cours génériques ou aux cabinets distants, nous sommes des partenaires stratégiques qui plongent dans la réalité de chaque client.",
            cta: "Découvrir Notre Méthodologie",
        },
        solutions: {
            title: "Nos Solutions",
            subtitle: "Découvrez comment nous pouvons accélérer votre entreprise grâce à l'intelligence artificielle appliquée de façon stratégique.",
            cta: "Parler à un Consultant",
            items: [
                {
                    title: "Diagnostic Stratégique IA",
                    description: "Analyse et planification d'actions basées sur la culture et la réalité du client.",
                },
                {
                    title: "Conseil Personnalisé",
                    description: "Solutions sur mesure axées sur des résultats concrets et une application pratique.",
                },
                {
                    title: "Formation & Montée en Compétences",
                    description: "Programmes pour les équipes et la direction axés sur l'application réelle de l'IA.",
                },
                {
                    title: "Développement d'Outils",
                    description: "Création d'outils intelligents intégrés aux processus de votre entreprise.",
                },
                {
                    title: "Mentorat Stratégique",
                    description: "Accompagnement direct des dirigeants pour innover et prendre des décisions intelligentes.",
                },
                {
                    title: "Réglementation & Bonnes Pratiques",
                    description: "Création de politiques internes pour un usage responsable et éthique de l'IA.",
                },
            ],
        },
        differential: {
            title: "Pourquoi choisir Crescitech ?",
            subtitle: "Notre approche combine le meilleur du conseil stratégique avec l'agilité et l'innovation dont votre entreprise a besoin.",
            badge: "Le Choix Idéal",
            col1: {
                title: "Infopreneurs",
                items: [
                    "Contenus génériques et de masse",
                    "Pas d'accompagnement direct",
                    "Focalisé sur la théorie, peu de pratique",
                ],
            },
            col2: {
                title: "Crescitech",
                items: [
                    "Conseil stratégique personnalisé",
                    "Suivi proche et continu",
                    "Immersion dans votre culture et vos processus",
                    "Accent sur des résultats réels et mesurables",
                ],
                cta: "Découvrir le Modèle 6C",
            },
            col3: {
                title: "Grands Cabinets de Conseil",
                items: [
                    "Solutions standardisées et rigides",
                    "Éloignés de la réalité des entreprises",
                    "Coûts prohibitifs pour les petites entreprises",
                ],
            },
        },
        model6cSection: {
            title: "Modèle 6C de Maturité en IA",
            subtitle: "Notre méthodologie propriétaire garantit que l'adoption de l'IA se déroule avec clarté, structure et un focus sur l'impact réel. Nous respectons le stade de maturité numérique de votre organisation pour promouvoir une évolution durable.",
            benefit1: "Transformation structurée étape par étape",
            benefit2: "Fin de l'anxiété et de la paralysie technologique",
            benefit3: "Résultats mesurables à chaque étape",
            cta: "Parler à un Spécialiste",
            steps: [
                { label: "Conscience", desc: "Compréhension du scénario actuel et des opportunités." },
                { label: "Capacitation", desc: "Préparation des équipes et de la direction." },
                { label: "Conception", desc: "Design de la stratégie et des solutions." },
                { label: "Construction", desc: "Développement et mise en œuvre." },
                { label: "Connexion", desc: "Intégration avec l'écosystème et les processus." },
                { label: "Croissance", desc: "Mise à l'échelle et mesure des résultats." },
            ],
        },
        blogPreview: {
            title: "Insights & Tendances",
            subtitle: "Contenu actualisé pour vous maintenir en avance sur le marché.",
            allArticles: "Voir tous les articles",
            readMore: "Lire la suite",
        },
        finalCta: {
            title: "Prêt à transformer votre entreprise avec l'Intelligence Artificielle ?",
            subtitle: "Planifiez une conversation stratégique sans engagement et découvrez comment nous pouvons aider votre entreprise à croître.",
            cta1: "Planifier un Échange Maintenant",
            cta2: "Parler sur WhatsApp",
        },
        footer: {
            tagline: "Transformer les entreprises grâce à une IA stratégique, éthique et axée sur des résultats réels.",
            company: "Entreprise",
            about: "Qui Sommes-Nous",
            pillars: "Nos Piliers",
            model6c: "Modèle 6C",
            solutionsTitle: "Solutions",
            diagnostic: "Diagnostic Stratégique",
            consulting: "Conseil Personnalisé",
            training: "Formation & Montée en Compétences",
            tools: "Développement d'Outils",
            contactTitle: "Contact",
            contact: "Nous Contacter",
            whatsapp: "WhatsApp",
            email: "Email",
            rights: "Tous droits réservés.",
            privacy: "Politique de Confidentialité",
            terms: "Conditions d'Utilisation",
        },
        solutionsPage: {
            title: "Nos Solutions",
            subtitle: "Technologie, stratégie et personnes. Découvrez comment nos solutions intégrées peuvent accélérer la croissance de votre entreprise.",
            interested: "Je suis intéressé",
            doubt: {
                title: "Pas encore sûr de la meilleure solution ?",
                text: "Ne vous inquiétez pas. Planifiez une conversation diagnostique gratuite et nous vous aiderons à identifier le meilleur chemin pour votre entreprise.",
                cta: "Parler à un consultant",
            },
            deliverLabel: "Ce que nous livrons à cette étape :",
            items: [
                {
                    title: "Diagnostic Stratégique IA",
                    description: "Analyse approfondie de la maturité numérique de votre entreprise pour identifier les vraies opportunités d'application de l'IA. Nous livrons une feuille de route claire et actionnable, alignée sur vos objectifs business.",
                    features: [
                        "Cartographie des processus et des goulots d'étranglement",
                        "Identification des opportunités d'automatisation",
                        "Analyse des données et de l'infrastructure",
                        "Plan d'action priorisé",
                    ],
                },
                {
                    title: "Conseil Personnalisé",
                    description: "Mise en œuvre pratique de solutions d'IA avec un suivi continu. Nous travaillons aux côtés de votre équipe pour garantir que la technologie génère une valeur réelle et soit adoptée avec succès.",
                    features: [
                        "Mise en œuvre d'outils d'IA",
                        "Optimisation des flux de travail",
                        "Suivi des résultats",
                        "Ajustements et améliorations continus",
                    ],
                },
                {
                    title: "Formation & Montée en Compétences",
                    description: "Préparez votre équipe à l'ère de l'intelligence artificielle. Nos formations sont pratiques, axées sur le quotidien et adaptées à différents niveaux de connaissances techniques.",
                    features: [
                        "Ateliers pratiques (mains dans la masse)",
                        "Littératie IA pour les non-techniques",
                        "Formation sur des outils spécifiques",
                        "Développement d'une culture data-driven",
                    ],
                },
                {
                    title: "Développement d'Outils",
                    description: "Nous développons des solutions personnalisées pour résoudre les points douloureux spécifiques de votre entreprise. Des chatbots intelligents aux tableaux de bord prédictifs, nous créons ce dont vous avez besoin.",
                    features: [
                        "Chatbots et assistants virtuels",
                        "Automatisation des processus répétitifs",
                        "Tableaux de bord intelligents",
                        "Intégration d'APIs d'IA",
                    ],
                },
                {
                    title: "Mentorat Stratégique pour Dirigeants",
                    description: "Accompagnement individualisé pour les dirigeants qui doivent mener la transformation numérique. Apprenez à prendre des décisions plus assertives soutenues par les données et l'intelligence artificielle.",
                    features: [
                        "Sessions individuelles ou en groupe",
                        "Analyse de scénarios et de tendances",
                        "Aide à la prise de décision",
                        "Développement d'une vision stratégique",
                    ],
                },
                {
                    title: "Réglementation & Bonnes Pratiques",
                    description: "Assurez-vous que votre entreprise utilise l'IA de manière éthique, sécurisée et conforme aux réglementations en vigueur. Protégez votre entreprise et vos clients avec une gouvernance solide.",
                    features: [
                        "Création de politiques d'utilisation de l'IA",
                        "Analyse des risques et conformité",
                        "Directives éthiques et de confidentialité",
                        "Ateliers de sensibilisation",
                    ],
                },
            ],
        },
        pilaresPage: {
            title: "Nos Piliers",
            subtitle: "La base qui soutient chaque transformation. Découvrez les principes qui guident notre action et garantissent des résultats cohérents.",
            pillars: [
                {
                    title: "Objectif Clair",
                    description: "Nous croyons que toute transformation commence par un pourquoi bien défini. Un objectif clair oriente les choix, dirige les stratégies et connecte l'innovation à des résultats réels. Chez CRESCITECH, chaque projet naît de la mission de générer un impact positif et durable sur les entreprises.",
                },
                {
                    title: "La Technologie comme Outil",
                    description: "Pour nous, l'intelligence artificielle est un moyen, pas une fin. Nous utilisons la technologie comme une alliée stratégique, toujours au service des objectifs humains et organisationnels. Automatiser, prédire et optimiser n'a de sens que lorsqu'il y a une direction et une intention derrière.",
                },
                {
                    title: "Apprentissage Continu",
                    description: "Le monde change vite. C'est pourquoi nous cultivons l'apprentissage comme une pratique permanente. Nous formons des leaders et des équipes avec une mentalité d'évolution, d'adaptabilité et de proactivité. Savoir apprendre est la plus grande compétence de l'ère numérique.",
                },
                {
                    title: "Décisions Basées sur les Données",
                    description: "L'intuition est précieuse, mais des décisions solides nécessitent des données concrètes. Nous promouvons la culture analytique avec des outils accessibles et pratiques. Nous faisons de l'intelligence des données une partie du quotidien, améliorant les processus, les produits et les résultats.",
                },
                {
                    title: "Impact Durable",
                    description: "La croissance qui ne génère pas de valeur durable est une illusion. Nous recherchons un impact qui dure : financier, social, humain. Nous aidons nos clients à innover de manière responsable, en intégrant l'efficacité, l'éthique et la vision à long terme.",
                },
                {
                    title: "Processus Intelligents",
                    description: "Il ne suffit pas d'aller plus vite : il faut faire mieux. Nous restructurons les routines avec intelligence et automatisation, libérant du temps pour ce qui compte vraiment. Les processus intelligents génèrent fluidité, évolutivité et excellence opérationnelle.",
                },
            ],
        },
        modelo6cPage: {
            title: "Modèle 6C",
            subtitle: "Une méthodologie propriétaire développée pour garantir que le parcours IA de votre entreprise soit structuré, sécurisé et axé sur des résultats réels.",
            deliverLabel: "Ce que nous livrons à cette étape :",
            cta: {
                title: "Vous souhaitez appliquer le Modèle 6C à votre entreprise ?",
                button: "Parler à un spécialiste",
            },
            steps: [
                {
                    title: "Conscience",
                    description: "La première étape est de comprendre où nous sommes et où nous pouvons aller. Nous réalisons un diagnostic approfondi de la maturité numérique, identifiant les points douloureux latents et les opportunités à fort impact. Il n'y a pas de transformation sans clarté.",
                    benefits: ["Cartographie de la maturité", "Identification des goulots", "Définition d'objectifs clairs"],
                },
                {
                    title: "Capacitation",
                    description: "La technologie sans personnes préparées est un gaspillage. Nous investissons dans la littératie numérique des équipes et des dirigeants, créant une culture qui embrasse l'innovation plutôt que de la craindre.",
                    benefits: ["Ateliers pratiques", "Changement de mentalité", "Préparation au changement"],
                },
                {
                    title: "Conception",
                    description: "Il est temps de concevoir la solution idéale. Nous créons une feuille de route stratégique qui priorise les initiatives selon la faisabilité technique et le potentiel de retour pour l'entreprise.",
                    benefits: ["Design de solutions", "Priorisation stratégique", "Analyse de faisabilité"],
                },
                {
                    title: "Construction",
                    description: "Les mains dans la pâte. Nous développons et mettons en œuvre les solutions conçues, que ce soit via des outils propriétaires, des intégrations ou des configurations de plateformes du marché.",
                    benefits: ["Développement agile", "Prototypage rapide", "Mise en œuvre technique"],
                },
                {
                    title: "Connexion",
                    description: "L'IA ne peut pas être une île. Nous intégrons les nouveaux outils aux processus et systèmes existants, garantissant que l'information circule sans barrières dans toute l'organisation.",
                    benefits: ["Intégration des systèmes", "Automatisation des flux", "Unification des données"],
                },
                {
                    title: "Croissance",
                    description: "La fin du cycle n'est que le début de la mise à l'échelle. Nous surveillons les résultats, ajustons les routes et étendons le succès à d'autres domaines, créant un cycle vertueux d'innovation.",
                    benefits: ["Mesure du ROI", "Optimisation continue", "Expansion des initiatives"],
                },
            ],
        },
        contatoPage: {
            title: "Parlons-en ?",
            subtitle: "Nous sommes prêts à comprendre votre situation et à concevoir la meilleure solution pour votre entreprise.",
            card1: {
                title: "Planifier un Échange",
                text: "Choisissez le meilleur jour et horaire dans notre agenda pour une présentation initiale sans engagement.",
                cta: "Ouvrir l'Agenda (Calendly)",
            },
            card2: {
                title: "Parler sur WhatsApp",
                text: "Vous préférez une réponse plus rapide ? Parlez directement avec notre équipe commerciale via WhatsApp.",
                cta: "Démarrer la Conversation",
            },
            otherContact: "Autres moyens de nous contacter",
            location: "São Paulo, SP - Brésil",
        },
        recursosPage: {
            title: "Ressources Gratuites",
            subtitle: "Matériaux pratiques pour accélérer le parcours IA de votre entreprise. Téléchargez gratuitement.",
            downloadCta: "Télécharger Gratuitement",
        },
    },
};

export default translations;
