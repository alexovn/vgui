<script setup lang="ts">
import { useId } from 'vue'
import UiLabel from './UiLabel.vue'

const props = defineProps<{ label: string, for?: string }>()
const generatedId = useId()
</script>

<template>
  <div class="vgui-form-field">
    <UiLabel :for="props.for ?? generatedId">
      {{ label }}
    </UiLabel>
    <slot :id="props.for ?? generatedId" />
  </div>
</template>
