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
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var pumpify = require('pumpify');
var sinon = require('sinon').sandbox.create();
var Stream = require('stream').PassThrough;
var through = require('through2');

var common = require('@google-cloud/common');
var Family = require('../src/family.js');
var Mutation = require('../src/mutation.js');
var Row = require('../src/row.js');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Table') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['family', 'row']);
  }
});

function createFake(Class) {
  function Fake() {
    this.calledWith_ = arguments;
    Class.apply(this, arguments);
  }
  nodeutil.inherits(Fake, Class);
  return Fake;
}

var FakeGrpcService = createFake(common.GrpcService);
var FakeGrpcServiceObject = createFake(common.GrpcServiceObject);
var FakeFamily = createFake(Family);

FakeFamily.formatRule_ = sinon.spy(function(rule) {
  return rule;
});

var FakeRow = createFake(Row);

FakeRow.formatChunks_ = sinon.spy(function(chunks) {
  return chunks;
});

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
  var INSTANCE = {
    id: 'a/b/c/d'
  };

  var TABLE_NAME = INSTANCE.id + '/tables/' + TABLE_ID;

  var Table;
  var table;

  before(function() {
    Table = proxyquire('../src/table.js', {
      '@google-cloud/common': {
        GrpcService: FakeGrpcService,
        GrpcServiceObject: FakeGrpcServiceObject,
        util: fakeUtil
      },
      './family.js': FakeFamily,
      './mutation.js': FakeMutation,
      './filter.js': FakeFilter,
      pumpify: pumpify,
      './row.js': FakeRow
    });
  });

  beforeEach(function() {
    table = new Table(INSTANCE, TABLE_ID);
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

      var table = new Table(INSTANCE, TABLE_ID);
      var config = table.calledWith_[0];

      assert(table instanceof FakeGrpcServiceObject);
      assert.strictEqual(config.parent, INSTANCE);
      assert.strictEqual(config.id, FAKE_TABLE_NAME);

      assert.deepEqual(config.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'BigtableTableAdmin',
            method: 'deleteTable'
          },
          reqOpts: {
            name: FAKE_TABLE_NAME
          }
        },
        exists: true,
        get: true
      });

      assert(Table.formatName_.calledWith(INSTANCE.id, TABLE_ID));
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should use Instance#createTable to create the table', function(done) {
      var fakeOptions = {};

      INSTANCE.createTable = function(name, options, callback) {
        assert.strictEqual(name, TABLE_ID);
        assert.strictEqual(options, fakeOptions);
        callback();
      };

      table.createMethod(null, fakeOptions, done);
    });
  });

  describe('VIEWS', function() {
    var views = {
      unspecified: 0,
      name: 1,
      schema: 2,
      full: 4
    };

    it('should export the table views', function() {
      assert.deepEqual(views, Table.VIEWS);
    });
  });

  describe('formatName_', function() {
    it('should format the table name to include the cluster name', function() {
      var tableName = Table.formatName_(INSTANCE.id, TABLE_ID);
      assert.strictEqual(tableName, TABLE_NAME);
    });

    it('should not re-format the table name', function() {
      var tableName = Table.formatName_(INSTANCE.id, TABLE_NAME);
      assert.strictEqual(tableName, TABLE_NAME);
    });
  });

  describe('createPrefixRange_', function() {
    it('should create a range from the prefix', function() {
      assert.deepEqual(Table.createPrefixRange_('start'), {
        start: 'start',
        end: {
          value: 'staru',
          inclusive: false
        }
      });

      assert.deepEqual(Table.createPrefixRange_('X\xff'), {
        start: 'X\xff',
        end: {
          value: 'Y',
          inclusive: false
        }
      });

      assert.deepEqual(Table.createPrefixRange_('xoo\xff'), {
        start: 'xoo\xff',
        end: {
          value: 'xop',
          inclusive: false
        }
      });

      assert.deepEqual(Table.createPrefixRange_('a\xffb'), {
        start: 'a\xffb',
        end: {
          value: 'a\xffc',
          inclusive: false
        }
      });

      assert.deepEqual(Table.createPrefixRange_('com.google.'), {
        start: 'com.google.',
        end: {
          value: 'com.google/',
          inclusive: false
        }
      });
    });

    it('should create an inclusive bound when the prefix is empty', function() {
      assert.deepEqual(Table.createPrefixRange_('\xff'), {
        start: '\xff',
        end: {
          value: '',
          inclusive: true
        }
      });

      assert.deepEqual(Table.createPrefixRange_(''), {
        start: '',
        end: {
          value: '',
          inclusive: true
        }
      });
    });
  });

  describe('createFamily', function() {
    var COLUMN_ID = 'my-column';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        table.createFamily();
      }, /A name is required to create a family\./);
    });

    it('should provide the proper request options', function(done) {
      table.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableTableAdmin',
          method: 'modifyColumnFamilies'
        });

        assert.strictEqual(reqOpts.name, TABLE_NAME);
        assert.deepEqual(reqOpts.modifications, [{
          id: COLUMN_ID,
          create: {}
        }]);

        done();
      };

      table.createFamily(COLUMN_ID, assert.ifError);
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
        var modification = reqOpts.modifications[0];

        assert.strictEqual(modification.create.gcRule, convertedRule);
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

  describe('createReadStream', function() {
    describe('options', function() {
      var pumpSpy;

      beforeEach(function() {
        pumpSpy = sinon.stub(pumpify, 'obj', function() {
          return through.obj();
        });
      });

      it('should provide the proper request options', function(done) {
        table.requestStream = function(grpcOpts, reqOpts) {
          assert.deepEqual(grpcOpts, {
            service: 'Bigtable',
            method: 'readRows'
          });

          assert.strictEqual(reqOpts.tableName, TABLE_NAME);
          assert.strictEqual(reqOpts.objectMode, true);
          done();
        };

        table.createReadStream();
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

        var formatSpy = FakeFilter.createRange = sinon.spy(function() {
          return fakeRange;
        });

        table.requestStream = function(g, reqOpts) {
          assert.deepEqual(reqOpts.rows.rowRanges[0], fakeRange);
          assert.strictEqual(formatSpy.callCount, 1);
          assert.deepEqual(formatSpy.getCall(0).args, [
            options.start,
            options.end,
            'Key'
          ]);
          done();
        };

        table.createReadStream(options);
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
          assert.deepEqual(reqOpts.rows.rowKeys, convertedKeys);
          assert.strictEqual(convertSpy.callCount, 2);
          assert.strictEqual(convertSpy.getCall(0).args[0], options.keys[0]);
          assert.strictEqual(convertSpy.getCall(1).args[0], options.keys[1]);
          done();
        };

        table.createReadStream(options);
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

        var formatSpy = FakeFilter.createRange = sinon.spy(function() {
          return fakeRanges[formatSpy.callCount - 1];
        });

        table.requestStream = function(g, reqOpts) {
          assert.deepEqual(reqOpts.rows.rowRanges, fakeRanges);
          assert.strictEqual(formatSpy.callCount, 2);
          assert.deepEqual(formatSpy.getCall(0).args, [
            options.ranges[0].start,
            options.ranges[0].end,
            'Key'
          ]);
          assert.deepEqual(formatSpy.getCall(1).args, [
            options.ranges[1].start,
            options.ranges[1].end,
            'Key'
          ]);
          done();
        };

        table.createReadStream(options);
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

        table.createReadStream(options);
      });

      it('should allow setting a row limit', function(done) {
        var options = {
          limit: 10
        };

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(reqOpts.rowsLimit, options.limit);
          done();
        };

        table.createReadStream(options);
      });

      it('should transform the prefix into a range', function(done) {
        var fakeRange = {};
        var fakePrefixRange = {
          start: 'a',
          end: 'b'
        };

        var fakePrefix = 'abc';

        var prefixSpy = Table.createPrefixRange_ = sinon.spy(function() {
          return fakePrefixRange;
        });

        var rangeSpy = FakeFilter.createRange = sinon.spy(function() {
          return fakeRange;
        });

        table.requestStream = function(g, reqOpts) {
          assert.strictEqual(prefixSpy.getCall(0).args[0], fakePrefix);
          assert.deepEqual(reqOpts.rows.rowRanges, [fakeRange]);

          assert.deepEqual(rangeSpy.getCall(0).args, [
            fakePrefixRange.start,
            fakePrefixRange.end,
            'Key'
          ]);

          done();
        };

        table.createReadStream({ prefix: fakePrefix });
      });
    });

    describe('success', function() {
      var fakeChunks = {
        chunks: [{
          rowKey: 'a',
        }, {
          commitRow: true
        }, {
          rowKey: 'b',
        }, {
          commitRow: true
        }]
      };

      var formattedRows = [
        { key: 'c', data: {} },
        { key: 'd', data: {} }
      ];

      beforeEach(function() {
        sinon.stub(table, 'row', function() {
          return {};
        });

        FakeRow.formatChunks_ = sinon.spy(function() {
          return formattedRows;
        });

        table.requestStream = function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            stream.push(fakeChunks);
            stream.push(null);
          });

          return stream;
        };
      });

      it('should pass the decode option', function(done) {
        var options = {
          decode: false
        };

        table.createReadStream(options)
          .on('error', done)
          .on('data', function() {})
          .on('end', function() {
            var formatArgs = FakeRow.formatChunks_.getCall(0).args[1];

            assert.strictEqual(formatArgs.decode, options.decode);
            done();
          });
      });

      it('should stream Row objects', function(done) {
        var rows = [];

        table.createReadStream()
          .on('error', done)
          .on('data', function(row) {
            rows.push(row);
          })
          .on('end', function() {
            var rowSpy = table.row;
            var formatSpy = FakeRow.formatChunks_;

            assert.strictEqual(rows.length, formattedRows.length);
            assert.strictEqual(rowSpy.callCount, formattedRows.length);

            assert.strictEqual(formatSpy.getCall(0).args[0], fakeChunks.chunks);

            assert.strictEqual(rowSpy.getCall(0).args[0], formattedRows[0].key);
            assert.strictEqual(rows[0].data, formattedRows[0].data);

            assert.strictEqual(rowSpy.getCall(1).args[0], formattedRows[1].key);
            assert.strictEqual(rows[1].data, formattedRows[1].data);

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
        table.createReadStream()
          .on('error', function(err) {
            assert.strictEqual(error, err);
            done();
          })
          .on('data', done);
      });
    });
  });

  describe('deleteRows', function() {
    it('should provide the proper request options', function(done) {
      table.request = function(grpcOpts, reqOpts, callback) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableTableAdmin',
          method: 'dropRowRange'
        });

        assert.strictEqual(reqOpts.name, TABLE_NAME);
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

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        table.family();
      }, /A family name must be provided\./);
    });

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

  describe('getMetadata', function() {
    var views = {
      unspecified: 0,
      name: 1,
      schema: 2,
      full: 4
    };
    beforeEach(function() {
      Table.VIEWS = views;
    });

    it('should provide the proper request options', function(done) {
      table.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableTableAdmin',
          method: 'getTable'
        });

        assert.strictEqual(reqOpts.name, table.id);
        assert.strictEqual(reqOpts.view, views.unspecified);
        done();
      };

      table.getMetadata(assert.ifError);
    });

    Object.keys(views).forEach(function(view) {
      it('should set the "' + view + '" view', function(done) {
        var options = {
          view: view
        };

        table.request = function(grpcOpts, reqOpts) {
          assert.strictEqual(reqOpts.view, views[view]);
          done();
        };

        table.getMetadata(options, assert.ifError);
      });
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      table.request = function(grpcOpts, reqOpts, callback) {
        callback(error, response);
      };

      table.getMetadata(function(err, metadata, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should update the metadata', function(done) {
      var response = {};

      table.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      table.getMetadata(function(err, metadata, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(apiResponse, response);
        assert.strictEqual(table.metadata, response);
        done();
      });
    });
  });

  describe('getRows', function() {
    describe('success', function() {
      var fakeRows = [
        { key: 'c', data: {} },
        { key: 'd', data: {} }
      ];

      beforeEach(function() {
        table.createReadStream = sinon.spy(function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            fakeRows.forEach(function(row) {
              stream.push(row);
            });

            stream.push(null);
          });

          return stream;
        });
      });

      it('should return the rows to the callback', function(done) {
        var options = {};

        table.getRows(options, function(err, rows) {
          assert.ifError(err);
          assert.deepEqual(rows, fakeRows);

          var spy = table.createReadStream.getCall(0);
          assert.strictEqual(spy.args[0], options);
          done();
        });
      });

      it('should optionally accept options', function(done) {
        table.getRows(function(err, rows) {
          assert.ifError(err);
          assert.deepEqual(rows, fakeRows);
          done();
        });
      });
    });

    describe('error', function() {
      var error = new Error('err');

      beforeEach(function() {
        table.createReadStream = sinon.spy(function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            stream.emit('error', error);
          });

          return stream;
        });
      });

      it('should return the error to the callback', function(done) {
        table.getRows(function(err) {
          assert.strictEqual(err, error);
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
    var entries = [{}, {}];
    var fakeEntries = [{}, {}];
    var parseSpy;

    beforeEach(function() {
      parseSpy = FakeMutation.parse = sinon.spy(function(value) {
        var entryIndex = entries.indexOf(value);
        return fakeEntries[entryIndex];
      });
    });

    it('should provide the proper request options', function(done) {
      var stream = through.obj();

      table.requestStream = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'Bigtable',
          method: 'mutateRows'
        });

        assert.strictEqual(reqOpts.tableName, TABLE_NAME);
        assert.deepEqual(reqOpts.entries, fakeEntries);

        assert.strictEqual(parseSpy.callCount, 2);
        assert.strictEqual(parseSpy.getCall(0).args[0], entries[0]);
        assert.strictEqual(parseSpy.getCall(1).args[0], entries[1]);

        setImmediate(done);

        return stream;
      };

      table.mutate(entries, assert.ifError);
    });

    describe('error', function() {
      describe('API errors', function() {
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

        it('should return the error to the callback', function(done) {
          table.mutate(entries, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('mutation errors', function() {
        var fakeStatuses = [{
          index: 0,
          status: {
            code: 1
          }
        }, {
          index: 1,
          status: {
            code: 1
          }
        }];

        var parsedStatuses = [{}, {}];

        beforeEach(function() {
          table.requestStream = function() {
            var stream = through.obj();

            stream.push({ entries: fakeStatuses });

            setImmediate(function() {
              stream.end();
            });

            return stream;
          };

          var statusCount = 0;
          FakeGrpcService.decorateStatus_ = function(status) {
            assert.strictEqual(status, fakeStatuses[statusCount].status);
            return parsedStatuses[statusCount++];
          };
        });

        it('should return a PartialFailureError', function(done) {
          table.mutate(entries, function(err) {
            assert.strictEqual(err.name, 'PartialFailureError');

            assert.deepEqual(err.errors, [
              extend({
                entry: entries[0]
              }, parsedStatuses[0]),

              extend({
                entry: entries[1]
              }, parsedStatuses[1])
            ]);

            done();
          });
        });
      });
    });

    describe('success', function() {
      var fakeStatuses = [
        {
          status: {
            code: 0
          }
        },
        {
          status: {
            code: 0
          }
        }
      ];

      beforeEach(function() {
        table.requestStream = function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            stream.end({ entries: fakeStatuses });
          });

          return stream;
        };
      });

      it('should execute callback', function(done) {
        table.mutate(entries, done);
      });
    });
  });

  describe('row', function() {
    var KEY = 'test-row';

    it('should throw if a key is not provided', function() {
      assert.throws(function() {
        table.row();
      }, /A row key must be provided\./);
    });

    it('should return a Row object', function() {
      var row = table.row(KEY);

      assert(row instanceof FakeRow);
      assert.strictEqual(row.calledWith_[0], table);
      assert.strictEqual(row.calledWith_[1], KEY);
    });
  });

  describe('sampleRowKeysStream', function() {
    it('should provide the proper request options', function(done) {
      table.requestStream = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'Bigtable',
          method: 'sampleRowKeys'
        });

        assert.strictEqual(reqOpts.tableName, TABLE_NAME);
        assert.strictEqual(reqOpts.objectMode, true);
        setImmediate(done);

        return new Stream({
          objectMode: true
        });
      };

      table.sampleRowKeysStream();
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

        table.sampleRowKeysStream()
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
        table.sampleRowKeysStream()
          .on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          })
          .on('data', done);
      });
    });
  });

  describe('sampleRowKeys', function() {
    describe('success', function() {
      var fakeKeys = [{
        key: 'a',
        offset: 10
      }, {
        key: 'b',
        offset: 20
      }];

      beforeEach(function() {
        table.sampleRowKeysStream = sinon.spy(function() {
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
        });
      });

      it('should return the keys to the callback', function(done) {
        table.sampleRowKeys(function(err, keys) {
          assert.ifError(err);
          assert.deepEqual(keys, fakeKeys);
          done();
        });
      });
    });

    describe('error', function() {
      var error = new Error('err');

      beforeEach(function() {
        table.sampleRowKeysStream = sinon.spy(function() {
          var stream = new Stream({
            objectMode: true
          });

          setImmediate(function() {
            stream.emit('error', error);
          });

          return stream;
        });
      });

      it('should return the error to the callback', function(done) {
        table.sampleRowKeys(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

});
