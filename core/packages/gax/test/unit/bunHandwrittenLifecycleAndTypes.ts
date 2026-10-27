/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import {describe, it} from 'mocha';

const REPO_ROOT = path.resolve(__dirname, '../../../../../..');

const EXPECTED_HANDWRITTEN_DIRS = [
  'bigquery',
  'bigquery-storage',
  'bigtable',
  'cloud-profiler',
  'datastore',
  'error-reporting',
  'firestore',
  'google-cloud-dns',
  'logging',
  'logging-bunyan',
  'logging-winston',
  'pubsub',
  'spanner',
  'storage',
];

describe('Handwritten libraries bun install lifecycle hooks & gaxios @types/bun FetchCompliance (b/578004580)', () => {
  it('verifies all 14 handwritten libraries define clean prepare scripts without blocked postinstall hooks', () => {
    for (const dir of EXPECTED_HANDWRITTEN_DIRS) {
      const pkgJsonPath = path.join(
        REPO_ROOT,
        'handwritten',
        dir,
        'package.json',
      );
      assert.strictEqual(
        fs.existsSync(pkgJsonPath),
        true,
        `Expected ${pkgJsonPath} to exist`,
      );
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')) as {
        name: string;
        main?: string;
        types?: string;
        scripts?: Record<string, string>;
        dependencies?: Record<string, string>;
      };

      assert.ok(
        pkg.name,
        `Expected ${dir}/package.json to have a package name`,
      );
      assert.ok(pkg.main, `Expected ${pkg.name} to declare a main entrypoint`);
      assert.strictEqual(
        pkg.scripts?.postinstall,
        undefined,
        `Expected ${pkg.name} not to rely on a blocked postinstall lifecycle hook under bun install`,
      );
      assert.ok(
        typeof pkg.scripts?.prepare === 'string' &&
          pkg.scripts.prepare.includes('compile'),
        `Expected ${pkg.name} to define a deterministic prepare compile script`,
      );

      if (pkg.name === '@google-cloud/profiler') {
        assert.ok(
          pkg.dependencies?.pprof,
          'Expected @google-cloud/profiler to declare its V8-native pprof dependency',
        );
      } else {
        assert.strictEqual(
          pkg.dependencies?.pprof,
          undefined,
          `Expected pure JS/TS handwritten library ${pkg.name} not to depend on native V8 pprof addon`,
        );
      }
    }
  });

  it('verifies gaxios FetchCompliance and fetchImplementation narrow fetch to call signature for @types/bun', () => {
    const gaxiosSrcPath = path.join(
      REPO_ROOT,
      'core/packages/gaxios/src/gaxios.ts',
    );
    const commonSrcPath = path.join(
      REPO_ROOT,
      'core/packages/gaxios/src/common.ts',
    );
    const gaxiosSrc = fs.readFileSync(gaxiosSrcPath, 'utf8');
    const commonSrc = fs.readFileSync(commonSrcPath, 'utf8');

    assert.ok(
      gaxiosSrc.includes(
        'fetch: (...args: Parameters<typeof fetch>) => ReturnType<typeof fetch>;',
      ),
      'Expected FetchCompliance in gaxios.ts to use the callable fetch signature instead of typeof fetch',
    );
    assert.ok(
      commonSrc.includes(
        'fetchImplementation?: (\n    ...args: Parameters<typeof fetch>\n  ) => ReturnType<typeof fetch>;',
      ) ||
        commonSrc.includes(
          '(...args: Parameters<typeof fetch>) => ReturnType<typeof fetch>',
        ),
      'Expected GaxiosOptions.fetchImplementation in common.ts to use the callable fetch signature',
    );
  });
});
