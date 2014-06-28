var fs = require('fs'),
    util = require('util'),
    stream = require('stream');

function ReadStream(conn, name) {
  stream.Transform.call(this);
  this.conn = conn;
  this.name = name;
}

util.inherits(ReadStream, stream.Transform);

ReadStream.prototype._transform = function() {
  throw new Error('not yet implemented');
};

ReadStream.prototype._flush = function(callback) {
  callback();
};

function WriteStream(conn, name, metadata) {
  stream.Transform.call(this);
  this.conn = conn;
  this.name = name;
}

util.inherits(WriteStream, stream.Transform);

WriteStream.prototype._transform = function() {
  throw new Error('not yet implemented');
};

WriteStream.prototype._flush = function(callback) {
  callback();
};

function Bucket(opts) {
  this.bucketName = opts['bucketName'];
  this.conn = null; // TODO(jbd): implement
}

Bucket.prototype.listFiles = function(q, callback) {
  throw new Error('not yet implemented');
};

Bucket.prototype.copyFile = function(srcName, destName, opt_callback) {
  throw new Error('not yet implemented');
};

Bucket.prototype.deleteFile = function(name, callback) {
  throw new Error('not yet implemented');
};

Bucket.prototype.createReadStream = function(name) {
  return new ReadStream(this.conn, name);
};

Bucket.prototype.createWriteStream = function(name, metadata) {
  return new WriteStream(this.conn, name, metadata);
};

Bucket.prototype.writeFile = function(name, filename, metadata, callback) {
  return this.createWriteStream(
    name, metadata).pipe(fs.createReadStream(filename).end(callback);
};

Bucket.prototype.writeBuffer = function(name, buffer, metadata) {
  return this.createWriteStream(
    name, metadata).write(buffer).end(callback);
};
