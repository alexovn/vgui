export type UiTheme = 'olive' | 'slate'
export interface UiOption {
  label: string
  value: string
  disabled?: boolean
}
export interface UiTab extends UiOption {}
export interface UiMenuItem {
  id: string
  label: string
  disabled?: boolean
  shortcut?: string
  separator?: boolean
  children?: UiMenuItem[]
}
export interface UiMenu {
  id: string
  label: string
  items: UiMenuItem[]
  disabled?: boolean
}
export interface UiTreeNode {
  id: string
  label: string
  children?: UiTreeNode[]
}
export interface UiTableColumn {
  key: string
  label: string
}
export type UiTableRow = Record<string, unknown>
