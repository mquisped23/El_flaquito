// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.elflaquito.com',
  output: 'static',
  build: {
    // Genera /index.html en la raíz (igual que el sitio actual)
    format: 'file',
  },
});
