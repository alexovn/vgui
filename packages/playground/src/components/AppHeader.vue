<script setup lang="ts">
import type { UiTheme } from '@vgui/vue'
import { UiFormField, UiPanel, UiSelect } from '@vgui/vue'

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
      <UiPanel>
        <UiFormField
          v-slot="{ id }"
          label="Theme"
          class="form-field"
        >
          <UiSelect
            :id="id"
            :model-value="theme"
            :options="themes"
            label="Theme"
            @update:model-value="setTheme"
          />
        </UiFormField>
      </UiPanel>
    </div>
  </header>
</template>

<style scoped>
@import '../style.css';

:deep(.form-field) {
  @apply
    flex-col
    items-stretch
    gap-1
    md:flex-row
    md:items-baseline
    md:gap-3
    [&>.vgui-label]:w-auto
    [&>.vgui-label]:shrink-0
    md:[&>.vgui-label]:w-18;
}

:deep(.field) {
  @apply
    min-w-0
    flex-none
    md:flex-1;
}
</style>
