# VGUI

This repo was created to show respect to classic Valve Graphic User Interface (VGUI) which was used for many years in projects such as Steam, Half-Life 1-2 and CS 1.6. Rather than a detailed reconstruction, it is an attempt to recreate the nostalgic look. I have tried my best to analyze many sources and gather all the information in one place.

I have divided this repo into several packages that can be used together or separately to create your own retro-styled interfaces.

- `vgui` — styles, colors, fonts etc. without any framework binding.
- `vue` — ready-to-use components based on `vgui` package and [Reka UI](https://reka-ui.com/) library, powered by [Vue](https://vuejs.org/) framework.
- `playground` — a demo for showing all controls and its states based on `vgui` and `vue` packages, powered by [Tailwind CSS](https://tailwindcss.com/).

## Installation

VGUI styles without any framework binding

```sh
npm install @alexovn/vgui
```

Ready-to-use components based on `vgui` package and [Reka UI](https://reka-ui.com/) library, powered by [Vue](https://vuejs.org/) framework

```sh
npm install @alexovn/vgui-vue @alexovn/vgui
```

## Usage Example

```vue
<script setup lang="ts">
import { UiSelect, UiThemeProvider } from '@alexovn/vgui-vue'
import { ref } from 'vue'
import '@alexovn/vgui'

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

## Development

Use Node `^22.22.2 || >=24.15.0` and pnpm `12.21.0`. Run `pnpm install` and `pnpm dev` to open the playground.

## Sources

This repo wouldn't have been possible without different sources that I used during development. So I want to say BIG THANKS to their authors.

- [ValveSoftware/source-sdk-2013](https://github.com/ValveSoftware/source-sdk-2013/)
- [ungstein/OG-Steam](https://github.com/ungstein/OG-Steam/)
- [AlpyneDreams/vgui.css](https://github.com/AlpyneDreams/vgui.css/)
- [leonill007/vgui.css](https://github.com/leonill007/vgui.css/)
- [ekmas/cs16.css](https://github.com/ekmas/cs16.css/)
- [gaspar-of-time/Steamed](https://github.com/gaspar-of-time/Steamed/)

## License

Made with ❤️

Published under the [MIT license](LICENSE).
