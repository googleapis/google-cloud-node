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

/*!
 * @module search/index
 */

'use strict';

var arrify = require('arrify');
var extend = require('extend');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:search/document}
 * @private
 */
var Document = require('./document.js');

/**
 * @type {module:common/serviceObject}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * Create an Index object to interact with a Google Cloud Search index.
 *
 * @constructor
 * @alias module:search/index
 *
 * @param {string} id - ID of the index.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var search = gcloud.search({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var index = search.index('records');
 */
function Index(search, id) {
  ServiceObject.call(this, {
    parent: search,
    baseUrl: '/indexes',
    id: id,
    methods: {
      // Nothing needed other than the `request` method.
    }
  });

  this.id = id;
}

nodeutil.inherits(Index, ServiceObject);

/**
 * Create a document in the index.
 *
 * @resource [Documents: create API Documentation]{@link https://cloud.google.com/search/reference/rest/v1/projects/indexes/documents/create}
 *
 * @param {object|module:search/document} documentObj - A properly-formed
 *     Document object as outlined in the
 *     [official docs](https://goo.gl/AYhSgI).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:search/document} callback.document - The Document object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // A document can be built using the {module:search/document} object.
 * //-
 * var newDocument = index.document('new-document-id');
 * newDocument.addField('person').addTextValue('Stephen');
 *
 * index.createDocument(newDocument, function(err, document, apiResponse) {});
 *
 * //-
 * // A document can also be created from a properly-formed object as outlined
 * // in the <a href="https://goo.gl/AYhSgI">official docs</a>.
 * //
 * // This will create the same resulting document object as the example above.
 * //-
 * var newDocument = {
 *   docId: 'new-document-id',
 *   fields: {
 *     person: {
 *       values: [
 *         {
 *           stringFormat: 'TEXT',
 *           stringValue: 'Stephen'
 *         }
 *       ]
 *     }
 *   }
 * };
 *
 * index.createDocument(newDocument, function(err, document, apiResponse) {});
 *
 * //-
 * // Specifying an ID for your new document isn't required. In both of the
 * // scenarios above, simply don't specify 'new-document-id' and one will be
 * // generated for you.
 * //-
 */
Index.prototype.createDocument = function(documentObj, callback) {
  var document;

  if (documentObj instanceof Document) {
    document = documentObj;
    documentObj = document.toJSON();
  } else {
    document = this.documentFromObject_(documentObj);
  }

  this.request({
    method: 'POST',
    uri: '/documents',
    json: documentObj
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    callback(null, document, resp);
  });
};

/**
 * Access a {module:search/document} object.
 *
 * @param {string} id - The id of the document.
 * @return {module:search/document}
 *
 * @example
 * var myDocument = index.document('my-document');
 *
 * //-
 * // Documents can also be created from objects.
 * //-
 * var myDocument = index.document({
 *   docId: 'my-document',
 *   fields: {
 *     person: {
 *       values: [
 *         {
 *           stringFormat: 'TEXT',
 *           stringValue: 'Stephen'
 *         }
 *       ]
 *     }
 *   }
 * });
 */
Index.prototype.document = function(id) {
  if (is.object(id)) {
    return this.documentFromObject_(id);
  }

  return new Document(this, id);
};

/**
 * Get {module:search/document} objects for all of the documents in this index.
 *
 * @resource [Documents: list API Documentation]{@link https://cloud.google.com/search/reference/rest/v1/projects/indexes/documents/list}
 *
 * @param {object=} query - Query object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} query.pageSize - The maximum number of documents to return
 *     per page. If not specified, 100 documents are returned per page.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {string} query.view - One of `INDEX_VIEW_UNSPECIFIED`, `ID_ONLY`, or
 *     `FULL`. See [this table](https://goo.gl/sY6Lpt) for more details.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:search/document[]} callback.documents - A list of Documents.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * index.getDocuments(function(err, documents) {
 *   if (!err) {
 *     // documents is an array of Document objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function onApiResponse(err, documents, nextQuery, apiResponse) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *
 *   // `documents` is an array of Document objects.
 *
 *   if (nextQuery) {
 *     index.getDocuments(nextQuery, onApiResponse);
 *   }
 * }
 *
 * index.getDocuments({
 *   autoPaginate: false
 * }, onApiResponse);
 *
 * //-
 * // Get the documents as a readable object stream.
 * //-
 * index.getDocuments()
 *   .on('error', console.error)
 *   .on('data', function(document) {
 *     // document is a Document object.
 *   })
 *   .on('end', function() {
 *     // All documents retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * index.getDocuments()
 *   .on('data', function(document) {
 *     this.end();
 *   });
 */
