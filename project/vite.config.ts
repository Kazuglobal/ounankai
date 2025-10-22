import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        // ローカルAPIサーバーへプロキシ（HTTP 431エラー回避）
        target: process.env.VITE_API_URL || 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('プロキシエラー:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('プロキシリクエスト:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('プロキシレスポンス:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
});
