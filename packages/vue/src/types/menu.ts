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
