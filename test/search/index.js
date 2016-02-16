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
var mockery = require('mockery-next');
var nodeutil = require('util');
var prop = require('propprop');

var Service = require('../../lib/common/service.js');
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
    }

    return util.makeAuthenticatedRequestFactory.apply(null, arguments);
  }
});

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

describe('Search', function() {
  var Search;
  var search;

  var PROJECT_ID = 'project-id';

  before(function() {
    mockery.registerMock('../../lib/common/service.js', FakeService);
    mockery.registerMock('../../lib/common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../../lib/common/util.js', fakeUtil);
    mockery.registerMock('../../lib/search/index-class.js', FakeIndex);

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

    it('should inherit from Service', function() {
      assert(search instanceof Service);

      var calledWith = search.calledWith_[0];

      var baseUrl = 'https://cloudsearch.googleapis.com/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/cloudsearch',
        'https://www.googleapis.com/auth/userinfo.email'
      ]);
    });
  });

  describe('getIndexes', function() {
    it('should get indexes from the API', function(done) {
      var query = { a: 'b', c: 'd' };

      search.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/indexes');
        assert.deepEqual(reqOpts.qs, query);
        done();
      };

      search.getIndexes(query, assert.ifError);
    });

    it('should rename query.prefix to indexNamePrefix', function(done) {
      var query = { prefix: 'prefix' };

      search.request = function(reqOpts) {
        assert.strictEqual(typeof reqOpts.qs.prefix, 'undefined');
        assert.strictEqual(reqOpts.qs.indexNamePrefix, query.prefix);
        done();
      };

      search.getIndexes(query, assert.ifError);
    });

    it('should send empty query if only a callback is given', function(done) {
      search.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      search.getIndexes(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      search.request = function(reqOpts, callback) {
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

      search.request = function(reqOpts, callback) {
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

      search.request = function(reqOpts, callback) {
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

      search.request = function(reqOpts, callback) {
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
    it('should throw if an ID is not provided', function() {
      assert.throws(function() {
        search.index();
      }, /An ID is needed/);
    });

    it('should return a new Index object', function() {
      var indexId = 'index-id';
      var index = search.index(indexId);

      assert.deepEqual(index.calledWith_, [search, indexId]);
    });
  });
});
