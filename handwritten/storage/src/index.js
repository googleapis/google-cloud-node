/**
 * Copyright 2014-2017 Google Inc. All Rights Reserved.
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
var common = require('@google-cloud/common');
var extend = require('extend');
var util = require('util');

var Bucket = require('./bucket.js');
var Channel = require('./channel.js');
var File = require('./file.js');

/**
 * @typedef {object} ClientConfig
 * @property {string} [projectId] The project ID from the Google Developer's
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application Application Default Credentials},
 *     your project ID will be detected automatically.
 * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
 *     downloaded from the Google Developers Console. If you provide a path to a
 *     JSON file, the `projectId` option above is not necessary. NOTE: .pem and
 *     .p12 require you to specify the `email` option as well.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {boolean} [autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @property {number} [maxRetries=3] Maximum number of automatic retries
 *     attempted before returning the error.
 * @property {Constructor} [promise] Custom promise module to use instead of
 *     native Promises.
 */

/*! Developer Documentation
 *
 * Invoke this method to create a new Storage object bound with pre-determined
 * configuration options. For each object that can be created (e.g., a bucket),
 * there is an equivalent static and instance method. While they are classes,
 * they can be instantiated without use of the `new` keyword.
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
 * @see [Cloud Storage overview]{@link https://cloud.google.com/storage/docs/overview}
 * @see [Access Control]{@link https://cloud.google.com/storage/docs/access-control}
 *
 * @class
 * @hideconstructor
 *
 * @example <caption>Create a client that uses Application Default Credentials (ADC)</caption>
 * var storage = require('@google-cloud/storage')();
 *
 * @example <caption>Create a client with explicit credentials</caption>
 * var storage = require('@google-cloud/storage')({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @param {ClientConfig} [options] Configuration options.
 */
