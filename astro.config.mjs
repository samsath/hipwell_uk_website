// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import aws from 'astro-sst';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  adapter: aws({
    responseMode: 'buffer'
  }),
  integrations: [
    sitemap(),
    react(),
    tailwindcss({
      globalStyle: './src/styles/global.css'
    })
  ],
  output: 'static',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        host: 'images.prismic.io'
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['path-to-regexp']
    }
  }
});
