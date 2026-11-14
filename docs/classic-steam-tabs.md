# Classic Steam tab research

Research date: 2026-11-14. Scope: olive Steam/VGUI property-sheet tabs, such as
Settings and the server browser. Main-window navigation and later grey Steam
skins should be compared separately. This research does not establish pixel
fidelity to a particular Steam release.

## Findings and evidence

Valve's [VGUI PropertySheet implementation][valve] provides direct evidence for
the control geometry, although Source SDK 2013 is not the original 2003 Steam
client source:

- The active tab begins 2 pixels higher and is 2 pixels taller than inactive tabs.
- The panel's top border has a break under the active tab, joining tab and page.
- Active tabs render in front of the page and other tabs.
- Text-only tabs ordinarily reserve 5 pixels on each side, subject to a minimum
  width and resource overrides.
- Active and inactive text and borders are separately scheme-controlled.
- The layout advances by tab width plus 1 pixel plus a configurable delta.

The local pinned [OG-Steam skin][og-styles] supplies a useful recreation of the
olive appearance. Its `PageTab` rules use flat fills, square geometry, and
1-pixel borders: light along the top and left, dark along the right. The selected
rule extends the olive fill below the tab, reinforcing the open join with the
page. It uses white text for ordinary tabs and `Over` (`#c4b550`, gold) for selected
tabs. Both states use the same `GreenBG` (`#4c5844`) face. The tab rule specifies
font size 14, with a separate macOS override; that is a recreation setting, not
proof of the original Windows font size. The base font is `WineTahomaBit`.

OG-Steam also sets a tab-gap property to 3. Do not combine that automatically
with the SDK layout formula: these are different reference implementations.
The skin repeats some color definitions, including `BorderBright`, so copying
an earlier palette entry can produce a different bevel from the later override.

## Visual references and limits

- [Counter-Strike 1.6 Steam installer screenshot][installer]: a promising period
  reference showing Settings and server-browser tabs. The search index identifies
  Account, Internet, Interface, Skins, and Language in Settings. The full image
  download returned HTTP 403, so exact geometry and colors were not measured.
- [Steam history gallery][history]: includes an early client montage with the
  Internet, Favorites, LAN, and Friends server-browser tabs. This is a community
  archive, not a verified release-specific capture.
- [OG-Steam project][og]: a modern classic skin, useful for explicit drawing rules
  but secondary evidence for historical appearance.

Search results often label later screenshots as “2003”; images containing later
games or Community navigation should not establish the original release's design.
No release-authenticated screenshot was measured during this research.

## Implications for this repository

The previous `packages/vgui/src/components/tabs.css` already had square corners, a
1-pixel raised bevel, and an active bottom edge that matches the panel surface.
It gave every tab the same minimum height, used 12-pixel horizontal padding,
and changed muted text to normal text when selected.

For a closer VGUI interpretation, prioritize the active tab's 2-pixel rise and
the uninterrupted join with the content panel, then tighten horizontal padding.
Gold selected text is supported by OG-Steam; verify it against an original target
release before describing it as historically exact. Keep the slate palette an
explicit adaptation until a specific grey Steam reference is selected.

The implementation uses 5-pixel horizontal padding and changes normal theme
text to the theme accent when selected. The final join follows the structure in
the user-supplied [cs16.css demo](https://cs16.samke.me/) and its
[stylesheet](https://github.com/ekmas/cs16.css/blob/main/css/cs16.css): no tab bottom
border, centered tabs, a selected tab 2 pixels taller, and a panel overlapping the
row by 1 pixel. A surface-colored strip inside the selected tab masks the panel
line between its light left and dark right borders. This supersedes the earlier
uniform-outline and aligned-top interpretations. This is an independent
adaptation of the layout technique, retaining this project's theme tokens,
inherited typography, and Reka behavior. Both themes share this
geometry. Keyboard focus is inset so the outline does not
overlap neighboring tabs or the panel join. The Servers playground includes a
disabled Friends tab for review. Browser sign-off remains pending.

[valve]: https://raw.githubusercontent.com/ValveSoftware/source-sdk-2013/master/src/vgui2/vgui_controls/PropertySheet.cpp
[og-styles]: https://github.com/ungstein/OG-Steam/blob/411aa955e76759bf24cee9dc38fa459cb9040823/OG-Steam/resource/styles/steam.styles
[og]: https://github.com/ungstein/OG-Steam
[installer]: https://www.gamefront.com/games/half-life/file/counter-strike-1-6-steam-installer
[history]: https://steamcommunity.com/sharedfiles/filedetails/?id=455621094
