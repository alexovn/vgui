<script setup lang="ts">
import type { UiMenuItem } from '../types/menu'
import {
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  MenubarItem,
  MenubarPortal,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from 'reka-ui'

import { computed } from 'vue'
import { useTheme } from '../theme'

const props = defineProps<{
  kind: 'DropdownMenu' | 'ContextMenu' | 'Menubar'
  items: UiMenuItem[]
}>()
const emit = defineEmits<{ select: [item: UiMenuItem] }>()
const menuParts = {
  DropdownMenu: {
    Item: DropdownMenuItem,
    Separator: DropdownMenuSeparator,
    Sub: DropdownMenuSub,
    SubTrigger: DropdownMenuSubTrigger,
    Portal: DropdownMenuPortal,
    SubContent: DropdownMenuSubContent,
  },
  ContextMenu: {
    Item: ContextMenuItem,
    Separator: ContextMenuSeparator,
    Sub: ContextMenuSub,
    SubTrigger: ContextMenuSubTrigger,
    Portal: ContextMenuPortal,
    SubContent: ContextMenuSubContent,
  },
  Menubar: {
    Item: MenubarItem,
    Separator: MenubarSeparator,
    Sub: MenubarSub,
    SubTrigger: MenubarSubTrigger,
    Portal: MenubarPortal,
    SubContent: MenubarSubContent,
  },
}
const parts = computed(() => menuParts[props.kind])
const theme = useTheme()
</script>

<template>
  <template
    v-for="item in items"
    :key="item.id"
  >
    <component
      :is="parts.Separator"
      v-if="item.separator"
      class="vgui-separator"
    />
    <component
      :is="parts.Sub"
      v-else-if="item.children"
    >
      <component
        :is="parts.SubTrigger"
        class="vgui-menu-item"
        :disabled="item.disabled"
      >
        {{ item.label }}
        <span
          class="vgui-menu-shortcut vgui-menu-submenu-arrow"
          aria-hidden="true"
        />
      </component>
      <component :is="parts.Portal">
        <component
          :is="parts.SubContent"
          class="vgui-popup"
          v-bind="{ 'data-vgui-theme': theme }"
          :side-offset="2"
        >
          <MenuItems
            :kind="kind"
            :items="item.children"
            @select="emit('select', $event)"
          />
        </component>
      </component>
    </component>
    <component
      :is="parts.Item"
      v-else
      class="vgui-menu-item"
      :disabled="item.disabled"
      @select="emit('select', item)"
    >
      {{ item.label }}
      <span
        v-if="item.shortcut"
        class="vgui-menu-shortcut"
      >
        {{ item.shortcut }}
      </span>
    </component>
  </template>
</template>
