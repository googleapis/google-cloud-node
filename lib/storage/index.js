var conn = require('../common/connection.js'),
    util = require('util'),
    stream = require('stream'),
    events = require('events');

var SCOPES = [
    'https://www.googleapis.com/auth/devstorage.full_control'];

var STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';
    STORAGE_UPLOAD_BASE_URL = 'https://www.googleapis.com/upload/storage/v1/b';

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

function WriteStream(conn, uploadUrl, name, metadata) {
  events.EventEmitter.call(this);
  var that = this;

  this.conn = conn;
  this.url = uploadUrl;
  this.name = name;
  this.metadata = metadata || {};
  this.contentType = this.metadata.contentType || 'application/octet-stream';
  delete this.metadata.contentType;

  this.remoteStream = null;
  this.metadataWritten = false;

  this.open();
}

util.inherits(WriteStream, events.EventEmitter);

WriteStream.prototype.open = function() {
  var that = this;
  this.conn.createAuthorizedReq({
    method: 'POST',
    uri: this.url,
    qs: { uploadType: 'multipart', name: this.name },
    headers: {
      'Content-Type': 'multipart/related; boundary="foo_bar_baz"'
    }
    // TODO(jbd): Generate a boundary.
  }, function(err, req) {
    if (err) {
      that.emit('error', err);
      return;
    }
    that.remoteStream = that.conn.requester(req);
    that.remoteStream.on('response', function(resp) {
      that.emit('response', resp);
    });
    that.remoteStream.on('complete', function(resp) {
      that.emit('complete', resp);
    });
    that.emit('writable');
  });
};

WriteStream.prototype.write = function(chunk, encoding, callback) {
  this._writeToRemoteStream(chunk, encoding, callback);
};

WriteStream.prototype.end = function(chunk, encoding, callback) {
  this.remoteStream.write('\n\n--foo_bar_baz--');
};

WriteStream.prototype._writeToRemoteStream = function(data, encoding) {
  var that = this;
  if (!this.metadataWritten) {
    this.remoteStream.write('\n--foo_bar_baz\n');
    this.remoteStream.write('Content-Type: application/json\n\n');
    this.remoteStream.write(JSON.stringify(this.metadata));
    this.remoteStream.write('\n\n');
    this.remoteStream.write('--foo_bar_baz\n');
    this.remoteStream.write('Content-Type: ' + this.contentType + '\n\n');
    this.metadataWritten = true;
  }
  // dump file contents.
  this.remoteStream.write(data, encoding);
  this.emit('progress', { written: data.length });
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
  this.makeReq('get', 'o', q, null, function(err, resp) {
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

Bucket.prototype.get = function(name, callback) {
  this.makeReq('get', ['o', name].join('/'), null, null, callback);
};

Bucket.prototype.copyFile = function(srcName, destName, acl, opt_callback) {
  // TODO(jbd): Make acl optional.
  var path = ['o', srcName, 'copyTo', 'b', this.bucketName, destName].join('/');
  this.makeReq('POST', path, { destinationPredefinedAcl: acl }, null, callback);
};

Bucket.prototype.deleteFile = function(name, callback) {
  this.makeReq('DELETE', ['o', name].join('/'), null, null, callback);
};

Bucket.prototype.createReadStream = function(name) {
  return new ReadStream(this.conn, STORAGE_BASE_URL + '/' + [this.bucketName, 'o', name].join('/'));
};

Bucket.prototype.createWriteStream = function(name, metadata) {
  return new WriteStream(this.conn, STORAGE_UPLOAD_BASE_URL + '/' + this.bucketName, name, metadata);
};

Bucket.prototype.makeReq = function(method, path, q, body, callback) {
  this.conn.req({
    method: method,
    query: q,
    uri: STORAGE_BASE_URL + '/' + [this.bucketName, path].join('/'),
    json: body || true
  }, function(err, res, body) {
    if (body && body.error) {
      return callback(body.error);
    }
    callback(err, body);
  });
};

module.exports.Bucket = Bucket;

