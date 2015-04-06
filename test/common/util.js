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
var stream = require('stream');

var googleAuthLibrary_Override;
function fakeGoogleAuthLibrary() {
  return (googleAuthLibrary_Override || googleAuthLibrary)
    .apply(null, arguments);
}

var request_Override;
function fakeRequest() {
  return (request_Override || request).apply(null, arguments);
}

describe('common/util', function() {
  var util;
  var utilOverrides = {};

  before(function() {
    mockery.registerMock('google-auth-library', fakeGoogleAuthLibrary);
    mockery.registerMock('request', fakeRequest);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    util = require('../../lib/common/util');
    var util_Cached = extend(true, {}, util);

    // Override all util methods, allowing them to be mocked. Overrides are
    // removed before each test.
    Object.keys(util).forEach(function(utilMethod) {
      util[utilMethod] = function() {
        return (utilOverrides[utilMethod] || util_Cached[utilMethod])
          .apply(this, arguments);
      };
    });
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    googleAuthLibrary_Override = null;
    request_Override = null;
    utilOverrides = {};
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
      var defaultErr = new Error('new error');
      util.handleResp(defaultErr, null, null, function(err) {
        assert.equal(err, defaultErr);
        done();
      });
    });

    it('should handle body errors', function(done) {
      var apiErr = {
        errors: [{ foo: 'bar' }],
        code: 400,
        message: 'an error occurred'
      };
      util.handleResp(null, {}, { error: apiErr }, function(err) {
        assert.deepEqual(err.errors, apiErr.errors);
        assert.strictEqual(err.code, apiErr.code);
        assert.deepEqual(err.message, apiErr.message);
        done();
      });
    });

    it('should try to parse JSON if body is string', function(done) {
      var body = '{ "foo": "bar" }';
      util.handleResp(null, {}, body, function(err, body) {
        assert.strictEqual(body.foo, 'bar');
        done();
      });
    });

    it('should return err code if there are not other errors', function(done) {
      util.handleResp(null, { statusCode: 400 }, null, function(err) {
        assert.strictEqual(err.code, 400);
        assert.strictEqual(err.message, 'Error during request.');
        done();
      });
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

      request_Override = function() {
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

      request_Override = function() {
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

      request_Override = function() {
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

      googleAuthLibrary_Override = function() {
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

      googleAuthLibrary_Override = function() {
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

      googleAuthLibrary_Override = function() {
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
      googleAuthLibrary_Override = function() {
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

      googleAuthLibrary_Override = function() {
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
        makeAuthorizedRequest(reqOpts);
      });

      describe('authorization errors', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          utilOverrides.authorizeRequest = function(cfg, rOpts, callback) {
            callback(error);
          };
        });

        it('should invoke the callback with error', function(done) {
          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
          makeAuthorizedRequest({}, function(err) {
            assert.deepEqual(err, error);
            done();
          });
        });

        it('should invoke the onAuthorized handler with error', function(done) {
          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory();
          makeAuthorizedRequest({}, {
            onAuthorized: function(err) {
              assert.deepEqual(err, error);
              done();
            }
          });
        });
      });

      describe('authorization success', function() {
        var reqOpts = { a: 'b', c: 'd' };

        it('should return the authorized request to callback', function(done) {
          utilOverrides.authorizeRequest = function(cfg, rOpts, callback) {
            callback(null, rOpts);
          };

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

          utilOverrides.authorizeRequest = function(cfg, rOpts, callback) {
            callback(null, rOpts);
          };

          utilOverrides.makeRequest = function(authorizedReqOpts, cfg, cb) {
            assert.deepEqual(authorizedReqOpts, reqOpts);
            assert.deepEqual(cfg, config);
            cb();
          };

          var makeAuthorizedRequest = util.makeAuthorizedRequestFactory(config);
          makeAuthorizedRequest(reqOpts, done);
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

  describe('getNextRetryWait', function() {
    function secs(seconds) {
      return seconds * 1000;
    }

    it('should return exponential retry delay', function() {
      [1, 2, 3, 4, 5].forEach(assertTime);

      function assertTime(retryNumber) {
        var min = (Math.pow(2, retryNumber) * secs(1));
        var max = (Math.pow(2, retryNumber) * secs(1)) + secs(1);

        var time = util.getNextRetryWait(retryNumber);

        assert(time >= min && time <= max);
      }
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

    it('should make a request', function(done) {
      request_Override = function() {
        done();
      };

      util.makeRequest({}, assert.ifError, {});
    });

    it('should add the user agent', function(done) {
      request_Override = function(rOpts) {
        assert.deepEqual(rOpts, expectedReqOpts);
        done();
      };

      util.makeRequest(reqOpts, assert.ifError, {});
    });

    it('should let handleResp handle the response', function(done) {
      var error = new Error('Error.');
      var response = { a: 'b', c: 'd' };
      var body = response.a;

      request_Override = function(rOpts, callback) {
        callback(error, response, body);
      };

      utilOverrides.handleResp = function(err, resp, bdy) {
        assert.deepEqual(err, error);
        assert.deepEqual(resp, response);
        assert.deepEqual(bdy, body);
        done();
      };

      util.makeRequest({}, {}, assert.ifError);
    });

    describe('request errors', function() {
      describe('non-rate limit error', function() {
        it('should return error to callback', function(done) {
          var nonRateLimitError = new Error('Error.');

          request_Override = function(reqOpts, callback) {
            callback(nonRateLimitError);
          };

          util.makeRequest({}, {}, function(err) {
            assert.deepEqual(err, nonRateLimitError);
            done();
          });
        });
      });

      describe('rate limit errors', function() {
        var rateLimitError = new Error('Rate limit error.');
        rateLimitError.code = 500;

        beforeEach(function() {
          // Always return a rate limit error.
          request_Override = function (reqOpts, callback) {
            callback(rateLimitError);
          };

          // Always suggest retrying.
          utilOverrides.shouldRetryRequest = function() {
            return true;
          };

          // Always return a 0 retry wait.
          utilOverrides.getNextRetryWait = function() {
            return 0;
          };
        });

        it('should check with shouldRetryRequest', function(done) {
          utilOverrides.shouldRetryRequest = function() {
            done();
          };

          util.makeRequest({}, {}, util.noop);
        });

        it('should default to 3 retries', function(done) {
          var attempts = 0;
          var expectedAttempts = 4; // the original request + 3 retries

          utilOverrides.handleResp = function(err, resp, body, callback) {
            attempts++;
            callback(err);
          };

          util.makeRequest({}, {}, function(err) {
            assert.equal(err, rateLimitError);
            assert.equal(attempts, expectedAttempts);
            done();
          });
        });

        it('should allow max retries to be specified', function(done) {
          var attempts = 0;
          var maxRetries = 5;
          var expectedAttempts = maxRetries + 1; // the original req

          utilOverrides.handleResp = function(err, resp, body, callback) {
            attempts++;
            callback(err);
          };

          util.makeRequest({}, { maxRetries: maxRetries }, function(err) {
            assert.equal(err, rateLimitError);
            assert.equal(attempts, expectedAttempts);
            done();
          });
        });

        it('should not retry reqs if autoRetry is false', function(done) {
          var attempts = 0;
          var expectedAttempts = 1; // the original req

          utilOverrides.handleResp = function(err, resp, body, callback) {
            attempts++;
            callback(err);
          };

          util.makeRequest({}, { autoRetry: false }, function(err) {
            assert.equal(err, rateLimitError);
            assert.equal(attempts, expectedAttempts);
            done();
          });
        });
      });
    });

    describe('request success', function() {
      it('should let handleResp handle response', function(done) {
        utilOverrides.handleResp = function() {
          done();
        };

        request_Override = function(reqOpts, callback) {
          callback();
        };

        util.makeRequest({}, {}, assert.ifError);
      });
    });
  });
});
