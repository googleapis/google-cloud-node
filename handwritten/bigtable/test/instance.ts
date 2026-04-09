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
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import {ServiceError} from 'google-gax';
import * as snapshot from 'snap-shot-it';
import {Readable} from 'stream';
import * as inst from '../src/instance';
import {AppProfile, AppProfileOptions} from '../src/app-profile';
import {Cluster, CreateClusterOptions} from '../src/cluster';
import {Family} from '../src/family';
import {
  Policy,
  Table,
  GetIamPolicyOptions,
  GetTablesOptions,
} from '../src/table';
import {Bigtable, RequestOptions} from '../src';
import {PassThrough} from 'stream';
import * as pumpify from 'pumpify';
import {FakeCluster} from '../system-test/common';
import {
  BigtableDate,
  BigtableMap,
  QueryResultRow,
  SqlValue,
  Struct,
} from '../src/execute-query/values';
import * as SqlTypes from '../src/execute-query/types';
import {RestoreTableConfig} from '../src/backup';
import {Options} from './cluster';
import {createClusterOptionsList} from './constants/cluster';
import {google} from '../protos/protos';
import {PreciseDate} from '@google-cloud/precise-date';
import Long = require('long');
import {
  createMetadata,
  createPreparedStatement,
  createPrepareQueryResponse,
  createProtoRows,
  pbType,
} from './utils/proto-bytes';
import {PreparedStatement} from '../src/execute-query/preparedstatement';
import * as SqlValues from '../src/execute-query/values';

const concat = require('concat-stream');

const sandbox = sinon.createSandbox();

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promisifyAll(klass: Function, options: any) {
    if (klass.name !== 'Instance') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'appProfile',
      'cluster',
      'table',
      'getBackupsStream',
      'getTablesStream',
      'getAppProfilesStream',
      'view',
    ]);
  },
});

class FakeAppProfile extends AppProfile {
  calledWith_: Array<{}>;
  constructor(...args: [inst.Instance, string]) {
    super(args[0], args[1]);
    this.calledWith_ = args;
  }
}

class FakeBackup {}

class FakeFamily extends Family {
  calledWith_: Array<{}>;
  constructor(...args: [Table, string]) {
    super(args[0], args[1]);
    this.calledWith_ = args;
  }
}

class FakeTable extends Table {
  calledWith_: Array<{}>;
  VIEWS?: {[index: string]: number};
  constructor(...args: [inst.Instance, string]) {
    super(args[0], args[1]);
    this.calledWith_ = args;
  }
}

// convenience function for ExecuteQuery tests
function executeQueryResultWithMetadata(
  instance: any,
  preparedStatement: PreparedStatement | null,
  callback: (...args: any[]) => void,
): void {
  const stream = instance.createExecuteQueryStream({preparedStatement});
  stream.on('error', callback!).pipe(
    concat((rows: QueryResultRow[]) => {
      const metadata = stream.getMetadata();
      if (metadata === null) {
        callback!(new Error('Server error - did not receive metadata.'));
      } else {
        callback!(null, rows, metadata);
      }
    }),
  );
}

