import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',    // WICHTIG: Erzeugt den 'out' Ordner
  images: {
    unoptimized: true, // Notwendig, da Hostinger Webhosting keine Server-Seite Image-Optimierung hat
  },
};

export default nextConfig;https://github.com/nx808/pageltec/blob/main/next.config.ts
