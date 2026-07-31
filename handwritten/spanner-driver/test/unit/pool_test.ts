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
import {Pool, Query, QueryResult} from '../../src/index.js';

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

  it('should acquire client via connect() promise and callback with release()', async () => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const client = await pool.connect();
    assert.strictEqual(client.isConnected, true);
    assert.strictEqual(typeof client.release, 'function');
    await client.release();
    assert.strictEqual(client.isConnected, false);
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

  it('should resolve callback when passing Query instance and 3rd argument callback to pool.query()', done => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const q = new Query<QueryResult>('SELECT $1', [42]);
    void pool.query(q, [42], (err, res) => {
      assert.strictEqual(err, null);
      assert.strictEqual(res?.command, 'SELECT');
      void pool.end().then(() => done());
    });
  });

  it('should invoke callback exactly once when pool.query() fails during connection acquisition', done => {
    const originalProject = process.env.GOOGLE_CLOUD_PROJECT;
    delete process.env.GOOGLE_CLOUD_PROJECT;
    const pool = new Pool({});
    let callCount = 0;
    void pool.query('SELECT 1', (err, res) => {
      if (originalProject !== undefined) {
        process.env.GOOGLE_CLOUD_PROJECT = originalProject;
      } else {
        delete process.env.GOOGLE_CLOUD_PROJECT;
      }
      callCount++;
      assert.strictEqual(res, undefined);
      assert.strictEqual(callCount, 1);
      assert.strictEqual(err instanceof Error, true);
      assert.match(err!.message, /Invalid Spanner connection configuration/);
      done();
    });
  });

  it('should invoke callback exactly once and NOT emit error event when pool.query() fails', async () => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let callCount = 0;
    let errorEventEmitted = false;

    const q = new Query<QueryResult>('');
    q.on('error', () => {
      errorEventEmitted = true;
    });

    await new Promise<void>(resolve => {
      void pool.query(q, undefined, (err, res) => {
        callCount++;
        assert.strictEqual(res, undefined);
        assert.strictEqual(callCount, 1);
        assert.strictEqual(err instanceof Error, true);
        setTimeout(resolve, 20);
      });
    });

    assert.strictEqual(
      errorEventEmitted,
      false,
      'error event should not be emitted when callback is provided',
    );
    await pool.end();
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

  it('should ensure client is released before user callback executes in pool.query()', done => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let clientReleased = false;

    // Override _doConnect to track client.release call sequence
    const originalDoConnect = (pool as unknown as {_doConnect: () => Promise<{release: () => Promise<void>; query: (q: unknown, v?: unknown[]) => Promise<{command: string; rows: []; fields: []; rowCount: 0}>}>})._doConnect.bind(pool);
    (pool as unknown as {_doConnect: () => Promise<unknown>})._doConnect = async () => {
      const client = await originalDoConnect();
      const originalRelease = client.release.bind(client);
      client.release = async () => {
        clientReleased = true;
        await originalRelease();
      };
      return client;
    };

    void pool.query('SELECT 1', (err, res) => {
      assert.strictEqual(err, null);
      assert.strictEqual(res?.command, 'SELECT');
      assert.strictEqual(
        clientReleased,
        true,
        'Client release must complete BEFORE user callback is executed',
      );
      void pool.end().then(() => done());
    });
  });

  it('should end pool using pool.end() callback syntax', done => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    pool.end(() => {
      done();
    });
  });

  it('should emit error event on Query when pool.query() query execution fails without callback', done => {
    const pool = new Pool({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const q = new Query<QueryResult>('');
    q.on('error', err => {
      assert.strictEqual(err instanceof Error, true);
      void pool.end().then(() => done());
    });
    void pool.query(q).catch(() => {});
  });
});
