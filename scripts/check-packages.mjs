import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const consumer = mkdtempSync(join(tmpdir(), 'vgui-packages-'))

function run(command, args, cwd) {
  execFileSync(command, args, { cwd, stdio: 'inherit' })
}

function readManifest(directory) {
  return JSON.parse(readFileSync(join(directory, 'package.json'), 'utf8'))
}

try {
  const cssTarball = join(consumer, 'vgui.tgz')
  const vueTarball = join(consumer, 'vgui-vue.tgz')
  run('pnpm', ['--filter', '@alexovn/vgui', 'pack', '--out', cssTarball], root)
  run('pnpm', ['--filter', '@alexovn/vgui-vue', 'pack', '--out', vueTarball], root)

  const vue = readManifest(join(root, 'packages/vue')).devDependencies.vue
  const store = execFileSync('pnpm', ['store', 'path'], { cwd: root, encoding: 'utf8' }).trim()
  writeFileSync(join(consumer, 'package.json'), JSON.stringify({
    private: true,
    type: 'module',
    dependencies: {
      '@alexovn/vgui': 'file:./vgui.tgz',
      '@alexovn/vgui-vue': 'file:./vgui-vue.tgz',
      vue,
    },
  }))
  writeFileSync(join(consumer, 'pnpm-workspace.yaml'), `overrides:\n  '@alexovn/vgui-vue>@alexovn/vgui': 'file:./vgui.tgz'\n`)
  run('pnpm', ['install', '--ignore-scripts', '--store-dir', store, '--prefer-offline'], consumer)

  const css = join(consumer, 'node_modules/@alexovn/vgui')
  const components = join(consumer, 'node_modules/@alexovn/vgui-vue')
  for (const directory of [css, components]) {
    for (const name of ['README.md', 'LICENSE']) {
      assert(existsSync(join(directory, name)), `Missing packed file ${join(directory, name)}`)
    }
  }

  assert(existsSync(join(css, 'LICENSE.WineTahomaBit')))
  const cssManifest = readManifest(css)
  for (const target of Object.values(cssManifest.exports)) {
    const path = target.endsWith('/*') ? target.slice(0, -2) : target
    assert(existsSync(join(css, path)), `Missing CSS export ${target}`)
  }
  const vueManifest = readManifest(components)
  assert.equal(vueManifest.dependencies[cssManifest.name], cssManifest.version)
  assert.deepEqual(readdirSync(join(components, 'dist')).sort(), ['index.d.ts', 'vgui.js'])
  for (const target of Object.values(vueManifest.exports['.'])) {
    assert(existsSync(join(components, target)), `Missing Vue export ${target}`)
  }
  const declaration = readFileSync(join(components, vueManifest.types), 'utf8')
  assert.doesNotMatch(declaration, /(?:\bfrom\s*|\bimport\s*(?:\(\s*)?)['"]\.{1,2}\//)

  writeFileSync(join(consumer, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <title>VGUI package smoke check</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body data-vgui-theme="olive">
    <textarea aria-label="Message" class="vgui-textarea"></textarea>
    <div id="app"></div>
    <script type="module" src="/main.ts"></script>
  </body>
</html>
`)
  writeFileSync(join(consumer, 'style.css'), '@import \'@alexovn/vgui\';\n')
  writeFileSync(join(consumer, 'main.ts'), `
import { UiButton, UiSelect, type UiButtonProps, type UiSelectProps } from '@alexovn/vgui-vue'
import { createApp, h, type ComponentCustomProps } from 'vue'

const button: UiButtonProps = { type: 'submit', class: 'apply' }
const select: UiSelectProps = { options: [{ label: 'LAN', value: 'lan' }], modelValue: 'lan' }
const theme: ComponentCustomProps = { 'data-vgui-theme': 'slate' }
type OptionLabel = Parameters<NonNullable<InstanceType<typeof UiSelect>['$slots']['option']>>[0]['option']['label']
const label: OptionLabel = 'Apply'
// @ts-expect-error button types are a fixed union
const invalidButton: UiButtonProps = { type: 'other' }
// @ts-expect-error the select model accepts a string
const invalidSelect: UiSelectProps = { options: [], modelValue: 1 }
// @ts-expect-error slot option labels are strings
const invalidLabel: OptionLabel = 1
// @ts-expect-error the augmented attribute accepts only VGUI themes
const invalidTheme: ComponentCustomProps = { 'data-vgui-theme': 'other' }

createApp({ render: () => h(UiButton, { ...button, ...theme }, () => label) }).mount('#app')
`)
  run('pnpm', ['exec', 'tsc', '--ignoreConfig', '--noEmit', '--strict', '--skipLibCheck', '--target', 'ES2023', '--module', 'ESNext', '--moduleResolution', 'Bundler', join(consumer, 'main.ts')], root)
  const vite = ['--filter', '@alexovn/vgui-playground', 'exec', 'vite', 'build', consumer]
  run('pnpm', vite, root)

  const html = join(consumer, 'index.html')
  writeFileSync(html, readFileSync(html, 'utf8').replace('    <script type="module" src="/main.ts"></script>\n', ''))
  run('pnpm', [...vite, '--outDir', 'dist-css'], root)
  const cssAssets = readdirSync(join(consumer, 'dist-css/assets'))
  assert(cssAssets.some(name => name.endsWith('.css')))
  assert(cssAssets.some(name => name.endsWith('.ttf')))
  assert(cssAssets.some(name => name.endsWith('.svg')))
  assert(cssAssets.every(name => !name.endsWith('.js')), 'The CSS-only consumer emitted JavaScript')
}
finally {
  rmSync(consumer, { recursive: true, force: true })
}
