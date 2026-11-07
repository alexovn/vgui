<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'reka-ui'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'

import { useTheme } from '../theme'

const props = defineProps<DialogRootProps & { title: string, description: string }>()
const emit = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(
  computed(() => {
    const { title, description, ...root } = props
    return root
  }),
  emit,
)
const theme = useTheme()
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <DialogTrigger
      v-if="$slots.trigger"
      as-child
    >
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="vgui-overlay" />
      <DialogContent
        class="vgui-dialog"
        v-bind="{ 'data-vgui-theme': theme }"
      >
        <DialogTitle class="vgui-dialog-title">
          {{ title }}
        </DialogTitle>
        <DialogDescription class="vgui-dialog-description">
          {{ description }}
        </DialogDescription>
        <DialogClose
          class="vgui-button vgui-dialog-close"
          aria-label="Close dialog"
        >
          ×
        </DialogClose>
        <slot />
        <div
          v-if="$slots.footer"
          class="vgui-dialog-footer"
        >
          <slot name="footer" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
