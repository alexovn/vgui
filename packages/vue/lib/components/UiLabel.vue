<script setup lang="ts">
const props = defineProps<{ for?: string }>()
</script>
<template>
  <label class="vgui-label" :for="props.for"><slot /></label>
</template>
