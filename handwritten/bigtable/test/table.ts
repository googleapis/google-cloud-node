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
import {afterEach, before, beforeEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as pumpify from 'pumpify';
import * as sinon from 'sinon';
import {PassThrough, Writable, Duplex} from 'stream';
import {ServiceError} from 'google-gax';

import * as inst from '../src/instance';
import {ChunkTransformer} from '../src/chunktransformer.js';
import {Family} from '../src/family.js';
import {Mutation} from '../src/mutation.js';
import {Row} from '../src/row.js';
import * as tblTypes from '../src/table';
import {Bigtable, RequestOptions} from '../src';
import {EventEmitter} from 'events';
import {TableUtils} from '../src/utils/table';
import {ClientSideMetricsConfigManager} from '../src/client-side-metrics/metrics-config-manager';
import {OperationMetricsCollector} from '../src/client-side-metrics/operation-metrics-collector';
import {SinonSpy} from 'sinon';
import {TabularApiSurface} from '../src/tabular-api-surface';
import {GetRowsOptions} from '../src/table';
import {mutateInternal} from '../src/utils/mutateInternal';

const sandbox = sinon.createSandbox();
const noop = () => {};

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promisifyAll(klass: Function, options: any) {
    if (klass.name !== 'Table') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['family', 'row']);
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createFake(klass: any) {
  return class Fake extends klass {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    calledWith_: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.calledWith_ = args;
    }
  };
}

class FakeMetricsCollector {
  onOperationStart() {}
  onOperationComplete() {}
  onResponse() {}
  onAttemptStart() {}
  onAttemptComplete() {}
  onMetadataReceived() {}
  wrapRequest() {}
  onStatusMetadataReceived() {}
  onRowReachesUser() {}
}

class FakeMetricsConfigManager extends ClientSideMetricsConfigManager {
  createOperation() {
    return new FakeMetricsCollector() as unknown as OperationMetricsCollector;
  }
}

const FakeFamily = createFake(Family);
FakeFamily.formatRule_ = sinon.spy(rule => rule);

const FakeRow = createFake(Row);

FakeRow.formatChunks_ = sinon.spy(chunks => {
  return chunks;
});

const FakeChunkTransformer = createFake(ChunkTransformer);
FakeChunkTransformer.prototype._transform = function (
  rows: Row[],
  enc: {},
  next: Function,
) {
  rows.forEach(row => this.push(row));
  next();
};

const FakeMutation = {
  methods: Mutation.methods,
  convertToBytes: sinon.spy(value => {
    return value;
  }),
  convertFromBytes: sinon.spy(value => {
    return value;
  }),
  parse: sinon.spy(value => {
    return value;
  }),
};

const FakeFilter = {
  parse: sinon.spy(value => {
    return value;
  }),
  createRange: () => {
    return {};
  },
};

function getTableMock(
  createReadStreamInternal: (
    table: TabularApiSurface,
    singleRow: boolean,
    opts?: GetRowsOptions,
  ) => PassThrough,
) {
  const FakeGetRows = proxyquire('../src/utils/getRowsInternal.js', {
    './createReadStreamInternal': {
      createReadStreamInternal: createReadStreamInternal,
    },
  });
  const FakeMutateInternal = proxyquire('../src/utils/mutateInternal.js', {
    '../row.js': {Row: FakeRow},
    '../chunktransformer.js': {ChunkTransformer: FakeChunkTransformer},
    '../filter.js': {Filter: FakeFilter},
    '../mutation.js': {Mutation: FakeMutation},
    pumpify,
  }).mutateInternal;
  const FakeTabularApiSurface = proxyquire('../src/tabular-api-surface.js', {
    '@google-cloud/promisify': fakePromisify,
    './family.js': {Family: FakeFamily},
    './mutation.js': {Mutation: FakeMutation},
    './filter.js': {Filter: FakeFilter},
    pumpify,
    './row.js': {Row: FakeRow},
    './chunktransformer.js': {ChunkTransformer: FakeChunkTransformer},
    './utils/createReadStreamInternal': {
      createReadStreamInternal,
    },
    './utils/mutateInternal': {
      mutateInternal: FakeMutateInternal,
    },
    './utils/getRowsInternal': {
      getRowsInternal: FakeGetRows.getRowsInternal,
    },
  }).TabularApiSurface;
  const Table = proxyquire('../src/table.js', {
    '@google-cloud/promisify': fakePromisify,
    './family.js': {Family: FakeFamily},
    './mutation.js': {Mutation: FakeMutation},
    './row.js': {Row: FakeRow},
    './tabular-api-surface': {TabularApiSurface: FakeTabularApiSurface},
  }).Table;
  return Table;
}

