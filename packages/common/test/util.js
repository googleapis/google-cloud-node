/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http:// www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var duplexify;
var extend = require('extend');
var format = require('string-format-obj');
var googleAuth = require('google-auto-auth');
var is = require('is');
var proxyquire = require('proxyquire');
var request = require('request');
var retryRequest = require('retry-request');
var stream = require('stream');
var streamEvents = require('stream-events');

var googleAutoAuthOverride;
function fakeGoogleAutoAuth() {
  return (googleAutoAuthOverride || googleAuth).apply(null, arguments);
}

var REQUEST_DEFAULT_CONF;
var requestOverride;
function fakeRequest() {
  return (requestOverride || request).apply(null, arguments);
}
fakeRequest.defaults = function(defaultConfiguration) {
  // Ignore the default values, so we don't have to test for them in every API
  // call.
  REQUEST_DEFAULT_CONF = defaultConfiguration;
  return fakeRequest;
};

var retryRequestOverride;
function fakeRetryRequest() {
  return (retryRequestOverride || retryRequest).apply(null, arguments);
}

var streamEventsOverride;
function fakeStreamEvents() {
  return (streamEventsOverride || streamEvents).apply(null, arguments);
}

describe('common/util', function() {
  var util;
  var utilOverrides = {};

  before(function() {
    util = proxyquire('../src/util', {
      'google-auto-auth': fakeGoogleAutoAuth,
      request: fakeRequest,
      'retry-request': fakeRetryRequest,
      'stream-events': fakeStreamEvents
    });
    var utilCached = extend(true, {}, util);

    // Override all util methods, allowing them to be mocked. Overrides are
    // removed before each test.
    Object.keys(util).forEach(function(utilMethod) {
      if (typeof util[utilMethod] !== 'function') {
        return;
      }

      util[utilMethod] = function() {
        return (utilOverrides[utilMethod] || utilCached[utilMethod])
          .apply(this, arguments);
      };
    });

    duplexify = require('duplexify');
  });

  beforeEach(function() {
    googleAutoAuthOverride = null;
    requestOverride = null;
    retryRequestOverride = null;
    streamEventsOverride = null;
    utilOverrides = {};
  });

  it('should have set correct defaults on Request', function() {
    assert.deepEqual(REQUEST_DEFAULT_CONF, {
      timeout: 60000,
      gzip: true,
      forever: true,
      pool: {
        maxSockets: Infinity
      }
    });
  });

  it('should export an error for module instantiation errors', function() {
    var errorMessage = format([
      'Sorry, we cannot connect to Cloud Services without a project ID.',
      'You may specify one with an environment variable named',
      '"GCLOUD_PROJECT". See {baseUrl}/{path} for a detailed guide on creating',
      'an authenticated connection.'
    ].join(' '), {
      baseUrl: 'https://googlecloudplatform.github.io/google-cloud-node/#',
      path: 'docs/guides/authentication'
    });

    var missingProjectIdError = new Error(errorMessage);
    assert.deepEqual(util.missingProjectIdError, missingProjectIdError);
  });

  describe('ApiError', function() {
    it('should build correct ApiError', function() {
      var error = {
        errors: [ new Error(), new Error() ],
        code: 100,
        message: 'Uh oh',
        response: { a: 'b', c: 'd' }
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.errors, error.errors);
      assert.strictEqual(apiError.code, error.code);
      assert.strictEqual(apiError.message, error.message);
      assert.strictEqual(apiError.response, error.response);
    });

    it('should detect ApiError message from response body', function() {
      var errorMessage = 'API error message';

      var error = {
        errors: [ new Error(errorMessage) ],
        code: 100,
        response: { a: 'b', c: 'd' }
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.message, errorMessage);
    });

    it('should parse the response body for errors', function() {
      var error = new Error('Error.');
      var errors = [error, error];

      var errorBody = {
        response: {
          body: JSON.stringify({
            error: {
              errors: errors
            }
          })
        }
      };

      var apiError = new util.ApiError(errorBody);

      assert.deepEqual(apiError.errors, errors);
    });

    it('should append the custom error message', function() {
      var errorMessage = 'API error message';
      var customErrorMessage = 'Custom error message';
      var expectedErrorMessage = [customErrorMessage, errorMessage].join(' - ');

      var error = {
        errors: [ new Error(errorMessage) ],
        code: 100,
        response: { a: 'b', c: 'd' },
        message: customErrorMessage
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.message, expectedErrorMessage);
    });

    it('should parse and append the decoded response body', function() {
      var errorMessage = 'API error message';
      var responseBodyMsg = 'Response body message &lt;';
      var expectedErrorMessage = [
        errorMessage,
        'Response body message <'
      ].join(' - ');

      var error = {
        message: errorMessage,
        code: 100,
        response: {
          body: new Buffer(responseBodyMsg)
        }
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.message, expectedErrorMessage);
    });

    it('should use default message if there are no errors', function() {
      var expectedErrorMessage = 'Error during request.';

      var error = {
        code: 100,
        response: { a: 'b', c: 'd' }
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.message, expectedErrorMessage);
    });

    it('should use default message if too many errors', function() {
      var expectedErrorMessage = 'Error during request.';

      var error = {
        errors: [ new Error(), new Error() ],
        code: 100,
        response: { a: 'b', c: 'd' }
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.message, expectedErrorMessage);
    });

    it('should filter out duplicate errors', function() {
      var expectedErrorMessage = 'Error during request.';

      var error = {
        code: 100,
        message: expectedErrorMessage,
        response: {
          body: expectedErrorMessage
        }
      };

      var apiError = new util.ApiError(error);

      assert.strictEqual(apiError.message, expectedErrorMessage);
    });
  });

  describe('PartialFailureError', function() {
    it('should build correct PartialFailureError', function() {
      var error = {
        errors: [ new Error(), new Error() ],
        response: { a: 'b', c: 'd' },
        message: 'Partial failure occurred'
      };

      var partialFailureError = new util.PartialFailureError(error);

      assert.strictEqual(partialFailureError.errors, error.errors);
      assert.strictEqual(partialFailureError.response, error.response);
      assert.strictEqual(partialFailureError.message, error.message);
    });

    it('should use default message', function() {
      var expectedErrorMessage = 'A failure occurred during this request.';

      var error = {
        errors: [],
        response: { a: 'b', c: 'd' }
      };

      var partialFailureError = new util.PartialFailureError(error);

      assert.strictEqual(partialFailureError.message, expectedErrorMessage);
    });
  });

  describe('extendGlobalConfig', function() {
    it('should favor `keyFilename` when `credentials` is global', function() {
      var globalConfig = { credentials: {} };
      var options = util.extendGlobalConfig(globalConfig, {
        keyFilename: 'key.json'
      });
      assert.strictEqual(options.credentials, undefined);
    });

    it('should favor `credentials` when `keyFilename` is global', function() {
      var globalConfig = { keyFilename: 'key.json' };
      var options = util.extendGlobalConfig(globalConfig, { credentials: {} });
      assert.strictEqual(options.keyFilename, undefined);
    });

    it('should honor the GCLOUD_PROJECT environment variable', function() {
      var newProjectId = 'envvar-project-id';
      var cachedProjectId = process.env.GCLOUD_PROJECT;
      process.env.GCLOUD_PROJECT = newProjectId;

      // No projectId specified:
      var globalConfig = { keyFilename: 'key.json' };
      var overrides = {};

      var options = util.extendGlobalConfig(globalConfig, overrides);

      if (cachedProjectId) {
        process.env.GCLOUD_PROJECT = cachedProjectId;
      } else {
        delete process.env.GCLOUD_PROJECT;
      }

      assert.strictEqual(options.projectId, newProjectId);
    });

    it('should not modify original object', function() {
      var globalConfig = { keyFilename: 'key.json' };
      util.extendGlobalConfig(globalConfig, { credentials: {} });
      assert.deepEqual(globalConfig, { keyFilename: 'key.json' });
    });

    it('should link the original interceptors_', function() {
      var interceptors = [];
      var globalConfig = { interceptors_: interceptors };
      util.extendGlobalConfig(globalConfig, {});
      assert.strictEqual(globalConfig.interceptors_, interceptors);
    });
  });

  describe('handleResp', function() {
    it('should handle errors', function(done) {
      var error = new Error('Error.');

      util.handleResp(error, {}, null, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should parse response', function(done) {
      var err = { a: 'b', c: 'd' };
      var resp = { a: 'b', c: 'd' };
      var body = { a: 'b', c: 'd' };

      var returnedErr = { a: 'b', c: 'd' };
      var returnedBody = { a: 'b', c: 'd' };
      var returnedResp = { a: 'b', c: 'd' };

      utilOverrides.parseHttpRespMessage = function(resp_) {
        assert.strictEqual(resp_, resp);

        return {
          resp: returnedResp
        };
      };

      utilOverrides.parseHttpRespBody = function(body_) {
        assert.strictEqual(body_, body);

        return {
          body: returnedBody
        };
      };

      util.handleResp(err, resp, body, function(err, body, resp) {
        assert.deepEqual(err, returnedErr);
        assert.deepEqual(body, returnedBody);
        assert.deepEqual(resp, returnedResp);
        done();
      });
    });

    it('should parse response for error', function(done) {
      var error = new Error('Error.');

      utilOverrides.parseHttpRespMessage = function() {
        return { err: error };
      };

      util.handleResp(null, {}, {}, function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should parse body for error', function(done) {
      var error = new Error('Error.');

      utilOverrides.parseHttpRespBody = function() {
        return { err: error };
      };

      util.handleResp(null, {}, {}, function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should not parse undefined response', function(done) {
      utilOverrides.parseHttpRespMessage = function() {
        done(); // Will throw.
      };

      util.handleResp(null, null, null, done);
    });

    it('should not parse undefined body', function(done) {
      utilOverrides.parseHttpRespBody = function() {
        done(); // Will throw.
      };

      util.handleResp(null, null, null, done);
    });
  });

  describe('parseHttpRespMessage', function() {
    it('should build ApiError with non-200 status and message', function(done) {
      var httpRespMessage = { statusCode: 400, statusMessage: 'Not Good' };

      utilOverrides.ApiError = function(error_) {
        assert.strictEqual(error_.code, httpRespMessage.statusCode);
        assert.strictEqual(error_.message, httpRespMessage.statusMessage);
        assert.strictEqual(error_.response, httpRespMessage);

        done();
      };

      util.parseHttpRespMessage(httpRespMessage);
    });

    it('should return the original response message', function() {
      var httpRespMessage = {};
      var parsedHttpRespMessage = util.parseHttpRespMessage(httpRespMessage);
      assert.strictEqual(parsedHttpRespMessage.resp, httpRespMessage);
    });
  });

  describe('parseHttpRespBody', function() {
    it('should detect body errors', function() {
      var apiErr = {
        errors: [{ message: 'bar' }],
        code: 400,
        message: 'an error occurred'
      };

      var parsedHttpRespBody = util.parseHttpRespBody({ error: apiErr });
      var expectedErrorMessage = [
        apiErr.message,
        apiErr.errors[0].message
      ].join(' - ');

      assert.deepEqual(parsedHttpRespBody.err.errors, apiErr.errors);
      assert.strictEqual(parsedHttpRespBody.err.code, apiErr.code);
      assert.deepEqual(parsedHttpRespBody.err.message, expectedErrorMessage);
    });

    it('should try to parse JSON if body is string', function() {
      var httpRespBody = '{ "foo": "bar" }';
      var parsedHttpRespBody = util.parseHttpRespBody(httpRespBody);

      assert.strictEqual(parsedHttpRespBody.body.foo, 'bar');
    });

    it('should return the original body', function() {
      var httpRespBody = {};
      var parsedHttpRespBody = util.parseHttpRespBody(httpRespBody);

      assert.strictEqual(parsedHttpRespBody.body, httpRespBody);
    });
  });

  describe('makeWritableStream', function() {
    it('should use defaults', function(done) {
      var dup = duplexify();
      var metadata = { a: 'b', c: 'd' };

      util.makeWritableStream(dup, {
        metadata: metadata,
        makeAuthenticatedRequest: function(request) {
          assert.equal(request.method, 'POST');
          assert.equal(request.qs.uploadType, 'multipart');

          assert.strictEqual(Array.isArray(request.multipart), true);

          var mp = request.multipart;

          assert.strictEqual(mp[0]['Content-Type'], 'application/json');
          assert.strictEqual(mp[0].body, JSON.stringify(metadata));

          assert.strictEqual(mp[1]['Content-Type'], 'application/octet-stream');
          // (is a writable stream:)
          assert.strictEqual(typeof mp[1].body._writableState, 'object');

          done();
        }
      });
    });

    it('should allow overriding defaults', function(done) {
      var dup = duplexify();

      var req = {
        method: 'PUT',
        qs: {
          uploadType: 'media'
        },
        something: 'else'
      };

      util.makeWritableStream(dup, {
        metadata: {
          contentType: 'application/json'
        },
        makeAuthenticatedRequest: function(request) {
          assert.equal(request.method, req.method);
          assert.deepEqual(request.qs, req.qs);
          assert.equal(request.something, req.something);

          var mp = request.multipart;
          assert.strictEqual(mp[1]['Content-Type'], 'application/json');

          done();
        },

        request: req
      });
    });

    it('should emit an error', function(done) {
      var error = new Error('Error.');

      var ws = duplexify();
      ws.on('error', function(err) {
        assert.equal(err, error);
        done();
      });

      util.makeWritableStream(ws, {
        makeAuthenticatedRequest: function(request, opts) {
          opts.onAuthenticated(error);
        }
      });
    });

    it('should set the writable stream', function(done) {
      var dup = duplexify();

      dup.setWritable = function() {
        done();
      };

      util.makeWritableStream(dup, {
        makeAuthenticatedRequest: function() {}
      });
    });

    it('should emit an error if the request fails', function(done) {
      var dup = duplexify();
      var fakeStream = new stream.Writable();
      var error = new Error('Error.');

      fakeStream.write = function() {};
      dup.end = function() {};

      utilOverrides.handleResp = function(err, res, body, callback) {
        callback(error);
      };

      requestOverride = function(reqOpts, callback) {
        callback(error);
      };

      dup.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      util.makeWritableStream(dup, {
        makeAuthenticatedRequest: function(request, opts) {
          opts.onAuthenticated();
        }
      });

      setImmediate(function() {
        fakeStream.emit('complete', {});
      });
    });

    it('should emit the response', function(done) {
      var dup = duplexify();
      var fakeStream = new stream.Writable();
      var fakeResponse = {};

      fakeStream.write = function() {};

      utilOverrides.handleResp = function(err, res, body, callback) {
        callback();
      };

      requestOverride = function(reqOpts, callback) {
        callback(null, fakeResponse);
      };

      var options = {
        makeAuthenticatedRequest: function(request, opts) {
          opts.onAuthenticated();
        }
      };

      dup.on('response', function(resp) {
        assert.strictEqual(resp, fakeResponse);
        done();
      });

      util.makeWritableStream(dup, options, util.noop);
    });

    it('should pass back the response data to the callback', function(done) {
      var dup = duplexify();
      var fakeStream = new stream.Writable();
      var fakeResponse = {};

      fakeStream.write = function() {};

      utilOverrides.handleResp = function(err, res, body, callback) {
        callback(null, fakeResponse);
      };

      requestOverride = function(reqOpts, callback) {
        callback();
      };

      var options = {
        makeAuthenticatedRequest: function(request, opts) {
          opts.onAuthenticated();
        }
      };

      util.makeWritableStream(dup, options, function(data) {
        assert.strictEqual(data, fakeResponse);
        done();
      });

      setImmediate(function() {
        fakeStream.emit('complete', {});
      });
    });
  });

  describe('makeAuthenticatedRequestFactory', function() {
    var authClient = {
      getCredentials: function() {},
      projectId: 'project-id'
    };

    beforeEach(function() {
      googleAutoAuthOverride = function() {
        return authClient;
      };
    });

    it('should create an authClient', function(done) {
      var config = {};

      googleAutoAuthOverride = function(config_) {
        assert.strictEqual(config_, config);
        setImmediate(done);
        return authClient;
      };

      util.makeAuthenticatedRequestFactory(config);
    });

    it('should return a function', function() {
      assert.equal(typeof util.makeAuthenticatedRequestFactory(), 'function');
    });

    it('should return a getCredentials method', function(done) {
      function getCredentials() {
        done();
      }

      googleAutoAuthOverride = function() {
        return { getCredentials: getCredentials };
      };

      var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
      makeAuthenticatedRequest.getCredentials();
    });

    it('should return the authClient', function() {
      var authClient = { getCredentials: function() {} };

      googleAutoAuthOverride = function() {
        return authClient;
      };

      var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
      assert.strictEqual(makeAuthenticatedRequest.authClient, authClient);
    });

    describe('customEndpoint (no authentication attempted)', function() {
      var makeAuthenticatedRequest;
      var config = {
        customEndpoint: true
      };
      var expectedConfig = extend({ projectId: authClient.projectId }, config);

      beforeEach(function() {
        makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(config);
      });

      it('should decorate the request', function(done) {
        var reqOpts = { a: 'b', c: 'd' };
        var decoratedRequest = {};

        utilOverrides.decorateRequest = function(reqOpts_, config_) {
          assert.strictEqual(reqOpts_, reqOpts);
          assert.deepEqual(config_, expectedConfig);
          return decoratedRequest;
        };

        makeAuthenticatedRequest(reqOpts, {
          onAuthenticated: function(err, authenticatedReqOpts) {
            assert.ifError(err);
            assert.strictEqual(authenticatedReqOpts, decoratedRequest);
            done();
          }
        });
      });

      it('should return missing projectId error', function(done) {
        var reqOpts = { a: 'b', c: 'd' };

        utilOverrides.decorateRequest = function() {
          throw util.missingProjectIdError;
        };

        makeAuthenticatedRequest(reqOpts, {
          onAuthenticated: function(err) {
            assert.strictEqual(err, util.missingProjectIdError);
            done();
          }
        });
      });

      it('should pass options back to callback', function(done) {
        var reqOpts = { a: 'b', c: 'd' };

        makeAuthenticatedRequest(reqOpts, {
          onAuthenticated: function(err, authenticatedReqOpts) {
            assert.ifError(err);
            assert.deepEqual(reqOpts, authenticatedReqOpts);
            done();
          }
        });
      });

      it('should not authenticate requests with a custom API', function(done) {
        var reqOpts = { a: 'b', c: 'd' };

        utilOverrides.makeRequest = function(rOpts) {
          assert.deepEqual(rOpts, reqOpts);
          done();
        };

        makeAuthenticatedRequest(reqOpts, assert.ifError);
      });
    });

    describe('needs authentication', function() {
      it('should pass correct args to authorizeRequest', function(done) {
        var reqOpts = { e: 'f', g: 'h' };

        authClient.authorizeRequest = function(rOpts) {
          assert.deepEqual(rOpts, reqOpts);
          done();
        };

        var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
        makeAuthenticatedRequest(reqOpts, {});
      });

      it('should return a stream if callback is missing', function() {
        authClient.authorizeRequest = function() {};

        var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory({});
        assert(makeAuthenticatedRequest({}) instanceof stream.Stream);
      });

      describe('authentication errors', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          authClient.authorizeRequest = function(rOpts, callback) {
            setImmediate(function() {
              callback(error);
            });
          };
        });

        it('should invoke the callback with error', function(done) {
          var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
          makeAuthenticatedRequest({}, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });

        it('should exec onAuthenticated callback with error', function(done) {
          var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
          makeAuthenticatedRequest({}, {
            onAuthenticated: function(err) {
              assert.strictEqual(err, error);
              done();
            }
          });
        });

        it('should emit an error and end the stream', function(done) {
          var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
          makeAuthenticatedRequest({}).on('error', function(err) {
            assert.strictEqual(err, error);

            var stream = this;
            setImmediate(function() {
              assert.strictEqual(stream.destroyed, true);
              done();
            });
          });
        });
      });

      describe('authentication success', function() {
        var reqOpts = { a: 'b', c: 'd' };

        beforeEach(function() {
          authClient.authorizeRequest = function(rOpts, callback) {
            callback(null, rOpts);
          };
        });

        it('should return authenticated request to callback', function(done) {
          utilOverrides.decorateRequest = function(reqOpts_) {
            assert.strictEqual(reqOpts_, reqOpts);
            return reqOpts;
          };

          var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
          makeAuthenticatedRequest(reqOpts, {
            onAuthenticated: function(err, authenticatedReqOpts) {
              assert.strictEqual(authenticatedReqOpts, reqOpts);
              done();
            }
          });
        });

        it('should make request with correct options', function(done) {
          var config = { a: 'b', c: 'd' };

          utilOverrides.decorateRequest = function(reqOpts_) {
            assert.strictEqual(reqOpts_, reqOpts);
            return reqOpts;
          };

          utilOverrides.makeRequest = function(authenticatedReqOpts, cfg, cb) {
            assert.strictEqual(authenticatedReqOpts, reqOpts);
            assert.deepEqual(cfg, config);
            cb();
          };

          var makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory(config);
          makeAuthenticatedRequest(reqOpts, done);
        });

        it('should return abort() from the active request', function(done) {
          var retryRequest = {
            abort: done
          };

          utilOverrides.makeRequest = function() {
            return retryRequest;
          };

          var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
          makeAuthenticatedRequest(reqOpts, assert.ifError).abort();
        });

        it('should only abort() once', function(done) {
          var retryRequest = {
            abort: done // Will throw if called more than once.
          };

          utilOverrides.makeRequest = function() {
            return retryRequest;
          };

          var makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory();
          var request = makeAuthenticatedRequest(reqOpts, assert.ifError);

          request.abort(); // done()
          request.abort(); // done()
        });

        it('should provide stream to makeRequest', function(done) {
          var stream;

          utilOverrides.makeRequest = function(authenticatedReqOpts, cfg) {
            setImmediate(function() {
              assert.strictEqual(cfg.stream, stream);
              done();
            });
          };

          var makeAuthenticatedRequest =
            util.makeAuthenticatedRequestFactory({});
          stream = makeAuthenticatedRequest(reqOpts);
        });
      });
    });
  });

  describe('shouldRetryRequest', function() {
    it('should return false if there is no error', function() {
      assert.strictEqual(util.shouldRetryRequest(), false);
    });

    it('should return false from generic error', function() {
      var error = new Error('Generic error with no code');

      assert.strictEqual(util.shouldRetryRequest(error), false);
    });

    it('should return true with error code 429', function() {
      var error = new Error('429');
      error.code = 429;

      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 500', function() {
      var error = new Error('500');
      error.code = 500;

      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 502', function() {
      var error = new Error('502');
      error.code = 502;

      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 503', function() {
      var error = new Error('503');
      error.code = 503;

      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should detect rateLimitExceeded reason', function() {
      var rateLimitError = new Error('Rate limit error without code.');
      rateLimitError.errors = [{ reason: 'rateLimitExceeded' }];

      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should detect userRateLimitExceeded reason', function() {
      var rateLimitError = new Error('Rate limit error without code.');
      rateLimitError.errors = [{ reason: 'userRateLimitExceeded' }];

      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });
  });

  describe('makeRequest', function() {
    var reqOpts = {
      method: 'GET'
    };

    function testDefaultRetryRequestConfig(done) {
      return function(reqOpts_, config) {
        assert.strictEqual(reqOpts_, reqOpts);
        assert.equal(config.retries, 3);
        assert.strictEqual(config.request, fakeRequest);

        var error = new Error('Error.');
        utilOverrides.parseHttpRespMessage = function() {
          return { err: error };
        };
        utilOverrides.shouldRetryRequest = function(err) {
          assert.strictEqual(err, error);
          done();
        };

        config.shouldRetryFn();
      };
    }

    var noRetryRequestConfig = { autoRetry: false };
    function testNoRetryRequestConfig(done) {
      return function(reqOpts, config) {
        assert.strictEqual(config.retries, 0);
        done();
      };
    }

    var customRetryRequestConfig = { maxRetries: 10 };
    function testCustomRetryRequestConfig(done) {
      return function(reqOpts, config) {
        assert.strictEqual(config.retries, customRetryRequestConfig.maxRetries);
        done();
      };
    }

    describe('callback mode', function() {
      it('should pass the default options to retryRequest', function(done) {
        retryRequestOverride = testDefaultRetryRequestConfig(done);
        util.makeRequest(reqOpts, {});
      });

      it('should allow turning off retries to retryRequest', function(done) {
        retryRequestOverride = testNoRetryRequestConfig(done);
        util.makeRequest(reqOpts, noRetryRequestConfig);
      });

      it('should override number of retries to retryRequest', function(done) {
        retryRequestOverride = testCustomRetryRequestConfig(done);
        util.makeRequest(reqOpts, customRetryRequestConfig);
      });

      it('should return the instance of retryRequest', function() {
        var requestInstance = {};

        retryRequestOverride = function() {
          return requestInstance;
        };

        var request = util.makeRequest(reqOpts, assert.ifError);
        assert.strictEqual(request, requestInstance);
      });
    });

    describe('stream mode', function() {
      it('should forward the specified events to the stream', function(done) {
        var requestStream = duplexify();
        var userStream = duplexify();

        var error = new Error('Error.');
        var response = {};
        var complete = {};

        userStream
          .on('error', function(error_) {
            assert.strictEqual(error_, error);
            requestStream.emit('response', response);
          })
          .on('response', function(response_) {
            assert.strictEqual(response_, response);
            requestStream.emit('complete', complete);
          })
          .on('complete', function(complete_) {
            assert.strictEqual(complete_, complete);
            done();
          });

        retryRequestOverride = function() {
          setImmediate(function() {
            requestStream.emit('error', error);
          });

          return requestStream;
        };

        util.makeRequest(reqOpts, { stream: userStream });
      });

      describe('GET requests', function() {
        it('should use retryRequest', function(done) {
          var userStream = duplexify();

          retryRequestOverride = function(reqOpts_) {
            assert.strictEqual(reqOpts_, reqOpts);
            setImmediate(done);
            return new stream.Stream();
          };

          util.makeRequest(reqOpts, { stream: userStream });
        });

        it('should set the readable stream', function(done) {
          var userStream = duplexify();
          var retryRequestStream = new stream.Stream();

          retryRequestOverride = function() {
            return retryRequestStream;
          };

          userStream.setReadable = function(stream) {
            assert.strictEqual(stream, retryRequestStream);
            done();
          };

          util.makeRequest(reqOpts, { stream: userStream });
        });

        it('should expose the abort method from retryRequest', function(done) {
          var userStream = duplexify();

          retryRequestOverride = function() {
            var requestStream = new stream.Stream();
            requestStream.abort = done;
            return requestStream;
          };

          util.makeRequest(reqOpts, { stream: userStream });
          userStream.abort();
        });
      });

      describe('non-GET requests', function() {
        it('should not use retryRequest', function(done) {
          var userStream = duplexify();
          var reqOpts = {
            method: 'POST'
          };

          retryRequestOverride = done; // will throw.
          requestOverride = function(reqOpts_) {
            assert.strictEqual(reqOpts_, reqOpts);
            setImmediate(done);
            return userStream;
          };

          util.makeRequest(reqOpts, { stream: userStream });
        });

        it('should set the writable stream', function(done) {
          var userStream = duplexify();
          var requestStream = new stream.Stream();

          requestOverride = function() {
            return requestStream;
          };

          userStream.setWritable = function(stream) {
            assert.strictEqual(stream, requestStream);
            done();
          };

          util.makeRequest({ method: 'POST' }, { stream: userStream });
        });

        it('should expose the abort method from request', function(done) {
          var userStream = duplexify();

          requestOverride = function() {
            var requestStream = duplexify();
            requestStream.abort = done;
            return requestStream;
          };

          util.makeRequest(reqOpts, { stream: userStream });
          userStream.abort();
        });
      });
    });

    describe('callback mode', function() {
      it('should optionally accept config', function(done) {
        retryRequestOverride = testDefaultRetryRequestConfig(done);
        util.makeRequest(reqOpts, assert.ifError);
      });

      it('should pass the default options to retryRequest', function(done) {
        retryRequestOverride = testDefaultRetryRequestConfig(done);
        util.makeRequest(reqOpts, {}, assert.ifError);
      });

      it('should allow turning off retries to retryRequest', function(done) {
        retryRequestOverride = testNoRetryRequestConfig(done);
        util.makeRequest(reqOpts, noRetryRequestConfig, assert.ifError);
      });

      it('should override number of retries to retryRequest', function(done) {
        retryRequestOverride = testCustomRetryRequestConfig(done);
        util.makeRequest(reqOpts, customRetryRequestConfig, assert.ifError);
      });

      it('should let handleResp handle the response', function(done) {
        var error = new Error('Error.');
        var response = { a: 'b', c: 'd' };
        var body = response.a;

        requestOverride = function(rOpts, callback) {
          callback(error, response, body);
        };

        utilOverrides.handleResp = function(err, resp, body_) {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, response);
          assert.strictEqual(body_, body);
          done();
        };

        util.makeRequest({}, {}, assert.ifError);
      });
    });
  });

  describe('decorateRequest', function() {
    it('should delete qs.autoPaginate', function() {
      var decoratedReqOpts = util.decorateRequest({
        autoPaginate: true
      });

      assert.strictEqual(decoratedReqOpts.autoPaginate, undefined);
    });

    it('should delete qs.autoPaginateVal', function() {
      var decoratedReqOpts = util.decorateRequest({
        autoPaginateVal: true
      });

      assert.strictEqual(decoratedReqOpts.autoPaginateVal, undefined);
    });

    it('should delete objectMode', function() {
      var decoratedReqOpts = util.decorateRequest({
        objectMode: true
      });

      assert.strictEqual(decoratedReqOpts.objectMode, undefined);
    });

    it('should delete qs.autoPaginate', function() {
      var decoratedReqOpts = util.decorateRequest({
        qs: {
          autoPaginate: true
        }
      });

      assert.strictEqual(decoratedReqOpts.qs.autoPaginate, undefined);
    });

    it('should delete qs.autoPaginateVal', function() {
      var decoratedReqOpts = util.decorateRequest({
        qs: {
          autoPaginateVal: true
        }
      });

      assert.strictEqual(decoratedReqOpts.qs.autoPaginateVal, undefined);
    });

    it('should delete json.autoPaginate', function() {
      var decoratedReqOpts = util.decorateRequest({
        json: {
          autoPaginate: true
        }
      });

      assert.strictEqual(decoratedReqOpts.json.autoPaginate, undefined);
    });

    it('should delete json.autoPaginateVal', function() {
      var decoratedReqOpts = util.decorateRequest({
        json: {
          autoPaginateVal: true
        }
      });

      assert.strictEqual(decoratedReqOpts.json.autoPaginateVal, undefined);
    });

    it('should decorate the request', function() {
      var config = {
        projectId: 'project-id'
      };
      var reqOpts = {};
      var decoratedReqOpts = {};

      utilOverrides.replaceProjectIdToken = function(reqOpts_, projectId) {
        assert.strictEqual(reqOpts_, reqOpts);
        assert.strictEqual(projectId, config.projectId);
        return decoratedReqOpts;
      };

      assert.strictEqual(
        util.decorateRequest(reqOpts, config),
        decoratedReqOpts
      );
    });
  });

  describe('projectId placeholder', function() {
    var PROJECT_ID = 'project-id';

    it('should replace any {{projectId}} it finds', function() {
      assert.deepEqual(util.replaceProjectIdToken({
        here: 'A {{projectId}} Z',
        nested: {
          here: 'A {{projectId}} Z',
          nested: {
            here: 'A {{projectId}} Z'
          }
        },
        array: [
          {
            here: 'A {{projectId}} Z',
            nested: {
              here: 'A {{projectId}} Z'
            },
            nestedArray: [
              {
                here: 'A {{projectId}} Z',
                nested: {
                  here: 'A {{projectId}} Z'
                }
              }
            ]
          }
        ]
      }, PROJECT_ID),
      {
        here: 'A ' + PROJECT_ID + ' Z',
        nested: {
          here: 'A ' + PROJECT_ID + ' Z',
          nested: {
            here: 'A ' + PROJECT_ID + ' Z'
          }
        },
        array: [
          {
            here: 'A ' + PROJECT_ID + ' Z',
            nested: {
              here: 'A ' + PROJECT_ID + ' Z'
            },
            nestedArray: [
              {
                here: 'A ' + PROJECT_ID + ' Z',
                nested: {
                  here: 'A ' + PROJECT_ID + ' Z'
                }
              }
            ]
          }
        ]
      });
    });

    it('should replace more than one {{projectId}}', function() {
      assert.deepEqual(util.replaceProjectIdToken({
        here: 'A {{projectId}} M {{projectId}} Z',
      }, PROJECT_ID),
      {
        here: 'A ' + PROJECT_ID + ' M ' + PROJECT_ID + ' Z'
      });
    });

    it('should throw if it needs a projectId and cannot find it', function() {
      assert.throws(function() {
        util.replaceProjectIdToken({
          here: '{{projectId}}'
        });
      }, new RegExp(util.missingProjectIdError));
    });
  });

  describe('normalizeArguments', function() {
    var fakeContext = {
      config_: {
        projectId: 'grapespaceship911'
      }
    };

    it('should return an extended object', function() {
      var local = { a: 'b' };
      var config;

      utilOverrides.extendGlobalConfig = function(globalConfig, localConfig) {
        assert.strictEqual(globalConfig, fakeContext.config_);
        assert.strictEqual(localConfig, local);
        return fakeContext.config_;
      };

      config = util.normalizeArguments(fakeContext, local);
      assert.strictEqual(config, fakeContext.config_);
    });
  });

  describe('createLimiter', function() {
    function REQUEST_FN() {}
    var OPTIONS = {};

    it('should create an object stream with stream-events', function(done) {
      streamEventsOverride = function(stream) {
        assert.strictEqual(stream._readableState.objectMode, true);
        setImmediate(done);
        return stream;
      };

      util.createLimiter(REQUEST_FN, OPTIONS);
    });

    it('should return a makeRequest function', function() {
      var limiter = util.createLimiter(REQUEST_FN, OPTIONS);
      assert(is.fn(limiter.makeRequest));
    });

    it('should return the created stream', function() {
      var streamEventsStream = {};

      streamEventsOverride = function() {
        return streamEventsStream;
      };

      var limiter = util.createLimiter(REQUEST_FN, OPTIONS);
      assert.strictEqual(limiter.stream, streamEventsStream);
    });

    describe('makeRequest', function() {
      it('should pass arguments to request method', function(done) {
        var args = [{}, {}];

        var limiter = util.createLimiter(function(obj1, obj2) {
          assert.strictEqual(obj1, args[0]);
          assert.strictEqual(obj2, args[1]);
          done();
        });

        limiter.makeRequest.apply(null, args);
      });

      it('should not make more requests than the limit', function(done) {
        var callsMade = 0;
        var maxApiCalls = 10;

        var limiter = util.createLimiter(function() {
          callsMade++;
          limiter.makeRequest();
        }, {
          maxApiCalls: maxApiCalls
        });

        limiter.makeRequest();

        limiter.stream
          .on('data', util.noop)
          .on('end', function() {
            assert.strictEqual(callsMade, maxApiCalls);
            done();
          });
      });
    });
  });

  describe('isCustomType', function() {
    function PubSub() {}

    function MiddleLayer() {
      this.parent = new PubSub();
    }

    function Subscription() {
      this.parent = new MiddleLayer();
    }

    var pubsub = new PubSub();
    var subscription = new Subscription();

    describe('Service objects', function() {
      it('should match by constructor name', function() {
        assert(util.isCustomType(pubsub, 'pubsub'));
      });

      it('should support any casing', function() {
        assert(util.isCustomType(pubsub, 'PubSub'));
      });

      it('should not match if the wrong Service', function() {
        assert(!util.isCustomType(subscription, 'BigQuery'));
      });
    });

    describe('ServiceObject objects', function() {
      it('should match by constructor names', function() {
        assert(util.isCustomType(subscription, 'pubsub'));
        assert(util.isCustomType(subscription, 'pubsub/subscription'));

        assert(util.isCustomType(subscription, 'middlelayer'));
        assert(util.isCustomType(subscription, 'middlelayer/subscription'));
      });

      it('should support any casing', function() {
        assert(util.isCustomType(subscription, 'PubSub/Subscription'));
      });

      it('should not match if the wrong ServiceObject', function() {
        assert(!util.isCustomType(subscription, 'pubsub/topic'));
      });
    });
  });

  describe('getUserAgentFromPackageJson', function() {
    it('should format a User Agent string from a package.json', function() {
      var userAgent = util.getUserAgentFromPackageJson({
        name: '@google-cloud/storage',
        version: '0.1.0'
      });

      assert.strictEqual(userAgent, 'gcloud-node-storage/0.1.0');
    });
  });

  describe('promisifyAll', function() {
    var fakeArgs = [null, 1, 2, 3];
    var fakeError = new Error('err.');

    var FakeClass;
    var instance;
    var context;

    beforeEach(function() {
      context = null;

      FakeClass = function() {};

      FakeClass.prototype.methodName = function(callback) {
        context = this;
        callback.apply(null, fakeArgs);
      };

      FakeClass.prototype.methodSingle = function(callback) {
        context = this;
        callback(null, fakeArgs[1]);
      };

      FakeClass.prototype.methodError = function(callback) {
        context = this;
        callback(fakeError);
      };

      FakeClass.prototype.method_ = util.noop;
      FakeClass.prototype._method = util.noop;
      FakeClass.prototype.methodStream = util.noop;
      FakeClass.prototype.promise = util.noop;

      util.promisifyAll(FakeClass);
      instance = new FakeClass();
    });

    it('should promisify the correct method', function() {
      assert(FakeClass.prototype.methodName.promisified_);
      assert(FakeClass.prototype.methodSingle.promisified_);
      assert(FakeClass.prototype.methodError.promisified_);

      assert.strictEqual(FakeClass.prototype.method_, util.noop);
      assert.strictEqual(FakeClass.prototype._method, util.noop);
      assert.strictEqual(FakeClass.prototype.methodStream, util.noop);
      assert.strictEqual(FakeClass.prototype.promise, util.noop);
    });

    it('should optionally except an exclude list', function() {
      function FakeClass2() {}

      FakeClass2.prototype.methodSync = util.noop;
      FakeClass2.prototype.method = function() {};

      util.promisifyAll(FakeClass2, {
        exclude: ['methodSync']
      });

      assert.strictEqual(FakeClass2.prototype.methodSync, util.noop);
      assert(FakeClass2.prototype.method.promisified_);
    });

    it('should pass the options object to promisify', function(done) {
      var promisify = util.promisify;
      var fakeOptions = {
        a: 'a'
      };

      util.promisify = function(method, options) {
        assert.strictEqual(method, FakeClass2.prototype.method);
        assert.strictEqual(options, fakeOptions);
        util.promisify = promisify;
        done();
      };

      function FakeClass2() {}
      FakeClass2.prototype.method = function() {};

      util.promisifyAll(FakeClass2, fakeOptions);
    });

    it('should not re-promisify methods', function() {
      var method = FakeClass.prototype.methodName;

      util.promisifyAll(FakeClass);

      assert.strictEqual(FakeClass.prototype.methodName, method);
    });
  });

  describe('promisify', function() {
    var fakeContext = {};
    var func;
    var fakeArgs;

    beforeEach(function() {
      fakeArgs = [null, 1, 2, 3];

      func = util.promisify(function(callback) {
        callback.apply(this, fakeArgs);
      });
    });

    it('should not re-promisify the function', function() {
      var original = func;

      func = util.promisify(func);

      assert.strictEqual(original, func);
    });

    it('should not return a promise in callback mode', function(done) {
      var returnVal = func.call(fakeContext, function() {
        var args = [].slice.call(arguments);

        assert.deepEqual(args, fakeArgs);
        assert.strictEqual(this, fakeContext);
        assert(!returnVal);
        done();
      });
    });

    it('should return a promise when the callback is omitted', function() {
      return func().then(function(args) {
        assert.deepEqual(args, fakeArgs.slice(1));
      });
    });

    it('should reject the promise on a failed request', function() {
      var error = new Error('err');

      fakeArgs = [error];

      return func().then(function() {
        throw new Error('Should have gone to failure block');
      }, function(err) {
        assert.strictEqual(err, error);
      });
    });

    it('should allow the Promise object to be overridden', function() {
      var FakePromise = function() {};
      var promise = func.call({ Promise: FakePromise });

      assert(promise instanceof FakePromise);
    });

    it('should resolve singular arguments', function() {
      var fakeArg = 'hi';

      func = util.promisify(function(callback) {
        callback.apply(this, [null, fakeArg]);
      }, {
        singular: true
      });

      return func().then(function(arg) {
        assert.strictEqual(arg, fakeArg);
      });
    });

    it('should ignore singular when multiple args are present', function() {
      var fakeArgs = ['a', 'b'];

      func = util.promisify(function(callback) {
        callback.apply(this, [null].concat(fakeArgs));
      }, {
        singular: true
      });

      return func().then(function(args) {
        assert.deepEqual(args, fakeArgs);
      });
    });
  });
});
