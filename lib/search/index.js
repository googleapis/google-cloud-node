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
 * @module search
 */

'use strict';

var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');

/**
 * @type {module:search/index}
 * @private
 */
var Index = require('./index-class.js');

/**
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {array} Required scopes for the Search API.
 * @private
 */
var SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/cloudsearch',
  'https://www.googleapis.com/auth/userinfo.email'
];

/**
 * @const {string} Base URL for the Search API.
 * @private
 */
var SEARCH_BASE_URL = 'https://cloudsearch.googleapis.com/v1/';

/**
 * Create a Search object to Interact with the Cloud Search API. Using this
 * object, you can access your indexes with {module:search/index} and documents
 * with {module:search/document}.
 *
 * Follow along with the examples to see how to do everything from creating
 * documents to searching indexes.
 *
 * @alias module:search
 * @constructor
 *
 * @param {object} options - [Configuration object](#/docs/?method=gcloud).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var search = gcloud.search();
 */
function Search(options) {
  if (!(this instanceof Search)) {
    options = util.normalizeArguments(this, options);
    return new Search(options);
  }

  this.makeAuthenticatedRequest_ = util.makeAuthenticatedRequestFactory({
    credentials: options.credentials,
    email: options.email,
    keyFile: options.keyFilename,
    scopes: SCOPES
  });

  this.projectId_ = options.projectId;
}

/**
 * Get {module:search/index} objects for all of the indexes in your project.
 *
 * @resource [Indexes: list API Documentation]{@link https://cloud.google.com/search/reference/rest/v1/projects/indexes/list}
 *
 * @param {object=} query - Query object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} query.pageSize - The maximum number of indexes to return per
 *     page. If not specified, 100 indexes are returned per page.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {string} query.prefix - The prefix of the index name. It is used to
 *     list all indexes with names that have this prefix.
 * @param {string} query.view - See [this table](https://goo.gl/sY6Lpt) for a
 *     list of accepted values and what each will do.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:search/index[]} callback.indexes - A list of Indexes.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * search.getIndexes(function(err, indexes) {
 *   // indexes is an array of Index objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function onApiResponse(err, indexes, nextQuery, apiResponse) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *
 *   // indexes is an array of Index objects.
 *
 *   if (nextQuery) {
 *     search.getIndexes(nextQuery, onApiResponse);
 *   }
 * }
 *
 * search.getIndexes({
 *   autoPaginate: false
 * }, onApiResponse);
 *
 * //-
 * // Get the indexes as a readable object stream.
 * //-
 * search.getIndexes()
 *   .on('error', console.error)
 *   .on('data', function(index) {
 *     // index is an Index object.
 *   })
 *   .on('end', function() {
 *     // All indexes retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * search.getIndexes()
 *   .on('data', function(index) {
 *     this.end();
 *   });
 */
Search.prototype.getIndexes = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  query = extend({}, query);

  if (query.prefix) {
    query.indexNamePrefix = query.prefix;
    delete query.prefix;
  }

  this.makeReq_('GET', '/indexes', query, null, function(err, resp) {
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

    var indexes = (resp.indexes || []).map(function(indexObject) {
      var index = self.index(indexObject.indexId);

      if (is.object(indexObject.indexedField)) {
        index.fields = indexObject.indexedField;
      }

      return index;
    });

    callback(null, indexes, nextQuery, resp);
  });
};

/**
 * Get a reference to a Google Cloud Search index.
 *
 * @param {string} id - Name of the index.
 * @return {module:search/index}
 */
Search.prototype.index = function(id) {
  return new Index(this, id);
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Search.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: format('{base}projects/{projectId}{path}', {
      base: SEARCH_BASE_URL,
      projectId: this.projectId_,
      path: path
    })
  };

  if (body) {
    reqOpts.json = body;
  }

  this.makeAuthenticatedRequest_(reqOpts, callback);
};

/*! Developer Documentation
 *
 * {module:search#getIndexes} can be used with either a callback or as a
 * readable object stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Search, 'getIndexes');

module.exports = Search;
