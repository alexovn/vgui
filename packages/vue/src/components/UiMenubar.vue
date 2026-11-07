<script setup lang="ts">
import type { UiMenu, UiMenuItem } from '../types'

import { MenubarContent, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'reka-ui'
import { useTheme } from '../theme'
import MenuItems from './MenuItems.vue'

defineProps<{ items: UiMenu[], label?: string }>()
const emit = defineEmits<{ select: [item: UiMenuItem] }>()
const theme = useTheme()
</script>

<template>
  <MenubarRoot
    class="vgui-menubar"
    :aria-label="label"
  >
    <MenubarMenu
      v-for="menu in items"
      :key="menu.id"
      :value="menu.id"
    >
      <MenubarTrigger
        class="vgui-menu-trigger"
        :disabled="menu.disabled"
      >
        {{ menu.label }}
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="vgui-popup"
          v-bind="{ 'data-vgui-theme': theme }"
        >
          <MenuItems
            kind="Menubar"
            :items="menu.items"
            @select="emit('select', $event)"
          />
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
