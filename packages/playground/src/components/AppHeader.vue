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
  <header class="flex items-start justify-between gap-6 md:items-center">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-normal tracking-tight md:text-4xl">
        Half-Life 2 Launcher
      </h1>

      <p class="text-lg text-vgui-muted">
        A playground for VGUI-inspired controls
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
