/**
 * Copyright 2024 Google LLC
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

import * as path from 'path';
import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as cp from 'child_process';

const cwd = path.join(__dirname, '../..');

describe('Quickstart', () => {
  it('should run quickstart sample', async () => {
    // Try first without the environment variable.
    const stdout1 = cp.execSync('node javascript/quickstart.js 2>&1', {
      cwd,
      encoding: 'utf-8',
    });
    assert(!/testing.*DEFAULT.*other.*foo.*bar/.test(stdout1));
    assert(!/testing.*INFO.*info/.test(stdout1));

    const stdout2 = cp.execSync('node javascript/quickstart.js 2>&1', {
      cwd,
      encoding: 'utf-8',
      env: Object.assign(
        {
          GOOGLE_SDK_NODE_LOGGING: 'all',
        },
        process.env
      ),
    });
    assert(/testing.*DEFAULT.*other.*foo.*bar/.test(stdout2));
    assert(/testing.*INFO.*info/.test(stdout2));
  });
});
