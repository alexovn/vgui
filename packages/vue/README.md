# @vgui/vue

Vue 3 controls for the olive and slate VGUI themes. Import components by name from `@vgui/vue` and load `@vgui/css` in your app entry point. Reka UI primitives are internal to the wrappers.

## API

The table lists the main props and bindings. Each component exports a corresponding `Ui*Props` type for the full TypeScript API.

| Component | Props and bindings | Slots and events |
| --- | --- | --- |
| `UiThemeProvider` | Optional `theme` (`olive` by default or `slate`) | Default slot |
| `UiButton` | `type` (`button` by default), `disabled` for buttons, `href` and `target` for links, `square` | Default slot, native click |
| `UiLabel` | Optional `for` | Default slot |
| `UiFormField` | Required `label`, optional `group` | Default slot |
| `UiPanel` | Optional `title` | Default slot |
| `UiGroupBox` | Optional `legend` | Default slot |
| `UiSeparator` | `orientation` (`horizontal` by default), `decorative` (`true` by default) | — |
| `UiInput`, `UiTextarea` | String `v-model`, native attributes, `rows` on textarea | Native input and change |
| `UiCheckbox` | `v-model` (boolean by default, also supports `indeterminate`), `defaultValue`, `name`, `required`, `disabled` | — |
| `UiRadioGroup` | Required `options: UiOption[]`, `v-model`, `defaultValue`, `name`, `required`, `disabled` | `option({ option })` |
| `UiSelect` | Required `options: UiOption[]`, string `v-model`, `defaultValue`, `v-model:open`, `defaultOpen`, `placeholder`, `label`, `name`, `required`, `disabled` | `option({ option })`, `value({ value, option })` |
| `UiSlider` | Required `label`, `v-model` and `defaultValue` as `number[]`, `min`, `max`, `step`, `orientation`, `disabled`, optional `minCaption` and `maxCaption` | `valueCommit(number[])` |
| `UiDialog` | Required `title` and `description`, `v-model:open`, `defaultOpen`, `modal` | `trigger`, default, `footer` |
| `UiTabs` | Required `items: UiTab[]` and `label`, `v-model`, `defaultValue`, `orientation`, `activationMode` | `tab({ item })`, content slot named for the tab value or default `({ item })` |
| `UiScrollArea` | Native attributes. Set a height or width constraint to create overflow | Default slot |
| `UiTooltip` | Required `text`, optional `delayDuration` (350 ms by default) | Default trigger slot |
| `UiProgress` | Required `label`, `modelValue` (`null` for indeterminate), `max` (100 by default) | — |
| `UiDropdownMenu`, `UiContextMenu` | Required `items: UiMenuItem[]`, `disabled`, `modal`. Dropdown also supports `v-model:open` and `defaultOpen` | `trigger`, `select(item)` |
| `UiMenubar` | Required `items: UiMenu[]`, optional `label` | `select(item)` |
| `UiTable` | Required `columns: UiTableColumn[]`, `rows: UiTableRow[]`, and `caption`. Optional `rowKey` names the row's unique key field | `cell-<key>({ row, column, value })`, `empty` |
| `UiTree` | Required `nodes: UiTreeNode[]` and `label`. Select node objects with `v-model` and track expanded node IDs with `v-model:expanded` or `defaultExpanded` | `node({ node, expanded })` |

- `UiOption` and `UiTab` have string `label` and `value` fields and optional `disabled`.
- `UiMenuItem` has string `id` and `label` fields, with optional `disabled`, `shortcut`, `separator`, and nested `children`. Handle leaf actions in `@select`. Shortcut text is display-only. `UiMenu` groups items under an `id` and `label`.
- `UiTreeNode` has string `id` and `label` fields and optional `children`. `UiTableColumn` has string `key` and `label` fields. A `UiTableRow` is a `Record<string, unknown>`.

Use `UiFormField` with one labelable control. For composite controls, pass `group` and provide an accessible name on the control itself. Use a single focusable element in dialog, menu, and tooltip trigger slots.

`UiThemeProvider` passes its theme to teleported overlays. Without a provider, overlays use the document theme, which defaults to olive. Set app-wide fonts on `body` and theme token overrides on `[data-vgui-theme]` to reach overlays.

## Examples

### Themed form fields

```vue
<script setup lang="ts">
import { UiFormField, UiInput, UiSelect, UiThemeProvider } from '@vgui/vue'
import { ref } from 'vue'
import '@vgui/css'

const name = ref('')
const source = ref('internet')
const sources = [
  { label: 'Internet', value: 'internet' },
  { label: 'LAN', value: 'lan' },
]
</script>

<template>
  <UiThemeProvider theme="olive">
    <UiFormField label="Player name">
      <UiInput
        v-model="name"
        name="player"
      />
    </UiFormField>
    <UiFormField
      label="Server source"
      group
    >
      <UiSelect
        v-model="source"
        :options="sources"
        label="Server source"
      />
    </UiFormField>
  </UiThemeProvider>
</template>
```

### Slider with endpoint captions

```vue
<script setup lang="ts">
import { UiSlider } from '@vgui/vue'
</script>

<template>
  <UiSlider
    :default-value="[50]"
    :min="0"
    :max="100"
    label="Game volume"
    min-caption="Low"
    max-caption="High"
  />
</template>
```

### Dialog with a trigger

```vue
<script setup lang="ts">
import { UiButton, UiDialog } from '@vgui/vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <UiDialog
    v-model:open="open"
    title="Connection details"
    description="Current server information."
  >
    <template #trigger>
      <UiButton>Connection details</UiButton>
    </template>

    <p>Connected over LAN.</p>

    <template #footer>
      <UiButton @click="open = false">
        OK
      </UiButton>
    </template>
  </UiDialog>
</template>
```
