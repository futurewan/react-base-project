const paths = require('./config/paths');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  globals: {},
  extends: [
    // 'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    // "eslint:recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'react/button-has-type': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.ts'] }],
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
    'import/resolver': {
      alias: {
        map: [
          ['@redux', paths.appRedux],
          ['@pages', paths.appPages],
          ['@util', paths.appUtil],
        ],
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['/node_modules', 'src/'],
      },
    },
  },
};
