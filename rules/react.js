module.exports = {
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
    "react/jsx-sort-props": "error",
    "react/self-closing-comp": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
  },
};
