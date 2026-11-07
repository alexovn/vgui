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

Controls inherit the host application’s font family, size, and line height. Theme selectors only apply palette tokens, text color, and color scheme; they do not set typography. Set fonts on your application container. Panel and dialog titles inherit that font with bold weight.

Switch `data-vgui-theme` to `slate`. Themes can nest. A `.vgui-theme` without an explicit theme uses olive. For selective imports use `@vgui/css/tokens.css`, `@vgui/css/themes/olive.css`, `@vgui/css/themes/slate.css`, and `@vgui/css/components.css` in that order.

For individual controls, replace `components.css` with `common.css` followed by the component stylesheets you use:

```css
@import '@vgui/css/tokens.css';
@import '@vgui/css/themes/olive.css';
@import '@vgui/css/common.css';
@import '@vgui/css/components/button.css';
@import '@vgui/css/components/select.css';
```

Load `common.css` once, before the component stylesheets. It provides shared focus, disabled, and invalid states, including forced-colors focus styles. Component stylesheets own their base appearance, component-specific states, and accessibility overrides. They require tokens and common styles; they do not select a theme. Tokens supply the default olive palette, and theme imports provide explicit palette selection.

Available component stylesheets under `@vgui/css/components/` are `button.css`, `checkbox.css`, `dialog.css`, `group-box.css`, `input.css`, `label.css`, `menu.css`, `panel.css`, `popup.css`, `progress.css`, `radio-group.css`, `scroll-area.css`, `select.css`, `separator.css`, `slider.css`, `table.css`, `tabs.css`, `textarea.css`, `tooltip.css`, and `tree.css`.

Component dependencies are imported automatically:

| Stylesheet   | Imports                      | Coverage                                              |
| ------------ | ---------------------------- | ----------------------------------------------------- |
| `select.css` | `popup.css`                  | Select trigger, popup, and options                    |
| `menu.css`   | `popup.css`, `separator.css` | Dropdown menus, context menus, submenus, and menubars |
| `dialog.css` | `button.css`                 | Dialog, overlay, and close button                     |

Import styles separately for controls supplied through slots, such as a dropdown trigger button or dialog footer controls. Shared border and surface declarations are intentionally repeated where that keeps component ownership clear. Some components repeat disabled text or cursor declarations to preserve the original cascade when common styles load first. `components.css` remains the aggregate for all controls, and `@vgui/css` remains the complete entry point. Splitting files only reduces bundled CSS when you use selective imports; importing either aggregate still includes every component.

Override `--vgui-bg`, `--vgui-input`, `--vgui-text`, `--vgui-muted`, `--vgui-light`, `--vgui-dark`, `--vgui-accent`, `--vgui-selection`, and `--vgui-error` on a theme scope. Layers are ordered `vgui.base`, `vgui.themes`, `vgui.components`; unlayered consumer rules can override them.

A CSS reset is optional. When using Tailwind Preflight, declare the layer order before importing styles so the VGUI controls override the reset and Tailwind utilities can override the controls:

```css
@layer theme, base, vgui, components, utilities;
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import '@vgui/css';
@import 'tailwindcss/utilities.css' layer(utilities);
```

The control styles explicitly define group-box spacing, separate table borders, placeholder colors, dialog-description spacing, and textarea resizing in both directions. These defaults apply with or without Preflight. Tailwind is not required by this package.

Native `:hover`, `:active`, `:focus-visible`, `:disabled`, `[readonly]`, and `[aria-invalid="true"]` states are supported. Custom markup can use `[data-disabled]`, `[data-state="on"]` on buttons, `[data-state="active"]` on tabs, `[data-highlighted]` on menu/select items, and `[data-selected]` on tree items. Checkbox indicators use `.vgui-checkmark` inside a `.vgui-checkbox` marked `data-state="checked"` or `indeterminate`. CSS defines appearance; consumers supply semantics and interaction behavior for custom markup.

Controls inherit host fonts; the playground explicitly uses Tahoma with Arial/sans-serif fallbacks. Font rasterization varies by OS. Historical palettes retain some low-contrast disabled text; visible focus and forced-color overrides supplement them.
