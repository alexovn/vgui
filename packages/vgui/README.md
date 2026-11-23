# @alexovn/vgui

VGUI-inspired styles for HTML controls in olive and slate. Import the stylesheet through your app's CSS or build tool. The package works with plain HTML and inherits your app's typography.

## Installation

```sh
npm install @alexovn/vgui
```

## API

| Import | Includes |
| --- | --- |
| `@alexovn/vgui` | Tokens, both themes, the WineTahomaBit font face, and all controls |
| `@alexovn/vgui/tokens.css` | Base tokens and styles, including the default olive theme |
| `@alexovn/vgui/themes/olive.css` | Default olive palette on VGUI theme scopes |
| `@alexovn/vgui/themes/slate.css` | Slate palette for `data-vgui-theme="slate"` |
| `@alexovn/vgui/components.css` | All controls and shared states |
| `@alexovn/vgui/common.css` | Shared focus, disabled, and invalid styles for individual imports |
| `@alexovn/vgui/components/<name>.css` | Individual control styles and their stylesheet dependencies |
| `@alexovn/vgui/fonts.css`, `@alexovn/vgui/assets/*` | Font-face registration and direct asset imports |

Set `data-vgui-theme="olive"` or `data-vgui-theme="slate"` on a container. Theme scopes can nest. A container with only `class="vgui-theme"` uses olive. Override `--vgui-bg`, `--vgui-input`, `--vgui-text`, `--vgui-accent`, and other tokens on the theme scope. VGUI layers are ordered `vgui.base`, `vgui.themes`, then `vgui.components`.

Use `disabled`, `readonly`, and `aria-invalid="true"` for native controls. Custom controls can style states with `data-disabled`, `data-state="on"` for pressed buttons, `data-state="active"` for tabs, or `data-highlighted` for menu and select items. For a custom checkbox indicator, place `.vgui-checkmark` inside `.vgui-checkbox` and set `data-state` to `checked` or `indeterminate` on the checkbox. Supply keyboard behavior and accessible semantics in the markup or application.

Add `.vgui-native-scrollbar` to an overflow container for themed native scrollbars. The class is included in `scroll-area.css`. Use `tabindex="0"` and an accessible name for a keyboard-scrollable region.

## Examples

### Plain HTML controls

```css
@import '@alexovn/vgui';
```

```html
<section class="vgui-panel" data-vgui-theme="olive">
  <h2 class="vgui-panel-title">Player settings</h2>
  <label class="vgui-label" for="player">Player name</label>
  <input class="vgui-input" id="player" value="Gordon" />
  <button class="vgui-button" type="button">Apply</button>
</section>
```

### Import one control and customize its theme

```css
@import '@alexovn/vgui/tokens.css';
@import '@alexovn/vgui/themes/slate.css';
@import '@alexovn/vgui/common.css';
@import '@alexovn/vgui/components/button.css';

[data-vgui-theme='slate'] {
  --vgui-accent: #f2ca72;
}
```

```html
<div data-vgui-theme="slate">
  <button class="vgui-button" type="button">Refresh</button>
</div>
```

### Use Tailwind Preflight and the bundled font

```css
@layer theme, base, vgui, components, utilities;
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import '@alexovn/vgui';
@import 'tailwindcss/utilities.css' layer(utilities);

body {
  font-family: WineTahomaBit, Tahoma, Arial, sans-serif;
}
```

For individual imports, add `@alexovn/vgui/fonts.css` to register WineTahomaBit. The regular face ships with its [LGPL 2.1 license](LICENSE.WineTahomaBit).
