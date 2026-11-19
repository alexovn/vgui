<script setup lang="ts">
defineProps<{
  label: string
  group?: boolean
}>()
</script>

<template>
  <div
    v-if="group"
    class="vgui-form-field"
  >
    <span class="vgui-label">
      {{ label }}
    </span>

    <slot />
  </div>

  <label
    v-else
    class="vgui-form-field"
  >
    <span class="vgui-label">
      {{ label }}
    </span>

    <slot />
  </label>
</template>
