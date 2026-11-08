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
    <div class="grid grid-cols-2 gap-3 narrow:grid-cols-1">
      <UiGroupBox
        class="min-w-0"
        legend="Library"
      >
        <UiTree
          :nodes="nodes"
          label="Game library"
          :default-expanded="['games']"
        />
      </UiGroupBox>
      <UiGroupBox
        class="min-w-0"
        legend="Download"
      >
        <UiProgress
          :model-value="65"
          label="Download progress"
        />
        <p class="my-2 text-sm text-vgui-muted">
          65% · Updating game files
        </p>
        <UiProgress label="Connecting" />
        <UiScrollArea
          class="h-25"
          aria-label="Activity"
        >
          <p
            v-for="n in 12"
            :key="n"
            class="my-2 text-xs text-vgui-muted"
          >
            [{{ n }}] Verifying game files…
          </p>
        </UiScrollArea>
      </UiGroupBox>
    </div>
  </UiPanel>
</template>
