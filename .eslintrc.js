module.exports = {
  // 将 TypeScript 转换成与 es tree 兼容的形式，以便在ESLint中使用
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  globals: {},
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  /**
   * react eslint-plugin-react的缩写，使ESLint支持 React 语义
   * @typescript-eslint @typescript-eslint/eslint-plugin的缩写，为TypeScript代码库提供lint规则
   */
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "prettier/prettier": "error",
    'no-console': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['document'] }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    "react/button-has-type": "off",
    "jsx-a11y/click-events-have-key-events":"off",
    "jsx-a11y/no-static-element-interactions":"off",
    // "react/prefer-stateless-function": "off",
    'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
      unnamedComponents: 'function-expression',
    }],
  },
  settings: {
  },
};
