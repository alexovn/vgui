import type { UiMenuItem } from '@vgui/vue'

export const options = [
  { label: 'Internet', value: 'internet' },
  { label: 'Favorites', value: 'favorites' },
  { label: 'LAN', value: 'lan' },
  { label: 'Unavailable', value: 'disabled', disabled: true },
]

export const actions: UiMenuItem[] = [
  { id: 'connect', label: 'Connect', shortcut: 'Enter' },
  { id: 'refresh', label: 'Refresh', shortcut: 'F5' },
  { id: 'separator', label: '', separator: true },
  {
    id: 'more',
    label: 'More',
    children: [
      { id: 'favorite', label: 'Add to favorites' },
    ],
  },
  { id: 'remove', label: 'Remove', disabled: true },
]
