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
    'import/prefer-default-export': 'off',
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
    ]
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
