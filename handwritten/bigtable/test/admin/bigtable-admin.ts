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
import {SinonStub, SinonSandbox} from 'sinon';
import {describe, it} from 'mocha';
import * as bigtabletableadminModule from '../../src';

import {protobuf, operationsProtos} from 'google-gax';
import {TableAdminClient} from '../../src/admin';

// Copied from v2/gapic_bigtable_table_admin_v2.ts
function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject,
  ) as T;
}

// Copied from v2/gapic_bigtable_table_admin_v2.ts
function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

// The GAPIC generated tests don't cover our supplemental methods, so this
// basically just copies the code for checkRestoreTableProgress.
describe('restoreTable', () => {
  it('invokes checkOptimizeRestoredTableProgress without error', async () => {
    const client = new bigtabletableadminModule.admin.TableAdminClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    await client.initialize();
    const expectedResponse = generateSampleMessage(
      new operationsProtos.google.longrunning.Operation(),
    );
    expectedResponse.name = 'test';
    expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
    expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

    client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
    const decodedOperation = await client.checkOptimizeRestoredTableProgress(
      expectedResponse.name,
    );
    assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
    assert(decodedOperation.metadata);
    assert((client.operationsClient.getOperation as SinonStub).getCall(0));
  });

  it('invokes checkOptimizeRestoredTableProgress with error', async () => {
    const client = new bigtabletableadminModule.admin.TableAdminClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    await client.initialize();
    const expectedError = new Error('expected');

    client.operationsClient.getOperation = stubSimpleCall(
      undefined,
      expectedError,
    );
    await assert.rejects(
      client.checkOptimizeRestoredTableProgress(''),
      expectedError,
    );
    assert((client.operationsClient.getOperation as SinonStub).getCall(0));
  });
});

describe('waitForConsistency', () => {
  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('accepts a token object', async () => {
    const token = 'test';
    const client = new TableAdminClient();
    sandbox.stub(client, 'generateConsistencyToken').callsFake(() => {
      assert.ok(false, 'should not have been called');
    });

    sandbox.stub(client, 'checkConsistency').callsFake(req => {
      assert.strictEqual(req.consistencyToken, token);
      return [
        {
          consistent: true,
        },
      ];
    });

    await client.waitForConsistency('tableName', token);
  });

  it('calls without error', async () => {
    const tableName = 'test';
    const consistencyToken = 'token';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config: any = {
      toFake: [
        'setTimeout',
        'clearTimeout',
        'setInterval',
        'clearInterval',
        'Date',
      ],
    };

    const fakeTimers = sandbox.useFakeTimers(config);

    const client = new TableAdminClient();
    sandbox.stub(client, 'generateConsistencyToken').callsFake(tn => {
      assert.strictEqual(tn.name, tableName);
      return [
        {
          consistencyToken,
        },
      ];
    });

    let consistent = false;
    const checkStub = sandbox
      .stub(client, 'checkConsistency')
      .callsFake(req => {
        assert.strictEqual(req.consistencyToken, consistencyToken);
        const rv = {
          consistent,
        };
        consistent = true;
        return [rv];
      });

    const promise = client.waitForConsistency(tableName);
    while (!consistent) {
      // This is gross, but we basically have to wait a few ticks
      // to make sure the function has called setTimeout, before
      // advancing the fake timer.
      for (let i = 0; i < 5; i++) {
        await Promise.resolve();
      }
    }
    fakeTimers.tick(5500);

    await promise;

    assert.strictEqual(checkStub.callCount, 2);
  });

  it('errors on generateConsistencyToken', async () => {
    const client = new TableAdminClient();
    sandbox.stub(client, 'generateConsistencyToken').callsFake(() => {
      throw new Error('it failed!');
    });
    sandbox.stub(client, 'checkConsistency').callsFake(() => {
      throw new Error('should not be called');
    });

    await assert.rejects(() => client.waitForConsistency('foo'));
  });

  it('errors on checkConsistency', async () => {
    const client = new TableAdminClient();
    sandbox.stub(client, 'generateConsistencyToken').callsFake(() => [
      {
        consistencyToken: 'foo',
      },
    ]);
    sandbox.stub(client, 'checkConsistency').callsFake(() => {
      throw new Error('it failed!');
    });

    await assert.rejects(() => client.waitForConsistency('foo'));
  });
});
