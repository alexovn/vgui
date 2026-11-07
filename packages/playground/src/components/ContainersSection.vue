<script setup lang="ts">
import {
  UiGroupBox,
  UiPanel,
  UiProgress,
  UiScrollArea,
  UiTree,
} from '@vgui/vue'

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
</script>

<template>
  <UiPanel
    id="containers"
    title="Containers & feedback"
  >
    <div class="columns">
      <UiGroupBox legend="Library">
        <UiTree
          :nodes="nodes"
          label="Game library"
          :default-expanded="['games']"
        />
      </UiGroupBox>
      <UiGroupBox legend="Download">
        <UiProgress
          :model-value="65"
          label="Download progress"
        />
        <p>65% · Updating game files</p>
        <UiProgress label="Connecting" />
        <UiScrollArea
          style="height: 100px"
          aria-label="Activity"
        >
          <p
            v-for="n in 12"
            :key="n"
          >
            [{{ n }}] Verifying game files…
          </p>
        </UiScrollArea>
      </UiGroupBox>
    </div>
  </UiPanel>
</template>
