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

import assert from 'assert';
import {status} from '@grpc/grpc-js';
import {afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';

import {RequestType} from '../../src/apitypes';
import * as gax from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import * as utils from './utils';
import * as retries from '../../src/normalCalls/retries';

const fail = utils.fail;
const createApiCall = utils.createApiCall;
const FAKE_STATUS_CODE_1 = utils.FAKE_STATUS_CODE_1;
const FAKE_STATUS_CODE_2 = utils.FAKE_STATUS_CODE_1 + 1;

describe('createApiCall', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('calls api call', done => {
    let deadlineArg: {};
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      callback(null, argument);
    }
    const apiCall = createApiCall(func);
    void apiCall(42, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, 42);
        assert.ok(deadlineArg);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('is customized by call options', done => {
    function func(
      argument: {},
      metadata: {},
      options: {deadline: {getTime: Function}},
      callback: Function,
    ) {
      callback(null, options.deadline.getTime());
    }
    const apiCall = createApiCall(func, {settings: {timeout: 100}});
    void apiCall({}, {timeout: 200}, (err, resp) => {
      const now = new Date();
      const originalDeadline = now.getTime() + 100;
      const expectedDeadline = now.getTime() + 200;
      try {
        assert.strictEqual(err, null);
        assert((resp as unknown as number)! > originalDeadline);
        assert((resp as unknown as number)! <= expectedDeadline);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('chooses the proper timeout', done => {
    function func(
      argument: {},
      metadata: {},
      options: {deadline: {getTime: Function}},
      callback: Function,
    ) {
      callback(null, options.deadline.getTime());
    }

    // The settings originally from the 'config_service_v2_client_config.json'
    // in @google-cloud/logging library.
    // See https://github.com/googleapis/gax-nodejs/issues/136
    const apiCall = createApiCall(func, {
      settings: {
        timeout: 30000,
        retry: gax.createRetryOptions(
          [],
          gax.createBackoffSettings(100, 1.2, 1000, 2000, 1.5, 30000, 45000),
        ),
      },
    });

    const start = new Date().getTime();
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        // The verifying value is slightly bigger than the expected number
        // 2000 / 30000, because sometimes runtime can consume some time before
        // the call starts.
        assert(Number(resp) - start > 2100);
        assert(Number(resp) - start <= 30100);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('default to `timeout` for idempotent API calls', done => {
    function func(
      argument: {},
      metadata: {},
      options: {deadline: {getTime: Function}},
      callback: Function,
    ) {
      callback(null, options.deadline.getTime());
    }

    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions([1], {
          initialRetryDelayMillis: 100,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 1000,
          rpcTimeoutMultiplier: 1.5,
          maxRpcTimeoutMillis: 3000,
          totalTimeoutMillis: 4500,
        }),
      },
    });

    const start = new Date().getTime();
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        // The verifying value is slightly bigger than the expected number
        // 2000 / 30000, because sometimes runtime can consume some time before
        // the call starts.
        assert(Number(resp) - start > 2100);
        assert(Number(resp) - start <= 30100);
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  it('override just custom retry.retryCodes with retry codes', done => {
    const initialRetryCodes = [1];
    const overrideRetryCodes = [1, 2, 3];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sinon.stub(retries, 'retryable').callsFake((func, retry): any => {
      try {
        assert.strictEqual(retry.retryCodes, overrideRetryCodes);
        return func;
      } catch (err) {
        done(err);
      }
      return func;
    });

    function func() {
      done();
    }
    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions(initialRetryCodes, {
          initialRetryDelayMillis: 100,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 1000,
          rpcTimeoutMultiplier: 1.5,
          maxRpcTimeoutMillis: 3000,
          totalTimeoutMillis: 4500,
        }),
      },
    });

    void apiCall(
      {},
      {
        retry: {
          retryCodes: overrideRetryCodes,
        },
      },
    );
  });
  it('errors when you override custom retry.shouldRetryFn with a function on a non streaming call', async () => {
    function neverRetry() {
      return false;
    }
    const initialRetryCodes = [1];
    const overrideRetryCodes = neverRetry;

    function func() {
      return Promise.resolve();
    }

    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions(initialRetryCodes, {
          initialRetryDelayMillis: 100,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 1000,
          rpcTimeoutMultiplier: 1.5,
          maxRpcTimeoutMillis: 3000,
          totalTimeoutMillis: 4500,
        }),
      },
    });
    try {
      await apiCall(
        {},
        {
          retry: {
            shouldRetryFn: overrideRetryCodes,
          },
        },
      );
    } catch (err) {
      assert(err instanceof Error);
      assert.strictEqual(
        err.message,
        'Using a function to determine retry eligibility is only supported with server streaming calls',
      );
    }
  });

  it('override just custom retry.backoffSettings', done => {
    const initialBackoffSettings = gax.createDefaultBackoffSettings();
    const overriBackoffSettings = gax.createBackoffSettings(
      100,
      1.2,
      1000,
      null,
      1.5,
      3000, // added 2 zeroes
      4500,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sinon.stub(retries, 'retryable').callsFake((func, retry): any => {
      try {
        assert.strictEqual(retry.backoffSettings, overriBackoffSettings);

        return func;
      } catch (err) {
        done(err);
      }
    });

    function func() {
      done();
    }

    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions([1], initialBackoffSettings),
      },
    });

    void apiCall(
      {},
      {
        retry: {
          backoffSettings: overriBackoffSettings,
        },
      },
    );
  });

  it('errors when a resumption strategy is passed for a non streaming call', async () => {
    const initialBackoffSettings = gax.createDefaultBackoffSettings();
    const overriBackoffSettings = gax.createBackoffSettings(
      100,
      1.2,
      1000,
      null,
      1.5,
      3000,
      4500,
    );
    // "resumption" strategy is to just return the original request
    const getResumptionRequestFn = (originalRequest: RequestType) => {
      return originalRequest;
    };

    function func() {
      return Promise.resolve();
    }
    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions(
          [1],
          initialBackoffSettings,
          undefined,
          getResumptionRequestFn,
        ),
      },
    });

    try {
      await apiCall(
        {},
        {
          retry: {
            backoffSettings: overriBackoffSettings,
          },
        },
      );
    } catch (err) {
      assert(err instanceof Error);
      assert.strictEqual(
        err.message,
        'Resumption strategy can only be used with server streaming retries',
      );
    }
  });
});

