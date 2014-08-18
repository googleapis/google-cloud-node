/**
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

/**
 * @module storage
 */

'use strict';

var events = require('events');
var fs = require('fs');
var nodeutil = require('util');
var stream = require('stream');
var uuid = require('node-uuid');

/** @type {module:common/connection} */
var conn = require('../common/connection.js');

/** @type {module:common/util} */
var util = require('../common/util.js');

/**
 * Required scopes for Google Cloud Storage API.
 * @const {array}
 */
var SCOPES = ['https://www.googleapis.com/auth/devstorage.full_control'];

/**
 * @const {string}
 */
var STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';

/**
 * @const {string}
 */
var STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

/**
 * Readable stream implementation to stream the given buffer.
 *
 * @private
 *
 * @constructor
 *
 * @param {buffer} buffer - The buffer to stream.
 */
function BufferStream(buffer) {
  stream.Readable.call(this);
  this.data = buffer;
}

nodeutil.inherits(BufferStream, stream.Readable);

/**
 * Push the provided buffer to the stream.
 */
BufferStream.prototype._read = function() {
  this.push(this.data);
  this.push(null);
};

/**
 * A readable stream that streams the contents of a file.
 *
 * @private
 *
 * @constructor
 * @mixes {stream#Readable}
 *
 * @param {module:storage~Bucket} bucket - Bucket the source file belongs to.
 * @param {string} name - Name of the file to read from.
 *
 * @example
 * ```js
 * var myBucket = new Bucket({
 *   bucketName: 'my-bucket'
 * });
 * var readStream = new ReadStream(myBucket, 'file/to/fetch.pdf');
 * ```
 */
function ReadStream(bucket, name) {
  events.EventEmitter.call(this);

  this.bucket = bucket;
  this.name = name;
  this.remoteStream = null;

  this.open();
}

nodeutil.inherits(ReadStream, events.EventEmitter);

/**
 * Open a connection to retrieve a file.
 */
ReadStream.prototype.open = function() {
  var that = this;
  this.bucket.stat(this.name, function(err, metadata) {
    if (err) {
      that.emit('error', err);
      return;
    }
    that.bucket.conn.createAuthorizedReq(
        { uri: metadata.mediaLink }, function(err, req) {
      if (err) {
        that.emit('error', err);
        return;
      }
      that.remoteStream = that.bucket.conn.requester(req);
      that.remoteStream.on('complete', that.emit.bind(that, 'complete'));
      that.emit('readable');
    });
  });
};

/**
 * Pipe the output to the destination stream with the provided options.
 *
 * @param {stream} dest - Destination stream to write to.
 * @param {object} opts - Piping options.
 * @return {stream}
 */
ReadStream.prototype.pipe = function(dest, opts) {
  var that = this;
  if (!that.remoteStream) {
    return that.once('readable', function() {
      that.pipe(dest, opts);
    });
  }
  // Register an on-data listener instead of piping, so we can avoid writing if
  // the request ends up with a non-200 response.
  that.remoteStream.on('data', function(data) {
    if (!that.errored) {
      that.emit('data', data);
      dest.write(data);
    }
  });
  return dest;
};

/**
 * Google Cloud Storage allows you to store data on Google infrastructure. See
 * the guide on {@link https://developers.google.com/storage} to create a
 * bucket.
 *
 * @throws if a bucket name isn't provided.
 *
 * @param {object} options - Configuration options.
 * @param {string} options.bucketName - Name of the bucket.
 * @param {string} options.keyFileName - Full path to the JSON key downloaded
 *     from the Google Developers Console.
 *
 * @example
 * ```js
 * var gcloud = require('gcloud');
 * var bucket;
 *
 * // From Google Compute Engine
 * bucket = new gcloud.storage.Bucket({
 *   bucketName: YOUR_BUCKET_NAME
 * });
 *
 * // From elsewhere
 * bucket = new gcloud.storage.Bucket({
 *   bucketName: YOUR_BUCKET_NAME,
 *   keyFilename: '/path/to/the/key.json'
 * });
 * ```
 */
function Bucket(options) {
  if (!options.bucketName) {
    throw Error('A bucket name is needed to use Google Cloud Storage');
  }
  this.bucketName = options.bucketName;
  this.conn = new conn.Connection({
    keyFilename: options.keyFilename,
    scopes: SCOPES
  });
}

/**
 * List files from the current bucket.
 *
 * @param {object=} query - Query object.
 * @param {string} query.delimeter - Results will contain only objects whose
 *     names, aside from the prefix, do not contain delimiter. Objects whose
 *     names, aside from the prefix, contain delimiter will have their name
 *     truncated after the delimiter, returned in prefixes. Duplicate prefixes
 *     are omitted.
 * @param {string} query.prefix - Filters results to objects whose names begin
 *     with this prefix.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * bucket.list(function(err, files, nextQuery) {
 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     bucket.list(nextQuery, function(err, files, nextQuery) {});
 *   }
 * });
 *
 * // Fetch using a query.
 * bucket.list({ maxResults: 5 }, function(err, files, nextQuery) {});
 * ```
 */
Bucket.prototype.list = function(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = {};
  }
  this.makeReq('GET', 'o', query, true, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = util.extend({}, query);
      nextQuery.pageToken = resp.nextPageToken;
    }
    callback(null, resp.items, nextQuery);
  });
};

/**
 * Stat a file.
 *
 * @param {string} name - Name of the remote file.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * bucket.stat('filename', function(err, metadata){});
 * ```
 */
Bucket.prototype.stat = function(name, callback) {
  var path = util.format('o/{name}', { name: name });
  this.makeReq('GET', path, null, true, callback);
};

