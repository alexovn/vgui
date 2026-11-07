# VGUI

VGUI 2 inspired CSS and Vue 3 controls, with olive green and slate gray themes.

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm preview
```

Requires Node 22.12+ (Node 24 recommended) and pnpm 10.32.1. The root build creates the Vue ESM library, TypeScript declarations, and a standalone playground in `packages/playground/dist`.

The Vue 3 playground is the private `playground` workspace package in `packages/playground`. Run it directly with `pnpm --filter playground dev`, `pnpm --filter playground build`, or `pnpm --filter playground preview`. It loads the Vue library source directly for live component updates. The CSS-only demo is available at `/css-only.html`.

- [CSS usage](packages/vgui/README.md)
- [Vue API](packages/vue/README.md)
- [Sources and browser support](docs/references.md)
- [Manual review checklist](docs/manual-review.md)

## Consumer example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import '@vgui/css'
import { UiThemeProvider, UiSelect } from '@vgui/vue'
const value = ref('internet')
const options = [
  { label: 'Internet', value: 'internet' },
  { label: 'LAN', value: 'lan' },
]
</script>

<template>
  <UiThemeProvider theme="olive">
    <UiSelect v-model="value" :options="options" label="Server source" />
  </UiThemeProvider>
</template>
```

CSS is an explicit import. All complex controls expose one wrapper; Reka parts are internal. The packages are ready for local packing with `pnpm --filter @vgui/css pack` and `pnpm --filter @vgui/vue pack` after building. No publishing is configured.
