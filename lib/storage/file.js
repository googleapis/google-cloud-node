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
 * @module storage/file
 */

'use strict';

var crypto = require('crypto');
var duplexify = require('duplexify');
var extend = require('extend');
var uuid = require('node-uuid');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string}
 * @private
 */
var STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

/*! Developer Documentation
 *
 * @param {module:storage/bucket} bucket - The Bucket instance this file is
 *     attached to.
 * @param {string} name - The name of the remote file.
 * @param {object=} metadata - Metadata to set on the object. This is useful
 *     when you are creating a file for the first time, to prevent making an
 *     extra call to `setMetadata`.
 */
/**
 * A File object is created from your Bucket object using
 * {module:storage/bucket#file}.
 *
 * @alias module:storage/file
 * @constructor
 */
function File(bucket, name, metadata) {
  if (!name) {
    throw Error('A file name must be specified.');
  }

  this.bucket = bucket;
  this.makeReq_ = bucket.makeReq_.bind(bucket);
  this.metadata = metadata || {};
  Object.defineProperty(this, 'name', {
    enumerable: true,
    value: name
  });
}

/**
 * Copy this file to another file. By default, this will copy the file to the
 * same bucket, but you can choose to copy it to another Bucket by providing
 * either a Bucket or File object.
 *
 * @throws {Error} If the destination file is not provided.
 *
 * @param {string|{module:storage/bucket}|{module:storage/file}} destination -
 *     Destination file.
 * @param {function=} callback - The callback function.
 *
 * @example
 * //-
 * // You can pass in a variety of types for the destination.
 * //
 * // For all of the below examples, assume we are working with the following
 * // Bucket and File objects.
 * //-
 * var bucket = storage.bucket('my-bucket');
 * var file = bucket.file('my-image.png');
 *
 * //-
 * // If you pass in a string for the destination, the file is copied to its
 * // current bucket, under the new name provided.
 * //-
 * file.copy('my-image-copy.png', function(err, copiedFile) {
 *   // `my-bucket` now contains:
 *   // - "my-image.png"
 *   // - "my-image-copy.png"
 *
 *   // `copiedFile` is an instance of a File object that refers to your new
 *   // file.
 * });
 *
 * //-
 * // If you pass in a Bucket object, the file will be copied to that bucket
 * // using the same name.
 * //-
 * var anotherBucket = storage.bucket('another-bucket');
 * file.copy(anotherBucket, function(err, copiedFile) {
 *   // `my-bucket` still contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-image.png"
 *
 *   // `copiedFile` is an instance of a File object that refers to your new
 *   // file.
 * });
 *
 * //-
 * // If you pass in a File object, you have complete control over the new
 * // bucket and filename.
 * //-
 * var anotherFile = anotherBucket.file('my-awesome-image.png');
 * file.copy(anotherFile, function(err, copiedFile) {
 *   // `my-bucket` still contains:
 *   // - "my-image.png"
 *   //
 *   // `another-bucket` now contains:
 *   // - "my-awesome-image.png"
 *
 *   // Note:
 *   // The `copiedFile` parameter is equal to `anotherFile`.
 * });
 */
File.prototype.copy = function(destination, callback) {
  var noDestinationError = new Error('Destination file should have a name.');
  if (!destination) {
    throw noDestinationError;
  }
  callback = callback || util.noop;
  var destBucket;
  var destName;
  var newFile;
  if (util.is(destination, 'string')) {
    destBucket = this.bucket;
    destName = destination;
  }
  if (destination.constructor && destination.constructor.name === 'Bucket') {
    destBucket = destination;
    destName = this.name;
  }
  if (destination instanceof File) {
    destBucket = destination.bucket;
    destName = destination.name;
    newFile = destination;
  }
  if (!destName) {
    throw noDestinationError;
  }
  var path = util.format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
    srcName: this.name,
    destBucket: destBucket.name,
    destName: destName
  });
  this.makeReq_('POST', path, null, {}, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, newFile || destBucket.file(destName));
  });
};


/**
 * Create a readable stream to read the contents of the remote file. It can be
 * piped to a writable stream or listened to for 'data' events to read a file's
 * contents.
 *
 * @example
 * //-
 * // <h4>Downloading a File</h4>
 * //
 * // The example below demonstrates how we can reference a remote file, then
 * // pipe its contents to a local file. This is effectively creating a local
 * // backup of your remote data.
 * //-
 * var fs = require('fs');
 * var image = myBucket.file('image.png');
 *
 * image.createReadStream()
 *   .pipe(fs.createWriteStream('/Users/stephen/Photos/image.png'))
 *   .on('error', function(err) {});
 */
File.prototype.createReadStream = function() {
  var bucket = this.bucket;
  var dup = duplexify();
  function createAuthorizedReq(uri) {
    bucket.connection_.createAuthorizedReq({ uri: uri }, function(err, req) {
      if (err) {
        dup.emit('error', err);
        return;
      }
      dup.setReadable(bucket.connection_.requester(req));
    });
  }
  if (this.metadata.mediaLink) {
    createAuthorizedReq(this.metadata.mediaLink);
  } else {
    this.getMetadata(function(err, metadata) {
      if (err) {
        dup.emit('error', err);
        return;
      }
      createAuthorizedReq(metadata.mediaLink);
    });
  }
  return dup;
};

