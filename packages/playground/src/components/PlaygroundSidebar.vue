<script setup lang="ts">
import { UiSeparator } from '@vgui/vue'
</script>

<template>
  <aside class="pt-3 text-vgui-muted">
    <strong class="text-vgui-text">VGUI Library</strong>
    <nav class="mt-4 grid narrow:flex narrow:flex-wrap narrow:gap-3">
      <a
        class="py-[7px] text-inherit no-underline hover:text-vgui-accent"
        href="#controls"
      >Controls</a>
      <a
        class="py-[7px] text-inherit no-underline hover:text-vgui-accent"
        href="#servers"
      >Server browser</a>
      <a
        class="py-[7px] text-inherit no-underline hover:text-vgui-accent"
        href="#containers"
      >Containers</a>
      <a
        class="py-[7px] text-inherit no-underline hover:text-vgui-accent"
        href="#states"
      >Control states</a>
    </nav>
    <UiSeparator />
    <p class="my-2">
      Vue 3 + Reka UI
      <br>
      CSS / framework independent
    </p>
  </aside>
</template>
