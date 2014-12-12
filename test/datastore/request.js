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

/*global describe, it, beforeEach, after */

'use strict';

var assert = require('assert');
var ByteBuffer = require('bytebuffer');
var duplexify = require('duplexify');
var entity = require('../../lib/datastore/entity.js');
var extend = require('extend');
var https = require('https');
var mockRespGet = require('../testdata/response_get.json');
var pb = require('../../lib/datastore/pb.js');
var Query = require('../../lib/datastore/query.js');
var Stream = require('stream');
var util = require('../../lib/common/util.js');

var httpsRequestCached = https.request;
var httpsRequestOverride = util.noop;

extend(true, https, {
  request: function() {
    var requestFn = httpsRequestOverride;
    httpsRequestOverride = util.noop;
    return requestFn.apply(this, util.toArray(arguments));
  }
});

// Create a protobuf "FakeMethod" request & response.
pb.FakeMethodRequest = function() {
  this.toBuffer = function() {
    return new Buffer('');
  };
};
var pbFakeMethodResponseDecode = util.noop;
pb.FakeMethodResponse = {
  decode: function() {
    var decodeFn = pbFakeMethodResponseDecode;
    pbFakeMethodResponseDecode = util.noop;
    return decodeFn.apply(this, util.toArray(arguments));
  }
};

var Request = require('sandboxed-module')
  .require('../../lib/datastore/request.js', {
    requires: {
      './pb.js': pb,
      https: https
    }
  });

