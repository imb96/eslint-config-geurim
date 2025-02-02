const base = require("./rules/base");
const typescript = require("./rules/typescript");
const react = require("./rules/react");
const style = require("./rules/style");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    ...base.rules,
    ...typescript.rules,
    ...react.rules,
    ...style.rules,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
