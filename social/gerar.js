/**
 * Gera as artes de Instagram da Jhota Software.
 *
 *   node gerar.js              -> gera tudo
 *   node gerar.js carrossel    -> so o carrossel
 *   node gerar.js posts        -> so os posts individuais
 *   node gerar.js stories      -> so os stories
 *
 * O conteudo vem de jhota-site/src/data/servicos.ts, que e a mesma fonte do
 * site. Assim nao existe texto de servico duplicado em dois lugares.
 *
 * PRECO NUNCA ENTRA NA ARTE. O campo e apagado logo apos a leitura (ver
 * carregarPacotes), entao nao basta esquecer de usar — ele deixa de existir.
 */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { execFileSync } = require('child_process');

const DIR = __dirname;
const FONTE = path.join(DIR, '..', 'jhota-site', 'src', 'data', 'servicos.ts');
const SAIDA = path.join(DIR, 'saida');

const NEON = '#FFFF00';

// ---------------------------------------------------------------- dados

function carregarPacotes() {
  const src = fs.readFileSync(FONTE, 'utf8');
  const inicio = src.indexOf('export const PACOTES');
  if (inicio < 0) throw new Error('PACOTES nao encontrado em ' + FONTE);

  const abre = src.indexOf('[', inicio);
  const fecha = src.indexOf('\n];', abre);
  if (abre < 0 || fecha < 0) throw new Error('nao consegui delimitar o array PACOTES');

  const literal = src.slice(abre, fecha + 2);
  let pacotes;
  try {
    pacotes = new Function('return ' + literal)();
  } catch (e) {
    throw new Error('falha ao interpretar PACOTES: ' + e.message);
  }
  if (!Array.isArray(pacotes) || pacotes.length === 0) {
    throw new Error('PACOTES vazio ou invalido');
  }

  // Remove o preco da memoria. A arte nao pode exibi-lo em hipotese alguma.
  return pacotes.map((p) => {
    const { preco, ...semPreco } = p;
    return semPreco;
  });
}

function imgB64(arquivo) {
  const p = path.join(DIR, 'marca', arquivo);
  return 'data:image/png;base64,' + fs.readFileSync(p).toString('base64');
}

// ---------------------------------------------------------------- estilo

