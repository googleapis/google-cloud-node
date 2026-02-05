// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {packNTest} from 'pack-n-play';
import {readFileSync} from 'fs';
import {describe, it} from 'mocha';

describe('📦 pack-n-play test', () => {
  it('TypeScript code', async function () {
    this.timeout(300000);
    const options = {
      packageDir: process.cwd(),
      sample: {
        description: 'TypeScript user can use the type definitions',
        ts: readFileSync(
          './system-test/fixtures/sample/src/index.ts',
        ).toString(),
        dependencies: ['@types/node'],
      },
    };
    try {
      await packNTest(options);
    } catch (err) {
      console.error('TS install failed:\n', err);
      throw err;
    }
  });
});
