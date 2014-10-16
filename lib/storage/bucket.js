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
var path = require('path');

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
function Bucket(options) {
  this.connection_ = options.connection_;
  this.metadata = {};
  this.name = options.name || options.bucketName;

  if (!this.name) {
    throw Error('A bucket name is needed to use Google Cloud Storage.');
  }
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
  this.makeReq_(
      'PATCH', '/b/' + this.name, null, metadata, function(err, resp) {
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
 * @param {string=|module:storage/file=} destination - The place to save your
 *     file. If given a string, the file will be uploaded to the bucket using
 *     the string as a filename. When given a File object, your local file will
 *     be uploaded to the File object's bucket and under the File object's name.
 *     Lastly, when this argument is omitted, the file is uploaded to your
 *     bucket using the name of the local file.
 * @param {object=} metadata - Metadata to set for your file.
 * @param {function} callback - The callback function.
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
 * //-
 * bucket.upload('/local/path/image.png', 'new-image.png', function(err, file) {
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
 * var file = bucket.file('existing-file.png');
 * bucket.upload('/local/path/image.png', file, function(err, newFile) {
 *   // Your bucket now contains:
 *   // - "existing-file.png" (with the contents of `/local/path/image.png')
 *
 *   // Note:
 *   // The `newFile` parameter is equal to `file`.
 * });
 */
Bucket.prototype.upload = function(localPath, destination, metadata, callback) {
  var name;
  var newFile;
  switch (arguments.length) {
    case 4:
      break;
    case 3:
      callback = metadata;
      if (util.is(destination, 'object')) {
        metadata = destination;
      } else {
        metadata = {};
      }
      /* falls through */
    default:
      callback = callback || destination;
      name = path.basename(localPath);
      break;
  }
  metadata = metadata || {};
  callback = callback || util.noop;
  if (util.is(destination, 'string')) {
    name = destination;
  }
  if (destination instanceof File) {
    name = destination.name;
    newFile = destination;
  }
  newFile = newFile || this.file(name);
  fs.createReadStream(localPath)
    .pipe(newFile.createWriteStream(metadata))
    .on('error', callback)
    .on('complete', function() {
      callback(null, newFile);
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
Bucket.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: STORAGE_BASE_URL + '/' + this.name + path
  };
  if (body) {
    reqOpts.json = body;
  }
  this.connection_.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

module.exports = Bucket;
