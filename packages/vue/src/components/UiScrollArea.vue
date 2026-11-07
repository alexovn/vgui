<script setup lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'reka-ui'
</script>

<template>
  <ScrollAreaRoot
    class="vgui-scroll-area"
    type="auto"
  >
    <ScrollAreaViewport
      class="vgui-scroll-viewport"
      tabindex="0"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      class="vgui-scrollbar"
      orientation="vertical"
    >
      <ScrollAreaThumb class="vgui-scroll-thumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      class="vgui-scrollbar"
      orientation="horizontal"
    >
      <ScrollAreaThumb class="vgui-scroll-thumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
