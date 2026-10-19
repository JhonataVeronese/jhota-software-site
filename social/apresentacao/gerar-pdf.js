// Gera os PDFs da apresentacao: node gerar-pdf.js [escuro|claro|escuro-celular|claro-celular]
// Sem argumento, gera todas as versoes. Precisa do Chrome instalado.
// As versoes de celular usam o mesmo HTML do tema com mobile.css aplicado por cima.
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { execFileSync } = require('child_process');

const dir = __dirname;
const b64 = (f) => 'data:image/png;base64,' + fs.readFileSync(path.join(dir, 'marca', f)).toString('base64');

const VERSOES = {
  escuro: {
    src: 'apresentacao.src.html',
    out: 'Jhota-Software-Apresentacao.pdf',
    imgs: { HERO: 'hero-t.png', HORIZONTAL: 'horizontal-t.png', BADGE: 'badge-neon-t.png' }
  },
  claro: {
    src: 'apresentacao-claro.src.html',
    out: 'Jhota-Software-Apresentacao-Claro.pdf',
    imgs: { HERO: 'hero-t.png', HORIZONTAL: 'horizontal-dark-t.png' }
  }
};
VERSOES['escuro-celular'] = { ...VERSOES.escuro, out: 'Jhota-Software-Apresentacao-Celular.pdf', mobile: true };
VERSOES['claro-celular'] = { ...VERSOES.claro, out: 'Jhota-Software-Apresentacao-Claro-Celular.pdf', mobile: true };

const chrome = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
].find(fs.existsSync);
if (!chrome) throw new Error('Chrome nao encontrado — ajuste o caminho em gerar-pdf.js');

const alvo = process.argv[2];
const lista = alvo ? [alvo] : Object.keys(VERSOES);

for (const nome of lista) {
  const v = VERSOES[nome];
  if (!v) throw new Error('Versao desconhecida: ' + nome + ' (use ' + Object.keys(VERSOES).join(', ') + ')');

  let html = fs.readFileSync(path.join(dir, v.src), 'utf8');
  for (const [token, arquivo] of Object.entries(v.imgs)) {
    html = html.split('{{' + token + '}}').join(b64(arquivo));
  }

  if (v.mobile) {
    const css = fs.readFileSync(path.join(dir, 'mobile.css'), 'utf8');
    html = html.replace('</style>', css + '\n</style>');
  }

  const tmp = path.join(dir, '.build-' + nome + '.html');
  fs.writeFileSync(tmp, html);

  const out = path.join(dir, '..', v.out);
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=25000',
    '--print-to-pdf=' + out,
    pathToFileURL(tmp).href
  ], { stdio: 'inherit' });

  fs.unlinkSync(tmp);
  console.log('[' + nome + '] gerado em ' + out);
}
