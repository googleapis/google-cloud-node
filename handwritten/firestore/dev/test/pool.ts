// Copyright 2018 Google LLC
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

import {describe, it} from 'mocha';
import {expect, use} from 'chai';
import {GoogleError} from 'google-gax';
import * as chaiAsPromised from 'chai-as-promised';

import {ClientPool, CLIENT_TERMINATED_ERROR_MSG} from '../src/pool';
import {Deferred} from '../src/util';

use(chaiAsPromised);

const REQUEST_TAG = 'tag';
const USE_REST = false;
const USE_GRPC = true;

function deferredPromises(count: number): Array<Deferred<void>> {
  const deferred: Array<Deferred<void>> = [];
  for (let i = 0; i < count; ++i) {
    deferred.push(new Deferred<void>());
  }
  return deferred;
}

function assertOpCount<T extends object>(
  pool: ClientPool<T>,
  grpcClientOpCount: number,
  restClientOpCount: number,
): void {
  let actualGrpcClientOpCount = 0;
  let actualRestClientOpCount = 0;

  pool._activeClients.forEach(clientConfig => {
    if (clientConfig.grpcEnabled) {
      actualGrpcClientOpCount += clientConfig.activeRequestCount;
    } else {
      actualRestClientOpCount += clientConfig.activeRequestCount;
    }
  });

  expect(actualGrpcClientOpCount).to.equal(grpcClientOpCount);
  expect(actualRestClientOpCount).to.equal(restClientOpCount);
}

