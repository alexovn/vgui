# Classic Steam tooltip research

## October 2004 Steam desktop client

The plain VGUI text tooltip was a square-cornered box with black text, a
solid accent-colored fill, and a dark one-pixel outline. The olive scheme
used muted gold and the grey scheme used amber-orange. These values come
from the client bundled in the archived October 8, 2004 installer. The
cabinet entries for the client DLL and schemes are dated October 6.
[Archived installer and file listing][installer]

| Part | Default olive scheme | Grey scheme |
| --- | --- | --- |
| Fill, `SelectionBG` | `#958831` | `#e09c30` |
| Text, `BorderSelection` | `#000000` | `#000000` |
| Outline, `BorderDark` in `ToolTipBorder` | `#282e22` | `#707070` |
| Font, `DefaultSmall` | Tahoma, 13 native units tall | Tahoma, 13 native units tall |

The border uses the same color on all four edges. Its right edge starts
one unit below the top edge, and the border resource specifies an inset
of `0 0 1 0`. The client initializes the hover delay to 500 ms. It positions
the tooltip relative to the pointer, normally 20 units below it when there
is room on the right and below, with alternate positions near screen edges.
[Archived client files][installer]

### How the values were verified

I inspected the embedded cabinet in `steam.msi` and read its
`TrackerScheme.res` and grey `TrackerScheme.res16` entries. In the same
cabinet's `SteamUI.dll`, the tooltip's font setup looks up `DefaultSmall`
at RVA `0x70820`. Its display routine at RVA `0x708e0` resolves
`SelectionBG` and `BorderSelection`, then calls the background and
foreground setters, respectively. The routine also loads `ToolTipBorder`.
The panel's scheme application at RVA `0x45740` identifies the same
setters through its `BgColor` and `FgColor` lookups. The constructor at
RVA `0x705d0` supplies the initial delay. The MSI's SHA-256 is
`b7c29c7eb744f79cb612cc224b428f060031afedcef64a34cb96880d1cc2fea5`.
These findings come from static inspection. Rendered padding, font
rasterization, and applicability to other releases remain unverified.
[Archived client files][installer]

## Other VGUI tooltip styles

- OG-Steam, a modern skin inspired by early Steam, defines a dark olive
  `#3e4637` fill, white text, and a uniform 1 px `#5a6a50` outline. Its
  body label has 4 px of left padding. The skin specifies a 75 ms delay and
  anchors the tooltip where the pointer was when it opened.
  [OG-Steam tooltip rules][og-styles] · [OG-Steam project][og]
- Valve's later Source SDK uses separate scheme keys for tooltip text and
  fill, plus `ToolTipBorder` and `DefaultSmall`. Facepunch's Source scheme
  supplies a pale-yellow `#f9eeb5` fill, brown `#6e663c` text, and a
  uniform `#282828` outline. [Valve tooltip renderer][sdk] ·
  [Facepunch Source scheme][facepunch]

## Web implementation

The olive theme uses the default 2004 tooltip colors, and the dark slate
theme uses the historical grey scheme's amber tooltip colors. The tooltip
inherits the host font and uses 3 px of vertical padding and 6 px of
horizontal padding. The Vue wrapper positions it 5 px from the trigger and
defaults to a 350 ms delay. [Tooltip CSS][css] · [Vue wrapper][vue] ·
[Slate palette][slate]

[installer]: https://archive.org/download/steam_10-08-2004
[og-styles]: https://github.com/ungstein/OG-Steam/blob/411aa955e76759bf24cee9dc38fa459cb9040823/OG-Steam/resource/styles/steam.styles#L2622-L2651
[og]: https://github.com/ungstein/OG-Steam
[sdk]: https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/vgui2/vgui_controls/Tooltip.cpp#L222-L247
[facepunch]: https://github.com/Facepunch/garrysmod/blob/ad8023410600199ad9a12444bc496b9d65226a82/garrysmod/resource/SourceScheme.res
[css]: ../packages/vgui/src/components/tooltip.css
[vue]: ../packages/vue/src/components/UiTooltip.vue
[slate]: ../packages/vgui/src/themes/slate.css
