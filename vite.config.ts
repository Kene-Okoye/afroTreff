import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/afroTreff/',
  plugins: [react()],
  resolve: {
    /*
     * Maps the @ path alias to the src directory using
     * the path.resolve method to get the full file path
     */
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
