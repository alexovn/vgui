<script setup lang="ts">
import type { UiTheme } from '@vgui/vue'
import { UiThemeProvider } from '@vgui/vue'
import { ref } from 'vue'
import ContainersSection from './components/ContainersSection.vue'
import ControlsSection from './components/ControlsSection.vue'
import ControlStatesSection from './components/ControlStatesSection.vue'
import PlaygroundHeader from './components/PlaygroundHeader.vue'
import PlaygroundSidebar from './components/PlaygroundSidebar.vue'
import ServersSection from './components/ServersSection.vue'

const theme = ref<UiTheme>('olive')
const name = ref('Gordon Freeman')
const selection = ref('internet')
const message = ref('Ready.')
</script>

<template>
  <UiThemeProvider
    :theme="theme"
    class="min-h-screen bg-vgui-input px-[max(20px,calc((100vw-1160px)/2))] py-9"
  >
    <PlaygroundHeader v-model="theme" />
    <div class="grid grid-cols-[170px_minmax(0,1fr)] gap-6 narrow:grid-cols-1">
      <PlaygroundSidebar />
      <main class="grid min-w-0 gap-[18px]">
        <ControlsSection
          v-model:name="name"
          v-model:selection="selection"
          @message="message = $event"
        />
        <ServersSection
          v-model:name="name"
          v-model:selection="selection"
          @message="message = $event"
        />
        <ContainersSection />
        <ControlStatesSection
          :theme="theme"
          @message="message = $event"
        />
        <footer
          role="status"
          class="border-t border-solid border-x-0 border-b-0 border-vgui-light p-2 text-vgui-muted"
        >
          {{ message }}
        </footer>
      </main>
    </div>
  </UiThemeProvider>
</template>
