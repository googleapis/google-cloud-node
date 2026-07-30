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
import {Pool} from '../../src/index.js';

describe('Pool Class', () => {
  it('should instantiate Pool with config object or connection string', () => {
    const pool1 = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    assert.strictEqual(pool1.config.project, 'p');

    const pool2 = new Pool('projects/p/instances/i/databases/d');
    assert.strictEqual(
      pool2.config.connectionString,
      'projects/p/instances/i/databases/d',
    );
  });

  it('should acquire client via connect() promise and callback', async () => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const client = await pool.connect();
    assert.strictEqual(client.isConnected, true);
    await client.end();
    await pool.end();
  });

  it('should acquire client via connect() callback syntax with done release', done => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    pool.connect((err, client, releaseDone) => {
      assert.strictEqual(err, null);
      assert.strictEqual(client?.isConnected, true);
      if (releaseDone) {
        releaseDone();
      }
      void pool.end().then(() => done());
    });
  });

  it('should execute query via pool.query() with async/await', async () => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const res = await pool.query('SELECT 1');
    assert.strictEqual(res.command, 'SELECT');
    assert.deepStrictEqual(res.rows, []);
    await pool.end();
  });

  it('should execute query via pool.query() with callback syntax', done => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    void pool.query('SELECT 1', (err, res) => {
      assert.strictEqual(err, null);
      assert.strictEqual(res?.command, 'SELECT');
      void pool.end().then(() => done());
    });
  });

  it('should prevent new client acquisitions after pool.end()', async () => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    await pool.end();
    try {
      await pool.connect();
      assert.fail('Should have thrown error on ending pool');
    } catch (err: unknown) {
      assert.strictEqual(
        (err as Error).message,
        'Cannot acquire client from ending pool',
      );
    }
  });
});
