// CJS format eslint config - tests .eslintrc.cjs parsing
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-var": "error",
    "eqeqeq": "warn",
    "no-console": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    // Conflicting with extends - tests rule priority
    "no-unused-vars": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    MY_CUSTOM_GLOBAL: "readonly",
    __DEV__: "readonly",
  },
  overrides: [
    {
      files: ["*.test.js", "*.test.ts", "*.spec.js"],
      env: {
        jest: true,
      },
      rules: {
        "no-eval": "off",
      },
    },
    {
      files: ["scripts/**/*.js"],
      rules: {
        "no-process-exit": "off",
      },
    },
  ],
};
