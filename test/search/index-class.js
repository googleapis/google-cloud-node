/**
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
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeDocument() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeDocument.prototype.toJSON = util.noop;

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'Index');
    assert.deepEqual(methods, ['getDocuments', 'search']);
  }
};

describe('Index', function() {
  var Index;
  var index;

  var SEARCH_INSTANCE = {
    projectId: 'project-id'
  };

  var ID = 'index-id';

  before(function() {
    mockery.registerMock('../common/service-object.js', FakeServiceObject);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('./document.js', FakeDocument);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Index = require('../../lib/search/index-class.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    index = new Index(SEARCH_INSTANCE, ID);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should inherit from ServiceObject', function() {
      assert(index instanceof ServiceObject);

      var calledWith = index.calledWith_[0];

      assert.strictEqual(calledWith.parent, SEARCH_INSTANCE);
      assert.strictEqual(calledWith.baseUrl, '/indexes');
      assert.strictEqual(calledWith.id, ID);
      assert.deepEqual(calledWith.methods, {});
    });
  });

  describe('createDocument', function() {
    beforeEach(function() {
      index.request = util.noop;
    });

    it('should accept a Document object', function(done) {
      var document = new FakeDocument();
      document.toJSON = done;

      index.createDocument(document, assert.ifError);
    });

    it('should create a Document from a JSON object', function(done) {
      var documentObject = { a: 'b', c: 'd' };

      index.documentFromObject_ = function(documentObject_) {
        assert.deepEqual(documentObject_, documentObject);
        done();
      };

      index.createDocument(documentObject, assert.ifError);
    });

    it('should post document to the API', function(done) {
      var expectedDocumentJson = { a: 'b', c: 'd' };

      var document = new FakeDocument();
      document.toJSON = function() { return expectedDocumentJson; };

      index.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/documents');
        assert.deepEqual(reqOpts.json, expectedDocumentJson);
        done();
      };

      index.createDocument(document, assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      index.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      var document = new FakeDocument();

      index.createDocument(document, function(err, document, apiResp) {
        assert.deepEqual(err, error);
        assert.strictEqual(document, null);
        assert.deepEqual(apiResp, apiResponse);
        done();
      });
    });

    it('should execute callback with Document object', function(done) {
      var apiResponse = { a: 'b', c: 'd' };

      index.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      var document = new FakeDocument();

      index.createDocument(document, function(err, document_, apiResp) {
        assert.ifError(err);
        assert.deepEqual(document_, document);
        assert.deepEqual(apiResp, apiResponse);
        done();
      });
    });
  });

  describe('document', function() {
    it('should return a new Document object', function() {
      var docId = 'doc-id';
      var document = index.document(docId);

      assert.deepEqual(document.calledWith_, [index, docId]);
    });
  });

  describe('getDocuments', function() {
    it('should get document from the API', function(done) {
      var query = { a: 'b', c: 'd' };

      index.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/documents');
        assert.deepEqual(reqOpts.qs, query);
        done();
      };

      index.getDocuments(query, assert.ifError);
    });

    it('should send empty query if only a callback is given', function(done) {
      index.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      index.getDocuments(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      index.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      index.getDocuments({}, function(err, documents, nextQuery, apiResp) {
        assert.deepEqual(err, error);
        assert.strictEqual(documents, null);
        assert.strictEqual(nextQuery, null);
        assert.deepEqual(apiResp, apiResponse);
        done();
      });
    });

    it('should execute callback with document objects', function(done) {
      var documentObjects = [{ a: 'b' }, { c: 'd' }, { e: 'f' }];
      var apiResponse = { documents: documentObjects };

      index.documentFromObject_ = function(documentObject) {
        assert(documentObjects.indexOf(documentObject) > -1);

        // Used in the test callback to assure the value returned
        // to the callback is what's returned from this method.
        return true;
      };

      index.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      index.getDocuments({}, function(err, documents, nextQuery, apiResp) {
        assert.ifError(err);

        assert.strictEqual(documents.length, documentObjects.length);
        assert(documents.every(function(document) { return document; }));

        assert.strictEqual(nextQuery, null);
        assert.deepEqual(apiResp, apiResponse);

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

      index.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      index.getDocuments(query, function(err, documents, nextQuery) {
        assert.ifError(err);
        assert.deepEqual(query, originalQuery);
        assert.deepEqual(nextQuery, expectedNextQuery);
        done();
      });
    });
  });

  describe('search', function() {
    it('should throw if a query string or object is not provided', function() {
      assert.throws(function() {
        index.search();
      }, /A query must be either a string or object/);

      assert.throws(function() {
        index.search(util.noop);
      }, /A query must be either a string or object/);
    });

    it('should send a query to the API', function(done) {
      var query = {
        query: 'completed=true'
      };

      index.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/search');
        assert.deepEqual(reqOpts.qs, query);
        done();
      };

      index.search(query, assert.ifError);
    });

    it('should build a query object from a string', function(done) {
      var query = 'completed=true';

      index.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, { query: query });
        done();
      };

      index.search(query, assert.ifError);
    });

    it('should use default querystring module', function(done) {
      index.request = function(reqOpts) {
        assert.strictEqual(reqOpts.useQuerystring, true);
        done();
      };

      index.search('', assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var apiResponse = { a: 'b', c: 'd' };
      var error = new Error('Error.');

      index.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      index.search({}, function(err, documents, nextQuery, apiResp) {
        assert.deepEqual(err, error);
        assert.strictEqual(nextQuery, null);
        assert.deepEqual(apiResp, apiResponse);
        done();
      });
    });

    it('should execute callback with document objects', function(done) {
      var documentObjects = [{ a: 'b' }, { c: 'd' }, { e: 'f' }];
      var apiResponse = { results: documentObjects };

      index.documentFromObject_ = function(documentObject) {
        assert(documentObjects.indexOf(documentObject) > -1);

        // Used in the test callback to assure the value returned
        // to the callback is what's returned from this method.
        return true;
      };

      index.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      index.search({}, function(err, documents, nextQuery, apiResp) {
        assert.ifError(err);

        assert.strictEqual(documents.length, documentObjects.length);
        assert(documents.every(function(document) { return document; }));

        assert.strictEqual(nextQuery, null);
        assert.deepEqual(apiResp, apiResponse);

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

      index.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      index.search(query, function(err, documents, nextQuery) {
        assert.ifError(err);
        assert.deepEqual(query, originalQuery);
        assert.deepEqual(nextQuery, expectedNextQuery);
        done();
      });
    });
  });

  describe('documentFromObject_', function() {
    beforeEach(function() {
      index.document = function() {
        return {};
      };
    });

    it('should create a document object', function(done) {
      var documentObject = { docId: 'doc-id' };

      index.document = function(docId) {
        assert.equal(docId, documentObject.docId);
        done();
      };

      index.documentFromObject_(documentObject);
    });

    it('should return an object with a fields property', function() {
      var documentObject = {
        docId: 'doc-id',
        fields: { a: 'b', c: 'd' }
      };

      var document = index.documentFromObject_(documentObject);
      assert.deepEqual(document.fields, documentObject.fields);
    });

    it('should return an object with a rank property', function() {
      var documentObject = {
        docId: 'doc-id',
        rank: 8
      };

      var document = index.documentFromObject_(documentObject);
      assert.equal(document.rank, documentObject.rank);
    });
  });
});
