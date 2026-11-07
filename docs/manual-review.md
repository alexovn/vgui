# Manual review

Typechecking and production builds are the automated checks. No automated tests or browser automation are included.

Browser interaction and visual checks below require a human browser session and have not been completed by the implementation agent.

Run `pnpm dev` and review both themes in current Chrome, Firefox, and Safari:

- Compare surfaces, typography, bevels, control spacing, and checked indicators to upstream reference screenshots.
- With playground Preflight enabled, check group-box legends, separate table borders, placeholder colors, Settings description spacing, and textarea resizing in both directions. Also verify these controls without a reset using the CSS consumer example.
- Exercise normal, hover, pressed, disabled, invalid, read-only, checked, and mixed states. Verify disabled controls cannot be activated.
- Use only the keyboard: Tab through controls; navigate select, tabs, radios, tree, and menus with arrows; activate with Enter/Space; dismiss with Escape.
- Open Settings; verify initial focus, trapped focus, Escape dismissal, and restored trigger focus. Open its select and inspect focus and layering.
- Open nested opposite-theme menu and submenu, then change the outer theme. Verify the portal keeps its provider theme.
- Submit and reset the form; inspect visible state and form data. Check controlled and uncontrolled controls and required validation.
- Inspect the accessibility tree for names, roles, labels, states, dialog title/description, and progress values.
- At 200% zoom and narrow viewports, ensure text remains readable, dialogs fit the viewport, and content can scroll.
- Enable forced colors and verify focus, selected states, checkbox/radio indicators, and borders remain distinguishable.
- Check custom option/cell/node slots and menu action feedback.

Known limits: OS font rasterization differs from the original client; the historical palettes do not promise WCAG AA contrast for every state. Disabled text is intentionally subdued. Reference comparison and browser sign-off remain release gates.
