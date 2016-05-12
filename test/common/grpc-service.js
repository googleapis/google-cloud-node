/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

'use strict';

var assert = require('assert');
var extend = require('extend');
var googleProtoFiles = require('google-proto-files');
var grpc = require('grpc');
var is = require('is');
var mockery = require('mockery-next');
var path = require('path');
var retryRequest = require('retry-request');

var util = require('../../lib/common/util.js');

function FakeService() {
  this.calledWith_ = arguments;
}

var googleProtoFilesOverride;
function fakeGoogleProtoFiles() {
  return (googleProtoFilesOverride || googleProtoFiles).apply(null, arguments);
}

var retryRequestOverride;
function fakeRetryRequest() {
  return (retryRequestOverride || retryRequest).apply(null, arguments);
}

var grpcLoadOverride;
var fakeGrpc = {
  load: function() {
    return (grpcLoadOverride || grpc.load).apply(null, arguments);
  },
  credentials: {
    combineChannelCredentials: function() {
      return {
        name: 'combineChannelCredentials',
        args: arguments
      };
    },
    createSsl: function() {
      return {
        name: 'createSsl',
        args: arguments
      };
    },
    createFromGoogleCredential: function() {
      return {
        name: 'createFromGoogleCredential',
        args: arguments
      };
    },
    createInsecure: function() {
      return {
        name: 'createInsecure',
        args: arguments
      };
    }
  }
};

