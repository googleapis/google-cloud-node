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

var arrify = require('arrify');
var assert = require('assert');
var ByteBuffer = require('bytebuffer');
var entity = require('../../lib/datastore/entity.js');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var mockery = require('mockery');
var mockRespGet = require('../testdata/response_get.json');
var pb = require('../../lib/datastore/pb.js');
var Query = require('../../lib/datastore/query.js');
var requestModule = require('request');
var stream = require('stream');
var util = require('../../lib/common/util.js');

var REQUEST_DEFAULT_CONF;
var requestOverride;
function fakeRequest() {
  return (requestOverride || requestModule).apply(null, arguments);
}
fakeRequest.defaults = function(defaultConfiguration) {
  // Ignore the default values, so we don't have to test for them in every API
  // call.
  REQUEST_DEFAULT_CONF = defaultConfiguration;
  return fakeRequest;
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
    return decodeFn.apply(this, arguments);
  }
};

var entityOverrides = {};
var fakeEntity;
fakeEntity = Object.keys(entity).reduce(function(fakeEntity, methodName) {
  fakeEntity[methodName] = function() {
    var method = entityOverrides[methodName] || entity[methodName];
    return method.apply(this, arguments);
  };
  return fakeEntity;
}, {});

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'DatastoreRequest') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'DatastoreRequest');
    assert.deepEqual(methods, ['runQuery']);
    extended = true;
  }
};

