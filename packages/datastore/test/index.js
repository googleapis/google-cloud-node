/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
var path = require('path');
var proxyquire = require('proxyquire');

var commonGrpc = require('@google-cloud/common-grpc');
var util = require('@google-cloud/common').util;

var fakeEntity = {
  KEY_SYMBOL: Symbol('fake key symbol'),
  Int: function(value) {
    this.value = value;
  },
  Double: function(value) {
    this.value = value;
  },
  GeoPoint: function(value) {
    this.value = value;
  },
  Key: function() {
    this.calledWith_ = arguments;
  }
};

var fakeUtil = extend({}, util);

function FakeGrpcService() {
  this.calledWith_ = arguments;
  return commonGrpc.Service.apply(this, arguments);
}

function FakeQuery() {
  this.calledWith_ = arguments;
}

function FakeTransaction() {
  this.calledWith_ = arguments;
}

function FakeV1() {}

describe('Datastore', function() {
  var Datastore;
  var datastore;

  var PROJECT_ID = 'project-id';
  var NAMESPACE = 'namespace';

  var OPTIONS = {
    projectId: PROJECT_ID,
    apiEndpoint: 'endpoint',
    credentials: {},
    keyFilename: 'key/file',
    email: 'email',
    namespace: NAMESPACE
  };

  before(function() {
    Datastore = proxyquire('../', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      },
      './entity.js': fakeEntity,
      './query.js': FakeQuery,
      './transaction.js': FakeTransaction,
      './v1': FakeV1
    });
  });

  beforeEach(function() {
    datastore = new Datastore({
      projectId: PROJECT_ID,
      namespace: NAMESPACE
    });
  });

  it('should export GAX client', function() {
    assert.strictEqual(Datastore.v1, FakeV1);
  });

  describe('instantiation', function() {
    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options_, config) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(OPTIONS, options_);
        assert.strictEqual(config.projectIdRequired, false);
        return options_;
      };

      Datastore.call(fakeContext, OPTIONS);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should set default API connection details', function() {
      var apiEndpoint = 'datastore.googleapis.com';

      const options = Object.assign({}, OPTIONS);
      delete options.apiEndpoint;
      const datastore = new Datastore(options);
      var calledWith = datastore.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, apiEndpoint);
      assert.strictEqual(calledWith.customEndpoint, false);
      assert.deepStrictEqual(calledWith.protoServices, {
        Datastore: {
          baseUrl: apiEndpoint,
          path: 'google/datastore/v1/datastore.proto',
          service: 'datastore.v1'
        }
      });
    });

    it('should localize the namespace', function() {
      assert.strictEqual(datastore.namespace, NAMESPACE);
    });

    it('should localize the projectId', function() {
      assert.strictEqual(datastore.projectId, PROJECT_ID);
    });

    it('should use DATASTORE_PROJECT_ID', function() {
      var datastoreProjectIdCached = process.env.DATASTORE_PROJECT_ID;
      var projectId = 'overridden-project-id';

      process.env.DATASTORE_PROJECT_ID = projectId;

      var datastore = new Datastore(OPTIONS);
      process.env.DATASTORE_PROJECT_ID = datastoreProjectIdCached;

      assert.strictEqual(datastore.projectId, projectId);
    });

    it('should inherit from GrpcService', function() {
      var datastore = new Datastore(OPTIONS);

      // using modelo's isInstance instead of the built-in
      // instanceof. Required when doing multiple inheritance.
      assert(datastore.isInstance(FakeGrpcService));

      var calledWith = datastore.calledWith_[0];

      assert.strictEqual(datastore.projectIdRequired, false);
      assert.strictEqual(datastore.baseUrl, OPTIONS.apiEndpoint);
      assert.strictEqual(datastore.customEndpoint, true);

      var protosDir = path.resolve(__dirname, '../protos');
      assert.strictEqual(calledWith.protosDir, protosDir);

      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/datastore'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
      assert.deepEqual(calledWith.grpcMetadata, {
        'google-cloud-resource-prefix': 'projects/' + datastore.projectId
      });

      Object.keys(calledWith.protoServices).forEach(function(serviceKey) {
        var service = calledWith.protoServices[serviceKey];
        var proto = datastore.protos[serviceKey];

        if (is.object(service)) {
          assert.strictEqual(proto.baseUrl, OPTIONS.apiEndpoint);
        }
      });
    });

    it('should use GOOGLE_CLOUD_DATASTORE_ENDPOINT if defined', function() {
      var endpoint = 'localhost:8080';
      process.env.GOOGLE_CLOUD_DATASTORE_ENDPOINT = endpoint;
      process.env.DATASTORE_EMULATOR_HOST = 'emulator:8288';

      var datastore = new Datastore({ projectId: PROJECT_ID });

      var calledWith = datastore.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, endpoint);
      assert.strictEqual(calledWith.customEndpoint, true);

      Object.keys(datastore.protos).forEach(function(proto) {
        proto = datastore.protos[proto];

        if (is.object(proto)) {
          assert.strictEqual(proto.baseUrl, endpoint);
        }
      });

      delete process.env.GOOGLE_CLOUD_DATASTORE_ENDPOINT;
      delete process.env.DATASTORE_EMULATOR_HOST;
    });

    it('should use DATASTORE_EMULATOR_HOST if defined', function() {
      var endpoint = 'localhost:8080';
      process.env.DATASTORE_EMULATOR_HOST = endpoint;

      var datastore = new Datastore({ projectId: PROJECT_ID });

      var calledWith = datastore.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, endpoint);
      assert.strictEqual(calledWith.customEndpoint, true);

      Object.keys(datastore.protos).forEach(function(proto) {
        proto = datastore.protos[proto];

        if (is.object(proto)) {
          assert.strictEqual(proto.baseUrl, endpoint);
        }
      });

      delete process.env.DATASTORE_EMULATOR_HOST;
    });

    it('should trim the protocol in custom endpoint', function() {
      var endpoint = 'local:3888';
      var endpointWithProtocol = 'http://' + endpoint;
      var options = {
        projectId: PROJECT_ID,
        apiEndpoint: endpointWithProtocol
      };

      var datastore = new Datastore(options);

      var calledWith = datastore.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, endpoint);
      assert.strictEqual(calledWith.customEndpoint, true);

      Object.keys(datastore.protos).forEach(function(proto) {
        proto = datastore.protos[proto];

        if (is.object(proto)) {
          assert.strictEqual(proto.baseUrl, endpoint);
        }
      });
    });
  });

  describe('double', function() {
    it('should expose Double builder', function() {
      var aDouble = 7.0;
      var double = Datastore.double(aDouble);
      assert.strictEqual(double.value, aDouble);
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(datastore.double, Datastore.double);
    });
  });

  describe('geoPoint', function() {
    it('should expose GeoPoint builder', function() {
      var aGeoPoint = { latitude: 24, longitude: 88 };
      var geoPoint = Datastore.geoPoint(aGeoPoint);
      assert.strictEqual(geoPoint.value, aGeoPoint);
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(datastore.geoPoint, Datastore.geoPoint);
    });
  });

  describe('int', function() {
    it('should expose Int builder', function() {
      var anInt = 7;
      var int = Datastore.int(anInt);
      assert.strictEqual(int.value, anInt);
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(datastore.int, Datastore.int);
    });
  });

  describe('KEY', function() {
    it('should expose the KEY symbol', function() {
      assert.strictEqual(Datastore.KEY, fakeEntity.KEY_SYMBOL);
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(datastore.KEY, Datastore.KEY);
    });
  });

  describe('MORE_RESULTS_AFTER_CURSOR', function() {
    it('should expose a MORE_RESULTS_AFTER_CURSOR helper', function() {
      assert.strictEqual(
        Datastore.MORE_RESULTS_AFTER_CURSOR,
        'MORE_RESULTS_AFTER_CURSOR'
      );
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(
        datastore.MORE_RESULTS_AFTER_CURSOR,
        Datastore.MORE_RESULTS_AFTER_CURSOR
      );
    });
  });

  describe('MORE_RESULTS_AFTER_LIMIT', function() {
    it('should expose a MORE_RESULTS_AFTER_LIMIT helper', function() {
      assert.strictEqual(
        Datastore.MORE_RESULTS_AFTER_LIMIT,
        'MORE_RESULTS_AFTER_LIMIT'
      );
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(
        datastore.MORE_RESULTS_AFTER_LIMIT,
        Datastore.MORE_RESULTS_AFTER_LIMIT
      );
    });
  });

  describe('NO_MORE_RESULTS', function() {
    it('should expose a NO_MORE_RESULTS helper', function() {
      assert.strictEqual(Datastore.NO_MORE_RESULTS, 'NO_MORE_RESULTS');
    });

    it('should also be on the prototype', function() {
      assert.strictEqual(datastore.NO_MORE_RESULTS, Datastore.NO_MORE_RESULTS);
    });
  });

  describe('createQuery', function() {
    it('should return a Query object', function() {
      var namespace = 'namespace';
      var kind = ['Kind'];

      var query = datastore.createQuery(namespace, kind);
      assert(query instanceof FakeQuery);

      assert.strictEqual(query.calledWith_[0], datastore);
      assert.strictEqual(query.calledWith_[1], namespace);
      assert.deepEqual(query.calledWith_[2], kind);
    });

    it('should include the default namespace', function() {
      var kind = ['Kind'];
      var query = datastore.createQuery(kind);

      assert.strictEqual(query.calledWith_[0], datastore);
      assert.strictEqual(query.calledWith_[1], datastore.namespace);
      assert.deepEqual(query.calledWith_[2], kind);
    });

    it('should include the default namespace in a kindless query', function() {
      var query = datastore.createQuery();

      assert.strictEqual(query.calledWith_[0], datastore);
      assert.strictEqual(query.calledWith_[1], datastore.namespace);
      assert.deepEqual(query.calledWith_[2], []);
    });
  });

  describe('key', function() {
    it('should return a Key object', function() {
      var options = {};
      var key = datastore.key(options);

      assert.strictEqual(key.calledWith_[0], options);
    });

    it('should use a non-object argument as the path', function() {
      var options = 'path';
      var key = datastore.key(options);

      assert.strictEqual(key.calledWith_[0].namespace, datastore.namespace);
      assert.deepEqual(key.calledWith_[0].path, [options]);
    });
  });

  describe('transaction', function() {
    it('should return a Transaction object', function() {
      var transaction = datastore.transaction();
      assert.strictEqual(transaction.calledWith_[0], datastore);
    });
  });
});
