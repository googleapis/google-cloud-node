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

/*global describe, it */

'use strict';

var assert = require('assert');
var duplexify = require('duplexify');
var gsa = require('google-service-account');
var request = require('request');

var util = require('sandboxed-module')
  .require('../../lib/common/util', {
    requires: {
      'google-service-account': fakeGsa,
      request: fakeRequest
    }
  });

var gsa_Override;
function fakeGsa() {
  var args = [].slice.apply(arguments);
  var results = (gsa_Override || gsa).apply(null, args);
  gsa_Override = null;
  return results || { getCredentials: util.noop };
}

var request_Override;
function fakeRequest() {
  var args = [].slice.apply(arguments);
  var results = (request_Override || request).apply(null, args);
  request_Override = null;
  return results;
}

describe('common/util', function() {
  describe('arrayize', function() {
    it('should arrayize if the input is not an array', function(done) {
      var o = util.arrayize('text');
      assert.deepEqual(o, ['text']);
      done();
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

      var dup = duplexify();
      dup.on('error', function(err) {
        assert.equal(err, error);
        done();
      });

      util.makeWritableStream(dup, {
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
      var stream = duplexify();

      request_Override = function() {
        return stream;
      };

      dup.setWritable = function(writable) {
        assert.equal(writable, stream);
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
      var stream = duplexify();

      request_Override = function() {
        return stream;
      };

      dup.pipe = function(writable) {
        assert.equal(writable, stream);
        done();
      };

      util.makeWritableStream(dup, {
        makeAuthorizedRequest: function(request, opts) {
          opts.onAuthorized();
        }
      });
    });
  });

  describe('makeAuthorizedRequest', function() {
    it('should pass configuration to gsa', function(done) {
      var config = { keyFile: 'key', scopes: [1, 2] };

      gsa_Override = function(cfg) {
        assert.deepEqual(cfg, config);
        done();
      };

      util.makeAuthorizedRequest(config);
    });

    it('should return gsa.getCredentials function', function() {
      var getCredentials = util.makeAuthorizedRequest().getCredentials;
      assert.equal(typeof getCredentials, 'function');
    });

    describe('makeRequest', function() {
      it('should add a user agent onto headers', function(done) {
        gsa_Override = function() {
          return function authorize(reqOpts) {
            assert(reqOpts.headers['User-Agent'].indexOf('gcloud') > -1);
            done();
          };
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({});
      });

      it('should extend an existing user agent', function(done) {
        gsa_Override = function() {
          return function authorize(reqOpts) {
            var index = reqOpts.headers['User-Agent'].indexOf('test; gcloud');
            assert.equal(index, 0);
            done();
          };
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({ headers: { 'User-Agent': 'test' } });
      });

      it('should execute callback with error', function(done) {
        var error = new Error('Error.');

        gsa_Override = function() {
          return function authorize(reqOpts, callback) {
            callback(error);
          };
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({}, function(err) {
          assert.equal(err, error);
          done();
        });
      });

      it('should handle malformed key response', function(done) {
        var makeRequest = util.makeAuthorizedRequest({
          credentials: {
            client_email: 'invalid@email',
            private_key: 'invalid-key'
          }
        });

        makeRequest({}, function (err) {
          var errorMessage = [
            'Your private key is in an unexpected format and cannot be used.',
            'Please try again with another private key.'
          ].join(' ');
          assert.equal(err.message, errorMessage);
          done();
        });
      });

      it('should try to reconnect if token invalid', function(done) {
        var attempts = 0;
        var expectedAttempts = 2;
        var error = { code: 401 };

        gsa_Override = function() {
          return function authorize(reqOpts, callback) {
            attempts++;
            callback(error);
          };
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({}, function (err) {
          assert.equal(attempts, expectedAttempts);
          assert.equal(err, error);
          done();
        });
      });

      it('should execute the onauthorized callback', function(done) {
        gsa_Override = function() {
          return function authorize(reqOpts, callback) {
            callback();
          };
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({}, { onAuthorized: done });
      });

      it('should execute the onauthorized callback with error', function(done) {
        var error = new Error('Error.');

        gsa_Override = function() {
          return function authorize(reqOpts, callback) {
            callback(error);
          };
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({}, {
          onAuthorized: function(err) {
            assert.equal(err, error);
            done();
          }
        });
      });

      it('should make the authorized request', function(done) {
        var authorizedReqOpts = { a: 'b', c: 'd' };

        gsa_Override = function() {
          return function authorize(reqOpts, callback) {
            callback(null, authorizedReqOpts);
          };
        };

        request_Override = function(reqOpts) {
          assert.deepEqual(reqOpts, authorizedReqOpts);
          done();
        };

        var makeRequest = util.makeAuthorizedRequest();
        makeRequest({}, assert.ifError);
      });
    });
  });
});
