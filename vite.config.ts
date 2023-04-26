import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'

import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import checker from "vite-plugin-checker";

export default defineConfig({
  base: '/e-culture/',
  plugins: [
    vue(),
    checker({
      vueTsc: true,
      eslint: { lintCommand: 'eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore' },
      stylelint: { lintCommand: 'stylelint ./src/**/*.{css,vue}' }
    }),
    {
      name: 'Create 404.html',
      closeBundle: async () => {
        fs.symlinkSync("index.html", "dist/404.html")
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
