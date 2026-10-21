import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the build works on GitHub Pages subpaths,
  // Netlify, Cloudflare Pages, or when uploaded as a zip.
  base: './',
  server: { port: 5173, open: false },
  build: { target: 'esnext' },
});
