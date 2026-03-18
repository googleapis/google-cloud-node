// Copyright 2020 Google LLC
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

import {BulkWriterOptions, DocumentData} from '@google-cloud/firestore';

import {afterEach, beforeEach, describe, it} from 'mocha';
import {expect} from 'chai';
import {GoogleError, Status} from 'google-gax';

import * as proto from '../protos/firestore_v1_proto_api';
import {
  BulkWriter,
  Firestore,
  setLogFunction,
  Timestamp,
  WriteResult,
} from '../src';
import {
  DEFAULT_BACKOFF_FACTOR,
  DEFAULT_BACKOFF_INITIAL_DELAY_MS,
  DEFAULT_BACKOFF_MAX_DELAY_MS,
  MAX_RETRY_ATTEMPTS,
  setTimeoutHandler,
} from '../src/backoff';
import {
  BulkWriterError,
  DEFAULT_INITIAL_OPS_PER_SECOND_LIMIT,
  DEFAULT_JITTER_FACTOR,
  DEFAULT_MAXIMUM_OPS_PER_SECOND_LIMIT,
  RETRY_MAX_BATCH_SIZE,
} from '../src/bulk-writer';
import {Deferred} from '../src/util';
import {
  ApiOverride,
  create,
  createInstance,
  document,
  InvalidApiUsage,
  remove,
  response,
  set,
  update,
  updateMask,
  verifyInstance,
} from './util/helpers';
import api = proto.google.firestore.v1;

// Change the argument to 'console.log' to enable debug output.
setLogFunction(null);

const PROJECT_ID = 'test-project';

interface RequestResponse {
  request: api.IBatchWriteRequest;
  response: api.IBatchWriteResponse;
}

export function createRequest(requests: api.IWrite[]): api.IBatchWriteRequest {
  return {
    writes: requests,
  };
}

export function successResponse(
  updateTimeSeconds: number,
): api.IBatchWriteResponse {
  return {
    writeResults: [
      {
        updateTime: {
          nanos: 0,
          seconds: updateTimeSeconds,
        },
      },
    ],
    status: [{code: Status.OK}],
  };
}

export function failedResponse(
  code = Status.DEADLINE_EXCEEDED,
): api.IBatchWriteResponse {
  return {
    writeResults: [
      {
        updateTime: null,
      },
    ],
    status: [{code}],
  };
}

export function mergeResponses(
  responses: api.IBatchWriteResponse[],
): api.IBatchWriteResponse {
  return {
    writeResults: responses.map(v => v.writeResults![0]),
    status: responses.map(v => v.status![0]),
  };
}

export function setOp(doc: string, value: string): api.IWrite {
  return set({
    document: document(doc, 'foo', value),
  }).writes![0];
}

export function updateOp(doc: string, value: string): api.IWrite {
  return update({
    document: document(doc, 'foo', value),
    mask: updateMask('foo'),
  }).writes![0];
}

export function createOp(doc: string, value: string): api.IWrite {
  return create({
    document: document(doc, 'foo', value),
  }).writes![0];
}

export function deleteOp(doc: string): api.IWrite {
  return remove(doc).writes![0];
}