const CSS = (larg, alt, padBaixo = 0) => `
  @page { size: ${larg}px ${alt}px; margin: 0; }
  *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
  html,body { background:#0A0A0A; }
  body {
    font-family:'Inter',"Segoe UI",Arial,sans-serif; color:#fff;
    -webkit-print-color-adjust:exact; print-color-adjust:exact;
  }
  .arte {
    position:relative; width:${larg}px; height:${alt}px; overflow:hidden;
    background:#0A0A0A; display:flex; flex-direction:column;
    padding:${Math.round(larg * 0.075)}px;
    padding-bottom:${Math.round(larg * 0.075) + padBaixo}px;
  }
  .arte::before{
    content:""; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(58% 42% at 88% 4%, rgba(255,255,0,.13), transparent 66%),
      radial-gradient(52% 40% at 4% 98%, rgba(255,255,255,.05), transparent 70%);
  }
  .arte::after{
    content:""; position:absolute; inset:0; pointer-events:none; opacity:.5;
    background:
      linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px);
    background-size:64px 64px;
  }
  .arte > * { position:relative; z-index:1; }

  .topo { display:flex; align-items:center; gap:14px; }
  /* O badge ja traz o nome dentro dele, entao dispensa texto ao lado.
     A margem negativa compensa o brilho transparente ao redor do anel. */
  .topo img { width:176px; height:176px; object-fit:contain; margin:-26px 0 -26px -26px; }

  .corpo { flex:1; display:flex; flex-direction:column; justify-content:center; }

  .numero {
    display:inline-block; background:${NEON}; color:#0A0A0A; border-radius:12px;
    font-family:'Anton',sans-serif; font-size:34px; line-height:1;
    padding:13px 16px 10px; align-self:flex-start;
  }
  .titulo {
    font-family:'Anton',"Arial Black",sans-serif; text-transform:uppercase;
    line-height:1.16; letter-spacing:.005em; margin-top:22px; padding-top:6px;
  }
  .prazo {
    display:inline-flex; align-self:flex-start; margin-top:20px;
    border:1px solid rgba(255,255,0,.45); border-radius:999px;
    font-family:'Barlow Condensed',sans-serif; font-size:21px; font-weight:600;
    letter-spacing:.14em; text-transform:uppercase; color:${NEON};
    padding:8px 18px 6px;
  }
  ul.itens { list-style:none; margin-top:34px; }
  ul.itens li {
    position:relative; padding-left:42px; margin-bottom:20px;
    font-size:27px; line-height:1.42; font-weight:300; color:rgba(255,255,255,.84);
  }
  ul.itens li::before{
    content:""; position:absolute; left:4px; top:9px; width:19px; height:11px;
    border-left:4px solid ${NEON}; border-bottom:4px solid ${NEON};
    transform:rotate(-45deg);
  }
  .limite {
    margin-top:38px; border-left:5px solid ${NEON}; background:rgba(255,255,255,.045);
    border-radius:0 12px 12px 0; padding:19px 22px;
    font-size:22px; line-height:1.45; color:rgba(255,255,255,.66); font-weight:300;
  }
  .limite b { color:#fff; font-weight:600; }

  .rodape {
    display:flex; align-items:center; justify-content:space-between;
    border-top:1px solid rgba(255,255,255,.1); padding-top:22px; margin-top:28px;
    font-family:'Barlow Condensed',sans-serif; font-size:20px;
    letter-spacing:.2em; text-transform:uppercase; color:rgba(255,255,255,.4);
  }
  .rodape .destaque { color:${NEON}; }

  /* ---- capa ---- */
  .capa { justify-content:center; text-align:left; }
  .capa .chamada {
    font-family:'Anton',sans-serif; text-transform:uppercase; line-height:1.02;
  }
  .capa .chamada em { font-style:normal; color:${NEON}; }
  .capa .sub {
    margin-top:30px; font-size:30px; line-height:1.5; font-weight:300;
    color:rgba(255,255,255,.7);
  }
  .regua { width:170px; height:7px; background:${NEON}; margin:34px 0; }
  .arraste {
    margin-top:44px; display:inline-flex; align-items:center; gap:12px;
    font-family:'Barlow Condensed',sans-serif; font-size:24px; font-weight:600;
    letter-spacing:.2em; text-transform:uppercase; color:${NEON};
  }
  .lista-capa { list-style:none; margin-top:36px; }
  .lista-capa li {
    display:flex; align-items:baseline; gap:16px; padding:13px 0;
    border-bottom:1px solid rgba(255,255,255,.09);
    font-size:26px; font-weight:300; color:rgba(255,255,255,.8);
  }
  .lista-capa li:last-child { border-bottom:none; }
  .lista-capa .n {
    font-family:'Anton',sans-serif; font-size:22px; color:${NEON}; min-width:38px;
  }

  /* ---- apresentacao (primeiro contato com a marca) ---- */
  .intro .intro-marca { display:flex; justify-content:center; }
  .intro .intro-marca img { width:300px; height:300px; object-fit:contain; margin:-46px 0 -30px; }
  .rotulo-intro {
    display:inline-block; align-self:flex-start; background:${NEON}; color:#0A0A0A;
    font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:22px;
    letter-spacing:.2em; text-transform:uppercase; padding:9px 18px 6px; border-radius:6px;
  }
  .intro-titulo {
    font-family:'Anton',sans-serif; text-transform:uppercase; line-height:1.14;
    margin-top:24px; padding-top:6px;
  }
  .intro-titulo em { font-style:normal; color:${NEON}; }
  .intro-sub {
    margin-top:22px; font-size:27px; line-height:1.5; font-weight:300;
    color:rgba(255,255,255,.7);
  }
  .intro-grade {
    margin-top:34px; display:grid; grid-template-columns:1fr 1fr; gap:12px 20px;
  }
  .intro-item {
    display:flex; align-items:baseline; gap:13px; padding:12px 0;
    border-bottom:1px solid rgba(255,255,255,.09);
    font-size:23px; font-weight:300; color:rgba(255,255,255,.82); line-height:1.3;
  }
  .intro-item .n { font-family:'Anton',sans-serif; font-size:20px; color:${NEON}; }
  .intro-prova {
    margin-top:32px; border:1.5px solid rgba(255,255,0,.4); background:rgba(255,255,0,.05);
    border-radius:16px; padding:22px 26px;
  }
  .intro-prova-t {
    font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:23px;
    letter-spacing:.1em; text-transform:uppercase; color:${NEON};
  }
  .intro-prova-d {
    margin-top:9px; font-size:23px; line-height:1.45; font-weight:300;
    color:rgba(255,255,255,.72);
  }

  /* ---- fechamento ---- */
  .fim { justify-content:center; text-align:center; align-items:center; }
  .fim img.marca { width:260px; margin-bottom:40px; }
  .fim h2 { font-family:'Anton',sans-serif; text-transform:uppercase; line-height:1.1; }
  .fim h2 em { font-style:normal; color:${NEON}; }
  .fim p { margin-top:26px; font-size:29px; line-height:1.5; font-weight:300; color:rgba(255,255,255,.72); }
  .fim .botao {
    margin-top:44px; display:inline-block; background:${NEON}; color:#0A0A0A;
    font-weight:800; font-size:28px; border-radius:14px; padding:20px 42px;
  }
`;

