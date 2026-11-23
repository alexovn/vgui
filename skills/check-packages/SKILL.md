---
name: check-packages
description: Check that the VGUI CSS and Vue packages are ready to publish. Use for release readiness, tarball inspection, or testing installation in a fresh Vue app.
---

# Check packages before publishing

Run the repository checks in [AGENTS.md](../../AGENTS.md) from the root, including `pnpm lint`, `pnpm -r typecheck`, and `pnpm -r build`. Run `node scripts/check-packages.mjs` to validate the packed exports, assets, licenses, Vue declarations, and Vue and CSS-only consumer builds.

## Verify npm installation

Use `pnpm pack` for both packages and write the tarballs to a temporary directory outside the workspace. When packing the Vue package, pnpm converts the `workspace:*` dependency on `@alexovn/vgui` to the CSS package's version.

```sh
pack_dir=$(mktemp -d)
pnpm --filter @alexovn/vgui pack --out "$pack_dir/vgui.tgz"
pnpm --filter @alexovn/vgui-vue pack --out "$pack_dir/vgui-vue.tgz"
```

In a fresh minimal Vue + Vite project outside the workspace, install both tarballs together with npm and use a Vue version that satisfies the Vue package's peer dependency. Check `package-lock.json` for the two local tarball paths and use `npm ls @alexovn/vgui @alexovn/vgui-vue` to verify that the Vue package uses the same copy of the CSS package. Keep the install free of dependency overrides so it exercises npm's normal resolution.

Import `@alexovn/vgui` and render a small Vue example using components from `@alexovn/vgui-vue`, such as `UiButton` and `UiSelect`. Run the consumer typecheck and production build. For a runtime smoke test, open the built app, switch between olive and slate, and verify that the select opens, commits a choice, and dismisses with Escape. Report any consumer declarations or compiler settings needed for the example to pass.

Report the packed versions, the checks performed, and any failures or unverified behavior. Treat a publishing request as a separate action that requires explicit authorization.
