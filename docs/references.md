# References

The olive and slate themes are web interpretations of VGUI 2. Git revisions for visual references and bundled assets are recorded in [source-revisions.json](source-revisions.json).

## Themes

| Token | Olive | Slate |
| --- | --- | --- |
| Surface | `#4c5844` | `#464646` |
| Recessed surface | `#3e4637` | `#303030` |
| Text | `#d8ded3` | `#dedede` |
| Muted text | `#a0aa95` | `#a0a0a0` |
| Light bevel edge | `#899281` | `#c8c8c8` |
| Dark bevel edge | `#292d23` | `rgb(40 40 40 / 75%)` |
| Accent | `#c4b550` | `#e3b651` |
| Selection background | `#958831` | `#887544` |
| Scrollbar track | `#5a6a50` | `#505050` |

The olive surface, recessed surface, text, bevels, and accent follow the fork's shared Steam stylesheet. Slate adapts the grey scheme's bevels and uses opaque neutral surfaces in place of the translucent ones used over game imagery. Both themes share control dimensions and use the host application's typography. [Olive tokens][olive] · [Slate tokens][slate] · [Original vgui.css][original] · [Fork's shared Steam styles][shared] · [Grey scheme][grey] · [Olive screenshot][olive-shot] · [Grey screenshot][grey-shot]

## Controls

