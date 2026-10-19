# Jhota Software — site de portfólio e vendas

Site estático de uma página: serviços de desenvolvimento sob demanda e o
sistema de gestão SaaS exibido como produto pronto.

**Sem back-end de propósito.** Contato sai por WhatsApp e e-mail, que não
precisam de servidor. Isso permite publicar como *Static Site* no Render, que
é gratuito, não hiberna e responde em milissegundos — ao contrário do
`saas-template-web`, que é um Web Service e no plano free demora cerca de um
minuto para acordar. Numa página de vendas essa diferença decide a visita.

## Rodar local

```bash
yarn install
yarn dev        # http://localhost:3010
```

## Gerar o site

```bash
yarn build      # escreve ./out com HTML, CSS, JS e imagens
```

`next.config.mjs` usa `output: "export"`, então o build produz arquivos
estáticos puros. Não existe servidor Node em produção.

## Publicar no Render

New → **Static Site** (não Web Service) → conecte o repositório:

| Campo             | Valor           |
| ----------------- | --------------- |
| Branch            | `main`          |
| Root Directory    | *(vazio)*       |
| Build Command     | `yarn build`    |
| Publish Directory | `out`           |

Static Sites do Render não têm limite de horas nem hibernação, e incluem
100 GB de banda por mês.

## Onde mexer no conteúdo

Todo o texto de negócio está separado do layout:

- [`src/data/servicos.ts`](src/data/servicos.ts) — pacotes, preços, prazos,
  entregáveis e limites de escopo, mais as etapas do processo.
- [`src/data/produto.ts`](src/data/produto.ts) — o sistema SaaS, seus números,
  módulos, planos, a stack e os canais de contato.

Para criar um pacote novo ou mudar um preço, edite só o `.ts` — o layout se
adapta sozinho.

## Antes de publicar

Três valores são placeholder e precisam virar reais:

1. `PRODUTO.url` e `PRODUTO.urlLabel` em `produto.ts` — hoje apontam para um
   endereço fictício do sistema.
2. `CONTATO.whatsapp` e `CONTATO.whatsappLabel` — número de exemplo.
3. `CONTATO.email` — endereço de exemplo.

Os números do sistema (10 módulos, 60+ telas, 28 entidades, planos de
R$ 79/99/199) vieram do código do próprio SaaS. Se o produto mudar, atualize
`produto.ts` em vez de deixar o texto desatualizado.

## Stack

Next.js com export estático, React, TypeScript e Tailwind CSS. A paleta
(preto `#0A0A0A` e amarelo neon `#FFFF00`) está em `tailwind.config.ts` e vem
da identidade da marca.