describe('Bigtable/Table', () => {
  const TABLE_ID = 'my-table';
  let INSTANCE: inst.Instance;
  let TABLE_NAME: string;

  let Table: typeof tblTypes.Table;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let table: any;

  before(() => {
    const FakeCreateReadStreamInternal = proxyquire(
      '../src/utils/createReadStreamInternal.js',
      {
        '../row.js': {Row: FakeRow},
        '../chunktransformer.js': {ChunkTransformer: FakeChunkTransformer},
        '../filter.js': {Filter: FakeFilter},
        '../mutation.js': {Mutation: FakeMutation},
        pumpify,
      },
    ).createReadStreamInternal;
    Table = getTableMock(FakeCreateReadStreamInternal);
  });

  beforeEach(() => {
    INSTANCE = {
      bigtable: {
        _metricsConfigManager: new FakeMetricsConfigManager(
          [],
        ) as ClientSideMetricsConfigManager,
      } as Bigtable,
      name: 'a/b/c/d',
    } as inst.Instance;
    TABLE_NAME = INSTANCE.name + '/tables/' + TABLE_ID;
    table = new Table(INSTANCE, TABLE_ID);
  });

  afterEach(() => {
    Object.keys(FakeMutation).forEach(spy => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((FakeMutation as any)[spy].reset) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (FakeMutation as any)[spy].resetHistory();
      }
    });
    FakeFilter.parse.resetHistory();
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize Bigtable instance', () => {
      assert.strictEqual(table.bigtable, INSTANCE.bigtable);
    });

    it('should localize Instance instance', () => {
      assert.strictEqual(table.instance, INSTANCE);
    });

    it('should localize ID', () => {
      assert.strictEqual(table.id, TABLE_ID);
    });

    it('should localize table name', () => {
      assert.strictEqual(table.name, TABLE_NAME);
    });
    it('should leave full table name unaltered and localize the id from the name', () => {
      const table = new Table(INSTANCE, TABLE_NAME);
      assert.strictEqual(table.name, TABLE_NAME);
      assert.strictEqual(table.id, TABLE_ID);
    });

    it('should throw if table id in wrong format', () => {
      const id = `tables/${TABLE_ID}`;
      assert.throws(() => {
        new Table(INSTANCE, id);
      }, Error);
    });
  });

  describe('VIEWS', () => {
    const views = {
      unspecified: 0,
      name: 1,
      schema: 2,
      replication: 3,
      full: 4,
    };

    it('should export the table views', () => {
      assert.deepStrictEqual(views, Table.VIEWS);
    });
  });

  describe('formatName_', () => {
    it('should format the table name to include the cluster name', () => {
      const tableName = Table.formatName_(INSTANCE.name, TABLE_ID);
      assert.strictEqual(tableName, TABLE_NAME);
    });

    it('should not re-format the table name', () => {
      const tableName = Table.formatName_(INSTANCE.id, TABLE_NAME);
      assert.strictEqual(tableName, TABLE_NAME);
    });
  });

  describe('create', () => {
    it('should call createTable from instance', done => {
      const options = {};

      table.instance.createTable = (
        id: string,
        options_: {},
        callback: Function,
      ) => {
        assert.strictEqual(id, table.id);
        assert.strictEqual(options_, options);
        callback(); // done()
      };

      table.create(options, done);
    });

    it('should not require options', done => {
      table.instance.createTable = (
        id: string,
        options: {},
        callback: Function,
      ) => {
        assert.deepStrictEqual(options, {});
        callback(); // done()
      };

      table.create(done);
    });
  });

  describe('createBackup', () => {
    const BACKUP_ID = 'backup-id';
    const CONFIG = {a: 'b'};

    const READY_CLUSTER_ID = 'cluster-id';
    const REPLICATION_STATES = new Map();
    REPLICATION_STATES.set('a', {replicationState: 'NOT_READY'});
    REPLICATION_STATES.set(READY_CLUSTER_ID, {replicationState: 'READY'});

    it('should throw if an id is not provided', () => {
      assert.throws(() => {
        table.createBackup();
      }, /An id is required to create a backup\./);
    });

    it('should throw if a configuration object is not provided', () => {
      assert.throws(() => {
        table.createBackup(BACKUP_ID);
      }, /A configuration object is required\./);
    });

    it('should get replication states', done => {
      table.getReplicationStates = () => {
        done();
      };

      table.createBackup(BACKUP_ID, CONFIG, assert.ifError);
    });

    it('should pass gaxOptions when getting replication states', done => {
      const config = {gaxOptions: {}};

      table.getReplicationStates = (gaxOptions: {}) => {
        assert.strictEqual(gaxOptions, config.gaxOptions);
        done();
      };

      table.createBackup(BACKUP_ID, config, assert.ifError);
    });

    it('should execute callback with error if getting replication states fails', done => {
      const error = new Error('Error.');

      table.getReplicationStates = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };

      table.createBackup(BACKUP_ID, CONFIG, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should create a Cluster with the id of the first available cluster', done => {
      table.instance.cluster = (id: string) => {
        assert.strictEqual(id, READY_CLUSTER_ID);
        setImmediate(done);
        return {createBackup: () => {}};
      };

      table.getReplicationStates = (gaxOptions: {}, callback: Function) => {
        callback(null, REPLICATION_STATES);
      };

      table.createBackup(BACKUP_ID, CONFIG, assert.ifError);
    });

    it('should accept READY_OPTIMIZING status', done => {
      const readyClusterId = 'unique-cluster-id';
      const replicationStates = new Map();
      replicationStates.set('a', {replicationState: 'NOT_READY'});
      replicationStates.set(readyClusterId, {
        replicationState: 'READY_OPTIMIZING',
      });

      table.instance.cluster = (id: string) => {
        assert.strictEqual(id, readyClusterId);
        setImmediate(done);
        return {createBackup: () => {}};
      };

      table.getReplicationStates = (gaxOptions: {}, callback: Function) => {
        callback(null, replicationStates);
      };

      table.createBackup(BACKUP_ID, CONFIG, assert.ifError);
    });

    it('should return error if no clusters are available', done => {
      const replicationStates = new Map();
      replicationStates.set('a', {replicationState: 'NOT_READY'});
      replicationStates.set('b', {replicationState: 'NOT_READY'});

      table.getReplicationStates = (gaxOptions: {}, callback: Function) => {
        callback(null, replicationStates);
      };

      table.createBackup(BACKUP_ID, CONFIG, (err: Error) => {
        assert.strictEqual(
          err.message,
          'No ready clusters eligible for backup.',
        );
        done();
      });
    });

    it('should correctly create a Backup from the Cluster', done => {
      table.instance.cluster = () => {
        return {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          createBackup: (id: string, config: any, callback: Function) => {
            assert.strictEqual(id, BACKUP_ID);
            assert.deepStrictEqual(config, {
              table: table.name,
              ...CONFIG,
            });
            callback(); // done()
          },
        };
      };

      table.getReplicationStates = (gaxOptions: {}, callback: Function) => {
        callback(null, REPLICATION_STATES);
      };

      table.createBackup(BACKUP_ID, CONFIG, done);
    });
  });

  describe('createPrefixRange', () => {
    it('should create a range from the prefix', () => {
      assert.deepStrictEqual(Table.createPrefixRange('start'), {
        start: 'start',
        end: {
          value: 'staru',
          inclusive: false,
        },
      });

      assert.deepStrictEqual(Table.createPrefixRange('X\xff'), {
        start: 'X\xff',
        end: {
          value: 'Y',
          inclusive: false,
        },
      });

      assert.deepStrictEqual(Table.createPrefixRange('xoo\xff'), {
        start: 'xoo\xff',
        end: {
          value: 'xop',
          inclusive: false,
        },
      });

      assert.deepStrictEqual(Table.createPrefixRange('a\xffb'), {
        start: 'a\xffb',
        end: {
          value: 'a\xffc',
          inclusive: false,
        },
      });

      assert.deepStrictEqual(Table.createPrefixRange('com.google.'), {
        start: 'com.google.',
        end: {
          value: 'com.google/',
          inclusive: false,
        },
      });
    });

    it('should create an inclusive bound when the prefix is empty', () => {
      assert.deepStrictEqual(Table.createPrefixRange('\xff'), {
        start: '\xff',
        end: {
          value: '',
          inclusive: true,
        },
      });

      assert.deepStrictEqual(Table.createPrefixRange(''), {
        start: '',
        end: {
          value: '',
          inclusive: true,
        },
      });
    });
  });

  describe('createFamily', () => {
    const COLUMN_ID = 'my-column';
    const FAMILY_ID = 'test-family';

    it('should throw if a id is not provided', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (table as any).createFamily();
      }, /An id is required to create a family\./);
    });

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'modifyColumnFamilies');

        assert.strictEqual(config.reqOpts.name, TABLE_NAME);
        assert.deepStrictEqual(config.reqOpts.modifications, [
          {
            id: COLUMN_ID,
            create: {},
          },
        ]);

        assert.strictEqual(config.gaxOpts, undefined);

        done();
      };

      table.createFamily(COLUMN_ID, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      table.createFamily(COLUMN_ID, {gaxOptions}, assert.ifError);
    });

    it('should respect the gc rule option', done => {
      const rule = {
        a: 'a',
        b: 'b',
      };
      const convertedRule = {
        c: 'c',
        d: 'd',
      };

      const spy = (FakeFamily.formatRule_ = sinon.spy(() => {
        return convertedRule;
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        const modification = config.reqOpts.modifications[0];

        assert.strictEqual(modification.create.gcRule, convertedRule);
        assert.strictEqual(spy.callCount, 1);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((spy as any).getCall(0).args[0], rule);
        done();
      };

      table.createFamily(COLUMN_ID, {rule}, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      const response = {};
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(error, response);
      };
      table.createFamily(
        COLUMN_ID,
        (err: Error, family: Family, apiResponse: {}) => {
          assert.strictEqual(error, err);
          assert.strictEqual(family, null);
          assert.strictEqual(response, apiResponse);
          done();
        },
      );
    });

    it('should return a Family object', done => {
      const response = {
        name: 'response-family-name',
      };
      const fakeFamily = {} as Family;
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(null, response);
      };
      sandbox.stub(table, 'family').callsFake(id => {
        assert.strictEqual(id, FAMILY_ID);
        return fakeFamily;
      });
      table.createFamily(
        FAMILY_ID,
        (err: Error, family: Family, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(family, fakeFamily);
          assert.strictEqual(family.metadata, response);
          assert.strictEqual(apiResponse, response);
          done();
        },
      );
    });
  });

  describe('createReadStream', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableClient');
        assert.strictEqual(config.method, 'readRows');
        assert.strictEqual(config.reqOpts.tableName, TABLE_NAME);
        assert.strictEqual(config.reqOpts.appProfileId, undefined);
        assert.deepStrictEqual(config.gaxOpts, {
          otherArgs: {headers: {'bigtable-attempt': 0}},
        });
        done();
      };
      table.createReadStream();
    });

    it('should use an appProfileId', done => {
      const bigtableInstance = table.bigtable;
      bigtableInstance.appProfileId = 'app-profile-id-12345';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtableInstance.request = (config: any) => {
        assert.strictEqual(
          config.reqOpts.appProfileId,
          bigtableInstance.appProfileId,
        );
        done();
      };
      table.createReadStream();
    });

    it('should abort request on end', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = () => {
        const requestStream = new PassThrough({
          objectMode: true,
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (requestStream as any).abort = () => {
          done();
        };

        return requestStream;
      };

      table.createReadStream().end();
    });

    describe('options', () => {
      it('should accept gaxOptions', done => {
        const gaxOptions = {};

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };

        table.createReadStream({gaxOptions});
      });

      it('should retrieve a range of rows', done => {
        const options = {
          start: 'gwashington',
          end: 'alincoln',
        };

        const fakeRange = {
          start: 'a',
          end: 'b',
        };

        const formatSpy = (FakeFilter.createRange = sinon.spy(() => {
          return fakeRange;
        }));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.deepStrictEqual(config.reqOpts.rows.rowRanges[0], fakeRange);
          assert.strictEqual(formatSpy.callCount, 1);
          assert.deepStrictEqual(formatSpy.getCall(0).args, [
            options.start,
            options.end,
            'Key',
          ]);
          done();
        };

        table.createReadStream(options);
      });

      it('should retrieve multiple rows', done => {
        const options = {
          keys: ['gwashington', 'alincoln'],
        };
        const convertedKeys = ['a', 'b'];

        const convertSpy = (FakeMutation.convertToBytes = sinon.spy(key => {
          const keyIndex = options.keys.indexOf(key);
          return convertedKeys[keyIndex];
        }));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.deepStrictEqual(config.reqOpts.rows.rowKeys, convertedKeys);
          assert.strictEqual(convertSpy.callCount, 2);
          assert.strictEqual(convertSpy.getCall(0).args[0], options.keys[0]);
          assert.strictEqual(convertSpy.getCall(1).args[0], options.keys[1]);
          done();
        };

        table.createReadStream(options);
      });

      it('should retrieve multiple ranges', done => {
        const options = {
          ranges: [
            {
              start: 'a',
              end: 'b',
            },
            {
              start: 'c',
              end: 'd',
            },
          ],
        };

        const fakeRanges = [
          {
            start: 'e',
            end: 'f',
          },
          {
            start: 'g',
            end: 'h',
          },
        ];

        const formatSpy = (FakeFilter.createRange = sinon.spy(() => {
          return fakeRanges[formatSpy.callCount - 1];
        })) as sinon.SinonSpy;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.deepStrictEqual(config.reqOpts.rows.rowRanges, fakeRanges);
          assert.strictEqual(formatSpy.callCount, 2);
          assert.deepStrictEqual(formatSpy.getCall(0).args, [
            options.ranges[0].start,
            options.ranges[0].end,
            'Key',
          ]);
          assert.deepStrictEqual(formatSpy.getCall(1).args, [
            options.ranges[1].start,
            options.ranges[1].end,
            'Key',
          ]);
          done();
        };
        table.createReadStream(options);
      });

      it('should parse a filter object', done => {
        const options = {
          filter: [{}],
        };
        const fakeFilter = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parseSpy = ((FakeFilter as any).parse = sinon.spy(() => {
          return fakeFilter;
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.strictEqual(config.reqOpts.filter, fakeFilter);
          assert.strictEqual(parseSpy.callCount, 1);
          assert.strictEqual(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (parseSpy as any).getCall(0).args[0],
            options.filter,
          );
          done();
        };
        table.createReadStream(options);
      });

      it('should allow setting a row limit', done => {
        const options = {
          limit: 10,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.strictEqual(config.reqOpts.rowsLimit, options.limit);
          done();
        };
        table.createReadStream(options);
      });

      it('should throw if ranges and start is set together', () => {
        const options = {
          ranges: [
            {
              start: 'a',
              end: 'b',
            },
            {
              start: 'c',
              end: 'd',
            },
          ],
          start: 'a',
        };
        assert.throws(() => {
          table.createReadStream(options, assert.ifError);
        }, /start\/end should be used exclusively to ranges\/prefix\/prefixes\./);
      });

      it('should throw if ranges and end is set together', () => {
        const options = {
          ranges: [
            {
              start: 'a',
              end: 'b',
            },
            {
              start: 'c',
              end: 'd',
            },
          ],
          end: 'a',
        };
        assert.throws(() => {
          table.createReadStream(options, assert.ifError);
        }, /start\/end should be used exclusively to ranges\/prefix\/prefixes\./);
      });

      it('should throw if ranges and prefix is set together', () => {
        const options = {
          ranges: [
            {
              start: 'a',
              end: 'b',
            },
            {
              start: 'c',
              end: 'd',
            },
          ],
          prefix: 'a',
        };
        assert.throws(() => {
          table.createReadStream(options, assert.ifError);
        }, /prefix should be used exclusively to ranges\/start\/end\/prefixes\./);
      });

      it('should throw if ranges and prefixes is set together', () => {
        const options = {
          ranges: [
            {
              start: 'a',
              end: 'b',
            },
            {
              start: 'c',
              end: 'd',
            },
          ],
          prefixes: [{prefix: 'a'}],
        };
        assert.throws(() => {
          table.createReadStream(options, assert.ifError);
        }, /prefixes should be used exclusively to ranges\/start\/end\/prefix\./);
      });

      it('should throw if prefix and start is set together', () => {
        const options = {
          start: 'a',
          prefix: 'a',
        };
        assert.throws(() => {
          table.createReadStream(options, assert.ifError);
        }, /start\/end should be used exclusively to ranges\/prefix\/prefixes\./);
      });

      describe('prefixes', () => {
        beforeEach(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (FakeFilter as any).createRange = noop;
        });

        afterEach(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (TableUtils as any).createPrefixRange.restore();
        });

        it('should transform the prefix into a range', done => {
          const fakeRange = {};
          const fakePrefixRange = {
            start: 'a',
            end: 'b',
          } as {} as tblTypes.PrefixRange;

          const fakePrefix = 'abc';

          const prefixSpy = sandbox
            .stub(TableUtils, 'createPrefixRange')
            .returns(fakePrefixRange);

          const rangeSpy = sandbox
            .stub(FakeFilter, 'createRange')
            .returns(fakeRange);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          table.bigtable.request = (config: any) => {
            assert.strictEqual(prefixSpy.getCall(0).args[0], fakePrefix);
            assert.deepStrictEqual(config.reqOpts.rows.rowRanges, [fakeRange]);

            assert.deepStrictEqual(rangeSpy.getCall(0).args, [
              fakePrefixRange.start,
              fakePrefixRange.end,
              'Key',
            ]);

            done();
          };

          table.createReadStream({prefix: fakePrefix});
        });

        it('should accept multiple prefixes', done => {
          const prefixes = ['abc', 'def'];
          const prefixRanges = [
            {start: 'abc', end: 'abd'},
            {start: 'def', end: 'deg'},
          ] as {} as tblTypes.PrefixRange[];
          const prefixSpy = sandbox
            .stub(TableUtils, 'createPrefixRange')
            .callsFake(() => {
              const callIndex = prefixSpy.callCount - 1;
              return prefixRanges[callIndex];
            });

          const ranges = [{}, {}];
          const rangeSpy = sandbox
            .stub(FakeFilter, 'createRange')
            .callsFake(() => {
              const callIndex = rangeSpy.callCount - 1;
              return ranges[callIndex];
            });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          table.bigtable.request = (config: any) => {
            assert.strictEqual(prefixSpy.callCount, 2);

            prefixes.forEach((prefix, i) => {
              const prefixRange = prefixRanges[i];

              assert.deepStrictEqual(prefixSpy.getCall(i).args, [prefix]);
              assert.deepStrictEqual(rangeSpy.getCall(i).args, [
                prefixRange.start,
                prefixRange.end,
                'Key',
              ]);
              assert.strictEqual(config.reqOpts.rows.rowRanges[i], ranges[i]);
            });

            done();
          };

          table.createReadStream({prefixes});
        });
      });
    });

    describe('success', () => {
      const fakeChunks = {
        chunks: [
          {
            rowKey: 'a',
          },
          {
            commitRow: true,
          },
          {
            rowKey: 'b',
          },
          {
            commitRow: true,
          },
        ],
      };

      const formattedRows = [
        {key: 'c', data: {}},
        {key: 'd', data: {}},
      ];

      beforeEach(() => {
        sinon.stub(table, 'row').callsFake((...args: unknown[]) => {
          return {
            id: args[0] as string,
            table: table,
            bigtable: table.bigtable,
            data: {},
          } as Row;
        });
        FakeChunkTransformer.prototype._transform = function (
          chunks: Array<{}>,
          enc: {},
          next: Function,
        ) {
          formattedRows.forEach(row => this.push(row));
          next();
        };
        FakeChunkTransformer.prototype._flush = (cb: Function) => {
          cb();
        };

        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (stream as any).abort = () => {};

          setImmediate(() => {
            stream.push(fakeChunks);
            stream.push(null);
          });

          return stream;
        };
      });

      it('should stream Row objects', done => {
        const rows: Row[] = [];

        table
          .createReadStream()
          .on('error', done)
          .on('data', (row: Row) => {
            rows.push(row);
          })
          .on('end', () => {
            const rowSpy = table.row;
            assert.strictEqual(rows.length, formattedRows.length);
            assert.strictEqual(rowSpy.callCount, formattedRows.length);
            assert.strictEqual(rowSpy.getCall(0).args[0], formattedRows[0].key);
            assert.strictEqual(rows[0].data, formattedRows[0].data);
            assert.strictEqual(rowSpy.getCall(1).args[0], formattedRows[1].key);
            assert.strictEqual(rows[1].data, formattedRows[1].data);
            done();
          });
      });

      it('should allow a stream to end early', done => {
        const rows: Row[] = [];
        const stream = table
          .createReadStream()
          .on('error', noop)
          .on('data', (row: Row) => {
            rows.push(row);
            stream.end();
          })
          .on('end', () => {
            assert.strictEqual(rows.length, 1);
            done();
          });
      });
    });

    describe('error', () => {
      const error = new Error('err');
      const fakeChunks = {
        chunks: [
          {
            rowKey: 'a',
          },
          {
            commitRow: true,
          },
          {
            rowKey: 'b',
          },
          {
            commitRow: true,
          },
        ],
      };

      // beforeEach(() => {
      //   table.bigtable.request = () => {
      //     let stream = new PassThrough({
      //       objectMode: true,
      //     });

      //     setImmediate(() => {
      //       stream.emit('error', error);
      //     });

      //     return stream;
      //   };
      // });

      it('should emit an error event', done => {
        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.emit('error', error);
          });

          return stream;
        };
        table
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(error, err);
            done();
          })
          .on('data', done);
      });
      it('should emit an error event when chunk format returns error', done => {
        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.push(fakeChunks);
            stream.push(null);
          });

          return stream;
        };
        FakeChunkTransformer.prototype._transform = (
          chunks: {},
          enc: {},
          next: Function,
        ) => {
          next(error);
        };
        table
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(error, err);
            done();
          })
          .on('data', done);
      });
      it('should emit an error event when chunktransformer returns error on flush end', done => {
        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.push(null);
          });

          return stream;
        };
        FakeChunkTransformer.prototype._flush = (next: Function) => {
          next(error);
        };
        table
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(error, err);
            done();
          })
          .on('data', done);
      });
    });
    it('Should respect the timeout parameter passed in for UNAVAILABLE error', done => {
      // The timeout is 2 seconds, but the error is received after 3 seconds
      // so the client doesn't retry because more than 2 seconds have elapsed.
      const requestSpy = (table.bigtable.request = sinon.spy(() => {
        const stream = new PassThrough({
          objectMode: true,
        });
        (stream as any).abort = () => {};
        setTimeout(() => {
          const error = new Error('retry me!') as ServiceError;
          error.code = 14;
          stream.emit('error', error);
        }, 3000);
        return stream;
      }));
      const stream = table.createReadStream({gaxOptions: {timeout: 2000}});
      stream.on('error', (error: ServiceError) => {
        assert.strictEqual(error.code, 14);
        assert.strictEqual(error.message, 'retry me!');
        assert.strictEqual(requestSpy.callCount, 1); // Ensures the client has not retried.
        done();
      });
    });
    it('Should respect the timeout parameter passed in for DEADLINE_EXCEEDED error', done => {
      // The timeout is 2 seconds, but the error is received after 3 seconds
      // so the client doesn't retry because more than 2 seconds have elapsed.
      const requestSpy = (table.bigtable.request = sinon.spy(() => {
        const stream = new PassThrough({
          objectMode: true,
        });
        (stream as any).abort = () => {};
        setTimeout(() => {
          const error = new Error('retry me!') as ServiceError;
          error.code = 4;
          stream.emit('error', error);
        }, 3000);
        return stream;
      }));
      const stream = table.createReadStream({gaxOptions: {timeout: 2000}});
      stream.on('error', (error: ServiceError) => {
        assert.strictEqual(error.code, 4);
        assert.strictEqual(error.message, 'retry me!');
        assert.strictEqual(requestSpy.callCount, 1); // Ensures the client has not retried.
        done();
      });
    });
    describe('retries', () => {
      let callCreateReadStream: Function;
      let emitters: EventEmitter[] | null; // = [((stream: Writable) => { stream.push([{ key: 'a' }]);
      // stream.end(); }, ...];
      let makeRetryableError: Function;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let reqOptsCalls: any[];
      let setTimeoutSpy: sinon.SinonSpy;

      /*
        setImmediate is required here to correctly mock events as they will
        come in from the request function. It is required for tests to pass,
        but it is not a problem that it is required because we never expect
        a single Node event to emit data and then emit an error. That is,
        a mock without setImmediate around the last error represents a scenario
        that will never happen.
       */
      function emitRetriableError(stream: Duplex) {
        setImmediate(() => {
          stream.emit('error', makeRetryableError());
        });
      }

      beforeEach(() => {
        FakeChunkTransformer.prototype._transform = function (
          rows: Row[],
          enc: {},
          next: Function,
        ) {
          rows.forEach(row => this.push(row));
          this.lastRowKey = rows[rows.length - 1].key;
          next();
        };

        FakeChunkTransformer.prototype._flush = (cb: Function) => {
          cb();
        };

        callCreateReadStream = (options: {}, verify: Function) => {
          table.createReadStream(options).on('end', verify).resume(); // The stream starts paused unless it has a `.data()`
          // callback.
        };

        emitters = null; // This needs to be assigned in each test case.

        makeRetryableError = () => {
          const error = new Error('retry me!') as ServiceError;
          error.code = 4;
          return error;
        };

        (sandbox.stub(FakeFilter, 'createRange') as sinon.SinonStub).callsFake(
          (start, end) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const range: any = {};
            if (start) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              range.start = (start as any).value || start;
              range.startInclusive =
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                typeof start === 'object' ? (start as any).inclusive : true;
            }
            if (end) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              range.end = (end as any).value || end;
            }
            return range;
          },
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (FakeMutation as any).convertToBytes = (value: string) => {
          return Buffer.from(value);
        };

        reqOptsCalls = [];

        setTimeoutSpy = sandbox
          .stub(global, 'setTimeout')
          .callsFake(fn => (fn as Function)());

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          reqOptsCalls.push(config.reqOpts);

          const stream = new PassThrough({
            objectMode: true,
          });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (stream as any).abort = () => {};

          setImmediate(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (emitters!.shift() as any)(stream);
          });
          return stream;
        };
      });

      afterEach(() => {
        if (setTimeoutSpy) {
          setTimeoutSpy.restore();
        }
      });

      it('should do a retry the stream is interrupted', done => {
        emitters = [
          ((stream: Writable) => {
            stream.emit('error', makeRetryableError());
            stream.end();
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.end();
          }) as {} as EventEmitter,
        ];
        callCreateReadStream(null, () => {
          assert.strictEqual(reqOptsCalls.length, 2);
          done();
        });
      });

      it('should not retry CANCELLED errors', done => {
        emitters = [
          ((stream: Writable) => {
            const cancelledError = new Error(
              'do not retry me!',
            ) as ServiceError;
            cancelledError.code = 1;
            stream.emit('error', cancelledError);
            stream.end();
          }) as {} as EventEmitter,
        ];
        callCreateReadStream(null, () => {
          assert.strictEqual(reqOptsCalls.length, 1);
          done();
        });
      });

      it('should not retry over maxRetries', done => {
        const error = new Error('retry me!') as ServiceError;
        error.code = 4;

        emitters = [
          ((stream: Writable) => {
            stream.emit('error', error);
            stream.end();
          }) as {} as EventEmitter,
        ];

        table.maxRetries = 0;
        table
          .createReadStream()
          .on('error', (err: ServiceError) => {
            assert.strictEqual(err, error);
            assert.strictEqual(reqOptsCalls.length, 1);
            done();
          })
          .on('end', done)
          .resume();
      });

      it('should have a range which starts after the last read key', done => {
        emitters = [
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ((stream: any) => {
            stream.push([{key: 'a'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.end();
          }) as {} as EventEmitter,
        ];

        const fullScan = {rowKeys: [], rowRanges: [{}]};

        callCreateReadStream(null, () => {
          assert.deepStrictEqual(reqOptsCalls[0].rows, fullScan);
          assert.deepStrictEqual(reqOptsCalls[1].rows, {
            rowKeys: [],
            rowRanges: [{start: 'a', startInclusive: false}],
          });
          done();
        });
      });

      it('should move the active range start to after the last read key', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'a'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.end();
          }) as {} as EventEmitter,
        ];

        callCreateReadStream({ranges: [{start: 'a'}]}, () => {
          assert.deepStrictEqual(reqOptsCalls[0].rows, {
            rowKeys: [],
            rowRanges: [{start: 'a', startInclusive: true}],
          });
          assert.deepStrictEqual(reqOptsCalls[1].rows, {
            rowKeys: [],
            rowRanges: [{start: 'a', startInclusive: false}],
          });
          done();
        });
      });

      it('should remove ranges which were already read', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'a'}]);
            stream.push([{key: 'b'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
          ((stream: Duplex) => {
            stream.push([{key: 'c'}]);
            stream.end();
          }) as {} as EventEmitter,
        ];

        const options = {
          ranges: [{start: 'a', end: 'b'}, {start: 'c'}],
        };

        callCreateReadStream(options, () => {
          const allRanges = [
            {start: 'a', end: 'b', startInclusive: true},
            {start: 'c', startInclusive: true},
          ];
          assert.deepStrictEqual(reqOptsCalls[0].rows, {
            rowKeys: [],
            rowRanges: allRanges,
          });
          assert.deepStrictEqual(reqOptsCalls[1].rows, {
            rowKeys: [],
            rowRanges: allRanges.slice(1),
          });
          done();
        });
      });

      it('should remove the keys which were already read', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'a'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
          ((stream: Duplex) => {
            stream.end([{key: 'c'}]);
          }) as {} as EventEmitter,
        ];

        callCreateReadStream({keys: ['a', 'b']}, () => {
          assert.strictEqual(reqOptsCalls[0].rows.rowKeys.length, 2);
          assert.strictEqual(reqOptsCalls[1].rows.rowKeys.length, 1);
          done();
        });
      });

      it('should not retry if limit is reached', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'a'}]);
            stream.push([{key: 'b'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
        ];

        const options = {
          ranges: [{start: 'a', end: 'c'}],
          limit: 2,
        };

        callCreateReadStream(options, () => {
          assert.strictEqual(reqOptsCalls.length, 1);
          done();
        });
      });

      it('should not retry if all the keys are read', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'a'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
        ];

        callCreateReadStream({keys: ['a']}, () => {
          assert.strictEqual(reqOptsCalls.length, 1);
          done();
        });
      });

      it('shouldn not retry if all the ranges are read', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'c'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
        ];

        const options = {
          ranges: [{start: 'a', end: 'c', endInclusive: true}],
        };

        callCreateReadStream(options, () => {
          assert.strictEqual(reqOptsCalls.length, 1);
          assert.deepStrictEqual(reqOptsCalls[0].rows, {
            rowKeys: [],
            rowRanges: [{start: 'a', end: 'c', startInclusive: true}],
          });
          done();
        });
      });

      it('shouldn not retry with keys and ranges that are read', done => {
        emitters = [
          ((stream: Duplex) => {
            stream.push([{key: 'a1'}]);
            stream.push([{key: 'd'}]);
            emitRetriableError(stream);
          }) as {} as EventEmitter,
        ];

        const options = {
          ranges: [{start: 'a', end: 'b'}],
          keys: ['c', 'd'],
        };

        callCreateReadStream(options, () => {
          assert.strictEqual(reqOptsCalls.length, 1);
          done();
        });
      });

      it('should retry received rst stream errors', done => {
        const rstStreamError = new Error('Received Rst_stream') as ServiceError;
        rstStreamError.code = 13;
        emitters = [
          ((stream: Duplex) => {
            stream.emit('error', rstStreamError);
          }) as {} as EventEmitter,
          ((stream: Duplex) => {
            stream.end([{key: 'a'}]);
          }) as {} as EventEmitter,
        ];

        const options = {
          keys: ['a'],
        };

        callCreateReadStream(options, () => {
          assert.strictEqual(reqOptsCalls.length, 2);
          done();
        });
      });
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'deleteTable');

        assert.deepStrictEqual(config.reqOpts, {
          name: table.name,
        });

        assert.deepStrictEqual(config.gaxOpts, {});

        callback(); // done()
      };

      table.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      table.delete(gaxOptions, assert.ifError);
    });
  });

  describe('deleteRows', () => {
    const prefix = 'a';

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'dropRowRange');
        assert.strictEqual(config.reqOpts.name, TABLE_NAME);
        assert.deepStrictEqual(config.gaxOpts, {});
        callback();
      };

      table.deleteRows(prefix, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      table.deleteRows(prefix, gaxOptions, assert.ifError);
    });

    it('should respect the row key prefix option', done => {
      const fakePrefix = 'b';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const spy = ((FakeMutation as any).convertToBytes = sinon.spy(
        () => fakePrefix,
      ));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.rowKeyPrefix, fakePrefix);
        assert.strictEqual(spy.callCount, 1);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((spy as any).getCall(0).args[0], prefix);
        done();
      };

      table.deleteRows(prefix, assert.ifError);
    });

    it('should throw if prefix is not provided', () => {
      assert.throws(() => {
        table.deleteRows(assert.ifError);
      }, /A prefix is required for deleteRows\./);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.getMetadata = (options_: any) => {
        assert.deepStrictEqual(options_.gaxOptions, {});
        done();
      };
      table.exists(assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.getMetadata = (options_: any) => {
        assert.strictEqual(options_.gaxOptions, gaxOptions);
        done();
      };
      table.exists(gaxOptions, assert.ifError);
    });

    it('should pass view = name to getMetadata', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.getMetadata = (options_: any) => {
        assert.strictEqual(options_.view, 'name');
        done();
      };
      table.exists(gaxOptions, assert.ifError);
    });

    it('should return false if error code is 5', done => {
      const error = new Error('Error.') as ServiceError;
      error.code = 5;
      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      table.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if code is not 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 'NOT-5';
      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      table.exists((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(null, {});
      };
      table.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('family', () => {
    const FAMILY_ID = 'test-family';

    it('should throw if an id is not provided', () => {
      assert.throws(() => {
        table.family();
      }, /A family id must be provided\./);
    });

    it('should create a family with the proper arguments', () => {
      const family = table.family(FAMILY_ID);
      assert(family instanceof FakeFamily);
      assert.strictEqual(family.calledWith_[0], table);
      assert.strictEqual(family.calledWith_[1], FAMILY_ID);
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const options = {
        gaxOptions: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.getMetadata = (options_: any) => {
        assert.strictEqual(options_.gaxOptions, options.gaxOptions);
        done();
      };
      table.get(options, assert.ifError);
    });

    it('should not require an options object', done => {
      table.getMetadata = (options: {}) => {
        assert.deepStrictEqual(options, {gaxOptions: undefined});
        done();
      };
      table.get(assert.ifError);
    });

    it('should auto create with error code 5', done => {
      const error = new Error('Error.') as ServiceError;
      error.code = 5;

      const options = {
        autoCreate: true,
        gaxOptions: {},
      };

      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.create = (options_: any, callback: Function) => {
        assert.strictEqual(options_.gaxOptions, options.gaxOptions);
        callback(); // done()
      };

      table.get(options, done);
    });

    it('should not auto create without error code 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 'NOT-5';

      const options = {
        autoCreate: true,
      };

      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };

      table.create = () => {
        throw new Error('Should not create.');
      };

      table.get(options, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not auto create unless requested', done => {
      const error = new Error('Error.') as ServiceError;
      error.code = 5;

      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };

      table.create = () => {
        throw new Error('Should not create.');
      };

      table.get((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');
      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      table.get((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const apiResponse = {};
      table.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(null, apiResponse);
      };
      table.get((err: Error, table_: {}, apiResponse_: {}) => {
        assert.ifError(err);
        assert.strictEqual(table_, table);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'getIamPolicy');
        assert.strictEqual(config.reqOpts.resource, table.name);
        assert.strictEqual(config.reqOpts.requestedPolicyVersion, undefined);
        assert.strictEqual(config.gaxOpt, undefined);
        done();
      };
      table.getIamPolicy(assert.ifError);
    });

    it('should accept options', done => {
      const requestedPolicyVersion = 0;
      const gaxOptions = {};
      const options = {gaxOptions, requestedPolicyVersion};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        assert.strictEqual(
          config.reqOpts.options.requestedPolicyVersion,
          requestedPolicyVersion,
        );
        done();
      };
      table.getIamPolicy(options, assert.ifError);
    });

    it('should return error', done => {
      const error = new Error('error');
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };
      table.getIamPolicy((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should call decodePolicyEtag', () => {
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(null, {});
      };
      const spy = sandbox.stub(Table, 'decodePolicyEtag');
      table.getIamPolicy(assert.ifError);
      assert.strictEqual(spy.calledOnce, true);
      spy.restore();
    });
  });

  describe('getReplicationStates', () => {
    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.getMetadata = (options: any) => {
        assert.strictEqual(options.gaxOptions, gaxOptions);
        done();
      };

      table.getReplicationStates(gaxOptions, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      const response = {};
      table.getMetadata = (options: {}, callback: Function) => {
        callback(error, response);
      };
      table.getReplicationStates((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return a map of cluster states', done => {
      const response = {
        clusterStates: {
          cluster1: 'READY',
          cluster2: 'INITIALIZING',
        },
      };
      table.getMetadata = (options: {}, callback: Function) => {
        callback(null, response);
      };
      table.getReplicationStates(
        (err: Error, clusterStates: Map<string, string>) => {
          assert.ifError(err);
          assert(clusterStates instanceof Map);
          assert.strictEqual(clusterStates.size, 2);
          assert.strictEqual(clusterStates.get('cluster1'), 'READY');
          assert.strictEqual(clusterStates.get('cluster2'), 'INITIALIZING');
          done();
        },
      );
    });
  });

  describe('getFamilies', () => {
    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.getMetadata = (options: any) => {
        assert.strictEqual(options.gaxOptions, gaxOptions);
        done();
      };

      table.getFamilies(gaxOptions, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      const response = {};
      table.getMetadata = (options: {}, callback: Function) => {
        callback(error, response);
      };
      table.getFamilies((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an array of Family objects', done => {
      const metadata = {
        a: 'b',
      };

      const response = {
        columnFamilies: {
          test: metadata,
        },
      };

      const fakeFamily = {} as Family;

      table.getMetadata = (options: {}, callback: Function) => {
        callback(null, response);
      };
      sandbox.stub(table, 'family').callsFake(id => {
        assert.strictEqual(id, 'test');
        return fakeFamily;
      });
      table.getFamilies((err: Error, families: Family[], apiResponse: {}) => {
        assert.ifError(err);
        const family = families[0];
        assert.strictEqual(family, fakeFamily);
        assert.strictEqual(family.metadata, metadata);
        assert.strictEqual(apiResponse, response.columnFamilies);
        done();
      });
    });
  });

  describe('waitForReplication', () => {
    it('should return the error to the callback', done => {
      const error = new Error('err');

      table.bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };

      table.waitForReplication((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should call checkConsistency', done => {
      const consistencyToken = 'sample-token12345';

      table.generateConsistencyToken = (callback: Function) => {
        callback(null, consistencyToken);
      };

      table.checkConsistency = (token: string, callback: Function) => {
        assert.strictEqual(token, consistencyToken);
        callback(null, true);
      };

      table.waitForReplication(done);
    });

    describe('retries', () => {
      let clock: sinon.SinonFakeTimers;
      let setTimeoutSpy: sinon.SinonSpy;
      let clearTimeoutSpy: sinon.SinonSpy;
      let checkConsistencySpy: sinon.SinonSpy;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let responses: any[] = [];

      beforeEach(() => {
        clock = sinon.useFakeTimers({
          toFake: ['setTimeout', 'clearTimeout'],
        });
        setTimeoutSpy = sinon.spy(global, 'setTimeout');
        clearTimeoutSpy = sinon.spy(global, 'clearTimeout');
        checkConsistencySpy = sinon.spy(table, 'checkConsistency');

        table.bigtable.request = (config: {}, callback: Function) => {
          responses.shift()(config, callback);
        };
      });

      afterEach(() => {
        clock.restore();
      });

      it('should return true if token is consistent', done => {
        responses = [
          (config: {}, callback: Function) =>
            callback(null, {consistencyToken: 'sample-token12345'}),
          (config: {}, callback: Function) =>
            callback(null, {consistent: true}),
        ];

        table.waitForReplication((err: Error, res: {}) => {
          // Checks that a 10 minute timer was set.
          setTimeoutSpy.calledWith(sinon.match.func, 10 * 60 * 1000);

          // check checkConsistencySpy called for first time
          assert.strictEqual(checkConsistencySpy.callCount, 1);

          // Checks that clearInterval was called.
          assert.strictEqual(clearTimeoutSpy.callCount, 1);

          assert.strictEqual(res, true);
          assert.ifError(err);
          done();
        });

        clock.runAll();
      });

      it('should retry checkConsistency', done => {
        responses = [
          (config: {}, callback: Function) =>
            callback(null, {consistencyToken: 'sample-token12345'}),
          (config: {}, callback: Function) =>
            callback(null, {consistent: false}),
          (config: {}, callback: Function) =>
            callback(null, {consistent: true}),
        ];

        table.waitForReplication((err: Error, response: {}) => {
          // Checks that a 10 minute timer was set.
          setTimeoutSpy.calledWith(sinon.match.func, 10 * 60 * 1000);

          // check checkConsistencySpy called for first time
          //checkConsistencySpy.callOnce;

          setTimeoutSpy.calledWith(sinon.match.func, 5000);

          // check checkConsistencySpy called twice after 5seconds
          clock.tick(5010);
          assert.strictEqual(checkConsistencySpy.callCount, 2);

          // Checks that clearInterval was called.
          assert.ok(setTimeoutSpy.called);
          assert.ifError(err);
          assert.strictEqual(response, true);
          done();
        });

        clock.runAll();
      });

      it('should return false after 10 min if inconsistency repeats', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any, callback: Function) => {
          if (config.method === 'generateConsistencyToken') {
            return callback(null, {consistencyToken: 'sample-token12345'});
          }
          if (config.method === 'checkConsistency') {
            return callback(null, {consistent: false});
          }
        };

        table.waitForReplication((err: Error, response: {}) => {
          assert.ifError(err);
          assert.ok(setTimeoutSpy.called);
          assert.strictEqual(response, false);
          done();
        });

        clock.runAll();
      });

      it('should return error if checkonsistency returns error', done => {
        const error = new Error('consistency-check error');

        responses = [
          (config: {}, callback: Function) =>
            callback(null, {consistencyToken: 'sample-token12345'}),
          (config: {}, callback: Function) => callback(error),
        ];

        table.waitForReplication((err: Error, res: {}) => {
          assert.ok(clearTimeoutSpy.called);
          assert.strictEqual(checkConsistencySpy.callCount, 1);
          assert.strictEqual(err, error);
          assert.strictEqual(res, undefined);
          done();
        });
      });
    });
  });

  describe('generateConsistencyToken', () => {
    it('should provide proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'generateConsistencyToken');
        assert.strictEqual(config.reqOpts.name, table.name);
        done();
      };
      table.generateConsistencyToken(assert.ifError);
    });

    it('should return a consistencyToken', done => {
      const cToken = 'sample-token-123456';
      const response = {
        consistencyToken: cToken,
      };

      table.bigtable.request = (config: {}, callback: Function) => {
        callback(null, response);
      };

      table.generateConsistencyToken((err: Error, token: string) => {
        assert.ifError(err);
        assert.strictEqual(token, cToken);
        done();
      });
    });

    it('should return error', done => {
      const error = new Error('err');
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };

      table.generateConsistencyToken((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('checkConsistency', () => {
    it('should provide the proper request options', done => {
      const cToken = 'consistency-token-123';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'checkConsistency');
        assert.strictEqual(config.reqOpts.name, table.name);
        assert.strictEqual(config.reqOpts.consistencyToken, cToken);
        done();
      };

      table.checkConsistency(cToken, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('err');

      it('should return the error to the callback', done => {
        table.bigtable.request = (config: {}, callback: Function) => {
          callback(error);
        };

        table.checkConsistency('cToken', (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      it('should return true if consistent', done => {
        table.bigtable.request = (config: {}, callback: Function) => {
          callback(null, {consistent: true});
        };

        table.checkConsistency('', (err: Error, resp: {}) => {
          assert.ifError(err);
          assert.strictEqual(resp, true);
          done();
        });
      });

      it('should return false if not consistent', done => {
        table.bigtable.request = (config: {}, callback: Function) => {
          callback(null, {consistent: false});
        };
        table.checkConsistency('', (err: Error, resp: {}) => {
          assert.ifError(err);
          assert.strictEqual(resp, false);
          done();
        });
      });
    });
  });

  describe('getMetadata', () => {
    const views = {
      unspecified: 0,
      name: 1,
      schema: 2,
      full: 4,
    } as {[index: string]: number};
    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (Table as any).VIEWS = views;
    });

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'getTable');

        assert.strictEqual(config.reqOpts.name, table.name);
        assert.strictEqual(config.reqOpts.view, views.unspecified);

        assert.strictEqual(config.gaxOpts, undefined);

        done();
      };

      table.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const options = {
        gaxOptions: {},
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      table.getMetadata(options, assert.ifError);
    });

    Object.keys(views).forEach(view => {
      it('should set the "' + view + '" view', done => {
        const options = {
          view,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          assert.strictEqual(config.reqOpts.view, views[view]);
          done();
        };
        table.getMetadata(options, assert.ifError);
      });
    });

    it('should update the metadata', done => {
      const response = {};
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(null, response);
      };
      table.getMetadata((err: Error, metadata: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(table.metadata, response);
        done();
      });
    });

    it('should execute callback with original arguments', done => {
      const args = [{}, {}, {}];
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(...args);
      };
      table.getMetadata((...args: Array<{}>) => {
        assert.deepStrictEqual([].slice.call(args), args);
        done();
      });
    });
  });

  describe('getRows', () => {
    describe('success', () => {
      let createReadStreamInternal: SinonSpy<[], PassThrough>;
      const fakeRows = [
        {key: 'c', data: {}},
        {key: 'd', data: {}},
      ];

      beforeEach(() => {
        createReadStreamInternal = sinon.spy(() => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            fakeRows.forEach(row => {
              stream.push(row);
            });

            stream.push(null);
          });

          return stream;
        });
        Table = getTableMock(createReadStreamInternal);
        INSTANCE = {
          bigtable: {
            _metricsConfigManager: new FakeMetricsConfigManager(
              [],
            ) as ClientSideMetricsConfigManager,
          } as Bigtable,
          name: 'a/b/c/d',
        } as inst.Instance;
        TABLE_NAME = INSTANCE.name + '/tables/' + TABLE_ID;
        table = new Table(INSTANCE, TABLE_ID);
      });

      it('should return the rows to the callback', done => {
        const options = {};

        table.getRows(options, (err: Error, rows: Row[]) => {
          assert.ifError(err);
          assert.deepStrictEqual(rows, fakeRows);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const spy = createReadStreamInternal.getCall(0);
          assert.strictEqual((spy.args as any)[2], options);
          done();
        });
      });

      it('should optionally accept options', done => {
        table.getRows((err: Error, rows: Row[]) => {
          assert.ifError(err);
          assert.deepStrictEqual(rows, fakeRows);
          done();
        });
      });
    });

    describe('error', () => {
      let createReadStreamInternal: SinonSpy<[], PassThrough>;
      const error = new Error('err');

      beforeEach(() => {
        createReadStreamInternal = sinon.spy(() => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.emit('error', error);
          });

          return stream;
        });
        Table = getTableMock(createReadStreamInternal);
        INSTANCE = {
          bigtable: {
            _metricsConfigManager: new FakeMetricsConfigManager(
              [],
            ) as ClientSideMetricsConfigManager,
          } as Bigtable,
          name: 'a/b/c/d',
        } as inst.Instance;
        TABLE_NAME = INSTANCE.name + '/tables/' + TABLE_ID;
        table = new Table(INSTANCE, TABLE_ID);
      });

      it('should return the error to the callback', done => {
        table.getRows((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

  describe('insert', () => {
    it('should create an "insert" mutation', done => {
      const fakeEntries = [
        {
          key: 'a',
          data: {},
        },
        {
          key: 'b',
          data: {},
        },
      ];

      table.mutate = (entries: Array<{}>, options: {}, callback: Function) => {
        assert.deepStrictEqual(entries[0], {
          key: fakeEntries[0].key,
          data: fakeEntries[0].data,
          method: FakeMutation.methods.INSERT,
        });

        assert.deepStrictEqual(entries[1], {
          key: fakeEntries[1].key,
          data: fakeEntries[1].data,
          method: FakeMutation.methods.INSERT,
        });

        callback();
      };

      table.insert(fakeEntries, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.mutate = (entries: {}, options: any) => {
        assert.strictEqual(options.gaxOptions, gaxOptions);
        done();
      };
      table.insert([], gaxOptions, assert.ifError);
    });
  });

  describe('mutate', () => {
    const entries = [{}, {}];
    const fakeEntries = [{}, {}];
    let parseSpy: sinon.SinonSpy;

    beforeEach(() => {
      parseSpy = FakeMutation.parse = sinon.spy(value => {
        const entryIndex = entries.indexOf(value);
        return fakeEntries[entryIndex];
      });
    });

    it('should provide the proper request options', done => {
      const stream = new PassThrough({objectMode: true});

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableClient');
        assert.strictEqual(config.method, 'mutateRows');

        assert.strictEqual(config.reqOpts.tableName, TABLE_NAME);
        assert.strictEqual(config.reqOpts.appProfileId, undefined);
        assert.deepStrictEqual(config.reqOpts.entries, fakeEntries);

        assert.strictEqual(parseSpy.callCount, 2);
        assert.strictEqual(parseSpy.getCall(0).args[0], entries[0]);
        assert.strictEqual(parseSpy.getCall(1).args[0], entries[1]);

        setImmediate(done);

        return stream;
      };

      table.mutate(entries, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      table.mutate(entries, {gaxOptions}, assert.ifError);
    });

    it('should use an appProfileId', done => {
      const bigtableInstance = table.bigtable;
      bigtableInstance.appProfileId = 'app-profile-id-12345';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtableInstance.request = (config: any) => {
        assert.strictEqual(
          config.reqOpts.appProfileId,
          bigtableInstance.appProfileId,
        );
        done();
      };
      table.mutate(done);
    });

    it('should parse the mutations', done => {
      table.bigtable.request = () => {
        assert.strictEqual(FakeMutation.parse.called, true);
        done();
      };
      table.mutate(entries, done);
    });

    it('should allow raw mutations', done => {
      table.bigtable.request = () => {
        assert.strictEqual(FakeMutation.parse.called, false);
        done();
      };
      table.mutate(entries, {rawMutation: true}, done);
    });

    describe('error', () => {
      describe('pre-request errors', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          table.bigtable.request = () => {
            const stream = new PassThrough({
              objectMode: true,
            });

            setImmediate(() => {
              stream.emit('error', error);
            });

            return stream;
          };
        });

        it('should return error', done => {
          table.mutate(entries, (err: Error) => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('API errors', () => {
        const error = new Error('err');

        beforeEach(() => {
          table.bigtable.request = () => {
            const stream = new PassThrough({
              objectMode: true,
            });

            setImmediate(() => {
              stream.emit('error', error);
            });

            return stream;
          };
        });

        it('should return the error to the callback', done => {
          table.maxRetries = 0;
          table.mutate(entries, (err: Error) => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('mutation errors', () => {
        const fakeStatuses = [
          {
            index: 0,
            status: {
              code: 1,
              message: 'CANCELLED',
            },
          },
          {
            index: 1,
            status: {
              code: 3,
              message: 'INVALID_ARGUMENT',
            },
          },
        ];

        beforeEach(() => {
          table.bigtable.request = () => {
            const stream = new PassThrough({objectMode: true});
            stream.push({entries: fakeStatuses});
            setImmediate(() => {
              stream.end();
            });
            return stream;
          };
        });

        it('should return a PartialFailureError', done => {
          const newEntries = [
            {
              key: 'a',
            },
            {
              key: 'b',
            },
          ];
          table.mutate(newEntries, (err: Error) => {
            assert.strictEqual(err.name, 'PartialFailureError');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.deepStrictEqual((err as any).errors, [
              Object.assign({
                entry: newEntries[0],
                code: fakeStatuses[0].status.code,
                message: fakeStatuses[0].status.message,
              }),
              Object.assign({
                entry: newEntries[1],
                code: fakeStatuses[1].status.code,
                message: fakeStatuses[1].status.message,
              }),
            ]);

            done();
          });
        });
      });
    });

    describe('success', () => {
      const fakeStatuses = [
        {
          status: {
            code: 0,
          },
        },
        {
          status: {
            code: 0,
          },
        },
      ];

      beforeEach(() => {
        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.end({entries: fakeStatuses});
          });

          return stream;
        };
      });

      it('should execute callback', done => {
        table.maxRetries = 0;
        table.mutate(entries, done);
      });
    });

    describe('retries', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let fakeStatuses: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let entryRequests: any;
      const requestArgs: RequestOptions[] = [];

      beforeEach(() => {
        entryRequests = [];
        fakeStatuses = [
          [
            {
              index: 0,
              status: {
                code: 0,
              },
            },
            {
              index: 1,
              status: {
                code: 4,
              },
            },
          ],
          [
            {
              index: 0,
              status: {
                code: 0,
              },
            },
          ],
        ];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          requestArgs.push(JSON.parse(JSON.stringify(config)));
          entryRequests.push(config.reqOpts.entries);
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.end({entries: fakeStatuses.shift()});
          });

          return stream;
        };
      });

      it('should send attempt header', done => {
        table.mutate(entries, () => {
          assert.strictEqual(requestArgs.length, 2);
          assert.strictEqual(
            (requestArgs[0].gaxOpts as any)['otherArgs']['headers'][
              'bigtable-attempt'
            ],
            0,
          );
          assert.strictEqual(
            (requestArgs[1].gaxOpts as any)['otherArgs']['headers'][
              'bigtable-attempt'
            ],
            1,
          );
          done();
        });
      });

      it('should succeed after a retry', done => {
        table.maxRetries = 1;
        table.mutate(entries, done);
      });

      it('should retry the same failed entry', done => {
        table.maxRetries = 1;
        table.mutate(entries, () => {
          assert.strictEqual(entryRequests[0].length, 2);
          assert.strictEqual(entryRequests[1].length, 1);
          assert.strictEqual(entryRequests[0][1], entryRequests[1][0]);
          done();
        });
      });
    });

    describe('rpc level retries', () => {
      let emitters: EventEmitter[]; // = [((stream: Writable) => { stream.push([{ key: 'a' }]);
      let requestArgs: RequestOptions[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let entryRequests: any;

      beforeEach(() => {
        emitters = []; // This needs to be assigned in each test case.

        requestArgs = [];
        entryRequests = [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        table.bigtable.request = (config: any) => {
          requestArgs.push(JSON.parse(JSON.stringify(config)));
          entryRequests.push(config.reqOpts.entries);
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            (emitters!.shift() as any)(stream);
          });

          return stream;
        };
      });

      it('should send back errors for each pending entry', done => {
        const mutateEntries = [
          {
            key: 'a',
            method: 'insert',
            data: {},
          },
          {
            key: 'b',
            method: 'insert',
            data: {},
          },
        ];
        const unretriableError = new Error('not retryable') as ServiceError;
        unretriableError.code = 3; // INVALID_ARGUMENT
        emitters = [
          ((stream: Writable) => {
            stream.emit('data', {
              entries: [
                {
                  index: 0,
                  status: {
                    details: [],
                    code: 0,
                    message: 'Received data',
                  },
                },
              ],
            });
            stream.emit('error', unretriableError);
          }) as {} as EventEmitter,
        ];
        table.maxRetries = 3;
        table.mutate(
          mutateEntries,
          (err: ServiceError & {errors?: ServiceError[]}) => {
            try {
              assert.strictEqual(err.code, 3);
              assert.strictEqual(err.message, 'not retryable');
              assert(err.errors);
              assert.strictEqual(err.errors.length, 1);
              assert.strictEqual(err.errors[0].code, 3);
              assert.strictEqual(err.errors[0].message, 'not retryable');
              done();
            } catch (e) {
              done(e);
            }
          },
        );
      });
      it('should not retry unretriable errors', done => {
        const unretriableError = new Error('not retryable') as ServiceError;
        unretriableError.code = 3; // INVALID_ARGUMENT
        emitters = [
          ((stream: Writable) => {
            stream.emit('error', unretriableError);
          }) as {} as EventEmitter,
        ];
        table.maxRetries = 1;
        table.mutate(entries, () => {
          assert.strictEqual(entryRequests.length, 1);
          done();
        });
      });

      it('should retry retryable errors', done => {
        const error = new Error('retryable') as ServiceError;
        error.code = 14; // Unavailable
        emitters = [
          ((stream: Writable) => {
            stream.emit('error', error);
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.end();
          }) as {} as EventEmitter,
        ];
        table.maxRetries = 1;
        table.mutate(entries, () => {
          assert.strictEqual(entryRequests.length, 2);
          done();
        });
      });

      it('should not retry more than maxRetries times', done => {
        const error = new Error('retryable') as ServiceError;
        error.code = 14; // Unavailable
        emitters = [
          ((stream: Writable) => {
            stream.emit('error', error);
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.emit('error', error);
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.end();
          }) as {} as EventEmitter,
        ];
        table.maxRetries = 1;
        table.mutate(entries, () => {
          assert.strictEqual(entryRequests.length, 2);
          done();
        });
      });

      it('should send attempt header', done => {
        const error = new Error('retryable') as ServiceError;
        error.code = 14; // Unavailable
        emitters = [
          ((stream: Writable) => {
            stream.emit('error', error);
          }) as {} as EventEmitter,
          ((stream: Writable) => {
            stream.end();
          }) as {} as EventEmitter,
        ];
        table.maxRetries = 1;
        table.mutate(entries, () => {
          assert.strictEqual(requestArgs.length, 2);
          assert.strictEqual(
            (requestArgs[0].gaxOpts as any)['otherArgs']['headers'][
              'bigtable-attempt'
            ],
            0,
          );
          assert.strictEqual(
            (requestArgs[1].gaxOpts as any)['otherArgs']['headers'][
              'bigtable-attempt'
            ],
            1,
          );
          done();
        });
      });
    });
  });

  describe('row', () => {
    const KEY = 'test-row';

    it('should throw if a key is not provided', () => {
      assert.throws(() => {
        table.row();
      }, /A row key must be provided\./);
    });

    it('should return a Row object', () => {
      const row = table.row(KEY);
      assert(row instanceof FakeRow);
      assert.strictEqual(row.calledWith_[0], table);
      assert.strictEqual(row.calledWith_[1], KEY);
    });
  });

  describe('sampleRowKeys', () => {
    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      table.sampleRowKeysStream = (gaxOptions_: {}) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };

      table.sampleRowKeys(gaxOptions);
    });

    describe('success', () => {
      const fakeKeys = [
        {
          key: 'a',
          offset: 10,
        },
        {
          key: 'b',
          offset: 20,
        },
      ];

      beforeEach(() => {
        table.sampleRowKeysStream = sinon.spy(() => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            fakeKeys.forEach(key => {
              stream.push(key);
            });

            stream.push(null);
          });

          return stream;
        });
      });

      it('should return the keys to the callback', done => {
        table.sampleRowKeys((err: Error, keys: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(keys, fakeKeys);
          done();
        });
      });
    });

    describe('error', () => {
      const error = new Error('err');

      beforeEach(() => {
        table.sampleRowKeysStream = sinon.spy(() => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.emit('error', error);
          });

          return stream;
        });
      });

      it('should return the error to the callback', done => {
        table.sampleRowKeys((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

  describe('sampleRowKeysStream', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableClient');
        assert.strictEqual(config.method, 'sampleRowKeys');
        assert.strictEqual(config.reqOpts.tableName, TABLE_NAME);
        assert.deepStrictEqual(config.gaxOpts, {});

        setImmediate(done);

        return new PassThrough({
          objectMode: true,
        });
      };

      table.sampleRowKeysStream();
    });

    it('should use an appProfileId', done => {
      const bigtableInstance = table.bigtable;
      bigtableInstance.appProfileId = 'app-profile-id-12345';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtableInstance.request = (config: any) => {
        assert.strictEqual(
          config.reqOpts.appProfileId,
          bigtableInstance.appProfileId,
        );
        done();
      };

      table.sampleRowKeysStream(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.gaxOpts, gaxOptions);

        setImmediate(done);

        return new PassThrough({
          objectMode: true,
        });
      };

      table.sampleRowKeysStream(gaxOptions);
    });

    describe('success', () => {
      const fakeKeys = [
        {
          rowKey: 'a',
          offsetBytes: 10,
        },
        {
          rowKey: 'b',
          offsetByte: 20,
        },
      ];

      beforeEach(() => {
        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            fakeKeys.forEach(key => {
              stream.push(key);
            });

            stream.push(null);
          });

          return stream;
        };
      });

      it('should stream key objects', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const keys: any[] = [];

        table
          .sampleRowKeysStream()
          .on('error', done)
          .on('data', (key: {}) => {
            keys.push(key);
          })
          .on('end', () => {
            assert.strictEqual(keys[0].key, fakeKeys[0].rowKey);
            assert.strictEqual(keys[0].offset, fakeKeys[0].offsetBytes);
            assert.strictEqual(keys[1].key, fakeKeys[1].rowKey);
            assert.strictEqual(keys[1].offset, fakeKeys[1].offsetBytes);
            done();
          });
      });
    });

    describe('error', () => {
      const error = new Error('err');

      beforeEach(() => {
        table.bigtable.request = () => {
          const stream = new PassThrough({
            objectMode: true,
          });

          setImmediate(() => {
            stream.emit('error', error);
          });

          return stream;
        };
      });

      it('should emit an error event', done => {
        table
          .sampleRowKeysStream()
          .on('error', (err: Error) => {
            assert.strictEqual(err, error);
            done();
          })
          .on('data', done);
      });
    });
  });

  describe('setIamPolicy', () => {
    const policy = {};
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'setIamPolicy');
        assert.strictEqual(config.reqOpts.resource, table.name);
        assert.strictEqual(config.reqOpts.policy, policy);
        assert.strictEqual(config.gaxOpt, undefined);
        done();
      };
      table.setIamPolicy(policy, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      table.setIamPolicy(policy, gaxOptions, assert.ifError);
    });

    it('should pass policy to bigtable.request', done => {
      const policy: tblTypes.Policy = {
        bindings: [
          {
            role: 'roles/bigtable.viewer',
            members: ['user:mike@example.com', 'group:admins@example.com'],
            condition: {
              title: 'expirable access',
              description: 'Does not grant access after Sep 2020',
              expression: "request.time <timestamp('2020-10-01T00:00:00.000Z')",
            },
          },
        ],
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.policy, policy);
        done();
      };
      table.setIamPolicy(policy, assert.ifError);
    });

    it('should encode policy etag', done => {
      const policy = {etag: 'ABS'};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.policy.etag,
          Buffer.from(policy.etag),
        );
        done();
      };
      table.setIamPolicy(policy, assert.ifError);
    });

    it('should return error', done => {
      const error = new Error('error');
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };
      table.setIamPolicy(policy, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should call decodePolicyEtag', () => {
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(null, {});
      };
      const spy = sandbox.stub(Table, 'decodePolicyEtag');
      table.setIamPolicy(policy, assert.ifError);
      assert.strictEqual(spy.calledOnce, true);
    });
  });

  describe('testIamPermissions', () => {
    const permissions = 'bigtable.tables.get';
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'testIamPermissions');
        assert.strictEqual(config.reqOpts.resource, table.name);
        assert.deepStrictEqual(config.reqOpts.permissions, [permissions]);
        assert.strictEqual(config.gaxOpt, undefined);
        done();
      };
      table.testIamPermissions(permissions, assert.ifError);
    });

    it('should accept permissions as array', done => {
      const permissions = ['bigtable.tables.get', 'bigtable.tables.list'];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.permissions, permissions);
        done();
      };
      table.testIamPermissions(permissions, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      table.testIamPermissions(permissions, gaxOptions, assert.ifError);
    });

    it('should unpack permissions from resp object', done => {
      const testPermissions = ['bigtable.tables.get', 'bigtable.tables.list'];
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(null, {permissions: testPermissions});
      };
      table.testIamPermissions(
        testPermissions,
        (err: Error, permissions: {}) => {
          assert.ifError(err);
          assert.strictEqual(Array.isArray(permissions), true);
          assert.deepStrictEqual(permissions, testPermissions);
          done();
        },
      );
    });

    it('should return error', done => {
      const permission = 'bigtable.tables.get';
      const error = new Error('error');
      table.bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };
      table.testIamPermissions(permission, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('decodePolicyEtag', () => {
    it('should return policy with etag decoded to string', () => {
      const etagString = 'ABC';
      const policy = {
        etag: Buffer.from(etagString),
      };
      assert.strictEqual(Table.decodePolicyEtag(policy).etag, etagString);
    });
  });

  describe('truncate', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'dropRowRange');
        assert.strictEqual(config.reqOpts.name, TABLE_NAME);
        assert.strictEqual(config.reqOpts.deleteAllDataFromTable, true);
        assert.deepStrictEqual(config.gaxOpts, {});
        callback();
      };

      table.truncate(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      table.truncate(gaxOptions, assert.ifError);
    });
  });
});
