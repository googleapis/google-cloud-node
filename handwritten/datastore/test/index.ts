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

import * as assert from 'assert';
import * as gax from 'google-gax';
import * as proxyquire from 'proxyquire';

const v1 = require('../src/v1/index.js');

// tslint:disable-next-line no-any
const fakeEntity: any = {
  KEY_SYMBOL: Symbol('fake key symbol'),
  Int: class {
    value: {};
    constructor(value) {
      this.value = value;
    }
  },
  isDsInt() {
    this.calledWith_ = arguments;
  },
  Double: class {
    value: {};
    constructor(value) {
      this.value = value;
    }
  },
  isDsDouble() {
    this.calledWith_ = arguments;
  },
  GeoPoint: class {
    value: {};
    constructor(value) {
      this.value = value;
    }
  },
  isDsGeoPoint() {
    this.calledWith_ = arguments;
  },
  Key: class {
    calledWith_: IArguments;
    constructor() {
      this.calledWith_ = arguments;
    }
  },
  isDsKey() {
    this.calledWith_ = arguments;
  },
};

let GoogleAuthOverride;
function fakeGoogleAuth() {
  return (GoogleAuthOverride || function() {}).apply(null, arguments);
}

let createInsecureOverride;

const fakeGoogleGax = {
  GrpcClient: class extends gax.GrpcClient {
    constructor(opts) {
      // super constructor must be called first!
      super(opts);
      this.grpc = {
        credentials: {
          createInsecure() {
            return (createInsecureOverride || function() {}).apply(
              null,
              arguments
            );
          },
        },
      } as gax.GrpcModule;
    }
  },
};

