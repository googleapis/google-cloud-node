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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var ByteBuffer = require('bytebuffer');
var duplexify = require('duplexify');
var entity = require('../../lib/datastore/entity.js');
var mockRespGet = require('../testdata/response_get.json');
var pb = require('../../lib/datastore/pb.js');
var Query = require('../../lib/datastore/query.js');
var util = require('../../lib/common/util.js');

var httpsRequestOverride = util.noop;
var https = {
  request: function() {
    var requestFn = httpsRequestOverride;
    httpsRequestOverride = util.noop;
    return requestFn.apply(this, util.toArray(arguments));
  }
};

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
      'https': https,
      './pb.js': pb
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
  });

  describe('get', function() {
    it('should get by key', function(done) {
      request.createRequest_ = function(method, req, callback) {
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
      request.createRequest_ = function(method, req, callback) {
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
      request.createRequest_ = function(method, req, callback) {
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
      request.createRequest_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(req.mutation.insert_auto_id.length, 1);
        callback();
      };
      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
      request.save({ key: key, data: {} }, done);
    });

    it('should save with keys', function(done) {
      request.createRequest_ = function(method, req, callback) {
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

    describe('transactions', function() {
      beforeEach(function() {
        // Trigger transaction mode.
        request.id = 'transaction-id';
      });

      it('should mark transaction as finalized', function(done) {
        assert.strictEqual(request.isFinalized, undefined);
        request.createRequest_ = function(method, req, callback) {
          callback(null, { mutation_result: {} });
        };
        request.save({ key: key, data: {} }, function(err) {
          assert.ifError(err);
          assert.strictEqual(request.isFinalized, true);
          done();
        });
      });

      it('should not mark as finalized if an error occurred', function(done) {
        assert.strictEqual(request.isFinalized, undefined);
        request.createRequest_ = function(method, req, callback) {
          callback(new Error('Error.'));
        };
        request.save({ key: key, data: {} }, function() {
          assert.strictEqual(request.isFinalized, undefined);
          done();
        });
      });

      it('should not set an indexed value by default', function(done) {
        request.createRequest_ = function(method, req) {
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
        request.createRequest_ = function(method, req) {
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
    });
  });

  describe('delete', function() {
    it('should delete by key', function(done) {
      request.createRequest_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(!!req.mutation.delete, true);
        callback();
      };
      request.delete(key, done);
    });

    it('should multi delete by keys', function(done) {
      request.createRequest_ = function(method, req, callback) {
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
      });

      it('should mark transaction as finalized', function(done) {
        assert.strictEqual(request.isFinalized, undefined);
        request.createRequest_ = function(method, req, callback) {
          callback(null, { mutation_result: {} });
        };
        request.delete(key, function(err) {
          assert.ifError(err);
          assert.strictEqual(request.isFinalized, true);
          done();
        });
      });

      it('should not mark as finalized if an error occurred', function(done) {
        assert.strictEqual(request.isFinalized, undefined);
        request.createRequest_ = function(method, req, callback) {
          callback(new Error('Error.'));
        };
        request.delete(key, function() {
          assert.strictEqual(request.isFinalized, undefined);
          done();
        });
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
      },
      withoutResults: mockRespGet
    };

    beforeEach(function() {
      query = new Query(['Kind']);
    });

    describe('errors', function() {
      it('should handle upstream errors', function() {
        var error = new Error('Error.');
        request.createRequest_ = function(method, req, callback) {
          assert.equal(method, 'runQuery');
          callback(error);
        };

        request.runQuery(query, function(err) {
          assert.equal(err, error);
        });
      });

      it('should handle missing results error', function() {
        request.createRequest_ = function(method, req, callback) {
          assert.equal(method, 'runQuery');
          callback(null, mockResponse.withoutResults);
        };

        request.runQuery(query, function(err, entities) {
          assert.strictEqual(err, null);
          assert.strictEqual(entities, undefined);
        });
      });
    });

    it('should execute callback with results', function() {
      request.createRequest_ = function(method, req, callback) {
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

    it('should return a new query if results remain', function() {
      request.createRequest_ = function(method, req, callback) {
        assert.equal(method, 'runQuery');
        callback(null, mockResponse.withResultsAndEndCursor);
      };

      request.runQuery(query, function(err, entities, nextQuery) {
        assert.ifError(err);
        assert.equal(nextQuery.constructor.name, 'Query');
      });
    });
  });

  describe('allocateIds', function() {
    it('should produce proper allocate IDs req protos', function(done) {
      request.createRequest_ = function(method, req, callback) {
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

  describe('createRequest_', function() {
    beforeEach(function() {
      request.connection = {
        createAuthorizedReq: util.noop
      };
    });

    it('should assemble correct request', function(done) {
      var method = 'commit';
      var projectId = 'project-id';
      request.projectId = projectId;
      request.connection.createAuthorizedReq = function(opts) {
        assert.equal(opts.method, 'POST');
        assert.equal(
          opts.path, '/datastore/v1beta2/datasets/' + projectId + '/' + method);
        assert.equal(opts.headers['content-type'], 'application/x-protobuf');
        done();
      };
      request.createRequest_(method, {}, util.noop);
    });

    it('should make https request', function(done) {
      var mockRequest = { mock: 'request' };
      httpsRequestOverride = function(req) {
        assert.deepEqual(req, mockRequest);
        done();
        return duplexify();
      };
      request.connection.createAuthorizedReq = function(opts, callback) {
        callback(null, mockRequest);
      };
      request.createRequest_('commit', {}, util.noop);
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
      request.connection.createAuthorizedReq = function(opts, callback) {
        callback();
      };
      request.createRequest_('commit', requestOptions, util.noop);
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
      request.connection.createAuthorizedReq = function(opts, callback) {
        callback();
      };
      request.createRequest_('fakeMethod', util.noop);
    });

    describe('transactional and non-transactional properties', function() {
      beforeEach(function() {
        request.connection.createAuthorizedReq = function(opts, callback) {
          callback();
        };
      });

      describe('commit', function() {
        it('should attach transactional properties', function(done) {
          request.id = 'transaction-id';
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
          request.createRequest_('commit', util.noop);
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
          request.createRequest_('commit', util.noop);
        });
      });

      describe('lookup', function() {
        it('should attach transactional properties', function(done) {
          request.id = 'transaction-id';
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
          request.createRequest_('lookup', util.noop);
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
          request.createRequest_('lookup', util.noop);
        });
      });
    });
  });
});
