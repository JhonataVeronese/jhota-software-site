import Image from "next/image";

import { Check, Externo, Seta } from "@/components/icones";
import { CONTATO, MOSTRAR_PRODUTO, PRODUTO, STACK } from "@/data/produto";
import { PROCESSO, SERVICOS } from "@/data/servicos";

const zap = `https://wa.me/${CONTATO.whatsapp}`;

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(255,255,0,0.10),transparent_42%),radial-gradient(circle_at_88%_30%,rgba(255,255,0,0.05),transparent_38%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:46px_46px]"
        />

        <div className="mx-auto grid max-w-content items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          {/* min-w-0 defensivo: item de grid tem min-width:auto e nao encolhe
              abaixo do min-content do filho. Hoje nao ha overflow (medido:
              375px de viewport, 375px de scrollWidth), mas basta um filho com
              largura intrinseca maior para a trilha estourar. */}
          <div className="min-w-0">
            <span className="rotulo">Tecnologia sob medida para o seu negócio</span>
            <h1 className="mt-5 font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Do dashboard ao
              <br />
              <span className="text-neon">agente de IA</span>, feito para
              a sua operação
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              BI, automações, chatbot no WhatsApp, agentes de IA, sites,
              sistemas web, aplicativos e integrações. Cada projeto com escopo
              e prazo definidos depois de entender a sua necessidade.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#servicos" className="botao-neon">
                Ver os serviços
                <Seta />
              </a>
              {MOSTRAR_PRODUTO ? (
                <a href="#produto" className="botao-linha">
                  Conhecer o sistema pronto
                </a>
              ) : (
                <a href={zap} target="_blank" rel="noopener noreferrer" className="botao-linha">
                  Falar no WhatsApp
                </a>
              )}
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
              {[
                ["Serviços", String(SERVICOS.length)],
                ["Projetos", "Sob medida"],
                ["Atendimento", "Direto comigo"],
              ].map(([rotulo, valor]) => (
                <div key={rotulo}>
                  <dt className="font-cond text-xs uppercase tracking-[0.2em] text-white/45">
                    {rotulo}
                  </dt>
                  <dd className="mt-1 font-display text-2xl">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full bg-neon/10 blur-3xl"
            />
            <Image
              src="/images/jhota-hero.png"
              alt="Jhota Software"
              width={709}
              height={671}
              priority
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ---------------- PRODUTO PRONTO ---------------- */}
      {MOSTRAR_PRODUTO ? (
      <section id="produto" className="border-b border-white/10 bg-ink-2 py-20 sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="min-w-0">
              <span className="rotulo">Produto pronto</span>
              <h2 className="titulo-secao mt-4">
                {PRODUTO.nome}
                <span className="mt-2 block font-sans text-lg font-light normal-case tracking-normal text-white/60">
                  {PRODUTO.tagline}
                </span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                {PRODUTO.descricao}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2">
                {PRODUTO.numeros.map((n) => (
                  <div key={n.rotulo} className="border-l-4 border-neon pl-4">
                    <p className="font-display text-3xl leading-none">{n.valor}</p>
                    <p className="mt-1 font-cond text-xs uppercase tracking-[0.18em] text-white/45">
                      {n.rotulo}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PRODUTO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao-neon"
                >
                  Abrir o sistema
                  <Externo />
                </a>
                <a href={zap} target="_blank" rel="noopener noreferrer" className="botao-linha">
                  Quero uma demonstração
                </a>
              </div>
              <p className="mt-3 font-cond text-sm tracking-wide text-white/40">
                {PRODUTO.urlLabel}
              </p>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              {PRODUTO.destaques.map((d) => (
                <article key={d.titulo} className="cartao p-5 sm:p-6">
                  <h3 className="font-cond text-lg font-bold uppercase tracking-wide">
                    {d.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{d.texto}</p>
                </article>
              ))}

              <div className="cartao border-neon/40 bg-[#1B1B10] p-5 sm:col-span-2 sm:p-6">
                <p className="font-cond text-sm uppercase tracking-[0.18em] text-neon">
                  Os 10 módulos
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {PRODUTO.modulos.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/75"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cartao p-5 sm:col-span-2 sm:p-6">
                <p className="font-cond text-sm uppercase tracking-[0.18em] text-white/45">
                  Planos de assinatura
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {PRODUTO.planos.map((p) => (
                    <div
                      key={p.nome}
                      className="rounded-xl border border-white/10 bg-ink-4 px-4 py-3"
                    >
                      <p className="font-cond text-sm uppercase tracking-wide text-white/55">
                        {p.nome}
                      </p>
                      <p className="mt-1 font-display text-2xl text-neon">
                        {p.preco}
                        <span className="ml-1 font-sans text-xs font-normal text-white/45">
                          /mês
                        </span>
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        {p.usuarios} · {p.modulos}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ) : null}

      {/* ---------------- SERVIÇOS ---------------- */}
      <section id="servicos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="rotulo">Serviços</span>
            <h2 className="titulo-secao mt-4">
              O que eu <span className="text-neon">construo para você</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/65">
              Cada serviço é orçado depois de uma conversa rápida, de acordo com
              o tamanho real do projeto. Você recebe escopo, prazo e valor antes
              de começar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICOS.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className={`cartao flex flex-col p-6 sm:p-7 ${
                  p.destaque
                    ? "border-neon/55 bg-[#1B1B10] shadow-2xl shadow-neon/5"
                    : "hover:border-neon/35"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-lg bg-neon px-2.5 py-1 font-display text-base leading-none text-ink">
                    {p.numero}
                  </span>
                  {p.destaque ? (
                    <span className="font-cond text-xs uppercase tracking-[0.2em] text-neon">
                      Mais pedido
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 font-cond text-2xl font-bold uppercase leading-tight tracking-wide">
                  {p.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">{p.resumo}</p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.entregaveis.map((e) => (
                    <li key={e} className="flex gap-2.5 text-sm leading-6 text-white/70">
                      <Check />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${zap}?text=${encodeURIComponent(
                    `Olá! Tenho interesse em "${p.titulo}".`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-neon px-5 py-3 font-bold text-ink transition hover:bg-neon-dim"
                >
                  Solicitar orçamento
                  <Seta className="size-4" />
                </a>
              </article>
            ))}

            {/* Card de customizacao, fecha a grade de 9 */}
            <article className="cartao flex flex-col justify-center border-dashed p-6 sm:p-7">
              <h3 className="font-cond text-2xl font-bold uppercase leading-tight tracking-wide">
                Precisa de algo diferente?
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Se a sua necessidade não aparece aqui, ou junta mais de um
                serviço, o projeto é montado sob medida, depois de entender o
                contexto.
              </p>
              <a
                href={zap}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-neon transition hover:gap-3"
              >
                Conversar sobre o projeto
                <Seta className="size-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESSO ---------------- */}
      <section id="processo" className="border-y border-white/10 bg-ink-2 py-20 sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="rotulo">Como funciona</span>
            <h2 className="titulo-secao mt-4">Do primeiro contato à entrega</h2>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESSO.map((etapa) => (
              <li key={etapa.passo} className="cartao p-6">
                <span className="font-display text-4xl text-neon">
                  {etapa.passo}
                </span>
                <h3 className="mt-4 font-cond text-lg font-bold uppercase tracking-wide">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {etapa.texto}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <p className="font-cond text-sm uppercase tracking-[0.2em] text-white/45">
              Tecnologias
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {STACK.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/12 bg-ink-3 px-4 py-1.5 text-sm text-white/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-neon/35 bg-ink-3 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,0,0.14),transparent_55%)] px-6 py-14 text-center sm:px-12 sm:py-16">
          <span className="rotulo">Vamos resolver</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl uppercase leading-tight sm:text-4xl">
            Conte o que você precisa. Eu monto a proposta.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/65">
            Resposta com escopo, prazo e valor, sem compromisso.
          </p>
          <p className="mx-auto mt-4 font-cond text-lg tracking-wide text-white/80">
            WhatsApp {CONTATO.whatsappLabel} · {CONTATO.email}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={zap} target="_blank" rel="noopener noreferrer" className="botao-neon">
              Chamar no WhatsApp
              <Seta />
            </a>
            <a href={`mailto:${CONTATO.email}`} className="botao-linha">
              Mandar e-mail
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
