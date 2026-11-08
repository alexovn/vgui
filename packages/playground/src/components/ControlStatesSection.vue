<script setup lang="ts">
import {
  UiButton,
  UiCheckbox,
  UiInput,
  UiPanel,
  UiSelect,
} from '@vgui/vue'
import { options } from '../gallery-data'
</script>

<template>
  <UiPanel
    id="states"
    title="Control states"
  >
    <div class="grid grid-cols-3 items-center gap-3 narrow:grid-cols-1">
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
  </UiPanel>
</template>
