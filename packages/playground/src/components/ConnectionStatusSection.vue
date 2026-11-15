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
    title="Connection status"
  >
    <p class="my-2 text-sm text-vgui-muted">
      Sample launcher states: an active favorites filter, no server selected, and an invalid address.
    </p>

    <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
      <UiButton>Refresh servers</UiButton>

      <UiButton disabled>
        Connect to server
      </UiButton>

      <UiButton data-state="on">
        Show favorites
      </UiButton>

      <UiInput
        aria-label="Game title (read only)"
        model-value="Half-Life 2: Deathmatch"
        readonly
      />

      <UiInput
        aria-label="Server address (invalid port)"
        aria-invalid="true"
        model-value="city17:abc"
      />

      <UiInput
        aria-label="Selected server (unavailable)"
        disabled
        model-value="No server selected"
      />

      <label class="vgui-choice">
        <UiCheckbox default-value="indeterminate" />
        Some content packs selected
      </label>

      <label class="vgui-choice">
        <UiCheckbox
          disabled
          :default-value="true"
        />
        Base game required
      </label>

      <UiSelect
        :options="options"
        disabled
        label="Server source unavailable"
        placeholder="Server source unavailable"
      />
    </div>
  </UiPanel>
</template>
