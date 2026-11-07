<script setup lang="ts">
const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>()
</script>
<template>
  <button class="vgui-button" :type="type ?? 'button'" :disabled="disabled">
    <slot />
  </button>
</template>
