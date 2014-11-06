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
var util = require('../../lib/common/util.js');

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
        connection: {
          createAuthorizedReq: function(request) {
            assert.equal(request.method, 'POST');
            assert.equal(request.qs.uploadType, 'multipart');

            var contentType = request.headers['Content-Type'];
            assert.equal(contentType.indexOf('multipart/related'), 0);
            done();
          }
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
        connection: {
          createAuthorizedReq: function(request) {
            assert.equal(request.method, req.method);
            assert.deepEqual(request.qs, req.qs);
            assert.equal(request.something, req.something);
            done();
          }
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
        connection: {
          createAuthorizedReq: function(request, callback) {
            callback(error);
          }
        }
      });
    });

    it('should write request', function(done) {
      var dup = duplexify();
      var boundary;
      var metadata = { a: 'b', c: 'd' };

      util.makeWritableStream(dup, {
        metadata: metadata,

        connection: {
          createAuthorizedReq: function(request, callback) {
            var contentType = request.headers['Content-Type'];
            // Match the UUID boundary from the contentType
            boundary = contentType.match(/boundary="([^"]*)/)[1];
            callback();
          },

          requester: function() {
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
          }
        }
      });
    });

    it('should set the writable stream', function(done) {
      var dup = duplexify();
      var stream = duplexify();

      dup.setWritable = function(writable) {
        assert.equal(writable, stream);
        done();
      };

      util.makeWritableStream(dup, {
        connection: {
          createAuthorizedReq: function(request, callback) {
            callback();
          },

          requester: function() {
            return stream;
          }
        }
      });
    });

    it('should keep the pipe open on the stream', function(done) {
      var dup = duplexify();
      var stream = duplexify();

      dup.pipe = function(writable) {
        assert.equal(writable, stream);
        done();
      };

      util.makeWritableStream(dup, {
        connection: {
          createAuthorizedReq: function(request, callback) {
            callback();
          },

          requester: function() {
            return stream;
          }
        }
      });
    });
  });
});
