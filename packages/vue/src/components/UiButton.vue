<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue'

defineProps<{
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: AnchorHTMLAttributes['target']
  square?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
    v-if="!href"
    class="vgui-button"
    :class="{ 'vgui-button--square': square }"
    :type="type ?? 'button'"
    :disabled="disabled"
  >
    <slot />
  </button>
  <a
    v-else
    :href
    :target
    class="vgui-button"
    :class="{ 'vgui-button--square': square }"
  >
    <slot />
  </a>
</template>
