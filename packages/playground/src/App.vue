<script setup lang="ts">
import type { UiTheme } from '@vgui/vue'
import { ref, watch } from 'vue'
import ContainersSection from './components/ContainersSection.vue'
import ControlsSection from './components/ControlsSection.vue'
import ControlStatesSection from './components/ControlStatesSection.vue'
import PlaygroundFooter from './components/PlaygroundFooter.vue'
import PlaygroundHeader from './components/PlaygroundHeader.vue'
import PlaygroundSidebar from './components/PlaygroundSidebar.vue'
import ServersSection from './components/ServersSection.vue'

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
    <PlaygroundHeader
      v-model="theme"
      class="col-span-full"
    />

    <PlaygroundSidebar />

    <main class="grid min-w-0 gap-4.5">
      <ControlsSection
        v-model:name="name"
        v-model:selection="selection"
      />

      <ServersSection
        v-model:name="name"
        v-model:selection="selection"
      />

      <ContainersSection />

      <ControlStatesSection />
    </main>

    <PlaygroundFooter class="col-start-1 md:col-start-2" />
  </div>
</template>
