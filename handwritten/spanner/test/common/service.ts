// Copyright 2019 Google LLC
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

import * as path from 'path';
import {util} from '@google-cloud/common';
import {replaceProjectIdToken} from '@google-cloud/projectify';
import * as grpcProtoLoader from '@grpc/proto-loader';
import * as assert from 'assert';
import {before, beforeEach, after, afterEach, describe, it} from 'mocha';
import * as duplexify from 'duplexify';
import * as extend from 'extend';
import {grpc, GrpcClient} from 'google-gax';
import * as proxyquire from 'proxyquire';
import * as retryRequest from 'retry-request';
import * as sn from 'sinon';
import {PassThrough} from 'stream';
import {isDate} from '../../src/helper';

const sinon = sn.createSandbox();
const glob = global as {} as {GCLOUD_SANDBOX_ENV?: boolean | {}};

const gaxProtosDir = path.join(
  path.dirname(require.resolve('google-gax')),
  '..',
  'protos',
);

let getUserAgentFromPackageJsonOverride: Function | null;
const fakeUtil = Object.assign({}, util, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUserAgentFromPackageJson: (...args: any[]) => {
    return (
      getUserAgentFromPackageJsonOverride || util.getUserAgentFromPackageJson
    )(...args);
  },
});

class FakeService {
  calledWith_: IArguments;
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

let replaceProjectIdTokenOverride;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fakeReplaceProjectIdTokenOverride(...args: any[]) {
  return (replaceProjectIdTokenOverride || replaceProjectIdToken)(...args);
}

let retryRequestOverride;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fakeRetryRequest(...args: any[]) {
  return (retryRequestOverride || retryRequest)(...args);
}

let grpcProtoLoadOverride: typeof grpcProtoLoader.loadSync | null = null;

const fakeGrpcProtoLoader = {
  loadSync(filename: string, options?: grpcProtoLoader.Options) {
    return (grpcProtoLoadOverride || grpcProtoLoader.loadSync)(
      filename,
      options,
    );
  },
};

describe('GrpcService', () => {
  // tslint:disable-next-line:variable-name
  let GrpcServiceCached;
  // tslint:disable-next-line:variable-name
  let GrpcService;
  let grpcService;

  // tslint:disable-next-line:variable-name
  let ObjectToStructConverter;

  const ROOT_DIR = '/root/dir';
  const PROTO_FILE_PATH = 'filepath.proto';
  const SERVICE_PATH = 'service.path';

  interface Config {
    proto: {};
    protosDir: string;
    protoServices: {
      Service: {
        path: string;
        service: string;
      };
    };
    packageJson: {
      name: string;
      version: string;
    };
    grpcMetadata?: {
      property: string;
    };
  }

  const CONFIG = {
    proto: {},
    protosDir: ROOT_DIR,
    protoServices: {
      Service: {
        path: PROTO_FILE_PATH,
        service: SERVICE_PATH,
      },
    },
    packageJson: {
      name: '@google-cloud/service',
      version: '0.2.0',
    },
    grpcMetadata: {
      property: 'value',
    },
  };

  const OPTIONS = {
    maxRetries: 3,
  };

  const grpcJsVersion = new GrpcClient().grpcVersion;

  const EXPECTED_API_CLIENT_HEADER = [
    'gl-node/' + process.versions.node,
    'gccl/' + CONFIG.packageJson.version,
    'grpc/' + grpcJsVersion,
  ].join(' ');

  const MOCK_GRPC_API: grpcProtoLoader.PackageDefinition = {
    [`google.${SERVICE_PATH}.Service`]: {},
  };

  before(() => {
    GrpcService = proxyquire('../../src/common-grpc/service', {
      '@google-cloud/common': {
        Service: FakeService,
        util: fakeUtil,
      },
      '@google-cloud/projectify': {
        replaceProjectIdToken: fakeReplaceProjectIdTokenOverride,
      },
      '@grpc/proto-loader': fakeGrpcProtoLoader,
      'retry-request': fakeRetryRequest,
    }).GrpcService;
    GrpcServiceCached = extend(true, {}, GrpcService);
    ObjectToStructConverter = GrpcService.ObjectToStructConverter;
  });

  beforeEach(() => {
    retryRequestOverride = null;
    getUserAgentFromPackageJsonOverride = null;
    grpcProtoLoadOverride = () => {
      return MOCK_GRPC_API;
    };
    Object.assign(GrpcService, GrpcServiceCached);
    grpcService = new GrpcService(CONFIG, OPTIONS);
  });

  afterEach(() => {
    grpcProtoLoadOverride = null;
    // Clear the proto object cache, to ensure that state isn't being carried
    // across tests.
    GrpcService['protoObjectCache'] = {};
    sinon.restore();
  });

  it('should use grpc from config object', () => {
    let metadataUsed = 0;
    let credentialsUsed = 0;
    class Credentials {
      createInsecure() {
        ++credentialsUsed;
      }
    }
    class Metadata {
      add() {
        ++metadataUsed;
      }
    }
    const fakeGrpc = {
      Metadata,
      credentials: new Credentials(),
    };
    const grpcService = new GrpcService(
      Object.assign(
        {
          grpc: fakeGrpc,
          grpcVersion: 'grpc-foo/1.2.3',
          customEndpoint: 'endpoint',
        },
        CONFIG,
      ),
      OPTIONS,
    );
    assert.strictEqual(grpcService.grpc, fakeGrpc);
    assert.strictEqual(grpcService.grpcVersion, 'grpc-foo/1.2.3');
    assert(metadataUsed > 0);
    assert(credentialsUsed > 0);
  });

  it('should not use @grpc/grpc-js version if grpc object is passed', () => {
    class Metadata {
      add() {}
    }
    const fakeGrpc = {
      Metadata,
    };
    const grpcService = new GrpcService(
      Object.assign({grpc: fakeGrpc}, CONFIG),
      OPTIONS,
    );
    assert.strictEqual(grpcService.grpc, fakeGrpc);
    assert.strictEqual(grpcService.grpcVersion, 'grpc/unknown');
  });

  it('should use @grpc/grpc-js by default', () => {
    const grpcService = new GrpcService(CONFIG, OPTIONS);
    assert.strictEqual(grpcService.grpcVersion, 'grpc/' + grpcJsVersion);
    assert.strictEqual(grpcService.grpc, grpc);
  });

  describe('grpc error to http error map', () => {
    it('should export grpc error map', () => {
      assert.deepStrictEqual(GrpcService.GRPC_ERROR_CODE_TO_HTTP, {
        0: {
          code: 200,
          message: 'OK',
        },

        1: {
          code: 499,
          message: 'Client Closed Request',
        },

        2: {
          code: 500,
          message: 'Internal Server Error',
        },

        3: {
          code: 400,
          message: 'Bad Request',
        },

        4: {
          code: 504,
          message: 'Gateway Timeout',
        },

        5: {
          code: 404,
          message: 'Not Found',
        },

        6: {
          code: 409,
          message: 'Conflict',
        },

        7: {
          code: 403,
          message: 'Forbidden',
        },

        8: {
          code: 429,
          message: 'Too Many Requests',
        },

        9: {
          code: 412,
          message: 'Precondition Failed',
        },

        10: {
          code: 409,
          message: 'Conflict',
        },

        11: {
          code: 400,
          message: 'Bad Request',
        },

        12: {
          code: 501,
          message: 'Not Implemented',
        },

        13: {
          code: 500,
          message: 'Internal Server Error',
        },

        14: {
          code: 503,
          message: 'Service Unavailable',
        },

        15: {
          code: 500,
          message: 'Internal Server Error',
        },

        16: {
          code: 401,
          message: 'Unauthorized',
        },
      });
    });
  });

  describe('grpc service options', () => {
    it('should define the correct default options', () => {
      assert.deepStrictEqual(GrpcService.GRPC_SERVICE_OPTIONS, {
        'grpc.max_send_message_length': -1,
        'grpc.max_receive_message_length': -1,
        'grpc.initial_reconnect_backoff_ms': 5000,
      });
    });
  });

  describe('instantiation', () => {
    let sandbox: sn.SinonSandbox;
    beforeEach(() => {
      sandbox = sn.createSandbox();
    });
    afterEach(() => {
      sandbox.restore();
    });

    it('should inherit from Service', () => {
      assert(grpcService instanceof FakeService);

      const calledWith = grpcService.calledWith_;
      assert.strictEqual(calledWith[0], CONFIG);
      assert.strictEqual(calledWith[1], OPTIONS);
    });

    it('should set insecure credentials if using customEndpoint', () => {
      const config = Object.assign({}, CONFIG, {customEndpoint: true});
      const spy = sandbox.spy(grpc.credentials, 'createInsecure');
      new GrpcService(config, OPTIONS);
      assert(spy.called);
    });

    it('should default grpcMetadata to empty metadata', () => {
      const fakeGrpcMetadata = {
        'x-goog-api-client': EXPECTED_API_CLIENT_HEADER,
      };

      const config: Config = Object.assign({}, CONFIG);
      delete config.grpcMetadata;

      const grpcService = new GrpcService(config, OPTIONS);
      assert.deepStrictEqual(
        grpcService.grpcMetadata.getMap(),
        fakeGrpcMetadata,
      );
    });

    it('should create and localize grpcMetadata', () => {
      const fakeGrpcMetadata = Object.assign(
        {
          'x-goog-api-client': EXPECTED_API_CLIENT_HEADER,
        },
        CONFIG.grpcMetadata,
      );
      const grpcService = new GrpcService(CONFIG, OPTIONS);
      assert.deepStrictEqual(
        grpcService.grpcMetadata.getMap(),
        fakeGrpcMetadata,
      );
    });

    it('should localize maxRetries', () => {
      assert.strictEqual(grpcService.maxRetries, OPTIONS.maxRetries);
    });

    it('should set the correct user-agent', () => {
      const userAgent = 'user-agent/0.0.0';

      getUserAgentFromPackageJsonOverride = packageJson => {
        assert.strictEqual(packageJson, CONFIG.packageJson);
        return userAgent;
      };

      const grpcService = new GrpcService(CONFIG, OPTIONS);
      assert.strictEqual(grpcService.userAgent, userAgent);
    });

    it('should set the primary_user_agent from user-agent', () => {
      const userAgent = 'user-agent/0.0.0';

      getUserAgentFromPackageJsonOverride = packageJson => {
        assert.strictEqual(packageJson, CONFIG.packageJson);
        return userAgent;
      };

      new GrpcService(CONFIG, OPTIONS);
      assert.strictEqual(OPTIONS['grpc.primary_user_agent'], userAgent);
    });

    it('should localize the service', () => {
      assert.deepStrictEqual(
        Object.keys(grpcService.protos),
        Object.keys(CONFIG.protoServices),
      );
    });

    it('should localize an empty Map of services', () => {
      assert(grpcService.activeServiceMap_ instanceof Map);
      assert.strictEqual(grpcService.activeServiceMap_.size, 0);
    });

    it('should call grpc.load correctly', () => {
      grpcProtoLoadOverride = (file, options) => {
        assert.deepStrictEqual(options!.includeDirs, [ROOT_DIR]);
        assert.strictEqual(file, PROTO_FILE_PATH);

        assert.strictEqual(options!.bytes, String);
        assert.strictEqual(options!.keepCase, false);

        return MOCK_GRPC_API;
      };

      const grpcService = new GrpcService(CONFIG, OPTIONS);

      for (const serviceName of Object.keys(CONFIG.protoServices)) {
        assert.strictEqual(
          grpcService.protos[serviceName],
          MOCK_GRPC_API[`google.${SERVICE_PATH}.${serviceName}`],
        );
      }
    });

    it('should store the baseUrl properly', () => {
      const fakeBaseUrl = 'a.googleapis.com';

      grpcProtoLoadOverride = () => {
        return MOCK_GRPC_API;
      };

      const config = extend(true, {}, CONFIG, {
        protoServices: {
          Service: {baseUrl: fakeBaseUrl},
        },
      });

      const grpcService = new GrpcService(config, OPTIONS);

      assert.strictEqual(grpcService.protos.Service.baseUrl, fakeBaseUrl);
    });

    it('should not run in the gcloud sandbox environment', () => {
      glob.GCLOUD_SANDBOX_ENV = {};
      const grpcService = new GrpcService();
      assert.strictEqual(grpcService, glob.GCLOUD_SANDBOX_ENV);
      delete glob.GCLOUD_SANDBOX_ENV;
    });
  });

  describe('decodeValue_', () => {
    it('should decode a struct value', () => {
      const structValue = {
        kind: 'structValue',
        structValue: {},
      };

      const decodedValue = {};
      sinon.stub(GrpcService, 'structToObj_').returns(decodedValue);
      assert.strictEqual(GrpcService.decodeValue_(structValue), decodedValue);
    });

    it('should decode a null value', () => {
      const nullValue = {
        kind: 'nullValue',
      };

      const decodedValue = null;

      assert.strictEqual(GrpcService.decodeValue_(nullValue), decodedValue);
    });

    it('should decode a list value', () => {
      const listValue = {
        kind: 'listValue',
        listValue: {
          values: [
            {
              kind: 'nullValue',
            },
          ],
        },
      };

      assert.deepStrictEqual(GrpcService.decodeValue_(listValue), [null]);
    });

    it('should return the raw value', () => {
      const numberValue = {
        kind: 'numberValue',
        numberValue: 8,
      };

      assert.strictEqual(GrpcService.decodeValue_(numberValue), 8);
    });
  });

  describe('objToStruct_', () => {
    it('should convert the object using ObjectToStructConverter', () => {
      const options = {};
      const obj = {};
      const convertedObject = {};
      sinon.stub(GrpcService, 'ObjectToStructConverter').callsFake(options_ => {
        assert.strictEqual(options_, options);
        return {
          convert(obj_) {
            assert.strictEqual(obj_, obj);
            return convertedObject;
          },
        };
      });
      assert.strictEqual(
        GrpcService.objToStruct_(obj, options),
        convertedObject,
      );
    });
  });

  describe('structToObj_', () => {
    it('should convert a struct to an object', () => {
      const inputValue = {};
      const decodedValue = {};

      const struct = {
        fields: {
          a: inputValue,
        },
      };

      sinon.stub(GrpcService, 'decodeValue_').callsFake(value => {
        assert.strictEqual(value, inputValue);
        return decodedValue;
      });

      assert.deepStrictEqual(GrpcService.structToObj_(struct), {
        a: decodedValue,
      });
    });
  });

  describe('request', () => {
    const PROTO_OPTS = {service: 'service', method: 'method', timeout: 3000};
    const REQ_OPTS = {reqOpts: true};
    const GRPC_CREDENTIALS = {};

    function ProtoService() {}
    ProtoService.prototype.method = () => {};

    beforeEach(() => {
      grpcService.grpcCredentials = GRPC_CREDENTIALS;

      grpcService.getService_ = () => {
        return ProtoService;
      };
    });

    it('should not run in the gcloud sandbox environment', () => {
      glob.GCLOUD_SANDBOX_ENV = true;
      assert.strictEqual(grpcService.request(), glob.GCLOUD_SANDBOX_ENV);
      delete glob.GCLOUD_SANDBOX_ENV;
    });

    it('should access the specified service proto object', done => {
      retryRequestOverride = () => {};

      grpcService.getService_ = protoOpts => {
        assert.strictEqual(protoOpts, PROTO_OPTS);
        setImmediate(done);
        return ProtoService;
      };

      grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
    });

    it('should use and return retry-request', () => {
      const retryRequestInstance = {};

      retryRequestOverride = () => {
        return retryRequestInstance;
      };

      const request = grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
      assert.strictEqual(request, retryRequestInstance);
    });

    describe('getting gRPC credentials', () => {
      beforeEach(() => {
        delete grpcService.grpcCredentials;
      });

      describe('getting credentials error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          grpcService.getGrpcCredentials_ = callback => {
            callback(error);
          };
        });

        it('should execute callback with error', done => {
          grpcService.request(PROTO_OPTS, REQ_OPTS, err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('getting credentials success', () => {
        const authClient = {};

        beforeEach(() => {
          grpcService.getGrpcCredentials_ = callback => {
            callback(null, authClient);
          };
        });

        it('should make the gRPC request again', done => {
          grpcService.getService_ = () => {
            assert.strictEqual(grpcService.grpcCredentials, authClient);
            setImmediate(done);
            return new ProtoService();
          };

          grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
        });
      });
    });

    describe('retry strategy', () => {
      let retryRequestReqOpts;
      let retryRequestOptions;
      let retryRequestCallback;

      beforeEach(() => {
        retryRequestOverride = (reqOpts, options, callback) => {
          retryRequestReqOpts = reqOpts;
          retryRequestOptions = options;
          retryRequestCallback = callback;
        };
      });

      it('should use retry-request', done => {
        const error = {};
        const response = {};

        grpcService.request(PROTO_OPTS, REQ_OPTS, (err, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, response);
          done();
        });

        assert.strictEqual(retryRequestReqOpts, null);
        assert.strictEqual(retryRequestOptions.retries, grpcService.maxRetries);
        assert.strictEqual(retryRequestOptions.currentRetryAttempt, 0);

        retryRequestCallback(error, response);
      });

      it('should retry on 429, 500, 502, and 503', () => {
        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);

        const shouldRetryFn = retryRequestOptions.shouldRetryFn;

        const retryErrors = [
          {code: 429},
          {code: 500},
          {code: 502},
          {code: 503},
        ];

        const nonRetryErrors = [
          {code: 200},
          {code: 401},
          {code: 404},
          {code: 409},
          {code: 412},
        ];

        assert.strictEqual(retryErrors.every(shouldRetryFn), true);
        assert.strictEqual(nonRetryErrors.every(shouldRetryFn), false);
      });

      it('should treat a retriable error as an HTTP response', done => {
        const grpcError500 = {code: 2};

        grpcService.getService_ = () => {
          return {
            method(reqOpts, metadata, grpcOpts, callback) {
              callback(grpcError500);
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);

        const onResponse = (err, resp) => {
          assert.strictEqual(err, null);
          assert.deepStrictEqual(resp, GrpcService.GRPC_ERROR_CODE_TO_HTTP[2]);
          done();
        };

        retryRequestOptions.request({}, onResponse);
      });

      it('should return grpc request', () => {
        const grpcRequest = {};

        grpcService.getService_ = () => {
          return {
            method() {
              return grpcRequest;
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);

        const request = retryRequestOptions.request();
        assert.strictEqual(request, grpcRequest);
      });

      it('should exec callback with response error as error', done => {
        const grpcError500 = {code: 2};

        grpcService.getService_ = () => {
          return {
            method(reqOpts, metadata, grpcOpts, callback) {
              callback(grpcError500);
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, (err, resp) => {
          assert.deepStrictEqual(err, GrpcService.GRPC_ERROR_CODE_TO_HTTP[2]);
          assert.strictEqual(resp, null);
          done();
        });

        // When the gRPC error is passed to "onResponse", it will just invoke
        // the callback passed to retry-request. We will check if the grpc Error
        retryRequestOptions.request({}, retryRequestCallback);
      });

      it('should exec callback with unknown error', done => {
        const unknownError = {a: 'a'};

        grpcService.getService_ = () => {
          return {
            method(reqOpts, metadata, grpcOpts, callback) {
              callback(unknownError, null);
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, (err, resp) => {
          assert.strictEqual(err, unknownError);
          assert.strictEqual(resp, null);
          done();
        });

        // When the gRPC error is passed to "onResponse", it will just invoke
        // the callback passed to retry-request. We will check if the grpc Error
        retryRequestOptions.request({}, retryRequestCallback);
      });
    });

    describe('request option decoration', () => {
      describe('decoration success', () => {
        it('should decorate the request', done => {
          const decoratedRequest = {};

          grpcService.decorateRequest_ = reqOpts => {
            assert.deepStrictEqual(reqOpts, REQ_OPTS);
            return decoratedRequest;
          };

          grpcService.getService_ = () => {
            return {
              method(reqOpts) {
                assert.strictEqual(reqOpts, decoratedRequest);
                done();
              },
            };
          };

          grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
        });
      });

      describe('decoration error', () => {
        const error = new Error('Error.');

        it('should return a thrown error to the callback', done => {
          grpcService.decorateRequest_ = () => {
            throw error;
          };

          grpcService.request(PROTO_OPTS, REQ_OPTS, err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });
    });

    describe('retry request', () => {
      it('should make the correct request on the service', done => {
        grpcService.getService_ = () => {
          return {
            method(reqOpts) {
              assert.deepStrictEqual(reqOpts, REQ_OPTS);
              done();
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
      });

      it('should pass the grpc metadata with the request', done => {
        grpcService.getService_ = () => {
          return {
            method(reqOpts, metadata) {
              assert.strictEqual(metadata, grpcService.grpcMetadata);
              done();
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
      });

      it('should set a deadline if a timeout is provided', done => {
        const expectedDeadlineRange = [
          Date.now() + PROTO_OPTS.timeout - 250,
          Date.now() + PROTO_OPTS.timeout + 250,
        ];

        grpcService.getService_ = () => {
          return {
            method(reqOpts, metadata, grpcOpts) {
              assert(isDate(grpcOpts.deadline));

              assert(grpcOpts.deadline.getTime() > expectedDeadlineRange[0]);
              assert(grpcOpts.deadline.getTime() < expectedDeadlineRange[1]);

              done();
            },
          };
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
      });

      describe('request response error', () => {
        it('should look up the http status from the code', () => {
          // tslint:disable-next-line:forin
          for (const grpcErrorCode in GrpcService.GRPC_ERROR_CODE_TO_HTTP) {
            const grpcError = {code: grpcErrorCode};
            const httpError =
              GrpcService.GRPC_ERROR_CODE_TO_HTTP[grpcErrorCode];

            grpcService.getService_ = () => {
              return {
                method(reqOpts, metadata, grpcOpts, callback) {
                  callback(grpcError);
                },
              };
            };

            grpcService.request(PROTO_OPTS, REQ_OPTS, err => {
              assert.strictEqual(err.code, httpError.code);
            });
          }
          /*jshint loopfunc:false */
        });
      });

      describe('request response success', () => {
        const RESPONSE = {};

        beforeEach(() => {
          grpcService.getService_ = () => {
            return {
              method(reqOpts, metadata, grpcOpts, callback) {
                callback(null, RESPONSE);
              },
            };
          };
        });

        it('should execute callback with response', done => {
          grpcService.request(PROTO_OPTS, REQ_OPTS, (err, resp) => {
            assert.ifError(err);
            assert.strictEqual(resp, RESPONSE);
            done();
          });
        });
      });
    });
  });

  describe('requestStream', () => {
    let PROTO_OPTS;
    const REQ_OPTS = {};
    const GRPC_CREDENTIALS = {};
    let fakeStream;

    function ProtoService() {}

    beforeEach(() => {
      PROTO_OPTS = {service: 'service', method: 'method', timeout: 3000};
      ProtoService.prototype.method = () => {};

      grpcService.grpcCredentials = GRPC_CREDENTIALS;
      grpcService.baseUrl = 'http://base-url';
      grpcService.proto = {};
      grpcService.proto.service = ProtoService;

      grpcService.getService_ = () => {
        return new ProtoService();
      };

      fakeStream = new PassThrough({objectMode: true});
      retryRequestOverride = () => {
        return fakeStream;
      };
    });

    afterEach(() => {
      retryRequestOverride = null;
    });

    it('should not run in the gcloud sandbox environment', () => {
      delete grpcService.grpcCredentials;

      grpcService.getGrpcCredentials_ = () => {
        throw new Error('Should not be called.');
      };

      glob.GCLOUD_SANDBOX_ENV = true;
      grpcService.requestStream();
      delete glob.GCLOUD_SANDBOX_ENV;
    });

    describe('getting gRPC credentials', () => {
      beforeEach(() => {
        delete grpcService.grpcCredentials;
      });

      describe('credentials error', () => {
        const error = new Error('err');

        beforeEach(() => {
          grpcService.getGrpcCredentials_ = callback => {
            callback(error);
          };
        });

        it('should execute callback with error', done => {
          grpcService.requestStream(PROTO_OPTS, REQ_OPTS).on('error', err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('credentials success', () => {
        const authClient = {};

        beforeEach(() => {
          grpcService.getGrpcCredentials_ = callback => {
            callback(null, authClient);
          };
        });

        it('should make the gRPC request again', done => {
          grpcService.getService_ = () => {
            assert.strictEqual(grpcService.grpcCredentials, authClient);
            setImmediate(done);
            return new ProtoService();
          };

          grpcService.requestStream(PROTO_OPTS, REQ_OPTS).on('error', done);
        });
      });
    });

    it('should get the proto service', done => {
      grpcService.getService_ = protoOpts => {
        assert.strictEqual(protoOpts, PROTO_OPTS);
        setImmediate(done);
        return new ProtoService();
      };

      grpcService.requestStream(PROTO_OPTS, REQ_OPTS, assert.ifError);
    });

    it('should set the deadline', done => {
      const createDeadline = GrpcService.createDeadline_;
      const fakeDeadline = createDeadline(PROTO_OPTS.timeout);

      GrpcService.createDeadline_ = timeout => {
        assert.strictEqual(timeout, PROTO_OPTS.timeout);
        return fakeDeadline;
      };

      ProtoService.prototype.method = (reqOpts, metadata, grpcOpts) => {
        assert.strictEqual(grpcOpts.deadline, fakeDeadline);

        GrpcService.createDeadline_ = createDeadline;
        setImmediate(done);

        return new PassThrough({objectMode: true});
      };

      retryRequestOverride = (_, retryOpts) => {
        return retryOpts.request();
      };

      grpcService.requestStream(PROTO_OPTS, REQ_OPTS);
    });

    it('should pass the grpc metadata with the request', done => {
      ProtoService.prototype.method = (reqOpts, metadata) => {
        assert.strictEqual(metadata, grpcService.grpcMetadata);
        setImmediate(done);
        return new PassThrough({objectMode: true});
      };

      retryRequestOverride = (_, retryOpts) => {
        return retryOpts.request();
      };

      grpcService.requestStream(PROTO_OPTS, REQ_OPTS);
    });

    describe('request option decoration', () => {
      beforeEach(() => {
        ProtoService.prototype.method = () => {
          return new PassThrough({objectMode: true});
        };

        retryRequestOverride = (reqOpts, options) => {
          return options.request();
        };
      });

      describe('requestStream() success', () => {
        it('should decorate the request', done => {
          const decoratedRequest = {};

          grpcService.decorateRequest_ = reqOpts => {
            assert.strictEqual(reqOpts, REQ_OPTS);
            return decoratedRequest;
          };

          ProtoService.prototype.method = reqOpts => {
            assert.strictEqual(reqOpts, decoratedRequest);
            setImmediate(done);
            return new PassThrough({objectMode: true});
          };

          grpcService
            .requestStream(PROTO_OPTS, REQ_OPTS)
            .on('error', assert.ifError);
        });
      });

      describe('requestStream() error', () => {
        it('should end stream with a thrown error', done => {
          const error = new Error('Error.');

          grpcService.decorateRequest_ = () => {
            throw error;
          };

          grpcService.requestStream(PROTO_OPTS, REQ_OPTS).on('error', err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });
    });

    describe('retry strategy', () => {
      let retryRequestReqOpts;
      let retryRequestOptions;
      let retryStream;

      beforeEach(() => {
        retryRequestReqOpts = retryRequestOptions = null;
        retryStream = new PassThrough({objectMode: true});

        retryRequestOverride = (reqOpts, options) => {
          retryRequestReqOpts = reqOpts;
          retryRequestOptions = options;
          return retryStream;
        };
      });

      afterEach(() => {
        retryRequestOverride = null;
      });

      it('should use retry-request', () => {
        const reqOpts = Object.assign(
          {
            objectMode: true,
          },
          REQ_OPTS,
        );

        grpcService.requestStream(PROTO_OPTS, reqOpts);

        assert.strictEqual(retryRequestReqOpts, null);
        assert.strictEqual(retryRequestOptions.retries, grpcService.maxRetries);
        assert.strictEqual(retryRequestOptions.currentRetryAttempt, 0);
        assert.strictEqual(retryRequestOptions.objectMode, true);
        assert.strictEqual(
          retryRequestOptions.shouldRetryFn,
          GrpcService.shouldRetryRequest_,
        );
      });

      it('should emit the metadata event as a response event', done => {
        const fakeStream = new PassThrough({objectMode: true});

        ProtoService.prototype.method = () => {
          return fakeStream;
        };

        retryRequestOverride = (reqOpts, options) => {
          return options.request();
        };

        fakeStream.on('error', done).on('response', resp => {
          assert.deepStrictEqual(resp, GrpcService.GRPC_ERROR_CODE_TO_HTTP[0]);
          done();
        });

        grpcService.requestStream(PROTO_OPTS, REQ_OPTS);
        fakeStream.emit('metadata');
      });

      it('should forward `request` events', done => {
        const requestStream = grpcService.requestStream(PROTO_OPTS, REQ_OPTS);

        requestStream.on('request', () => {
          done();
        });

        retryStream.emit('request');
      });

      it('should emit the response error', done => {
        const grpcError500 = {code: 2};
        const requestStream = grpcService.requestStream(PROTO_OPTS, REQ_OPTS);

        requestStream.destroy = err => {
          assert.deepStrictEqual(err, GrpcService.GRPC_ERROR_CODE_TO_HTTP[2]);
          done();
        };

        retryStream.emit('error', grpcError500);
      });
    });
  });

  describe('requestWritableStream', () => {
    let PROTO_OPTS;
    const REQ_OPTS = {};
    const GRPC_CREDENTIALS = {};

    function ProtoService() {}

    beforeEach(() => {
      PROTO_OPTS = {service: 'service', method: 'method', timeout: 3000};
      ProtoService.prototype.method = () => {};

      grpcService.grpcCredentials = GRPC_CREDENTIALS;
      grpcService.baseUrl = 'http://base-url';
      grpcService.proto = {};
      grpcService.proto.service = ProtoService;

      grpcService.getService_ = () => {
        return new ProtoService();
      };
    });

    it('should not run in the gcloud sandbox environment', () => {
      delete grpcService.grpcCredentials;

      grpcService.getGrpcCredentials_ = () => {
        throw new Error('Should not be called.');
      };

      glob.GCLOUD_SANDBOX_ENV = true;
      grpcService.requestWritableStream({});

      delete glob.GCLOUD_SANDBOX_ENV;
    });

    it('should get the proto service', done => {
      ProtoService.prototype.method = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (duplexify as any).obj();
      };
      grpcService.getService_ = protoOpts => {
        assert.strictEqual(protoOpts, PROTO_OPTS);
        setImmediate(done);
        return new ProtoService();
      };

      grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);
    });

    it('should set the deadline', done => {
      const createDeadline = GrpcService.createDeadline_;
      const fakeDeadline = createDeadline(PROTO_OPTS.timeout);

      GrpcService.createDeadline_ = timeout => {
        assert.strictEqual(timeout, PROTO_OPTS.timeout);
        return fakeDeadline;
      };

      ProtoService.prototype.method = (reqOpts, metadata, grpcOpts) => {
        assert.strictEqual(grpcOpts.deadline, fakeDeadline);

        GrpcService.createDeadline_ = createDeadline;
        setImmediate(done);

        return new PassThrough({objectMode: true});
      };

      retryRequestOverride = (_, retryOpts) => {
        return retryOpts.request();
      };

      grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);
    });

    it('should pass the grpc metadata with the request', done => {
      ProtoService.prototype.method = (reqOpts, metadata) => {
        assert.strictEqual(metadata, grpcService.grpcMetadata);
        setImmediate(done);
        return new PassThrough({objectMode: true});
      };

      retryRequestOverride = (_, retryOpts) => {
        return retryOpts.request();
      };

      grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);
    });

    describe('getting gRPC credentials', () => {
      beforeEach(() => {
        delete grpcService.grpcCredentials;
      });

      describe('grpcCredentials error', () => {
        const error = new Error('err');

        beforeEach(() => {
          grpcService.getGrpcCredentials_ = callback => {
            setImmediate(() => {
              callback(error);
            });
          };
        });

        it('should execute callback with error', done => {
          grpcService
            .requestWritableStream(PROTO_OPTS, REQ_OPTS)
            .on('error', err => {
              assert.strictEqual(err, error);
              done();
            });
        });
      });

      describe('grpcCredentials success', () => {
        const authClient = {};

        beforeEach(() => {
          grpcService.getGrpcCredentials_ = callback => {
            callback(null, authClient);
          };
        });

        it('should make the gRPC request again', done => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const stream = (duplexify as any).obj();
          ProtoService.prototype.method = () => {
            return stream;
          };
          grpcService.getService_ = () => {
            assert.strictEqual(grpcService.grpcCredentials, authClient);
            setImmediate(done);
            return new ProtoService();
          };

          grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);
        });
      });
    });

    describe('request option decoration', () => {
      beforeEach(() => {
        ProtoService.prototype.method = () => {
          return new PassThrough({objectMode: true});
        };

        retryRequestOverride = (reqOpts, options) => {
          return options.request();
        };
      });

      describe('requestWritableStream() success', () => {
        it('should decorate the request', done => {
          const decoratedRequest = {};

          grpcService.decorateRequest_ = reqOpts => {
            assert.strictEqual(reqOpts, REQ_OPTS);
            return decoratedRequest;
          };

          ProtoService.prototype.method = reqOpts => {
            assert.strictEqual(reqOpts, decoratedRequest);
            setImmediate(done);
            return new PassThrough({objectMode: true});
          };

          grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);
        });
      });

      describe('requestWritableStream() error', () => {
        const error = new Error('Error.');

        it('should end stream with a thrown error', done => {
          grpcService.decorateRequest_ = () => {
            throw error;
          };

          grpcService
            .requestWritableStream(PROTO_OPTS, REQ_OPTS)
            .on('error', err => {
              assert.strictEqual(err, error);
              done();
            });
        });
      });
    });

    describe('stream success', () => {
      const authClient = {};

      beforeEach(() => {
        delete grpcService.grpcCredentials;
        grpcService.getGrpcCredentials_ = callback => {
          callback(null, authClient);
        };
        sinon.spy(GrpcService, 'decorateStatus_');
      });

      it('should emit response', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const stream = (duplexify as any).obj();
        ProtoService.prototype.method = () => {
          return stream;
        };
        grpcService.getService_ = () => {
          assert.strictEqual(grpcService.grpcCredentials, authClient);
          return new ProtoService();
        };

        grpcService
          .requestWritableStream(PROTO_OPTS, REQ_OPTS)
          .on('response', status => {
            assert.strictEqual(status, 'foo');
            assert.strictEqual(GrpcService.decorateStatus_.callCount, 1);
            assert(GrpcService.decorateStatus_.calledWith('foo'));
            GrpcService.decorateStatus_.restore();
            done();
          })
          .on('error', done);

        setImmediate(() => {
          stream.emit('status', 'foo');
        });
      });
    });

    describe('stream error', () => {
      const authClient = {};

      beforeEach(() => {
        delete grpcService.grpcCredentials;
        grpcService.getGrpcCredentials_ = callback => {
          callback(null, authClient);
        };
      });

      it('should emit a decorated error', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const grpcStream = (duplexify as any).obj();
        ProtoService.prototype.method = () => {
          return grpcStream;
        };
        grpcService.getService_ = () => {
          assert.strictEqual(grpcService.grpcCredentials, authClient);
          return new ProtoService();
        };

        const error = new Error('Error.');
        const expectedDecoratedError = new Error('Decorated error.');

        sinon.stub(GrpcService, 'decorateError_').callsFake(() => {
          return expectedDecoratedError;
        });

        const stream = grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);

        stream.on('error', err => {
          assert.strictEqual(err, expectedDecoratedError);
          assert.strictEqual(GrpcService.decorateError_.callCount, 1);
          assert(GrpcService.decorateError_.calledWith(error));
          GrpcService.decorateError_.restore();
          done();
        });

        setImmediate(() => {
          grpcStream.emit('error', error);
        });
      });

      it('should emit the original error', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const grpcStream = (duplexify as any).obj();
        ProtoService.prototype.method = () => grpcStream;
        grpcService.getService_ = () => {
          assert.strictEqual(grpcService.grpcCredentials, authClient);
          return new ProtoService();
        };
        const error = new Error('Error.');
        sinon.stub(GrpcService, 'decorateError_').returns(null!);
        const stream = grpcService.requestWritableStream(PROTO_OPTS, REQ_OPTS);
        stream.on('error', err => {
          assert.strictEqual(err, error);
          assert.strictEqual(GrpcService.decorateError_.callCount, 1);
          assert(GrpcService.decorateError_.calledWith(error));
          GrpcService.decorateError_.restore();
          done();
        });

        setImmediate(() => {
          grpcStream.emit('error', error);
        });
      });
    });
  });

  describe('encodeValue_', () => {
    it('should encode value using ObjectToStructConverter fn', () => {
      const obj = {};
      const convertedObject = {};
      sinon.stub(GrpcService, 'ObjectToStructConverter').returns({
        encodeValue_(obj_) {
          assert.strictEqual(obj_, obj);
          return convertedObject;
        },
      });
      assert.strictEqual(GrpcService.encodeValue_(obj), convertedObject);
    });
  });

  describe('createDeadline_', () => {
    const nowTimestamp = Date.now();
    let now;

    before(() => {
      now = Date.now;

      Date.now = () => {
        return nowTimestamp;
      };
    });

    after(() => {
      Date.now = now;
    });

    it('should create a deadline', () => {
      const timeout = 3000;
      const deadline = GrpcService.createDeadline_(timeout);

      assert.strictEqual(deadline.getTime(), nowTimestamp + timeout);
    });
  });

  describe('decorateError_', () => {
    const expectedDecoratedError = new Error('err.');

    beforeEach(() => {
      sinon.stub(GrpcService, 'decorateGrpcResponse_').callsFake(() => {
        return expectedDecoratedError;
      });
    });

    it('should decorate an Error object', () => {
      const grpcError = new Error('Hello');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (grpcError as any).code = 2;

      const decoratedError = GrpcService.decorateError_(grpcError);
      const decorateArgs = GrpcService.decorateGrpcResponse_.getCall(0).args;

      assert.strictEqual(decoratedError, expectedDecoratedError);
      assert.strictEqual(decorateArgs[0] instanceof Error, true);
      assert.strictEqual(decorateArgs[1], grpcError);
    });

    it('should decorate a plain object', () => {
      const grpcMessage = {code: 2};

      const decoratedError = GrpcService.decorateError_(grpcMessage);
      const decorateArgs = GrpcService.decorateGrpcResponse_.getCall(0).args;

      assert.strictEqual(decoratedError, expectedDecoratedError);
      assert.deepStrictEqual(decorateArgs[0], {});
      assert.strictEqual(decorateArgs[0] instanceof Error, false);
      assert.strictEqual(decorateArgs[1], grpcMessage);
    });
  });

  describe('decorateGrpcResponse_', () => {
    it('should retrieve the HTTP code from the gRPC error map', () => {
      const errorMap = GrpcService.GRPC_ERROR_CODE_TO_HTTP;
      const codes = Object.keys(errorMap);

      codes.forEach(code => {
        const error = new Error();
        const extended = GrpcService.decorateGrpcResponse_(error, {code});

        assert.notStrictEqual(extended, errorMap[code]);
        assert.strictEqual(extended.code, errorMap[code].code);
        assert.strictEqual(extended.message, errorMap[code].message);
        assert.strictEqual(error, extended);
      });
    });

    it('should use the message from the error', () => {
      const errorMessage = 'This is an error message.';

      const err = {
        code: 1,
        message: errorMessage,
      };

      const error = new Error();
      const extended = GrpcService.decorateGrpcResponse_(error, err);

      assert.strictEqual(extended.message, errorMessage);
    });

    it('should use a stringified JSON message from the error', () => {
      const errorMessage = 'This is an error message.';

      const err = {
        code: 1,
        message: JSON.stringify({
          description: errorMessage,
        }),
      };

      const error = new Error();
      const extended = GrpcService.decorateGrpcResponse_(error, err);

      assert.strictEqual(extended.message, errorMessage);
    });

    it('should return null for unknown errors', () => {
      const error = new Error();
      const extended = GrpcService.decorateGrpcResponse_(error, {code: 9999});

      assert.strictEqual(extended, null);
    });
  });

  describe('decorateStatus_', () => {
    const fakeStatus = {status: 'a'};

    beforeEach(() => {
      sinon.stub(GrpcService, 'decorateGrpcResponse_').callsFake(() => {
        return fakeStatus;
      });
    });

    it('should call decorateGrpcResponse_ with an object', () => {
      const grpcStatus = {code: 2};

      const status = GrpcService.decorateStatus_(grpcStatus);
      const args = GrpcService.decorateGrpcResponse_.getCall(0).args;

      assert.strictEqual(status, fakeStatus);
      assert.deepStrictEqual(args[0], {});
      assert.strictEqual(args[1], grpcStatus);
    });
  });

  describe('shouldRetryRequest_', () => {
    it('should retry on 429, 500, 502, and 503', () => {
      const shouldRetryFn = GrpcService.shouldRetryRequest_;

      const retryErrors = [{code: 429}, {code: 500}, {code: 502}, {code: 503}];

      const nonRetryErrors = [
        {code: 200},
        {code: 401},
        {code: 404},
        {code: 409},
        {code: 412},
      ];

      assert.strictEqual(retryErrors.every(shouldRetryFn), true);
      assert.strictEqual(nonRetryErrors.every(shouldRetryFn), false);
    });
  });

  describe('decorateRequest_', () => {
    it('should delete custom API values without modifying object', () => {
      const reqOpts = {
        autoPaginate: true,
        autoPaginateVal: true,
        objectMode: true,
      };

      const originalReqOpts = Object.assign({}, reqOpts);

      assert.deepStrictEqual(grpcService.decorateRequest_(reqOpts), {});
      assert.deepStrictEqual(reqOpts, originalReqOpts);
    });

    it('should execute and return replaceProjectIdToken', () => {
      const reqOpts = {
        a: 'b',
        c: 'd',
      };

      const replacedReqOpts = {};

      replaceProjectIdTokenOverride = (reqOpts_, projectId) => {
        assert.deepStrictEqual(reqOpts_, reqOpts);
        assert.strictEqual(projectId, grpcService.projectId);
        return replacedReqOpts;
      };

      assert.strictEqual(
        grpcService.decorateRequest_(reqOpts),
        replacedReqOpts,
      );
    });
  });

  describe('getGrpcCredentials_', () => {
    it('should get credentials from the auth client', done => {
      grpcService.authClient = {
        async getClient() {
          return '';
        },
      };

      grpcService.getGrpcCredentials_(done);
    });

    describe('credential fetching error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        grpcService.authClient = {
          async getClient() {
            throw error;
          },
        };
      });

      it('should execute callback with error', done => {
        grpcService.getGrpcCredentials_(err => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('credential fetching success', () => {
      const AUTH_CLIENT = {
        projectId: 'project-id',
      };

      beforeEach(() => {
        grpcService.authClient = {
          async getClient() {
            return AUTH_CLIENT;
          },
        };
      });

      it('should return grpcCredentials', done => {
        grpcService.getGrpcCredentials_((err, grpcCredentials) => {
          assert.ifError(err);
          assert(grpcCredentials.constructor.name.match(/credentials/i));
          done();
        });
      });

      it('should set projectId', done => {
        grpcService.getGrpcCredentials_(err => {
          assert.ifError(err);
          assert.strictEqual(grpcService.projectId, AUTH_CLIENT.projectId);
          done();
        });
      });

      it('should not change projectId that was already set', done => {
        grpcService.projectId = 'project-id';

        grpcService.getGrpcCredentials_(err => {
          assert.ifError(err);
          assert.strictEqual(grpcService.projectId, AUTH_CLIENT.projectId);
          done();
        });
      });

      it('should change placeholder projectId', done => {
        grpcService.projectId = '{{projectId}}';

        grpcService.getGrpcCredentials_(err => {
          assert.ifError(err);
          assert.strictEqual(grpcService.projectId, AUTH_CLIENT.projectId);
          done();
        });
      });

      it('should not update projectId if it was not found', done => {
        grpcService.projectId = 'project-id';

        grpcService.authClient = {
          async getClient() {
            return {
              projectId: undefined,
            };
          },
        };

        grpcService.getGrpcCredentials_(err => {
          assert.ifError(err);
          assert.strictEqual(grpcService.projectId, grpcService.projectId);
          done();
        });
      });
    });
  });

  describe('loadProtoFile', () => {
    const fakeServices: grpcProtoLoader.PackageDefinition = {
      'google.FakeService': {},
    };

    it('should load a proto file', () => {
      const fakeProtoPath = '/root/dir/path';

      const fakeMainConfig = {
        protosDir: ROOT_DIR,
      };

      grpcProtoLoadOverride = (file, options) => {
        assert.deepStrictEqual(options!.includeDirs, [
          fakeMainConfig.protosDir,
          gaxProtosDir,
        ]);
        assert.strictEqual(file, fakeProtoPath);

        assert.strictEqual(options!.bytes, String);
        assert.strictEqual(options!.keepCase, false);

        return fakeServices;
      };

      const services = grpcService.loadProtoFile(fakeProtoPath, fakeMainConfig);
      assert.deepStrictEqual(services, fakeServices);
    });

    it('should cache the expensive proto object creation', () => {
      const protoPath = '/root/dir/path';

      const mainConfig = {
        service: 'OtherFakeService',
        apiVersion: 'v2',
      };

      let gprcLoadCalled = 0;
      grpcProtoLoadOverride = () => {
        gprcLoadCalled++;
        return fakeServices;
      };

      const services1 = grpcService.loadProtoFile(protoPath, mainConfig);
      const services2 = grpcService.loadProtoFile(protoPath, mainConfig);
      assert.strictEqual(services1, services2);
      assert.strictEqual(gprcLoadCalled, 1);
    });

    it('should return the services object if invalid version', () => {
      const fakeProtoPath = '/root/dir/path';

      const fakeMainConfig = {
        service: 'OtherFakeService',
        apiVersion: 'v2',
      };

      grpcProtoLoadOverride = () => {
        return fakeServices;
      };

      const services = grpcService.loadProtoFile(fakeProtoPath, fakeMainConfig);
      assert.deepStrictEqual(services, fakeServices);
    });
  });

  describe('getService_', () => {
    it('should get a new service instance', () => {
      const fakeService = {};
      grpcService.protos = {
        Service: {
          Service: class Service {
            constructor(baseUrl, grpcCredentials, userAgent) {
              assert.strictEqual(baseUrl, grpcService.baseUrl);
              assert.strictEqual(grpcCredentials, grpcService.grpcCredentials);
              assert.deepStrictEqual(
                userAgent,
                Object.assign(
                  {
                    'grpc.primary_user_agent': grpcService.userAgent,
                  },
                  GrpcService.GRPC_SERVICE_OPTIONS,
                ),
              );

              return fakeService;
            }
          },
        },
      };

      const service = grpcService.getService_({service: 'Service'});
      assert.strictEqual(service, fakeService);

      const cachedService = grpcService.activeServiceMap_.get('Service');
      assert.strictEqual(cachedService, fakeService);
    });

    it('should return the cached version of a service', () => {
      const fakeService = {};

      grpcService.protos = {
        Service: {
          Service() {
            throw new Error('should not be called');
          },
        },
      };

      grpcService.activeServiceMap_.set('Service', fakeService);

      const service = grpcService.getService_({service: 'Service'});
      assert.strictEqual(service, fakeService);

      const cachedService = grpcService.activeServiceMap_.get('Service');
      assert.strictEqual(cachedService, fakeService);
    });

    it('should use the baseUrl override if applicable', () => {
      const fakeBaseUrl = 'a.googleapis.com';
      const fakeService = {};

      grpcService.protos = {
        Service: {
          baseUrl: fakeBaseUrl,
          Service: class Service {
            constructor(baseUrl) {
              assert.strictEqual(baseUrl, fakeBaseUrl);
              return fakeService;
            }
          },
        },
      };

      const service = grpcService.getService_({service: 'Service'});
      assert.strictEqual(service, fakeService);
    });
  });

  describe('ObjectToStructConverter', () => {
    let objectToStructConverter;

    beforeEach(() => {
      objectToStructConverter = new ObjectToStructConverter(OPTIONS);
    });

    describe('instantiation', () => {
      it('should not require an options object', () => {
        assert.doesNotThrow(() => {
          new ObjectToStructConverter();
        });
      });

      it('should localize an empty Set for seenObjects', () => {
        assert(objectToStructConverter.seenObjects instanceof Set);
        assert.strictEqual(objectToStructConverter.seenObjects.size, 0);
      });

      it('should localize options', () => {
        const objectToStructConverter = new ObjectToStructConverter({
          removeCircular: true,
          stringify: true,
        });

        assert.strictEqual(objectToStructConverter.removeCircular, true);
        assert.strictEqual(objectToStructConverter.stringify, true);
      });

      it('should set correct defaults', () => {
        assert.strictEqual(objectToStructConverter.removeCircular, false);
        assert.strictEqual(objectToStructConverter.stringify, false);
      });
    });

    describe('convert', () => {
      it('should encode values in an Object', () => {
        const inputValue = {};
        const convertedValue = {};

        objectToStructConverter.encodeValue_ = value => {
          assert.strictEqual(value, inputValue);
          return convertedValue;
        };

        const struct = objectToStructConverter.convert({
          a: inputValue,
        });

        assert.strictEqual(struct.fields.a, convertedValue);
      });

      it('should support host objects', () => {
        const hostObject = {hasOwnProperty: null};

        objectToStructConverter.encodeValue_ = () => {};

        assert.doesNotThrow(() => {
          objectToStructConverter.convert(hostObject);
        });
      });

      it('should not include undefined values', done => {
        objectToStructConverter.encodeValue_ = () => {
          done(new Error('Should not be called'));
        };

        const struct = objectToStructConverter.convert({
          a: undefined,
        });

        assert.deepStrictEqual(struct.fields, {});

        done();
      });

      it('should add seen objects to set then empty set', done => {
        const obj = {};
        let objectAdded;

        objectToStructConverter.seenObjects = {
          add(obj) {
            objectAdded = obj;
          },
          delete(obj_) {
            assert.strictEqual(obj_, obj);
            assert.strictEqual(objectAdded, obj);
            done();
          },
        };

        objectToStructConverter.convert(obj);
      });
    });

    describe('encodeValue_', () => {
      it('should convert primitive values correctly', () => {
        const buffer = Buffer.from('Value');

        assert.deepStrictEqual(objectToStructConverter.encodeValue_(null), {
          nullValue: 0,
        });

        assert.deepStrictEqual(objectToStructConverter.encodeValue_(1), {
          numberValue: 1,
        });

        assert.deepStrictEqual(objectToStructConverter.encodeValue_('Hi'), {
          stringValue: 'Hi',
        });

        assert.deepStrictEqual(objectToStructConverter.encodeValue_(true), {
          boolValue: true,
        });

        assert.strictEqual(
          objectToStructConverter.encodeValue_(buffer).blobValue.toString(),
          'Value',
        );
      });

      it('should convert arrays', () => {
        const convertedValue = objectToStructConverter.encodeValue_([1, 2, 3]);

        assert.deepStrictEqual(convertedValue.listValue, {
          values: [
            objectToStructConverter.encodeValue_(1),
            objectToStructConverter.encodeValue_(2),
            objectToStructConverter.encodeValue_(3),
          ],
        });
      });

      it('should throw if a type is not recognized', () => {
        assert.throws(() => {
          objectToStructConverter.encodeValue_();
        }, /Value of type undefined not recognized./);
      });

      describe('objects', () => {
        const VALUE: {circularReference?: {}} = {};
        VALUE.circularReference = VALUE;

        it('should convert objects', () => {
          const convertedValue = {};

          objectToStructConverter.convert = value => {
            assert.strictEqual(value, VALUE);
            return convertedValue;
          };

          assert.deepStrictEqual(objectToStructConverter.encodeValue_(VALUE), {
            structValue: convertedValue,
          });
        });

        describe('circular references', () => {
          it('should throw if circular', () => {
            const errorMessage = [
              'This object contains a circular reference. To automatically',
              'remove it, set the `removeCircular` option to true.',
            ].join(' ');

            objectToStructConverter.seenObjects.add(VALUE);

            assert.throws(() => {
              objectToStructConverter.encodeValue_(VALUE);
            }, new RegExp(errorMessage));
          });

          describe('options.removeCircular', () => {
            let objectToStructConverter;

            beforeEach(() => {
              objectToStructConverter = new ObjectToStructConverter({
                removeCircular: true,
              });

              objectToStructConverter.seenObjects.add(VALUE);
            });

            it('should replace circular reference with [Circular]', () => {
              assert.deepStrictEqual(
                objectToStructConverter.encodeValue_(VALUE),
                {stringValue: '[Circular]'},
              );
            });
          });
        });
      });

      describe('options.stringify', () => {
        let objectToStructConverter;

        beforeEach(() => {
          objectToStructConverter = new ObjectToStructConverter({
            stringify: true,
          });
        });

        it('should return a string if the value is not recognized', () => {
          const date = new Date();

          assert.deepStrictEqual(
            objectToStructConverter.encodeValue_(date, OPTIONS),
            {stringValue: String(date)},
          );
        });
      });
    });
  });
});
