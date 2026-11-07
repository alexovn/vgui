<script setup lang="ts">
import type { UiMenuItem, UiTheme } from '@vgui/vue'
import * as Ui from '@vgui/vue'
import { ref } from 'vue'

const theme = ref<UiTheme>('olive')
const name = ref('Gordon Freeman')
const enabled = ref<boolean | 'indeterminate'>(true)
const selection = ref('internet')
const volume = ref([65])
const open = ref(false)
const message = ref('Ready.')
const options = [
  { label: 'Internet', value: 'internet' },
  { label: 'Favorites', value: 'favorites' },
  { label: 'LAN', value: 'lan' },
  { label: 'Unavailable', value: 'disabled', disabled: true },
]
const actions: UiMenuItem[] = [
  { id: 'connect', label: 'Connect', shortcut: 'Enter' },
  { id: 'refresh', label: 'Refresh', shortcut: 'F5' },
  { id: 'separator', label: '', separator: true },
  {
    id: 'more',
    label: 'More',
    children: [
      { id: 'favorite', label: 'Add to favorites' },
    ],
  },
  { id: 'remove', label: 'Remove', disabled: true },
]
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
const nodes = [
  {
    id: 'games',
    label: 'Games',
    children: [
      { id: 'hl2', label: 'Half-Life 2' },
      { id: 'portal', label: 'Portal' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    children: [
      { id: 'sdk', label: 'Source SDK' },
    ],
  },
]

function action(item: UiMenuItem) {
  message.value = item.label
}
</script>

<template>
  <Ui.UiThemeProvider
    :theme="theme"
    class="desktop"
  >
    <header>
      <div>
        <p class="eyebrow">
          VALVE GRAPHICAL USER INTERFACE / 02
        </p>
        <h1>Control Gallery</h1>
        <p>A familiar interface. Built for the web.</p>
      </div>
      <div class="theme-switch">
        <Ui.UiLabel for="theme">
          Appearance
        </Ui.UiLabel>
        <select
          id="theme"
          v-model="theme"
          class="vgui-select-trigger"
        >
          <option value="olive">
            Olive green
          </option>
          <option value="slate">
            Slate gray
          </option>
        </select>
      </div>
    </header>
    <div class="workspace">
      <aside>
        <strong>VGUI Library</strong>
        <nav>
          <a href="#controls">Controls</a>
          <a href="#servers">Server browser</a>
          <a href="#containers">Containers</a>
          <a href="#states">Control states</a>
        </nav>
        <Ui.UiSeparator />
        <p>
          Vue 3 + Reka UI
          <br>
          CSS / framework independent
        </p>
      </aside>
      <main>
        <Ui.UiPanel
          id="controls"
          title="Controls"
        >
          <Ui.UiMenubar
            label="Application"
            :items="[
              { id: 'file', label: 'File', items: actions },
              {
                id: 'view',
                label: 'View',
                items: [{ id: 'settings', label: 'Settings' }],
              },
            ]"
            @select="action"
          />
          <Ui.UiSeparator />
          <form
            class="form-grid"
            @submit.prevent="message = `Saved profile: ${name}`"
            @reset="message = 'Form reset'"
          >
            <Ui.UiLabel for="player">
              Player name
            </Ui.UiLabel>
            <Ui.UiInput
              id="player"
              v-model="name"
              name="player"
            />
            <Ui.UiLabel for="notes">
              Description
            </Ui.UiLabel>
            <Ui.UiTextarea
              id="notes"
              name="notes"
              placeholder="Tell us about your server…"
              rows="3"
            />
            <Ui.UiLabel for="source">
              Server source
            </Ui.UiLabel>
            <Ui.UiSelect
              id="source"
              v-model="selection"
              :options="options"
              name="source"
              label="Server source"
            />
            <Ui.UiLabel for="sound">
              Volume
            </Ui.UiLabel>
            <div>
              <Ui.UiSlider
                id="sound"
                v-model="volume"
                label="Volume"
                :max="100"
              />
              <small>{{ volume[0] }}%</small>
            </div>
            <span>Preferences</span>
            <label class="vgui-choice">
              <Ui.UiCheckbox
                v-model="enabled"
                name="sound"
              />
              Enable game sounds
            </label>
            <span>Connection</span>
            <Ui.UiRadioGroup
              :options="options.slice(0, 3)"
              default-value="internet"
              name="connection"
              aria-label="Connection type"
            />
            <div class="actions">
              <Ui.UiButton type="submit">
                Apply
              </Ui.UiButton>
              <Ui.UiButton type="reset">
                Reset
              </Ui.UiButton>
              <Ui.UiTooltip text="Restore the default configuration">
                <Ui.UiButton @click="message = 'Defaults restored'">
                  Use defaults
                </Ui.UiButton>
              </Ui.UiTooltip>
            </div>
          </form>
        </Ui.UiPanel>
        <Ui.UiPanel
          id="servers"
          title="Servers"
        >
          <Ui.UiTabs
            label="Server categories"
            :items="options.slice(0, 3)"
          >
            <template #default="{ item }">
              <p>{{ item.label }} servers</p>
              <Ui.UiContextMenu
                :items="actions"
                @select="action"
              >
                <template #trigger>
                  <div
                    tabindex="0"
                    aria-label="Server list; right-click for actions"
                  >
                    <Ui.UiTable
                      caption="Available game servers"
                      :columns="columns"
                      :rows="rows"
                      row-key="id"
                    />
                  </div>
                </template>
              </Ui.UiContextMenu>
            </template>
          </Ui.UiTabs>
          <div class="actions">
            <Ui.UiDropdownMenu
              :items="actions"
              @select="action"
            >
              <template #trigger>
                <Ui.UiButton>Server actions ▾</Ui.UiButton>
              </template>
            </Ui.UiDropdownMenu>
            <Ui.UiDialog
              v-model:open="open"
              title="Settings"
              description="Configure your player profile and connection."
            >
              <template #trigger>
                <Ui.UiButton>Settings…</Ui.UiButton>
              </template>
              <Ui.UiGroupBox legend="Player">
                <Ui.UiLabel for="dialog-name">
                  Player name
                </Ui.UiLabel>
                <Ui.UiInput
                  id="dialog-name"
                  v-model="name"
                />
                <p>
                  <Ui.UiSelect
                    v-model="selection"
                    :options="options"
                    label="Connection"
                  />
                </p>
              </Ui.UiGroupBox>
              <template #footer>
                <Ui.UiButton @click="open = false">
                  OK
                </Ui.UiButton>
              </template>
            </Ui.UiDialog>
          </div>
        </Ui.UiPanel>
        <Ui.UiPanel
          id="containers"
          title="Containers & feedback"
        >
          <div class="columns">
            <Ui.UiGroupBox legend="Library">
              <Ui.UiTree
                :nodes="nodes"
                label="Game library"
                :default-expanded="['games']"
              />
            </Ui.UiGroupBox>
            <Ui.UiGroupBox legend="Download">
              <Ui.UiProgress
                :model-value="65"
                label="Download progress"
              />
              <p>65% · Updating game files</p>
              <Ui.UiProgress label="Connecting" />
              <Ui.UiScrollArea
                style="height: 100px"
                aria-label="Activity"
              >
                <p
                  v-for="n in 12"
                  :key="n"
                >
                  [{{ n }}] Verifying game files…
                </p>
              </Ui.UiScrollArea>
            </Ui.UiGroupBox>
          </div>
        </Ui.UiPanel>
        <Ui.UiPanel
          id="states"
          title="Control states"
        >
          <div class="state-grid">
            <Ui.UiButton>Normal</Ui.UiButton>
            <Ui.UiButton disabled>
              Disabled
            </Ui.UiButton>
            <Ui.UiButton data-state="on">
              Pressed
            </Ui.UiButton>
            <Ui.UiInput
              aria-label="Read-only example"
              model-value="Read only"
              readonly
            />
            <Ui.UiInput
              aria-label="Invalid example"
              aria-invalid="true"
              model-value="Invalid value"
            />
            <Ui.UiInput
              aria-label="Disabled example"
              disabled
              model-value="Disabled"
            />
            <label class="vgui-choice">
              <Ui.UiCheckbox default-value="indeterminate" />
              Mixed
            </label>
            <label class="vgui-choice">
              <Ui.UiCheckbox
                disabled
                :default-value="true"
              />
              Disabled checked
            </label>
            <Ui.UiSelect
              :options="options"
              disabled
              label="Disabled select"
              placeholder="Disabled"
            />
          </div>
          <p>Use Tab to inspect focus. Switch the theme to compare every control.</p>
          <Ui.UiThemeProvider
            :theme="theme === 'olive' ? 'slate' : 'olive'"
            class="nested"
          >
            <Ui.UiDropdownMenu
              :items="actions"
              @select="action"
            >
              <template #trigger>
                <Ui.UiButton>Nested opposite-theme menu ▾</Ui.UiButton>
              </template>
            </Ui.UiDropdownMenu>
          </Ui.UiThemeProvider>
        </Ui.UiPanel>
        <footer role="status">
          {{ message }}
        </footer>
      </main>
    </div>
  </Ui.UiThemeProvider>
</template>