function Storage(options) {
  if (!(this instanceof Storage)) {
    return new Storage(options);
  }

  options = common.util.normalizeArguments(this, options);

  var config = {
    baseUrl: 'https://www.googleapis.com/storage/v1',
    projectIdRequired: false,
    scopes: [
      'https://www.googleapis.com/auth/iam',
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/devstorage.full_control',
    ],
    packageJson: require('../package.json'),
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
 * @see [About Access Control Lists]{@link https://cloud.google.com/storage/docs/access-control/lists}
 *
 * @name Storage.acl
 * @type {object}
 * @property {string} OWNER_ROLE
 * @property {string} READER_ROLE
 * @property {string} WRITER_ROLE
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var albums = storage.bucket('albums');
 *
 * //-
 * // Make all of the files currently in a bucket publicly readable.
 * //-
 * var options = {
 *   entity: 'allUsers',
 *   role: storage.acl.READER_ROLE
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
 *   role: storage.acl.OWNER_ROLE
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
  WRITER_ROLE: 'WRITER',
};

/**
 * Reference to {@link Storage.acl}.
 *
 * @name Storage#acl
 * @see Storage.acl
 */
Storage.prototype.acl = Storage.acl;

/**
 * Get a reference to a Cloud Storage bucket.
 *
 * @param {string} name Name of the bucket.
 * @param {object} [options] Configuration object.
 * @param {string} [options.userProject] User project to be billed for all
 *     requests made from this Bucket object.
 * @returns {Bucket}
 * @see Bucket
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var albums = storage.bucket('albums');
 * var photos = storage.bucket('photos');
 */
Storage.prototype.bucket = function(name, options) {
  if (!name) {
    throw new Error('A bucket name is needed to use Cloud Storage.');
  }

  return new Bucket(this, name, options);
};

/**
 * Reference a channel to receive notifications about changes to your bucket.
 *
 * @param {string} id The ID of the channel.
 * @param {string} resourceId The resource ID of the channel.
 * @returns {Channel}
 * @see Channel
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var channel = storage.channel('id', 'resource-id');
 */
Storage.prototype.channel = function(id, resourceId) {
  return new Channel(this, id, resourceId);
};

/**
 * Metadata to set for the bucket.
 *
 * @typedef {object} CreateBucketRequest
 * @property {boolean} [coldline=false] Specify the storage class as Coldline.
 * @property {boolean} [dra=false] Specify the storage class as Durable Reduced
 *     Availability.
 * @property {boolean} [multiRegional=false] Specify the storage class as
 *     Multi-Regional.
 * @property {boolean} [nearline=false] Specify the storage class as Nearline.
 * @property {boolean} [regional=false] Specify the storage class as Regional.
 * @property {boolean} [requesterPays=false] **Early Access Testers Only**
 *     Force the use of the User Project metadata field to assign operational
 *     costs when an operation is made on a Bucket and its objects.
 * @property {string} [userProject] The ID of the project which will be billed
 *     for the request.
 */
/**
 * @typedef {array} CreateBucketResponse
 * @property {Bucket} 0 The new {@link Bucket}.
 * @property {object} 1 The full API response.
 */
/**
 * @callback CreateBucketCallback
 * @param {?Error} err Request error, if any.
 * @param {Bucket} bucket The new {@link Bucket}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Create a bucket.
 *
 * Cloud Storage uses a flat namespace, so you can't create a bucket with
 * a name that is already in use. For more information, see
 * [Bucket Naming Guidelines](https://cloud.google.com/storage/docs/bucketnaming.html#requirements).
 *
 * @see [Buckets: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/insert}
 * @see [Storage Classes]{@link https://cloud.google.com/storage/docs/storage-classes}
 *
 * @param {string} name Name of the bucket to create.
 * @param {CreateBucketRequest} [metadata] Metadata to set for the bucket.
 * @param {CreateBucketCallback} [callback] Callback function.
 * @returns {Promise<CreateBucketResponse>}
 * @throws {Error} If a name is not provided.
 * @see Bucket#create
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var callback = function(err, bucket, apiResponse) {
 *   // `bucket` is a Bucket object.
 * };
 *
 * storage.createBucket('new-bucket', callback);
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * storage.createBucket('new-bucket').then(function(data) {
 *   var bucket = data[0];
 *   var apiResponse = data[1];
 * });
 *
 * @example <caption>include:samples/buckets.js</caption>
 * region_tag:storage_create_bucket
 * Another example:
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
    name: name,
  });

  var storageClasses = {
    coldline: 'COLDLINE',
    dra: 'DURABLE_REDUCED_AVAILABILITY',
    multiRegional: 'MULTI_REGIONAL',
    nearline: 'NEARLINE',
    regional: 'REGIONAL',
  };

  Object.keys(storageClasses).forEach(function(storageClass) {
    if (body[storageClass]) {
      body.storageClass = storageClasses[storageClass];
      delete body[storageClass];
    }
  });

  if (body.requesterPays) {
    body.billing = {
      requesterPays: body.requesterPays,
    };
    delete body.requesterPays;
  }

  var query = {
    project: this.projectId,
  };

  if (body.userProject) {
    query.userProject = body.userProject;
    delete body.userProject;
  }

  this.request(
    {
      method: 'POST',
      uri: '/b',
      qs: query,
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      var bucket = self.bucket(name);
      bucket.metadata = resp;

      callback(null, bucket, resp);
    }
  );
};

/**
 * Query object for listing buckets.
 *
 * @typedef {object} GetBucketsRequest
 * @property {boolean} [autoPaginate=true] Have pagination handled
 *     automatically.
 * @property {number} [maxApiCalls] Maximum number of API calls to make.
 * @property {number} [maxResults] Maximum number of items plus prefixes to
 *     return.
 * @property {string} [pageToken] A previously-returned page token
 *     representing part of the larger set of results to view.
 * @property {string} [userProject] The ID of the project which will be billed
 *     for the request.
 */
/**
 * @typedef {array} GetBucketsResponse
 * @property {Bucket[]} 0 Array of {@link Bucket} instances.
 */
/**
 * @callback GetBucketsCallback
 * @param {?Error} err Request error, if any.
 * @param {Bucket[]} buckets Array of {@link Bucket} instances.
 */
/**
 * Get Bucket objects for all of the buckets in your project.
 *
 * @see [Buckets: list API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/list}
 *
 * @param {GetBucketsRequest} [query] Query object for listing buckets.
 * @param {GetBucketsCallback} [callback] Callback function.
 * @returns {Promise<GetBucketsResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * storage.getBuckets(function(err, buckets) {
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
 * };
 *
 * storage.getBuckets({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * storage.getBuckets().then(function(data) {
 *   var buckets = data[0];
 * });
 *
 * @example <caption>include:samples/buckets.js</caption>
 * region_tag:storage_list_buckets
 * Another example:
 */
Storage.prototype.getBuckets = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  query.project = query.project || this.projectId;

  this.request(
    {
      uri: '/b',
      qs: query,
    },
    function(err, resp) {
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
        nextQuery = extend({}, query, {pageToken: resp.nextPageToken});
      }

      callback(null, buckets, nextQuery, resp);
    }
  );
};

/**
 * Get {@link Bucket} objects for all of the buckets in your project as
 * a readable object stream.
 *
 * @method Storage#getBucketsStream
 * @param {GetBucketsRequest} [query] Query object for listing buckets.
 * @returns {ReadableStream} A readable stream that emits {@link Bucket} instances.
 *
 * @example
 * storage.getBucketsStream()
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
 * storage.getBucketsStream()
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
  exclude: ['bucket', 'channel'],
});

/**
 * {@link Bucket} class.
 *
 * @name Storage.Bucket
 * @see Bucket
 * @type {Constructor}
 */
Storage.Bucket = Bucket;

/**
 * {@link Channel} class.
 *
 * @name Storage.Channel
 * @see Channel
 * @type {Constructor}
 */
Storage.Channel = Channel;

/**
 * {@link File} class.
 *
 * @name Storage.File
 * @see File
 * @type {Constructor}
 */
Storage.File = File;

/**
 * The default export of the `@google-cloud/storage` package is the
 * {@link Storage} class, which also serves as a factory function which produces
 * {@link Storage} instances.
 *
 * See {@link Storage} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {Storage} @google-cloud/storage
 * @alias nodejs-storage
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/storage
 *
 * @example <caption>Import the client library</caption>
 * var Storage = require('@google-cloud/storage');
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * var storage = Storage();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * var storage = Storage({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:storage_quickstart
 * Full quickstart example:
 */
module.exports = Storage;
