import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
         calculator: resolve(__dirname, 'Calculator/calculator.html'),
         swm: resolve(__dirname, 'ShazamWorldMap/SWM.html'),
      },
    },
  },
  base: '/LouisCoutel.github.io/',
  assetsInclude: ["**/*.png"],
})
