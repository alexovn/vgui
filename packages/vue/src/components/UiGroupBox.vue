<script setup lang="ts">
const props = defineProps<{ legend?: string }>()
</script>
<template>
  <fieldset class="vgui-group">
    <legend v-if="legend">{{ legend }}</legend>
    <slot />
  </fieldset>
</template>
