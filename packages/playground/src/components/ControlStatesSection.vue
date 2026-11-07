<script setup lang="ts">
import type { UiTheme } from '@vgui/vue'
import {
  UiButton,
  UiCheckbox,
  UiDropdownMenu,
  UiInput,
  UiPanel,
  UiSelect,
  UiThemeProvider,
} from '@vgui/vue'
import { actions, options } from '../gallery-data'

defineProps<{ theme: UiTheme }>()
const emit = defineEmits<{
  message: [value: string]
}>()
</script>

<template>
  <UiPanel
    id="states"
    title="Control states"
  >
    <div class="state-grid">
      <UiButton>Normal</UiButton>
      <UiButton disabled>
        Disabled
      </UiButton>
      <UiButton data-state="on">
        Pressed
      </UiButton>
      <UiInput
        aria-label="Read-only example"
        model-value="Read only"
        readonly
      />
      <UiInput
        aria-label="Invalid example"
        aria-invalid="true"
        model-value="Invalid value"
      />
      <UiInput
        aria-label="Disabled example"
        disabled
        model-value="Disabled"
      />
      <label class="vgui-choice">
        <UiCheckbox default-value="indeterminate" />
        Mixed
      </label>
      <label class="vgui-choice">
        <UiCheckbox
          disabled
          :default-value="true"
        />
        Disabled checked
      </label>
      <UiSelect
        :options="options"
        disabled
        label="Disabled select"
        placeholder="Disabled"
      />
    </div>
    <p>Use Tab to inspect focus. Switch the theme to compare every control.</p>
    <UiThemeProvider
      :theme="theme === 'olive' ? 'slate' : 'olive'"
      class="nested"
    >
      <UiDropdownMenu
        :items="actions"
        @select="emit('message', $event.label)"
      >
        <template #trigger>
          <UiButton>Nested opposite-theme menu ▾</UiButton>
        </template>
      </UiDropdownMenu>
    </UiThemeProvider>
  </UiPanel>
</template>
