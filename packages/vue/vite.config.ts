import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  root: mode === 'playground' ? here('./playground') : here('.'),
  build:
    mode === 'playground'
      ? {
          outDir: here('./dist-playground'),
          emptyOutDir: true,
          rolldownOptions: {
            input: [
              here('./playground/index.html'),
              here('./playground/css-only.html'),
            ],
          },
        }
      : {
          lib: {
            entry: here('./lib/index.ts'),
            formats: ['es'],
            fileName: () => 'vgui.js',
          },
          rolldownOptions: { external: ['vue', 'reka-ui'] },
        },
}))
