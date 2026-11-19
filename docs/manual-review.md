# Manual review

Typechecking and production builds are the automated checks. No automated tests or browser automation are included.

Browser interaction and visual checks below require a human browser session and have not been completed by the implementation agent.

Run `pnpm dev` and review both themes in current Chrome, Firefox, and Safari:

- Compare surfaces, typography, bevels, control spacing, and checked indicators to upstream reference screenshots. In the playground, verify the type hierarchy: responsive page title, section/dialog headings, group legends and labels, body controls, smaller captions/help text, and activity logs. Check both themes, narrow viewports, and teleported Settings content.
- With playground Preflight enabled, check group-box legends, separate table borders, placeholder colors, Settings description spacing, and textarea resizing in both directions. Also verify these controls without a reset using the CSS consumer example.
- Verify WineTahomaBit loads in the playground (including teleported Settings content) with the default application font size and line height while the document root retains its browser font size. In a consumer, set a different font family, size, and line height on `body`; check inputs, buttons, panel headings, selects, tooltips, dialogs (including programmatic opening without a trigger), menus, and nested submenus. Verify local container fonts affect inline controls while portaled overlays continue inheriting from `body`.
- Exercise normal, hover, pressed, disabled, invalid, read-only, checked, and mixed states. Verify disabled controls cannot be activated.
- In both themes, verify disabled buttons retain an opaque raised face and recessed text with a 1px lower-right highlight. Hovering or pressing must not change their colors or bevel, including buttons marked `data-state="on"`. Check native `disabled` and custom `[data-disabled]` markup. In forced colors, verify disabled text uses the system color without a shadow.
- Use only the keyboard: Tab through controls; navigate select, tabs, radios, tree, and menus with arrows; activate with Enter/Space; dismiss with Escape.
- In both themes, check Game volume for a recessed track, a raised thumb, and eleven evenly spaced ticks. Drag the thumb, click the track, and use the arrow keys, Home, and End. Clear Enable game sounds and verify that the ticks look recessed and the slider skips keyboard focus and ignores pointer input.
- In both themes, switch each Servers tab and verify light top/left borders and dark right borders. Tabs have no bottom border; the active tab is 2px taller, with inactive tabs centered vertically beside it. The active tab must cover the panel's top line between its side borders, while the line remains beneath inactive tabs. Check stable row height, compact label padding, accent selected text, inset keyboard focus, and the disabled Friends tab. Repeat with Preflight disabled, at 200% zoom, and in forced colors.
- In both themes, choose a select option and verify its label appears in the closed field. Reopen the list and verify options have no checkmarks, hover/keyboard navigation highlights the active row, Escape preserves the current value, and committing another option updates the field.
- Open Settings; verify initial focus, trapped focus, Escape dismissal, and restored trigger focus. Open its select and inspect focus and layering.
- Open nested opposite-theme menu and submenu, then change the outer theme. Verify the portal keeps its provider theme.
- In Player Settings, hover or focus **Use defaults** in both themes. Check the muted gold olive fill, amber slate fill, and black text with a uniform 1px outline. Press Escape to dismiss the tooltip and verify focus stays on the button. Repeat in forced colors.
- Submit and reset the form; inspect visible state and form data. Check controlled and uncontrolled controls and required validation.
- Inspect the accessibility tree for names, roles, labels, states, dialog title/description, and progress values.
- At 200% zoom and narrow viewports, ensure text remains readable, dialogs fit the viewport, and content can scroll.
- Check native page and Activity scrollbars in both themes: track color, beveled thumb, arrow buttons and pressed states where supported, mouse wheel, and keyboard scrolling after focusing Activity. Also check `UiScrollArea` with vertical and horizontal overflow for matching tracks, thumbs, and the corner.
- Enable forced colors and verify focus, selected states, checkbox/radio indicators, and borders remain distinguishable.
- Check custom option/cell/node slots and menu action feedback.

Known limits: OS font rasterization differs from the original client; the historical palettes do not promise WCAG AA contrast for every state. Disabled text is intentionally subdued. Reference comparison and browser sign-off remain release gates.
