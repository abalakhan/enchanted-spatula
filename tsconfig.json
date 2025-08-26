import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from `.env` files
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Optionally expose non-prefixed env vars (not required if you stick to VITE_* in client code)
      __APP_ENV__: env.APP_ENV,
    },
  };
});