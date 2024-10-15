// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  
  srcDir: './src/ui',
  outDir: './dist-astro',
  base: '/',
  build: {
    format: 'file', 
  },
     
  integrations: [tailwind(), relativeLinks()],
  

  
});