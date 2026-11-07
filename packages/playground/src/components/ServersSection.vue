<script setup lang="ts">
import {
  UiButton,
  UiContextMenu,
  UiDialog,
  UiDropdownMenu,
  UiGroupBox,
  UiInput,
  UiLabel,
  UiPanel,
  UiSelect,
  UiTable,
  UiTabs,
} from '@vgui/vue'
import { ref } from 'vue'
import { actions, options } from '../gallery-data'

const emit = defineEmits<{
  message: [value: string]
}>()
const name = defineModel<string>('name', { required: true })
const selection = defineModel<string>('selection', { required: true })
const open = ref(false)
const columns = [
  { key: 'name', label: 'Server' },
  { key: 'map', label: 'Map' },
  { key: 'players', label: 'Players' },
  { key: 'ping', label: 'Latency' },
]
const rows = [
  {
    id: 1,
    name: 'Black Mesa Research',
    map: 'crossfire',
    players: '12 / 24',
    ping: 32,
  },
  {
    id: 2,
    name: 'City 17 · Deathmatch',
    map: 'dm_lockdown',
    players: '8 / 16',
    ping: 48,
  },
  {
    id: 3,
    name: 'The Orange Box',
    map: 'dm_overwatch',
    players: '4 / 12',
    ping: 67,
  },
]
</script>

<template>
  <UiPanel
    id="servers"
    title="Servers"
  >
    <UiTabs
      label="Server categories"
      :items="options.slice(0, 3)"
    >
      <template #default="{ item }">
        <p>{{ item.label }} servers</p>
        <UiContextMenu
          :items="actions"
          @select="emit('message', $event.label)"
        >
          <template #trigger>
            <div
              tabindex="0"
              aria-label="Server list; right-click for actions"
            >
              <UiTable
                caption="Available game servers"
                :columns="columns"
                :rows="rows"
                row-key="id"
              />
            </div>
          </template>
        </UiContextMenu>
      </template>
    </UiTabs>
    <div class="actions">
      <UiDropdownMenu
        :items="actions"
        @select="emit('message', $event.label)"
      >
        <template #trigger>
          <UiButton>Server actions ▾</UiButton>
        </template>
      </UiDropdownMenu>
      <UiDialog
        v-model:open="open"
        title="Settings"
        description="Configure your player profile and connection."
      >
        <template #trigger>
          <UiButton>Settings…</UiButton>
        </template>
        <UiGroupBox legend="Player">
          <UiLabel for="dialog-name">
            Player name
          </UiLabel>
          <UiInput
            id="dialog-name"
            v-model="name"
          />
          <p>
            <UiSelect
              v-model="selection"
              :options="options"
              label="Connection"
            />
          </p>
        </UiGroupBox>
        <template #footer>
          <UiButton @click="open = false">
            OK
          </UiButton>
        </template>
      </UiDialog>
    </div>
  </UiPanel>
</template>
