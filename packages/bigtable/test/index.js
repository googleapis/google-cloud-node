/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
var is = require('is');
var nodeutil = require('util');
var path = require('path');
var proxyquire = require('proxyquire');
var sinon = require('sinon').sandbox.create();

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var Cluster = require('../src/cluster.js');
var Instance = require('../src/instance.js');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Bigtable') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['instance', 'operation']);
  }
});

var fakePaginator = {
  extend: function() {
    this.calledWith_ = arguments;
  },
  streamify: function(methodName) {
    return methodName;
  }
};

function createFake(Class) {
  function Fake() {
    this.calledWith_ = arguments;
    Class.apply(this, arguments);
  }
  nodeutil.inherits(Fake, Class);
  return Fake;
}

var FakeGrpcService = createFake(commonGrpc.Service);
var FakeCluster = createFake(Cluster);
var FakeInstance = createFake(Instance);
var FakeGrpcOperation = createFake(function() {});

describe('Bigtable', function() {
  var PROJECT_ID = 'test-project';

  var Bigtable;
  var bigtable;

  before(function() {
    Bigtable = proxyquire('../', {
      '@google-cloud/common': {
        paginator: fakePaginator,
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService,
        Operation: FakeGrpcOperation
      },
      './cluster.js': FakeCluster,
      './instance.js': FakeInstance
    });
  });

  afterEach(function() {
    sinon.restore();
  });

  beforeEach(function() {
    delete process.env.BIGTABLE_EMULATOR_HOST;
    bigtable = new Bigtable({ projectId: PROJECT_ID });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      var args = fakePaginator.calledWith_;

      assert.strictEqual(args[0], Bigtable);
      assert.deepEqual(args[1], ['getInstances']);
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(bigtable.getInstancesStream, 'getInstances');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = {
        projectId: PROJECT_ID
      };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Bigtable.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from GrpcService', function() {
      assert(bigtable instanceof FakeGrpcService);

      var calledWith = bigtable.calledWith_[0];

      assert.strictEqual(calledWith.baseUrl, 'bigtable.googleapis.com');
      assert.strictEqual(calledWith.customEndpoint, false);

      var protosDir = path.resolve(__dirname, '../protos');
      assert.strictEqual(calledWith.protosDir, protosDir);

      assert.deepEqual(calledWith.protoServices, {
        Bigtable: {
          baseUrl: 'bigtable.googleapis.com',
          path: 'google/bigtable/v2/bigtable.proto',
          service: 'bigtable.v2'
        },
        BigtableTableAdmin: {
          baseUrl: 'bigtableadmin.googleapis.com',
          path: 'google/bigtable/admin/v2/bigtable_table_admin.proto',
          service: 'bigtable.admin.v2'
        },
        BigtableInstanceAdmin: {
          baseUrl: 'bigtableadmin.googleapis.com',
          path: 'google/bigtable/admin/v2/bigtable_instance_admin.proto',
          service: 'bigtable.admin.v2'
        },
        Operations: {
          baseUrl: 'bigtableadmin.googleapis.com',
          path: 'google/longrunning/operations.proto',
          service: 'longrunning'
        }
      });

      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/bigtable.admin',
        'https://www.googleapis.com/auth/bigtable.data',
        'https://www.googleapis.com/auth/cloud-platform'
      ]);

      assert.deepEqual(calledWith.packageJson, require('../package.json'));
    });

    it('should work with the emulator', function() {
      var endpoint = 'http://emulator:8288';
      process.env.BIGTABLE_EMULATOR_HOST = endpoint;

      var bigtable = new Bigtable({ projectId: PROJECT_ID });

      var calledWith = bigtable.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, endpoint);
      assert.strictEqual(calledWith.customEndpoint, true);

      Object.keys(calledWith.protoServices).forEach(function(service) {
        service = calledWith.protoServices[service];

        if (is.object(service)) {
          assert.strictEqual(service.baseUrl, endpoint);
        }
      });

      delete process.env.BIGTABLE_EMULATOR_HOST;
    });

    it('should work with a custom apiEndpoint', function() {
      var options = {
        projectId: PROJECT_ID,
        apiEndpoint: 'http://local:3888'
      };

      var bigtable = new Bigtable(options);

      var calledWith = bigtable.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, options.apiEndpoint);
      assert.strictEqual(calledWith.customEndpoint, true);

      Object.keys(calledWith.protoServices).forEach(function(service) {
        service = calledWith.protoServices[service];

        if (is.object(service)) {
          assert.strictEqual(service.baseUrl, options.apiEndpoint);
        }
      });
    });

    it('should set the projectName', function() {
      assert.strictEqual(bigtable.projectName, 'projects/' + PROJECT_ID);
    });
  });

  describe('createInstance', function() {
    var INSTANCE_NAME = 'my-instance';

    it('should provide the proper request options', function(done) {
      bigtable.request = function(protoOpts, reqOpts) {
        assert.deepEqual(protoOpts, {
          service: 'BigtableInstanceAdmin',
          method: 'createInstance'
        });

        assert.strictEqual(reqOpts.parent, bigtable.projectName);
        assert.strictEqual(reqOpts.instanceId, INSTANCE_NAME);
        assert.strictEqual(reqOpts.instance.displayName, INSTANCE_NAME);
        done();
      };

      bigtable.createInstance(INSTANCE_NAME, assert.ifError);
    });

    it('should respect the displayName option', function(done) {
      var options = {
        displayName: 'robocop'
      };

      bigtable.request = function(protoOpts, reqOpts) {
        assert.strictEqual(reqOpts.instance.displayName, options.displayName);
        done();
      };

      bigtable.createInstance(INSTANCE_NAME, options, assert.ifError);
    });

    it('should respect the clusters option', function(done) {
      var cluster = {
        name: 'my-cluster',
        location: 'us-central1-b',
        nodes: 3,
        storage: 'ssd'
      };

      var options = {
        clusters: [cluster]
      };

      var fakeLocation = 'a/b/c/d';
      FakeCluster.getLocation_ = function(project, location) {
        assert.strictEqual(project, PROJECT_ID);
        assert.strictEqual(location, cluster.location);
        return fakeLocation;
      };

      var fakeStorage = 20;
      FakeCluster.getStorageType_ = function(storage) {
        assert.strictEqual(storage, cluster.storage);
        return fakeStorage;
      };

      bigtable.request = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts.clusters, {
          'my-cluster': {
            location: fakeLocation,
            serveNodes: cluster.nodes,
            defaultStorageType: fakeStorage
          }
        });

        done();
      };

      bigtable.createInstance(INSTANCE_NAME, options, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      bigtable.request = function(protoOpts, reqOpts, callback) {
        callback(error, response);
      };

      var callback = function(err, instance, operation, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(instance, null);
        assert.strictEqual(operation, null);
        assert.strictEqual(apiResponse, response);
        done();
      };

      bigtable.createInstance(INSTANCE_NAME, callback);
    });

    it('should pass an operation and instance to the callback', function(done) {
      var response = {
        name: 'my-operation'
      };

      var fakeInstance = {};
      bigtable.instance = function(name) {
        assert.strictEqual(name, INSTANCE_NAME);
        return fakeInstance;
      };

      var fakeOperation = {};
      bigtable.operation = function(name) {
        assert.strictEqual(name, response.name);
        return fakeOperation;
      };

      bigtable.request = function(protoOpts, reqOpts, callback) {
        callback(null, response);
      };

      var callback = function(err, instance, operation, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(instance, fakeInstance);
        assert.strictEqual(operation, fakeOperation);
        assert.strictEqual(operation.metadata, response);
        assert.strictEqual(apiResponse, response);
        done();
      };

      bigtable.createInstance(INSTANCE_NAME, callback);
    });
  });

  describe('getInstances', function() {
    it('should provide the proper request options', function(done) {
      bigtable.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableInstanceAdmin',
          method: 'listInstances'
        });

        assert.strictEqual(reqOpts.parent, bigtable.projectName);
        done();
      };

      bigtable.getInstances(assert.ifError);
    });

    it('should copy all query options', function(done) {
      var fakeOptions = {
        a: 'a',
        b: 'b'
      };

      bigtable.request = function(grpcOpts, reqOpts) {
        Object.keys(fakeOptions).forEach(function(key) {
          assert.strictEqual(reqOpts[key], fakeOptions[key]);
        });

        assert.notStrictEqual(reqOpts, fakeOptions);
        done();
      };

      bigtable.getInstances(fakeOptions, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      bigtable.request = function(grpcOpts, reqOpts, callback) {
        callback(error, response);
      };

      bigtable.getInstances(function(err, instances, nextQuery, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(instances, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should return an array of instance objects', function(done) {
      var response = {
        instances: [{
          name: 'a'
        }, {
          name: 'b'
        }]
      };

      var fakeInstances = [
        {},
        {}
      ];

      bigtable.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      var instanceCount = 0;

      bigtable.instance = function(name) {
        assert.strictEqual(name, response.instances[instanceCount].name);
        return fakeInstances[instanceCount++];
      };

      bigtable.getInstances(function(err, instances, nextQuery, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(instances[0], fakeInstances[0]);
        assert.strictEqual(instances[0].metadata, response.instances[0]);
        assert.strictEqual(instances[1], fakeInstances[1]);
        assert.strictEqual(instances[1].metadata, response.instances[1]);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should provide a nextQuery object', function(done) {
      var response = {
        instances: [],
        nextPageToken: 'a'
      };

      var options = {
        a: 'b'
      };

      bigtable.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      var callback = function(err, instances, nextQuery) {
        var expectedQuery = extend({}, options, {
          pageToken: response.nextPageToken
        });

        assert.ifError(err);
        assert.deepEqual(nextQuery, expectedQuery);
        done();
      };

      bigtable.getInstances(options, callback);
    });
  });

  describe('instance', function() {
    var INSTANCE_NAME = 'my-instance';

    it('should return an Instance object', function() {
      var instance = bigtable.instance(INSTANCE_NAME);
      var args = instance.calledWith_;

      assert(instance instanceof FakeInstance);
      assert.strictEqual(args[0], bigtable);
      assert.strictEqual(args[1], INSTANCE_NAME);
    });
  });

  describe('operation', function() {
    var OPERATION_NAME = 'my-operation';

    it('should return a GrpcOperation object', function() {
      var operation = bigtable.operation(OPERATION_NAME);
      var args = operation.calledWith_;

      assert(operation instanceof FakeGrpcOperation);
      assert.strictEqual(args[0], bigtable);
      assert.strictEqual(args[1], OPERATION_NAME);
    });
  });

});
