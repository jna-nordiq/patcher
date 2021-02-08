module.exports = {
  root: true,
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.js",
    },
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    es6: true,
    node: true,
  },
};
