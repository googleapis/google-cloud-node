/*!
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

/*!
 * @module storage
 */

'use strict';

var extend = require('extend');

/**
 * @type module:storage/bucket
 * @private
 */
var Bucket = require('./bucket.js');

/**
 * @type module:common/connection
 * @private
 */
var conn = require('../common/connection.js');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * Required scopes for Google Cloud Storage API.
 * @const {array}
 * @private
 */
var SCOPES = ['https://www.googleapis.com/auth/devstorage.full_control'];

/**
 * @const {string}
 * @private
 */
var STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';

/*! Developer Documentation
 *
 * Invoke this method to create a new Storage object bound with pre-determined
 * configuration options. For each object that can be created (e.g., a bucket),
 * there is an equivalent static and instance method. While they are classes,
 * they can be instantiated without use of the `new` keyword.
 *
 * @param {object} config - Configuration object.
 */
/**
 * To access your Cloud Storage buckets, you will use the `bucket` function
 * returned from this `storage` object.
 *
 * The example below will demonstrate the different usage patterns your app may
 * need to connect to `gcloud` and access your bucket.
 *
 * @alias module:storage
 * @constructor
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * //-
 * // From Google Compute Engine and Google App Engine.
 * //-
 *
 * // Access `storage` through the `gcloud` module directly.
 * var musicBucket = gcloud.storage.bucket('music');
 *
 * //-
 * // Elsewhere.
 * //-
 *
 * // Provide configuration details up-front.
 * var myProject = gcloud({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var albums = myProject.storage.bucket('albums');
 * var photos = myProject.storage.bucket('photos');
 *
 *
 * // Override default configuration details.
 * var storage = myProject.storage({
 *   keyFilename: '/path/to/another/keyfile.json'
 * });
 * var records = storage.bucket('records');
 */
function Storage(config) {
  if (!(this instanceof Storage)) {
    return new Storage(config);
  }

  this.config = config || {};

  this.connection_ = new conn.Connection({
    credentials: this.config.credentials,
    keyFilename: this.config.keyFilename,
    scopes: SCOPES
  });
  this.config.connection_ = this.connection_;

  this.projectId = this.config.projectId;
}

/*! Developer Documentation
 *
 * Instance method for creating a Bucket object. Options configured at
 * instantiation of the Storage class will be passed through, allowing for
 * overridden options specified here.
 */
/**
 * Get a reference to a Google Cloud Storage bucket.
 *
 * @param {object|string} options - Name of the bucket or configuration object.
 * @param {string} options.name - The name of the existing bucket.
 * @return {module:storage/bucket}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var albums = gcloud.storage.bucket('albums');
 * var photos = gcloud.storage.bucket('photos');
 */
Storage.prototype.bucket = function(options) {
  if (util.is(options, 'string')) {
    options = {
      name: options
    };
  }
  options = options || {};
  // Mix in instance config data to the provided options.
  return new Bucket(util.extendGlobalConfig(this.config, options));
};

/**
 * Create a bucket.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - Name of the bucket to create.
 * @param {object=} metadata - Metadata to set for the bucket.
 * @param {function} callback - The callback function.
 *
 * @example
 * storage.createBucket('new-bucket', function(err, bucket) {
 *   // `bucket` is a Bucket object.
 * });
 *
 * // Specifying metadata.
 * var metadata = {
 *   mainPageSuffix: '/unknown/',
 *   maxAgeSeconds: 90
 * };
 * storage.createBucket('new-bucket', metadata, function(err, bucket) {
 *   // `bucket` is a Bucket object.
 * });
 */
Storage.prototype.createBucket = function(name, metadata, callback) {
  if (!name) {
    throw new Error('A name is required to create a bucket.');
  }
  if (!callback) {
    callback = metadata;
    metadata = {};
  }
  var query = {
    project: this.projectId
  };
  var body = extend(metadata, {
    name: name
  });
  this.makeReq_('POST', '', query, body, function(err) {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, this.bucket(name));
  }.bind(this));
};

/**
 * Get Bucket objects for all of the buckets in your project.
 *
 * @param {object=} query - Query object.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 *
 * @example
 * storage.getBuckets(function(err, buckets, nextQuery) {
 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     storage.getBuckets(nextQuery, function(err, buckets, nextQuery) {});
 *   }
 *
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   buckets[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   buckets[0].getMetadata(function(err, metadata) {});
 * });
 *
 * //-
 * // Fetch using a query.
 * //-
 * storage.getBuckets({
 *   maxResults: 5
 * }, function(err, buckets, nextQuery) {});
 */
Storage.prototype.getBuckets = function(query, callback) {
  var that = this;
  if (!callback) {
    callback = query;
    query = {};
  }
  query.project = query.project || this.projectId;
  this.makeReq_('GET', '', query, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var buckets = (resp.items || []).map(function(item) {
      var bucket = that.bucket(item.id);
      bucket.metadata = item;
      return bucket;
    });
    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, { pageToken: resp.nextPageToken });
    }
    callback(null, buckets, nextQuery);
  });
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
Storage.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: STORAGE_BASE_URL + path
  };
  if (body) {
    reqOpts.json = body;
  }
  this.connection_.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

module.exports = Storage;
