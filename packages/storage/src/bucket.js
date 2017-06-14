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
 * @module storage/bucket
 */

'use strict';

var arrify = require('arrify');
var async = require('async');
var common = require('@google-cloud/common');
var extend = require('extend');
var fs = require('fs');
var is = require('is');
var mime = require('mime-types');
var path = require('path');
var util = require('util');

/**
 * @type {module:storage/acl}
 * @private
 */
var Acl = require('./acl.js');

/**
 * @type {module:storage/file}
 * @private
 */
var File = require('./file.js');

/**
 * @type {module:storage/iam}
 * @private
 */
var Iam = require('./iam.js');

/**
 * The size of a file (in bytes) must be greater than this number to
 * automatically trigger a resumable upload.
 *
 * @const {number}
 * @private
 */
var RESUMABLE_THRESHOLD = 5000000;

/**
 * Create a Bucket object to interact with a Cloud Storage bucket.
 *
 * @constructor
 * @alias module:storage/bucket
 *
 * @param {object} options - Configuration options.
 * @param {string} options.bucketName - Name of the bucket.
 * @param {string=} options.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} options.credentials - Credentials object, used in place of
 *     a `keyFilename`.
 *
 * @example
 * var bucket = gcs.bucket('albums');
 */
function Bucket(storage, name) {
  var methods = {
    /**
     * Create a bucket.
     *
     * @param {object=} config - See {module:storage#createBucket}.
     *
     * @example
     * bucket.create(function(err, zone, apiResponse) {
     *   if (!err) {
     *     // The zone was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.create().then(function(data) {
     *   var zone = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,

    /**
     * Delete the bucket.
     *
     * @resource [Buckets: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/delete}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * bucket.delete(function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    delete: true,

    /**
     * Check if the bucket exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the bucket exists or not.
     *
     * @example
     * bucket.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a bucket if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * bucket.get(function(err, bucket, apiResponse) {
     *   // `bucket.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.get().then(function(data) {
     *   var bucket = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the bucket's metadata.
     *
     * To set metadata, see {module:storage/bucket#setMetadata}.
     *
     * @resource [Buckets: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The bucket's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * bucket.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true,

    /**
     * Set the bucket's metadata.
     *
     * @resource [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
     *
     * @param {object} metadata - The metadata you wish to set.
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * //-
     * // Set website metadata field on the bucket.
     * //-
     * var metadata = {
     *   website: {
     *     mainPageSuffix: 'http://example.com',
     *     notFoundPage: 'http://example.com/404.html'
     *   }
     * };
     *
     * bucket.setMetadata(metadata, function(err, apiResponse) {});
     *
     * //-
     * // Enable versioning for your bucket.
     * //-
     * bucket.setMetadata({
     *   versioning: {
     *     enabled: true
     *   }
     * }, function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.setMetadata(metadata).then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    setMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: storage,
    baseUrl: '/b',
    id: name,
    createMethod: storage.createBucket.bind(storage),
    methods: methods
  });

  this.name = name;
  this.storage = storage;

  /**
   * Cloud Storage uses access control lists (ACLs) to manage object and
   * bucket access. ACLs are the mechanism you use to share objects with other
   * users and allow other users to access your buckets and objects.
   *
   * An ACL consists of one or more entries, where each entry grants permissions
   * to an entity. Permissions define the actions that can be performed against
   * an object or bucket (for example, `READ` or `WRITE`); the entity defines
   * who the permission applies to (for example, a specific user or group of
   * users).
   *
   * The `acl` object on a Bucket instance provides methods to get you a list of
   * the ACLs defined on your bucket, as well as set, update, and delete them.
   *
   * Buckets also have
   * [default ACLs](https://cloud.google.com/storage/docs/access-control/lists#default)
   * for all created files. Default ACLs specify permissions that all new
   * objects added to the bucket will inherit by default. You can add, delete,
   * get, and update entities and permissions for these as well with
   * {module:storage/bucket#acl.default}.
   *
   * @resource [About Access Control Lists]{@link http://goo.gl/6qBBPO}
   * @resource [Default ACLs]{@link https://cloud.google.com/storage/docs/access-control/lists#default}
   *
   * @mixes module:storage/acl
   *
   * @example
   * //-
   * // Make a bucket's contents publicly readable.
   * //-
   * var myBucket = gcs.bucket('my-bucket');
   *
   * var options = {
   *   entity: 'allUsers',
   *   role: gcs.acl.READER_ROLE
   * };
   *
   * myBucket.acl.add(options, function(err, aclObject) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * myBucket.acl.add(options).then(function(data) {
   *   var aclObject = data[0];
   *   var apiResponse = data[1];
   * });
   */
  this.acl = new Acl({
    request: this.request.bind(this),
    pathPrefix: '/acl'
  });

  /**
   * Cloud Storage Buckets have [default ACLs](https://cloud.google.com/storage/docs/access-control/lists#default)
   * for all created files. You can add, delete, get, and update entities and
   * permissions for these as well. The method signatures and examples are all
   * the same, after only prefixing the method call with `default`.
   *
   * @mixes module:storage/acl
   * @alias acl.default
   */
  this.acl.default = new Acl({
    request: this.request.bind(this),
    pathPrefix: '/defaultObjectAcl'
  });

  /**
   * Get and set IAM policies for your bucket.
   *
   * @mixes module:storage/iam
   *
   * @resource [Cloud Storage IAM Management](https://cloud.google.com/storage/docs/access-control/iam#short_title_iam_management)
   * @resource [Granting, Changing, and Revoking Access](https://cloud.google.com/iam/docs/granting-changing-revoking-access)
   * @resource [IAM Roles](https://cloud.google.com/iam/docs/understanding-roles)
   *
   * @example
   * //-
   * // Get the IAM policy for your bucket.
   * //-
   * bucket.iam.getPolicy(function(err, policy) {
   *   console.log(policy);
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.iam.getPolicy().then(function(data) {
   *   var policy = data[0];
   *   var apiResponse = data[1];
   * });
   */
  this.iam = new Iam(this);
}

util.inherits(Bucket, common.ServiceObject);

/**
 * Combine multiple files into one new file.
 *
 * @resource [Objects: compose API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/compose}
 *
 * @throws {Error} if a non-array is provided as sources argument.
 * @throws {Error} if less than two sources are provided.
 * @throws {Error} if no destination is provided.
 * @throws {Error} if content type can't be determined for the destination file.
 *
 * @param {string[]|module:storage/file} sources - The source files that will be
 *     combined.
 * @param {string|module:storage/file} destination - The file you would like the
 *     source files combined into.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/file} callback.newFile - The combined file.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var logBucket = gcs.bucket('log-bucket');
 *
 * var sources = [
 *   logBucket.file('2013-logs.txt'),
 *   logBucket.file('2014-logs.txt')
 * ];
 *
 * var allLogs = logBucket.file('all-logs.txt');
 *
 * logBucket.combine(sources, allLogs, function(err, newFile, apiResponse) {
 *   // newFile === allLogs
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * logBucket.combine(sources, allLogs).then(function(data) {
 *   var newFile = data[0];
 *   var apiResponse = data[1];
 * });
 */
Bucket.prototype.combine = function(sources, destination, callback) {
  if (!is.array(sources) || sources.length < 2) {
    throw new Error('You must provide at least two source files.');
  }

  if (!destination) {
    throw new Error('A destination file must be specified.');
  }

  var self = this;

  sources = sources.map(convertToFile);
  destination = convertToFile(destination);
  callback = callback || common.util.noop;

  if (!destination.metadata.contentType) {
    var destinationContentType = mime.contentType(destination.name);

    if (destinationContentType) {
      destination.metadata.contentType = destinationContentType;
    } else {
      throw new Error(
        'A content type could not be detected for the destination file.');
    }
  }

  // Make the request from the destination File object.
  destination.request({
    method: 'POST',
    uri: '/compose',
    json: {
      destination: {
        contentType: destination.metadata.contentType
      },
      sourceObjects: sources.map(function(source) {
        var sourceObject = {
          name: source.name
        };

        if (source.metadata && source.metadata.generation) {
          sourceObject.generation = source.metadata.generation;
        }

        return sourceObject;
      })
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    callback(null, destination, resp);
  });

  function convertToFile(file) {
    if (file instanceof File) {
      return file;
    }

    return self.file(file);
  }
};

/**
 * Create a channel that will be notified when objects in this bucket changes.
 *
 * @throws {Error} If an ID is not provided.
 * @throws {Error} If an address is not provided.
 *
 * @resource [Objects: watchAll API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/watchAll}
 *
 * @param {string} id - The ID of the channel to create.
 * @param {object} config - See a
 *     [Objects: watchAll request body](https://cloud.google.com/storage/docs/json_api/v1/objects/watchAll).
 * @param {string} config.address - The address where notifications are
 *     delivered for this channel.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/channel} callback.channel - The created Channel
 *     object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var id = 'new-channel-id';
 *
 * var config = {
 *   address: 'https://...'
 * };
 *
 * bucket.createChannel(id, config, function(err, channel, apiResponse) {
 *   if (!err) {
 *     // Channel created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.createChannel(id, config).then(function(data) {
 *   var channel = data[0];
 *   var apiResponse = data[1];
 * });
 */
Bucket.prototype.createChannel = function(id, config, callback) {
  var self = this;

  if (!is.string(id)) {
    throw new Error('An ID is required to create a channel.');
  }

  if (!is.string(config.address)) {
    throw new Error('An address is required to create a channel.');
  }

  this.request({
    method: 'POST',
    uri: '/o/watch',
    json: extend({
      id: id,
      type: 'web_hook'
    }, config)
  }, function(err, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }

    var resourceId = apiResponse.resourceId;
    var channel = self.storage.channel(id, resourceId);

    channel.metadata = apiResponse;

    callback(null, channel, apiResponse);
  });
};

/**
 * Iterate over the bucket's files, calling `file.delete()` on each.
 *
 * <strong>This is not an atomic request.</strong> A delete attempt will be made
 * for each file individually. Any one can fail, in which case only a portion of
 * the files you intended to be deleted would have.
 *
 * Operations are performed in parallel, up to 10 at once. The first error
 * breaks the loop and will execute the provided callback with it. Specify
 * `{ force: true }` to suppress the errors until all files have had a chance to
 * be processed.
 *
 * The `query` object passed as the first argument will also be passed to
 * {module:storage/bucket#getFiles}.
 *
 * @resource [Objects: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/delete}
 *
 * @param {object=} query - Query object. See {module:storage/bucket#getFiles}
 *     for all of the supported properties.
 * @param {boolean} query.force - Suppress errors until all files have been
 *     processed.
 * @param {function} callback - The callback function.
 * @param {?error|?error[]} callback.err - An API error or array of errors from
 *     files that were not able to be deleted.
 *
 * @example
 * //-
 * // Delete all of the files in the bucket.
 * //-
 * bucket.deleteFiles(function(err) {});
 *
 * //-
 * // By default, if a file cannot be deleted, this method will stop deleting
 * // files from your bucket. You can override this setting with `force: true`.
 * //-
 * bucket.deleteFiles({
 *   force: true
 * }, function(errors) {
 *   // `errors`:
 *   //    Array of errors if any occurred, otherwise null.
 * });
 *
 * //-
 * // The first argument to this method acts as a query to
 * // {module:storage/bucket#getFiles}. As an example, you can delete files
 * // which match a prefix.
 * //-
 * bucket.deleteFiles({
 *   prefix: 'images/'
 * }, function(err) {
 *   if (!err) {
 *     // All files in the `images` directory have been deleted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.deleteFiles().then(function() {});
 */
Bucket.prototype.deleteFiles = function(query, callback) {
  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  query = query || {};

  var MAX_PARALLEL_LIMIT = 10;
  var errors = [];

  this.getFiles(query, function(err, files) {
    if (err) {
      callback(err);
      return;
    }

    function deleteFile(file, callback) {
      file.delete(function(err) {
        if (err) {
          if (query.force) {
            errors.push(err);
            callback();
            return;
          }

          callback(err);
          return;
        }

        callback();
      });
    }

    // Iterate through each file and attempt to delete it.
    async.eachLimit(files, MAX_PARALLEL_LIMIT, deleteFile, function(err) {
      if (err || errors.length > 0) {
        callback(err || errors);
        return;
      }

      callback();
    });
  });
};


/**
 * Delete one or more labels from this bucket.
 *
 * @param {string=|string[]=} labels - The labels to delete. If no labels are
 *     provided, all of the labels are removed.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The bucket's metadata.
 *
 * @example
 * //-
 * // Delete all of the labels from this bucket.
 * //-
 * bucket.deleteLabels(function(err, metadata) {});
 *
 * //-
 * // Delete a single label.
 * //-
 * bucket.deleteLabels('label', function(err, metadata) {});
 *
 * //-
 * // Delete a specific set of labels.
 * //-
 * bucket.deleteLabels(['label', 'labeltwo'], function(err, metadata) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.deleteLabels().then(function(data) {
 *   var metadata = data[0];
 * });
 */
Bucket.prototype.deleteLabels = function(labels, callback) {
  var self = this;

  if (is.fn(labels)) {
    callback = labels;
    labels = [];
  }

  labels = arrify(labels);

  if (labels.length === 0) {
    this.getLabels(function(err, labels) {
      if (err) {
        callback(err);
        return;
      }

      deleteLabels(Object.keys(labels));
    });
  } else {
    deleteLabels(labels);
  }

  function deleteLabels(labels) {
    var nullLabelMap = labels.reduce(function(nullLabelMap, labelKey) {
      nullLabelMap[labelKey] = null;
      return nullLabelMap;
    }, {});

    self.setLabels(nullLabelMap, callback);
  }
};

/**
 * Create a File object. See {module:storage/file} to see how to handle
 * the different use cases you may have.
 *
 * @param {string} name - The name of the file in this bucket.
 * @param {object=} options - Configuration options.
 * @param {string|number} options.generation - Only use a specific revision of
 *     this file.
 * @param {string} options.key - A custom encryption key. See
 *     [Customer-supplied Encryption Keys](https://cloud.google.com/storage/docs/encryption#customer-supplied).
 * @return {module:storage/file}
 *
 * @example
 * var file = bucket.file('my-existing-file.png');
 */
Bucket.prototype.file = function(name, options) {
  if (!name) {
    throw Error('A file name must be specified.');
  }

  return new File(this, name, options);
};

/**
 * Get File objects for the files currently in the bucket.
 *
 * @resource [Objects: list API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/list}
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {string} query.delimiter - Results will contain only objects whose
 *     names, aside from the prefix, do not contain delimiter. Objects whose
 *     names, aside from the prefix, contain delimiter will have their name
 *     truncated after the delimiter, returned in `apiResponse.prefixes`.
 *     Duplicate prefixes are omitted.
 * @param {string} query.prefix - Filter results to objects whose names begin
 *     with this prefix.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {boolean} query.versions - If true, returns File objects scoped to
 *     their versions.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/file[]} callback.files - List of files.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * bucket.getFiles(function(err, files) {
 *   if (!err) {
 *     // files is an array of File objects.
 *   }
 * });
 *
 * //-
 * // If your bucket has versioning enabled, you can get all of your files
 * // scoped to their generation.
 * //-
 * bucket.getFiles({
 *   versions: true
 * }, function(err, files) {
 *   // Each file is scoped to its generation.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, files, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     bucket.getFiles(nextQuery, callback);
 *   }
 *
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   files[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   files[0].getMetadata(function(err, metadata) {});
 * };
 *
 * bucket.getFiles({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.getFiles().then(function(data) {
 *   var files = data[0];
 * });
 */
Bucket.prototype.getFiles = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  this.request({
    uri: '/o',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var files = arrify(resp.items).map(function(file) {
      var options = {};

      if (query.versions) {
        options.generation = file.generation;
      }

      var fileInstance = self.file(file.name, options);
      fileInstance.metadata = file;

      return fileInstance;
    });

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, files, nextQuery, resp);
  });
};

