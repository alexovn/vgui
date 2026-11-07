import type { ComputedRef, InjectionKey } from 'vue'
import type { UiTheme } from './types'
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'

export const themeKey: InjectionKey<ComputedRef<UiTheme>> = Symbol('vgui-theme')
export function useTheme() {
  const inherited = inject(themeKey, undefined)
  const documentTheme = ref<UiTheme>('olive')
  let observer: MutationObserver | undefined
  onMounted(() => {
    if (inherited) {
      return
    }
    const update = () => {
      documentTheme.value
        = document.documentElement.dataset.vguiTheme === 'slate'
          ? 'slate'
          : 'olive'
    }
    update()
    observer = new MutationObserver(update)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-vgui-theme'],
    })
  })
  onUnmounted(() => observer?.disconnect())
  return inherited ?? computed(() => documentTheme.value)
}
