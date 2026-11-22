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
} from '@alexovn/vgui-vue'
import { ref } from 'vue'
import { actions, options } from '../gallery-data'

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
    name: 'City 17 · Lockdown',
    map: 'dm_lockdown',
    players: '12 / 24',
    ping: 32,
  },
  {
    id: 2,
    name: 'Overwatch Arena',
    map: 'dm_overwatch',
    players: '8 / 16',
    ping: 48,
  },
  {
    id: 3,
    name: 'Black Mesa East · Steam Lab',
    map: 'dm_steamlab',
    players: '4 / 12',
    ping: 67,
  },
]
</script>

<template>
  <UiPanel
    id="servers"
    title="Deathmatch servers"
  >
    <p class="my-2 text-sm text-vgui-muted">
      Browse sample Half-Life 2: Deathmatch servers with your player profile.
    </p>

    <UiTabs
      label="Server categories"
      :items="[
        ...options.slice(0, 3),
        { value: 'friends', label: 'Friends', disabled: true },
      ]"
    >
      <template #default="{ item }">
        <p class="my-2 text-sm text-vgui-muted">
          {{ item.label }} servers
        </p>
        <UiContextMenu :items="actions">
          <template #trigger>
            <div
              tabindex="0"
              aria-label="Sample Deathmatch server list; right-click for server actions"
            >
              <UiTable
                class="[&_caption]:py-1 [&_caption]:text-left [&_caption]:text-sm [&_caption]:text-vgui-muted"
                caption="Sample Half-Life 2: Deathmatch servers"
                :columns="columns"
                :rows="rows"
                row-key="id"
              />
            </div>
          </template>
        </UiContextMenu>
      </template>
    </UiTabs>

    <div class="col-span-full mt-3 flex flex-wrap gap-1.5">
      <UiDropdownMenu :items="actions">
        <template #trigger>
          <UiButton>Server actions</UiButton>
        </template>
      </UiDropdownMenu>

      <UiDialog
        v-model:open="open"
        title="Player settings"
        description="Your player name and server browser source are shared with the Player settings panel."
      >
        <template #trigger>
          <UiButton>Player settings…</UiButton>
        </template>

        <UiGroupBox
          class="min-w-0"
          legend="Player"
        >
          <UiLabel for="dialog-name">
            Player name
          </UiLabel>
          <UiInput
            id="dialog-name"
            v-model="name"
          />
          <div class="my-2">
            <UiLabel for="dialog-source">
              Server browser source
            </UiLabel>
            <UiSelect
              id="dialog-source"
              v-model="selection"
              :options="options"
              label="Server browser source"
            />
          </div>
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
