# Repository Guidelines

## Project Structure & Module Organization

This pnpm workspace provides VGUI-inspired controls with olive and slate themes.

- `packages/vgui/src/`: shared CSS, component styles, theme files, and checkmark assets; published as `@vgui/css`.
- `packages/vue/src/`: Vue 3 components, shared types, and theme helpers; public exports live in `index.ts`.
- `packages/playground/src/`: Vite application for developing and reviewing controls.
- `docs/`: source attribution, reference revisions, and the manual review checklist.

Keep styling in the CSS package and component behavior in the Vue package. Complex controls wrap Reka UI; keep their internal parts private.

## Build, Test, and Development Commands

Use Node 22.13+ and pnpm 10.32.1. Run commands from the repository root:

- `pnpm install`: install workspace dependencies.
- `pnpm dev`: start the playground with live component updates.
- `pnpm lint` / `pnpm lint:fix`: check code and formatting or apply ESLint fixes.
- `pnpm -r typecheck`: typecheck the Vue library and playground.
- `pnpm -r build`: build the Vue library, declarations, and playground.
- `pnpm --filter playground preview`: serve the built playground locally.

## Coding Style & Naming Conventions

Use two-space indentation, LF endings, single quotes, no JavaScript/TypeScript semicolons, and trailing commas. The root ESLint config uses `@antfu/eslint-config` for import sorting, formatting, and Vue/TypeScript rules, with braces required around control-flow bodies. External formatters use a 100-column width. Add blank lines after imports, before function declarations, and between Vue SFC blocks.

Write Vue components using `<script setup lang="ts">` and strict TypeScript. Name public components `Ui*.vue`, such as `UiButton.vue`. Use kebab-case CSS filenames, `vgui-` class names, and `--vgui-*` custom properties. Export new public components and types through `packages/vue/src/index.ts`.

## Testing Guidelines

No automated test suite or coverage threshold is configured. Run lint (including formatting), typechecks, and builds before submitting changes. Follow `docs/manual-review.md` for browser validation: review both themes, keyboard navigation, focus management, disabled states, forms, and teleported overlays. Add playground examples for new behavior and report which manual checks you completed.

## Commit & Pull Request Guidelines

Follow the history's Conventional Commit style: `feat:`, `refactor:`, or `chore:`, with an optional scope such as `feat(VGUI):`. Use concise, imperative descriptions.

Pull requests should explain the change, identify affected packages, link relevant issues, and list validation results. Include screenshots of both themes for visual changes. Preserve upstream attribution and `packages/vgui/LICENSE.vgui-css` when changing derived styles or assets.
