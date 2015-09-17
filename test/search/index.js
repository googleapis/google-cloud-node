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

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery');
var prop = require('propprop');
var util = require('../../lib/common/util.js');

function FakeIndex() {
  this.calledWith_ = [].slice.call(arguments);
}

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Search') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Search');
    assert.deepEqual(methods, ['getIndexes']);
    extended = true;
  }
};

var makeAuthenticatedRequestFactoryOverride;
var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: function() {
    if (makeAuthenticatedRequestFactoryOverride) {
      return makeAuthenticatedRequestFactoryOverride.apply(null, arguments);
    } else {
      return util.makeAuthenticatedRequestFactory.apply(null, arguments);
    }
  }
});

describe('Search', function() {
  var Search;
  var search;

  var PROJECT_ID = 'project-id';

  before(function() {
    mockery.registerMock('./index-class.js', FakeIndex);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../common/util.js', fakeUtil);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Search = require('../../lib/search/index.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    makeAuthenticatedRequestFactoryOverride = null;

    search = new Search({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Search.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should create an authenticated request function', function(done) {
      var options = {
        projectId: 'projectId',
        credentials: 'credentials',
        email: 'email',
        keyFilename: 'keyFile'
      };

      makeAuthenticatedRequestFactoryOverride = function(options_) {
        assert.deepEqual(options_, {
          credentials: options.credentials,
          email: options.email,
          keyFile: options.keyFilename,
          scopes: [
            'https://www.googleapis.com/auth/cloud-platform',
            'https://www.googleapis.com/auth/cloudsearch',
            'https://www.googleapis.com/auth/userinfo.email'
          ]
        });
        return done;
      };

      var search = new Search(options);
      search.makeAuthenticatedRequest_();
    });

    it('should localize the projectId', function() {
      assert.equal(search.projectId_, PROJECT_ID);
    });
  });

  describe('getIndexes', function() {
    it('should get indexes from the API', function(done) {
      var query = { a: 'b', c: 'd' };

      search.makeReq_ = function(method, path, q, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/indexes');
        assert.deepEqual(q, query);
        assert.strictEqual(body, null);
        done();
      };

      search.getIndexes(query, assert.ifError);
    });

    it('should rename query.prefix to indexNamePrefix', function(done) {
      var query = { prefix: 'prefix' };

      search.makeReq_ = function(method, path, q) {
        assert.equal(typeof q.prefix, 'undefined');
        assert.equal(q.indexNamePrefix, query.prefix);
        done();
      };

      search.getIndexes(query, assert.ifError);
    });

    it('should send empty query if only a callback is given', function(done) {
      search.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {});
        done();
      };

      search.getIndexes(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      search.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      search.getIndexes({}, function(err, indexes, nextQuery, apiResp) {
        assert.deepEqual(err, error);
        assert.strictEqual(indexes, null);
        assert.strictEqual(nextQuery, null);
        assert.deepEqual(apiResp, apiResponse);
        done();
      });
    });

    it('should execute callback with index objects', function(done) {
      var indexObjects = [{ indexId: 'a' }, { indexId: 'b' }, { indexId: 'c' }];
      var indexIds = indexObjects.map(prop('indexId'));

      var apiResponse = { indexes: indexObjects };

      search.index = function(indexId) {
        assert(indexIds.indexOf(indexId) > -1);

        // Used in the test callback to assure the value returned
        // to the callback is what's returned from this method.
        return true;
      };

      search.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      search.getIndexes({}, function(err, indexes, nextQuery, apiResp) {
        assert.ifError(err);

        assert.strictEqual(indexes.length, indexObjects.length);
        assert(indexes.every(function(index) { return index; }));

        assert.strictEqual(nextQuery, null);
        assert.deepEqual(apiResp, apiResponse);

        done();
      });
    });

    it('should assign fields property on new Index', function(done) {
      var indexObjects = [
        {
          indexId: 'a',
          indexedField: {}
        }
      ];

      var apiResponse = { indexes: indexObjects };

      search.index = function() {
        return {};
      };

      search.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      search.getIndexes({}, function(err, indexes) {
        assert.ifError(err);
        assert.strictEqual(indexes[0].fields, indexObjects[0].indexedField);
        done();
      });
    });

    it('should provide nextQuery to callback', function(done) {
      var apiResponse = { nextPageToken: 'page-token' };

      var query = { a: 'b', c: 'd' };
      var originalQuery = extend({}, query);
      var expectedNextQuery = extend({}, query, {
        pageToken: apiResponse.nextPageToken
      });

      search.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      search.getIndexes(query, function(err, indexes, nextQuery) {
        assert.ifError(err);
        assert.deepEqual(query, originalQuery);
        assert.deepEqual(nextQuery, expectedNextQuery);
        done();
      });
    });
  });

  describe('index', function() {
    it('should return a new Index object', function() {
      var indexId = 'index-id';
      var index = search.index(indexId);

      assert.deepEqual(index.calledWith_, [search, indexId]);
    });
  });

  describe('makeReq_', function() {
    it('should make correct authenticated request', function(done) {
      var method = 'POST';
      var path = '/';
      var query = 'query';
      var body = 'body';

      search.makeAuthenticatedRequest_ = function(reqOpts, callback) {
        assert.equal(reqOpts.method, method);
        assert.equal(reqOpts.qs, query);

        var baseUri = 'https://cloudsearch.googleapis.com/v1/';
        assert.equal(reqOpts.uri, baseUri + 'projects/' + PROJECT_ID + path);

        assert.equal(reqOpts.json, body);

        callback();
      };

      search.makeReq_(method, path, query, body, done);
    });
  });
});
