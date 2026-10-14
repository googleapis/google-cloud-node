/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import {beforeEach, afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import * as through from 'through2';
import {Transform} from 'stream';
import {grpc} from 'google-gax';
import {protos} from '@google-cloud/spanner-api';
import {batchWriteStream, getNextRetryDelayMs} from '../src/batch-write-stream';
import {getRetryInfo} from '../src/protos';

type IMutationGroup = protos.google.spanner.v1.BatchWriteRequest.IMutationGroup;
type IBatchWriteResponse = protos.google.spanner.v1.IBatchWriteResponse;

function makeServiceError(
  code: grpc.status,
  message: string,
  metadata?: grpc.Metadata,
): grpc.ServiceError {
  return Object.assign(new Error(message), {
    code,
    details: message,
    metadata: metadata ?? new grpc.Metadata(),
  });
}

describe('batchWriteStream', () => {
  const sandbox = sinon.createSandbox();

  const group0: IMutationGroup = {mutations: [{insert: {table: 'T0'}}]};
  const group1: IMutationGroup = {mutations: [{insert: {table: 'T1'}}]};
  const group2: IMutationGroup = {mutations: [{insert: {table: 'T2'}}]};
  const group3: IMutationGroup = {mutations: [{insert: {table: 'T3'}}]};
  const group4: IMutationGroup = {mutations: [{insert: {table: 'T4'}}]};

  const fastGaxOptions = {
    retry: {
      backoffSettings: {
        initialRetryDelayMillis: 1,
        retryDelayMultiplier: 1.3,
        maxRetryDelayMillis: 5,
        totalTimeoutMillis: 5000,
      },
    },
  };

  beforeEach(() => {});

  afterEach(() => {
    sandbox.restore();
  });

  it('should immediately end stream with OK and zero requests when mutationGroups is empty', done => {
    let makeRequestCalled = false;
    let finalStatus: grpc.status | undefined;

    const stream = batchWriteStream(
      [],
      () => {
        makeRequestCalled = true;
        return through.obj();
      },
      {
        gaxOptions: fastGaxOptions,
        onTerminate: status => {
          finalStatus = status;
        },
      },
    );

    stream
      .on('data', () => {
        done(new Error('Should not emit data'));
      })
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(makeRequestCalled, false);
        assert.strictEqual(finalStatus, grpc.status.OK);
        done();
      });
  });

  it('should stream all responses and complete with OK on a single attempt', done => {
    const attemptStream = through.obj();
    const receivedRequests: IMutationGroup[][] = [];
    let finalStatus: grpc.status | undefined;

    const stream = batchWriteStream(
      [group0, group1],
      groups => {
        receivedRequests.push(groups);
        return attemptStream;
      },
      {
        gaxOptions: fastGaxOptions,
        onTerminate: status => {
          finalStatus = status;
        },
      },
    );

    const responses: IBatchWriteResponse[] = [];
    stream
      .on('data', (resp: IBatchWriteResponse) => responses.push(resp))
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(receivedRequests.length, 1);
        assert.deepStrictEqual(receivedRequests[0], [group0, group1]);
        assert.strictEqual(responses.length, 2);
        assert.deepStrictEqual(responses[0].indexes, [0]);
        assert.deepStrictEqual(responses[1].indexes, [1]);
        assert.strictEqual(finalStatus, grpc.status.OK);
        done();
      });

    attemptStream.write({indexes: [0], status: {code: grpc.status.OK}});
    attemptStream.write({indexes: [1], status: {code: grpc.status.OK}});
    attemptStream.end();
  });

  it('should retry only unacknowledged mutation groups on UNAVAILABLE and translate indexes across multiple retries', done => {
    const attemptStreams: Transform[] = [
      through.obj(),
      through.obj(),
      through.obj(),
    ];
    const receivedRequests: IMutationGroup[][] = [];
    let attemptIndex = 0;
    let finalStatus: grpc.status | undefined;

    const stream = batchWriteStream(
      [group0, group1, group2, group3, group4],
      groups => {
        receivedRequests.push(groups);
        const current = attemptStreams[attemptIndex++];
        setImmediate(() => {
          if (attemptIndex === 1) {
            // Attempt 1 acknowledges original indexes 0 and 3, then fails with UNAVAILABLE
            current.write({indexes: [0, 3], status: {code: grpc.status.OK}});
            current.emit(
              'error',
              makeServiceError(grpc.status.UNAVAILABLE, 'Temporary disconnect'),
            );
          } else if (attemptIndex === 2) {
            // Attempt 2 receives [group1, group2, group4] (retry indexes 0, 1, 2 -> original 1, 2, 4)
            // Acknowledges retry index 1 (original index 2), then fails with UNAVAILABLE
            current.write({indexes: [1], status: {code: grpc.status.OK}});
            current.emit(
              'error',
              makeServiceError(grpc.status.UNAVAILABLE, 'Temporary disconnect'),
            );
          } else if (attemptIndex === 3) {
            // Attempt 3 receives [group1, group4] (retry indexes 0, 1 -> original 1, 4)
            // Acknowledges retry indexes 0 and 1
            current.write({indexes: [0, 1], status: {code: grpc.status.OK}});
            current.end();
          }
        });
        return current;
      },
      {
        gaxOptions: fastGaxOptions,
        onTerminate: status => {
          finalStatus = status;
        },
      },
    );

    const responses: IBatchWriteResponse[] = [];
    stream
      .on('data', (resp: IBatchWriteResponse) => responses.push(resp))
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(receivedRequests.length, 3);
        assert.deepStrictEqual(receivedRequests[0], [
          group0,
          group1,
          group2,
          group3,
          group4,
        ]);
        assert.deepStrictEqual(receivedRequests[1], [group1, group2, group4]);
        assert.deepStrictEqual(receivedRequests[2], [group1, group4]);

        assert.strictEqual(responses.length, 3);
        assert.deepStrictEqual(responses[0].indexes, [0, 3]);
        assert.deepStrictEqual(responses[1].indexes, [2]);
        assert.deepStrictEqual(responses[2].indexes, [1, 4]);
        assert.strictEqual(finalStatus, grpc.status.OK);
        done();
      });
  });

  it('should not re-send mutation groups that received a non-OK per-group status in BatchWriteResponse', done => {
    const attemptStreams: Transform[] = [through.obj(), through.obj()];
    const receivedRequests: IMutationGroup[][] = [];
    let attemptIndex = 0;

    const stream = batchWriteStream(
      [group0, group1, group2],
      groups => {
        receivedRequests.push(groups);
        const current = attemptStreams[attemptIndex++];
        setImmediate(() => {
          if (attemptIndex === 1) {
            // Group 0 fails with per-group ALREADY_EXISTS, Group 1 succeeds with OK
            current.write({
              indexes: [0],
              status: {
                code: grpc.status.ALREADY_EXISTS,
                message: 'Row already exists',
              },
            });
            current.write({
              indexes: [1],
              status: {code: grpc.status.OK},
            });
            // Stream then breaks with UNAVAILABLE before Group 2 is acknowledged
            current.emit(
              'error',
              makeServiceError(grpc.status.UNAVAILABLE, 'Stream broken'),
            );
          } else {
            // Only Group 2 should be sent in Attempt 2
            current.write({
              indexes: [0],
              status: {code: grpc.status.OK},
            });
            current.end();
          }
        });
        return current;
      },
      {gaxOptions: fastGaxOptions},
    );

    const responses: IBatchWriteResponse[] = [];
    stream
      .on('data', (resp: IBatchWriteResponse) => responses.push(resp))
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(receivedRequests.length, 2);
        assert.deepStrictEqual(receivedRequests[0], [group0, group1, group2]);
        assert.deepStrictEqual(receivedRequests[1], [group2]);
        assert.strictEqual(responses.length, 3);
        assert.deepStrictEqual(responses[0].indexes, [0]);
        assert.strictEqual(
          responses[0].status?.code,
          grpc.status.ALREADY_EXISTS,
        );
        assert.deepStrictEqual(responses[1].indexes, [1]);
        assert.deepStrictEqual(responses[2].indexes, [2]);
        done();
      });
  });

  it('should retry on retryable INTERNAL errors (e.g. RST_STREAM or EOS on DATA frame)', done => {
    const attemptStreams: Transform[] = [through.obj(), through.obj()];
    const receivedRequests: IMutationGroup[][] = [];
    let attemptIndex = 0;

    const stream = batchWriteStream(
      [group0, group1],
      groups => {
        receivedRequests.push(groups);
        const current = attemptStreams[attemptIndex++];
        setImmediate(() => {
          if (attemptIndex === 1) {
            current.write({indexes: [0], status: {code: grpc.status.OK}});
            current.emit(
              'error',
              makeServiceError(
                grpc.status.INTERNAL,
                'Received unexpected EOS on DATA frame from server',
              ),
            );
          } else {
            current.write({indexes: [0], status: {code: grpc.status.OK}});
            current.end();
          }
        });
        return current;
      },
      {gaxOptions: fastGaxOptions},
    );

    const responses: IBatchWriteResponse[] = [];
    stream
      .on('data', (resp: IBatchWriteResponse) => responses.push(resp))
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(receivedRequests.length, 2);
        assert.deepStrictEqual(receivedRequests[1], [group1]);
        assert.strictEqual(responses.length, 2);
        assert.deepStrictEqual(responses[0].indexes, [0]);
        assert.deepStrictEqual(responses[1].indexes, [1]);
        done();
      });
  });

  it('should treat premature stream end (with unacknowledged mutation groups) as retryable UNAVAILABLE', done => {
    const attemptStreams: Transform[] = [through.obj(), through.obj()];
    const receivedRequests: IMutationGroup[][] = [];
    let attemptIndex = 0;

    const stream = batchWriteStream(
      [group0, group1],
      groups => {
        receivedRequests.push(groups);
        const current = attemptStreams[attemptIndex++];
        setImmediate(() => {
          if (attemptIndex === 1) {
            // Only acknowledges group0, then closes stream prematurely without error
            current.write({indexes: [0], status: {code: grpc.status.OK}});
            current.end();
          } else {
            current.write({indexes: [0], status: {code: grpc.status.OK}});
            current.end();
          }
        });
        return current;
      },
      {gaxOptions: fastGaxOptions},
    );

    const responses: IBatchWriteResponse[] = [];
    stream
      .on('data', (resp: IBatchWriteResponse) => responses.push(resp))
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(receivedRequests.length, 2);
        assert.deepStrictEqual(receivedRequests[1], [group1]);
        assert.strictEqual(responses.length, 2);
        assert.deepStrictEqual(responses[0].indexes, [0]);
        assert.deepStrictEqual(responses[1].indexes, [1]);
        done();
      });
  });

  it('should fail withINTERNAL error and not retry when server returns an out-of-bounds index', done => {
    const attemptStream = through.obj();
    let requestCount = 0;
    let finalStatus: grpc.status | undefined;

    const stream = batchWriteStream(
      [group0, group1],
      () => {
        requestCount++;
        return attemptStream;
      },
      {
        gaxOptions: fastGaxOptions,
        onTerminate: status => {
          finalStatus = status;
        },
      },
    );

    stream.on('error', (err: grpc.ServiceError) => {
      assert.strictEqual(requestCount, 1);
      assert.strictEqual(err.code, grpc.status.INTERNAL);
      assert.match(err.message, /out of bounds/);
      assert.strictEqual(finalStatus, grpc.status.INTERNAL);
      done();
    });

    attemptStream.write({indexes: [2], status: {code: grpc.status.OK}});
  });

  it('should fail immediately without retrying on non-retryable RPC errors', done => {
    const attemptStream = through.obj();
    let requestCount = 0;
    let finalStatus: grpc.status | undefined;

    const stream = batchWriteStream(
      [group0, group1],
      () => {
        requestCount++;
        return attemptStream;
      },
      {
        gaxOptions: fastGaxOptions,
        onTerminate: status => {
          finalStatus = status;
        },
      },
    );

    const permDeniedErr = makeServiceError(
      grpc.status.PERMISSION_DENIED,
      'Caller lacks permission',
    );

    stream.on('error', (err: grpc.ServiceError) => {
      assert.strictEqual(requestCount, 1);
      assert.strictEqual(err, permDeniedErr);
      assert.strictEqual(finalStatus, grpc.status.PERMISSION_DENIED);
      done();
    });

    attemptStream.emit('error', permDeniedErr);
  });

  it('should not retry retryable INTERNAL errors when retryCodes is explicitly empty', done => {
    const attemptStream = through.obj();
    let requestCount = 0;

    const stream = batchWriteStream(
      [group0],
      () => {
        requestCount++;
        return attemptStream;
      },
      {
        gaxOptions: {
          retry: {
            retryCodes: [],
            backoffSettings: {
              initialRetryDelayMillis: 1,
              retryDelayMultiplier: 1.3,
              maxRetryDelayMillis: 5,
              totalTimeoutMillis: 5000,
            },
          },
        },
      },
    );

    const eosErr = makeServiceError(
      grpc.status.INTERNAL,
      'Received unexpected EOS on DATA frame from server',
    );

    stream.on('error', (err: grpc.ServiceError) => {
      assert.strictEqual(requestCount, 1);
      assert.strictEqual(err, eosErr);
      done();
    });

    attemptStream.emit('error', eosErr);
  });

  it('should cancel pending retry timer and active stream when caller destroys stream early', done => {
    const attemptStream = through.obj();
    let requestCount = 0;
    let finalStatus: grpc.status | undefined;

    const stream = batchWriteStream(
      [group0, group1],
      () => {
        requestCount++;
        return attemptStream;
      },
      {
        gaxOptions: {
          retry: {
            backoffSettings: {
              initialRetryDelayMillis: 50,
              retryDelayMultiplier: 1.3,
              maxRetryDelayMillis: 100,
              totalTimeoutMillis: 5000,
            },
          },
        },
        onTerminate: status => {
          finalStatus = status;
        },
      },
    );

    attemptStream.write({indexes: [0], status: {code: grpc.status.OK}});
    // Trigger retry backoff timer
    attemptStream.emit(
      'error',
      makeServiceError(grpc.status.UNAVAILABLE, 'Unavailable'),
    );

    // Caller destroys stream while retry timer is waiting
    stream.destroy();

    setTimeout(() => {
      assert.strictEqual(requestCount, 1);
      assert.strictEqual(finalStatus, grpc.status.CANCELLED);
      done();
    }, 80);
  });

  describe('getNextRetryDelayMs', () => {
    it('should extract delay from google.rpc.retryinfo-bin metadata when present', () => {
      const RetryInfo = getRetryInfo();
      const encoded = RetryInfo.encode({
        retryDelay: {seconds: 2, nanos: 250000000},
      }).finish();
      const metadata = new grpc.Metadata();
      metadata.set('google.rpc.retryinfo-bin', Buffer.from(encoded));

      const err = makeServiceError(
        grpc.status.UNAVAILABLE,
        'Unavailable',
        metadata,
      );
      const delayMs = getNextRetryDelayMs(err, 1);
      assert.strictEqual(delayMs, 2250);
    });

    it('should fall back to jittered exponential backoff when RetryInfo is absent', () => {
      const err = makeServiceError(grpc.status.UNAVAILABLE, 'Unavailable');
      const delayMs = getNextRetryDelayMs(err, 1, {
        initialRetryDelayMillis: 100,
        retryDelayMultiplier: 1.3,
        maxRetryDelayMillis: 32000,
      });
      assert.ok(
        delayMs >= 80 && delayMs <= 120,
        `Expected delay in [80, 120], got ${delayMs}`,
      );
    });
  });
});
