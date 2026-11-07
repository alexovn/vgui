<script setup lang="ts">
import type { UiTableColumn, UiTableRow } from '../types'

defineProps<{
  columns: UiTableColumn[]
  rows: UiTableRow[]
  caption: string
  rowKey?: string
}>()
</script>

<template>
  <table class="vgui-table">
    <caption>
      {{ caption }}
    </caption>
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.key"
          scope="col"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in rows"
        :key="rowKey ? String(row[rowKey]) : index"
      >
        <td
          v-for="column in columns"
          :key="column.key"
        >
          <slot
            :name="`cell-${column.key}`"
            :row="row"
            :column="column"
            :value="row[column.key]"
          >
            {{ row[column.key] }}
          </slot>
        </td>
      </tr>
      <tr v-if="!rows.length">
        <td :colspan="columns.length">
          <slot name="empty">
            No items.
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
