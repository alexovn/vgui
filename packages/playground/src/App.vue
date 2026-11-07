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
    class="desktop"
  >
    <PlaygroundHeader v-model="theme" />
    <div class="workspace">
      <PlaygroundSidebar />
      <main>
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
        <footer role="status">
          {{ message }}
        </footer>
      </main>
    </div>
  </UiThemeProvider>
</template>
