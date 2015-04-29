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

var async = require('async');
var extend = require('extend');
var fs = require('fs');
var mime = require('mime-types');
var path = require('path');

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
 * @type {module:common/util}
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
 * var storage = gcloud.storage();
 *
 * // From Google Compute Engine
 * var albums = storage.bucket('albums');
 *
 * // From elsewhere
 * var photos = storage.bucket({
 *   keyFilename: '/path/to/keyfile.json', // If you have not yet provided it.
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
   *
   * @example
   * //-
   * // Make a bucket's contents publicly readable.
   * //-
   * myBucket.acl.add({
   *   scope: 'allUsers',
   *   permission: storage.acl.READER_ROLE
   * }, function(err, aclObject) {});
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

  /**
   * Maps to {module:storage/bucket#acl.owners}.
   * @alias acl.default.owners
   */
  var aclDefaultOwners = true;

  /**
   * Maps to {module:storage/bucket#acl.readers}.
   * @alias acl.default.readers
   */
  var aclDefaultReaders = true;

  /**
   * Maps to {module:storage/bucket#acl.writers}.
   * @alias acl.default.writers
   */
  var aclDefaultWriters = true;
  /* jshint ignore:end */
}

/**
 * Combine mutliple files into one new file.
 *
 * @throws if a non-array is provided as sources argument.
 * @throws if less than two sources are provided.
 * @throws if no destination is provided.
 * @throws if a content type cannot be determined for the destination file.
 *
 * @param {string[]|module:storage/file} sources - The source files that will be
 *     combined.
 * @param {string|module:storage/file} destination - The file you would like the
 *     source files combined into.
 * @param {function=} callback - The callback function.
 *
 * @example
 * var 2013logs = bucket.file('2013-logs.txt');
 * var 2014logs = bucket.file('2014-logs.txt');
 *
 * var allLogs = bucket.file('all-logs.txt');
 *
 * bucket.combine([
 *   2013logs,
 *   2014logs
 * ], allLogs, function(err, newFile, apiResponse) {
 *   // newFile === allLogs
 * });
 */
Bucket.prototype.combine = function(sources, destination, callback) {
  if (!util.is(sources, 'array') || sources.length < 2) {
    throw new Error('You must provide at least two source files.');
  }

  if (!destination) {
    throw new Error('A destination file must be specified.');
  }

  var self = this;

  sources = sources.map(convertToFile);
  destination = convertToFile(destination);
  callback = callback || util.noop;

  if (!destination.metadata.contentType) {
    var destinationContentType = mime.contentType(destination.name);

    if (destinationContentType) {
      destination.metadata.contentType = destinationContentType;
    } else {
      throw new Error(
        'A content type could not be detected for the destination file.');
    }
  }

  this.storage.makeAuthorizedRequest_({
    method: 'POST',
    uri: util.format('{base}/{destBucket}/o/{destFile}/compose', {
      base: STORAGE_BASE_URL,
      destBucket: destination.bucket.name,
      destFile: encodeURIComponent(destination.name)
    }),
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
    } else {
      return self.file(file);
    }
  }
};

/**
 * Delete the bucket.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * bucket.delete(function(err, apiResponse) {});
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
 * @param {object=} options - Configuration options.
 * @param {string|number} options.generation - Only use a specific revision of
 *     this file.
 * @return {module:storage/file}
 *
 * @example
 * var file = bucket.file('my-existing-file.png');
 */
Bucket.prototype.file = function(name, options) {
  return new File(this, name, options);
};

/**
 * Get File objects for the files currently in the bucket.
 *
 * @param {object=} query - Query object.
 * @param {string} query.delimiter - Results will contain only objects whose
 *     names, aside from the prefix, do not contain delimiter. Objects whose
 *     names, aside from the prefix, contain delimiter will have their name
 *     truncated after the delimiter, returned in `apiResponse.prefixes`.
 *     Duplicate prefixes are omitted.
 * @param {string} query.prefix - Filter results to objects whose names begin
 *     with this prefix.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {bool} query.versions - If true, returns File objects scoped to their
 *     versions.
 * @param {function} callback - The callback function.
 *
 * @example
 * bucket.getFiles(function(err, files, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     bucket.getFiles(nextQuery, function(err, files, nextQ, apiResponse) {});
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
 * }, function(err, files, nextQuery, apiResponse) {});
 *
 * //-
 * // If your bucket has versioning enabled, you can get all of your files
 * // scoped to their generation.
 * //-
 * bucket.getFiles({
 *   versions: true
 * }, function(err, files, nextQuery, apiResponse) {
 *   // Each file is scoped to its generation.
 * });
 */
Bucket.prototype.getFiles = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  this.makeReq_('GET', '/o', query, true, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var files = (resp.items || []).map(function(item) {
      var options = {};

      if (query.versions) {
        options.generation = item.generation;
      }

      var file = self.file(item.name, options);
      file.metadata = item;

      return file;
    });

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, { pageToken: resp.nextPageToken });
    }

    callback(null, files, nextQuery, resp);
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
 * bucket.getMetadata(function(err, metadata, apiResponse) {});
 */
