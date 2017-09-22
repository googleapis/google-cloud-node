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
var async = require('async');
var common = require('@google-cloud/common');
var extend = require('extend');
var fs = require('fs');
var is = require('is');
var mime = require('mime-types');
var path = require('path');
var util = require('util');

var Acl = require('./acl.js');
var File = require('./file.js');
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
 * @class
 * @hideconstructor
 *
 * @param {Storage} storage A {@link Storage} instance.
 * @param {string} name The name of the bucket.
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 */
function Bucket(storage, name) {
  var methods = {
    /**
     * Create a bucket.
     *
     * @method Bucket#create
     * @param {Storage~CreateBucketRequest} [metadata] Metadata to set for the bucket.
     * @param {Storage~CreateBucketCallback} [callback] Callback function.
     * @returns {Promise<Storage~CreateBucketResponse>}
     *
     * @example
     * var storage = require('@google-cloud/storage')();
     * var bucket = storage.bucket('albums');
     * bucket.create(function(err, bucket, apiResponse) {
     *   if (!err) {
     *     // The bucket was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * bucket.create().then(function(data) {
     *   var bucket = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,
  };

  common.ServiceObject.call(this, {
    parent: storage,
    baseUrl: '/b',
    id: name,
    createMethod: storage.createBucket.bind(storage),
    methods: methods,
  });

  /**
   * The bucket's name.
   * @name Bucket#name
   * @type {string}
   */
  this.name = name;
  /**
   * A reference to the {@link Storage} associated with this {@link Bucket}
   * instance.
   * @name Bucket#storage
   * @type {string}
   */
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
   * {@link Bucket#acl.default}.
   *
   * @see [About Access Control Lists]{@link http://goo.gl/6qBBPO}
   * @see [Default ACLs]{@link https://cloud.google.com/storage/docs/access-control/lists#default}
   *
   * @name Bucket#acl
   * @mixes Acl
   * @property {Acl} default Cloud Storage Buckets have
   * [default ACLs](https://cloud.google.com/storage/docs/access-control/lists#default)
   * for all created files. You can add, delete, get, and update entities and
   * permissions for these as well. The method signatures and examples are all
   * the same, after only prefixing the method call with `default`.
   *
   * @example
   * var storage = require('@google-cloud/storage')();
   *
   * //-
   * // Make a bucket's contents publicly readable.
   * //-
   * var myBucket = storage.bucket('my-bucket');
   *
   * var options = {
   *   entity: 'allUsers',
   *   role: storage.acl.READER_ROLE
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
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_print_bucket_acl
   * Example of printing a bucket's ACL:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_print_bucket_acl_for_user
   * Example of printing a bucket's ACL for a specific user:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_add_bucket_owner
   * Example of adding an owner to a bucket:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_remove_bucket_owner
   * Example of removing an owner from a bucket:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_add_bucket_default_owner
   * Example of adding a default owner to a bucket:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_remove_bucket_default_owner
   * Example of removing a default owner from a bucket:
   */
  this.acl = new Acl({
    request: this.request.bind(this),
    pathPrefix: '/acl',
  });

  this.acl.default = new Acl({
    request: this.request.bind(this),
    pathPrefix: '/defaultObjectAcl',
  });

  /**
   * Get and set IAM policies for your bucket.
   *
   * @name Bucket#iam
   * @mixes Iam
   *
   * @see [Cloud Storage IAM Management](https://cloud.google.com/storage/docs/access-control/iam#short_title_iam_management)
   * @see [Granting, Changing, and Revoking Access](https://cloud.google.com/iam/docs/granting-changing-revoking-access)
   * @see [IAM Roles](https://cloud.google.com/iam/docs/understanding-roles)
   *
   * @example
   * var storage = require('@google-cloud/storage')();
   * var bucket = storage.bucket('albums');
   *
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
   *
   * @example <caption>include:samples/iam.js</caption>
   * region_tag:storage_view_bucket_iam_members
   * Example of retrieving a bucket's IAM policy:
   *
   * @example <caption>include:samples/iam.js</caption>
   * region_tag:storage_add_bucket_iam_member
   * Example of adding to a bucket's IAM policy:
   *
   * @example <caption>include:samples/iam.js</caption>
   * region_tag:storage_remove_bucket_iam_member
   * Example of removing from a bucket's IAM policy:
   */
  this.iam = new Iam(this);
}

util.inherits(Bucket, common.ServiceObject);

/**
 * @typedef {array} CombineResponse
 * @property {File} 0 The new {@link File}.
 * @property {object} 1 The full API response.
 */
/**
 * @callback CombineCallback
 * @param {?Error} err Request error, if any.
 * @param {File} newFile The new {@link File}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Combine multiple files into one new file.
 *
 * @see [Objects: compose API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/compose}
 *
 * @throws {Error} if a non-array is provided as sources argument.
 * @throws {Error} if less than two sources are provided.
 * @throws {Error} if no destination is provided.
 * @throws {Error} if content type can't be determined for the destination file.
 *
 * @param {string[]|File[]} sources The source files that will be
 *     combined.
 * @param {string|File} destination The file you would like the
 *     source files combined into.
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {CombineCallback} [callback] Callback function.
 * @returns {Promise<CombineResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var logBucket = storage.bucket('log-bucket');
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
Bucket.prototype.combine = function(sources, destination, options, callback) {
  if (!is.array(sources) || sources.length < 2) {
    throw new Error('You must provide at least two source files.');
  }

  if (!destination) {
    throw new Error('A destination file must be specified.');
  }

  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  sources = sources.map(convertToFile);
  destination = convertToFile(destination);
  callback = callback || common.util.noop;

  if (!destination.metadata.contentType) {
    var destinationContentType = mime.contentType(destination.name);

    if (destinationContentType) {
      destination.metadata.contentType = destinationContentType;
    } else {
      throw new Error(
        'A content type could not be detected for the destination file.'
      );
    }
  }

  // Make the request from the destination File object.
  destination.request(
    {
      method: 'POST',
      uri: '/compose',
      json: {
        destination: {
          contentType: destination.metadata.contentType,
        },
        sourceObjects: sources.map(function(source) {
          var sourceObject = {
            name: source.name,
          };

          if (source.metadata && source.metadata.generation) {
            sourceObject.generation = source.metadata.generation;
          }

          return sourceObject;
        }),
      },
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      callback(null, destination, resp);
    }
  );

  function convertToFile(file) {
    if (file instanceof File) {
      return file;
    }

    return self.file(file);
  }
};

/**
 * @typedef {array} CreateChannelResponse
 * @property {object} 0 The full API response.
 * @property {Channel} 1 The new {@link Channel}.
 */
/**
 * @callback CreateChannelCallback
 * @param {?Error} err Request error, if any.
 * @param {Channel} channel The new {@link Channel}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Create a channel that will be notified when objects in this bucket changes.
 *
 * @throws {Error} If an ID is not provided.
 * @throws {Error} If an address is not provided.
 *
 * @see [Objects: watchAll API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/watchAll}
 *
 * @param {string} id The ID of the channel to create.
 * @param {object} config See a
 *     [Objects: watchAll request body](https://cloud.google.com/storage/docs/json_api/v1/objects/watchAll).
 * @param {string} config.address The address where notifications are
 *     delivered for this channel.
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {CreateChannelCallback} [callback] Callback function.
 * @returns {Promise<CreateChannelResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
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
Bucket.prototype.createChannel = function(id, config, options, callback) {
  var self = this;

  if (!is.string(id)) {
    throw new Error('An ID is required to create a channel.');
  }

  if (!is.string(config.address)) {
    throw new Error('An address is required to create a channel.');
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      method: 'POST',
      uri: '/o/watch',
      json: extend(
        {
          id: id,
          type: 'web_hook',
        },
        config
      ),
      qs: options,
    },
    function(err, apiResponse) {
      if (err) {
        callback(err, null, apiResponse);
        return;
      }

      var resourceId = apiResponse.resourceId;
      var channel = self.storage.channel(id, resourceId);

      channel.metadata = apiResponse;

      callback(null, channel, apiResponse);
    }
  );
};

/**
 * @typedef {array} DeleteBucketResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback DeleteBucketCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Delete the bucket.
 *
 * @see [Buckets: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/delete}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}), set this
 *     value to the project which should be billed for this operation.
 * @param {DeleteBucketCallback} [callback] Callback function.
 * @returns {Promise<DeleteBucketResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 * bucket.delete(function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 *
 * @example <caption>include:samples/buckets.js</caption>
 * region_tag:storage_delete_bucket
 * Another example:
 */
Bucket.prototype.delete = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      method: 'DELETE',
      uri: '',
      qs: options,
    },
    callback || common.util.noop
  );
};

/**
 * @callback DeleteFilesCallback
 * @param {?Error|?Error[]} err Request error, if any, or array of errors from
 *     files that were not able to be deleted.
 * @param {object} apiResponse The full API response.
 */
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
 * {@link Bucket#getFiles}.
 *
 * @see [Objects: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/delete}
 *
 * @param {object} [query] Query object. See {@link Bucket#getFiles}
 *     for all of the supported properties.
 * @param {boolean} [query.force] Suppress errors until all files have been
 *     processed.
 * @param {boolean} [query.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {DeleteFilesCallback} [callback] Callback function.
 * @returns {Promise}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
 * // {@link Bucket#getFiles}. As an example, you can delete files
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
      file.delete(query, function(err) {
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
 * @typedef {array} DeleteLabelsResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback DeleteLabelsCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Delete one or more labels from this bucket.
 *
 * @param {string|string[]} labels The labels to delete. If no labels are
 *     provided, all of the labels are removed.
 * @param {DeleteLabelsCallback} [callback] Callback function.
 * @returns {Promise<DeleteLabelsResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * //-
 * // Delete all of the labels from this bucket.
 * //-
 * bucket.deleteLabels(function(err, apiResponse) {});
 *
 * //-
 * // Delete a single label.
 * //-
 * bucket.deleteLabels('labelone', function(err, apiResponse) {});
 *
 * //-
 * // Delete a specific set of labels.
 * //-
 * bucket.deleteLabels([
 *   'labelone',
 *   'labeltwo'
 * ], function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.deleteLabels().then(function(data) {
 *   var apiResponse = data[0];
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
 * @typedef {array} DisableRequesterPaysResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback DisableRequesterPaysCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * <div class="notice">
 *   <strong>Early Access Testers Only</strong>
 *   <p>
 *     This feature is not yet widely-available.
 *   </p>
 * </div>
 *
 * Disable `requesterPays` functionality from this bucket.
 *
 * @param {DisableRequesterPaysCallback} [callback] Callback function.
 * @returns {Promise<DisableRequesterPaysCallback>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * bucket.disableRequesterPays(function(err, apiResponse) {
 *   if (!err) {
 *     // requesterPays functionality disabled successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.disableRequesterPays().then(function(data) {
 *   var apiResponse = data[0];
 * });
 *
 * @example <caption>include:samples/requesterPays.js</caption>
 * region_tag:storage_disable_requester_pays
 * Example of disabling requester pays:
 */
Bucket.prototype.disableRequesterPays = function(callback) {
  this.setMetadata(
    {
      billing: {
        requesterPays: false,
      },
    },
    callback || common.util.noop
  );
};

/**
 * @typedef {array} EnableRequesterPaysResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback EnableRequesterPaysCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * <div class="notice">
 *   <strong>Early Access Testers Only</strong>
 *   <p>
 *     This feature is not yet widely-available.
 *   </p>
 * </div>
 *
 * Enable `requesterPays` functionality for this bucket. This enables you, the
 * bucket owner, to have the requesting user assume the charges for the access
 * to your bucket and its contents.
 *
 * @param {EnableRequesterPaysCallback} [callback] Callback function.
 * @returns {Promise<EnableRequesterPaysResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * bucket.enableRequesterPays(function(err, apiResponse) {
 *   if (!err) {
 *     // requesterPays functionality enabled successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.enableRequesterPays().then(function(data) {
 *   var apiResponse = data[0];
 * });
 *
 * @example <caption>include:samples/requesterPays.js</caption>
 * region_tag:storage_enable_requester_pays
 * Example of enabling requester pays:
 */
Bucket.prototype.enableRequesterPays = function(callback) {
  this.setMetadata(
    {
      billing: {
        requesterPays: true,
      },
    },
    callback || common.util.noop
  );
};

/**
 * @typedef {array} BucketExistsResponse
 * @property {boolean} 0 Whether the {@link Bucket} exists.
 */
/**
 * @callback BucketExistsCallback
 * @param {?Error} err Request error, if any.
 * @param {boolean} exists Whether the {@link Bucket} exists.
 */
/**
 * Check if the bucket exists.
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {BucketExistsCallback} [callback] Callback function.
 * @returns {Promise<BucketExistsResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * bucket.exists(function(err, exists) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.exists().then(function(data) {
 *   var exists = data[0];
 * });
 */
Bucket.prototype.exists = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.get(options, function(err) {
    if (err) {
      if (err.code === 404) {
        callback(null, false);
      } else {
        callback(err);
      }

      return;
    }

    callback(null, true);
  });
};

/**
 * Create a {@link File} object. See {@link File} to see how to handle
 * the different use cases you may have.
 *
 * @param {string} name The name of the file in this bucket.
 * @param {object} [options] Configuration options.
 * @param {string|number} [options.generation] Only use a specific revision of
 *     this file.
 * @param {string} [options.key] A custom encryption key. See
 *     [Customer-supplied Encryption Keys](https://cloud.google.com/storage/docs/encryption#customer-supplied).
 * @returns {File}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 * var file = bucket.file('my-existing-file.png');
 */
Bucket.prototype.file = function(name, options) {
  if (!name) {
    throw Error('A file name must be specified.');
  }

  return new File(this, name, options);
};

/**
 * @typedef {array} GetBucketResponse
 * @property {Bucket} 0 The {@link Bucket}.
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetBucketCallback
 * @param {?Error} err Request error, if any.
 * @param {Bucket} bucket The {@link Bucket}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get a bucket if it exists.
 *
 * You may optionally use this to "get or create" an object by providing an
 * object with `autoCreate` set to `true`. Any extra configuration that is
 * normally required for the `create` method must be contained within this
 * object as well.
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.autoCreate] Automatically create the object if
 *     it does not exist. Default: `false`
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}), set this
 *     value to the project which should be billed for this operation.
 * @param {GetBucketCallback} [callback] Callback function.
 * @returns {Promise<GetBucketResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
Bucket.prototype.get = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var autoCreate = options.autoCreate;
  delete options.autoCreate;

  function onCreate(err, bucket, apiResponse) {
    if (err) {
      if (err.code === 409) {
        self.get(options, callback);
        return;
      }

      callback(err, null, apiResponse);
      return;
    }

    callback(null, bucket, apiResponse);
  }

  this.getMetadata(options, function(err, metadata) {
    if (err) {
      if (err.code === 404 && autoCreate) {
        var args = [];

        if (!is.empty(options)) {
          args.push(options);
        }

        args.push(onCreate);

        self.create.apply(self, args);
        return;
      }

      callback(err, null, metadata);
      return;
    }

    callback(null, self, metadata);
  });
};

/**
 * Query object for listing files.
 *
 * @typedef {object} GetFilesRequest
 * @property {boolean} [autoPaginate] Have pagination handled automatically.
 *     Default: true.
 * @property {string} [delimiter] Results will contain only objects whose
 *     names, aside from the prefix, do not contain delimiter. Objects whose
 *     names, aside from the prefix, contain delimiter will have their name
 *     truncated after the delimiter, returned in `apiResponse.prefixes`.
 *     Duplicate prefixes are omitted.
 * @property {string} [prefix] Filter results to objects whose names begin
 *     with this prefix.
 * @property {number} [maxApiCalls] Maximum number of API calls to make.
 * @property {number} [maxResults] Maximum number of items plus prefixes to
 *     return.
 * @property {string} [pageToken] A previously-returned page token
 *     representing part of the larger set of results to view.
 * @property {boolean} [userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @property {boolean} [versions] If true, returns File objects scoped to
 *     their versions.
 */
/**
 * @typedef {array} GetFilesResponse
 * @property {File[]} 0 Array of {@link File} instances.
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetFilesCallback
 * @param {?Error} err Request error, if any.
 * @param {File[]} files Array of {@link File} instances.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get {@link File} objects for the files currently in the bucket.
 *
 * @see [Objects: list API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/list}
 *
 * @param {GetFilesRequest} [query] Query object for listing files.
 * @param {GetFilesCallback} [callback] Callback function.
 * @returns {Promise<GetFilesResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_list_files
 * Another example:
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_list_files_with_prefix
 * Example of listing files, filtered by a prefix:
 */
Bucket.prototype.getFiles = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  this.request(
    {
      uri: '/o',
      qs: query,
    },
    function(err, resp) {
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
          pageToken: resp.nextPageToken,
        });
      }

      callback(null, files, nextQuery, resp);
    }
  );
};

/**
 * Get {@link File} objects for the files currently in the bucket as a
 * readable object stream.
 *
 * @method Bucket#getFilesStream
 * @param {GetFilesRequest} [query] Query object for listing files.
 * @returns {ReadableStream} A readable stream that emits {@link File} instances.
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
 * @typedef {array} GetLabelsResponse
 * @property {object} 0 Object of labels currently set on this bucket.
 */
/**
 * @callback GetLabelsCallback
 * @param {?Error} err Request error, if any.
 * @param {object} labels Object of labels currently set on this bucket.
 */
/**
 * Get the labels currently set on this bucket.
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {GetLabelsCallback} [callback] Callback function.
 * @returns {Promise<GetLabelsCallback>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
Bucket.prototype.getLabels = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.getMetadata(options, function(err, metadata) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, metadata.labels || {});
  });
};

/**
 * @typedef {array} GetBucketMetadataResponse
 * @property {object} 0 The bucket metadata.
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetBucketMetadataCallback
 * @param {?Error} err Request error, if any.
 * @param {object} files The bucket metadata.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get the bucket's metadata.
 *
 * To set metadata, see {@link Bucket#setMetadata}.
 *
 * @see [Buckets: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/get}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {GetBucketMetadataCallback} [callback] Callback function.
 * @returns {Promise<GetBucketMetadataResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * bucket.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 *
 * @example <caption>include:samples/requesterPays.js</caption>
 * region_tag:storage_get_requester_pays_status
 * Example of retrieving the requester pays status of a bucket:
 */
Bucket.prototype.getMetadata = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      uri: '',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      self.metadata = resp;

      callback(null, self.metadata, resp);
    }
  );
};

/**
 * @typedef {array} MakeBucketPrivateResponse
 * @property {File[]} 0 List of files made private.
 */
/**
 * @callback MakeBucketPrivateCallback
 * @param {?Error} err Request error, if any.
 * @param {File[]} files List of files made private.
 */
/**
 * Make the bucket listing private.
 *
 * You may also choose to make the contents of the bucket private by specifying
 * `includeFiles: true`. This will automatically run
 * {@link File#makePrivate} for every file in the bucket.
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
 * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.includeFiles=false] Make each file in the bucket
 *     private.
 * @param {boolean} [options.force] Queue errors occurred while making files
 *     private until all files have been processed.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {MakeBucketPrivateCallback} [callback] Callback function.
 * @returns {Promise<MakeBucketPrivateResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
      predefinedAcl: 'projectPrivate',
    };

    if (options.userProject) {
      query.userProject = options.userProject;
    }

    self.setMetadata(
      {
        // You aren't allowed to set both predefinedAcl & acl properties on a
        // bucket so acl must explicitly be nullified.
        acl: null,
      },
      query,
      done
    );
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
 * @typedef {array} MakeBucketPublicResponse
 * @property {File[]} 0 List of files made public.
 */
/**
 * @callback MakeBucketPublicCallback
 * @param {?Error} err Request error, if any.
 * @param {File[]} files List of files made public.
 */
/**
 * Make the bucket publicly readable.
 *
 * You may also choose to make the contents of the bucket publicly readable by
 * specifying `includeFiles: true`. This will automatically run
 * {@link File#makePublic} for every file in the bucket.
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
 * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.includeFiles=false] Make each file in the bucket
 *     publicly readable.
 * @param {boolean} [options.force] Queue errors occurred while making files
 *     public until all files have been processed.
 * @param {MakeBucketPublicCallback} [callback] Callback function.
 * @returns {Promise<MakeBucketPublicResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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

  async.series(
    [addAclPermissions, addDefaultAclPermissions, makeFilesPublic],
    callback
  );

  function addAclPermissions(done) {
    // Allow reading bucket contents while preserving original permissions.
    self.acl.add(
      {
        entity: 'allUsers',
        role: 'READER',
      },
      done
    );
  }

  function addDefaultAclPermissions(done) {
    self.acl.default.add(
      {
        entity: 'allUsers',
        role: 'READER',
      },
      done
    );
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
 * @typedef {array} SetLabelsResponse
 * @property {object} 0 The bucket metadata.
 */
/**
 * @callback SetLabelsCallback
 * @param {?Error} err Request error, if any.
 * @param {object} metadata The bucket metadata.
 */
/**
 * Set labels on the bucket.
 *
 * This makes an underlying call to {@link Bucket#setMetadata}, which
 * is a PATCH request. This means an individual label can be overwritten, but
 * unmentioned labels will not be touched.
 *
 * @param {object<string, string>} labels Labels to set on the bucket.
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {SetLabelsCallback} [callback] Callback function.
 * @returns {Promise<SetLabelsResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * var labels = {
 *   labelone: 'labelonevalue',
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
Bucket.prototype.setLabels = function(labels, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  callback = callback || common.util.noop;

  this.setMetadata({labels}, options, callback);
};

/**
 * @typedef {array} SetBucketMetadataResponse
 * @property {object} 0 The bucket metadata.
 */
/**
 * @callback SetBucketMetadataCallback
 * @param {?Error} err Request error, if any.
 * @param {object} metadata The bucket metadata.
 */
/**
 * Set the bucket's metadata.
 *
 * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
 *
 * @param {object<string, *>} metadata The metadata you wish to set.
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {SetBucketMetadataCallback} [callback] Callback function.
 * @returns {Promise<SetBucketMetadataResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
Bucket.prototype.setMetadata = function(metadata, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  callback = callback || common.util.noop;

  this.request(
    {
      method: 'PATCH',
      uri: '',
      json: metadata,
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, resp);
        return;
      }

      self.metadata = resp;

      callback(null, resp);
    }
  );
};

/**
 * @callback SetStorageClassCallback
 * @param {?Error} err Request error, if any.
 */
/**
 * Set the default storage class for new files in this bucket.
 *
 * @see [Storage Classes]{@link https://cloud.google.com/storage/docs/storage-classes}
 *
 * @param {string} storageClass The new storage class. (`multi_regional`,
 *     `regional`, `standard`, `nearline`, `coldline`, or
 *     `durable_reduced_availability`)
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] - If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {SetStorageClassCallback} [callback] Callback function.
 * @returns {Promise}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
 * bucket.setStorageClass('regional', function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // The storage class was updated successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.setStorageClass('regional').then(function() {});
 */
Bucket.prototype.setStorageClass = function(storageClass, options, callback) {
  // In case we get input like `storageClass`, convert to `storage_class`.
  storageClass = storageClass
    .replace(/-/g, '_')
    .replace(/([a-z])([A-Z])/g, function(_, low, up) {
      return low + '_' + up;
    })
    .toUpperCase();

  this.setMetadata({storageClass}, options, callback);
};

/**
 * @typedef {array} UploadResponse
 * @property {object} 0 The uploaded {@link File}.
 * @property {object} 1 The full API response.
 */
/**
 * @callback UploadCallback
 * @param {?Error} err Request error, if any.
 * @param {object} metadata The uploaded {@link File}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Upload a file to the bucket. This is a convenience method that wraps
 * {@link File#createWriteStream}.
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
 * @see [Upload Options (Simple or Resumable)]{@link https://cloud.google.com/storage/docs/json_api/v1/how-tos/upload#uploads}
 * @see [Objects: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/insert}
 *
 * @param {string} localPath The fully qualified path to the file you wish to
 *     upload to your bucket.
 * @param {object} [options] Configuration options.
 * @param {string|File} [options.destination] The place to save
 *     your file. If given a string, the file will be uploaded to the bucket
 *     using the string as a filename. When given a File object, your local file
 *     will be uploaded to the File object's bucket and under the File object's
 *     name. Lastly, when this argument is omitted, the file is uploaded to your
 *     bucket using the name of the local file.
 * @param {string} [options.encryptionKey] A custom encryption key. See
 *     [Customer-supplied Encryption Keys](https://cloud.google.com/storage/docs/encryption#customer-supplied).
 * @param {boolean} [options.gzip] Automatically gzip the file. This will set
 *     `options.metadata.contentEncoding` to `gzip`.
 * @param {object} [options.metadata] See an
 *     [Objects: insert request body](https://cloud.google.com/storage/docs/json_api/v1/objects/insert#request_properties_JSON).
 * @param {string} [options.offset] The starting byte of the upload stream, for
 *     resuming an interrupted upload. Defaults to 0.
 * @param {string} [options.predefinedAcl] Apply a predefined set of access
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
 * @param {boolean} [options.private] Make the uploaded file private. (Alias for
 *     `options.predefinedAcl = 'private'`)
 * @param {boolean} [options.public] Make the uploaded file public. (Alias for
 *     `options.predefinedAcl = 'publicRead'`)
 * @param {boolean} [options.resumable] Force a resumable upload. (default:
 *     true for files larger than 5 MB).
 * @param {string} [options.uri] The URI for an already-created resumable
 *     upload. See {@link File#createResumableUpload}.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {string|boolean} [options.validation] Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with an
 *     MD5 checksum for maximum reliability. CRC32c will provide better
 *     performance with less reliability. You may also choose to skip validation
 *     completely, however this is **not recommended**.
 * @param {UploadCallback} [callback] Callback function.
 * @returns {Promise<UploadResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var bucket = storage.bucket('albums');
 *
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
 * // You may also re-use a File object, {File}, that references
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
 *
 * @example <caption>include:samples/files.js</caption>
 * region_tag:storage_upload_file
 * Another example:
 *
 * @example <caption>include:samples/encryption.js</caption>
 * region_tag:storage_upload_encrypted_file
 * Example of uploading an encrypted file:
 */
Bucket.prototype.upload = function(localPath, options, callback) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return;
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend(
    {
      metadata: {},
    },
    options
  );

  var newFile;
  if (options.destination instanceof File) {
    newFile = options.destination;
  } else if (is.string(options.destination)) {
    // Use the string as the name of the file.
    newFile = this.file(options.destination, {
      encryptionKey: options.encryptionKey,
    });
  } else {
    // Resort to using the name of the incoming file.
    newFile = this.file(path.basename(localPath), {
      encryptionKey: options.encryptionKey,
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
    fs
      .createReadStream(localPath)
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
 * @param {object} options] Configuration options.
 * @param {boolean} [options.force] Suppress errors until all files have been
 *     processed.
 * @param {boolean} [options.private] Make files private.
 * @param {boolean} [options.public] Make files public.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {function} callback Callback function.
 */
Bucket.prototype.makeAllFilesPublicPrivate_ = function(options, callback) {
  var MAX_PARALLEL_LIMIT = 10;
  var errors = [];
  var updatedFiles = [];

  this.getFiles(options, function(err, files) {
    if (err) {
      callback(err);
      return;
    }

    function processFile(file, callback) {
      if (options.public) {
        file.makePublic(processedCallback);
      } else if (options.private) {
        file.makePrivate(options, processedCallback);
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
  exclude: ['file'],
});

/**
 * Reference to the {@link Bucket} class.
 * @name module:@google-cloud/storage.Bucket
 * @see Bucket
 */
module.exports = Bucket;
