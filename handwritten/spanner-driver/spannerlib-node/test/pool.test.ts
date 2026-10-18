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
import { Pool } from '../src/lib/pool.js';
import { ffi } from '../src/ffi/utils.js';
import sinon from 'sinon';

describe('Pool', () => {
  let stub: sinon.SinonStub;

  beforeEach(() => {
    stub = sinon.stub(ffi, 'invokeAsync');
  });

  afterEach(() => {
    stub.restore();
  });

  it('should create a Pool successfully', async () => {
    const connStr = 'projects/test/instances/test/databases/test';

    // Mock invokeAsync response for CreatePool
    stub
      .onFirstCall()
      .resolves({ objectId: 1, pinnerId: 2, protobufBytes: null });

    const pool = await Pool.create(connStr);

    assert.ok(pool, 'Pool should be created');
    assert.strictEqual(pool.oid, 1, 'Pool OID should match');
    assert.strictEqual(pool.connStr, connStr, 'Connection string should match');

    assert.strictEqual(
      stub.calledOnce,
      true,
      'invokeAsync should be called once'
    );
    assert.strictEqual(
      stub.firstCall.args[0],
      'CreatePool',
      'First call should be CreatePool'
    );

    // Verify user agent suffix detection
    const isESM = typeof require === 'undefined';
    const expectedUA = isESM ? 'node-esm' : 'node-cjs';
    assert.strictEqual(
      stub.firstCall.args[1],
      expectedUA,
      `User agent should be ${expectedUA}`
    );
  });

  it('should throw error on create connection if pool is closed', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.closed = true;

    await assert.rejects(async () => {
      await pool.createConnection();
    }, /Pool is already closed/);
  });
});
