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
var events = require('events');
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var stream = require('stream');
var uuid = require('uuid');

var ServiceObject = require('@google-cloud/common').ServiceObject;
var util = require('@google-cloud/common').util;

var promisified = false;
var makeWritableStreamOverride;
var isCustomTypeOverride;
var fakeUtil = extend({}, util, {
  isCustomType: function() {
    return (isCustomTypeOverride || util.isCustomType).apply(null, arguments);
  },
  makeWritableStream: function() {
    var args = arguments;
    (makeWritableStreamOverride || util.makeWritableStream).apply(null, args);
  },
  promisifyAll: function(Class) {
    if (Class.name === 'Table') {
      promisified = true;
    }
  }
});

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Table') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Table');
    assert.deepEqual(methods, ['getRows']);
    extended = true;
  },
  streamify: function(methodName) {
    return methodName;
  }
};

var fakeUuid = extend({}, uuid);

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('BigQuery/Table', function() {
  var DATASET = {
    id: 'dataset-id',
    createTable: util.noop,
    bigQuery: {
      projectId: 'project-id',
      job: function(id) {
        return { id: id };
      },
      request: util.noop
    }
  };

  var SCHEMA_OBJECT = {
    fields: [
      { name: 'id', type: 'INTEGER' },
      { name: 'name', type: 'STRING' },
      { name: 'dob', type: 'TIMESTAMP' },
      { name: 'has_claws', type: 'BOOLEAN' },
      { name: 'hair_count', type: 'FLOAT' }
    ]
  };

  var SCHEMA_STRING = [
    'id:integer',
    'name',
    'dob:timestamp',
    'has_claws:boolean',
    'hair_count:float'
  ].join(',');

  var Table;
  var TABLE_ID = 'kittens';
  var table;
  var tableOverrides = {};

  before(function() {
    Table = proxyquire('../src/table.js', {
      uuid: fakeUuid,
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        paginator: fakePaginator,
        util: fakeUtil
      }
    });

    var tableCached = extend(true, {}, Table);

    // Override all util methods, allowing them to be mocked. Overrides are
    // removed before each test.
    Object.keys(Table).forEach(function(tableMethod) {
      if (typeof Table[tableMethod] !== 'function') {
        return;
      }

      Table[tableMethod] = function() {
        return (tableOverrides[tableMethod] || tableCached[tableMethod])
          .apply(this, arguments);
      };
    });
  });

  beforeEach(function() {
    isCustomTypeOverride = null;
    makeWritableStreamOverride = null;
    tableOverrides = {};
    table = new Table(DATASET, TABLE_ID);
    table.bigQuery.request = util.noop;
    table.bigQuery.createJob = util.noop;
    table.bigQuery.mergeSchemaWithRows_ = function(schema, rows) {
      return rows;
    };
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(table.createReadStream, 'getRows');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should inherit from ServiceObject', function(done) {
      var datasetInstance = extend({}, DATASET, {
        createTable: {
          bind: function(context) {
            assert.strictEqual(context, datasetInstance);
            done();
          }
        }
      });

      var table = new Table(datasetInstance, TABLE_ID);
      assert(table instanceof ServiceObject);

      var calledWith = table.calledWith_[0];

      assert.strictEqual(calledWith.parent, datasetInstance);
      assert.strictEqual(calledWith.baseUrl, '/tables');
      assert.strictEqual(calledWith.id, TABLE_ID);
      assert.deepEqual(calledWith.methods, {
        create: true,
        delete: true,
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: true
      });
    });

    describe('etag interceptor', function() {
      var FAKE_ETAG = 'abc';

      it('should apply the If-Match header', function() {
        var interceptor = table.interceptors.pop();

        var fakeReqOpts = {
          method: 'PATCH',
          json: {
            etag: FAKE_ETAG
          }
        };

        var reqOpts = interceptor.request(fakeReqOpts);
        assert.deepEqual(reqOpts.headers, { 'If-Match': FAKE_ETAG });
      });

      it('should respect already existing headers', function() {
        var interceptor = table.interceptors.pop();

        var fakeReqOpts = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          json: {
            etag: FAKE_ETAG
          }
        };

        var expectedHeaders = extend({}, fakeReqOpts.headers, {
          'If-Match': FAKE_ETAG
        });

        var reqOpts = interceptor.request(fakeReqOpts);
        assert.deepEqual(reqOpts.headers, expectedHeaders);
      });

      it('should not apply the header if method is not patch', function() {
        var interceptor = table.interceptors.pop();

        var fakeReqOpts = {
          method: 'POST',
          json: {
            etag: FAKE_ETAG
          }
        };

        var reqOpts = interceptor.request(fakeReqOpts);
        assert.deepEqual(reqOpts.headers, undefined);
      });
    });
  });

  describe('createSchemaFromString_', function() {
    it('should create a schema object from a string', function() {
      assert.deepEqual(
        Table.createSchemaFromString_(SCHEMA_STRING), SCHEMA_OBJECT);
    });
  });

  describe('encodeValue_', function() {
    it('should properly encode values', function() {
      var buffer = new Buffer('test');
      assert.strictEqual(Table.encodeValue_(buffer), buffer.toString('base64'));

      var date = new Date();
      assert.strictEqual(Table.encodeValue_(date), date.toJSON());
    });

    it('should properly encode custom types', function() {
      function BigQueryDate(value) { this.value = value; }
      function BigQueryDatetime(value) { this.value = value; }
      function BigQueryTime(value) { this.value = value; }
      function BigQueryTimestamp(value) { this.value = value; }

      var date = new BigQueryDate('date');
      var datetime = new BigQueryDatetime('datetime');
      var time = new BigQueryTime('time');
      var timestamp = new BigQueryTimestamp('timestamp');

      assert.strictEqual(Table.encodeValue_(date), 'date');
      assert.strictEqual(Table.encodeValue_(datetime), 'datetime');
      assert.strictEqual(Table.encodeValue_(time), 'time');
      assert.strictEqual(Table.encodeValue_(timestamp), 'timestamp');
    });

    it('should properly encode arrays', function() {
      var buffer = new Buffer('test');
      var date = new Date();

      var array = [
        buffer,
        date
      ];

      assert.deepEqual(Table.encodeValue_(array), [
        buffer.toString('base64'),
        date.toJSON()
      ]);
    });

    it('should properly encode objects', function() {
      var buffer = new Buffer('test');
      var date = new Date();

      var object = {
        nested: {
          array: [
            buffer,
            date
          ]
        }
      };

      assert.deepEqual(Table.encodeValue_(object), {
        nested: {
          array: [
            buffer.toString('base64'),
            date.toJSON()
          ]
        }
      });
    });
  });

  describe('formatMetadata_', function() {
    it('should return a deep copy', function() {
      var metadata = {
        a: {
          b: 'c'
        }
      };

      var formatted = Table.formatMetadata_(metadata);

      assert.deepEqual(metadata, formatted);
      assert.notStrictEqual(metadata, formatted);
    });

    it('should format the name option', function() {
      var NAME = 'name';

      var formatted = Table.formatMetadata_({ name: NAME });

      assert.strictEqual(formatted.name, undefined);
      assert.strictEqual(formatted.friendlyName, NAME);
    });

    it('should format the schema string option', function() {
      var fakeSchema = {};

      Table.createSchemaFromString_ = function(schema) {
        assert.strictEqual(schema, SCHEMA_STRING);
        return fakeSchema;
      };

      var formatted = Table.formatMetadata_({ schema: SCHEMA_STRING });

      assert.strictEqual(formatted.schema, fakeSchema);
    });

    it('should accept an array of schema fields', function() {
      var fields = ['a', 'b', 'c'];

      var formatted = Table.formatMetadata_({ schema: fields });

      assert.deepEqual(formatted.schema.fields, fields);
    });

    it('should format the schema fields option', function() {
      var metadata = {
        schema: {
          fields: ['a', { fields: [] }, 'b']
        }
      };

      var expectedFields = ['a', { fields: [], type: 'RECORD' }, 'b'];
      var formatted = Table.formatMetadata_(metadata);

      assert.deepEqual(formatted.schema.fields, expectedFields);
    });

    it('should format the time partitioning option', function() {
      var formatted = Table.formatMetadata_({ partitioning: 'abc' });

      assert.strictEqual(formatted.timePartitioning.type, 'ABC');
    });

    it('should format the table view option', function() {
      var VIEW = 'abc';

      var formatted = Table.formatMetadata_({ view: VIEW });

      assert.strictEqual(formatted.view.query, VIEW);
      assert.strictEqual(formatted.view.useLegacySql, false);
    });
  });

  describe('copy', function() {
    var fakeJob;

    beforeEach(function() {
      fakeJob = new events.EventEmitter();
      table.startCopy = function(destination, metadata, callback) {
        callback(null, fakeJob);
      };
    });

    it('should pass the arguments to startCopy', function(done) {
      var fakeDestination = {};
      var fakeMetadata = {};

      table.startCopy = function(destination, metadata) {
        assert.strictEqual(destination, fakeDestination);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      };

      table.copy(fakeDestination, fakeMetadata, assert.ifError);
    });

    it('should optionally accept metadata', function(done) {
      table.startCopy = function(destination, metadata) {
        assert.deepEqual(metadata, {});
        done();
      };

      table.copy({}, assert.ifError);
    });

    it('should return any startCopy errors', function(done) {
      var error = new Error('err');
      var response = {};

      table.startCopy = function(destination, metadata, callback) {
        callback(error, null, response);
      };

      table.copy({}, function(err, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return any job errors', function(done) {
      var error = new Error('err');

      table.copy({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });

      fakeJob.emit('error', error);
    });

    it('should return the metadata on complete', function(done) {
      var metadata = {};

      table.copy({}, function(err, resp) {
        assert.ifError(err);
        assert.strictEqual(resp, metadata);
        done();
      });

      fakeJob.emit('complete', metadata);
    });
  });

  describe('copyFrom', function() {
    var fakeJob;

    beforeEach(function() {
      fakeJob = new events.EventEmitter();
      table.startCopyFrom = function(sourceTables, metadata, callback) {
        callback(null, fakeJob);
      };
    });

    it('should pass the arguments to startCopyFrom', function(done) {
      var fakeSourceTables = {};
      var fakeMetadata = {};

      table.startCopyFrom = function(sourceTables, metadata) {
        assert.strictEqual(sourceTables, fakeSourceTables);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      };

      table.copyFrom(fakeSourceTables, fakeMetadata, assert.ifError);
    });

    it('should optionally accept metadata', function(done) {
      table.startCopyFrom = function(sourceTables, metadata) {
        assert.deepEqual(metadata, {});
        done();
      };

      table.copyFrom({}, assert.ifError);
    });

    it('should return any startCopyFrom errors', function(done) {
      var error = new Error('err');
      var response = {};

      table.startCopyFrom = function(sourceTables, metadata, callback) {
        callback(error, null, response);
      };

      table.copyFrom({}, function(err, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return any job errors', function(done) {
      var error = new Error('err');

      table.copyFrom({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });

      fakeJob.emit('error', error);
    });

    it('should return the metadata on complete', function(done) {
      var metadata = {};

      table.copyFrom({}, function(err, resp) {
        assert.ifError(err);
        assert.strictEqual(resp, metadata);
        done();
      });

      fakeJob.emit('complete', metadata);
    });
  });

  describe('createQueryStream', function() {
    it('should call datasetInstance.createQueryStream()', function(done) {
      table.dataset.createQueryStream = function(a) {
        assert.equal(a, 'a');
        done();
      };

      table.createQueryStream('a');
    });

    it('should return whatever dataset.createQueryStream returns', function() {
      var fakeValue = 123;

      table.dataset.createQueryStream = function() {
        return fakeValue;
      };

      var val = table.createQueryStream();

      assert.strictEqual(val, fakeValue);
    });
  });

  describe('createWriteStream', function() {
    describe('formats', function() {
      it('should accept csv', function(done) {
        makeWritableStreamOverride = function(stream, options) {
          var load = options.metadata.configuration.load;
          assert.equal(load.sourceFormat, 'CSV');
          done();
        };

        table.createWriteStream('csv').emit('writing');
      });

      it('should accept json', function(done) {
        makeWritableStreamOverride = function(stream, options) {
          var load = options.metadata.configuration.load;
          assert.equal(load.sourceFormat, 'NEWLINE_DELIMITED_JSON');
          done();
        };

        table.createWriteStream('json').emit('writing');
      });

      it('should accept avro', function(done) {
        makeWritableStreamOverride = function(stream, options) {
          var load = options.metadata.configuration.load;
          assert.equal(load.sourceFormat, 'AVRO');
          done();
        };

        table.createWriteStream('avro').emit('writing');
      });
    });

    it('should format a schema', function(done) {
      var expectedSchema = {};

      tableOverrides.createSchemaFromString_ = function(string) {
        assert.strictEqual(string, SCHEMA_STRING);
        return expectedSchema;
      };

      makeWritableStreamOverride = function(stream, options) {
        var load = options.metadata.configuration.load;
        assert.deepEqual(load.schema, expectedSchema);
        done();
      };

      table.createWriteStream({ schema: SCHEMA_STRING }).emit('writing');
    });

    it('should throw if a given source format is not recognized', function() {
      assert.throws(function() {
        table.createWriteStream('zip');
      }, /Source format not recognized/);

      assert.throws(function() {
        table.createWriteStream({
          sourceFormat: 'zip'
        });
      }, /Source format not recognized/);

      assert.doesNotThrow(function() {
        table.createWriteStream();
        table.createWriteStream({});
      });
    });

    it('should return a stream', function() {
      assert(table.createWriteStream() instanceof stream.Stream);
    });

    describe('writable stream', function() {
      var fakeJobId;

      beforeEach(function() {
        fakeJobId = uuid.v4();

        fakeUuid.v4 = function() {
          return fakeJobId;
        };
      });

      it('should make a writable stream when written to', function(done) {
        var stream;

        makeWritableStreamOverride = function(s) {
          assert.equal(s, stream);
          done();
        };

        stream = table.createWriteStream();
        stream.emit('writing');
      });

      it('should pass the connection', function(done) {
        makeWritableStreamOverride = function(stream, options) {
          assert.deepEqual(options.connection, table.connection);
          done();
        };

        table.createWriteStream().emit('writing');
      });

      it('should pass extended metadata', function(done) {
        makeWritableStreamOverride = function(stream, options) {
          assert.deepEqual(options.metadata, {
            configuration: {
              load: {
                a: 'b',
                c: 'd',
                destinationTable: {
                  projectId: table.bigQuery.projectId,
                  datasetId: table.dataset.id,
                  tableId: table.id
                }
              }
            },
            jobReference: {
              projectId: table.bigQuery.projectId,
              jobId: fakeJobId
            }
          });
          done();
        };

        table.createWriteStream({ a: 'b', c: 'd' }).emit('writing');
      });

      it('should pass the correct request uri', function(done) {
        makeWritableStreamOverride = function(stream, options) {
          var uri = 'https://www.googleapis.com/upload/bigquery/v2/projects/' +
            table.bigQuery.projectId + '/jobs';
          assert.equal(options.request.uri, uri);
          done();
        };

        table.createWriteStream().emit('writing');
      });

      it('should respect the jobPrefix option', function(done) {
        var jobPrefix = 'abc-';
        var expectedJobId = jobPrefix + fakeJobId;

        makeWritableStreamOverride = function(stream, options) {
          var jobId = options.metadata.jobReference.jobId;
          assert.strictEqual(jobId, expectedJobId);

          var config = options.metadata.configuration.load;
          assert.strictEqual(config.jobPrefix, undefined);

          done();
        };

        table.createWriteStream({ jobPrefix: jobPrefix }).emit('writing');
      });

      it('should create a job and emit it with complete', function(done) {
        var jobId = 'job-id';
        var metadata = { jobReference: { jobId: jobId }, a: 'b', c: 'd' };

        table.bigQuery.job = function(id) {
          return { id: id };
        };

        makeWritableStreamOverride = function(stream, options, callback) {
          callback(metadata);
        };

        table.createWriteStream()
          .on('complete', function(job) {
            assert.equal(job.id, jobId);
            assert.deepEqual(job.metadata, metadata);
            done();
          })
          .emit('writing');
      });
    });
  });

  describe('export', function() {
    var fakeJob;

    beforeEach(function() {
      fakeJob = new events.EventEmitter();
      table.startExport = function(destination, metadata, callback) {
        callback(null, fakeJob);
      };
    });

    it('should pass the arguments to startExport', function(done) {
      var fakeDestination = {};
      var fakeMetadata = {};

      table.startExport = function(destination, metadata) {
        assert.strictEqual(destination, fakeDestination);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      };

      table.export(fakeDestination, fakeMetadata, assert.ifError);
    });

    it('should optionally accept metadata', function(done) {
      table.startExport = function(destination, metadata) {
        assert.deepEqual(metadata, {});
        done();
      };

      table.export({}, assert.ifError);
    });

    it('should return any startExport errors', function(done) {
      var error = new Error('err');
      var response = {};

      table.startExport = function(destination, metadata, callback) {
        callback(error, null, response);
      };

      table.export({}, function(err, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return any job errors', function(done) {
      var error = new Error('err');

      table.export({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });

      fakeJob.emit('error', error);
    });

    it('should return the metadata on complete', function(done) {
      var metadata = {};

      table.export({}, function(err, resp) {
        assert.ifError(err);
        assert.strictEqual(resp, metadata);
        done();
      });

      fakeJob.emit('complete', metadata);
    });
  });

  describe('getRows', function() {
    it('should accept just a callback', function(done) {
      table.request = function(reqOpts, callback) {
        callback(null, {});
      };
      table.getRows(done);
    });

    it('should make correct API request', function(done) {
      var options = { a: 'b', c: 'd' };

      table.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.uri, '/data');
        assert.strictEqual(reqOpts.qs, options);
        callback(null, {});
      };

      table.getRows(options, done);
    });

    it('should execute callback with error & API response', function(done) {
      var apiResponse = {};
      var error = new Error('Error.');

      table.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      table.getRows(function(err, rows, nextQuery, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(rows, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    describe('refreshing metadata', function() {
      // Using "Stephen" so you know who to blame for these tests.
      var rows = [{ f: [{ v: 'stephen' }] }];
      var schema = { fields: [{ name: 'name', type: 'string' }] };
      var mergedRows = [{ name: 'stephen' }];

      beforeEach(function() {
        table.request = function(reqOpts, callback) {
          // Respond with a row, so it grabs the schema.
          // Use setImmediate to let our getMetadata overwrite process.
          setImmediate(callback, null, { rows: rows });
        };

        table.bigQuery.mergeSchemaWithRows_ = function(schema_, rows_) {
          assert.strictEqual(schema_, schema);
          assert.strictEqual(rows_, rows);
          return mergedRows;
        };
      });

      it('should refresh', function(done) {
        // Step 1: makes the request.
        table.getRows(responseHandler);

        // Step 2: refreshes the metadata to pull down the schema.
        table.getMetadata = function(callback) {
          table.metadata = { schema: schema };
          callback();
        };

        // Step 3: execute original complete handler with schema-merged rows.
        function responseHandler(err, rows) {
          assert.ifError(err);
          assert.strictEqual(rows, mergedRows);
          done();
        }
      });

      it('should execute callback from refreshing metadata', function(done) {
        var apiResponse = {};
        var error = new Error('Error.');

        // Step 1: makes the request.
        table.getRows(responseHandler);

        // Step 2: refreshes the metadata to pull down the schema.
        table.getMetadata = function(callback) {
          callback(error, {}, apiResponse);
        };

        // Step 3: execute original complete handler with schema-merged rows.
        function responseHandler(err, rows, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(rows, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        }
      });
    });

    it('should return schema-merged rows', function(done) {
      var rows = [{ f: [{ v: 'stephen' }] }];
      var schema = { fields: [{ name: 'name', type: 'string' }] };
      var merged = [{ name: 'stephen' }];

      table.metadata = { schema: schema };

      table.request = function(reqOpts, callback) {
        callback(null, { rows: rows });
      };

      table.bigQuery.mergeSchemaWithRows_ = function(schema_, rows_) {
        assert.strictEqual(schema_, schema);
        assert.strictEqual(rows_, rows);
        return merged;
      };

      table.getRows(function(err, rows) {
        assert.ifError(err);
        assert.strictEqual(rows, merged);
        done();
      });
    });

    it('should return apiResponse in callback', function(done) {
      var rows = [{ f: [{ v: 'stephen' }] }];
      var schema = { fields: [{ name: 'name', type: 'string' }] };
      table.metadata = { schema: schema };

      table.request = function(reqOpts, callback) {
        callback(null, { rows: rows });
      };

      table.getRows(function(err, rows, nextQuery, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(apiResponse, { rows: [{ f: [{ v: 'stephen' }] }] });
        done();
      });
    });

    it('should pass nextQuery if pageToken is returned', function(done) {
      var options = { a: 'b', c: 'd' };
      var pageToken = 'token';

      // Set a schema so it doesn't try to refresh the metadata.
      table.metadata = { schema: {} };

      table.request = function(reqOpts, callback) {
        callback(null, { pageToken: pageToken });
      };

      table.getRows(options, function(err, rows, nextQuery) {
        assert.ifError(err);
        assert.deepEqual(nextQuery, { a: 'b', c: 'd', pageToken: pageToken });
        // Original object isn't affected.
        assert.deepEqual(options, { a: 'b', c: 'd' });
        done();
      });
    });
  });

  describe('import', function() {
    var fakeJob;

    beforeEach(function() {
      fakeJob = new events.EventEmitter();
      table.startImport = function(source, metadata, callback) {
        callback(null, fakeJob);
      };
    });

    it('should pass the arguments to startImport', function(done) {
      var fakeSource = {};
      var fakeMetadata = {};

      table.startImport = function(source, metadata) {
        assert.strictEqual(source, fakeSource);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      };

      table.import(fakeSource, fakeMetadata, assert.ifError);
    });

    it('should optionally accept metadata', function(done) {
      table.startImport = function(source, metadata) {
        assert.deepEqual(metadata, {});
        done();
      };

      table.import({}, assert.ifError);
    });

    it('should return any startImport errors', function(done) {
      var error = new Error('err');
      var response = {};

      table.startImport = function(source, metadata, callback) {
        callback(error, null, response);
      };

      table.import({}, function(err, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return any job errors', function(done) {
      var error = new Error('err');

      table.import({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });

      fakeJob.emit('error', error);
    });

    it('should return the metadata on complete', function(done) {
      var metadata = {};

      table.import({}, function(err, resp) {
        assert.ifError(err);
        assert.strictEqual(resp, metadata);
        done();
      });

      fakeJob.emit('complete', metadata);
    });
  });

  describe('insert', function() {
    var data = [
      { state: 'MI', gender: 'M', year: '2015', name: 'Berkley', count: '0' },
      { state: 'MI', gender: 'M', year: '2015', name: 'Berkley', count: '0' },
      { state: 'MI', gender: 'M', year: '2015', name: 'Berkley', count: '0' },
      { state: 'MI', gender: 'M', year: '2015', name: 'Berkley', count: '0' },
      { state: 'MI', gender: 'M', year: '2015', name: 'Berkley', count: '0' }
    ];

    var rawData = [
      { insertId: 1, json: data[0] },
      { insertId: 2, json: data[1] },
      { insertId: 3, json: data[2] },
      { insertId: 4, json: data[3] },
      { insertId: 5, json: data[4] },
    ];

    var dataApiFormat = {
      rows: data.map(function(row) {
        return {
          json: row
        };
      })
    };

    it('should throw an error if rows is empty', function() {
      assert.throws(function() {
        table.insert([]);
      }, /You must provide at least 1 row to be inserted\./);
    });

    it('should save data', function(done) {
      table.request = function(reqOpts) {
        assert.equal(reqOpts.method, 'POST');
        assert.equal(reqOpts.uri, '/insertAll');
        assert.deepEqual(reqOpts.json, dataApiFormat);
        done();
      };

      table.insert(data, done);
    });

    it('should execute callback with API response', function(done) {
      var apiResponse = { insertErrors: [] };

      table.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      table.insert(data, function(err, apiResponse_) {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      table.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      table.insert(data, function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should return partial failures', function(done) {
      var row0Error = { message: 'Error.', reason: 'notFound' };
      var row1Error = { message: 'Error.', reason: 'notFound' };

      table.request = function(reqOpts, callback) {
        callback(null, {
          insertErrors: [
            { index: 0, errors: [row0Error] },
            { index: 1, errors: [row1Error] }
          ]
        });
      };

      table.insert(data, function(err) {
        assert.strictEqual(err.name, 'PartialFailureError');

        assert.deepEqual(err.errors, [
          {
            row: dataApiFormat.rows[0].json,
            errors: [row0Error]
          },
          {
            row: dataApiFormat.rows[1].json,
            errors: [row1Error]
          }
        ]);

        done();
      });
    });

    it('should insert raw data', function(done) {
      table.request = function(reqOpts) {
        assert.equal(reqOpts.method, 'POST');
        assert.equal(reqOpts.uri, '/insertAll');
        assert.deepEqual(reqOpts.json, { rows: rawData });
        assert.strictEqual(reqOpts.json.raw, undefined);
        done();
      };

      var opts = { raw: true };
      table.insert(rawData, opts, done);
    });

    it('should accept options', function(done) {
      var opts = {
        ignoreUnknownValues: true,
        skipInvalidRows: true,
        templateSuffix: 'test'
      };

      table.request = function(reqOpts) {
        assert.equal(reqOpts.method, 'POST');
        assert.equal(reqOpts.uri, '/insertAll');

        assert.strictEqual(
          reqOpts.json.ignoreUnknownValues,
          opts.ignoreUnknownValues
        );
        assert.strictEqual(
          reqOpts.json.skipInvalidRows,
          opts.skipInvalidRows
        );
        assert.strictEqual(
          reqOpts.json.templateSuffix,
          opts.templateSuffix
        );

        assert.deepEqual(reqOpts.json.rows, dataApiFormat.rows);
        done();
      };

      table.insert(data, opts, done);
    });

    describe('create table and retry', function() {
      var OPTIONS  = {
        autoCreate: true,
        schema: SCHEMA_STRING
      };

      var _setTimeout;
      var _random;

      before(function() {
        _setTimeout = global.setTimeout;
        _random = Math.random;
      });

      beforeEach(function() {
        global.setTimeout = function(callback) {
          callback();
        };

        Math.random = _random;

        table.request = function(reqOpts, callback) {
          callback({ code: 404 });
        };

        table.create = function(reqOpts, callback) {
          callback(null);
        };
      });

      after(function() {
        global.setTimeout = _setTimeout;
        Math.random = _random;
      });

      it('should throw if autoCreate is set with no schema', function() {
        var options = {
          autoCreate: true
        };

        assert.throws(function() {
          table.insert(data, options);
        }, /Schema must be provided in order to auto\-create Table\./);
      });

      it('should not include the schema in the insert request', function(done) {
        table.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.schema, undefined);
          assert.strictEqual(reqOpts.json.autoCreate, undefined);
          done();
        };

        table.insert(data, OPTIONS, assert.ifError);
      });

      it('should set a timeout to create the table', function(done) {
        var fakeRandomValue = Math.random();

        Math.random = function() {
          return fakeRandomValue;
        };

        global.setTimeout = function(callback, delay) {
          assert.strictEqual(delay, fakeRandomValue * 60000);
          callback();
        };

        table.create = function(reqOpts) {
          assert.strictEqual(reqOpts.schema, SCHEMA_STRING);
          done();
        };

        table.insert(data, OPTIONS, assert.ifError);
      });

      it('should return table creation errors', function(done) {
        var error = new Error('err.');
        var response = {};

        table.create = function(reqOpts, callback) {
          callback(error, null, response);
        };

        table.insert(data, OPTIONS, function(err, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, response);
          done();
        });
      });

      it('should ignore 409 errors', function(done) {
        table.create = function(reqOpts, callback) {
          callback({ code: 409 });
        };

        var timeouts = 0;
        global.setTimeout = function(callback, delay) {
          if (++timeouts === 2) {
            assert.strictEqual(delay, 60000);
            done();
            return;
          }

          callback(null);
        };

        table.insert(data, OPTIONS, assert.ifError);
      });

      it('should retry the insert', function(done) {
        var response = {};
        var attempts = 0;

        table.request = function(reqOpts, callback) {
          assert.equal(reqOpts.method, 'POST');
          assert.equal(reqOpts.uri, '/insertAll');
          assert.deepEqual(reqOpts.json, dataApiFormat);

          if (++attempts === 2) {
            callback(null, response);
            return;
          }

          callback({ code: 404 });
        };

        table.insert(data, OPTIONS, function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp, response);
          done();
        });
      });
    });
  });

  describe('query', function() {
    it('should pass args through to datasetInstance.query()', function(done) {
      table.dataset.query = function(a, b) {
        assert.equal(a, 'a');
        assert.equal(b, 'b');
        done();
      };

      table.query('a', 'b');
    });
  });

  describe('setMetadata', function() {
    it('should call ServiceObject#setMetadata', function(done) {
      var fakeMetadata = {};
      var formattedMetadata = {};

      Table.formatMetadata_ = function(data) {
        assert.strictEqual(data, fakeMetadata);
        return formattedMetadata;
      };

      FakeServiceObject.prototype.setMetadata = function(metadata, callback) {
        assert.strictEqual(this, table);
        assert.strictEqual(metadata, formattedMetadata);
        assert.strictEqual(callback, done);
        callback(); // the done fn
      };

      table.setMetadata(fakeMetadata, done);
    });
  });

  describe('startCopy', function() {
    var DEST_TABLE;

    before(function() {
      DEST_TABLE = new Table(DATASET, 'destination-table');
    });

    it('should throw if a destination is not a Table', function() {
      assert.throws(function() {
        table.startCopy();
      }, /Destination must be a Table/);

      assert.throws(function() {
        table.startCopy({});
      }, /Destination must be a Table/);

      assert.throws(function() {
        table.startCopy(function() {});
      }, /Destination must be a Table/);
    });

    it('should send correct request to the API', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        assert.deepEqual(reqOpts, {
          configuration: {
            copy: {
              a: 'b',
              c: 'd',
              destinationTable: {
                datasetId: DEST_TABLE.dataset.id,
                projectId: DEST_TABLE.bigQuery.projectId,
                tableId: DEST_TABLE.id
              },
              sourceTable: {
                datasetId: table.dataset.id,
                projectId: table.bigQuery.projectId,
                tableId: table.id
              }
            }
          }
        });

        done();
      };

      table.startCopy(DEST_TABLE, { a: 'b', c: 'd' }, assert.ifError);
    });

    it('should accept a job prefix', function(done) {
      var fakeJobPrefix = 'abc-';
      var options = {
        jobPrefix: fakeJobPrefix
      };

      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.jobPrefix, fakeJobPrefix);
        assert.strictEqual(reqOpts.configuration.copy.jobPrefix, undefined);
        callback(); // the done fn
      };

      table.startCopy(DEST_TABLE, options, done);
    });

    it('should pass the callback to createJob', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startCopy(DEST_TABLE, {}, done);
    });

    it('should optionally accept metadata', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startCopy(DEST_TABLE,done);
    });
  });

  describe('startCopyFrom', function() {
    var SOURCE_TABLE;

    before(function() {
      SOURCE_TABLE = new Table(DATASET, 'source-table');
    });

    it('should throw if a source is not a Table', function() {
      assert.throws(function() {
        table.startCopyFrom(['table']);
      }, /Source must be a Table/);

      assert.throws(function() {
        table.startCopyFrom([SOURCE_TABLE, 'table']);
      }, /Source must be a Table/);

      assert.throws(function() {
        table.startCopyFrom({});
      }, /Source must be a Table/);

      assert.throws(function() {
        table.startCopyFrom(function() {});
      }, /Source must be a Table/);
    });

    it('should send correct request to the API', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        assert.deepEqual(reqOpts, {
          configuration: {
            copy: {
              a: 'b',
              c: 'd',
              destinationTable: {
                datasetId: table.dataset.id,
                projectId: table.bigQuery.projectId,
                tableId: table.id
              },
              sourceTables: [
                {
                  datasetId: SOURCE_TABLE.dataset.id,
                  projectId: SOURCE_TABLE.bigQuery.projectId,
                  tableId: SOURCE_TABLE.id
                }
              ]
            }
          }
        });

        done();
      };

      table.startCopyFrom(SOURCE_TABLE, { a: 'b', c: 'd' }, assert.ifError);
    });

    it('should accept multiple source tables', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        assert.deepEqual(reqOpts.configuration.copy.sourceTables, [
          {
            datasetId: SOURCE_TABLE.dataset.id,
            projectId: SOURCE_TABLE.bigQuery.projectId,
            tableId: SOURCE_TABLE.id
          },
          {
            datasetId: SOURCE_TABLE.dataset.id,
            projectId: SOURCE_TABLE.bigQuery.projectId,
            tableId: SOURCE_TABLE.id
          }
        ]);

        done();
      };

      table.startCopyFrom([
        SOURCE_TABLE,
        SOURCE_TABLE
      ], assert.ifError);
    });

    it('should accept a job prefix', function(done) {
      var fakeJobPrefix = 'abc-';
      var options = {
        jobPrefix: fakeJobPrefix
      };

      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.jobPrefix, fakeJobPrefix);
        assert.strictEqual(reqOpts.configuration.copy.jobPrefix, undefined);
        callback(); // the done fn
      };

      table.startCopyFrom(SOURCE_TABLE, options, done);
    });

    it('should pass the callback to createJob', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startCopyFrom(SOURCE_TABLE, {}, done);
    });

    it('should optionally accept options', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startCopyFrom(SOURCE_TABLE, done);
    });
  });

  describe('startExport', function() {
    var FILE = {
      name: 'file-name.json',
      bucket: {
        name: 'bucket-name'
      }
    };

    beforeEach(function() {
      isCustomTypeOverride = function() {
        return true;
      };

      table.bigQuery.job = function(id) {
        return { id: id };
      };

      table.bigQuery.createJob = function() {};
    });

    it('should call createJob correctly', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        assert.deepEqual(reqOpts.configuration.extract.sourceTable, {
          datasetId: table.dataset.id,
          projectId: table.bigQuery.projectId,
          tableId: table.id
        });

        done();
      };

      table.startExport(FILE, assert.ifError);
    });

    it('should accept just a destination and a callback', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        callback(null, { jobReference: { jobId: 'job-id' }});
      };

      table.startExport(FILE, done);
    });

    describe('formats', function() {
      it('should accept csv', function(done) {
        table.bigQuery.createJob = function(reqOpts) {
          var extract = reqOpts.configuration.extract;
          assert.equal(extract.destinationFormat, 'CSV');
          done();
        };

        table.startExport(FILE, { format: 'csv' }, assert.ifError);
      });

      it('should accept json', function(done) {
        table.bigQuery.createJob = function(reqOpts) {
          var extract = reqOpts.configuration.extract;
          assert.equal(extract.destinationFormat, 'NEWLINE_DELIMITED_JSON');
          done();
        };

        table.startExport(FILE, { format: 'json' }, assert.ifError);
      });

      it('should accept avro', function(done) {
        table.bigQuery.createJob = function(reqOpts) {
          var extract = reqOpts.configuration.extract;
          assert.equal(extract.destinationFormat, 'AVRO');
          done();
        };

        table.startExport(FILE, { format: 'avro' }, assert.ifError);
      });
    });

    it('should parse out full gs:// urls from files', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        assert.deepEqual(reqOpts.configuration.extract.destinationUris, [
          'gs://' + FILE.bucket.name + '/' + FILE.name
        ]);
        done();
      };

      table.startExport(FILE, assert.ifError);
    });

    it('should check if a destination is a File', function(done) {
      isCustomTypeOverride = function(dest, type) {
        assert.strictEqual(dest, FILE);
        assert.strictEqual(type, 'storage/file');
        setImmediate(done);
        return true;
      };

      table.startExport(FILE, assert.ifError);
    });

    it('should throw if a destination is not a File', function() {
      isCustomTypeOverride = function() {
        return false;
      };

      assert.throws(function() {
        table.startExport({}, util.noop);
      }, /Destination must be a File object/);

      assert.throws(function() {
        table.startExport([FILE, {}], util.noop);
      }, /Destination must be a File object/);
    });

    it('should detect file format if a format is not provided', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        var destFormat = reqOpts.configuration.extract.destinationFormat;
        assert.equal(destFormat, 'NEWLINE_DELIMITED_JSON');
        done();
      };

      table.startExport(FILE, assert.ifError);
    });

    it('should assign the provided format if matched', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        var extract = reqOpts.configuration.extract;
        assert.equal(extract.destinationFormat, 'CSV');
        assert.strictEqual(extract.format, undefined);
        done();
      };

      table.startExport(FILE, { format: 'csv' }, assert.ifError);
    });

    it('should throw if a provided format is not recognized', function() {
      assert.throws(function() {
        table.startExport(FILE, { format: 'zip' }, util.noop);
      }, /Destination format not recognized/);
    });

    it('should assign GZIP compression with gzip: true', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        assert.equal(reqOpts.configuration.extract.compression, 'GZIP');
        assert.strictEqual(reqOpts.configuration.extract.gzip, undefined);
        done();
      };

      table.startExport(FILE, { gzip: true }, util.noop);
    });

    it('should accept a job prefix', function(done) {
      var fakeJobPrefix = 'abc-';
      var options = {
        jobPrefix: fakeJobPrefix
      };

      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.jobPrefix, fakeJobPrefix);
        assert.strictEqual(reqOpts.configuration.extract.jobPrefix, undefined);
        callback(); // the done fn
      };

      table.startExport(FILE, options, done);
    });

    it('should pass the callback to createJob', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startExport(FILE, {}, done);
    });

    it('should optionally accept options', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startExport(FILE, done);
    });
  });

  describe('startImport', function() {
    var FILEPATH = require.resolve('./testdata/testfile.json');
    var FILE = {
      name: 'file-name.json',
      bucket: {
        name: 'bucket-name'
      }
    };

    var JOB = {
      id: 'foo',
      metadata: {}
    };

    beforeEach(function() {
      isCustomTypeOverride = function() {
        return true;
      };
    });

    it('should accept just a File and a callback', function(done) {
      table.createWriteStream = function() {
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('complete', JOB);
          ws.end();
        });
        return ws;
      };

      table.startImport(FILEPATH, function(err, job, resp) {
        assert.strictEqual(err, null);
        assert.strictEqual(job, JOB);
        assert.strictEqual(resp, JOB.metadata);
        done();
      });
    });

    it('should return a stream when a string is given', function() {
      table.createWriteStream = function() {
        return new stream.Writable();
      };

      assert(table.startImport(FILEPATH) instanceof stream.Stream);
    });

    it('should infer the file format from the given filepath', function(done) {
      table.createWriteStream = function(metadata) {
        assert.equal(metadata.sourceFormat, 'NEWLINE_DELIMITED_JSON');
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('complete', JOB);
          ws.end();
        });
        return ws;
      };

      table.startImport(FILEPATH, done);
    });

    it('should execute callback with error from writestream', function(done) {
      var error = new Error('Error.');

      table.createWriteStream = function(metadata) {
        assert.equal(metadata.sourceFormat, 'NEWLINE_DELIMITED_JSON');
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('error', error);
          ws.end();
        });
        return ws;
      };

      table.startImport(FILEPATH, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not infer the file format if one is given', function(done) {
      table.createWriteStream = function(metadata) {
        assert.equal(metadata.sourceFormat, 'CSV');
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('complete', JOB);
          ws.end();
        });
        return ws;
      };

      table.startImport(FILEPATH, { sourceFormat: 'CSV' }, done);
    });

    it('should check if a destination is a File', function(done) {
      isCustomTypeOverride = function(dest, type) {
        assert.strictEqual(dest, FILE);
        assert.strictEqual(type, 'storage/file');
        setImmediate(done);
        return true;
      };

      table.startImport(FILE, assert.ifError);
    });

    it('should throw if a File object is not provided', function() {
      isCustomTypeOverride = function() {
        return false;
      };

      assert.throws(function() {
        table.startImport({});
      }, /Source must be a File object/);
    });

    it('should convert File objects to gs:// urls', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        var sourceUri = reqOpts.configuration.load.sourceUris[0];
        assert.equal(sourceUri, 'gs://' + FILE.bucket.name + '/' + FILE.name);
        done();
      };

      table.startImport(FILE, assert.ifError);
    });

    it('should infer the file format from a File object', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        var sourceFormat = reqOpts.configuration.load.sourceFormat;
        assert.equal(sourceFormat, 'NEWLINE_DELIMITED_JSON');
        done();
      };

      table.startImport(FILE, assert.ifError);
    });

    it('should not override a provided format with a File', function(done) {
      table.bigQuery.createJob = function(reqOpts) {
        var sourceFormat = reqOpts.configuration.load.sourceFormat;
        assert.equal(sourceFormat, 'NEWLINE_DELIMITED_JSON');
        done();
      };

      table.startImport(FILE, {
        sourceFormat: 'NEWLINE_DELIMITED_JSON'
      }, assert.ifError);
    });

    it('should pass the callback to createJob', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startImport(FILE, {}, done);
    });

    it('should optionally accept options', function(done) {
      table.bigQuery.createJob = function(reqOpts, callback) {
        assert.strictEqual(done, callback);
        callback(); // the done fn
      };

      table.startImport(FILE, done);
    });

    it('should set the job prefix', function(done) {
      var fakeJobPrefix = 'abc';

      table.bigQuery.createJob = function(reqOpts) {
        assert.strictEqual(reqOpts.jobPrefix, fakeJobPrefix);
        assert.strictEqual(reqOpts.configuration.load.jobPrefix, undefined);
        done();
      };

      table.startImport(FILE, {
        jobPrefix: fakeJobPrefix
      }, assert.ifError);
    });

    describe('formats', function() {
      it('should accept csv', function(done) {
        table.bigQuery.createJob = function(reqOpts) {
          var load = reqOpts.configuration.load;
          assert.strictEqual(load.sourceFormat, 'CSV');
          done();
        };

        table.startImport(FILE, { format: 'csv' }, assert.ifError);
      });

      it('should accept json', function(done) {
        table.bigQuery.createJob = function(reqOpts) {
          var load = reqOpts.configuration.load;
          assert.strictEqual(load.sourceFormat, 'NEWLINE_DELIMITED_JSON');
          done();
        };

        table.startImport(FILE, { format: 'json' }, assert.ifError);
      });

      it('should accept avro', function(done) {
        table.bigQuery.createJob = function(reqOpts) {
          var load = reqOpts.configuration.load;
          assert.strictEqual(load.sourceFormat, 'AVRO');
          done();
        };

        table.startImport(FILE, { format: 'avro' }, assert.ifError);
      });
    });
  });

  describe('startQuery', function() {
    it('should call through to dataset#startQuery', function(done) {
      var fakeOptions = {};
      var fakeReturnValue = {};

      table.dataset.startQuery = function(options, callback) {
        assert.strictEqual(options, fakeOptions);
        setImmediate(callback);
        return fakeReturnValue;
      };

      var returnVal = table.startQuery(fakeOptions, done);
      assert.strictEqual(returnVal, fakeReturnValue);
    });
  });
});
