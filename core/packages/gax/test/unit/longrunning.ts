/**
 * Copyright 2020 Google LLC
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

/* eslint-disable no-prototype-builtins */

import assert from 'assert';
import {status} from '@grpc/grpc-js';
import * as sinon from 'sinon';
import {describe, it} from 'mocha';
import {LongrunningDescriptor} from '../../src';
import * as operationProtos from '../../protos/operations';
import {GaxCallPromise} from '../../src/apitypes';
import * as gax from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import * as longrunning from '../../src/longRunningCalls/longrunning';
import {OperationsClient} from '../../src/operationsClient';

import * as utils from './utils';
import {AnyDecoder} from '../../src/longRunningCalls/longRunningDescriptor';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FAKE_STATUS_CODE_1 = (utils as any).FAKE_STATUS_CODE_1;

const RESPONSE_VAL = 'response';
const RESPONSE = {
  typyeUrl: 'mock.proto.message',
  value: Buffer.from(RESPONSE_VAL),
};
const METADATA_VAL = 'metadata';
const METADATA = {
  typeUrl: 'mock.proto.Message',
  value: Buffer.from(METADATA_VAL),
};
const OPERATION_NAME = 'operation_name';
const SUCCESSFUL_OP = {
  result: 'response',
  name: OPERATION_NAME,
  metadata: METADATA,
  done: true,
  error: null,
  response: RESPONSE,
};
const PENDING_OP = {
  result: null,
  name: OPERATION_NAME,
  metadata: METADATA,
  done: false,
  error: null,
  response: null,
};
const ERROR = {
  code: FAKE_STATUS_CODE_1,
  message: 'operation error',
};
const ERROR_OP = {
  result: 'error',
  name: OPERATION_NAME,
  metadata: METADATA,
  done: true,
  error: ERROR,
  response: null,
};
const BAD_OP = {
  name: OPERATION_NAME,
  metadata: METADATA,
  done: true,
};
const mockDecoder = (val: {}) => {
  return val.toString();
};

function createApiCall(func: Function, client?: OperationsClient) {
  const descriptor = new LongrunningDescriptor(
    client!,
    mockDecoder as unknown as AnyDecoder,
    mockDecoder as unknown as AnyDecoder,
  );
  return utils.createApiCall(func, {descriptor}) as GaxCallPromise;
}

interface SpyableOperationsClient extends OperationsClient {
  getOperation: sinon.SinonSpy & longrunning.Operation;
  cancelOperation: sinon.SinonSpy;
  cancelGetOperationSpy: sinon.SinonSpy;
}

