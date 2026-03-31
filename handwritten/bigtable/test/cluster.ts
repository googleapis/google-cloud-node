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
import {before, beforeEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';
import {PassThrough, Readable} from 'stream';
import {CallOptions} from 'google-gax';
import {PreciseDate} from '@google-cloud/precise-date';
import {ClusterUtils} from '../src/utils/cluster';
import {InstanceOptions, RequestOptions} from '../src';
import {createClusterOptionsList} from './constants/cluster';
import * as snapshot from 'snap-shot-it';

export interface Options {
  nodes?: Number;
  gaxOptions?: {
    timeout: number;
  };
}

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promisifyAll(klass: Function, options: any) {
    if (klass.name === 'Cluster') {
      promisified = true;
      assert.deepStrictEqual(options.exclude, ['backup']);
    }
  },
});

class FakeBackup {
  calledWith_: Array<{}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    this.calledWith_ = Array.from(args);
  }
}

describe('Bigtable/Cluster', () => {
  const CLUSTER_ID = 'my-cluster';
  const PROJECT_ID = 'grape-spaceship-123';

  const INSTANCE = {
    name: `projects/${PROJECT_ID}/instances/i`,
    bigtable: {projectId: PROJECT_ID},
  };

  const CLUSTER_NAME = `${INSTANCE.name}/clusters/${CLUSTER_ID}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Cluster: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cluster: any;

  before(() => {
    Cluster = proxyquire('../src/cluster.js', {
      '@google-cloud/promisify': fakePromisify,
      './backup.js': {Backup: FakeBackup},
    }).Cluster;
  });

  beforeEach(() => {
    cluster = new Cluster(INSTANCE, CLUSTER_ID);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize Bigtable instance', () => {
      assert.strictEqual(cluster.bigtable, INSTANCE.bigtable);
    });

    it('should localize Instance instance', () => {
      assert.strictEqual(cluster.instance, INSTANCE);
    });

    it('should expand id into full resource path', () => {
      assert.strictEqual(cluster.name, CLUSTER_NAME);
    });

    it('should leave full cluster names unaltered', () => {
      const cluster = new Cluster(INSTANCE, CLUSTER_ID);
      assert.strictEqual(cluster.name, CLUSTER_NAME);
    });

    it('should localize the id from the name', () => {
      assert.strictEqual(cluster.id, CLUSTER_ID);
    });

    it('should leave full cluster names unaltered and localize the id from the name', () => {
      const cluster = new Cluster(INSTANCE, CLUSTER_NAME);
      assert.strictEqual(cluster.name, CLUSTER_NAME);
      assert.strictEqual(cluster.id, CLUSTER_ID);
    });

    it('should throw if cluster id in wrong format', () => {
      const id = `clusters/${CLUSTER_ID}`;
      assert.throws(() => {
        new Cluster(INSTANCE, id);
      }, Error);
    });
  });

  describe('getLocation_', () => {
    const LOCATION = 'us-central2-d';

    it('should format the location name', () => {
      const expected = `projects/${PROJECT_ID}/locations/${LOCATION}`;
      const formatted = Cluster.getLocation_(PROJECT_ID, LOCATION);
      assert.strictEqual(formatted, expected);
    });

    it('should format the location name for project name with /', () => {
      const PROJECT_NAME = 'projects/grape-spaceship-123';
      const expected = `projects/${PROJECT_NAME.split(
        '/',
      ).pop()}/locations/${LOCATION}`;
      const formatted = Cluster.getLocation_(PROJECT_NAME, LOCATION);
      assert.strictEqual(formatted, expected);
    });

    it('should not re-format a complete location', () => {
      const complete = `projects/p/locations/${LOCATION}`;
      const formatted = Cluster.getLocation_(PROJECT_ID, complete);
      assert.strictEqual(formatted, complete);
    });
  });

  describe('getStorageType_', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const types: any = {
      unspecified: 0,
      ssd: 1,
      hdd: 2,
    };

    it('should default to unspecified', () => {
      assert.strictEqual(Cluster.getStorageType_(), types.unspecified);
    });

    it('should lowercase a type', () => {
      assert.strictEqual(Cluster.getStorageType_('SSD'), types.ssd);
    });

    Object.keys(types).forEach(type => {
      it('should get the storage type for "' + type + '"', () => {
        assert.strictEqual(Cluster.getStorageType_(type), types[type]);
      });
    });
  });

  describe('backup', () => {
    it('should return a Backup object', () => {
      const backupId = 'backup-id';
      const backup = cluster.backup(backupId);
      assert(backup instanceof FakeBackup);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const args = (backup as any).calledWith_;
      assert.strictEqual(args[0], cluster);
      assert.strictEqual(args[1], backupId);
    });
  });

  describe('create', () => {
    it('should call createCluster from instance', done => {
      const options = {};

      cluster.instance.createCluster = (
        id: string,
        options_: {},
        callback: Function,
      ) => {
        assert.strictEqual(id, cluster.id);
        assert.strictEqual(options_, options);
        callback(); // done()
      };

      cluster.create(options, done);
    });

    it('should not require options', done => {
      cluster.instance.createCluster = (
        id: string,
        options: {},
        callback: Function,
      ) => {
        assert.deepStrictEqual(options, {});
        callback(); // done()
      };

      cluster.create(done);
    });
  });

  describe('createBackup', () => {
    it('should throw if backup id not provided', () => {
      assert.throws(() => {
        cluster.createBackup();
      }, /An id is required to create a backup\./);
    });

    it('should throw if config is not provided', () => {
      assert.throws(() => {
        cluster.createBackup('id');
      }, /A configuration object is required\./);
    });

    it('should throw if a source table is not provided', () => {
      assert.throws(() => {
        cluster.createBackup('id', {});
      }, /A source table is required to backup\./);
    });

    it('should accept table as a string', done => {
      const table = 'table-name';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.backup.sourceTable, table);
        done();
      };

      cluster.createBackup(
        'id',
        {
          table,
        },
        assert.ifError,
      );
    });

    it('should accept table as a Table object', done => {
      const table = {
        name: 'table-name',
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.backup.sourceTable, table.name);
        done();
      };

      cluster.createBackup(
        'id',
        {
          table,
        },
        assert.ifError,
      );
    });

    it('should not include table in request options', done => {
      const table = 'table-name';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(typeof config.reqOpts.backup.table, 'undefined');
        done();
      };

      cluster.createBackup(
        'id',
        {
          table,
        },
        assert.ifError,
      );
    });

    it('should convert a Date expireTime to a struct', done => {
      const expireTime = new Date();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.backup.expireTime,
          new PreciseDate(expireTime).toStruct(),
        );
        done();
      };

      cluster.createBackup(
        'id',
        {
          table: 'table-id',
          expireTime,
        },
        assert.ifError,
      );
    });

    it('should send correct request', done => {
      const backupId = 'backup-id';
      const table = 'table-name';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'createBackup');
        assert.deepStrictEqual(config.reqOpts, {
          parent: cluster.name,
          backupId,
          backup: {
            sourceTable: table,
            configProperty: true,
          },
        });
        assert.strictEqual(typeof config.gaxOpts, 'undefined');
        done();
      };

      cluster.createBackup(
        backupId,
        {
          table,
          configProperty: true,
        },
        assert.ifError,
      );
    });

    it('should accept gaxOptions', done => {
      const table = 'table-name';
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      cluster.createBackup(
        'id',
        {
          table,
          gaxOptions,
        },
        assert.ifError,
      );
    });

    it('should not include gaxOptions in request options', done => {
      const table = 'table-name';
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(typeof config.reqOpts.gaxOptions, 'undefined');
        done();
      };

      cluster.createBackup(
        'id',
        {
          table,
          gaxOptions,
        },
        assert.ifError,
      );
    });

    it('should execute callback with error and original args', done => {
      const error = new Error('Error.');
      const args = [{}, {}, {}];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        callback(error, ...args);
      };

      cluster.createBackup(
        'id',
        {
          table: 'table-name',
        },
        (err: Error, backup: {}, ..._args: Array<{}>) => {
          assert.strictEqual(err, error);
          assert.strictEqual(backup, undefined);
          assert.deepStrictEqual(Array.from(_args), args);
          done();
        },
      );
    });

    it('should execute callback with Backup and original args', done => {
      const id = 'backup-id';
      const backupInstance = {};
      const args = [{}, {}, {}];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        callback(null, ...args);
      };

      cluster.backup = (_id: string) => {
        assert.strictEqual(_id, id);
        return backupInstance;
      };

      cluster.createBackup(
        id,
        {
          table: 'table-name',
        },
        (err: Error, backup: {}, ..._args: Array<{}>) => {
          assert.ifError(err);
          assert.strictEqual(backup, backupInstance);
          assert.deepStrictEqual(Array.from(_args), args);
          done();
        },
      );
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'deleteCluster');

        assert.deepStrictEqual(config.reqOpts, {
          name: cluster.name,
        });

        assert.deepStrictEqual(config.gaxOpts, {});

        callback(); // done()
      };

      cluster.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      cluster.delete(gaxOptions, assert.ifError);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      cluster.getMetadata = (gaxOptions: CallOptions) => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      };

      cluster.exists(assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};

      cluster.getMetadata = (gaxOptions_: CallOptions) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };

      cluster.exists(gaxOptions, assert.ifError);
    });

    it('should return false if error code is 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 5;

      cluster.getMetadata = (gaxOptions: CallOptions, callback: Function) => {
        callback(error);
      };

      cluster.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if code is not 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 'NOT-5';
      cluster.getMetadata = (_: CallOptions, callback: Function) => {
        callback(error);
      };
      cluster.exists((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      cluster.getMetadata = (gaxOptions: CallOptions, callback: Function) => {
        callback(null, {});
      };
      cluster.exists((err: Error, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const gaxOptions = {};
      cluster.getMetadata = (gaxOptions_: {}) => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      };
      cluster.get(gaxOptions, assert.ifError);
    });

    it('should not require gaxOptions', done => {
      cluster.getMetadata = (gaxOptions: CallOptions) => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      };

      cluster.get(assert.ifError);
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');

      cluster.getMetadata = (gaxOptions: CallOptions, callback: Function) => {
        callback(error);
      };

      cluster.get((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const metadata = {};

      cluster.getMetadata = (gaxOptions: CallOptions, callback: Function) => {
        callback(null, metadata);
      };

      cluster.get((err: Error, cluster_: {}, metadata_: {}) => {
        assert.ifError(err);
        assert.strictEqual(cluster_, cluster);
        assert.strictEqual(metadata_, metadata);
        done();
      });
    });
  });

  describe('getBackups', () => {
    it('should send the correct request', done => {
      const options = {a: 'b'};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'listBackups');
        assert.deepStrictEqual(config.reqOpts, {
          parent: cluster.name,
          pageSize: undefined,
          pageToken: undefined,
          ...options,
        });
        assert.deepStrictEqual(config.gaxOpts, {});

        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should locate pagination settings from gaxOptions', done => {
      const options = {
        gaxOptions: {
          pageSize: 'size',
          pageToken: 'token',
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(
          config.reqOpts.pageSize,
          options.gaxOptions.pageSize,
        );
        assert.strictEqual(
          config.reqOpts.pageToken,
          options.gaxOptions.pageToken,
        );
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should prefer pageSize and pageToken from options over gaxOptions', done => {
      const options = {
        pageSize: 'size-good',
        pageToken: 'token-good',
        gaxOptions: {
          pageSize: 'size-bad',
          pageToken: 'token-bad',
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.pageSize, options.pageSize);
        assert.strictEqual(config.reqOpts.pageToken, options.pageToken);
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should remove extraneous pagination settings from request', done => {
      const options = {
        gaxOptions: {
          pageSize: 'size',
          pageToken: 'token',
        },
        autoPaginate: true,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(typeof config.gaxOpts.pageSize, 'undefined');
        assert.strictEqual(typeof config.gaxOpts.pageToken, 'undefined');
        assert.strictEqual(typeof config.reqOpts.autoPaginate, 'undefined');
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const options = {
        gaxOptions: {a: 'b'},
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(typeof config.reqOpts.gaxOptions, 'undefined');
        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should not send gaxOptions as request options', done => {
      const options = {
        gaxOptions: {a: 'b'},
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert(Object.keys(options.gaxOptions).every(k => !config.reqOpts[k]));
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should set autoPaginate from options', done => {
      const options = {
        autoPaginate: true,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts.autoPaginate, options.autoPaginate);
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should prefer autoPaginate from gaxOpts', done => {
      const options = {
        autoPaginate: false,
        gaxOptions: {
          autoPaginate: true,
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts.autoPaginate, true);
        done();
      };

      cluster.getBackups(options, assert.ifError);
    });

    it('should execute callback with error and correct response arguments', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        callback(error, [], null, apiResponse);
      };

      cluster.getBackups(
        (err: Error, backups: [], nextQuery: {}, apiResp: {}) => {
          assert.strictEqual(err, error);
          assert.deepStrictEqual(backups, []);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        },
      );
    });

    it('should execute callback with Backup instances', done => {
      const rawBackup = {name: 'long/formatted/name', a: 'b'};
      const backupInstance = {};

      cluster.backup = (id: string) => {
        assert.strictEqual(id, rawBackup.name.split('/').pop());
        return backupInstance;
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        callback(null, [rawBackup]);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.getBackups((err: Error, backups: any[]) => {
        assert.ifError(err);
        assert.deepStrictEqual(backups, [backupInstance]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual((backups[0] as any)!.metadata, rawBackup);
        done();
      });
    });

    it('should create Backup from correct cluster when using - as an id', done => {
      cluster.id = '-';

      const clusterId = 'cluster-id';
      const backupId = 'backup-id';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        callback(null, [
          {
            name: `projects/project-id/clusters/${clusterId}/backups/${backupId}`,
          },
        ]);
      };

      cluster.instance.cluster = (id: string) => {
        assert.strictEqual(id, clusterId);

        return {
          backup: (id: string) => {
            assert.strictEqual(id, backupId);
            setImmediate(done);
            return {};
          },
        };
      };

      cluster.getBackups(assert.ifError);
    });

    it('should execute callback with prepared nextQuery', done => {
      const options = {pageToken: '1'};
      const nextQuery = {pageToken: '2'};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        callback(null, [], nextQuery);
      };

      cluster.getBackups(options, (err: Error, backups: [], _nextQuery: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(_nextQuery, nextQuery);
        done();
      });
    });
  });

  describe('getBackupsStream', () => {
    it('should make correct request', done => {
      const options = {a: 'b'};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'listBackupsStream');
        assert.deepStrictEqual(config.reqOpts, {
          parent: cluster.name,
          ...options,
        });
        assert.strictEqual(typeof config.gaxOpts, 'undefined');
        setImmediate(done);
        return new PassThrough();
      };

      cluster.getBackupsStream(options);
    });

    it('should accept gaxOptions', done => {
      const options = {gaxOptions: {}};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        setImmediate(done);
        return new PassThrough();
      };

      cluster.getBackupsStream(options);
    });

    it('should not include gaxOptions in reqOpts', done => {
      const options = {gaxOptions: {a: 'b'}};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert(Object.keys(options.gaxOptions).every(k => !config.reqOpts[k]));
        setImmediate(done);
        return new PassThrough();
      };

      cluster.getBackupsStream(options);
    });

    it('should transform response backups into Backup objects', done => {
      const rawBackup = {name: 'long/formatted/name', a: 'b'};
      const backupInstance = {};
      const requestStream = new Readable({
        objectMode: true,
        read() {
          this.push(rawBackup);
          this.push(null);
        },
      });

      cluster.backup = (id: string) => {
        assert.strictEqual(id, rawBackup.name.split('/').pop());
        return backupInstance;
      };

      cluster.bigtable.request = () => requestStream;

      cluster
        .getBackupsStream()
        .on('error', done)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .on('data', (backup: any) => {
          assert.strictEqual(backup, backupInstance);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          assert.strictEqual((backup as any).metadata, rawBackup);
          done();
        });
    });

    it('should create Backup from correct cluster when using - as an id', done => {
      cluster.id = '-';

      const clusterId = 'cluster-id';
      const backupId = 'backup-id';

      const requestStream = new Readable({
        objectMode: true,
        read() {
          this.push({
            name: `projects/project-id/clusters/${clusterId}/backups/${backupId}`,
          });
          this.push(null);
        },
      });

      cluster.instance.cluster = (id: string) => {
        assert.strictEqual(id, clusterId);

        return {
          backup: (id: string) => {
            assert.strictEqual(id, backupId);
            setImmediate(done);
            return {};
          },
        };
      };

      cluster.bigtable.request = () => requestStream;

      cluster.getBackupsStream().on('error', done);
    });
  });

  describe('getMetadata', () => {
    it('should make correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'getCluster');
        assert.deepStrictEqual(config.reqOpts, {
          name: cluster.name,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };
      cluster.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      cluster.getMetadata(gaxOptions, assert.ifError);
    });

    it('should update metadata', done => {
      const metadata = {};
      cluster.bigtable.request = (config: {}, callback: Function) => {
        callback(null, metadata);
      };
      cluster.getMetadata(() => {
        assert.strictEqual(cluster.metadata, metadata);
        done();
      });
    });

    it('should execute callback with original arguments', done => {
      const args = [{}, {}];
      cluster.bigtable.request = (config: {}, callback: Function) => {
        callback(...args);
      };
      cluster.getMetadata((...argsies: Array<{}>) => {
        assert.deepStrictEqual([].slice.call(argsies), args);
        done();
      });
    });
  });

  describe('setMetadata', () => {
    beforeEach(() => {
      const metadata = {
        location: 'projects/{{projectId}}/locations/us-east4-b',
      };
      cluster.metadata = metadata;
    });

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'partialUpdateCluster');
        assert.strictEqual(config.reqOpts.cluster.name, CLUSTER_NAME);
        callback(); // done()
      };

      cluster.setMetadata({nodes: 2}, done);
    });

    it('should provide the proper request options asynchronously', async () => {
      let currentRequestInput = null;
      (cluster.bigtable.request as Function) = (config: RequestOptions) => {
        currentRequestInput = config;
      };
      for (const options of createClusterOptionsList) {
        await cluster.setMetadata(options);
        snapshot({
          input: {
            id: cluster.id,
            options: options,
          },
          output: {
            config: currentRequestInput,
          },
        });
      }
    });

    it('should respect the nodes option', done => {
      const options = {
        nodes: 3,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.cluster.serveNodes, options.nodes);
        done();
      };

      cluster.setMetadata(options, assert.ifError);
    });

    it('should accept and pass user provided input through', done => {
      const options = {
        nodes: 3,
        location: 'us-west2-b',
        defaultStorageType: 'exellent_type',
      };

      const expectedReqOpts = ClusterUtils.getRequestFromMetadata(
        options,
        CLUSTER_NAME,
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        done();
      };

      cluster.setMetadata(options, assert.ifError);
    });

    it('should respect the gaxOptions', done => {
      const options = {
        nodes: 3,
      };
      const gaxOptions = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cluster.bigtable.request = (config: any) => {
        assert.strictEqual(config.reqOpts.cluster.serveNodes, options.nodes);
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      cluster.setMetadata(options, gaxOptions, assert.ifError);
    });

    // eslint-disable-next-line no-restricted-properties
    it('should execute callback with all arguments', done => {
      const args = [{}, {}];
      cluster.bigtable.request = (config: {}, callback: Function) => {
        callback(...args);
      };
      const name =
        'projects/{{projectId}}/instances/fake-instance/clusters/fake-cluster';
      cluster.name = name;
      cluster.setMetadata({nodes: 2}, (...argsies: Array<{}>) => {
        assert.deepStrictEqual([].slice.call(argsies), args);
        done();
      });
    });
  });
});
