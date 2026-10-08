import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backendTarget = env.VITE_BACKEND_URL || 
    (env.VITE_API_URL ? env.VITE_API_URL.replace(/\/api\/?$/, '') : 'http://127.0.0.1:8000')
  const devPort = parseInt(env.PORT || env.VITE_PORT || '5173', 10)

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      port: devPort,
      host: true,
      proxy: {
        '/api': {
          target: backendTarget,
          changeOrigin: true,
        },
      },
    },
    preview: {
      port: devPort || 4173,
      host: true,
    },
  }
})

