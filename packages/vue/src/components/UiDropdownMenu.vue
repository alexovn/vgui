<script setup lang="ts">
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from 'reka-ui'
import type { UiMenuItem } from '../menu'
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  useForwardProps,
} from 'reka-ui'

import { computed } from 'vue'
import { useTheme } from '../theme'
import MenuItems from './MenuItems.vue'

const props = defineProps<DropdownMenuRootProps & { items: UiMenuItem[], disabled?: boolean }>()
const emit = defineEmits<DropdownMenuRootEmits & { select: [item: UiMenuItem] }>()
const rootProps = useForwardProps(
  computed(() => {
    const { items, disabled, ...root } = props
    return root
  }),
)
const theme = useTheme()
</script>

<template>
  <DropdownMenuRoot
    v-bind="rootProps"
    @update:open="emit('update:open', $event)"
  >
    <DropdownMenuTrigger
      as-child
      :disabled="disabled"
    >
      <slot name="trigger" />
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="vgui-popup"
        v-bind="{ 'data-vgui-theme': theme }"
      >
        <MenuItems
          kind="DropdownMenu"
          :items="items"
          @select="emit('select', $event)"
        />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
