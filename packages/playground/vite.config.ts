import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vgui/vue': here('../vue/lib/index.ts'),
    },
  },
  build: {
    rolldownOptions: {
      input: [here('./index.html'), here('./css-only.html')],
    },
  },
})
