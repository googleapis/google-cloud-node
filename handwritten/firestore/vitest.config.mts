// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {defineConfig} from 'vitest/config';

const isXunit = process.env.MOCHA_REPORTER === 'xunit';
const xunitOutput = process.env.MOCHA_REPORTER_OUTPUT;

export default defineConfig({
  plugins: [
    {
      name: 'firestore-cjs-export-compat',
      enforce: 'pre',
      transform(code, id) {
        if (!id.endsWith('.ts')) {
          return undefined;
        }
        let transformed = code.replace(
          /import\s+\*\s+as\s+(\w+)\s+from\s+(['"])(assert|fast-deep-equal|duplexify|extend|functional-red-black-tree|through2)\2/g,
          'import $1 from $2$3$2',
        );
        if (id.endsWith('/dev/src/index.ts')) {
          transformed = transformed.replace(
            'const existingExports = module.exports;\nmodule.exports = Firestore;\nmodule.exports = Object.assign(module.exports, existingExports);',
            'Object.assign(Firestore, module.exports);',
          );
        }
        if (
          id.endsWith('/dev/src/reference/query.ts') ||
          id.endsWith('/dev/src/reference/document-reference.ts')
        ) {
          transformed = transformed.replace(
            /require\(['"]\.\.\/watch['"]\)/g,
            '(globalThis as any).__firestoreWatchModule',
          );
        }
        return transformed !== code ? transformed : undefined;
      },
    },
  ],
  test: {
    globals: true,
    environment: 'node',
    pool: 'forks',
    isolate: false,
    fileParallelism: true,
    maxWorkers: 2,
    passWithNoTests: false,
    testTimeout: 10000,
    hookTimeout: 20000,
    retry: Number(process.env.TEST_RETRIES) || 0,
    include: [
      'dev/test/*.ts',
      'dev/test/pipelines/*.ts',
      'dev/conformance/runner.ts',
      'dev/system-test/*.ts',
    ],
    exclude: [
      '**/node_modules/**',
      'build/**',
      'dev/test/util/**',
      'dev/system-test/util/**',
      'dev/system-test/euqality_matcher.ts',
      'dev/system-test/index_test_helper.ts',
    ],
    setupFiles: ['./dev/test/util/setup.ts'],
    reporters: isXunit && xunitOutput ? ['default', 'junit'] : ['default'],
    outputFile:
      isXunit && xunitOutput
        ? {
            junit: xunitOutput,
          }
        : undefined,
    coverage: {
      provider: 'v8',
      reportsDirectory: './.coverage',
      reporter: ['lcov'],
      include: ['dev/src/**/*.ts'],
    },
  },
});
