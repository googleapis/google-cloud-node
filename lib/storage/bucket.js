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

var extend = require('extend');
var fs = require('fs');
var mime = require('mime-types');
var path = require('path');

/**
 * @type module:storage/acl
 * @private
 */
var Acl = require('./acl.js');

/**
 * @type module:storage/file
 * @private
 */
var File = require('./file.js');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string}
 * @private
 */
var STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';

/**
 * The size of a file (in bytes) must be greater than this number to
 * automatically trigger a resumable upload.
 *
 * @const {number}
 * @private
 */
var RESUMABLE_THRESHOLD = 5000000;

/**
 * Create a Bucket object to interact with a Google Cloud Storage bucket.
 *
 * @constructor
 * @alias module:storage/bucket
 *
 * @throws if a bucket name isn't provided.
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
 * var gcloud = require('gcloud');
 *
 * // From Google Compute Engine
 * var albums = gcloud.storage.bucket('albums');
 *
 * // From elsewhere
 * var photos = gcloud.storage.bucket({
 *   keyFilename: '/path/to/keyfile.json',
 *   name: 'bucket'
 * });
 */
function Bucket(storage, name) {
  this.metadata = {};
  this.name = name;
  this.storage = storage;

  if (!this.name) {
    throw Error('A bucket name is needed to use Google Cloud Storage.');
  }

  /**
   * Google Cloud Storage uses access control lists (ACLs) to manage object and
   * bucket access. ACLs are the mechanism you use to share objects with other
   * users and allow other users to access your buckets and objects.
   *
   * An ACL consists of one or more entries, where each entry grants permissions
   * to a scope. Permissions define the actions that can be performed against an
   * object or bucket (for example, `READ` or `WRITE`); the scope defines who
   * the permission applies to (for example, a specific user or group of users).
   *
   * For more detailed information, see
   * [About Access Control Lists](http://goo.gl/6qBBPO).
   *
   * The `acl` object on a Bucket instance provides methods to get you a list of
   * the ACLs defined on your bucket, as well as set, update, and delete them.
   *
   * Buckets also have
   * [default ACLs](https://cloud.google.com/storage/docs/accesscontrol#default)
   * for all created files. Default ACLs specify permissions that all new
   * objects added to the bucket will inherit by default. You can add, delete,
   * get, and update scopes and permissions for these as well with
   * {module:storage/bucket#acl.default}.
   *
   * @mixes module:storage/acl
   */
  this.acl = new Acl({
    makeReq: this.makeReq_.bind(this),
    pathPrefix: '/acl'
  });

  this.acl.default = new Acl({
    makeReq: this.makeReq_.bind(this),
    pathPrefix: '/defaultObjectAcl'
  });

  /* jshint ignore:start */
  /*! Developer Documentation
   *
   * Sadly, to generate the documentation properly, this comment block describes
   * a useless variable named `ignored` and aliases it to `acl.default`. This is
   * done so the doc building process picks this up, without adding cruft to the
   * Bucket class itself.
   */
  /**
   * Google Cloud Storage Buckets have [default ACLs](http://goo.gl/YpGdyv) for
   * all created files. You can add, delete, get, and update scopes and
   * permissions for these as well. The method signatures and examples are all
   * the same, after only prefixing the method call with `default`.
   *
   * @alias acl.default
   */
  var aclDefault = true;

  /**
   * Maps to {module:storage/bucket#acl.add}.
   * @alias acl.default.add
   */
  var aclDefaultAdd = true;

  /**
   * Maps to {module:storage/bucket#acl.delete}.
   * @alias acl.default.delete
   */
  var aclDefaultDelete = true;

  /**
   * Maps to {module:storage/bucket#acl.get}.
   * @alias acl.default.get
   */
  var aclDefaultGet = true;

  /**
   * Maps to {module:storage/bucket#acl.update}.
   * @alias acl.default.update
   */
  var aclDefaultUpdate = true;
  /* jshint ignore:end */
}

/**
 * Delete the bucket.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * bucket.delete(function(err) {});
 */
Bucket.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Create a File object. See {module:storage/file} to see how to handle
 * the different use cases you may have.
 *
 * @param {string} name - The name of the file in this bucket.
 * @return {module:storage/file}
 *
 * @example
 * var file = bucket.file('my-existing-file.png');
 */
Bucket.prototype.file = function(name) {
  return new File(this, name);
};

/**
 * Get File objects for the files currently in the bucket.
 *
 * @param {object=} query - Query object.
 * @param {string} query.delimiter - Results will contain only objects whose
 *     names, aside from the prefix, do not contain delimiter. Objects whose
 *     names, aside from the prefix, contain delimiter will have their name
 *     truncated after the delimiter, returned in prefixes. Duplicate prefixes
 *     are omitted.
 * @param {string} query.prefix - Filter results to objects whose names begin
 *     with this prefix.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 *
 * @example
 * bucket.getFiles(function(err, files, nextQuery) {
 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     bucket.getFiles(nextQuery, function(err, files, nextQuery) {});
 *   }
 *
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   files[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   files[0].getMetadata(function(err, metadata) {});
 * });
 *
 * //-
 * // Fetch using a query.
 * //-
 * bucket.getFiles({
 *   maxResults: 5
 * }, function(err, files, nextQuery) {});
 */
