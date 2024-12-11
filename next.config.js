/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // Configuration pour les polices personnalisées
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "public/fonts/[hash].[ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;