describe('Bigtable/Instance', () => {
  const INSTANCE_ID = 'my-instance';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BIGTABLE = {
    projectName: 'projects/my-project',
    projectId: 'my-project',
    request: () => {},
  } as Bigtable;
  const INSTANCE_NAME = `${BIGTABLE.projectName}/instances/${INSTANCE_ID}`;
  const APP_PROFILE_ID = 'my-app-profile';
  const CLUSTER_ID = 'my-cluster';
  let Instance: typeof inst.Instance;
  let instance: inst.Instance;

  before(() => {
    Instance = proxyquire('../src/instance.js', {
      '@google-cloud/promisify': fakePromisify,
      './app-profile.js': {AppProfile: FakeAppProfile},
      './backup.js': {Backup: FakeBackup},
      './cluster.js': {Cluster: FakeCluster},
      './family.js': {Family: FakeFamily},
      './table.js': {Table: FakeTable},
      pumpify,
    }).Instance;
  });

  beforeEach(() => {
    instance = new Instance(BIGTABLE, INSTANCE_ID);
  });

  afterEach(() => sandbox.restore());

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize Bigtable instance', () => {
      assert.strictEqual(instance.bigtable, BIGTABLE);
    });

    it('should create full ID from name', () => {
      assert.strictEqual(instance.name, INSTANCE_NAME);
    });

    it('should localize name', () => {
      assert.strictEqual(instance.id, INSTANCE_ID);
    });

    it('should leave full instance name unaltered and localize the id from the name', () => {
      const instance = new Instance(BIGTABLE, INSTANCE_NAME);
      assert.strictEqual(instance.name, INSTANCE_NAME);
      assert.strictEqual(instance.id, INSTANCE_ID);
    });

    it('should throw if instance id in wrong format', () => {
      const id = `instances/${INSTANCE_ID}`;
      assert.throws(() => {
        new Instance(BIGTABLE, id);
      }, Error);
    });
  });

  describe('getTypeType_', () => {
    const types = {
      unspecified: 0,
      production: 1,
      development: 2,
    } as {[index: string]: number};

    it('should default to unspecified', () => {
      assert.strictEqual(Instance.getTypeType_(), types.unspecified);
      assert.strictEqual(
        Instance.getTypeType_('not-real-type'),
        types.unspecified,
      );
    });

    it('should lowercase a type', () => {
      assert.strictEqual(Instance.getTypeType_('PRODUCTION'), types.production);
    });

    Object.keys(types).forEach(type => {
      it(`should get the storage type for "${type}"`, () => {
        assert.strictEqual(Instance.getTypeType_(type), types[type]);
      });
    });
  });

  describe('create', () => {
    it('should call createInstance from bigtable', done => {
      const options = {} as inst.InstanceOptions;
      (instance.bigtable.createInstance as Function) = (
        id: string,
        options_: {},
        callback: Function,
      ) => {
        assert.strictEqual(id, instance.id);
        assert.strictEqual(options_, options);
        callback(); // done()
      };
      instance.create(options, done);
    });
  });

  describe('createAppProfile', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'createAppProfile');
        assert.strictEqual(config.reqOpts.parent, INSTANCE_NAME);
        assert.strictEqual(config.reqOpts.appProfileId, APP_PROFILE_ID);
        assert.strictEqual(config.gaxOpts, undefined);
        done();
      };
      instance.createAppProfile(
        APP_PROFILE_ID,
        {routing: 'any'},
        assert.ifError,
      );
    });

    it('should throw if the routing option is not provided', () => {
      assert.throws(
        instance.createAppProfile.bind(null, APP_PROFILE_ID, assert.ifError),
        /An app profile must contain a routing policy\./,
      );
    });

    it('should accept gaxOptions', done => {
      const options = {
        routing: 'any',
        gaxOptions: {},
      } as AppProfileOptions;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };
      instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
    });

    describe('should respect the routing option with', () => {
      const cluster = new FakeCluster({} as inst.Instance, CLUSTER_ID);

      it("an 'any' value", done => {
        const options = {
          routing: 'any',
        } as AppProfileOptions;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.deepStrictEqual(
            config.reqOpts.appProfile.multiClusterRoutingUseAny,
            {},
          );
          done();
        };
        instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
      });

      it('a cluster value', done => {
        const options = {routing: cluster};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.deepStrictEqual(
            config.reqOpts.appProfile.singleClusterRouting,
            {clusterId: CLUSTER_ID},
          );
          done();
        };
        instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
      });

      it('a set of cluster objects', done => {
        const clusterIds = ['my-cluster1', 'my-cluster2'];
        const clusters = clusterIds.map(
          cluster => new FakeCluster(instance, cluster),
        );
        const options = {routing: new Set(clusters)};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.deepStrictEqual(
            config.reqOpts.appProfile.multiClusterRoutingUseAny,
            {clusterIds: clusterIds},
          );
          done();
        };
        instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
      });
    });

    it('should respect the allowTransactionalWrites option', done => {
      const cluster = instance.cluster(CLUSTER_ID);
      const options = {
        routing: cluster,
        allowTransactionalWrites: true,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.appProfile.singleClusterRouting
            .allowTransactionalWrites,
          true,
        );
        done();
      };
      instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
    });

    it('should respect the description option', done => {
      const options = {
        routing: 'any',
        description: 'My App Profile',
      } as AppProfileOptions;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.appProfile.description,
          options.description,
        );
        done();
      };
      instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
    });

    it('should respect the ignoreWarnings option', done => {
      const options = {
        routing: 'any',
        ignoreWarnings: true,
      } as AppProfileOptions;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.ignoreWarnings, true);
        done();
      };
      instance.createAppProfile(APP_PROFILE_ID, options, assert.ifError);
    });

    it('should execute callback with arguments from GAPIC', done => {
      const response = {};
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      const fakeAppProfile = {};
      (instance.appProfile as Function) = (id: string) => {
        assert.strictEqual(id, APP_PROFILE_ID);
        return fakeAppProfile;
      };
      instance.createAppProfile(
        APP_PROFILE_ID,
        {routing: 'any'},
        (err, appProfile, apiResponse) => {
          assert.ifError(err);
          assert.strictEqual(appProfile, fakeAppProfile);
          assert.strictEqual(apiResponse, response);
          done();
        },
      );
    });
  });

  describe('createCluster', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'createCluster');
        assert.strictEqual(config.reqOpts.parent, INSTANCE_NAME);
        assert.strictEqual(config.reqOpts.clusterId, CLUSTER_ID);
        assert.strictEqual(
          config.reqOpts.cluster.location,
          'projects/my-project/locations/us-central2-d',
        );
        assert.strictEqual(config.gaxOpts, undefined);
        done();
      };
      instance.createCluster(
        CLUSTER_ID,
        {nodes: 2, location: 'us-central2-d'},
        assert.ifError,
      );
    });

    it('should provide the proper request options asynchronously', async () => {
      let currentRequestInput = null;
      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        currentRequestInput = config;
      };
      const optionsList = createClusterOptionsList;
      for (const options of optionsList) {
        await instance.createCluster(CLUSTER_ID, options);
        snapshot({
          input: {
            id: CLUSTER_ID,
            options: options,
          },
          output: {
            config: currentRequestInput,
          },
        });
      }
    });

    it('should accept gaxOptions', done => {
      const options = {
        nodes: 2,
        gaxOptions: {},
      } as CreateClusterOptions;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };
      instance.createCluster(CLUSTER_ID, options, assert.ifError);
    });

    it('should respect the location option', done => {
      const options = {
        location: 'us-central2-d',
        nodes: 2,
      } as CreateClusterOptions;
      const fakeLocation = Cluster.getLocation_(
        BIGTABLE.projectId,
        options.location,
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.reqOpts.cluster.location, fakeLocation);
        done();
      };
      instance.createCluster(CLUSTER_ID, options, assert.ifError);
    });

    it('should respect the nodes option', done => {
      const options = {
        nodes: 3,
        location: 'us-central2-c',
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.reqOpts.cluster.serveNodes, options.nodes);
        done();
      };
      instance.createCluster(CLUSTER_ID, options, assert.ifError);
    });

    it('should respect the storage option', done => {
      const options = {
        storage: 'ssd',
        nodes: 2,
      } as CreateClusterOptions;
      const fakeStorageType = 2;
      sandbox.stub(FakeCluster, 'getStorageType_').callsFake(type => {
        assert.strictEqual(type, options.storage);
        return fakeStorageType;
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(
          config.reqOpts.cluster.defaultStorageType,
          fakeStorageType,
        );
        done();
      };
      instance.createCluster(CLUSTER_ID, options, assert.ifError);
    });

    it('should respect the key option', done => {
      const key = 'kms-key-name';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.cluster.encryptionConfig, {
          kmsKeyName: key,
        });
        done();
      };

      instance.createCluster(
        CLUSTER_ID,
        {key, nodes: 2} as CreateClusterOptions,
        assert.ifError,
      );
    });

    it('should handle clusters with an encryption object', done => {
      const key = 'kms-key-name';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.cluster.encryptionConfig, {
          kmsKeyName: key,
        });
        done();
      };

      instance.createCluster(
        CLUSTER_ID,
        {encryption: {kmsKeyName: key}, nodes: 2} as CreateClusterOptions,
        assert.ifError,
      );
    });

    it('should throw if both an encryption object and a key are provided', () => {
      const key = 'kms-key-name';

      assert.throws(() => {
        instance.createCluster(
          CLUSTER_ID,
          {
            encryption: {kmsKeyName: key},
            key,
            nodes: 2,
          } as CreateClusterOptions,
          assert.ifError,
        );
      }, /The cluster cannot have both `encryption` and `key` defined\./);
    });

    it('should execute callback with arguments from GAPIC', done => {
      const response = {};
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      const fakeCluster = {};
      (instance.cluster as Function) = (name: string) => {
        assert.strictEqual(name, CLUSTER_ID);
        return fakeCluster;
      };
      (instance.createCluster as Function)(
        CLUSTER_ID,
        {nodes: 2},
        (err: Error, cluster: {}, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(cluster, fakeCluster);
          assert.strictEqual(apiResponse, response);
          done();
        },
      );
    });
  });

  describe('createTable', () => {
    const TABLE_ID = 'my-table';
    const TABLE_NAME =
      'projects/my-project/instances/my-instance/tables/my-table';

    it('should throw if an id is not provided', () => {
      assert.throws(() => {
        (instance.createTable as Function)();
      }, /An id is required to create a table\./);
    });

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'createTable');
        assert.strictEqual(config.reqOpts.parent, INSTANCE_NAME);
        assert.strictEqual(config.reqOpts.tableId, TABLE_ID);
        assert.deepStrictEqual(config.reqOpts.table, {granularity: 0});
        assert.strictEqual(config.gaxOpts, undefined);
        done();
      };
      instance.createTable(TABLE_ID, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const options = {
        gaxOptions: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };
      instance.createTable(TABLE_ID, options, assert.ifError);
    });

    it('should set the initial split keys', done => {
      const options = {
        splits: ['a', 'b'],
      };
      const expectedSplits = [{key: 'a'}, {key: 'b'}];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.initialSplits, expectedSplits);
        done();
      };
      instance.createTable(TABLE_ID, options, assert.ifError);
    });

    describe('creating column families', () => {
      it('should accept a family name', done => {
        const options = {
          families: ['a', 'b'],
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.deepStrictEqual(config.reqOpts.table.columnFamilies, {
            a: {},
            b: {},
          });
          done();
        };
        instance.createTable(TABLE_ID, options, assert.ifError);
      });

      it('should accept a garbage collection object', done => {
        const options = {
          families: [
            {
              name: 'e',
              rule: {},
            },
          ],
        };
        const fakeRule = {a: 'b'};
        (FakeFamily.formatRule_ as Function) = (rule: {}) => {
          assert.strictEqual(rule, options.families[0].rule);
          return fakeRule;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.deepStrictEqual(config.reqOpts.table.columnFamilies, {
            e: {
              gcRule: fakeRule,
            },
          });
          done();
        };
        instance.createTable(TABLE_ID, options, assert.ifError);
      });
    });

    it('should return a Table object', done => {
      const response = {
        name: TABLE_NAME,
      };
      const fakeTable = {} as Table;
      sandbox.stub(instance, 'table').callsFake(id => {
        assert.strictEqual(id, response.name.split('/').pop());
        return fakeTable;
      });
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      instance.createTable(TABLE_ID, (err, table, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(table, fakeTable);
        assert.strictEqual(table!.metadata, response);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('createTableFromBackup', () => {
    it('should throw if a table is not provided', () => {
      assert.throws(() => {
        (instance.createTableFromBackup as Function)({});
      }, /A table id is required to restore from a backup\./);
    });

    it('should restore from a provided Backup instance', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const backup = new FakeBackup() as any;
      const table = 'table';

      backup.restoreTo = (config: RestoreTableConfig, callback: Function) => {
        assert.strictEqual(config.tableId, table);
        assert.strictEqual(config.instance, instance);
        assert.strictEqual(typeof config.gaxOptions, 'undefined');
        callback(); // done()
      };

      instance.createTableFromBackup(
        {
          table,
          backup,
        },
        done,
      );
    });

    it('should create a Backup using the provided name', done => {
      const clusterId = 'my-cluster';
      const backupId = 'my-backup';
      const backup = `instances/${instance.id}/clusters/${clusterId}/backups/${backupId}`;
      const table = 'table';

      (instance.cluster as Function) = (id: string) => {
        assert.strictEqual(id, clusterId);
        return {
          backup: (id: string) => {
            assert.strictEqual(id, backup);
            return {
              restoreTo: (config: RestoreTableConfig, callback: Function) => {
                assert.strictEqual(config.tableId, table);
                assert.strictEqual(config.instance, instance);
                assert.strictEqual(typeof config.gaxOptions, 'undefined');
                callback(); // done()
              },
            };
          },
        };
      };

      instance.createTableFromBackup(
        {
          table,
          backup,
        },
        done,
      );
    });

    it('should respect a Backup from a different instance', done => {
      const diffInstanceId = 'diff-instance';
      const clusterId = 'my-cluster';
      const backupId = 'my-backup';
      const backup = `instances/${diffInstanceId}/clusters/${clusterId}/backups/${backupId}`;
      const table = 'table';

      (instance.bigtable.instance as Function) = (id: string) => {
        assert.strictEqual(id, diffInstanceId);
        return {
          cluster: (id: string) => {
            assert.strictEqual(id, clusterId);
            return {
              backup: (id: string) => {
                assert.strictEqual(id, backup);
                return {
                  restoreTo: (
                    config: RestoreTableConfig,
                    callback: Function,
                  ) => {
                    assert.strictEqual(config.tableId, table);
                    assert.strictEqual(config.instance, instance);
                    assert.strictEqual(typeof config.gaxOptions, 'undefined');
                    callback(); // done()
                  },
                };
              },
            };
          },
        };
      };

      instance.createTableFromBackup(
        {
          table,
          backup,
        },
        done,
      );
    });

    it('should throw if an unformatted backup name is provided', () => {
      const backup = 'backup-id';
      const table = 'table';

      assert.throws(() => {
        instance.createTableFromBackup(
          {
            table,
            backup,
          },
          assert.ifError,
        );
      }, /A complete backup name \(path\) is required or a Backup object\./);
    });

    it('should accept gaxOptions', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const backup = new FakeBackup() as any;
      const table = 'table';
      const gaxOptions = {};

      backup.restoreTo = (config: RestoreTableConfig) => {
        assert.strictEqual(config.gaxOptions, gaxOptions);
        done();
      };

      instance.createTableFromBackup(
        {
          table,
          backup,
          gaxOptions,
        },
        assert.ifError,
      );
    });
  });

  describe('cluster', () => {
    it('should return a Cluster object', () => {
      const cluster = instance.cluster(CLUSTER_ID);
      assert(cluster instanceof FakeCluster);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const args = (cluster as any).calledWith_;
      assert.strictEqual(args[0], instance);
      assert.strictEqual(args[1], CLUSTER_ID);
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      (instance.bigtable.request as Function) = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: any,
        callback: Function,
      ) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'deleteInstance');
        assert.deepStrictEqual(config.reqOpts, {
          name: instance.name,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        callback(); // done()
      };
      instance.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.delete(gaxOptions, assert.ifError);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      (instance.getMetadata as Function) = (gaxOptions: {}) => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      };
      instance.exists(assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};
      (instance.getMetadata as Function) = (gaxOptions_: {}) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      instance.exists(gaxOptions, assert.ifError);
    });

    it('should return false if error code is 5', done => {
      const error = new Error('Error.') as ServiceError;
      error.code = 5;
      sandbox.stub(instance, 'getMetadata').callsArgWith(1, error);
      instance.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if code is not 5', done => {
      const error = new Error('Error.') as ServiceError;
      error.code = 'NOT-5' as {} as number;
      sandbox.stub(instance, 'getMetadata').callsArgWith(1, error);
      instance.exists(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      sandbox.stub(instance, 'getMetadata').callsArgWith(1, null, {});
      instance.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const gaxOptions = {};
      (instance.getMetadata as Function) = (gaxOptions_: {}) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      instance.get(gaxOptions, assert.ifError);
    });

    it('should not require gaxOptions', done => {
      (instance.getMetadata as Function) = (gaxOptions: {}) => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      };
      instance.get(assert.ifError);
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');
      sandbox.stub(instance, 'getMetadata').callsArgWith(1, error);
      instance.get(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const metadata = {};
      sandbox.stub(instance, 'getMetadata').callsArgWith(1, null, metadata);
      instance.get((err, instance_, metadata_) => {
        assert.ifError(err);
        assert.strictEqual(instance_, instance);
        assert.strictEqual(metadata_, metadata);
        done();
      });
    });
  });

  describe('getAppProfiles', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'listAppProfiles');
        assert.deepStrictEqual(config.reqOpts, {
          parent: INSTANCE_NAME,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };
      instance.getAppProfiles(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.getAppProfiles(gaxOptions, assert.ifError);
    });

    it('should pass pageToken from gaxOptions into reqOpts', done => {
      const pageToken = 'token';
      const gaxOptions = {pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const expectedReqOpts: Options = Object.assign(
        {},
        {gaxOptions},
        {parent: instance.name},
        {pageToken: gaxOptions.pageToken},
      );
      delete expectedReqOpts.gaxOptions;

      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };
      instance.getAppProfiles(gaxOptions, assert.ifError);
    });

    it('should pass pageSize from gaxOptions into reqOpts', done => {
      const pageSize = 3;
      const gaxOptions = {pageSize, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const expectedReqOpts: Options = Object.assign(
        {},
        {gaxOptions},
        {parent: instance.name},
        {pageSize: gaxOptions.pageSize},
      );
      delete expectedReqOpts.gaxOptions;

      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };
      instance.getAppProfiles(gaxOptions, assert.ifError);
    });

    it('should return error from gapic', done => {
      const error = new Error('Error.');
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, error);
      instance.getAppProfiles(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an array of AppProfile objects', done => {
      const response = [{name: 'a'}, {name: 'b'}];
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      instance.getAppProfiles((err, appProfiles, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(appProfiles![0].id, 'a');
        assert.deepStrictEqual(appProfiles![0].metadata, response[0]);
        assert.strictEqual(appProfiles![1].id, 'b');
        assert.deepStrictEqual(appProfiles![1].metadata, response[1]);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('getAppProfilesStream', () => {
    let returnStream: PassThrough;
    beforeEach(() => {
      returnStream = new PassThrough({
        objectMode: true,
      });
    });

    it('should provide the proper request options', done => {
      const stub = sandbox.stub(pumpify, 'obj');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'listAppProfilesStream');
        assert.deepStrictEqual(config.reqOpts, {
          parent: INSTANCE_NAME,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        setImmediate(done);
        return returnStream;
      };
      instance.getAppProfilesStream();
      assert.strictEqual(stub.getCall(0).args[0][0], returnStream);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {timeout: 1000};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.gaxOpts, gaxOptions);
        setImmediate(done);
        return returnStream;
      };
      instance.getAppProfilesStream(gaxOptions);
    });

    it('should pass pageToken from gaxOptions into reqOpts', done => {
      const pageToken = 'token';
      const gaxOptions = {pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const expectedReqOpts: Options = Object.assign(
        {},
        {gaxOptions},
        {parent: instance.name},
        {pageToken: gaxOptions.pageToken},
      );
      delete expectedReqOpts.gaxOptions;

      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        setImmediate(done);
        return returnStream;
      };
      instance.getAppProfilesStream(gaxOptions);
    });

    it('should pass pageSize from gaxOptions into reqOpts', done => {
      const pageSize = 3;
      const gaxOptions = {pageSize, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const expectedReqOpts: Options = Object.assign(
        {},
        {gaxOptions},
        {parent: instance.name},
        {pageSize: gaxOptions.pageSize},
      );
      delete expectedReqOpts.gaxOptions;

      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        setImmediate(done);
        return returnStream;
      };
      instance.getAppProfilesStream(gaxOptions);
    });

    it('should return error from gapic', done => {
      const error = new Error('Error.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = () => {
        return returnStream;
      };
      setImmediate(() => {
        returnStream.destroy(error);
      });

      instance.getAppProfilesStream().on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return a decorated error with failedLocations list', done => {
      let counter = 0;
      let failedLocations: string[] = [];
      const pages = [
        {
          appProfiles: [
            {
              name: '/projects/p/instances/i/appProfiles/profile-a',
            },
            {
              name: '/projects/p/instances/i/appProfiles/profile-b',
            },
          ],
          response: {failedLocations: []},
        },
        {
          appProfiles: [
            {
              name: '/projects/p/instances/i/appProfiles/profile-c',
            },
            {
              name: '/projects/p/instances/i/appProfiles/profile-d',
            },
          ],
          response: {failedLocations: ['us-east1-a']},
        },

        {
          appProfiles: [
            {
              name: '/projects/p/instances/i/appProfiles/profile-e',
            },
            {
              name: '/projects/p/instances/i/appProfiles/profile-f',
            },
          ],
          response: {failedLocations: ['us-west1-b', 'us-west1-c']},
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = () => {
        return returnStream;
      };

      setImmediate(() => {
        pages.forEach(p => {
          failedLocations = failedLocations.concat(p.response.failedLocations);
          returnStream.emit('response', p.response);
          p.appProfiles.forEach(a => {
            returnStream.push(a);
            counter++;
          });
        });
        returnStream.push(null);
      });
      const appProfiles: AppProfile[] = [];
      instance
        .getAppProfilesStream()
        .on('error', err => {
          assert.strictEqual(appProfiles.length, counter);
          assert.deepStrictEqual(
            err,
            new Error(
              `Resources from the following locations are currently not available\n${JSON.stringify(
                failedLocations,
              )}`,
            ),
          );
          done();
        })
        .on('data', appProfile => {
          assert(appProfile instanceof FakeAppProfile);
          appProfiles.push(appProfile);
        })
        .on('end', () => {
          done();
        });
    });

    it('should return an array of AppProfile objects', done => {
      const response = [
        {
          name: '/projects/my-project/instances/my-instance/appProfiles/my-appProfile-a',
        },
        {
          name: '/projects/my-project/instances/my-instance/appProfiles/my-appProfile-a',
        },
      ];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = () => {
        return returnStream;
      };
      setImmediate(() => {
        response.forEach(r => {
          returnStream.push(r);
        });
        returnStream.push(null);
      });

      const appProfiles: AppProfile[] = [];
      instance
        .getAppProfilesStream()
        .on('error', assert.ifError)
        .on('data', appProfile => {
          assert(appProfile instanceof FakeAppProfile);
          appProfiles.push(appProfile);
        })
        .on('end', () => {
          assert.strictEqual(
            appProfiles[0].id,
            response[0].name.split('/').pop(),
          );
          assert.deepStrictEqual(appProfiles[0].metadata, response[0]);
          assert.strictEqual(
            appProfiles[1].id,
            response[1].name.split('/').pop(),
          );
          assert.deepStrictEqual(appProfiles[1].metadata, response[1]);
          done();
        });
    });
  });

  describe('getBackups', () => {
    it('should correctly call Cluster#getBackups', done => {
      const options = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance as any).cluster = (name: string) => {
        assert.strictEqual(name, '-');
        return {
          getBackups: (_options: {}, callback: Function) => {
            assert.strictEqual(_options, options);
            callback(); // done()
          },
        };
      };

      instance.getBackups(options, done);
    });
  });

  describe('getBackupsStream', () => {
    it('should correctly call Cluster#getBackupsStream', () => {
      const options = {};
      const getBackupsStream = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance as any).cluster = (name: string) => {
        assert.strictEqual(name, '-');
        return {
          getBackupsStream: (_options: {}) => {
            assert.strictEqual(_options, options);
            return getBackupsStream;
          },
        };
      };

      instance.getBackupsStream(options);
    });
  });

  describe('getClusters', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'listClusters');
        assert.deepStrictEqual(config.reqOpts, {
          parent: INSTANCE_NAME,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };
      instance.getClusters(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.getClusters(gaxOptions, assert.ifError);
    });

    it('should return error from gapic', done => {
      const error = new Error('Error.');
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, error);
      instance.getClusters(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an array of cluster objects', done => {
      const response = {
        clusters: [
          {
            name: 'a',
          },
          {
            name: 'b',
          },
        ],
      };
      const fakeClusters = [{}, {}];
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      let clusterCount = 0;
      (instance.cluster as Function) = (name: string) => {
        assert.strictEqual(name, response.clusters[clusterCount].name);
        return fakeClusters[clusterCount++];
      };
      instance.getClusters((err, clusters, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(clusters![0], fakeClusters[0]);
        assert.strictEqual(clusters![0].metadata, response.clusters[0]);
        assert.strictEqual(clusters![1], fakeClusters[1]);
        assert.strictEqual(clusters![1].metadata, response.clusters[1]);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'getIamPolicy');
        assert.strictEqual(config.reqOpts.resource, instance.name);
        assert.strictEqual(config.reqOpts.requestedPolicyVersion, undefined);
        assert.strictEqual(config.gaxOpt, undefined);
        done();
      };
      (instance.getIamPolicy as Function)(assert.ifError);
    });

    it('should accept options', done => {
      const requestedPolicyVersion = 0;
      const gaxOptions = {};
      const options: GetIamPolicyOptions = {gaxOptions, requestedPolicyVersion};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        assert.strictEqual(
          config.reqOpts.options.requestedPolicyVersion,
          requestedPolicyVersion,
        );
        done();
      };
      instance.getIamPolicy(options, assert.ifError);
    });

    it('should return error', done => {
      const error = new Error('error');
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, error);
      (instance.getIamPolicy as Function)((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should call decodePolicyEtag', () => {
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, null, {});
      const spy = sinon.stub(Table, 'decodePolicyEtag');
      (instance.getIamPolicy as Function)(assert.ifError);
      assert.strictEqual(spy.calledOnce, true);
      spy.restore();
    });
  });

  describe('getMetadata', () => {
    it('should make correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'getInstance');
        assert.deepStrictEqual(config.reqOpts, {
          name: instance.name,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };
      instance.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.getMetadata(gaxOptions, assert.ifError);
    });

    it('should update metadata', done => {
      const metadata = {};
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, metadata);
      instance.getMetadata(() => {
        assert.strictEqual(instance.metadata, metadata);
        done();
      });
    });

    it('should execute callback with original arguments', done => {
      const args = [{}, {}, {}];
      (instance.bigtable.request as Function) = (
        config: {},
        callback: Function,
      ) => {
        callback(...args);
      };
      instance.getMetadata((...args) => {
        assert.deepStrictEqual([].slice.call(args), args);
        done();
      });
    });
  });

  describe('getTables', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const views = ((FakeTable as any).VIEWS = {
      unspecified: 0,
      name: 1,
      schema: 2,
      full: 4,
    });

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'listTables');
        assert.strictEqual(config.reqOpts.parent, INSTANCE_NAME);
        assert.strictEqual(config.reqOpts.view, views.unspecified);
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };
      instance.getTables(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const options = {
        gaxOptions: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };
      instance.getTables(options, assert.ifError);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const expectedReqOpts: Options = Object.assign(
        {},
        {gaxOptions},
        {
          parent: instance.name,
          view: Table.VIEWS['unspecified'],
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );
      delete expectedReqOpts.gaxOptions;

      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };
      instance.getTables({gaxOptions}, assert.ifError);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = Object.assign(
        {},
        {
          pageSize: optionsPageSize,
          pageToken: optionsPageToken,
          gaxOptions,
        },
      );
      const expectedReqOpts = Object.assign(
        {},
        {
          parent: instance.name,
          view: Table.VIEWS['unspecified'],
          pageSize: optionsPageSize,
          pageToken: optionsPageToken,
        },
      );

      (instance.bigtable.request as Function) = (config: RequestOptions) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      instance.getTables(options, assert.ifError);
    });

    Object.keys(views).forEach(view => {
      it('should set the "' + view + '" view', done => {
        const options = {
          view,
        } as GetTablesOptions;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.strictEqual(config.reqOpts.view, views[view as 'unspecified']);
          done();
        };
        instance.getTables(options, assert.ifError);
      });
    });

    it('should return an array of table objects', done => {
      const response = [
        {
          name: '/projects/my-project/instances/my-instance/tables/my-table-a',
        },
        {
          name: '/projects/my-project/instances/my-instance/tables/my-table-b',
        },
      ];

      const fakeTables = [{}, {}];
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      let tableCount = 0;
      (instance.table as Function) = (id: string) => {
        assert.strictEqual(id, response[tableCount].name.split('/').pop());
        return fakeTables[tableCount++];
      };

      instance.getTables((err, tables) => {
        assert.ifError(err);
        assert.strictEqual(tables![0], fakeTables[0]);
        assert.strictEqual(tables![0].metadata, response[0]);
        assert.strictEqual(tables![1], fakeTables[1]);
        assert.strictEqual(tables![1].metadata, response[1]);
        done();
      });
    });

    it('should return original GAPIC response arguments', done => {
      const response = [{}, null, {}, {}];
      (instance.bigtable.request as Function) = (
        config: {},
        callback: Function,
      ) => {
        callback(...response);
      };
      instance.getTables((...args) => {
        assert.strictEqual(args[0], response[0]);
        assert.strictEqual(args[2], response[2]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((args as any)[3], response[3]);
        done();
      });
    });

    it('should return error', done => {
      const error = new Error('Error');
      (instance.bigtable.request as Function) = (
        config: {},
        callback: Function,
      ) => {
        callback(error);
      };
      instance.getTables(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('getTablesStream', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const views = ((FakeTable as any).VIEWS = {
      unspecified: 0,
      name: 1,
      schema: 2,
      full: 4,
    });
    let returnStream: PassThrough;
    beforeEach(() => {
      returnStream = new PassThrough({
        objectMode: true,
      });
    });

    it('should provide the proper request options', done => {
      const stub = sandbox.stub(pumpify, 'obj');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'listTablesStream');
        assert.strictEqual(config.reqOpts.parent, INSTANCE_NAME);
        assert.strictEqual(config.reqOpts.view, views.unspecified);
        assert.deepStrictEqual(config.gaxOpts, {});
        setImmediate(done);
        return returnStream;
      };
      instance.getTablesStream();
      assert.strictEqual(stub.getCall(0).args[0][0], returnStream);
    });

    it('should accept gaxOptions', done => {
      const options = {
        gaxOptions: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        setImmediate(done);
        return returnStream;
      };
      instance.getTablesStream(options);
    });

    Object.keys(views).forEach(view => {
      it('should set the "' + view + '" view', done => {
        const options = {
          view,
        } as GetTablesOptions;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance.bigtable.request as Function) = (config: any) => {
          assert.strictEqual(config.reqOpts.view, views[view as 'unspecified']);
          setImmediate(done);
          return returnStream;
        };
        instance.getTablesStream(options);
      });
    });

    it('should return an error from gapic', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = () => {
        return returnStream;
      };
      const error = new Error('Error');
      setImmediate(() => {
        returnStream.destroy(error);
      });
      instance.getTablesStream().on('error', err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an array of table objects', done => {
      const response = [
        {
          name: '/projects/my-project/instances/my-instance/tables/my-table-a',
        },
        {
          name: '/projects/my-project/instances/my-instance/tables/my-table-b',
        },
      ];

      const fakeTables = [{}, {}];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = () => {
        return returnStream;
      };
      let tableCount = 0;
      (instance.table as Function) = (id: string) => {
        assert.strictEqual(id, response[tableCount].name.split('/').pop());
        return fakeTables[tableCount++];
      };
      setImmediate(() => {
        response.forEach(r => {
          returnStream.push(r);
        });
        returnStream.push(null);
      });

      const tables: Table[] = [];
      instance
        .getTablesStream()
        .on('error', assert.ifError)
        .on('data', table => {
          tables.push(table);
        })
        .on('end', () => {
          assert.strictEqual(tables[0], fakeTables[0]);
          assert.deepStrictEqual(tables[0].metadata, response[0]);
          assert.strictEqual(tables[1], fakeTables[1]);
          assert.deepStrictEqual(tables[1].metadata, response[1]);
          done();
        });
    });

    it('should transform into Table objects', done => {
      const returnStream = new PassThrough({
        objectMode: true,
      });
      const response = [
        {
          name: '/projects/my-project/instances/my-instance/tables/my-table-a',
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = () => {
        return returnStream;
      };
      setImmediate(() => {
        returnStream.end(response[0]);
      });

      const tables: Table[] = [];
      instance
        .getTablesStream()
        .on('error', assert.ifError)
        .on('data', table => {
          assert(table instanceof FakeTable);
          tables.push(table);
        })
        .on('end', () => {
          assert(tables.length > 0);
          done();
        });
    });
  });

  describe('setIamPolicy', () => {
    const policy = {} as Policy;
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'setIamPolicy');
        assert.strictEqual(config.reqOpts.resource, instance.name);
        assert.strictEqual(config.reqOpts.policy, policy);
        assert.strictEqual(config.gaxOpt, undefined);
        done();
      };
      instance.setIamPolicy(policy, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.setIamPolicy(policy, gaxOptions, assert.ifError);
    });

    it('should pass policy to bigtable.request', done => {
      const policy: Policy = {
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
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.reqOpts.policy, policy);
        done();
      };
      instance.setIamPolicy(policy, assert.ifError);
    });

    it('should encode policy etag', done => {
      const policy = {etag: 'ABS'};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.policy.etag,
          Buffer.from(policy.etag),
        );
        done();
      };
      instance.setIamPolicy(policy, assert.ifError);
    });

    it('should return error', done => {
      const error = new Error('error');
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, error);
      instance.setIamPolicy(policy, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should call decodePolicyEtag', () => {
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, null, {});
      const spy = sinon.stub(Table, 'decodePolicyEtag');
      instance.setIamPolicy(policy, assert.ifError);
      assert.strictEqual(spy.calledOnce, true);
      spy.restore();
    });
  });

  describe('setMetadata', () => {
    it('should provide the proper request options', done => {
      const metadata = {displayName: 'updateDisplayName'};
      const expectedMetadata = {
        instance: {name: instance.name, displayName: 'updateDisplayName'},
        updateMask: {paths: ['display_name']},
      };
      (instance.bigtable.request as Function) = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: any,
        callback: Function,
      ) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'partialUpdateInstance');
        assert.deepStrictEqual(config.reqOpts, expectedMetadata);
        callback(); // done()
      };
      instance.setMetadata(metadata, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.setMetadata({}, gaxOptions, assert.ifError);
    });

    it('should update metadata property with API response', done => {
      const response = {};
      sandbox
        .stub(instance.bigtable, 'request')
        .callsArgWith(1, null, response);
      instance.setMetadata({}, err => {
        assert.ifError(err);
        assert.strictEqual(instance.metadata, response);
        done();
      });
    });

    it('should execute callback with all arguments', done => {
      const args = [{}, {}, {}];
      (instance.bigtable.request as Function) = (
        config: {},
        callback: Function,
      ) => {
        callback(...args);
      };
      instance.setMetadata({}, (...args) => {
        assert.deepStrictEqual([].slice.call(args), args);
        done();
      });
    });
  });

  describe('table', () => {
    const TABLE_ID = 'table-id';

    it('should return a table instance', () => {
      const table = instance.table(TABLE_ID);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const args = (table as any).calledWith_;
      assert(table instanceof FakeTable);
      assert.strictEqual(args[0], instance);
      assert.strictEqual(args[1], TABLE_ID);
    });
  });

  describe('testIamPermissions', () => {
    const permissions = 'bigtable.tables.get';
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'testIamPermissions');
        assert.strictEqual(config.reqOpts.resource, instance.name);
        assert.deepStrictEqual(config.reqOpts.permissions, [permissions]);
        assert.strictEqual(config.gaxOpt, undefined);
        done();
      };
      instance.testIamPermissions(permissions, assert.ifError);
    });

    it('should accept permissions as array', done => {
      const permissions = ['bigtable.tables.get', 'bigtable.tables.list'];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.permissions, permissions);
        done();
      };
      instance.testIamPermissions(permissions, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance.bigtable.request as Function) = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.testIamPermissions(permissions, gaxOptions, assert.ifError);
    });

    it('should unpack permissions from resp object', done => {
      const testPermissions = ['bigtable.tables.get', 'bigtable.tables.list'];
      (instance.bigtable.request as Function) = (
        config: {},
        callback: Function,
      ) => {
        callback(null, {permissions: testPermissions});
      };
      instance.testIamPermissions(testPermissions, (err, permissions) => {
        assert.ifError(err);
        assert.strictEqual(Array.isArray(permissions), true);
        assert.deepStrictEqual(permissions, testPermissions);
        done();
      });
    });

    it('should return error', done => {
      const permission = 'bigtable.tables.get';
      const error = new Error('error');
      sandbox.stub(instance.bigtable, 'request').callsArgWith(1, error);
      instance.testIamPermissions(permission, err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });
});

