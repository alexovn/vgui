<script setup lang="ts">
import type { UiTheme } from '@vgui/vue'
import { ref, watch } from 'vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import ConnectionStatusSection from './components/ConnectionStatusSection.vue'
import DeathmatchServersSection from './components/DeathmatchServersSection.vue'
import GameFilesSection from './components/GameFilesSection.vue'
import PlayerSettingsSection from './components/PlayerSettingsSection.vue'

const theme = ref<UiTheme>('olive')
const name = ref('Gordon Freeman')
const selection = ref('internet')

// The page background and scrollbar share the selected theme tokens.
watch(theme, (value) => {
  document.documentElement.dataset.vguiTheme = value
}, { immediate: true })
</script>

<template>
  <div class="mx-auto container px-5 py-9 min-h-screen grid grid-cols-1 gap-6 md:grid-cols-[170px_minmax(0,1fr)]">
    <AppHeader
      v-model="theme"
      class="col-span-full"
    />

    <AppSidebar />

    <main class="grid min-w-0 gap-4.5">
      <PlayerSettingsSection
        v-model:name="name"
        v-model:selection="selection"
      />

      <DeathmatchServersSection
        v-model:name="name"
        v-model:selection="selection"
      />

      <GameFilesSection />

      <ConnectionStatusSection />
    </main>

    <AppFooter class="col-start-1 md:col-start-2" />
  </div>
</template>
