import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: here('./lib/index.ts'),
      formats: ['es'],
      fileName: () => 'vgui.js',
    },
    rolldownOptions: { external: ['vue', 'reka-ui'] },
  },
})
