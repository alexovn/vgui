<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from 'reka-ui'
import type { UiTab } from '../types'
import { TabsContent, TabsList, TabsRoot, TabsTrigger, useForwardPropsEmits } from 'reka-ui'

import { computed } from 'vue'

const props = defineProps<TabsRootProps & { items: UiTab[], label: string }>()
const emit = defineEmits<TabsRootEmits>()
const forwarded = useForwardPropsEmits(
  computed(() => {
    const { items, label, ...root } = props
    return root
  }),
  emit,
)
</script>

<template>
  <TabsRoot
    v-bind="forwarded"
    :default-value="defaultValue ?? items[0]?.value"
  >
    <TabsList
      class="vgui-tabs-list"
      :aria-label="label"
    >
      <TabsTrigger
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        class="vgui-tab"
      >
        <slot
          name="tab"
          :item="item"
        >
          {{ item.label }}
        </slot>
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      class="vgui-tab-content"
    >
      <slot
        :name="item.value"
        :item="item"
      >
        <slot :item="item" />
      </slot>
    </TabsContent>
  </TabsRoot>
</template>
