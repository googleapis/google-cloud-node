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

import * as arrify from 'arrify';
import * as assert from 'assert';
import * as proxyquire from 'proxyquire';
import * as pfy from '@google-cloud/promisify';

const {entity} = require('../src/entity');

let promisified = false;
const fakePfy = Object.assign({}, pfy, {
  promisifyAll(Class, options) {
    if (Class.name !== 'Transaction') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['createQuery', 'delete', 'save']);
  },
});

// tslint:disable-next-line no-any
const DatastoreRequestOverride: any = {
  delete() {},
  save() {},
};

class FakeDatastoreRequest {
  delete() {
    const args = [].slice.apply(arguments);
    const results = DatastoreRequestOverride.delete.apply(null, args);
    DatastoreRequestOverride.delete = function() {};
    return results;
  }

  save() {
    const args = [].slice.apply(arguments);
    const results = DatastoreRequestOverride.save.apply(null, args);
    DatastoreRequestOverride.save = function() {};
    return results;
  }
}

describe('Transaction', function() {
  let Transaction;
  let transaction;
  const TRANSACTION_ID = 'transaction-id';
  const PROJECT_ID = 'project-id';
  const NAMESPACE = 'a-namespace';

  const DATASTORE = {
    request_() {},
    projectId: PROJECT_ID,
    namespace: NAMESPACE,
  };

  function key(path) {
    return new entity.Key({path: arrify(path)});
  }

  before(function() {
    Transaction = proxyquire('../src/transaction.js', {
      '@google-cloud/promisify': fakePfy,
      './request.js': {DatastoreRequest: FakeDatastoreRequest},
    }).Transaction;
  });

  beforeEach(function() {
    transaction = new Transaction(DATASTORE);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the datastore instance', function() {
      assert.strictEqual(transaction.datastore, DATASTORE);
    });

    it('should localize the project ID', function() {
      assert.strictEqual(transaction.projectId, PROJECT_ID);
    });

    it('should localize the namespace', function() {
      assert.strictEqual(transaction.namespace, NAMESPACE);
    });

    it('should localize the transaction ID', function() {
      const options = {
        id: 'transaction-id',
      };

      const transaction = new Transaction(DATASTORE, options);
      assert.strictEqual(transaction.id, options.id);
    });

    it('should localize readOnly', function() {
      const options = {
        readOnly: true,
      };

      const transaction = new Transaction(DATASTORE, options);
      assert.strictEqual(transaction.readOnly, true);
    });

    it('should localize request function', function(done) {
      // tslint:disable-next-line no-any
      const fakeDataset: any = {
        request_: {
          bind(context) {
            assert.strictEqual(context, fakeDataset);

            setImmediate(function() {
              assert.strictEqual(transaction.request, fakeDataset.request);
              done();
            });

            return fakeDataset.request;
          },
        },
      };

      const transaction = new Transaction(fakeDataset);
    });

    it('should localize default properties', function() {
      assert.deepStrictEqual(transaction.modifiedEntities_, []);
      assert.deepStrictEqual(transaction.requestCallbacks_, []);
      assert.deepStrictEqual(transaction.requests_, []);
    });
  });

  describe('commit', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should commit', function(done) {
      transaction.request_ = function(config) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'commit');
        assert.strictEqual(config.gaxOptions, undefined);
        done();
      };
      transaction.commit();
    });

    it('should accept gaxOptions', function(done) {
      const gaxOptions = {};

      transaction.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      transaction.commit(gaxOptions);
    });

    it('should skip the commit', function(done) {
      transaction.skipCommit = true;

      // If called, the test will blow up.
      transaction.request_ = done;

      transaction.commit(done);
    });

    describe('errors', function() {
      const error = new Error('Error.');
      const apiResponse = {};

      const rollbackError = new Error('Error.');
      const rollbackApiResponse = {};

      beforeEach(function() {
        transaction.rollback = function(callback) {
          callback(rollbackError, rollbackApiResponse);
        };

        transaction.request_ = function(config, callback) {
          callback(error, apiResponse);
        };
      });

      it('should pass the commit error to the callback', function(done) {
        transaction.commit(function(err, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    it('should pass apiResponse to callback', function(done) {
      const resp = {success: true};
      transaction.request_ = function(config, callback) {
        callback(null, resp);
      };
      transaction.commit(function(err, apiResponse) {
        assert.ifError(err);
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });

    it('should group mutations & execute original methods', function() {
      const deleteArg1 = key(['Product', 123]);
      const deleteArg2 = key(['Product', 234]);

      const saveArg1 = {key: key(['Product', 345]), data: ''};
      const saveArg2 = {key: key(['Product', 456]), data: ''};

      // Queue saves & deletes in varying order.
      transaction.delete(deleteArg1);
      transaction.save(saveArg1);
      transaction.delete(deleteArg2);
      transaction.save(saveArg2);

      const args: Array<{}> = [];

      let deleteCalled = 0;
      DatastoreRequestOverride.delete = function() {
        args.push(arguments[0]);
        deleteCalled++;
      };

      let saveCalled = 0;
      DatastoreRequestOverride.save = function() {
        args.push(arguments[0]);
        saveCalled++;
      };

      transaction.request_ = function() {};

      transaction.commit();

      assert.strictEqual(deleteCalled, 1);
      assert.strictEqual(saveCalled, 1);

      assert.strictEqual(args.length, 2);

      // Save arguments must come first.
      assert.deepStrictEqual(args, [
        [saveArg1, saveArg2],
        [deleteArg1, deleteArg2],
      ]);
    });

    it('should honor ordering of mutations (last wins)', function() {
      // The delete should be ignored.
      transaction.delete(key(['Product', 123]));
      transaction.save({key: key(['Product', 123]), data: ''});

      let deleteCalled = 0;
      DatastoreRequestOverride.delete = function() {
        deleteCalled++;
      };

      let saveCalled = 0;
      DatastoreRequestOverride.save = function() {
        saveCalled++;
      };

      transaction.request_ = function() {};

      transaction.commit();
      assert.strictEqual(deleteCalled, 0);
      assert.strictEqual(saveCalled, 1);
    });

    it('should not squash key-incomplete mutations', function(done) {
      transaction.save({key: key(['Product']), data: ''});
      transaction.save({key: key(['Product']), data: ''});

      DatastoreRequestOverride.save = function(entities) {
        assert.strictEqual(entities.length, 2);
        done();
      };

      transaction.request_ = function() {};

      transaction.commit();
    });

    it('should send the built request object', function(done) {
      transaction.requests_ = [
        {
          mutations: [{a: 'b'}, {c: 'd'}],
        },
        {
          mutations: [{e: 'f'}, {g: 'h'}],
        },
      ];

      transaction.request_ = function(config) {
        assert.deepStrictEqual(config.reqOpts, {
          mutations: [{a: 'b'}, {c: 'd'}, {e: 'f'}, {g: 'h'}],
        });
        done();
      };

      transaction.commit();
    });

    it('should execute the queued callbacks', function() {
      let cb1Called = false;
      let cb2Called = false;

      transaction.requestCallbacks_ = [
        function() {
          cb1Called = true;
        },
        function() {
          cb2Called = true;
        },
      ];

      transaction.request_ = function(config, cb) {
        cb();
      };

      transaction.commit();

      assert(cb1Called);
      assert(cb2Called);
    });
  });

  describe('createQuery', function() {
    it('should return query from datastore.createQuery', function() {
      const args = [0, 1];
      const createQueryReturnValue = {};

      transaction.datastore.createQuery = function(...ags) {
        assert.strictEqual(this, transaction);
        assert.strictEqual(ags[0], args[0]);
        assert.strictEqual(ags[1], args[1]);
        return createQueryReturnValue;
      };

      const query = transaction.createQuery(...args);
      assert.strictEqual(query, createQueryReturnValue);
    });
  });

  describe('delete', function() {
    it('should push entities into a queue', function() {
      const keys = [
        key('Product123'),
        key('Product234'),
        key('Product345'),
      ];

      transaction.delete(keys);

      assert.strictEqual(transaction.modifiedEntities_.length, keys.length);

      transaction.modifiedEntities_.forEach(function(queuedEntity) {
        assert.strictEqual(queuedEntity.method, 'delete');
        assert(keys.indexOf(queuedEntity.entity.key) > -1);
        assert.deepStrictEqual(queuedEntity.args, [queuedEntity.entity.key]);
      });
    });
  });

  describe('rollback', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should rollback', function(done) {
      transaction.request_ = function(config) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'rollback');
        assert.strictEqual(config.gaxOptions, undefined);
        done();
      };
      transaction.rollback();
    });

    it('should allow setting gaxOptions', function(done) {
      const gaxOptions = {};

      transaction.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      transaction.rollback(gaxOptions);
    });

    it('should pass error to callback', function(done) {
      const error = new Error('Error.');
      transaction.request_ = function(config, callback) {
        callback(error);
      };
      transaction.rollback(function(err) {
        assert.deepStrictEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      const resp = {success: true};
      transaction.request_ = function(config, callback) {
        callback(null, resp);
      };
      transaction.rollback(function(err, apiResponse) {
        assert.ifError(err);
        assert.deepStrictEqual(resp, apiResponse);
        done();
      });
    });

    it('should set skipCommit', function(done) {
      transaction.request_ = function(config, callback) {
        callback();
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.skipCommit, true);
        done();
      });
    });

    it('should set skipCommit when rollback errors', function(done) {
      transaction.request_ = function(config, callback) {
        callback(new Error('Error.'));
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.skipCommit, true);
        done();
      });
    });
  });

  describe('run', function() {
    it('should make the correct API request', function(done) {
      transaction.request_ = function(config) {
        assert.strictEqual(config.client, 'DatastoreClient');
        assert.strictEqual(config.method, 'beginTransaction');
        assert.deepStrictEqual(config.reqOpts, {transactionOptions: {}});
        assert.strictEqual(config.gaxOpts, undefined);
        done();
      };

      transaction.run(assert.ifError);
    });

    it('should allow setting gaxOptions', function(done) {
      const gaxOptions = {};

      transaction.request_ = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      transaction.run({gaxOptions});
    });

    describe('options.readOnly', function() {
      it('should respect the readOnly option', function(done) {
        const options = {
          readOnly: true,
        };

        transaction.request_ = function(config) {
          assert.deepStrictEqual(
            config.reqOpts.transactionOptions.readOnly,
            {}
          );
          done();
        };

        transaction.run(options, assert.ifError);
      });

      it('should respect the global readOnly option', function(done) {
        transaction.readOnly = true;

        transaction.request_ = function(config) {
          assert.deepStrictEqual(
            config.reqOpts.transactionOptions.readOnly,
            {}
          );
          done();
        };

        transaction.run(assert.ifError);
      });
    });

    describe('options.transactionId', function() {
      it('should respect the transactionId option', function(done) {
        const options = {
          transactionId: 'transaction-id',
        };

        transaction.request_ = function(config) {
          assert.deepStrictEqual(config.reqOpts.transactionOptions.readWrite, {
            previousTransaction: options.transactionId,
          });
          done();
        };

        transaction.run(options, assert.ifError);
      });

      it('should respect the global transactionId option', function(done) {
        transaction.id = 'transaction-id';

        transaction.request_ = function(config) {
          assert.deepStrictEqual(config.reqOpts.transactionOptions.readWrite, {
            previousTransaction: transaction.id,
          });
          done();
        };

        transaction.run(assert.ifError);
      });
    });

    describe('options.transactionOptions', function() {
      it('should allow full override of transactionOptions', function(done) {
        transaction.readOnly = true;

        const options = {
          transactionOptions: {
            readWrite: {
              previousTransaction: 'transaction-id',
            },
          },
        };

        transaction.request_ = function(config) {
          assert.deepStrictEqual(config.reqOpts, options);
          done();
        };

        transaction.run(options, assert.ifError);
      });
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(function() {
        transaction.request_ = function(config, callback) {
          callback(error, apiResponse);
        };
      });

      it('should pass error & API response to callback', function(done) {
        transaction.run(function(err, transaction, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(transaction, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        transaction: TRANSACTION_ID,
      };

      beforeEach(function() {
        transaction.request_ = function(config, callback) {
          callback(null, apiResponse);
        };
      });

      it('should set transaction id', function(done) {
        delete transaction.id;

        transaction.run(function(err) {
          assert.ifError(err);
          assert.strictEqual(transaction.id, TRANSACTION_ID);
          done();
        });
      });

      it('should exec callback with Transaction & apiResponse', function(done) {
        transaction.run(function(err, transaction_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(transaction_, transaction);
          assert.deepStrictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('save', function() {
    it('should push entities into a queue', function() {
      const entities = [
        {key: key('Product123'), data: 123},
        {key: key('Product234'), data: 234},
        {key: key('Product345'), data: 345},
      ];

      transaction.save(entities);

      assert.strictEqual(transaction.modifiedEntities_.length, entities.length);

      transaction.modifiedEntities_.forEach(function(queuedEntity) {
        assert.strictEqual(queuedEntity.method, 'save');

        const match = entities.filter(function(ent) {
          return ent.key === queuedEntity.entity.key;
        })[0];

        assert.deepStrictEqual(queuedEntity.args, [match]);
      });
    });
  });
});
