<script setup lang="ts">
import { useForwardExpose } from 'reka-ui'

defineProps<{ rows?: number | string }>()
const model = defineModel<string>({ default: '' })
useForwardExpose()
</script>

<template>
  <textarea
    v-model="model"
    :rows="rows"
    class="vgui-textarea"
  />
</template>
