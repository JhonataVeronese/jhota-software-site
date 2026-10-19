/**
 * O sistema SaaS exibido como produto pronto.
 *
 * Os numeros abaixo vieram do proprio codigo do sistema (seed de modulos e
 * planos comerciais, contagem de telas e entidades). Se o produto evoluir,
 * atualize aqui — nao invente numero em texto de marketing.
 */

export const PRODUTO = {
  nome: "Sistema de Gestão",
  tagline: "Plataforma SaaS multiempresa, em produção",
  descricao:
    "Financeiro, comercial, estoque, documentos e atendimento em um único sistema. Cada empresa com seus dados isolados, identidade visual própria e contratação automática pela vitrine pública.",

  /** TROCAR pelo endereço real quando a aplicação tiver domínio. */
  url: "https://sistema.jhotasoftware.com.br",
  urlLabel: "sistema.jhotasoftware.com.br",

  numeros: [
    { valor: "10", rotulo: "Módulos funcionais" },
    { valor: "60+", rotulo: "Telas de negócio" },
    { valor: "28", rotulo: "Entidades no banco" },
    { valor: "3", rotulo: "Planos comerciais" },
  ],

  modulos: [
    "Cadastros",
    "Financeiro",
    "Configurações financeiras",
    "Relatórios gerenciais",
    "Cobrança",
    "Estoque",
    "Pedidos",
    "CRM e orçamentos",
    "Atendimento WhatsApp",
    "Gestão de documentos",
  ],

  destaques: [
    {
      titulo: "Multiempresa com dados isolados",
      texto:
        "Cada cliente enxerga apenas a própria operação. Um mesmo acesso pode administrar várias empresas.",
    },
    {
      titulo: "White-label de verdade",
      texto:
        "Nome, logo e identidade visual configuráveis por cliente — a plataforma assume a marca de quem vende.",
    },
    {
      titulo: "Documentos com autenticidade verificável",
      texto:
        "GED com versionamento e hash SHA-256. Qualquer destinatário confere a validade do documento sem precisar de login.",
    },
    {
      titulo: "DRE e aging sobre o seu plano de contas",
      texto:
        "Relatórios gerenciais montados a partir da estrutura contábil da própria empresa, não de um modelo fixo.",
    },
  ],

  planos: [
    { nome: "Essencial", preco: "R$ 79", usuarios: "5 usuários", modulos: "4 módulos" },
    { nome: "Gestão", preco: "R$ 99", usuarios: "10 usuários", modulos: "10 módulos" },
    { nome: "Escala", preco: "R$ 199", usuarios: "20 usuários", modulos: "10 módulos" },
  ],
};

export const STACK = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "REST",
];

/** TROCAR pelos canais reais antes de publicar. */
export const CONTATO = {
  whatsapp: "5500000000000",
  whatsappLabel: "(00) 00000-0000",
  email: "contato@jhotasoftware.com.br",
  github: "https://github.com/JhonataVeronese",
};
