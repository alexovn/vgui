import type { UiMenuItem } from '@alexovn/vgui-vue'

export const options = [
  { label: 'Internet', value: 'internet' },
  { label: 'Favorites', value: 'favorites' },
  { label: 'LAN', value: 'lan' },
  { label: 'Friends (unavailable)', value: 'friends', disabled: true },
]

export const connectionOptions = [
  { label: 'Broadband', value: 'broadband' },
  { label: 'DSL', value: 'dsl' },
  { label: 'Dial-up', value: 'dial-up' },
]

export const actions: UiMenuItem[] = [
  { id: 'connect', label: 'Connect to server', shortcut: 'Enter' },
  { id: 'refresh', label: 'Refresh server list', shortcut: 'F5' },
  { id: 'separator', label: '', separator: true },
  {
    id: 'more',
    label: 'Favorites',
    children: [
      { id: 'favorite', label: 'Add to favorites' },
    ],
  },
  { id: 'remove', label: 'Remove from favorites', disabled: true },
]
