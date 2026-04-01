// Copyright 2020 Google LLC
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

import {PreciseDate} from '@google-cloud/precise-date';
import * as promisify from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, describe, it, afterEach} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as pumpify from 'pumpify';
import {ServiceError} from 'google-gax';

import * as clusterTypes from '../src/cluster';
import * as backupTypes from '../src/backup';
import * as instanceTypes from '../src/instance';
import * as sinon from 'sinon';

import {Bigtable, RequestOptions} from '../src';
import {Table} from '../src/table';
import {generateId} from '../system-test/common';
import {Backup} from '../src/backup';

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promisifyAll(klass: Function, options: any) {
    if (klass.name === 'Backup') {
      promisified = true;
      assert.deepStrictEqual(options.exclude, [
        'endDate',
        'expireDate',
        'startDate',
      ]);
    }
  },
});

class FakeTable extends Table {
  calledWith_: Array<{}>;
  constructor(...args: [instanceTypes.Instance, string]) {
    super(args[0], args[1]);
    this.calledWith_ = args;
  }
}

class FakeInstance extends instanceTypes.Instance {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calledWith_: Array<{}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: [Bigtable, string]) {
    super(...args);
    this.calledWith_ = args;
  }
}

describe('Bigtable/Backup', () => {
  const BACKUP_ID = 'my-backup';
  let CLUSTER: clusterTypes.Cluster;
  let BACKUP_NAME: string;

  let Backup: typeof backupTypes.Backup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let backup: any;

  before(() => {
    Backup = proxyquire('../src/backup.js', {
      '@google-cloud/promisify': fakePromisify,
      './table.js': {Table: FakeTable},
      './instance.js': {Instance: FakeInstance},
      pumpify,
    }).Backup;
  });

  beforeEach(() => {
    CLUSTER = {
      bigtable: {} as Bigtable,
      name: 'a/b/c/d',
      instance: {
        name: 'instance-name',
      },
    } as clusterTypes.Cluster;
    BACKUP_NAME = CLUSTER.name + '/backups/' + BACKUP_ID;
    backup = new Backup(CLUSTER, BACKUP_ID);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize Bigtable instance', () => {
      assert.strictEqual(backup.bigtable, CLUSTER.bigtable);
    });

    it('should localize the Cluster instance', () => {
      assert.strictEqual(backup.cluster, CLUSTER);
    });

    it('should localize name and id when provided with name', () => {
      const backup = new Backup(CLUSTER, BACKUP_NAME);
      assert.strictEqual(backup.name, BACKUP_NAME);
      assert.strictEqual(backup.id, BACKUP_ID);
    });

    it('should throw if name is in wrong format', () => {
      const badName = '/other/cluster/backup/id';
      assert.throws(() => {
        new Backup(CLUSTER, badName);
      }, /Backup id '\/other\/cluster\/backup\/id' is not formatted correctly.\nPlease use the format 'my-backup' or 'a\/b\/c\/d\/backups\/my-backup'\./);
    });

    it('should localize name and id when provided with id', () => {
      const backup = new Backup(CLUSTER, BACKUP_ID);
      assert.strictEqual(backup.name, BACKUP_NAME);
      assert.strictEqual(backup.id, BACKUP_ID);
    });
  });

  describe('endDate accessor', () => {
    it('should throw if metadata is not set', () => {
      assert.throws(() => {
        backup.metadata = undefined;
        backup.endDate;
      }, /An endTime is required to convert to Date./);
    });

    it('should throw if endTime is not set on metadata', () => {
      assert.throws(() => {
        backup.metadata = {};
        backup.endDate;
      }, /An endTime is required to convert to Date./);
    });

    it('should return PreciseDate', () => {
      const seconds = 30;
      const nanos = 1000;
      const expectedEndDate = new PreciseDate({seconds, nanos});
      backup.metadata = {
        endTime: {seconds, nanos},
      };
      const convertedEndDate = backup.endDate;
      assert.deepStrictEqual(convertedEndDate, expectedEndDate);
    });
  });

  describe('expireDate accessor', () => {
    it('should throw if metadata is not set', () => {
      assert.throws(() => {
        backup.metadata = undefined;
        backup.expireDate;
      }, /An expireTime is required to convert to Date./);
    });

    it('should throw if expireTime is not set on metadata', () => {
      assert.throws(() => {
        backup.metadata = {};
        backup.expireDate;
      }, /An expireTime is required to convert to Date./);
    });

    it('should return PreciseDate', () => {
      const seconds = 30;
      const nanos = 1000;
      const expectedExpireDate = new PreciseDate({seconds, nanos});
      backup.metadata = {
        expireTime: {seconds, nanos},
      };
      const convertedExpireDate = backup.expireDate;
      assert.deepStrictEqual(convertedExpireDate, expectedExpireDate);
    });
  });

  describe('startDate accessor', () => {
    it('should throw if metadata is not set', () => {
      assert.throws(() => {
        backup.metadata = undefined;
        backup.startDate;
      }, /A startTime is required to convert to Date./);
    });

    it('should throw if startTime is not set on metadata', () => {
      assert.throws(() => {
        backup.metadata = {};
        backup.startDate;
      }, /A startTime is required to convert to Date./);
    });

    it('should return PreciseDate', () => {
      const seconds = 30;
      const nanos = 1000;
      const expectedStartDate = new PreciseDate({seconds, nanos});
      backup.metadata = {
        startTime: {seconds, nanos},
      };
      const convertedStartDate = backup.startDate;
      assert.deepStrictEqual(convertedStartDate, expectedStartDate);
    });
  });

  describe('create', () => {
    it('should call createBackup from cluster', done => {
      const config = {};

      backup.cluster.createBackup = (
        id: string,
        _config: {},
        callback: Function,
      ) => {
        assert.strictEqual(id, backup.id);
        assert.strictEqual(_config, config);
        callback(); // done()
      };

      backup.create(config, done);
    });
  });

  describe('copy', () => {
    beforeEach(() => {
      backup.bigtable.request = (
        config: RequestOptions,
        callback: (err: ServiceError | null, res: RequestOptions) => void,
      ) => {
        callback(null, config);
      };
    });

    it('should correctly copy backup from the cluster to a custom project', done => {
      const destinationProjectId = generateId('project');
      const bigtable = new Bigtable({projectId: destinationProjectId});
      const backupId = generateId('backup');
      const newBackupId = generateId('backup');
      const backup = new Backup(CLUSTER, backupId);
      const destinationInstanceId = generateId('instance');
      const destinationClusterId = generateId('cluster');
      const instance = new FakeInstance(bigtable, destinationInstanceId);
      // In callback, config is object received in request function so must be
      // of type any so that this test can compile and so that asserts can test
      // its properties.
      backup.copy(
        {
          cluster: new clusterTypes.Cluster(instance, destinationClusterId),
          id: newBackupId,
          expireTime: new PreciseDate(177),
          gaxOptions: {
            timeout: 139,
          },
        },
        (
          err?: ServiceError | Error | null,
          backup?: Backup | null,
          config?: any,
        ) => {
          assert.strictEqual(
            backup?.name,
            `projects/${destinationProjectId}/instances/${destinationInstanceId}/clusters/${destinationClusterId}/backups/${newBackupId}`,
          );
          assert.strictEqual(config?.client, 'BigtableTableAdminClient');
          assert.strictEqual(config?.method, 'copyBackup');
          assert.deepStrictEqual(config?.reqOpts, {
            parent: `projects/${destinationProjectId}/instances/${destinationInstanceId}/clusters/${destinationClusterId}`,
            backupId: newBackupId,
            sourceBackup: `a/b/c/d/backups/${backupId}`,
            expireTime: {
              seconds: 0,
              nanos: 177000000,
            },
          });
          assert.deepStrictEqual(config?.gaxOpts, {
            timeout: 139,
          });
          done();
        },
      );
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'deleteBackup');
        assert.deepStrictEqual(config.reqOpts, {
          name: backup.name,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        callback(); // done()
      };

      backup.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      backup.bigtable.request = (config: {gaxOpts: {}}) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      backup.delete(gaxOptions, assert.ifError);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      backup.getMetadata = (options: {}) => {
        assert.deepStrictEqual(options, {});
        done();
      };
      backup.exists(assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};
      backup.getMetadata = (options: {}) => {
        assert.strictEqual(options, gaxOptions);
        done();
      };
      backup.exists(gaxOptions, assert.ifError);
    });

    it('should return false if error code is 5', done => {
      const error = new Error('Error.') as ServiceError;
      error.code = 5;
      backup.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      backup.exists((err: Error | null, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if code is not 5', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 'NOT-5';
      backup.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.exists((err: any) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      backup.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(null, {});
      };
      backup.exists((err: Error | null, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const gaxOptions = {};
      backup.getMetadata = (options: {}) => {
        assert.strictEqual(options, gaxOptions);
        done();
      };
      backup.get(gaxOptions, assert.ifError);
    });

    it('should not require an options object', done => {
      backup.getMetadata = (options: {}) => {
        assert.deepStrictEqual(options, {});
        done();
      };
      backup.get(assert.ifError);
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');
      backup.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      backup.get((err: Error | null) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const apiResponse = {};
      backup.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(null, apiResponse);
      };
      backup.get((err: Error | null, _backup: {}, _apiResponse: {}) => {
        assert.ifError(err);
        assert.strictEqual(_backup, backup);
        assert.strictEqual(_apiResponse, apiResponse);
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should correctly call Table#getIamPolicy()', done => {
      sinon.stub(Table.prototype, 'getIamPolicy').callsFake((opt, callback) => {
        assert.deepStrictEqual(opt, {});
        callback(); // done()
      });
      backup.getIamPolicy(done);
    });

    it('should accept options', done => {
      const options = {gaxOptions: {}, requestedPolicyVersion: 1};

      sinon.stub(Table.prototype, 'getIamPolicy').callsFake((opt, callback) => {
        assert.strictEqual(opt, options);
        callback(); // done()
      });
      backup.getIamPolicy(options, done);
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'getBackup');
        assert.deepStrictEqual(config.reqOpts, {
          name: backup.name,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };

      backup.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      backup.bigtable.request = (config: {gaxOpts: {}}) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      backup.getMetadata(gaxOptions, assert.ifError);
    });

    it('should update the metadata', done => {
      const response = {};
      backup.bigtable.request = (config: {}, callback: Function) => {
        callback(null, response);
      };
      backup.getMetadata((err: Error | null, metadata: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(backup.metadata, response);
        done();
      });
    });
  });

  describe('restore', () => {
    it('should delegate to Backup#restoreTo()', done => {
      const tableId = 'table-id';
      const callback = assert.ifError;

      backup.restoreTo = (
        config: backupTypes.RestoreTableConfig,
        cb: backupTypes.RestoreTableCallback,
      ) => {
        assert.strictEqual(config.tableId, tableId);
        assert.strictEqual(config.instance, backup.cluster.instance);
        assert.strictEqual(config.gaxOptions, undefined);
        assert.strictEqual(cb, callback);
        done();
      };

      backup.restore(tableId, callback);
    });

    it('should accept gaxOptions', done => {
      const tableId = 'table-id';
      const gaxOptions = {};

      backup.restoreTo = (config: backupTypes.RestoreTableConfig) => {
        assert.strictEqual(config.tableId, tableId);
        assert.strictEqual(config.instance, backup.cluster.instance);
        assert.strictEqual(config.gaxOptions, gaxOptions);
        done();
      };

      backup.restore(tableId, gaxOptions, assert.ifError);
    });
  });

  describe('restoreTo', () => {
    it('should send the correct request', done => {
      const tableId = 'table-id';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'restoreTable');
        assert.deepStrictEqual(config.reqOpts, {
          parent: backup.cluster.instance.name,
          tableId,
          backup: backup.name,
        });
        assert.strictEqual(config.gaxOpts, undefined);
        done();
      };

      (backup as backupTypes.Backup).restoreTo({tableId}, assert.ifError);
    });

    it('should accept instance as instanceId', done => {
      const tableId = 'table-id';
      const instance = 'diff-instance';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.parent.match(/instances\/([^/]+)/)![1],
          instance,
        );
        done();
      };
      backup.bigtable.instance = (id: string) => {
        return new instanceTypes.Instance(backup.bigtable, id);
      };

      (backup as backupTypes.Backup).restoreTo(
        {tableId, instance},
        assert.ifError,
      );
    });

    it('should accept instance as instanceName', done => {
      const tableId = 'table-id';
      const instance = `${backup.bigtable.projectName}/instances/diff-instance`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.parent, instance);
        done();
      };
      backup.bigtable.instance = (name: string) => {
        return new instanceTypes.Instance(backup.bigtable, name);
      };

      (backup as backupTypes.Backup).restoreTo(
        {tableId, instance},
        assert.ifError,
      );
    });

    it('should accept instance as Instance object', done => {
      const tableId = 'table-id';
      const instanceName = `${backup.bigtable.projectName}/instances/diff-instance`;
      const instance = new FakeInstance(backup.bigtable, instanceName);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.parent, instance.name);
        done();
      };

      backup.restoreTo({tableId, instance}, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const tableId = 'table-id';
      const gaxOptions = {};

      backup.bigtable.request = (config: {gaxOpts: {}}) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      (backup as backupTypes.Backup).restoreTo(
        {tableId, gaxOptions},
        assert.ifError,
      );
    });

    it('should execute callback with error', done => {
      const tableId = 'table-id';
      const error = new Error('Error.');
      const args = [{a: 'b'}, {c: 'd'}, {e: 'f'}];

      backup.bigtable.request = (config: {}, callback: Function) => {
        callback(error, ...args);
      };

      backup.restoreTo(
        {tableId},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: Error | null, table: {}, ..._args: any[]) => {
          assert.strictEqual(err, error);
          assert.strictEqual(table, undefined);
          assert.deepStrictEqual(_args, args);
          done();
        },
      );
    });

    it('should execute callback with created Table', done => {
      const tableId = 'table-id';
      const args = [{a: 'b'}, {c: 'd'}, {e: 'f'}];
      const tableInstance = {};

      backup.cluster.instance = {
        table: (_tableId: string) => {
          assert.strictEqual(_tableId, tableId);
          return tableInstance;
        },
      };

      backup.bigtable.request = (config: {}, callback: Function) => {
        callback(null, ...args);
      };

      backup.restoreTo(
        {tableId},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: Error | null, table: {}, ..._args: any[]) => {
          assert.ifError(err);
          assert.strictEqual(table, tableInstance);
          assert.deepStrictEqual(_args, args);
          done();
        },
      );
    });
  });

  describe('setMetadata', () => {
    it('should send the correct request', done => {
      const metadata = {
        testProperty: 'value',
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any, callback: Function) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'updateBackup');
        assert.deepStrictEqual(config.reqOpts, {
          backup: {
            name: backup.name,
            ...metadata,
          },
          updateMask: {
            paths: ['test_property'],
          },
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        callback(); // done()
      };

      backup.setMetadata(metadata, done);
    });

    it('should accept gaxOptions', done => {
      const metadata = {};
      const gaxOptions = {};

      backup.bigtable.request = (config: {gaxOpts: {}}) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      backup.setMetadata(metadata, gaxOptions, assert.ifError);
    });

    it('should convert expireTime Date to struct', done => {
      const metadata = {
        expireTime: new Date(),
      };
      const expectedExpireTime = new PreciseDate(
        metadata.expireTime,
      ).toStruct();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backup.bigtable.request = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.backup.expireTime,
          expectedExpireTime,
        );
        done();
      };

      backup.setMetadata(metadata, assert.ifError);
    });

    it('should execute the callback and update the metadata', done => {
      const metadata = {};
      const response = {};

      backup.bigtable.request = (config: {}, callback: Function) => {
        callback(null, response);
      };

      backup.setMetadata(
        metadata,
        (err: Error | null, metadata: {}, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(metadata, response);
          assert.strictEqual(backup.metadata, response);
          assert.strictEqual(apiResponse, response);
          done();
        },
      );
    });
  });

  describe('setIamPolicy', () => {
    afterEach(() => {
      sinon.restore();
    });
    const policy = {};
    it('should correctly call Table#setIamPolicy()', done => {
      sinon
        .stub(Table.prototype, 'setIamPolicy')
        .callsFake((_policy, gaxOpts, callback) => {
          assert.strictEqual(_policy, policy);
          assert.deepStrictEqual(gaxOpts, {});
          callback(); // done()
        });
      backup.setIamPolicy(policy, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      sinon
        .stub(Table.prototype, 'setIamPolicy')
        .callsFake((_policy, gaxOpts, callback) => {
          assert.strictEqual(_policy, policy);
          assert.strictEqual(gaxOpts, gaxOptions);
          callback(); // done()
        });
      backup.setIamPolicy(policy, gaxOptions, done);
    });
  });

  describe('testIamPermissions', () => {
    afterEach(() => {
      sinon.restore();
    });

    const permissions = 'bigtable.backups.get';
    it('should properly call Table#testIamPermissions', done => {
      sinon
        .stub(Table.prototype, 'testIamPermissions')
        .callsFake((_permissions, gaxOpts, callback) => {
          assert.strictEqual(_permissions, permissions);
          assert.deepStrictEqual(gaxOpts, {});
          callback(); // done()
        });
      backup.testIamPermissions(permissions, done);
    });

    it('should accept permissions as array', done => {
      const permissions = [
        'bigtable.backups.get',
        'bigtable.backups.delete',
        'bigtable.backups.update',
        'bigtable.backups.restore',
      ];
      sinon
        .stub(Table.prototype, 'testIamPermissions')
        .callsFake((_permissions, gaxOpts, callback) => {
          assert.strictEqual(_permissions, permissions);
          assert.deepStrictEqual(gaxOpts, {});
          callback(); // done()
        });
      backup.testIamPermissions(permissions, done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      sinon
        .stub(Table.prototype, 'testIamPermissions')
        .callsFake((_permissions, gaxOpts, callback) => {
          assert.strictEqual(_permissions, permissions);
          assert.strictEqual(gaxOpts, gaxOptions);
          callback(); // done()
        });
      backup.testIamPermissions(permissions, gaxOptions, done);
    });
  });
});
