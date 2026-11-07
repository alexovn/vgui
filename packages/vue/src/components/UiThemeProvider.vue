<script setup lang="ts">
import type { UiTheme } from '../types/theme'

import { computed, provide } from 'vue'
import { themeKey } from '../theme'

const props = withDefaults(defineProps<{ theme?: UiTheme }>(), {
  theme: 'olive',
})
provide(
  themeKey,
  computed(() => props.theme),
)
</script>

<template>
  <div
    class="vgui-theme"
    v-bind="{ 'data-vgui-theme': theme }"
  >
    <slot />
  </div>
</template>
