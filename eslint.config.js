import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    linebreak: 'unix',
  },
  vue: {
    overrides: {
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
  rules: {
    'antfu/reasonable-newline': 'off',
    'n/prefer-global/process': ['error', 'always'],
  },
})
