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

import * as assert from 'assert';
import { Pool } from '../../src/lib/pool.js';
import { MockSpanner } from './mockspanner.js';

describe('Pool on MockServer', () => {
  let mock: MockSpanner;
  let connStr: string;

  before(async () => {
    mock = MockSpanner.create();
    const port = await mock.listen('127.0.0.1:0');
    connStr = `localhost:${port}/projects/p/instances/i/databases/d?useplaintext=true`;
  });

  after(() => {
    mock?.close();
  });

  it('should create and close Pool successfully on mock server', async () => {
    const pool = await Pool.create(connStr);

    assert.ok(pool, 'Pool should be created');
    assert.strictEqual(typeof pool.oid, 'number', 'Pool ID should be assigned');
    assert.strictEqual(
      pool.closed,
      false,
      'Pool should not be closed initially'
    );

    await pool.close();
    assert.strictEqual(pool.closed, true, 'Pool should be closed');

    // Test closing again is safe
    await pool.close();
    assert.strictEqual(pool.closed, true, 'Pool should remain closed');
  });
});
