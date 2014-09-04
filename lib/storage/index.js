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

var crypto = require('crypto');
var duplexify = require('duplexify');
var nodeutil = require('util');
var stream = require('stream');
var uuid = require('node-uuid');

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

/**
 * @const {string}
 * @private
 */
var STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

/**
 * Readable stream implementation to stream the given buffer.
 *
 * @constructor
 *
 * @param {buffer} buffer - The buffer to stream.
 *
 * @private
 */
function BufferStream(buffer) {
  stream.Readable.call(this);
  this.data = buffer;
}

nodeutil.inherits(BufferStream, stream.Readable);

/**
 * Push the provided buffer to the stream.
 * @private
 */
BufferStream.prototype._read = function() {
  this.push(this.data);
  this.push(null);
};

/**
 * Google Cloud Storage allows you to store data on Google infrastructure. See
 * the guide on {@link https://developers.google.com/storage} to create a
 * bucket.
 *
 * @alias module:storage

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
 * var storage = gcloud.storage;
 * var bucket;
 *
 * // From Google Compute Engine
 * bucket = new storage.Bucket({
 *   bucketName: YOUR_BUCKET_NAME
 * });
 *
 * // From elsewhere
 * bucket = new storage.Bucket({
 *   bucketName: YOUR_BUCKET_NAME,
 *   keyFilename: '/path/to/the/key.json'
 * });
 */
