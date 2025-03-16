import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // Cambia esto a "./" si trabajas localmente
  plugins: [react()],
});
