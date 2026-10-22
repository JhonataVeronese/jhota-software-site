/**
 * Catalogo de servicos.
 *
 * Este arquivo e a unica fonte de verdade do que e oferecido. Sem preco
 * publicado: cada projeto e orcado depois da conversa. Para incluir ou
 * remover um servico, mexa so aqui — o layout se adapta.
 */

export type Servico = {
  /** Usado na ancora e na key do React. */
  id: string;
  numero: string;
  titulo: string;
  resumo: string;
  entregaveis: string[];
  /** Destaca o card na grade. */
  destaque?: boolean;
};

export const SERVICOS: Servico[] = [
  {
    id: "dashboards-bi",
    numero: "01",
    titulo: "Dashboards e BI",
    resumo: "Os números da operação em um painel que a gestão consulta todo dia.",
    entregaveis: [
      "Indicadores definidos junto com a gestão.",
      "Conexão com planilhas, bancos e sistemas existentes.",
      "Painéis com filtros por período, área e responsável.",
      "Atualização automática dos dados.",
    ],
  },
  {
    id: "automacoes",
    numero: "02",
    titulo: "Automação de processos",
    resumo: "Tarefas repetitivas rodando sozinhas, sem copiar e colar.",
    entregaveis: [
      "Mapeamento do processo atual.",
      "Rotinas automáticas entre planilhas, e-mail e sistemas.",
      "Alertas e notificações quando algo exige atenção.",
      "Registro do que foi executado, para auditoria.",
    ],
    destaque: true,
  },
  {
    id: "chatbot-whatsapp",
    numero: "03",
    titulo: "Chatbot com WhatsApp",
    resumo: "Atendimento no canal que o seu cliente já usa, 24 horas por dia.",
    entregaveis: [
      "Fluxos de atendimento, menus e respostas automáticas.",
      "Integração com a API oficial do WhatsApp.",
      "Transferência para atendente humano.",
      "Histórico de conversas e registro de contatos.",
    ],
  },
  {
    id: "agente-ia",
    numero: "04",
    titulo: "Agentes de IA",
    resumo: "Assistentes que entendem o contexto do seu negócio e executam tarefas.",
    entregaveis: [
      "Agente treinado com os documentos e regras da empresa.",
      "Ações em sistemas: consultar, cadastrar e atualizar dados.",
      "Uso em WhatsApp, site ou ferramentas internas.",
      "Limites e supervisão definidos para cada tarefa.",
    ],
  },
  {
    id: "sites-landing",
    numero: "05",
    titulo: "Sites e landing pages",
    resumo: "Presença online rápida, bonita e feita para converter.",
    entregaveis: [
      "Layout responsivo, pensado primeiro para o celular.",
      "Carregamento rápido e boas práticas de SEO.",
      "Formulários e botões ligados ao WhatsApp ou CRM.",
      "Publicação e configuração de domínio.",
    ],
  },
  {
    id: "sistemas-web",
    numero: "06",
    titulo: "Sistemas web completos",
    resumo: "Software sob medida para a operação, do cadastro ao relatório.",
    entregaveis: [
      "Levantamento de requisitos e desenho das telas.",
      "Backend, banco de dados e painel administrativo.",
      "Controle de usuários e permissões.",
      "Publicação em nuvem e suporte após a entrega.",
    ],
  },
  {
    id: "apps-mobile",
    numero: "07",
    titulo: "Aplicativos mobile",
    resumo: "Apps para Android e iOS, para clientes ou para a equipe em campo.",
    entregaveis: [
      "Aplicativo multiplataforma com um único código.",
      "Login, notificações e funcionamento com o backend.",
      "Publicação nas lojas Google Play e App Store.",
      "Evolução contínua depois do lançamento.",
    ],
  },
  {
    id: "integracoes",
    numero: "08",
    titulo: "Integrações entre sistemas",
    resumo: "Os sistemas da empresa conversando entre si, sem retrabalho.",
    entregaveis: [
      "Consumo e criação de APIs REST.",
      "Sincronização entre ERP, CRM, e-commerce e planilhas.",
      "Autenticação e tratamento de erros.",
      "Monitoramento para saber quando algo falhar.",
    ],
  },
];

/** Etapas do atendimento, da primeira conversa à entrega. */
export const PROCESSO = [
  {
    passo: "01",
    titulo: "Você conta a necessidade",
    texto:
      "Mande o contexto por WhatsApp ou e-mail: o que precisa, quais sistemas já usa e onde está a dor.",
  },
  {
    passo: "02",
    titulo: "Proposta sob medida",
    texto:
      "Respondo com escopo, prazo e valor definidos para o seu caso, incluindo o que fica fora. Sem surpresa depois.",
  },
  {
    passo: "03",
    titulo: "Execução",
    texto:
      "Trabalho no prazo combinado, com entregas parciais, e aviso se algo sair do previsto antes de continuar.",
  },
  {
    passo: "04",
    titulo: "Entrega",
    texto:
      "Solução no ar com explicação do que foi feito, em linguagem que a equipe consegue usar e manter.",
  },
];