function Bucket(options) {
  if (!options.bucketName) {
    throw Error('A bucket name is needed to use Google Cloud Storage');
  }
  this.bucketName = options.bucketName;
  this.conn = new conn.Connection({
    credentials: options.credentials,
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
 * bucket.list(function(err, files, nextQuery) {
 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     bucket.list(nextQuery, function(err, files, nextQuery) {});
 *   }
 * });
 *
 * // Fetch using a query.
 * bucket.list({ maxResults: 5 }, function(err, files, nextQuery) {});
 */
Bucket.prototype.list = function(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = {};
  }
  this.makeReq('GET', 'o', query, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
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
 * bucket.stat('filename', function(err, metadata){});
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
 * bucket.copy('filename', {
 *    bucket: 'destination-bucket',
 *    name: 'destination-filename'
 * }, function(err) {});
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
 * bucket.remove('filename', function(err) {});
 */
Bucket.prototype.remove = function(name, callback) {
  var path = util.format('o/{name}', { name: name });
  this.makeReq('DELETE', path, null, true, callback);
};

/**
 * Get a signed URL to allow limited time access to a resource.
 *
 * {@link https://developers.google.com/storage/docs/accesscontrol#Signed-URLs}
 *
 * @param {object} options - Configuration object.
 * @param {string} options.action - "read", "write", or "delete"
 * @param {string=} options.contentMd5 - The MD5 digest value in base64. If you
 *     provide this, the client must provide this HTTP header with this same
 *     value in its request.
 * @param {string=} options.contentType - If you provide this value, the client
 *     must provide this HTTP header set to the same value.
 * @param {number} options.expires - Timestamp (seconds since epoch) when this
 *     link will expire.
 * @param {string=} options.extensionHeaders - If these headers are used, the
 *     server will check to make sure that the client provides matching values.
 * @param {string} options.resource - Resource to allow access to.
 * @return {string}
 *
 * @example
 * var signedUrl = bucket.getSignedUrl({
 *   action: 'read',
 *   expires: Math.round(Date.now() / 1000) + (60 * 60 * 24 * 14), // 2 weeks.
 *   resource: 'my-dog.jpg'
 * });
 */
Bucket.prototype.getSignedUrl = function(options) {
  options.action = {
      read: 'GET',
      write: 'PUT',
      delete: 'DELETE'
    }[options.action];

  options.resource = util.format('/{bucket}/{resource}', {
      bucket: this.bucketName,
      resource: options.resource
    });

  var sign = crypto.createSign('RSA-SHA256');
  sign.update([
      options.action,
      (options.contentMd5 || ''),
      (options.contentType || ''),
      options.expires,
      (options.extensionHeaders || '') + options.resource
    ].join('\n'));
  var signature = sign.sign(this.conn.credentials.private_key, 'base64');

  return [
      'http://storage.googleapis.com' + options.resource,
      '?GoogleAccessId=' + this.conn.credentials.client_email,
      '&Expires=' + options.expires,
      '&Signature=' + encodeURIComponent(signature)
    ].join('');
};

/**
 * Create a readable stream to read contents of the provided remote file. It
 * can be piped to a write stream, or listened to for 'data' events to read a
 * file's contents.
 *
 * @param {string} name - Name of the remote file.
 * @return {ReadStream}
 *
 * @example
 * // Create a readable stream and write the file contents to "local-file-path".
 * var fs = require('fs');
 *
 * bucket.createReadStream('remote-file-name')
 *    .pipe(fs.createWriteStream('local-file-path'))
 *    .on('error', function(err) {});
 */
Bucket.prototype.createReadStream = function(name) {
  var that = this;
  var dup = duplexify();
  this.stat(name, function(err, metadata) {
    if (err) {
      dup.emit('error', err);
      return;
    }
    that.conn.createAuthorizedReq(
        { uri: metadata.mediaLink }, function(err, req) {
      if (err) {
        dup.emit('error', err);
        return;
      }
      dup.setReadable(that.conn.requester(req));
    });
  });
  return dup;
};

/**
 * Create a Duplex to handle the upload of a file.
 *
 * @param {string} name - Name of the remote file to create.
 * @param {object=} metadata - Optional metadata.
 * @return {stream}
 *
 * @example
 * // Read from a local file and pipe to your bucket.
 * var fs = require('fs');
 *
 * fs.createReadStream('local-file-path')
 *     .pipe(bucket.createWriteStream('remote-file-name'))
 *     .on('error', function(err) {})
 *     .on('complete', function(fileObject) {});
 */
Bucket.prototype.createWriteStream = function(name, metadata) {
  var dup = duplexify();
  this.getWritableStream_(name, (metadata || {}), function(err, writable) {
    if (err) {
      dup.emit('error', err);
      return;
    }
    writable.on('complete', function(res) {
      util.handleResp(null, res, res.body, function(err, data) {
        if (err) {
          dup.emit('error', err);
          return;
        }
        dup.emit('complete', data);
      });
    });
    dup.setWritable(writable);
    dup.pipe(writable);
  });
  return dup;
};

/**
 * Write the provided data to the destination with optional metadata.
 *
 * @param {string} name - Name of the remote file toc reate.
 * @param {object|string|buffer} options - Configuration object or data.
 * @param {object=} options.metadata - Optional metadata.
 * @param {function=} callback - The callback function.
 *
 * @example
 * // Upload "Hello World" as file contents. `data` can be any string or buffer.
 * bucket.write('filename', {
 *   data: 'Hello World'
 * }, function(err) {});
 *
 * // A shorthand for the above.
 * bucket.write('filename', 'Hello World', function(err) {});
 */
Bucket.prototype.write = function(name, options, callback) {
  callback = callback || util.noop;
  var data = typeof options === 'object' ? options.data : options;
  var metadata = options.metadata || {};

  if (typeof data === 'undefined') {
    // metadata only write
    this.makeReq('PATCH', 'o/' + name, null, metadata, callback);
    return;
  }

  if (typeof data === 'string' || data instanceof Buffer) {
    new BufferStream(data).pipe(this.createWriteStream(name, metadata))
        .on('error', callback)
        .on('complete', callback.bind(null, null));
  }
};

/**
 * Get a remote stream to begin piping a readable stream to.
 *
 * @private
 *
 * @param {string} name - The desired name of the file.
 * @param {object} metadata - File descriptive metadata.
 * @param {function} callback - The callback function.
 */
Bucket.prototype.getWritableStream_ = function(name, metadata, callback) {
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
      data = (data || '') + '\n--' + boundary + '--\n';
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
