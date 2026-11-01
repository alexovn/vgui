# @vgui/vue

Vue 3 SFC wrappers around native elements and Reka UI. Import the shared stylesheet explicitly with `import '@vgui/css'` and wrap the app in `UiThemeProvider`. Use named exports; component parts are internal.

## API

| Component                         | Props and bindings                                                                                                                | Slots / events                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `UiThemeProvider`                 | `theme: 'olive' \| 'slate'` (olive default)                                                                                       | default                                                                          |
| `UiButton`                        | `type` (button default), `disabled`; native attributes                                                                            | default; native click                                                            |
| `UiLabel`                         | `for`                                                                                                                             | default                                                                          |
| `UiPanel`                         | `title?`                                                                                                                          | default                                                                          |
| `UiGroupBox`                      | `legend?`                                                                                                                         | default                                                                          |
| `UiSeparator`                     | `orientation`, `decorative`                                                                                                       | —                                                                                |
| `UiInput`                         | string `v-model`; native input attributes                                                                                         | native input/change                                                              |
| `UiTextarea`                      | string `v-model`, `rows`; native textarea attributes                                                                              | native input/change                                                              |
| `UiCheckbox`                      | Reka checkbox props; `v-model` boolean or `indeterminate`, `defaultValue`, `name`, `required`, `disabled`                         | —                                                                                |
| `UiRadioGroup`                    | `options: UiOption[]`; Reka group props and `v-model`                                                                             | `option({ option })`                                                             |
| `UiSelect`                        | `options: UiOption[]`; string `v-model`, `defaultValue`, `placeholder`, `label`, `name`, `required`, `disabled`; single selection | `option({ option })`, `value({ value, option })`                                 |
| `UiSlider`                        | Reka slider props; array `v-model`, `defaultValue`, `min`, `max`, `step`; required `label`                                        | `valueCommit(number[])`                                                          |
| `UiDialog`                        | `v-model:open`, `defaultOpen`, `modal`; required `title`, `description`                                                           | `trigger`, default, `footer`                                                     |
| `UiTabs`                          | `items: UiTab[]`, required `label`; `v-model`, `defaultValue`, Reka tabs props                                                    | `tab({ item })`; named content slot matching item value, or default `({ item })` |
| `UiScrollArea`                    | native root attributes; constrain height with class/style                                                                         | default                                                                          |
| `UiTooltip`                       | required `text`, `delayDuration`                                                                                                  | default trigger                                                                  |
| `UiProgress`                      | `modelValue: number \| null`, `max` (100 default), required `label`; null means indeterminate                                     | —                                                                                |
| `UiDropdownMenu`, `UiContextMenu` | `items: UiMenuItem[]`, `disabled`; dropdown supports `v-model:open`, `defaultOpen`, `modal`, `dir`; context menu supports `modal` | `trigger`; `select(item)`                                                        |
| `UiMenubar`                       | `items: UiMenu[]`, `label?`                                                                                                       | `select(item)`                                                                   |
| `UiTable`                         | `columns`, `rows`, required `caption`, `rowKey?`                                                                                  | `cell-<key>({ row, column, value })`, `empty`                                    |
| `UiTree`                          | `nodes: UiTreeNode[]`, required `label`; Reka tree props, `v-model`, `v-model:expanded`, `defaultExpanded`                        | `node({ node, expanded })`                                                       |

`UiOption` / `UiTab`: `{ label: string; value: string; disabled?: boolean }`.
`UiMenuItem`: `{ id: string; label: string; disabled?: boolean; shortcut?: string; separator?: boolean; children?: UiMenuItem[] }`. Separator entries still require unique IDs. Menu selection emits the leaf item; consumers perform the action. Keyboard shortcut text is descriptive, not a global keybinding.
`UiMenu`: `{ id: string; label: string; items: UiMenuItem[]; disabled?: boolean }`.
`UiTreeNode`: `{ id: string; label: string; children?: UiTreeNode[] }`; selection uses node objects, expansion uses IDs.
`UiTableColumn`: `{ key: string; label: string }`; rows are `Record<string, unknown>`. Keys must be unique. The table does not own sorting or pagination.

Trigger slots for dialogs and menus and the tooltip's default slot require one focusable element, normally `UiButton`. Put labels on inputs using `UiLabel` and matching IDs, or `aria-label`. Custom option/value slots must preserve meaningful text; do not insert interactive elements into options.

Provider themes follow teleported content, including submenus. Custom CSS variables set only on ancestors do not cross portals: set overrides on `[data-vgui-theme]` for both surfaces and overlays. Without a provider the document element's theme is used, defaulting to olive.

For uncontrolled controls use `defaultValue`/`defaultOpen`; controlled controls use `v-model`. Input and textarea models use Vue's native input behavior. Reka-backed form controls retain their hidden native inputs and form integration. See the manual checklist for form reset verification. Dialog dragging, resizing, window management, virtualized trees, and grid engines are outside this release.
