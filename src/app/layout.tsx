import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CONTATO, MOSTRAR_PRODUTO } from "@/data/produto";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jhota Software — Dashboards, automações, IA e sistemas sob medida",
  description:
    "Dashboards e BI, automação de processos, chatbot com WhatsApp, agentes de IA, sites, sistemas web, aplicativos mobile e integrações entre sistemas.",
  openGraph: {
    title: "Jhota Software",
    description:
      "Dashboards, automações, chatbot com WhatsApp, agentes de IA, sites, sistemas, apps e integrações, feitos sob medida.",
    type: "website",
  },
};

const NAV = [
  ...(MOSTRAR_PRODUTO ? [{ href: "#produto", label: "Sistema pronto" }] : []),
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como funciona" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8">
            {/* Assinatura horizontal em vez do badge circular: a 40px o badge
                vira um borrao, porque carrega o nome dentro do circulo.
                A horizontal ja traz o nome legivel e dispensa texto ao lado. */}
            <Link href="/" className="flex items-center" aria-label="Jhota Software">
              <Image
                src="/images/jhota-horizontal-neon.png"
                alt="Jhota Software"
                width={495}
                height={188}
                priority
                className="h-11 w-auto shrink-0 object-contain sm:h-12"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-neon"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={`https://wa.me/${CONTATO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap rounded-lg bg-neon px-3 py-2 text-sm font-bold text-ink transition hover:bg-neon-dim sm:px-4"
            >
              Falar comigo
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 bg-[#070707]">
          <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <Image
                src="/images/jhota-horizontal-neon.png"
                alt="Jhota Software"
                width={495}
                height={188}
                className="h-10 w-auto object-contain"
              />
              <p className="mt-2 text-sm text-white/50">
                Dashboards, automações, IA e sistemas sob medida.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              <a
                href={`https://wa.me/${CONTATO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-neon"
              >
                WhatsApp {CONTATO.whatsappLabel}
              </a>
              <a
                href={`mailto:${CONTATO.email}`}
                className="transition hover:text-neon"
              >
                {CONTATO.email}
              </a>
              <a
                href={CONTATO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-neon"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