describe('Request', function() {
  var key;
  var request;

  beforeEach(function() {
    key = new entity.Key({
      namespace: 'namespace',
      path: ['Company', 123]
    });
    request = new Request();
    request.makeAuthorizedRequest_ = function(req, callback) {
      (callback.onAuthorized || callback)(null, req);
    };
  });

  after(function() {
    https.request = httpsRequestCached;
  });

  describe('get', function() {
    it('should get by key', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'lookup');
        assert.equal(req.key.length, 1);
        callback(null, mockRespGet);
      };
      request.get(key, function(err, entity) {
        var data = entity.data;
        assert.deepEqual(entity.key.path, ['Kind', 5732568548769792]);
        assert.strictEqual(data.author, 'Silvano');
        assert.strictEqual(data.isDraft, false);
        assert.deepEqual(data.publishedAt, new Date(978336000000));
        done();
      });
    });

    it('should multi get by keys', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'lookup');
        assert.equal(req.key.length, 1);
        callback(null, mockRespGet);
      };
      request.get([key], function(err, entities) {
        var entity = entities[0];
        var data = entity.data;
        assert.deepEqual(entity.key.path, ['Kind', 5732568548769792]);
        assert.strictEqual(data.author, 'Silvano');
        assert.strictEqual(data.isDraft, false);
        assert.deepEqual(data.publishedAt, new Date(978336000000));
        done();
      });
    });

    it('should continue looking for deferred results', function(done) {
      var lookupCount = 0;
      request.makeReq_ = function(method, req, callback) {
        lookupCount++;
        assert.equal(method, 'lookup');
        if (mockRespGet.deferred.length) {
          // Revert deferred to original state.
          mockRespGet.deferred = [];
        } else {
          mockRespGet.deferred = [ entity.keyToKeyProto(key) ];
        }
        callback(null, mockRespGet);
      };
      request.get([key, key], function(err, entities) {
        assert.equal(entities.length, 2);
        assert.equal(lookupCount, 2);
        done();
      });
    });
  });

  describe('save', function() {
    it('should save with incomplete key', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(req.mutation.insert_auto_id.length, 1);
        callback();
      };
      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
      request.save({ key: key, data: {} }, done);
    });

    it('should set the ID on incomplete key objects', function(done) {
      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
      var id = 50714372;

      var mockCommitResponse = {
        mutation_result: {
          insert_auto_id_key: [
            {
              partition_id: {
                dataset_id: 's~project-id',
                namespace: 'ns'
              },
              path_element: [
                {
                  kind: 'Company',
                  id: id,
                  name: null
                }
              ]
            }
          ]
        }
      };

      request.makeReq_ = function(method, req, callback) {
        callback(null, mockCommitResponse);
      };

      request.save({ key: key, data: {} }, function(err) {
        assert.ifError(err);

        assert.equal(key.path[1], id);

        done();
      });
    });

    it('should save with keys', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(req.mutation.upsert.length, 2);
        assert.equal(req.mutation.upsert[0].property[0].name, 'k');
        assert.equal(
          req.mutation.upsert[0].property[0].value.string_value, 'v');
        callback();
      };
      request.save([
        { key: key, data: { k: 'v' } },
        { key: key, data: { k: 'v' } }
      ], done);
    });

    it('should not set an indexed value by default', function(done) {
      request.makeReq_ = function(method, req) {
        var property = req.mutation.upsert[0].property[0];
        assert.equal(property.name, 'name');
        assert.equal(property.value.string_value, 'value');
        assert.strictEqual(property.value.indexed, undefined);
        done();
      };
      request.save({
        key: key,
        data: [{ name: 'name', value: 'value' }]
      }, assert.ifError);
    });

    it('should allow setting the indexed value of property', function(done) {
      request.makeReq_ = function(method, req) {
        var property = req.mutation.upsert[0].property[0];
        assert.equal(property.name, 'name');
        assert.equal(property.value.string_value, 'value');
        assert.strictEqual(property.value.indexed, false);
        done();
      };
      request.save({
        key: key,
        data: [{ name: 'name', value: 'value', excludeFromIndexes: true }]
      }, assert.ifError);
    });

    describe('transactions', function() {
      beforeEach(function() {
        // Trigger transaction mode.
        request.id = 'transaction-id';
        request.requestCallbacks_ = [];
        request.requests_ = [];
      });

      it('should queue request & callback', function() {
        request.save({
          key: key,
          data: [{ name: 'name', value: 'value' }]
        });

        assert.equal(typeof request.requestCallbacks_[0], 'function');
        assert.equal(typeof request.requests_[0], 'object');
      });
    });
  });

  describe('delete', function() {
    it('should delete by key', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(!!req.mutation.delete, true);
        callback();
      };
      request.delete(key, done);
    });

    it('should multi delete by keys', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(req.mutation.delete.length, 2);
        callback();
      };
      request.delete([ key, key ], done);
    });

    describe('transactions', function() {
      beforeEach(function() {
        // Trigger transaction mode.
        request.id = 'transaction-id';
        request.requests_ = [];
      });

      it('should queue request', function() {
        request.delete(key);

        assert.equal(typeof request.requests_[0].mutation.delete, 'object');
      });
    });
  });

  describe('runQuery', function() {
    var query;
    var mockResponse = {
      withResults: {
        batch: { entity_result: mockRespGet.found }
      },
      withResultsAndEndCursor: {
        batch: {
          entity_result: mockRespGet.found,
          end_cursor: new ByteBuffer().writeIString('cursor').flip()
        }
      }
    };

    beforeEach(function() {
      query = new Query(['Kind']);
    });

    describe('errors', function() {
      it('should handle upstream errors', function() {
        var error = new Error('Error.');
        request.makeReq_ = function(method, req, callback) {
          assert.equal(method, 'runQuery');
          callback(error);
        };

        request.runQuery(query, function(err) {
          assert.equal(err, error);
        });
      });
    });

    it('should execute callback with results', function() {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'runQuery');
        callback(null, mockResponse.withResults);
      };

      request.runQuery(query, function (err, entities) {
        assert.ifError(err);
        assert.deepEqual(entities[0].key.path, ['Kind', 5732568548769792]);

        var data = entities[0].data;
        assert.strictEqual(data.author, 'Silvano');
        assert.strictEqual(data.isDraft, false);
        assert.deepEqual(data.publishedAt, new Date(978336000000));
      });
    });

    it('should return an empty string if no end cursor exists', function(done) {
      request.makeReq_ = function(method, req, callback) {
        callback(null, mockResponse.withResults);
      };

      request.runQuery(query, function(err, entities, endCursor) {
        assert.ifError(err);
        assert.strictEqual(endCursor, '');
        done();
      });
    });

    it('should return the end cursor from the last query', function(done) {
      var response = mockResponse.withResultsAndEndCursor;

      request.makeReq_ = function(method, req, callback) {
        callback(null, response);
      };

      request.runQuery(query, function(err, entities, endCursor) {
        assert.ifError(err);
        assert.equal(endCursor, response.batch.end_cursor.toBase64());
        done();
      });
    });

    describe('streams', function() {
      it('should be a stream if a callback is omitted', function() {
        assert(request.runQuery(query) instanceof Stream);
      });

      it('should run the query after being read from', function(done) {
        request.makeReq_ = function() {
          done();
        };

        request.runQuery(query).emit('reading');
      });

      it('should continuosly run until there are no results', function(done) {
        var run = 0;
        var timesToRun = 2;

        request.makeReq_ = function(method, req, callback) {
          run++;

          if (run < timesToRun) {
            callback(null, mockResponse.withResultsAndEndCursor);
          } else {
            var lastEndCursor =
              mockResponse.withResultsAndEndCursor.batch.end_cursor.toBase64();
            lastEndCursor = new Buffer(lastEndCursor, 'base64').toString();

            assert.equal(String(req.query.start_cursor), lastEndCursor);
            assert.strictEqual(req.query.offset, undefined);

            callback(null, mockResponse.withResults);
          }
        };

        var resultsReturned = 0;

        request.runQuery(query)
          .on('data', function() { resultsReturned++; })
          .on('end', function() {
            assert.equal(resultsReturned, mockRespGet.found.length);
            done();
          });
      });

      it('should only emit the limited number of results', function(done) {
        var limit = 2;

        query.limitVal = limit;

        request.makeReq_ = function(method, req, callback) {
          callback(null, mockResponse.withResultsAndEndCursor);
        };

        var resultsReturned = 0;

        request.runQuery(query)
          .on('data', function() { resultsReturned++; })
          .on('end', function() {
            assert.equal(resultsReturned, limit);
            done();
          });
      });

      it('should emit an error', function(done) {
        var error = new Error('Error.');

        request.makeReq_ = function(method, req, callback) {
          callback(error);
        };

        request.runQuery(query)
          .on('error', function(err) {
            assert.equal(err, error);
            done();
          })
          .emit('reading');
      });
    });
  });

  describe('allocateIds', function() {
    it('should produce proper allocate IDs req protos', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'allocateIds');
        assert.equal(req.key.length, 1);
        callback(null, {
          key: [
            { path_element: [{ kind: 'Kind', id: 123 }] }
          ]
        });
      };
      var incompleteKey = new entity.Key({ namespace: null, path: ['Kind'] });
      request.allocateIds(incompleteKey, 1, function(err, keys) {
        assert.ifError(err);
        var generatedKey = keys[0];
        assert.strictEqual(generatedKey.path.pop(), 123);
        done();
      });
    });

    it('should throw if trying to allocate IDs with complete keys', function() {
      assert.throws(function() {
        request.allocateIds(key);
      });
    });
  });

  describe('makeReq_', function() {
    beforeEach(function() {
      request.connection = {
        createAuthorizedReq: util.noop
      };
    });

    it('should assemble correct request', function(done) {
      var method = 'commit';
      var projectId = 'project-id';
      request.projectId = projectId;
      request.makeAuthorizedRequest_ = function(opts) {
        assert.equal(opts.method, 'POST');
        assert.equal(
          opts.path, '/datastore/v1beta2/datasets/' + projectId + '/' + method);
        assert.equal(opts.headers['Content-Type'], 'application/x-protobuf');
        done();
      };
      request.makeReq_(method, {}, util.noop);
    });

    it('should make https request', function(done) {
      var mockRequest = { mock: 'request' };
      httpsRequestOverride = function(req) {
        assert.deepEqual(req, mockRequest);
        done();
        return duplexify();
      };
      request.makeAuthorizedRequest_ = function(opts, callback) {
        (callback.onAuthorized || callback)(null, mockRequest);
      };
      request.makeReq_('commit', {}, util.noop);
    });

    it('should send protobuf request', function(done) {
      var requestOptions = { mode: 'NON_TRANSACTIONAL' };
      var decoded = new pb.CommitRequest(requestOptions).toBuffer();
      httpsRequestOverride = function() {
        var stream = { on: util.noop, end: util.noop };
        stream.write = function(data) {
          assert.equal(String(data), String(decoded));
          done();
        };
        return stream;
      };
      request.makeReq_('commit', requestOptions, util.noop);
    });

    it('should decode protobuf response', function(done) {
      pbFakeMethodResponseDecode = function() {
        done();
      };
      httpsRequestOverride = function(req, callback) {
        var responseStream = duplexify();
        callback(responseStream);
        responseStream.emit('end');
        return duplexify();
      };
      request.makeReq_('fakeMethod', util.noop);
    });

    describe('transactional and non-transactional properties', function() {
      beforeEach(function() {
        request.createAuthorizedRequest_ = function(opts, callback) {
          (callback.onAuthorized || callback)();
        };
      });

      describe('commit', function() {
        it('should attach transactional properties', function(done) {
          request.id = 'EeMXCSGvwcSWGkkABRmGMTWdbi_pa66VflNhQAGblQFMXf9HrmNGa' +
            'GugEsO1M2_2x7wZvLencG51uwaDOTZCjTkkRh7bw_oyKUgTmtJ0iWJwath7';
          var expected = new pb.CommitRequest({
            mode: 'TRANSACTIONAL',
            transaction: request.id
          }).toBuffer();
          httpsRequestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.write = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return stream;
          };
          request.makeReq_('commit', util.noop);
        });

        it('should attach non-transactional properties', function(done) {
          var expected = new pb.CommitRequest({
            mode: 'NON_TRANSACTIONAL'
          }).toBuffer();
          httpsRequestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.write = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return stream;
          };
          request.makeReq_('commit', util.noop);
        });
      });

      describe('lookup', function() {
        it('should attach transactional properties', function(done) {
          request.id = 'EeMXCSGvwcSWGkkABRmGMTWdbi_pa66VflNhQAGblQFMXf9HrmNGa' +
            'GugEsO1M2_2x7wZvLencG51uwaDOTZCjTkkRh7bw_oyKUgTmtJ0iWJwath7';
          var expected = new pb.LookupRequest({
            read_options: {
              transaction: request.id
            }
          }).toBuffer();
          httpsRequestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.write = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return stream;
          };
          request.makeReq_('lookup', util.noop);
        });

        it('should not attach transactional properties', function(done) {
          var expected = new pb.LookupRequest().toBuffer();
          httpsRequestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.write = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return stream;
          };
          request.makeReq_('lookup', util.noop);
        });
      });
    });
  });
});
