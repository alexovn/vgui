<script setup lang="ts">
const props = defineProps<{ title?: string }>()
</script>
<template>
  <section class="vgui-panel">
    <h2 v-if="title" class="vgui-panel-title">{{ title }}</h2>
    <slot />
  </section>
</template>
