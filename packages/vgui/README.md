# @vgui/css

Import `@vgui/css` for tokens, both themes, and control styles. No JavaScript or Vue is required.

```html
<div class="vgui-theme" data-vgui-theme="olive">
  <section class="vgui-panel">
    <h2 class="vgui-panel-title">Player settings</h2>
    <label class="vgui-label" for="name">Name</label>
    <input class="vgui-input" id="name" value="Gordon" />
    <button class="vgui-button" type="button">Apply</button>
  </section>
</div>
```

Switch `data-vgui-theme` to `slate`. Themes can nest. A `.vgui-theme` without an explicit theme uses olive. For selective imports use `@vgui/css/tokens.css`, `@vgui/css/themes/olive.css`, `@vgui/css/themes/slate.css`, and `@vgui/css/components.css` in that order.

Override `--vgui-bg`, `--vgui-input`, `--vgui-text`, `--vgui-muted`, `--vgui-light`, `--vgui-dark`, `--vgui-accent`, `--vgui-selection`, `--vgui-error`, `--vgui-font`, and `--vgui-font-size` on a theme scope. Layers are ordered `vgui.base`, `vgui.themes`, `vgui.components`; unlayered consumer rules can override them.

Native `:hover`, `:active`, `:focus-visible`, `:disabled`, `[readonly]`, and `[aria-invalid="true"]` states are supported. Custom markup can use `[data-disabled]`, `[data-state="on"]` on buttons, `[data-state="active"]` on tabs, `[data-highlighted]` on menu/select items, and `[data-selected]` on tree items. Checkbox indicators use `.vgui-checkmark` inside a `.vgui-checkbox` marked `data-state="checked"` or `indeterminate`. CSS defines appearance; consumers supply semantics and interaction behavior for custom markup.

System fonts start with Tahoma and fall back to Arial/sans-serif. Font rasterization varies by OS. Historical palettes retain some low-contrast disabled text; visible focus and forced-color overrides supplement them.
