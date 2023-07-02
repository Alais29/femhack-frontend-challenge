import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      'process.env.API_URL': JSON.stringify(env.API_URL),
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setupTest.js'],
      testMatch: ['./tests/**/*.test.jsx'],
    },
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  })
}
