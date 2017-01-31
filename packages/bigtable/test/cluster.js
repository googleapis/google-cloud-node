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
var format = require('string-format-obj');
var proxyquire = require('proxyquire');
var util = require('util');

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Cluster') {
      promisified = true;
    }
  }
});

var GrpcServiceObject = commonGrpc.ServiceObject;

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

util.inherits(FakeGrpcServiceObject, GrpcServiceObject);

describe('Bigtable/Cluster', function() {
  var CLUSTER_NAME = 'my-cluster';
  var PROJECT_ID = 'grape-spaceship-123';

  var INSTANCE = {
    id: 'projects/p/instances/i',
    parent: { projectId: PROJECT_ID }
  };

  var CLUSTER_ID = format('{instance}/clusters/{cluster}', {
    instance: INSTANCE.id,
    cluster: CLUSTER_NAME
  });

  var Cluster;
  var cluster;

  before(function() {
    Cluster = proxyquire('../src/cluster.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      }
    });
  });

  beforeEach(function() {
    cluster = new Cluster(INSTANCE, CLUSTER_NAME);
  });

  describe('instantiation', function() {
    it('should inherit from GrpcServiceObject', function() {
      assert(cluster instanceof FakeGrpcServiceObject);

      var config = cluster.calledWith_[0];

      assert.strictEqual(config.parent, INSTANCE);
      assert.strictEqual(config.id, CLUSTER_ID);

      assert.deepEqual(config.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'deleteCluster'
          },
          reqOpts: {
            name: CLUSTER_ID
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'getCluster'
          },
          reqOpts: {
            name: CLUSTER_ID
          }
        }
      });
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should Instance#createCluster to create the cluster', function(done) {
      var config = cluster.calledWith_[0];
      var fakeOptions = {};

      INSTANCE.createCluster = function(name, options, callback) {
        assert.strictEqual(name, CLUSTER_NAME);
        assert.strictEqual(options, fakeOptions);
        callback();
      };

      config.createMethod(null, fakeOptions, done);
    });

    it('should leave full cluster names unaltered', function() {
      var fakeName = 'a/b/c/d';
      var cluster = new Cluster(INSTANCE, fakeName);
      var config = cluster.calledWith_[0];

      assert.strictEqual(config.id, fakeName);

      assert.deepEqual(config.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'deleteCluster'
          },
          reqOpts: {
            name: fakeName
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'getCluster'
          },
          reqOpts: {
            name: fakeName
          }
        }
      });
    });
  });

  describe('getLocation_', function() {
    var LOCATION = 'us-centralb-1';

    it('should format the location name', function() {
      var expected = format('projects/{project}/locations/{location}', {
        project: PROJECT_ID,
        location: LOCATION
      });

      var formatted = Cluster.getLocation_(PROJECT_ID, LOCATION);
      assert.strictEqual(formatted, expected);
    });

    it('should not re-format a complete location', function() {
      var complete = format('projects/p/locations/{location}', {
        location: LOCATION
      });

      var formatted = Cluster.getLocation_(PROJECT_ID, complete);
      assert.strictEqual(formatted, complete);
    });
  });

  describe('getStorageType_', function() {
    var types = {
      unspecified: 0,
      ssd: 1,
      hdd: 2
    };

    it('should default to unspecified', function() {
      assert.strictEqual(Cluster.getStorageType_(), types.unspecified);
    });

    it('should lowercase a type', function() {
      assert.strictEqual(Cluster.getStorageType_('SSD'), types.ssd);
    });

    Object.keys(types).forEach(function(type) {
      it('should get the storage type for "' + type + '"', function() {
        assert.strictEqual(Cluster.getStorageType_(type), types[type]);
      });
    });
  });

  describe('setMetadata', function() {
    it('should provide the proper request options', function(done) {
      cluster.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableInstanceAdmin',
          method: 'updateCluster'
        });

        assert.strictEqual(reqOpts.name, CLUSTER_ID);
        done();
      };

      cluster.setMetadata({}, assert.ifError);
    });

    it('should respect the location option', function(done) {
      var options = {
        location: 'us-centralb-1'
      };

      var getLocation = Cluster.getLocation_;
      var fakeLocation = 'a/b/c/d';

      Cluster.getLocation_ = function(project, location) {
        assert.strictEqual(project, PROJECT_ID);
        assert.strictEqual(location, options.location);
        return fakeLocation;
      };

      cluster.request = function(grpcOpts, reqOpts) {
        assert.strictEqual(reqOpts.location, fakeLocation);
        Cluster.getLocation_ = getLocation;
        done();
      };

      cluster.setMetadata(options, assert.ifError);
    });

    it('should respect the nodes option', function(done) {
      var options = {
        nodes: 3
      };

      cluster.request = function(grpcOpts, reqOpts) {
        assert.strictEqual(reqOpts.serveNodes, options.nodes);
        done();
      };

      cluster.setMetadata(options, assert.ifError);
    });

    it('should respect the storage option', function(done) {
      var options = {
        storage: 'ssd'
      };

      var getStorageType = Cluster.getStorageType_;
      var fakeStorageType = 'a';

      Cluster.getStorageType_ = function(storage) {
        assert.strictEqual(storage, options.storage);
        return fakeStorageType;
      };

      cluster.request = function(grpcOpts, reqOpts) {
        assert.strictEqual(reqOpts.defaultStorageType, fakeStorageType);
        Cluster.getStorageType_ = getStorageType;
        done();
      };

      cluster.setMetadata(options, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      cluster.request = function(grpcOpts, reqOpts, callback) {
        callback(error, response);
      };

      cluster.setMetadata({}, function(err, operation, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(operation, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should return an operation to the callback', function(done) {
      var response = {
        name: 'my-operation'
      };
      var fakeOperation = {};

      cluster.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      INSTANCE.parent.operation = function(name) {
        assert.strictEqual(name, response.name);
        return fakeOperation;
      };

      cluster.setMetadata({}, function(err, operation, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(operation, fakeOperation);
        assert.strictEqual(operation.metadata, response);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });
});
