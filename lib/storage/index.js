var conn = require('../common/connection.js'),
    fs = require('fs'),
    util = require('util'),
    stream = require('stream');

var SCOPES = [
    'https://www.googleapis.com/auth/devstorage.full_control'],
    STORAGE_BASE_URL = 'https://www.googleapis.com/storage/v1/b';

function ReadStream(conn, url) {
  var that = this;
  stream.Stream.call(this);

  this.conn = conn;
  this.url = url;
  this.req = null;

  this.open();
}

util.inherits(ReadStream, stream.Stream);

ReadStream.prototype.pipe = function(dest, opts) {
  var that = this;
  if (!this.req) {
    return this.once('open', function() {
      that.conn.requester(that.req).pipe(dest, opts);
    });
  }
  this.conn.requester(this.req).pipe(dest, opts);
  return dest;
};

ReadStream.prototype.open = function() {
  var that = this;
  this.conn.createAuthorizedReq({ uri: this.url }, function(err, req) {
    if (err) {
      that.emit('error', err);
      return;
    }
    that.req = req;
    that.emit('open');
  });
};

function WriteStream(conn, name, metadata) {
  stream.Writable.call(this);
  this.conn = conn;
  this.name = name;
}

util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function() {
  throw new Error('not yet implemented');
};

function Bucket(opts) {
  this.bucketName = opts.bucketName;
  this.conn = new conn.Connection({
    email: opts.email,
    privateKey: opts.pemFilePath,
    scopes: SCOPES
  });
}

Bucket.prototype.listFiles = function(q, callback) {
  // TODO(jbd): Convert response into object lists
  // TODO(jbd): Make q optional.
  this.makeReq('GET', '/o', q, null, callback);
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
  return new WriteStream(this.conn, name, metadata);
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

