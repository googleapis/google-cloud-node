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
 * @type {module:storage/bucket}
 * @private
 */
var Bucket = require('./bucket.js');

/**
 * @type {module:common/util}
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
 * @param {object} options - Configuration object.
 */
/**
 * To access your Cloud Storage buckets, you will use the `bucket` function
 * returned from this `storage` object.
 *
 * The examples below will demonstrate the different usage patterns your app may
 * need to connect to `gcloud` and access your bucket.
 *
 * @alias module:storage
 * @constructor
 *
 * @param {object} options - [Configuration object](#/docs/?method=gcloud).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var storage = myProject.storage();
 */
function Storage(options) {
  if (!(this instanceof Storage)) {
    return new Storage(options);
  }

  options = options || {};

  this.makeAuthorizedRequest_ = util.makeAuthorizedRequestFactory({
    credentials: options.credentials,
    keyFile: options.keyFilename,
    scopes: SCOPES,
    email: options.email
  });

  this.projectId = options.projectId;
}

/**
 * Google Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share objects with other
 * users and allow other users to access your buckets and objects.
 *
 * This object provides constants to refer to the three permission levels that
 * can be granted to a scope:
 *
 *   - `storage.acl.OWNER_ROLE` - ("OWNER")
 *   - `storage.acl.READER_ROLE` - ("READER")
 *   - `storage.acl.WRITER_ROLE` - ("WRITER")
 *
 * For more detailed information, see
 * [About Access Control Lists](http://goo.gl/6qBBPO).
 *
 * @type {object}
 *
 * @example
 * var storage = gcloud.storage();
 * var albums = storage.bucket('albums');
 *
 * //-
 * // Make all of the files currently in a bucket publicly readable.
 * //-
 * albums.acl.add({
 *   scope: 'allUsers',
 *   permission: storage.acl.READER_ROLE
 * }, function(err, aclObject) {});
 *
 * //-
 * // Make any new objects added to a bucket publicly readable.
 * //-
 * albums.acl.default.add({
 *   scope: 'allUsers',
 *   permission: storage.acl.READER_ROLE
 * }, function(err, aclObject) {});
 *
 * //-
 * // Grant a user ownership permissions to a bucket.
 * //-
 *
 * albums.acl.add({
 *   scope: 'user-useremail@example.com',
 *   permission: storage.acl.OWNER_ROLE
 * }, function(err, aclObject) {});
 */
Storage.acl = {
  OWNER_ROLE: 'OWNER',
  READER_ROLE: 'READER',
  WRITER_ROLE: 'WRITER'
};

Storage.prototype.acl = Storage.acl;

/**
 * Get a reference to a Google Cloud Storage bucket.
 *
 * @param {object|string} name - Name of the existing bucket.
 * @return {module:storage/bucket}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var storage = gcloud.storage();
 *
 * var albums = storage.bucket('albums');
 * var photos = storage.bucket('photos');
 */
Storage.prototype.bucket = function(name) {
  return new Bucket(this, name);
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
 * var callback = function(err, bucket, apiResponse) {
 *   // `bucket` is a Bucket object.
 * };
 *
 * storage.createBucket('new-bucket', callback);
 *
 * //-
 * // Specify metadata.
 * //-
 * var metadata = {
 *   mainPageSuffix: '/unknown/',
 *   maxAgeSeconds: 90
 * };
 *
 * storage.createBucket('new-bucket', metadata, callback);
 *
 * //-
 * // Enable versioning on a new bucket.
 * //-
 * var metadata = {
 *   versioning: {
 *     enabled: true
 *   }
 * };
 *
 * storage.createBucket('new-bucket', metadata, callback);
 */
Storage.prototype.createBucket = function(name, metadata, callback) {
  var self = this;
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

  this.makeReq_('POST', '', query, body, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }
    var bucket = self.bucket(name);
    bucket.metadata = resp;
    callback(null, bucket, resp);
  });
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
 *     var callback = function(err, buckets, nextQuery, apiResponse){};
 *     storage.getBuckets(nextQuery, callback);
 *   }
 *
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   buckets[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   buckets[0].getMetadata(function(err, metadata, apiResponse) {});
 * });
 *
 * //-
 * // Fetch using a query.
 * //-
 * storage.getBuckets({
 *   maxResults: 5
 * }, function(err, buckets, nextQuery, apiResponse) {});
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
      callback(err, null, null, resp);
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
    callback(null, buckets, nextQuery, resp);
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

  this.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = Storage;
