# Classic VGUI slider research

## Half-Life 2 main-menu options

The classic PC slider has a **narrow rectangular thumb on a dark recessed
track, with short vertical tick marks underneath**. The thumb has a raised
bevel with a light top and left edge and a dark bottom and right edge. The
track has the opposite lighting and the same appearance on both sides of the
thumb. In the game captures, the slider is neutral gray against the translucent
Options panel. [Half-Life 2 Mouse options capture][hl2-mouse] ·
[Half-Life 2 Deathmatch Audio options capture][hl2dm-audio]

The Deathmatch Audio tab uses two sliders with small `Low` and `High`
captions. Half-Life 2's Mouse tab shows a sensitivity slider with the same
captions and a separate numeric field to its right. Mouse acceleration and
gamepad sensitivity show ticks without endpoint captions. The Mouse capture
shows the pre-anniversary interface with achievements and raw input, so its
exact appearance is evidence for that later build. The launch-era guide
places mouse and audio controls in the main-menu Options dialog.
[Half-Life 2 revision comparison][hl2-revisions] · [2004-era Prima guide][prima]

## Valve's slider renderer

Valve's Source SDK 2013 code at the repository's pinned revision gives these
base dimensions before proportional scaling. [Valve Slider.cpp][source]

| Part | Base dimensions and appearance |
| --- | --- |
| Track | 4 units high, with one scheme color across the full length and the recessed `ButtonDepressedBorder`. |
| Thumb | 8 units wide by 16 high by default. Square corners, centered on the track, and drawn with the raised `ButtonBorder`. The resource can override the width. |
| Ticks | 1 unit wide by 5 high, aligned to the thumb's travel beneath the track. The default is 10 intervals with a mark at each endpoint, giving 11 marks. The resource can set the count. |
| Captions | Optional text below the ends, using the small scheme font and the tick color when enabled. |
| Disabled | The renderer draws offset light and dark tick layers. The thumb and track retain their shape. |

The track, thumb, and ticks use `Slider.TrackColor`, `Slider.NobColor`, and
`Slider.TextColor`. The SDK dimensions document the later shared renderer.
Individual layouts can vary in width and proportional scale.
[Valve slider scheme and paint code][source]

## Steam desktop client and olive comparison

The 2010 *Shattered Horizon* manual includes a screenshot of Steam's desktop
Voice tab. Its microphone and receive-volume controls have narrow light
rectangular thumbs on dark horizontal tracks. The two tracks appear plain at
the screenshot's resolution. This documents a later Steam client and leaves
the 2003–04 desktop slider geometry and palette unverified.
[Futuremark manual, PDF page 14][steam-voice]

The olive Half-Life (GoldSrc) Mouse capture shows the same recessed rail,
raised olive thumb, and muted ticks. In the OG-Steam recreation, the olive
scheme defines `#1f1f1f` for the rail and `#7f8c7f` for ticks.
[Half-Life Mouse options capture][hl1-mouse] · [OG-Steam styles][og-styles]

## Web implementation

The CSS uses the SDK's 8 × 16 px raised thumb, 4 px recessed track, and
11 ticks with the repository's olive and slate palettes. The track spans
the interactive width. The playground passes `minCaption` and `maxCaption`
to the Vue component to show the endpoint captions under Game volume. For the
vertical variant, the CSS rotates the geometry and places the ticks to the
right. Multiple-thumb sliders retain a highlighted interval.
[Slider CSS][css] · [Vue slider][vue]

[hl2-mouse]: https://tcrf.tiago.zip/files/b5/ef/b5efc63ead5fb82759dce5bc6a10ede8a78f4d02.webp
[hl2dm-audio]: https://university.hl2dm.com/img/guides/options_audio.png
[hl2-revisions]: https://tcrf.tiago.zip/wiki/Half-Life_2_(Windows)-2fRevisional_Differences
[prima]: https://valvearchive.com/Games/Half-Life%202/Documents/Half-Life%202%20Prima%20Official%20eGuide.pdf
[source]: https://github.com/ValveSoftware/source-sdk-2013/blob/be57e3d01ac7d7aa6a2cacbfef187c0b46616db0/src/vgui2/vgui_controls/Slider.cpp
[steam-voice]: https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/18110/manuals/ShatteredHorizon_GameManual.pdf?t=1569394150#page=14
[hl1-mouse]: https://images.steamusercontent.com/ugc/2024983601063279763/2705DA1E21A5B3C6F2ED65D9D1DA6D5C42E9E7ED/
[og-styles]: https://github.com/ungstein/OG-Steam/blob/411aa955e76759bf24cee9dc38fa459cb9040823/OG-Steam/resource/styles/steam.styles
[css]: ../packages/vgui/src/components/slider.css
[vue]: ../packages/vue/src/components/UiSlider.vue
