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

'use strict';

var events = require('events');
var fs = require('fs');
var nodeutil = require('util');
var stream = require('stream');
var uuid = require('node-uuid');

var conn = require('../common/connection.js');
var util = require('../common/util.js');

/**
 * Required scopes for Google Cloud Storage API.
 * @type {Array}
 */
var SCOPES = ['https://www.googleapis.com/auth/devstorage.full_control'];

var STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';
var STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

var reqStreamToCallback = function(st, callback) {
  st.callback = util.noop;
  st.on('error', function(err) {
    callback(err);
  });
  st.on('complete', function(resp) {
    util.handleResp(null, resp, resp.body, callback);
  });
};

/**
 * BufferStream is a readable stream implementation
 * that stream the given buffer.
 */
function BufferStream(buffer) {
  stream.Readable.call(this);
  this.data = buffer;
}

/**
 * Inherit from stream.Readable.
 */
nodeutil.inherits(BufferStream, stream.Readable);

/**
 * @private
 * Pushes the provided buffer to the stream.
 */
BufferStream.prototype._read = function() {
  this.push(this.data);
  this.push(null);
};

/**
 * Read stream is a readable stream that streams the
 * contents of a file.
 * @param {Bucket} bucket Bucket the source file belongs to.
 * @param {String} name   Name of the file to read from.
 */
function ReadStream(bucket, name) {
  events.EventEmitter.call(this);

  this.bucket = bucket;
  this.name = name;
  this.remoteStream = null;

  this.open();
}

/**
 * Inherits EventEmitter.
 */
nodeutil.inherits(ReadStream, events.EventEmitter);

ReadStream.prototype.open = function() {
  var that = this;
  var bucket = this.bucket;
  var callback = function(err, req) {
    if (err) {
      that.emit('error', err);
      return;
    }
    that.remoteStream = bucket.conn.requester(req);
    that.remoteStream.on('complete', function(resp) {
      that.emit('complete', resp);
    });
    that.emit('readable');
  };
  bucket.stat(this.name, function(err, metadata) {
    if (err) {
      that.emit('error', err);
      return;
    }
    bucket.conn.createAuthorizedReq({ uri: metadata.mediaLink }, callback);
  });
};

/**
 * Pipes the output to the destination stream
 * with the provided options.
 * @param  {Stream} dest Destination stream to write to.
 * @param  {Object} opts Piping options.
 * @return {Stream}      Returns the destination stream.
 */
ReadStream.prototype.pipe = function(dest, opts) {
  var that = this;
  if (!that.remoteStream) {
    return that.once('readable', function() {
      that.pipe(dest, opts);
    });
  }
  // Register an on-data listener instead of
  // piping, so we can avoid writing if request
  // ends up with a non-200 response.
  that.remoteStream.on('data', function(data) {
    if(!that.errored) {
      that.emit('data', data);
      dest.write(data);
    }
  });
  return dest;
};

/**
 * A bucket is a Google Cloud Storage bucket. See the
 * guide on https://developers.google.com/storage to
 * create a bucket.
 */
function Bucket(opts) {
  if (!opts.bucketName) {
    throw Error('A bucket name is needed to use Google Cloud Storage');
  }
  this.bucketName = opts.bucketName;
  this.conn = new conn.Connection({
    keyFilename: opts.keyFilename,
    scopes: SCOPES
  });
}

/**
 * Lists files from the current bucket.
 * @param  {String}   query.delimeter    Results will contain only objects
 *                                       whose names, aside from the prefix,
 *                                       do not contain delimiter. Objects whose
 *                                       names, aside from the prefix, contain
 *                                       delimiter will have their name,
 *                                       truncated after the delimiter, returned
 *                                       in prefixes. Duplicate prefixes
 *                                       are omitted.
 * @param  {String}   query.prefix       Filters results to objects whose names
 *                                       begin with this prefix.
 * @param  {Number}   query.maxResults   Maximum number of items plus prefixes
 *                                       to return.
 * @param  {String}   query.pageToken    A previously-returned page token
 *                                       representing part of the larger set of
 *                                       results to view.
 * @param  {Function} callback           Callback function.
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

// TODO: Bucket should implement writable Streaming API.

/**
 * Stats a file.
 * @param  {String}   name     Name of the remote file.
 * @param  {Function} callback Callback.
 */
