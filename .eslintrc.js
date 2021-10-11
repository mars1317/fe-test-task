module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-use-before-define': [0], // for this weird "React was used before it was defined" rule.
    '@typescript-eslint/no-use-before-define': [1], // for this weird "React was used before it was defined" rule.
    'no-shadow': 'off', // A fix for enums support issue
    '@typescript-eslint/no-shadow': ['error'], // A fix for enums support issue
    '@typescript-eslint/no-var-requires': [0],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }], // Disable inconsistent eslint and prettier multiline error.
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'prefer-destructuring': ['error', { object: true, array: false }],
  },
};
