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
var GrpcServiceObject = common.GrpcServiceObject;
var Cluster = require('../src/cluster.js');
var Family = require('../src/family.js');
var Table = require('../src/table.js');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Instance') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['cluster', 'table']);
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

  util.inherits(Fake, Class);
  return Fake;
}

var FakeGrpcServiceObject = createFake(GrpcServiceObject);
var FakeCluster = createFake(Cluster);
var FakeFamily = createFake(Family);
var FakeTable = createFake(Table);

describe('Bigtable/Instance', function() {
  var INSTANCE_NAME = 'my-instance';
  var BIGTABLE = { projectName: 'projects/my-project' };

  var INSTANCE_ID = format('{project}/instances/{instance}', {
    project: BIGTABLE.projectName,
    instance: INSTANCE_NAME
  });

  var CLUSTER_NAME = 'my-cluster';

  var Instance;
  var instance;

  before(function() {
    Instance = proxyquire('../src/instance.js', {
      '@google-cloud/common': {
        GrpcServiceObject: FakeGrpcServiceObject,
        paginator: fakePaginator,
        util: fakeUtil
      },
      './cluster.js': FakeCluster,
      './family.js': FakeFamily,
      './table.js': FakeTable
    });
  });

  beforeEach(function() {
    instance = new Instance(BIGTABLE, INSTANCE_NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      var args = fakePaginator.calledWith_;

      assert.strictEqual(args[0], Instance);
      assert.deepEqual(args[1], ['getClusters', 'getTables']);
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(instance.getClustersStream, 'getClusters');
      assert.strictEqual(instance.getTablesStream, 'getTables');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should inherit from GrpcServiceObject', function() {
      var config = instance.calledWith_[0];

      assert(instance instanceof FakeGrpcServiceObject);
      assert.strictEqual(config.parent, BIGTABLE);
      assert.strictEqual(config.id, INSTANCE_ID);

      assert.deepEqual(config.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'deleteInstance'
          },
          reqOpts: {
            name: INSTANCE_ID
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'getInstance'
          },
          reqOpts: {
            name: INSTANCE_ID
          }
        },
        setMetadata: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'updateInstance'
          },
          reqOpts: {
            name: INSTANCE_ID
          }
        }
      });
    });

    it('should Bigtable#createInstance to create the table', function(done) {
      var fakeOptions = {};
      var config = instance.calledWith_[0];

      BIGTABLE.createInstance = function(name, options, callback) {
        assert.strictEqual(name, INSTANCE_NAME);
        assert.strictEqual(options, fakeOptions);
        callback();
      };

      config.createMethod(null, fakeOptions, done);
    });

    it('should not alter full instance ids', function() {
      var fakeId = 'a/b/c/d';
      var instance = new Instance(BIGTABLE, fakeId);
      var config = instance.calledWith_[0];

      assert.strictEqual(config.id, fakeId);

      assert.deepEqual(config.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'deleteInstance'
          },
          reqOpts: {
            name: fakeId
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'getInstance'
          },
          reqOpts: {
            name: fakeId
          }
        },
        setMetadata: {
          protoOpts: {
            service: 'BigtableInstanceAdmin',
            method: 'updateInstance'
          },
          reqOpts: {
            name: fakeId
          }
        }
      });
    });
  });

  describe('createCluster', function() {
    it('should provide the proper request options', function(done) {
      instance.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableInstanceAdmin',
          method: 'createCluster'
        });

        assert.strictEqual(reqOpts.parent, INSTANCE_ID);
        assert.strictEqual(reqOpts.clusterId, CLUSTER_NAME);
        done();
      };

      instance.createCluster(CLUSTER_NAME, assert.ifError);
    });

    it('should respect the location option', function(done) {
      var options = {
        location: 'us-central1-b'
      };

      var fakeLocation = 'a/b/c/d';

      FakeCluster.getLocation_ = function(project, location) {
        assert.strictEqual(project, BIGTABLE.projectName);
        assert.strictEqual(location, options.location);
        return fakeLocation;
      };

      instance.request = function(grpcOpts, reqOpts) {
        assert.strictEqual(reqOpts.cluster.location, fakeLocation);
        done();
      };

      instance.createCluster(CLUSTER_NAME, options, assert.ifError);
    });

    it('should respect the nodes option', function(done) {
      var options = {
        nodes: 3
      };

      instance.request = function(grpcOpts, reqOpts) {
        assert.strictEqual(reqOpts.cluster.serveNodes, options.nodes);
        done();
      };

      instance.createCluster(CLUSTER_NAME, options, assert.ifError);
    });

    it('should respect the storage option', function(done) {
      var options = {
        storage: 'ssd'
      };

      var fakeStorageType = 2;

      FakeCluster.getStorageType_ = function(type) {
        assert.strictEqual(type, options.storage);
        return fakeStorageType;
      };

      instance.request = function(grpcOpts, reqOpts) {
        assert.strictEqual(reqOpts.cluster.defaultStorageType, fakeStorageType);
        done();
      };

      instance.createCluster(CLUSTER_NAME, options, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      instance.request = function(grpcOpts, reqOpts, callback) {
        callback(error, response);
      };

      var callback = function(err, cluster, operation, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(cluster, null);
        assert.strictEqual(operation, null);
        assert.strictEqual(apiResponse, response);
        done();
      };

      instance.createCluster(CLUSTER_NAME, callback);
    });

    it('should return a cluster and operation object', function(done) {
      var fakeCluster = {};
      var fakeOperation = {};

      var response = {
        name: 'my-operation'
      };

      instance.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      BIGTABLE.operation = function(name) {
        assert.strictEqual(name, response.name);
        return fakeOperation;
      };

      instance.cluster = function(name) {
        assert.strictEqual(name, CLUSTER_NAME);
        return fakeCluster;
      };

      var callback = function(err, cluster, operation, apiResponse) {
        assert.strictEqual(err, null);
        assert.strictEqual(cluster, fakeCluster);
        assert.strictEqual(operation, fakeOperation);
        assert.strictEqual(operation.metadata, response);
        assert.strictEqual(apiResponse, response);
        done();
      };

      instance.createCluster(CLUSTER_NAME, callback);
    });
  });

  describe('createTable', function() {
    var TABLE_ID = 'my-table';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        instance.createTable();
      }, /A name is required to create a table\./);
    });

    it('should provide the proper request options', function(done) {
      instance.request = function(protoOpts, reqOpts) {
        assert.deepEqual(protoOpts, {
          service: 'BigtableTableAdmin',
          method: 'createTable'
        });

        assert.strictEqual(reqOpts.parent, INSTANCE_ID);
        assert.strictEqual(reqOpts.tableId, TABLE_ID);
        assert.deepEqual(reqOpts.table, {
          granularity: 0
        });
        done();
      };

      instance.createTable(TABLE_ID, assert.ifError);
    });

    it('should set the initial split keys', function(done) {
      var options = {
        splits: ['a', 'b']
      };

      var expectedSplits = [
        { key: 'a' },
        { key: 'b' }
      ];

      instance.request = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts.initialSplits, expectedSplits);
        done();
      };

      instance.createTable(TABLE_ID, options, assert.ifError);
    });

    describe('creating column families', function() {
      it('should accept a family name', function(done) {
        var options = {
          families: ['a', 'b']
        };

        instance.request = function(protoOpts, reqOpts) {
          assert.deepEqual(reqOpts.table.columnFamilies, {
            a: {},
            b: {}
          });

          done();
        };

        instance.createTable(TABLE_ID, options, assert.ifError);
      });

      it('should accept a garbage collection object', function(done) {
        var options = {
          families: [
            {
              name: 'e',
              rule: {}
            }
          ]
        };

        var fakeRule = { a: 'b' };

        FakeFamily.formatRule_ = function(rule) {
          assert.strictEqual(rule, options.families[0].rule);
          return fakeRule;
        };

        instance.request = function(protoOpts, reqOpts) {
          assert.deepEqual(reqOpts.table.columnFamilies, {
            e: {
              gcRule: fakeRule
            }
          });
          done();
        };

        instance.createTable(TABLE_ID, options, assert.ifError);
      });
    });

    it('should return an error to the callback', function(done) {
      var err = new Error('err');
      var response = {};

      instance.request = function(protoOpts, reqOpts, callback) {
        callback(err, response);
      };

      instance.createTable(TABLE_ID, function(err_, table, apiResponse) {
        assert.strictEqual(err, err_);
        assert.strictEqual(table, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should return a Table object', function(done) {
      var response = {
        name: TABLE_ID
      };

      var fakeTable = {};

      instance.table = function(name) {
        assert.strictEqual(name, response.name);
        return fakeTable;
      };

      instance.request = function(p, r, callback) {
        callback(null, response);
      };

      instance.createTable(TABLE_ID, function(err, table, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(table, fakeTable);
        assert.strictEqual(table.metadata, response);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });
  });

  describe('cluster', function() {
    it('should return a Cluster object', function() {
      var cluster = instance.cluster(CLUSTER_NAME);

      assert(cluster instanceof FakeCluster);

      var args = cluster.calledWith_;

      assert.strictEqual(args[0], instance);
      assert.strictEqual(args[1], CLUSTER_NAME);
    });
  });

  describe('getClusters', function() {
    it('should provide the proper request options', function(done) {
      instance.request = function(grpcOpts, reqOpts) {
        assert.deepEqual(grpcOpts, {
          service: 'BigtableInstanceAdmin',
          method: 'listClusters'
        });

        assert.strictEqual(reqOpts.parent, INSTANCE_ID);
        done();
      };

      instance.getClusters(assert.ifError);
    });

    it('should copy all query options', function(done) {
      var fakeOptions = {
        a: 'a',
        b: 'b'
      };

      instance.request = function(grpcOpts, reqOpts) {
        Object.keys(fakeOptions).forEach(function(key) {
          assert.strictEqual(reqOpts[key], fakeOptions[key]);
        });

        assert.notStrictEqual(reqOpts, fakeOptions);
        done();
      };

      instance.getClusters(fakeOptions, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      instance.request = function(grpcOpts, reqOpts, callback) {
        callback(error, response);
      };

      instance.getClusters(function(err, clusters, nextQuery, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(clusters, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should return an array of cluster objects', function(done) {
      var response = {
        clusters: [{
          name: 'a'
        }, {
          name: 'b'
        }]
      };

      var fakeClusters = [
        {},
        {}
      ];

      instance.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      var clusterCount = 0;

      instance.cluster = function(name) {
        assert.strictEqual(name, response.clusters[clusterCount].name);
        return fakeClusters[clusterCount++];
      };

      instance.getClusters(function(err, clusters, nextQuery, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(clusters[0], fakeClusters[0]);
        assert.strictEqual(clusters[0].metadata, response.clusters[0]);
        assert.strictEqual(clusters[1], fakeClusters[1]);
        assert.strictEqual(clusters[1].metadata, response.clusters[1]);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should provide a nextQuery object', function(done) {
      var response = {
        clusters: [],
        nextPageToken: 'a'
      };

      var options = {
        a: 'b'
      };

      instance.request = function(grpcOpts, reqOpts, callback) {
        callback(null, response);
      };

      instance.getClusters(options, function(err, clusters, nextQuery) {
        var expectedQuery = extend({}, options, {
          pageToken: response.nextPageToken
        });

        assert.ifError(err);
        assert.deepEqual(nextQuery, expectedQuery);
        done();
      });
    });
  });

  describe('getTables', function() {
    var views = FakeTable.VIEWS = {
      unspecified: 0,
      name: 1,
      schema: 2,
      full: 4
    };

    it('should provide the proper request options', function(done) {
      instance.request = function(protoOpts, reqOpts) {
        assert.deepEqual(protoOpts, {
          service: 'BigtableTableAdmin',
          method: 'listTables'
        });
        assert.strictEqual(reqOpts.parent, INSTANCE_ID);
        assert.strictEqual(reqOpts.view, views.unspecified);
        done();
      };

      instance.getTables(assert.ifError);
    });

    Object.keys(views).forEach(function(view) {
      it('should set the "' + view + '" view', function(done) {
        var options = {
          view: view
        };

        instance.request = function(protoOpts, reqOpts) {
          assert.strictEqual(reqOpts.view, views[view]);
          done();
        };

        instance.getTables(options, assert.ifError);
      });
    });

    it('should return an error to the callback', function(done) {
      var err = new Error('err');
      var response = {};

      instance.request = function(p, r, callback) {
        callback(err, response);
      };

      instance.getTables(function(err_, tables, apiResponse) {
        assert.strictEqual(err, err_);
        assert.strictEqual(tables, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should return a list of Table objects', function(done) {
      var tableName = 'projects/p/zones/z/clusters/c/tables/my-table';
      var fakeFormattedName = 'my-table';
      var fakeTable = {};

      var response = {
        tables: [{
          name: tableName
        }]
      };

      instance.request = function(p, r, callback) {
        callback(null, response);
      };

      instance.table = function(name) {
        assert.strictEqual(name, fakeFormattedName);
        return fakeTable;
      };

      instance.getTables(function(err, tables, nextQuery, apiResponse) {
        assert.ifError(err);

        var table = tables[0];

        assert.strictEqual(table, fakeTable);
        assert.strictEqual(table.metadata, response.tables[0]);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should create a nextQuery object', function(done) {
      var response = {
        tables: [],
        nextPageToken: 'a'
      };

      var options = {
        a: 'b'
      };

      instance.request = function(protoOpts, reqOpts, callback) {
        callback(null, response);
      };

      instance.getTables(options, function(err, tables, nextQuery) {
        assert.ifError(err);

        var expectedQuery = extend({}, options, {
          pageToken: response.nextPageToken
        });

        assert.deepEqual(nextQuery, expectedQuery);
        done();
      });
    });
  });

  describe('table', function() {
    var TABLE_ID = 'table-id';

    it('should return a table instance', function() {
      var table = instance.table(TABLE_ID);
      var args = table.calledWith_;

      assert(table instanceof FakeTable);
      assert.strictEqual(args[0], instance);
      assert.strictEqual(args[1], TABLE_ID);
    });
  });

});
