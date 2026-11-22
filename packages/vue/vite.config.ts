import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'

const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    dts({
      bundleTypes: true,
      insertTypesEntry: true,
      entryRoot: './src',
      tsconfigPath: './tsconfig.build.json',
      clearPureImport: false,
    }),
  ],
  build: {
    lib: {
      entry: here('./src/index.ts'),
      formats: ['es'],
      fileName: () => 'vgui.js',
    },
    rolldownOptions: {
      external: ['vue', 'reka-ui'],
    },
  },
})
