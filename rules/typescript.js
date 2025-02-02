module.exports = {
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
    ],
  },
};