const CABECA = (larg, alt, padBaixo) => `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS(larg, alt, padBaixo)}</style></head><body>`;

const RODAPE_HTML = '</body></html>';

// ---------------------------------------------------------------- telas

function topo(marca) {
  return `<div class="topo"><img src="${marca}" alt="Jhota Software"></div>`;
}

function telaCapa(pacotes, marca, fmt) {
  return `<div class="arte capa">
  ${topo(marca)}
  <div class="corpo">
    <p class="chamada" style="font-size:${fmt.capa}px">Travou no<br><em>backend?</em></p>
    <div class="regua"></div>
    <p class="sub">Cinco serviços com escopo fechado e prazo definido. Você sabe o que recebe antes de começar.</p>
    <ul class="lista-capa">
      ${pacotes
        .map((p) => `<li><span class="n">${p.numero}</span><span>${p.titulo}</span></li>`)
        .join('\n      ')}
    </ul>
    <span class="arraste">Arraste para ver &rarr;</span>
  </div>
</div>`;
}

/**
 * Arte de apresentacao, para quem nunca ouviu falar da marca.
 * Responde em uma tela so: quem e, o que faz e por que confiar.
 * Nao cita valores — o preco continua sendo assunto de direct.
 */
function telaApresentacao(pacotes, marca, fmt) {
  return `<div class="arte intro">
  <div class="intro-marca"><img src="${marca}" alt="Jhota Software"></div>
  <div class="corpo">
    <span class="rotulo-intro">Desenvolvimento backend</span>
    <h1 class="intro-titulo" style="font-size:${fmt.introTitulo}px">
      Eu resolvo o que<br><em>trava o seu sistema</em>
    </h1>
    <p class="intro-sub">
      Bug em API, integração que não fecha, planilha que ninguém importa,
      endpoint que o front está esperando. Escopo e prazo definidos antes de
      começar — sem orçamento eterno.
    </p>

    <div class="intro-grade">
      ${pacotes
        .map(
          (p) =>
            `<div class="intro-item"><span class="n">${p.numero}</span><span>${p.titulo}</span></div>`,
        )
        .join('\n      ')}
    </div>

    <div class="intro-prova">
      <p class="intro-prova-t">Também tenho sistema próprio em produção</p>
      <p class="intro-prova-d">
        Plataforma de gestão multiempresa com 10 módulos — financeiro,
        comercial, estoque, documentos e atendimento.
      </p>
    </div>
  </div>
  <div class="rodape"><span>Escopo e prazo fechados</span><span class="destaque">Chama no direct</span></div>
</div>`;
}

function telaPacote(p, marca, fmt, opts = {}) {
  const totalItens = p.entregaveis.length;
  return `<div class="arte">
  ${topo(marca)}
  <div class="corpo">
    <span class="numero">${p.numero}</span>
    <h1 class="titulo" style="font-size:${fmt.tituloPacote(p.titulo)}px">${p.titulo}</h1>
    <span class="prazo">Prazo: ${p.prazo}</span>
    <ul class="itens">
      ${p.entregaveis
        .map((e) => `<li>${e}</li>`)
        .join('\n      ')}
    </ul>
    <div class="limite"><b>Limite:</b> ${p.limite}</div>
  </div>
  <div class="rodape"><span>${opts.rodapeEsq ?? 'Escopo e prazo fechados'}</span><span class="destaque">${
    opts.rodapeDir ?? `${totalItens} entregáveis`
  }</span></div>
</div>`;
}