describe('longrunning', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function mockOperationsClient(opts?: any): SpyableOperationsClient {
    opts = opts || {};
    let remainingCalls = opts.expectedCalls ? opts.expectedCalls : null;
    const cancelGetOperationSpy = sinon.spy();
    const getOperationSpy = sinon.spy(() => {
      let resolver: (value: unknown) => void = () => {};
      let rejecter: (value: unknown) => void = () => {};
      const promise = new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (promise as any).cancel = cancelGetOperationSpy;

      if (remainingCalls && remainingCalls > 1) {
        resolver([PENDING_OP]);
        --remainingCalls;
      } else if (opts.reject) {
        rejecter(opts.reject);
      } else if (!opts.dontResolve) {
        resolver([opts.finalOperation || SUCCESSFUL_OP]);
      }
      return promise;
    });
    const cancelOperationSpy = sinon.spy(() => {
      return Promise.resolve();
    });
    return {
      getOperationInternal: getOperationSpy,
      getOperation: getOperationSpy,
      cancelOperation: cancelOperationSpy,
      cancelGetOperationSpy,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
  }

  describe('createApiCall', () => {
    it('longrunning call resolves to the correct datatypes', done => {
      const func = (
        argument: {},
        metadata: {},
        options: {},
        callback: Function,
      ) => {
        callback(null, PENDING_OP);
      };
      const defaultInitialRetryDelayMillis = 100;
      const defaultRetryDelayMultiplier = 1.3;
      const defaultMaxRetryDelayMillis = 60000;
      const defaultTotalTimeoutMillis = null;
      const apiCall = createApiCall(func);
      apiCall({})
        .then(responses => {
          const operation = responses[0] as longrunning.Operation;
          const rawResponse = responses[1];
          assert(operation instanceof Object);
          assert(operation.hasOwnProperty('backoffSettings'));
          assert.strictEqual(
            operation.backoffSettings.initialRetryDelayMillis,
            defaultInitialRetryDelayMillis,
          );
          assert.strictEqual(
            operation.backoffSettings.retryDelayMultiplier,
            defaultRetryDelayMultiplier,
          );
          assert.strictEqual(
            operation.backoffSettings.maxRetryDelayMillis,
            defaultMaxRetryDelayMillis,
          );
          assert.strictEqual(
            operation.backoffSettings.totalTimeoutMillis,
            defaultTotalTimeoutMillis,
          );
          assert(operation.hasOwnProperty('longrunningDescriptor'));
          assert.strictEqual(operation.name, OPERATION_NAME);
          assert.strictEqual(operation.done, false);
          assert.deepStrictEqual(operation.latestResponse, PENDING_OP);
          assert.strictEqual(operation.result, null);
          assert.strictEqual(operation.metadata, METADATA_VAL);
          assert.deepStrictEqual(rawResponse, PENDING_OP);
          done();
        })
        .catch(done);
    });
  });

  describe('operation', () => {
    it('returns an Operation with correct values', done => {
      const client = mockOperationsClient();
      const desc = new LongrunningDescriptor(
        client as OperationsClient,
        mockDecoder as unknown as AnyDecoder,
        mockDecoder as unknown as AnyDecoder,
      );
      const initialRetryDelayMillis = 1;
      const retryDelayMultiplier = 2;
      const maxRetryDelayMillis = 3;
      const totalTimeoutMillis = 4;
      const unusedRpcValue = 0;
      const backoff = gax.createBackoffSettings(
        initialRetryDelayMillis,
        retryDelayMultiplier,
        maxRetryDelayMillis,
        unusedRpcValue,
        unusedRpcValue,
        unusedRpcValue,
        totalTimeoutMillis,
      );
      const operation = longrunning.operation(
        SUCCESSFUL_OP as {} as operationProtos.google.longrunning.Operation,
        desc,
        backoff,
      );
      assert(operation instanceof Object);
      assert(operation.hasOwnProperty('backoffSettings'));
      assert.strictEqual(
        operation.backoffSettings.initialRetryDelayMillis,
        initialRetryDelayMillis,
      );
      assert.strictEqual(
        operation.backoffSettings.retryDelayMultiplier,
        retryDelayMultiplier,
      );
      assert.strictEqual(
        operation.backoffSettings.maxRetryDelayMillis,
        maxRetryDelayMillis,
      );
      assert.strictEqual(
        operation.backoffSettings.totalTimeoutMillis,
        totalTimeoutMillis,
      );
      assert(operation.hasOwnProperty('longrunningDescriptor'));
      assert.strictEqual(operation.name, OPERATION_NAME);
      assert.strictEqual(operation.done, true);
      assert.deepStrictEqual(operation.response, RESPONSE);
      assert.strictEqual(operation.result, RESPONSE_VAL);
      assert.strictEqual(operation.metadata, METADATA_VAL);
      assert.deepStrictEqual(operation.latestResponse, SUCCESSFUL_OP);
      done();
    });
  });

  describe('Operation', () => {
    describe('getOperation', () => {
      it('does not make an api call if cached op is finished', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, SUCCESSFUL_OP);
        };
        const client = mockOperationsClient();
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.getOperation((err, result, metadata, rawResponse) => {
              if (err) {
                done(err);
              }
              assert.strictEqual(result, RESPONSE_VAL);
              assert.strictEqual(metadata, METADATA_VAL);
              assert.deepStrictEqual(rawResponse, SUCCESSFUL_OP);
              assert.strictEqual(client.getOperation.callCount, 0);
              done();
            });
          })
          .catch(done);
      });

      it('makes an api call to get the updated operation', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const client = mockOperationsClient();
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.getOperation((err, result, metadata, rawResponse) => {
              if (err) {
                done(err);
              }
              assert.strictEqual(result, RESPONSE_VAL);
              assert.strictEqual(metadata, METADATA_VAL);
              assert.deepStrictEqual(rawResponse, SUCCESSFUL_OP);
              assert.strictEqual(client.getOperation.callCount, 1);
              done();
            });
          })
          .catch(error => {
            done(error);
          });
      });

      it('does not return a promise when given a callback.', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const client = mockOperationsClient();
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            assert.strictEqual(
              operation.getOperation((err, result, metadata, rawResponse) => {
                if (err) {
                  done(err);
                }
                assert.strictEqual(result, RESPONSE_VAL);
                assert.strictEqual(metadata, METADATA_VAL);
                assert.deepStrictEqual(rawResponse, SUCCESSFUL_OP);
                assert.strictEqual(client.getOperation.callCount, 1);
                done();
              }),
              undefined,
            );
          })
          .catch(error => {
            done(error);
          });
      });

      it('returns a promise that resolves to the correct data', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const client = mockOperationsClient();
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            return operation.getOperation();
          })
          .then((responses: {[name: string]: {}}) => {
            const result = responses[0];
            const metadata = responses[1];
            const rawResponse = responses[2];

            assert.strictEqual(result, RESPONSE_VAL);
            assert.strictEqual(metadata, METADATA_VAL);
            assert.deepStrictEqual(rawResponse, SUCCESSFUL_OP);
            assert.strictEqual(client.getOperation.callCount, 1);
            done();
          })
          .catch(error => {
            done(error);
          });
      });

      it('returns a promise that rejects an operation error.', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, ERROR_OP);
        };
        const client = mockOperationsClient();
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            return operation.getOperation();
          })
          .then(() => {
            done(new Error('Should not get here.'));
          })
          .catch(error => {
            assert(error instanceof Error);
            done();
          });
      });
    });

    describe('promise', () => {
      it('resolves to the correct data', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const expectedCalls = 3;
        const client = mockOperationsClient({expectedCalls});
        const apiCall = createApiCall(func, client);

        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            return operation.promise();
          })
          .then(responses => {
            const [result, metadata, rawResponse] = responses as Array<{}>;
            assert.strictEqual(result, RESPONSE_VAL);
            assert.strictEqual(metadata, METADATA_VAL);
            assert.deepStrictEqual(rawResponse, SUCCESSFUL_OP);
            assert.strictEqual(client.getOperation.callCount, expectedCalls);
            done();
          })
          .catch(err => {
            done(err);
          });
      });

      it('resolves if operation completes immediately', async () => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, SUCCESSFUL_OP);
        };
        const client = mockOperationsClient({expectedCalls: 0});
        const apiCall = createApiCall(func, client);
        const [operation] = (await apiCall({})) as unknown as [
          longrunning.Operation,
        ];
        assert.notStrictEqual(operation, null);
        const [finalResult] = (await operation!.promise()) as unknown as [
          string,
        ];
        assert.strictEqual(finalResult, RESPONSE_VAL);
      });

      it('resolves error', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const expectedCalls = 3;
        const client = mockOperationsClient({
          expectedCalls,
          finalOperation: ERROR_OP,
        });
        const apiCall = createApiCall(func, client);

        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            return operation.promise();
          })
          .then(() => {
            done(new Error('should not get here'));
          })
          .catch(err => {
            assert.strictEqual(client.getOperation.callCount, expectedCalls);
            assert.strictEqual(err.code, FAKE_STATUS_CODE_1);
            assert.strictEqual(err.message, 'operation error');
            done();
          });
      });

      it('does not hang on invalid API response', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const client = mockOperationsClient({finalOperation: BAD_OP});
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            const promise = operation.promise() as Promise<[{}, {}, {}]>;
            return promise;
          })
          .then(([response, metadata, rawResponse]) => {
            assert.deepStrictEqual(response, {});
            assert.strictEqual(metadata, METADATA_VAL);
            assert.deepStrictEqual(rawResponse, BAD_OP);
            done();
          })
          .catch(done);
      });
    });

    describe('cancel', () => {
      it('cancels the Operation and the current api call', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const client = mockOperationsClient({
          dontResolve: true,
        });
        const apiCall = createApiCall(func, client);

        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            const p = operation.promise();
            operation
              .cancel()
              .then(() => {
                assert.strictEqual(client.cancelOperation.called, true);
                assert.strictEqual(client.cancelGetOperationSpy.called, true);
                done();
              })
              .catch(done);
            return p;
          })
          .then(() => {
            done(new Error('should not get here'));
          })
          .catch(err => {
            done(err);
          });
      });
    });

    describe('polling', () => {
      it('succesful operation emits complete', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const expectedCalls = 3;
        const client = mockOperationsClient({
          expectedCalls,
        });
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.on('complete', (result, metadata, rawResponse) => {
              assert.strictEqual(result, RESPONSE_VAL);
              assert.strictEqual(metadata, METADATA_VAL);
              assert.deepStrictEqual(rawResponse, SUCCESSFUL_OP);
              assert.strictEqual(client.getOperation.callCount, expectedCalls);
              done();
            });
            operation.on('error', () => {
              done('should not get here');
            });
          })
          .catch(err => {
            done(err);
          });
      });

      it('operation error emits an error', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const expectedCalls = 3;
        const client = mockOperationsClient({
          expectedCalls,
          finalOperation: ERROR_OP,
        });
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.on('complete', () => {
              done(new Error('Should not get here.'));
            });
            operation.on('error', err => {
              assert.strictEqual(client.getOperation.callCount, expectedCalls);
              assert.strictEqual(err.code, FAKE_STATUS_CODE_1);
              assert.strictEqual(err.message, 'operation error');
              done();
            });
          })
          .catch(err => {
            done(err);
          });
      });

      it('getOperation failure emits an error', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const expectedCalls = 3;
        const googleError = new GoogleError('GetOperation call failed');
        googleError.code = 8;
        googleError.statusDetails = 'Quota exceeded';
        const client = mockOperationsClient({
          expectedCalls,
          reject: googleError,
        });
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.on('complete', () => {
              done(new Error('Should not get here.'));
            });
            operation.on('error', err => {
              assert.strictEqual(client.getOperation.callCount, expectedCalls);
              assert.strictEqual(err.code, googleError.code);
              assert.strictEqual(err.message, googleError.message);
              done();
            });
          })
          .catch(err => {
            done(err);
          });
      });

      it('emits progress on updated operations.', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const updatedMetadataVal = 'updated';
        const updatedMetadata = {
          typeUrl: 'mock.proto.Message',
          value: Buffer.from(updatedMetadataVal),
        };
        const updatedOp = {
          result: null,
          name: OPERATION_NAME,
          metadata: updatedMetadata,
          done: false,
          error: null,
          response: null,
        };

        const expectedCalls = 3;
        const client = mockOperationsClient({
          expectedCalls,
          finalOperation: updatedOp,
        });
        const apiCall = createApiCall(func, client);
        apiCall({})
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.on('complete', () => {
              done(new Error('Should not get here.'));
            });
            operation.on('progress', (metadata, rawResponse) => {
              assert.strictEqual(client.getOperation.callCount, expectedCalls);
              assert.strictEqual(metadata, updatedMetadataVal);
              assert.deepStrictEqual(rawResponse, updatedOp);
              assert.deepStrictEqual(operation.metadata, metadata);
              assert.strictEqual(operation.metadata, updatedMetadataVal);
              // Shows that progress only happens on updated operations since
              // this will produce a test error if done is called multiple
              // times, and the same pending operation was polled thrice.
              operation.removeAllListeners();
              done();
            });
          })
          .catch(err => {
            done(err);
          });
      });

      it('times out when polling', done => {
        const func = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ) => {
          callback(null, PENDING_OP);
        };
        const client = mockOperationsClient({
          finalOperation: PENDING_OP,
        });
        const apiCall = createApiCall(func, client);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore incomplete options
        apiCall(
          {},
          {
            longrunning: gax.createBackoffSettings(1, 1, 1, 0, 0, 0, 1),
          },
        )
          .then(responses => {
            const operation = responses[0] as longrunning.Operation;
            operation.on('complete', () => {
              done(new Error('Should not get here.'));
            });
            operation.on('error', err => {
              assert(err instanceof GoogleError);
              assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
              assert.strictEqual(
                err!.message,
                'Total timeout exceeded before ' + 'any response was received',
              );
              done();
            });
          })
          .catch(err => {
            done(err);
          });
      });
    });
  });
});
