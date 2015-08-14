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
 * @module search/document
 */

'use strict';

var is = require('is');

/**
 * @type {module:search/field}
 * @private
 */
var Field = require('./field.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create a Document object to create or manipulate a document from your index.
 *
 * @constructor
 * @alias module:search/document
 *
 * @param {string=} id - ID of the document.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var search = gcloud.search({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var document = search.index('records').document('stephen');
 */
function Document(index, id) {
  this.search_ = index.search_;
  this.index_ = index;

  this.id = id;
  this.fields = {};
}

/**
 * Add a field to this document.
 *
 * @throws {error} if a name is not provided.
 *
 * @param {string} name - This field's name.
 * @return {module:search/field}
 *
 * @example
 * var scoreField = document.addField('score');
 * // scoreField is a Field object.
 */
Document.prototype.addField = function(name) {
  if (!is.string(name)) {
    throw new Error('A name is required to add a field to this document.');
  }

  this.fields[name] = new Field();

  return this.fields[name];
};

/**
 * Delete this document.
 *
 * @resource [Documents: delete API Documentation]{@link https://cloud.google.com/search/reference/rest/v1/projects/indexes/documents/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.delete(function(err, apiResponse) {});
 */
Document.prototype.delete = function(callback) {
  this.makeReq_('DELETE', '', null, null, function(err, resp) {
    (callback || util.noop)(err, resp);
  });
};

/**
 * Get the details of this document. After running, the Document instance will
 * update the `fields` and `rank` properties to their most recent values at the
 * time of this call.
 *
 * @resource [Documents: get API Documentation]{@link https://cloud.google.com/search/reference/rest/v1/projects/indexes/documents/get}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:search/document} callback.doc - The Document reference.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.getMetadata(function(err, doc, apiResponse) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *
 *   // `doc` is a reference to `document`, both of which are now up to date.
 *   //
 *   //   document.fields = Array of Field objects.
 *   //   document.rank = Document's numeric rank.
 * });
 */
Document.prototype.getMetadata = function(callback) {
  var self = this;

  callback = callback || util.noop;

  this.makeReq_('GET', '/', null, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    self.fields = {};
    delete self.rank;

    if (is.object(resp.fields)) {
      Object.keys(resp.fields).forEach(function(fieldName) {
        var fieldInstance = self.addField(fieldName);
        fieldInstance.values = resp.fields[fieldName].values;
      });
    }

    if (is.number(resp.rank)) {
      self.rank = resp.rank;
    }

    callback(null, self, resp);
  });
};

/**
 * Set the rank for this document. The rank of a document is a positive integer
 * which determines the default ordering of documents returned from a search. By
 * default, the rank is set at the time the document is created to the number of
 * seconds since January 1, 2011.
 *
 * @throws {error} If a rank is not a number.
 *
 * @param {number} rank - The rank of this document.
 *
 * @example
 * document.setRank(8);
 */
Document.prototype.setRank = function(rank) {
  if (!is.number(rank) || rank < 0) {
    throw new Error('rank should be a positive integer.');
  }

  this.rank = rank;
};

/**
 * Return just the document detail properties of this Document instance.
 *
 * @example
 * document.toJSON();
 * // {
 * //   docId: 'this-document-id',
 * //   fields: {
 * //     // ...
 * //   },
 * //   rank: 8
 * // }
 */
Document.prototype.toJSON = function() {
  var documentObject = {
    fields: this.fields
  };

  if (is.string(this.id)) {
    documentObject.docId = this.id;
  }

  if (is.number(this.rank)) {
    documentObject.rank = this.rank;
  }

  return documentObject;
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
Document.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/documents/' + this.id + path;

  this.index_.makeReq_(method, path, query, body, callback);
};

module.exports = Document;
