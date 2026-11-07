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
  <header>
    <div>
      <p class="eyebrow">
        VALVE GRAPHICAL USER INTERFACE / 02
      </p>
      <h1>Control Gallery</h1>
      <p>A familiar interface. Built for the web.</p>
    </div>
    <div class="theme-switch">
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
