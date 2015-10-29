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

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Dataset') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Dataset');
    assert.deepEqual(methods, ['getTables']);
    extended = true;
  }
};

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('BigQuery/Dataset', function() {
  var BIGQUERY = {
    projectId: 'my-project',
    createDataset: util.noop
  };
  var DATASET_ID = 'kittens';
  var Dataset;
  var Table;
  var ds;

  before(function() {
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../common/service-object.js', FakeServiceObject);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Dataset = require('../../lib/bigquery/dataset');
    Table = require('../../lib/bigquery/table');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    ds = new Dataset(BIGQUERY, DATASET_ID);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should inherit from ServiceObject', function(done) {
      var bigQueryInstance = extend({}, BIGQUERY, {
        createDataset: {
          bind: function(context) {
            assert.strictEqual(context, bigQueryInstance);
            done();
          }
        }
      });

      var ds = new Dataset(bigQueryInstance, DATASET_ID);

      var calledWith = ds.calledWith_[0];

      assert.strictEqual(calledWith.parent, bigQueryInstance);
      assert.strictEqual(calledWith.baseUrl, '/datasets');
      assert.strictEqual(calledWith.id, DATASET_ID);
      assert.deepEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: true
      });
    });
  });

  describe('createTable', function() {
    var SCHEMA_OBJECT = {
      fields: [
        { name: 'id', type: 'integer' },
        { name: 'breed', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'dob', type: 'timestamp' }
      ]
    };
    var SCHEMA_STRING = 'id:integer,breed,name,dob:timestamp';
    var TABLE_ID = 'kittens';

    var API_RESPONSE = {
      tableReference: {
        tableId: TABLE_ID
      }
    };

    it('should create a table', function(done) {
      var options = {
        schema: SCHEMA_OBJECT
      };

      ds.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/tables');

        var body = reqOpts.json;
        assert.strictEqual(body, options);
        assert.deepEqual(body.schema, SCHEMA_OBJECT);
        assert.equal(body.tableReference.datasetId, DATASET_ID);
        assert.equal(body.tableReference.projectId, ds.bigQuery.projectId);
        assert.equal(body.tableReference.tableId, TABLE_ID);

        done();
      };

      ds.createTable(TABLE_ID, options, assert.ifError);
    });

    it('should create a schema object from a string', function(done) {
      ds.request = function(reqOpts) {
        assert.deepEqual(reqOpts.json.schema, SCHEMA_OBJECT);
        done();
      };

      ds.createTable(TABLE_ID, { schema: SCHEMA_STRING }, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('Error.');

      ds.request = function(reqOpts, callback) {
        callback(error);
      };

      ds.createTable(TABLE_ID, { schema: SCHEMA_OBJECT }, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return a Table object', function(done) {
      ds.request = function(reqOpts, callback) {
        callback(null, API_RESPONSE);
      };

      ds.createTable(TABLE_ID, { schema: SCHEMA_OBJECT }, function(err, table) {
        assert.ifError(err);
        assert(table instanceof Table);
        done();
      });
    });

    it('should return an apiResponse', function(done) {
      var opts = { id: TABLE_ID, schema: SCHEMA_OBJECT };

      ds.request = function(reqOpts, callback) {
        callback(null, API_RESPONSE);
      };

      ds.createTable(TABLE_ID, opts, function(err, table, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(apiResponse, API_RESPONSE);
        done();
      });
    });

    it('should assign metadata to the Table object', function(done) {
      var apiResponse = extend({
        a: 'b',
        c: 'd'
      }, API_RESPONSE);

      ds.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      ds.createTable(TABLE_ID, { schema: SCHEMA_OBJECT }, function(err, table) {
        assert.ifError(err);
        assert.strictEqual(table.metadata, apiResponse);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should delete the dataset via the api', function(done) {
      ds.request = function(reqOpts) {
        assert.equal(reqOpts.method, 'DELETE');
        assert.equal(reqOpts.uri, '');
        assert.deepEqual(reqOpts.qs, { deleteContents: false });
        done();
      };

      ds.delete(assert.ifError);
    });

    it('should allow a force delete', function(done) {
      ds.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, { deleteContents: true });
        done();
      };

      ds.delete({ force: true }, assert.ifError);
    });

    it('should execute callback when done', function(done) {
      ds.request = function(reqOpts, callback) {
        callback();
      };

      ds.delete(done);
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');

      ds.request = function(reqOpts, callback) {
        callback(error);
      };

      ds.delete(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var apiResponse = {};

      ds.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      ds.delete(function(err, apiResponse_) {
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('getTables', function() {
    it('should get tables from the api', function(done) {
      ds.request = function(reqOpts) {
        assert.equal(reqOpts.uri, '/tables');
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      ds.getTables(assert.ifError);
    });

    it('should accept a query', function(done) {
      var query = {
        maxResults: 8,
        pageToken: 'token'
      };

      ds.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs, query);
        done();
      };

      ds.getTables(query, assert.ifError);
    });

    it('should return error to callback', function(done) {
      var error = new Error('Error.');

      ds.request = function(reqOpts, callback) {
        callback(error);
      };

      ds.getTables(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('success', function() {
      var apiResponse = {
        tables: [
          {
            a: 'b',
            c: 'd',
            id: 'tableName'
          }
        ]
      };

      beforeEach(function() {
        ds.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return Table & apiResponse', function(done) {
        ds.getTables(function(err, tables, nextQuery, apiResponse_) {
          assert.ifError(err);
          assert(tables[0] instanceof Table);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should assign metadata to the Table objects', function(done) {
        ds.getTables(function(err, tables) {
          assert.ifError(err);
          assert.strictEqual(tables[0].metadata, apiResponse.tables[0]);
          done();
        });
      });

      it('should return token if more results exist', function(done) {
        var pageToken = 'token';

        var query = {
          maxResults: 5
        };

        var expectedNextQuery = {
          maxResults: 5,
          pageToken: pageToken
        };

        ds.request = function(reqOpts, callback) {
          callback(null, { nextPageToken: pageToken });
        };

        ds.getTables(query, function(err, tables, nextQuery) {
          assert.ifError(err);
          assert.deepEqual(nextQuery, expectedNextQuery);
          done();
        });
      });
    });
  });

  describe('query', function() {
    var options = {
      a: 'b',
      c: 'd'
    };

    it('should call through to bigQuery', function(done) {
      ds.bigQuery.query = function() {
        done();
      };

      ds.query();
    });

    it('should return the result of the call to bq.query', function(done) {
      ds.bigQuery.query = function() {
        return {
          done: done
        };
      };

      ds.query().done();
    });

    it('should accept a string', function(done) {
      var query = 'SELECT * FROM allthedata';

      ds.bigQuery.query = function(opts) {
        assert.equal(opts.query, query);
        done();
      };

      ds.query(query);
    });

    it('should pass along options', function(done) {
      ds.bigQuery.query = function(opts) {
        assert.equal(opts.a, options.a);
        assert.equal(opts.c, options.c);
        done();
      };

      ds.query(options);
    });

    it('should extend options with defaultDataset', function(done) {
      ds.bigQuery.query = function(opts) {
        assert.deepEqual(opts.defaultDataset, { datasetId: ds.id });
        done();
      };

      ds.query(options);
    });

    it('should not modify original options object', function(done) {
      ds.bigQuery.query = function() {
        assert.deepEqual(options, { a: 'b', c: 'd' });
        done();
      };

      ds.query();
    });

    it('should pass callback', function(done) {
      var callback = util.noop;

      ds.bigQuery.query = function(opts, cb) {
        assert.equal(cb, callback);
        done();
      };

      ds.query(options, callback);
    });
  });

  describe('table', function() {
    it('should return a Table object', function() {
      var tableId = 'tableId';
      var table = ds.table(tableId);
      assert(table instanceof Table);
      assert.equal(table.id, tableId);
    });
  });
});
