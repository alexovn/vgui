export default {
  '*.{js,jsx,ts,tsx,mjs,cjs,vue}': 'eslint --fix',
  '*.{ts,vue}': () => 'pnpm -r typecheck',
}
