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
var mockery = require('mockery');
var util = require('../../lib/common/util.js');

var makeAuthenticatedRequestFactoryCache = util.makeAuthenticatedRequestFactory;
var makeAuthenticatedRequestFactoryOverride;
util.makeAuthenticatedRequestFactory = function() {
  if (makeAuthenticatedRequestFactoryOverride) {
    return makeAuthenticatedRequestFactoryOverride.apply(this, arguments);
  } else {
    return makeAuthenticatedRequestFactoryCache.apply(this, arguments);
  }
};

describe('Dataset', function() {
  var Dataset;
  var dataset;

  var OPTIONS = {
    projectId: 'project-id',
    apiEndpoint: 'endpoint',
    credentials: {},
    keyFilename: 'key/file',
    email: 'email',
    namespace: 'namespace'
  };

  before(function() {
    mockery.registerMock('../common/util.js', util);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Dataset = require('../../lib/datastore/dataset');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    makeAuthenticatedRequestFactoryOverride = null;
    dataset = new Dataset(OPTIONS);
  });

  describe('instantiation', function() {
    it('should throw if a projectId is not specified', function() {
      assert.throws(function() {
        new Dataset();
      }, /Sorry, we cannot connect/);
    });

    it('should set default API connection details', function(done) {
      var determineApiEndpoint_ = Dataset.prototype.determineApiEndpoint_;

      Dataset.prototype.determineApiEndpoint_ = function(customApiEndpoint) {
        Dataset.prototype.determineApiEndpoint_ = determineApiEndpoint_;

        assert.strictEqual(customApiEndpoint, OPTIONS.apiEndpoint);
        done();
      };

      new Dataset(OPTIONS);
    });

    it('should create an authenticated request factory', function() {
      var authenticatedRequest = {};
      var customEndpoint = 'custom-endpoint';

      var determineApiEndpoint_ = Dataset.prototype.determineApiEndpoint_;
      Dataset.prototype.determineApiEndpoint_ = function() {
        Dataset.prototype.determineApiEndpoint_ = determineApiEndpoint_;
        this.customEndpoint = customEndpoint;
      };

      makeAuthenticatedRequestFactoryOverride = function(config) {
        assert.strictEqual(config.customEndpoint, customEndpoint);
        assert.strictEqual(config.credentials, OPTIONS.credentials);
        assert.strictEqual(config.keyFile, OPTIONS.keyFilename);
        assert.strictEqual(config.email, OPTIONS.email);

        assert.deepEqual(config.scopes, [
          'https://www.googleapis.com/auth/datastore',
          'https://www.googleapis.com/auth/userinfo.email'
        ]);

        return authenticatedRequest;
      };

      var ds = new Dataset(OPTIONS);
      assert.strictEqual(ds.makeAuthenticatedRequest_, authenticatedRequest);
    });

    it('should localize the project id', function() {
      assert.strictEqual(dataset.projectId, OPTIONS.projectId);
    });

    it('should localize the namespace', function() {
      assert.strictEqual(dataset.namespace, OPTIONS.namespace);
    });
  });

  describe('key', function() {
    it('should return key scoped by default namespace', function() {
      var ds = new Dataset({ projectId: 'test', namespace: 'my-ns' });
      var key = ds.key(['Company', 1]);
      assert.equal(key.namespace, 'my-ns');
      assert.deepEqual(key.path, ['Company', 1]);
    });

    it('should allow namespace specification', function() {
      var ds = new Dataset({ projectId: 'test', namespace: 'my-ns' });
      var key = ds.key({
        namespace: 'custom-ns',
        path: ['Company', 1]
      });
      assert.equal(key.namespace, 'custom-ns');
      assert.deepEqual(key.path, ['Company', 1]);
    });

    it('should create incomplete key from string', function() {
      var ds = new Dataset({ projectId: 'test' });
      var key = ds.key('hello');
      assert.deepEqual(key.path, ['hello']);
    });

    it('should create incomplete key from array in obj', function() {
      var ds = new Dataset({ projectId: 'test' });
      var key = ds.key({
        path: ['world']
      });
      assert.deepEqual(key.path, ['world']);
    });

    it('should create incomplete key from array', function() {
      var ds = new Dataset({ projectId: 'test' });
      var key = ds.key(['Company']);
      assert.deepEqual(key.path, ['Company']);
    });
  });

  describe('runInTransaction', function() {
    var ds;

    beforeEach(function() {
      ds = new Dataset({ projectId: 'test' });
    });

    it('should begin transaction', function(done) {
      ds.createTransaction_ = function() {
        return {
          begin_: function() {
            done();
          }
        };
      };
      ds.runInTransaction();
    });

    it('should execute callback with error if one occurred', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      ds.createTransaction_ = function() {
        return {
          begin_: function(callback) {
            callback(error, apiResponse);
          }
        };
      };

      ds.runInTransaction(util.noop, function(err, apiResponse_) {
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
      ds.createTransaction_ = function() {
        return transaction;
      };
      ds.runInTransaction(function(t) {
        assert.deepEqual(t, transaction);
        done();
      }, assert.ifError);
    });

    it('should return correct done function to the callback', function(done) {
      ds.createTransaction_ = function() {
        return {
          begin_: function(callback) {
            callback();
          },
          commit_: function() {
            done();
          }
        };
      };
      ds.runInTransaction(function(t, tDone) {
        tDone();
      }, assert.ifError);
    });
  });

  describe('createQuery', function() {
    var ds;
    var dsWithNs;

    beforeEach(function() {
      ds = new Dataset({ projectId: 'test' });
      dsWithNs = new Dataset({
        projectId: 'test',
        namespace: 'my-ns'
      });
    });

    it('should not include a namespace on a ns-less dataset', function() {
      var query = ds.createQuery('Kind');
      assert.equal(query.namespace, undefined);
    });

    it('should scope query to namespace', function() {
      var query = dsWithNs.createQuery('Kind');
      assert.equal(query.namespace, 'my-ns');
    });

    it('should allow control over namespace and kinds', function() {
      var queryFromDs = ds.createQuery('my-ns', 'Kind');
      assert.equal(queryFromDs.namespace, 'my-ns');

      var queryFromDsWithNs = dsWithNs.createQuery('Kind');
      assert.equal(queryFromDsWithNs.namespace, 'my-ns');
    });

    it('should allow removal of namespace', function() {
      var query = dsWithNs.createQuery(null, 'Kind');
      assert.strictEqual(query.namespace, null);
    });
  });

  describe('determineApiEndpoint_', function() {
    it('should default to googleapis.com', function() {
      delete process.env.DATASTORE_HOST;

      dataset.determineApiEndpoint_();

      var expectedApiEndpoint = 'https://www.googleapis.com';
      assert.strictEqual(dataset.apiEndpoint, expectedApiEndpoint);
    });

    it('should remove slashes from the apiEndpoint', function() {
      var expectedApiEndpoint = 'http://localhost:8080';

      dataset.determineApiEndpoint_(expectedApiEndpoint);
      assert.strictEqual(dataset.apiEndpoint, expectedApiEndpoint);

      dataset.determineApiEndpoint_('http://localhost:8080/');
      assert.strictEqual(dataset.apiEndpoint, expectedApiEndpoint);

      dataset.determineApiEndpoint_('http://localhost:8080//');
      assert.strictEqual(dataset.apiEndpoint, expectedApiEndpoint);
    });

    it('should default to http if protocol is unspecified', function() {
      dataset.determineApiEndpoint_('localhost:8080');
      assert.strictEqual(dataset.apiEndpoint, 'http://localhost:8080');
    });

    it('should set customEndpoint when using explicit endpoint', function() {
      dataset.determineApiEndpoint_('http://localhost:8080');
      assert.strictEqual(dataset.customEndpoint, true);
    });

    it('should not set customEndpoint when using default endpoint', function() {
      var options = extend({}, OPTIONS);
      delete options.apiEndpoint;

      var dataset = new Dataset(options);
      dataset.determineApiEndpoint_();
      assert.strictEqual(dataset.customEndpoint, undefined);
    });

    describe('with DATASTORE_HOST environment variable', function() {
      var DATASTORE_HOST = 'http://localhost:9090';

      before(function() {
        process.env.DATASTORE_HOST = DATASTORE_HOST;
      });

      after(function() {
        delete process.env.DATASTORE_HOST;
      });

      it('should use the DATASTORE_HOST env var', function() {
        dataset.determineApiEndpoint_();
        assert.strictEqual(dataset.apiEndpoint, DATASTORE_HOST);
      });

      it('should favor an explicit apiEndpoint option', function() {
        var explicitApiEndpoint = 'http://apiendpointoverride';
        dataset.determineApiEndpoint_(explicitApiEndpoint);
        assert.strictEqual(dataset.apiEndpoint, explicitApiEndpoint);
      });

      it('should set customEndpoint', function() {
        dataset.determineApiEndpoint_();
        assert.strictEqual(dataset.customEndpoint, true);
      });
    });
  });
});
