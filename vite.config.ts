/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  plugins: [],
  optimizeDeps: {},
  server: {
    open: true,
    proxy: {
      '/assets': { target: `http://localhost:${process.env.PORT || 8081}` },
      '/game-test': `http://localhost:${process.env.PORT || 8081}`,
      '/socket.io': {
        target: `ws://localhost:${process.env.PORT || 8081}`,
        ws: true
      }
    },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    },
    target: 'esnext',
    minify: true,
    outDir: '../dist',
    emptyOutDir: true,
    modulePreload: {
      polyfill: false
    }
  }
});