describe.skip('BulkWriter', () => {
  let firestore: Firestore;
  let requestCounter: number;
  let opCount: number;
  let timeoutHandlerCounter = 0;

  beforeEach(() => {
    requestCounter = 0;
    opCount = 0;
    timeoutHandlerCounter = 0;
    setTimeoutHandler((fn, timeout) => {
      // Since a call to the backoff is made before each batchWrite, only
      // increment the counter if the timeout is non-zero, which indicates a
      // retry from an error.
      if (timeout > 0) {
        timeoutHandlerCounter++;
      }
      fn();
    });
  });

  function incrementOpCount(): void {
    opCount++;
  }

  function verifyOpCount(expected: number): void {
    expect(opCount).to.equal(expected);
  }

  /**
   * Creates an instance with the mocked objects.
   */
  function instantiateInstance(mock: RequestResponse[]): Promise<BulkWriter> {
    const overrides: ApiOverride = {
      batchWrite: async (request, options) => {
        expect(options!.retry!.retryCodes).contains(Status.ABORTED);

        expect(request).to.deep.eq({
          database: `projects/${PROJECT_ID}/databases/(default)`,
          writes: mock[requestCounter].request.writes,
        });
        const responsePromise = response({
          writeResults: mock[requestCounter].response.writeResults,
          status: mock[requestCounter].response.status,
        });
        requestCounter++;
        return responsePromise;
      },
    };
    return createInstance(overrides).then(firestoreClient => {
      firestore = firestoreClient;
      return firestore.bulkWriter();
    });
  }

  afterEach(async () => {
    await verifyInstance(firestore);
    setTimeoutHandler(setTimeout);
  });

  describe('options', () => {
    it('requires object', async () => {
      const firestore = await createInstance();
      expect(() => firestore.bulkWriter(42 as InvalidApiUsage)).to.throw(
        'Value for argument "options" is not a valid bulkWriter() options argument. Input is not an object.',
      );
    });

    it('initialOpsPerSecond requires positive integer', async () => {
      const firestore = await createInstance();
      expect(() =>
        firestore.bulkWriter({throttling: {initialOpsPerSecond: -1}}),
      ).to.throw(
        'Value for argument "initialOpsPerSecond" must be within [1, Infinity] inclusive, but was: -1',
      );

      expect(() =>
        firestore.bulkWriter({throttling: {initialOpsPerSecond: 500.5}}),
      ).to.throw(
        'Value for argument "initialOpsPerSecond" is not a valid integer.',
      );
    });

    it('maxOpsPerSecond requires positive integer', async () => {
      const firestore = await createInstance();
      expect(() =>
        firestore.bulkWriter({throttling: {maxOpsPerSecond: -1}}),
      ).to.throw(
        'Value for argument "maxOpsPerSecond" must be within [1, Infinity] inclusive, but was: -1',
      );

      expect(() =>
        firestore.bulkWriter({throttling: {maxOpsPerSecond: 500.5}}),
      ).to.throw(
        'Value for argument "maxOpsPerSecond" is not a valid integer.',
      );
    });

    it('maxOpsPerSecond must be greater than initial ops per second', async () => {
      const firestore = await createInstance();

      expect(() =>
        firestore.bulkWriter({
          throttling: {initialOpsPerSecond: 550, maxOpsPerSecond: 500},
        }),
      ).to.throw(
        'Value for argument "options" is not a valid bulkWriter() options argument. "maxOpsPerSecond" cannot be less than "initialOpsPerSecond".',
      );
    });

    it('initial and max rates are properly set', async () => {
      const firestore = await createInstance();

      let bulkWriter = firestore.bulkWriter({
        throttling: {initialOpsPerSecond: 500, maxOpsPerSecond: 550},
      });
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(500);
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(550);

      bulkWriter = firestore.bulkWriter({
        throttling: {maxOpsPerSecond: 1000},
      });
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(500);
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(1000);

      bulkWriter = firestore.bulkWriter({
        throttling: {initialOpsPerSecond: 100},
      });
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(100);
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(
        DEFAULT_MAXIMUM_OPS_PER_SECOND_LIMIT,
      );

      bulkWriter = firestore.bulkWriter({
        throttling: {maxOpsPerSecond: 100},
      });
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(100);
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(100);

      bulkWriter = firestore.bulkWriter();
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(
        DEFAULT_INITIAL_OPS_PER_SECOND_LIMIT,
      );
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(
        DEFAULT_MAXIMUM_OPS_PER_SECOND_LIMIT,
      );

      bulkWriter = firestore.bulkWriter({throttling: true});
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(
        DEFAULT_INITIAL_OPS_PER_SECOND_LIMIT,
      );
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(
        DEFAULT_MAXIMUM_OPS_PER_SECOND_LIMIT,
      );

      bulkWriter = firestore.bulkWriter({throttling: false});
      expect(bulkWriter._rateLimiter.availableTokens).to.equal(
        Number.POSITIVE_INFINITY,
      );
      expect(bulkWriter._rateLimiter.maximumCapacity).to.equal(
        Number.POSITIVE_INFINITY,
      );
    });
  });

  it('has a set() method', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: successResponse(2),
      },
    ]);
    const doc = firestore.doc('collectionId/doc');
    const writeResult = await bulkWriter.set(doc, {foo: 'bar'});
    incrementOpCount();
    await bulkWriter.close();
    verifyOpCount(1);
    expect(writeResult.writeTime.isEqual(new Timestamp(2, 0))).to.be.true;
  });

  it('has an update() method', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([updateOp('doc', 'bar')]),
        response: successResponse(2),
      },
    ]);
    const doc = firestore.doc('collectionId/doc');
    const writeResult = await bulkWriter.update(doc, {foo: 'bar'});
    incrementOpCount();
    await bulkWriter.close();
    verifyOpCount(1);
    expect(writeResult.writeTime.isEqual(new Timestamp(2, 0))).to.be.true;
  });

  it('has a delete() method', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([deleteOp('doc')]),
        response: successResponse(2),
      },
    ]);
    const doc = firestore.doc('collectionId/doc');
    const writeResult = await bulkWriter.delete(doc);
    incrementOpCount();
    await bulkWriter.close();
    verifyOpCount(1);
    expect(writeResult.writeTime.isEqual(new Timestamp(2, 0))).to.be.true;
  });

  it('has a create() method', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([createOp('doc', 'bar')]),
        response: successResponse(2),
      },
    ]);
    const doc = firestore.doc('collectionId/doc');
    const writeResult = await bulkWriter.create(doc, {foo: 'bar'});
    incrementOpCount();
    await bulkWriter.close();
    verifyOpCount(1);
    expect(writeResult.writeTime.isEqual(new Timestamp(2, 0))).to.be.true;
  });

  it('surfaces errors', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(),
      },
    ]);

    const doc = firestore.doc('collectionId/doc');
    void bulkWriter.set(doc, {foo: 'bar'}).catch(err => {
      incrementOpCount();
      expect(err instanceof BulkWriterError).to.be.true;
      expect(err.code).to.equal(Status.DEADLINE_EXCEEDED);
    });

    await bulkWriter.close();
    verifyOpCount(1);
  });

  it('throws UnhandledPromiseRejections if no error handler is passed in', async () => {
    let errorThrown = false;
    const unhandledDeferred = new Deferred<void>();
    process.on('unhandledRejection', () => {
      errorThrown = true;
      unhandledDeferred.resolve();
    });

    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(),
      },
    ]);

    const doc = firestore.doc('collectionId/doc');
    void bulkWriter.set(doc, {foo: 'bar'});

    await bulkWriter.close();
    await unhandledDeferred.promise;
    expect(errorThrown).to.be.true;
  });

  it('swallows UnhandledPromiseRejections if an error handler is passed in', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(),
      },
    ]);

    const doc = firestore.doc('collectionId/doc');
    void bulkWriter.set(doc, {foo: 'bar'});
    // Set the error handler after calling set() to ensure that the check is
    // performed when the promise resolves.
    bulkWriter.onWriteError(() => false);
    return bulkWriter.close();
  });

  it('flush() resolves immediately if there are no writes', async () => {
    const bulkWriter = await instantiateInstance([]);
    return bulkWriter.flush().then(() => verifyOpCount(0));
  });

  it('adds writes to a new batch after calling flush()', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([createOp('doc', 'bar')]),
        response: successResponse(2),
      },
      {
        request: createRequest([setOp('doc2', 'bar1')]),
        response: successResponse(2),
      },
    ]);
    void bulkWriter
      .create(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .then(incrementOpCount);
    await bulkWriter.flush();
    void bulkWriter
      .set(firestore.doc('collectionId/doc2'), {foo: 'bar1'})
      .then(incrementOpCount);
    await bulkWriter.close();
    verifyOpCount(2);
  });

  it('close() sends all writes', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([createOp('doc', 'bar')]),
        response: successResponse(2),
      },
    ]);
    const doc = firestore.doc('collectionId/doc');
    void bulkWriter.create(doc, {foo: 'bar'}).then(incrementOpCount);
    await bulkWriter.close();
    verifyOpCount(1);
  });

  it('close() resolves immediately if there are no writes', async () => {
    const bulkWriter = await instantiateInstance([]);
    return bulkWriter.close().then(() => verifyOpCount(0));
  });

  it('cannot call methods after close() is called', async () => {
    const bulkWriter = await instantiateInstance([]);

    const expected = 'BulkWriter has already been closed.';
    const doc = firestore.doc('collectionId/doc');
    await bulkWriter.close();
    expect(() => bulkWriter.set(doc, {})).to.throw(expected);
    expect(() => bulkWriter.create(doc, {})).to.throw(expected);
    expect(() => bulkWriter.update(doc, {})).to.throw(expected);
    expect(() => bulkWriter.flush()).to.throw(expected);

    // Calling close() multiple times is allowed.
    await bulkWriter.close();
  });

  it('send writes to the same documents in the different batches', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc1', 'bar')]),
        response: successResponse(1),
      },
      {
        request: createRequest([updateOp('doc1', 'bar2')]),
        response: successResponse(2),
      },
    ]);

    const doc1 = firestore.doc('collectionId/doc1');
    void bulkWriter.set(doc1, {foo: 'bar'}).then(incrementOpCount);
    void bulkWriter.update(doc1, {foo: 'bar2'}).then(incrementOpCount);

    await bulkWriter.close();
    verifyOpCount(2);
  });

  it('sends writes to different documents in the same batch', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc1', 'bar'), updateOp('doc2', 'bar')]),
        response: mergeResponses([successResponse(1), successResponse(2)]),
      },
    ]);

    const doc1 = firestore.doc('collectionId/doc1');
    const doc2 = firestore.doc('collectionId/doc2');
    void bulkWriter.set(doc1, {foo: 'bar'}).then(incrementOpCount);
    void bulkWriter.update(doc2, {foo: 'bar'}).then(incrementOpCount);

    await bulkWriter.close();
    verifyOpCount(2);
  });

  it('buffers subsequent operations after reaching maximum pending op count', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([
          setOp('doc1', 'bar'),
          setOp('doc2', 'bar'),
          setOp('doc3', 'bar'),
        ]),
        response: mergeResponses([
          successResponse(1),
          successResponse(2),
          successResponse(3),
        ]),
      },
      {
        request: createRequest([setOp('doc4', 'bar'), setOp('doc5', 'bar')]),
        response: mergeResponses([successResponse(4), successResponse(5)]),
      },
    ]);
    bulkWriter._setMaxPendingOpCount(3);
    void bulkWriter
      .set(firestore.doc('collectionId/doc1'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc2'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc3'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc4'), {foo: 'bar'})
      .then(incrementOpCount);
    expect(bulkWriter._getBufferedOperationsCount()).to.equal(1);
    void bulkWriter
      .set(firestore.doc('collectionId/doc5'), {foo: 'bar'})
      .then(incrementOpCount);
    expect(bulkWriter._getBufferedOperationsCount()).to.equal(2);
    await bulkWriter.close();
    verifyOpCount(5);
  });

  it('buffered operations are flushed after being enqueued', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([
          setOp('doc1', 'bar'),
          setOp('doc2', 'bar'),
          setOp('doc3', 'bar'),
        ]),
        response: mergeResponses([
          successResponse(1),
          successResponse(2),
          successResponse(3),
        ]),
      },
      {
        request: createRequest([
          setOp('doc4', 'bar'),
          setOp('doc5', 'bar'),
          setOp('doc6', 'bar'),
        ]),
        response: mergeResponses([
          successResponse(4),
          successResponse(5),
          successResponse(6),
        ]),
      },
      {
        request: createRequest([setOp('doc7', 'bar')]),
        response: successResponse(7),
      },
    ]);
    bulkWriter._setMaxPendingOpCount(6);
    bulkWriter._setMaxBatchSize(3);
    void bulkWriter
      .set(firestore.doc('collectionId/doc1'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc2'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc3'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc4'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc5'), {foo: 'bar'})
      .then(incrementOpCount);
    void bulkWriter
      .set(firestore.doc('collectionId/doc6'), {foo: 'bar'})
      .then(incrementOpCount);

    // The 7th operation is buffered. We want to check that the operation is
    // still sent even though it is not enqueued when close() is called.
    void bulkWriter
      .set(firestore.doc('collectionId/doc7'), {foo: 'bar'})
      .then(incrementOpCount);
    await bulkWriter.close();
    verifyOpCount(7);
  });

  it('runs the success handler', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([
          createOp('doc1', 'bar'),
          setOp('doc2', 'bar'),
          updateOp('doc3', 'bar'),
          deleteOp('doc4'),
        ]),
        response: mergeResponses([
          successResponse(1),
          successResponse(2),
          successResponse(3),
          successResponse(4),
        ]),
      },
    ]);
    const writeResults: number[] = [];
    bulkWriter.onWriteResult((documentRef, result) => {
      writeResults.push(result.writeTime.seconds);
    });
    void bulkWriter.create(firestore.doc('collectionId/doc1'), {foo: 'bar'});
    void bulkWriter.set(firestore.doc('collectionId/doc2'), {foo: 'bar'});
    void bulkWriter.update(firestore.doc('collectionId/doc3'), {foo: 'bar'});
    void bulkWriter.delete(firestore.doc('collectionId/doc4'));
    return bulkWriter.close().then(() => {
      expect(writeResults).to.deep.equal([1, 2, 3, 4]);
    });
  });

  it('can retry failed operations with global error callback', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([
          createOp('doc', 'bar'),
          setOp('doc1', 'bar'),
          updateOp('doc2', 'bar'),
          deleteOp('doc3'),
        ]),
        response: mergeResponses([
          successResponse(1),
          failedResponse(Status.CANCELLED),
          failedResponse(Status.CANCELLED),
          failedResponse(Status.CANCELLED),
        ]),
      },
      {
        request: createRequest([
          setOp('doc1', 'bar'),
          updateOp('doc2', 'bar'),
          deleteOp('doc3'),
        ]),
        response: mergeResponses([
          successResponse(2),
          successResponse(3),
          successResponse(4),
        ]),
      },
    ]);
    const ops: string[] = [];
    const writeResults: number[] = [];
    bulkWriter.onWriteError(error => {
      ops.push(error.operationType);
      return true;
    });
    bulkWriter.onWriteResult((documentRef, result) => {
      ops.push('success');
      writeResults.push(result.writeTime.seconds);
    });
    void bulkWriter.create(firestore.doc('collectionId/doc'), {foo: 'bar'});
    void bulkWriter.set(firestore.doc('collectionId/doc1'), {foo: 'bar'});
    void bulkWriter.update(firestore.doc('collectionId/doc2'), {foo: 'bar'});
    void bulkWriter.delete(firestore.doc('collectionId/doc3'));
    return bulkWriter.close().then(() => {
      expect(ops).to.deep.equal([
        'success',
        'set',
        'update',
        'delete',
        'success',
        'success',
        'success',
      ]);
      expect(writeResults).to.deep.equal([1, 2, 3, 4]);
      expect(timeoutHandlerCounter).to.equal(1);
    });
  });

  it('errors are still surfaced even if a retry function is specified', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
    ]);
    let onWriteErrorCalled = false;
    let catchCalled = false;
    bulkWriter.onWriteError(() => {
      onWriteErrorCalled = true;
      return false;
    });
    bulkWriter
      .set(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .catch(err => {
        expect(err.code).to.equal(Status.INTERNAL);
        catchCalled = true;
      });
    await bulkWriter.flush();
    expect(catchCalled).to.be.true;
    expect(onWriteErrorCalled).to.be.true;
  });

  it('retries INTERNAL errors for deletes', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc1', 'bar'), deleteOp('doc2')]),
        response: mergeResponses([
          failedResponse(Status.INTERNAL),
          failedResponse(Status.INTERNAL),
        ]),
      },
      {
        request: createRequest([deleteOp('doc2')]),
        response: successResponse(2),
      },
    ]);

    let errorCaught = false;
    bulkWriter
      .set(firestore.doc('collectionId/doc1'), {
        foo: 'bar',
      })
      .catch(() => {
        errorCaught = true;
      });
    const del = bulkWriter.delete(firestore.doc('collectionId/doc2'));
    await bulkWriter.close();
    expect((await del).writeTime).to.deep.equal(new Timestamp(2, 0));
    expect(errorCaught).to.be.true;
  });

  it('surfaces errors thrown by user-provided error callback', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
    ]);
    let errorCaught = false;
    bulkWriter.onWriteError(() => {
      throw new Error('User provided error callback failed');
    });
    void bulkWriter
      .set(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .catch(err => {
        expect(err.message).to.equal('User provided error callback failed');
        errorCaught = true;
      });
    await bulkWriter.flush();
    expect(errorCaught).to.be.true;
  });

  it('write fails if user-provided success callback fails', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: successResponse(1),
      },
    ]);
    let errorCaught = false;
    bulkWriter.onWriteResult(() => {
      throw new Error('User provided success callback failed');
    });
    void bulkWriter
      .set(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .catch(err => {
        expect(err.message).to.equal('User provided success callback failed');
        errorCaught = true;
      });
    await bulkWriter.flush();
    expect(errorCaught).to.be.true;
  });

  it('retries multiple times', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: successResponse(1),
      },
    ]);
    let writeResult = 0;
    bulkWriter.onWriteError(() => {
      return true;
    });
    void bulkWriter
      .set(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .then(res => {
        writeResult = res.writeTime.seconds;
      });
    await bulkWriter.close();
    expect(writeResult).to.equal(1);
    expect(timeoutHandlerCounter).to.equal(3);
  });

  it('retries with smaller batch size', async () => {
    const nLengthArray = (n: number): number[] => Array.from(Array(n).keys());

    const bulkWriter = await instantiateInstance([
      {
        request: createRequest(
          nLengthArray(15).map((_, i) => setOp('doc' + i, 'bar')),
        ),
        response: mergeResponses(
          nLengthArray(15).map(() => failedResponse(Status.ABORTED)),
        ),
      },
      {
        request: createRequest(
          nLengthArray(RETRY_MAX_BATCH_SIZE).map((_, i) =>
            setOp('doc' + i, 'bar'),
          ),
        ),
        response: mergeResponses(
          nLengthArray(RETRY_MAX_BATCH_SIZE).map(() => successResponse(1)),
        ),
      },
      {
        request: createRequest(
          nLengthArray(15 - RETRY_MAX_BATCH_SIZE).map((_, i) =>
            setOp('doc' + (i + RETRY_MAX_BATCH_SIZE), 'bar'),
          ),
        ),
        response: mergeResponses(
          nLengthArray(15 - RETRY_MAX_BATCH_SIZE).map(() => successResponse(1)),
        ),
      },
    ]);
    for (let i = 0; i < 15; i++) {
      void bulkWriter
        .set(firestore.doc('collectionId/doc' + i), {foo: 'bar'})
        .then(incrementOpCount);
    }

    await bulkWriter.close();
    expect(opCount).to.equal(15);
  });

  it('retries maintain correct write resolution ordering', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: successResponse(1),
      },
      {
        request: createRequest([setOp('doc2', 'bar')]),
        response: successResponse(2),
      },
    ]);
    const ops: string[] = [];
    bulkWriter.onWriteError(() => {
      return true;
    });
    void bulkWriter
      .set(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .then(() => {
        ops.push('before_flush');
      });
    await bulkWriter.flush().then(() => {
      ops.push('flush');
    });
    void bulkWriter
      .set(firestore.doc('collectionId/doc2'), {foo: 'bar'})
      .then(() => {
        ops.push('after_flush');
      });

    expect(ops).to.deep.equal(['before_flush', 'flush']);
    await bulkWriter.close();
    expect(ops).to.deep.equal(['before_flush', 'flush', 'after_flush']);
  });

  it('returns the error if no retry is specified', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
      {
        request: createRequest([setOp('doc', 'bar')]),
        response: failedResponse(Status.INTERNAL),
      },
    ]);
    let code: Status = -1 as Status;
    bulkWriter.onWriteError(error => {
      return error.failedAttempts < 3;
    });
    void bulkWriter
      .set(firestore.doc('collectionId/doc'), {foo: 'bar'})
      .catch(err => {
        code = err.code;
      });
    await bulkWriter.close();
    expect(code).to.equal(Status.INTERNAL);
  });

  it('splits into multiple batches after exceeding maximum batch size', async () => {
    const arrayRange = Array.from(new Array(6), (_, i) => i);
    const requests = arrayRange.map(i => setOp('doc' + i, 'bar'));
    const responses = arrayRange.map(i => successResponse(i));
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([requests[0], requests[1]]),
        response: mergeResponses([responses[0], responses[1]]),
      },
      {
        request: createRequest([requests[2], requests[3]]),
        response: mergeResponses([responses[2], responses[3]]),
      },
      {
        request: createRequest([requests[4], requests[5]]),
        response: mergeResponses([responses[4], responses[5]]),
      },
    ]);

    bulkWriter._setMaxBatchSize(2);
    for (let i = 0; i < 6; i++) {
      void bulkWriter
        .set(firestore.doc('collectionId/doc' + i), {foo: 'bar'})
        .then(incrementOpCount);
    }

    await bulkWriter.close();
    verifyOpCount(6);
  });

  it('sends batches automatically when the batch size limit is reached', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([
          setOp('doc1', 'bar'),
          updateOp('doc2', 'bar'),
          createOp('doc3', 'bar'),
        ]),
        response: mergeResponses([
          successResponse(1),
          successResponse(2),
          successResponse(3),
        ]),
      },
      {
        request: createRequest([deleteOp('doc4')]),
        response: successResponse(3),
      },
    ]);

    bulkWriter._setMaxBatchSize(3);
    const promise1 = bulkWriter
      .set(firestore.doc('collectionId/doc1'), {foo: 'bar'})
      .then(incrementOpCount);
    const promise2 = bulkWriter
      .update(firestore.doc('collectionId/doc2'), {foo: 'bar'})
      .then(incrementOpCount);
    const promise3 = bulkWriter
      .create(firestore.doc('collectionId/doc3'), {foo: 'bar'})
      .then(incrementOpCount);

    // The 4th write should not sent because it should be in a new batch.
    void bulkWriter
      .delete(firestore.doc('collectionId/doc4'))
      .then(incrementOpCount);

    await Promise.all([promise1, promise2, promise3]);
    verifyOpCount(3);

    await bulkWriter.close();
    verifyOpCount(4);
  });

  it('supports different type converters', async () => {
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([setOp('doc1', 'boo'), setOp('doc2', 'moo')]),
        response: mergeResponses([successResponse(1), successResponse(2)]),
      },
    ]);

    class Boo {}
    const booConverter = {
      toFirestore(): DocumentData {
        return {foo: 'boo'};
      },
      fromFirestore(): Boo {
        return new Boo();
      },
    };

    class Moo {}
    const mooConverter = {
      toFirestore(): DocumentData {
        return {foo: 'moo'};
      },
      fromFirestore(): Moo {
        return new Moo();
      },
    };

    const doc1 = firestore.doc('collectionId/doc1').withConverter(booConverter);
    const doc2 = firestore.doc('collectionId/doc2').withConverter(mooConverter);
    void bulkWriter.set(doc1, new Boo()).then(incrementOpCount);
    void bulkWriter.set(doc2, new Moo()).then(incrementOpCount);
    await bulkWriter.close();
    verifyOpCount(2);
  });

  it('retries individual writes that fail with ABORTED and UNAVAILABLE errors', async () => {
    setTimeoutHandler(setImmediate);
    // Create mock responses that simulate one successful write followed by
    // failed responses.
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([
          setOp('doc1', 'bar'),
          setOp('doc2', 'bar2'),
          setOp('doc3', 'bar'),
        ]),
        response: mergeResponses([
          failedResponse(),
          failedResponse(Status.UNAVAILABLE),
          failedResponse(Status.ABORTED),
        ]),
      },
      {
        request: createRequest([setOp('doc2', 'bar2'), setOp('doc3', 'bar')]),
        response: mergeResponses([
          successResponse(2),
          failedResponse(Status.ABORTED),
        ]),
      },
      {
        request: createRequest([setOp('doc3', 'bar')]),
        response: mergeResponses([successResponse(3)]),
      },
    ]);

    // Test writes to the same document in order to verify that retry logic
    // is unaffected by the document key.
    void bulkWriter
      .set(firestore.doc('collectionId/doc1'), {
        foo: 'bar',
      })
      .catch(incrementOpCount);
    const set2 = bulkWriter.set(firestore.doc('collectionId/doc2'), {
      foo: 'bar2',
    });
    const set3 = bulkWriter.set(firestore.doc('collectionId/doc3'), {
      foo: 'bar',
    });
    await bulkWriter.close();
    expect((await set2).writeTime).to.deep.equal(new Timestamp(2, 0));
    expect((await set3).writeTime).to.deep.equal(new Timestamp(3, 0));

    // Check that set1 was not retried
    verifyOpCount(1);
  });

  describe('Timeout handler tests', () => {
    // Return success responses for all requests.
    function instantiateInstance(
      options?: BulkWriterOptions,
    ): Promise<BulkWriter> {
      const overrides: ApiOverride = {
        batchWrite: request => {
          const requestLength = request.writes?.length || 0;
          const responses = mergeResponses(
            Array.from(new Array(requestLength), (_, i) => successResponse(i)),
          );
          return response({
            writeResults: responses.writeResults,
            status: responses.status,
          });
        },
      };
      return createInstance(overrides).then(firestoreClient => {
        firestore = firestoreClient;
        return firestore.bulkWriter(options);
      });
    }

    it('does not send batches if doing so exceeds the rate limit', done => {
      void instantiateInstance({throttling: {maxOpsPerSecond: 5}}).then(
        bulkWriter => {
          let timeoutCalled = false;
          setTimeoutHandler((_, timeout) => {
            if (!timeoutCalled && timeout > 0) {
              timeoutCalled = true;
              done();
            }
          });
          for (let i = 0; i < 500; i++) {
            void bulkWriter.set(firestore.doc('collectionId/doc' + i), {
              foo: 'bar',
            });
          }
          // The close() promise will never resolve. Since we do not call the
          // callback function in the overridden handler, subsequent requests
          // after the timeout will not be made. The close() call is used to
          // ensure that the final batch is sent.
          void bulkWriter.close();
        },
      );
    });
  });

  it('retries batchWrite when the RPC fails with retryable error', async () => {
    setTimeoutHandler(setImmediate);
    let retryAttempts = 0;
    function instantiateInstance(): Promise<BulkWriter> {
      const overrides: ApiOverride = {
        batchWrite: () => {
          retryAttempts++;
          if (retryAttempts < 5) {
            const error = new GoogleError('Mock batchWrite failed in test');
            error.code = Status.ABORTED;
            throw error;
          } else {
            const mockResponse = successResponse(1);
            return response({
              writeResults: mockResponse.writeResults,
              status: mockResponse.status,
            });
          }
        },
      };
      return createInstance(overrides).then(firestoreClient => {
        firestore = firestoreClient;
        return firestore.bulkWriter();
      });
    }
    const bulkWriter = await instantiateInstance();
    let writeResult: WriteResult;
    void bulkWriter
      .create(firestore.doc('collectionId/doc'), {
        foo: 'bar',
      })
      .then(result => {
        incrementOpCount();
        writeResult = result;
      });
    return bulkWriter.close().then(async () => {
      expect(writeResult.writeTime.isEqual(new Timestamp(1, 0))).to.be.true;
    });
  });

  it('fails writes after all retry attempts failed', async () => {
    setTimeoutHandler((fn, timeout) => {
      const expected =
        DEFAULT_BACKOFF_INITIAL_DELAY_MS * Math.pow(1.5, timeoutHandlerCounter);
      expect(timeout).to.be.within(
        (1 - DEFAULT_JITTER_FACTOR) * expected,
        (1 + DEFAULT_JITTER_FACTOR) * expected,
      );
      timeoutHandlerCounter++;
      fn();
    });
    function instantiateInstance(): Promise<BulkWriter> {
      const overrides: ApiOverride = {
        batchWrite: () => {
          const error = new GoogleError('Mock batchWrite failed in test');
          error.code = Status.ABORTED;
          throw error;
        },
      };
      return createInstance(overrides).then(firestoreClient => {
        firestore = firestoreClient;
        return firestore.bulkWriter();
      });
    }
    const bulkWriter = await instantiateInstance();
    bulkWriter
      .create(firestore.doc('collectionId/doc'), {
        foo: 'bar',
      })
      .catch(err => {
        expect(err instanceof BulkWriterError).to.be.true;
        expect(err.code).to.equal(Status.ABORTED);
        incrementOpCount();
      });
    return bulkWriter.close().then(() => {
      verifyOpCount(1);
      expect(timeoutHandlerCounter).to.equal(MAX_RETRY_ATTEMPTS - 1);
    });
  });

  it('applies maximum backoff on retries for RESOURCE_EXHAUSTED', async () => {
    setTimeoutHandler((fn, timeout) => {
      timeoutHandlerCounter++;
      expect(timeout).to.be.within(
        (1 - DEFAULT_JITTER_FACTOR) * DEFAULT_BACKOFF_MAX_DELAY_MS,
        (1 + DEFAULT_JITTER_FACTOR) * DEFAULT_BACKOFF_MAX_DELAY_MS,
      );
      fn();
    });
    function instantiateInstance(): Promise<BulkWriter> {
      const overrides: ApiOverride = {
        batchWrite: () => {
          const error = new GoogleError('Mock batchWrite failed in test');
          error.code = Status.RESOURCE_EXHAUSTED;
          throw error;
        },
      };
      return createInstance(overrides).then(firestoreClient => {
        firestore = firestoreClient;
        return firestore.bulkWriter();
      });
    }
    const bulkWriter = await instantiateInstance();
    bulkWriter.onWriteError(err => err.failedAttempts < 5);
    bulkWriter
      .create(firestore.doc('collectionId/doc'), {
        foo: 'bar',
      })
      .catch(err => {
        expect(err instanceof BulkWriterError).to.be.true;
        expect(err.code).to.equal(Status.RESOURCE_EXHAUSTED);
        incrementOpCount();
      });
    return bulkWriter.close().then(() => {
      verifyOpCount(1);
      expect(timeoutHandlerCounter).to.equal(4);
    });
  });

  it('uses the highest backoff found in the batch', async () => {
    const expected = [
      DEFAULT_BACKOFF_MAX_DELAY_MS,
      DEFAULT_BACKOFF_INITIAL_DELAY_MS * DEFAULT_BACKOFF_FACTOR,
    ];
    setTimeoutHandler((fn, timeout) => {
      // 1st batch should have max backoff. 2nd batch should have 1 round
      // of backoff applied.
      expect(timeout).to.be.within(
        (1 - DEFAULT_JITTER_FACTOR) * expected[timeoutHandlerCounter],
        (1 + DEFAULT_JITTER_FACTOR) * expected[timeoutHandlerCounter],
      );
      timeoutHandlerCounter++;
      fn();
    });
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([createOp('doc1', 'bar'), setOp('doc2', 'bar')]),
        response: mergeResponses([
          failedResponse(Status.RESOURCE_EXHAUSTED),
          failedResponse(Status.UNAVAILABLE),
        ]),
      },
      {
        request: createRequest([createOp('doc1', 'bar'), setOp('doc2', 'bar')]),
        response: mergeResponses([
          successResponse(1),
          failedResponse(Status.UNAVAILABLE),
        ]),
      },
      {
        request: createRequest([setOp('doc2', 'bar')]),
        response: successResponse(2),
      },
    ]);

    bulkWriter.onWriteError(err => err.failedAttempts < 5);
    void bulkWriter.create(firestore.doc('collectionId/doc1'), {
      foo: 'bar',
    });
    void bulkWriter.set(firestore.doc('collectionId/doc2'), {
      foo: 'bar',
    });
    return bulkWriter.close().then(() => {
      expect(timeoutHandlerCounter).to.equal(2);
    });
  });

  it('sends backoff batch after other enqueued batches', async () => {
    setTimeoutHandler(setImmediate);
    const bulkWriter = await instantiateInstance([
      {
        request: createRequest([createOp('doc1', 'bar')]),
        response: failedResponse(Status.RESOURCE_EXHAUSTED),
      },
      {
        request: createRequest([setOp('doc2', 'bar')]),
        response: successResponse(1),
      },
      {
        request: createRequest([createOp('doc1', 'bar')]),
        response: successResponse(2),
      },
    ]);

    bulkWriter.onWriteError(err => err.failedAttempts < 5);
    void bulkWriter.create(firestore.doc('collectionId/doc1'), {
      foo: 'bar',
    });
    await bulkWriter.flush();
    void bulkWriter.set(firestore.doc('collectionId/doc2'), {
      foo: 'bar',
    });
    await bulkWriter.close();
  });

  describe('if bulkCommit() fails', async () => {
    function instantiateInstance(): Promise<BulkWriter> {
      const overrides: ApiOverride = {
        batchWrite: () => {
          throw new Error('Mock batchWrite failed in test');
        },
      };
      return createInstance(overrides).then(firestoreClient => {
        firestore = firestoreClient;
        return firestore.bulkWriter();
      });
    }
    it('flush() should not fail', async () => {
      const bulkWriter = await instantiateInstance();
      void bulkWriter
        .create(firestore.doc('collectionId/doc'), {foo: 'bar'})
        .catch(incrementOpCount);
      void bulkWriter
        .set(firestore.doc('collectionId/doc2'), {foo: 'bar'})
        .catch(incrementOpCount);
      await bulkWriter.flush();
      verifyOpCount(2);

      await bulkWriter.close();
    });

    it('close() should not fail', async () => {
      const bulkWriter = await instantiateInstance();
      void bulkWriter
        .create(firestore.doc('collectionId/doc'), {foo: 'bar'})
        .catch(incrementOpCount);
      void bulkWriter
        .set(firestore.doc('collectionId/doc2'), {foo: 'bar'})
        .catch(incrementOpCount);

      await bulkWriter.close();
      verifyOpCount(2);
    });

    it('all individual writes are rejected', async () => {
      const bulkWriter = await instantiateInstance();
      void bulkWriter
        .create(firestore.doc('collectionId/doc'), {foo: 'bar'})
        .catch(err => {
          expect(err.message).to.equal('Mock batchWrite failed in test');
          incrementOpCount();
        });

      void bulkWriter
        .set(firestore.doc('collectionId/doc2'), {foo: 'bar'})
        .catch(err => {
          expect(err.message).to.equal('Mock batchWrite failed in test');
          incrementOpCount();
        });

      await bulkWriter.close();
      verifyOpCount(2);
    });
  });
});
