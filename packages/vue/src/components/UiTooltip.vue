<script setup lang="ts">
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
} from 'reka-ui'

import { useTheme } from '../theme'
defineProps<{ text: string; delayDuration?: number }>()
const theme = useTheme()
</script>
<template>
  <TooltipProvider :delay-duration="delayDuration ?? 350">
    <TooltipRoot>
      <TooltipTrigger as-child><slot /></TooltipTrigger>
      <TooltipPortal>
        <TooltipContent class="vgui-tooltip" v-bind="{ 'data-vgui-theme': theme }" :side-offset="5">
          {{ text }}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
