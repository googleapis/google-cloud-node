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
    util = require('util'),
    events = require('events'),
    fs = require('fs');

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
      return callback(new Error('error during request, statusCode: ' + resp.statusCode));
    }
    callback(null, resp);
  });
};

function ReadStream(conn, url) {
  var that = this;
  events.EventEmitter.call(this);

  this.conn = conn;
  this.url = url;

  this.remoteStream = null;
  this.errored = false;
}

util.inherits(ReadStream, events.EventEmitter);

ReadStream.prototype.open = function() {
  var that = this;
  this.conn.createAuthorizedReq({ uri: this.url }, function(err, req) {
    if (err) {
      that.emit('error', err);
      return;
    }
    that.remoteStream = that.conn.requester(req);
    that.remoteStream.on('response', function(resp) {
      if (resp.statusCode != 200) {
        that.errored = true;
        // TODO(jbd): Emit error
      }
    });
    that.remoteStream.on('complete', function(resp) {
      that.emit('complete', resp);
    });
    that.emit('readable');
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

function Bucket(opts) {
  this.bucketName = opts.bucketName;
  this.conn = new conn.Connection({
    email: opts.email,
    privateKey: opts.pemFilePath,
    scopes: SCOPES
  });
}

Bucket.prototype.list = function(q, callback) {
  // TODO(jbd): Make q optional.
  this.makeReq('get', 'o', q, true, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = q;
      nextQuery.pageToken = nextPageToken;
    }
    callback(null, resp.items, nextQuery);
  });
};

// TODO: Bucket should implement writable Streaming API.

Bucket.prototype.stat = function(name, callback) {
  this.makeReq('get', ['o', name].join('/'), null, true, callback);
};

Bucket.prototype.copy = function(name, metadata, opt_callback) {
  if (!metadata.bucketName) {
    metadata.bucketName = this.bucketName;
  }
  var path = ['o', name, 'copyTo', 'b', metadata.bucketName, metadata.name].join('/');
  this.makeReq('post', path, null, metadata, callback);
};

Bucket.prototype.remove = function(name, callback) {
  this.makeReq('delete', ['o', name].join('/'), null, true, callback);
};

Bucket.prototype.createReadStream = function(name) {
  return new ReadStream(this.conn, STORAGE_BASE_URL + '/' + [this.bucketName, 'o', name].join('/'));
};

Bucket.prototype.writeFile = function(name, filename, metadata, callback) {
  // TODO(jbd): metadata should be optional.
  var that = this;
  var uri = STORAGE_UPLOAD_BASE_URL + '/' + this.bucketName + '/o';
  this.conn.createAuthorizedReq({
    method: 'POST',
    uri: uri,
    qs: { name: name, uploadType: 'media' }
  }, function(err, req) {
    if (err) {
      callback && callback(err);
      return;
    }
    req.headers['Content-Type'] = metadata.contentType || 'text/plain';
    var remoteStream = that.conn.requester(req);
    var fsStream = fs.createReadStream(filename);
    reqStreamToCallback(fsStream, callback);
    fsStream.pipe(remoteStream);
    reqStreamToCallback(remoteStream, callback);
  });
};

Bucket.prototype.writeBuffer = function(name, buffer, metadata, callback) {
  // TODO(jbd): metadata should be optional.
  var that = this;
  var uri = STORAGE_UPLOAD_BASE_URL + '/' + this.bucketName + '/o';
  this.conn.createAuthorizedReq({
    method: 'POST',
    uri: uri,
    qs: { name: name, uploadType: 'media' }
  }, function(err, req) {
    if (err) {
      callback && callback(err);
      return;
    }
    req.headers['Content-Type'] = metadata.contentType || 'text/plain';
    var remoteStream = that.conn.requester(req);
    remoteStream.write(buffer);
    reqStreamToCallback(remoteStream, callback);
  });
};


Bucket.prototype.makeReq = function(method, path, q, body, callback) {
  var reqOpts = {
    method: method,
    qs: q,
    uri: STORAGE_BASE_URL + '/' + [this.bucketName, path].join('/')
  };
  if (body) {
    reqOpts.json = body;
  }
  this.conn.req(reqOpts, function(err, res, body) {
    if (body && body.error) {
      return callback(body.error);
    }
    if (res.statusCode < 200 || res.statusCode > 299) {
      return callback(new Error('error during request, statusCode: ' + res.statusCode));
    }
    callback(err, body);
  });
};

module.exports.Bucket = Bucket;

