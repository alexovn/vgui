# Reference inventory

Source revisions are pinned in [source-revisions.json](source-revisions.json), initially captured on 2026-11-01; the Steamed font was added on 2026-11-14. This is a web interpretation of VGUI 2; historical applications and platforms have different schemes.

| Reference                                                                                                                                                | Use                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Valve VGUI documentation](https://developer.valvesoftware.com/wiki/VGUI_Documentation)                                                                  | Conceptual reference; the site returned HTTP 403 during implementation.                                                                                                                                                                                                                                                                                                                                             |
| [OG-Steam](https://github.com/ungstein/OG-Steam/tree/411aa955e76759bf24cee9dc38fa459cb9040823)                                                           | `OG-Steam/resource/styles/steam.styles`: Tahoma-family typography, off-white and muted text, control-state naming. The file mixes newer Steam overrides; it is not a single canonical olive palette.                                                                                                                                                                                                                |
| [Source SDK 2013](https://github.com/ValveSoftware/source-sdk-2013/tree/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0)                                        | `src/vgui2/vgui_controls/Button.cpp`: armed/depressed states and scheme-controlled borders.                                                                                                                                                                                                                                                                                                                         |
| [Garry's Mod SourceScheme.res](https://github.com/Facepunch/garrysmod/blob/ad8023410600199ad9a12444bc496b9d65226a82/garrysmod/resource/SourceScheme.res) | Border lighting and control-state comparison. Custom GMod frame and blue/white button colors are not applied wholesale.                                                                                                                                                                                                                                                                                             |
| [AlpyneDreams/vgui.css](https://github.com/AlpyneDreams/vgui.css/tree/d8b12f50a89f7f0c59e3a0cb39f07cd8ca5f0ae7)                                          | Original CSS reference and upstream attribution for the fork's assets.                                                                                                                                                                                                                                                                                                                                              |
| [leonill007/vgui.css](https://github.com/leonill007/vgui.css/tree/0c74bb765fa32219a26aa9a4db506a38dc857b16)                                              | `styles/steam_shared.less`, greensteam and greysteam definitions, and original 13×13 checkmark assets. [Olive screenshot](https://github.com/leonill007/vgui.css/blob/0c74bb765fa32219a26aa9a4db506a38dc857b16/screenshots/greensteam1.png), [slate screenshot](https://github.com/leonill007/vgui.css/blob/0c74bb765fa32219a26aa9a4db506a38dc857b16/screenshots/greysteam1.png). Human comparison remains pending. |
| [cs16.css](https://github.com/ekmas/cs16.css/tree/bc0cb3d93e24aa2786a2d93938807f0264743b9d)                                                              | Secondary palette comparison; its `#4a5942` surface differs from the Steam `#4c5844` surface.                                                                                                                                                                                                                                                                                                                       |
| [Reka llms.txt](https://reka-ui.com/llms.txt)                                                                                                            | Component anatomy and accessibility documentation index; installed Reka 2.11.0 implementation/types used to verify bindings.                                                                                                                                                                                                                                                                                        |

## Theme mapping

| Token / behavior | Olive                                                               | Slate / interpretation                     |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| Surface          | `#4c5844` from steam_shared                                         | `#464646`, neutral slate surface           |
| Input            | `#3e4637` from steam_shared                                         | `#303030`, neutral recessed surface        |
| Text             | `#d8ded3`                                                           | `#dedede`                                  |
| Highlight border | `#899281` from steam_shared                                         | `#c8c8c8` from grey scheme border lighting |
| Shadow border    | `#292d23` from steam_shared                                         | `rgb(40 40 40 / 75%)` from greysteam       |
| Accent           | `#c4b550`                                                           | `#e3b651`, web selection/focus accent      |
| Density          | Host font size, 24px minimum buttons, 1px bevels | Same metrics                               |
| Fonts            | WineTahomaBit, Tahoma, Arial, sans-serif                                           | Same bundled font and fallback stack                 |
| States           | Armed → hover; depressed → active/pressed; selected → data state    | Same semantic mapping                      |

The grey CSS reference uses translucent surfaces over a game screenshot; the web theme resolves these to opaque surfaces for predictable composition. Rounded game window corners, background screenshots, Steam logos, and proprietary fonts are not redistributed. Semantic error/focus states supplement original schemes. These adaptations require visual sign-off before claiming pixel fidelity.

## Disabled buttons

Disabled buttons preserve the raised bevel and opaque face, with dark text over a lighter copy offset by 1px right and down. [Valve's label renderer](https://github.com/ValveSoftware/source-sdk-2013/blob/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0/src/vgui2/vgui_controls/Label.cpp) draws the two layers; the pinned OG-Steam `steam.styles` also explicitly pairs `DisabledText2` with `DisabledText1` for disabled buttons. Olive uses `#282e22` for the foreground and `#75806f` for the highlight. Slate uses neutral `#323232` and `#6e6e6e`, adapted from the pinned SourceScheme disabled label colors; this is not a claim of an exact historical grey Steam palette. Separate button tokens keep informational muted text unchanged. Forced colors use `GrayText` without the text shadow.

## Asset provenance

The radio uses `packages/vgui/src/assets/radio-dot.svg` as a centered 6×6 CSS mask.
Its geometry matches the checked radio indicator in
[cs16.css at the pinned revision](https://github.com/ekmas/cs16.css/blob/bc0cb3d93e24aa2786a2d93938807f0264743b9d/src/cs16.css),
with the individual pixel paths merged into one outline. The mask inherits the radio's text
color in both themes and uses `CanvasText` in forced colors. The upstream MIT license,
copyright Samuel Breznjak (2025), is included in the CSS package as `LICENSE.cs16-css`.

The checkbox uses `packages/vgui/src/assets/checkmark.svg` as a centered 13×13 CSS mask for checked state, replacing the fork's original theme-specific PNGs. The `--vgui-checkmark-color` token preserves the gold olive tick (`#c4b550`), matching [OG-Steam's chkSelStd.tga](https://github.com/ungstein/OG-Steam/blob/411aa955e76759bf24cee9dc38fa459cb9040823/OG-Steam/graphics/chkSelStd.tga), and the white slate tick. Mixed state uses a CSS bar, and forced colors use a system-color CSS indicator without the mask. The fork's MIT license, copyright Jeffrey Ellison (2021), remains included in the CSS package as `LICENSE.vgui-css`.

## Browser feature review

All styling features below predate 2026. Target current stable Chrome, Firefox, and Safari. No CSS nesting, experimental anchor positioning, or browser-specific scrollbar pseudo-elements are required.

| Feature                 | MDN                                                                               | Can I Use                                             | Cross-browser availability              |
| ----------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------- |
| Cascade layers          | [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)                 | [Support](https://caniuse.com/css-cascade-layers)     | Chrome 99+, Firefox 97+, Safari 15.4+   |
| Visible keyboard focus  | [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) | [Support](https://caniuse.com/css-focus-visible)      | Chrome 86+, Firefox 85+, Safari 15.4+   |
| Dynamic viewport height | [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)                 | [Support](https://caniuse.com/viewport-unit-variants) | Chrome 108+, Firefox 101+, Safari 15.4+ |

Custom properties, flexbox, grid, `min()`, `calc()`, logical spacing, and `:where()`/`:is()` are established features in this target. The desktop playground is responsive; browser zoom remains available. Manual browser verification is tracked separately in [manual-review.md](manual-review.md).

## WineTahomaBit font

`packages/vgui/src/assets/WineTahomaBit.ttf` is copied unmodified from
[Steamed at 5dfeb485a43fab22d140ae54a82c1b7471f64cb4](https://github.com/gaspar-of-time/Steamed/tree/5dfeb485a43fab22d140ae54a82c1b7471f64cb4/fonts).
Steamed credits Xenthio's WineTahomaBit as the source of its TTF conversion. OG-Steam credits
Wine Tahoma Regular version 0.001, copyright 2004 Larry Snyder, based on Bitstream Vera Sans,
copyright 2003 Bitstream Inc., as confirmed by the TTF's embedded copyright notice.
The upstream `fonts/LICENSE` is preserved verbatim as
`packages/vgui/LICENSE.WineTahomaBit` and specifies GNU LGPL 2.1 (the upstream README calls it
“GPLv2.1”). The CSS package includes both the font and license when published.
`fonts.css` registers the regular face; the playground selects it on `body` for both themes and
teleported overlays. Library controls continue inheriting their host typography.
