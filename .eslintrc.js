module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/alt-text': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        exceptions: ['Component']
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@next/next/no-img-element': 'off'
  },
  overrides: [],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist'
  ]
};
