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
var mockery = require('mockery');

function createFakeApi() {
  return function FakeApi() {
    if (!(this instanceof FakeApi)) {
      var instance = new FakeApi();
      FakeApi.apply(instance, arguments);
      return instance;
    }

    this.calledWith_ = [].slice.call(arguments);
  };
}

var FakeBigQuery = createFakeApi();
var FakeDatastore = createFakeApi();
var FakeDNS = createFakeApi();
var FakePubSub = createFakeApi();
var FakeSearch = createFakeApi();
var FakeStorage = createFakeApi();

describe('gcloud', function() {
  var gcloud;

  before(function() {
    mockery.registerMock('./bigquery', FakeBigQuery);
    mockery.registerMock('./datastore', FakeDatastore);
    mockery.registerMock('./dns', FakeDNS);
    mockery.registerMock('./pubsub', FakePubSub);
    mockery.registerMock('./search', FakeSearch);
    mockery.registerMock('./storage', FakeStorage);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    gcloud = require('../lib/index.js');
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

    beforeEach(function() {
      localGcloud = gcloud(config);
    });

    describe('bigquery', function() {
      it('should create a new BigQuery', function() {
        var bigquery = localGcloud.bigquery(options);

        assert(bigquery instanceof FakeBigQuery);
        assert.strictEqual(bigquery.calledWith_[0], options);
      });
    });

    describe('datastore', function() {
      it('should create a single Datastore', function() {
        var datastore = localGcloud.datastore;

        assert(datastore instanceof FakeDatastore);
        assert.strictEqual(datastore.calledWith_[0], config);
      });
    });

    describe('dns', function() {
      it('should create a new DNS', function() {
        var dns = localGcloud.dns(options);

        assert(dns instanceof FakeDNS);
        assert.strictEqual(dns.calledWith_[0], options);
      });
    });

    describe('pubsub', function() {
      it('should create a new PubSub', function() {
        var pubsub = localGcloud.pubsub(options);

        assert(pubsub instanceof FakePubSub);
        assert.strictEqual(pubsub.calledWith_[0], options);
      });
    });

    describe('search', function() {
      it('should create a new Search', function() {
        var search = localGcloud.search(options);

        assert(search instanceof FakeSearch);
        assert.strictEqual(search.calledWith_[0], options);
      });
    });

    describe('storage', function() {
      it('should create a new Storage', function() {
        var storage = localGcloud.storage(options);

        assert(storage instanceof FakeStorage);
        assert.strictEqual(storage.calledWith_[0], options);
      });
    });
  });
});
