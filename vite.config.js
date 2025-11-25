import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Se você quiser publicar no GitHub Pages, pode adicionar a base:
  // base: '/NOME_DO_REPOSITORIO/',
});