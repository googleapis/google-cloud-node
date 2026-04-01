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

import * as projectify from '@google-cloud/projectify';
import * as promisify from '@google-cloud/promisify';
import * as assert from 'assert';
import {afterEach, before, beforeEach, describe, it} from 'mocha';
import * as gax from 'google-gax';
import * as proxyquire from 'proxyquire';
import * as sn from 'sinon';

import {Cluster} from '../src/cluster.js';
import {Instance, InstanceOptions} from '../src/instance.js';
import {PassThrough} from 'stream';
import {RequestOptions} from '../src';
import * as snapshot from 'snap-shot-it';
import {createClusterOptionsList} from './constants/cluster';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const v2 = require('../src/v2');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PKG = require('../../package.json');

const sinon = sn.createSandbox();
const {grpc} = new gax.GrpcClient();
const noop = () => {};

function fakeV2() {}

let promisified = false;
let replaceProjectIdTokenOverride: Function | null;
const fakePromisify = Object.assign({}, promisify, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promisifyAll(klass: Function, options: any) {
    if (klass.name !== 'Bigtable') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'close',
      'instance',
      'operation',
      'request',
    ]);
  },
});
const fakeReplaceProjectIdToken = Object.assign({}, projectify, {
  replaceProjectIdToken(reqOpts: {}) {
    if (replaceProjectIdTokenOverride) {
      // eslint-disable-next-line prefer-spread, prefer-rest-params
      return replaceProjectIdTokenOverride.apply(null, arguments);
    }
    return reqOpts;
  },
});

let googleAuthOverride: Function | null;
function fakeGoogleAuth() {
  // eslint-disable-next-line prefer-spread, prefer-rest-params
  return (googleAuthOverride || noop).apply(null, arguments);
}

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

const FakeCluster = createFake(Cluster);
const FakeInstance = createFake(Instance);

