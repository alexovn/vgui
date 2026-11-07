import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  root: here('./src'),
  plugins: [
    vue(),
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
