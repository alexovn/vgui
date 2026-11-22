# Repository guidelines

## Structure and code

- Keep shared styles, themes, and assets in `packages/vgui/src` (`@alexovn/vgui`) and component behavior in `packages/vue/src` (`@alexovn/vgui-vue`). Keep Reka UI parts private. Add playground examples in `packages/playground/src` for new behavior.
- Use `<script setup lang="ts">` and strict TypeScript for Vue components. Name public components `Ui*.vue` and export them and their public types from `packages/vue/src/index.ts`.
- Use kebab-case CSS filenames, `vgui-` classes, and `--vgui-*` custom properties. Follow the root ESLint config for formatting.
- Preserve upstream attribution and bundled licenses when changing derived styles or assets. Record sources and revisions in `docs/references.md` and `docs/source-revisions.json`.

## Validation

Use Node `^22.22.2 || >=24.15.0` and pnpm `12.21.0`. Run `pnpm lint`, `pnpm -r typecheck`, and `pnpm -r build` from the repository root before submitting changes.

For UI changes, run `pnpm dev` and check the affected controls in both themes in current Chrome, Firefox, and Safari. Report which checks you ran.

- Compare affected visuals with the references. At narrow widths and 200% zoom, check legibility, dialog fit, and scrolling. For shared CSS changes, check with playground Preflight and in a CSS-only consumer without a reset.
- Use Tab, arrow keys, Enter, Space, and Escape where applicable. Check visible focus, disabled and read-only behavior, and relevant checked, mixed, invalid, and selected states. In forced colors, verify focus, indicators, and borders remain distinguishable. Inspect accessible names, roles, and states.
- Exercise pointer and keyboard interactions for changed controls. For tabs, check the active panel join. For sliders, check the track, thumb, ticks, and endpoint keys. For selects, verify the committed label and Escape cancellation. For scroll areas, check both axes, wheel and keyboard scrolling, and native arrows where supported.
- Verify dialog initial focus, trapping, Escape dismissal, and trigger focus restoration. Check nested overlay layering, provider themes after outer theme changes, and host typography on inline and teleported content. Verify tooltips dismiss on Escape without moving trigger focus.
- For form changes, verify label associations, required validation, submitted values, and reset for controlled and uncontrolled fields. Exercise affected slots and menu actions.

## Commits and pull requests

Use Conventional Commit subjects. Describe affected packages, link relevant issues, and report validation in pull requests. Include screenshots of both themes for visual changes.