describe('Promise', () => {
  it('calls api call', done => {
    let deadlineArg: string;
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      callback(null, 42);
    }
    const apiCall = createApiCall(func);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (apiCall as any)(null)
      .then((response: number[]) => {
        assert.ok(Array.isArray(response));
        assert.strictEqual(response[0], 42);
        assert.ok(deadlineArg);
        done();
      })
      .catch(done);
  });

  it('emits error on rejected promise', async () => {
    const reason = 'reject reason';
    function func() {
      return Promise.reject(reason);
    }
    const apiCall = createApiCall(func);
    await assert.rejects(apiCall({}, undefined), new Error(reason));
  });

  it('emits error on failure', async () => {
    const apiCall = createApiCall(fail);
    await assert.rejects(apiCall({}, undefined));
  });

  it('has cancel method', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      setTimeout(() => {
        callback(null, 42);
      }, 0);
    }
    const apiCall = createApiCall(func, {cancel: done});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promise = (apiCall as any)(null);
    promise
      .then(() => {
        done(new Error('should not reach'));
      })
      .catch((err: {code: number}) => {
        assert(err instanceof GoogleError);
        assert.strictEqual(err.code, status.CANCELLED);
        done();
      });
    promise.cancel();
  });

  it('cancels retrying call', done => {
    const retryOptions = utils.createRetryOptions(0, 0, 0, 0, 0, 0, 100);

    let callCount = 0;
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callCount++;
      let err: GoogleError;
      let response: number;
      if (callCount <= 3) {
        err = new GoogleError();
        err.code = FAKE_STATUS_CODE_1;
      } else {
        response = 42;
      }
      const timeoutId = setTimeout(() => {
        callback(err, response);
      }, 10);
      return function cancelFunc() {
        clearTimeout(timeoutId);
        callback(new Error('canceled'));
      };
    }
    const apiCall = createApiCall(func, {
      settings: {retry: retryOptions},
      returnCancelFunc: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promise = (apiCall as any)(null);
    promise
      .then(() => {
        done(new Error('should not reach'));
      })
      .catch(() => {
        assert(callCount < 4);
        done();
      })
      .catch(done);
    setTimeout(() => {
      promise.cancel();
    }, 15);
  });

  it('does not return promise when callback is supplied', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, 42);
    }
    const apiCall = createApiCall(func);
    assert.strictEqual(
      apiCall({}, undefined, (err, response) => {
        assert.strictEqual(err, null);
        assert.strictEqual(response, 42);
        done();
      }),
      undefined,
    );
  });
});

