<script setup lang="ts">
import { computed, provide } from 'vue'

import { themeKey } from '../theme'
import type { UiTheme } from '../types'
const props = withDefaults(defineProps<{ theme?: UiTheme }>(), {
  theme: 'olive',
})
provide(
  themeKey,
  computed(() => props.theme),
)
</script>
<template>
  <div class="vgui-theme" v-bind="{ 'data-vgui-theme': theme }"><slot /></div>
</template>
