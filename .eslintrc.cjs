module.exports = {
  extends: [require.resolve('gts')],
  rules: {
    "@typescript-eslint/no-explicit-any": "error"
  },
  parserOptions: {
    project: true
  },
  overrides: [
    {
      files: ["**/samples/**/*.ts", "**/samples/**/*.js"],
      rules: {
        "no-console": "off"
      }
    }
  ]
};