describe('Request', function() {
  var Request;
  var key;
  var request;
  var CUSTOM_ENDPOINT = 'http://localhost:8080';

  before(function() {
    mockery.registerMock('./entity.js', fakeEntity);
    mockery.registerMock('./pb.js', pb);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('request', fakeRequest);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    Request = require('../../lib/datastore/request.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    key = new entity.Key({
      namespace: 'namespace',
      path: ['Company', 123]
    });
    entityOverrides = {};
    requestOverride = null;
    request = new Request();
    request.apiEndpoint = CUSTOM_ENDPOINT;
    request.makeAuthorizedRequest_ = function(req, callback) {
      (callback.onAuthorized || callback)(null, req);
    };
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should have set correct defaults on Request', function() {
      assert.deepEqual(REQUEST_DEFAULT_CONF, {
        pool: {
          maxSockets: Infinity
        }
      });
    });
  });

  describe('get', function() {
    beforeEach(function() {
      request.makeReq_ = function() {};
    });

    it('should throw if no keys are provided', function() {
      assert.throws(function() {
        request.get();
      }, /At least one Key object is required/);
    });

    it('should return a stream if no callback is provided', function() {
      assert(request.get(key) instanceof stream);
    });

    it('should convert key to key proto', function(done) {
      entityOverrides.keyToKeyProto = function(key_) {
        assert.strictEqual(key_, key);
        done();
      };

      request.get(key, assert.ifError);
    });

    it('should make correct request', function(done) {
      request.makeReq_ = function(method, req) {
        assert.equal(method, 'lookup');
        assert.deepEqual(req.key[0], entity.keyToKeyProto(key));

        done();
      };

      request.get(key, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        request.makeReq_ = function(method, req, callback) {
          setImmediate(function() {
            callback(error, apiResponse);
          });
        };
      });

      describe('callback mode', function() {
        it('should execute callback with error', function(done) {
          request.get(key, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('stream mode', function() {
        it('should emit error', function(done) {
          request.get(key)
            .on('error', function(err) {
              assert.strictEqual(err, error);
              done();
            });
        });

        it('should end stream', function(done) {
          var stream = request.get(key);

          stream.on('error', function() {
            setImmediate(function() {
              assert.strictEqual(stream._destroyed, true);
              done();
            });
          });
        });
      });
    });

    describe('success', function() {
      var apiResponse = extend(true, {}, mockRespGet);
      var expectedResult = entity.formatArray(apiResponse.found)[0];

      var apiResponseWithMultiEntities = extend(true, {}, apiResponse);
      var entities = apiResponseWithMultiEntities.found;
      entities.push(entities[0]);
      var expectedResults = entity.formatArray(entities);

      var apiResponseWithDeferred = extend(true, {}, apiResponse);
      apiResponseWithDeferred.deferred = [
        apiResponseWithDeferred.found[0].entity.key
      ];

      beforeEach(function() {
        request.makeReq_ = function(method, req, callback) {
          callback(null, apiResponse);
        };
      });

      it('should format the results', function(done) {
        entityOverrides.formatArray = function(arr) {
          assert.strictEqual(arr, apiResponse.found);
          setImmediate(done);
          return arr;
        };

        request.get(key, assert.ifError);
      });

      it('should continue looking for deferred results', function(done) {
        request.makeReq_ = function(method, req, callback) {
          callback(null, apiResponseWithDeferred);
        };

        request.get(key, assert.ifError);

        request.get = function(keys) {
          var expectedKeys = apiResponseWithDeferred.deferred
            .map(entity.keyFromKeyProto);

          assert.deepEqual(keys, expectedKeys);
          done();
        };
      });

      describe('callback mode', function() {
        it('should exec callback with results', function(done) {
          request.get(key, function(err, entity) {
            assert.ifError(err);
            assert.deepEqual(entity, expectedResult);
            done();
          });
        });

        it('should exec callback w/ array from multiple keys', function(done) {
          request.makeReq_ = function(method, req, callback) {
            callback(null, apiResponseWithMultiEntities);
          };

          request.get([key, key], function(err, entities) {
            assert.ifError(err);

            assert.strictEqual(is.array(entities), true);
            assert.deepEqual(entities, expectedResults);

            done();
          });
        });
      });

      describe('stream mode', function() {
        it('should push results to the stream', function(done) {
          request.get(key)
            .on('error', done)
            .on('data', function(entity) {
              assert.deepEqual(entity, expectedResult);
            })
            .on('end', done);
        });

        it('should not push more results if stream was ended', function(done) {
          var entitiesEmitted = 0;

          request.makeReq_ = function(method, req, callback) {
            setImmediate(function() {
              callback(null, apiResponseWithMultiEntities);
            });
          };

          request.get([key, key])
            .on('data', function() {
              entitiesEmitted++;
              this.end();
            })
            .on('end', function() {
              assert.strictEqual(entitiesEmitted, 1);
              done();
            });
        });

        it('should not get more results if stream was ended', function(done) {
          var lookupCount = 0;

          request.makeReq_ = function(method, req, callback) {
            lookupCount++;
            setImmediate(function() {
              callback(null, apiResponseWithDeferred);
            });
          };

          request.get(key)
            .on('error', done)
            .on('data', function() {
              this.end();
            })
            .on('end', function() {
              assert.strictEqual(lookupCount, 1);
              done();
            });
        });
      });
    });
  });

  describe('insert', function() {
    it('should pass the correct arguments to save', function(done) {
      request.save = function(entities, callback) {
        assert.deepEqual(entities, [{
          key: {
            namespace: 'ns',
            path: ['Company'],
          },
          data: {},
          method: 'insert'
        }]);

        callback();
      };

      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
      request.insert({ key: key, data: {} }, done);
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

    it('should save with specific method', function(done) {
      request.makeReq_ = function(method, req, callback) {
        assert.equal(method, 'commit');
        assert.equal(req.mutation.insert.length, 1);
        assert.equal(req.mutation.update.length, 1);
        assert.equal(req.mutation.insert[0].property[0].name, 'k');
        assert.equal(
          req.mutation.insert[0].property[0].value.string_value, 'v');
        assert.equal(req.mutation.update[0].property[0].name, 'k2');
        assert.equal(
          req.mutation.update[0].property[0].value.string_value, 'v2');
        callback();
      };
      request.save([
        { key: key, method: 'insert', data: { k: 'v' } },
        { key: key, method: 'update', data: { k2: 'v2' } }
      ], done);
    });

    it('should return apiResponse in callback', function(done) {
      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
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
                  id: 123,
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
      request.save({ key: key, data: {} }, function(err, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(mockCommitResponse, apiResponse);
        done();
      });
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

    it('should allow setting the indexed value on arrays', function(done) {
      request.makeReq_ = function(method, req) {
        var property = req.mutation.upsert[0].property[0];

        property.value.list_value.forEach(function(value) {
          assert.strictEqual(value.indexed, false);
        });

        done();
      };

      request.save({
        key: key,
        data: [{
          name: 'name',
          value: ['one', 'two', 'three'],
          excludeFromIndexes: true
        }]
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

    it('should return apiResponse in callback', function(done) {
      var resp = { success: true };
      request.makeReq_ = function(method, req, callback) {
        callback(null, resp);
      };
      request.delete(key, function(err, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(resp, apiResponse);
        done();
      });
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

      request.runQuery(query, function(err, entities) {
        assert.ifError(err);
        assert.deepEqual(entities[0].key.path, ['Kind', 5732568548769792]);

        var data = entities[0].data;
        assert.strictEqual(data.author, 'Silvano');
        assert.strictEqual(data.isDraft, false);
        assert.deepEqual(data.publishedAt, new Date(978336000000));
      });
    });

    it('should execute callback with apiResponse', function(done) {
      request.makeReq_ = function(method, req, callback) {
        callback(null, mockResponse.withResults);
      };

      request.runQuery(query, function(err, entities, nextQuery, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(mockResponse.withResults, apiResponse);
        done();
      });
    });

    it('should return null nextQuery if no end cursor exists', function(done) {
      request.makeReq_ = function(method, req, callback) {
        callback(null, mockResponse.withResults);
      };

      request.runQuery(query, function(err, entities, nextQuery) {
        assert.ifError(err);
        assert.strictEqual(nextQuery, null);
        done();
      });
    });

    it('should return a nextQuery', function(done) {
      var response = mockResponse.withResultsAndEndCursor;

      request.makeReq_ = function(method, req, callback) {
        callback(null, response);
      };

      request.runQuery(query, function(err, entities, nextQuery) {
        assert.ifError(err);
        assert.equal(nextQuery.startVal, response.batch.end_cursor.toBase64());
        done();
      });
    });
  });

  describe('update', function() {
    it('should pass the correct arguments to save', function(done) {
      request.save = function(entities, callback) {
        assert.deepEqual(entities, [{
          key: {
            namespace: 'ns',
            path: ['Company'],
          },
          data: {},
          method: 'update'
        }]);

        callback();
      };

      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
      request.update({ key: key, data: {} }, done);
    });
  });

  describe('upsert', function() {
    it('should pass the correct arguments to save', function(done) {
      request.save = function(entities, callback) {
        assert.deepEqual(entities, [{
          key: {
            namespace: 'ns',
            path: ['Company'],
          },
          data: {},
          method: 'upsert'
        }]);

        callback();
      };

      var key = new entity.Key({ namespace: 'ns', path: ['Company'] });
      request.upsert({ key: key, data: {} }, done);
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

    it('should return apiResponse in callback', function(done) {
      var resp = {
        key: [
          { path_element: [{ kind: 'Kind', id: 123 }] }
        ]
      };
      request.makeReq_ = function(method, req, callback) {
        callback(null, resp);
      };
      var incompleteKey = new entity.Key({ namespace: null, path: ['Kind'] });
      request.allocateIds(incompleteKey, 1, function(err, keys, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(resp, apiResponse);
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
      var expectedUri =
        format('{apiEndpoint}/datastore/v1beta2/datasets/{pId}/{method}', {
          apiEndpoint: CUSTOM_ENDPOINT,
          pId: projectId,
          method: method
        });

      request.projectId = projectId;
      request.makeAuthorizedRequest_ = function(opts) {
        assert.equal(opts.method, 'POST');
        assert.equal(opts.uri, expectedUri);
        assert.equal(opts.headers['Content-Type'], 'application/x-protobuf');
        done();
      };
      request.makeReq_(method, {}, util.noop);
    });

    it('should make API request', function(done) {
      var mockRequest = { mock: 'request' };
      requestOverride = function(req) {
        assert.equal(req.headers['Content-Length'], 2);
        assert.deepEqual(req, mockRequest);
        done();
        return new stream.Writable();
      };
      request.makeAuthorizedRequest_ = function(opts, callback) {
        (callback.onAuthorized || callback)(null, mockRequest);
      };
      request.makeReq_('commit', {}, util.noop);
    });

    it('should send protobuf request', function(done) {
      var requestOptions = { mode: 'NON_TRANSACTIONAL' };
      var decoded = new pb.CommitRequest(requestOptions).toBuffer();
      requestOverride = function() {
        var stream = { on: util.noop };
        stream.end = function(data) {
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
      requestOverride = function() {
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('response', ws);
          ws.emit('end');
        });
        return ws;
      };
      request.makeReq_('fakeMethod', util.noop);
    });

    it('should respect API host and port configuration', function(done) {
      request.apiEndpoint = CUSTOM_ENDPOINT;

      requestOverride = function(req) {
        assert.equal(req.uri.indexOf(CUSTOM_ENDPOINT), 0);
        done();
        return new stream.Writable();
      };

      request.makeReq_('fakeMethod', util.noop);
    });

    describe('transactional and non-transactional properties', function() {
      beforeEach(function() {
        request.createAuthorizedRequest_ = function(opts, callback) {
          (callback.onAuthorized || callback)();
        };
      });

      describe('rollback', function() {
        it('should attach transacational properties', function(done) {
          request.id = 'EeMXCSGvwcSWGkkABRmGMTWdbi_pa66VflNhQAGblQFMXf9HrmNGa' +
            'GugEsO1M2_2x7wZvLencG51uwaDOTZCjTkkRh7bw_oyKUgTmtJ0iWJwath7';
          var expected = new pb.RollbackRequest({
            transaction: request.id
          }).toBuffer();
          requestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.end = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return stream;
          };
          request.makeReq_('rollback', util.noop);
        });
      });

      describe('commit', function() {
        it('should attach transactional properties', function(done) {
          request.id = 'EeMXCSGvwcSWGkkABRmGMTWdbi_pa66VflNhQAGblQFMXf9HrmNGa' +
            'GugEsO1M2_2x7wZvLencG51uwaDOTZCjTkkRh7bw_oyKUgTmtJ0iWJwath7';
          var expected = new pb.CommitRequest({
            mode: 'TRANSACTIONAL',
            transaction: request.id
          }).toBuffer();
          requestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.end = function(data) {
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
          requestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.end = function(data) {
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
          requestOverride = function() {
            var stream = { on: util.noop, end: util.noop };
            stream.end = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return stream;
          };
          request.makeReq_('lookup', util.noop);
        });

        it('should not attach transactional properties', function(done) {
          var expected = new pb.LookupRequest().toBuffer();
          requestOverride = function() {
            var ws = new stream.Writable();
            ws.end = function(data) {
              assert.deepEqual(data, expected);
              done();
            };
            return ws;
          };
          request.makeReq_('lookup', util.noop);
        });
      });
    });
  });
});