class FakeQuery {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeTransaction {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

function FakeV1() {}

describe('Datastore', function() {
  let Datastore;
  let datastore;

  const PROJECT_ID = 'project-id';
  const NAMESPACE = 'namespace';

  const DATASTORE_PROJECT_ID_CACHED = process.env.DATASTORE_PROJECT_ID;

  const OPTIONS = {
    projectId: PROJECT_ID,
    apiEndpoint: 'http://endpoint',
    credentials: {},
    keyFilename: 'key/file',
    email: 'email',
    namespace: NAMESPACE,
  };

  before(function() {
    Datastore = proxyquire('../src', {
      './entity.js': {entity: fakeEntity},
      './query.js': {Query: FakeQuery},
      './transaction.js': {Transaction: FakeTransaction},
      './v1': FakeV1,
      'google-auth-library': {
        GoogleAuth: fakeGoogleAuth,
      },
      'google-gax': fakeGoogleGax,
    }).Datastore;
  });

  beforeEach(function() {
    createInsecureOverride = null;
    GoogleAuthOverride = null;

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
    GoogleAuthOverride = null;
  });

  it('should export GAX client', function() {
    assert.ok(require('../src').v1);
  });

  describe('instantiation', function() {
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
      const datastore = new Datastore({});
      assert.strictEqual(datastore.projectId, '{{projectId}}');
    });

    it('should not default options.projectId to placeholder', function() {
      const datastore = new Datastore({});
      assert.strictEqual(datastore.options.projectId, undefined);
    });

    it('should use DATASTORE_PROJECT_ID', function() {
      const projectId = 'overridden-project-id';

      process.env.DATASTORE_PROJECT_ID = projectId;

      const datastore = new Datastore({});

      assert.strictEqual(datastore.projectId, projectId);
      assert.strictEqual(datastore.options.projectId, projectId);
    });

    it('should set the default base URL', function() {
      assert.strictEqual(datastore.defaultBaseUrl_, 'datastore.googleapis.com');
    });

    it('should set default API connection details', function(done) {
      const determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

      Datastore.prototype.determineBaseUrl_ = function(customApiEndpoint) {
        Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;

        assert.strictEqual(customApiEndpoint, OPTIONS.apiEndpoint);
        done();
      };

      new Datastore(OPTIONS);
    });

    it('should localize the options', function() {
      delete process.env.DATASTORE_PROJECT_ID;

      const options = {
        a: 'b',
        c: 'd',
      };

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

    it('should set port if detected', function() {
      const determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

      const port = 99;
      Datastore.prototype.determineBaseUrl_ = function() {
        Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;
        this.port_ = port;
      };

      const datastore = new Datastore(OPTIONS);

      assert.strictEqual(datastore.options.port, port);
    });

    it('should set grpc ssl credentials if custom endpoint', function() {
      const determineBaseUrl_ = Datastore.prototype.determineBaseUrl_;

      Datastore.prototype.determineBaseUrl_ = function() {
        Datastore.prototype.determineBaseUrl_ = determineBaseUrl_;
        this.customEndpoint_ = true;
      };

      const fakeInsecureCreds = {};
      createInsecureOverride = function() {
        return fakeInsecureCreds;
      };

      const datastore = new Datastore(OPTIONS);

      assert.strictEqual(datastore.options.sslCreds, fakeInsecureCreds);
    });

    it('should cache a local GoogleAuth instance', function() {
      const fakeGoogleAuthInstance = {};

      GoogleAuthOverride = function() {
        return fakeGoogleAuthInstance;
      };

      const datastore = new Datastore({});
      assert.strictEqual(datastore.auth, fakeGoogleAuthInstance);
    });
  });

  describe('double', function() {
    it('should expose Double builder', function() {
      const aDouble = 7.0;
      const double = Datastore.double(aDouble);
      assert.strictEqual(double.value, aDouble);
    });

    it('should also be on the prototype', function() {
      const aDouble = 7.0;
      const double = datastore.double(aDouble);
      assert.strictEqual(double.value, aDouble);
    });
  });

  describe('geoPoint', function() {
    it('should expose GeoPoint builder', function() {
      const aGeoPoint = {latitude: 24, longitude: 88};
      const geoPoint = Datastore.geoPoint(aGeoPoint);
      assert.strictEqual(geoPoint.value, aGeoPoint);
    });

    it('should also be on the prototype', function() {
      const aGeoPoint = {latitude: 24, longitude: 88};
      const geoPoint = datastore.geoPoint(aGeoPoint);
      assert.strictEqual(geoPoint.value, aGeoPoint);
    });
  });

  describe('int', function() {
    it('should expose Int builder', function() {
      const anInt = 7;
      const int = Datastore.int(anInt);
      assert.strictEqual(int.value, anInt);
    });

    it('should also be on the prototype', function() {
      const anInt = 7;
      const int = datastore.int(anInt);
      assert.strictEqual(int.value, anInt);
    });
  });

  describe('isDouble', function() {
    it('should pass value to entity', function() {
      const value = 0.42;
      let called = false;
      const saved = fakeEntity.isDsDouble;
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
      const something = {};
      Datastore.isDouble(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
    });
  });

  describe('isGeoPoint', function() {
    it('should pass value to entity', function() {
      const value = {fakeLatitude: 1, fakeLongitude: 2};
      let called = false;
      const saved = fakeEntity.isDsGeoPoint;
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
      const something = {};
      Datastore.isGeoPoint(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
    });
  });

  describe('isInt', function() {
    it('should pass value to entity', function() {
      const value = 42;
      let called = false;
      const saved = fakeEntity.isDsInt;
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
      const something = {};
      Datastore.isInt(something);
      assert.strictEqual(fakeEntity.calledWith_[0], something);
    });
  });

  describe('isKey', function() {
    it('should pass value to entity', function() {
      const value = {zz: true};
      let called = false;
      const saved = fakeEntity.isDsKey;
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
      const something = {};
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
      const namespace = 'namespace';
      const kind = ['Kind'];

      const query = datastore.createQuery(namespace, kind);
      assert(query instanceof FakeQuery);

      assert.strictEqual(query.calledWith_[0], datastore);
      assert.strictEqual(query.calledWith_[1], namespace);
      assert.deepStrictEqual(query.calledWith_[2], kind);
    });

    it('should include the default namespace', function() {
      const kind = ['Kind'];
      const query = datastore.createQuery(kind);

      assert.strictEqual(query.calledWith_[0], datastore);
      assert.strictEqual(query.calledWith_[1], datastore.namespace);
      assert.deepStrictEqual(query.calledWith_[2], kind);
    });

    it('should include the default namespace in a kindless query', function() {
      const query = datastore.createQuery();

      assert.strictEqual(query.calledWith_[0], datastore);
      assert.strictEqual(query.calledWith_[1], datastore.namespace);
      assert.deepStrictEqual(query.calledWith_[2], []);
    });
  });

  describe('key', function() {
    it('should return a Key object', function() {
      const options = {};
      const key = datastore.key(options);

      assert.strictEqual(key.calledWith_[0], options);
    });

    it('should use a non-object argument as the path', function() {
      const options = 'path';
      const key = datastore.key(options);

      assert.strictEqual(key.calledWith_[0].namespace, datastore.namespace);
      assert.deepStrictEqual(key.calledWith_[0].path, [options]);
    });
  });

  describe('transaction', function() {
    it('should return a Transaction object', function() {
      const transaction = datastore.transaction();
      assert.strictEqual(transaction.calledWith_[0], datastore);
    });

    it('should pass options to the Transaction constructor', function() {
      const options = {};
      const transaction = datastore.transaction(options);
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
      const defaultBaseUrl_ = 'defaulturl';
      datastore.defaultBaseUrl_ = defaultBaseUrl_;

      datastore.determineBaseUrl_();
      assert.strictEqual(datastore.baseUrl_, defaultBaseUrl_);
    });

    it('should remove slashes from the baseUrl', function() {
      const expectedBaseUrl = 'localhost';

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
      const datastore = new Datastore({projectId: PROJECT_ID});
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
      const DATASTORE_EMULATOR_HOST = 'localhost:9090';
      const EXPECTED_BASE_URL = 'localhost';
      const EXPECTED_PORT = 9090;

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
