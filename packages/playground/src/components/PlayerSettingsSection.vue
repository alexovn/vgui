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
} from '@alexovn/vgui-vue'
import { ref } from 'vue'
import { actions, connectionOptions, options } from '../gallery-data'

const name = defineModel<string>('name', { required: true })
const selection = defineModel<string>('selection', { required: true })
const soundEnabled = ref<boolean | 'indeterminate'>(true)
const volume = ref([65])
</script>

<template>
  <UiPanel
    id="controls"
    title="Player settings"
  >
    <p class="my-2 text-sm text-vgui-muted">
      Set up your player profile and audio before joining a Half-Life 2: Deathmatch server.
      Select text in the player name field to preview the theme’s highlight.
    </p>

    <UiMenubar
      label="Half-Life 2 launcher"
      :items="[
        { id: 'servers', label: 'Servers', items: actions },
        {
          id: 'view',
          label: 'Player',
          items: [{ id: 'settings', label: 'Player settings' }],
        },
      ]"
    />

    <UiSeparator />

    <form class="flex flex-col gap-3 py-2.5">
      <UiFormField
        label="Player name"
        class="form-field md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)]"
      >
        <UiInput
          v-model="name"
          name="player"
          class="field"
        />
      </UiFormField>

      <UiFormField
        label="Player bio"
        class="form-field md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)]"
      >
        <UiTextarea
          name="notes"
          placeholder="Former Black Mesa researcher. Currently passing through City 17."
          rows="3"
          class="field"
        />
      </UiFormField>

      <UiFormField
        label="Server browser source"
        class="form-field md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)]"
        group
      >
        <UiSelect
          v-model="selection"
          :options="options"
          name="source"
          label="Server browser source"
          class="field"
        />
      </UiFormField>

      <UiFormField
        label="Game volume"
        class="form-field md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)]"
      >
        <div class="field flex items-start gap-2">
          <UiSlider
            v-model="volume"
            class="min-w-0 w-full md:w-40"
            label="Game volume"
            min-caption="Low"
            max-caption="High"
            :disabled="!soundEnabled"
          />
          <small class="w-[4ch] shrink-0 text-right text-xs text-vgui-muted">
            {{ volume[0] }}%
          </small>
        </div>
      </UiFormField>

      <UiFormField
        label="Audio"
        class="form-field md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)]"
        group
      >
        <label class="vgui-choice field">
          <UiCheckbox
            v-model="soundEnabled"
            name="sound"
          />
          Enable game sounds
        </label>
      </UiFormField>

      <UiFormField
        label="Connection"
        class="form-field md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)]"
        group
      >
        <UiRadioGroup
          :options="connectionOptions"
          default-value="broadband"
          name="connection"
          aria-label="Connection type"
          class="field"
        />
      </UiFormField>

      <div class="mt-3 flex flex-wrap gap-1.5">
        <UiButton type="submit">
          Apply settings
        </UiButton>

        <UiButton type="reset">
          Reset
        </UiButton>

        <UiTooltip text="Restore the default player and audio settings">
          <UiButton>
            Use defaults
          </UiButton>
        </UiTooltip>
      </div>
    </form>
  </UiPanel>
</template>