Bucket.prototype.stat = function(name, callback) {
  var path = util.format('o/{name}', { name: name });
  this.makeReq('GET', path, null, true, callback);
};

/**
 * Copies an existing file.
 * @param  {String}    name            Name of the existing file.
 * @param  {String}    metadata.name   Name of the destination file.
 * @param  {String?}   metadata.bucket Optional destination bucket for
 *                                     the file. If none is provided,
 *                                     source's bucket name is used.
 * @param  {Function=} callback        Optional callback.
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
 * Removes a file.
 * @param  {String}   name     Name of the file to remove.
 * @param  {Function} callback Callback function.
 */
Bucket.prototype.remove = function(name, callback) {
  var path = util.format('o/{name}', { name: name });
  this.makeReq('DELETE', path, null, true, function(err) {
    callback(err);
  });
};

/**
 * Creates a readable stream to read contents of the
 * provided remote file.
 * @param  {String}     name Name of the remote file.
 * @return {ReadStream}      Readable stream.
 */
Bucket.prototype.createReadStream = function(name) {
  return new ReadStream(this, name);
};

/**
 * Writes the provided stream to the destination
 * with optional metadata.
 * @param  {String}    name          Name of the remote file.
 * @param  {Object=}   opts.data     A string, buffer or readable stream.
 * @param  {string=}   opts.filename Path of the source file.
 * @param  {Object=}   opts.metadata Optional metadata.
 * @param  {Function}  callback      Callback function.
 */
Bucket.prototype.write = function(name, opts, callback) {
  var that = this;

  callback = callback || util.noop;
  var metadata = opts.metadata || {};
  var stream = opts.data;
  var isStringOrBuffer = typeof stream === 'string' || stream instanceof Buffer;

  if (opts.filename) {
    stream = fs.createReadStream(opts.filename);
  } else if (stream && isStringOrBuffer) {
    stream = new BufferStream(stream);
  }

  if (!stream) {
    // metadata only write
    this.makeReq('PATCH', 'o/' + name, null, opts.metadata, callback);
    return;
  }

  var boundary = uuid.v4();
  metadata.contentType = metadata.contentType || 'text/plain';
  this.conn.createAuthorizedReq({
    method: 'POST',
    uri: util.format('{base}/{bucket}/o', {
      base: STORAGE_UPLOAD_BASE_URL,
      bucket: this.bucketName
    }),
    qs: {
      name: name, uploadType: 'multipart'
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
    var oldEndFn = remoteStream.end;
    remoteStream.end = function(data, encoding, callback) {
      data = data || '';
      data += '\n--' + boundary + '--\n';
      remoteStream.write(data, encoding, callback);
      oldEndFn.apply(this);
    };
    remoteStream.write('--' + boundary + '\n');
    remoteStream.write('Content-Type: application/json\n\n');
    remoteStream.write(JSON.stringify(metadata));
    remoteStream.write('\n\n');
    remoteStream.write('--' + boundary + '\n');
    remoteStream.write('Content-Type: ' + metadata.contentType + '\n\n');
    stream.pipe(remoteStream);
    // TODO(jbd): High potential of multiple callback invokes.
    stream.on('error', callback);
    reqStreamToCallback(remoteStream, callback);
  });
};

/**
 * Makes a new request object from the provided
 * arguments, and wraps the callback to intercept
 * non-successful responses.
 */
Bucket.prototype.makeReq = function(method, path, q, body, callback) {
  var reqOpts = {
    method: method,
    qs: q,
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
