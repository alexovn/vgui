<script setup lang="ts">
import type { SliderRootProps } from 'reka-ui'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<SliderRootProps & { label: string }>()
const emit = defineEmits<{
  'update:modelValue': [value: number[]]
  'valueCommit': [value: number[]]
}>()
const forwarded = useForwardProps(
  computed(() => {
    const { label, ...root } = props
    return root
  }),
)
</script>

<template>
  <SliderRoot
    v-bind="forwarded"
    class="vgui-slider"
    @update:model-value="emit('update:modelValue', $event ?? [])"
    @value-commit="emit('valueCommit', $event)"
  >
    <SliderTrack class="vgui-slider-track">
      <SliderRange class="vgui-slider-range" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, index) in modelValue ?? defaultValue ?? [0]"
      :key="index"
      :aria-label="`${label} ${index + 1}`"
      class="vgui-slider-thumb"
    />
  </SliderRoot>
</template>
