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
import {Client, DatabaseError, Query, QueryResult} from '../../src/index.js';

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

  it('should invoke callback with error when client.connect(cb) fails', done => {
    const client = new Client({});
    client.connect(err => {
      assert.strictEqual(err instanceof DatabaseError, true);
      assert.match(err!.message, /Invalid Spanner connection configuration/);
      done();
    });
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

  it('should resolve callback when passing Query instance and 3rd argument callback function', done => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const q = new Query<QueryResult>('SELECT $1', [42]);
    void client.query(q, [42], (err, res) => {
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

  it('should invoke callback and NOT emit error event when callback is provided on query error', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let errorEventEmitted = false;
    let callbackInvoked = false;

    const q = new Query<QueryResult>('');
    void q.on('error', () => {
      errorEventEmitted = true;
    });

    await new Promise<void>(resolve => {
      void client.query(q, undefined, err => {
        assert.strictEqual(err instanceof DatabaseError, true);
        callbackInvoked = true;
        setTimeout(resolve, 20);
      });
    });

    assert.strictEqual(
      errorEventEmitted,
      false,
      'error event should not be emitted when callback is provided',
    );
    assert.strictEqual(callbackInvoked, true);
  });

  it('should reject queries executed after client.end() without reconnecting', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    await client.connect();
    assert.strictEqual(client.isConnected, true);
    await client.end();
    assert.strictEqual(client.isConnected, false);

    try {
      await client.query('SELECT 1');
      assert.fail('Should have thrown an error when querying an ended client');
    } catch (err: unknown) {
      assert.strictEqual(client.isConnected, false);
      assert.match(
        (err as Error).message,
        /Client has already been connected|Connection terminated|Client was closed/,
      );
    }
  });

  it('should deduplicate concurrent connect() calls and initiate connection exactly once', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let connectInvocations = 0;

    (client as unknown as {_doConnect: () => Promise<void>})['_doConnect'] =
      async () => {
        if (client.isConnected) return;
        connectInvocations++;
        await new Promise(r => setTimeout(r, 20));
        client.isConnected = true;
      };

    await Promise.all([client.connect(), client.connect(), client.connect()]);

    assert.strictEqual(
      connectInvocations,
      1,
      'concurrent connect() calls should only initiate connection once',
    );
  });

  it('should handle multiple client.end() calls safely without error', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    await client.connect();
    await client.end();
    await assert.doesNotReject(async () => client.end());
  });

  it('should clear pending query queue when client.end() is called', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    await client.connect();

    // Queue query without awaiting
    const p1 = client.query('SELECT 1');
    await client.end();

    // Verify queue was emptied
    assert.strictEqual(
      (client as unknown as {queryQueue: unknown[]}).queryQueue.length,
      0,
      'query queue should be emptied when client is closed',
    );
    try {
      await p1;
    } catch {
      // Expect rejection on ended client
    }
  });

  it('should reject pending queries in queryQueue with Client was closed error when client.end() is called', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let finishConnect!: () => void;
    const connectGate = new Promise<void>(resolve => {
      finishConnect = resolve;
    });
    const origDoConnect = (
      client as unknown as {_doConnect: () => Promise<void>}
    )._doConnect.bind(client);
    (client as unknown as {_doConnect: () => Promise<void>})._doConnect =
      async () => {
        await connectGate;
        return origDoConnect();
      };

    const p1 = client.query('SELECT 1');
    const p2 = client.query('SELECT 2');
    const p3 = client.query('SELECT 3');

    p1.catch(() => {});

    await client.end();
    finishConnect();

    assert.strictEqual(
      (client as unknown as {queryQueue: unknown[]}).queryQueue.length,
      0,
    );
    await assert.rejects(async () => p2, /Client was closed/);
    await assert.rejects(async () => p3, /Client was closed/);
  });

  it('should reject connect() calls on an ended client and handle concurrent connect/end', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const connectPromise = client.connect();
    await client.end();
    try {
      await connectPromise;
    } catch {
      // Ignored if race rejected
    }
    assert.strictEqual(client.isConnected, false);
    await assert.rejects(async () => client.connect(), /Client was closed/);
  });

  it('should emit end event on Query when query execution completes', done => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let endEventEmitted = false;
    const q = client.query('SELECT 1');
    void q.on('end', res => {
      endEventEmitted = true;
      assert.strictEqual(res.command, 'SELECT');
      void client.end().then(() => {
        assert.strictEqual(endEventEmitted, true);
        done();
      });
    });
  });

  it('should delegate release() to end()', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    await client.connect();
    assert.strictEqual(client.isConnected, true);
    await client.release();
    assert.strictEqual(client.isConnected, false);
  });

  it('should emit error event on Query when no callback is provided on query error', done => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    const q = new Query<QueryResult>('');
    void q.on('error', err => {
      assert.strictEqual(err instanceof DatabaseError, true);
      void client.end().then(() => done());
    });
    void client.query(q).catch(() => {});
  });

  it('should delegate release(cb) to end(cb) using callback syntax', done => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    client.release(err => {
      assert.strictEqual(err, null);
      assert.strictEqual(client.isConnected, false);
      done();
    });
  });

  it('should emit error event on Query when client.query() connection fails without callback', done => {
    const client = new Client({});
    const q = client.query('SELECT 1');
    void q.on('error', err => {
      assert.strictEqual(err instanceof DatabaseError, true);
      assert.match(err.message, /Invalid Spanner connection configuration/);
      done();
    });
    void q.catch(() => {});
  });

  it('should emit error event on validation error even when listener is attached after client.query() returns', async () => {
    const client = new Client({
      project: 'p',
      instance: 'i',
      database: 'd',
    });
    let errorEventEmitted = false;

    await new Promise<void>(resolve => {
      const q = client.query(''); // empty SQL triggers validation error
      void q.on('error', () => {
        errorEventEmitted = true;
        resolve();
      });
      setTimeout(resolve, 50);
    });

    assert.strictEqual(
      errorEventEmitted,
      true,
      'error event should be emitted even when listener is attached immediately after client.query() returns',
    );
  });
});
