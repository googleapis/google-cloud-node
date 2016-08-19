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
var proxyquire = require('proxyquire');
var sinon = require('sinon').sandbox.create();

var FakeMutation = {
  convertToBytes: sinon.spy(function(value) {
    return value;
  }),
  createTimeRange: sinon.stub()
};

describe('Bigtable/Filter', function() {
  var Filter;
  var filter;

  before(function() {
    Filter = proxyquire('../src/filter', {
      './mutation.js': FakeMutation
    });
  });

  beforeEach(function() {
    filter = new Filter();
  });

  afterEach(function() {
    sinon.restore();
    FakeMutation.convertToBytes.reset();
  });

  describe('instantiation', function() {
    it('should create an empty array of filters', function() {
      assert.deepEqual(filter.filters_, []);
    });
  });

  describe('convertToRegExpString', function() {
    it('should convert a RegExp to a string', function() {
      var str = Filter.convertToRegExpString(/\d+/);

      assert.strictEqual(str, '\\d+');
    });

    it('should convert an Array of strings to a single string', function() {
      var things = ['a', 'b', 'c'];
      var str = Filter.convertToRegExpString(things);

      assert.strictEqual(str, '(a|b|c)');
    });

    it('should not do anything to a string', function() {
      var str1 = 'hello';
      var str2 = Filter.convertToRegExpString(str1);

      assert.strictEqual(str1, str2);
    });

    it('should convert a number to a string', function() {
      var str = Filter.convertToRegExpString(1);

      assert.strictEqual(str, '1');
    });

    it('should throw an error for unknown types', function() {
      var errorReg = /Can\'t convert to RegExp String from unknown type\./;

      assert.throws(function() {
        Filter.convertToRegExpString(true);
      }, errorReg);
    });
  });

  describe('createRange', function() {
    it('should create a range object', function() {
      var start = 'a';
      var end = 'b';
      var key = 'Key';

      var range = Filter.createRange(start, end, key);

      assert.deepEqual(range, {
        startKeyClosed: start,
        endKeyClosed: end
      });
    });

    it('should only create start bound', function() {
      var start = 'a';
      var key = 'Key';

      var range = Filter.createRange(start, null, key);

      assert(FakeMutation.convertToBytes.calledWithExactly(start));
      assert.deepEqual(range, {
        startKeyClosed: start
      });
    });

    it('should only create an end bound', function() {
      var end = 'b';
      var key = 'Key';

      var range = Filter.createRange(null, end, key);

      assert(FakeMutation.convertToBytes.calledWithExactly(end));
      assert.deepEqual(range, {
        endKeyClosed: end
      });
    });

    it('should optionally accept inclusive flags', function() {
      var start = {
        value: 'a',
        inclusive: false
      };

      var end = {
        value: 'b',
        inclusive: false
      };

      var key = 'Key';

      var range = Filter.createRange(start, end, key);

      assert.deepEqual(range, {
        startKeyOpen: start.value,
        endKeyOpen: end.value
      });
    });
  });

  describe('parse', function() {
    it('should call each individual filter method', function() {
      sinon.spy(Filter.prototype, 'row');
      sinon.spy(Filter.prototype, 'value');

      var fakeFilter = [{
        row: 'a'
      }, {
        value: 'b'
      }];

      Filter.parse(fakeFilter);

      assert.strictEqual(Filter.prototype.row.callCount, 1);
      assert(Filter.prototype.row.calledWithExactly('a'));

      assert.strictEqual(Filter.prototype.value.callCount, 1);
      assert(Filter.prototype.value.calledWithExactly('b'));
    });

    it('should throw an error for unknown filters', function() {
      var fakeFilter = [{
        wat: 'a'
      }];

      assert.throws(
        Filter.parse.bind(null, fakeFilter),
        Filter.FilterError
      );
    });

    it('should return the filter in JSON form', function() {
      var fakeProto = { a: 'a' };
      var fakeFilter = [{
        column: 'a'
      }];

      sinon.stub(Filter.prototype, 'toProto').returns(fakeProto);

      var parsedFilter = Filter.parse(fakeFilter);

      assert.strictEqual(parsedFilter, fakeProto);
      assert.strictEqual(Filter.prototype.toProto.callCount, 1);
    });
  });

  describe('all', function() {
    it('should create a pass all filter when set to true', function(done) {
      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'passAllFilter');
        assert.strictEqual(value, true);
        done();
      };

      filter.all(true);
    });

    it('should create a block all filter when set to false', function(done) {
      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'blockAllFilter');
        assert.strictEqual(value, true);
        done();
      };

      filter.all(false);
    });
  });

  describe('column', function() {
    it('should set the column qualifier regex filter', function(done) {
      var column = {
        name: 'fake-column'
      };

      var spy = sinon.stub(Filter, 'convertToRegExpString', function(value) {
        return value;
      });

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'columnQualifierRegexFilter');
        assert.strictEqual(value, column.name);
        assert(spy.calledWithExactly(column.name));
        assert(FakeMutation.convertToBytes.calledWithExactly(column.name));
        done();
      };

      filter.column(column);
    });

    it('should accept the short-hand version of column', function(done) {
      var column = 'fake-column';

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'columnQualifierRegexFilter');
        assert.strictEqual(value, column);
        done();
      };

      filter.column(column);
    });

    it('should accept the cells per column limit filter', function(done) {
      var column = {
        cellLimit: 10
      };

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'cellsPerColumnLimitFilter');
        assert.strictEqual(value, column.cellLimit);
        done();
      };

      filter.column(column);
    });

    it('should accept the column range filter', function(done) {
      var fakeRange = {
        a: 'a',
        b: 'b'
      };
      var column = {
        start: 'a',
        end: 'b'
      };

      var spy = sinon.stub(Filter, 'createRange').returns(fakeRange);

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'columnRangeFilter');
        assert.strictEqual(value, fakeRange);
        assert(spy.calledWithExactly(column.start, column.end, 'Qualifier'));
        done();
      };

      filter.column(column);
    });
  });

  describe('condition', function() {
    it('should create a condition filter', function(done) {
      var condition = {
        test: { a: 'a' },
        pass: { b: 'b' },
        fail: { c: 'c' }
      };

      var spy = sinon.stub(Filter, 'parse', function(value) {
        return value;
      });

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'condition');
        assert.deepEqual(value, {
          predicateFilter: condition.test,
          trueFilter: condition.pass,
          falseFilter: condition.fail
        });

        assert.strictEqual(spy.getCall(0).args[0], condition.test);
        assert.strictEqual(spy.getCall(1).args[0], condition.pass);
        assert.strictEqual(spy.getCall(2).args[0], condition.fail);
        done();
      };

      filter.condition(condition);
    });
  });

  describe('family', function() {
    it('should create a family name regex filter', function(done) {
      var familyName = 'fake-family';

      var spy = sinon.stub(Filter, 'convertToRegExpString', function(value) {
        return value;
      });

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'familyNameRegexFilter');
        assert.strictEqual(value, familyName);
        assert(spy.calledWithExactly(familyName));
        done();
      };

      filter.family(familyName);
    });
  });

  describe('interleave', function() {
    it('should create an interleave filter', function(done) {
      var fakeFilters = [{}, {}, {}];

      var spy = sinon.stub(Filter, 'parse', function(value) {
        return value;
      });

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'interleave');
        assert.strictEqual(value.filters[0], fakeFilters[0]);
        assert.strictEqual(value.filters[1], fakeFilters[1]);
        assert.strictEqual(value.filters[2], fakeFilters[2]);
        assert.strictEqual(spy.getCall(0).args[0], fakeFilters[0]);
        assert.strictEqual(spy.getCall(1).args[0], fakeFilters[1]);
        assert.strictEqual(spy.getCall(2).args[0], fakeFilters[2]);
        done();
      };

      filter.interleave(fakeFilters);
    });
  });

  describe('label', function() {
    it('should apply the label transformer', function(done) {
      var label = 'label';

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'applyLabelTransformer');
        assert.strictEqual(value, label);
        done();
      };

      filter.label(label);
    });
  });

  describe('row', function() {
    it('should apply the row key regex filter', function(done) {
      var row = {
        key: 'gwashinton'
      };
      var convertedKey = 'abcd';

      var spy = sinon.stub(Filter, 'convertToRegExpString', function() {
        return convertedKey;
      });

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'rowKeyRegexFilter');
        assert.strictEqual(value, convertedKey);
        assert(spy.calledWithExactly(row.key));
        assert(FakeMutation.convertToBytes.calledWithExactly(convertedKey));
        done();
      };

      filter.row(row);
    });

    it('should accept the short-hand version of row key', function(done) {
      var rowKey = 'gwashington';

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'rowKeyRegexFilter');
        assert.strictEqual(value, rowKey);
        done();
      };

      filter.row(rowKey);
    });

    it('should set the row sample filter', function(done) {
      var row = {
        sample: 10
      };

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'rowSampleFilter');
        assert.strictEqual(value, row.sample);
        done();
      };

      filter.row(row);
    });

    it('should set the cells per row offset filter', function(done) {
      var row = {
        cellOffset: 10
      };

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'cellsPerRowOffsetFilter');
        assert.strictEqual(value, row.cellOffset);
        done();
      };

      filter.row(row);
    });

    it('should set the cells per row limit filter', function(done) {
      var row = {
        cellLimit: 10
      };

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'cellsPerRowLimitFilter');
        assert.strictEqual(value, row.cellLimit);
        done();
      };

      filter.row(row);
    });
  });

  describe('set', function() {
    it('should create a filter object', function() {
      var key = 'notARealFilter';
      var value = { a: 'b' };

      filter.set(key, value);

      assert.strictEqual(filter.filters_[0][key], value);
    });
  });

  describe('sink', function() {
    it('should set the sink filter', function(done) {
      var sink = true;

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'sink');
        assert.strictEqual(value, sink);
        done();
      };

      filter.sink(sink);
    });
  });

  describe('time', function() {
    it('should set the timestamp range filter', function(done) {
      var fakeTimeRange = {
        start: 10,
        end: 10
      };

      var spy = FakeMutation.createTimeRange.returns(fakeTimeRange);

      filter.set = function(filterName, value) {
        assert.strictEqual(filterName, 'timestampRangeFilter');
        assert.strictEqual(value, fakeTimeRange);
        assert(spy.calledWithExactly(fakeTimeRange.start, fakeTimeRange.end));
        done();
      };

      filter.time(fakeTimeRange);
    });
  });

  describe('toProto', function() {
    it('should return null when no filters are present', function() {
      var filter = new Filter();
      var filterProto = filter.toProto();

      assert.strictEqual(filterProto, null);
    });

    it('should return a plain filter if there is only 1', function() {
      filter.filters_ = [{}];

      var filterProto = filter.toProto();

      assert.strictEqual(filterProto, filter.filters_[0]);
    });

    it('should create a chain filter if there are multiple', function() {
      filter.filters_ = [{}, {}];

      var filterProto = filter.toProto();

      assert.strictEqual(filterProto.chain.filters, filter.filters_);
    });
  });

  describe('value', function() {
    it('should set the value regex filter', function(done) {
      var value = {
        value: 'fake-value'
      };
      var fakeRegExValue = 'abcd';
      var fakeConvertedValue = 'dcba';

      var regSpy = sinon.stub(Filter, 'convertToRegExpString', function() {
        return fakeRegExValue;
      });

      var bytesSpy = FakeMutation.convertToBytes = sinon.spy(function() {
        return fakeConvertedValue;
      });

      filter.set = function(filterName, val) {
        assert.strictEqual(filterName, 'valueRegexFilter');
        assert.strictEqual(fakeConvertedValue, val);
        assert(regSpy.calledWithExactly(value.value));
        assert(bytesSpy.calledWithExactly(fakeRegExValue));
        done();
      };

      filter.value(value);
    });

    it('should accept the short-hand version of value', function(done) {
      var value = 'fake-value';

      var fakeRegExValue = 'abcd';
      var fakeConvertedValue = 'dcba';

      var regSpy = sinon.stub(Filter, 'convertToRegExpString', function() {
        return fakeRegExValue;
      });

      var bytesSpy = FakeMutation.convertToBytes = sinon.spy(function() {
        return fakeConvertedValue;
      });

      filter.set = function(filterName, val) {
        assert.strictEqual(filterName, 'valueRegexFilter');
        assert.strictEqual(fakeConvertedValue, val);
        assert(regSpy.calledWithExactly(value));
        assert(bytesSpy.calledWithExactly(fakeRegExValue));
        done();
      };

      filter.value(value);
    });

    it('should accept the value range filter', function(done) {
      var fakeRange = {
        a: 'a',
        b: 'b'
      };
      var value = {
        start: 'a',
        end: 'b'
      };

      var spy = sinon.stub(Filter, 'createRange', function() {
        return fakeRange;
      });

      filter.set = function(filterName, val) {
        assert.strictEqual(filterName, 'valueRangeFilter');
        assert.strictEqual(val, fakeRange);
        assert(spy.calledWithExactly(value.start, value.end, 'Value'));
        done();
      };

      filter.value(value);
    });

    it('should apply the strip label transformer', function(done) {
      var value = {
        strip: true
      };

      filter.set = function(filterName, val) {
        assert.strictEqual(filterName, 'stripValueTransformer');
        assert.strictEqual(val, value.strip);
        done();
      };

      filter.value(value);
    });
  });

  describe('FilterError', function() {
    it('should set the correct message', function() {
      var err = new Filter.FilterError('test');

      assert.strictEqual(err.message, 'Unknown filter: test.');
    });
  });

});
