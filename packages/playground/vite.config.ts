import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  root: here('./src'),
  publicDir: here('./public'),
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@vgui/vue': here('../vue/src/index.ts'),
    },
  },
  build: {
    outDir: here('./dist'),
    emptyOutDir: true,
  },
})
