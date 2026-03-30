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

import * as promisify from '@google-cloud/promisify';
import * as assert from 'assert';
import {afterEach, beforeEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {Mutation} from '../src/mutation.js';
import * as rw from '../src/row';
import {
  Table,
  Entry,
  GetRowsOptions,
  GetRowsCallback,
  GetRowsResponse,
  MutateOptions,
  MutateCallback,
} from '../src/table.js';
import {Chunk} from '../src/chunktransformer.js';
import {CallOptions, ServiceError} from 'google-gax';
import {ClientSideMetricsConfigManager} from '../src/client-side-metrics/metrics-config-manager';
import {Bigtable} from '../src/';
import {getRowsInternal} from '../src/utils/getRowsInternal';
import {TabularApiSurface} from '../src/tabular-api-surface';
import * as pumpify from 'pumpify';
import {OperationMetricsCollector} from '../src/client-side-metrics/operation-metrics-collector';

const sandbox = sinon.createSandbox();

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll(klass: Function) {
    if (klass.name === 'Row') {
      promisified = true;
    }
  },
});

const ROW_ID = 'my-row';
const CONVERTED_ROW_ID = 'my-converted-row';
const TABLE = {
  bigtable: {},
  name: '/projects/project/instances/my-instance/tables/my-table',
} as Table;

const FakeMutation = {
  methods: Mutation.methods,
  convertToBytes: sandbox.spy(value => {
    if (value === ROW_ID) {
      return CONVERTED_ROW_ID;
    }
    return value;
  }),
  convertFromBytes: sandbox.spy(value => {
    return value;
  }),
  parseColumnName: sandbox.spy(column => {
    return Mutation.parseColumnName(column);
  }),
  parse: sandbox.spy(entry => {
    return {
      mutations: entry,
    };
  }),
};

const FakeFilter = {
  parse: sandbox.spy(filter => {
    return filter;
  }),
};

const FakeRowDataUtil = proxyquire('../src/row-data-utils.js', {
  './mutation.js': {Mutation: FakeMutation},
  './filter.js': {Filter: FakeFilter},
}).RowDataUtils;

