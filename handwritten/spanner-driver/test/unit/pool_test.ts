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
import {afterEach, beforeEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import {Client, Pool, Query, QueryResult} from '../../src/index.js';
import {Pool as NativePool} from '../../src/lib/native.js';
import {createMockPool} from './mock_native.js';

describe('Pool Class', () => {
  describe('Unit Tests (Config & Validation)', () => {
    it('should instantiate Pool with config object or connection string and resolve dsn', () => {
      const pool1 = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      assert.strictEqual(pool1.config.project, 'p');
      assert.strictEqual(pool1.dsn, 'projects/p/instances/i/databases/d');

      const pool2 = new Pool('projects/p/instances/i/databases/d');
      assert.strictEqual(
        pool2.config.connectionString,
        'projects/p/instances/i/databases/d',
      );
      assert.strictEqual(pool2.dsn, 'projects/p/instances/i/databases/d');
    });
  });

  describe('Mock Native Bridge Execution (End-to-End Pooling & Lifecycle)', () => {
    let poolStub: sinon.SinonStub;

    beforeEach(() => {
      poolStub = sinon
        .stub(NativePool, 'create')
        .callsFake(async () => createMockPool());
    });

    afterEach(() => {
      poolStub.restore();
    });

    it('should acquire client via connect() promise and return it to idle pool on release()', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      const client = await pool.connect();
      assert.strictEqual(client.isConnected, true);
      assert.strictEqual(typeof client.release, 'function');
      assert.strictEqual(pool.totalCount, 1);
      assert.strictEqual(pool.idleCount, 0);

      await client.release();
      assert.strictEqual(
        client.isConnected,
        true,
        'Client remains connected in idle pool',
      );
      assert.strictEqual(pool.idleCount, 1);
      assert.strictEqual(pool.totalCount, 1);

      await pool.end();
      assert.strictEqual(pool.idleCount, 0);
      assert.strictEqual(pool.totalCount, 0);
      assert.strictEqual(
        client.isConnected,
        false,
        'Client is closed when pool ends',
      );
    });

    it('should reuse idle clients from the pool on subsequent connect() calls', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      const client1 = await pool.connect();
      await client1.release();

      const client2 = await pool.connect();
      assert.strictEqual(
        client1,
        client2,
        'Should reuse the same client instance',
      );
      await client2.release();
      await pool.end();
    });

    it('should respect max pool limit and queue pending acquisitions', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        max: 2,
      });

      const c1 = await pool.connect();
      const c2 = await pool.connect();
      assert.strictEqual(pool.totalCount, 2);
      assert.strictEqual(pool.idleCount, 0);

      let c3Acquired = false;
      let c3Client: Client | undefined;
      const p3 = pool.connect().then(c => {
        c3Acquired = true;
        c3Client = c;
        return c;
      });

      assert.strictEqual(pool.waitingCount, 1);
      assert.strictEqual(c3Acquired, false);

      await c1.release();
      await p3;

      assert.strictEqual(c3Acquired, true);
      assert.strictEqual(
        c3Client,
        c1,
        'Queued acquirer should receive released client',
      );
      assert.strictEqual(pool.waitingCount, 0);

      await c2.release();
      await c3Client!.release();
      await pool.end();
    });

    it('should reject connection acquisition on connectionTimeoutMillis timeout', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        max: 1,
        connectionTimeoutMillis: 50,
      });

      const c1 = await pool.connect();
      assert.strictEqual(pool.totalCount, 1);

      try {
        await pool.connect();
        assert.fail('Should have timed out waiting for connection');
      } catch (err: unknown) {
        assert.strictEqual(
          (err as Error).message,
          'timeout exceeded when trying to connect',
        );
      }

      await c1.release();
      await pool.end();
    });

    it('should timeout when client.connect() takes longer than connectionTimeoutMillis', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        connectionTimeoutMillis: 40,
      });

      const origConnect = Client.prototype.connect;
      Client.prototype.connect = function () {
        return new Promise(r => setTimeout(() => r(this), 100));
      };

      try {
        await pool.connect();
        assert.fail('Should have timed out establishing connection');
      } catch (err: unknown) {
        assert.strictEqual(
          (err as Error).message,
          'timeout exceeded when trying to connect',
        );
      } finally {
        Client.prototype.connect = origConnect;
      }

      await pool.end();
    });

    it('should apply connectionTimeoutMillis to onConnect initialization hook', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        connectionTimeoutMillis: 40,
        onConnect: async () => {
          // Simulating slow onConnect hook taking 100ms
          await new Promise(r => setTimeout(r, 100));
        },
      });

      try {
        await pool.connect();
        assert.fail('Should have timed out during onConnect');
      } catch (err: unknown) {
        assert.strictEqual(
          (err as Error).message,
          'timeout exceeded when trying to connect',
        );
      }

      assert.strictEqual(pool.totalCount, 0);
      await pool.end();
    });

    it('should remove idle client after idleTimeoutMillis expires', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        idleTimeoutMillis: 50,
      });

      const c1 = await pool.connect();
      await c1.release();
      assert.strictEqual(pool.idleCount, 1);

      await new Promise(r => setTimeout(r, 80));
      assert.strictEqual(pool.idleCount, 0);
      assert.strictEqual(pool.totalCount, 0);
      assert.strictEqual(c1.isConnected, false);

      await pool.end();
    });

    it('should maintain min idle clients even after idleTimeoutMillis expires', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        min: 1,
        idleTimeoutMillis: 40,
      });

      const c1 = await pool.connect();
      await c1.release();
      assert.strictEqual(pool.idleCount, 1);

      await new Promise(r => setTimeout(r, 70));
      assert.strictEqual(
        pool.idleCount,
        1,
        'min idle client should be retained',
      );
      assert.strictEqual(pool.totalCount, 1);

      await pool.end();
    });

    it('should emit pool lifecycle events (connect, acquire, release, remove)', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const events: string[] = [];
      pool.on('connect', () => events.push('connect'));
      pool.on('acquire', () => events.push('acquire'));
      pool.on('release', () => events.push('release'));
      pool.on('remove', () => events.push('remove'));

      const c = await pool.connect();
      await c.release();
      await pool.end();

      assert.deepStrictEqual(events, [
        'connect',
        'acquire',
        'release',
        'remove',
      ]);
    });

    it('should destroy client when released with error parameter', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const c = await pool.connect();
      assert.strictEqual(pool.totalCount, 1);

      await c.release(new Error('Fatal error'));
      assert.strictEqual(pool.idleCount, 0);
      assert.strictEqual(pool.totalCount, 0);
      assert.strictEqual(c.isConnected, false);

      await pool.end();
    });

    it('should create a fresh replacement client for queued waiter when active client is removed with error', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        max: 1,
      });

      const c1 = await pool.connect();
      assert.strictEqual(pool.totalCount, 1);

      let waiterResolved = false;
      let newClient: Client | undefined;
      const p2 = pool.connect().then(c => {
        waiterResolved = true;
        newClient = c;
        return c;
      });

      assert.strictEqual(pool.waitingCount, 1);

      // Release c1 with fatal error -> removeClient destroys c1 and connects fresh replacement for waiter
      await c1.release(new Error('Connection lost'));
      await p2;

      assert.strictEqual(waiterResolved, true);
      assert.notStrictEqual(
        newClient,
        c1,
        'Should instantiate a fresh new Client instance',
      );
      assert.strictEqual(newClient?.isConnected, true);
      assert.strictEqual(pool.waitingCount, 0);
      assert.strictEqual(pool.totalCount, 1);

      await newClient!.release();
      await pool.end();
    });

    it('should emit error event on pool when background client emits error and listener is attached', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      let receivedErr: Error | null = null;
      pool.on('error', err => {
        receivedErr = err;
      });

      const c = await pool.connect();
      c.emit('error', new Error('Background connection dropped'));

      assert.ok(receivedErr);
      assert.strictEqual(
        (receivedErr as Error).message,
        'Background connection dropped',
      );
      assert.strictEqual(
        pool.totalCount,
        0,
        'Dead client should be removed from pool',
      );

      await pool.end();
    });

    it('should safely handle background client error when no pool error listener is attached without crashing', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const c = await pool.connect();
      // Should not throw or crash uncaught exception and should remove dead client
      c.emit('error', new Error('Background silent drop'));
      assert.strictEqual(
        pool.totalCount,
        0,
        'Dead client should be removed from pool',
      );

      await pool.end();
    });

    it('should ignore duplicate client.release() calls on the same checkout', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const c = await pool.connect();
      assert.strictEqual(pool.totalCount, 1);
      assert.strictEqual(pool.idleCount, 0);

      await c.release();
      assert.strictEqual(pool.idleCount, 1);

      // Second and third release calls should safely no-op
      await c.release();
      await c.release();
      assert.strictEqual(
        pool.idleCount,
        1,
        'idleCount must not duplicate client',
      );
      assert.strictEqual(pool.totalCount, 1);

      await pool.end();
    });

    it('should support allowExitOnIdle configuration', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        idleTimeoutMillis: 1000,
        allowExitOnIdle: true,
      });

      const c = await pool.connect();
      await c.release();
      assert.strictEqual(pool.idleCount, 1);

      await pool.end();
    });

    it('should destroy client after reaching maxUses limit', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        maxUses: 2,
      });

      const c1 = await pool.connect();
      await c1.release();
      assert.strictEqual(pool.idleCount, 1);

      const c1Again = await pool.connect();
      assert.strictEqual(c1, c1Again);

      await c1Again.release();
      assert.strictEqual(
        pool.idleCount,
        0,
        'Client should be destroyed after 2 uses',
      );
      assert.strictEqual(pool.totalCount, 0);
      assert.strictEqual(c1.isConnected, false);

      await pool.end();
    });

    it('should destroy client after maxLifetimeSeconds expires', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        maxLifetimeSeconds: 0.05, // 50ms
      });

      const c1 = await pool.connect();
      await new Promise(r => setTimeout(r, 60));
      await c1.release();

      assert.strictEqual(
        pool.idleCount,
        0,
        'Client should be destroyed due to maxLifetimeSeconds',
      );
      assert.strictEqual(pool.totalCount, 0);
      assert.strictEqual(c1.isConnected, false);

      await pool.end();
    });

    it('should evict expired idle client when connect() is called after maxLifetimeSeconds', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        maxLifetimeSeconds: 0.05, // 50ms
        idleTimeoutMillis: 0, // do not evict on idle timeout
      });

      const c1 = await pool.connect();
      // Released immediately while still young
      await c1.release();
      assert.strictEqual(pool.idleCount, 1);
      assert.strictEqual(pool.totalCount, 1);

      // Wait 60ms so client expires while sitting idle in pool
      await new Promise(r => setTimeout(r, 60));

      // Connect again -> should detect expired lifetime on checkout, evict c1, and create fresh c2
      const c2 = await pool.connect();
      assert.notStrictEqual(
        c1,
        c2,
        'Should create a fresh client rather than reusing expired idle client',
      );
      assert.strictEqual(
        c1.isConnected,
        false,
        'Expired client should have been closed',
      );
      assert.strictEqual(c2.isConnected, true);
      assert.strictEqual(pool.totalCount, 1);

      await c2.release();
      await pool.end();
    });

    it('should execute onConnect initialization hook when connecting new client', async () => {
      let onConnectRan = false;
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        onConnect: async client => {
          onConnectRan = true;
          assert.strictEqual(client.isConnected, true);
        },
      });

      const c1 = await pool.connect();
      assert.strictEqual(onConnectRan, true);
      await c1.release();
      await pool.end();
    });

    it('should destroy client and propagate error when onConnect throws', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        onConnect: () => {
          throw new Error('onConnect initialization failed');
        },
      });

      try {
        await pool.connect();
        assert.fail('Should have thrown onConnect error');
      } catch (err: unknown) {
        assert.strictEqual(
          (err as Error).message,
          'onConnect initialization failed',
        );
      }

      assert.strictEqual(pool.totalCount, 0);
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

    it('should destroy client when released with error via connect() done(err) callback', done => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      pool.connect((err, client, releaseDone) => {
        assert.strictEqual(err, null);
        assert.strictEqual(pool.totalCount, 1);
        if (releaseDone) {
          releaseDone(new Error('Fatal connection issue'));
        }
        assert.strictEqual(pool.totalCount, 0);
        assert.strictEqual(pool.idleCount, 0);
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
      assert.strictEqual(res.rowCount, 1);
      assert.deepStrictEqual(res.rows, [{'?column?': '1'}]);
      assert.strictEqual(res.fields.length, 1);
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
      void q.on('error', () => {
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

    it('should retain and return client to idle pool when pool.query() encounters a query execution error', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const origQuery = Client.prototype.query;
      (Client.prototype as unknown as {query: Function}).query = async () => {
        throw new Error('Table not found: users');
      };

      try {
        await pool.query('SELECT * FROM users');
        assert.fail('Should have failed on query execution');
      } catch (err: unknown) {
        assert.strictEqual((err as Error).message, 'Table not found: users');
      } finally {
        Client.prototype.query = origQuery;
      }

      // Client should NOT be destroyed; it should be returned to idle pool
      assert.strictEqual(
        pool.idleCount,
        1,
        'Client should be returned to idle pool',
      );
      assert.strictEqual(pool.totalCount, 1);

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

    it('should reject connect() and destroy client if pool.end() is called during connection handshake', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        onConnect: async () => {
          // Wait 40ms during onConnect hook
          await new Promise(r => setTimeout(r, 40));
        },
      });

      const connectPromise = pool.connect();

      // Call pool.end() while connect() / onConnect is in progress
      await new Promise(r => setTimeout(r, 10));
      const endPromise = pool.end();

      try {
        await connectPromise;
        assert.fail('connect() should have been rejected');
      } catch (err: unknown) {
        assert.strictEqual(
          (err as Error).message,
          'Cannot acquire client from ending pool',
        );
      }

      await endPromise;
      assert.strictEqual(pool.totalCount, 0);
    });

    it('should reject pool.query() calls after pool.end() and invoke callback with error', done => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      void pool.end().then(() => {
        void pool.query('SELECT 1', (err, res) => {
          assert.strictEqual(res, undefined);
          assert.strictEqual(err instanceof Error, true);
          assert.match(err!.message, /Cannot acquire client from ending pool/);
          done();
        });
      });
    });

    it('should ensure client is released before user callback executes in pool.query()', done => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      let clientReleased = false;

      // Override _doConnect to track client.release call sequence
      const originalDoConnect = (
        pool as unknown as {
          _doConnect: () => Promise<{
            release: () => Promise<void>;
            query: (
              q: unknown,
              v?: unknown[],
            ) => Promise<{command: string; rows: []; fields: []; rowCount: 0}>;
          }>;
        }
      )._doConnect.bind(pool);
      (pool as unknown as {_doConnect: () => Promise<unknown>})._doConnect =
        async () => {
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
      void q.on('error', err => {
        assert.strictEqual(err instanceof Error, true);
        void pool.end().then(() => done());
      });
      void pool.query(q).catch(() => {});
    });

    it('should emit error event on Query when pool.query() connection acquisition fails without callback', done => {
      const pool = new Pool({});
      const q = new Query<QueryResult>('SELECT 1');
      void q.on('error', err => {
        assert.match(err.message, /Invalid Spanner connection configuration/);
        done();
      });
      void pool.query(q).catch(() => {});
    });

    it('should emit end event on Pool.query() only after client.release() completes', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });
      let releaseCompleted = false;

      const poolAny = pool as unknown as {
        _doConnect: () => Promise<Client>;
      };
      const origConnect = poolAny._doConnect.bind(pool);
      poolAny._doConnect = async () => {
        const c = await origConnect();
        const origRelease = c.release.bind(c);
        c.release = async () => {
          await new Promise(r => setTimeout(r, 40));
          releaseCompleted = true;
          return origRelease();
        };
        return c;
      };

      let releaseStatusWhenEndEmitted = false;
      await new Promise<void>((resolve, reject) => {
        const q = pool.query('SELECT 1');
        void q.on('end', () => {
          releaseStatusWhenEndEmitted = releaseCompleted;
        });
        void q.then(() => setTimeout(resolve, 50)).catch(reject);
      });

      assert.strictEqual(
        releaseStatusWhenEndEmitted,
        true,
        'client.release() should complete before end event is emitted on pool.query()',
      );
    });

    it('should handle concurrent pool.end() calls gracefully and notify all callers', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const c = await pool.connect();
      setTimeout(() => {
        void c.release();
      }, 40);

      // Call pool.end() concurrently 3 times
      await Promise.all([pool.end(), pool.end(), pool.end()]);

      assert.strictEqual(pool.totalCount, 0);
      assert.strictEqual(pool.idleCount, 0);
    });

    it('should drain active in-flight queries before pool.end() resolves', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const c1 = await pool.connect();
      let queryFinished = false;

      // Simulate active query completing after 50ms
      setTimeout(() => {
        queryFinished = true;
        void c1.release();
      }, 50);

      assert.strictEqual(pool.totalCount, 1);
      await pool.end();

      assert.strictEqual(
        queryFinished,
        true,
        'pool.end() must wait for active in-flight client to finish',
      );
      assert.strictEqual(pool.totalCount, 0);
    });

    it('should reject queued waitQueue acquirers when pool.end() is called', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
        max: 1,
      });

      const c1 = await pool.connect();

      let waiterRejected = false;
      let waiterErrorMsg = '';

      const p2 = pool.connect().catch((err: Error) => {
        waiterRejected = true;
        waiterErrorMsg = err.message;
      });

      assert.strictEqual(pool.waitingCount, 1);

      // Release c1 after a short delay so pool.end() rejects waitQueue before c1 release
      setTimeout(() => {
        void c1.release();
      }, 20);

      await pool.end();
      await p2;

      assert.strictEqual(waiterRejected, true);
      assert.strictEqual(
        waiterErrorMsg,
        'Cannot acquire client from ending pool',
      );
      assert.strictEqual(pool.waitingCount, 0);
    });

    it('should remove idle client from pool when background error event occurs', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      pool.on('error', () => {
        // Prevent unhandled error throw in test harness
      });

      const idleClient = await pool.connect();
      await idleClient.release();
      assert.strictEqual(pool.idleCount, 1);
      assert.strictEqual(pool.totalCount, 1);

      // Emit a background connection error on the idle client handle
      idleClient.emit('error', new Error('Connection reset by peer'));

      // Broken client must be removed from the pool
      assert.strictEqual(
        pool.idleCount,
        0,
        'Broken idle client should be purged',
      );
      assert.strictEqual(
        pool.totalCount,
        0,
        'Broken idle client should be removed from totalCount',
      );
      assert.strictEqual(
        idleClient.isConnected,
        false,
        'Broken client should be closed',
      );

      await pool.end();
    });

    it('should reject in-flight connection attempt when pool.end() is called concurrently', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      // Delay client connection to simulate slow handshake
      const originalConnect = Client.prototype.connect;
      Client.prototype.connect = function () {
        return new Promise(resolve => setTimeout(() => resolve(this), 60));
      };

      try {
        const connectPromise = pool.connect();
        // Call pool.end() while connection handshake is in-flight
        const endPromise = pool.end();

        await endPromise;

        try {
          await connectPromise;
          assert.fail(
            'Should not allow client acquisition from an ending pool',
          );
        } catch (err: unknown) {
          assert.strictEqual(
            (err as Error).message,
            'Cannot acquire client from ending pool',
          );
        }
      } finally {
        Client.prototype.connect = originalConnect;
      }

      assert.strictEqual(pool.totalCount, 0);
    });

    it('should forward streaming row and fields events from pool.query()', async () => {
      const pool = new Pool({
        project: 'p',
        instance: 'i',
        database: 'd',
      });

      const receivedFields: unknown[] = [];
      const receivedRows: unknown[] = [];
      let receivedResult: unknown = null;

      const query = pool.query('SELECT 1');
      void query.on('fields', fields => receivedFields.push(fields));
      void query.on('row', (row, result) => {
        receivedRows.push(row);
        receivedResult = result;
      });

      await query;

      assert.strictEqual(receivedFields.length, 1, 'Should emit fields event');
      assert.strictEqual(receivedRows.length, 1, 'Should emit row event');
      assert.ok(receivedResult, 'Should pass result object as 2nd parameter');

      await pool.end();
    });
  });
});
