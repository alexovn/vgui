<script setup lang="ts">
import type { UiTheme } from '@alexovn/vgui-vue'
import { UiFormField, UiPanel, UiSelect } from '@alexovn/vgui-vue'

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
  <header class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-normal tracking-tight md:text-4xl">
        VGUI Playground
      </h1>

      <p class="text-lg text-vgui-muted">
        Back to Memories. Classic UI 2003 — 2010
      </p>
    </div>

    <div class="grid gap-1 w-full md:w-[unset]">
      <UiPanel>
        <UiFormField
          label="Theme"
          class="form-field md:flex md:flex-row md:items-baseline md:[&>.vgui-label]:w-18 md:[&>.vgui-label]:self-auto"
        >
          <UiSelect
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
