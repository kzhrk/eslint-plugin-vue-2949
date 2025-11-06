import js from "@eslint/js";
import ts from "typescript-eslint";
import globals from "globals";
import vue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...vue.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        parser: ts.parser,
        sourceType: "module",
        project: ["./tsconfig.json"],
        extraFileExtensions: [".vue"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "vue/no-v-html": [
        "error",
        {
          ignorePattern: "/^\\$sanitize\\(/",
        },
      ],
    },
  },
];