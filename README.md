# VGUI

VGUI 2 inspired CSS and Vue 3 controls, with olive green and slate gray themes.

```sh
pnpm install
pnpm dev
pnpm lint
pnpm -r typecheck
pnpm -r build
pnpm --filter playground preview
```

Requires Node 22.13+ (Node 24 recommended) and pnpm 10.32.1. The recursive build creates the Vue ESM library, TypeScript declarations, and a standalone playground in `packages/playground/dist`.

ESLint is configured at the workspace root with `@antfu/eslint-config`. Run `pnpm lint` to check code and formatting, or `pnpm lint:fix` to apply fixes. The config covers Vue, TypeScript, JSON, YAML, and Markdown, with external formatters for CSS and HTML. It uses single quotes, no semicolons, trailing commas, and blank lines after imports, before function declarations, and between Vue SFC blocks. Build output, temporary reference files, the pnpm store, and the generated lockfile are excluded.

The Vue 3 playground is the private `playground` workspace package in `packages/playground`. Run it directly with `pnpm --filter playground dev`, `pnpm --filter playground build`, or `pnpm --filter playground preview`. It loads the Vue library source directly for live component updates. Playground layouts use Tailwind CSS through its Vite plugin. `packages/playground/src/style.css` omits Preflight, maps color utilities to the VGUI theme variables, and defines the `narrow:` variant at 700px. Tailwind is a playground development dependency; the CSS and Vue libraries remain independent of it.

- [CSS usage](packages/vgui/README.md)
- [Vue API](packages/vue/README.md)
- [Sources and browser support](docs/references.md)
- [Manual review checklist](docs/manual-review.md)

## Consumer example

```vue
<script setup lang="ts">
import { UiSelect, UiThemeProvider } from '@vgui/vue'
import { ref } from 'vue'
import '@vgui/css'

const value = ref('internet')
const options = [
  { label: 'Internet', value: 'internet' },
  { label: 'LAN', value: 'lan' },
]
</script>

<template>
  <UiThemeProvider theme="olive">
    <UiSelect
      v-model="value"
      :options="options"
      label="Server source"
    />
  </UiThemeProvider>
</template>
```

CSS is an explicit import. All complex controls expose one wrapper; Reka parts are internal. The packages are ready for local packing with `pnpm --filter @vgui/css pack` and `pnpm --filter @vgui/vue pack` after building. No publishing is configured.