function telaFim(marca, fmt) {
  return `<div class="arte fim">
  <img class="marca" src="${marca}" alt="">
  <h2 style="font-size:${fmt.fim}px">Me diz qual é<br>o <em>problema</em></h2>
  <p>Respondo com o pacote certo, o prazo<br>e o que está fora do escopo.</p>
  <span class="botao">Chama no direct</span>
</div>`;
}

// ---------------------------------------------------------------- render

function acharChrome() {
  const c = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  ].find(fs.existsSync);
  if (!c) throw new Error('Chrome nao encontrado — ajuste o caminho em gerar.js');
  return c;
}

function renderizar(chrome, html, destino, larg, alt) {
  const tmp = path.join(DIR, '.tmp.html');
  fs.writeFileSync(tmp, html);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--virtual-time-budget=20000',
      `--window-size=${larg},${alt}`,
      `--screenshot=${destino}`,
      pathToFileURL(tmp).href,
    ],
    { stdio: 'ignore' },
  );
  fs.unlinkSync(tmp);
}

// ---------------------------------------------------------------- main

const FORMATOS = {
  // Feed 4:5 — ocupa mais tela no celular que o quadrado.
  feed: {
    larg: 1080,
    alt: 1350,
    capa: 104,
    fim: 76,
    introTitulo: 62,
    tituloPacote: (t) => (t.length > 28 ? 66 : 78),
  },
  // Stories / Reels capa.
  stories: {
    larg: 1080,
    alt: 1920,
    // A barra de resposta do Instagram cobre o rodape da tela.
    padBaixo: 230,
    capa: 118,
    fim: 86,
    introTitulo: 72,
    tituloPacote: (t) => (t.length > 28 ? 74 : 88),
  },
};

function main() {
  const pacotes = carregarPacotes();
  const marca = imgB64('jhota-badge.png');
  const marcaNeon = imgB64('jhota-horizontal-neon.png');
  const chrome = acharChrome();
  const alvo = process.argv[2];

  // Trava de seguranca: se por algum motivo um preco aparecer no HTML, aborta.
  const temPreco = (html) => /R\$\s*\d/.test(html);

  const tarefas = [];

  if (!alvo || alvo === 'carrossel') {
    const f = FORMATOS.feed;
    tarefas.push(['carrossel/01-capa.png', telaCapa(pacotes, marca, f), f]);
    pacotes.forEach((p, i) => {
      tarefas.push([
        `carrossel/${String(i + 2).padStart(2, '0')}-${p.id}.png`,
        telaPacote(p, marca, f, { rodapeDir: `${i + 1} de ${pacotes.length}` }),
        f,
      ]);
    });
    tarefas.push([`carrossel/${String(pacotes.length + 2).padStart(2, "0")}-fim.png`, telaFim(marcaNeon, f), f]);
  }

  if (!alvo || alvo === 'posts') {
    const f = FORMATOS.feed;
    pacotes.forEach((p) => {
      tarefas.push([`posts/${p.id}.png`, telaPacote(p, marca, f), f]);
    });
  }

  if (!alvo || alvo === 'stories') {
    const f = FORMATOS.stories;
    tarefas.push(['stories/capa.png', telaCapa(pacotes, marca, f), f]);
    pacotes.forEach((p) => {
      tarefas.push([`stories/${p.id}.png`, telaPacote(p, marca, f), f]);
    });
  }

  if (!alvo || alvo === 'apresentacao') {
    tarefas.push(['posts/apresentacao.png', telaApresentacao(pacotes, marca, FORMATOS.feed), FORMATOS.feed]);
    tarefas.push(['stories/apresentacao.png', telaApresentacao(pacotes, marca, FORMATOS.stories), FORMATOS.stories]);
  }

  if (!tarefas.length) {
    throw new Error('alvo desconhecido: ' + alvo + ' (use carrossel, posts ou stories)');
  }

  for (const [rel, corpo, f] of tarefas) {
    const html = CABECA(f.larg, f.alt, f.padBaixo ?? 0) + corpo + RODAPE_HTML;
    if (temPreco(html)) {
      throw new Error('ABORTADO: valor monetario detectado na arte ' + rel);
    }
    const destino = path.join(SAIDA, rel);
    renderizar(chrome, html, destino, f.larg, f.alt);
    console.log('  ' + rel);
  }

  console.log('\n' + tarefas.length + ' arte(s) em ' + SAIDA);
}

main();
