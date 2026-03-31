// Copyright 2016 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {afterEach, before, beforeEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as fr from '../src/filter';
import {Row} from '../src/row';

const sandbox = sinon.createSandbox();

const FakeMutation = {
  convertToBytes: sandbox.spy(value => {
    return value;
  }),
  createTimeRange: sandbox.stub(),
};

describe('Bigtable/Filter', () => {
  let Filter: typeof fr.Filter;
  let FilterError: typeof fr.FilterError;
  let filter: fr.Filter;

  before(() => {
    const Fake = proxyquire('../src/filter', {
      './mutation.js': {Mutation: FakeMutation},
    });
    Filter = Fake.Filter;
    FilterError = Fake.FilterError;
  });

  beforeEach(() => {
    filter = new Filter();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should create an empty array of filters', () => {
      assert.deepStrictEqual(filter.filters_, []);
    });
  });

  describe('convertToRegExpString', () => {
    it('should convert a RegExp to a string', () => {
      const str = Filter.convertToRegExpString(/\d+/);
      assert.strictEqual(str, '\\d+');
    });

    it('should convert an Array of strings to a single string', () => {
      const things = ['a', 'b', 'c'];
      const str = Filter.convertToRegExpString(things);
      assert.strictEqual(str, '(a|b|c)');
    });

    it('should convert an Array of buffers to a single string', () => {
      const faces = [Buffer.from('.|.'), Buffer.from('=|=')];
      const str = Filter.convertToRegExpString(faces);
      assert.strictEqual(str, '(\\.\\|\\.|=\\|=)');
    });

    it('should not do anything to a string', () => {
      const str1 = 'hello';
      const str2 = Filter.convertToRegExpString(str1);
      assert.strictEqual(str1, str2);
    });

    it('should convert a number to a string', () => {
      const str = Filter.convertToRegExpString(1);
      assert.strictEqual(str, '1');
    });

    it('should not do anything to a buffer', () => {
      const str1 = 'hello';
      const buffer = Buffer.from(str1);
      const str2 = Filter.convertToRegExpString(buffer);
      assert.deepStrictEqual(buffer, str2);
    });

    it('should use a binary encoding on a non utf8 buffer', () => {
      const str1 = 'æ';
      const buffer = Buffer.from('æ', 'binary');
      const str2 = Filter.convertToRegExpString(buffer).toString('binary');
      assert.strictEqual(str1, str2);
    });

    it('should throw an error for unknown types', () => {
      const errorReg = /Can't convert to RegExp String from unknown type\./;
      assert.throws(() => {
        Filter.convertToRegExpString(true as {} as string);
      }, errorReg);
    });
  });

  describe('createRange', () => {
    it('should create a range object', () => {
      const start = 'a' as fr.BoundData;
      const end = 'b' as fr.BoundData;
      const key = 'Key';
      const range = Filter.createRange(start, end, key);
      assert.deepStrictEqual(range, {
        startKeyClosed: start,
        endKeyClosed: end,
      });
    });

    it('should only create start bound', () => {
      const start = 'a' as fr.BoundData;
      const key = 'Key';
      const range = Filter.createRange(start, null, key);
      assert(FakeMutation.convertToBytes.calledWithExactly(start));
      assert.deepStrictEqual(range, {
        startKeyClosed: start,
      });
    });

    it('should only create an end bound', () => {
      const end = 'b' as fr.BoundData;
      const key = 'Key';
      const range = Filter.createRange(null, end, key);
      assert(FakeMutation.convertToBytes.calledWithExactly(end));
      assert.deepStrictEqual(range, {
        endKeyClosed: end,
      });
    });

    it('should optionally accept inclusive flags', () => {
      const start = {
        value: 'a',
        inclusive: false,
      };

      const end = {
        value: 'b',
        inclusive: false,
      };

      const key = 'Key';

      const range = Filter.createRange(start, end, key);

      assert.deepStrictEqual(range, {
        startKeyOpen: start.value,
        endKeyOpen: end.value,
      });
    });
  });

  describe('parse', () => {
    it('should call each individual filter method', () => {
      sandbox.spy(Filter.prototype, 'row');
      sandbox.spy(Filter.prototype, 'value');
      const fakeFilter = [
        {
          row: 'a',
        },
        {
          value: 'b',
        },
      ];
      Filter.parse(fakeFilter);
      assert.strictEqual((Filter.prototype.row as sinon.SinonSpy).callCount, 1);
      assert((Filter.prototype.row as sinon.SinonSpy).calledWithExactly('a'));
      assert.strictEqual(
        (Filter.prototype.value as sinon.SinonSpy).callCount,
        1,
      );
      assert((Filter.prototype.value as sinon.SinonSpy).calledWithExactly('b'));
    });

    it('should throw an error for unknown filters', () => {
      const fakeFilter = [
        {
          wat: 'a',
        },
      ];

      assert.throws(Filter.parse.bind(null, fakeFilter), FilterError);
    });

    it('should return the filter in JSON form', () => {
      const fakeProto = {a: 'a'};
      const fakeFilter = [
        {
          column: 'a',
        },
      ];
      const stub = sandbox.stub(Filter.prototype, 'toProto').returns(fakeProto);
      const parsedFilter = Filter.parse(fakeFilter);
      assert.strictEqual(parsedFilter, fakeProto);
      assert.strictEqual(
        (Filter.prototype.toProto as sinon.SinonSpy).callCount,
        1,
      );
      stub.restore();
    });
  });

  describe('all', () => {
    it('should create a pass all filter when set to true', done => {
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'passAllFilter');
        assert.strictEqual(value, true);
        done();
      };

      filter.all(true);
    });

    it('should create a block all filter when set to false', done => {
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'blockAllFilter');
        assert.strictEqual(value, true);
        done();
      };

      filter.all(false);
    });
  });

  describe('column', () => {
    it('should set the column qualifier regex filter', done => {
      const column = {
        name: 'fake-column',
      };

      const spy = sandbox.stub(Filter, 'convertToRegExpString').returnsArg(0);

      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'columnQualifierRegexFilter');
        assert.strictEqual(value, column.name);
        assert(spy.calledWithExactly(column.name));
        assert(FakeMutation.convertToBytes.calledWithExactly(column.name));
        spy.restore();
        done();
      };

      filter.column(column);
    });

    it('should handle a binary encoded buffer regex filter', done => {
      const column = {
        name: Buffer.from('æ', 'binary'),
      };

      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'columnQualifierRegexFilter');
        assert.deepStrictEqual(value, column.name);
        assert(FakeMutation.convertToBytes.calledWithExactly(column.name));
        done();
      };

      filter.column(column);
    });

    it('should accept the short-hand version of column', done => {
      const column = 'fake-column';

      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'columnQualifierRegexFilter');
        assert.strictEqual(value, column);
        done();
      };

      filter.column(column);
    });

    it('should accept the cells per column limit filter', done => {
      const column = {
        cellLimit: 10,
      };

      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'cellsPerColumnLimitFilter');
        assert.strictEqual(value, column.cellLimit);
        done();
      };

      filter.column(column);
    });

    it('should accept the column range filter', done => {
      const fakeRange = {
        a: 'a',
        b: 'b',
      };
      const column = {
        start: 'a' as fr.BoundData,
        end: 'b' as fr.BoundData,
      };
      const spy = sandbox.stub(Filter, 'createRange').returns(fakeRange);
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'columnRangeFilter');
        assert.strictEqual(value, fakeRange);
        assert(spy.calledWithExactly(column.start, column.end, 'Qualifier'));
        spy.restore();
        done();
      };
      filter.column(column);
    });
  });

  describe('condition', () => {
    it('should create a condition filter', done => {
      const condition = {
        test: {a: 'a'},
        pass: {b: 'b'},
        fail: {c: 'c'},
      };
      const spy = sandbox.stub(Filter, 'parse').returnsArg(0);
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'condition');
        assert.deepStrictEqual(value, {
          predicateFilter: condition.test,
          trueFilter: condition.pass,
          falseFilter: condition.fail,
        });
        assert.strictEqual(spy.getCall(0).args[0], condition.test);
        assert.strictEqual(spy.getCall(1).args[0], condition.pass);
        assert.strictEqual(spy.getCall(2).args[0], condition.fail);
        spy.restore();
        done();
      };
      filter.condition(condition);
    });
  });

  describe('family', () => {
    it('should create a family name regex filter', done => {
      const familyName = 'fake-family';
      const spy = sandbox.stub(Filter, 'convertToRegExpString').returnsArg(0);
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'familyNameRegexFilter');
        assert.strictEqual(value, familyName);
        assert(spy.calledWithExactly(familyName));
        spy.restore();
        done();
      };
      filter.family(familyName);
    });
  });

  describe('interleave', () => {
    it('should create an interleave filter', done => {
      const fakeFilters = [{}, {}, {}];

      const spy = sandbox.stub(Filter, 'parse').returnsArg(0);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filter.set = (filterName, value: any) => {
        assert.strictEqual(filterName, 'interleave');
        assert.strictEqual(value.filters[0], fakeFilters[0]);
        assert.strictEqual(value.filters[1], fakeFilters[1]);
        assert.strictEqual(value.filters[2], fakeFilters[2]);
        assert.strictEqual(spy.getCall(0).args[0], fakeFilters[0]);
        assert.strictEqual(spy.getCall(1).args[0], fakeFilters[1]);
        assert.strictEqual(spy.getCall(2).args[0], fakeFilters[2]);
        spy.restore();
        done();
      };

      filter.interleave(fakeFilters);
    });
  });

  describe('label', () => {
    it('should apply the label transformer', done => {
      const label = 'label';

      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'applyLabelTransformer');
        assert.strictEqual(value, label);
        done();
      };

      filter.label(label);
    });
  });

  describe('row', () => {
    it('should apply the row key regex filter', done => {
      const row = {
        key: 'gwashinton',
      };
      const convertedKey = 'abcd';

      const spy = sandbox
        .stub(Filter, 'convertToRegExpString')
        .returns(convertedKey);

      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'rowKeyRegexFilter');
        assert.strictEqual(value, convertedKey);
        assert(spy.calledWithExactly(row.key));
        assert(FakeMutation.convertToBytes.calledWithExactly(convertedKey));
        spy.restore();
        done();
      };

      filter.row(row);
    });

    it('should accept the short-hand version of row key', done => {
      const rowKey = 'gwashington';
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'rowKeyRegexFilter');
        assert.strictEqual(value, rowKey);
        done();
      };
      filter.row(rowKey);
    });

    it('should set the row sample filter', done => {
      const row = {
        sample: 10,
      };
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'rowSampleFilter');
        assert.strictEqual(value, row.sample);
        done();
      };
      filter.row(row as {} as Row);
    });

    it('should set the cells per row offset filter', done => {
      const row = {
        cellOffset: 10,
      };
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'cellsPerRowOffsetFilter');
        assert.strictEqual(value, row.cellOffset);
        done();
      };
      filter.row(row);
    });

    it('should set the cells per row limit filter', done => {
      const row = {
        cellLimit: 10,
      };
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'cellsPerRowLimitFilter');
        assert.strictEqual(value, row.cellLimit);
        done();
      };
      filter.row(row);
    });
  });

  describe('set', () => {
    it('should create a filter object', () => {
      const key = 'notARealFilter';
      const value = {a: 'b'};
      filter.set(key, value);
      assert.strictEqual(filter.filters_[0][key], value);
    });
  });

  describe('sink', () => {
    it('should set the sink filter', done => {
      const sink = true;
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'sink');
        assert.strictEqual(value, sink);
        done();
      };
      filter.sink(sink);
    });
  });

  describe('time', () => {
    it('should set the timestamp range filter', done => {
      const fakeTimeRange = {
        start: 10,
        end: 10,
      };
      const spy = FakeMutation.createTimeRange.returns(fakeTimeRange);
      filter.set = (filterName, value) => {
        assert.strictEqual(filterName, 'timestampRangeFilter');
        assert.strictEqual(value, fakeTimeRange);
        assert(spy.calledWithExactly(fakeTimeRange.start, fakeTimeRange.end));
        done();
      };
      filter.time(fakeTimeRange);
    });
  });

  describe('toProto', () => {
    it('should return null when no filters are present', () => {
      const filter = new Filter();
      const filterProto = filter.toProto();
      assert.strictEqual(filterProto, null);
    });

    it('should return a plain filter if there is only 1', () => {
      filter.filters_ = [{}];
      const filterProto = filter.toProto();
      assert.strictEqual(filterProto, filter.filters_[0]);
    });

    it('should create a chain filter if there are multiple', () => {
      filter.filters_ = [{}, {}];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filterProto = filter.toProto() as any;
      assert.strictEqual(filterProto!.chain.filters, filter.filters_);
    });
  });

  describe('value', () => {
    it('should set the value regex filter', done => {
      const value = {
        value: 'fake-value',
      };
      const fakeRegExValue = 'abcd';
      const fakeConvertedValue = 'dcba';

      const regSpy = sandbox
        .stub(Filter, 'convertToRegExpString')
        .returns(fakeRegExValue);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bytesSpy = ((FakeMutation as any).convertToBytes = sandbox.spy(
        () => {
          return fakeConvertedValue;
        },
      ));

      filter.set = (filterName, val) => {
        assert.strictEqual(filterName, 'valueRegexFilter');
        assert.strictEqual(fakeConvertedValue, val);
        assert(regSpy.calledWithExactly(value.value));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert((bytesSpy as any).calledWithExactly(fakeRegExValue));
        regSpy.restore();
        done();
      };

      filter.value(value);
    });

    it('should accept the short-hand version of value', done => {
      const value = 'fake-value';

      const fakeRegExValue = 'abcd';
      const fakeConvertedValue = 'dcba';

      const regSpy = sandbox
        .stub(Filter, 'convertToRegExpString')
        .returns(fakeRegExValue);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bytesSpy = ((FakeMutation.convertToBytes as any) = sandbox.spy(
        () => {
          return fakeConvertedValue;
        },
      ));

      filter.set = (filterName, val) => {
        assert.strictEqual(filterName, 'valueRegexFilter');
        assert.strictEqual(fakeConvertedValue, val);
        assert(regSpy.calledWithExactly(value));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert((bytesSpy as any).calledWithExactly(fakeRegExValue));
        regSpy.restore();
        done();
      };

      filter.value(value);
    });

    it('should accept the value range filter', done => {
      const fakeRange = {
        a: 'a',
        b: 'b',
      };
      const value = {
        start: 'a' as fr.BoundData,
        end: 'b' as fr.BoundData,
      };
      const spy = sandbox.stub(Filter, 'createRange').returns(fakeRange);
      filter.set = (filterName, val) => {
        assert.strictEqual(filterName, 'valueRangeFilter');
        assert.strictEqual(val, fakeRange);
        assert(spy.calledWithExactly(value.start, value.end, 'Value'));
        spy.restore();
        done();
      };
      filter.value(value);
    });

    it('should apply the strip label transformer', done => {
      const value = {
        strip: true,
      };
      filter.set = (filterName, val) => {
        assert.strictEqual(filterName, 'stripValueTransformer');
        assert.strictEqual(val, value.strip);
        done();
      };
      filter.value(value);
    });
  });

  describe('FilterError', () => {
    it('should set the correct message', () => {
      const err = new FilterError('test');
      assert.strictEqual(err.message, 'Unknown filter: test.');
    });

    it('should set the correct name', () => {
      const err = new FilterError('test');

      assert.strictEqual(err.name, 'FilterError');
    });
  });
});
