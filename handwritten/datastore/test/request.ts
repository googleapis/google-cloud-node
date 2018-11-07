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

'use strict';

import * as assert from 'assert';
import * as extend from 'extend';
import * as is from 'is';
import * as proxyquire from 'proxyquire';
const sinon = require('sinon');
import * as through from 'through2';
const pfy = require('@google-cloud/promisify');
const pjy = require('@google-cloud/projectify');

const entity = require('../src/entity.js');
const Query = require('../src/query.js');

let promisified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll: function(Class) {
    if (Class.name === 'DatastoreRequest') {
      promisified = true;
    }
  },
});

const fakePjy = {
  replaceProjectIdToken: function() {
    return (pjyOverride || pjy.replaceProjectIdToken).apply(null, arguments);
  },
};

let v1FakeClientOverride;
const fakeV1 = {
  FakeClient: function() {
    return (v1FakeClientOverride || function() {}).apply(null, arguments);
  },
};

function FakeQuery() {
  this.calledWith_ = arguments;
}

let pjyOverride;

describe('Request', function() {
  let Request;
  let request;

  let key;
  let sandbox;

  before(function() {
    Request = proxyquire('../src/request', {
      '@google-cloud/promisify': fakePfy,
      '@google-cloud/projectify': fakePjy,
      './entity': entity,
      './query': FakeQuery,
      './v1': fakeV1,
    });
  });

  after(function() {
    v1FakeClientOverride = null;
  });

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    pjyOverride = null;
    key = new entity.Key({
      namespace: 'namespace',
      path: ['Company', 123],
    });
    FakeQuery.prototype = new Query();
    v1FakeClientOverride = null;
    request = new Request();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });
  });

  describe('prepareEntityObject_', function() {
    it('should clone an object', function() {
      const obj = {
        data: {
          nested: {
            obj: true,
          },
        },
        method: 'insert',
      };
      const expectedPreparedEntityObject = extend(true, {}, obj);
      const preparedEntityObject = Request.prepareEntityObject_(obj);
      assert.notStrictEqual(preparedEntityObject, obj);
      assert.notStrictEqual(preparedEntityObject.data.nested, obj.data.nested);
      assert.deepStrictEqual(
        preparedEntityObject,
        expectedPreparedEntityObject
      );
    });

    it('should format an entity', function() {
      const key = {};
      const entityObject = {data: true};
      entityObject[entity.KEY_SYMBOL] = key;

      const preparedEntityObject = Request.prepareEntityObject_(entityObject);

      assert.strictEqual(preparedEntityObject.key, key);
      assert.strictEqual(preparedEntityObject.data.data, entityObject.data);
    });
  });

  describe('allocateIds', function() {
    const INCOMPLETE_KEY = {};

    const ALLOCATIONS = 2;
    const OPTIONS = {
      allocations: ALLOCATIONS,
    };

    it('should throw if the key is complete', function() {
      sandbox.stub(entity, 'keyToKeyProto');
      sandbox.stub(entity, 'isKeyComplete').callsFake(key => {
        assert.strictEqual(key, INCOMPLETE_KEY);
        return true;
      });

      assert.throws(function() {
        request.allocateIds(INCOMPLETE_KEY, OPTIONS, assert.ifError);
      }, new RegExp('An incomplete key should be provided.'));
    });

    it('should make the correct request', function(done) {
      const keyProto = {};
      sandbox.stub(entity, 'isKeyComplete');
      sandbox.stub(entity, 'keyToKeyProto').callsFake(key => {
        assert.strictEqual(key, INCOMPLETE_KEY);
        return keyProto;
      });

      request.request_ = function(config) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'allocateIds');

        const expectedKeys: {}[] = [];
        expectedKeys.length = ALLOCATIONS;
        expectedKeys.fill(keyProto);

        assert.deepStrictEqual(config.reqOpts.keys, expectedKeys);

        assert.strictEqual(config.gaxOpts, undefined);

        done();
      };

      request.allocateIds(INCOMPLETE_KEY, OPTIONS, assert.ifError);
    });

    it('should allow a numeric shorthand for allocations', function(done) {
      sandbox.stub(entity, 'isKeyComplete');
      sandbox.stub(entity, 'keyToKeyProto');
      request.request_ = function(config) {
        assert.strictEqual(config.reqOpts.keys.length, ALLOCATIONS);
        done();
      };
      request.allocateIds(INCOMPLETE_KEY, ALLOCATIONS, assert.ifError);
    });

    it('should allow customization of GAX options', function(done) {
      sandbox.stub(entity, 'isKeyComplete');
      sandbox.stub(entity, 'keyToKeyProto');
      const options = extend({}, OPTIONS, {
        gaxOptions: {},
      });

      request.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      request.allocateIds(INCOMPLETE_KEY, options, assert.ifError);
    });

    describe('error', function() {
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

      beforeEach(function() {
        request.request_ = function(config, callback) {
          callback(ERROR, API_RESPONSE);
        };
      });

      it('should exec callback with error & API response', function(done) {
        sandbox.stub(entity, 'isKeyComplete');
        sandbox.stub(entity, 'keyToKeyProto');
        request.allocateIds(INCOMPLETE_KEY, OPTIONS, function(err, keys, resp) {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(keys, null);
          assert.strictEqual(resp, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', function() {
      const KEY = {};
      const API_RESPONSE = {
        keys: [KEY],
      };

      beforeEach(function() {
        request.request_ = function(config, callback) {
          callback(null, API_RESPONSE);
        };
      });

      it('should create and return Keys & API response', function(done) {
        const key = {};
        sandbox.stub(entity, 'isKeyComplete');
        sandbox.stub(entity, 'keyToKeyProto');
        sandbox.stub(entity, 'keyFromKeyProto').callsFake(keyProto => {
          assert.strictEqual(keyProto, API_RESPONSE.keys[0]);
          return key;
        });
        request.allocateIds(INCOMPLETE_KEY, OPTIONS, function(err, keys, resp) {
          assert.ifError(err);
          assert.deepStrictEqual(keys, [key]);
          assert.strictEqual(resp, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('createReadStream', function() {
    beforeEach(function() {
      request.request_ = function() {};
    });

    it('should throw if no keys are provided', function() {
      assert.throws(function() {
        request.createReadStream();
      }, /At least one Key object is required/);
    });

    it('should convert key to key proto', function(done) {
      sandbox.stub(entity, 'keyToKeyProto').callsFake(key_ => {
        assert.strictEqual(key_, key);
        done();
      });

      request.createReadStream(key).on('error', done);
    });

    it('should make correct request when stream is ready', function(done) {
      request.request_ = function(config) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'lookup');

        assert.deepStrictEqual(
          config.reqOpts.keys[0],
          entity.keyToKeyProto(key)
        );

        done();
      };

      const stream = request.createReadStream(key);

      stream.emit('reading');
    });

    it('should allow customization of GAX options', function(done) {
      const options = {
        gaxOptions: {},
      };

      request.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      request
        .createReadStream(key, options)
        .on('error', done)
        .emit('reading');
    });

    it('should allow setting strong read consistency', function(done) {
      request.request_ = function(config) {
        assert.strictEqual(config.reqOpts.readOptions.readConsistency, 1);
        done();
      };

      request
        .createReadStream(key, {consistency: 'strong'})
        .on('error', done)
        .emit('reading');
    });

    it('should allow setting strong eventual consistency', function(done) {
      request.request_ = function(config) {
        assert.strictEqual(config.reqOpts.readOptions.readConsistency, 2);
        done();
      };

      request
        .createReadStream(key, {consistency: 'eventual'})
        .on('error', done)
        .emit('reading');
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        request.request_ = function(config, callback) {
          setImmediate(function() {
            callback(error, apiResponse);
          });
        };
      });

      it('should emit error', function(done) {
        request
          .createReadStream(key)
          .on('data', function() {})
          .on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          });
      });

      it('should end stream', function(done) {
        const stream = request.createReadStream(key);

        stream.on('data', function() {}).on('error', function() {
          setImmediate(function() {
            assert.strictEqual(stream._destroyed, true);
            done();
          });
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        found: [
          {
            entity: {
              key: {
                partitionId: {
                  projectId: 'grape-spaceship-123',
                },
                path: [
                  {
                    kind: 'Post',
                    name: 'post1',
                  },
                ],
              },
              properties: {
                title: {
                  stringValue: 'How to make the perfect pizza in your grill',
                },
                tags: {
                  arrayValue: {
                    values: [
                      {
                        stringValue: 'pizza',
                      },
                      {
                        stringValue: 'grill',
                      },
                    ],
                  },
                },
                rating: {
                  integerValue: '5',
                },
                author: {
                  stringValue: 'Silvano',
                },
                wordCount: {
                  integerValue: '400',
                },
                isDraft: {
                  booleanValue: false,
                },
              },
            },
          },
        ],
      };

      const expectedResult = entity.formatArray(apiResponse.found)[0];

      const apiResponseWithMultiEntities = extend(true, {}, apiResponse);
      const entities = apiResponseWithMultiEntities.found;
      entities.push(entities[0]);

      // tslint:disable-next-line no-any
      const apiResponseWithDeferred = extend(true, {}, apiResponse) as any;
      apiResponseWithDeferred.deferred = [
        apiResponseWithDeferred.found[0].entity.key,
      ];

      beforeEach(function() {
        request.request_ = function(config, callback) {
          callback(null, apiResponse);
        };
      });

      it('should format the results', function(done) {
        sandbox.stub(entity, 'formatArray').callsFake(arr => {
          assert.strictEqual(arr, apiResponse.found);
          setImmediate(done);
          return arr;
        });

        request
          .createReadStream(key)
          .on('error', done)
          .emit('reading');
      });

      it('should continue looking for deferred results', function(done) {
        let numTimesCalled = 0;

        request.request_ = function(config, callback) {
          numTimesCalled++;

          if (numTimesCalled === 1) {
            callback(null, apiResponseWithDeferred);
            return;
          }

          const expectedKeys = apiResponseWithDeferred.deferred
            .map(entity.keyFromKeyProto)
            .map(entity.keyToKeyProto);

          assert.deepStrictEqual(config.reqOpts.keys, expectedKeys);
          done();
        };

        request
          .createReadStream(key)
          .on('error', done)
          .emit('reading');
      });

      it('should push results to the stream', function(done) {
        request
          .createReadStream(key)
          .on('error', done)
          .on('data', function(entity) {
            assert.deepStrictEqual(entity, expectedResult);
          })
          .on('end', done)
          .emit('reading');
      });

      it('should not push more results if stream was ended', function(done) {
        let entitiesEmitted = 0;

        request.request_ = function(config, callback) {
          setImmediate(function() {
            callback(null, apiResponseWithMultiEntities);
          });
        };

        request
          .createReadStream([key, key])
          .on('data', function() {
            entitiesEmitted++;
            this.end();
          })
          .on('end', function() {
            assert.strictEqual(entitiesEmitted, 1);
            done();
          })
          .emit('reading');
      });

      it('should not get more results if stream was ended', function(done) {
        let lookupCount = 0;

        request.request_ = function(config, callback) {
          lookupCount++;
          setImmediate(function() {
            callback(null, apiResponseWithDeferred);
          });
        };

        request
          .createReadStream(key)
          .on('error', done)
          .on('data', function() {
            this.end();
          })
          .on('end', function() {
            assert.strictEqual(lookupCount, 1);
            done();
          })
          .emit('reading');
      });
    });
  });

  describe('delete', function() {
    it('should delete by key', function(done) {
      request.request_ = function(config, callback) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'commit');
        assert(is.object(config.reqOpts.mutations[0].delete));
        callback();
      };
      request.delete(key, done);
    });

    it('should return apiResponse in callback', function(done) {
      const resp = {success: true};
      request.request_ = function(config, callback) {
        callback(null, resp);
      };
      request.delete(key, function(err, apiResponse) {
        assert.ifError(err);
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });

    it('should multi delete by keys', function(done) {
      request.request_ = function(config, callback) {
        assert.strictEqual(config.reqOpts.mutations.length, 2);
        callback();
      };
      request.delete([key, key], done);
    });

    it('should allow customization of GAX options', function(done) {
      const gaxOptions = {};

      request.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      request.delete(key, gaxOptions, assert.ifError);
    });

    describe('transactions', function() {
      beforeEach(function() {
        // Trigger transaction mode.
        request.id = 'transaction-id';
        request.requests_ = [];
      });

      it('should queue request', function() {
        request.delete(key);

        assert(is.object(request.requests_[0].mutations[0].delete));
      });
    });
  });

  describe('get', function() {
    describe('success', function() {
      const keys = [key];
      const fakeEntities = [{a: 'a'}, {b: 'b'}];

      beforeEach(function() {
        request.createReadStream = sandbox.spy(function() {
          const stream = through.obj();

          setImmediate(function() {
            fakeEntities.forEach(function(entity) {
              stream.push(entity);
            });

            stream.push(null);
          });

          return stream;
        });
      });

      it('should return an array of entities', function(done) {
        const options = {};

        request.get(keys, options, function(err, entities) {
          assert.ifError(err);
          assert.deepStrictEqual(entities, fakeEntities);

          const spy = request.createReadStream.getCall(0);
          assert.strictEqual(spy.args[0], keys);
          assert.strictEqual(spy.args[1], options);
          done();
        });
      });

      it('should return a single entity', function(done) {
        request.get(key, function(err, entity) {
          assert.ifError(err);
          assert.strictEqual(entity, fakeEntities[0]);
          done();
        });
      });

      it('should allow options to be omitted', function(done) {
        request.get(keys, function(err) {
          assert.ifError(err);
          done();
        });
      });

      it('should default options to an object', function(done) {
        request.get(keys, null, function(err) {
          assert.ifError(err);

          const spy = request.createReadStream.getCall(0);
          assert.deepStrictEqual(spy.args[1], {});
          done();
        });
      });
    });

    describe('error', function() {
      const error = new Error('err');

      beforeEach(function() {
        request.createReadStream = sandbox.spy(function() {
          const stream = through.obj();

          setImmediate(function() {
            stream.emit('error', error);
          });

          return stream;
        });
      });

      it('send an error to the callback', function(done) {
        request.get(key, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

  describe('insert', function() {
    it('should prepare entity objects', function(done) {
      const entityObject = {};
      const preparedEntityObject = {prepared: true};
      const expectedEntityObject = extend({}, preparedEntityObject, {
        method: 'insert',
      });

      sandbox.stub(Request, 'prepareEntityObject_').callsFake(obj => {
        assert.strictEqual(obj, entityObject);
        return preparedEntityObject;
      });

      request.save = function(entities) {
        assert.deepStrictEqual(entities[0], expectedEntityObject);
        done();
      };

      request.insert(entityObject, assert.ifError);
    });

    it('should pass the correct arguments to save', function(done) {
      request.save = function(entities, callback) {
        assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
          {
            key: {
              namespace: 'ns',
              kind: 'Company',
              path: ['Company', null],
            },
            data: {},
            method: 'insert',
          },
        ]);
        callback();
      };

      const key = new entity.Key({namespace: 'ns', path: ['Company']});
      request.insert({key: key, data: {}}, done);
    });
  });

  describe('runQueryStream', function() {
    beforeEach(function() {
      request.request_ = function() {};
    });

    it('should clone the query', function(done) {
      let query = new FakeQuery();
      query.namespace = 'namespace';
      query = extend(true, new FakeQuery(), query);

      sandbox.stub(entity, 'queryToQueryProto').callsFake(query_ => {
        assert.notStrictEqual(query_, query);
        assert.deepStrictEqual(query_, query);
        done();
      });

      request
        .runQueryStream(query)
        .on('error', done)
        .emit('reading');
    });

    it('should make correct request when the stream is ready', function(done) {
      const query = {namespace: 'namespace'};
      const queryProto = {};

      sandbox.stub(entity, 'queryToQueryProto').returns(queryProto);

      request.request_ = function(config) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'runQuery');
        assert(is.empty(config.reqOpts.readOptions));
        assert.strictEqual(config.reqOpts.query, queryProto);
        assert.strictEqual(
          config.reqOpts.partitionId.namespaceId,
          query.namespace
        );
        assert.strictEqual(config.gaxOpts, undefined);

        done();
      };

      request
        .runQueryStream(query)
        .on('error', done)
        .emit('reading');
    });

    it('should allow customization of GAX options', function(done) {
      sandbox.stub(entity, 'queryToQueryProto');
      const options = {
        gaxOptions: {},
      };

      request.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      request
        .runQueryStream({}, options)
        .on('error', done)
        .emit('reading');
    });

    it('should allow setting strong read consistency', function(done) {
      sandbox.stub(entity, 'queryToQueryProto');
      request.request_ = function(config) {
        assert.strictEqual(config.reqOpts.readOptions.readConsistency, 1);
        done();
      };

      request
        .runQueryStream({}, {consistency: 'strong'})
        .on('error', done)
        .emit('reading');
    });

    it('should allow setting strong eventual consistency', function(done) {
      sandbox.stub(entity, 'queryToQueryProto');
      request.request_ = function(config) {
        assert.strictEqual(config.reqOpts.readOptions.readConsistency, 2);
        done();
      };

      request
        .runQueryStream({}, {consistency: 'eventual'})
        .on('error', done)
        .emit('reading');
    });

    describe('error', function() {
      const error = new Error('Error.');

      beforeEach(function() {
        request.request_ = function(config, callback) {
          callback(error);
        };
      });

      it('should emit error on a stream', function(done) {
        sandbox.stub(entity, 'queryToQueryProto');
        request
          .runQueryStream({})
          .on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          })
          .emit('reading');
      });
    });

    describe('success', function() {
      const entityResultsPerApiCall = {
        1: [{a: true}],
        2: [{b: true}, {c: true}],
      };

      const apiResponse = {
        batch: {
          entityResults: [{a: true}, {b: true}, {c: true}],
          endCursor: Buffer.from('abc'),
          moreResults: 'MORE_RESULTS_AFTER_LIMIT',
          skippedResults: 0,
        },
      };

      let formatArrayStub;
      beforeEach(function() {
        request.request_ = function(config, callback) {
          callback(null, apiResponse);
        };

        formatArrayStub = sandbox
          .stub(entity, 'formatArray')
          .callsFake(array => {
            return array;
          });
      });

      it('should format results', function(done) {
        sandbox.stub(entity, 'queryToQueryProto');
        formatArrayStub.restore();
        sandbox.stub(entity, 'formatArray').callsFake(array => {
          assert.strictEqual(array, apiResponse.batch.entityResults);
          return array;
        });

        const entities: {}[] = [];

        request
          .runQueryStream({})
          .on('error', done)
          .on('data', function(entity) {
            entities.push(entity);
          })
          .on('end', function() {
            assert.deepStrictEqual(entities, apiResponse.batch.entityResults);
            done();
          });
      });

      it('should re-run query if not finished', function(done) {
        const query = {
          limitVal: 1,
          offsetVal: 8,
        };
        const queryProto = {
          limit: {
            value: query.limitVal,
          },
        };

        let timesRequestCalled = 0;
        let startCalled = false;
        let offsetCalled = false;

        formatArrayStub.restore();
        sandbox.stub(entity, 'formatArray').callsFake(array => {
          assert.strictEqual(
            array,
            entityResultsPerApiCall[timesRequestCalled]
          );
          return entityResultsPerApiCall[timesRequestCalled];
        });

        request.request_ = function(config, callback) {
          timesRequestCalled++;

          const resp = extend(true, {}, apiResponse);
          resp.batch.entityResults =
            entityResultsPerApiCall[timesRequestCalled];

          if (timesRequestCalled === 1) {
            assert.strictEqual(config.client, 'DatastoreClient');
            assert.strictEqual(config.method, 'runQuery');

            resp.batch.moreResults = 'NOT_FINISHED';

            callback(null, resp);
          } else {
            assert.strictEqual(startCalled, true);
            assert.strictEqual(offsetCalled, true);
            assert.strictEqual(config.reqOpts.query, queryProto);

            resp.batch.moreResults = 'MORE_RESULTS_AFTER_LIMIT';

            callback(null, resp);
          }
        };

        FakeQuery.prototype.start = function(endCursor) {
          assert.strictEqual(
            endCursor,
            apiResponse.batch.endCursor.toString('base64')
          );
          startCalled = true;
          return this;
        };

        FakeQuery.prototype.offset = function(offset_) {
          const offset = query.offsetVal - apiResponse.batch.skippedResults;
          assert.strictEqual(offset_, offset);
          offsetCalled = true;
          return this;
        };

        FakeQuery.prototype.limit = function(limit_) {
          if (timesRequestCalled === 1) {
            assert.strictEqual(
              limit_,
              entityResultsPerApiCall[1].length - query.limitVal
            );
          } else {
            // Should restore the original limit.
            assert.strictEqual(limit_, query.limitVal);
          }
          return this;
        };

        sandbox.stub(entity, 'queryToQueryProto').callsFake(query_ => {
          if (timesRequestCalled > 1) {
            assert.strictEqual(query_, query);
          }
          return queryProto;
        });

        const entities: {}[] = [];
        let info;

        request
          .runQueryStream(query)
          .on('error', done)
          .on('info', function(_info) {
            info = _info;
          })
          .on('data', function(entity) {
            entities.push(entity);
          })
          .on('end', function() {
            const allResults = [].slice
              .call(entityResultsPerApiCall[1])
              .concat(entityResultsPerApiCall[2]);

            assert.deepStrictEqual(entities, allResults);

            assert.deepStrictEqual(info, {
              endCursor: apiResponse.batch.endCursor.toString('base64'),
              moreResults: apiResponse.batch.moreResults,
            });

            done();
          });
      });

      it('should handle large limitless queries', function(done) {
        let timesRequestCalled = 0;
        let limitCalled = false;

        const query = {
          limitVal: -1,
        };

        request.request_ = function(config, callback) {
          let batch;

          if (++timesRequestCalled === 2) {
            batch = {};
          } else {
            batch = {
              moreResults: 'NOT_FINISHED',
              endCursor: Buffer.from('abc'),
            };
          }

          callback(null, {batch: batch});
        };

        sandbox.stub(entity, 'queryToQueryProto').returns({});

        FakeQuery.prototype.limit = function() {
          limitCalled = true;
          return this;
        };

        request
          .runQueryStream(query)
          .on('error', done)
          .on('data', function() {})
          .on('end', function() {
            assert.strictEqual(timesRequestCalled, 2);
            assert.strictEqual(limitCalled, false);
            done();
          });
      });

      it('should not push more results if stream was ended', function(done) {
        let timesRequestCalled = 0;
        let entitiesEmitted = 0;

        sandbox.stub(entity, 'queryToQueryProto');

        request.request_ = function(config, callback) {
          timesRequestCalled++;

          const resp = extend(true, {}, apiResponse);
          resp.batch.entityResults =
            entityResultsPerApiCall[timesRequestCalled];

          if (timesRequestCalled === 1) {
            resp.batch.moreResults = 'NOT_FINISHED';
            callback(null, resp);
          } else {
            resp.batch.moreResults = 'MORE_RESULTS_AFTER_LIMIT';
            callback(null, resp);
          }
        };

        request
          .runQueryStream({})
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
        let timesRequestCalled = 0;
        sandbox.stub(entity, 'queryToQueryProto');
        request.request_ = function(config, callback) {
          timesRequestCalled++;
          callback(null, apiResponse);
        };

        request
          .runQueryStream({})
          .on('error', done)
          .on('data', function() {
            this.end();
          })
          .on('end', function() {
            assert.strictEqual(timesRequestCalled, 1);
            done();
          });
      });
    });
  });

  describe('runQuery', function() {
    const query = {};

    describe('success', function() {
      const fakeInfo = {};
      const fakeEntities = [{a: 'a'}, {b: 'b'}];

      beforeEach(function() {
        request.runQueryStream = sandbox.spy(function() {
          const stream = through.obj();

          setImmediate(function() {
            stream.emit('info', fakeInfo);

            fakeEntities.forEach(function(entity) {
              stream.push(entity);
            });

            stream.push(null);
          });

          return stream;
        });
      });

      it('should return an array of entities', function(done) {
        const options = {};

        request.runQuery(query, options, function(err, entities, info) {
          assert.ifError(err);
          assert.deepStrictEqual(entities, fakeEntities);
          assert.strictEqual(info, fakeInfo);

          const spy = request.runQueryStream.getCall(0);
          assert.strictEqual(spy.args[0], query);
          assert.strictEqual(spy.args[1], options);
          done();
        });
      });

      it('should allow options to be omitted', function(done) {
        request.runQuery(query, function(err) {
          assert.ifError(err);
          done();
        });
      });

      it('should default options to an object', function(done) {
        request.runQuery(query, null, function(err) {
          assert.ifError(err);

          const spy = request.runQueryStream.getCall(0);
          assert.deepStrictEqual(spy.args[1], {});
          done();
        });
      });
    });

    describe('error', function() {
      const error = new Error('err');

      beforeEach(function() {
        request.runQueryStream = sandbox.spy(function() {
          const stream = through.obj();

          setImmediate(function() {
            stream.emit('error', error);
          });

          return stream;
        });
      });

      it('send an error to the callback', function(done) {
        request.runQuery(query, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

  describe('save', function() {
    it('should save with keys', function(done) {
      const expectedReq = {
        mutations: [
          {
            upsert: {
              key: {
                partitionId: {
                  namespaceId: 'namespace',
                },
                path: [
                  {
                    kind: 'Company',
                    id: 123,
                  },
                ],
              },
              properties: {
                k: {
                  stringValue: 'v',
                },
              },
            },
          },
          {
            upsert: {
              key: {
                partitionId: {
                  namespaceId: 'namespace',
                },
                path: [
                  {
                    kind: 'Company',
                    id: 123,
                  },
                ],
              },
              properties: {
                k: {
                  stringValue: 'v',
                },
              },
            },
          },
        ],
      };

      request.request_ = function(config, callback) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'commit');

        assert.deepStrictEqual(config.reqOpts, expectedReq);
        assert.deepStrictEqual(config.gaxOpts, {});

        callback();
      };
      request.save(
        [{key: key, data: {k: 'v'}}, {key: key, data: {k: 'v'}}],
        done
      );
    });

    it('should allow customization of GAX options', function(done) {
      const gaxOptions = {};

      request.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      request.save(
        {
          key: key,
          data: {},
        },
        gaxOptions,
        assert.ifError
      );
    });

    it('should prepare entity objects', function(done) {
      const entityObject = {};
      let prepared = false;

      sandbox.stub(Request, 'prepareEntityObject_').callsFake(obj => {
        assert.strictEqual(obj, entityObject);
        prepared = true;
        return {
          key: key,
          method: 'insert',
          data: {k: 'v'},
        };
      });

      request.request_ = function() {
        assert.strictEqual(prepared, true);
        done();
      };

      request.save(entityObject, assert.ifError);
    });

    it('should save with specific method', function(done) {
      request.request_ = function(config, callback) {
        assert.strictEqual(config.reqOpts.mutations.length, 3);
        assert(is.object(config.reqOpts.mutations[0].insert));
        assert(is.object(config.reqOpts.mutations[1].update));
        assert(is.object(config.reqOpts.mutations[2].upsert));

        const insert = config.reqOpts.mutations[0].insert;
        assert.deepStrictEqual(insert.properties.k, {stringValue: 'v'});

        const update = config.reqOpts.mutations[1].update;
        assert.deepStrictEqual(update.properties.k2, {stringValue: 'v2'});

        const upsert = config.reqOpts.mutations[2].upsert;
        assert.deepStrictEqual(upsert.properties.k3, {stringValue: 'v3'});

        callback();
      };

      request.save(
        [
          {key: key, method: 'insert', data: {k: 'v'}},
          {key: key, method: 'update', data: {k2: 'v2'}},
          {key: key, method: 'upsert', data: {k3: 'v3'}},
        ],
        done
      );
    });

    it('should throw if a given method is not recognized', function() {
      assert.throws(function() {
        request.save(
          {
            key: key,
            method: 'auto_insert_id',
            data: {
              k: 'v',
            },
          },
          assert.ifError
        );
      }, /Method auto_insert_id not recognized/);
    });

    it('should not alter the provided data object', function(done) {
      const entities = [
        {
          key: key,
          method: 'insert',
          indexed: false,
          data: {
            value: {
              a: 'b',
              c: [1, 2, 3],
            },
          },
        },
      ];
      const expectedEntities = entities.map(x => extend(true, {}, x));

      request.request_ = function() {
        // By the time the request is made, the original object has already been
        // transformed into a raw request.
        assert.deepStrictEqual(entities, expectedEntities);
        done();
      };

      request.save(entities, assert.ifError);
    });

    it('should return apiResponse in callback', function(done) {
      const key = new entity.Key({namespace: 'ns', path: ['Company']});
      const mockCommitResponse = {};
      request.request_ = function(config, callback) {
        callback(null, mockCommitResponse);
      };
      request.save({key: key, data: {}}, function(err, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(mockCommitResponse, apiResponse);
        done();
      });
    });

    it('should allow setting the indexed value of a property', function(done) {
      request.request_ = function(config) {
        const property = config.reqOpts.mutations[0].upsert.properties.name;
        assert.strictEqual(property.stringValue, 'value');
        assert.strictEqual(property.excludeFromIndexes, true);
        done();
      };

      request.save(
        {
          key: key,
          data: [
            {
              name: 'name',
              value: 'value',
              excludeFromIndexes: true,
            },
          ],
        },
        assert.ifError
      );
    });

    it('should allow setting the indexed value on arrays', function(done) {
      request.request_ = function(config) {
        const property = config.reqOpts.mutations[0].upsert.properties.name;

        property.arrayValue.values.forEach(function(value) {
          assert.strictEqual(value.excludeFromIndexes, true);
        });

        done();
      };

      request.save(
        {
          key: key,
          data: [
            {
              name: 'name',
              value: ['one', 'two', 'three'],
              excludeFromIndexes: true,
            },
          ],
        },
        assert.ifError
      );
    });

    it('should assign ID on keys without them', function(done) {
      const incompleteKey = new entity.Key({path: ['Incomplete']});
      const incompleteKey2 = new entity.Key({path: ['Incomplete']});
      const completeKey = new entity.Key({path: ['Complete', 'Key']});

      const keyProtos: {}[] = [];
      const ids = [1, 2];

      const response = {
        mutationResults: [
          {
            key: {},
          },
          {
            key: {},
          },
          {},
        ],
      };

      request.request_ = function(config, callback) {
        callback(null, response);
      };

      sandbox.stub(entity, 'keyFromKeyProto').callsFake(keyProto => {
        keyProtos.push(keyProto);
        return {
          id: ids[keyProtos.length - 1],
        };
      });

      request.save(
        [
          {key: incompleteKey, data: {}},
          {key: incompleteKey2, data: {}},
          {key: completeKey, data: {}},
        ],
        function(err) {
          assert.ifError(err);

          assert.strictEqual(incompleteKey.id, ids[0]);
          assert.strictEqual(incompleteKey2.id, ids[1]);

          assert.strictEqual(keyProtos.length, 2);
          assert.strictEqual(keyProtos[0], response.mutationResults[0].key);
          assert.strictEqual(keyProtos[1], response.mutationResults[1].key);

          done();
        }
      );
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
          data: [{name: 'name', value: 'value'}],
        });

        assert.strictEqual(typeof request.requestCallbacks_[0], 'function');
        assert.strictEqual(typeof request.requests_[0], 'object');
      });
    });
  });

  describe('update', function() {
    it('should prepare entity objects', function(done) {
      const entityObject = {};
      const preparedEntityObject = {prepared: true};
      const expectedEntityObject = extend({}, preparedEntityObject, {
        method: 'update',
      });

      sandbox.stub(Request, 'prepareEntityObject_').callsFake(obj => {
        assert.strictEqual(obj, entityObject);
        return preparedEntityObject;
      });

      request.save = function(entities) {
        assert.deepStrictEqual(entities[0], expectedEntityObject);
        done();
      };

      request.update(entityObject, assert.ifError);
    });

    it('should pass the correct arguments to save', function(done) {
      request.save = function(entities, callback) {
        assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
          {
            key: {
              namespace: 'ns',
              kind: 'Company',
              path: ['Company', null],
            },
            data: {},
            method: 'update',
          },
        ]);
        callback();
      };

      const key = new entity.Key({namespace: 'ns', path: ['Company']});
      request.update({key: key, data: {}}, done);
    });
  });

  describe('upsert', function() {
    it('should prepare entity objects', function(done) {
      const entityObject = {};
      const preparedEntityObject = {prepared: true};
      const expectedEntityObject = extend({}, preparedEntityObject, {
        method: 'upsert',
      });

      sandbox.stub(Request, 'prepareEntityObject_').callsFake(obj => {
        assert.strictEqual(obj, entityObject);
        return preparedEntityObject;
      });

      request.save = function(entities) {
        assert.deepStrictEqual(entities[0], expectedEntityObject);
        done();
      };

      request.upsert(entityObject, assert.ifError);
    });

    it('should pass the correct arguments to save', function(done) {
      request.save = function(entities, callback) {
        assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
          {
            key: {
              namespace: 'ns',
              kind: 'Company',
              path: ['Company', null],
            },
            data: {},
            method: 'upsert',
          },
        ]);

        callback();
      };

      const key = new entity.Key({namespace: 'ns', path: ['Company']});
      request.upsert({key: key, data: {}}, done);
    });
  });

  describe('request_', function() {
    const CONFIG = {
      client: 'FakeClient', // name set at top of file
      method: 'method',
      reqOpts: {
        a: 'b',
        c: 'd',
      },
      gaxOpts: {
        a: 'b',
        c: 'd',
      },
    };

    const PROJECT_ID = 'project-id';

    beforeEach(function() {
      const clients_ = new Map();
      clients_.set(CONFIG.client, {
        [CONFIG.method]: function() {},
      });

      request.datastore = {
        clients_: clients_,

        auth: {
          getProjectId: function(callback) {
            callback(null, PROJECT_ID);
          },
        },
      };
    });

    it('should get the project ID', function(done) {
      request.datastore.auth.getProjectId = function() {
        done();
      };

      request.request_(CONFIG, assert.ifError);
    });

    it('should return error if getting project ID failed', function(done) {
      const error = new Error('Error.');

      request.datastore.auth.getProjectId = function(callback) {
        callback(error);
      };

      request.request_(CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should initiate and cache the client', function() {
      const fakeClient = {
        [CONFIG.method]: function() {},
      };

      v1FakeClientOverride = function(options) {
        assert.deepStrictEqual(options, request.datastore.options);
        return fakeClient;
      };

      request.datastore.clients_ = new Map();

      request.request_(CONFIG, assert.ifError);

      const client = request.datastore.clients_.get(CONFIG.client);

      assert.strictEqual(client, fakeClient);
    });

    it('should use the cached client', function(done) {
      v1FakeClientOverride = function() {
        done(new Error('Should not re-instantiate a GAX client.'));
      };

      request.request_(CONFIG);
      done();
    });

    it('should replace the project ID token', function(done) {
      const replacedReqOpts = {};

      // tslint:disable-next-line no-any
      const expectedReqOpts: any = extend({}, CONFIG.reqOpts);
      expectedReqOpts.projectId = request.projectId;

      pjyOverride = function(reqOpts, projectId) {
        assert.notStrictEqual(reqOpts, CONFIG.reqOpts);
        assert.deepStrictEqual(reqOpts, expectedReqOpts);
        assert.strictEqual(projectId, PROJECT_ID);
        return replacedReqOpts;
      };

      request.datastore.clients_ = new Map();
      request.datastore.clients_.set(CONFIG.client, {
        [CONFIG.method]: function(reqOpts) {
          assert.strictEqual(reqOpts, replacedReqOpts);
          done();
        },
      });

      request.request_(CONFIG, assert.ifError);
    });

    it('should send gaxOpts', function(done) {
      request.datastore.clients_ = new Map();
      request.datastore.clients_.set(CONFIG.client, {
        [CONFIG.method]: function(_, gaxO) {
          delete gaxO.headers;
          assert.deepStrictEqual(gaxO, CONFIG.gaxOpts);
          done();
        },
      });

      request.request_(CONFIG, assert.ifError);
    });

    it('should send google-cloud-resource-prefix', function(done) {
      request.datastore.clients_ = new Map();
      request.datastore.clients_.set(CONFIG.client, {
        [CONFIG.method]: function(_, gaxO) {
          assert.deepStrictEqual(gaxO.headers, {
            'google-cloud-resource-prefix': 'projects/' + PROJECT_ID,
          });
          done();
        },
      });

      request.request_(CONFIG, assert.ifError);
    });

    describe('commit', function() {
      it('should set the mode', function(done) {
        request.datastore.clients_ = new Map();
        request.datastore.clients_.set(CONFIG.client, {
          commit: function(reqOpts) {
            assert.strictEqual(reqOpts.mode, 'NON_TRANSACTIONAL');
            done();
          },
        });

        const config = extend({}, CONFIG, {
          method: 'commit',
        });

        request.request_(config, assert.ifError);
      });
    });

    describe('transaction', function() {
      const TRANSACTION_ID = 'transaction';

      beforeEach(function() {
        request.id = TRANSACTION_ID;
      });

      it('should set the commit transaction info', function(done) {
        request.datastore.clients_ = new Map();
        request.datastore.clients_.set(CONFIG.client, {
          commit: function(reqOpts) {
            assert.strictEqual(reqOpts.mode, 'TRANSACTIONAL');
            assert.strictEqual(reqOpts.transaction, TRANSACTION_ID);
            done();
          },
        });

        const config = extend({}, CONFIG, {
          method: 'commit',
        });

        request.request_(config, assert.ifError);
      });

      it('should set the rollback transaction info', function(done) {
        request.datastore.clients_ = new Map();
        request.datastore.clients_.set(CONFIG.client, {
          rollback: function(reqOpts) {
            assert.strictEqual(reqOpts.transaction, TRANSACTION_ID);
            done();
          },
        });

        const config = extend({}, CONFIG, {
          method: 'rollback',
        });

        request.request_(config, assert.ifError);
      });

      it('should set the lookup transaction info', function(done) {
        const config = extend(true, {}, CONFIG, {
          method: 'lookup',
        });

        request.datastore.clients_ = new Map();
        request.datastore.clients_.set(CONFIG.client, {
          lookup: function(reqOpts) {
            assert.strictEqual(reqOpts.readOptions.transaction, TRANSACTION_ID);
            done();
          },
        });

        request.request_(config, assert.ifError);
      });

      it('should set the runQuery transaction info', function(done) {
        const config = extend(true, {}, CONFIG, {
          method: 'runQuery',
        });

        request.datastore.clients_ = new Map();
        request.datastore.clients_.set(CONFIG.client, {
          runQuery: function(reqOpts) {
            assert.strictEqual(reqOpts.readOptions.transaction, TRANSACTION_ID);
            done();
          },
        });

        request.request_(config, assert.ifError);
      });

      it('should throw if read consistency is specified', function() {
        const config = extend(true, {}, CONFIG, {
          method: 'runQuery',
          reqOpts: {
            readOptions: {
              readConsistency: 1,
            },
          },
        });

        assert.throws(function() {
          request.request_(config, assert.ifError);
        }, /Read consistency cannot be specified in a transaction\./);
      });
    });
  });
});