describe('Client pool', () => {
  it('creates new instances as needed', () => {
    const clientPool = new ClientPool<{}>(3, 0, () => {
      return {};
    });

    expect(clientPool.size).to.equal(0);

    const operationPromises = deferredPromises(4);

    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    expect(clientPool.size).to.equal(1);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );
    expect(clientPool.size).to.equal(1);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[2].promise,
    );
    expect(clientPool.size).to.equal(1);

    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[3].promise,
    );
    expect(clientPool.size).to.equal(2);
  });

  it('re-uses instances with remaining capacity', async () => {
    const clientPool = new ClientPool<{}>(2, 0, () => {
      return {};
    });

    expect(clientPool.size).to.equal(0);

    const operationPromises = deferredPromises(5);

    const completionPromise = clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    expect(clientPool.size).to.equal(1);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );
    expect(clientPool.size).to.equal(1);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[2].promise,
    );
    expect(clientPool.size).to.equal(2);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[3].promise,
    );
    expect(clientPool.size).to.equal(2);

    operationPromises[0].resolve();

    await completionPromise;
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[4].promise,
    );
    expect(clientPool.size).to.equal(2);
  });

  it('re-uses idle instances', async () => {
    let instanceCount = 0;
    const clientPool = new ClientPool<{}>(1, 1, () => {
      ++instanceCount;
      return {};
    });

    const operationPromises = deferredPromises(2);

    let completionPromise = clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    expect(clientPool.size).to.equal(1);
    operationPromises[0].resolve();
    await completionPromise;

    completionPromise = clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );
    expect(clientPool.size).to.equal(1);
    operationPromises[1].resolve();
    await completionPromise;

    expect(instanceCount).to.equal(1);
  });

  it('does not re-use rest instance for grpc call', async () => {
    const clientPool = new ClientPool<{}>(10, 1, () => {
      return {};
    });

    const operationPromises = deferredPromises(2);

    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_GRPC,
      () => operationPromises[1].promise,
    );
    expect(clientPool.size).to.equal(2);
    assertOpCount(clientPool, 1, 1);

    operationPromises[0].resolve();
    operationPromises[1].resolve();
  });

  it('re-uses grpc instance for rest calls', async () => {
    const clientPool = new ClientPool<{}>(10, 1, () => {
      return {};
    });

    const operationPromises = deferredPromises(2);

    void clientPool.run(
      REQUEST_TAG,
      USE_GRPC,
      () => operationPromises[0].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );
    expect(clientPool.size).to.equal(1);
    assertOpCount(clientPool, 2, 0);

    operationPromises[0].resolve();
    operationPromises[1].resolve();
  });

  it('does not re-use rest instance after beginning the transition to grpc', async () => {
    const clientPool = new ClientPool<{}>(10, 1, () => {
      return {};
    });

    const operationPromises = deferredPromises(3);

    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_GRPC,
      () => operationPromises[1].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[2].promise,
    );

    expect(clientPool.size).to.equal(2);
    assertOpCount(clientPool, 2, 1);

    operationPromises[0].resolve();
    operationPromises[1].resolve();
    operationPromises[2].resolve();
  });

  it('does not re-use rest instance after beginning the transition to grpc - rest operation resolved', async () => {
    const clientPool = new ClientPool<{}>(10, 1, () => {
      return {};
    });

    const operationPromises = deferredPromises(3);

    const restOperation = clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_GRPC,
      () => operationPromises[1].promise,
    );

    // resolve rest operation
    operationPromises[0].resolve();
    await restOperation;
    expect(clientPool.opCount).to.equal(1);

    // Run new rest operation
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[2].promise,
    );

    // Assert client pool status
    expect(clientPool.size).to.equal(1);
    assertOpCount(clientPool, 2, 0);

    operationPromises[1].resolve();
    operationPromises[2].resolve();
  });

  it('does not re-use rest instance after beginning the transition to grpc - grpc client full', async () => {
    const operationLimit = 10;
    const clientPool = new ClientPool<{}>(operationLimit, 1, () => {
      return {};
    });

    const restPromises = deferredPromises(operationLimit);
    const grpcPromises = deferredPromises(1);

    // First operation use GRPC
    void clientPool.run(REQUEST_TAG, USE_GRPC, () => grpcPromises[0].promise);

    // Next X operations can use rest, this will fill the first
    // client and create a new client.
    // The new client should use GRPC since we have transitioned.
    restPromises.forEach(restPromise => {
      void clientPool.run(REQUEST_TAG, USE_REST, () => restPromise.promise);
    });
    expect(clientPool.opCount).to.equal(11);
    expect(clientPool.size).to.equal(2);
    assertOpCount(clientPool, 11, 0);

    grpcPromises.forEach(grpcPromise => grpcPromise.resolve());
    restPromises.forEach(restPromise => restPromise.resolve());
  });

  it('does not re-use rest instance after beginning the transition to grpc - multiple rest clients', async () => {
    const operationLimit = 10;
    const clientPool = new ClientPool<{}>(operationLimit, 1, () => {
      return {};
    });

    const restPromises = deferredPromises(15);
    const grpcPromises = deferredPromises(5);

    // First 15 operations can use rest, this will fill the first
    // client and create a new client.
    restPromises.forEach(restPromise => {
      void clientPool.run(REQUEST_TAG, USE_REST, () => restPromise.promise);
    });
    expect(clientPool.opCount).to.equal(15);
    expect(clientPool.size).to.equal(2);
    assertOpCount(clientPool, 0, 15);

    // Next 5 operations alternate between gRPC and REST, this will create a new client using gRPC
    let transport = USE_GRPC;
    grpcPromises.forEach(grpcPromise => {
      void clientPool.run(REQUEST_TAG, transport, () => grpcPromise.promise);
      transport = !transport;
    });
    expect(clientPool.opCount).to.equal(20);
    expect(clientPool.size).to.equal(3);
    assertOpCount(clientPool, 5, 15);

    grpcPromises.forEach(grpcPromise => grpcPromise.resolve());
    restPromises.forEach(restPromise => restPromise.resolve());
  });

  it('does not re-use rest instance after beginning the transition to grpc - grpc client RST_STREAM', async () => {
    const clientPool = new ClientPool<{}>(10, 1, () => {
      return {};
    });

    const operationPromises = deferredPromises(1);

    const grpcOperation = clientPool.run(REQUEST_TAG, USE_GRPC, () =>
      Promise.reject(
        new GoogleError('13 INTERNAL: Received RST_STREAM with code 2'),
      ),
    );

    await grpcOperation.catch(e => e);

    // Run new rest operation
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );

    // Assert client pool status
    expect(clientPool.size).to.equal(1);
    assertOpCount(clientPool, 1, 0);

    operationPromises[0].resolve();
  });

  it('bin packs operations', async () => {
    let clientCount = 0;
    const clientPool = new ClientPool<{count: number}>(2, 0, () => {
      return {count: ++clientCount};
    });

    expect(clientPool.size).to.equal(0);

    // Create 5 operations, which should schedule 2 operations on the first
    // client, 2 on the second and 1 on the third.
    const operationPromises = deferredPromises(7);
    void clientPool.run(REQUEST_TAG, USE_REST, client => {
      expect(client.count).to.be.equal(1);
      return operationPromises[0].promise;
    });
    void clientPool.run(REQUEST_TAG, USE_REST, client => {
      expect(client.count).to.be.equal(1);
      return operationPromises[1].promise;
    });
    const thirdOperation = clientPool.run(REQUEST_TAG, USE_REST, client => {
      expect(client.count).to.be.equal(2);
      return operationPromises[2].promise;
    });
    void clientPool.run(REQUEST_TAG, USE_REST, client => {
      expect(client.count).to.be.equal(2);
      return operationPromises[3].promise;
    });
    void clientPool.run(REQUEST_TAG, USE_REST, client => {
      expect(client.count).to.be.equal(3);
      return operationPromises[4].promise;
    });

    // Free one slot on the second client.
    operationPromises[2].resolve();
    await thirdOperation;

    // A newly scheduled operation should use the first client that has a free
    // slot.
    void clientPool.run(REQUEST_TAG, USE_REST, async client => {
      expect(client.count).to.be.equal(2);
    });
  });

  it('garbage collects after success', async () => {
    const clientPool = new ClientPool<{}>(2, 0, () => {
      return {};
    });

    expect(clientPool.size).to.equal(0);

    const operationPromises = deferredPromises(4);
    const completionPromises: Array<Promise<void>> = [];

    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[0].promise),
    );
    expect(clientPool.size).to.equal(1);
    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[1].promise),
    );
    expect(clientPool.size).to.equal(1);
    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[2].promise),
    );
    expect(clientPool.size).to.equal(2);
    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[3].promise),
    );
    expect(clientPool.size).to.equal(2);

    operationPromises.forEach(deferred => deferred.resolve());

    await Promise.all(completionPromises);
    expect(clientPool.size).to.equal(0);
  });

  it('garbage collects after error', async () => {
    const clientPool = new ClientPool<{}>(2, 0, () => {
      return {};
    });

    expect(clientPool.size).to.equal(0);

    const operationPromises = deferredPromises(4);
    const completionPromises: Array<Promise<void>> = [];

    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[0].promise),
    );
    expect(clientPool.size).to.equal(1);
    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[1].promise),
    );
    expect(clientPool.size).to.equal(1);
    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[2].promise),
    );
    expect(clientPool.size).to.equal(2);
    completionPromises.push(
      clientPool.run(REQUEST_TAG, USE_REST, () => operationPromises[3].promise),
    );
    expect(clientPool.size).to.equal(2);

    operationPromises.forEach(deferred => deferred.reject(new Error()));

    await Promise.all(completionPromises.map(p => p.catch(() => {})));
    expect(clientPool.size).to.equal(0);
  });

  it('garbage collection calls destructor', () => {
    const garbageCollect = new Deferred<void>();

    const clientPool = new ClientPool<{}>(
      1,
      0,
      () => ({}),
      () => Promise.resolve(garbageCollect.resolve()),
    );

    const operationPromises = deferredPromises(2);

    // Create two pending operations that each spawn their own client
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );

    operationPromises.forEach(deferred => deferred.resolve());

    return garbageCollect.promise;
  });

  it('forwards success', () => {
    const clientPool = new ClientPool<{}>(1, 0, () => {
      return {};
    });

    const op = clientPool.run(REQUEST_TAG, USE_REST, () =>
      Promise.resolve('Success'),
    );
    return expect(op).to.become('Success');
  });

  it('forwards failure', () => {
    const clientPool = new ClientPool<{}>(1, 0, () => {
      return {};
    });

    const op = clientPool.run(REQUEST_TAG, USE_REST, () =>
      Promise.reject('Generated error'),
    );
    return expect(op).to.eventually.be.rejectedWith('Generated error');
  });

  it('does not re-use clients after RST_STREAM', async () => {
    let instanceCount = 0;
    const clientPool = new ClientPool<{}>(1, 1, () => {
      ++instanceCount;
      return {};
    });

    const op = clientPool.run(REQUEST_TAG, USE_REST, () =>
      Promise.reject(
        new GoogleError('13 INTERNAL: Received RST_STREAM with code 2'),
      ),
    );
    await op.catch(() => {});

    await clientPool.run(REQUEST_TAG, USE_REST, async () => {});

    expect(instanceCount).to.equal(2);
  });

  it('garbage collects after RST_STREAM', async () => {
    const clientPool = new ClientPool<{}>(1, 1, () => {
      return {};
    });

    const op = clientPool.run(REQUEST_TAG, USE_REST, () =>
      Promise.reject(
        new GoogleError('13 INTERNAL: Received RST_STREAM with code 2'),
      ),
    );
    await op.catch(() => {});

    expect(clientPool.size).to.equal(0);
  });

  it('garbage collects rest clients after GRPC', async () => {
    const clientPool = new ClientPool<{}>(10, 1, () => {
      return {};
    });

    await clientPool.run(REQUEST_TAG, USE_REST, () => Promise.resolve());
    await clientPool.run(REQUEST_TAG, USE_GRPC, () => Promise.resolve());

    expect(clientPool.size).to.equal(1);
  });

  it('keeps pool of idle clients', async () => {
    const clientPool = new ClientPool<{}>(
      /* concurrentOperationLimit= */ 1,
      /* maxIdleClients= */ 3,
      () => {
        return {};
      },
    );

    const operationPromises = deferredPromises(4);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[2].promise,
    );
    const lastOp = clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[3].promise,
    );
    expect(clientPool.size).to.equal(4);

    // Resolve all pending operations. Note that one client is removed, while
    // 3 are kept for further usage.
    operationPromises.forEach(deferred => deferred.resolve());
    await lastOp;
    expect(clientPool.size).to.equal(3);
  });

  it('default setting keeps at least one idle client', async () => {
    const clientPool = new ClientPool<{}>(
      1,
      /* maxIdleClients= git c*/ 1,
      () => {
        return {};
      },
    );

    const operationPromises = deferredPromises(2);
    void clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[0].promise,
    );
    const completionPromise = clientPool.run(
      REQUEST_TAG,
      USE_REST,
      () => operationPromises[1].promise,
    );
    expect(clientPool.size).to.equal(2);

    operationPromises[0].resolve();
    operationPromises[1].resolve();
    await completionPromise;
    expect(clientPool.size).to.equal(1);
  });

  it('rejects subsequent operations after being terminated', async () => {
    const clientPool = new ClientPool<{}>(1, 0, () => {
      return {};
    });

    await clientPool.terminate();
    await expect(
      clientPool.run(REQUEST_TAG, USE_REST, () =>
        Promise.reject('Call to run() should have failed'),
      ),
    ).to.be.rejectedWith(CLIENT_TERMINATED_ERROR_MSG);
  });

  it('waits for existing operations to complete before releasing clients', async () => {
    const clientPool = new ClientPool<{}>(1, 0, () => {
      return {};
    });
    const deferred = new Deferred<void>();
    let terminated = false;

    // Run operation that completes after terminate() is called.
    void clientPool.run(REQUEST_TAG, USE_REST, () => {
      return deferred.promise;
    });
    const terminateOp = clientPool.terminate().then(() => {
      terminated = true;
    });

    expect(terminated).to.be.false;
    // Mark the mock operation as "complete".
    deferred.resolve();
    await terminateOp;
    expect(terminated).to.be.true;
  });
});