Index.prototype.getDocuments = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  this.request({
    uri: '/documents',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    var documents = arrify(resp.documents)
      .map(self.documentFromObject_.bind(self));

    callback(null, documents, nextQuery, resp);
  });
};

/**
 * Run a query against the documents in this index.
 *
 * @resource [Indexes: search API Documentation]{@link https://cloud.google.com/search/reference/rest/v1/projects/indexes/search}
 *
 * @throws {error} If a query string or object isn't provided.
 *
 * @param {string|object} query - A query object or simply a string query.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {string} query.pageSize - The maximum number of documents to return
 *     per page. If not specified, 100 documents are returned per page.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {string} query.query = A query string using the syntax described by
 *     the [official docs](https://goo.gl/2SYl3S).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:search/document[]} callback.documents - A list of Documents
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var query = 'person:stephen';
 *
 * index.search(query, function(err, documents) {
 *   if (!err) {
 *     // `documents` is an array of Document objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function onApiResponse(err, documents, nextQuery, apiResponse) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *
 *   // `documents` is an array of Document objects.
 *
 *   if (nextQuery) {
 *     index.search(nextQuery, onApiResponse);
 *   }
 * }
 *
 * index.search({
 *   autoPaginate: false,
 *   query: query
 * }, onApiResponse);
 *
 * //-
 * // Get the documents that match your query as a readable object stream.
 * //-
 * index.search(query)
 *   .on('error', console.error)
 *   .on('data', function(document) {
 *     // document is a Document object.
 *   })
 *   .on('end', function() {
 *     // All search results retrieved.
 *   });
 */
Index.prototype.search = function(query, callback) {
  var self = this;

  if (is.string(query)) {
    query = {
      query: query
    };
  }

  if (!is.object(query)) {
    throw new Error('A query must be either a string or object.');
  }

  this.request({
    uri: '/search',
    qs: query,
    useQuerystring: true // See #986.
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    var documents = arrify(resp.results)
      .map(self.documentFromObject_.bind(self));

    callback(null, documents, nextQuery, resp);
  });
};

/**
 * Convert an object to a {module:search/document} object.
 *
 * @private
 *
 * @param {object} documentObj - Object describing a document.
 * @param {object} documentObj.fields - Fields the document contains.
 * @param {number=} documentObj.rank - The rank of the document.
 * @return {module:search/document}
 *
 * @example
 * var documentObject = {
 *   docId: 'new-document-id',
 *   fields: {
 *     person: {
 *       values: [
 *         {
 *           stringFormat: 'TEXT',
 *           stringValue: 'Stephen'
 *         }
 *       ]
 *     }
 *   }
 * };
 *
 * var document = index.documentFromObject_(documentObject);
 * // document is a {module:search/document} object.
 */
Index.prototype.documentFromObject_ = function(documentObj) {
  var document = this.document(documentObj.docId);

  if (is.object(documentObj.fields)) {
    document.fields = documentObj.fields;
  }

  if (is.number(documentObj.rank)) {
    document.rank = documentObj.rank;
  }

  return document;
};

/*! Developer Documentation
 *
 * {module:search/index#getDocuments} and {module:search/index#search} can be
 * used with either a callback or as a readable object stream. `streamRouter` is
 * used to add this dual behavior to these methods.
 */
streamRouter.extend(Index, ['getDocuments', 'search']);

module.exports = Index;