- **Buttons.** VGUI's armed and depressed states inform hover text and pressed bevels. Disabled buttons keep a raised, opaque face with a 1px lower-right text highlight. The olive disabled text and highlight use OG-Steam's `#282e22` and `#75806f`. Slate uses `#323232` and `#6e6e6e` from Garry's Mod's disabled label colors. [Button CSS][button] · [Valve Button.cpp][sdk-button] · [Valve Label.cpp][sdk-label] · [OG-Steam styles][og] · [Garry's Mod SourceScheme.res][gmod]
- **Tabs.** Valve's property sheet draws a taller active tab and breaks the panel border beneath it. The web join follows the cs16.css layout with centered tabs, a 2px height difference, and a 1px overlap that covers the panel line. Selected tabs use the theme accent, following OG-Steam's gold selected text in olive. [Tabs CSS][tabs] · [Valve PropertySheet.cpp][sdk-tabs] · [cs16.css demo][cs16-demo] · [cs16.css tab styles][cs16-tabs] · [OG-Steam styles][og]
- **Sliders.** The Source SDK's default horizontal geometry informs the 4px recessed track, 8 × 16px raised thumb, and eleven ticks spanning the thumb's travel. The web version uses theme colors, rotates the geometry for vertical sliders, and highlights the interval for multiple thumbs. Disabled ticks use the same recessed text colors as disabled buttons. [Slider CSS][slider] · [Valve Slider.cpp][sdk-slider] · [Half-Life 2: Deathmatch audio settings capture][hl2dm-audio]
- **Tooltips.** Static inspection of the October 8, 2004 Steam installer traced `SteamUI.dll` to `SelectionBG` (fill), `BorderSelection` (text), and `ToolTipBorder` in `TrackerScheme.res` and `TrackerScheme.res16`. The olive fill and outline are `#958831` and `#282e22`, and the grey fill and outline are `#e09c30` and `#707070`. Both use black text and a uniform 1px outline. The web tooltip uses host typography at `0.75em`, a 350ms default delay, and a 5px offset from the trigger. The inspected `steam.msi` has SHA-256 `b7c29c7eb744f79cb612cc224b428f060031afedcef64a34cb96880d1cc2fea5`. [Archived Steam installer][installer] · [Tooltip CSS][tooltip] · [Vue tooltip][vue-tooltip]

## Bundled assets

| Asset | Use and attribution |
| --- | --- |
| `checkmark.svg` | A 10 × 10 SVG rendered as a 13 × 13 CSS mask replaces the fork's theme-specific checkmark PNGs. The tick is gold in olive and white in slate. OG-Steam's `chkSelStd.tga` is the olive color reference. The mixed state uses a CSS bar in the same theme color. [Checkbox CSS][checkbox] · [Original PNG reference][fork] · [OG-Steam checkmark][og-tick] · [MIT license, Jeffrey Ellison][vgui-license] |
| `radio-dot.svg` | A 6 × 6 CSS mask merges the cs16.css checked indicator's pixel paths into one outline. The dot uses a theme token (gold in olive, white in slate) and switches to `CanvasText` in forced colors. Both checked radio and checkbox labels use the theme accent. [Radio CSS][radio] · [cs16.css radio source][cs16-radio] · [MIT license, Samuel Breznjak][cs16-license] |
| `arrow-{up,down,left,right}.svg` | Pixel arrow SVGs supply the native scrollbar buttons. The down and right arrows also serve as masks for select triggers and submenu indicators. [Scrollbar CSS][scroll] · [Select CSS][select] · [Menu CSS][menu] |
| `WineTahomaBit.ttf` | Unmodified TTF from Steamed's conversion of Xenthio's WineTahomaBit. Its embedded notice credits Wine Tahoma Regular to Larry Snyder (2004), based on Bitstream Vera Sans (Bitstream Inc., 2003). The CSS package ships the font and Steamed's LGPL 2.1 license file. The full CSS entry point registers the regular font face, and the playground applies it on `body` so teleported content inherits it. [Steamed font source][steamed] · [Bundled font license][font-license] · [Font declaration][fonts] |

## Runtime and browser support

- `@vgui/css` works with plain markup. `@vgui/vue` uses Vue 3 and pins Reka UI 2.11.0 for primitives such as select, slider, dialog, tooltip, and menus. Tailwind Preflight is loaded by the playground. [CSS package][css-package] · [Vue package][vue-package] · [Reka UI 2.11.0][reka-release] · [Playground styles][playground]
- The browser review targets current Chrome, Firefox, and Safari. Core styles use cascade layers, `:focus-visible`, `:has()` for checked labels and slider variants, SVG masks for indicators, and `dvh` for the dialog height limit. [CSS Cascade][cascade] · [Selectors][selectors] · [CSS Masking][masking] · [Viewport units][viewport]
- Native scroll containers use `scrollbar-color` or, where the browser supports `::-webkit-scrollbar`, bevels and arrow-button styling. The visible native scrollbar depends on the browser and platform settings. `UiScrollArea` uses custom tracks, thumbs, and a corner. The stylesheet also has overrides for browsers that expose forced colors. [Scrollbar CSS][scroll] · [CSS Scrollbars][scrollbars-spec] · [WebKit scrollbar styling][webkit] · [CSS Color Adjustment][forced-colors]

[olive]: ../packages/vgui/src/themes/olive.css
[slate]: ../packages/vgui/src/themes/slate.css
[original]: https://github.com/AlpyneDreams/vgui.css/tree/d8b12f50a89f7f0c59e3a0cb39f07cd8ca5f0ae7
[fork]: https://github.com/leonill007/vgui.css/tree/0c74bb765fa32219a26aa9a4db506a38dc857b16
[shared]: https://github.com/leonill007/vgui.css/blob/0c74bb765fa32219a26aa9a4db506a38dc857b16/styles/steam_shared.less
[grey]: https://github.com/leonill007/vgui.css/blob/0c74bb765fa32219a26aa9a4db506a38dc857b16/styles/greysteam/greysteam.less
[olive-shot]: https://github.com/leonill007/vgui.css/blob/0c74bb765fa32219a26aa9a4db506a38dc857b16/screenshots/greensteam1.png
[grey-shot]: https://github.com/leonill007/vgui.css/blob/0c74bb765fa32219a26aa9a4db506a38dc857b16/screenshots/greysteam1.png
[button]: ../packages/vgui/src/components/button.css
[sdk-button]: https://github.com/ValveSoftware/source-sdk-2013/blob/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0/src/vgui2/vgui_controls/Button.cpp
[sdk-label]: https://github.com/ValveSoftware/source-sdk-2013/blob/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0/src/vgui2/vgui_controls/Label.cpp
[og]: https://github.com/ungstein/OG-Steam/blob/411aa955e76759bf24cee9dc38fa459cb9040823/OG-Steam/resource/styles/steam.styles
[gmod]: https://github.com/Facepunch/garrysmod/blob/ad8023410600199ad9a12444bc496b9d65226a82/garrysmod/resource/SourceScheme.res
[tabs]: ../packages/vgui/src/components/tabs.css
[sdk-tabs]: https://github.com/ValveSoftware/source-sdk-2013/blob/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0/src/vgui2/vgui_controls/PropertySheet.cpp
[cs16-demo]: https://cs16.samke.me/
[cs16-tabs]: https://github.com/ekmas/cs16.css/blob/main/css/cs16.css
[slider]: ../packages/vgui/src/components/slider.css
[sdk-slider]: https://github.com/ValveSoftware/source-sdk-2013/blob/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0/src/vgui2/vgui_controls/Slider.cpp
[hl2dm-audio]: https://university.hl2dm.com/img/guides/options_audio.png
[installer]: https://archive.org/details/steam_10-08-2004
[tooltip]: ../packages/vgui/src/components/tooltip.css
[vue-tooltip]: ../packages/vue/src/components/UiTooltip.vue
[checkbox]: ../packages/vgui/src/components/checkbox.css
[og-tick]: https://github.com/ungstein/OG-Steam/blob/411aa955e76759bf24cee9dc38fa459cb9040823/OG-Steam/graphics/chkSelStd.tga
[vgui-license]: ../packages/vgui/LICENSE.vgui-css
[radio]: ../packages/vgui/src/components/radio-group.css
[cs16-radio]: https://github.com/ekmas/cs16.css/blob/bc0cb3d93e24aa2786a2d93938807f0264743b9d/src/cs16.css
[cs16-license]: ../packages/vgui/LICENSE.cs16-css
[scroll]: ../packages/vgui/src/components/scroll-area.css
[select]: ../packages/vgui/src/components/select.css
[menu]: ../packages/vgui/src/components/menu.css
[steamed]: https://github.com/gaspar-of-time/Steamed/tree/5dfeb485a43fab22d140ae54a82c1b7471f64cb4/fonts
[font-license]: ../packages/vgui/LICENSE.WineTahomaBit
[fonts]: ../packages/vgui/src/fonts.css
[css-package]: ../packages/vgui/package.json
[vue-package]: ../packages/vue/package.json
[reka-release]: https://github.com/unovue/reka-ui/releases/tag/v2.11.0
[playground]: ../packages/playground/src/style.css
[cascade]: https://www.w3.org/TR/css-cascade-5/#layering
[selectors]: https://www.w3.org/TR/selectors-4/
[masking]: https://www.w3.org/TR/css-masking-1/
[viewport]: https://www.w3.org/TR/css-values-4/#viewport-relative-lengths
[scrollbars-spec]: https://www.w3.org/TR/css-scrollbars-1/
[webkit]: https://webkit.org/blog/363/styling-scrollbars/
[forced-colors]: https://www.w3.org/TR/css-color-adjust-1/#forced-colors-mode