/**
 * Get {module:storage/file} objects for the files currently in the bucket as a
 * readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:storage/bucket#getFiles} for a complete list of options.
 * @return {stream}
 *
 * @example
 * bucket.getFilesStream()
 *   .on('error', console.error)
 *   .on('data', function(file) {
 *     // file is a File object.
 *   })
 *   .on('end', function() {
 *     // All files retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * bucket.getFilesStream()
 *   .on('data', function(file) {
 *     this.end();
 *   });
 */
Bucket.prototype.getFilesStream = common.paginator.streamify('getFiles');

/**
 * Get the labels from this bucket.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.labels - The labels currently set on this bucket.
 *
 * @example
 * bucket.getLabels(function(err, labels) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // labels = {
 *   //   label: 'labelValue',
 *   //   ...
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.getLabels().then(function(data) {
 *   var labels = data[0];
 * });
 */
Bucket.prototype.getLabels = function(callback) {
  this.getMetadata(function(err, metadata) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, metadata.labels || {});
  });
};

/**
 * Make the bucket listing private.
 *
 * You may also choose to make the contents of the bucket private by specifying
 * `includeFiles: true`. This will automatically run
 * {module:storage/file#makePrivate} for every file in the bucket.
 *
 * When specifying `includeFiles: true`, use `force: true` to delay execution of
 * your callback until all files have been processed. By default, the callback
 * is executed after the first error. Use `force` to queue such errors until all
 * files have been processed, after which they will be returned as an array as
 * the first argument to your callback.
 *
 * NOTE: This may cause the process to be long-running and use a high number of
 * requests. Use with caution.
 *
 * @resource [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
 *
 * @param {object=} options - The configuration object.
 * @param {boolean} options.includeFiles - Make each file in the bucket private.
 *     Default: `false`.
 * @param {boolean} options.force - Queue errors occurred while making files
 *     private until all files have been processed.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/file[]} callback.files - List of files made private.
 *
 * @example
 * //-
 * // Make the bucket private.
 * //-
 * bucket.makePrivate(function(err) {});
 *
 * //-
 * // Make the bucket and its contents private.
 * //-
 * var opts = {
 *   includeFiles: true
 * };
 *
 * bucket.makePrivate(opts, function(err, files) {
 *   // `err`:
 *   //    The first error to occur, otherwise null.
 *   //
 *   // `files`:
 *   //    Array of files successfully made private in the bucket.
 * });
 *
 * //-
 * // Make the bucket and its contents private, using force to suppress errors
 * // until all files have been processed.
 * //-
 * var opts = {
 *   includeFiles: true,
 *   force: true
 * };
 *
 * bucket.makePrivate(opts, function(errors, files) {
 *   // `errors`:
 *   //    Array of errors if any occurred, otherwise null.
 *   //
 *   // `files`:
 *   //    Array of files successfully made private in the bucket.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.makePrivate(opts).then(function(data) {
 *   var files = data[0];
 * });
 */
