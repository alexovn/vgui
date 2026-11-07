<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator, useForwardPropsEmits } from 'reka-ui'
import type { CheckboxRootProps, CheckboxRootEmits } from 'reka-ui'
const props = defineProps<CheckboxRootProps>()
const emit = defineEmits<CheckboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>
<template>
  <CheckboxRoot v-bind="forwarded" class="vgui-checkbox">
    <CheckboxIndicator class="vgui-checkmark" />
  </CheckboxRoot>
</template>