describe('Bigtable/ExecuteQueryInstance', () => {
  // Create an array of Response objects

  const responsesRef = {
    responses: [] as google.bigtable.v2.ExecuteQueryResponse[],

    setResponses(values: google.bigtable.v2.ExecuteQueryResponse[]) {
      responsesRef.responses = values;
    },
  };

  let requests: any[] = [];

  const INSTANCE_ID = 'my-instance';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BIGTABLE = {
    projectName: 'projects/my-project',
    projectId: 'my-project',
    request: (config?: any) => {
      requests.push(config);
      const result: any = Readable.from(responsesRef.responses);
      result.abort = () => {};
      return result;
    },
  } as Bigtable;
  let Instance: typeof inst.Instance;
  let instance: inst.Instance;
  let checksumValidStub: any;
  let checksumIsValid = true;

  before(() => {
    Instance = proxyquire('../src/instance.js', {
      '@google-cloud/promisify': fakePromisify,
      './app-profile.js': {AppProfile: FakeAppProfile},
      './backup.js': {Backup: FakeBackup},
      './cluster.js': {Cluster: FakeCluster},
      './family.js': {Family: FakeFamily},
      './table.js': {Table: FakeTable},
      pumpify,
    }).Instance;
  });

  beforeEach(() => {
    responsesRef.responses = [];
    requests = [];
    instance = new Instance(BIGTABLE, INSTANCE_ID);
    checksumIsValid = true;
    checksumValidStub = sinon
      .stub(SqlValues, 'checksumValid')
      .callsFake(() => checksumIsValid);
  });

  afterEach(() => {
    sandbox.restore();
    checksumValidStub.restore();
  });

  describe('execute', () => {
    it('parses non-composite types', done => {
      const preparedStatement = createPreparedStatement(
        ['int64', pbType({int64Type: {}})],
        ['float64', pbType({float64Type: {}})],
        ['string', pbType({stringType: {}})],
        ['bytes', pbType({bytesType: {}})],
        ['date', pbType({dateType: {}})],
        ['timestamp', pbType({timestampType: {}})],
        ['bool', pbType({boolType: {}})],
      );

      responsesRef.setResponses([
        createProtoRows(
          'token1',
          111,
          undefined,
          {intValue: 1},
          {floatValue: 2.5},
          {stringValue: '3'},
          {bytesValue: new Uint8Array([4, 5, 6])},
          {dateValue: new google.type.Date({year: 2024, month: 0, day: 1})},
          {
            timestampValue: new google.protobuf.Timestamp({
              seconds: 1234,
              nanos: 5678,
            }),
          },
          {boolValue: true},
        ),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(metadata!.get(0).type, 'int64');
          assert.strictEqual(metadata!.get(1).type, 'float64');
          assert.strictEqual(metadata!.get(2).type, 'string');
          assert.strictEqual(metadata!.get(3).type, 'bytes');
          assert.strictEqual(metadata!.get(4).type, 'date');
          assert.strictEqual(metadata!.get(5).type, 'timestamp');
          assert.strictEqual(metadata!.get(6).type, 'bool');

          assert.strictEqual(result![0].get(0), BigInt(1));
          assert.strictEqual(result![0].get(1), 2.5);
          assert.strictEqual(result![0].get(2), '3');
          assert.deepEqual(result![0].get(3), new Uint8Array([4, 5, 6]));
          assert.deepEqual(result![0].get(4), new BigtableDate(2024, 0, 1));
          assert.deepEqual(result![0].get(5), new PreciseDate([1234, 5678]));
          assert.strictEqual(result![0].get(6), true);
          done();
        },
      );
    });

    it('parses multiple rows', done => {
      const preparedStatement = createPreparedStatement([
        'f1',
        pbType({int64Type: {}}),
      ]);

      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {intValue: 1}),
        createProtoRows('token2', 111, undefined, {intValue: 2}),
        createProtoRows('token3', 111, undefined, {intValue: 3}),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(metadata!.get(0), metadata!.get('f1'));
          assert.strictEqual(metadata!.get(0).type, 'int64');

          assert.strictEqual(result![0].get(0), BigInt(1));
          assert.strictEqual(result![1].get(0), BigInt(2));
          assert.strictEqual(result![2].get(0), BigInt(3));
          done();
        },
      );
    });

    it('handles nulls properly', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );

      responsesRef.setResponses([
        createProtoRows(undefined, undefined, undefined, {intValue: 1}),
        createProtoRows('token1', 111, undefined, {}),
        createProtoRows(undefined, undefined, undefined, {}),
        createProtoRows('token2', 111, undefined, {intValue: 2}),
        createProtoRows(undefined, undefined, undefined, {}),
        createProtoRows(undefined, undefined, undefined, {intValue: 3}),
        createProtoRows('token3', 111, undefined),
        createProtoRows(undefined, undefined, undefined, {}),
        createProtoRows(undefined, undefined, undefined, {}),
        createProtoRows('token4', 111, undefined),
        createProtoRows(undefined, undefined, undefined, {intValue: 4}),
        createProtoRows(undefined, undefined, undefined, {intValue: 5}),
        createProtoRows('token5', 111, undefined),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(result?.length, 5);

          assert.strictEqual(result![0].get(0), BigInt(1));
          assert.strictEqual(result![0].get(1), null);

          assert.strictEqual(result![1].get(0), null);
          assert.strictEqual(result![1].get(1), BigInt(2));

          assert.strictEqual(result![2].get(0), null);
          assert.strictEqual(result![2].get(1), BigInt(3));

          assert.strictEqual(result![3].get(0), null);
          assert.strictEqual(result![3].get(1), null);

          assert.strictEqual(result![4].get(0), BigInt(4));
          assert.strictEqual(result![4].get(1), BigInt(5));

          done();
        },
      );
    });

    it('handles nulls for all types', done => {
      const preparedStatement = createPreparedStatement(
        ['int64', pbType({int64Type: {}})],
        ['float64', pbType({float64Type: {}})],
        ['string', pbType({stringType: {}})],
        ['bytes', pbType({bytesType: {}})],
        ['date', pbType({dateType: {}})],
        ['timestamp', pbType({timestampType: {}})],
        ['bool', pbType({boolType: {}})],
        ['array', pbType({arrayType: {elementType: pbType({int64Type: {}})}})],
        [
          'map',
          pbType({
            mapType: {
              keyType: pbType({int64Type: {}}),
              valueType: pbType({int64Type: {}}),
            },
          }),
        ],
        [
          'struct',
          pbType({
            structType: {
              fields: [{fieldName: 'f1', type: pbType({int64Type: {}})}],
            },
          }),
        ],
        [
          'arrayWithNulls',
          pbType({arrayType: {elementType: pbType({int64Type: {}})}}),
        ],
        [
          'mapWithNulls',
          pbType({
            mapType: {
              keyType: pbType({int64Type: {}}),
              valueType: pbType({stringType: {}}),
            },
          }),
        ],
        [
          'structWithNulls',
          pbType({
            structType: {
              fields: [
                {fieldName: 'f1', type: pbType({int64Type: {}})},
                {fieldName: null, type: pbType({float64Type: {}})},
                {fieldName: 'f3', type: pbType({stringType: {}})},
              ],
            },
          }),
        ],
      );
      responsesRef.setResponses([
        createProtoRows(
          'token1',
          111,
          undefined,
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          // arrayWithNulls
          {
            arrayValue: {
              values: [{intValue: 1}, {}, {intValue: 3}],
            },
          },
          // mapWithNulls
          {
            arrayValue: {
              values: [
                {
                  arrayValue: {
                    values: [{intValue: 1}, {}],
                  },
                },
                {
                  arrayValue: {
                    values: [{intValue: 2}, {}],
                  },
                },
                {
                  arrayValue: {
                    values: [{intValue: 3}, {stringValue: 'c'}],
                  },
                },
              ],
            },
          },
          //structWithNulls
          {
            arrayValue: {
              values: [{intValue: 1}, {}, {}],
            },
          },
        ),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(result![0].get(0), null);
          assert.strictEqual(result![0].get(1), null);
          assert.strictEqual(result![0].get(2), null);
          assert.strictEqual(result![0].get(3), null);
          assert.strictEqual(result![0].get(4), null);
          assert.strictEqual(result![0].get(5), null);
          assert.strictEqual(result![0].get(6), null);
          assert.strictEqual(result![0].get(7), null);
          assert.strictEqual(result![0].get(8), null);
          assert.strictEqual(result![0].get(9), null);

          const arrayWithNulls = result![0].get(10) as SqlValue[];
          assert.strictEqual(arrayWithNulls[0], BigInt(1));
          assert.strictEqual(arrayWithNulls[1], null);
          assert.strictEqual(arrayWithNulls[2], BigInt(3));

          const mapWithNulls = result![0].get(11) as BigtableMap;
          assert.strictEqual(mapWithNulls.size, 3);
          assert.strictEqual(mapWithNulls.get(BigInt(1)), null);
          assert.strictEqual(mapWithNulls.get(BigInt(2)), null);
          assert.strictEqual(mapWithNulls.get(BigInt(3)), 'c');

          const structWithNulls = result![0].get(12) as Struct;
          assert.strictEqual(structWithNulls.get('f1'), BigInt(1));
          assert.strictEqual(structWithNulls.get(1), null);
          assert.strictEqual(structWithNulls.get('f3'), null);

          done();
        },
      );
    });

    it('parses multiple rows in one batch', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows(
          undefined,
          undefined,
          undefined,
          {intValue: 1},
          {intValue: 2},
        ),
        createProtoRows(
          undefined,
          undefined,
          undefined,
          {intValue: 3},
          {intValue: 4},
        ),
        createProtoRows('token1', 111, undefined, {intValue: 5}, {intValue: 6}),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(metadata!.get(0), metadata!.get('f1'));
          assert.strictEqual(metadata!.get(1), metadata!.get('f2'));
          assert.strictEqual(metadata!.get(0).type, 'int64');
          assert.strictEqual(metadata!.get(1).type, 'int64');

          assert.strictEqual(result![0].get(0), BigInt(1));
          assert.strictEqual(result![0].get('f1'), BigInt(1));
          assert.strictEqual(result![0].get(1), BigInt(2));
          assert.strictEqual(result![0].get('f2'), BigInt(2));

          assert.strictEqual(result![1].get(0), BigInt(3));
          assert.strictEqual(result![1].get('f1'), BigInt(3));
          assert.strictEqual(result![1].get(1), BigInt(4));
          assert.strictEqual(result![1].get('f2'), BigInt(4));

          assert.strictEqual(result![2].get(0), BigInt(5));
          assert.strictEqual(result![2].get('f1'), BigInt(5));
          assert.strictEqual(result![2].get(1), BigInt(6));
          assert.strictEqual(result![2].get('f2'), BigInt(6));
          done();
        },
      );
    });

    it('parses an array of ints', done => {
      const preparedStatement = createPreparedStatement([
        'f1',
        pbType({arrayType: {elementType: pbType({int64Type: {}})}}),
      ]);
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {
          arrayValue: {
            values: [{intValue: 1}, {intValue: 2}, {intValue: 3}],
          },
        }),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(metadata!.get(0), metadata!.get('f1'));
          assert.strictEqual(metadata!.get(0).type, 'array');
          const arrayType = metadata!.get(0);
          assert(arrayType.type === 'array');
          assert.strictEqual(arrayType.elementType.type, 'int64');

          const structResult = result![0].get('f1') as SqlValue[];
          assert.strictEqual(structResult[0], BigInt(1));
          assert.strictEqual(structResult[1], BigInt(2));
          assert.strictEqual(structResult[2], BigInt(3));
          done();
        },
      );
    });

    it('parses a struct', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        [
          'f2',
          pbType({
            structType: {
              fields: [
                {fieldName: 'f1', type: pbType({int64Type: {}})},
                {fieldName: null, type: pbType({float64Type: {}})},
                {fieldName: 'f3', type: pbType({stringType: {}})},
              ],
            },
          }),
        ],
      );
      responsesRef.setResponses([
        createProtoRows(
          'token1',
          111,
          undefined,
          {intValue: 1},
          {
            arrayValue: {
              values: [{intValue: 1}, {floatValue: 2.5}, {stringValue: '3'}],
            },
          },
        ),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(metadata!.get(0), metadata!.get('f1'));
          assert.strictEqual(metadata!.get(1), metadata!.get('f2'));
          assert.strictEqual(metadata!.get(0).type, 'int64');
          const structType = metadata!.get(1);
          assert.strictEqual(structType.type, 'struct');
          assert.strictEqual(structType.get('f1').type, 'int64');
          assert.strictEqual(structType.get(1).type, 'float64');
          assert.strictEqual(structType.get('f3').type, 'string');

          assert.strictEqual(result![0].get(0), BigInt(1));
          assert.strictEqual(result![0].get('f1'), BigInt(1));
          const structResult = result![0].get(1) as Struct;
          assert.strictEqual(structResult.get('f1'), structResult.get(0));
          assert.strictEqual(structResult.get('f3'), structResult.get(2));

          assert.strictEqual(structResult.get(0), BigInt(1));
          assert.strictEqual(structResult.get(1), 2.5);
          assert.strictEqual(structResult.get(2), '3');
          done();
        },
      );
    });

    it('parses a map', done => {
      const preparedStatement = createPreparedStatement([
        'f1',
        pbType({
          mapType: {
            keyType: pbType({int64Type: {}}),
            valueType: pbType({stringType: {}}),
          },
        }),
      ]);
      responsesRef.setResponses([
        createProtoRows(undefined, undefined, undefined, {
          arrayValue: {
            values: [
              {
                arrayValue: {
                  values: [{intValue: 1}, {stringValue: 'a'}],
                },
              },
              {
                arrayValue: {
                  values: [{intValue: 2}, {stringValue: 'b'}],
                },
              },
              {
                arrayValue: {
                  values: [{intValue: 3}, {stringValue: 'c'}],
                },
              },
            ],
          },
        }),
        createProtoRows('token2', 111, undefined, {
          arrayValue: {
            values: [
              {
                arrayValue: {
                  values: [{intValue: 4}, {stringValue: 'd'}],
                },
              },
              {
                arrayValue: {
                  values: [{intValue: 5}, {stringValue: 'e'}],
                },
              },
              {
                arrayValue: {
                  values: [{intValue: 6}, {stringValue: 'f'}],
                },
              },
            ],
          },
        }),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          const mapType = metadata!.get(0);
          assert.strictEqual(mapType.type, 'map');
          assert.strictEqual(mapType.keyType.type, 'int64');
          assert.strictEqual(mapType.valueType.type, 'string');

          assert.strictEqual(result?.length, 2);

          const mapResult0 = result![0].get('f1') as BigtableMap;
          assert.strictEqual(mapResult0.size, 3);
          assert.strictEqual(mapResult0.get(BigInt(1)), 'a');
          assert.strictEqual(mapResult0.get(BigInt(2)), 'b');
          assert.strictEqual(mapResult0.get(BigInt(3)), 'c');

          const mapResult1 = result![1].get('f1') as BigtableMap;
          assert.strictEqual(mapResult1.size, 3);
          assert.strictEqual(mapResult1.get(BigInt(4)), 'd');
          assert.strictEqual(mapResult1.get(BigInt(5)), 'e');
          assert.strictEqual(mapResult1.get(BigInt(6)), 'f');
          done();
        },
      );
    });

    it('map retains last encountered value for duplicate key', done => {
      const preparedStatement = createPreparedStatement([
        'f1',
        pbType({
          mapType: {
            keyType: pbType({int64Type: {}}),
            valueType: pbType({stringType: {}}),
          },
        }),
      ]);
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {
          arrayValue: {
            values: [
              {
                arrayValue: {
                  values: [{intValue: 1}, {stringValue: 'a'}],
                },
              },
              {
                arrayValue: {
                  values: [{intValue: 2}, {stringValue: 'b'}],
                },
              },
              {
                arrayValue: {
                  values: [{intValue: 1}, {stringValue: 'c'}],
                },
              },
            ],
          },
        }),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          const mapType = metadata!.get(0);
          assert.strictEqual(mapType.type, 'map');
          assert.strictEqual(mapType.keyType.type, 'int64');
          assert.strictEqual(mapType.valueType.type, 'string');

          assert.strictEqual(result?.length, 1);

          const mapResult0 = result![0].get('f1') as BigtableMap;
          assert.strictEqual(mapResult0.size, 2);
          assert.strictEqual(mapResult0.get(BigInt(1)), 'c');
          assert.strictEqual(mapResult0.get(BigInt(2)), 'b');
          done();
        },
      );
    });

    it('accessing duplicated struct field throws', done => {
      const preparedStatement = createPreparedStatement([
        'structColumn',
        pbType({
          structType: {
            fields: [
              {fieldName: 'f1', type: pbType({int64Type: {}})},
              {fieldName: null, type: pbType({float64Type: {}})},
              {fieldName: 'f1', type: pbType({stringType: {}})},
            ],
          },
        }),
      ]);
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {
          arrayValue: {
            values: [{intValue: 1}, {floatValue: 2.5}, {stringValue: '3'}],
          },
        }),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, result, metadata) => {
          assert.strictEqual(metadata!.get(0).type, 'struct');

          const struct = result![0].get(0) as Struct;
          assert.strictEqual(struct.get(0), BigInt(1));
          assert.strictEqual(struct.get(1), 2.5);
          assert.strictEqual(struct.get(2), '3');

          assert.throws(() => {
            result![0].get('f1');
          }, Error);
          done();
        },
      );
    });

    it('unsupported kind in metadata is detected', done => {
      const type = {kind: 'unknown-type'};
      const BIGTABLE2 = {
        projectName: 'projects/my-project2',
        projectId: 'my-project2',
        request: (req, cb: any) => {
          cb!(
            null,
            createPrepareQueryResponse(
              ['f1', pbType({int64Type: {}})],
              ['f2', type as any],
            ),
          );
        },
      } as Bigtable;
      const instance2 = new Instance(BIGTABLE2, INSTANCE_ID);

      instance2.prepareStatement('query', (err, result) => {
        assert.notStrictEqual(err, null);
        assert.ok(err instanceof Error);
        done();
      });
    });

    it('unsupported map key type throws', done => {
      const BIGTABLE2 = {
        projectName: 'projects/my-project2',
        projectId: 'my-project2',
        request: (req, cb: any) => {
          cb!(
            null,
            createPrepareQueryResponse([
              'map',
              pbType({
                mapType: {
                  keyType: pbType({dateType: {}}),
                  valueType: pbType({int64Type: {}}),
                },
              }),
            ]),
          );
        },
      } as Bigtable;
      const instance2 = new Instance(BIGTABLE2, INSTANCE_ID);
      instance2.prepareStatement('query', (err, result) => {
        assert.notStrictEqual(err, null);
        done();
      });
    });

    it('map with null key is rejected', done => {
      const preparedStatement = createPreparedStatement([
        'map',
        pbType({
          mapType: {
            keyType: pbType({int64Type: {}}),
            valueType: pbType({int64Type: {}}),
          },
        }),
      ]);
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {
          arrayValue: {
            values: [
              {
                arrayValue: {
                  values: [{}, {intValue: 1}],
                },
              },
            ],
          },
        }),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.strictEqual(result?.length, 1);
        done();
      });
    });

    it('map with null value is ok', done => {
      const preparedStatement = createPreparedStatement([
        'map',
        pbType({
          mapType: {
            keyType: pbType({int64Type: {}}),
            valueType: pbType({int64Type: {}}),
          },
        }),
      ]);
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {
          arrayValue: {
            values: [
              {
                arrayValue: {
                  values: [{intValue: 1}, {}],
                },
              },
            ],
          },
        }),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.strictEqual(result?.length, 1);
        done();
      });
    });

    it('bigints are correctly converted to longs', done => {
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
        {} as any,
        Object.fromEntries(
          Array.from({length: 11}, (_, i) => [
            String.fromCharCode(97 + i),
            SqlTypes.Int64(),
          ]),
        ), // parameter types: {a:INT64, b:INT64, ... }
      );
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {intValue: 1}),
      ]);
      instance.executeQuery(
        {
          preparedStatement,
          parameters: {
            a: BigInt(1),
            b: BigInt(-1),
            c: BigInt(0),
            d: BigInt(Number.MAX_SAFE_INTEGER),
            e: BigInt(Number.MIN_SAFE_INTEGER),
            f: BigInt('9007199254740992'), // MAX_SAFE_INTEGER + 1
            g: BigInt('-9007199254740992'), // MIN_SAFE_INTEGER - 1
            h: BigInt('1152921504606846976'), // 2^60
            i: BigInt('-1152921504606846976'), // - 2^60
            j: BigInt('9223372036854775807'), // 2^63 - 1
            k: BigInt('-9223372036854775808'), // - 2^63
          },
        } as any,
        err => {
          assert.equal(err, null);
          assert.strictEqual(requests.length, 1);
          const reqOpts = requests[0]
            .reqOpts as google.bigtable.v2.IExecuteQueryRequest;

          assert.deepEqual(reqOpts.params!['a'].intValue, Long.fromInt(1));
          assert.deepEqual(reqOpts.params!['b'].intValue, Long.fromInt(-1));
          assert.deepEqual(reqOpts.params!['c'].intValue, Long.fromInt(0));
          assert.deepEqual(
            reqOpts.params!['d'].intValue,
            Long.fromNumber(Number.MAX_SAFE_INTEGER),
          );
          assert.deepEqual(
            reqOpts.params!['e'].intValue,
            Long.fromNumber(Number.MIN_SAFE_INTEGER),
          );
          assert.deepEqual(
            reqOpts.params!['f'].intValue,
            Long.fromString('9007199254740992'),
          );
          assert.deepEqual(
            reqOpts.params!['g'].intValue,
            Long.fromString('-9007199254740992'),
          );
          assert.deepEqual(
            reqOpts.params!['h'].intValue,
            Long.fromString('1152921504606846976'),
          );
          assert.deepEqual(
            reqOpts.params!['i'].intValue,
            Long.fromString('-1152921504606846976'),
          );
          assert.deepEqual(
            reqOpts.params!['j'].intValue,
            Long.fromString('9223372036854775807'),
          );
          assert.deepEqual(
            reqOpts.params!['k'].intValue,
            Long.fromString('-9223372036854775808'),
          );
          done();
        },
      );
    });

    it('value not matching provided type is rejected', () => {
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Int64()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 'a'},
            } as any,
            () => {},
          );
        },
        {message: 'Value a cannot be converted to int64.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Float64()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: BigInt(1)},
            } as any,
            () => {},
          );
        },
        {message: 'Value 1 cannot be converted to float64.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.String()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 1},
            } as any,
            () => {},
          );
        },
        {message: 'Value 1 cannot be converted to string.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Bytes()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 1},
            } as any,
            () => {},
          );
        },
        {message: 'Value 1 cannot be converted to bytes.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Bool()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 1},
            } as any,
            () => {},
          );
        },
        {message: 'Value 1 cannot be converted to boolean.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Timestamp()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 1},
            } as any,
            () => {},
          );
        },
        {
          message:
            'Value 1 cannot be converted to timestamp, please use PreciseDate instead.',
        },
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Date()},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 1},
            } as any,
            () => {},
          );
        },
        {message: 'Value 1 cannot be converted to date.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Array(SqlTypes.Int64())},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: 1},
            } as any,
            () => {},
          );
        },
        {message: 'Value 1 cannot be converted to an array.'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Array(SqlTypes.Int64())},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: [1, 'a']},
            } as any,
            () => {},
          );
        },
        {
          message:
            'Error while converting element 0 of an array: Value 1 cannot be converted to int64 - argument of type INT64 should by passed as BigInt.',
        },
      );
      // TS does not permit passing a Struct or a Map as parameters,
      // but we want to check it throws an error
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {a: SqlTypes.Map(SqlTypes.Int64(), SqlTypes.Int64())},
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {
                a: new Map<bigint, number>([
                  [BigInt(1), 2],
                  [BigInt(3), 'a'] as any as [bigint, number],
                ]),
              },
            } as any,
            () => {},
          );
        },
        {message: 'Map is not a supported query param type'},
      );
      assert.throws(
        () => {
          const preparedStatement = new PreparedStatement(
            BIGTABLE,
            createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
            {} as any,
            {
              a: SqlTypes.Struct({
                name: 'f1',
                type: SqlTypes.Int64(),
              }),
            },
          );
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {
                a: SqlTypes.Struct({
                  name: 'f1',
                  type: SqlTypes.Int64(),
                }),
              },
            } as any,
            () => {},
          );
        },
        {message: 'Struct is not a supported query param type'},
      );
    });

    it('null value is accepted', done => {
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {intValue: 1}),
      ]);
      instance.executeQuery(
        {
          preparedStatement,
          parameters: {a: null},
        } as any,
        () => {
          assert.strictEqual(requests.length, 1);
          const reqOpts = requests[0]
            .reqOpts as google.bigtable.v2.IExecuteQueryRequest;

          assert.notStrictEqual(reqOpts.params!['a'].type!.int64Type, null);
          done();
        },
      );
    });

    it('parameter type is used for null', done => {
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
        {} as any,
        {
          a: SqlTypes.Int64(),
          b: SqlTypes.Float64(),
          c: SqlTypes.Bool(),
          d: SqlTypes.Bytes(),
          e: SqlTypes.String(),
          f: SqlTypes.Date(),
          g: SqlTypes.Timestamp(),
          h: SqlTypes.Array(SqlTypes.Int64()),
        },
      );
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {intValue: 1}),
      ]);
      instance.executeQuery(
        {
          preparedStatement,
          parameters: {
            a: null,
            b: null,
            c: null,
            d: null,
            e: null,
            f: null,
            g: null,
            h: null,
          },
        } as any,
        () => {
          assert.strictEqual(requests.length, 1);
          const reqOpts = requests[0]
            .reqOpts as google.bigtable.v2.IExecuteQueryRequest;

          assert.notStrictEqual(reqOpts.params!['a'].type!.int64Type, null);
          assert.notStrictEqual(reqOpts.params!['b'].type!.float64Type, null);
          assert.notStrictEqual(reqOpts.params!['c'].type!.boolType, null);
          assert.notStrictEqual(reqOpts.params!['d'].type!.bytesType, null);
          assert.notStrictEqual(reqOpts.params!['e'].type!.stringType, null);
          assert.notStrictEqual(reqOpts.params!['f'].type!.dateType, null);
          assert.notStrictEqual(reqOpts.params!['g'].type!.timestampType, null);
          assert.notStrictEqual(reqOpts.params!['h'].type!.arrayType, null);
          assert.notStrictEqual(
            reqOpts.params!['h'].type!.arrayType?.elementType,
            null,
          );
          done();
        },
      );
    });

    it('large bigints are rejected', () => {
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
        {} as any,
        {a: SqlTypes.Int64()},
      );
      assert.throws(
        () => {
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: BigInt('-9223372036854775809')},
            } as any,
            () => {},
          );
        },
        {
          message:
            'Value -9223372036854775809 cannot be converted to int64 - it is out of range.',
        },
      );
      assert.throws(
        () => {
          instance.executeQuery(
            {
              preparedStatement,
              parameters: {a: BigInt('9223372036854775808')},
            } as any,
            () => {},
          );
        },
        {
          message:
            'Value 9223372036854775808 cannot be converted to int64 - it is out of range.',
        },
      );
    });

    it('duplicate struct field names are not accessible by name', done => {
      const preparedStatement = createPreparedStatement([
        's',
        pbType({
          structType: {
            fields: [
              {fieldName: 'f1', type: pbType({int64Type: {}})},
              {fieldName: 'f2', type: pbType({int64Type: {}})},
              {fieldName: 'f1', type: pbType({stringType: {}})},
            ],
          },
        }),
      ]);
      responsesRef.setResponses([
        createProtoRows('token1', 111, undefined, {
          arrayValue: {
            values: [{intValue: 1}, {intValue: 2}, {stringValue: '3'}],
          },
        }),
      ]);
      instance.executeQuery(preparedStatement, (err, rows) => {
        const struct = rows![0].get('s')! as Struct;
        assert.strictEqual(struct.get(0), BigInt(1));
        assert.strictEqual(struct.get(1), BigInt(2));
        assert.strictEqual(struct.get(2), '3');

        assert.throws(() => {
          struct.get('f1');
        }, Error);
        done();
      });
    });

    it('duplicate row field names are not accessible by name', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
        ['f1', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows(
          'token1',
          111,
          undefined,
          {intValue: 1},
          {intValue: 2},
          {intValue: 3},
        ),
      ]);
      executeQueryResultWithMetadata(
        instance,
        preparedStatement,
        (err, rows, metadata) => {
          const row = rows![0];
          assert.strictEqual(row.get(0), BigInt(1));
          assert.strictEqual(row.get(1), BigInt(2));
          assert.strictEqual(row.get(2), BigInt(3));
          assert.strictEqual(row.get('f2'), BigInt(2));

          assert.throws(() => {
            row.get('f1');
          }, Error);

          assert.strictEqual(metadata!.get(0).type, 'int64');
          assert.strictEqual(metadata!.get(1).type, 'int64');
          assert.strictEqual(metadata!.get(2).type, 'int64');
          assert.strictEqual(metadata!.get('f2').type, 'int64');

          assert.throws(() => {
            metadata!.get('f1');
          }, Error);

          done();
        },
      );
    });

    it('unfinished batch is detected', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows(undefined, undefined, undefined, {intValue: 3}),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.notStrictEqual(err, null);
        assert.ok(err instanceof Error);
        done();
      });
    });

    it('token without batch ending detected', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows('token', undefined, undefined, {intValue: 3}),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.notStrictEqual(err, null);
        assert.ok(err instanceof Error);
        done();
      });
    });

    it('reset works', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );

      const respWithReset1 = createProtoRows(undefined, undefined, undefined, {
        intValue: 1,
      });
      respWithReset1.results!.reset = true;

      const respWithReset2 = createProtoRows(
        undefined,
        111,
        undefined,
        {intValue: 3},
        {intValue: 4},
      );
      respWithReset2.results!.reset = true;

      responsesRef.setResponses([
        createProtoRows(
          undefined,
          undefined,
          undefined,
          {intValue: 1},
          {intValue: 2},
        ),
        respWithReset1,
        respWithReset2,
        createProtoRows('token', 222, undefined, {intValue: 5}, {intValue: 6}),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.equal(err, null);
        assert.strictEqual(result![0].get(0), BigInt(3));
        assert.strictEqual(result![0].get(1), BigInt(4));
        assert.strictEqual(result![1].get(0), BigInt(5));
        assert.strictEqual(result![1].get(1), BigInt(6));
        done();
      });
    });

    it('partial row after token detected', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows(
          'token1',
          111,
          undefined,
          {intValue: 1},
          {intValue: 2},
          {intValue: 3},
        ),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.notStrictEqual(err, null);
        assert.ok(err instanceof Error);
        done();
      });
    });

    it('partial row after batch checksum detected', done => {
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows(
          undefined,
          111,
          undefined,
          {intValue: 1},
          {intValue: 2},
          {intValue: 3},
        ),
        createProtoRows('token1', 222, undefined, {intValue: 4}),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.notStrictEqual(err, null);
        assert.ok(err instanceof Error);
        done();
      });
    });

    it('cheksum fail detected', done => {
      checksumIsValid = false;
      const preparedStatement = createPreparedStatement(
        ['f1', pbType({int64Type: {}})],
        ['f2', pbType({int64Type: {}})],
      );
      responsesRef.setResponses([
        createProtoRows(
          undefined,
          111,
          undefined,
          {intValue: 1},
          {intValue: 2},
        ),
        createProtoRows('token1', 222, undefined, {intValue: 3}, {intValue: 4}),
      ]);
      instance.executeQuery(preparedStatement, (err, result) => {
        assert.notStrictEqual(err, null);
        assert.ok(err instanceof Error);
        done();
      });
    });
  });
});
