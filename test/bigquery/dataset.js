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

var arrify = require('arrify');
var assert = require('assert');
var util = require('../../lib/common/util');
var mockery = require('mockery');

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

describe('BigQuery/Dataset', function() {
  var BIGQUERY = { projectId: 'my-project' };
  var DATASET_ID = 'kittens';
  var Dataset;
  var Table;
  var ds;

  before(function() {
    // If we don't stub see4_crc32 and use mockery, we get "Module did not self-
    // register".
    var crc32c = require('hash-stream-validation/node_modules/sse4_crc32');
    mockery.registerMock('sse4_crc32', crc32c);

    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
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

    it('should create a table', function(done) {
      ds.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'POST');
        assert.equal(path, '/tables');
        assert.strictEqual(query, null);
        assert.deepEqual(body.schema, SCHEMA_OBJECT);
        assert.equal(body.tableReference.datasetId, DATASET_ID);
        assert.equal(body.tableReference.projectId, ds.bigQuery.projectId);
        assert.equal(body.tableReference.tableId, TABLE_ID);
        done();
      };
      ds.createTable({ id: TABLE_ID, schema: SCHEMA_OBJECT }, assert.ifError);
    });

    it('should create a schema object from a string', function(done) {
      ds.makeReq_ = function(method, path, query, body) {
        assert.deepEqual(body.schema, SCHEMA_OBJECT);
        done();
      };
      ds.createTable({ id: TABLE_ID, schema: SCHEMA_STRING }, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('Error.');
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      ds.createTable({ id: TABLE_ID, schema: SCHEMA_OBJECT }, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return a Table object', function(done) {
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { tableReference: { tableId: TABLE_ID } });
      };
      var options = { id: TABLE_ID, schema: SCHEMA_OBJECT };
      ds.createTable(options, function(err, table) {
        assert.ifError(err);
        assert(table instanceof Table);
        done();
      });
    });

    it('should return an apiResponse', function(done) {
      var resp = { tableReference: { tableId: TABLE_ID } };
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      var options = { id: TABLE_ID, schema: SCHEMA_OBJECT };
      ds.createTable(options, function(err, table, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(apiResponse, resp);
        done();
      });
    });

    it('should assign metadata to the Table object', function(done) {
      var metadata = {
        a: 'b',
        c: 'd',
        tableReference: { tableId: TABLE_ID }
      };
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      var options = { id: TABLE_ID, schema: SCHEMA_OBJECT };
      ds.createTable(options, function(e, table) {
        assert.ifError(e);
        assert.deepEqual(table.metadata, metadata);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should delete the dataset via the api', function(done) {
      ds.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'DELETE');
        assert.equal(path, '');
        assert.deepEqual(query, { deleteContents: false });
        assert.strictEqual(body, null);
        done();
      };
      ds.delete(assert.ifError);
    });

    it('should allow a force delete', function(done) {
      ds.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, { deleteContents: true });
        done();
      };
      ds.delete({ force: true }, assert.ifError);
    });

    it('should execute callback when done', function(done) {
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      ds.delete(done);
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      ds.delete(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      ds.delete(function(err, apiResponse) {
        assert.deepEqual(apiResponse, { success: true });
        done();
      });
    });
  });

  describe('getMetadata', function() {
    it('should get metadata from api', function(done) {
      ds.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };
      ds.getMetadata(assert.ifError);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      ds.getMetadata(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    describe('metadata', function() {
      var METADATA = { a: 'b', c: 'd' };

      beforeEach(function() {
        ds.makeReq_ = function(method, path, query, body, callback) {
          callback(null, METADATA);
        };
      });

      it('should update metadata on Dataset object', function(done) {
        ds.getMetadata(function(err) {
          assert.ifError(err);
          assert.deepEqual(ds.metadata, METADATA);
          done();
        });
      });

      it('should execute callback with metadata', function(done) {
        ds.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.deepEqual(metadata, METADATA);
          done();
        });
      });

      it('should execute callback with apiResponse', function(done) {
        ds.getMetadata(function(err, metadata, apiResponse) {
          assert.ifError(err);
          assert.deepEqual(apiResponse, METADATA);
          done();
        });
      });
    });
  });

  describe('getTables', function() {
    it('should get tables from the api', function(done) {
      ds.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/tables');
        assert.deepEqual(query, {});
        assert.strictEqual(body, null);
        done();
      };
      ds.getTables(assert.ifError);
    });

    it('should accept query', function(done) {
      var queryObject = { maxResults: 8, pageToken: 'token' };
      ds.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, queryObject);
        done();
      };
      ds.getTables(queryObject, assert.ifError);
    });

    it('should return error to callback', function(done) {
      var error = new Error('Error.');
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      ds.getTables(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return Table objects', function(done) {
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { tables: [{ id: 'tableName' }] });
      };
      ds.getTables(function(err, tables) {
        assert.ifError(err);
        assert(tables[0] instanceof Table);
        done();
      });
    });

    it('should return apiResponse', function(done) {
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { tables: [{ id: 'tableName' }] });
      };
      ds.getTables(function(err, tables, nextQuery, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(apiResponse, { tables: [{ id: 'tableName' }] });
        done();
      });
    });

    it('should assign metadata to the Table objects', function(done) {
      var tableObjects = [{ a: 'b', c: 'd', id: 'tableName' }];
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { tables: tableObjects });
      };
      ds.getTables(function(err, tables) {
        assert.ifError(err);
        assert(tables[0].metadata, tableObjects[0]);
        done();
      });
    });

    it('should return token if more results exist', function(done) {
      var token = 'token';
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { nextPageToken: token });
      };
      ds.getTables({ maxResults: 5 }, function(err, tables, nextQuery) {
        assert.deepEqual(nextQuery, {
          pageToken: token,
          maxResults: 5
        });
        done();
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

  describe('setMetadata', function() {
    var METADATA = { a: 'b', c: 'd' };

    it('should send request to the api', function(done) {
      ds.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PATCH');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.deepEqual(body, METADATA);
        done();
      };
      ds.setMetadata(METADATA, assert.ifError);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');
      ds.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      ds.setMetadata(METADATA, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    describe('metadata', function() {
      beforeEach(function() {
        ds.makeReq_ = function(method, path, query, body, callback) {
          callback(null, METADATA);
        };
      });

      it('should update metadata on Dataset object', function(done) {
        ds.setMetadata(METADATA, function(err) {
          assert.ifError(err);
          assert.deepEqual(ds.metadata, METADATA);
          done();
        });
      });

      it('should execute callback with metadata', function(done) {
        ds.setMetadata(METADATA, function(err, metadata) {
          assert.ifError(err);
          assert.deepEqual(metadata, METADATA);
          done();
        });
      });

      it('should execute callback with apiResponse', function(done) {
        ds.setMetadata(METADATA, function(err, metadata, apiResponse) {
          assert.ifError(err);
          assert.deepEqual(apiResponse, METADATA);
          done();
        });
      });
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

  describe('makeReq_', function() {
    it('should prefix the path', function(done) {
      var path = '/test-path';

      ds.bigQuery.makeReq_ = function(method, p) {
        assert.equal(p, '/datasets/' + ds.id + path);
        done();
      };

      ds.makeReq_('POST', path);
    });

    it('should pass through arguments', function(done) {
      var method = 'POST';
      var query = { a: 'b', c: 'd', e: { f: 'g' } };
      var body = { a: 'b', c: 'd', e: { f: 'g' } };
      var callback = util.noop;

      ds.bigQuery.makeReq_ = function(m, p, q, b, c) {
        assert.equal(m, method);
        assert.deepEqual(q, query);
        assert.deepEqual(b, body);
        assert.equal(c, callback);
        done();
      };

      ds.makeReq_(method, '/path', query, body, callback);
    });
  });
});
