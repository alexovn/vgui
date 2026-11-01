<script setup lang="ts">
import {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
  useForwardPropsEmits,
} from 'reka-ui'
import type { RadioGroupRootProps, RadioGroupRootEmits } from 'reka-ui'
import type { UiOption } from '../types'
import { computed } from 'vue'
const props = defineProps<RadioGroupRootProps & { options: UiOption[] }>()
const emit = defineEmits<RadioGroupRootEmits>()
const forwarded = useForwardPropsEmits(
  computed(() => {
    const { options, ...root } = props
    return root
  }),
  emit,
)
</script>
<template>
  <RadioGroupRoot v-bind="forwarded" class="vgui-radio-group">
    <label
      v-for="option in options"
      :key="option.value"
      class="vgui-radio-option"
    >
      <RadioGroupItem
        :value="option.value"
        :disabled="option.disabled"
        class="vgui-radio"
      >
        <RadioGroupIndicator class="vgui-radio-dot" />
      </RadioGroupItem>
      <slot name="option" :option="option">{{ option.label }}</slot>
    </label>
  </RadioGroupRoot>
</template>
