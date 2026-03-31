/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {split} from 'split-array-stream';
import {Transform} from 'stream';
import * as through from 'through2';

import {TimestampBounds} from '../src/transaction';
import {google} from '../protos/protos';
import RequestOptions = google.spanner.v1.RequestOptions;
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;

let promisified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'Table') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['delete', 'drop']);
  },
});

class FakeTransaction {
  commit(gaxOptions, callback) {
    callback(null, {});
  }
  createReadStream() {
    return through.obj();
  }
  deleteRows() {}
  end() {}
  insert() {}
  replace() {}
  upsert() {}
  update() {}
}

interface GetSnapshotCallback {
  (err: Error, snapshot?: null): void;
  (err: null, snapshot: FakeTransaction): void;
}

describe('Table', () => {
  const sandbox = sinon.createSandbox();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Table: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let TableCached: any;
  let table;
  let tableWithSchema;
  let transaction: FakeTransaction;

  const DATABASE = {
    runTransaction: (opts, callback) => callback(null, transaction),
    getSnapshot: (options, callback) => callback(null, transaction),
  };

  const NAME = 'table-name';
  const NAMEWITHSCHEMA = 'schema.' + NAME;

  before(() => {
    Table = proxyquire('../src/table.js', {
      '@google-cloud/promisify': fakePfy,
    }).Table;
    TableCached = extend({}, Table);
  });

  beforeEach(() => {
    extend(Table, TableCached);
    table = new Table(DATABASE, NAME);
    tableWithSchema = new Table(DATABASE, NAMEWITHSCHEMA);
    transaction = new FakeTransaction();
  });

  afterEach(() => sandbox.restore());

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize database', () => {
      assert.strictEqual(table.database, DATABASE);
    });

    it('should localize name', () => {
      assert.strictEqual(table.name, NAME);
    });
  });

  describe('create', () => {
    it('should create a table from the database', done => {
      const schema = 'schema';

      table.database = {
        createTable(schema_, gaxOptions_, callback) {
          assert.strictEqual(schema_, schema);
          callback(); // done()
        },
      };

      table.create(schema, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOpts = {};

      table.database = {
        createTable(schema_, gaxOptions, callback) {
          assert.strictEqual(gaxOptions, gaxOpts);
          callback(); // done()
        },
      };

      table.create('schema', gaxOpts, done);
    });
  });

  describe('createReadStream', () => {
    let fakeReadStream: Transform;
    let getSnapshotStub: sinon.SinonStub<
      [TimestampBounds, GetSnapshotCallback],
      void
    >;

    const REQUEST = {keys: ['key']};

    beforeEach(() => {
      fakeReadStream = through.obj();
      sandbox.stub(transaction, 'createReadStream').returns(fakeReadStream);
      getSnapshotStub = sandbox
        .stub(DATABASE, 'getSnapshot')
        .callsFake((_, callback) => callback(null, transaction));
    });

    it('should destroy the user stream if unable to get a snapshot', done => {
      const fakeError = new Error('err');

      getSnapshotStub.callsFake((options, callback) => callback(fakeError));

      table.createReadStream(REQUEST).on('error', err => {
        assert.strictEqual(err, fakeError);
        done();
      });
    });

    it('should pass in timestamp bounds', () => {
      const fakeOptions = {};

      table.createReadStream(REQUEST, fakeOptions);

      const options = getSnapshotStub.lastCall.args[0];

      assert.strictEqual(options, fakeOptions);
    });

    it('should destroy the user stream and end the txn on error', done => {
      const endStub = sandbox.stub(transaction, 'end');
      const fakeError = new Error('err');

      table.createReadStream(REQUEST).on('error', err => {
        assert.strictEqual(err, fakeError);
        assert.strictEqual(endStub.callCount, 1);
        done();
      });

      fakeReadStream.destroy(fakeError);
    });

    it('should pipe data into the user stream', done => {
      const expectedData = [{}, {}, {}];
      const received: Array<{}> = [];

      table
        .createReadStream(REQUEST)
        .on('error', done)
        .on('data', data => received.push(data))
        .on('end', () => {
          assert.deepStrictEqual(received, expectedData);
          done();
        });

      expectedData.forEach(data => fakeReadStream.write(data));
      fakeReadStream.end();
    });

    it('should end the transaction on stream end', done => {
      sandbox.stub(transaction, 'end').callsFake(done);
      table.createReadStream(REQUEST).on('error', done);
      fakeReadStream.end();
    });
  });

  describe('delete', () => {
    it('should update the schema on the database for GoogleSQL using await', async () => {
      table.database = {
        getDatabaseDialect: () => {
          return 'GOOGLE_STANDARD_SQL';
        },
        updateSchema: schema => {
          assert.strictEqual(schema, 'DROP TABLE `table-name`');
        },
      };

      await table.delete();
    });

    it('should update the schema on the database for GoogleSQL using callbacks', () => {
      function callback() {}
      table.database = {
        getDatabaseDialect: () => {
          return 'GOOGLE_STANDARD_SQL';
        },
        updateSchema: (schema, gaxOptions, callback_) => {
          assert.strictEqual(schema, 'DROP TABLE `table-name`');
          assert.strictEqual(callback_, callback);
        },
      };
      table.delete(callback);
    });

    it('should update the schema on the database for GoogleSQL with schema in the table name using await', async () => {
      tableWithSchema.database = {
        getDatabaseDialect: () => {
          return 'GOOGLE_STANDARD_SQL';
        },
        updateSchema: schema => {
          assert.strictEqual(schema, 'DROP TABLE `schema`.`table-name`');
        },
      };

      await tableWithSchema.delete();
    });

    it('should update the schema on the database for GoogleSQL with schema in the table name using callbacks', () => {
      function callback() {}
      tableWithSchema.database = {
        getDatabaseDialect: () => {
          return 'GOOGLE_STANDARD_SQL';
        },
        updateSchema: (schema, gaxOptions, callback_) => {
          assert.strictEqual(schema, 'DROP TABLE `schema`.`table-name`');
          assert.strictEqual(callback_, callback);
        },
      };
      tableWithSchema.delete(callback);
    });

    it('should update the schema on the database for PostgresSQL using await', async () => {
      table.database = {
        getDatabaseDialect: () => {
          return 'POSTGRESQL';
        },
        updateSchema: schema => {
          assert.strictEqual(schema, `DROP TABLE "${table.name}"`);
        },
      };

      await table.delete();
    });

    it('should update the schema on the database for PostgresSQL using callbacks', () => {
      function callback() {}

      table.database = {
        getDatabaseDialect: () => {
          return 'POSTGRESQL';
        },
        updateSchema: (schema, gaxOptions, callback_) => {
          assert.strictEqual(schema, 'DROP TABLE "table-name"');
          assert.strictEqual(callback_, callback);
        },
      };

      table.delete(callback);
    });

    it('should update the schema on the database for PostgresSQL with schema in the table name using await', async () => {
      tableWithSchema.database = {
        getDatabaseDialect: () => {
          return 'POSTGRESQL';
        },
        updateSchema: schema => {
          assert.strictEqual(schema, `DROP TABLE "schema"."${table.name}"`);
        },
      };

      await tableWithSchema.delete();
    });

    it('should update the schema on the database for PostgresSQL with schema in the table name using callbacks', () => {
      function callback() {}
      tableWithSchema.database = {
        getDatabaseDialect: () => {
          return 'POSTGRESQL';
        },
        updateSchema: (schema, gaxOptions, callback_) => {
          assert.strictEqual(schema, `DROP TABLE "schema"."${table.name}"`);
          assert.strictEqual(callback_, callback);
        },
      };

      tableWithSchema.delete(callback);
    });

    it('should accept and pass gaxOptions to updateSchema', done => {
      const gaxOptions = {};
      table.database = {
        getDatabaseDialect: gaxOptionsFromTable => {
          assert.strictEqual(gaxOptionsFromTable, gaxOptions);
          return 'GOOGLE_STANDARD_SQL';
        },
        updateSchema: (schema, gaxOptionsFromTable) => {
          assert.strictEqual(gaxOptionsFromTable, gaxOptions);
          done();
        },
      };
      table.delete(gaxOptions, assert.ifError);
    });
  });

  describe('deleteRows', () => {
    const KEYS = ['key'];

    it('should return an error if unable to get a txn', done => {
      const fakeError = new Error('err');

      sandbox
        .stub(DATABASE, 'runTransaction')
        .callsFake((opts, callback) => callback(fakeError));

      table.deleteRows(KEYS, err => {
        assert.strictEqual(err, fakeError);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      transaction.commit = options => {
        assert.strictEqual(options, gaxOptions);
        done();
      };
      table.deleteRows(KEYS, gaxOptions, assert.ifError);
    });

    it('should accept commit options', done => {
      const deleteRowsOptions = {returnCommitStats: true};
      transaction.commit = options => {
        assert.strictEqual(options, deleteRowsOptions);
        done();
      };
      table.deleteRows(KEYS, deleteRowsOptions, assert.ifError);
    });

    it('should accept gax options in commit options', done => {
      const deleteRowsOptions = {
        returnCommitStats: true,
        gaxOptions: {},
      };
      transaction.commit = options => {
        assert.strictEqual(options, deleteRowsOptions);
        done();
      };
      table.deleteRows(KEYS, deleteRowsOptions, assert.ifError);
    });

    it('should accept requestOptions', done => {
      const deleteRowsOptions = {
        requestOptions: {priority: RequestOptions.Priority.PRIORITY_HIGH},
      };
      transaction.commit = options => {
        assert.strictEqual(options, deleteRowsOptions);
        done();
      };
      table.deleteRows(KEYS, deleteRowsOptions, assert.ifError);
    });

    it('should accept isolationLevel option', done => {
      const deleteRowsOptions = {
        isolationLevel: IsolationLevel.REPEATABLE_READ,
      };
      transaction.commit = options => {
        assert.strictEqual(options, deleteRowsOptions);
        done();
      };
      table.deleteRows(KEYS, deleteRowsOptions, assert.ifError);
    });

    it('should accept readLockMode option', done => {
      const deleteRowsOptions = {
        readLockMode: ReadLockMode.OPTIMISTIC,
      };
      transaction.commit = options => {
        assert.strictEqual(options, deleteRowsOptions);
        done();
      };
      table.deleteRows(KEYS, deleteRowsOptions, assert.ifError);
    });

    it('should delete the rows via transaction', done => {
      const stub = (
        sandbox.stub(transaction, 'deleteRows') as sinon.SinonStub
      ).withArgs(table.name, KEYS);

      sandbox.stub(transaction, 'commit').callsFake((opts, callback) => {
        callback();
      });

      table.deleteRows(KEYS, err => {
        assert.ifError(err);
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });
  });

  describe('drop', () => {
    it('should call through to Table#delete', done => {
      const returnVal = Promise.resolve();

      table.delete = (gaxOptions, callback) => {
        setImmediate(callback); // the done fn
        return returnVal;
      };

      const promise = table.drop(done);

      assert.strictEqual(promise, returnVal);
    });

    it('should accept and pass gaxOptions to Table#delete', done => {
      const gaxOptions = {};
      table.delete = gaxOptionsFromDrop => {
        assert.strictEqual(gaxOptionsFromDrop, gaxOptions);
        done();
      };
      table.drop(gaxOptions, assert.ifError);
    });
  });

  describe('insert', () => {
    const ROW = {};

    it('should return any runTransaction errors', done => {
      const fakeError = new Error('err');

      sandbox
        .stub(DATABASE, 'runTransaction')
        .callsFake((opts, callback) => callback(fakeError));

      table.insert(ROW, err => {
        assert.strictEqual(err, fakeError);
        done();
      });
    });

    it('should insert via transaction', done => {
      const stub = (
        sandbox.stub(transaction, 'insert') as sinon.SinonStub
      ).withArgs(table.name, ROW);

      table.insert(ROW, err => {
        assert.ifError(err);
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      (sandbox.stub(transaction, 'insert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, gaxOptions);
        done();
      };

      table.insert(ROW, gaxOptions, assert.ifError);
    });

    it('should accept commit options', done => {
      const insertRowsOptions = {returnCommitStats: true};
      (sandbox.stub(transaction, 'insert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, insertRowsOptions);
        done();
      };

      table.insert(ROW, insertRowsOptions, assert.ifError);
    });

    it('should accept gax options in commit options', done => {
      const insertRowsOptions = {
        returnCommitStats: true,
        gaxOptions: {},
      };
      (sandbox.stub(transaction, 'insert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, insertRowsOptions);
        done();
      };

      table.insert(ROW, insertRowsOptions, assert.ifError);
    });

    it('should accept requestOptions', done => {
      const insertRowsOptions = {
        requestOptions: {priority: RequestOptions.Priority.PRIORITY_HIGH},
      };
      (sandbox.stub(transaction, 'insert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, insertRowsOptions);
        done();
      };

      table.insert(ROW, insertRowsOptions, assert.ifError);
    });

    it('should accept isolationLevel options', done => {
      const insertRowsOptions = {
        isolationLevel: IsolationLevel.REPEATABLE_READ,
      };
      (sandbox.stub(transaction, 'insert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, insertRowsOptions);
        done();
      };

      table.insert(ROW, insertRowsOptions, assert.ifError);
    });

    it('should accept readLockMode options', done => {
      const insertRowsOptions = {
        readLockMode: ReadLockMode.OPTIMISTIC,
      };
      (sandbox.stub(transaction, 'insert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, insertRowsOptions);
        done();
      };

      table.insert(ROW, insertRowsOptions, assert.ifError);
    });
  });

  describe('read', () => {
    it('should call and collect results from a stream', done => {
      const keyVals = [];

      const rows = [{}, {}];

      table.createReadStream = (keyVals_, options) => {
        assert.strictEqual(keyVals_, keyVals);
        assert.deepStrictEqual(options, {});

        const stream = through.obj();

        setImmediate(async () => {
          try {
            await split(rows, stream);
            stream.end();
          } catch (err) {
            stream.destroy(err as Error);
          }
        });

        return stream;
      };

      table.read(keyVals, (err, rows_) => {
        assert.ifError(err);
        assert.deepStrictEqual(rows_, rows);
        done();
      });
    });

    it('should accept an options object', done => {
      const OPTIONS = {};

      table.createReadStream = (keyVals, options) => {
        assert.strictEqual(OPTIONS, options);

        const stream = through.obj();

        setImmediate(() => {
          stream.end();
        });

        return stream;
      };

      table.read([], OPTIONS, done);
    });

    it('should execute callback with error', done => {
      const error = new Error('Error.');

      table.createReadStream = () => {
        const stream = through.obj();
        setImmediate(() => {
          stream.destroy(error);
        });
        return stream;
      };

      table.read([], err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('replace', () => {
    const ROW = {};

    it('should return any runTransaction errors', done => {
      const fakeError = new Error('err');

      sandbox
        .stub(DATABASE, 'runTransaction')
        .callsFake((opts, callback) => callback(fakeError));

      table.replace(ROW, err => {
        assert.strictEqual(err, fakeError);
        done();
      });
    });

    it('should replace via transaction', done => {
      const stub = (
        sandbox.stub(transaction, 'replace') as sinon.SinonStub
      ).withArgs(table.name, ROW);

      table.replace(ROW, err => {
        assert.ifError(err);
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      (sandbox.stub(transaction, 'replace') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, gaxOptions);
        done();
      };

      table.replace(ROW, gaxOptions, assert.ifError);
    });

    it('should accept commit options', done => {
      const replaceRowsOptions = {returnCommitStats: true};
      (sandbox.stub(transaction, 'replace') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, replaceRowsOptions);
        done();
      };

      table.replace(ROW, replaceRowsOptions, assert.ifError);
    });

    it('should accept gax options in commit options', done => {
      const replaceRowsOptions = {
        returnCommitStats: true,
        gaxOptions: {},
      };
      (sandbox.stub(transaction, 'replace') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, replaceRowsOptions);
        done();
      };

      table.replace(ROW, replaceRowsOptions, assert.ifError);
    });

    it('should accept requestOptions', done => {
      const replaceRowsOptions = {
        requestOptions: {priority: RequestOptions.Priority.PRIORITY_HIGH},
      };
      (sandbox.stub(transaction, 'replace') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, replaceRowsOptions);
        done();
      };

      table.replace(ROW, replaceRowsOptions, assert.ifError);
    });

    it('should accept isolationLevel options', done => {
      const replaceRowsOptions = {
        isolationLevel: IsolationLevel.REPEATABLE_READ,
      };
      (sandbox.stub(transaction, 'replace') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, replaceRowsOptions);
        done();
      };

      table.replace(ROW, replaceRowsOptions, assert.ifError);
    });

    it('should accept readLockMode options', done => {
      const replaceRowsOptions = {
        readLockMode: ReadLockMode.OPTIMISTIC,
      };
      (sandbox.stub(transaction, 'replace') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, replaceRowsOptions);
        done();
      };

      table.replace(ROW, replaceRowsOptions, assert.ifError);
    });
  });

  describe('update', () => {
    const ROW = {};

    it('should return any runTransaction errors', done => {
      const fakeError = new Error('err');

      sandbox
        .stub(DATABASE, 'runTransaction')
        .callsFake((opts, callback) => callback(fakeError));

      table.update(ROW, err => {
        assert.strictEqual(err, fakeError);
        done();
      });
    });

    it('should update via transaction', done => {
      const stub = (
        sandbox.stub(transaction, 'update') as sinon.SinonStub
      ).withArgs(table.name, ROW);

      table.update(ROW, err => {
        assert.ifError(err);
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      (sandbox.stub(transaction, 'update') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, gaxOptions);
        done();
      };

      table.update(ROW, gaxOptions, assert.ifError);
    });

    it('should accept commit options', done => {
      const updateRowsOptions = {returnCommitStats: true};
      (sandbox.stub(transaction, 'update') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, updateRowsOptions);
        done();
      };

      table.update(ROW, updateRowsOptions, assert.ifError);
    });

    it('should accept gax options in commit options', done => {
      const updateRowsOptions = {
        returnCommitStats: true,
        gaxOptions: {},
      };
      (sandbox.stub(transaction, 'update') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, updateRowsOptions);
        done();
      };

      table.update(ROW, updateRowsOptions, assert.ifError);
    });

    it('should accept requestOptions', done => {
      const updateRowsOptions = {
        requestOptions: {priority: RequestOptions.Priority.PRIORITY_LOW},
      };
      (sandbox.stub(transaction, 'update') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, updateRowsOptions);
        done();
      };

      table.update(ROW, updateRowsOptions, assert.ifError);
    });

    it('should accept isolationLevel option', done => {
      const updateRowsOptions = {
        isolationLevel: IsolationLevel.REPEATABLE_READ,
      };
      (sandbox.stub(transaction, 'update') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, updateRowsOptions);
        done();
      };

      table.update(ROW, updateRowsOptions, assert.ifError);
    });

    it('should accept readLockMode option', done => {
      const updateRowsOptions = {
        readLockMode: ReadLockMode.OPTIMISTIC,
      };
      (sandbox.stub(transaction, 'update') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, updateRowsOptions);
        done();
      };

      table.update(ROW, updateRowsOptions, assert.ifError);
    });
  });

  describe('upsert', () => {
    const ROW = {};

    it('should return any runTransaction errors', done => {
      const fakeError = new Error('err');

      sandbox
        .stub(DATABASE, 'runTransaction')
        .callsFake((opts, callback) => callback(fakeError));

      table.upsert(ROW, err => {
        assert.strictEqual(err, fakeError);
        done();
      });
    });

    it('should upsert via transaction', done => {
      const stub = (
        sandbox.stub(transaction, 'upsert') as sinon.SinonStub
      ).withArgs(table.name, ROW);

      table.upsert(ROW, err => {
        assert.ifError(err);
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      (sandbox.stub(transaction, 'upsert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, gaxOptions);
        done();
      };

      table.upsert(ROW, gaxOptions, assert.ifError);
    });

    it('should accept commit options', done => {
      const upsertRowsOptions = {returnCommitStats: true};
      (sandbox.stub(transaction, 'upsert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, upsertRowsOptions);
        done();
      };

      table.upsert(ROW, upsertRowsOptions, assert.ifError);
    });

    it('should accept gax options in commit options', done => {
      const upsertRowsOptions = {
        returnCommitStats: true,
        gaxOptions: {},
      };
      (sandbox.stub(transaction, 'upsert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, upsertRowsOptions);
        done();
      };

      table.upsert(ROW, upsertRowsOptions, assert.ifError);
    });

    it('should accept requestOptions', done => {
      const upsertRowsOptions = {
        requestOptions: {priority: RequestOptions.Priority.PRIORITY_MEDIUM},
      };
      (sandbox.stub(transaction, 'upsert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, upsertRowsOptions);
        done();
      };

      table.upsert(ROW, upsertRowsOptions, assert.ifError);
    });

    it('should accept isolationLevel option', done => {
      const upsertRowsOptions = {
        isolationLevel: IsolationLevel.REPEATABLE_READ,
      };
      (sandbox.stub(transaction, 'upsert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, upsertRowsOptions);
        done();
      };

      table.upsert(ROW, upsertRowsOptions, assert.ifError);
    });

    it('should accept readLockMode option', done => {
      const upsertRowsOptions = {
        readLockMode: ReadLockMode.OPTIMISTIC,
      };
      (sandbox.stub(transaction, 'upsert') as sinon.SinonStub).withArgs(
        table.name,
        ROW,
      );
      transaction.commit = options => {
        assert.strictEqual(options, upsertRowsOptions);
        done();
      };

      table.upsert(ROW, upsertRowsOptions, assert.ifError);
    });
  });
});