describe('GrpcService', function() {
  var GrpcServiceCached;
  var GrpcService;
  var grpcService;

  var CONFIG = {
    proto: {},
    service: 'Service',
    apiVersion: 'v1',
    maxRetries: 3
  };

  var OPTIONS = {};
  var ROOT_DIR = '/root/dir';
  var PROTO_FILE_PATH = 'filepath.proto';

  var MOCK_GRPC_API = { google: {} };
  MOCK_GRPC_API.google[CONFIG.service] = {};
  MOCK_GRPC_API.google[CONFIG.service][CONFIG.apiVersion] = {};

  extend(true, fakeGoogleProtoFiles, MOCK_GRPC_API.google);
  fakeGoogleProtoFiles[CONFIG.service][CONFIG.apiVersion] = PROTO_FILE_PATH;

  before(function() {
    mockery.registerMock('google-proto-files', fakeGoogleProtoFiles);
    mockery.registerMock('retry-request', fakeRetryRequest);
    mockery.registerMock('grpc', fakeGrpc);
    mockery.registerMock('../../lib/common/service.js', FakeService);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    GrpcService = require('../../lib/common/grpc-service.js');
    GrpcServiceCached = extend(true, {}, GrpcService);
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    retryRequestOverride = null;

    googleProtoFilesOverride = function() {
      return ROOT_DIR;
    };

    grpcLoadOverride = function() {
      return MOCK_GRPC_API;
    };

    extend(GrpcService, GrpcServiceCached);

    grpcService = new GrpcService(CONFIG, OPTIONS);
  });

  afterEach(function() {
    googleProtoFilesOverride = null;
    grpcLoadOverride = null;
  });

  describe('instantiation', function() {
    it('should inherit from Service', function() {
      assert(grpcService instanceof FakeService);

      var calledWith = grpcService.calledWith_;
      assert.strictEqual(calledWith[0], CONFIG);
      assert.strictEqual(calledWith[1], OPTIONS);
    });

    it('should localize maxRetries', function() {
      assert.strictEqual(grpcService.maxRetries, CONFIG.maxRetries);
    });

    it('should get the root directory for the proto files', function(done) {
      googleProtoFilesOverride = function(path) {
        assert.strictEqual(path, '..');
        setImmediate(done);
        return ROOT_DIR;
      };

      new GrpcService(CONFIG, OPTIONS);
    });

    it('should set insecure credentials if using customEndpoint', function() {
      var config = extend({}, CONFIG, { customEndpoint: true });
      var grpcService = new GrpcService(config, OPTIONS);
      assert.strictEqual(grpcService.grpcCredentials.name, 'createInsecure');
    });

    it('should localize the service', function() {
      assert.strictEqual(grpcService.service, CONFIG.service);
    });

    it('should localize an empty Map of services', function() {
      assert(grpcService.activeServiceMap_ instanceof Map);
      assert.strictEqual(grpcService.activeServiceMap_.size, 0);
    });

    it('should call grpc.load correctly', function() {
      grpcLoadOverride = function(opts, format, grpcOpts) {
        assert.strictEqual(opts.root, ROOT_DIR);

        var expectedFilePath = path.relative(ROOT_DIR, PROTO_FILE_PATH);
        assert.strictEqual(opts.file, expectedFilePath);

        assert.strictEqual(format, 'proto');
        assert.deepEqual(grpcOpts, {
          binaryAsBase64: true,
          convertFieldsToCamelCase: true
        });

        return MOCK_GRPC_API;
      };

      var grpcService = new GrpcService(CONFIG, OPTIONS);
      assert.strictEqual(
        grpcService.protos[CONFIG.service],
        MOCK_GRPC_API.google[CONFIG.service][CONFIG.apiVersion]
      );
    });

    it('should allow proto file paths to be given', function() {
      grpcLoadOverride = function(opts) {
        assert.strictEqual(opts.root, ROOT_DIR);

        var expectedFilePath = path.relative(ROOT_DIR, '../file/path.proto');
        assert.strictEqual(opts.file, expectedFilePath);

        return MOCK_GRPC_API;
      };

      var config = extend(true, {}, CONFIG, {
        protoServices: {
          CustomServiceName: '../file/path.proto'
        }
      });

      var grpcService = new GrpcService(config, OPTIONS);
      assert.strictEqual(
        grpcService.protos.CustomServiceName,
        MOCK_GRPC_API.google[CONFIG.service][CONFIG.apiVersion]
      );
    });

    it('should not run in the gcloud sandbox environment', function() {
      global.GCLOUD_SANDBOX_ENV = {};
      var grpcService = new GrpcService();
      assert.strictEqual(grpcService, global.GCLOUD_SANDBOX_ENV);
      delete global.GCLOUD_SANDBOX_ENV;
    });
  });

  describe('request', function() {
    var PROTO_OPTS = { service: 'service', method: 'method', timeout: 3000 };
    var REQ_OPTS = {};
    var GRPC_CREDENTIALS = {};

    var HTTP_ERROR_CODE_MAP = {
      0: {
        code: 200,
        message: 'OK'
      },

      1: {
        code: 499,
        message: 'Client Closed Request'
      },

      2: {
        code: 500,
        message: 'Internal Server Error'
      },

      3: {
        code: 400,
        message: 'Bad Request'
      },

      4: {
        code: 504,
        message: 'Gateway Timeout'
      },

      5: {
        code: 404,
        message: 'Not Found'
      },

      6: {
        code: 409,
        message: 'Conflict'
      },

      7: {
        code: 403,
        message: 'Forbidden'
      },

      8: {
        code: 429,
        message: 'Too Many Requests'
      },

      9: {
        code: 412,
        message: 'Precondition Failed'
      },

      10: {
        code: 409,
        message: 'Conflict'
      },

      11: {
        code: 400,
        message: 'Bad Request'
      },

      12: {
        code: 501,
        message: 'Not Implemented'
      },

      13: {
        code: 500,
        message: 'Internal Server Error'
      },

      14: {
        code: 503,
        message: 'Service Unavailable'
      },

      15: {
        code: 500,
        message: 'Internal Server Error'
      },

      16: {
        code: 401,
        message: 'Unauthorized'
      }
    };

    function ProtoService() {}
    ProtoService.prototype.method = function() {};

    beforeEach(function() {
      grpcService.grpcCredentials = GRPC_CREDENTIALS;

      grpcService.baseUrl = 'http://base-url';
      grpcService.proto = {};
      grpcService.proto.service = ProtoService;
    });

    it('should not run in the gcloud sandbox environment', function() {
      global.GCLOUD_SANDBOX_ENV = true;
      assert.strictEqual(grpcService.request(), global.GCLOUD_SANDBOX_ENV);
      delete global.GCLOUD_SANDBOX_ENV;
    });

    it('should access the specified service proto object', function(done) {
      grpcService.protos.CustomService = {
        CustomService: function() {
          setImmediate(done);
          return new ProtoService();
        }
      };

      var protoOpts = extend(true, {}, PROTO_OPTS, {
        service: 'CustomService'
      });

      grpcService.request(protoOpts, REQ_OPTS, assert.ifError);
    });

    describe('getting gRPC credentials', function() {
      beforeEach(function() {
        delete grpcService.grpcCredentials;
      });

      describe('error', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          grpcService.getGrpcCredentials_ = function(callback) {
            callback(error);
          };
        });

        it('should execute callback with error', function(done) {
          grpcService.request(PROTO_OPTS, REQ_OPTS, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        var authClient = {};

        beforeEach(function() {
          grpcService.getGrpcCredentials_ = function(callback) {
            callback(null, authClient);
          };
        });

        it('should make the gRPC request again', function(done) {
          grpcService.protos.Service = {
            service: function() {
              assert.strictEqual(grpcService.grpcCredentials, authClient);

              setImmediate(done);

              return new ProtoService();
            }
          };

          grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
        });
      });
    });

    it('should create an instance of the proto service', function(done) {
      grpcService.protos.Service = {
        service: function(baseUrl, credentials) {
          assert.strictEqual(baseUrl, grpcService.baseUrl);
          assert.strictEqual(credentials, GRPC_CREDENTIALS);

          setImmediate(done);

          return new ProtoService();
        }
      };

      grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
    });

    it('should accept the name of a proto service', function(done) {
      grpcService.protos.Service = {
        service: function(baseUrl, credentials) {
          assert.strictEqual(baseUrl, grpcService.baseUrl);
          assert.strictEqual(credentials, GRPC_CREDENTIALS);

          setImmediate(done);

          return new ProtoService();
        }
      };

      var protoOpts = extend(true, {}, PROTO_OPTS, {
        service: 'service'
      });

      grpcService.request(protoOpts, REQ_OPTS, assert.ifError);
    });

    it('should cache the service', function(done) {
      grpcService.protos.Service = {
        service: function() {
          var protoService = new ProtoService();

          setImmediate(function() {
            assert.strictEqual(
              grpcService.activeServiceMap_.get(PROTO_OPTS.service),
              protoService
            );

            done();
          });

          return protoService;
        }
      };

      grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
    });

    describe('retry strategy', function() {
      var retryRequestReqOpts;
      var retryRequestOptions;
      var retryRequestCallback;

      beforeEach(function() {
        grpcService.protos.Service = {
          service: util.noop
        };

        retryRequestOverride = function(reqOpts, options, callback) {
          retryRequestReqOpts = reqOpts;
          retryRequestOptions = options;
          retryRequestCallback = callback;
        };
      });

      it('should use retry-request', function(done) {
        var error = {};
        var response = {};

        grpcService.request(PROTO_OPTS, REQ_OPTS, function(err, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, response);
          done();
        });

        assert.strictEqual(retryRequestReqOpts, null);
        assert.strictEqual(
          retryRequestOptions.maxRetries,
          grpcService.maxRetries
        );

        retryRequestCallback(error, response);
      });

      it('should retry on 429, 500, 502, and 503', function() {
        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);

        var shouldRetryFn = retryRequestOptions.shouldRetryFn;

        var retryErrors = [
          { code: 429 },
          { code: 500 },
          { code: 502 },
          { code: 503 }
        ];

        var nonRetryErrors = [
          { code: 200 },
          { code: 401 },
          { code: 404 },
          { code: 409 },
          { code: 412 }
        ];

        assert.strictEqual(retryErrors.every(shouldRetryFn), true);
        assert.strictEqual(nonRetryErrors.every(shouldRetryFn), false);
      });

      it('should treat a retriable error as an HTTP response', function(done) {
        var grpcError500 = { code: 2 };

        grpcService.protos.Service = {
          service: function() {
            return {
              method: function(reqOpts, grpcOpts, callback) {
                callback(grpcError500);
              }
            };
          }
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);

        function onResponse(err, resp) {
          assert.strictEqual(err, null);
          assert.deepEqual(resp, HTTP_ERROR_CODE_MAP[2]);

          done();
        }

        retryRequestOptions.request({}, onResponse);
      });

      it('should exec callback with response error as error', function(done) {
        var grpcError500 = { code: 2 };

        grpcService.protos.Service = {
          service: function() {
            return {
              method: function(reqOpts, grpcOpts, callback) {
                callback(grpcError500);
              }
            };
          }
        };

        grpcService.request(PROTO_OPTS, REQ_OPTS, function(err, resp) {
          assert.deepEqual(err, HTTP_ERROR_CODE_MAP[2]);
          assert.strictEqual(resp, null);
          done();
        });

        // When the gRPC error is passed to "onResponse", it will just invoke
        // the callback passed to retry-request. We will check if the grpc Error
        retryRequestOptions.request({}, retryRequestCallback);
      });
    });

    it('should make the correct request on the proto service', function(done) {
      grpcService.protos.Service = {
        service: function() {
          return {
            method: function(reqOpts) {
              assert.strictEqual(reqOpts, REQ_OPTS);
              done();
            }
          };
        }
      };

      grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
    });

    it('should set a deadline if a timeout is provided', function(done) {
      var expectedDeadlineRange = [
        Date.now() + PROTO_OPTS.timeout - 250,
        Date.now() + PROTO_OPTS.timeout + 250
      ];

      grpcService.protos.Service = {
        service: function() {
          return {
            method: function(reqOpts, grpcOpts) {
              assert(is.date(grpcOpts.deadline));

              assert(grpcOpts.deadline.getTime() > expectedDeadlineRange[0]);
              assert(grpcOpts.deadline.getTime() < expectedDeadlineRange[1]);

              done();
            }
          };
        }
      };

      grpcService.request(PROTO_OPTS, REQ_OPTS, assert.ifError);
    });

    it('should remove gcloud-specific options', function(done) {
      grpcService.protos.Service = {
        service: function() {
          return {
            method: function(reqOpts) {
              assert.strictEqual(reqOpts.autoPaginate, undefined);
              assert.strictEqual(reqOpts.autoPaginateVal, undefined);
              done();
            }
          };
        }
      };

      grpcService.request(PROTO_OPTS, {
        autoPaginate: true,
        autoPaginateVal: true
      }, assert.ifError);
    });

    describe('error', function() {
      it('should look up the http status from the code', function() {
        /*jshint loopfunc:true */
        for (var grpcErrorCode in HTTP_ERROR_CODE_MAP) {
          var grpcError = { code: grpcErrorCode };
          var httpError = HTTP_ERROR_CODE_MAP[grpcErrorCode];

          grpcService.protos.Service = {
            service: function() {
              return {
                method: function(reqOpts, grpcOpts, callback) {
                  callback(grpcError);
                }
              };
            }
          };

          grpcService.request(PROTO_OPTS, REQ_OPTS, function(err) {
            assert.strictEqual(err, grpcError);
            assert.strictEqual(err.code, httpError.code);
          });
        }
        /*jshint loopfunc:false */
      });
    });

    describe('success', function() {
      var RESPONSE = {};

      beforeEach(function() {
        grpcService.protos.Service = {
          service: function() {
            return {
              method: function(reqOpts, grpcOpts, callback) {
                callback(null, RESPONSE);
              }
            };
          }
        };
      });

      it('should execute callback with response', function(done) {
        grpcService.request(PROTO_OPTS, REQ_OPTS, function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp, RESPONSE);
          done();
        });
      });
    });
  });

  describe('convertValue_', function() {
    it('should convert primitive values correctly', function() {
      var buffer = new Buffer('Value');

      assert.deepEqual(GrpcService.convertValue_(null), {
        nullValue: 0
      });

      assert.deepEqual(GrpcService.convertValue_(1), {
        numberValue: 1
      });

      assert.deepEqual(GrpcService.convertValue_('Hi'), {
        stringValue: 'Hi'
      });

      assert.deepEqual(GrpcService.convertValue_(true), {
        booleanValue: true
      });

      assert.strictEqual(
        GrpcService.convertValue_(buffer).blobValue.toString(),
        'Value'
      );
    });

    it('should convert objects', function() {
      var value = {};

      GrpcService.objToStruct_ = function() {
        return value;
      };

      var convertedValue = GrpcService.convertValue_(value);

      assert.deepEqual(convertedValue, {
        structValue: value
      });
    });

    it('should convert dates', function() {
      var value = new Date();
      var seconds = value.getTime() / 1000;
      var secondsRounded = Math.floor(seconds);

      var convertedValue = GrpcService.convertValue_(value);

      assert.deepEqual(convertedValue, {
        timestampValue: {
          seconds: secondsRounded,
          nanos: Math.floor((seconds - secondsRounded) * 1e9)
        }
      });
    });

    it('should convert arrays', function() {
      var convertedValue = GrpcService.convertValue_([1, 2, 3]);

      assert.deepEqual(convertedValue.listValue, [
        GrpcService.convertValue_(1),
        GrpcService.convertValue_(2),
        GrpcService.convertValue_(3)
      ]);
    });

    it('should throw if a type is not recognized', function() {
      assert.throws(function() {
        GrpcService.convertValue_();
      }, 'Value of type undefined not recognized.');
    });
  });

  describe('objToStruct_', function() {
    it('should convert values in an Object', function() {
      var inputValue = {};
      var convertedValue = {};

      GrpcService.convertValue_ = function(value) {
        assert.strictEqual(value, inputValue);
        return convertedValue;
      };

      var obj = {
        a: inputValue
      };

      var struct = GrpcService.objToStruct_(obj);

      assert.strictEqual(struct.fields.a, convertedValue);
    });
  });

  describe('getGrpcCredentials_', function() {
    it('should get credentials from the auth client', function(done) {
      grpcService.authClient = {
        getAuthClient: function() {
          done();
        }
      };

      grpcService.getGrpcCredentials_(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        grpcService.authClient = {
          getAuthClient: function(callback) {
            callback(error);
          }
        };
      });

      it('should execute callback with error', function(done) {
        grpcService.getGrpcCredentials_(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', function() {
      var AUTH_CLIENT = {};

      beforeEach(function() {
        grpcService.authClient = {
          getAuthClient: function(callback) {
            callback(null, AUTH_CLIENT);
          }
        };
      });

      it('should return grpcCredentials', function(done) {
        grpcService.getGrpcCredentials_(function(err, grpcCredentials) {
          assert.ifError(err);

          assert.strictEqual(
            grpcCredentials.name,
            'combineChannelCredentials'
          );

          var createSslArg = grpcCredentials.args[0];
          assert.strictEqual(createSslArg.name, 'createSsl');
          assert.deepEqual(createSslArg.args.length, 0);

          var createFromGoogleCredentialArg = grpcCredentials.args[1];
          assert.strictEqual(
            createFromGoogleCredentialArg.name,
            'createFromGoogleCredential'
          );
          assert.strictEqual(
            createFromGoogleCredentialArg.args[0],
            AUTH_CLIENT
          );

          done();
        });
      });
    });
  });
});