describe('Bigtable/Row', () => {
  let Row: typeof rw.Row;
  let RowError: typeof rw.RowError;
  let row: rw.Row;

  function getFakeMutateRow(
    fn: (
      table: TabularApiSurface,
      metricsCollector: OperationMetricsCollector,
      entry: Entry | Entry[],
      gaxOptions_: MutateOptions | MutateCallback,
      callback: Function,
    ) => void | Promise<GetRowsResponse>,
  ) {
    const Fake = proxyquire('../src/row.js', {
      '../src/utils/mutateInternal': {
        mutateInternal: fn,
      },
    });
    return Fake;
  }

  function getFakeRow(
    getRowsInternal: (
      table: TabularApiSurface,
      singleRow: boolean,
      optionsOrCallback?: GetRowsOptions | GetRowsCallback,
      cb?: GetRowsCallback,
    ) => void | Promise<GetRowsResponse>,
  ) {
    const Fake = proxyquire('../src/row.js', {
      '@google-cloud/promisify': fakePromisify,
      './mutation.js': {Mutation: FakeMutation},
      './filter.js': {Filter: FakeFilter},
      './row-data-utils.js': {RowDataUtils: FakeRowDataUtil},
      './utils/getRowsInternal': {
        getRowsInternal,
      },
    });
    RowError = Fake.RowError;
    return Fake;
  }

  before(() => {
    const Fake = getFakeRow(() => {});
    Row = Fake.Row;
  });

  beforeEach(() => {
    row = new Row(TABLE, ROW_ID);
    row.table.bigtable._metricsConfigManager =
      new ClientSideMetricsConfigManager([]);
  });

  afterEach(() => {
    sandbox.restore();
    Object.keys(FakeMutation).forEach(spy => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((FakeMutation as any)[spy].resetHistory) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (FakeMutation as any)[spy].resetHistory();
      }
    });
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize Bigtable instance', () => {
      assert.strictEqual(row.bigtable, TABLE.bigtable);
    });

    it('should localize Table instance', () => {
      assert.strictEqual(row.table, TABLE);
    });

    it('should localize ID', () => {
      assert.strictEqual(row.id, ROW_ID);
    });

    it('should create an empty data object', () => {
      assert.deepStrictEqual(row.data, {});
    });
  });

  describe('formatChunks_', () => {
    let convert = FakeMutation.convertFromBytes;

    beforeEach(() => {
      convert = FakeMutation.convertFromBytes;
      FakeMutation.convertFromBytes = sandbox.spy(val => {
        return val.replace('unconverted', 'converted');
      });
    });

    afterEach(() => {
      FakeMutation.convertFromBytes = convert;
    });

    it('should format the chunks', () => {
      const timestamp = Date.now();
      const chunks = [
        {
          rowKey: 'unconvertedKey',
          familyName: {
            value: 'familyName',
          },
          qualifier: {
            value: 'unconvertedQualifier',
          },
          value: 'unconvertedValue',
          labels: ['label'],
          timestampMicros: timestamp,
          valueSize: 0,
          commitRow: false,
          resetRow: false,
        },
        {
          commitRow: true,
        },
      ] as Chunk[];

      const rows = Row.formatChunks_(chunks);

      assert.deepStrictEqual(rows, [
        {
          key: 'convertedKey',
          data: {
            familyName: {
              convertedQualifier: [
                {
                  value: 'convertedValue',
                  labels: ['label'],
                  timestamp,
                  size: 0,
                },
              ],
            },
          },
        },
      ]);
    });

    it('should inherit the row key', () => {
      const chunks = [
        {
          rowKey: 'unconvertedKey',
        },
        {
          rowKey: null,
          familyName: {
            value: 'familyName',
          },
          commitRow: true,
        },
        {
          rowKey: 'unconvertedKey2',
        },
        {
          rowKey: null,
          familyName: {
            value: 'familyName2',
          },
          commitRow: true,
        },
      ] as {} as Chunk[];

      const rows = Row.formatChunks_(chunks);

      assert.deepStrictEqual(rows, [
        {
          key: 'convertedKey',
          data: {
            familyName: {},
          },
        },
        {
          key: 'convertedKey2',
          data: {
            familyName2: {},
          },
        },
      ]);
    });

    it('should inherit the family name', () => {
      const chunks = [
        {
          rowKey: 'unconvertedKey',
          familyName: {
            value: 'familyName',
          },
        },
        {
          qualifier: {
            value: 'unconvertedQualifier',
          },
        },
        {
          qualifier: {
            value: 'unconvertedQualifier2',
          },
        },
        {
          commitRow: true,
        },
      ] as Chunk[];

      const rows = Row.formatChunks_(chunks);

      assert.deepStrictEqual(rows, [
        {
          key: 'convertedKey',
          data: {
            familyName: {
              convertedQualifier: [],
              convertedQualifier2: [],
            },
          },
        },
      ]);
    });

    it('should inherit the qualifier', () => {
      const timestamp1 = 123;
      const timestamp2 = 345;

      const chunks = [
        {
          rowKey: 'unconvertedKey',
          familyName: {
            value: 'familyName',
          },
          qualifier: {
            value: 'unconvertedQualifier',
          },
        },
        {
          value: 'unconvertedValue',
          labels: ['label'],
          timestampMicros: timestamp1,
          valueSize: 0,
        },
        {
          value: 'unconvertedValue2',
          labels: ['label2'],
          timestampMicros: timestamp2,
          valueSize: 2,
        },
        {
          commitRow: true,
        },
      ] as Chunk[];

      const rows = Row.formatChunks_(chunks);

      assert.deepStrictEqual(rows, [
        {
          key: 'convertedKey',
          data: {
            familyName: {
              convertedQualifier: [
                {
                  value: 'convertedValue',
                  labels: ['label'],
                  timestamp: timestamp1,
                  size: 0,
                },
                {
                  value: 'convertedValue2',
                  labels: ['label2'],
                  timestamp: timestamp2,
                  size: 2,
                },
              ],
            },
          },
        },
      ]);
    });

    it('should not decode values when applicable', () => {
      const formatOptions = {
        decode: false,
      };

      (FakeMutation.convertFromBytes as Function) = sandbox.spy(
        (val, options) => {
          assert.deepStrictEqual(options, {userOptions: formatOptions});
          return val.replace('unconverted', 'converted');
        },
      );

      const timestamp1 = 123;
      const timestamp2 = 345;

      const chunks = [
        {
          rowKey: 'unconvertedKey',
          familyName: {
            value: 'familyName',
          },
          qualifier: {
            value: 'unconvertedQualifier',
          },
        },
        {
          value: 'unconvertedValue',
          labels: ['label'],
          timestampMicros: timestamp1,
          valueSize: 0,
        },
        {
          value: 'unconvertedValue2',
          labels: ['label2'],
          timestampMicros: timestamp2,
          valueSize: 2,
        },
        {
          commitRow: true,
        },
      ] as Chunk[];

      const rows = Row.formatChunks_(chunks, formatOptions);

      assert.deepStrictEqual(rows, [
        {
          key: 'convertedKey',
          data: {
            familyName: {
              convertedQualifier: [
                {
                  value: 'convertedValue',
                  labels: ['label'],
                  timestamp: timestamp1,
                  size: 0,
                },
                {
                  value: 'convertedValue2',
                  labels: ['label2'],
                  timestamp: timestamp2,
                  size: 2,
                },
              ],
            },
          },
        },
      ]);

      // 0 === row key
      // 1 === qualifier
      // 2 === value
      const args = FakeMutation.convertFromBytes.getCall(2).args;
      assert.deepStrictEqual((args as string[])[1], {
        userOptions: formatOptions,
      });
    });

    it('should use the encoding scheme provided', () => {
      const formatOptions = {
        encoding: 'binary' as BufferEncoding,
      };

      (FakeMutation.convertFromBytes as Function) = sandbox.spy(
        (val, options) => {
          assert.deepStrictEqual(options, {userOptions: formatOptions});
          return val.toString(formatOptions.encoding);
        },
      );

      const chunks = [
        {
          rowKey: Buffer.from('ø', 'binary'),
          familyName: {
            value: 'familyName',
          },
          qualifier: {
            value: 'qualifier',
          },
          value: 'value',
          valueSize: 0,
          labels: ['label'],
          timestampMicros: 123,
          commitRow: true,
        },
      ] as Chunk[];

      const rows = Row.formatChunks_(chunks, formatOptions);

      assert.deepStrictEqual(rows, [
        {
          key: 'ø',
          data: {
            familyName: {
              qualifier: [
                {
                  value: 'value',
                  size: 0,
                  labels: ['label'],
                  timestamp: 123,
                },
              ],
            },
          },
        },
      ]);

      // 0 === row key
      // 1 === qualifier
      // 2 === value
      const args: string[] = FakeMutation.convertFromBytes.getCall(2).args;
      assert.deepStrictEqual(args[1], {userOptions: formatOptions});
    });

    it('should discard old data when reset row is found', () => {
      const chunks = [
        {
          rowKey: 'unconvertedKey',
          familyName: {
            value: 'familyName',
          },
          qualifier: {
            value: 'unconvertedQualifier',
          },
          value: 'unconvertedValue',
          labels: ['label'],
          valueSize: 0,
          timestampMicros: 123,
        },
        {
          resetRow: true,
        },
        {
          rowKey: 'unconvertedKey2',
          familyName: {
            value: 'familyName2',
          },
          qualifier: {
            value: 'unconvertedQualifier2',
          },
          value: 'unconvertedValue2',
          labels: ['label2'],
          valueSize: 2,
          timestampMicros: 345,
        },
        {
          commitRow: true,
        },
      ] as {} as Chunk[];

      const rows = Row.formatChunks_(chunks);

      assert.deepStrictEqual(rows, [
        {
          key: 'convertedKey2',
          data: {
            familyName2: {
              convertedQualifier2: [
                {
                  value: 'convertedValue2',
                  labels: ['label2'],
                  size: 2,
                  timestamp: 345,
                },
              ],
            },
          },
        },
      ]);
    });
  });

  describe('formatFamilies_', () => {
    const timestamp = Date.now();

    const families = [
      {
        name: 'test-family',
        columns: [
          {
            qualifier: 'test-column',
            cells: [
              {
                value: 'test-value',
                timestampMicros: timestamp,
                labels: [],
              },
            ],
          },
        ],
      },
    ];

    const formattedRowData = {
      'test-family': {
        'test-column': [
          {
            value: 'test-value',
            timestamp,
            labels: [],
          },
        ],
      },
    };

    it('should format the families into a user-friendly format', () => {
      const formatted = Row.formatFamilies_(families);
      assert.deepStrictEqual(formatted, formattedRowData);
      const convertStpy = FakeMutation.convertFromBytes;
      assert.strictEqual(convertStpy.callCount, 2);
      assert.strictEqual(convertStpy.getCall(0).args[0], 'test-column');
      assert.strictEqual(convertStpy.getCall(1).args[0], 'test-value');
    });

    it('should optionally not decode the value', () => {
      const formatted = Row.formatFamilies_(families, {
        decode: false,
      });
      assert.deepStrictEqual(formatted, formattedRowData);
      const convertStpy = FakeMutation.convertFromBytes;
      assert.strictEqual(convertStpy.callCount, 1);
      assert.strictEqual(convertStpy.getCall(0).args[0], 'test-column');
    });
  });

  describe('create', () => {
    it('should provide the proper request options', done => {
      (row.table.mutate as Function) = (entry: Entry, gaxOptions: {}) => {
        assert.strictEqual(entry.key, row.id);
        assert.strictEqual(entry.data, undefined);
        assert.strictEqual(entry.method, Mutation.methods.INSERT);
        assert.strictEqual(gaxOptions, undefined);
        done();
      };
      row.create(assert.ifError);
    });

    it('should accept data to populate the row', done => {
      const options = {
        entry: {
          a: 'a',
          b: 'b',
        },
      };
      (row.table.mutate as Function) = (entry: Entry) => {
        assert.strictEqual(entry.data, options.entry);
        done();
      };
      row.create(options, assert.ifError);
    });

    it('should accept options when inserting data', done => {
      const options = {
        gaxOptions: {},
      };
      (row.table.mutate as Function) = (entry: Entry, gaxOptions: {}) => {
        assert.strictEqual(gaxOptions, options.gaxOptions);
        done();
      };
      row.create(options, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const err = new Error('err');
      const response = {};
      sandbox.stub(row.table, 'mutate').callsArgWith(2, err, response);
      row.create((err_, row, apiResponse) => {
        assert.strictEqual(err, err_);
        assert.strictEqual(row, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should return the Row instance', done => {
      const response = {};
      sandbox.stub(row.table, 'mutate').callsArgWith(2, null, response);
      row.create((err, row_, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(row, row_);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('createRules', () => {
    const rules = [
      {
        column: 'a:b',
        append: 'c',
        increment: 1,
      },
    ];

    it('should throw if a rule is not provided', () => {
      assert.throws(() => {
        (row.createRules as Function)();
      }, /At least one rule must be provided\./);
    });

    it('should read/modify/write rules', done => {
      (row.bigtable.request as Function) = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: any,
        callback: Function,
      ) => {
        assert.strictEqual(config.client, 'BigtableClient');
        assert.strictEqual(config.method, 'readModifyWriteRow');
        assert.strictEqual(config.reqOpts.tableName, TABLE.name);
        assert.strictEqual(config.reqOpts.rowKey, CONVERTED_ROW_ID);
        assert.deepStrictEqual(config.reqOpts.rules, [
          {
            familyName: 'a',
            columnQualifier: 'b',
            appendValue: 'c',
            incrementAmount: 1,
          },
        ]);
        const spy = FakeMutation.convertToBytes;
        assert.strictEqual(spy.getCall(0).args[0], 'b');
        assert.strictEqual(spy.getCall(1).args[0], 'c');
        assert.strictEqual(spy.getCall(2).args[0], ROW_ID);
        callback(); // done()
      };
      row.createRules(rules, done);
    });

    it('should use an appProfileId', done => {
      const bigtableInstance = row.bigtable;
      bigtableInstance.appProfileId = 'app-profile-id-12345';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bigtableInstance.request as Function) = (config: any) => {
        assert.strictEqual(
          config.reqOpts.appProfileId,
          bigtableInstance.appProfileId,
        );
        done();
      };
      row.createRules(rules, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (row.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      row.createRules(rules, gaxOptions, assert.ifError);
    });
  });

  describe('delete', () => {
    it('should provide the proper request options', done => {
      (row.table.mutate as Function) = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mutation: any,
        gaxOptions: {},
        callback: Function,
      ) => {
        assert.strictEqual(mutation.key, ROW_ID);
        assert.strictEqual(mutation.method, FakeMutation.methods.DELETE);
        assert.deepStrictEqual(gaxOptions, {});
        callback(); // done()
      };
      row.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      (row.table.mutate as Function) = (mutation: {}, gaxOptions_: {}) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      row.delete(gaxOptions, done);
    });

    it('should remove existing data', done => {
      const gaxOptions = {};
      (row.table.mutate as Function) = (mutation: {}, gaxOptions_: {}) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      row.delete(gaxOptions, done);
      assert.strictEqual(row.data, undefined);
    });
  });

  describe('deleteCells', () => {
    const columns = ['a:b', 'c'];

    it('should provide the proper request options', done => {
      (row.table.mutate as Function) = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mutation: any,
        gaxOptions: {},
        callback: Function,
      ) => {
        assert.strictEqual(mutation.key, ROW_ID);
        assert.strictEqual(mutation.data, columns);
        assert.strictEqual(mutation.method, FakeMutation.methods.DELETE);
        assert.deepStrictEqual(gaxOptions, {});
        callback(); // done()
      };
      row.deleteCells(columns, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      sandbox.stub(row.table, 'mutate').callsFake((mutation, gaxOptions_) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      });
      row.deleteCells(columns, gaxOptions, done);
    });

    it('should remove existing data', done => {
      sandbox.stub(row.table, 'mutate').callsArg(2);
      row.deleteCells(columns, done);
      assert.strictEqual(row.data, undefined);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      sandbox.stub(row, 'getMetadata').callsFake(gaxOptions => {
        assert.deepStrictEqual(gaxOptions, {
          filter: [
            {
              row: {
                cellLimit: 1,
              },
            },
            {
              value: {
                strip: true,
              },
            },
          ],
        });
        done();
      });
      row.exists(assert.ifError);
    });

    it('should add filter to the read row options', done => {
      const gaxOptions = {};
      sandbox.stub(row, 'getMetadata').callsFake(gaxOptions_ => {
        assert.deepStrictEqual(gaxOptions_, {
          filter: [
            {
              row: {
                cellLimit: 1,
              },
            },
            {
              value: {
                strip: true,
              },
            },
          ],
        });
        done();
      });
      row.exists(gaxOptions, assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {
        testProperty: true,
      } as CallOptions;

      sandbox.stub(row, 'getMetadata').callsFake(gaxOptions_ => {
        assert.strictEqual(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (gaxOptions_ as any).testProperty,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (gaxOptions as any).testProperty,
        );
        done();
      });

      row.exists(gaxOptions, assert.ifError);
    });

    it('should return false if error is RowError', done => {
      const error = new RowError('Error.');
      sandbox.stub(row, 'getMetadata').callsArgWith(1, error);
      row.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if not RowError', done => {
      const error = new Error('Error.');
      sandbox.stub(row, 'getMetadata').callsArgWith(1, error);
      row.exists(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      sandbox.stub(row, 'getMetadata').callsArgWith(1, null, {});
      row.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('filter', () => {
    const mutations = [
      {
        method: 'insert',
        data: {
          a: 'a',
        },
      },
    ] as {} as rw.FilterConfigOption[];

    const fakeMutations = {
      mutations: [
        {
          a: 'b',
        },
      ],
    } as {} as {mutations: rw.FilterConfigOption};

    beforeEach(() => {
      FakeMutation.parse.resetHistory();
      FakeFilter.parse.resetHistory();
    });

    it('should provide the proper request options', done => {
      const filter = {
        column: 'a',
      };

      const fakeParsedFilter = {
        column: 'b',
      };

      (FakeFilter.parse as Function) = sandbox.spy(() => {
        return fakeParsedFilter;
      });

      (FakeMutation.parse as Function) = sandbox.spy(() => {
        return fakeMutations;
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (row.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableClient');
        assert.strictEqual(config.method, 'checkAndMutateRow');
        assert.strictEqual(config.reqOpts.tableName, TABLE.name);
        assert.strictEqual(config.reqOpts.rowKey, CONVERTED_ROW_ID);
        assert.deepStrictEqual(
          config.reqOpts.predicateFilter,
          fakeParsedFilter,
        );
        assert.deepStrictEqual(
          config.reqOpts.trueMutations,
          fakeMutations.mutations,
        );
        assert.deepStrictEqual(
          config.reqOpts.falseMutations,
          fakeMutations.mutations,
        );
        config.gaxOpts.otherArgs.options.interceptors = [];
        assert.deepStrictEqual(config.gaxOpts, {
          otherArgs: {
            options: {
              interceptors: [],
            },
          },
        });
        assert.strictEqual(FakeMutation.parse.callCount, 2);
        assert.strictEqual(FakeMutation.parse.getCall(0).args[0], mutations[0]);
        assert.strictEqual(FakeMutation.parse.getCall(1).args[0], mutations[0]);
        assert.strictEqual(FakeFilter.parse.callCount, 1);
        assert(FakeFilter.parse.calledWithExactly(filter));
        done();
      };

      row.filter(
        filter,
        {
          onMatch: mutations,
          onNoMatch: mutations,
        },
        assert.ifError,
      );
    });

    it('should accept gaxOptions', done => {
      const filter = {
        column: 'a',
      };
      const gaxOptions = {};
      sandbox.stub(row.bigtable, 'request').callsFake(config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      });
      row.filter(filter, {gaxOptions}, assert.ifError);
    });

    it('should use an appProfileId', done => {
      const filter = {
        column: 'a',
      };
      const bigtableInstance = row.bigtable;
      bigtableInstance.appProfileId = 'app-profile-id-12345';
      sandbox.stub(bigtableInstance, 'request').callsFake(config => {
        assert.strictEqual(
          config.reqOpts.appProfileId,
          bigtableInstance.appProfileId,
        );
        done();
      });
      row.filter(filter, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const err = new Error('err');
      const response = {};
      sandbox.stub(row.bigtable, 'request').callsArgWith(1, err, response);
      (row.filter as Function)(
        {},
        mutations,
        (err_: Error, matched: boolean, apiResponse: {}) => {
          assert.strictEqual(err, err_);
          assert.strictEqual(matched, null);
          assert.strictEqual(response, apiResponse);
          done();
        },
      );
    });

    it('should return a matched flag', done => {
      const response = {
        predicateMatched: true,
      };
      sandbox.stub(row.bigtable, 'request').callsArgWith(1, null, response);
      (row.filter as Function)(
        {},
        mutations,
        (err: Error, matched: boolean, apiResponse: {}) => {
          assert.ifError(err);
          assert(matched);
          assert.strictEqual(response, apiResponse);
          done();
        },
      );
    });
  });

  describe('get', () => {
    function getRowInstance(
      fn: (reqOpts: any) => void | Promise<GetRowsResponse>,
    ) {
      const getRowsInternal = (
        table: TabularApiSurface,
        singleRow: boolean,
        optionsOrCallback?: GetRowsOptions | GetRowsCallback,
        cb?: GetRowsCallback,
      ) => {
        return fn(optionsOrCallback);
      };
      const Fake = getFakeRow(getRowsInternal);
      Row = Fake.Row;
      row = new Row(TABLE, ROW_ID);
      return row;
    }

    function getRowInstanceForErrResp(err: ServiceError | null, resp?: any[]) {
      const getRowsInternal = (
        table: TabularApiSurface,
        singleRow: boolean,
        optionsOrCallback?: GetRowsOptions | GetRowsCallback,
        cb?: GetRowsCallback,
      ) => {
        if (cb) {
          cb(err, resp);
        }
      };
      const Fake = getFakeRow(getRowsInternal);
      Row = Fake.Row;
      row = new Row(TABLE, ROW_ID);
      return row;
    }
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.strictEqual(reqOpts.keys[0], ROW_ID);
        assert.strictEqual(reqOpts.filter, undefined);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 0);
        done();
      };
      const row = getRowInstance(fn);
      row.get(assert.ifError);
    });

    it('should create a filter for a single column', done => {
      const keys = ['a:b'];

      const expectedFilter = [
        {
          family: 'a',
        },
        {
          column: 'b',
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.filter, expectedFilter);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 1);
        assert(FakeMutation.parseColumnName.calledWith(keys[0]));
        done();
      };
      const row = getRowInstance(fn);
      row.get(keys, assert.ifError);
    });

    it('should create a filter for multiple columns', done => {
      const keys = ['a:b', 'c:d'];

      const expectedFilter = [
        {
          interleave: [
            [
              {
                family: 'a',
              },
              {
                column: 'b',
              },
            ],
            [
              {
                family: 'c',
              },
              {
                column: 'd',
              },
            ],
          ],
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.filter, expectedFilter);

        const spy = FakeMutation.parseColumnName;

        assert.strictEqual(spy.callCount, 2);
        assert.strictEqual(spy.getCall(0).args[0], keys[0]);
        assert.strictEqual(spy.getCall(1).args[0], keys[1]);
        done();
      };
      const row = getRowInstance(fn);

      row.get(keys, assert.ifError);
    });

    it('should respect supplying only family names', done => {
      const keys = ['a'];

      const expectedFilter = [
        {
          family: 'a',
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.filter, expectedFilter);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 1);
        assert(FakeMutation.parseColumnName.calledWith(keys[0]));
        done();
      };
      const row = getRowInstance(fn);

      row.get(keys, assert.ifError);
    });

    it('should respect the options object', done => {
      const keys = ['a:b'];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const options: any = {
        filter: [
          {
            column: {
              cellLimit: 1,
            },
          },
        ],
        descode: false,
      };

      const expectedFilter = [
        {
          family: 'a',
        },
        {
          column: 'b',
        },
        {
          column: {
            cellLimit: 1,
          },
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.filter, expectedFilter);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 1);
        assert(FakeMutation.parseColumnName.calledWith(keys[0]));
        assert.strictEqual(reqOpts.decode, options.decode);
        done();
      };
      const row = getRowInstance(fn);

      row.get(keys, options, assert.ifError);
    });

    it('should respect the options object with filter for multiple columns', done => {
      const keys = ['a:b', 'c:d'];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const options: any = {
        filter: [
          {
            column: {
              cellLimit: 1,
            },
          },
        ],
      };

      const expectedFilter = [
        {
          interleave: [
            [
              {
                family: 'a',
              },
              {
                column: 'b',
              },
            ],
            [
              {
                family: 'c',
              },
              {
                column: 'd',
              },
            ],
          ],
        },
        {
          column: {
            cellLimit: 1,
          },
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.filter, expectedFilter);
        assert.strictEqual(FakeMutation.parseColumnName.callCount, 2);
        assert(FakeMutation.parseColumnName.calledWith(keys[0]));
        assert.strictEqual(reqOpts.decode, options.decode);
        done();
      };
      const row = getRowInstance(fn);

      row.get(keys, options, assert.ifError);
    });

    it('should respect filter in options object', done => {
      const keys = [] as string[];

      const options = {
        decode: false,
        filter: [{column: 'abc'}],
      };
      const expectedFilter = options.filter;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.deepStrictEqual(reqOpts.filter, expectedFilter);
        done();
      };
      const row = getRowInstance(fn);

      row.get(keys, options, assert.ifError);
    });

    it('should accept options without keys', done => {
      const options = {
        decode: false,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fn = (reqOpts: any) => {
        assert.strictEqual(reqOpts.decode, options.decode);
        assert(!reqOpts.filter);
        done();
      };
      const row = getRowInstance(fn);

      row.get(options, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      const row = getRowInstanceForErrResp(error as ServiceError);
      row.get((err, row) => {
        assert.strictEqual(error, err);
        assert.strictEqual(row, undefined);
        done();
      });
    });

    it('should return a custom error if the row is not found', done => {
      const row = getRowInstanceForErrResp(null, []);
      row.get((err, row_) => {
        assert(err instanceof RowError);
        assert.strictEqual(err!.message, 'Unknown row: ' + row.id + '.');
        assert.deepStrictEqual(row_, undefined);
        done();
      });
    });

    it('should update the row data upon success', done => {
      const fakeRow = new Row(TABLE, ROW_ID);
      fakeRow.data = {
        a: 'a',
        b: 'b',
      };
      const row = getRowInstanceForErrResp(null, [fakeRow]);
      row.get((err, row_) => {
        assert.ifError(err);
        assert.strictEqual(row_, row);
        assert.deepStrictEqual(row.data, fakeRow.data);
        done();
      });
    });

    it('should return only data for the keys provided', done => {
      const fakeRow = new Row(TABLE, ROW_ID);

      fakeRow.data = {
        a: 'a',
        b: 'b',
      };

      const keys = ['a', 'b'];
      const row = getRowInstanceForErrResp(null, [fakeRow]);

      row.data = {
        c: 'c',
      };
      row.get(keys, (err, data) => {
        assert.ifError(err);
        assert.deepStrictEqual(Object.keys(data), keys);
        done();
      });
    });
  });

  describe('getMetadata', () => {
    it('should return an error to the callback', done => {
      const error = new Error('err');
      sandbox.stub(row, 'get').callsArgWith(1, error);
      row.getMetadata((err, metadata) => {
        assert.strictEqual(error, err);
        assert.strictEqual(metadata, undefined);
        done();
      });
    });

    it('should return metadata to the callback', done => {
      const fakeMetadata = {
        a: 'a',
        b: 'b',
      };
      sandbox.stub(row, 'get').callsArgWith(1, null, row);
      row.metadata = fakeMetadata;
      row.getMetadata((err, metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      });
    });

    it('should accept an options object', done => {
      const fakeMetadata = {};
      const fakeOptions = {
        decode: false,
      };
      (row.get as Function) = (options: {}, callback: Function) => {
        assert.strictEqual(options, fakeOptions);
        callback(null, row);
      };
      row.metadata = fakeMetadata;
      row.getMetadata(fakeOptions, (err, metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata, fakeMetadata);
        done();
      });
    });
  });

  describe('increment', () => {
    const COLUMN_NAME = 'a:b';
    let formatFamiliesSpy: sinon.SinonSpy;

    beforeEach(() => {
      formatFamiliesSpy = sandbox
        .stub(FakeRowDataUtil, 'formatFamilies_Util')
        .returns({
          a: {
            b: [
              {
                value: 10,
              },
            ],
          },
        });
    });

    afterEach(() => {
      formatFamiliesSpy.restore();
    });

    it('should provide the proper request options', done => {
      sandbox
        .stub(FakeRowDataUtil, 'createRulesUtil')
        .callsFake((reqOpts, properties, gaxOptions, cb) => {
          assert.strictEqual((reqOpts as rw.Rule).column, COLUMN_NAME);
          assert.strictEqual((reqOpts as rw.Rule).increment, 1);
          assert.deepStrictEqual(gaxOptions, {});
          done();
        });
      row.increment(COLUMN_NAME, assert.ifError);
    });

    it('should optionally accept an increment amount', done => {
      const increment = 10;
      sandbox.stub(FakeRowDataUtil, 'createRulesUtil').callsFake(reqOpts => {
        assert.strictEqual((reqOpts as rw.Rule).increment, increment);
        done();
      });
      row.increment(COLUMN_NAME, increment, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      sandbox
        .stub(FakeRowDataUtil, 'createRulesUtil')
        .callsFake((reqOpts, properties, gaxOptions_) => {
          assert.strictEqual(gaxOptions_, gaxOptions);
          done();
        });
      row.increment(COLUMN_NAME, gaxOptions, assert.ifError);
    });

    it('should accept increment amount and gaxOptions', done => {
      const increment = 10;
      const gaxOptions = {};
      sandbox
        .stub(FakeRowDataUtil, 'createRulesUtil')
        .callsFake((reqOpts, properties, gaxOptions_) => {
          assert.strictEqual((reqOpts as rw.Rule).increment, increment);
          assert.strictEqual(gaxOptions_, gaxOptions);
          done();
        });
      row.increment(COLUMN_NAME, increment, gaxOptions, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      const response = {};
      sandbox
        .stub(FakeRowDataUtil, 'createRulesUtil')
        .callsArgWith(3, error, response);
      row.increment(COLUMN_NAME, (err, value, apiResponse) => {
        assert.strictEqual(err, error);
        assert.strictEqual(value, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should pass back the updated value to the callback', done => {
      const fakeValue = 10;
      const response = {
        row: {
          families: [
            {
              name: 'a',
              columns: [
                {
                  qualifier: 'b',
                  cells: [
                    {
                      timestampMicros: Date.now(),
                      value: fakeValue,
                      labels: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      };

      sandbox
        .stub(FakeRowDataUtil, 'createRulesUtil')
        .callsArgWith(3, null, response);
      row.increment(COLUMN_NAME, (err, value, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(value, fakeValue);
        assert.strictEqual(apiResponse, response);
        assert.strictEqual(formatFamiliesSpy.callCount, 1);
        assert(formatFamiliesSpy.calledWithExactly(response.row.families));
        done();
      });
    });
  });

  describe('save', () => {
    const data = {
      a: {
        b: 'c',
      },
    };

    it('should insert an object', done => {
      const fn = (
        table: TabularApiSurface,
        metricsCollector: OperationMetricsCollector,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entry: Entry | Entry[],
        gaxOptions: {},
        callback: Function,
      ) => {
        assert.strictEqual(entry.data, data);
        callback(); // done()
      };
      const SavedRow = getFakeMutateRow(fn).Row;
      const savedRow = new SavedRow(TABLE, ROW_ID);
      savedRow.save(data, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      const fn = (
        table: TabularApiSurface,
        metricsCollector: OperationMetricsCollector,
        entry: Entry | Entry[],
        gaxOptions_: MutateOptions | MutateCallback,
      ) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      const SavedRow = getFakeMutateRow(fn).Row;
      const savedRow = new SavedRow(TABLE, ROW_ID);
      savedRow.save(data, gaxOptions, assert.ifError);
    });

    it('should remove existing data', done => {
      const gaxOptions = {};
      const fn = (
        table: TabularApiSurface,
        metricsCollector: OperationMetricsCollector,
        entry: Entry | Entry[],
        gaxOptions_: MutateOptions | MutateCallback,
      ) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      const SavedRow = getFakeMutateRow(fn).Row;
      const savedRow = new SavedRow(TABLE, ROW_ID);
      savedRow.save(data, gaxOptions, assert.ifError);
      assert.strictEqual(row.data, undefined);
    });
  });

  describe('RowError', () => {
    it('should supply the correct message', () => {
      const error = new RowError('test');
      assert.strictEqual(error.message, 'Unknown row: test.');
    });

    it('should supply a 404 error code', () => {
      const error = new RowError('test');
      assert.strictEqual(error.code, 404);
    });
  });
});
