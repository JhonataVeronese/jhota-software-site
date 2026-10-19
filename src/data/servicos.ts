/**
 * Catalogo de servicos sob demanda.
 *
 * Este arquivo e a unica fonte de verdade de preco, prazo e escopo. Para
 * ajustar valores ou criar um pacote novo, mexa so aqui — o layout se adapta.
 */

export type Pacote = {
  /** Usado na ancora e na key do React. */
  id: string;
  numero: string;
  titulo: string;
  /** Faixa de preco, ja formatada. */
  preco: string;
  prazo: string;
  entregaveis: string[];
  /** O que o pacote NAO cobre. Fica visivel de proposito, evita atrito depois. */
  limite: string;
  /** Destaca o card na grade. */
  destaque?: boolean;
};

export const PACOTES: Pacote[] = [
  {
    id: "bug-api",
    numero: "01",
    titulo: "Correção de bug em API",
    preco: "R$ 250–400",
    prazo: "Até 4 horas, após diagnóstico",
    entregaveis: [
      "Corrigir um endpoint que retorna erro.",
      "Resolver validações ou filtros quebrados.",
      "Corrigir problemas simples de consulta ao banco.",
      "Entregar correção e teste básico.",
    ],
    limite: "Um bug identificado, sem refatoração geral.",
  },
  {
    id: "integracao",
    numero: "02",
    titulo: "Integração com API externa",
    preco: "R$ 400–700",
    prazo: "4–8 horas",
    entregaveis: [
      "Consumir uma API REST.",
      "Configurar autenticação e tratamento de erros.",
      "Mapear os dados de entrada e saída.",
      "Entregar uma integração funcional.",
    ],
    limite: "Um serviço externo e um fluxo de integração.",
    destaque: true,
  },
  {
    id: "importacao",
    numero: "03",
    titulo: "Importação de Excel ou CSV",
    preco: "R$ 250–500",
    prazo: "3–6 horas",
    entregaveis: [
      "Ler arquivos CSV ou Excel.",
      "Validar colunas e campos obrigatórios.",
      "Salvar registros no PostgreSQL.",
      "Gerar relatório de erros de importação.",
    ],
    limite: "Um modelo de arquivo e regras de validação definidas.",
  },
  {
    id: "endpoint",
    numero: "04",
    titulo: "Endpoint REST",
    preco: "R$ 300–600",
    prazo: "4–8 horas",
    entregaveis: [
      "Criar um endpoint CRUD simples.",
      "Implementar paginação e filtros básicos.",
      "Adicionar validações e tratamento de erros.",
      "Documentar exemplos de requisição e resposta.",
    ],
    limite: "Um recurso, em projeto com estrutura já existente.",
  },
  {
    id: "diagnostico",
    numero: "05",
    titulo: "Diagnóstico de API lenta ou instável",
    preco: "R$ 300–600",
    prazo: "Até 1 dia",
    entregaveis: [
      "Investigar logs e erros.",
      "Identificar consultas ou chamadas lentas.",
      "Apontar a causa provável.",
      "Corrigir um problema pontual, se estiver dentro do escopo acordado.",
    ],
    limite:
      "Diagnóstico e uma correção simples, não uma reestruturação de arquitetura.",
  },
];

/** Etapas do atendimento, da primeira conversa à entrega. */
export const PROCESSO = [
  {
    passo: "01",
    titulo: "Você descreve o problema",
    texto:
      "Mande o contexto por WhatsApp ou e-mail. Se houver acesso ao repositório ou aos logs, melhor.",
  },
  {
    passo: "02",
    titulo: "Escopo e preço fechados",
    texto:
      "Respondo com o pacote adequado, o valor dentro da faixa e o que está fora do escopo. Sem surpresa depois.",
  },
  {
    passo: "03",
    titulo: "Execução",
    texto:
      "Trabalho no prazo combinado e aviso se algo sair do previsto antes de continuar.",
  },
  {
    passo: "04",
    titulo: "Entrega",
    texto:
      "Código entregue com teste básico e explicação do que foi feito, em linguagem que a equipe consegue manter.",
  },
];
