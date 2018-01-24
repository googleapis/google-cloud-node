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
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var v1 = require('../src/v1/index.js');

var fakeEntity = {
  KEY_SYMBOL: Symbol('fake key symbol'),
  Int: function(value) {
    this.value = value;
  },
  isDsInt: function() {
    this.calledWith_ = arguments;
  },
  Double: function(value) {
    this.value = value;
  },
  isDsDouble: function() {
    this.calledWith_ = arguments;
  },
  GeoPoint: function(value) {
    this.value = value;
  },
  isDsGeoPoint: function() {
    this.calledWith_ = arguments;
  },
  Key: function() {
    this.calledWith_ = arguments;
  },
  isDsKey: function() {
    this.calledWith_ = arguments;
  },
};

var fakeUtil = extend({}, util);
var originalFakeUtil = extend(true, {}, fakeUtil);

var googleAutoAuthOverride;
function fakeGoogleAutoAuth() {
  return (googleAutoAuthOverride || util.noop).apply(null, arguments);
}

var createInsecureOverride;
var fakeGoogleGax = {
  grpc: function() {
    return {
      grpc: {
        credentials: {
          createInsecure: function() {
            return (createInsecureOverride || util.noop).apply(null, arguments);
          },
        },
      },
    };
  },
};

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

  var DATASTORE_PROJECT_ID_CACHED = process.env.DATASTORE_PROJECT_ID;

  var OPTIONS = {
    projectId: PROJECT_ID,
    apiEndpoint: 'http://endpoint',
    credentials: {},
    keyFilename: 'key/file',
    email: 'email',
    namespace: NAMESPACE,
  };

  before(function() {
    Datastore = proxyquire('../', {
      '@google-cloud/common': {
        util: fakeUtil,
      },
      './entity.js': fakeEntity,
      './query.js': FakeQuery,
      './transaction.js': FakeTransaction,
      './v1': FakeV1,
      'google-auto-auth': fakeGoogleAutoAuth,
      'google-gax': fakeGoogleGax,
    });
  });

  beforeEach(function() {
    extend(fakeUtil, originalFakeUtil);

    createInsecureOverride = null;
    googleAutoAuthOverride = null;

    datastore = new Datastore({
      projectId: PROJECT_ID,
      namespace: NAMESPACE,
    });
  });

  afterEach(function() {
    if (typeof DATASTORE_PROJECT_ID_CACHED === 'string') {
      process.env.DATASTORE_PROJECT_ID = DATASTORE_PROJECT_ID_CACHED;
    } else {
      delete process.env.DATASTORE_PROJECT_ID;
    }
  });

  after(function() {
    createInsecureOverride = null;
    googleAutoAuthOverride = null;
  });

  it('should export GAX client', function() {
    assert.strictEqual(Datastore.v1, FakeV1);
  });

  describe('instantiation', function() {
    it('should work without new', function() {
      assert.doesNotThrow(function() {
        Datastore({projectId: PROJECT_ID});
      });
    });

    it('should normalize the arguments', function() {
      var normalizeArgumentsCalled = false;
      var options = {};

      fakeUtil.normalizeArguments = function(context, options_, config) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(options_, options);
        assert.strictEqual(config.projectIdRequired, false);
        return options_;
      };

      new Datastore(options);
      assert.strictEqual(normalizeArgumentsCalled, true);
    });

    it('should initialize an empty Client map', function() {
      assert(datastore.clients_ instanceof Map);
      assert.strictEqual(datastore.clients_.size, 0);
    });

    it('should alias itself to the datastore property', function() {
      assert.strictEqual(datastore.datastore, datastore);
    });

    it('should localize the namespace', function() {
      assert.strictEqual(datastore.namespace, NAMESPACE);
    });

    it('should localize the projectId', function() {
      assert.strictEqual(datastore.projectId, PROJECT_ID);
      assert.strictEqual(datastore.options.projectId, PROJECT_ID);
    });

    it('should default project ID to placeholder', function() {
      var datastore = new Datastore({});
      assert.strictEqual(datastore.projectId, '{{projectId}}');
    });

    it('should not default options.projectId to placeholder', function() {
      var datastore = new Datastore({});
      assert.strictEqual(datastore.options.projectId, undefined);
    });

    it('should use DATASTORE_PROJECT_ID', function() {
      var projectId = 'overridden-project-id';

      process.env.DATASTORE_PROJECT_ID = projectId;

      var datastore = new Datastore({});

      assert.strictEqual(datastore.projectId, projectId);
      assert.strictEqual(datastore.options.projectId, projectId);
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

    it('should localize the options', function() {
      delete process.env.DATASTORE_PROJECT_ID;

      var options = {
        a: 'b',
        c: 'd',
      };

      var datastore = new Datastore(options);

      assert.notStrictEqual(datastore.options, options);

      assert.deepEqual(
        datastore.options,
        extend(
          {
            libName: 'gccl',
            libVersion: require('../package.json').version,
            scopes: v1.DatastoreClient.scopes,
            servicePath: datastore.baseUrl_,
            port: 443,
            projectId: undefined,
          },
          options
        )
      );
    });

    it('should set port if detected', function() {
      var determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

      var port = 99;
      Datastore.prototype.determineBaseUrl_ = function() {
        Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;
        this.port_ = port;
      };

      var datastore = new Datastore(OPTIONS);

      assert.strictEqual(datastore.options.port, port);
    });

    it('should set grpc ssl credentials if custom endpoint', function() {
      var determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

      Datastore.prototype.determineBaseUrl_ = function() {
        Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;
        this.customEndpoint_ = true;
      };

      var fakeInsecureCreds = {};
      createInsecureOverride = function() {
        return fakeInsecureCreds;
      };

      var datastore = new Datastore(OPTIONS);

      assert.strictEqual(datastore.options.sslCreds, fakeInsecureCreds);
    });

    it('should cache a local google-auto-auth instance', function() {
      var fakeGoogleAutoAuthInstance = {};

      googleAutoAuthOverride = function() {
        return fakeGoogleAutoAuthInstance;
      };

      var datastore = new Datastore({});
      assert.strictEqual(datastore.auth, fakeGoogleAutoAuthInstance);
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
      var aGeoPoint = {latitude: 24, longitude: 88};
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

  describe('isDouble', function() {
    it('should pass value to entity', function() {
      var value = 0.42;
      var called = false;
      var saved = fakeEntity.isDsDouble;
      fakeEntity.isDsDouble = function(arg) {
        assert.strictEqual(arg, value);
        called = true;
        return false;
      };
      assert.strictEqual(datastore.isDouble(value), false);
      assert.strictEqual(called, true);
      fakeEntity.isDsDouble = saved;
    });

    it('should expose Double identifier', function() {
      var something = {};
      Datastore.isDouble(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
    });
  });

  describe('isGeoPoint', function() {
    it('should pass value to entity', function() {
      var value = {fakeLatitude: 1, fakeLongitude: 2};
      var called = false;
      var saved = fakeEntity.isDsGeoPoint;
      fakeEntity.isDsGeoPoint = function(arg) {
        assert.strictEqual(arg, value);
        called = true;
        return false;
      };
      assert.strictEqual(datastore.isGeoPoint(value), false);
      assert.strictEqual(called, true);
      fakeEntity.isDsGeoPoint = saved;
    });

    it('should expose GeoPoint identifier', function() {
      var something = {};
      Datastore.isGeoPoint(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
    });
  });

  describe('isInt', function() {
    it('should pass value to entity', function() {
      var value = 42;
      var called = false;
      var saved = fakeEntity.isDsInt;
      fakeEntity.isDsInt = function(arg) {
        assert.strictEqual(arg, value);
        called = true;
        return false;
      };
      assert.strictEqual(datastore.isInt(value), false);
      assert.strictEqual(called, true);
      fakeEntity.isDsInt = saved;
    });

    it('should expose Int identifier', function() {
      var something = {};
      Datastore.isInt(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
    });
  });

  describe('isKey', function() {
    it('should pass value to entity', function() {
      var value = {zz: true};
      var called = false;
      var saved = fakeEntity.isDsKey;
      fakeEntity.isDsKey = function(arg) {
        assert.strictEqual(arg, value);
        called = true;
        return false;
      };
      assert.strictEqual(datastore.isKey(value), false);
      assert.strictEqual(called, true);
      fakeEntity.isDsKey = saved;
    });

    it('should expose Key identifier', function() {
      var something = {};
      datastore.isKey(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
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

    it('should pass options to the Transaction constructor', function() {
      var options = {};
      var transaction = datastore.transaction(options);
      assert.strictEqual(transaction.calledWith_[1], options);
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
      var expectedBaseUrl = 'localhost';

      setHost('localhost/');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, expectedBaseUrl);

      setHost('localhost//');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, expectedBaseUrl);
    });

    it('should remove the protocol if specified', function() {
      setHost('http://localhost');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, 'localhost');

      setHost('https://localhost');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, 'localhost');
    });

    it('should set Numberified port if one was found', function() {
      setHost('http://localhost:9090');
      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.port_, 9090);
    });

    it('should not set customEndpoint_ when using default baseurl', function() {
      var datastore = new Datastore({projectId: PROJECT_ID});
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
      var EXPECTED_BASE_URL = 'localhost';
      var EXPECTED_PORT = 9090;

      beforeEach(function() {
        setHost(DATASTORE_EMULATOR_HOST);
      });

      after(function() {
        delete process.env.DATASTORE_EMULATOR_HOST;
      });

      it('should use the DATASTORE_EMULATOR_HOST env var', function() {
        datastore.determineBaseUrl_();
        assert.strictEqual(datastore.baseUrl_, EXPECTED_BASE_URL);
        assert.strictEqual(datastore.port_, EXPECTED_PORT);
      });

      it('should set customEndpoint_', function() {
        datastore.determineBaseUrl_();
        assert.strictEqual(datastore.customEndpoint_, true);
      });
    });
  });
});
