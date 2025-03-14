// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/fernandofarfan-tienda-de-plantas/", // Asegúrate de que esta sea la URL correcta en GitHub Pages
  plugins: [react()],
});
