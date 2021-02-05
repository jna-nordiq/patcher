module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [],
};
