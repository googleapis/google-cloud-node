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
import * as sinon from 'sinon';
import {Pool as SpannerPool, Connection} from 'spannerlib-node';
import {Client} from '../src/index.js';

describe('Query Execution Combinations', () => {
  let createPoolStub: sinon.SinonStub;
  let fakePool: sinon.SinonStubbedInstance<SpannerPool>;
  let fakeConnection: any;

  beforeEach(() => {
    fakeConnection = {
      execute: sinon.stub(),
      close: sinon.stub().resolves(),
    };

    fakePool = sinon.createStubInstance(SpannerPool);
    fakePool.createConnection.resolves(fakeConnection as unknown as Connection);
    fakePool.close.resolves();

    createPoolStub = sinon
      .stub(SpannerPool, 'create')
      .resolves(fakePool as unknown as SpannerPool);
  });

  afterEach(() => {
    sinon.restore();
  });

  function setupFakeRows(
    fakeRowsData: any[],
    fields: any[] = [{name: 'id', type: {code: 3}}],
  ) {
    let index = 0;
    const mockRowsIterator = {
      metadata: sinon.stub().resolves({
        rowType: {fields},
      }),
      next: sinon.stub().callsFake(async () => {
        if (index < fakeRowsData.length) {
          const row = fakeRowsData[index++];
          return {values: row.map((v: any) => ({stringValue: String(v)}))};
        }
        return null;
      }),
      resultSetStats: sinon.stub().resolves({
        rowCountExact: fakeRowsData.length,
      }),
      close: sinon.stub().resolves(),
    };
    fakeConnection.execute.resolves(mockRowsIterator);
    return mockRowsIterator;
  }

  it('should support Promise/async/await syntax', async () => {
    setupFakeRows([[1], [2]]);
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });
    await client.connect();

    const result = await client.query('SELECT id FROM users');
    assert.deepStrictEqual(result.rows, [{id: '1'}, {id: '2'}]);
    assert.strictEqual(result.rowCount, 2);
    assert.strictEqual(result.command, 'SELECT');
    assert.strictEqual(result.fields[0].name, 'id');
  });

  it('should support Callback syntax', done => {
    setupFakeRows([[10], [20]]);
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });

    void (async () => {
      await client.connect();
      void client.query(
        'SELECT id FROM users',
        (err: Error | null, result?: any) => {
          assert.ifError(err);
          assert.ok(result);
          assert.deepStrictEqual(result.rows, [{id: '10'}, {id: '20'}]);
          assert.strictEqual(result.rowCount, 2);
          done();
        },
      );
    })();
  });

  it('should support Event-Driven Row Streaming', done => {
    setupFakeRows([[100], [200]]);
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });

    void (async () => {
      await client.connect();
      const query = client.query('SELECT id FROM users');

      const rowsReceived: any[] = [];
      void query.on('row', row => {
        rowsReceived.push(row);
      });

      void query.on('end', result => {
        assert.deepStrictEqual(rowsReceived, [{id: '100'}, {id: '200'}]);
        assert.deepStrictEqual(result.rows, [{id: '100'}, {id: '200'}]);
        assert.strictEqual(result.rowCount, 2);
        done();
      });

      void query.on('error', err => {
        done(err);
      });
    })();
  });

  it('should support Parameter Bindings', async () => {
    setupFakeRows([[1]]);
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });
    await client.connect();

    await client.query('SELECT id FROM users WHERE id = $1 AND name = $2', [
      42,
      'bob',
    ]);

    assert.strictEqual(fakeConnection.execute.calledOnce, true);
    const execArg = fakeConnection.execute.firstCall.args[0];
    assert.strictEqual(
      execArg.sql,
      'SELECT id FROM users WHERE id = $1 AND name = $2',
    );
    assert.ok(execArg.params.fields.p1);
    assert.ok(execArg.params.fields.p2);
  });

  it('should propagate errors correctly through Promise', async () => {
    fakeConnection.execute.rejects(new Error('Execute failed'));
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });
    await client.connect();

    await assert.rejects(async () => {
      await client.query('SELECT id FROM users');
    }, /Execute failed/);
  });

  it('should propagate errors correctly through Callback', done => {
    fakeConnection.execute.rejects(new Error('Execute failed'));
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });

    void (async () => {
      await client.connect();
      void client.query('SELECT id FROM users', (err: Error | null) => {
        assert.ok(err);
        assert.match(err!.message, /Execute failed/);
        done();
      });
    })();
  });

  it('should emit drain event when the query queue becomes empty', done => {
    setupFakeRows([[1]]);
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });

    void (async () => {
      await client.connect();
      client.on('drain', () => {
        done();
      });
      void client.query('SELECT id FROM users');
    })();
  });

  it('should reject query attempts after end() is called', done => {
    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });
    void (async () => {
      await client.connect();
      void client.end();

      void client.query('SELECT 1', (err: Error | null) => {
        assert.ok(err);
        assert.strictEqual(
          err!.message,
          'Client was closed and is not queryable',
        );
        done();
      });
    })();
  });

  it('should drain query queue before closing connection in end()', done => {
    let queryResolved = false;
    let poolClosed = false;

    fakeConnection.execute.callsFake(async () => {
      await new Promise(r => setTimeout(r, 10));
      queryResolved = true;
      return {
        metadata: async () => ({rowType: {fields: []}}),
        next: async () => null,
        resultSetStats: async () => ({rowCountExact: 0}),
        close: async () => {},
      };
    });

    fakePool.close.callsFake(async () => {
      assert.strictEqual(
        queryResolved,
        true,
        'Query should resolve before pool is closed',
      );
      poolClosed = true;
    });

    const client = new Client({
      connectionString:
        'postgresql://localhost/projects/test-project/instances/test-instance/databases/test-db',
    });

    void (async () => {
      await client.connect();
      void client.query('SELECT 1');
      void client.end(() => {
        assert.strictEqual(poolClosed, true);
        done();
      });
    })();
  });
});
