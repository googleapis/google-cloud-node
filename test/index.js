/*!
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
var mockery = require('mockery');
var util = require('../lib/common/util.js');

var extendGlobalConfigOverride = null;
var fakeUtil = extend({}, util, {
  extendGlobalConfig: function() {
    var method = extendGlobalConfigOverride || util.extendGlobalConfig;
    return method.apply(null, arguments);
  }
});

function FakeBigQuery() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeBigQuery.static = true;

function FakeDatastore() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeDatastore.static = true;

function FakeDNS() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeDNS.static = true;

function FakePubSub() {
  this.calledWith_ = [].slice.call(arguments);
}
FakePubSub.static = true;

function FakeSearch() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeSearch.static = true;

function FakeStorage() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeStorage.static = true;

describe('gcloud', function() {
  var gcloud;

  before(function() {
    mockery.registerMock('./bigquery', FakeBigQuery);
    mockery.registerMock('./datastore', FakeDatastore);
    mockery.registerMock('./dns', FakeDNS);
    mockery.registerMock('./pubsub', FakePubSub);
    mockery.registerMock('./search', FakeSearch);
    mockery.registerMock('./storage', FakeStorage);
    mockery.registerMock('./common/util.js', fakeUtil);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    gcloud = require('../lib/index.js');
  });

  beforeEach(function() {
    extendGlobalConfigOverride = null;
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should export a function', function() {
    assert.strictEqual(typeof gcloud, 'function');
  });

  it('should export static bigquery', function() {
    assert.strictEqual(gcloud.bigquery, FakeBigQuery);
  });

  it('should export static datastore', function() {
    assert.strictEqual(gcloud.datastore, FakeDatastore);
  });

  it('should export static dns', function() {
    assert.strictEqual(gcloud.dns, FakeDNS);
  });

  it('should export static pubsub', function() {
    assert.strictEqual(gcloud.pubsub, FakePubSub);
  });

  it('should export static search', function() {
    assert.strictEqual(gcloud.search, FakeSearch);
  });

  it('should export static storage', function() {
    assert.strictEqual(gcloud.storage, FakeStorage);
  });

  describe('localized auth', function() {
    var localGcloud;
    var config = { a: 'b', c: 'd' };
    var options = { e: 'f', g: 'h' };
    var extendedOptions = { a: 'b', c: 'd' };

    beforeEach(function() {
      localGcloud = gcloud(config);
    });

    describe('bigquery', function() {
      it('should create new BigQuery with extended options', function() {
        extendGlobalConfigOverride = function(config_, options_) {
          assert.strictEqual(config_, config);
          assert.strictEqual(options_, options);
          return extendedOptions;
        };

        var bigquery = localGcloud.bigquery(options);

        assert.strictEqual(bigquery.calledWith_[0], extendedOptions);
      });

      it('should extend the original API', function() {
        assert.strictEqual(localGcloud.bigquery.static, FakeBigQuery.static);
      });
    });

    describe('datastore', function() {
      it('should create new Datastore from original config', function() {
        assert.strictEqual(localGcloud.datastore.calledWith_[0], config);
      });

      it('should extend the original API', function() {
        assert.strictEqual(localGcloud.datastore.static, FakeDatastore.static);
      });
    });

    describe('dns', function() {
      it('should create new BigQuery with extended options', function() {
        extendGlobalConfigOverride = function(config_, options_) {
          assert.strictEqual(config_, config);
          assert.strictEqual(options_, options);
          return extendedOptions;
        };

        var dns = localGcloud.dns(options);

        assert.strictEqual(dns.calledWith_[0], extendedOptions);
      });

      it('should extend the original API', function() {
        assert.strictEqual(localGcloud.dns.static, FakeDNS.static);
      });
    });

    describe('pubsub', function() {
      it('should create new BigQuery with extended options', function() {
        extendGlobalConfigOverride = function(config_, options_) {
          assert.strictEqual(config_, config);
          assert.strictEqual(options_, options);
          return extendedOptions;
        };

        var pubsub = localGcloud.pubsub(options);

        assert.strictEqual(pubsub.calledWith_[0], extendedOptions);
      });

      it('should extend the original API', function() {
        assert.strictEqual(localGcloud.pubsub.static, FakePubSub.static);
      });
    });

    describe('search', function() {
      it('should create new BigQuery with extended options', function() {
        extendGlobalConfigOverride = function(config_, options_) {
          assert.strictEqual(config_, config);
          assert.strictEqual(options_, options);
          return extendedOptions;
        };

        var search = localGcloud.search(options);

        assert.strictEqual(search.calledWith_[0], extendedOptions);
      });

      it('should extend the original API', function() {
        assert.strictEqual(localGcloud.search.static, FakeSearch.static);
      });
    });

    describe('storage', function() {
      it('should create new BigQuery with extended options', function() {
        extendGlobalConfigOverride = function(config_, options_) {
          assert.strictEqual(config_, config);
          assert.strictEqual(options_, options);
          return extendedOptions;
        };

        var storage = localGcloud.storage(options);

        assert.strictEqual(storage.calledWith_[0], extendedOptions);
      });

      it('should extend the original API', function() {
        assert.strictEqual(localGcloud.storage.static, FakeStorage.static);
      });
    });
  });
});
