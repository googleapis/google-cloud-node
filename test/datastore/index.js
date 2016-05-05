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

var entity = {
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

var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery-next');

var util = require('../../lib/common/util.js');

var fakeUtil = extend({}, util);

function FakeQuery() {
  this.calledWith_ = arguments;
}

function FakeTransaction() {
  this.calledWith_ = arguments;
}

function FakeGrpcService() {
  this.calledWith_ = arguments;
}

describe('Datastore', function() {
  var Datastore;
  var datastore;

  var PROJECT_ID = 'project-id';
  var NAMESPACE = 'namespace';

  var OPTIONS = {
    projectId: PROJECT_ID,
    apiEndpoint: 'http://endpoint',
    credentials: {},
    keyFilename: 'key/file',
    email: 'email',
    namespace: NAMESPACE
  };

  before(function() {
    mockery.registerMock('../../lib/common/grpc-service.js', FakeGrpcService);
    mockery.registerMock('../../lib/common/util.js', fakeUtil);
    mockery.registerMock('../../lib/datastore/entity.js', entity);
    mockery.registerMock('../../lib/datastore/query.js', FakeQuery);
    mockery.registerMock('../../lib/datastore/transaction.js', FakeTransaction);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Datastore = require('../../lib/datastore/index.js');
  });

  beforeEach(function() {
    datastore = new Datastore({
      projectId: PROJECT_ID,
      namespace: NAMESPACE
    });
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
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

    it('should set the default base URL', function() {
      assert.strictEqual(datastore.defaultBaseUrl_, 'datastore.googleapis.com');
    });

    it('should set default API connection details', function(done) {
      var determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

      Datastore.prototype.determineBaseUrl_ = function(customApiEndpoint) {
        Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;

        assert.strictEqual(customApiEndpoint, OPTIONS.apiEndpoint);
        done();
      };

      new Datastore(OPTIONS);
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

      var calledWith = datastore.calledWith_[0];

      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.strictEqual(calledWith.baseUrl, datastore.baseUrl_);
      assert.strictEqual(calledWith.customEndpoint, datastore.customEndpoint_);
      assert.strictEqual(calledWith.service, 'datastore');
      assert.strictEqual(calledWith.apiVersion, 'v1beta3');
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/datastore'
      ]);
    });
  });

  describe('double', function() {
    it('should expose Double builder', function() {
      var aDouble = 7.0;
      var double = Datastore.double(aDouble);
      assert.strictEqual(double.value, aDouble);
    });
  });

  describe('geoPoint', function() {
    it('should expose GeoPoint builder', function() {
      var aGeoPoint = { latitude: 24, longitude: 88 };
      var geoPoint = Datastore.geoPoint(aGeoPoint);
      assert.strictEqual(geoPoint.value, aGeoPoint);
    });
  });

  describe('int', function() {
    it('should expose Int builder', function() {
      var anInt = 7;
      var int = Datastore.int(anInt);
      assert.strictEqual(int.value, anInt);
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

  describe('runInTransaction', function() {
    it('should begin transaction', function(done) {
      datastore.createTransaction_ = function() {
        return {
          begin_: function() {
            done();
          }
        };
      };

      datastore.runInTransaction();
    });

    it('should execute callback with error if one occurred', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      datastore.createTransaction_ = function() {
        return {
          begin_: function(callback) {
            callback(error, apiResponse);
          }
        };
      };

      datastore.runInTransaction(util.noop, function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should return transaction object to the callback', function(done) {
      var transaction = {
        begin_: function(callback) {
          callback();
        },
        commit_: util.noop
      };

      datastore.createTransaction_ = function() {
        return transaction;
      };

      datastore.runInTransaction(function(t) {
        assert.deepEqual(t, transaction);
        done();
      }, assert.ifError);
    });

    it('should return correct done function to the callback', function(done) {
      datastore.createTransaction_ = function() {
        return {
          begin_: function(callback) {
            callback();
          },
          commit_: function() {
            done();
          }
        };
      };

      datastore.runInTransaction(function(t, tDone) {
        tDone();
      }, assert.ifError);
    });
  });

  describe('createTransaction_', function() {
    it('should return a Transaction object', function() {
      var transaction = datastore.createTransaction_();
      assert.strictEqual(transaction.calledWith_[0], datastore);
    });
  });

  describe('determineBaseUrl_', function() {
    function setHost(host) {
      process.env.DATASTORE_EMULATOR_HOST = host;
    }

    beforeEach(function() {
      delete process.env.DATASTORE_EMULATOR_HOST;
    });

    it('should default to defaultBaseUrl_', function() {
      var defaultBaseUrl_ = 'defaulturl';
      datastore.defaultBaseUrl_ = defaultBaseUrl_;

      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, defaultBaseUrl_);
    });

    it('should remove slashes from the baseUrl', function() {
      var expectedBaseUrl = 'localhost:8080';

      setHost('localhost:8080/');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, expectedBaseUrl);

      setHost('localhost:8080//');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, expectedBaseUrl);
    });

    it('should remove the protocol if specified', function() {
      setHost('http://localhost:8080');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, 'localhost:8080');

      setHost('https://localhost:8080');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, 'localhost:8080');
    });

    it('should not set customEndpoint_ when using default baseurl', function() {
      var datastore = new Datastore({ projectId: PROJECT_ID });
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.customEndpoint_, undefined);
    });

    it('should set customEndpoint_ when using custom API endpoint', function() {
      datastore.determineBaseUrl_('apiEndpoint');
      assert.strictEqual(datastore.customEndpoint_, true);
    });

    it('should set baseUrl when using custom API endpoint', function() {
      datastore.determineBaseUrl_('apiEndpoint');
      assert.strictEqual(datastore.baseUrl_, 'apiEndpoint');
    });

    describe('with DATASTORE_EMULATOR_HOST environment variable', function() {
      var DATASTORE_EMULATOR_HOST = 'localhost:9090';

      beforeEach(function() {
        setHost(DATASTORE_EMULATOR_HOST);
      });

      after(function() {
        delete process.env.DATASTORE_EMULATOR_HOST;
      });

      it('should use the DATASTORE_EMULATOR_HOST env var', function() {
        datastore.determineBaseUrl_();
        assert.strictEqual(datastore.baseUrl_, DATASTORE_EMULATOR_HOST);
      });

      it('should set customEndpoint_', function() {
        datastore.determineBaseUrl_();
        assert.strictEqual(datastore.customEndpoint_, true);
      });
    });
  });
});
