<script setup lang="ts">
import { UiSeparator } from '@vgui/vue'

const menu = [
  {
    label: 'Controls',
    value: '#controls',
  },
  {
    label: 'Server browser',
    value: '#servers',
  },
  {
    label: 'Containers',
    value: '#containers',
  },
  {
    label: 'Control states',
    value: '#states',
  },
]
</script>

<template>
  <aside class="pt-3 flex flex-col gap-4 text-sm text-vgui-muted">
    <span class="text-base font-bold text-vgui-text">
      VGUI Library
    </span>

    <div>
      <nav class="flex flex-col gap-3 narrow:flex narrow:flex-row narrow:flex-wrap">
        <a
          v-for="item in menu"
          :key="item.value"
          class="hover:text-vgui-accent"
          :href="item.value"
        >
          {{ item.label }}
        </a>
      </nav>

      <UiSeparator />

      <p class="text-xs leading-relaxed">
        Vue 3 + Reka UI
        <br>
        CSS / framework independent
      </p>
    </div>
  </aside>
</template>
