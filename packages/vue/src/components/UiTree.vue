<script setup lang="ts">
import type { TreeRootEmits, TreeRootProps } from 'reka-ui'
import type { UiTreeNode } from '../types'
import { TreeItem, TreeRoot, useForwardPropsEmits } from 'reka-ui'

import { computed } from 'vue'

const props = defineProps<
  Omit<TreeRootProps<UiTreeNode>, 'items' | 'getKey' | 'getChildren'> & {
    nodes: UiTreeNode[]
    label: string
  }
>()
const emit = defineEmits<TreeRootEmits<UiTreeNode>>()
const forwarded = useForwardPropsEmits(
  computed(() => {
    const { nodes, label, ...root } = props
    return root
  }),
  emit,
)
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    v-bind="forwarded"
    :items="nodes"
    :get-key="(node) => node.id"
    :get-children="(node) => node.children"
    :aria-label="label"
    class="vgui-tree"
  >
    <TreeItem
      v-for="item in flattenItems"
      :key="item._id"
      v-bind="item.bind"
      v-slot="{ isExpanded, handleToggle }"
      :style="{ '--vgui-level': item.level }"
      class="vgui-tree-item"
    >
      <button
        v-if="item.hasChildren"
        type="button"
        tabindex="-1"
        class="vgui-tree-toggle"
        :aria-label="isExpanded ? 'Collapse' : 'Expand'"
        @click.stop="handleToggle"
      >
        {{ isExpanded ? '−' : '+' }}
      </button>
      <span
        v-else
        aria-hidden="true"
        style="width: 18px"
      />
      <slot
        name="node"
        :node="item.value"
        :expanded="isExpanded"
      >
        {{ item.value.label }}
      </slot>
    </TreeItem>
  </TreeRoot>
</template>
