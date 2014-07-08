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

var conn = require('../common/connection.js'),
    nodeutil = require('util'),
    events = require('events'),
    stream = require('stream'),
    fs = require('fs'),
    util = require('../common/util.js'),
    uuid = require('node-uuid');

var SCOPES = [
    'https://www.googleapis.com/auth/devstorage.full_control'];

var STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';
    STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

var reqStreamToCallback = function(st, callback) {
  st.on('error', function(err) {
    callback(err);
  });
  st.on('complete', function(resp) {
    // TODO(jbd): Buffer the response to pass the resp body
    // to the callback.
    if (resp.statusCode < 200 || resp.statusCode > 299) {
      return callback(new Error('error during request, statusCode: ' + resp.statusCode), resp);
    }
    callback(null, resp);
  });
};

function BufferStream(buffer) {
  stream.Readable.call(this);
  this.data = buffer;
}

nodeutil.inherits(BufferStream, stream.Readable);

BufferStream.prototype._read = function() {
  this.push(this.data);
  this.push(null);
}

function ReadStream(bucket, name) {
  var that = this;
  events.EventEmitter.call(this);

  this.bucket = bucket;
  this.name = name;
  this.remoteStream = null;

  this.open();
}

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
  this.bucketName = opts.bucketName;
  this.conn = new conn.Connection({
    email: opts.email,
    privateKey: opts.pemFilePath,
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
 * @param  {Number}   query.maxResults   Maximum number of items plus prefixes to return.
 * @param  {String}   query.pageToken    A previously-returned page token representing part
 *                                       of the larger set of results to view.
 * @param  {Function} callback           Callback function.
 */
Bucket.prototype.list = function(query, callback) {
  if (arguments.length == 1) {
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
 * @param  {Function=} opt_callback    Optional callback.
 */
Bucket.prototype.copy = function(name, metadata, opt_callback) {
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
  delete metadata['name'];
  delete metadata['bucket'];
  this.makeReq('POST', path, null, metadata, opt_callback);
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
 * @param  {String}   name     Name of the remote file.
 * @param  {Stream}   stream   A readable stream.
 * @param  {Object?}  metadata Optional metadata.
 * @param  {Function} callback Callback function.
 */
Bucket.prototype.writeStream = function(name, stream, metadata, callback) {
  if (!callback) {
    callback = metadata, metadata = {};
  }

  var that = this;
  var boundary = uuid.v4();
  metadata.contentType = metadata.contentType || 'text/plain'
  this.conn.createAuthorizedReq({
    method: 'POST',
    uri: util.format('{base}/{bucket}/o', {
      base: STORAGE_UPLOAD_BASE_URL,
      bucket: this.bucketName
    }),
    qs: { name: name, uploadType: 'multipart' },
    headers: {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    }
  }, function(err, req) {
    if (err) {
      callback && callback(err);
      return;
    }
    var remoteStream = that.conn.requester(req),
        oldEndFn = remoteStream.end;
    remoteStream.end = function(data, encoding, callback) {
      data = data || '';
      data += '\n\n--' + boundary + '--\n';
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
    reqStreamToCallback(stream, callback);
    reqStreamToCallback(remoteStream, callback);
  });
};

/**
 * Writes the source file to the destination with
 * optional metadata.
 * @param  {String}   name     Name of the remote file.
 * @param  {String}   filename Path to the source file.
 * @param  {object?}  metadata Optional metadata.
 * @param  {Function} callback Callback function.
 */
Bucket.prototype.writeFile = function(name, filename, metadata, callback) {
  this.writeStream(name, fs.createReadStream(filename), metadata, callback);
};

/**
 * Writes the provided buffer to the destination file.
 * @param  {String}   name     Name of the remote file resource.
 * @param  {Buffer}   buffer   Buffer contents to be written.
 * @param  {Object?}  metadata Optional metadata.
 * @param  {Function} callback Callback function.
 */
Bucket.prototype.writeBuffer = function(name, buffer, metadata, callback) {
  this.writeStream(name, new BufferStream(buffer), metadata, callback);
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
    if (body && body.error) {
      return callback(body.error);
    }
    if (res && (res.statusCode < 200 || res.statusCode > 299)) {
      return callback(new Error('error during request, statusCode: ' + res.statusCode));
    }
    callback(err, body);
  });
};

module.exports.Bucket = Bucket;

