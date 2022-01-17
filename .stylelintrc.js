module.exports = {
  "extends": "stylelint-config-standard-scss",
  "ignoreFiles": ["node_modules/**/*.scss"],
  "rules": {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ]
  }
};
