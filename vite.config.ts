import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-culture/',
  plugins: [
    vue(),
    checker({
      vueTsc: true,
      eslint: { lintCommand: 'eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore' },
      stylelint: { lintCommand: 'stylelint ./src/**/*.{css,vue}' }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})