Bucket.prototype.getFiles = function(query, callback) {
  var that = this;
  if (!callback) {
    callback = query;
    query = {};
  }
  this.makeReq_('GET', '/o', query, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var files = (resp.items || []).map(function(item) {
      var file = that.file(item.name);
      file.metadata = item;
      return file;
    });
    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, { pageToken: resp.nextPageToken });
    }
    callback(null, files, nextQuery);
  });
};

/**
 * Get the bucket's metadata.
 *
 * To set metadata, see {module:storage/bucket#setMetadata}.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * bucket.getMetadata(function(err, metadata) {});
 */
Bucket.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('GET', '', null, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    this.metadata = resp;
    callback(null, this.metadata);
  }.bind(this));
};

/**
 * Set the bucket's metadata.
 *
 * @param {object} metadata - The metadata you wish to set.
 * @param {function=} callback - The callback function.
 *
 * @example
 * bucket.setMetadata({
 *   contentType: 'application/x-font-ttf',
 *   metadata: {
 *     my: 'custom',
 *     properties: 'go here'
 *   }
 * }, function(err, metadata) {});
 */
Bucket.prototype.setMetadata = function(metadata, callback) {
  callback = callback || util.noop;
  this.makeReq_('PATCH', '', null, metadata, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    this.metadata = resp;
    callback(null, this.metadata);
  }.bind(this));
};

/**
 * Upload a file to the bucket. This is a convenience method that wraps the
 * functionality provided by a File object, {module:storage/file}.
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
 * @param {object=} options.metadata - Metadata to set for your file.
 * @param {boolean=} options.resumable - Force a resumable upload. (default:
 *     true for files larger than 5MB). Read more about resumable uploads
 *     [here](http://goo.gl/1JWqCF). NOTE: This behavior is only possible with
 *     this method, and not {module:storage/file#createWriteStream}. When
 *     working with streams, the file format and size is unknown until it's
 *     completely consumed. Because of this, it's best for you to be explicit
 *     for what makes sense given your input.
 * @param {function} callback - The callback function.
 * @param {string|boolean} options.validation - Possible values: `"md5"`,
 *     `"crc32c"`, or `false`. By default, data integrity is validated with an
 *     MD5 checksum for maximum reliability. CRC32c will provide better
 *     performance with less reliability. You may also choose to skip validation
 *     completely, however this is **not recommended**.
 *
 * @example
 * //-
 * // The easiest way to upload a file.
 * //-
 * bucket.upload('/local/path/image.png', function(err, file) {
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
 *     event: 'Fall trip to the zoo'
 *   }
 * };
 *
 * bucket.upload('/local/path/image.png', options, function(err, file) {
 *   // Your bucket now contains:
 *   // - "new-image.png" (with the contents of `/local/path/image.png')
 *
 *   // `file` is an instance of a File object that refers to your new file.
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
 * bucket.upload('/local/path/image.png', options, function(err, newFile) {
 *   // Your bucket now contains:
 *   // - "existing-file.png" (with the contents of `/local/path/image.png')
 *
 *   // Note:
 *   // The `newFile` parameter is equal to `file`.
 * });
 */
Bucket.prototype.upload = function(localPath, options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  var newFile;
  if (options.destination instanceof File) {
    newFile = options.destination;
  } else if (util.is(options.destination, 'string')) {
    // Use the string as the name of the file.
    newFile = this.file(options.destination);
  } else {
    // Resort to using the name of the incoming file.
    newFile = this.file(path.basename(localPath));
  }

  var metadata = options.metadata || {};
  var contentType = mime.contentType(path.basename(localPath));

  if (contentType && !metadata.contentType) {
    metadata.contentType = contentType;
  }

  var resumable;
  if (util.is(options.resumable, 'boolean')) {
    resumable = options.resumable;
    upload();
  } else {
    // Determine if the upload should be resumable if it's over the threshold.
    fs.stat(localPath, function(err, fd) {
      if (err) {
        callback(err);
        return;
      }

      resumable = fd.size > RESUMABLE_THRESHOLD;

      upload();
    });
  }

  function upload() {
    fs.createReadStream(localPath)
      .pipe(newFile.createWriteStream({
        validation: options.validation,
        resumable: resumable,
        metadata: metadata
      }))
      .on('error', callback)
      .on('complete', function() {
        callback(null, newFile);
      });
  }
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
Bucket.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: STORAGE_BASE_URL + '/' + this.name + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.storage.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = Bucket;
