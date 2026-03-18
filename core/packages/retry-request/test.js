'use strict';

const assert = require('assert');
const async = require('async');
const range = require('lodash.range');
const {describe, it, beforeEach} = require('mocha');
const {PassThrough} = require('stream');
const {teenyRequest} = require('teeny-request');

const retryRequest = require('./index.js');

retryRequest.defaults.request = teenyRequest.defaults();

describe('retry-request', () => {
  const URI_404 = 'http://google.com/theblahstore';
  const URI_200 = 'http://google.com/';
  const URI_NON_EXISTENT = 'http://theblahstore';

  describe('streams', () => {
    it('works with defaults in a stream', done => {
      let responsesEmitted = 0;

      retryRequest(URI_404)
        .on('error', done)
        .on('response', () => {
          responsesEmitted++;
        })
        .on('complete', () => {
          assert.strictEqual(responsesEmitted, 1);
          done();
        });
    });

    it('allows object mode', () => {
      const retryStream = retryRequest(URI_404, {objectMode: true});
      assert.strictEqual(retryStream._readableState.objectMode, true);
    });

    it('emits an error', done => {
      retryRequest(URI_NON_EXISTENT).on('error', () => {
        done();
      });
    });

    it('emits a `request` event on each request', done => {
      let requestsMade = 0;
      let requestsEmitted = 0;

      const opts = {
        shouldRetryFn: function () {
          return requestsMade < 3;
        },
        request: function () {
          const fakeRequestStream = new PassThrough();

          requestsMade++;

          setImmediate(() => {
            fakeRequestStream.emit('response', {statusCode: 200});

            if (requestsMade === 3) {
              setImmediate(() => {
                fakeRequestStream.emit('complete');
              });
            }
          });

          return fakeRequestStream;
        },
      };

      retryRequest(URI_404, opts)
        .on('request', () => {
          requestsEmitted++;
        })
        .on('error', done)
        .on('complete', () => {
          assert.strictEqual(requestsEmitted, 3);
          done();
        });
    });

    it('exposes an `abort` function to match request', done => {
      const retryStream = retryRequest(URI_NON_EXISTENT);

      retryStream.on('error', () => {
        assert.equal(typeof retryStream.abort, 'function');
        done();
      });
    });

    it('works on the last attempt', done => {
      let numAborts = 0;
      let numAttempts = 0;

      const opts = {
        request: function () {
          numAttempts++;

          const fakeRequestStream = new PassThrough();
          fakeRequestStream.abort = function () {
            numAborts++;
          };

          const shouldReturnError = numAttempts < 3;
          const response = shouldReturnError
            ? {statusCode: 503}
            : {statusCode: 200};

          setImmediate(() => {
            fakeRequestStream.emit('response', response);

            if (shouldReturnError) {
              return;
            }

            setImmediate(() => {
              fakeRequestStream.emit('complete', numAttempts);
            });
          });

          return fakeRequestStream;
        },
      };

      retryRequest(URI_404, opts)
        .on('error', done)
        .on('complete', numAttempts => {
          assert.strictEqual(numAborts, 2);
          assert.deepEqual(numAttempts, 3);
          done();
        });
    });

    it('never succeeds', done => {
      let numAborts = 0;
      let numAttempts = 0;

      const opts = {
        request: function () {
          numAttempts++;

          const fakeRequestStream = new PassThrough();
          fakeRequestStream.abort = function () {
            numAborts++;
          };

          const response = {statusCode: 503};
          setImmediate(() => {
            fakeRequestStream.emit('response', response);
          });

          return fakeRequestStream;
        },
      };

      retryRequest(URI_404, opts)
        .on('response', () => {
          assert.strictEqual(numAborts, 2);
          assert.strictEqual(numAttempts, 3);
          done();
        })
        .on('error', done);
    });

    it('forwards a request error', done => {
      const error = new Error('Error.');

      const opts = {
        request: function () {
          const fakeRequestStream = new PassThrough();

          setImmediate(() => {
            fakeRequestStream.emit('response', {
              statusCode: 200,
            });

            setImmediate(() => {
              fakeRequestStream.destroy(error);
            });
          });

          return fakeRequestStream;
        },
      };

      retryRequest(URI_200, opts).on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('callbacks', () => {
    it('works with defaults with a callback', done => {
      retryRequest(URI_404, () => {
        done();
      });
    });

    it('exposes an `abort` function', done => {
      const opts = {
        request: function () {
          return {
            abort: done,
          };
        },
      };

      const request = retryRequest(URI_200, opts, assert.ifError);
      request.abort();
    });

    it('returns an error', done => {
      retryRequest(URI_NON_EXISTENT, err => {
        assert.equal(typeof err, 'object');
        done();
      });
    });
  });

  describe('overriding', () => {
    it('should ignore undefined options', done => {
      let numAttempts = 0;
      const error = new Error('ENOTFOUND');

      const opts = {
        noResponseRetries: undefined,
        request: function (_, callback) {
          numAttempts++;
          callback(error);
        },
      };

      retryRequest(URI_NON_EXISTENT, opts, err => {
        assert.strictEqual(numAttempts, 3);
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should allow overriding retries', done => {
      const opts = {retries: 0};

      retryRequest(URI_404, opts, () => {
        done();
      });
    });

    it('should use default noResponseRetries', done => {
      let numAttempts = 0;
      const error = new Error('ENOTFOUND');

      const opts = {
        request: function (_, callback) {
          numAttempts++;
          callback(error);
        },
      };

      retryRequest(URI_NON_EXISTENT, opts, err => {
        assert.strictEqual(numAttempts, 3);
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should allow overriding noResponseRetries', done => {
      let numAttempts = 0;
      const error = new Error('ENOTFOUND');

      const opts = {
        noResponseRetries: 0,
        request: function (_, callback) {
          numAttempts++;
          callback(error);
        },
      };

      retryRequest(URI_NON_EXISTENT, opts, err => {
        assert.strictEqual(numAttempts, 1);
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should allow overriding currentRetryAttempt', done => {
      let numAttempts = 0;
      const opts = {
        currentRetryAttempt: 1,
        request: function (_, responseHandler) {
          numAttempts++;
          responseHandler(null, {statusCode: 500});
        },
      };

      retryRequest(URI_404, opts, () => {
        assert.strictEqual(numAttempts, 1);
        done();
      });
    });

    it('should allow overriding shouldRetryFn', done => {
      let shouldRetryFnCalled = false;

      const opts = {
        retries: 1, // so that our retry function is only called once

        shouldRetryFn: function () {
          shouldRetryFnCalled = true;
          return true;
        },
      };

      retryRequest(URI_404, opts, () => {
        assert.strictEqual(shouldRetryFnCalled, true);
        done();
      });
    });

    it('should allow overriding request', done => {
      const opts = {
        request: function () {
          done();
        },
      };

      retryRequest(URI_200, opts, () => {});
    });
  });

  describe('shouldRetryFn', () => {
    const URI = 'http://';

    function assertRetried(statusCode, callback) {
      let initialRequestMade = false;

      retryRequest(
        URI,
        {
          request: function (_, responseHandler) {
            if (initialRequestMade) {
              // This is a retry attempt. "Test passed"
              callback();
              return;
            }

            initialRequestMade = true;
            responseHandler(null, {statusCode: statusCode});
          },
        },
        assert.ifError,
      );
    }

    function assertNotRetried(statusCode, callback) {
      let initialRequestMade = false;
      let requestWasRetried = false;

      retryRequest(
        URI,
        {
          request: function (_, responseHandler) {
            requestWasRetried = initialRequestMade;
            initialRequestMade = true;
            responseHandler(null, {statusCode: statusCode});
          },
        },
        err => {
          if (err) {
            callback(err);
            return;
          }

          if (requestWasRetried) {
            callback(new Error('Request was retried'));
            return;
          }

          callback();
        },
      );
    }

    it('should retry a 1xx code', done => {
      async.each(range(100, 199), assertRetried, done);
    });

    it('should not retry a 2xx code', done => {
      async.each(range(200, 299), assertNotRetried, done);
    });

    it('should not retry a 3xx code', done => {
      async.each(range(300, 399), assertNotRetried, done);
    });

    it('should not retry a 4xx code', done => {
      const statusCodes = range(400, 428).concat(range(430, 499));

      async.each(statusCodes, assertNotRetried, done);
    });

    it('should retry a 429 code', done => {
      assertRetried(429, done);
    });

    it('should retry a 5xx code', done => {
      async.each(range(500, 599), assertRetried, done);
    });
  });

  it('should not do any retries if unnecessary', done => {
    let shouldRetryFnTimesCalled = 0;

    const opts = {
      shouldRetryFn: function () {
        shouldRetryFnTimesCalled++;
        return false;
      },
    };

    retryRequest(URI_200, opts, () => {
      assert.strictEqual(shouldRetryFnTimesCalled, 1);
      done();
    });
  });

  it('has an initial delay when currentRetryAttempt > 0', done => {
    const startTime = new Date();

    const opts = {
      currentRetryAttempt: 1,
      request: function (_, responseHandler) {
        responseHandler(null, {statusCode: 200});
      },
    };

    retryRequest(URI_200, opts, () => {
      const totalTime = new Date() - startTime;
      console.log(`TOTAL TIME: ${totalTime}`);
      assert(totalTime >= 2000 && totalTime < 3500);
      done();
    });
  });
});

describe('getNextRetryDelay', () => {
  const maxRetryDelay = 64;
  const retryDelayMultiplier = 2;
  let timeOfFirstRequest;
  const totalTimeout = 64;

  function secondsToMs(seconds) {
    return seconds * 1000;
  }

  beforeEach(() => {
    timeOfFirstRequest = Date.now();
  });

  it('should return exponential retry delay', () => {
    [1, 2, 3, 4, 5].forEach(assertTime);

    function assertTime(retryNumber) {
      const min = Math.pow(2, retryNumber) * secondsToMs(1);
      const max = Math.pow(2, retryNumber) * secondsToMs(1) + secondsToMs(1);

      const delay = retryRequest.getNextRetryDelay({
        maxRetryDelay,
        retryDelayMultiplier,
        retryNumber,
        timeOfFirstRequest,
        totalTimeout,
      });

      assert(delay >= min && delay <= max);
    }
  });

  it('should allow overriding the multiplier', () => {
    [1, 2, 3, 4, 5].forEach(assertTime);

    function assertTime(multiplier) {
      const min = Math.pow(multiplier, 1) * secondsToMs(1);
      const max = Math.pow(multiplier, 1) * secondsToMs(1) + secondsToMs(1);

      const delay = retryRequest.getNextRetryDelay({
        maxRetryDelay,
        retryDelayMultiplier: multiplier,
        retryNumber: 1,
        timeOfFirstRequest,
        totalTimeout,
      });

      assert(delay >= min && delay <= max);
    }
  });

  it('should honor total timeout setting', () => {
    // This test passes settings to calculate an enormous retry delay, if it
    // weren't for the timeout restrictions imposed by `totalTimeout`.
    // So, even though this is pretending to be the 10th retry, and our
    // `maxRetryDelay` is huge, the 60 second max timeout we have for all
    // requests to complete by is honored.
    // We tell the function that we have already been trying this request for
    // 30 seconds, and we will only wait a maximum of 60 seconds. Therefore, we
    // should end up with a retry delay of around 30 seconds.
    const retryDelay = retryRequest.getNextRetryDelay({
      // Allow 60 seconds maximum delay,
      timeOfFirstRequest: Date.now() - secondsToMs(30), // 30 seconds ago.
      totalTimeout: 60,

      // Inflating these numbers to be sure the smaller timeout is chosen:
      maxRetryDelay: 1e9,
      retryDelayMultiplier: 10,
      retryNumber: 10,
    });

    const min = retryDelay - 10;
    const max = retryDelay + 10;
    assert(retryDelay >= min && retryDelay <= max);
  });

  it('should return maxRetryDelay if calculated retry would be too high', () => {
    const delayWithoutLowMaxRetryDelay = retryRequest.getNextRetryDelay({
      maxRetryDelay,
      retryDelayMultiplier,
      retryNumber: 100,
      timeOfFirstRequest,
      totalTimeout,
    });

    const maxRetryDelayMs = secondsToMs(maxRetryDelay);
    const min = maxRetryDelayMs - 10;
    const max = maxRetryDelayMs + 10;
    assert(
      delayWithoutLowMaxRetryDelay >= min &&
        delayWithoutLowMaxRetryDelay <= max,
    );

    const lowMaxRetryDelay = 1;
    const delayWithLowMaxRetryDelay = retryRequest.getNextRetryDelay({
      maxRetryDelay: lowMaxRetryDelay,
      retryDelayMultiplier,
      retryNumber: 100,
      timeOfFirstRequest,
      totalTimeout,
    });
    assert.strictEqual(
      delayWithLowMaxRetryDelay,
      secondsToMs(lowMaxRetryDelay),
    );
  });
});
