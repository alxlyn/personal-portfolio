import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        tanish: resolve(import.meta.dirname, 'tanish.html'),
        arzan: resolve(import.meta.dirname, 'arzan.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
});
