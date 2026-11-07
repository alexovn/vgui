<script setup lang="ts">
import type { ContextMenuRootEmits, ContextMenuRootProps } from 'reka-ui'
import type { UiMenuItem } from '../types'
import {
  ContextMenuContent,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuTrigger,
  useForwardProps,
} from 'reka-ui'

import { computed } from 'vue'
import { useTheme } from '../theme'
import MenuItems from './MenuItems.vue'

const props = defineProps<ContextMenuRootProps & { items: UiMenuItem[], disabled?: boolean }>()
const emit = defineEmits<ContextMenuRootEmits & { select: [item: UiMenuItem] }>()
const rootProps = useForwardProps(
  computed(() => {
    const { items, disabled, ...root } = props
    return root
  }),
)
const theme = useTheme()
</script>

<template>
  <ContextMenuRoot
    v-bind="rootProps"
    @update:open="emit('update:open', $event)"
  >
    <ContextMenuTrigger
      as-child
      :disabled="disabled"
    >
      <slot name="trigger" />
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent
        class="vgui-popup"
        v-bind="{ 'data-vgui-theme': theme }"
      >
        <MenuItems
          kind="ContextMenu"
          :items="items"
          @select="emit('select', $event)"
        />
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