Bucket.prototype.makePrivate = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.private = true;

  async.series([setPredefinedAcl, makeFilesPrivate], callback);

  function setPredefinedAcl(done) {
    var query = {
      predefinedAcl: 'projectPrivate'
    };

    // You aren't allowed to set both predefinedAcl & acl properties on a bucket
    // so acl must explicitly be nullified.
    var metadata = {
      acl: null
    };

    self.request({
      method: 'PATCH',
      uri: '',
      qs: query,
      json: metadata
    }, function(err, resp) {
      if (err) {
        done(err);
        return;
      }

      self.metadata = resp;

      done();
    });
  }

  function makeFilesPrivate(done) {
    if (!options.includeFiles) {
      done();
      return;
    }

    self.makeAllFilesPublicPrivate_(options, done);
  }
};

/**
 * Make the bucket publicly readable.
 *
 * You may also choose to make the contents of the bucket publicly readable by
 * specifying `includeFiles: true`. This will automatically run
 * {module:storage/file#makePublic} for every file in the bucket.
 *
 * When specifying `includeFiles: true`, use `force: true` to delay execution of
 * your callback until all files have been processed. By default, the callback
 * is executed after the first error. Use `force` to queue such errors until all
 * files have been processed, after which they will be returned as an array as
 * the first argument to your callback.
 *
 * NOTE: This may cause the process to be long-running and use a high number of
 * requests. Use with caution.
 *
 * @resource [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
 *
 * @param {object=} options - The configuration object.
 * @param {boolean} options.includeFiles - Make each file in the bucket publicly
 *     readable. Default: `false`.
 * @param {boolean} options.force - Queue errors occurred while making files
 *     public until all files have been processed.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/file[]} callback.files - List of files made public.
 *
 * @example
 * //-
 * // Make the bucket publicly readable.
 * //-
 * bucket.makePublic(function(err) {});
 *
 * //-
 * // Make the bucket and its contents publicly readable.
 * //-
 * var opts = {
 *   includeFiles: true
 * };
 *
 * bucket.makePublic(opts, function(err, files) {
 *   // `err`:
 *   //    The first error to occur, otherwise null.
 *   //
 *   // `files`:
 *   //    Array of files successfully made public in the bucket.
 * });
 *
 * //-
 * // Make the bucket and its contents publicly readable, using force to
 * // suppress errors until all files have been processed.
 * //-
 * var opts = {
 *   includeFiles: true,
 *   force: true
 * };
 *
 * bucket.makePublic(opts, function(errors, files) {
 *   // `errors`:
 *   //    Array of errors if any occurred, otherwise null.
 *   //
 *   // `files`:
 *   //    Array of files successfully made public in the bucket.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.makePublic(opts).then(function(data) {
 *   var files = data[0];
 * });
 */
