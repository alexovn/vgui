import './attributes'

export { default as UiButton } from './components/UiButton.vue'
export { default as UiCheckbox } from './components/UiCheckbox.vue'
export { default as UiContextMenu } from './components/UiContextMenu.vue'
export { default as UiDialog } from './components/UiDialog.vue'
export { default as UiDropdownMenu } from './components/UiDropdownMenu.vue'
export { default as UiGroupBox } from './components/UiGroupBox.vue'
export { default as UiInput } from './components/UiInput.vue'
export { default as UiLabel } from './components/UiLabel.vue'
export { default as UiMenubar } from './components/UiMenubar.vue'
export { default as UiPanel } from './components/UiPanel.vue'
export { default as UiProgress } from './components/UiProgress.vue'
export { default as UiRadioGroup } from './components/UiRadioGroup.vue'
export { default as UiScrollArea } from './components/UiScrollArea.vue'
export { default as UiSelect } from './components/UiSelect.vue'
export { default as UiSeparator } from './components/UiSeparator.vue'
export { default as UiSlider } from './components/UiSlider.vue'
export { default as UiTable } from './components/UiTable.vue'
export type { UiTableColumn, UiTableRow } from './components/UiTable.vue'
export { default as UiTabs } from './components/UiTabs.vue'
export type { UiTab } from './components/UiTabs.vue'
export { default as UiTextarea } from './components/UiTextarea.vue'
export { default as UiThemeProvider } from './components/UiThemeProvider.vue'
export { default as UiTooltip } from './components/UiTooltip.vue'
export { default as UiTree } from './components/UiTree.vue'
export type { UiTreeNode } from './components/UiTree.vue'
export type { UiMenu, UiMenuItem } from './menu'
export type { UiOption } from './option'
export type { UiTheme } from './theme'

// Public wrapper prop types, including their standard DOM attributes.
export type UiButtonProps = InstanceType<
  (typeof import('./components/UiButton.vue'))['default']
>['$props']
export type UiCheckboxProps = InstanceType<
  (typeof import('./components/UiCheckbox.vue'))['default']
>['$props']
export type UiContextMenuProps = InstanceType<
  (typeof import('./components/UiContextMenu.vue'))['default']
>['$props']
export type UiDialogProps = InstanceType<
  (typeof import('./components/UiDialog.vue'))['default']
>['$props']
export type UiDropdownMenuProps = InstanceType<
  (typeof import('./components/UiDropdownMenu.vue'))['default']
>['$props']
export type UiGroupBoxProps = InstanceType<
  (typeof import('./components/UiGroupBox.vue'))['default']
>['$props']
export type UiInputProps = InstanceType<
  (typeof import('./components/UiInput.vue'))['default']
>['$props']
export type UiLabelProps = InstanceType<
  (typeof import('./components/UiLabel.vue'))['default']
>['$props']
export type UiMenubarProps = InstanceType<
  (typeof import('./components/UiMenubar.vue'))['default']
>['$props']
export type UiPanelProps = InstanceType<
  (typeof import('./components/UiPanel.vue'))['default']
>['$props']
export type UiProgressProps = InstanceType<
  (typeof import('./components/UiProgress.vue'))['default']
>['$props']
export type UiRadioGroupProps = InstanceType<
  (typeof import('./components/UiRadioGroup.vue'))['default']
>['$props']
export type UiScrollAreaProps = InstanceType<
  (typeof import('./components/UiScrollArea.vue'))['default']
>['$props']
export type UiSelectProps = InstanceType<
  (typeof import('./components/UiSelect.vue'))['default']
>['$props']
export type UiSeparatorProps = InstanceType<
  (typeof import('./components/UiSeparator.vue'))['default']
>['$props']
export type UiSliderProps = InstanceType<
  (typeof import('./components/UiSlider.vue'))['default']
>['$props']
export type UiTableProps = InstanceType<
  (typeof import('./components/UiTable.vue'))['default']
>['$props']
export type UiTabsProps = InstanceType<
  (typeof import('./components/UiTabs.vue'))['default']
>['$props']
export type UiTextareaProps = InstanceType<
  (typeof import('./components/UiTextarea.vue'))['default']
>['$props']
export type UiThemeProviderProps = InstanceType<
  (typeof import('./components/UiThemeProvider.vue'))['default']
>['$props']
export type UiTooltipProps = InstanceType<
  (typeof import('./components/UiTooltip.vue'))['default']
>['$props']
export type UiTreeProps = InstanceType<
  (typeof import('./components/UiTree.vue'))['default']
>['$props']
