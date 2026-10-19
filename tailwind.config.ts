import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  // Inclui .ts de proposito: os dados dos servicos vivem em src/data/*.ts e
  // carregam nomes de classe. Sem isso o Tailwind os descartaria em silencio.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#FFFF00",
        "neon-dim": "#E6E600",
        ink: "#0A0A0A",
        "ink-2": "#0E0E0E",
        "ink-3": "#141414",
        "ink-4": "#171717",
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        display: ['"Anton"', ...defaultTheme.fontFamily.sans],
        cond: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