Bucket.prototype.makePublic = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.public = true;

  async.series([
    addAclPermissions,
    addDefaultAclPermissions,
    makeFilesPublic
  ], callback);

  function addAclPermissions(done) {
    // Allow reading bucket contents while preserving original permissions.
    self.acl.add({
      entity: 'allUsers',
      role: 'READER'
    }, done);
  }

  function addDefaultAclPermissions(done) {
    self.acl.default.add({
      entity: 'allUsers',
      role: 'READER'
    }, done);
  }

  function makeFilesPublic(done) {
    if (!options.includeFiles) {
      done();
      return;
    }

    self.makeAllFilesPublicPrivate_(options, done);
  }
};

/**
 * Set labels on the bucket.
 *
 * This makes an underlying call to {module:storage/bucket#setMetadata}, which
 * is a PATCH request. This means an individual label can be overwritten, but
 * unmentioned labels will not be touched.
 *
 * @param {type} labels - Labels to set on the bucket.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The bucket's metadata.
 *
 * @example
 * var labels = {
 *   label: 'labelvalue',
 *   labeltwo: 'labeltwovalue'
 * };
 *
 * bucket.setLabels(labels, function(err, metadata) {
 *   if (!err) {
 *     // Labels set successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.setLabels(labels).then(function(data) {
 *   var metadata = data[0];
 * });
 */
