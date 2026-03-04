/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

/* eslint-disable prefer-rest-params */

import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import {ApiError} from '@google-cloud/common';
import {grpc} from 'google-gax';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import * as pfy from '@google-cloud/promisify';
import * as sinon from 'sinon';
import snakeCase = require('lodash.snakecase');
import {Duplex} from 'stream';

import * as inst from '../src/instance';
import {Spanner, Database, RequestConfig} from '../src';
import {toArray} from '../src/helper';
import {SessionPoolOptions} from '../src/session-pool';
import {Backup} from '../src/backup';
import {PreciseDate} from '@google-cloud/precise-date';
import {CLOUD_RESOURCE_HEADER, AFE_SERVER_TIMING_HEADER} from '../src/common';

let promisified = false;
const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'Instance') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['database', 'backup']);
  },
});

class FakeDatabase {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeGrpcServiceObject {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeBackup {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

describe('Instance', () => {
  // tslint:disable-next-line variable-name
  let Instance: typeof inst.Instance;
  let instance: inst.Instance;

  const sandbox = sinon.createSandbox();

  const SPANNER = {
    request: () => {},
    requestStream: () => {},
    projectId: 'project-id',
    instances_: new Map(),
    projectFormattedName_: 'projects/project-id',
  } as {} as Spanner;

  const NAME = 'instance-name';

  before(() => {
    Instance = proxyquire('../src/instance.js', {
      './common-grpc/service-object': {
        GrpcServiceObject: FakeGrpcServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
      './database.js': {Database: FakeDatabase},
      './backup.js': {Backup: FakeBackup},
    }).Instance;
  });

  beforeEach(() => {
    instance = new Instance(SPANNER, NAME);
  });

  describe('instantiation', () => {
    it('should localize an database map', () => {
      assert(instance.databases_ instanceof Map);
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should format the name', () => {
      const formatName_ = Instance.formatName_;
      const formattedName = 'formatted-name';

      Instance.formatName_ = (projectId, name) => {
        Instance.formatName_ = formatName_;

        assert.strictEqual(projectId, SPANNER.projectId);
        assert.strictEqual(name, NAME);

        return formattedName;
      };

      const instance = new Instance(SPANNER, NAME);
      assert(instance.formattedName_, formattedName);
    });

    it('should localize the request function', done => {
      const spannerInstance = extend({}, SPANNER);

      spannerInstance.request = function () {
        assert.strictEqual(this, spannerInstance);
        done();
      };

      const instance = new Instance(spannerInstance, NAME);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance as any).request();
    });

    it('should localize the requestStream function', done => {
      const spannerInstance = extend({}, SPANNER);
      const CONFIG = {};

      spannerInstance.requestStream = function (config) {
        assert.strictEqual(this, spannerInstance);
        assert.strictEqual(config, CONFIG);
        done();
      };

      const instance = new Instance(spannerInstance, NAME);
      instance.requestStream(CONFIG as RequestConfig);
    });

    it('should inherit from ServiceObject', done => {
      const options = {};
      const spannerInstance = extend({}, SPANNER, {
        createInstance(name, options_, callback) {
          assert.strictEqual(name, instance.formattedName_);
          assert.strictEqual(options_, options);
          callback(); // done()
        },
      });

      const instance = new Instance(spannerInstance, NAME);
      assert(instance instanceof FakeGrpcServiceObject);

      const calledWith = instance.calledWith_[0];

      assert.strictEqual(calledWith.parent, spannerInstance);
      assert.strictEqual(calledWith.id, NAME);
      assert.deepStrictEqual(calledWith.methods, {create: true});

      calledWith.createMethod(null, options, done);
    });

    it('should set the commonHeaders_', () => {
      assert.deepStrictEqual(instance.commonHeaders_, {
        [CLOUD_RESOURCE_HEADER]: instance.formattedName_,
        [AFE_SERVER_TIMING_HEADER]: 'true',
      });
    });
  });

  describe('formatName_', () => {
    const PATH = 'projects/' + SPANNER.projectId + '/instances/' + NAME;

    it('should return the name if already formatted', () => {
      assert.strictEqual(Instance.formatName_(SPANNER.projectId, PATH), PATH);
    });

    it('should format the name', () => {
      const formattedName = Instance.formatName_(SPANNER.projectId, NAME);
      assert.strictEqual(formattedName, PATH);
    });
  });

  describe('createDatabase', () => {
    const NAME = 'database-name';
    const PATH = 'projects/project-id/databases/' + NAME;

    const OPTIONS = {
      a: 'b',
    } as inst.CreateDatabaseOptions;
    const ORIGINAL_OPTIONS = extend({}, OPTIONS);

    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        void instance.createDatabase(null!);
      }, /A name is required to create a database\./);
    });

    it('should make the correct default request', done => {
      instance.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'createDatabase');
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
          createStatement: 'CREATE DATABASE `' + NAME + '`',
        });
        assert.strictEqual(config.gaxOpts, undefined);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);

