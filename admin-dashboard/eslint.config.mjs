// eslint.config.mjs — New flat config format required by ESLint v9
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Added: replaces old "extends" array from .eslintrc.json
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;