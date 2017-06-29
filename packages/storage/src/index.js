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

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var util = require('util');

/**
 * @type {module:storage/bucket}
 * @private
 */
var Bucket = require('./bucket.js');

/**
 * @type {module:storage/channel}
 * @private
 */
var Channel = require('./channel.js');

/**
 * @type {module:storage/file}
 * @private
 */
var File = require('./file.js');

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
 * <h4>ACLs</h4>
 * Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share files with other users
 * and allow other users to access your buckets and files.
 *
 * To learn more about ACLs, read this overview on
 * [Access Control](https://cloud.google.com/storage/docs/access-control).
 *
 * @alias module:storage
 * @constructor
 *
 * @resource [Cloud Storage overview]{@link https://cloud.google.com/storage/docs/overview}
 * @resource [Access Control]{@link https://cloud.google.com/storage/docs/access-control}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Storage(options) {
  if (!(this instanceof Storage)) {
    options = common.util.normalizeArguments(this, options);
    return new Storage(options);
  }

  var config = {
    baseUrl: 'https://www.googleapis.com/storage/v1',
    projectIdRequired: false,
    scopes: [
      'https://www.googleapis.com/auth/devstorage.full_control'
    ],
    packageJson: require('../package.json')
  };

  common.Service.call(this, config, options);
}

util.inherits(Storage, common.Service);

/**
 * Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share objects with other
 * users and allow other users to access your buckets and objects.
 *
 * This object provides constants to refer to the three permission levels that
 * can be granted to an entity:
 *
 *   - `gcs.acl.OWNER_ROLE` - ("OWNER")
 *   - `gcs.acl.READER_ROLE` - ("READER")
 *   - `gcs.acl.WRITER_ROLE` - ("WRITER")
 *
 * @resource [About Access Control Lists]{@link https://cloud.google.com/storage/docs/access-control/lists}
 *
 * @type {object}
 *
 * @example
 * var albums = gcs.bucket('albums');
 *
 * //-
 * // Make all of the files currently in a bucket publicly readable.
 * //-
 * var options = {
 *   entity: 'allUsers',
 *   role: gcs.acl.READER_ROLE
 * };
 *
 * albums.acl.add(options, function(err, aclObject) {});
 *
 * //-
 * // Make any new objects added to a bucket publicly readable.
 * //-
 * albums.acl.default.add(options, function(err, aclObject) {});
 *
 * //-
 * // Grant a user ownership permissions to a bucket.
 * //-
 * albums.acl.add({
 *   entity: 'user-useremail@example.com',
 *   role: gcs.acl.OWNER_ROLE
 * }, function(err, aclObject) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * albums.acl.add(options).then(function(data) {
 *   var aclObject = data[0];
 *   var apiResponse = data[1];
 * });
 */
Storage.acl = {
  OWNER_ROLE: 'OWNER',
  READER_ROLE: 'READER',
  WRITER_ROLE: 'WRITER'
};

Storage.prototype.acl = Storage.acl;

/**
 * Get a reference to a Cloud Storage bucket.
 *
 * @param {object|string} name - Name of the bucket.
 * @return {module:storage/bucket}
 *
 * @example
 * var albums = gcs.bucket('albums');
 * var photos = gcs.bucket('photos');
 */
Storage.prototype.bucket = function(name) {
  if (!name) {
    throw new Error('A bucket name is needed to use Cloud Storage.');
  }

  return new Bucket(this, name);
};

/**
 * Reference a channel to receive notifications about changes to your bucket.
 *
 * @param {string} id - The ID of the channel.
 * @param {string} resourceId - The resource ID of the channel.
 * @return {module:storage/channel}
 *
 * @example
 * var channel = gcs.channel('id', 'resource-id');
 */
Storage.prototype.channel = function(id, resourceId) {
  return new Channel(this, id, resourceId);
};

/**
 * Create a bucket.
 *
 * Cloud Storage uses a flat namespace, so you can't create a bucket with
 * a name that is already in use. For more information, see
 * [Bucket Naming Guidelines](https://cloud.google.com/storage/docs/bucketnaming.html#requirements).
 *
 * @resource [Buckets: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/insert}
 * @resource [Storage Classes]{@link https://cloud.google.com/storage/docs/storage-classes}
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - Name of the bucket to create.
 * @param {object=} metadata - Metadata to set for the bucket.
 * @param {boolean} metadata.coldline - Specify the storage class as Coldline.
 * @param {boolean} metadata.dra - Specify the storage class as Durable Reduced
 *     Availability.
 * @param {boolean} metadata.multiRegional - Specify the storage class as
 *     Multi-Regional.
 * @param {boolean} metadata.nearline - Specify the storage class as Nearline.
 * @param {boolean} metadata.regional - Specify the storage class as Regional.
 * @param {boolean} metadata.requesterPays - **Early Access Testers Only**
 *     Enable billing the requesting user's project.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/bucket} callback.bucket - The newly created Bucket.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var callback = function(err, bucket, apiResponse) {
 *   // `bucket` is a Bucket object.
 * };
 *
 * gcs.createBucket('new-bucket', callback);
 *
 * //-
 * // Create a bucket in a specific location and region. <em>See the <a
 * // href="https://cloud.google.com/storage/docs/json_api/v1/buckets/insert">
 * // Official JSON API docs</a> for complete details on the `location` option.
 * // </em>
 * //-
 * var metadata = {
 *   location: 'US-CENTRAL1',
 *   regional: true
 * };
 *
 * gcs.createBucket('new-bucket', metadata, callback);
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
 * gcs.createBucket('new-bucket', metadata, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gcs.createBucket('new-bucket').then(function(data) {
 *   var bucket = data[0];
 *   var apiResponse = data[1];
 * });
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

  var body = extend({}, metadata, {
    name: name
  });

  var storageClasses = {
    coldline: 'COLDLINE',
    dra: 'DURABLE_REDUCED_AVAILABILITY',
    multiRegional: 'MULTI_REGIONAL',
    nearline: 'NEARLINE',
    regional: 'REGIONAL'
  };

  Object.keys(storageClasses).forEach(function(storageClass) {
    if (body[storageClass]) {
      body.storageClass = storageClasses[storageClass];
      delete body[storageClass];
    }
  });

  if (body.requesterPays) {
    body.billing = {
      requesterPays: body.requesterPays
    };
    delete body.requesterPays;
  }

  this.request({
    method: 'POST',
    uri: '/b',
    qs: {
      project: this.projectId
    },
    json: body
  }, function(err, resp) {
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
 * @resource [Buckets: list API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/list}
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/bucket[]} callback.buckets - List of all buckets from
 *     your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gcs.getBuckets(function(err, buckets) {
 *   if (!err) {
 *     // buckets is an array of Bucket objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, buckets, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gcs.getBuckets(nextQuery, callback);
 *   }
 *
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   buckets[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   buckets[0].getMetadata(function(err, metadata, apiResponse) {});
 * };
 *
 * gcs.getBuckets({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gcs.getBuckets().then(function(data) {
 *   var buckets = data[0];
 * });
 */
Storage.prototype.getBuckets = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  query.project = query.project || this.projectId;

  this.request({
    uri: '/b',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var buckets = arrify(resp.items).map(function(bucket) {
      var bucketInstance = self.bucket(bucket.id);
      bucketInstance.metadata = bucket;
      return bucketInstance;
    });

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, { pageToken: resp.nextPageToken });
    }

    callback(null, buckets, nextQuery, resp);
  });
};

/**
 * Get {module:storage/bucket} objects for all of the buckets in your project as
 * a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:storage#getBuckets} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gcs.getBucketsStream()
 *   .on('error', console.error)
 *   .on('data', function(bucket) {
 *     // bucket is a Bucket object.
 *   })
 *   .on('end', function() {
 *     // All buckets retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gcs.getBucketsStream()
 *   .on('data', function(bucket) {
 *     this.end();
 *   });
 */
Storage.prototype.getBucketsStream = common.paginator.streamify('getBuckets');

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Storage, 'getBuckets');

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Storage, {
  exclude: ['bucket', 'channel']
});

Storage.Bucket = Bucket;
Storage.Channel = Channel;
Storage.File = File;

module.exports = Storage;
