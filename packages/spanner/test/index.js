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

'use strict';

var assert = require('assert');
var extend = require('extend');
var path = require('path');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var v1 = require('../src/v1');

var fakePaginator = {
  streamify: function(methodName) {
    return methodName;
  }
};

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Spanner') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, [
      'date',
      'float',
      'getInstanceConfigs',
      'instance',
      'int',
      'operation'
    ]);
  }
});

var fakeV1Override;
function fakeV1() {
  if (fakeV1Override) {
    return fakeV1Override.apply(null, arguments);
  }

  return {
    spannerClient: util.noop
  };
}

fakeV1.admin = {}; // defaulted in the beforeEach hook

var fakeCodec = {
  SpannerDate: util.noop
};

function FakeGrpcOperation() {
  this.calledWith_ = arguments;
}

function FakeGrpcService() {
  this.calledWith_ = arguments;
}

function FakeInstance() {
  this.calledWith_ = arguments;
}

describe('Spanner', function() {
  var Spanner;
  var spanner;

  var OPTIONS = {
    projectId: 'project-id'
  };

  before(function() {
    Spanner = proxyquire('../src/index.js', {
      '@google-cloud/common': {
        paginator: fakePaginator,
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        Operation: FakeGrpcOperation,
        Service: FakeGrpcService
      },
      './codec.js': fakeCodec,
      './instance.js': FakeInstance,
      './v1': fakeV1
    });
  });

  beforeEach(function() {
    fakeV1Override = null;
    fakeV1.admin = {
      database: function() {
        return {
          databaseAdminClient: util.noop
        };
      },
      instance: function() {
        return {
          instanceAdminClient: util.noop
        };
      }
    };
    fakeCodec.SpannerDate = util.noop;
    fakeCodec.Int = util.noop;
    spanner = new Spanner(OPTIONS);
    spanner.projectId = OPTIONS.projectId;
  });

  describe('instantiation', function() {
    it('should localize an instance map', function() {
      assert(spanner.instances_ instanceof Map);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(spanner.getInstancesStream, 'getInstances');
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: OPTIONS.projectId };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Spanner.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should create gax API clients', function() {
      var gaxDatabaseClient = {};
      var gaxInstanceClient = {};
      var gaxSpannerClient = {};

      var expectedOptions = {
        libName: 'gccl',
        servicePath: v1.SERVICE_ADDRESS,
        port: v1.DEFAULT_SERVICE_PORT,
        libVersion: require('../package.json').version,
        projectId: OPTIONS.projectId
      };

      fakeV1Override = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        return {
          spannerClient: function(options) {
            assert.deepStrictEqual(options, expectedOptions);
            return gaxSpannerClient;
          }
        };
      };

      fakeV1.admin.database = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        return {
          databaseAdminClient: function(options) {
            assert.deepStrictEqual(options, expectedOptions);
            return gaxDatabaseClient;
          }
        };
      };

      fakeV1.admin.instance = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        return {
          instanceAdminClient: function(options) {
            assert.deepStrictEqual(options, expectedOptions);
            return gaxInstanceClient;
          }
        };
      };

      var spanner = new Spanner(OPTIONS);

      assert.strictEqual(spanner.api.Database, gaxDatabaseClient);
      assert.strictEqual(spanner.api.Instance, gaxInstanceClient);
      assert.strictEqual(spanner.api.Spanner, gaxSpannerClient);
    });

    it('should inherit from GrpcService', function() {
      assert(spanner instanceof FakeGrpcService);

      var calledWith = spanner.calledWith_[0];

      assert.deepStrictEqual(calledWith, {
        defaultApiEndpoint: 'spanner.googleapis.com',
        environmentVariables: [ 'GOOGLE_CLOUD_SPANNER_ENDPOINT' ],
        protosDir: path.resolve(__dirname, '../protos'),
        protoServices: {
          Operations: {
            path: 'google/longrunning/operations.proto',
            service: 'longrunning'
          }
        },
        scopes: [
          'https://www.googleapis.com/auth/cloud-platform'
        ],
        packageJson: require('../package.json')
      });
    });
  });

  describe('date', function() {
    it('should create a SpannerDate instance', function() {
      var value = {};
      var customValue = {};

      fakeCodec.SpannerDate = function(value_) {
        assert.strictEqual(value_, value);
        return customValue;
      };

      var date = spanner.date(value);
      assert.strictEqual(date, customValue);
    });

    it('should be a static method', function() {
      assert(Spanner.date() instanceof fakeCodec.SpannerDate);
    });
  });

  describe('float', function() {
    it('should create a SpannerDate instance', function() {
      var value = {};
      var customValue = {};

      fakeCodec.Float = function(value_) {
        assert.strictEqual(value_, value);
        return customValue;
      };

      var float = spanner.float(value);
      assert.strictEqual(float, customValue);
    });

    it('should be a static method', function() {
      assert(Spanner.date() instanceof fakeCodec.SpannerDate);
    });
  });

  describe('int', function() {
    it('should create an Int instance', function() {
      var value = {};
      var customValue = {};

      fakeCodec.Int = function(value_) {
        assert.strictEqual(value_, value);
        return customValue;
      };

      var int = spanner.int(value);
      assert.strictEqual(int, customValue);
    });

    it('should be a static method', function() {
      assert(Spanner.int() instanceof fakeCodec.Int);
    });
  });

  describe('createInstance', function() {
    var NAME = 'instance-name';
    var PATH;

    var CONFIG = {
      a: 'b'
    };
    var ORIGINAL_CONFIG = extend({}, CONFIG);

    var formatName_;

    before(function() {
      formatName_ = FakeInstance.formatName_;
    });

    after(function() {
      FakeInstance.formatName_ = formatName_;
    });

    beforeEach(function() {
      FakeInstance.formatName_ = formatName_;

      PATH = 'projects/' + spanner.projectId + '/instances/' + NAME;

      spanner.api.Instance = {
        createInstance: util.noop
      };
    });

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        spanner.createInstance();
      }, /A name is required to create an instance\./);
    });

    it('should throw if a config object is not provided', function() {
      assert.throws(function() {
        spanner.createInstance(NAME);
      }, /A configuration object is required to create an instance\./);
    });

    it('should set the correct defaults on the request', function(done) {
      FakeInstance.formatName_ = function(projectId, name) {
        assert.strictEqual(projectId, spanner.projectId);
        assert.strictEqual(name, NAME);
        return PATH;
      };

      spanner.api.Instance = {
        createInstance: function(reqOpts) {
          assert.deepEqual(CONFIG, ORIGINAL_CONFIG);

          assert.deepEqual(reqOpts, {
            parent: 'projects/' + spanner.projectId,
            instanceId: NAME,
            instance: extend({
              name: PATH,
              displayName: NAME
            }, CONFIG)
          });

          done();
        }
      };

      spanner.createInstance(NAME, CONFIG, assert.ifError);
    });

    it('should accept a path', function(done) {
      FakeInstance.formatName_ = function(projectId, name) {
        assert.strictEqual(name, PATH);
        setImmediate(done);
        return name;
      };

      spanner.createInstance(PATH, CONFIG, assert.ifError);
    });

    describe('config.nodes', function() {
      it('should rename to nodeCount', function(done) {
        var config = extend({}, CONFIG, { nodes: 10 });

        spanner.api.Instance = {
          createInstance: function(reqOpts) {
            assert.strictEqual(reqOpts.instance.nodeCount, config.nodes);
            assert.strictEqual(reqOpts.instance.nodes, undefined);
            done();
          }
        };

        spanner.createInstance(NAME, config, assert.ifError);
      });
    });

    describe('config.config', function() {
      it('should format a name', function(done) {
        var name = 'config-name';
        var config = extend({}, CONFIG, { config: name });
        var originalConfig = extend({}, config);

        spanner.api.Instance = {
          createInstance: function(reqOpts) {
            assert.deepEqual(config, originalConfig);

            assert.strictEqual(
              reqOpts.instance.config,
              'projects/' + spanner.projectId + '/instanceConfigs/' + name
            );

            done();
          }
        };

        spanner.createInstance(NAME, config, assert.ifError);
      });
    });

    describe('error', function() {
      var ERROR = new Error('Error.');
      var API_RESPONSE = {};

      beforeEach(function() {
        spanner.api.Instance = {
          createInstance: function(reqOpts, callback) {
            callback(ERROR, null, API_RESPONSE);
          }
        };
      });

      it('should execute callback with error & API response', function(done) {
        spanner.createInstance(NAME, CONFIG, function(err, instance, op, resp) {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(instance, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', function() {
      var OPERATION = {};
      var API_RESPONSE = {};

      beforeEach(function() {
        spanner.api.Instance = {
          createInstance: function(reqOpts, callback) {
            callback(null, OPERATION, API_RESPONSE);
          }
        };
      });

      it('should create an Instance and return an Operation', function(done) {
        var formattedName = 'formatted-name';
        FakeInstance.formatName_ = function() {
          return formattedName;
        };

        var fakeInstanceInstance = {};
        spanner.instance = function(name) {
          assert.strictEqual(name, formattedName);
          return fakeInstanceInstance;
        };

        spanner.createInstance(NAME, CONFIG, function(err, instance, op, resp) {
          assert.ifError(err);
          assert.strictEqual(instance, fakeInstanceInstance);
          assert.strictEqual(op, OPERATION);
          assert.strictEqual(resp, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('getInstances', function() {
    var QUERY = {
      a: 'b'
    };
    var ORIGINAL_QUERY = extend({}, QUERY);

    it('should make the correct gax request', function(done) {
      var expectedReqOpts = extend({}, QUERY, {
        parent: 'projects/' + spanner.projectId
      });

      spanner.api.Instance = {
        listInstances: function(reqOpts, query) {
          assert.deepEqual(reqOpts, expectedReqOpts);

          assert.notStrictEqual(reqOpts, QUERY);
          assert.deepEqual(QUERY, ORIGINAL_QUERY);

          assert.strictEqual(query, QUERY);

          done();
        }
      };

      spanner.getInstances(QUERY, assert.ifError);
    });

    it('should not require a query', function(done) {
      spanner.api.Instance = {
        listInstances: function(reqOpts, query) {
          assert.deepEqual(reqOpts, {
            parent: 'projects/' + spanner.projectId
          });

          assert.deepEqual(query, {});

          done();
        }
      };

      spanner.getInstances(assert.ifError);
    });

    describe('error', function() {
      var GAX_RESPONSE_ARGS = [
        new Error('Error.'),
        null,
        {}
      ];

      beforeEach(function() {
        spanner.api.Instance = {
          listInstances: function(reqOpts, query, callback) {
            callback.apply(null, GAX_RESPONSE_ARGS);
          }
        };
      });

      it('should execute callback with original arguments', function(done) {
        spanner.getInstances(QUERY, function() {
          assert.deepEqual([].slice.call(arguments), GAX_RESPONSE_ARGS);
          done();
        });
      });
    });

    describe('success', function() {
      var INSTANCES = [
        {
          name: 'instance-name'
        }
      ];

      var GAX_RESPONSE_ARGS = [
        null,
        INSTANCES,
        {}
      ];

      beforeEach(function() {
        spanner.api.Instance = {
          listInstances: function(reqOpts, query, callback) {
            callback.apply(null, GAX_RESPONSE_ARGS);
          }
        };
      });

      it('should create and return Instance objects', function(done) {
        var fakeInstanceInstance = {};

        spanner.instance = function(name) {
          assert.strictEqual(name, INSTANCES[0].name);
          return fakeInstanceInstance;
        };

        spanner.getInstances(QUERY, function(err) {
          assert.ifError(err);

          assert.strictEqual(arguments[0], GAX_RESPONSE_ARGS[0]);

          var instance = arguments[1].pop();
          assert.strictEqual(instance, fakeInstanceInstance);
          assert.strictEqual(instance.metadata, GAX_RESPONSE_ARGS[1][0]);

          assert.strictEqual(arguments[2], GAX_RESPONSE_ARGS[2]);

          done();
        });
      });
    });
  });

  describe('getInstanceConfigs', function() {
    it('should make and return the correct gax API call', function() {
      var query = { a: 'b' };
      var originalQuery = extend({}, query);
      var expectedQuery = extend({}, query, {
        parent: 'projects/' + spanner.projectId
      });

      function callback() {}

      var gaxMethodReturnValue = {};

      spanner.api.Instance = {
        listInstanceConfigs: function(reqOpts, callback_) {
          assert.deepEqual(reqOpts, expectedQuery);

          assert.notStrictEqual(reqOpts, query);
          assert.deepEqual(query, originalQuery);

          assert.strictEqual(callback_, callback);

          return gaxMethodReturnValue;
        }
      };

      var returnedValue = spanner.getInstanceConfigs(query, callback);
      assert.strictEqual(returnedValue, gaxMethodReturnValue);
    });

    it('should not require a query', function(done) {
      spanner.api.Instance = {
        listInstanceConfigs: function(reqOpts) {
          assert.deepEqual(reqOpts, {
            parent: 'projects/' + spanner.projectId
          });
          done();
        }
      };

      spanner.getInstanceConfigs(assert.ifError);
    });
  });

  describe('getInstanceConfigsStream', function() {
    it('should make and return the correct gax API call', function() {
      var query = { a: 'b' };
      var originalQuery = extend({}, query);
      var expectedQuery = extend({}, query, {
        parent: 'projects/' + spanner.projectId
      });
      var gaxMethodReturnValue = {};

      spanner.api.Instance = {
        listInstanceConfigsStream: function(reqOpts) {
          assert.deepEqual(reqOpts, expectedQuery);

          assert.notStrictEqual(reqOpts, query);
          assert.deepEqual(query, originalQuery);

          return gaxMethodReturnValue;
        }
      };

      var returnedValue = spanner.getInstanceConfigsStream(query);
      assert.strictEqual(returnedValue, gaxMethodReturnValue);
    });
  });

  describe('instance', function() {
    var NAME = 'instance-name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        spanner.instance();
      }, /A name is required to access an Instance object\./);
    });

    it('should create and cache an Instance', function() {
      var cache = spanner.instances_;

      assert.strictEqual(cache.has(NAME), false);

      var instance = spanner.instance(NAME);

      assert(instance instanceof FakeInstance);
      assert.strictEqual(instance.calledWith_[0], spanner);
      assert.strictEqual(instance.calledWith_[1], NAME);
      assert.strictEqual(instance, cache.get(NAME));
    });

    it('should re-use cached objects', function() {
      var cache = spanner.instances_;
      var fakeInstance = {};

      cache.set(NAME, fakeInstance);

      var instance = spanner.instance(NAME);

      assert.strictEqual(instance, fakeInstance);
    });
  });

  describe('operation', function() {
    var NAME = 'op-name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        spanner.operation();
      }, /A name is required to access an Operation object\./);
    });

    it('should return an Operation object', function() {
      var operation = spanner.operation(NAME);
      assert(operation instanceof FakeGrpcOperation);
      assert.strictEqual(operation.calledWith_[0], spanner);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });
});
