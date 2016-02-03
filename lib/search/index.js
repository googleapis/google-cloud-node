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
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:search/index}
 * @private
 */
var Index = require('./index-class.js');

/**
 * @type {module:common/service}
 * @private
 */
var Service = require('../common/service.js');

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
 * Create a Search object to interact with the Cloud Search API. Using this
 * object, you can access your indexes with {module:search/index} and documents
 * with {module:search/document}.
 *
 * Follow along with the examples to see how to do everything from creating
 * documents to searching indexes.
 *
 * <strong>
 *   If you are not a tester, official documentation is unavailable.
 * </strong>
 *
 * @alias module:search
 * @constructor
 *
 * @classdesc
 * <p class="notice">
 *   **This is an Alpha release of Google Cloud Search.** This feature is not
 *   covered by any SLA or deprecation policy and may be subject to
 *   backward-incompatible changes.
 * </p>
 *
 * The object returned from `gcloud.search` gives you complete access to store
 * your documents and search your indexes.
 *
 * To learn more about Search, see
 * [What is Google Cloud Search?](https://cloud.google.com/search) *If you are
 * not a tester, this documentation is unavailable.*
 *
 * @param {object} options - [Configuration object](#/docs).
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

  var config = {
    baseUrl: 'https://cloudsearch.googleapis.com/v1',
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloudsearch',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  };

  Service.call(this, config, options);
}

nodeutil.inherits(Search, Service);

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

  this.request({
    uri: '/indexes',
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
  if (!id) {
    throw new Error('An ID is needed to access a Google Cloud Search index.');
  }

  return new Index(this, id);
};

/*! Developer Documentation
 *
 * {module:search#getIndexes} can be used with either a callback or as a
 * readable object stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Search, 'getIndexes');

module.exports = Search;