/**
 * Create a writable stream to overwrite the contents of the file in your
 * bucket.
 *
 * A File object can also be used to create files for the first time.
 *
 * @param {object=} metadata - Set the metadata for this file.
 *
 * @example
 * //-
 * // <h4>Uploading a File</h4>
 * //
 * // Now, consider a case where we want to upload a file to your bucket. You
 * // have the option of using {module:storage/bucket#upload}, but that is just
 * // a convenience method which will do the following.
 * //-
 * var fs = require('fs');
 * var image = myBucket.file('image.png');
 *
 * fs.createReadStream('/Users/stephen/Photos/birthday-at-the-zoo/panda.jpg')
 *   .pipe(image.createWriteStream())
 *   .on('error', function(err) {});
 *
 * //-
 * // <h4>Uploading a File with Metadata</h4>
 * //
 * // One last case you may run into is when you want to upload a file to your
 * // bucket and set its metadata at the same time. Like above, you can use
 * // {module:storage/bucket#upload} to do this, which is just a wrapper around
 * // the following.
 * //-
 * var fs = require('fs');
 * var image = myBucket.file('image.png');
 *
 * fs.createReadStream('/Users/stephen/Photos/birthday-at-the-zoo/panda.jpg')
 *   .pipe(image.createWriteStream({ contentType: 'image/jpeg' }))
 *   .on('error', function(err) {});
 */
File.prototype.createWriteStream = function(metadata) {
  var that = this;
  var dup = duplexify();
  this.getWritableStream_(metadata, function(err, writable) {
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
        that.metadata = data;
        dup.emit('complete', data);
      });
    });
    dup.setWritable(writable);
    dup.pipe(writable);
  });
  return dup;
};

/**
 * Delete the file.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.delete(function(err) {});
 */
File.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '/o/' + this.name, null, true, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback();
  }.bind(this));
};

/**
 * Get the file's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.getMetadata(function(err, metadata) {});
 */
File.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('GET', '/o/' + this.name, null, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    this.metadata = resp;
    callback(null, this.metadata);
  }.bind(this));
};

/**
 * Get a signed URL to allow limited time access to the file.
 *
 * {@link https://developers.google.com/storage/docs/accesscontrol#Signed-URLs}
 *
 * @throws {Error} if an expiration timestamp from the past is given.
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
 *
 * @example
 * file.getSignedUrl({
 *   action: 'read',
 *   expires: Math.round(Date.now() / 1000) + (60 * 60 * 24 * 14) // 2 weeks.
 * }, function(err, url) {});
 */
File.prototype.getSignedUrl = function(options, callback) {
  if (options.expires < Math.floor(Date.now() / 1000)) {
    throw new Error('An expiration date cannot be in the past.');
  }

  options.action = {
    read: 'GET',
    write: 'PUT',
    delete: 'DELETE'
  }[options.action];

  options.resource = '/' + this.bucket.name + '/' + this.name;

  this.bucket.connection_.getCredentials(function(err, credentials) {
    if (err) {
      callback(err);
      return;
    }

    var sign = crypto.createSign('RSA-SHA256');
    sign.update([
      options.action,
      (options.contentMd5 || ''),
      (options.contentType || ''),
      options.expires,
      (options.extensionHeaders || '') + options.resource
    ].join('\n'));
    var signature = sign.sign(credentials.private_key, 'base64');

    callback(null, [
      'http://storage.googleapis.com' + options.resource,
      '?GoogleAccessId=' + credentials.client_email,
      '&Expires=' + options.expires,
      '&Signature=' + encodeURIComponent(signature)
    ].join(''));
  });
};

/**
 * Set the file's metadata.
 *
 * @param {object} metadata - The metadata you wish to set.
 * @param {function=} callback - The callback function.
 *
 * @example
 * file.setMetadata({
 *   contentType: 'application/x-font-ttf',
 *   metadata: {
 *     my: 'custom',
 *     properties: 'go here'
 *   }
 * }, function(err, metadata) {});
 */
File.prototype.setMetadata = function(metadata, callback) {
  callback = callback || util.noop;
  this.makeReq_(
      'PATCH', '/o/' + this.name, null, metadata, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    this.metadata = resp;
    callback(null, this.metadata);
  }.bind(this));
};

/*! Developer Documentation
 *
 * Private Methods
 *
 * These methods deal with creating and maintaining the lifecycle of a stream.
 * All File objects are Duplex streams, which will allow a reader to pipe data
 * to the remote endpoint. Likewise, you can pipe data from a remote endpoint to
 * a writer.
 *
 * Duplexify is used to allow us to asynchronously set the readable and writable
 * portions of this stream. We can't accept data for buffering until we have
 * made an authorized connection. Once we have such a connection, we call
 * `setReadable` and/or `setWritable` on the File instance (which is also a
 * Duplexify instance), which then opens the pipe for more data to come in or go
 * out.
 */

/**
 * Get a remote stream to begin piping a readable stream to.
 *
 * @private
 */
File.prototype.getWritableStream_ = function(metadata, callback) {
  if (!callback) {
    callback = metadata;
    metadata = {};
  }
  var that = this;
  var boundary = uuid.v4();
  metadata = extend({ contentType: 'text/plain' }, metadata);
  this.bucket.connection_.createAuthorizedReq({
    method: 'POST',
    uri: util.format('{base}/{bucket}/o', {
      base: STORAGE_UPLOAD_BASE_URL,
      bucket: that.bucket.name
    }),
    qs: {
      name: this.name,
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
    var remoteStream = that.bucket.connection_.requester(req);
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

module.exports = File;