Bucket.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('GET', '', null, true, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }
    this.metadata = resp;
    callback(null, this.metadata, resp);
  }.bind(this));
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
 * files have been procssed, after which they will be returned as an array as
 * the first argument to your callback.
 *
 * NOTE: This may cause the process to be long-running and use a high number of
 * requests. Use with caution.
 *
 * @param {object=} options - The configuration object.
 * @param {boolean} options.includeFiles - Make each file in the bucket private.
 *     Default: `false`.
 * @param {boolean} options.force - Queue errors occurred while making files
 *     private until all files have been processed.
 * @param {function} callback - The callback function.
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
 */
Bucket.prototype.makePrivate = function(options, callback) {
  var self = this;

  if (util.is(options, 'function')) {
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
    var metadata = { acl: null };

    self.makeReq_('PATCH', '', query, metadata, function(err, resp) {
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
 * files have been procssed, after which they will be returned as an array as
 * the first argument to your callback.
 *
 * NOTE: This may cause the process to be long-running and use a high number of
 * requests. Use with caution.
 *
 * @param {object=} options - The configuration object.
 * @param {boolean} options.includeFiles - Make each file in the bucket publicly
 *     readable. Default: `false`.
 * @param {boolean} options.force - Queue errors occurred while making files
 *     public until all files have been processed.
 * @param {function} callback - The callback function.
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
 */
Bucket.prototype.makePublic = function(options, callback) {
  var self = this;

  if (util.is(options, 'function')) {
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
 * Set the bucket's metadata.
 *
 * @param {object} metadata - The metadata you wish to set.
 * @param {function=} callback - The callback function.
 *
 * @example
 * //-
 * // Set website metadata field on the bucket.
 * //-
 * bucket.setMetadata({
 *   website: {
 *     mainPageSuffix: 'http://example.com',
 *     notFoundPage: 'http://example.com/404.html'
 *   }
 * }, function(err, metadata, apiResponse) {});
 *
 * //-
 * // Enable versioning for your bucket.
 * //-
 * bucket.setMetadata({
 *   versioning: {
 *     enabled: true
 *   }
 * }, function(err, metadata, apiResponse) {});
 */
Bucket.prototype.setMetadata = function(metadata, callback) {
  var that = this;
  callback = callback || util.noop;

  this.makeReq_('PATCH', '', null, metadata, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    that.metadata = resp;

    callback(null, that.metadata, resp);
  });
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
 *     event: 'Fall trip to the zoo'
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
      .on('error', function(err) {
        callback(err);
      })
      .on('complete', function() {
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
 * @param {boolean} options.force - Supress errors until all files have been
 *     processed.
 * @param {boolean} options.private - Make files private.
 * @param {boolean} options.public - Make files public.
 * @param {function} callback - The callback function.
 */
Bucket.prototype.makeAllFilesPublicPrivate_ = function(options, callback) {
  var self = this;

  var MAX_PARALLEL_LIMIT = 10;
  var errors = [];
  var updatedFiles = [];

  // Start processing files, iteratively fetching more as necessary.
  processFiles({}, function (err) {
    if (err || errors.length > 0) {
      callback(err || errors, updatedFiles);
      return;
    }

    callback(null, updatedFiles);
  });

  function processFiles(query, callback) {
    self.getFiles(query, function(err, files, nextQuery) {
      if (err) {
        callback(err);
        return;
      }

      // Iterate through each file and make it public or private.
      async.eachLimit(files, MAX_PARALLEL_LIMIT, processFile, function(err) {
        if (err) {
          callback(err);
          return;
        }

        if (nextQuery) {
          processFiles(nextQuery, callback);
          return;
        }

        callback();
      });
    });
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
