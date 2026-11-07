<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<CheckboxRootProps>()
const emit = defineEmits<CheckboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    class="vgui-checkbox"
  >
    <CheckboxIndicator class="vgui-checkmark" />
  </CheckboxRoot>
</template>
