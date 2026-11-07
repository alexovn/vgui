<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ modelValue?: number | null, max?: number, label: string }>(),
  { modelValue: null, max: 100 },
)
const maxValue = computed(() => (props.max > 0
  ? props.max
  : 100))
const value = computed(() =>
  props.modelValue == null
    ? null
    : Math.max(0, Math.min(maxValue.value, props.modelValue)),
)
</script>

<template>
  <ProgressRoot
    :model-value="value"
    :max="maxValue"
    :aria-label="label"
    class="vgui-progress"
  >
    <ProgressIndicator
      class="vgui-progress-indicator"
      :style="{
        width: value == null ? '100%' : `${(value / maxValue) * 100}%`,
      }"
    />
  </ProgressRoot>
</template>
