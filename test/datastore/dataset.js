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
var util = require('../../lib/common/util.js');

describe('Dataset', function() {
  var Dataset;

  beforeEach(function() {
    delete require.cache[require.resolve('../../lib/datastore/dataset')];
    Dataset = require('../../lib/datastore/dataset');
  });

  describe('instantiation', function() {
    it('should throw if a projectId is not specified', function() {
      assert.throws(function() {
        new Dataset();
      }, /Sorry, we cannot connect/);
    });

    it('should set default API connection details', function() {
      var options = { a: 'b', c: 'd', projectId: 'project-id' };
      var mockApiEndpoint = 'http://localhost:8080';

      Dataset.determineApiEndpoint_ = function(opts) {
        assert.deepEqual(opts, options);
        return mockApiEndpoint;
      };

      var ds = new Dataset(options);
      assert.equal(ds.apiEndpoint, mockApiEndpoint);
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
      var expectedApiEndpoint = 'https://www.googleapis.com';
      assert.equal(Dataset.determineApiEndpoint_({}), expectedApiEndpoint);
    });

    it('should remove slashes from the apiEndpoint', function() {
      var expectedApiEndpoint = 'http://localhost:8080';

      assert.equal(Dataset.determineApiEndpoint_({
        apiEndpoint: expectedApiEndpoint
      }), expectedApiEndpoint);

      assert.equal(Dataset.determineApiEndpoint_({
        apiEndpoint: 'http://localhost:8080/'
      }), expectedApiEndpoint);

      assert.equal(Dataset.determineApiEndpoint_({
        apiEndpoint: 'http://localhost:8080//'
      }), expectedApiEndpoint);
    });

    it('should default to http if protocol is unspecified', function() {
      var apiEndpoint = Dataset.determineApiEndpoint_({
        apiEndpoint: 'localhost:8080'
      });
      assert.equal(apiEndpoint, 'http://localhost:8080');
    });

    describe('with DATASTORE_HOST environment variable', function() {
      var DATASTORE_HOST = 'http://localhost:8080';

      before(function() {
        process.env.DATASTORE_HOST = DATASTORE_HOST;
      });

      after(function() {
        delete process.env.DATASTORE_HOST;
      });

      it('should use the DATASTORE_HOST env var', function() {
        assert.equal(Dataset.determineApiEndpoint_({}), DATASTORE_HOST);
      });

      it('should favor an explicit apiEndpoint option', function() {
        var expectedApiEndpoint = 'http://apiendpointoverride';

        assert.equal(Dataset.determineApiEndpoint_({
          apiEndpoint: expectedApiEndpoint
        }), expectedApiEndpoint);
      });
    });
  });
});
