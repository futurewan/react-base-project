module.exports = {
  extends: 'stylelint-config-standard', // 这是官方推荐的方式
  processors: [],
  plugins: ['stylelint-less'],
  ignoreFiles: ['node_modules/**/*.less'],
  rules: {
    'rule-empty-line-before': 'never-multi-line',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