Bucket.prototype.setLabels = function(labels, callback) {
  this.setMetadata({labels}, callback);
};

/**
 * Upload a file to the bucket. This is a convenience method that wraps
 * {module:storage/file#createWriteStream}.
 *
 * You can specify whether or not an upload is resumable by setting
 * `options.resumable`. *Resumable uploads are enabled by default if your input
 * file is larger than 5 MB.*
 *
 * For faster crc32c computation, you must manually install
 * [`fast-crc32c`](http://www.gitnpm.com/fast-crc32c):
 *
 *     $ npm install --save fast-crc32c
 *
 * @resource [Upload Options (Simple or Resumable)]{@link https://cloud.google.com/storage/docs/json_api/v1/how-tos/upload#uploads}
 * @resource [Objects: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/insert}
 *
 * @param {string} localPath - The fully qualified path to the file you wish to
 *     upload to your bucket.
 * @param {object=} options - Configuration options.
 * @param {string|module:storage/file} options.destination - The place to save
 *     your file. If given a string, the file will be uploaded to the bucket
 *     using the string as a filename. When given a File object, your local file
 *     will be uploaded to the File object's bucket and under the File object's
 *     name. Lastly, when this argument is omitted, the file is uploaded to your
 *     bucket using the name of the local file.
 * @param {string} options.encryptionKey - A custom encryption key. See
 *     [Customer-supplied Encryption Keys](https://cloud.google.com/storage/docs/encryption#customer-supplied).
 * @param {boolean} options.gzip - Automatically gzip the file. This will set
 *     `options.metadata.contentEncoding` to `gzip`.
 * @param {object} options.metadata - See an
 *     [Objects: insert request body](https://cloud.google.com/storage/docs/json_api/v1/objects/insert#request_properties_JSON).
 * @param {string} options.offset - The starting byte of the upload stream, for
 *     resuming an interrupted upload. Defaults to 0.
 * @param {string} options.predefinedAcl - Apply a predefined set of access
 *     controls to this object.
 *
 *     Acceptable values are:
 *     - **`authenticatedRead`** - Object owner gets `OWNER` access, and
 *       `allAuthenticatedUsers` get `READER` access.
 *
 *     - **`bucketOwnerFullControl`** - Object owner gets `OWNER` access, and
 *       project team owners get `OWNER` access.
 *
 *     - **`bucketOwnerRead`** - Object owner gets `OWNER` access, and project
 *       team owners get `READER` access.
 *
 *     - **`private`** - Object owner gets `OWNER` access.
 *
 *     - **`projectPrivate`** - Object owner gets `OWNER` access, and project
 *       team members get access according to their roles.
 *
 *     - **`publicRead`** - Object owner gets `OWNER` access, and `allUsers` get
 *       `READER` access.
 * @param {boolean} options.private - Make the uploaded file private. (Alias for
 *     `options.predefinedAcl = 'private'`)
 * @param {boolean} options.public - Make the uploaded file public. (Alias for
 *     `options.predefinedAcl = 'publicRead'`)
 * @param {boolean} options.resumable - Force a resumable upload. (default:
 *     true for files larger than 5 MB).
 * @param {string} options.uri - The URI for an already-created resumable
 *     upload. See {module:storage/file#createResumableUpload}.
 * @param {string|boolean} options.validation - Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with an
 *     MD5 checksum for maximum reliability. CRC32c will provide better
 *     performance with less reliability. You may also choose to skip validation
 *     completely, however this is **not recommended**.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:storage/file} callback.file - The uploaded File.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // The easiest way to upload a file.
 * //-
 * bucket.upload('/local/path/image.png', function(err, file, apiResponse) {
 *   // Your bucket now contains:
 *   // - "image.png" (with the contents of `/local/path/image.png')
 *
 *   // `file` is an instance of a File object that refers to your new file.
 * });
 *
 * //-
 * // It's not always that easy. You will likely want to specify the filename
 * // used when your new file lands in your bucket.
 * //
 * // You may also want to set metadata or customize other options.
 * //-
 * var options = {
 *   destination: 'new-image.png',
 *   resumable: true,
 *   validation: 'crc32c',
 *   metadata: {
 *     metadata: {
 *       event: 'Fall trip to the zoo'
 *     }
 *   }
 * };
 *
 * bucket.upload('local-image.png', options, function(err, file) {
 *   // Your bucket now contains:
 *   // - "new-image.png" (with the contents of `local-image.png')
 *
 *   // `file` is an instance of a File object that refers to your new file.
 * });
 *
 * //-
 * // You can also have a file gzip'd on the fly.
 * //-
 * bucket.upload('index.html', { gzip: true }, function(err, file) {
 *   // Your bucket now contains:
 *   // - "index.html" (automatically compressed with gzip)
 *
 *   // Downloading the file with `file.download` will automatically decode the
 *   // file.
 * });
 *
 * //-
 * // You may also re-use a File object, {module:storage/file}, that references
 * // the file you wish to create or overwrite.
 * //-
 * var options = {
 *   destination: bucket.file('existing-file.png'),
 *   resumable: false
 * };
 *
 * bucket.upload('local-img.png', options, function(err, newFile) {
 *   // Your bucket now contains:
 *   // - "existing-file.png" (with the contents of `local-img.png')
 *
 *   // Note:
 *   // The `newFile` parameter is equal to `file`.
 * });
 *
 * //-
 * // To use
 * // <a href="https://cloud.google.com/storage/docs/encryption#customer-supplied">
 * // Customer-supplied Encryption Keys</a>, provide the `encryptionKey` option.
 * //-
 * var crypto = require('crypto');
 * var encryptionKey = crypto.randomBytes(32);
 *
 * bucket.upload('img.png', {
 *   encryptionKey: encryptionKey
 * }, function(err, newFile) {
 *   // `img.png` was uploaded with your custom encryption key.
 *
 *   // `newFile` is already configured to use the encryption key when making
 *   // operations on the remote object.
 *
 *   // However, to use your encryption key later, you must create a `File`
 *   // instance with the `key` supplied:
 *   var file = bucket.file('img.png', {
 *     encryptionKey: encryptionKey
 *   });
 *
 *   // Or with `file#setEncryptionKey`:
 *   var file = bucket.file('img.png');
 *   file.setEncryptionKey(encryptionKey);
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.upload('local-image.png').then(function(data) {
 *   var file = data[0];
 * });
 */