        done();
      };

      instance.createDatabase(NAME, assert.ifError);
    });

    it('should accept options', done => {
      instance.request = config => {
        assert.deepStrictEqual(OPTIONS, ORIGINAL_OPTIONS);

        const expectedReqOpts = extend(
          {
            parent: instance.formattedName_,
            createStatement: 'CREATE DATABASE `' + NAME + '`',
          },
          OPTIONS,
        );

        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        done();
      };

      instance.createDatabase(NAME, OPTIONS, assert.ifError);
    });

    it('should not alter the original options', done => {
      const options = Object.assign({}, OPTIONS, {
        poolOptions: {},
        poolCtor: {},
      });
      const originalOptions = Object.assign({}, options);
      instance.request = (config, callback: Function) => {
        assert.strictEqual(config.reqOpts.poolOptions, undefined);
        callback();
      };

      instance.createDatabase(NAME, options, err => {
        if (err) {
          assert.ifError(err);
        }
        assert.deepStrictEqual(options, originalOptions);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const options = Object.assign({}, OPTIONS, {gaxOptions: {}});
      instance.request = config => {
        assert.strictEqual(config.gaxOpts, options.gaxOptions);
        assert.strictEqual(config.reqOpts.gaxOptions, undefined);

        done();
      };

      instance.createDatabase(NAME, options, assert.ifError);
    });

    it('should only use the name in the createStatement', done => {
      instance.request = config => {
        const expectedReqOpts = extend(
          {
            parent: instance.formattedName_,
            createStatement: 'CREATE DATABASE `' + NAME + '`',
          },
          OPTIONS,
        );

        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        done();
      };

      instance.createDatabase(PATH, OPTIONS, assert.ifError);
    });

    describe('options.poolOptions/poolCtor', () => {
      it('should allow specifying session pool options', done => {
        const poolOptions = {};

        const options = extend({}, OPTIONS, {
          poolOptions,
        });

        instance.request = (config, callback: Function) => {
          assert.strictEqual(config.reqOpts.poolOptions, undefined);
          callback();
        };

        instance.database = (name, poolOptions_) => {
          assert.strictEqual(poolOptions_, poolOptions);
          done();
          return {} as Database;
        };

        instance.createDatabase(PATH, options, assert.ifError);
      });

      it('should allow specifying session pool constructor', done => {
        const poolCtor = {};

        const options = extend({}, OPTIONS, {
          poolCtor,
        });

        instance.request = (config, callback: Function) => {
          assert.strictEqual(config.reqOpts.poolCtor, undefined);
          callback();
        };

        instance.database = (name, poolOptions_) => {
          assert.strictEqual(poolOptions_, poolCtor);
          done();
          return {} as Database;
        };

        instance.createDatabase(PATH, options, assert.ifError);
      });
    });

    describe('options.schema', () => {
      it('should arrify and rename to extraStatements', done => {
        const SCHEMA = 'schema';

        const options = extend({}, OPTIONS, {
          schema: SCHEMA,
        });

        instance.request = config => {
          assert.deepStrictEqual(config.reqOpts.extraStatements, [SCHEMA]);
          assert.strictEqual(config.reqOpts.schema, undefined);
          done();
        };

        instance.createDatabase(NAME, options, assert.ifError);
      });

      it('should arrify and rename to extraStatements from array style schema filed', done => {
        const SCHEMA = ['schema', 'schema2'];

        const options = extend({}, OPTIONS, {
          schema: SCHEMA,
        });

        instance.request = config => {
          assert.deepStrictEqual(config.reqOpts.extraStatements, SCHEMA);
          assert.strictEqual(config.reqOpts.schema, undefined);
          done();
        };

        instance.createDatabase(NAME, options, assert.ifError);
      });
    });

    describe('error', () => {
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

      beforeEach(() => {
        instance.request = (config, callback: Function) => {
          callback(ERROR, null, API_RESPONSE);
        };
      });

      it('should execute callback with error & API response', done => {
        instance.createDatabase(NAME, OPTIONS, (err, db, op, resp) => {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', () => {
      const OPERATION = {};
      const API_RESPONSE = {};

      beforeEach(() => {
        instance.request = (config, callback: Function) => {
          callback(null, OPERATION, API_RESPONSE);
        };
      });

      it('should exec callback with a Database and Operation', done => {
        const fakeDatabaseInstance = {};

        instance.database = name => {
          assert.strictEqual(name, NAME);
          return fakeDatabaseInstance as Database;
        };

        instance.createDatabase(NAME, OPTIONS, (err, db, op, resp) => {
          assert.ifError(err);
          assert.strictEqual(db, fakeDatabaseInstance);
          assert.strictEqual(op, OPERATION);
          assert.strictEqual(resp, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('database', () => {
    const NAME = 'database-name';

    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        instance.database(null!);
      }, /A name is required to access a Database object\./);
    });

    it('should create and cache a Database', () => {
      const cache = instance.databases_;
      const poolOptions = {};

      assert.strictEqual(cache.has(NAME), false);

      const database = instance.database(
        NAME,
        poolOptions,
      ) as {} as FakeDatabase;

      assert(database instanceof FakeDatabase);
      assert.strictEqual(database.calledWith_[0], instance);
      assert.strictEqual(database.calledWith_[1], NAME);
      assert.strictEqual(database.calledWith_[2], poolOptions);
      assert.strictEqual(database, cache.get(NAME));
    });

    it('should re-use cached objects', () => {
      const cache = instance.databases_;
      const fakeDatabase = {} as Database;

      cache.set(NAME, fakeDatabase);

      const database = instance.database(NAME);

      assert.strictEqual(database, fakeDatabase);
    });

    it('should create and cache different objects when called with different session pool options', () => {
      const cache = instance.databases_;
      const fakeDatabase = {} as Database;
      const fakeDatabaseWithSessionPoolOptions = {} as Database;
      const emptySessionPoolOptions = {} as SessionPoolOptions;
      const fakeSessionPoolOptions = {
        min: 1000,
        max: 1000,
      } as SessionPoolOptions;
      const fakeSessionPoolOptionsInOtherOrder = {
        max: 1000,
        min: 1000,
      } as SessionPoolOptions;

      cache.set(NAME, fakeDatabase);
      cache.set(
        NAME +
          '/' +
          JSON.stringify(Object.entries(fakeSessionPoolOptions).sort()),
        fakeDatabaseWithSessionPoolOptions,
      );

      const database = instance.database(NAME);
      const databaseWithEmptyOptions = instance.database(
        NAME,
        emptySessionPoolOptions,
      );
      const databaseWithOptions = instance.database(
        NAME,
        fakeSessionPoolOptions,
      );
      const databaseWithOptionsInOtherOrder = instance.database(
        NAME,
        fakeSessionPoolOptionsInOtherOrder,
      );

      assert.strictEqual(database, fakeDatabase);
      assert.strictEqual(databaseWithEmptyOptions, fakeDatabase);
      assert.strictEqual(
        databaseWithOptions,
        fakeDatabaseWithSessionPoolOptions,
      );
      assert.strictEqual(
        databaseWithOptionsInOtherOrder,
        fakeDatabaseWithSessionPoolOptions,
      );
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      instance.parent = SPANNER;
    });

    it('should close all cached databases', done => {
      let closed = false;

      instance.databases_.set('key', {
        close() {
          closed = true;
          return Promise.resolve();
        },
      } as {} as Database);

      instance.request = () => {
        assert.strictEqual(closed, true);
        assert.strictEqual(instance.databases_.size, 0);
        done();
      };

      instance.delete(assert.ifError);
    });

    it('should ignore closing errors', done => {
      instance.databases_.set('key', {
        close() {
          return Promise.reject(new Error('err'));
        },
      } as {} as Database);

      instance.request = () => {
        done();
      };

      instance.delete(assert.ifError);
    });

    it('should make the correct request', done => {
      instance.request = (config, callback: Function) => {
        assert.strictEqual(config.client, 'InstanceAdminClient');
        assert.strictEqual(config.method, 'deleteInstance');
        assert.deepStrictEqual(config.reqOpts, {
          name: instance.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);
        callback(); // done()
      };

      instance.delete(done);
    });

    it('should remove the Instance from the cache', done => {
      const cache = instance.parent.instances_;

      instance.request = (config, callback) => {
        callback(null);
      };

      cache.set(instance.id, instance);
      assert.strictEqual(cache.get(instance.id), instance);

      instance.delete(err => {
        assert.ifError(err);
        assert.strictEqual(cache.has(instance.id), false);
        done();
      });
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      instance.request = (config, callback: Function) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        callback(); // done()
      };

      instance.delete(gaxOptions, done);
    });
  });

  describe('exists', () => {
    afterEach(() => sandbox.restore());

    it('should return any non-404 like errors', done => {
      const error = {code: 3};

      sandbox
        .stub(instance, 'getMetadata')
        .callsFake(
          (
            opts_:
              | inst.GetInstanceMetadataOptions
              | inst.GetInstanceMetadataCallback,
            cb,
          ) => {
            cb = typeof opts_ === 'function' ? opts_ : cb;
            cb(error as grpc.ServiceError);
          },
        );

      instance.exists((err, exists) => {
        assert.strictEqual(err, error);
        assert.strictEqual(exists, null);
        done();
      });
    });

    it('should return true if error is absent', done => {
      sandbox
        .stub(instance, 'getMetadata')
        .callsFake(
          (
            opts_:
              | inst.GetInstanceMetadataOptions
              | inst.GetInstanceMetadataCallback,
            cb,
          ) => {
            cb = typeof opts_ === 'function' ? opts_ : cb;
            cb(null);
          },
        );

      instance.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should return false if not found error if present', done => {
      const error = {code: 5};

      sandbox
        .stub(instance, 'getMetadata')
        .callsFake(
          (
            opts_:
              | inst.GetInstanceMetadataOptions
              | inst.GetInstanceMetadataCallback,
            callback,
          ) => {
            callback = typeof opts_ === 'function' ? opts_ : callback;

            callback(error as grpc.ServiceError);
          },
        );

      instance.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should accept and pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};
      (instance.getMetadata as Function) = options => {
        assert.strictEqual(options.gaxOptions, gaxOptions);
        done();
      };
      instance.exists(gaxOptions, assert.ifError);
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const options = {};

      sandbox.stub(instance, 'getMetadata').callsFake(() => done());

      instance.get(options, assert.ifError);
    });

    it('should accept and pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};
      (instance.getMetadata as Function) = options => {
        assert.strictEqual(options.gaxOptions, gaxOptions);
        done();
      };

      instance.get({gaxOptions}, assert.ifError);
    });

    it('should not require an options object', done => {
      sandbox.stub(instance, 'getMetadata').callsFake(() => done());

      instance.get(assert.ifError);
    });

    it('should accept and pass `fields` string as is', () => {
      const fieldNames = 'nodeCount';
      const spyMetadata = sandbox.spy(instance, 'getMetadata');

      instance.get({fieldNames}, assert.ifError);

      assert.ok(spyMetadata.calledWith({fieldNames}));
    });

    it('should accept and pass `fields` array as is', () => {
      const fieldNames = ['name', 'labels', 'nodeCount'];
      const spyMetadata = sandbox.stub(instance, 'getMetadata');

      instance.get({fieldNames}, assert.ifError);

      assert.ok(spyMetadata.calledWith({fieldNames}));
    });

    describe('autoCreate', () => {
      const error = new ApiError('Error.') as grpc.ServiceError;
      error.code = 5;

      const OPTIONS = {
        autoCreate: true,
      };

      const OPERATION = {
        listeners: {},
        on(eventName, callback) {
          OPERATION.listeners[eventName] = callback;
          return OPERATION;
        },
      };

      beforeEach(() => {
        OPERATION.listeners = {};

        sandbox
          .stub(instance, 'getMetadata')
          .callsFake((opts_: {}, callback) => callback!(error));

        instance.create = (options, callback) => {
          callback(null, null, OPERATION);
        };
      });

      it('should accet and pass createInstanceRequest options to create', done => {
        const config = 'config';
        const nodes = 1;
        const displayName = 'displayName';
        const labels = {label: 'mayLabael'};

        instance.create = options => {
          assert.strictEqual(options.fieldNames, undefined);
          assert.strictEqual(options.autoCreate, undefined);
          assert.deepStrictEqual(options, {config, nodes, displayName, labels});
          done();
        };
        instance.get(
          {
            autoCreate: true,
            config,
            nodes,
            displayName,
            labels,
            fieldNames: 'labels',
          },
          assert.ifError,
        );
      });

      it('should accept and pass gaxOptions to instance#create', done => {
        const gaxOptions = {timeout: 1000};
        const options = Object.assign({}, OPTIONS, {gaxOptions});
        instance.create = options => {
          assert.deepStrictEqual(options.gaxOptions, gaxOptions);
          done();
        };

        instance.get(options, assert.ifError);
      });

      it('should call create', done => {
        const createOptions: {autoCreate?: {}} = Object.assign({}, OPTIONS);
        delete createOptions.autoCreate;
        instance.create = options => {
          assert.deepStrictEqual(options, createOptions);
          done();
        };

        instance.get(OPTIONS, assert.ifError);
      });

      it('should return error if create failed', done => {
        const error = new Error('Error.');

        instance.create = (options, callback) => {
          callback(error);
        };

        instance.get(OPTIONS, err => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should return operation error', done => {
        const error = new Error('Error.');

        setImmediate(() => {
          OPERATION.listeners['error'](error);
        });

        instance.get(OPTIONS, err => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should execute callback if opereation succeeded', done => {
        const metadata = {};

        setImmediate(() => {
          OPERATION.listeners['complete'](metadata);
        });

        instance.get(OPTIONS, (err, instance_, apiResponse) => {
          assert.ifError(err);
          assert.strictEqual(instance_, instance);
          assert.strictEqual(instance.metadata, metadata);
          assert.strictEqual(metadata, apiResponse);
          done();
        });
      });
    });

    it('should not auto create without error code 5', done => {
      const error = new Error('Error.') as grpc.ServiceError;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error as any).code = 'NOT-5';

      const options = {
        autoCreate: true,
      };

      sandbox
        .stub(instance, 'getMetadata')
        .callsFake((opts_: {}, callback) => callback!(error));

      instance.create = () => {
        throw new Error('Should not create.');
      };

      instance.get(options, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not auto create unless requested', done => {
      const error = new ApiError('Error.') as grpc.ServiceError;
      error.code = 5;

      sandbox
        .stub(instance, 'getMetadata')
        .callsFake((opts_: {}, callback) => callback!(error));

      instance.create = () => {
        throw new Error('Should not create.');
      };

      instance.get(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.') as grpc.ServiceError;

      sandbox
        .stub(instance, 'getMetadata')
        .callsFake((opts_: {}, callback) => callback!(error));

      instance.get(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const apiResponse = {} as inst.IInstance;

      sandbox
        .stub(instance, 'getMetadata')
        .callsFake((opts_: {}, callback) => callback!(null, apiResponse));

      instance.get((err, instance_, apiResponse_) => {
        assert.ifError(err);
        assert.strictEqual(instance_, instance);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('getDatabases', () => {
    const pageSize = 3;
    const OPTIONS = {
      pageSize,
      gaxOptions: {autoPaginate: false},
    } as inst.GetDatabasesOptions;
    const ORIGINAL_OPTIONS = extend({}, OPTIONS);

    it('should make the correct request', done => {
      const expectedReqOpts = extend({}, OPTIONS, {
        parent: instance.formattedName_,
      });
      delete expectedReqOpts.gaxOptions;

      instance.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'listDatabases');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, OPTIONS);
        assert.deepStrictEqual(OPTIONS, ORIGINAL_OPTIONS);

        assert.deepStrictEqual(config.gaxOpts, OPTIONS.gaxOptions);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);

        done();
      };

      instance.getDatabases(OPTIONS, assert.ifError);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', done => {
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const options = {gaxOptions};
      const expectedReqOpts: {gaxOptions?: {}} = extend(
        {},
        options,
        {
          parent: instance.formattedName_,
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );
      delete expectedReqOpts.gaxOptions;

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getDatabases(options, assert.ifError);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', done => {
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = {
        pageSize: optionsPageSize,
        pageToken: optionsPageToken,
        gaxOptions,
      };
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: optionsPageSize, pageToken: optionsPageToken},
      );
      delete expectedReqOpts.gaxOptions;

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getDatabases(options, assert.ifError);
    });

    it('should not require options', done => {
      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
        });

        assert.deepStrictEqual(config.gaxOpts, {});

        done();
      };

      instance.getDatabases(assert.ifError);
    });

    describe('error', () => {
      const REQUEST_RESPONSE_ARGS = [new Error('Error.'), null, null, {}];

      beforeEach(() => {
        instance.request = (config, callback: Function) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
      });

      it('should execute callback with original arguments', done => {
        instance.getDatabases(OPTIONS, (...args) => {
          assert.deepStrictEqual(args, REQUEST_RESPONSE_ARGS);
          done();
        });
      });
    });

    describe('success', () => {
      const DATABASES = [
        {
          name: 'database-name',
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const REQUEST_RESPONSE_ARGS: any = [null, DATABASES, null, {}];

      beforeEach(() => {
        instance.request = (config, callback) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
      });

      it('should create and return Database objects', done => {
        const fakeDatabaseInstance = {};

        instance.database = (name, options) => {
          assert.strictEqual(name, DATABASES[0].name);
          assert.strictEqual((options as SessionPoolOptions).min, 0);
          return fakeDatabaseInstance as Database;
        };

        instance.getDatabases(OPTIONS, (...args) => {
          assert.ifError(args[0]);
          assert.strictEqual(args[0], REQUEST_RESPONSE_ARGS[0]);
          const database = args[1]!.pop();
          assert.strictEqual(database, fakeDatabaseInstance);
          assert.strictEqual(database!.metadata, REQUEST_RESPONSE_ARGS[1][0]);
          assert.strictEqual(args[2], REQUEST_RESPONSE_ARGS[2]);
          assert.strictEqual(args[3], REQUEST_RESPONSE_ARGS[3]);
          done();
        });
      });

      it('should return a complete nextQuery object', done => {
        const pageSize = 1;
        const filter = 'filter';
        const NEXTPAGEREQUEST = {
          parent: instance.formattedName_,
          pageSize,
          filter,
          pageToken: 'pageToken',
        };
        const REQUEST_RESPONSE_ARGS = [null, [], NEXTPAGEREQUEST, {}];

        const GETDATABASESOPTIONS = {
          pageSize,
          filter,
          gaxOptions: {timeout: 1000, autoPaginate: false},
        };
        const EXPECTEDNEXTQUERY = extend(
          {},
          GETDATABASESOPTIONS,
          NEXTPAGEREQUEST,
        );
        instance.request = (config, callback) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
        function callback(err, databases, nextQuery) {
          assert.deepStrictEqual(nextQuery, EXPECTEDNEXTQUERY);
          done();
        }
        instance.getDatabases(GETDATABASESOPTIONS, callback);
      });
    });
  });

  describe('getDatabasesStream', () => {
    const OPTIONS = {
      gaxOptions: {autoPaginate: false},
    } as inst.GetDatabasesOptions;
    const returnValue = {} as Duplex;

    it('should make and return the correct gax API call', () => {
      const expectedReqOpts = extend({}, OPTIONS, {
        parent: instance.formattedName_,
      });
      delete expectedReqOpts.gaxOptions;

      instance.requestStream = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'listDatabasesStream');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, OPTIONS);

        assert.deepStrictEqual(config.gaxOpts, OPTIONS.gaxOptions);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);

        return returnValue;
      };

      const returnedValue = instance.getDatabasesStream(OPTIONS);
      assert.strictEqual(returnedValue, returnValue);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', () => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const options = {gaxOptions};
      const expectedReqOpts = extend(
        {},
        {
          parent: instance.formattedName_,
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );

      instance.requestStream = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        return returnValue;
      };

      const returnedValue = instance.getDatabasesStream(options);
      assert.strictEqual(returnedValue, returnValue);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', () => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = {
        pageSize: optionsPageSize,
        pageToken: optionsPageToken,
        gaxOptions,
      };
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: optionsPageSize, pageToken: optionsPageToken},
      );
      delete expectedReqOpts.gaxOptions;

      instance.requestStream = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        return returnValue;
      };

      const returnedValue = instance.getDatabasesStream(options);
      assert.strictEqual(returnedValue, returnValue);
    });

    it('should not require options', () => {
      instance.requestStream = config => {
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
        });

        assert.deepStrictEqual(config.gaxOpts, {});

        return returnValue;
      };

      const returnedValue = instance.getDatabasesStream();
      assert.strictEqual(returnedValue, returnValue);
    });
  });

  describe('getMetadata', () => {
    it('should correctly call and return request', () => {
      const requestReturnValue = {};

      function callback() {}

      instance.request = config => {
        assert.strictEqual(config.client, 'InstanceAdminClient');
        assert.strictEqual(config.method, 'getInstance');
        assert.deepStrictEqual(config.reqOpts, {
          name: instance.formattedName_,
        });
        assert.strictEqual(config.gaxOpts, undefined);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);
        return requestReturnValue;
      };

      const returnValue = instance.getMetadata(callback);
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should accept `fieldNames` as string', done => {
      const fieldNames = 'nodeCount';

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, {
          fieldMask: {
            paths: toArray(fieldNames).map(snakeCase),
          },
          name: instance.formattedName_,
        });
        done();
      };
      instance.getMetadata({fieldNames}, assert.ifError);
    });

    it('should accept `fieldNames` as string array', done => {
      const fieldNames = ['name', 'labels', 'nodeCount'];

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, {
          fieldMask: {
            paths: fieldNames.map(snakeCase),
          },
          name: instance.formattedName_,
        });
        done();
      };
      instance.getMetadata({fieldNames}, assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      instance.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.getMetadata({gaxOptions}, assert.ifError);
    });

    it('should update metadata', done => {
      const metadata = {};
      instance.request = (config, callback) => {
        callback(null, metadata);
      };
      instance.getMetadata(() => {
        assert.strictEqual(instance.metadata, metadata);
        done();
      });

      it('should call callback with error', done => {
        const error = new Error('Error');
        instance.request = (config, callback) => {
          callback(error);
        };
        instance.getMetadata(err => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

  describe('setMetadata', () => {
    const METADATA = {
      needsToBeSnakeCased: true,
    } as inst.IInstance;
    const ORIGINAL_METADATA = extend({}, METADATA);

    it('should make and return the request', () => {
      const requestReturnValue = {};

      function callback() {}

      instance.request = (config, callback_) => {
        assert.strictEqual(config.client, 'InstanceAdminClient');
        assert.strictEqual(config.method, 'updateInstance');

        const expectedReqOpts = extend({}, METADATA, {
          name: instance.formattedName_,
        });

        assert.deepStrictEqual(config.reqOpts.instance, expectedReqOpts);
        assert.deepStrictEqual(config.reqOpts.fieldMask, {
          paths: ['needs_to_be_snake_cased'],
        });

        assert.deepStrictEqual(METADATA, ORIGINAL_METADATA);
        assert.deepStrictEqual(config.gaxOpts, {});
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);

        assert.strictEqual(callback_, callback);

        return requestReturnValue;
      };

      const returnValue = instance.setMetadata(METADATA, callback);
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      instance.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      instance.setMetadata(METADATA, gaxOptions, assert.ifError);
    });

    it('should not require a callback', () => {
      assert.doesNotThrow(async () => {
        await instance.setMetadata(METADATA);
      });
    });
  });

  describe('getBackups', () => {
    const OPTIONS = {
      a: 'b',
    } as inst.GetBackupsOptions;
    const ORIGINAL_OPTIONS = extend({}, OPTIONS);

    it('should make the correct request', done => {
      const gaxOpts = {
        timeout: 1000,
      };
      const options = {a: 'b', gaxOptions: gaxOpts};

      const expectedReqOpts = extend({}, OPTIONS, {
        parent: instance.formattedName_,
      });

      instance.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'listBackups');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, OPTIONS);
        assert.deepStrictEqual(OPTIONS, ORIGINAL_OPTIONS);

        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);
        done();
      };

      instance.getBackups(options, assert.ifError);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const options = {gaxOptions};
      const expectedReqOpts = extend(
        {},
        {
          parent: instance.formattedName_,
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getBackups(options, assert.ifError);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = {
        pageSize: optionsPageSize,
        pageToken: optionsPageToken,
        gaxOptions,
      };
      const expectedReqOpts = extend(
        {},
        {
          parent: instance.formattedName_,
        },
        {pageSize: optionsPageSize, pageToken: optionsPageToken},
      );

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getBackups(options, assert.ifError);
    });

    it('should not require options', done => {
      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };

      instance.getBackups(assert.ifError);
    });

    describe('error', () => {
      const REQUEST_RESPONSE_ARGS = [new Error('Error.'), null, null, {}];

      beforeEach(() => {
        instance.request = (config, callback: Function) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
      });

      it('should execute callback with original arguments', done => {
        instance.getBackups(OPTIONS, (...args) => {
          assert.deepStrictEqual(args, REQUEST_RESPONSE_ARGS);
          done();
        });
      });
    });

    describe('success', () => {
      const BACKUPS = [
        {
          name: 'backup-name',
          database: 'database-name',
          expireTime: new PreciseDate(1000),
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const REQUEST_RESPONSE_ARGS: any = [null, BACKUPS, null, {}];

      beforeEach(() => {
        instance.request = (config, callback) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
      });

      it('should create and return Backup objects', done => {
        const fakeBackupInstance = {};

        instance.backup = backupId => {
          assert.strictEqual(backupId, BACKUPS[0].name);
          return fakeBackupInstance as Backup;
        };

        instance.getBackups(OPTIONS, (...args) => {
          assert.ifError(args[0]);
          assert.strictEqual(args[0], REQUEST_RESPONSE_ARGS[0]);
          const backup = args[1]!.pop();
          assert.strictEqual(backup, fakeBackupInstance);
          assert.strictEqual(backup!.metadata, REQUEST_RESPONSE_ARGS[1][0]);
          assert.strictEqual(args[2], REQUEST_RESPONSE_ARGS[2]);
          assert.strictEqual(args[3], REQUEST_RESPONSE_ARGS[3]);
          done();
        });
      });

      it('should return a complete nextQuery object', done => {
        const pageSize = 1;
        const filter = 'filter';
        const NEXTPAGEREQUEST = {
          parent: instance.formattedName_,
          pageSize,
          filter,
          pageToken: 'pageToken',
        };
        const REQUEST_RESPONSE_ARGS = [null, [], NEXTPAGEREQUEST, {}];

        const GETBACKUPSOPTIONS = {
          pageSize,
          filter,
          gaxOptions: {timeout: 1000, autoPaginate: false},
        };
        const EXPECTEDNEXTQUERY = extend(
          {},
          GETBACKUPSOPTIONS,
          NEXTPAGEREQUEST,
        );
        instance.request = (config, callback) => {
          callback(...REQUEST_RESPONSE_ARGS);
        };
        function callback(err, backups, nextQuery) {
          assert.deepStrictEqual(nextQuery, EXPECTEDNEXTQUERY);
          done();
        }
        instance.getBackups(GETBACKUPSOPTIONS, callback);
      });
    });
  });

  describe('getBackupsStream', () => {
    const OPTIONS = {
      gaxOptions: {autoPaginate: false},
    } as inst.GetDatabasesOptions;
    const returnValue = {} as Duplex;

    it('should make and return the correct gax API call', () => {
      const expectedReqOpts = extend({}, OPTIONS, {
        parent: instance.formattedName_,
      });
      delete expectedReqOpts.gaxOptions;

      instance.requestStream = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'listBackupsStream');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, OPTIONS);

        assert.deepStrictEqual(config.gaxOpts, OPTIONS.gaxOptions);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);

        return returnValue;
      };

      const returnedValue = instance.getBackupsStream(OPTIONS);
      assert.strictEqual(returnedValue, returnValue);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', () => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const options = {gaxOptions};
      const expectedReqOpts = extend(
        {},
        {
          parent: instance.formattedName_,
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );

      instance.requestStream = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        return returnValue;
      };

      const returnedValue = instance.getBackupsStream(options);
      assert.strictEqual(returnedValue, returnValue);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', () => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = {
        pageSize: optionsPageSize,
        pageToken: optionsPageToken,
        gaxOptions,
      };
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: optionsPageSize, pageToken: optionsPageToken},
      );
      delete expectedReqOpts.gaxOptions;

      instance.requestStream = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        return returnValue;
      };

      const returnedValue = instance.getBackupsStream(options);
      assert.strictEqual(returnedValue, returnValue);
    });

    it('should not require options', () => {
      instance.requestStream = config => {
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
        });

        assert.deepStrictEqual(config.gaxOpts, {});

        return returnValue;
      };

      const returnedValue = instance.getBackupsStream();
      assert.strictEqual(returnedValue, returnValue);
    });
  });

  describe('backup', () => {
    const BACKUP_NAME = 'backup-name';

    it('should throw if a backup ID is not provided', () => {
      assert.throws(() => {
        instance.backup(null!);
      }, /A backup ID is required to create a Backup\./);
    });

    it('should return an instance of Backup', () => {
      const backup = instance.backup(BACKUP_NAME) as {} as FakeBackup;
      assert(backup instanceof FakeBackup);
      assert.strictEqual(backup.calledWith_[0], instance);
      assert.strictEqual(backup.calledWith_[1], BACKUP_NAME);
    });
  });

  describe('getBackupOperations', () => {
    const OPTIONS = {
      a: 'b',
    } as inst.GetBackupOperationsOptions;
    const ORIGINAL_OPTIONS = extend({}, OPTIONS);

    it('should make the correct request', done => {
      const gaxOpts = {
        timeout: 1000,
      };
      const options = {a: 'b', gaxOptions: gaxOpts};

      const expectedReqOpts = extend({}, OPTIONS, {
        parent: instance.formattedName_,
      });

      instance.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'listBackupOperations');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, OPTIONS);
        assert.deepStrictEqual(OPTIONS, ORIGINAL_OPTIONS);

        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        done();
      };

      instance.getBackupOperations(options, assert.ifError);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const options = Object.assign({}, OPTIONS, {gaxOptions});
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getBackupOperations(options, assert.ifError);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = Object.assign({}, OPTIONS, {
        pageSize: optionsPageSize,
        pageToken: optionsPageToken,
        gaxOptions,
      });
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: optionsPageSize, pageToken: optionsPageToken},
      );

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getBackupOperations(options, assert.ifError);
    });

    it('should not require options', done => {
      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
        });

        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };

      instance.getBackupOperations(assert.ifError);
    });

    it('should return a complete nextQuery object', done => {
      const pageSize = 1;
      const filter = 'filter';
      const NEXTPAGEREQUEST = {
        parent: instance.formattedName_,
        pageSize,
        filter,
        pageToken: 'pageToken',
      };
      const RESPONSE = [null, [], NEXTPAGEREQUEST, {}];

      const GETBACKUPOPSOPTIONS = {
        pageSize,
        filter,
        gaxOptions: {timeout: 1000, autoPaginate: false},
      };
      const EXPECTEDNEXTQUERY = extend(
        {},
        GETBACKUPOPSOPTIONS,
        NEXTPAGEREQUEST,
      );
      instance.request = (config, callback) => {
        callback(...RESPONSE);
      };
      function callback(err, backupOps, nextQuery) {
        assert.deepStrictEqual(nextQuery, EXPECTEDNEXTQUERY);
        done();
      }
      instance.getBackupOperations(GETBACKUPOPSOPTIONS, callback);
    });
  });

  describe('getDatabaseOperations', () => {
    const OPTIONS = {
      a: 'b',
    } as inst.GetDatabaseOperationsOptions;
    const ORIGINAL_OPTIONS = extend({}, OPTIONS);

    it('should make the correct request', done => {
      const gaxOpts = {
        timeout: 1000,
      };
      const options = {a: 'b', gaxOptions: gaxOpts};

      const expectedReqOpts = extend({}, OPTIONS, {
        parent: instance.formattedName_,
      });

      instance.request = config => {
        assert.strictEqual(config.client, 'DatabaseAdminClient');
        assert.strictEqual(config.method, 'listDatabaseOperations');
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);

        assert.notStrictEqual(config.reqOpts, OPTIONS);
        assert.deepStrictEqual(OPTIONS, ORIGINAL_OPTIONS);

        assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
        assert.deepStrictEqual(config.headers, instance.commonHeaders_);
        done();
      };

      instance.getDatabaseOperations(options, assert.ifError);
    });

    it('should pass pageSize and pageToken from gaxOptions into reqOpts', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};
      const options = Object.assign({}, OPTIONS, {gaxOptions});
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: gaxOptions.pageSize, pageToken: gaxOptions.pageToken},
      );

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getDatabaseOperations(options, assert.ifError);
    });

    it('pageSize and pageToken in options should take precedence over gaxOptions', done => {
      const pageSize = 3;
      const pageToken = 'token';
      const gaxOptions = {pageSize, pageToken, timeout: 1000};
      const expectedGaxOpts = {timeout: 1000};

      const optionsPageSize = 5;
      const optionsPageToken = 'optionsToken';
      const options = Object.assign({}, OPTIONS, {
        pageSize: optionsPageSize,
        pageToken: optionsPageToken,
        gaxOptions,
      });
      const expectedReqOpts = extend(
        {},
        OPTIONS,
        {
          parent: instance.formattedName_,
        },
        {pageSize: optionsPageSize, pageToken: optionsPageToken},
      );

      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, expectedReqOpts);
        assert.notStrictEqual(config.gaxOpts, gaxOptions);
        assert.notDeepStrictEqual(config.gaxOpts, gaxOptions);
        assert.deepStrictEqual(config.gaxOpts, expectedGaxOpts);

        done();
      };

      instance.getDatabaseOperations(options, assert.ifError);
    });

    it('should not require options', done => {
      instance.request = config => {
        assert.deepStrictEqual(config.reqOpts, {
          parent: instance.formattedName_,
        });

        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };

      instance.getDatabaseOperations(assert.ifError);
    });

    it('should return a complete nextQuery object', done => {
      const pageSize = 1;
      const filter = 'filter';
      const NEXTPAGEREQUEST = {
        parent: instance.formattedName_,
        pageSize,
        filter,
        pageToken: 'pageToken',
      };
      const RESPONSE = [null, [], NEXTPAGEREQUEST, {}];

      const GETDATABASEOPSOPTIONS = {
        pageSize,
        filter,
        gaxOptions: {timeout: 1000, autoPaginate: false},
      };
      const EXPECTEDNEXTQUERY = extend(
        {},
        GETDATABASEOPSOPTIONS,
        NEXTPAGEREQUEST,
      );
      instance.request = (config, callback) => {
        callback(...RESPONSE);
      };
      function callback(err, databaseOps, nextQuery) {
        assert.deepStrictEqual(nextQuery, EXPECTEDNEXTQUERY);
        done();
      }
      instance.getDatabaseOperations(GETDATABASEOPSOPTIONS, callback);
    });
  });
});
