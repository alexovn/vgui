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
import { actions, connectionOptions, options } from '../gallery-data'

const name = defineModel<string>('name', { required: true })
const selection = defineModel<string>('selection', { required: true })
const enabled = ref<boolean | 'indeterminate'>(true)
const volume = ref([65])
</script>

<template>
  <UiPanel
    id="controls"
    title="Player settings"
  >
    <p class="my-2 text-sm text-vgui-muted">
      Set up your player profile and audio before joining a Half-Life 2: Deathmatch server.
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
        label="Player bio"
        for="notes"
        class="form-field"
      >
        <UiTextarea
          id="notes"
          name="notes"
          placeholder="Former Black Mesa researcher. Currently passing through City 17."
          rows="3"
          class="field"
        />
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Server browser source"
        class="form-field"
      >
        <UiSelect
          :id="id"
          v-model="selection"
          :options="options"
          name="source"
          label="Server browser source"
          class="field"
        />
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Game volume"
        class="form-field"
      >
        <div class="field">
          <UiSlider
            :id="id"
            v-model="volume"
            label="Game volume"
            :max="100"
          />
          <small class="text-xs text-vgui-muted">{{ volume[0] }}%</small>
        </div>
      </UiFormField>

      <UiFormField
        v-slot="{ id }"
        label="Audio"
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

<style>
@import '../style.css';

.form-field {
  @apply
    flex-col
    items-stretch
    gap-1
    md:flex-row
    md:items-baseline
    md:gap-3
    [&>.vgui-label]:w-auto
    [&>.vgui-label]:shrink-0
    md:[&>.vgui-label]:w-32.5;
}

.field {
  @apply
    min-w-0
    flex-none
    md:flex-1;
}
</style>
