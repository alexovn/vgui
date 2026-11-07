<script setup lang="ts">
import {
  UiButton,
  UiCheckbox,
  UiInput,
  UiLabel,
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

const emit = defineEmits<{
  message: [value: string]
}>()
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
      @select="emit('message', $event.label)"
    />
    <UiSeparator />
    <form
      class="grid grid-cols-[130px_minmax(0,1fr)] items-start gap-3 py-2.5 narrow:grid-cols-1"
      @submit.prevent="emit('message', `Saved profile: ${name}`)"
      @reset="emit('message', 'Form reset')"
    >
      <UiLabel for="player">
        Player name
      </UiLabel>
      <UiInput
        id="player"
        v-model="name"
        name="player"
      />
      <UiLabel for="notes">
        Description
      </UiLabel>
      <UiTextarea
        id="notes"
        name="notes"
        placeholder="Tell us about your server…"
        rows="3"
      />
      <UiLabel for="source">
        Server source
      </UiLabel>
      <UiSelect
        id="source"
        v-model="selection"
        :options="options"
        name="source"
        label="Server source"
      />
      <UiLabel for="sound">
        Volume
      </UiLabel>
      <div>
        <UiSlider
          id="sound"
          v-model="volume"
          label="Volume"
          :max="100"
        />
        <small>{{ volume[0] }}%</small>
      </div>
      <span>Preferences</span>
      <label class="vgui-choice">
        <UiCheckbox
          v-model="enabled"
          name="sound"
        />
        Enable game sounds
      </label>
      <span>Connection</span>
      <UiRadioGroup
        :options="options.slice(0, 3)"
        default-value="internet"
        name="connection"
        aria-label="Connection type"
      />
      <div class="col-span-full mt-3 flex flex-wrap gap-1.5">
        <UiButton type="submit">
          Apply
        </UiButton>
        <UiButton type="reset">
          Reset
        </UiButton>
        <UiTooltip text="Restore the default configuration">
          <UiButton @click="emit('message', 'Defaults restored')">
            Use defaults
          </UiButton>
        </UiTooltip>
      </div>
    </form>
  </UiPanel>
</template>
