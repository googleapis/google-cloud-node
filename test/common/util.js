/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/*global describe, it, beforeEach, before, after */

'use strict';

var assert = require('assert');
var duplexify = require('duplexify');
var extend = require('extend');
var googleAuthLibrary = require('google-auth-library');
var mockery = require('mockery');
var request = require('request');
var retryRequest = require('retry-request');
var stream = require('stream');
var streamForward = require('stream-forward');

var googleAuthLibraryOverride;
function fakeGoogleAuthLibrary() {
  return (googleAuthLibraryOverride || googleAuthLibrary)
    .apply(null, arguments);
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

var streamForwardOverride;
function fakeStreamForward() {
  return (streamForwardOverride || streamForward).apply(null, arguments);
}

describe('common/util', function() {
  var util;
  var utilOverrides = {};

  before(function() {
    mockery.registerMock('google-auth-library', fakeGoogleAuthLibrary);
    mockery.registerMock('request', fakeRequest);
    mockery.registerMock('retry-request', fakeRetryRequest);
    mockery.registerMock('stream-forward', fakeStreamForward);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    util = require('../../lib/common/util');
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
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    googleAuthLibraryOverride = null;
    requestOverride = null;
    retryRequestOverride = null;
    streamForwardOverride = null;
    utilOverrides = {};
  });

  it('should have set correct defaults on Request', function() {
    assert.deepEqual(REQUEST_DEFAULT_CONF, { pool: { maxSockets: Infinity } });
  });

  it('should export an error for module instantiation errors', function() {
    var missingProjectIdError = new Error([
      'Sorry, we cannot connect to Google Cloud Services without a project ID.',
      'See https://googlecloudplatform.github.io/gcloud-node/#/authorization',
      'for a detailed guide on creating an authorized connection.'
    ].join(' '));

    assert.deepEqual(util.missingProjectIdError, missingProjectIdError);
  });

  describe('arrayize', function() {
    it('should arrayize if the input is not an array', function() {
      assert.deepEqual(util.arrayize('text'), ['text']);
    });

    it('should return the same array if given an array', function() {
      var arr = [1, 2, 3];
      assert.deepEqual(util.arrayize(arr), arr);
    });

    it('should return an empty array in correct circumstance', function() {
      assert.deepEqual(util.arrayize(undefined), []);
      assert.deepEqual(util.arrayize(null), []);

      assert.deepEqual(util.arrayize(false), [false]);
      assert.deepEqual(util.arrayize(0), [0]);
    });
  });

  describe('extendGlobalConfig', function() {
    it('should favor `keyFilename` when `credentials` is global', function() {
      var globalConfig = { credentials: {} };
      var options = util.extendGlobalConfig(globalConfig, {
        keyFilename: 'key.json'
      });
      assert.deepEqual(options, { keyFilename: 'key.json' });
    });

    it('should favor `credentials` when `keyFilename` is global', function() {
      var globalConfig = { keyFilename: 'key.json' };
      var options = util.extendGlobalConfig(globalConfig, { credentials: {} });
      assert.deepEqual(options, { credentials: {} });
    });

    it('should not modify original object', function() {
      var globalConfig = { keyFilename: 'key.json' };
      util.extendGlobalConfig(globalConfig, { credentials: {} });
      assert.deepEqual(globalConfig, { keyFilename: 'key.json' });
    });
  });

  describe('handleResp', function() {
    it('should handle errors', function(done) {
      var error = new Error('Error.');

      util.handleResp(error, null, null, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should parse response', function(done) {
      var resp = { a: 'b', c: 'd' };
      var body = { a: 'b', c: 'd' };

      var returnedBody = { a: 'b', c: 'd' };
      var returnedResp = { a: 'b', c: 'd' };

      utilOverrides.parseApiResp = function(resp_, body_) {
        assert.strictEqual(resp_, resp);
        assert.strictEqual(body_, body);

        return {
          err: null,
          body: returnedBody,
          resp: returnedResp
        };
      };

      util.handleResp(null, resp, body, function(err, body, resp) {
        assert.ifError(err);
        assert.strictEqual(body, returnedBody);
        assert.strictEqual(resp, returnedResp);
        done();
      });
    });

    it('should parse response for error', function(done) {
      var error = new Error('Error.');

      utilOverrides.parseApiResp = function() {
        return { err: error };
      };

      util.handleResp(null, {}, {}, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('parseApiResp', function() {
    it('should return err code if there are not other errors', function() {
      var parsedApiResp = util.parseApiResp({ statusCode: 400 });

      assert.strictEqual(parsedApiResp.err.code, 400);
      assert.strictEqual(parsedApiResp.err.message, 'Error during request.');
    });

    it('should detect body errors', function() {
      var apiErr = {
        errors: [{ foo: 'bar' }],
        code: 400,
        message: 'an error occurred'
      };

      var parsedApiResp = util.parseApiResp({}, { error: apiErr });

      assert.deepEqual(parsedApiResp.err.errors, apiErr.errors);
      assert.strictEqual(parsedApiResp.err.code, apiErr.code);
      assert.deepEqual(parsedApiResp.err.message, apiErr.message);
    });

    it('should try to parse JSON if body is string', function() {
      var body = '{ "foo": "bar" }';

      var parsedApiResp = util.parseApiResp({}, body);

      assert.strictEqual(parsedApiResp.body.foo, 'bar');
    });
  });

  describe('makeWritableStream', function() {
    it('should use defaults', function(done) {
      var dup = duplexify();
      util.makeWritableStream(dup, {
        makeAuthorizedRequest: function(request) {
          assert.equal(request.method, 'POST');
          assert.equal(request.qs.uploadType, 'multipart');

          var contentType = request.headers['Content-Type'];
          assert.equal(contentType.indexOf('multipart/related'), 0);
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
        makeAuthorizedRequest: function(request) {
          assert.equal(request.method, req.method);
          assert.deepEqual(request.qs, req.qs);
          assert.equal(request.something, req.something);
          done();
        },

        request: req
      });
    });

    it('should emit an error', function(done) {
      var error = new Error('Error.');

      var ws = new stream.Writable();
      ws.on('error', function(err) {
        assert.equal(err, error);
        done();
      });

      util.makeWritableStream(ws, {
        makeAuthorizedRequest: function(request, opts) {
          opts.onAuthorized(error);
        }
      });
    });

    it('should write request', function(done) {
      var dup = duplexify();
      var boundary;
      var metadata = { a: 'b', c: 'd' };

      requestOverride = function() {
        var written = [];

        var req = duplexify();

        req.write = function(data) {
          written.push(data);
        };

        req.end = function() {
          var boundaryLine = '--' + boundary + '\n';

          var startFirstBoundaryIdx = written.indexOf(boundaryLine);
          var endFirstBoundaryIdx = written.lastIndexOf(boundaryLine);
          var endBoundaryIdx = written.indexOf('\n--' + boundary + '--\n');

          assert(startFirstBoundaryIdx > -1);
          assert(endFirstBoundaryIdx > startFirstBoundaryIdx);
          assert(endBoundaryIdx > -1);

          assert(written.indexOf(JSON.stringify(metadata)) > -1);

          done();
        };

        setImmediate(function() {
          req.end();
        });

        return req;
      };

      util.makeWritableStream(dup, {
        metadata: metadata,

        makeAuthorizedRequest: function(request, opts) {
          var contentType = request.headers['Content-Type'];
          boundary = contentType.match(/boundary="([^"]*)/)[1];
          opts.onAuthorized();
        }
      });
    });

    it('should set the writable stream', function(done) {
      var dup = duplexify();
      var ws = new stream.Writable();
      ws.write = function() {};

      requestOverride = function() {
        return ws;
      };

      dup.setWritable = function(writable) {
        assert.equal(writable, ws);
        done();
      };

      util.makeWritableStream(dup, {
        makeAuthorizedRequest: function(request, opts) {
          opts.onAuthorized();
        }
      });
    });

    it('should keep the pipe open on the stream', function(done) {
      var dup = duplexify();
      var ws = new stream.Writable();
      ws.write = function() {};

      requestOverride = function() {
        return ws;
      };

      dup.pipe = function(writable) {
        assert.equal(writable, ws);
        done();
      };

      util.makeWritableStream(dup, {
        makeAuthorizedRequest: function(request, opts) {
          opts.onAuthorized();
        }
      });
    });
  });

  describe('getAuthClient', function() {
    it('should use google-auth-library', function() {
      var googleAuthLibraryCalled = false;

      googleAuthLibraryOverride = function() {
        googleAuthLibraryCalled = true;
        return {
          getApplicationDefault: util.noop
        };
      };

      util.getAuthClient({});

      assert.strictEqual(googleAuthLibraryCalled, true);
    });

    it('should create a JWT auth client from a keyFile', function(done) {
      var jwt = {};

      googleAuthLibraryOverride = function() {
        return {
          JWT: function() { return jwt; }
        };
      };

      var config = {
        keyFile: 'key.json',
        email: 'example@example.com',
        scopes: ['dev.scope']
      };

      util.getAuthClient(config, function(err, authClient) {
        assert.ifError(err);

        assert.equal(jwt.keyFile, config.keyFile);
        assert.equal(jwt.email, config.email);
        assert.deepEqual(jwt.scopes, config.scopes);

        assert.deepEqual(authClient, jwt);

        done();
      });
    });

    it('should create an auth client from credentials', function(done) {
      var credentialsSet;

      googleAuthLibraryOverride = function() {
        return {
          fromJSON: function(credentials, callback) {
            credentialsSet = credentials;
            callback(null, {});
          }
        };
      };

      var config = {
        credentials: { a: 'b', c: 'd' }
      };

      util.getAuthClient(config, function() {
        assert.deepEqual(credentialsSet, config.credentials);
        done();
      });
    });

    it('should create an auth client from magic', function(done) {
      googleAuthLibraryOverride = function() {
        return {
          getApplicationDefault: function(callback) {
            callback(null, {});
          }
        };
      };

      util.getAuthClient({}, done);
    });

    it('should scope an auth client if necessary', function(done) {
      var config = {
        scopes: ['a.scope', 'b.scope']
      };

      var fakeAuthClient = {
        createScopedRequired: function() {
          return true;
        },
        createScoped: function(scopes) {
          assert.deepEqual(scopes, config.scopes);
          return fakeAuthClient;
        },
        getAccessToken: function() {}
      };

      googleAuthLibraryOverride = function() {
        return {
          getApplicationDefault: function(callback) {
            callback(null, fakeAuthClient);
          }
        };
      };

      util.getAuthClient(config, done);
    });
  });

  describe('authorizeRequest', function() {
    it('should get an auth client', function(done) {
      var config = { a: 'b', c: 'd' };

      utilOverrides.getAuthClient = function(cfg) {
        assert.deepEqual(cfg, config);
        done();
      };

      util.authorizeRequest(config);
    });

    it('should ignore "Could not load" error from google-auth', function(done) {
      var reqOpts = { a: 'b', c: 'd' };
      var couldNotLoadError = new Error('Could not load');

      utilOverrides.getAuthClient = function(config, callback) {
        callback(couldNotLoadError);
      };

      util.authorizeRequest({}, reqOpts, function(err, authorizedReqOpts) {
        assert.ifError(err);
        assert.deepEqual(reqOpts, authorizedReqOpts);
        done();
      });
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('Error.');

      utilOverrides.getAuthClient = function(config, callback) {
        callback(error);
      };

      util.authorizeRequest({}, {}, function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should get an access token', function(done) {
      var fakeAuthClient = {
        getAccessToken: function() {
          done();
        }
      };

      utilOverrides.getAuthClient = function(config, callback) {
        callback(null, fakeAuthClient);
      };

      util.authorizeRequest();
    });

    it('should return an access token error to callback', function(done) {
      var error = new Error('Error.');

      var fakeAuthClient = {
        getAccessToken: function(callback) {
          callback(error);
        }
      };

      utilOverrides.getAuthClient = function(config, callback) {
        callback(null, fakeAuthClient);
      };

      util.authorizeRequest({}, {}, function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should extend the request options with token', function(done) {
      var token = 'abctoken';

      var reqOpts = {
        uri: 'a',
        headers: {
          a: 'b',
          c: 'd'
        }
      };

      var expectedAuthorizedReqOpts = extend(true, {}, reqOpts, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      var fakeAuthClient = {
        getAccessToken: function(callback) {
          callback(null, token);
        }
      };

      utilOverrides.getAuthClient = function(config, callback) {
        callback(null, fakeAuthClient);
      };

      util.authorizeRequest({}, reqOpts, function(err, authorizedReqOpts) {
        assert.ifError(err);

        assert.deepEqual(authorizedReqOpts, expectedAuthorizedReqOpts);

        done();
      });
    });
  });

  describe('makeAuthorizedRequestFactory', function() {
    it('should return a function', function() {
      assert.equal(typeof util.makeAuthorizedRequestFactory(), 'function');
    });

    describe('customEndpoint (no authorization attempted)', function() {
      var makeAuthorizedRequest;

      beforeEach(function() {
        makeAuthorizedRequest = util.makeAuthorizedRequestFactory({
          customEndpoint: true
        });
      });

      it('should pass options back to onAuthorized callback', function(done) {
        var reqOpts = { a: 'b', c: 'd' };

        makeAuthorizedRequest(reqOpts, {
          onAuthorized: function(err, authorizedReqOpts) {
            assert.ifError(err);
            assert.deepEqual(reqOpts, authorizedReqOpts);
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

        makeAuthorizedRequest(reqOpts, assert.ifError);
      });
    });

    describe('needs authorization', function() {
      it('should pass correct arguments to authorizeRequest', function(done) {
        var config = { a: 'b', c: 'd' };
        var reqOpts = { e: 'f', g: 'h' };

        utilOverrides.authorizeRequest = function(cfg, rOpts) {
          assert.deepEqual(cfg, config);
          assert.deepEqual(rOpts, reqOpts);
          done();
        };

        var makeAuthorizedRequest = util.makeAuthorizedRequestFactory(config);
        makeAuthorizedRequest(reqOpts, {});
      });

      it('should return a stream if callback is missing', function() {
        utilOverrides.authorizeRequest = function() {};

        var makeAuthorizedRequest = util.makeAuthorizedRequestFactory({});
        assert(makeAuthorizedRequest({}) instanceof stream.Stream);
      });

      it('should provide stream to authorizeRequest', function(done) {
        var stream;

        utilOverrides.authorizeRequest = function(cfg) {
          setImmediate(function() {
            assert.strictEqual(cfg.stream, stream);
            done();
          });
        };

        var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
        stream = makeAuthorizedRequest();
      });

      describe('authorization errors', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          utilOverrides.authorizeRequest = function(cfg, rOpts, callback) {
            setImmediate(function() {
              callback(error);
            });
          };
        });

        it('should invoke the callback with error', function(done) {
          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
          makeAuthorizedRequest({}, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });

        it('should invoke the onAuthorized handler with error', function(done) {
          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
          makeAuthorizedRequest({}, {
            onAuthorized: function(err) {
              assert.strictEqual(err, error);
              done();
            }
          });
        });

        it('should emit an error and end the stream', function(done) {
          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
          makeAuthorizedRequest({}).on('error', function(err) {
            assert.strictEqual(err, error);

            var stream = this;
            setImmediate(function() {
              assert.strictEqual(stream._readableState.ended, true);
              done();
            });
          });
        });
      });

      describe('authorization success', function() {
        var reqOpts = { a: 'b', c: 'd' };

        beforeEach(function() {
          utilOverrides.authorizeRequest = function(cfg, rOpts, callback) {
            callback(null, rOpts);
          };
        });

        it('should return the authorized request to callback', function(done) {
          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
          makeAuthorizedRequest(reqOpts, {
            onAuthorized: function(err, authorizedReqOpts) {
              assert.deepEqual(authorizedReqOpts, reqOpts);
              done();
            }
          });
        });

        it('should make request with correct options', function(done) {
          var config = { a: 'b', c: 'd' };

          utilOverrides.makeRequest = function(authorizedReqOpts, cfg, cb) {
            assert.deepEqual(authorizedReqOpts, reqOpts);
            assert.deepEqual(cfg, config);
            cb();
          };

          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory(config);
          makeAuthorizedRequest(reqOpts, done);
        });

        it('should provide stream to makeRequest', function(done) {
          var stream;

          utilOverrides.makeRequest = function(authorizedReqOpts, cfg) {
            setImmediate(function() {
              assert.strictEqual(cfg.stream, stream);
              done();
            });
          };

          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory({});
          stream = makeAuthorizedRequest(reqOpts);
        });
      });
    });

    describe('getCredentials', function() {
      var fakeAuthClient = {
        email: 'fake-email@example.com',
        key: 'fake-key',

        authorize: function(callback) { callback(); }
      };
      var config = { a: 'b', c: 'd' };

      it('should return getCredentials method', function() {
        utilOverrides.getAuthClient = function(config, callback) {
          callback(null, fakeAuthClient);
        };

        var makeAuthorizedRequest =
          util.makeAuthorizedRequestFactory(config, assert.ifError);

        assert.equal(typeof makeAuthorizedRequest.getCredentials, 'function');
      });

      it('should pass config to getAuthClient', function(done) {
        utilOverrides.getAuthClient = function(cfg) {
          assert.deepEqual(cfg, config);
          done();
        };

        var makeAuthorizedRequest =
          util.makeAuthorizedRequestFactory(config, assert.ifError);

        makeAuthorizedRequest.getCredentials();
      });

      it('should execute callback with error', function(done) {
        var error = new Error('Error.');

        utilOverrides.getAuthClient = function(config, callback) {
          callback(error);
        };

        var makeAuthorizedRequest =
          util.makeAuthorizedRequestFactory(config, assert.ifError);

        makeAuthorizedRequest.getCredentials(function(err) {
          assert.deepEqual(err, error);
          done();
        });
      });

      it('should authorize the connection', function(done) {
        fakeAuthClient.authorize = function(callback) {
          callback();
        };

        utilOverrides.getAuthClient = function(config, callback) {
          callback(null, fakeAuthClient);
        };

        var makeAuthorizedRequest =
          util.makeAuthorizedRequestFactory(config, assert.ifError);

        makeAuthorizedRequest.getCredentials(done);
      });


      it('should execute callback with authorization error', function(done) {
        var error = new Error('Error.');

        fakeAuthClient.authorize = function(cb) {
          cb(error);
        };

        utilOverrides.getAuthClient = function(config, callback) {
          callback(null, fakeAuthClient);
        };

        var makeAuthorizedRequest =
          util.makeAuthorizedRequestFactory(config, assert.ifError);

        makeAuthorizedRequest.getCredentials(function(err) {
          assert.deepEqual(err, error);
          done();
        });
      });

      it('should exec callback with client_email & client_key', function(done) {
        fakeAuthClient.authorize = function(callback) {
          callback();
        };

        utilOverrides.getAuthClient = function(config, callback) {
          callback(null, fakeAuthClient);
        };

        var makeAuthorizedRequest =
          util.makeAuthorizedRequestFactory(config, assert.ifError);

        makeAuthorizedRequest.getCredentials(function(err, credentials) {
          assert.deepEqual(credentials, {
            client_email: fakeAuthClient.email,
            private_key: fakeAuthClient.key
          });

          done();
        });
      });
    });
  });

  describe('prop', function() {
    it('should return objects that match the property name', function() {
      var people = [
        { name: 'Stephen', origin: 'USA', beenToNYC: false },
        { name: 'Ryan', origin: 'Canada', beenToNYC: true }
      ];

      assert.deepEqual(people.map(util.prop('name')), ['Stephen', 'Ryan']);
      assert.deepEqual(people.filter(util.prop('beenToNYC')), [people[1]]);
    });
  });

  describe('propAssign', function() {
    it('should assign a property and value to an object', function() {
      var obj = {};
      util.propAssign('prop', 'value')(obj);
      assert.equal(obj.prop, 'value');
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
    var PKG = require('../../package.json');
    var USER_AGENT = 'gcloud-node/' + PKG.version;
    var reqOpts = { a: 'b', c: 'd' };
    var expectedReqOpts = extend(true, {}, reqOpts, {
      headers: {
        'User-Agent': USER_AGENT
      }
    });

    function testDefaultRetryRequestConfig(done) {
      return function(reqOpts, config) {
        assert.deepEqual(reqOpts, expectedReqOpts);
        assert.equal(config.retries, 3);
        assert.strictEqual(config.request, fakeRequest);

        var error = new Error('Error.');
        utilOverrides.parseApiResp = function() {
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

    it('should decorate the request', function(done) {
      var reqOpts = { a: 'b', c: 'd' };

      retryRequestOverride = util.noop;

      utilOverrides.decorateRequest = function(reqOpts_) {
        assert.strictEqual(reqOpts_, reqOpts);
        done();
      };

      util.makeRequest(reqOpts, {}, assert.ifError);
    });

    describe('stream mode', function() {
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

      it('should forward the specified events to the stream', function(done) {
        var requestStream = new stream.Stream();
        var userStream = new stream.Stream();

        retryRequestOverride = function() {
          return requestStream;
        };

        streamForwardOverride = function(stream_) {
          assert.strictEqual(stream_, requestStream);
          done();
          return stream_;
        };

        util.makeRequest(reqOpts, { stream: userStream });
      });
    });

    describe('callback mode', function() {
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
    it('should add the user agent', function() {
      var PKG = require('../../package.json');
      var USER_AGENT = 'gcloud-node/' + PKG.version;

      var reqOpts = { a: 'b', c: 'd' };

      var expectedReqOpts = extend({}, reqOpts, {
        headers: {
          'User-Agent': USER_AGENT
        }
      });

      var decoratedReqOpts = util.decorateRequest(reqOpts);
      assert.deepEqual(decoratedReqOpts, expectedReqOpts);
    });

    it('should delete qs.autoPaginate', function() {
      var decoratedReqOpts = util.decorateRequest({
        qs: {
          autoPaginate: true
        }
      });

      assert.strictEqual(decoratedReqOpts.autoPaginate, undefined);
    });

    it('should delete qs.autoPaginateVal', function() {
      var decoratedReqOpts = util.decorateRequest({
        qs: {
          autoPaginateVal: true
        }
      });

      assert.strictEqual(decoratedReqOpts.autoPaginate, undefined);
    });

    it('should delete json.autoPaginate', function() {
      var decoratedReqOpts = util.decorateRequest({
        json: {
          autoPaginate: true
        }
      });

      assert.strictEqual(decoratedReqOpts.autoPaginate, undefined);
    });

    it('should delete json.autoPaginateVal', function() {
      var decoratedReqOpts = util.decorateRequest({
        json: {
          autoPaginateVal: true
        }
      });

      assert.strictEqual(decoratedReqOpts.autoPaginate, undefined);
    });
  });
});