/**
 * Copy an existing file. If no bucket name is provided for the destination
 * file, the current bucket name will be used.
 *
 * @throws if the destination filename is not provided.
 *
 * @param {string} name - Name of the existing file.
 * @param {object} metadata - Destination file metadata object.
 * @param {string} metadata.name - Name of the destination file.
 * @param {string=} metadata.bucket - Destination bucket for the file. If none
 *     is provided, the source's bucket name is used.
 * @param {function=} callback - The callback function.
 *
 * @example
 * ```js
 * bucket.copy('filename', {
 *    bucket: 'destination-bucket',
 *    name: 'destination-filename'
 * }, function(err) {});
 * ```
 */
Bucket.prototype.copy = function(name, metadata, callback) {
  callback = callback || util.noop;
  if (!metadata.name) {
    throw new Error('Destination file should have a name.');
  }
  if (!metadata.bucket) {
    metadata.bucket = this.bucketName;
  }
  var path = util.format('o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
    srcName: name,
    destBucket: metadata.bucket,
    destName: metadata.name
  });
  delete metadata.name;
  delete metadata.bucket;
  this.makeReq('POST', path, null, metadata, callback);
};

/**
 * Remove a file.
 *
 * @param {string} name - Name of the file to remove.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * bucket.remove('filename', function(err) {});
 * ```
 */
Bucket.prototype.remove = function(name, callback) {
  var path = util.format('o/{name}', { name: name });
  this.makeReq('DELETE', path, null, true, callback);
};

/**
 * Create a readable stream to read contents of the provided remote file. It
 * can be piped to a write stream, or listened to for 'data' and `complete`
 * events to read a file's contents.
 *
 * @param {string} name - Name of the remote file.
 * @return {ReadStream}
 *
 * @example
 * ```js
 * // Create a readable stream and write the file contents to "/path/to/file"
 * bucket.createReadStream('filename')
 *    .pipe(fs.createWriteStream('/path/to/file'));
 * ```
 */
Bucket.prototype.createReadStream = function(name) {
  return new ReadStream(this, name);
};

/**
 * Write the provided data to the destination with optional metadata.
 *
 * @param {string} name - Name of the remote file.
 * @param {object} options - Configuration object.
 * @param {String|Buffer|ReadableStream=} options.data - Data.
 * @param {string=} options.filename - Path of the source file.
 * @param {object=} options.metadata - Optional metadata.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * // Upload file.pdf
 * bucket.write('filename', {
 *   filename: '/path/to/file.pdf',
 *   metadata: {
 *     // optional metadata
 *   }
 * }, function(err) {});
 *
 * // Upload a readable stream
 * bucket.write('filename', {
 *   data: fs.createReadStream('/path/to/file.pdf')
 * }, function(err) {});
 *
 * // Upload "Hello World" as file contents. `data` can be any string or buffer
 * bucket.write('filename', {
 *   data: 'Hello World'
 * }, function(err) {});
 * ```
 */
Bucket.prototype.write = function(name, options, callback) {
  callback = callback || util.noop;
  var metadata = options.metadata || {};
  var readStream = options.data;
  var isStringOrBuffer =
      typeof readStream === 'string' || readStream instanceof Buffer;

  if (options.filename) {
    readStream = fs.createReadStream(options.filename);
  } else if (readStream && isStringOrBuffer) {
    readStream = new BufferStream(readStream);
  }

  if (!readStream) {
    // metadata only write
    this.makeReq('PATCH', 'o/' + name, null, metadata, callback);
    return;
  }

  this.getRemoteStream_(name, metadata, function(err, remoteStream) {
    if (err) {
      callback(err);
      return;
    }
    // TODO(jbd): High potential of multiple callback invokes.
    readStream.pipe(remoteStream)
        .on('error', callback);
    remoteStream
        .on('error', callback)
        .on('complete', function(resp) {
          util.handleResp(null, resp, resp.body, callback);
        });
  });
};

/**
 * Get a remote stream to begin piping a readable stream to.
 *
 * @param {string} name - The desired name of the file.
 * @param {object} metadata - File descriptive metadata.
 * @param {function} callback - The callback function.
 */
Bucket.prototype.getRemoteStream_ = function(name, metadata, callback) {
  var boundary = uuid.v4();
  var that = this;
  metadata.contentType = metadata.contentType || 'text/plain';
  this.conn.createAuthorizedReq({
    method: 'POST',
    uri: util.format('{base}/{bucket}/o', {
      base: STORAGE_UPLOAD_BASE_URL,
      bucket: this.bucketName
    }),
    qs: {
      name: name,
      uploadType: 'multipart'
    },
    headers: {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    }
  }, function(err, req) {
    if (err) {
      callback(err);
      return;
    }
    var remoteStream = that.conn.requester(req);
    remoteStream.callback = util.noop;
    remoteStream.write('--' + boundary + '\n');
    remoteStream.write('Content-Type: application/json\n\n');
    remoteStream.write(JSON.stringify(metadata));
    remoteStream.write('\n\n');
    remoteStream.write('--' + boundary + '\n');
    remoteStream.write('Content-Type: ' + metadata.contentType + '\n\n');
    var oldEndFn = remoteStream.end;
    remoteStream.end = function(data, encoding, callback) {
      data = data || '';
      data += '\n--' + boundary + '--\n';
      remoteStream.write(data, encoding, callback);
      oldEndFn.apply(this);
    };
    callback(null, remoteStream);
  });
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Bucket.prototype.makeReq = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: util.format('{base}/{bucket}/{path}', {
      base: STORAGE_BASE_URL,
      bucket: this.bucketName,
      path: path
    })
  };
  if (body) {
    reqOpts.json = body;
  }
  this.conn.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

module.exports.Bucket = Bucket;
