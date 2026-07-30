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
import {describe, it} from 'mocha';
import {Client, DatabaseError} from '../../src/index.js';

describe('Client Class', () => {
  it('should instantiate Client with config object or string', () => {
    const client1 = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    assert.strictEqual(client1.dsn, 'projects/p/instances/i/databases/d');

    const client2 = new Client('projects/p/instances/i/databases/d');
    assert.strictEqual(client2.dsn, 'projects/p/instances/i/databases/d');
  });

  it('should connect and close Client', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    await client.connect();
    assert.strictEqual(client.isConnected, true);
    await client.end();
    assert.strictEqual(client.isConnected, false);
  });

  it('should connect using callback syntax', done => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    client.connect(err => {
      assert.strictEqual(err, null);
      assert.strictEqual(client.isConnected, true);
      client.end(() => {
        assert.strictEqual(client.isConnected, false);
        done();
      });
    });
  });

  it('should update txStatus to T when BEGIN statement is executed', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    assert.strictEqual(client.txStatus, 'I');
    await client.query('BEGIN');
    assert.strictEqual(client.txStatus, 'T');
    await client.end();
    assert.strictEqual(client.txStatus, 'I');
  });

  it('should execute query with async/await and return QueryResult', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const res = await client.query('SELECT 1');
    assert.strictEqual(res.command, 'SELECT');
    assert.deepStrictEqual(res.rows, []);
    assert.deepStrictEqual(res.fields, []);
    await client.end();
  });

  it('should execute query with callback syntax', done => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    void client.query('SELECT 1', (err, res) => {
      assert.strictEqual(err, null);
      assert.strictEqual(res?.command, 'SELECT');
      void client.end().then(() => done());
    });
  });

  it('should reject empty query text with enriched DatabaseError', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    try {
      await client.query('');
      assert.fail('Should have thrown error');
    } catch (err: unknown) {
      assert.strictEqual(err instanceof DatabaseError, true);
      const dbErr = err as DatabaseError;
      assert.strictEqual(dbErr.code, 'XX000');
    } finally {
      await client.end();
    }
  });

  it('should reject non-array query values with enriched DatabaseError', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    try {
      // @ts-expect-error Testing runtime invalid values argument
      await client.query('SELECT $1', 'not-an-array');
      assert.fail('Should have thrown error');
    } catch (err: unknown) {
      assert.strictEqual(err instanceof DatabaseError, true);
      const dbErr = err as DatabaseError;
      assert.strictEqual(dbErr.code, 'XX000');
    } finally {
      await client.end();
    }
  });
});
