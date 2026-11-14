<script setup lang="ts">
import { UiButton, UiSeparator } from '@vgui/vue'
import GithubIcon from './GithubIcon.vue'

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
  <aside class="pt-3 md:sticky top-0 flex flex-col gap-4 self-start text-sm text-vgui-muted">
    <h3 class="text-base font-bold text-vgui-text">
      Menu
    </h3>

    <div>
      <nav class="flex flex-row flex-wrap gap-3 md:flex-col md:flex-nowrap">
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

      <div>
        <p class="text-xs leading-relaxed">
          Playground made with separate CSS and component libraries
        </p>

        <div class="mt-2 justify-self-start">
          <UiButton
            href="https://github.com/alexovn/vgui"
            target="_blank"
            square
            aria-label="Github link"
          >
            <GithubIcon />
          </UiButton>
        </div>
      </div>
    </div>
  </aside>
</template>
