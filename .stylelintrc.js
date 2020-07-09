module.exports = {
  extends: 'stylelint-config-standard', // 这是官方推荐的方式
  processors: [],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['node_modules/**/*.scss'],
  rules: {
    'rule-empty-line-before': 'never-multi-line',
  },
};
