/** @type {import("next").NextConfig} */
const nextConfig = {
  // Gera HTML/CSS/JS puros em ./out — o que o Render publica como Static Site.
  output: "export",
  // Sem servidor nao ha otimizador de imagem em runtime.
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
