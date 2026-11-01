import type { HTMLAttributes } from 'vue'
// Reka primitives forward standard DOM attributes to their rendered element.
declare module 'vue' {
  interface HTMLAttributes {
    'data-vgui-theme'?: 'olive' | 'slate'
    'data-state'?: string
  }
  interface ComponentCustomProps extends Omit<HTMLAttributes, 'onSelect'> {
    name?: string
    readonly?: boolean
    required?: boolean
    disabled?: boolean
    placeholder?: string
    autocomplete?: string
    dataState?: string
  }
}
export {}
