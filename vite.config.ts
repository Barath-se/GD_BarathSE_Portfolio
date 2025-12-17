import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GD-Portfolio/', // 👈 VERY IMPORTANT (repo name)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

