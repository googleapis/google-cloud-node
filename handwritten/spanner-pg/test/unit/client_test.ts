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
import {Client} from '../../src/index.js';
import {clearPoolCache} from '../../src/lib/client.js';

describe('Client Lifecycle', () => {
  let createPoolStub: sinon.SinonStub;
  let fakePool: sinon.SinonStubbedInstance<SpannerPool>;
  let fakeConnection: sinon.SinonStubbedInstance<Connection>;

  beforeEach(async () => {
    await clearPoolCache();
    fakeConnection = sinon.createStubInstance(Connection);
    fakeConnection.close.resolves();

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

  it('should connect successfully and initialize connection/pool', async () => {
    const client = new Client({
      project: 'test-project',
      instance: 'test-instance',
      database: 'test-db',
    });

    let connectEmitted = false;
    client.on('connect', () => {
      connectEmitted = true;
    });

    await client.connect();

    assert.strictEqual(connectEmitted, true);
    assert.strictEqual(createPoolStub.calledOnce, true);
    assert.strictEqual(
      createPoolStub.firstCall.args[0],
      'projects/test-project/instances/test-instance/databases/test-db',
    );
    assert.strictEqual(fakePool.createConnection.calledOnce, true);

    await client.end();
    assert.strictEqual(fakeConnection.close.calledOnce, true);
  });

  it('should support callback syntax for connect and end', done => {
    const client = new Client({
      project: 'test-project',
      instance: 'test-instance',
      database: 'test-db',
    });

    client.connect((err?: any) => {
      assert.ifError(err);
      assert.strictEqual(createPoolStub.calledOnce, true);

      client.end((endErr?: any) => {
        assert.ifError(endErr);
        assert.strictEqual(fakeConnection.close.calledOnce, true);
        done();
      });
    });
  });

  it('should emit error when connect fails', async () => {
    createPoolStub.rejects(new Error('Connection failed'));

    const client = new Client({
      project: 'test-project',
      instance: 'test-instance',
      database: 'test-db',
    });

    let errorEmitted: Error | null = null;
    client.on('error', (err: any) => {
      errorEmitted = err;
    });

    await assert.rejects(client.connect(), /Connection failed/);
    assert.ok(errorEmitted);
    assert.strictEqual((errorEmitted as any).message, 'Connection failed');
  });
});
