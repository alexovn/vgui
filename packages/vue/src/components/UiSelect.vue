<script setup lang="ts">
import type { SelectRootProps } from 'reka-ui'
import type { UiOption } from '../types/option'
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  useForwardProps,
} from 'reka-ui'

import { computed, useAttrs } from 'vue'
import { useTheme } from '../theme'

defineOptions({ inheritAttrs: false })
const props = defineProps<
  Omit<SelectRootProps, 'modelValue' | 'defaultValue' | 'multiple'> & {
    modelValue?: string
    defaultValue?: string
  } & { options: UiOption[], placeholder?: string, label?: string }
>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:open': [value: boolean]
}>()
const rootProps = useForwardProps(
  computed(() => {
    const { options, placeholder, label, ...root } = props
    return root
  }),
)
const attrs = useAttrs()
const theme = useTheme()
</script>

<template>
  <SelectRoot
    v-slot="{ modelValue: currentValue }"
    v-bind="rootProps"
    @update:open="emit('update:open', $event)"
    @update:model-value="(value) => emit('update:modelValue', String(value ?? ''))"
  >
    <SelectTrigger
      v-bind="attrs"
      class="vgui-select-trigger"
      :aria-label="label"
    >
      <SelectValue :placeholder="placeholder">
        <slot
          name="value"
          :value="currentValue"
          :option="options.find((option) => option.value === currentValue)"
        >
          {{ options.find((option) => option.value === currentValue)?.label }}
        </slot>
      </SelectValue>
      <SelectIcon
        as-child
        aria-hidden="true"
      >
        <span class="vgui-select-arrow" />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent
        class="vgui-popup"
        v-bind="{ 'data-vgui-theme': theme }"
        position="popper"
        :side-offset="3"
      >
        <SelectViewport>
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            class="vgui-select-item"
          >
            <SelectItemText>
              <slot
                name="option"
                :option="option"
              >
                {{ option.label }}
              </slot>
            </SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