describe('retryable', () => {
  const retryOptions = utils.createRetryOptions(0, 0, 0, 0, 0, 0, 100);
  const settings = {
    settings: {timeout: 0, retry: retryOptions, apiName: 'TestApi'},
  };

  it('retries the API call', done => {
    let toAttempt = 3;
    let deadlineArg: string;
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      toAttempt--;
      if (toAttempt > 0) {
        fail(argument, metadata, options, callback);
        return;
      }
      callback(null, 1729);
    }
    const apiCall = createApiCall(func, settings);
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, 1729);
        assert.strictEqual(toAttempt, 0);
        assert(deadlineArg);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('retries the API call with promise', done => {
    let toAttempt = 3;
    let deadlineArg: string;
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      toAttempt--;
      if (toAttempt > 0) {
        fail(argument, metadata, options, callback);
        return;
      }
      callback(null, 1729);
    }
    const apiCall = createApiCall(func, settings);
    apiCall({}, undefined)
      .then(resp => {
        assert.ok(Array.isArray(resp));
        assert.strictEqual(resp[0], 1729);
        assert.strictEqual(toAttempt, 0);
        assert.ok(deadlineArg);
        done();
      })
      .catch(done);
  });

  it('cancels in the middle of retries', done => {
    let callCount = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callCount++;
      if (callCount <= 2) {
        fail(argument, metadata, options, callback);
        return;
      }
      setTimeout(() => {
        promise.cancel();
      }, 0);
      setTimeout(() => {
        callback(null, null, 1729);
      }, 10);
    }
    const apiCall = createApiCall(func, settings);
    const promise = apiCall({}, undefined);
    promise
      .then(() => {
        done(new Error('should not reach'));
      })
      .catch((err: Error) => {
        assert(err instanceof Error);
        done();
      });
  });

  it("doesn't retry if no codes", done => {
    const retryOptions = gax.createRetryOptions(
      [],
      gax.createBackoffSettings(1, 2, 3, 4, 5, 6, 7),
    );
    const settings = {settings: {timeout: 0, retry: retryOptions}};
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof Error);
        assert.strictEqual(err!.code, FAKE_STATUS_CODE_1);
        assert.strictEqual(err!.note, undefined);
        assert.strictEqual(spy.callCount, 1);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('aborts retries', done => {
    const apiCall = createApiCall(fail, settings);
    void apiCall({}, undefined, err => {
      try {
        assert(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it.skip('times out', done => {
    const toAttempt = 3;
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      assert(err instanceof Error);
      assert.strictEqual(err!.code, FAKE_STATUS_CODE_1);
      assert(err!.note);
      assert.strictEqual(spy.callCount, toAttempt);
      done();
    });
  });

  it('errors on maxRetries and surfaces original error', done => {
    const toAttempt = 5;
    const backoff = gax.createMaxRetriesBackoffSettings(
      0,
      0,
      0,
      0,
      0,
      0,
      toAttempt,
    );
    const maxRetriesRetryOptions = utils.createRetryOptions(backoff);

    const maxRetrySettings = {
      settings: {timeout: 0, retry: maxRetriesRetryOptions},
    };
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, maxRetrySettings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        assert.strictEqual(spy.callCount, toAttempt);
        assert.match(
          err.message,
          /Exceeded maximum number of retries retrying error Error before any response was received/,
        );
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('retry fails for exceeding total timeout, surfacing original error', done => {
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof GoogleError);
        assert.match(
          err.message,
          /Total timeout of API TestApi exceeded 100 milliseconds retrying error Error {2}before any response was received/,
        );
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('retry fails for exceeding total timeout, surfacing original error and previous errors', done => {
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof GoogleError);
        assert.match(err.message, /Previous errors/);
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  // maxRetries is unsupported, and intended for internal use only or
  // use with retry-request backwards compatibility
  it('errors when totalTimeoutMillis and maxRetries set', done => {
    const maxRetries = 5;
    const backoff = gax.createMaxRetriesBackoffSettings(
      0,
      0,
      0,
      0,
      0,
      0,
      maxRetries,
    );
    const maxRetriesRetryOptions = utils.createRetryOptions(backoff);
    maxRetriesRetryOptions.backoffSettings.totalTimeoutMillis = 100;
    const maxRetrySettings = {
      settings: {timeout: 0, retry: maxRetriesRetryOptions},
    };
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, maxRetrySettings);
    void apiCall({}, undefined, err => {
      try {
        assert(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.INVALID_ARGUMENT);
        assert.strictEqual(spy.callCount, 0);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('aborts on unexpected exception', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      const error = new GoogleError();
      error.code = FAKE_STATUS_CODE_2;
      callback(error);
    }
    const spy = sinon.spy(func);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert(err instanceof Error);
        assert.strictEqual(err!.code, FAKE_STATUS_CODE_2);
        assert(err!.note);
        assert.strictEqual(spy.callCount, 1);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('does not retry even when no responses', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, null);
    }
    const apiCall = createApiCall(func, settings);
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, null);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it.skip('retries with exponential backoff', done => {
    const startTime = new Date();
    const spy = sinon.spy(fail);

    const backoff = gax.createBackoffSettings(3, 2, 24, 5, 2, 80, 2500);
    const retryOptions = new gax.RetryOptions([FAKE_STATUS_CODE_1], backoff);
    const apiCall = createApiCall(spy, {
      settings: {timeout: 0, retry: retryOptions},
    });

    void apiCall({}, undefined, err => {
      assert(err instanceof Error);
      assert.strictEqual(err!.code, FAKE_STATUS_CODE_1);
      assert(err!.note);
      const now = new Date();
      assert(
        now.getTime() - startTime.getTime() >= backoff.totalTimeoutMillis!,
      );
      const callsLowerBound =
        backoff.totalTimeoutMillis! /
        (backoff.maxRetryDelayMillis + backoff.maxRpcTimeoutMillis!);
      const callsUpperBound =
        backoff.totalTimeoutMillis! / backoff.initialRetryDelayMillis;
      assert(spy.callCount > callsLowerBound);
      assert(spy.callCount < callsUpperBound);
      done();
    }).catch(done);
  });

  it.skip('reports A/B testing', () => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, argument);
    }
    const mockBuilder = sinon.mock();
    const settings = {
      settings: {
        timeout: 0,
        retry: retryOptions,
        otherArgs: {metadataBuilder: mockBuilder},
      },
    };
    const apiCall = createApiCall(func, settings);
    mockBuilder.withExactArgs({retry: '2'});
    return apiCall({}, undefined)
      .then(() => {
        mockBuilder.verify();
        mockBuilder.reset();
        const backoff = gax.createMaxRetriesBackoffSettings(
          0,
          0,
          0,
          0,
          0,
          0,
          5,
        );
        mockBuilder.withExactArgs({retry: '1'});
        return apiCall({}, {retry: utils.createRetryOptions(backoff)});
      })
      .then(() => {
        mockBuilder.verify();
        mockBuilder.reset();
        mockBuilder.withExactArgs({retry: '2'});
        const options = {
          retry: utils.createRetryOptions(0, 0, 0, 0, 0, 0, 200),
        };
        return apiCall({}, options);
      })
      .then(() => {
        mockBuilder.verify();
      });
  });

  it('forwards metadata to builder', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, {});
    }

    let gotHeaders: {h1?: string; h2?: string};
    const mockBuilder = (abTest: {}, headers: {}) => {
      gotHeaders = headers;
    };
    const settings = {
      settings: {
        otherArgs: {metadataBuilder: mockBuilder},
      },
    };
    const apiCall = createApiCall(func, settings);
    const headers = {
      h1: 'val1',
      h2: 'val2',
    };
    void apiCall({}, {otherArgs: {headers}}).then(() => {
      try {
        assert.strictEqual(gotHeaders.h1, 'val1');
        assert.strictEqual(gotHeaders.h2, 'val2');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
