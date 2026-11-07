<script setup lang="ts">
import type { UiTheme } from '@vgui/vue'
import { UiLabel, UiSelect } from '@vgui/vue'

const theme = defineModel<UiTheme>({ required: true })
const themes = [
  { label: 'Olive green', value: 'olive' },
  { label: 'Slate gray', value: 'slate' },
]

function setTheme(value: string) {
  if (value === 'olive' || value === 'slate') {
    theme.value = value
  }
}
</script>

<template>
  <header class="flex items-center justify-between gap-6 pb-6 narrow:items-start">
    <div>
      <p class="my-2 text-[10px] tracking-[2px] text-vgui-accent">
        VALVE GRAPHICAL USER INTERFACE / 02
      </p>
      <h1 class="my-1.5 text-[28px] font-normal tracking-[-1px]">
        Control Gallery
      </h1>
      <p class="my-2">
        A familiar interface. Built for the web.
      </p>
    </div>
    <div class="grid gap-1">
      <UiLabel for="theme">
        Appearance
      </UiLabel>
      <UiSelect
        id="theme"
        :model-value="theme"
        :options="themes"
        label="Appearance"
        @update:model-value="setTheme"
      />
    </div>
  </header>
</template>
