<script setup lang="ts">
import type { SliderRootProps } from 'reka-ui'
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardProps,
} from 'reka-ui'
import { computed, useId } from 'vue'

const props = defineProps<SliderRootProps & {
  label: string
  minCaption?: string
  maxCaption?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number[]]
  'valueCommit': [value: number[]]
}>()

const captionsId = useId()
const hasCaptions = computed(() => Boolean(props.minCaption || props.maxCaption))
const forwarded = useForwardProps(
  computed(() => {
    const { label, minCaption, maxCaption, ...root } = props
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
      :aria-describedby="hasCaptions ? captionsId : undefined"
      class="vgui-slider-thumb"
    />
    <span
      v-if="hasCaptions"
      :id="captionsId"
      class="vgui-slider-captions"
      :class="{ 'vgui-slider-captions--inverted': inverted }"
    >
      <span dir="auto">{{ minCaption }}</span>
      <span dir="auto">{{ maxCaption }}</span>
    </span>
  </SliderRoot>
</template>
