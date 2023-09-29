// Copyright 2014 Google LLC
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
import {before, beforeEach, after, afterEach, describe, it} from 'mocha';
import * as gax from 'google-gax';
import * as proxyquire from 'proxyquire';
import {PassThrough, Readable} from 'stream';

import * as ds from '../src';
import {Datastore, DatastoreOptions} from '../src';
import {Datastore as OriginalDatastore} from '../src';
import {
  entity,
  Entity,
  EntityProto,
  EntityObject,
  Entities,
} from '../src/entity';
import {RequestCallback, RequestConfig} from '../src/request';
import * as is from 'is';
import * as sinon from 'sinon';
import * as extend from 'extend';
import {google} from '../protos/protos';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const v1 = require('../src/v1/index.js');
const async = require('async');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakeEntityInit: any = {
  KEY_SYMBOL: Symbol('fake key symbol'),
  Int: class {
    value: {};
    constructor(value: {}) {
      this.value = value;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isDsInt(...args: any[]) {
    this.calledWith_ = args;
  },
  Double: class {
    value: {};
    constructor(value: {}) {
      this.value = value;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isDsDouble(...args: any[]) {
    this.calledWith_ = args;
  },
  GeoPoint: class {
    value: {};
    constructor(value: {}) {
      this.value = value;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isDsGeoPoint(...args: any) {
    this.calledWith_ = args;
  },
  Key: class {
    calledWith_: IArguments;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any) {
      this.calledWith_ = args;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isDsKey(...args: any) {
    this.calledWith_ = args;
  },
  isKeyComplete: entity.isKeyComplete,
  keyFromKeyProto: entity.keyFromKeyProto,
  keyToKeyProto: entity.keyToKeyProto,
  encodeValue: entity.encodeValue,
  entityToEntityProto: entity.entityToEntityProto,
  findLargeProperties_: entity.findLargeProperties_,
  URLSafeKey: entity.URLSafeKey,
};

const fakeEntity: any = {};

let googleAuthOverride: Function | null;
function fakeGoogleAuth(...args: Array<{}>) {
  return (googleAuthOverride || (() => {}))(...args);
}

let createInsecureOverride: Function | null;

const SECOND_DATABASE_ID = 'multidb-test';

export {SECOND_DATABASE_ID};

const fakeGoogleGax = {
  GoogleAuth: fakeGoogleAuth,
  GrpcClient: class extends gax.GrpcClient {
    constructor(opts: gax.GrpcClientOptions) {
      // super constructor must be called first!
      super(opts);
      this.grpc = {
        credentials: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          createInsecure(...args: any[]) {
            return (createInsecureOverride || (() => {}))(...args);
          },
        },
      } as {} as gax.GrpcModule;
    }
  },
};

class FakeIndex {
  calledWith_: Array<{}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    this.calledWith_ = args;
  }
}

class FakeQuery {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calledWith_: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    this.calledWith_ = args;
  }
}

class FakeTransaction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calledWith_: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    this.calledWith_ = args;
  }
}

function FakeV1() {}

const sandbox = sinon.createSandbox();

async.each(
  [
    {namespace: `${Date.now()}`},
    {namespace: `second-db-${Date.now()}`, databaseId: SECOND_DATABASE_ID},
  ],
  (clientOptions: DatastoreOptions) => {
    describe('Datastore', () => {
      let Datastore: typeof ds.Datastore;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let datastore: any;

      const PROJECT_ID = 'project-id';
      const NAMESPACE = 'namespace';

      const DATASTORE_PROJECT_ID_CACHED = process.env.DATASTORE_PROJECT_ID;

      const DEFAULT_OPTIONS = {
        projectId: PROJECT_ID,
        apiEndpoint: 'http://localhost',
        credentials: {},
        keyFilename: 'key/file',
        email: 'email',
        namespace: NAMESPACE,
      };

      const OPTIONS = Object.assign(DEFAULT_OPTIONS, clientOptions);

      before(() => {
        Object.assign(fakeEntity, fakeEntityInit);
        Datastore = proxyquire('../src', {
          './entity.js': {entity: fakeEntity},
          './index-class.js': {Index: FakeIndex},
          './query.js': {Query: FakeQuery},
          './transaction.js': {Transaction: FakeTransaction},
          './v1': FakeV1,
          'google-auth-library': {
            GoogleAuth: fakeGoogleAuth,
          },
          'google-gax': fakeGoogleGax,
        }).Datastore;
      });

      beforeEach(() => {
        Object.assign(fakeEntity, fakeEntityInit);

        createInsecureOverride = null;
        googleAuthOverride = null;

        datastore = new Datastore({
          projectId: PROJECT_ID,
          namespace: NAMESPACE,
        });
      });

      afterEach(() => {
        if (typeof DATASTORE_PROJECT_ID_CACHED === 'string') {
          process.env.DATASTORE_PROJECT_ID = DATASTORE_PROJECT_ID_CACHED;
        } else {
          delete process.env.DATASTORE_PROJECT_ID;
        }
      });

      after(() => {
        createInsecureOverride = null;
        googleAuthOverride = null;
      });

      it('should export GAX client', () => {
        assert.ok(require('../src').v1);
      });

      describe('instantiation', () => {
        it('should initialize an empty Client map', () => {
          assert(datastore.clients_ instanceof Map);
          assert.strictEqual(datastore.clients_.size, 0);
        });

        it('should alias itself to the datastore property', () => {
          assert.strictEqual(datastore.datastore, datastore);
        });

        it('should localize the namespace', () => {
          assert.strictEqual(datastore.namespace, NAMESPACE);
        });

        it('should localize the projectId', () => {
          assert.strictEqual(datastore.options.projectId, PROJECT_ID);
        });

        it('should not default options.projectId to placeholder', () => {
          const datastore = new Datastore({});
          assert.strictEqual(datastore.options.projectId, undefined);
        });

        it('should use DATASTORE_PROJECT_ID', () => {
          const projectId = 'overridden-project-id';
          process.env.DATASTORE_PROJECT_ID = projectId;
          const datastore = new Datastore({});
          assert.strictEqual(datastore.options.projectId, projectId);
        });

        it('should set the default base URL', () => {
          assert.strictEqual(
            datastore.defaultBaseUrl_,
            'datastore.googleapis.com'
          );
        });

        it('should set default API connection details', done => {
          const determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

          Datastore.prototype.determineBaseUrl_ = customApiEndpoint => {
            Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;

            assert.strictEqual(customApiEndpoint, OPTIONS.apiEndpoint);
            done();
          };

          new Datastore(OPTIONS);
        });

        it('should localize the options', () => {
          delete process.env.DATASTORE_PROJECT_ID;

          const options = {
            a: 'b',
            c: 'd',
          } as DatastoreOptions;

          const datastore = new Datastore(options);

          assert.notStrictEqual(datastore.options, options);

          assert.deepStrictEqual(
            datastore.options,
            Object.assign(
              {
                libName: 'gccl',
                libVersion: require('../../package.json').version,
                scopes: v1.DatastoreClient.scopes,
                servicePath: datastore.baseUrl_,
                port: 443,
                projectId: undefined,
              },
              options
            )
          );
        });

        it('should set port if detected', () => {
          const determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;
          const port = 99;
          Datastore.prototype.determineBaseUrl_ = function () {
            Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;
            this.port_ = port;
          };
          const datastore = new Datastore(OPTIONS);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          assert.strictEqual((datastore.options as any).port, port);
        });

        it('should set grpc ssl credentials if localhost custom endpoint', () => {
          const fakeInsecureCreds = {};
          createInsecureOverride = () => {
            return fakeInsecureCreds;
          };

          const datastore = new Datastore(OPTIONS);

          assert.strictEqual(datastore.options.sslCreds, fakeInsecureCreds);
        });

        describe('checking ssl credentials are set correctly with custom endpoints', () => {
          function setHost(host: string) {
            process.env.DATASTORE_EMULATOR_HOST = host;
          }

          const sslCreds = gax.grpc.ChannelCredentials.createSsl();
          const fakeInsecureCreds = {
            insecureCredProperty: 'insecureCredPropertyValue',
          };

          beforeEach(() => {
            createInsecureOverride = () => {
              return fakeInsecureCreds;
            };
          });

          describe('without DATASTORE_EMULATOR_HOST environment variable set', () => {
            beforeEach(() => {
              delete process.env.DATASTORE_EMULATOR_HOST;
            });

            describe('using a localhost endpoint', () => {
              const apiEndpoint = 'http://localhost:8080';
              it('should use ssl credentials provided', () => {
                // SSL credentials provided in the constructor should always be used.
                const options = {
                  apiEndpoint,
                  sslCreds,
                };
                const datastore = new Datastore(options);
                assert.strictEqual(datastore.options.sslCreds, sslCreds);
              });
              it('should use insecure ssl credentials when ssl credentials are not provided', () => {
                // When using a localhost endpoint it is assumed that the emulator is being used.
                // Therefore, sslCreds should be set to insecure credentials to skip authentication.
                const datastore = new Datastore({
                  apiEndpoint,
                });
                assert.strictEqual(
                  datastore.options.sslCreds,
                  fakeInsecureCreds
                );
              });
            });
            describe('using a remote endpoint', () => {
              const apiEndpoint = 'http://remote:8080';
              it('should use ssl credentials provided', () => {
                // SSL credentials provided in the constructor should always be used.
                const options = {
                  apiEndpoint,
                  sslCreds,
                };
                const datastore = new Datastore(options);
                assert.strictEqual(datastore.options.sslCreds, sslCreds);
              });
              it('should not set ssl credentials when ssl credentials are not provided', () => {
                // When using a remote endpoint without DATASTORE_EMULATOR_HOST set,
                // it is assumed that the emulator is not being used.
                // This test captures the case where users use a regional endpoint.
                const datastore = new Datastore({
                  apiEndpoint,
                });
                assert.strictEqual(datastore.options.sslCreds, undefined);
              });
            });
          });
          describe('with DATASTORE_EMULATOR_HOST environment variable set', () => {
            beforeEach(() => {
              delete process.env.DATASTORE_EMULATOR_HOST;
            });

            describe('with DATASTORE_EMULATOR_HOST set to localhost', () => {
              const apiEndpoint = 'http://localhost:8080';
              beforeEach(() => {
                setHost(apiEndpoint);
              });

              it('should use ssl credentials provided', () => {
                // SSL credentials provided in the constructor should always be used.
                const datastore = new Datastore({
                  apiEndpoint,
                  sslCreds,
                });
                assert.strictEqual(datastore.options.sslCreds, sslCreds);
              });

              it('should use insecure ssl credentials when ssl credentials are not provided', () => {
                // When DATASTORE_EMULATOR_HOST is set it is assumed that the emulator is being used.
                // Therefore, sslCreds should be set to insecure credentials to skip authentication.
                const datastore = new Datastore({
                  apiEndpoint,
                });
                assert.strictEqual(
                  datastore.options.sslCreds,
                  fakeInsecureCreds
                );
              });
            });

            describe('with DATASTORE_EMULATOR_HOST set to remote host', () => {
              const apiEndpoint = 'http://remote:8080';
              beforeEach(() => {
                setHost(apiEndpoint);
              });

              it('should use ssl credentials provided', () => {
                // SSL credentials provided in the constructor should always be used.
                const datastore = new Datastore({
                  apiEndpoint,
                  sslCreds,
                });
                assert.strictEqual(datastore.options.sslCreds, sslCreds);
              });

              it('should use insecure ssl credentials when ssl credentials are not provided', () => {
                // When DATASTORE_EMULATOR_HOST is set it is assumed that the emulator is being used.
                // Therefore, sslCreds should be set to insecure credentials to skip authentication.
                const datastore = new Datastore({
                  apiEndpoint,
                });
                assert.strictEqual(
                  datastore.options.sslCreds,
                  fakeInsecureCreds
                );
              });
            });

            after(() => {
              delete process.env.DATASTORE_EMULATOR_HOST;
            });
          });
        });

        it('should cache a local GoogleAuth instance', () => {
          const fakeGoogleAuthInstance = {};

          googleAuthOverride = () => {
            return fakeGoogleAuthInstance;
          };

          const datastore = new Datastore({});
          assert.strictEqual(datastore.auth, fakeGoogleAuthInstance);
        });
      });

      describe('double', () => {
        it('should expose Double builder', () => {
          const aDouble = 7.0;
          const double = Datastore.double(aDouble);
          assert.strictEqual(double.value, aDouble);
        });

        it('should also be on the prototype', () => {
          const aDouble = 7.0;
          const double = datastore.double(aDouble);
          assert.strictEqual(double.value, aDouble);
        });
      });

      describe('geoPoint', () => {
        it('should expose GeoPoint builder', () => {
          const aGeoPoint = {latitude: 24, longitude: 88};
          const geoPoint = Datastore.geoPoint(aGeoPoint);
          assert.strictEqual(geoPoint.value, aGeoPoint);
        });

        it('should also be on the prototype', () => {
          const aGeoPoint = {latitude: 24, longitude: 88};
          const geoPoint = datastore.geoPoint(aGeoPoint);
          assert.strictEqual(geoPoint.value, aGeoPoint);
        });
      });

      describe('int', () => {
        it('should expose Int builder', () => {
          const anInt = 7;
          const int = Datastore.int(anInt);
          assert.strictEqual(int.value, anInt);
        });

        it('should also be on the prototype', () => {
          const anInt = 7;
          const int = datastore.int(anInt);
          assert.strictEqual(int.value, anInt);
        });
      });

      describe('isDouble', () => {
        it('should pass value to entity', () => {
          const value = 0.42;
          let called = false;
          const saved = fakeEntity.isDsDouble;
          fakeEntity.isDsDouble = (arg: {}) => {
            assert.strictEqual(arg, value);
            called = true;
            return false;
          };
          assert.strictEqual(datastore.isDouble(value), false);
          assert.strictEqual(called, true);
          fakeEntity.isDsDouble = saved;
        });

        it('should expose Double identifier', () => {
          const something = {};
          Datastore.isDouble(something);
          assert.strictEqual(fakeEntity.calledWith_[0], something);
        });
      });

      describe('isGeoPoint', () => {
        it('should pass value to entity', () => {
          const value = {fakeLatitude: 1, fakeLongitude: 2};
          let called = false;
          const saved = fakeEntity.isDsGeoPoint;
          fakeEntity.isDsGeoPoint = (arg: {}) => {
            assert.strictEqual(arg, value);
            called = true;
            return false;
          };
          assert.strictEqual(datastore.isGeoPoint(value), false);
          assert.strictEqual(called, true);
          fakeEntity.isDsGeoPoint = saved;
        });

        it('should expose GeoPoint identifier', () => {
          const something = {};
          Datastore.isGeoPoint(something);
          assert.strictEqual(fakeEntity.calledWith_[0], something);
        });
      });

      describe('isInt', () => {
        it('should pass value to entity', () => {
          const value = 42;
          let called = false;
          const saved = fakeEntity.isDsInt;
          fakeEntity.isDsInt = (arg: {}) => {
            assert.strictEqual(arg, value);
            called = true;
            return false;
          };
          assert.strictEqual(datastore.isInt(value), false);
          assert.strictEqual(called, true);
          fakeEntity.isDsInt = saved;
        });

        it('should expose Int identifier', () => {
          const something = {};
          Datastore.isInt(something);
          assert.strictEqual(fakeEntity.calledWith_[0], something);
        });
      });

      describe('isKey', () => {
        it('should pass value to entity', () => {
          const value = {zz: true};
          let called = false;
          const saved = fakeEntity.isDsKey;
          fakeEntity.isDsKey = (arg: {}) => {
            assert.strictEqual(arg, value);
            called = true;
            return false;
          };
          assert.strictEqual(datastore.isKey(value), false);
          assert.strictEqual(called, true);
          fakeEntity.isDsKey = saved;
        });

        it('should expose Key identifier', () => {
          const something = {};
          datastore.isKey(something);
          assert.strictEqual(fakeEntity.calledWith_[0], something);
        });
      });

      describe('KEY', () => {
        it('should expose the KEY symbol', () => {
          assert.strictEqual(Datastore.KEY, fakeEntity.KEY_SYMBOL);
        });

        it('should also be on the prototype', () => {
          assert.strictEqual(datastore.KEY, Datastore.KEY);
        });
      });

      describe('MORE_RESULTS_AFTER_CURSOR', () => {
        it('should expose a MORE_RESULTS_AFTER_CURSOR helper', () => {
          assert.strictEqual(
            Datastore.MORE_RESULTS_AFTER_CURSOR,
            'MORE_RESULTS_AFTER_CURSOR'
          );
        });

        it('should also be on the prototype', () => {
          assert.strictEqual(
            datastore.MORE_RESULTS_AFTER_CURSOR,
            Datastore.MORE_RESULTS_AFTER_CURSOR
          );
        });
      });

      describe('MORE_RESULTS_AFTER_LIMIT', () => {
        it('should expose a MORE_RESULTS_AFTER_LIMIT helper', () => {
          assert.strictEqual(
            Datastore.MORE_RESULTS_AFTER_LIMIT,
            'MORE_RESULTS_AFTER_LIMIT'
          );
        });

        it('should also be on the prototype', () => {
          assert.strictEqual(
            datastore.MORE_RESULTS_AFTER_LIMIT,
            Datastore.MORE_RESULTS_AFTER_LIMIT
          );
        });
      });

      describe('NO_MORE_RESULTS', () => {
        it('should expose a NO_MORE_RESULTS helper', () => {
          assert.strictEqual(Datastore.NO_MORE_RESULTS, 'NO_MORE_RESULTS');
        });

        it('should also be on the prototype', () => {
          assert.strictEqual(
            datastore.NO_MORE_RESULTS,
            Datastore.NO_MORE_RESULTS
          );
        });
      });

      describe('createQuery', () => {
        it('should return a Query object', () => {
          const namespace = 'namespace';
          const kind = ['Kind'];

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const query: any = datastore.createQuery(namespace, kind);
          assert(query instanceof FakeQuery);

          assert.strictEqual(query.calledWith_[0], datastore);
          assert.strictEqual(query.calledWith_[1], namespace);
          assert.deepStrictEqual(query.calledWith_[2], kind);
        });

        it('should include the default namespace', () => {
          const kind = ['Kind'];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const query: any = datastore.createQuery(kind);
          assert.strictEqual(query.calledWith_[0], datastore);
          assert.strictEqual(query.calledWith_[1], datastore.namespace);
          assert.deepStrictEqual(query.calledWith_[2], kind);
        });

        it('should include the default namespace in a kindless query', () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const query: any = datastore.createQuery();
          assert.strictEqual(query.calledWith_[0], datastore);
          assert.strictEqual(query.calledWith_[1], datastore.namespace);
          assert.deepStrictEqual(query.calledWith_[2], []);
        });
      });

      describe('export', () => {
        it('should accept a bucket string destination', done => {
          const bucket = 'bucket';

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(
              config.reqOpts.outputUrlPrefix,
              `gs://${bucket}`
            );
            done();
          };

          datastore.export({bucket}, assert.ifError);
        });

        it('should remove extraneous gs:// prefix from input', done => {
          const bucket = 'gs://bucket';

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.reqOpts.outputUrlPrefix, `${bucket}`);
            done();
          };

          datastore.export({bucket}, assert.ifError);
        });

        it('should accept a Bucket object destination', done => {
          const bucket = {name: 'bucket'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(
              config.reqOpts.outputUrlPrefix,
              `gs://${bucket.name}`
            );
            done();
          };

          datastore.export({bucket}, assert.ifError);
        });

        it('should throw if a destination is not provided', () => {
          assert.throws(() => {
            datastore.export({}, assert.ifError);
          }, /A Bucket object or URL must be provided\./);
        });

        it('should throw if bucket and outputUrlPrefix are provided', () => {
          assert.throws(() => {
            datastore.export(
              {
                bucket: 'bucket',
                outputUrlPrefix: 'output-url-prefix',
              },
              assert.ifError
            );
          }, /Both `bucket` and `outputUrlPrefix` were provided\./);
        });

        it('should accept kinds', done => {
          const kinds = ['kind1', 'kind2'];
          const config = {bucket: 'bucket', kinds};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.deepStrictEqual(config.reqOpts.entityFilter.kinds, kinds);
            done();
          };

          datastore.export(config, assert.ifError);
        });

        it('should throw if both kinds and entityFilter are provided', () => {
          assert.throws(() => {
            datastore.export(
              {
                bucket: 'bucket',
                kinds: ['kind1', 'kind2'],
                entityFilter: {},
              },
              assert.ifError
            );
          }, /Both `entityFilter` and `kinds` were provided\./);
        });

        it('should accept namespaces', done => {
          const namespaces = ['ns1', 'n2'];
          const config = {bucket: 'bucket', namespaces};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.deepStrictEqual(
              config.reqOpts.entityFilter.namespaceIds,
              namespaces
            );
            done();
          };

          datastore.export(config, assert.ifError);
        });

        it('should throw if both namespaces and entityFilter are provided', () => {
          assert.throws(() => {
            datastore.export(
              {
                bucket: 'bucket',
                namespaces: ['ns1', 'ns2'],
                entityFilter: {},
              },
              assert.ifError
            );
          }, /Both `entityFilter` and `namespaces` were provided\./);
        });

        it('should remove extraneous properties from request', done => {
          const config = {
            bucket: 'bucket',
            gaxOptions: {},
            kinds: ['kind1', 'kind2'],
            namespaces: ['ns1', 'ns2'],
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(typeof config.reqOpts.bucket, 'undefined');
            assert.strictEqual(typeof config.reqOpts.gaxOptions, 'undefined');
            assert.strictEqual(typeof config.reqOpts.kinds, 'undefined');
            assert.strictEqual(typeof config.reqOpts.namespaces, 'undefined');
            done();
          };

          datastore.export(config, assert.ifError);
        });

        it('should send any user input to API', done => {
          const userProperty = 'abc';
          const config = {bucket: 'bucket', userProperty};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.reqOpts.userProperty, userProperty);
            done();
          };

          datastore.export(config, assert.ifError);
        });

        it('should send correct request', done => {
          const config = {bucket: 'bucket'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.client, 'DatastoreAdminClient');
            assert.strictEqual(config.method, 'exportEntities');
            assert.strictEqual(typeof config.gaxOpts, 'undefined');
            done();
          };

          datastore.export(config, assert.ifError);
        });

        it('should accept gaxOptions', done => {
          const gaxOptions = {};
          const config = {bucket: 'bucket', gaxOptions};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.gaxOpts, gaxOptions);
            done();
          };

          datastore.export(config, assert.ifError);
        });
      });

      describe('getIndexes', () => {
        it('should send the correct request', done => {
          const options = {a: 'b'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.client, 'DatastoreAdminClient');
            assert.strictEqual(config.method, 'listIndexes');
            assert.deepStrictEqual(config.reqOpts, {
              pageSize: undefined,
              pageToken: undefined,
              ...options,
            });
            assert.deepStrictEqual(config.gaxOpts, {});

            done();
          };

          datastore.getIndexes(options, assert.ifError);
        });

        it('should locate pagination settings from gaxOptions', done => {
          const options = {
            gaxOptions: {
              pageSize: 'size',
              pageToken: 'token',
            },
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(
              config.reqOpts.pageSize,
              options.gaxOptions.pageSize
            );
            assert.strictEqual(
              config.reqOpts.pageToken,
              options.gaxOptions.pageToken
            );
            done();
          };

          datastore.getIndexes(options, assert.ifError);
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
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.reqOpts.pageSize, options.pageSize);
            assert.strictEqual(config.reqOpts.pageToken, options.pageToken);
            done();
          };

          datastore.getIndexes(options, assert.ifError);
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
          datastore.request_ = (config: any) => {
            assert.strictEqual(typeof config.gaxOpts.pageSize, 'undefined');
            assert.strictEqual(typeof config.gaxOpts.pageToken, 'undefined');
            assert.strictEqual(typeof config.reqOpts.autoPaginate, 'undefined');
            done();
          };

          datastore.getIndexes(options, assert.ifError);
        });

        it('should accept gaxOptions', done => {
          const options = {
            gaxOptions: {a: 'b'},
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(typeof config.reqOpts.gaxOptions, 'undefined');
            assert.deepStrictEqual(config.gaxOpts, options.gaxOptions);
            done();
          };

          datastore.getIndexes(options, assert.ifError);
        });

        it('should not send gaxOptions as request options', done => {
          const options = {
            gaxOptions: {a: 'b'},
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert(
              Object.keys(options.gaxOptions).every(k => !config.reqOpts[k])
            );
            done();
          };

          datastore.getIndexes(options, assert.ifError);
        });

        it('should set autoPaginate from options', done => {
          const options = {
            autoPaginate: true,
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(
              config.gaxOpts.autoPaginate,
              options.autoPaginate
            );
            done();
          };

          datastore.getIndexes(options, assert.ifError);
        });

        it('should prefer autoPaginate from gaxOpts', done => {
          const options = {
            autoPaginate: false,
            gaxOptions: {
              autoPaginate: true,
            },
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.gaxOpts.autoPaginate, true);
            done();
          };

          datastore.getIndexes(options, assert.ifError);
        });

        it('should execute callback with error and correct response arguments', done => {
          const error = new Error('Error.');
          const apiResponse = {};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any, callback: Function) => {
            callback(error, [], null, apiResponse);
          };

          datastore.getIndexes(
            (err: Error, indexes: [], nextQuery: {}, apiResp: {}) => {
              assert.strictEqual(err, error);
              assert.deepStrictEqual(indexes, []);
              assert.strictEqual(nextQuery, null);
              assert.strictEqual(apiResp, apiResponse);
              done();
            }
          );
        });

        it('should execute callback with Index instances', done => {
          const rawIndex = {indexId: 'name', a: 'b'};
          const indexInstance = {};

          datastore.index = (id: string) => {
            assert.strictEqual(id, rawIndex.indexId);
            return indexInstance;
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any, callback: Function) => {
            callback(null, [rawIndex]);
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.getIndexes((err: Error, indexes: any[]) => {
            assert.ifError(err);
            assert.deepStrictEqual(indexes, [indexInstance]);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((indexes[0] as any)!.metadata, rawIndex);
            done();
          });
        });

        it('should execute callback with prepared nextQuery', done => {
          const options = {pageToken: '1'};
          const nextQuery = {pageToken: '2'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any, callback: Function) => {
            callback(null, [], nextQuery);
          };

          datastore.getIndexes(
            options,
            (err: Error, indexes: [], _nextQuery: {}) => {
              assert.ifError(err);
              assert.deepStrictEqual(_nextQuery, nextQuery);
              done();
            }
          );
        });
      });

      describe('getIndexesStream', () => {
        it('should make correct request', done => {
          const options = {a: 'b'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.requestStream_ = (config: any) => {
            assert.strictEqual(config.client, 'DatastoreAdminClient');
            assert.strictEqual(config.method, 'listIndexesStream');
            assert.deepStrictEqual(config.reqOpts, {
              ...options,
            });
            assert.strictEqual(typeof config.gaxOpts, 'undefined');
            setImmediate(done);
            return new PassThrough();
          };

          datastore.getIndexesStream(options);
        });

        it('should accept gaxOptions', done => {
          const options = {gaxOptions: {}};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.requestStream_ = (config: any) => {
            assert.strictEqual(config.gaxOpts, options.gaxOptions);
            setImmediate(done);
            return new PassThrough();
          };

          datastore.getIndexesStream(options);
        });

        it('should transform response indexes into Index objects', done => {
          const rawIndex = {indexId: 'name', a: 'b'};
          const indexInstance = {};
          const requestStream = new Readable({
            objectMode: true,
            read() {
              this.push(rawIndex);
              this.push(null);
            },
          });

          datastore.index = (id: string) => {
            assert.strictEqual(id, rawIndex.indexId);
            return indexInstance;
          };

          datastore.requestStream_ = () => requestStream;

          datastore
            .getIndexesStream()
            .on('error', done)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .on('data', (index: any) => {
              assert.strictEqual(index, indexInstance);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              assert.strictEqual((index as any).metadata, rawIndex);
              done();
            });
        });
      });

      describe('import', () => {
        it('should throw if both file and inputUrl are provided', () => {
          assert.throws(() => {
            datastore.import(
              {
                file: 'file',
                inputUrl: 'gs://file',
              },
              assert.ifError
            );
          }, /Both `file` and `inputUrl` were provided\./);
        });

        it('should accept a file string source', done => {
          const file = 'file';

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.reqOpts.inputUrl, `gs://${file}`);
            done();
          };

          datastore.import({file}, assert.ifError);
        });

        it('should remove extraneous gs:// prefix from input', done => {
          const file = 'gs://file';

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.reqOpts.inputUrl, `${file}`);
            done();
          };

          datastore.import({file}, assert.ifError);
        });

        it('should accept a File object source', done => {
          const file = {bucket: {name: 'bucket'}, name: 'file'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(
              config.reqOpts.inputUrl,
              `gs://${file.bucket.name}/${file.name}`
            );
            done();
          };

          datastore.import({file}, assert.ifError);
        });

        it('should throw if a source is not provided', () => {
          assert.throws(() => {
            datastore.import({}, assert.ifError);
          }, /An input URL must be provided\./);
        });

        it('should accept kinds', done => {
          const kinds = ['kind1', 'kind2'];
          const config = {file: 'file', kinds};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.deepStrictEqual(config.reqOpts.entityFilter.kinds, kinds);
            done();
          };

          datastore.import(config, assert.ifError);
        });

        it('should throw if both kinds and entityFilter are provided', () => {
          assert.throws(() => {
            datastore.import(
              {
                file: 'file',
                kinds: ['kind1', 'kind2'],
                entityFilter: {},
              },
              assert.ifError
            );
          }, /Both `entityFilter` and `kinds` were provided\./);
        });

        it('should accept namespaces', done => {
          const namespaces = ['ns1', 'n2'];
          const config = {file: 'file', namespaces};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.deepStrictEqual(
              config.reqOpts.entityFilter.namespaceIds,
              namespaces
            );
            done();
          };

          datastore.import(config, assert.ifError);
        });

        it('should throw if both namespaces and entityFilter are provided', () => {
          assert.throws(() => {
            datastore.import(
              {
                file: 'file',
                namespaces: ['ns1', 'ns2'],
                entityFilter: {},
              },
              assert.ifError
            );
          }, /Both `entityFilter` and `namespaces` were provided\./);
        });

        it('should remove extraneous properties from request', done => {
          const config = {
            file: 'file',
            gaxOptions: {},
            kinds: ['kind1', 'kind2'],
            namespaces: ['ns1', 'ns2'],
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(typeof config.reqOpts.file, 'undefined');
            assert.strictEqual(typeof config.reqOpts.gaxOptions, 'undefined');
            assert.strictEqual(typeof config.reqOpts.kinds, 'undefined');
            assert.strictEqual(typeof config.reqOpts.namespaces, 'undefined');
            done();
          };

          datastore.import(config, assert.ifError);
        });

        it('should send any user input to API', done => {
          const userProperty = 'abc';
          const config = {file: 'file', userProperty};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.reqOpts.userProperty, userProperty);
            done();
          };

          datastore.import(config, assert.ifError);
        });

        it('should send correct request', done => {
          const config = {file: 'file'};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.client, 'DatastoreAdminClient');
            assert.strictEqual(config.method, 'importEntities');
            assert.strictEqual(typeof config.gaxOpts, 'undefined');
            done();
          };

          datastore.import(config, assert.ifError);
        });

        it('should accept gaxOptions', done => {
          const gaxOptions = {};
          const config = {file: 'file', gaxOptions};

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          datastore.request_ = (config: any) => {
            assert.strictEqual(config.gaxOpts, gaxOptions);
            done();
          };

          datastore.import(config, assert.ifError);
        });
      });

      describe('index', () => {
        it('should return an Index object', () => {
          const indexId = 'index-id';
          const index = datastore.index(indexId);
          assert(index instanceof FakeIndex);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const args = (index as any).calledWith_;
          assert.strictEqual(args[0], datastore);
          assert.strictEqual(args[1], indexId);
        });
      });

      describe('insert', () => {
        afterEach(() => {
          sandbox.restore();
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          const preparedEntityObject = {prepared: true};
          const expectedEntityObject = Object.assign({}, preparedEntityObject, {
            method: 'insert',
          });

          sandbox
            .stub(ds.DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              return preparedEntityObject as {};
            });

          datastore.save = (entities: Entity[]) => {
            assert.deepStrictEqual(entities[0], expectedEntityObject);
            done();
          };

          datastore.insert(entityObject, assert.ifError);
        });

        it('should pass the correct arguments to save', done => {
          datastore.save = (entities: Entity[], callback: Function) => {
            assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
              {
                key: {
                  namespace: 'ns',
                  kind: 'Company',
                  path: ['Company', null],
                },
                data: {},
                method: 'insert',
              },
            ]);
            callback();
          };
          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          datastore.insert({key, data: {}}, done);
        });
      });

      describe('key', () => {
        it('should return a Key object', () => {
          const options = {} as entity.KeyOptions;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const key: any = datastore.key(options);
          assert.strictEqual(key.calledWith_[0], options);
        });

        it('should use a non-object argument as the path', () => {
          const options = 'path';
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const key: any = datastore.key(options);
          assert.strictEqual(key.calledWith_[0].namespace, datastore.namespace);
          assert.deepStrictEqual(key.calledWith_[0].path, [options]);
        });
      });

      describe('save', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type Any = any;
        let key: entity.Key;

        beforeEach(() => {
          key = new entity.Key({
            namespace: 'namespace',
            path: ['Company', 123],
          });
        });

        afterEach(() => {
          sandbox.restore();
        });

        it('should save with keys', done => {
          const expectedReq = {
            mutations: [
              {
                upsert: {
                  key: {
                    partitionId: {
                      namespaceId: 'namespace',
                    },
                    path: [
                      {
                        kind: 'Company',
                        id: 123,
                      },
                    ],
                  },
                  properties: {
                    k: {
                      stringValue: 'v',
                    },
                  },
                },
              },
              {
                upsert: {
                  key: {
                    partitionId: {
                      namespaceId: 'namespace',
                    },
                    path: [
                      {
                        kind: 'Company',
                        id: 123,
                      },
                    ],
                  },
                  properties: {
                    k: {
                      stringValue: 'v',
                    },
                  },
                },
              },
            ],
          };

          datastore.request_ = (config: RequestConfig, callback: Function) => {
            assert.strictEqual(config.client, 'DatastoreClient');
            assert.strictEqual(config.method, 'commit');

            assert.deepStrictEqual(config.reqOpts, expectedReq);
            assert.deepStrictEqual(config.gaxOpts, {});

            callback();
          };
          datastore.save(
            [
              {key, data: {k: 'v'}},
              {key, data: {k: 'v'}},
            ],
            done
          );
        });

        it('should save null value when excludeLargeProperties enabled', done => {
          const expectedProperties = {
            stringField: {
              stringValue: 'string value',
            },
            nullField: {
              nullValue: 0,
            },
            arrayField: {
              arrayValue: {
                values: [
                  {
                    integerValue: '0',
                  },
                  {
                    nullValue: 0,
                  },
                ],
              },
            },
            objectField: {
              nullValue: 0,
            },
          };

          datastore.request_ = (config: RequestConfig, callback: Function) => {
            assert.deepStrictEqual(
              config.reqOpts!.mutations![0].upsert!.properties,
              expectedProperties
            );
            callback();
          };

          const entities = {
            key: key,
            data: {
              stringField: 'string value',
              nullField: null,
              arrayField: [0, null],
              objectField: null,
            },
            excludeLargeProperties: true,
          };
          datastore.save(entities, done);
        });

        it('should allow customization of GAX options', done => {
          const gaxOptions = {};

          datastore.request_ = (config: RequestConfig) => {
            assert.strictEqual(config.gaxOpts, gaxOptions);
            done();
          };

          datastore.save(
            {
              key,
              data: {},
            },
            gaxOptions,
            assert.ifError
          );
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          let prepared = false;

          sandbox
            .stub(ds.DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              prepared = true;
              return {
                key,
                method: 'insert',
                data: {k: 'v'},
              } as {};
            });

          datastore.request_ = () => {
            assert.strictEqual(prepared, true);
            done();
          };

          datastore.save(entityObject, assert.ifError);
        });

        it('should save with specific method', done => {
          datastore.request_ = (config: RequestConfig, callback: Function) => {
            assert.strictEqual(config.reqOpts!.mutations!.length, 3);
            assert(is.object(config.reqOpts!.mutations![0].insert));
            assert(is.object(config.reqOpts!.mutations![1].update));
            assert(is.object(config.reqOpts!.mutations![2].upsert));

            const insert = config.reqOpts!.mutations![0].insert!;
            assert.deepStrictEqual(insert.properties!.k, {stringValue: 'v'});

            const update = config.reqOpts!.mutations![1].update!;
            assert.deepStrictEqual(update.properties!.k2, {stringValue: 'v2'});

            const upsert = config.reqOpts!.mutations![2].upsert!;
            assert.deepStrictEqual(upsert.properties!.k3, {stringValue: 'v3'});

            callback();
          };

          datastore.save(
            [
              {key, method: 'insert', data: {k: 'v'}},
              {key, method: 'update', data: {k2: 'v2'}},
              {key, method: 'upsert', data: {k3: 'v3'}},
            ],
            done
          );
        });

        it('should throw if a given method is not recognized', () => {
          assert.throws(() => {
            datastore.save(
              {
                key,
                method: 'auto_insert_id',
                data: {
                  k: 'v',
                },
              },
              assert.ifError
            );
          }, /Method auto_insert_id not recognized/);
        });

        it('should not alter the provided data object', done => {
          const entities = [
            {
              key,
              method: 'insert',
              indexed: false,
              data: {
                value: {
                  a: 'b',
                  c: [1, 2, 3],
                },
              },
            },
          ];
          const expectedEntities = entities.map(x => extend(true, {}, x));

          datastore.request_ = () => {
            // By the time the request is made, the original object has already been
            // transformed into a raw request.
            assert.deepStrictEqual(entities, expectedEntities);
            done();
          };

          datastore.save(entities, assert.ifError);
        });

        it('should return apiResponse in callback', done => {
          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          const mockCommitResponse = {};
          datastore.request_ = (config: RequestConfig, callback: Function) => {
            callback(null, mockCommitResponse);
          };
          datastore.save(
            {key, data: {}},
            (err: Error | null, apiResponse: Entity) => {
              assert.ifError(err);
              assert.strictEqual(mockCommitResponse, apiResponse);
              done();
            }
          );
        });

        it('should allow setting the indexed value of a property', done => {
          datastore.request_ = (config: RequestConfig) => {
            const property =
              config.reqOpts!.mutations![0].upsert!.properties!.name;
            assert.strictEqual(property.stringValue, 'value');
            assert.strictEqual(property.excludeFromIndexes, true);
            done();
          };

          datastore.save(
            {
              key,
              data: [
                {
                  name: 'name',
                  value: 'value',
                  excludeFromIndexes: true,
                },
              ],
            },
            assert.ifError
          );
        });

        it('should allow setting the indexed value on arrays', done => {
          datastore.request_ = (config: RequestConfig) => {
            const property =
              config.reqOpts!.mutations![0].upsert!.properties!.name;

            property.arrayValue!.values!.forEach((value: Any) => {
              assert.strictEqual(value.excludeFromIndexes, true);
            });

            done();
          };

          datastore.save(
            {
              key,
              data: [
                {
                  name: 'name',
                  value: ['one', 'two', 'three'],
                  excludeFromIndexes: true,
                },
              ],
            },
            assert.ifError
          );
        });

        it('should allow exclude property indexed with "*" wildcard from root', done => {
          const longString = Buffer.alloc(1501, '.').toString();
          const data = {
            longString,
            notMetadata: true,
            longStringArray: [longString],
            metadata: {
              longString,
              otherProperty: 'value',
              obj: {
                longStringArray: [
                  {
                    longString,
                    nestedLongStringArray: [
                      {
                        longString,
                        nestedProperty: true,
                      },
                      {
                        longString,
                      },
                    ],
                  },
                ],
              },
              longStringArray: [
                {
                  longString,
                  nestedLongStringArray: [
                    {
                      longString,
                      nestedProperty: true,
                    },
                    {
                      longString,
                    },
                  ],
                },
              ],
            },
          };

          const validateIndex = (data: Any) => {
            if (data.arrayValue) {
              data.arrayValue.values.forEach((value: Any) => {
                validateIndex(value);
              });
            } else if (data.entityValue) {
              Object.keys(data.entityValue.properties).forEach(path => {
                validateIndex(data.entityValue.properties[path]);
              });
            } else {
              assert.strictEqual(data.excludeFromIndexes, true);
            }
          };

          datastore.request_ = (config: RequestConfig) => {
            const properties = config.reqOpts!.mutations![0].upsert!.properties;
            Object.keys(properties!).forEach(path => {
              validateIndex(properties![path]);
            });
            done();
          };

          datastore.save(
            {
              key,
              data,
              excludeFromIndexes: ['.*'],
            },
            assert.ifError
          );
        });

        it('should allow exclude property indexed with "*" wildcard for object and array', done => {
          const longString = Buffer.alloc(1501, '.').toString();
          const data = {
            longString,
            notMetadata: true,
            longStringArray: [longString],
            metadata: {
              longString,
              otherProperty: 'value',
              obj: {
                longStringArray: [
                  {
                    longString,
                    nestedLongStringArray: [
                      {
                        longString,
                        nestedProperty: true,
                      },
                      {
                        longString,
                      },
                    ],
                  },
                ],
              },
              longStringArray: [
                {
                  longString,
                  nestedLongStringArray: [
                    {
                      longString,
                      nestedProperty: true,
                    },
                    {
                      longString,
                    },
                  ],
                },
              ],
            },
          };

          const validateIndex = (data: Any) => {
            if (data.arrayValue) {
              data.arrayValue.values.forEach((value: Any) => {
                validateIndex(value);
              });
            } else if (data.entityValue) {
              Object.keys(data.entityValue.properties).forEach(path => {
                validateIndex(data.entityValue.properties[path]);
              });
            } else {
              assert.strictEqual(data.excludeFromIndexes, true);
            }
          };

          datastore.request_ = (config: RequestConfig) => {
            const properties = config.reqOpts!.mutations![0].upsert!.properties;
            Object.keys(properties!).forEach(path => {
              validateIndex(properties![path]);
            });
            done();
          };

          datastore.save(
            {
              key,
              data,
              excludeFromIndexes: [
                'longString',
                'notMetadata',
                'longStringArray[]',
                'metadata.longString',
                'metadata.otherProperty',
                'metadata.obj.*',
                'metadata.longStringArray[].*',
              ],
            },
            assert.ifError
          );
        });

        it('should allow setting the indexed value on arrays', done => {
          datastore.request_ = (config: RequestConfig) => {
            const property =
              config.reqOpts!.mutations![0].upsert!.properties!.name;

            property.arrayValue!.values!.forEach((value: Any) => {
              assert.strictEqual(value.excludeFromIndexes, true);
            });

            done();
          };

          datastore.save(
            {
              key,
              data: [
                {
                  name: 'name',
                  value: ['one', 'two', 'three'],
                  excludeFromIndexes: true,
                },
              ],
            },
            assert.ifError
          );
        });

        it('should prepare excludeFromIndexes array for large values', done => {
          const longString = Buffer.alloc(1501, '.').toString();
          const data = {
            longString,
            notMetadata: true,
            longStringArray: [longString],
            metadata: {
              longString,
              otherProperty: 'value',
              obj: {
                longStringArray: [
                  {
                    longString,
                    nestedLongStringArray: [
                      {
                        longString,
                        nestedProperty: true,
                      },
                      {
                        longString,
                      },
                    ],
                  },
                ],
              },
              longStringArray: [
                {
                  longString,
                  nestedLongStringArray: [
                    {
                      longString,
                      nestedProperty: true,
                    },
                    {
                      longString,
                    },
                  ],
                },
              ],
            },
          };

          const excludeFromIndexes = [
            'longString',
            'longStringArray[]',
            'metadata.longString',
            'metadata.obj.longStringArray[].longString',
            'metadata.obj.longStringArray[].nestedLongStringArray[].longString',
            'metadata.longStringArray[].longString',
            'metadata.longStringArray[].nestedLongStringArray[].longString',
          ];

          fakeEntity.entityToEntityProto = (entity: EntityObject) => {
            return entity as unknown as EntityProto;
          };
          datastore.request_ = (config: RequestConfig) => {
            assert.strictEqual(
              (config.reqOpts!.mutations![0].upsert! as Entity)
                .excludeLargeProperties,
              true
            );
            assert.deepStrictEqual(
              (config.reqOpts!.mutations![0].upsert! as Entity)
                .excludeFromIndexes,
              excludeFromIndexes
            );
            done();
          };

          datastore.save(
            {
              key,
              data,
              excludeLargeProperties: true,
            },
            assert.ifError
          );
        });

        it('should allow auto setting the indexed value of a property with excludeLargeProperties', done => {
          const longString = Buffer.alloc(1501, '.').toString();
          const data = [
            {
              name: 'name',
              value: longString,
            },
            {
              name: 'description',
              value: 'value',
            },
          ];

          datastore.request_ = (config: RequestConfig) => {
            assert.deepStrictEqual(
              config.reqOpts!.mutations![0].upsert!.properties!.name
                .excludeFromIndexes,
              true
            );
            done();
          };

          datastore.save(
            {
              key,
              data,
              excludeLargeProperties: true,
            },
            assert.ifError
          );
        });

        it('should assign ID on keys without them', done => {
          const incompleteKey = new entity.Key({path: ['Incomplete']});
          const incompleteKey2 = new entity.Key({path: ['Incomplete']});
          const completeKey = new entity.Key({path: ['Complete', 'Key']});

          const keyProtos: Array<{}> = [];
          const ids = [1, 2];

          const response = {
            mutationResults: [
              {
                key: {},
              },
              {
                key: {},
              },
              {},
            ],
          };

          datastore.request_ = (config: RequestConfig, callback: Function) => {
            callback(null, response);
          };

          sandbox.stub(fakeEntity, 'keyFromKeyProto').callsFake(keyProto => {
            keyProtos.push(keyProto as any);
            return {
              id: ids[keyProtos.length - 1],
            } as {} as entity.Key;
          });

          datastore.save(
            [
              {key: incompleteKey, data: {}},
              {key: incompleteKey2, data: {}},
              {key: completeKey, data: {}},
            ],
            (err: Error) => {
              assert.ifError(err);

              assert.strictEqual(incompleteKey.id, ids[0]);
              assert.strictEqual(incompleteKey2.id, ids[1]);

              assert.strictEqual(keyProtos.length, 2);
              assert.strictEqual(keyProtos[0], response.mutationResults[0].key);
              assert.strictEqual(keyProtos[1], response.mutationResults[1].key);

              done();
            }
          );
        });

        describe('transactions', () => {
          beforeEach(() => {
            // Trigger transaction mode.
            datastore.id = 'transaction-id';
            datastore.requestCallbacks_ = [];
            datastore.requests_ = [];
          });

          it('should queue request & callback', () => {
            datastore.save({
              key,
              data: [{name: 'name', value: 'value'}],
            });

            assert.strictEqual(
              typeof datastore.requestCallbacks_[0],
              'function'
            );
            assert.strictEqual(typeof datastore.requests_[0], 'object');
          });
        });
      });

      describe('update', () => {
        afterEach(() => {
          sandbox.restore();
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          const preparedEntityObject = {prepared: true};
          const expectedEntityObject = Object.assign({}, preparedEntityObject, {
            method: 'update',
          });

          sandbox
            .stub(ds.DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              return preparedEntityObject as {};
            });

          datastore.save = (entities: Entity[]) => {
            assert.deepStrictEqual(entities[0], expectedEntityObject);
            done();
          };

          datastore.update(entityObject, assert.ifError);
        });

        it('should pass the correct arguments to save', done => {
          datastore.save = (entities: Entity[], callback: Function) => {
            assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
              {
                key: {
                  namespace: 'ns',
                  kind: 'Company',
                  path: ['Company', null],
                },
                data: {},
                method: 'update',
              },
            ]);
            callback();
          };

          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          datastore.update({key, data: {}}, done);
        });
      });

      describe('upsert', () => {
        afterEach(() => {
          sandbox.restore();
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          const preparedEntityObject = {prepared: true};
          const expectedEntityObject = Object.assign({}, preparedEntityObject, {
            method: 'upsert',
          });

          sandbox
            .stub(ds.DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              return preparedEntityObject as {};
            });

          datastore.save = (entities: Entity[]) => {
            assert.deepStrictEqual(entities[0], expectedEntityObject);
            done();
          };

          datastore.upsert(entityObject, assert.ifError);
        });

        it('should pass the correct arguments to save', done => {
          datastore.save = (entities: Entity[], callback: Function) => {
            assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
              {
                key: {
                  namespace: 'ns',
                  kind: 'Company',
                  path: ['Company', null],
                },
                data: {},
                method: 'upsert',
              },
            ]);

            callback();
          };

          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          datastore.upsert({key, data: {}}, done);
        });
      });

      describe('transaction', () => {
        it('should return a Transaction object', () => {
          const transaction = datastore.transaction();
          assert.strictEqual(transaction.calledWith_[0], datastore);
        });

        it('should pass options to the Transaction constructor', () => {
          const options = {};
          const transaction = datastore.transaction(options);
          assert.strictEqual(transaction.calledWith_[1], options);
        });
      });

      describe('determineBaseUrl_', () => {
        function setHost(host: string) {
          process.env.DATASTORE_EMULATOR_HOST = host;
        }

        beforeEach(() => {
          delete process.env.DATASTORE_EMULATOR_HOST;
        });

        it('should default to defaultBaseUrl_', () => {
          const defaultBaseUrl_ = 'defaulturl';
          datastore.defaultBaseUrl_ = defaultBaseUrl_;

          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.baseUrl_, defaultBaseUrl_);
        });

        it('should remove slashes from the baseUrl', () => {
          const expectedBaseUrl = 'localhost';

          setHost('localhost/');
          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.baseUrl_, expectedBaseUrl);

          setHost('localhost//');
          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.baseUrl_, expectedBaseUrl);
        });

        it('should remove the protocol if specified', () => {
          setHost('http://localhost');
          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.baseUrl_, 'localhost');

          setHost('https://localhost');
          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.baseUrl_, 'localhost');
        });

        it('should set Numberified port if one was found', () => {
          setHost('http://localhost:9090');
          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.port_, 9090);
        });

        it('should not set customEndpoint_ when using default baseurl', () => {
          const datastore = new Datastore({projectId: PROJECT_ID});
          datastore.determineBaseUrl_();
          assert.strictEqual(datastore.customEndpoint_, undefined);
        });

        it('should set customEndpoint_ when using custom API endpoint', () => {
          datastore.determineBaseUrl_('apiEndpoint');
          assert.strictEqual(datastore.customEndpoint_, true);
        });

        it('should set baseUrl when using custom API endpoint', () => {
          datastore.determineBaseUrl_('apiEndpoint');
          assert.strictEqual(datastore.baseUrl_, 'apiEndpoint');
        });

        describe('with DATASTORE_EMULATOR_HOST environment variable', () => {
          const DATASTORE_EMULATOR_HOST = 'localhost:9090';
          const EXPECTED_BASE_URL = 'localhost';
          const EXPECTED_PORT = 9090;

          beforeEach(() => {
            setHost(DATASTORE_EMULATOR_HOST);
          });

          after(() => {
            delete process.env.DATASTORE_EMULATOR_HOST;
          });

          it('should use the DATASTORE_EMULATOR_HOST env var', () => {
            datastore.determineBaseUrl_();
            assert.strictEqual(datastore.baseUrl_, EXPECTED_BASE_URL);
            assert.strictEqual(datastore.port_, EXPECTED_PORT);
          });

          it('should set customEndpoint_', () => {
            datastore.determineBaseUrl_();
            assert.strictEqual(datastore.customEndpoint_, true);
          });
        });
      });

      describe('keyToLegacyUrlSafe', () => {
        it('should convert key to URL-safe base64 string', () => {
          const key = new entity.Key({
            path: ['Task', 'Test'],
          });
          const base64EndocdedUrlSafeKey =
            'agpwcm9qZWN0LWlkcg4LEgRUYXNrIgRUZXN0DA';
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (datastore.auth as any).getProjectId = (callback: Function) => {
            callback(null, 'project-id');
          };
          datastore.keyToLegacyUrlSafe(
            key,
            (err: Error | null | undefined, urlSafeKey: string) => {
              assert.ifError(err);
              assert.strictEqual(urlSafeKey, base64EndocdedUrlSafeKey);
            }
          );
        });

        it('should convert key to URL-safe base64 string with location prefix', () => {
          const key = new entity.Key({
            path: ['Task', 'Test'],
          });
          const locationPrefix = 's~';
          const base64EndocdedUrlSafeKey =
            'agxzfnByb2plY3QtaWRyDgsSBFRhc2siBFRlc3QM';
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (datastore.auth as any).getProjectId = (callback: Function) => {
            callback(null, 'project-id');
          };
          datastore.keyToLegacyUrlSafe(
            key,
            locationPrefix,
            (err: Error | null | undefined, urlSafeKey: string) => {
              assert.ifError(err);
              assert.strictEqual(urlSafeKey, base64EndocdedUrlSafeKey);
            }
          );
        });

        it('should not return URL-safe key to user if auth.getProjectId errors', () => {
          const error = new Error('Error.');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (datastore.auth as any).getProjectId = (callback: Function) => {
            callback(error);
          };
          datastore.keyToLegacyUrlSafe(
            {} as entity.Key,
            (err: Error | null | undefined, urlSafeKey: string) => {
              assert.strictEqual(err, error);
              assert.strictEqual(urlSafeKey, undefined);
            }
          );
        });
      });

      describe('keyFromLegacyUrlsafe', () => {
        it('should convert key to url safe base64 string', () => {
          const encodedKey = 'agpwcm9qZWN0LWlkcg4LEgRUYXNrIgRUZXN0DA';
          const key = datastore.keyFromLegacyUrlsafe(encodedKey);
          assert.strictEqual(key.kind, 'Task');
          assert.strictEqual(key.name, 'Test');
        });
      });

      describe('without using mocks', () => {
        describe('on save tests', () => {
          const onSaveTests = [
            {
              description:
                'should encode a save request without excludeFromIndexes',
              properties: {k: {stringValue: 'v'}},
              entitiesWithoutKey: {data: {k: 'v'}},
            },
            {
              description:
                'should add exclude from indexes to property k and ignore excludeFromIndexes with wildcard',
              properties: {k: {stringValue: 'v', excludeFromIndexes: true}},
              entitiesWithoutKey: {
                data: {k: 'v'},
                excludeFromIndexes: ['k', 'k.*'],
              },
            },
            {
              description:
                'should encode a save request without properties and without excludeFromIndexes',
              properties: {},
              entitiesWithoutKey: {data: {}},
            },
            {
              description:
                'should encode a save request with no properties ignoring excludeFromIndexes for a property not on save data',
              properties: {},
              entitiesWithoutKey: {
                data: {},
                excludeFromIndexes: [
                  'non_exist_property', // this just ignored
                  'non_exist_property.*', // should also be ignored
                ],
              },
            },
            {
              description:
                'should encode a save request with one property ignoring excludeFromIndexes for a property not on save data',
              properties: {k: {stringValue: 'v'}},
              entitiesWithoutKey: {
                data: {k: 'v'},
                excludeFromIndexes: [
                  'non_exist_property[]', // this just ignored
                ],
              },
            },
            {
              description:
                'should encode a save request with one property ignoring excludeFromIndexes for a property with a wildcard not on save data',
              properties: {k: {stringValue: 'v'}},
              entitiesWithoutKey: {
                data: {k: 'v'},
                excludeFromIndexes: [
                  'non_exist_property[].*', // this just ignored
                ],
              },
            },
          ];

          async.each(
            onSaveTests,
            (onSaveTest: {
              description: string;
              properties: google.datastore.v1.IValue;
              entitiesWithoutKey: Entities;
            }) => {
              it(`${onSaveTest.description}`, async () => {
                const datastore = new OriginalDatastore({
                  namespace: `${Date.now()}`,
                });
                {
                  // This block of code mocks out request_ to check values passed into it.
                  const expectedConfig = {
                    client: 'DatastoreClient',
                    method: 'commit',
                    gaxOpts: {},
                    reqOpts: {
                      mutations: [
                        {
                          upsert: {
                            key: {
                              path: [{kind: 'Post', name: 'Post1'}],
                              partitionId: {
                                namespaceId: datastore.namespace,
                              },
                            },
                            properties: onSaveTest.properties,
                          },
                        },
                      ],
                    },
                  };
                  // Mock out the request function to compare config passed into it.
                  datastore.request_ = (
                    config: RequestConfig,
                    callback: RequestCallback
                  ) => {
                    try {
                      assert.deepStrictEqual(config, expectedConfig);
                      callback(null, 'some-data');
                    } catch (e: any) {
                      callback(e);
                    }
                  };
                }
                {
                  // Attach key to entities parameter passed in and run save with those parameters.
                  const key = datastore.key(['Post', 'Post1']);
                  const entities = Object.assign(
                    {key},
                    onSaveTest.entitiesWithoutKey
                  );
                  const results = await datastore.save(entities);
                  assert.deepStrictEqual(results, ['some-data']);
                }
              });
            }
          );
        });
      });

      describe('multi-db support', () => {
        it('should get the database id from the client', async () => {
          const otherDatastore = new Datastore({
            namespace: `${Date.now()}`,
            databaseId: SECOND_DATABASE_ID,
          });
          assert.strictEqual(
            otherDatastore.getDatabaseId(),
            SECOND_DATABASE_ID
          );
        });
      });
    });
  }
);
