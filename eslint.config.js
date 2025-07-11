import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "build"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs["recommended"].rules,
      ...react.configs["jsx-runtime"].rules,
      // Optional: Customize a few common rules
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
      "react/prop-types": "off", //this suppresses warnings about not using prop-types
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
