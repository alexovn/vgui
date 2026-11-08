<script setup lang="ts">
import {
  UiButton,
  UiCheckbox,
  UiFormField,
  UiInput,
  UiMenubar,
  UiPanel,
  UiRadioGroup,
  UiSelect,
  UiSeparator,
  UiSlider,
  UiTextarea,
  UiTooltip,
} from '@vgui/vue'
import { ref } from 'vue'
import { actions, options } from '../gallery-data'

const name = defineModel<string>('name', { required: true })
const selection = defineModel<string>('selection', { required: true })
const enabled = ref<boolean | 'indeterminate'>(true)
const volume = ref([65])
</script>

<template>
  <UiPanel
    id="controls"
    title="Controls"
  >
    <UiMenubar
      label="Application"
      :items="[
        { id: 'file', label: 'File', items: actions },
        {
          id: 'view',
          label: 'View',
          items: [{ id: 'settings', label: 'Settings' }],
        },
      ]"
    />

    <UiSeparator />

    <form class="flex flex-col gap-3 py-2.5">
      <UiFormField
        v-slot="{ id }"
        label="Player name"
        class="form-field"
      >
        <UiInput
          :id="id"
          v-model="name"
          name="player"
          class="field"
        />
      </UiFormField>

      <UiFormField
        label="Description"
        for="notes"
        class="form-field"
      >
        <UiTextarea
          id="notes"
          name="notes"
          placeholder="Tell us about your server…"
          rows="3"
          class="field"
        />
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Server source"
        class="form-field"
      >
        <UiSelect
          :id="id"
          v-model="selection"
          :options="options"
          name="source"
          label="Server source"
          class="field"
        />
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Volume"
        class="form-field"
      >
        <div class="field">
          <UiSlider
            :id="id"
            v-model="volume"
            label="Volume"
            :max="100"
          />
          <small class="text-xs text-vgui-muted">{{ volume[0] }}%</small>
        </div>
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Preferences"
        class="form-field"
      >
        <label class="vgui-choice field">
          <UiCheckbox
            :id="id"
            v-model="enabled"
            name="sound"
          />
          Enable game sounds
        </label>
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Connection"
        class="form-field"
      >
        <UiRadioGroup
          :id="id"
          :options="options.slice(0, 3)"
          default-value="internet"
          name="connection"
          aria-label="Connection type"
          class="field"
        />
      </UiFormField>

      <div class="mt-3 flex flex-wrap gap-1.5">
        <UiButton type="submit">
          Apply
        </UiButton>

        <UiButton type="reset">
          Reset
        </UiButton>

        <UiTooltip text="Restore the default configuration">
          <UiButton>
            Use defaults
          </UiButton>
        </UiTooltip>
      </div>
    </form>
  </UiPanel>
</template>

<style>
@import '../style.css';

.form-field {
  @apply
    flex-row
    items-baseline
    gap-3
    narrow:flex-col
    narrow:items-stretch
    narrow:gap-1
    [&>.vgui-label]:w-32.5
    [&>.vgui-label]:shrink-0 narrow:[&>.vgui-label]:w-auto;
}

.field {
  @apply
    min-w-0
    flex-1
    narrow:flex-none;
}
</style>
