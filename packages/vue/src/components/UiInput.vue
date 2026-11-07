<script setup lang="ts">
import { useForwardExpose } from 'reka-ui'

const model = defineModel<string>({ default: '' })
useForwardExpose()
</script>

<template>
  <input
    v-model="model"
    class="vgui-input"
  >
</template>
