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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var Dataset = require('../../lib/datastore/dataset');
var util = require('../../lib/common/util.js');

describe('Dataset', function() {
  describe('instantiation', function() {
    it('should set default API connection details', function() {
      var ds = new Dataset();
      assert.equal(ds.apiEndpoint, 'https://www.googleapis.com');
    });

    it('should set API connection details', function() {
      var ds = new Dataset({ apiEndpoint: 'http://localhost:8080' });
      assert.equal(ds.apiEndpoint, 'http://localhost:8080');
    });

    it('should remove slashes from the apiEndpoint', function() {
      var ds1 = new Dataset({ apiEndpoint: 'http://localhost:8080' });
      var ds2 = new Dataset({ apiEndpoint: 'http://localhost:8080/' });
      var ds3 = new Dataset({ apiEndpoint: 'http://localhost:8080//' });

      assert.equal(ds1.apiEndpoint, 'http://localhost:8080');
      assert.equal(ds2.apiEndpoint, 'http://localhost:8080');
      assert.equal(ds3.apiEndpoint, 'http://localhost:8080');
    });

    it('should default to http if protocol is unspecified', function() {
      var ds = new Dataset({ apiEndpoint: 'localhost:8080' });
      assert.equal(ds.apiEndpoint, 'http://localhost:8080');
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
          begin: function() {
            done();
          }
        };
      };
      ds.runInTransaction();
    });

    it('should return transaction object to the callback', function(done) {
      var transaction = {
        begin: function(callback) {
          callback();
        },
        commit: util.noop
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
          begin: function(callback) {
            callback();
          },
          commit: function() {
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
});
