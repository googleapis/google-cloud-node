/**
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

'use strict';

var assert = require('assert');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var pumpify = require('pumpify');
var through = require('through2');
var Stream = require('stream').PassThrough;
var sinon = require('sinon').sandbox.create();

var GrpcServiceObject = require('@google-cloud/common').GrpcServiceObject;
var Family = require('../src/family.js');
var Mutation = require('../src/mutation.js');
var Row = require('../src/row.js');

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcServiceObject, GrpcServiceObject);

function FakeFamily() {
  this.calledWith_ = arguments;
  Family.apply(this, arguments);
}

FakeFamily.formatRule_ = sinon.spy(function(rule) {
  return rule;
});

nodeutil.inherits(FakeFamily, Family);

function FakeRow() {
  this.calledWith_ = arguments;
  Row.apply(this, arguments);
}

FakeRow.formatChunks_ = sinon.spy(function(chunks) {
  return chunks;
});

nodeutil.inherits(FakeRow, Row);

var FakeMutation = {
  methods: Mutation.methods,
  convertToBytes: sinon.spy(function(value) {
    return value;
  }),
  convertFromBytes: sinon.spy(function(value) {
    return value;
  }),
  parse: sinon.spy(function(value) {
    return value;
  })
};

var FakeFilter = {
  parse: sinon.spy(function(value) {
    return value;
  })
};

describe('Bigtable/Table', function() {
  var TABLE_ID = 'my-table';
  var BIGTABLE = {
    clusterName: 'a/b/c/d'
  };
  var TABLE_NAME = BIGTABLE.clusterName + '/tables/' + TABLE_ID;

  var Table;
  var table;

  before(function() {
    Table = proxyquire('../src/table.js', {
      '@google-cloud/common': {
        GrpcServiceObject: FakeGrpcServiceObject
      },
      './family.js': FakeFamily,
      './mutation.js': FakeMutation,
      './filter.js': FakeFilter,
      pumpify: pumpify,
      './row.js': FakeRow
    });
  });

  beforeEach(function() {
    table = new Table(BIGTABLE, TABLE_ID);
  });

  afterEach(function() {
    sinon.restore();

    Object.keys(FakeMutation).forEach(function(spy) {
      if (FakeMutation[spy].reset) {
        FakeMutation[spy].reset();
      }
    });

    FakeFilter.parse.reset();
  });

  describe('instantiation', function() {
    it('should inherit from GrpcServiceObject', function() {
      var FAKE_TABLE_NAME = 'fake-table-name';

      sinon.stub(Table, 'formatName_', function() {
        return FAKE_TABLE_NAME;
      });

      var table = new Table(BIGTABLE, TABLE_ID);
      var config = table.calledWith_[0];

      assert(table instanceof FakeGrpcServiceObject);
      assert.strictEqual(config.parent, BIGTABLE);
      assert.strictEqual(config.id, FAKE_TABLE_NAME);

      assert.deepEqual(config.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'BigtableTableService',
            method: 'deleteTable'
          },
          reqOpts: {
            name: FAKE_TABLE_NAME
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'BigtableTableService',
            method: 'getTable'
          },
          reqOpts: {
            name: FAKE_TABLE_NAME
          }
        }
      });

      assert(Table.formatName_.calledWith(BIGTABLE.clusterName, TABLE_ID));
    });

    it('should use Bigtable#createTable to create the table', function(done) {
      var fakeOptions = {};

      BIGTABLE.createTable = function(name, options, callback) {
        assert.strictEqual(name, TABLE_ID);
        assert.strictEqual(options, fakeOptions);
        callback();
      };

      table.createMethod(null, fakeOptions, done);
    });
  });

  describe('formatName_', function() {
    it('should format the table name to include the cluster name', function() {
      var tableName = Table.formatName_(BIGTABLE.clusterName, TABLE_ID);
      assert.strictEqual(tableName, TABLE_NAME);
    });

    it('should not re-format the table name', function() {
      var tableName = Table.formatName_(BIGTABLE.clusterName, TABLE_NAME);
      assert.strictEqual(tableName, TABLE_NAME);
    });
  });

  describe('formatRowRange_', function() {
    it('should create a row range object', function() {
      var fakeRange = {
        start: 'a',
        end: 'b'
      };
      var convertedFakeRange = {
        start: 'c',
        end: 'd'
      };

      var spy = FakeMutation.convertToBytes = sinon.spy(function(value) {
        if (value === fakeRange.start) {
          return convertedFakeRange.start;
        }
        return convertedFakeRange.end;
      });

      var range = Table.formatRowRange_(fakeRange);

      assert.deepEqual(range, {
        startKey: convertedFakeRange.start,
        endKey: convertedFakeRange.end
      });

      assert.strictEqual(spy.callCount, 2);
      assert.strictEqual(spy.getCall(0).args[0], 'a');
      assert.strictEqual(spy.getCall(1).args[0], 'b');
    });
  });

  describe('createFamily', function() {
    var COLUMN_ID = 'my-column';

    it('should provide the proper request options', function(done) {
      table.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableTableService',
          method: 'createColumnFamily'
        });

        assert.strictEqual(reqOpts.name, TABLE_NAME);
        assert.strictEqual(reqOpts.columnFamilyId, COLUMN_ID);
        done();
      };

      table.createFamily(COLUMN_ID, assert.ifError);
    });

    it('should respect the gc expression option', function(done) {
      var expression = 'a && b';

      table.request = function(g, reqOpts) {
        assert.strictEqual(reqOpts.columnFamily.gcExpression, expression);
        done();
      };

      table.createFamily(COLUMN_ID, expression, assert.ifError);
    });

    it('should respect the gc rule option', function(done) {
      var rule = {
        a: 'a',
        b: 'b'
      };
      var convertedRule = {
        c: 'c',
        d: 'd'
      };

      var spy = FakeFamily.formatRule_ = sinon.spy(function() {
        return convertedRule;
      });

      table.request = function(g, reqOpts) {
        assert.strictEqual(reqOpts.columnFamily.gcRule, convertedRule);
        assert.strictEqual(spy.callCount, 1);
        assert.strictEqual(spy.getCall(0).args[0], rule);
        done();
      };

      table.createFamily(COLUMN_ID, rule, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      table.request = function(g, r, callback) {
        callback(error, response);
      };

      table.createFamily(COLUMN_ID, function(err, family, apiResponse) {
        assert.strictEqual(error, err);
        assert.strictEqual(family, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return a Family object', function(done) {
      var response = {
        name: 'response-family-name'
      };
      var fakeFamily = {};

      table.request = function(g, r, callback) {
        callback(null, response);
      };

      table.family = function(name) {
        assert.strictEqual(name, response.name);
        return fakeFamily;
      };

      table.createFamily(COLUMN_ID, function(err, family, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(family, fakeFamily);
        assert.strictEqual(family.metadata, response);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('deleteRows', function() {
    it('should provide the proper request options', function(done) {
      table.request = function(grpcOpts, reqOpts, callback) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableTableService',
          method: 'bulkDeleteRows'
        });

        assert.strictEqual(reqOpts.tableName, TABLE_NAME);
        callback();
      };

      table.deleteRows(done);
    });

    it('should respect the row key prefix option', function(done) {
      var options = {
        prefix: 'a'
      };
      var fakePrefix = 'b';

      var spy = FakeMutation.convertToBytes = sinon.spy(function() {
        return fakePrefix;
      });

      table.request = function(g, reqOpts, callback) {
        assert.strictEqual(reqOpts.rowKeyPrefix, fakePrefix);

        assert.strictEqual(spy.callCount, 1);
        assert.strictEqual(spy.getCall(0).args[0], options.prefix);
        callback();
      };

      table.deleteRows(options, done);
    });

    it('should delete all data when no options are provided', function(done) {
      table.request = function(g, reqOpts, callback) {
        assert.strictEqual(reqOpts.deleteAllDataFromTable, true);
        callback();
      };

      table.deleteRows(done);
    });
  });

  describe('family', function() {
    var FAMILY_ID = 'test-family';

    it('should create a family with the proper arguments', function() {
      var family = table.family(FAMILY_ID);

      assert(family instanceof FakeFamily);
      assert.strictEqual(family.calledWith_[0], table);
      assert.strictEqual(family.calledWith_[1], FAMILY_ID);
    });
  });

  describe('getFamilies', function() {
    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      table.getMetadata = function(callback) {
        callback(error, response);
      };

      table.getFamilies(function(err, families, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(families, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return an array of Family objects', function(done) {
      var metadata = {
        a: 'b'
      };

      var response = {
        columnFamilies: {
          test: metadata
        }
      };

      var fakeFamily = {};

      table.getMetadata = function(callback) {
        callback(null, response);
      };

      table.family = function(id) {
        assert.strictEqual(id, 'test');
        return fakeFamily;
      };

      table.getFamilies(function(err, families, apiResponse) {
        assert.ifError(err);

        var family = families[0];
        assert.strictEqual(family, fakeFamily);
        assert.strictEqual(family.metadata, metadata);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('getRows', function() {
    describe('options', function() {
      var pumpSpy;
      var formatSpy;

      beforeEach(function() {
        pumpSpy = sinon.stub(pumpify, 'obj', function() {
          return through.obj();
        });

        formatSpy = sinon.stub(Table, 'formatRowRange_', function(value) {
          return value;
        });
      });

      it('should provide the proper request options', function(done) {
        table.requestStream = function(grpcOpts, reqOpts) {
          assert.deepEqual(grpcOpts, {
            service: 'BigtableService',
            method: 'readRows'
          });

          assert.strictEqual(reqOpts.tableName, TABLE_NAME);
          assert.strictEqual(reqOpts.objectMode, true);
          done();
        };

        table.getRows();
      });

      it('should retrieve an individual row', function(done) {
        var options = {
          key: 'gwashington'
        };
        var fakeKey = 'a';

        var convertSpy = FakeMutation.convertToBytes = sinon.spy(function() {
          return fakeKey;
        });

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(reqOpts.rowKey, fakeKey);
          assert.strictEqual(convertSpy.callCount, 1);
          assert.strictEqual(convertSpy.getCall(0).args[0], options.key);
          done();
        };

        table.getRows(options);
      });

      it('should retrieve a range of rows', function(done) {
        var options = {
          start: 'gwashington',
          end: 'alincoln'
        };

        var fakeRange = {
          start: 'a',
          end: 'b'
        };

        var formatSpy = Table.formatRowRange_ = sinon.spy(function() {
          return fakeRange;
        });

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(reqOpts.rowRange, fakeRange);
          assert.strictEqual(formatSpy.callCount, 1);
          assert.strictEqual(formatSpy.getCall(0).args[0], options);
          done();
        };

        table.getRows(options);
      });

      it('should retrieve multiple rows', function(done) {
        var options = {
          keys: [
            'gwashington',
            'alincoln'
          ]
        };
        var convertedKeys = [
          'a',
          'b'
        ];

        var convertSpy = FakeMutation.convertToBytes = sinon.spy(function(key) {
          var keyIndex = options.keys.indexOf(key);
          return convertedKeys[keyIndex];
        });

        table.requestStream = function(g, reqOpts) {
          assert.deepEqual(reqOpts.rowSet.rowKeys, convertedKeys);
          assert.strictEqual(convertSpy.callCount, 2);
          assert.strictEqual(convertSpy.getCall(0).args[0], options.keys[0]);
          assert.strictEqual(convertSpy.getCall(1).args[0], options.keys[1]);
          done();
        };

        table.getRows(options);
      });

      it('should retrieve multiple ranges', function(done) {
        var options = {
          ranges: [{
            start: 'a',
            end: 'b'
          }, {
            start: 'c',
            end: 'd'
          }]
        };

        var fakeRanges = [{
          start: 'e',
          end: 'f'
        }, {
          start: 'g',
          end: 'h'
        }];

        var formatSpy = Table.formatRowRange_ = sinon.spy(function(range) {
          var rangeIndex = options.ranges.indexOf(range);
          return fakeRanges[rangeIndex];
        });

        table.requestStream = function(g, reqOpts) {
          assert.deepEqual(reqOpts.rowSet.rowRanges, fakeRanges);
          assert.strictEqual(formatSpy.callCount, 2);
          assert.strictEqual(formatSpy.getCall(0).args[0], options.ranges[0]);
          assert.strictEqual(formatSpy.getCall(1).args[0], options.ranges[1]);
          done();
        };

        table.getRows(options);
      });

      it('should parse a filter object', function(done) {
        var options = {
          filter: [{}]
        };

        var fakeFilter = {};

        var parseSpy = FakeFilter.parse = sinon.spy(function() {
          return fakeFilter;
        });

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(reqOpts.filter, fakeFilter);
          assert.strictEqual(parseSpy.callCount, 1);
          assert.strictEqual(parseSpy.getCall(0).args[0], options.filter);
          done();
        };

        table.getRows(options);
      });

      it('should allow row interleaving', function(done) {
        var options = {
          interleave: true
        };

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(reqOpts.allowRowInterleaving, options.interleave);
          done();
        };

        table.getRows(options);
      });

      it('should allow setting a row limit', function(done) {
        var options = {
          limit: 10
        };

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(reqOpts.numRowsLimit, options.limit);
          done();
        };

        table.getRows(options);
      });
    });

    describe('success', function() {
      var fakeRows = [{
        rowKey: 'a',
        chunks: []
      }, {
        rowKey: 'b',
        chunks: []
      }];
      var convertedKeys = [
        'c',
        'd'
      ];
      var formattedChunks = [
        [{ a: 'a' }],
        [{ b: 'b' }]
      ];

      beforeEach(function() {
        sinon.stub(table, 'row', function() {
          return {};
        });

        FakeMutation.convertFromBytes = sinon.spy(function(value) {
          if (value === fakeRows[0].rowKey) {
            return convertedKeys[0];
          }
          return convertedKeys[1];
        });

        FakeRow.formatChunks_ = sinon.spy(function(value) {
          if (value === fakeRows[0].chunks) {
            return formattedChunks[0];
          }
          return formattedChunks[1];
        });

        table.requestStream = function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            fakeRows.forEach(function(data) {
              stream.push(data);
            });

            stream.push(null);
          });

          return stream;
        };
      });

      it('should stream Row objects', function(done) {
        var rows = [];

        table.getRows()
          .on('error', done)
          .on('data', function(row) {
            rows.push(row);
          })
          .on('end', function() {
            var rowSpy = table.row;
            var formatSpy = FakeRow.formatChunks_;

            assert.strictEqual(rows.length, fakeRows.length);
            assert.strictEqual(rowSpy.callCount, fakeRows.length);

            assert.strictEqual(rowSpy.getCall(0).args[0], convertedKeys[0]);
            assert.strictEqual(rows[0].data, formattedChunks[0]);
            assert.strictEqual(
              formatSpy.getCall(0).args[0], fakeRows[0].chunks);

            assert.strictEqual(rowSpy.getCall(1).args[0], convertedKeys[1]);
            assert.strictEqual(rows[1].data, formattedChunks[1]);
            assert.strictEqual(
              formatSpy.getCall(1).args[0], fakeRows[1].chunks);

            done();
          });
      });

      it('should return an array of Row objects via callback', function(done) {
        table.getRows(function(err, rows) {
          assert.ifError(err);

          var rowSpy = table.row;
          var formatSpy = FakeRow.formatChunks_;

          assert.strictEqual(rows.length, fakeRows.length);
          assert.strictEqual(rowSpy.callCount, fakeRows.length);

          assert.strictEqual(rowSpy.getCall(0).args[0], convertedKeys[0]);
          assert.strictEqual(rows[0].data, formattedChunks[0]);
          assert.strictEqual(
            formatSpy.getCall(0).args[0], fakeRows[0].chunks);

          assert.strictEqual(rowSpy.getCall(1).args[0], convertedKeys[1]);
          assert.strictEqual(rows[1].data, formattedChunks[1]);
          assert.strictEqual(
            formatSpy.getCall(1).args[0], fakeRows[1].chunks);

          done();
        });
      });
    });

    describe('error', function() {
      var error = new Error('err');

      beforeEach(function() {
        table.requestStream = function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            stream.emit('error', error);
          });

          return stream;
        };
      });

      it('should emit an error event', function(done) {
        table.getRows()
          .on('error', function(err) {
            assert.strictEqual(error, err);
            done();
          })
          .on('data', done);
      });

      it('should return an error to the callback', function(done) {
        table.getRows(function(err, rows) {
          assert.strictEqual(error, err);
          assert(!rows);
          done();
        });
      });
    });
  });

  describe('insert', function() {
    it('should create an "insert" mutation', function(done) {
      var fakeEntries = [{
        key: 'a',
        data: {}
      }, {
        key: 'b',
        data: {}
      }];

      table.mutate = function(entries, callback) {
        assert.deepEqual(entries[0], {
          key: fakeEntries[0].key,
          data: fakeEntries[0].data,
          method: FakeMutation.methods.INSERT
        });

        assert.deepEqual(entries[1], {
          key: fakeEntries[1].key,
          data: fakeEntries[1].data,
          method: FakeMutation.methods.INSERT
        });

        callback();
      };

      table.insert(fakeEntries, done);
    });
  });

  describe('mutate', function() {
    it('should provide the proper request options', function(done) {
      var entries = [{}, {}];
      var fakeEntries = [{}, {}];

      var parseSpy = FakeMutation.parse = sinon.spy(function(value) {
        var entryIndex = entries.indexOf(value);
        return fakeEntries[entryIndex];
      });

      table.request = function(grpcOpts, reqOpts, callback) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableService',
          method: 'mutateRows'
        });

        assert.strictEqual(reqOpts.tableName, TABLE_NAME);
        assert.deepEqual(reqOpts.entries, fakeEntries);

        assert.strictEqual(parseSpy.callCount, 2);
        assert.strictEqual(parseSpy.getCall(0).args[0], entries[0]);
        assert.strictEqual(parseSpy.getCall(1).args[0], entries[1]);
        callback();
      };

      table.mutate(entries, done);
    });
  });

  describe('row', function() {
    var ROW_ID = 'test-row';

    it('should return a Row object', function() {
      var row = table.row(ROW_ID);

      assert(row instanceof FakeRow);
      assert.strictEqual(row.calledWith_[0], table);
      assert.strictEqual(row.calledWith_[1], ROW_ID);
    });
  });

  describe('sampleRowKeys', function() {
    it('should provide the proper request options', function(done) {
      table.requestStream = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableService',
          method: 'sampleRowKeys'
        });

        assert.strictEqual(reqOpts.tableName, TABLE_NAME);
        assert.strictEqual(reqOpts.objectMode, true);
        setImmediate(done);

        return new Stream({
          objectMode: true
        });
      };

      table.sampleRowKeys();
    });

    describe('success', function() {
      var fakeKeys = [{
        rowKey: 'a',
        offsetBytes: 10
      }, {
        rowKey: 'b',
        offsetByte: 20
      }];

      beforeEach(function() {
        table.requestStream = function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            fakeKeys.forEach(function(key) {
              stream.push(key);
            });

            stream.push(null);
          });

          return stream;
        };
      });

      it('should stream key objects', function(done) {
        var keys = [];

        table.sampleRowKeys()
          .on('error', done)
          .on('data', function(key) {
            keys.push(key);
          })
          .on('end', function() {
            assert.strictEqual(keys[0].key, fakeKeys[0].rowKey);
            assert.strictEqual(keys[0].offset, fakeKeys[0].offsetBytes);
            assert.strictEqual(keys[1].key, fakeKeys[1].rowKey);
            assert.strictEqual(keys[1].offset, fakeKeys[1].offsetBytes);
            done();
          });
      });

      it('should return an array of keys via callback', function(done) {
        table.sampleRowKeys(function(err, keys) {
          assert.ifError(err);
          assert.strictEqual(keys[0].key, fakeKeys[0].rowKey);
          assert.strictEqual(keys[0].offset, fakeKeys[0].offsetBytes);
          assert.strictEqual(keys[1].key, fakeKeys[1].rowKey);
          assert.strictEqual(keys[1].offset, fakeKeys[1].offsetBytes);
          done();
        });
      });
    });

    describe('error', function() {
      var error = new Error('err');

      beforeEach(function() {
        table.requestStream = function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            stream.emit('error', error);
          });

          return stream;
        };
      });

      it('should emit an error event', function(done) {
        table.sampleRowKeys()
          .on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          })
          .on('data', done);
      });

      it('should return an error to the callback', function(done) {
        table.sampleRowKeys(function(err, keys) {
          assert.strictEqual(error, err);
          assert(!keys);
          done();
        });
      });
    });
  });

});
