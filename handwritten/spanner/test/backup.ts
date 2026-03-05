/**
 * Copyright 2020 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

import * as assert from 'assert';
import {EventEmitter} from 'events';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {util} from '@google-cloud/common';
import * as pfy from '@google-cloud/promisify';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import {Instance, Spanner} from '../src';
import * as bu from '../src/backup';
import {GetMetadataResponse} from '../src/backup';
import {grpc} from 'google-gax';
import {CLOUD_RESOURCE_HEADER} from '../src/common';
import {google} from '../protos/protos';
import EncryptionType = google.spanner.admin.database.v1.CreateBackupEncryptionConfig.EncryptionType;

let promisified = false;
// let callbackified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'Backup') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'getState',
      'getExpireTime',
      'exists',
    ]);
  },
});

class FakeGrpcServiceObject extends EventEmitter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calledWith_: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    super();
    this.calledWith_ = args;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakeCodec: any = {
  encode: util.noop,
  Int() {},
  Float() {},
  SpannerDate() {},
};

describe('Backup', () => {
  const sandbox = sinon.createSandbox();

  // tslint:disable-next-line variable-name
  let Backup: typeof bu.Backup;

  const INSTANCE = {
    request: util.noop,
    requestStream: util.noop,
    formattedName_: 'instance-name',
    databases_: new Map(),
  } as {} as Instance;

  const BACKUP_NAME = 'backup-name';
  const DATABASE_NAME = 'database-name';
  const DATABASE_FORMATTED_NAME =
    INSTANCE.formattedName_ + '/databases/' + DATABASE_NAME;
  const BACKUP_FORMATTED_NAME =
    INSTANCE.formattedName_ + '/backups/' + BACKUP_NAME;
  const BACKUP_EXPIRE_TIME = '2019-02-08T10:34:29.481145231Z';
  const EXP_BACKUP_EXPIRE_TIME = Spanner.timestamp(BACKUP_EXPIRE_TIME);
  const BACKUP_VERSION_TIME = '2019-02-07T10:34:29.481145231Z';
  const EXP_BACKUP_VERSION_TIME = Spanner.timestamp(BACKUP_VERSION_TIME);

  let backup: bu.Backup;

  before(() => {
    Backup = proxyquire('../src/backup.js', {
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
    }).Backup;
  });

  beforeEach(() => {
    fakeCodec.encode = util.noop;
    backup = new Backup(INSTANCE, BACKUP_NAME);
  });

  afterEach(() => sandbox.restore());

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the request function', () => {
      assert.strictEqual(backup.request, INSTANCE.request);
    });

    it('should localize the formatted instance name', () => {
      assert.strictEqual(
        backup.instanceFormattedName_,
        INSTANCE.formattedName_,
      );
    });

    it('should format the name', () => {
      const formatName_ = Backup.formatName_;
      const formattedName = 'formatted-name';

      Backup.formatName_ = (instanceName, name) => {
        Backup.formatName_ = formatName_;

        assert.strictEqual(instanceName, INSTANCE.formattedName_);
        assert.strictEqual(name, BACKUP_NAME);

        return formattedName;
      };

      const backup = new Backup(INSTANCE, BACKUP_NAME);
      assert(backup.formattedName_, formattedName);
    });

    it('should set the backup id', () => {
      assert.strictEqual(backup.id, BACKUP_NAME);
    });

    it('should set the resourceHeader_', () => {
      assert.deepStrictEqual(backup.resourceHeader_, {
        [CLOUD_RESOURCE_HEADER]: backup.instanceFormattedName_,
      });
    });
  });

  describe('create', () => {
    const INSTANCE_NAME = 'instance-name';
    const BACKUP_NAME = 'backup-name';

    it('should make the correct request', done => {
      const QUERY = {};
      const ORIGINAL_QUERY = extend({}, QUERY);
      const expectedReqOpts = extend({}, QUERY, {
        parent: INSTANCE_NAME,
        backupId: BACKUP_NAME,
        backup: {
          name: BACKUP_FORMATTED_NAME,
          database: DATABASE_FORMATTED_NAME,
          expireTime: EXP_BACKUP_EXPIRE_TIME.toStruct(),
        },
      });

      backup.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'createBackup');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, QUERY);
        assert.deepStrictEqual(QUERY, ORIGINAL_QUERY);
        assert.deepStrictEqual(config.headers, backup.resourceHeader_);
        done();
      };

      backup.create(
        {
          databasePath: DATABASE_FORMATTED_NAME,
          expireTime: BACKUP_EXPIRE_TIME,
        },
        assert.ifError,
      );
    });

    it('should accept gaxOptions and a callback', done => {
      const gaxOptions = {
        timeout: 1000,
      };

      backup.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      backup.create(
        {
          databasePath: DATABASE_FORMATTED_NAME,
          expireTime: BACKUP_EXPIRE_TIME,
          gaxOptions,
        },
        assert.ifError,
      );
    });

    it('should accept an encryption config', done => {
      const encryptionConfig = {
        encryptionType: EncryptionType.CUSTOMER_MANAGED_ENCRYPTION,
        kmsKeyName: 'some/key/path',
      };

      backup.request = config => {
        assert.strictEqual(config.reqOpts.encryptionConfig, encryptionConfig);
        done();
      };

      backup.create(
        {
          databasePath: DATABASE_FORMATTED_NAME,
          expireTime: BACKUP_EXPIRE_TIME,
          encryptionConfig,
        },
        assert.ifError,
      );
    });

    it('should call Spanner.timestamp() with expireTime', done => {
      const spanner_timestamp_ = Spanner.timestamp;

      Spanner.timestamp = timestamp => {
        Spanner.timestamp = spanner_timestamp_;

        assert.deepStrictEqual(timestamp, BACKUP_EXPIRE_TIME);

        return EXP_BACKUP_EXPIRE_TIME;
      };

      backup.request = config => {
        assert.deepStrictEqual(
          config.reqOpts.backup.expireTime,
          EXP_BACKUP_EXPIRE_TIME.toStruct(),
        );
        done();
      };

      backup.create(
        {
          databasePath: DATABASE_FORMATTED_NAME,
          expireTime: BACKUP_EXPIRE_TIME,
        },
        assert.ifError,
      );
    });

    it('versionTime should not be set by default', done => {
      backup.request = config => {
        assert.strictEqual(config.reqOpts.backup.versionTime, undefined);
        done();
      };

      backup.create(
        {
          databasePath: DATABASE_FORMATTED_NAME,
          expireTime: BACKUP_EXPIRE_TIME,
        },
        assert.ifError,
      );
    });

    it('should make request with versionTime when provided', done => {
      backup.request = config => {
        assert.deepStrictEqual(
          config.reqOpts.backup.versionTime,
          EXP_BACKUP_VERSION_TIME.toStruct(),
        );
        done();
      };

      backup.create(
        {
          databasePath: DATABASE_FORMATTED_NAME,
          expireTime: BACKUP_EXPIRE_TIME,
          versionTime: BACKUP_VERSION_TIME,
        },
        assert.ifError,
      );
    });

    describe('error', () => {
      const API_RESPONSE = {};
      const REQUEST_RESPONSE_ARGS = [new Error('Error.'), null, API_RESPONSE];

      beforeEach(() => {
        backup.request = (config, callback: Function) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
      });

      it('should execute callback with original arguments', done => {
        backup.create(
          {
            databasePath: DATABASE_FORMATTED_NAME,
            expireTime: BACKUP_EXPIRE_TIME,
          },
          (err, bk, op, resp) => {
            assert.deepStrictEqual(err, REQUEST_RESPONSE_ARGS[0]);
            assert.strictEqual(bk, null);
            assert.strictEqual(op, null);
            assert.deepStrictEqual(resp, API_RESPONSE);
            done();
          },
        );
      });
    });

    describe('success', () => {
      const OPERATION = {};
      const API_RESPONSE = {};

      beforeEach(() => {
        backup.request = (config, callback: Function) => {
          callback(null, OPERATION, API_RESPONSE);
        };
      });

      it('should execute callback with a Backup and Operation', done => {
        backup.create(
          {
            databasePath: DATABASE_FORMATTED_NAME,
            expireTime: BACKUP_EXPIRE_TIME,
          },
          (err, bk, op, resp) => {
            assert.ifError(err);
            assert.strictEqual(bk, backup);
            assert.strictEqual(op, OPERATION);
            assert.strictEqual(resp, API_RESPONSE);
            done();
          },
        );
      });
    });
  });

  describe('getMetadata', () => {
    const BACKUP_NAME = 'backup-name';

    it('should make the correct request', done => {
      const QUERY = {};
      const ORIGINAL_QUERY = extend({}, QUERY);
      const expectedReqOpts = extend({}, QUERY, {
        name: BACKUP_FORMATTED_NAME,
      });

      backup.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'getBackup');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, QUERY);
        assert.deepStrictEqual(QUERY, ORIGINAL_QUERY);
        assert.deepStrictEqual(config.headers, backup.resourceHeader_);
        done();
      };

      backup.getMetadata(assert.ifError);
    });

    it('should accept gaxOpts', done => {
      const gaxOptions = {
        timeout: 1000,
      };

      backup.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      backup.getMetadata(gaxOptions, assert.ifError);
    });

    it('should get backup info', done => {
      const INFO = {
        name: 'backup-name',
        database: 'database-name',
        expireTime: BACKUP_EXPIRE_TIME,
      };
      const fakeInfo = {
        name: BACKUP_NAME,
        database: DATABASE_NAME,
        expireTime: BACKUP_EXPIRE_TIME,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const REQUEST_RESPONSE_ARGS: any = [null, INFO, {}];

      backup.request = (config, callback: Function) => {
        callback(...REQUEST_RESPONSE_ARGS);
      };

      backup.getMetadata((...args) => {
        assert.ifError(args[0]);
        assert.strictEqual(args[0], REQUEST_RESPONSE_ARGS[0]);
        const backupInfo = args[1];
        assert.deepStrictEqual(backupInfo, fakeInfo);
        done();
      });
    });

    it('should update metadata', done => {
      const metadata = {};
      backup.request = (config: {}, callback: Function) => {
        callback(null, metadata);
      };
      backup.getMetadata(() => {
        assert.strictEqual(backup.metadata, metadata);
        done();
      });
    });

    it('should call callback with error', done => {
      const error = new Error('Error');
      backup.request = (config: {}, callback: Function) => {
        callback(error);
      };
      backup.getMetadata(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('getState', () => {
    it('should return the state from backup info', async () => {
      const BACKUP_INFO_RESPONSE: GetMetadataResponse = [
        {
          state: 'CREATING',
        },
      ];
      backup.getMetadata = async () => BACKUP_INFO_RESPONSE;

      const result = await backup.getState();
      assert.strictEqual(result, 'CREATING');
    });

    it('should throw errors', async () => {
      const err = {code: grpc.status.INTERNAL};
      backup.getMetadata = async () => {
        throw err;
      };

      try {
        await backup.getState();
        assert.fail('Should have rethrown error');
      } catch (thrown) {
        assert.deepStrictEqual(thrown, err);
      }
    });

    it('should accept callback and return state', done => {
      const BACKUP_INFO_RESPONSE: GetMetadataResponse = [
        {
          state: 'CREATING',
        },
      ];
      backup.getMetadata = async () => BACKUP_INFO_RESPONSE;

      backup.getState((err, state) => {
        if (err) {
          assert.ifError(err);
        }
        assert.strictEqual(state, 'CREATING');
        done();
      });
    });

    it('should accept callback and return errors', done => {
      const err = {code: grpc.status.INTERNAL};
      backup.getMetadata = async () => {
        throw err;
      };

      backup.getState(error => {
        assert.strictEqual(error, err);
        done();
      });
    });
  });

  describe('getExpireTime', () => {
    it('should return the expire time from backup info', async () => {
      const BACKUP_INFO_RESPONSE: GetMetadataResponse = [
        {
          expireTime: EXP_BACKUP_EXPIRE_TIME.toStruct(),
        },
      ];
      backup.getMetadata = async () => BACKUP_INFO_RESPONSE;

      const result = await backup.getExpireTime();
      assert.deepStrictEqual(result, EXP_BACKUP_EXPIRE_TIME);
    });

    it('should throw errors', async () => {
      const err = {code: grpc.status.INTERNAL};
      backup.getMetadata = async () => {
        throw err;
      };

      try {
        await backup.getExpireTime();
        assert.fail('Should have rethrown error');
      } catch (thrown) {
        assert.deepStrictEqual(thrown, err);
      }
    });

    it('should accept callback and return the expire time from backup info', done => {
      const BACKUP_INFO_RESPONSE: GetMetadataResponse = [
        {
          expireTime: EXP_BACKUP_EXPIRE_TIME.toStruct(),
        },
      ];
      backup.getMetadata = async () => BACKUP_INFO_RESPONSE;

      backup.getExpireTime((err, result) => {
        assert.deepStrictEqual(result, EXP_BACKUP_EXPIRE_TIME);
        done();
      });
    });

    it('should accept callback and return errors', done => {
      const err = {code: grpc.status.INTERNAL};
      backup.getMetadata = async () => {
        throw err;
      };

      backup.getExpireTime(error => {
        assert.deepStrictEqual(error, err);
        done();
      });
    });
  });

  describe('exists', () => {
    it('should return true when backup info indicates backup exists', async () => {
      const BACKUP_INFO_RESPONSE: GetMetadataResponse = [{}];
      backup.getMetadata = async () => BACKUP_INFO_RESPONSE;

      const result = await backup.exists();
      assert.strictEqual(result, true);
    });

    it('should return false when backup does not exist', async () => {
      backup.getMetadata = async () => {
        throw {code: grpc.status.NOT_FOUND};
      };

      const result = await backup.exists();
      assert.strictEqual(result, false);
    });

    it('should rethrow other errors', async () => {
      const err = {code: grpc.status.INTERNAL};
      backup.getMetadata = async () => {
        throw err;
      };

      try {
        await backup.exists();
        assert.fail('Should have rethrown error');
      } catch (thrown) {
        assert.deepStrictEqual(thrown, err);
      }
    });

    it('should accept backup and return true when backup info indicates backup exists', done => {
      const BACKUP_INFO_RESPONSE: GetMetadataResponse = [{}];
      backup.getMetadata = async () => BACKUP_INFO_RESPONSE;

      backup.exists((err, result) => {
        if (err) {
          assert.ifError(err);
        }
        assert.strictEqual(result, true);
        done();
      });
    });

    it('should accept callback and return false when backup does not exist', done => {
      backup.getMetadata = async () => {
        throw {code: grpc.status.NOT_FOUND};
      };

      backup.exists((err, result) => {
        if (err) {
          assert.ifError(err);
        }
        assert.strictEqual(result, false);
        done();
      });
    });

    it('should accept callback and return other errors', done => {
      const err = {code: grpc.status.INTERNAL};
      backup.getMetadata = async () => {
        throw err;
      };

      backup.exists(error => {
        assert.strictEqual(error, err);
        done();
      });
    });
  });

  describe('updateExpireTime', () => {
    const NEW_EXPIRE_TIME = '2019-03-08T10:34:29.481145231Z';
    const EXP_NEW_EXPIRE_TIME = Spanner.timestamp(NEW_EXPIRE_TIME);

    it('should make the correct request', done => {
      const QUERY = {};
      const ORIGINAL_QUERY = extend({}, QUERY);
      const expectedReqOpts = extend({}, QUERY, {
        backup: {
          name: BACKUP_FORMATTED_NAME,
          expireTime: EXP_NEW_EXPIRE_TIME.toStruct(),
        },
        updateMask: {
          paths: ['expire_time'],
        },
      });

      backup.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'updateBackup');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, QUERY);
        assert.deepStrictEqual(QUERY, ORIGINAL_QUERY);
        assert.deepStrictEqual(config.headers, backup.resourceHeader_);
        done();
      };

      backup.updateExpireTime(NEW_EXPIRE_TIME, assert.ifError);
    });

    it('should accept gaxOpts', done => {
      const gaxOpts = {
        timeout: 1000,
      };

      backup.request = config => {
        assert.deepStrictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      backup.updateExpireTime(NEW_EXPIRE_TIME, gaxOpts, assert.ifError);
    });

    it('should execute callback with the API resonse', done => {
      const API_RESPONSE = {
        name: 'backup-name',
        database: 'database-name',
        expireTime: EXP_NEW_EXPIRE_TIME,
      };

      backup.request = (config, callback: Function) => {
        callback(null, API_RESPONSE);
      };

      backup.updateExpireTime(NEW_EXPIRE_TIME, (err, resp) => {
        assert.ifError(err);
        assert.strictEqual(resp, API_RESPONSE);
        done();
      });
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      const QUERY = {};
      const ORIGINAL_QUERY = extend({}, QUERY);
      const expectedReqOpts = extend({}, QUERY, {
        name: BACKUP_FORMATTED_NAME,
      });

      backup.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'deleteBackup');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, QUERY);
        assert.deepStrictEqual(QUERY, ORIGINAL_QUERY);
        assert.deepStrictEqual(config.headers, backup.resourceHeader_);
        done();
      };

      void backup.delete();
    });

    it('should accept gaxOpts', done => {
      const gaxOpts = {
        timeout: 1000,
      };

      backup.request = config => {
        assert.deepStrictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      backup.delete(gaxOpts, assert.ifError);
    });

    it('should execute callback with original arguments', done => {
      const REQUEST_RESPONSE_ARGS = [new Error('Error.')];

      backup.request = (config, callback: Function) => {
        callback(...REQUEST_RESPONSE_ARGS);
      };

      backup.delete(err => {
        assert.deepStrictEqual(err, REQUEST_RESPONSE_ARGS[0]);
        done();
      });
    });
  });

  describe('formatName_', () => {
    it('should return the name if already formatted', () => {
      assert.strictEqual(
        Backup.formatName_(INSTANCE.formattedName_, BACKUP_FORMATTED_NAME),
        BACKUP_FORMATTED_NAME,
      );
    });

    it('should format the name', () => {
      const formattedName_ = Backup.formatName_(
        INSTANCE.formattedName_,
        BACKUP_NAME,
      );
      assert.strictEqual(formattedName_, BACKUP_FORMATTED_NAME);
    });
  });
});
