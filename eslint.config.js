// eslint.config.mjs
const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");


module.exports = [
  {ignores: [".node_modules/*", "dist/*", "eslint.config.js"]},
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];