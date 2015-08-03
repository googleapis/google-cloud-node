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
var util = require('../../lib/common/util.js');

function FakeDocument() {
  this.calledWith_ = [].slice.call(arguments);
}
FakeDocument.prototype.toJSON = util.noop;

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
    mockery.registerMock('./document.js', FakeDocument);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
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

    it('should localize the Search instance', function() {
      assert.deepEqual(index.search_, SEARCH_INSTANCE);
    });

    it('should localize the id', function() {
      assert.equal(index.id, ID);
    });

    it('should throw if an ID is not provided', function() {
      assert.throws(function() {
        new Index(SEARCH_INSTANCE);
      }, /An ID is needed/);
    });
  });

  describe('createDocument', function() {
    beforeEach(function() {
      index.makeReq_ = util.noop;
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

      index.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'POST');
        assert.equal(path, '/documents');
        assert.strictEqual(query, null);
        assert.deepEqual(body, expectedDocumentJson);
        done();
      };

      index.createDocument(document, assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, q, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/documents');
        assert.deepEqual(q, query);
        assert.strictEqual(body, null);
        done();
      };

      index.getDocuments(query, assert.ifError);
    });

    it('should send empty query if only a callback is given', function(done) {
      index.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {});
        done();
      };

      index.getDocuments(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, q, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/search');
        assert.deepEqual(q, query);
        assert.strictEqual(body, null);
        done();
      };

      index.search(query, assert.ifError);
    });

    it('should build a query object from a string', function(done) {
      var query = 'completed=true';

      index.makeReq_ = function(method, path, q) {
        assert.deepEqual(q, { query: query });
        done();
      };

      index.search(query, assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var apiResponse = { a: 'b', c: 'd' };
      var error = new Error('Error.');

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, query, body, callback) {
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

      index.makeReq_ = function(method, path, query, body, callback) {
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

  describe('makeReq_', function() {
    it('should call search instance makeReq_', function(done) {
      var method = 'POST';
      var path = '/';
      var query = 'query';
      var body = 'body';
      var callback = 'callback';

      index.search_.makeReq_ = function(m, p, q, b, c) {
        assert.equal(m, method);
        assert.equal(p, '/indexes/' + ID + path);
        assert.equal(q, query);
        assert.equal(b, body);
        assert.equal(c, callback);
        done();
      };

      index.makeReq_(method, path, query, body, callback);
    });
  });
});
