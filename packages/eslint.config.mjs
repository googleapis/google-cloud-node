import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('gts'),
  {
    ignores: [
      "**/.coverage/**",
      "**/build/**",
      "**/docs/**",
      "**/protos/**",
      "**/system-test/**",
      "**/samples/generated/**"
    ]
  }
];
