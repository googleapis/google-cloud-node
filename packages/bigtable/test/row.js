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
var sinon = require('sinon').sandbox.create();

var GrpcServiceObject = require('@google-cloud/common').GrpcServiceObject;
var Mutation = require('../src/mutation.js');

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcServiceObject, GrpcServiceObject);

var ROW_ID = 'my-row';
var CONVERTED_ROW_ID = 'my-converted-row';
var TABLE = {
  id: 'my-table'
};

var FakeMutation = {
  methods: Mutation.methods,
  convertToBytes: sinon.spy(function(value) {
    if (value === ROW_ID) {
      return CONVERTED_ROW_ID;
    }
    return value;
  }),
  convertFromBytes: sinon.spy(function(value) {
    return value;
  }),
  parseColumnName: sinon.spy(function(column) {
    return Mutation.parseColumnName(column);
  }),
  parse: sinon.spy(function(entry) {
    return {
      mutations: entry
    };
  })
};

var FakeFilter = {
  parse: sinon.spy(function(filter) {
    return filter;
  })
};

describe('Bigtable/Row', function() {
  var Row;
  var row;

  before(function() {
    Row = proxyquire('../src/row.js', {
      '@google-cloud/common': {
        GrpcServiceObject: FakeGrpcServiceObject
      },
      './mutation.js': FakeMutation,
      './filter.js': FakeFilter
    });
  });

  beforeEach(function() {
    row = new Row(TABLE, ROW_ID);
  });

  afterEach(function() {
    sinon.restore();

    Object.keys(FakeMutation).forEach(function(spy) {
      if (FakeMutation[spy].reset) {
        FakeMutation[spy].reset();
      }
    });
  });

  describe('instantiation', function() {
    it('should inherit from GrpcServiceObject', function() {
      var config = row.calledWith_[0];

      assert(row instanceof FakeGrpcServiceObject);
      assert.strictEqual(config.parent, TABLE);
      assert.deepEqual(config.methods, {
        exists: true
      });
      assert.strictEqual(config.id, ROW_ID);
    });

    it('should create an empty data object', function() {
      assert.deepEqual(row.data, {});
    });
  });

  describe('formatChunks_', function() {
    var formatFamiliesSpy;

    beforeEach(function() {
      formatFamiliesSpy = sinon.stub(Row, 'formatFamilies_');
    });

    it('should not include chunks without commitRow', function() {
      var chunks = [{
        rowConents: {}
      }];
      var fakeFamilies = [];

      formatFamiliesSpy.returns(fakeFamilies);

      var formatted = Row.formatChunks_(chunks);

      assert.strictEqual(formatted, fakeFamilies);
      assert.strictEqual(formatFamiliesSpy.callCount, 1);
      assert.deepEqual(formatFamiliesSpy.getCall(0).args[0], []);
    });

    it('should ignore any chunks previous to a resetRow', function() {
      var badData = {};
      var goodData = {};
      var fakeFamilies = [goodData, {}];

      var chunks = [{
        rowContents: badData,
      }, {
        resetRow: true
      }, {
        rowContents: goodData
      }, {
        commitRow: true
      }];

      formatFamiliesSpy.returns(fakeFamilies);

      var formatted = Row.formatChunks_(chunks);

      assert.strictEqual(formatted, fakeFamilies);
      assert.strictEqual(formatted.indexOf(badData), -1);
      assert.strictEqual(formatFamiliesSpy.callCount, 1);
      assert.deepEqual(formatFamiliesSpy.getCall(0).args[0], [goodData]);
    });
  });

  describe('formatFamilies_', function() {
    var timestamp = Date.now();

    var families = [{
      name: 'test-family',
      columns: [{
        qualifier: 'test-column',
        cells: [{
          value: 'test-value',
          timestampMicros: timestamp,
          labels: []
        }]
      }]
    }];

    var formattedRowData = {
      'test-family': {
        'test-column': [{
          value: 'test-value',
          timestamp: timestamp,
          labels: []
        }]
      }
    };

    it('should format the families into a user-friendly format', function() {
      var formatted = Row.formatFamilies_(families);
      assert.deepEqual(formatted, formattedRowData);

      var convertStpy = FakeMutation.convertFromBytes;
      assert.strictEqual(convertStpy.callCount, 2);
      assert.strictEqual(convertStpy.getCall(0).args[0], 'test-column');
      assert.strictEqual(convertStpy.getCall(1).args[0], 'test-value');
    });
  });

  describe('create', function() {
    it('should provide the proper request options', function(done) {
      row.parent.mutate = function(entry) {
        assert.strictEqual(entry.key, row.id);
        assert.deepEqual(entry.data, {});
        assert.strictEqual(entry.method, Mutation.methods.INSERT);
        done();
      };

      row.create(assert.ifError);
    });

    it('should accept data to populate the row', function(done) {
      var data = {
        a: 'a',
        b: 'b'
      };

      row.parent.mutate = function(entry) {
        assert.strictEqual(entry.data, data);
        done();
      };

      row.create(data, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var err = new Error('err');
      var response = {};

      row.parent.mutate = function(entry, callback) {
        callback(err, response);
      };

      row.create(function(err_, row, apiResponse) {
        assert.strictEqual(err, err_);
        assert.strictEqual(row, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return the Row instance', function(done) {
      var response = {};

      row.parent.mutate = function(entry, callback) {
        callback(null, response);
      };

      row.create(function(err, row_, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(row, row_);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('createRules', function() {
    var rules = [{
      column: 'a:b',
      append: 'c',
      increment: 1
    }];

    it('should throw if a rule is not provided', function() {
      assert.throws(function() {
        row.createRules();
      }, /At least one rule must be provided\./);
    });

    it('should read/modify/write rules', function(done) {
      row.request = function(grpcOpts, reqOpts, callback) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableService',
          method: 'readModifyWriteRow'
        });

        assert.strictEqual(reqOpts.tableName, TABLE.id);
        assert.strictEqual(reqOpts.rowKey, CONVERTED_ROW_ID);

        assert.deepEqual(reqOpts.rules, [{
          familyName: 'a',
          columnQualifier: 'b',
          appendValue: 'c',
          incrementAmount: 1
        }]);

        var spy = FakeMutation.convertToBytes;

        assert.strictEqual(spy.getCall(0).args[0], 'b');
        assert.strictEqual(spy.getCall(1).args[0], 'c');
        assert.strictEqual(spy.getCall(2).args[0], ROW_ID);
        callback();
      };

      row.createRules(rules, done);
    });

    it('should return an error to the callback', function(done) {
      var err = new Error('err');
      var response = {};

      row.request = function(g, r, callback) {
        callback(err, response);
      };

      row.createRules(rules, function(err_, apiResponse) {
        assert.strictEqual(err, err_);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('filter', function() {
    var mutations = [{
      method: 'insert',
      data: {
        a: 'a'
      }
    }];

    var fakeMutations = {
      mutations: [{
        a: 'b'
      }]
    };

    beforeEach(function() {
      FakeMutation.parse.reset();
      FakeFilter.parse.reset();
    });

    it('should provide the proper request options', function(done) {
      var filter = {
        column: 'a'
      };
      var fakeParsedFilter = {
        column: 'b'
      };

      FakeFilter.parse = sinon.spy(function() {
        return fakeParsedFilter;
      });

      FakeMutation.parse = sinon.spy(function() {
        return fakeMutations;
      });

      row.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableService',
          method: 'checkAndMutateRow'
        });

        assert.strictEqual(reqOpts.tableName, TABLE.id);
        assert.strictEqual(reqOpts.rowKey, CONVERTED_ROW_ID);
        assert.deepEqual(reqOpts.predicateFilter, fakeParsedFilter);
        assert.deepEqual(reqOpts.trueMutations, fakeMutations.mutations);
        assert.deepEqual(reqOpts.falseMutations, fakeMutations.mutations);

        assert.strictEqual(FakeMutation.parse.callCount, 2);
        assert.strictEqual(FakeMutation.parse.getCall(0).args[0], mutations[0]);
        assert.strictEqual(FakeMutation.parse.getCall(1).args[0], mutations[0]);

        assert.strictEqual(FakeFilter.parse.callCount, 1);
        assert(FakeFilter.parse.calledWithExactly(filter));
        done();
      };

      row.filter(filter, mutations, mutations, assert.ifError);
    });

    it('should optionally accept onNoMatch mutations', function(done) {
      row.request = function(g, reqOpts) {
        assert.deepEqual(reqOpts.falseMutations, []);
        assert.strictEqual(FakeMutation.parse.callCount, 1);
        assert(FakeMutation.parse.calledWithExactly(mutations[0]));
        done();
      };

      row.filter({}, mutations, assert.ifError);
    });

    it('should optionally accept onMatch mutations', function(done) {
      row.request = function(g, reqOpts) {
        assert.deepEqual(reqOpts.trueMutations, []);
        assert.strictEqual(FakeMutation.parse.callCount, 1);
        assert(FakeMutation.parse.calledWithExactly(mutations[0]));
        done();
      };

      row.filter({}, null, mutations, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var err = new Error('err');
      var response = {};

      row.request = function(g, r, callback) {
        callback(err, response);
      };

      row.filter({}, mutations, function(err_, matched, apiResponse) {
        assert.strictEqual(err, err_);
        assert.strictEqual(matched, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return a matched flag', function(done) {
      var response = {
        predicateMatched: true
      };

      row.request = function(g, r, callback) {
        callback(null, response);
      };

      row.filter({}, mutations, function(err, matched, apiResponse) {
        assert.ifError(err);
        assert(matched);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should provide the proper request options', function(done) {
      row.parent.mutate = function(mutation, callback) {
        assert.strictEqual(mutation.key, ROW_ID);
        assert.strictEqual(mutation.method, FakeMutation.methods.DELETE);
        callback();
      };

      row.delete(done);
    });
  });

  describe('deleteCells', function() {
    var columns = [
      'a:b',
      'c'
    ];

    it('should provide the proper request options', function(done) {
      row.parent.mutate = function(mutation, callback) {
        assert.strictEqual(mutation.key, ROW_ID);
        assert.strictEqual(mutation.data, columns);
        assert.strictEqual(mutation.method, FakeMutation.methods.DELETE);
        callback();
      };

      row.deleteCells(columns, done);
    });
  });

  describe('get', function() {
    it('should provide the proper request options', function(done) {
      row.parent.getRows = function(reqOpts) {
        assert.strictEqual(reqOpts.key, ROW_ID);
        assert.strictEqual(reqOpts.filter, undefined);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 0);
        done();
      };

      row.get(assert.ifError);
    });

    it('should create a filter for a single column', function(done) {
      var keys = [
        'a:b'
      ];

      var expectedFilter = [{
        family: 'a'
      }, {
        column: 'b'
      }];

      row.parent.getRows = function(reqOpts) {
        assert.deepEqual(reqOpts.filter, expectedFilter);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 1);
        assert(FakeMutation.parseColumnName.calledWith(keys[0]));
        done();
      };

      row.get(keys, assert.ifError);
    });

    it('should create a filter for multiple columns', function(done) {
      var keys = [
        'a:b',
        'c:d'
      ];

      var expectedFilter = [{
        interleave: [
          [{
            family: 'a'
          }, {
            column: 'b'
          }], [{
            family: 'c'
          }, {
            column: 'd'
          }]
        ]
      }];

      row.parent.getRows = function(reqOpts) {
        assert.deepEqual(reqOpts.filter, expectedFilter);

        var spy = FakeMutation.parseColumnName;

        assert.strictEqual(spy.callCount, 2);
        assert.strictEqual(spy.getCall(0).args[0], keys[0]);
        assert.strictEqual(spy.getCall(1).args[0], keys[1]);
        done();
      };

      row.get(keys, assert.ifError);
    });

    it('should respect supplying only family names', function(done) {
      var keys = [
        'a'
      ];

      var expectedFilter = [{
        family: 'a'
      }];

      row.parent.getRows = function(reqOpts) {
        assert.deepEqual(reqOpts.filter, expectedFilter);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 1);
        assert(FakeMutation.parseColumnName.calledWith(keys[0]));
        done();
      };

      row.get(keys, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      row.parent.getRows = function(r, callback) {
        callback(error, null, response);
      };

      row.get(function(err, row_, apiResponse) {
        assert.strictEqual(error, err);
        assert.strictEqual(row_, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return a custom error if the row is not found', function(done) {
      var response = {};

      row.parent.getRows = function(r, callback) {
        callback(null, [], response);
      };

      row.get(function(err, row_, apiResponse) {
        assert(err instanceof Row.RowError);
        assert.strictEqual(err.message, 'Unknown row: ' + row.id + '.');
        assert.deepEqual(row_, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should update the row data upon success', function(done) {
      var response = {};
      var fakeRow = new Row(TABLE, ROW_ID);

      fakeRow.data = {
        a: 'a',
        b: 'b'
      };

      row.parent.getRows = function(r, callback) {
        callback(null, [fakeRow], response);
      };

      row.get(function(err, row_, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(row_, row);
        assert.deepEqual(row.data, fakeRow.data);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return only data for the keys provided', function(done) {
      var response = {};
      var fakeRow = new Row(TABLE, ROW_ID);

      fakeRow.data = {
        a: 'a',
        b: 'b'
      };

      var keys = ['a', 'b'];

      row.data = {
        c: 'c'
      };

      row.parent.getRows = function(r, callback) {
        callback(null, [fakeRow], response);
      };

      row.get(keys, function(err, data, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(Object.keys(data), keys);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('getMetadata', function() {
    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      row.get = function(callback) {
        callback(error, null, response);
      };

      row.getMetadata(function(err, metadata, apiResponse) {
        assert.strictEqual(error, err);
        assert.strictEqual(metadata, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return metadata to the callback', function(done) {
      var response = {};
      var metadata = {
        a: 'a',
        b: 'b'
      };

      row.get = function(callback) {
        row.metadata = metadata;
        callback(null, row, response);
      };

      row.getMetadata(function(err, metadata, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(metadata, metadata);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('increment', function() {
    var COLUMN_NAME = 'a:b';
    var formatFamiliesSpy;

    beforeEach(function() {
      formatFamiliesSpy = sinon.stub(Row, 'formatFamilies_').returns({
        a: {
          b: [{
            value: 10
          }]
        }
      });
    });

    it('should provide the proper request options', function(done) {
      row.createRules = function(reqOpts) {
        assert.strictEqual(reqOpts.column, COLUMN_NAME);
        assert.strictEqual(reqOpts.increment, 1);
        done();
      };

      row.increment(COLUMN_NAME, assert.ifError);
    });

    it('should optionally accept an increment amount', function(done) {
      var increment = 10;

      row.createRules = function(reqOpts) {
        assert.strictEqual(reqOpts.column, COLUMN_NAME);
        assert.strictEqual(reqOpts.increment, increment);
        done();
      };

      row.increment(COLUMN_NAME, increment, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      row.createRules = function(r, callback) {
        callback(error, response);
      };

      row.increment(COLUMN_NAME, function(err, value, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(value, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should pass back the updated value to the callback', function(done) {
      var fakeValue = 10;
      var response = {
        key: 'fakeKey',
        families: [{
          name: 'a',
          columns: [{
            qualifier: 'b',
            cells: [{
              timestampMicros: Date.now(),
              value: fakeValue,
              labels: []
            }]
          }]
        }]
      };

      row.createRules = function(r, callback) {
        callback(null, response);
      };

      row.increment(COLUMN_NAME, function(err, value, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(value, fakeValue);
        assert.strictEqual(apiResponse, response);
        assert.strictEqual(formatFamiliesSpy.callCount, 1);
        assert(formatFamiliesSpy.calledWithExactly(response.families));
        done();
      });
    });
  });

  describe('save', function() {
    it('should insert a key value pair', function(done) {
      var key = 'a:b';
      var value = 'c';

      var expectedData = {
        d: {
          e: 'c'
        }
      };

      var parseSpy = Mutation.parseColumnName = sinon.spy(function() {
        return {
          family: 'd',
          qualifier: 'e'
        };
      });

      row.parent.mutate = function(entry, callback) {
        assert.strictEqual(entry.key, ROW_ID);
        assert.deepEqual(entry.data, expectedData);
        assert.strictEqual(entry.method, FakeMutation.methods.INSERT);
        assert(parseSpy.calledWithExactly(key));
        callback();
      };

      row.save(key, value, done);
    });

    it('should insert an object', function(done) {
      var data = {
        a: {
          b: 'c'
        }
      };

      row.parent.mutate = function(entry) {
        assert.strictEqual(entry.data, data);
        done();
      };

      row.save(data, assert.ifError);
    });
  });

  describe('RowError', function() {
    it('should supply the correct message', function() {
      var error = new Row.RowError('test');
      assert.strictEqual(error.message, 'Unknown row: test.');
    });
  });

});