Bucket.prototype.upload = function(localPath, options, callback) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return;
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({
    metadata: {}
  }, options);

  var newFile;
  if (options.destination instanceof File) {
    newFile = options.destination;
  } else if (is.string(options.destination)) {
    // Use the string as the name of the file.
    newFile = this.file(options.destination, {
      encryptionKey: options.encryptionKey
    });
  } else {
    // Resort to using the name of the incoming file.
    newFile = this.file(path.basename(localPath), {
      encryptionKey: options.encryptionKey
    });
  }

  var contentType = mime.contentType(path.basename(localPath));

  if (contentType && !options.metadata.contentType) {
    options.metadata.contentType = contentType;
  }

  if (is.boolean(options.resumable)) {
    upload();
  } else {
    // Determine if the upload should be resumable if it's over the threshold.
    fs.stat(localPath, function(err, fd) {
      if (err) {
        callback(err);
        return;
      }

      options.resumable = fd.size > RESUMABLE_THRESHOLD;

      upload();
    });
  }

  function upload() {
    fs.createReadStream(localPath)
      .pipe(newFile.createWriteStream(options))
      .on('error', function(err) {
        callback(err);
      })
      .on('finish', function() {
        callback(null, newFile);
      });
  }
};

/**
 * Iterate over all of a bucket's files, calling `file.makePublic()` (public)
 * or `file.makePrivate()` (private) on each.
 *
 * Operations are performed in parallel, up to 10 at once. The first error
 * breaks the loop, and will execute the provided callback with it. Specify
 * `{ force: true }` to suppress the errors.
 *
 * @private
 *
 * @param {object} options - Configuration object.
 * @param {boolean} options.force - Suppress errors until all files have been
 *     processed.
 * @param {boolean} options.private - Make files private.
 * @param {boolean} options.public - Make files public.
 * @param {function} callback - The callback function.
 */
Bucket.prototype.makeAllFilesPublicPrivate_ = function(options, callback) {
  var MAX_PARALLEL_LIMIT = 10;
  var errors = [];
  var updatedFiles = [];

  this.getFiles(function(err, files) {
    if (err) {
      callback(err);
      return;
    }

    function processFile(file, callback) {
      if (options.public) {
        file.makePublic(processedCallback);
      } else if (options.private) {
        file.makePrivate(processedCallback);
      }

      function processedCallback(err) {
        if (err) {
          if (options.force) {
            errors.push(err);
            callback();
            return;
          }

          callback(err);
          return;
        }

        updatedFiles.push(file);
        callback();
      }
    }

    // Iterate through each file and make it public or private.
    async.eachLimit(files, MAX_PARALLEL_LIMIT, processFile, function(err) {
      if (err || errors.length > 0) {
        callback(err || errors, updatedFiles);
        return;
      }

      callback(null, updatedFiles);
    });
  });
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Bucket, 'getFiles');

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Bucket, {
  exclude: ['file']
});

module.exports = Bucket;