describe('Bigtable', () => {
  const PROJECT_ID = 'test-project';
  const PROJECT_ID_TOKEN = '{{projectId}}';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let bigtableModule: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Bigtable: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let bigtable: any;

  before(() => {
    bigtableModule = proxyquire('../src', {
      '@google-cloud/promisify': fakePromisify,
      '@google-cloud/projectify': fakeReplaceProjectIdToken,
      'google-gax': {
        GoogleAuth: fakeGoogleAuth,
      },
      './cluster.js': {Cluster: FakeCluster},
      './instance.js': {Instance: FakeInstance},
      './v2': fakeV2,
    });
    Bigtable = bigtableModule.Bigtable;
  });

  afterEach(() => {
    sinon.restore();
  });

  beforeEach(() => {
    googleAuthOverride = null;
    replaceProjectIdTokenOverride = null;
    delete process.env.BIGTABLE_EMULATOR_HOST;
    bigtable = new bigtableModule.Bigtable({projectId: PROJECT_ID});
  });

  describe('instantiation', () => {
    const EXPECTED_SCOPES: string[] = [];
    const clientClasses = [
      v2.BigtableClient,
      v2.BigtableInstanceAdminClient,
      v2.BigtableTableAdminClient,
    ];

    for (const clientClass of clientClasses) {
      for (const scope of clientClass.scopes) {
        if (EXPECTED_SCOPES.indexOf(scope) === -1) {
          EXPECTED_SCOPES.push(scope);
        }
      }
    }

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should work without new', () => {
      const bigtable = Bigtable();
      assert(bigtable instanceof Bigtable);
    });

    it('should initialize the API object', () => {
      assert.deepStrictEqual(bigtable.api, {});
    });

    it('should set grpc keepalive options', () => {
      const bigtable = Bigtable();
      assert.strictEqual(
        bigtable.options.BigtableClient['grpc.keepalive_time_ms'],
        30000,
      );
      assert.strictEqual(
        bigtable.options.BigtableClient['grpc.keepalive_timeout_ms'],
        10000,
      );

      assert.strictEqual(
        bigtable.options.BigtableInstanceAdminClient['grpc.keepalive_time_ms'],
        30000,
      );
      assert.strictEqual(
        bigtable.options.BigtableInstanceAdminClient[
          'grpc.keepalive_timeout_ms'
        ],
        10000,
      );

      assert.strictEqual(
        bigtable.options.BigtableTableAdminClient['grpc.keepalive_time_ms'],
        30000,
      );
      assert.strictEqual(
        bigtable.options.BigtableTableAdminClient['grpc.keepalive_timeout_ms'],
        10000,
      );
    });

    it('should cache a local google-auth-library instance', () => {
      const fakeGoogleAuthInstance = {};
      const options = {
        a: 'b',
        c: 'd',
      };

      googleAuthOverride = (options_: {}) => {
        assert.deepStrictEqual(
          options_,
          Object.assign(
            {},
            options_,
            {
              libName: 'gccl',
              libVersion: PKG.version,
              scopes: EXPECTED_SCOPES,
              'grpc.keepalive_time_ms': 30000,
              'grpc.keepalive_timeout_ms': 10000,
            },
            options,
          ),
        );
        return fakeGoogleAuthInstance;
      };

      const bigtable = new Bigtable(options);
      assert.strictEqual(bigtable.auth, fakeGoogleAuthInstance);
    });

    it('should localize the projectId', () => {
      assert.strictEqual(bigtable.projectId, PROJECT_ID);
    });

    it('should localize options', () => {
      const options = {
        a: 'b',
        c: 'd',
      };

      const bigtable = new Bigtable(options);
      const expectedOptions = Object.assign(
        {
          port: 443,
          sslCreds: undefined,
          libName: 'gccl',
          libVersion: PKG.version,
          scopes: EXPECTED_SCOPES,
          'grpc.keepalive_time_ms': 30000,
          'grpc.keepalive_timeout_ms': 10000,
        },
        options,
      );

      assert.deepStrictEqual(bigtable.options, {
        BigtableClient: Object.assign(
          {},
          bigtable.options['BigtableClient'],
          {
            servicePath: 'bigtable.googleapis.com',
          },
          expectedOptions,
        ),
        BigtableInstanceAdminClient: Object.assign(
          {},
          bigtable.options['BigtableInstanceAdminClient'],
          {
            servicePath: 'bigtableadmin.googleapis.com',
          },
          expectedOptions,
        ),
        BigtableTableAdminClient: Object.assign(
          {},
          bigtable.options['BigtableTableAdminClient'],
          {
            servicePath: 'bigtableadmin.googleapis.com',
          },
          expectedOptions,
        ),
      });
    });

    it('should work with the emulator', () => {
      process.env.BIGTABLE_EMULATOR_HOST = 'override:8080';

      const options = {
        a: 'b',
        c: 'd',
      };

      const expectedOptions = Object.assign(
        {
          servicePath: 'override',
          port: 8080,
          sslCreds: grpc.credentials.createInsecure(),
          libName: 'gccl',
          libVersion: PKG.version,
          scopes: EXPECTED_SCOPES,
          'grpc.keepalive_time_ms': 30000,
          'grpc.keepalive_timeout_ms': 10000,
        },
        options,
      );

      const bigtable = new Bigtable(options);

      assert.strictEqual(
        bigtable.customEndpoint,
        process.env.BIGTABLE_EMULATOR_HOST,
      );

      assert.deepStrictEqual(bigtable.options, {
        BigtableClient: Object.assign(
          {},
          bigtable.options['BigtableClient'],
          expectedOptions,
        ),
        BigtableInstanceAdminClient: Object.assign(
          {},
          bigtable.options['BigtableInstanceAdminClient'],
          expectedOptions,
        ),
        BigtableTableAdminClient: Object.assign(
          {},
          bigtable.options['BigtableTableAdminClient'],
          expectedOptions,
        ),
      });
    });

    it('should work with a customEndpoint', () => {
      const options = {
        apiEndpoint: 'customEndpoint:9090',
        a: 'b',
        c: 'd',
      };

      const expectedOptions = Object.assign(
        {
          servicePath: 'customEndpoint',
          port: 9090,
          sslCreds: grpc.credentials.createInsecure(),
          libName: 'gccl',
          libVersion: PKG.version,
          scopes: EXPECTED_SCOPES,
          'grpc.keepalive_time_ms': 30000,
          'grpc.keepalive_timeout_ms': 10000,
        },
        options,
      );

      const bigtable = new Bigtable(options);

      assert.strictEqual(bigtable.customEndpoint, options.apiEndpoint);

      assert.deepStrictEqual(bigtable.options, {
        BigtableClient: Object.assign(
          {},
          bigtable.options['BigtableClient'],
          expectedOptions,
        ),
        BigtableInstanceAdminClient: Object.assign(
          {},
          bigtable.options['BigtableInstanceAdminClient'],
          expectedOptions,
        ),
        BigtableTableAdminClient: Object.assign(
          {},
          bigtable.options['BigtableTableAdminClient'],
          expectedOptions,
        ),
      });
    });

    it('should default projectId to token', () => {
      const bigtable = new Bigtable();
      assert.strictEqual(bigtable.projectId, PROJECT_ID_TOKEN);
    });

    it('should set the projectName', () => {
      assert.strictEqual(bigtable.projectName, 'projects/' + PROJECT_ID);
    });

    it('should set the appProfileId', () => {
      const options = {
        appProfileId: 'app-profile-id-12345',
      };

      const bigtable = new Bigtable(options);

      assert.strictEqual(bigtable.appProfileId, 'app-profile-id-12345');
    });
  });

  describe('createInstance', () => {
    const INSTANCE_ID = 'my-instance';
    const CLUSTER = {
      id: 'my-cluster',
      location: 'us-central2-d',
      nodes: 3,
      storage: 'ssd',
    };
    const OPTIONS = {
      clusters: [CLUSTER],
    };

    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'createInstance');
        assert.strictEqual(config.reqOpts.parent, bigtable.projectName);
        assert.strictEqual(config.reqOpts.instanceId, INSTANCE_ID);
        assert.strictEqual(config.reqOpts.instance.displayName, INSTANCE_ID);
        assert.strictEqual(config.gaxOpts, undefined);
        done();
      };
      bigtable.createInstance(INSTANCE_ID, OPTIONS, assert.ifError);
    });

    it('should provide the proper request options asynchronously', async () => {
      let currentRequestInput = null;
      (bigtable.request as Function) = (config: RequestOptions) => {
        currentRequestInput = config;
      };
      const instanceOptionsList: InstanceOptions[] = createClusterOptionsList
        .map(options => Object.assign({}, options, {id: 'my-cluster'}))
        .map(options => {
          return {
            clusters: options,
          };
        });
      for (const options of instanceOptionsList) {
        await bigtable.createInstance(INSTANCE_ID, options, assert.ifError);
        snapshot({
          input: {
            id: INSTANCE_ID,
            options: options,
          },
          output: {
            config: currentRequestInput,
          },
        });
      }
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      const options = Object.assign({}, OPTIONS, {gaxOptions});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      bigtable.createInstance(INSTANCE_ID, options, assert.ifError);
    });

    it('should respect the displayName option', done => {
      const options = Object.assign(
        {},
        {
          displayName: 'robocop',
        },
        OPTIONS,
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.strictEqual(
          config.reqOpts.instance.displayName,
          options.displayName,
        );
        done();
      };
      bigtable.createInstance(INSTANCE_ID, options, assert.ifError);
    });

    it('should respect the type option', done => {
      const options = Object.assign({}, {type: 'development'}, OPTIONS);
      const fakeTypeType = 99;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      FakeInstance.getTypeType_ = (type: string) => {
        assert.strictEqual(type, options.type);
        return fakeTypeType;
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.instance.type, fakeTypeType);
        done();
      };
      bigtable.createInstance(INSTANCE_ID, options, assert.ifError);
    });

    it('should respect the labels option', done => {
      const options = Object.assign(
        {},
        {
          labels: {
            env: 'prod',
          },
        },
        OPTIONS,
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.instance.labels, options.labels);
        done();
      };
      bigtable.createInstance(INSTANCE_ID, options, assert.ifError);
    });

    it('should respect the clusters option', done => {
      const fakeLocation = Cluster.getLocation_(
        PROJECT_ID,
        OPTIONS.clusters[0].location,
      );
      const fakeStorage = 20;
      FakeCluster.getStorageType_ = (storage: {}) => {
        assert.strictEqual(storage, OPTIONS.clusters[0].storage);
        return fakeStorage;
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.deepStrictEqual(config.reqOpts.clusters, {
          'my-cluster': {
            location: fakeLocation,
            serveNodes: OPTIONS.clusters[0].nodes,
            defaultStorageType: fakeStorage,
          },
        });

        done();
      };

      bigtable.createInstance(INSTANCE_ID, OPTIONS, assert.ifError);
    });

    it('should handle clusters with a CMEK key', done => {
      const key = 'kms-key-name';

      FakeCluster.getLocation_ = () => {};
      FakeCluster.getStorageType_ = () => {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.clusters['my-cluster'].encryptionConfig,
          {
            kmsKeyName: key,
          },
        );
        done();
      };

      bigtable.createInstance(
        INSTANCE_ID,
        {
          clusters: [
            {
              id: 'my-cluster',
              key,
              nodes: 3,
            },
          ],
        },
        assert.ifError,
      );
    });

    it('should handle clusters with an encryption object', done => {
      const key = 'kms-key-name';

      FakeCluster.getLocation_ = () => {};
      FakeCluster.getStorageType_ = () => {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.deepStrictEqual(
          config.reqOpts.clusters['my-cluster'].encryptionConfig,
          {
            kmsKeyName: key,
          },
        );
        done();
      };

      bigtable.createInstance(
        INSTANCE_ID,
        {
          clusters: [
            {
              id: 'my-cluster',
              encryption: {
                kmsKeyName: key,
              },
              nodes: 2,
            },
          ],
        },
        assert.ifError,
      );
    });

    it('should throw if both an encryption object and a key are provided', () => {
      const key = 'kms-key-name';

      FakeCluster.getLocation_ = () => {};
      FakeCluster.getStorageType_ = () => {};

      assert.throws(() => {
        bigtable.createInstance(
          INSTANCE_ID,
          {
            clusters: [
              {
                id: 'my-cluster',
                encryption: {
                  kmsKeyName: key,
                },
                key,
              },
            ],
          },
          assert.ifError,
        );
      }, /A cluster was provided with both `encryption` and `key` defined\./);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };
      bigtable.createInstance(
        INSTANCE_ID,
        OPTIONS,
        (err: Error, instance: Instance, operation: gax.Operation) => {
          assert.strictEqual(err, error);
          assert.strictEqual(instance, undefined);
          assert.strictEqual(operation, undefined);
          done();
        },
      );
    });

    it('should return an instance to the callback', done => {
      const response = {
        name: 'my-operation',
      };
      const responseArg2 = {};
      const responseArg3 = {};
      const fakeInstance = {};
      bigtable.instance = (id: string) => {
        assert.strictEqual(id, INSTANCE_ID);
        return fakeInstance;
      };
      bigtable.request = (config: {}, callback: Function) => {
        callback(null, response, responseArg2, responseArg3);
      };
      bigtable.createInstance(
        INSTANCE_ID,
        OPTIONS,
        (err: Error, instance: Instance, ...args: Array<{}>) => {
          assert.ifError(err);
          assert.strictEqual(instance, fakeInstance);
          assert.strictEqual(args[0], response);
          assert.strictEqual(args[1], responseArg2);
          assert.strictEqual(args[2], responseArg3);
          done();
        },
      );
    });

    it('should throw an error if cluster id not provided.', () => {
      const options = {
        displayName: 'my-sweet-instance',
        labels: {env: 'prod'},
        clusters: [
          {
            nodes: 3,
            location: 'us-central2-d',
            storage: 'ssd',
          },
        ],
      };
      assert.throws(() => {
        bigtable.createInstance(INSTANCE_ID, options);
      }, /A cluster was provided without an `id` property defined\./);
    });

    it('should throw an error if configuration object is not provided', () => {
      assert.throws(() => {
        bigtable.createInstance(INSTANCE_ID, assert.ifError);
      }, /A configuration object is required to create an instance\./);
    });

    it('should throw an error if cluster configuration is not provided', () => {
      assert.throws(() => {
        bigtable.createInstance(INSTANCE_ID, {}, assert.ifError);
      }, /At least one cluster configuration object is required to create an instance\./);
    });
  });

  describe('getInstances', () => {
    it('should provide the proper request options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.strictEqual(config.client, 'BigtableInstanceAdminClient');
        assert.strictEqual(config.method, 'listInstances');
        assert.deepStrictEqual(config.reqOpts, {
          parent: bigtable.projectName,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };
      bigtable.getInstances(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bigtable.request = (config: any) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };
      bigtable.getInstances(gaxOptions, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      bigtable.request = (config: {}, callback: Function) => {
        callback(error);
      };
      bigtable.getInstances((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an array of instance objects and failed locations', done => {
      const response = {
        instances: [
          {
            name: 'a',
          },
          {
            name: 'b',
          },
        ],
        failedLocations: ['projects/<project>/locations/<zone_id>'],
      };
      const fakeInstances = [{}, {}];
      bigtable.request = (config: {}, callback: Function) => {
        callback(null, response);
      };
      let instanceCount = 0;
      bigtable.instance = (name: string) => {
        assert.strictEqual(name, response.instances[instanceCount].name);
        return fakeInstances[instanceCount++];
      };

      bigtable.getInstances(
        (
          err: Error,
          instances: Instance[],
          failedLocations: string[],
          apiResponse: {},
        ) => {
          assert.ifError(err);
          assert.strictEqual(instances[0], fakeInstances[0]);
          assert.strictEqual(instances[0].metadata, response.instances[0]);
          assert.strictEqual(instances[1], fakeInstances[1]);
          assert.strictEqual(instances[1].metadata, response.instances[1]);
          assert.strictEqual(failedLocations, response.failedLocations);
          assert.strictEqual(apiResponse, response);
          done();
        },
      );
    });
  });

  describe('instance', () => {
    const INSTANCE_ID = 'my-instance';

    it('should return an Instance object', () => {
      const instance = bigtable.instance(INSTANCE_ID);
      const args = instance.calledWith_;

      assert(instance instanceof FakeInstance);
      assert.strictEqual(args[0], bigtable);
      assert.strictEqual(args[1], INSTANCE_ID);
    });
  });

  describe('request', () => {
    const CONFIG = {
      client: 'client',
      method: 'method',
      reqOpts: {
        a: 'b',
        c: 'd',
      },
      gaxOpts: {},
    };

    const gapicStreamingMethods = [
      'listTablesStream',
      'listBackupsStream',
      'listAppProfilesStream',
    ];

    beforeEach(() => {
      bigtable.getProjectId_ = (callback: Function) => {
        callback(null, PROJECT_ID);
      };
      bigtable.api[CONFIG.client] = {
        [CONFIG.method]: noop,
      };
    });

    describe('prepareGaxRequest', () => {
      it('should get the project ID', done => {
        bigtable.getProjectId_ = () => {
          done();
        };
        bigtable.request(CONFIG, assert.ifError);
      });

      it('should return error if getting project ID failed', done => {
        const error = new Error('Error.');
        bigtable.getProjectId_ = (callback: Function) => {
          callback(error);
        };
        bigtable.request(CONFIG, (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should initiate and cache the client', () => {
        const fakeClient = {
          [CONFIG.method]: noop,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeV2 as any)[CONFIG.client] = function (options: any) {
          assert.strictEqual(options, bigtable.options[CONFIG.client]);
          return fakeClient;
        };
        bigtable.api = {};
        bigtable.request(CONFIG, assert.ifError);
        assert.strictEqual(bigtable.api[CONFIG.client], fakeClient);
      });

      it('should use the cached client', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeV2 as any)[CONFIG.client] = function () {
          done(new Error('Should not re-instantiate a GAX client.'));
        };
        bigtable.request(CONFIG);
        done();
      });

      it('should not call replace project ID token', done => {
        replaceProjectIdTokenOverride = sinon.spy();
        bigtable.api[CONFIG.client][CONFIG.method] = {
          bind() {
            assert(!(replaceProjectIdTokenOverride as sn.SinonSpy).called);
            setImmediate(done);
            return noop;
          },
        };
        bigtable.request(CONFIG, assert.ifError);
      });
    });

    describe('replace projectID token', () => {
      beforeEach(() => {
        bigtable = new Bigtable();
        bigtable.getProjectId_ = (callback: Function) => {
          callback(null, PROJECT_ID);
        };
        bigtable.api[CONFIG.client] = {
          [CONFIG.method]: noop,
        };
      });

      it('should replace the project ID token', done => {
        const replacedReqOpts = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        replaceProjectIdTokenOverride = (reqOpts: any, projectId: string) => {
          assert.notStrictEqual(reqOpts, CONFIG.reqOpts);
          assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
          assert.strictEqual(projectId, PROJECT_ID);
          return replacedReqOpts;
        };
        bigtable.api[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}) {
            assert.strictEqual(reqOpts, replacedReqOpts);
            setImmediate(done);
            return noop;
          },
        };
        bigtable.request(CONFIG, assert.ifError);
      });

      it('should not replace token when project ID not detected', done => {
        replaceProjectIdTokenOverride = () => {
          throw new Error('Should not have tried to replace token.');
        };
        bigtable.getProjectId_ = (callback: Function) => {
          callback(null, PROJECT_ID_TOKEN);
        };
        bigtable.api[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}) {
            assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
            setImmediate(done);
            return noop;
          },
        };
        bigtable.request(CONFIG, assert.ifError);
      });
    });

    describe('makeRequestCallback', () => {
      it('should prepare the request', done => {
        bigtable.api[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}, gaxOpts: {}) {
            assert.strictEqual(gaxClient, bigtable.api[CONFIG.client]);
            assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
            assert.strictEqual(gaxOpts, CONFIG.gaxOpts);
            setImmediate(done);
            return noop;
          },
        };

        bigtable.request(CONFIG, assert.ifError);
      });

      it('should execute callback with error', done => {
        const error = new Error('Error.');
        bigtable.api[CONFIG.client][CONFIG.method] = (...args: Array<{}>) => {
          const callback: Function = [].slice.call(args).pop()!;
          callback(error);
        };
        bigtable.request(CONFIG, (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should execute the request function', () => {
        bigtable.api[CONFIG.client][CONFIG.method] = (...args: Array<{}>) => {
          const callback: Function = [].slice.call(args).pop()!;
          callback(null, args[0]); // so it ends the test
        };
        bigtable.request(CONFIG, assert.ifError);
      });
    });

    describe('makeRequestStream', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let GAX_STREAM: any;

      beforeEach(() => {
        GAX_STREAM = new PassThrough();
        bigtable.api[CONFIG.client][CONFIG.method] = {
          bind() {
            return () => {
              return GAX_STREAM;
            };
          },
        };
      });

      // TODO: retry request options are currently ignored
      // Re-enable after retry logic is fixed in gax / retry-request
      // it('should pass retryRequestOptions', done => {
      //   const expectedRetryRequestOptions = {
      //     currentRetryAttempt: 0,
      //     noResponseRetries: 0,
      //     objectMode: true,
      //     shouldRetryFn: shouldRetryRequest,
      //   };

      //   bigtable.api[CONFIG.client] = {
      //     [CONFIG.method]: (reqOpts: {}, options: gax.CallOptions) => {
      //       assert.deepStrictEqual(
      //         options.retryRequestOptions,
      //         expectedRetryRequestOptions
      //       );
      //       done();
      //     },
      //   };

      //   const requestStream = bigtable.request(CONFIG);
      //   requestStream.emit('reading');
      // });

      // TODO: retry request options are currently ignored
      // Re-enable after retry logic is fixed in gax / retry-request
      // it('should set gaxOpts.retryRequestOptions when gaxOpts undefined', done => {
      //   const expectedRetryRequestOptions = {
      //     currentRetryAttempt: 0,
      //     noResponseRetries: 0,
      //     objectMode: true,
      //     shouldRetryFn: shouldRetryRequest,
      //   };

      //   bigtable.api[CONFIG.client] = {
      //     [CONFIG.method]: (reqOpts: {}, options: gax.CallOptions) => {
      //       assert.deepStrictEqual(
      //         options.retryRequestOptions,
      //         expectedRetryRequestOptions
      //       );
      //       done();
      //     },
      //   };

      //   const config = Object.assign({}, CONFIG);
      //   delete config.gaxOpts;
      //   const requestStream = bigtable.request(config);
      //   requestStream.emit('reading');
      // });

      it('should expose an abort function', done => {
        GAX_STREAM.cancel = done;

        const requestStream = bigtable.request(CONFIG);
        requestStream.emit('reading');
        requestStream.abort();
      });

      it('should prepare the request once reading', done => {
        bigtable.api[CONFIG.client][CONFIG.method] = {
          bind(gaxClient: {}, reqOpts: {}, gaxOpts: {}) {
            assert.strictEqual(gaxClient, bigtable.api[CONFIG.client]);
            assert.deepStrictEqual(reqOpts, CONFIG.reqOpts);
            assert.strictEqual(gaxOpts, CONFIG.gaxOpts);
            setImmediate(done);
            return () => {
              return GAX_STREAM;
            };
          },
        };

        const requestStream = bigtable.request(CONFIG);
        requestStream.emit('reading');
      });

      it('should destroy the stream with prepare error', done => {
        const error = new Error('Error.');
        bigtable.getProjectId_ = (callback: Function) => {
          callback(error);
        };
        const requestStream = bigtable.request(CONFIG);
        requestStream.emit('reading');
        requestStream.on('error', (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should destroy the stream with GAX error', done => {
        const error = new Error('Error.');
        const requestStream = bigtable.request(CONFIG);
        requestStream.emit('reading');
        GAX_STREAM.emit('error', error);
        requestStream.on('error', (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should re-emit request event from gax-stream', done => {
        const requestStream = bigtable.request(CONFIG);
        requestStream.emit('reading');
        requestStream.on('request', done);
        GAX_STREAM.emit('request');
      });
    });

    gapicStreamingMethods.forEach(method => {
      describe('makeGapicStreamRequest', () => {
        describe(method, () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let GAX_STREAM: any;
          const config = {
            client: 'client',
            method: method,
            reqOpts: {
              a: 'b',
              c: 'd',
            },
            gaxOpts: {},
          };

          beforeEach(() => {
            GAX_STREAM = new PassThrough();
            bigtable.api[config.client][config.method] = {
              bind() {
                return () => {
                  return GAX_STREAM;
                };
              },
            };
          });

          it('should expose an abort function', done => {
            GAX_STREAM.cancel = done;

            const requestStream = bigtable.request(config);
            requestStream.emit('reading');
            requestStream.abort();
          });

          it('should prepare the request once reading', done => {
            bigtable.api[config.client][config.method] = {
              bind(gaxClient: {}, reqOpts: {}, gaxOpts: {}) {
                assert.strictEqual(gaxClient, bigtable.api[config.client]);
                assert.deepStrictEqual(reqOpts, config.reqOpts);
                assert.strictEqual(gaxOpts, config.gaxOpts);
                setImmediate(done);
                return () => {
                  return GAX_STREAM;
                };
              },
            };

            const requestStream = bigtable.request(config);
            requestStream.emit('reading');
          });

          it('should destroy the stream with prepare error', done => {
            const error = new Error('Error.');
            bigtable.getProjectId_ = (callback: Function) => {
              callback(error);
            };
            const requestStream = bigtable.request(config);
            requestStream.emit('reading');
            requestStream.on('error', (err: Error) => {
              assert.strictEqual(err, error);
              done();
            });
          });

          it('should destroy the stream with GAX error', done => {
            const error = new Error('Error.');
            const requestStream = bigtable.request(config);
            requestStream.emit('reading');
            GAX_STREAM.emit('error', error);
            requestStream.on('error', (err: Error) => {
              assert.strictEqual(err, error);
              done();
            });
          });

          it('should emit response from GAX stream', done => {
            const response = {};
            const requestStream = bigtable.request(config);
            requestStream.emit('reading');
            requestStream.on('response', (resp: {}) => {
              assert.strictEqual(resp, response);
              done();
            });
            GAX_STREAM.emit('response', response);
          });
        });
      });
    });
  });

  describe('getProjectId_', () => {
    beforeEach(() => {
      bigtable.auth = {
        getProjectId(callback: Function) {
          callback(null, PROJECT_ID);
        },
      };
    });

    it('should return the provided project ID', done => {
      const providedProjectId = 'provided-project-id';
      bigtable.auth.getProjectId = () => {
        throw new Error('Auth client should not be called.');
      };
      bigtable.projectId = providedProjectId;
      bigtable.getProjectId_((err: Error, projectId: string) => {
        assert.ifError(err);
        assert.strictEqual(projectId, providedProjectId);
        done();
      });
    });

    it('should return any project ID if in custom endpoint', done => {
      bigtable.auth.getProjectId = () => {
        throw new Error('Auth client should not be called.');
      };
      bigtable.projectId = PROJECT_ID_TOKEN;
      bigtable.customEndpoint = 'custom-endpoint';
      bigtable.getProjectId_((err: Error, projectId: string) => {
        assert.ifError(err);
        assert.strictEqual(projectId, PROJECT_ID_TOKEN);
        done();
      });
    });

    it('should return error if project ID detection failed', done => {
      const error = new Error('Error.');
      bigtable.auth.getProjectId = (callback: Function) => {
        callback(error);
      };
      bigtable.projectId = PROJECT_ID_TOKEN;
      bigtable.getProjectId_((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should get and cache the project ID if not provided', done => {
      const detectedProjectId = 'detected-project-id';
      bigtable.auth.getProjectId = (callback: Function) => {
        callback(null, detectedProjectId);
      };
      bigtable.projectId = PROJECT_ID_TOKEN;
      bigtable.getProjectId_((err: Error, projectId: string) => {
        assert.ifError(err);
        assert.strictEqual(projectId, detectedProjectId);
        assert.strictEqual(bigtable.projectId, detectedProjectId);
        done();
      });
    });
  });
  describe('close', () => {
    it('should have failed request after close is called', done => {
      bigtable.close().then(() => {
        bigtable.getInstances((err: Error) => {
          if (err) {
            done();
          } else {
            assert.fail(
              'The request did not fail, but it should have because the connection is closed',
            );
          }
        });
      });
    });
  });
});
