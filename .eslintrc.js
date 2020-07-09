const paths = require('./config/paths');

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  globals: {},
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    // "eslint:recommended",
    // "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'react/button-has-type': 'off',
    'react/prefer-stateless-function': 'off',
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
          ['@util', paths.util],
        ],
      },
    },
  },
};
