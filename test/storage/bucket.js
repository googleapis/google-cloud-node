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

var arrify = require('arrify');
var assert = require('assert');
var async = require('async');
var extend = require('extend');
var format = require('string-format-obj');
var mime = require('mime-types');
var mockery = require('mockery');
var propAssign = require('prop-assign');
var request = require('request');
var stream = require('stream');
var util = require('../../lib/common/util.js');

function FakeFile(bucket, name) {
  var self = this;

  this.calledWith_ = arguments;

  this.bucket = bucket;
  this.name = name;
  this.metadata = {};

  this.createWriteStream = function(options) {
    self.metadata = options.metadata;
    var ws = new stream.Writable();
    ws.write = function() {
      ws.emit('complete');
      ws.end();
    };
    return ws;
  };
}

var requestCached = request;
var requestOverride;
function fakeRequest() {
  return (requestOverride || requestCached).apply(null, arguments);
}
fakeRequest.defaults = function() {
  // Ignore the default values, so we don't have to test for them in every API
  // call.
  return fakeRequest;
};

var eachLimitOverride;

var fakeAsync = extend({}, async);
fakeAsync.eachLimit = function() {
  (eachLimitOverride || async.eachLimit).apply(null, arguments);
};

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Bucket') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Bucket');
    assert.deepEqual(methods, ['getFiles']);
    extended = true;
  }
};

describe('Bucket', function() {
  var Bucket;
  var BUCKET_NAME = 'test-bucket';
  var bucket;
  var options = {
    makeAuthenticatedRequest_: function(req, callback) {
      callback(null, req);
    }
  };

  before(function() {
    mockery.registerMock('./file.js', FakeFile);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('async', fakeAsync);
    mockery.registerMock('request', fakeRequest);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    Bucket = require('../../lib/storage/bucket.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    requestOverride = null;
    eachLimitOverride = null;
    bucket = new Bucket(options, BUCKET_NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should re-use provided connection', function() {
      assert.deepEqual(bucket.authenticateReq_, options.authenticateReq_);
    });

    it('should default metadata to an empty object', function() {
      assert.deepEqual(bucket.metadata, {});
    });

    it('should throw if no name was provided', function() {
      assert.throws(function() {
        new Bucket();
      }, /A bucket name is needed/);
    });
  });

  describe('combine', function() {
    it('should throw if invalid sources are not provided', function() {
      var error = 'You must provide at least two source files.';

      assert.throws(function() {
        bucket.combine();
      }, new RegExp(error));

      assert.throws(function() {
        bucket.combine(['1']);
      }, new RegExp(error));
    });

    it('should throw if a destination is not provided', function() {
      var error = 'A destination file must be specified.';

      assert.throws(function() {
        bucket.combine(['1', '2']);
      }, new RegExp(error));
    });

    it('should accept string or file input for sources', function(done) {
      var file1 = bucket.file('1.txt');
      var file2 = '2.txt';

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        assert.equal(reqOpts.json.sourceObjects[0].name, file1.name);
        assert.equal(reqOpts.json.sourceObjects[1].name, file2);
        done();
      };

      bucket.combine([file1, file2], 'destination.txt');
    });

    it('should accept string or file input for destination', function(done) {
      var destinations = [
        'destination.txt',
        bucket.file('destination.txt')
      ];

      async.each(destinations, function(destination, next) {
        bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
          assert(reqOpts.uri.indexOf(bucket.name + '/o/destination.txt') > -1);
          next();
        };

        bucket.combine(['1', '2'], destination);
      }, done);
    });

    it('should use content type from the destination metadata', function(done) {
      var destination = 'destination.txt';

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        assert.equal(
          reqOpts.json.destination.contentType,
          mime.contentType(destination)
        );
        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should use content type from the destination metadata', function(done) {
      var destination = bucket.file('destination.txt');
      destination.metadata = { contentType: 'content-type' };

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        assert.equal(
          reqOpts.json.destination.contentType,
          destination.metadata.contentType
        );
        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should detect dest content type if not in metadata', function(done) {
      var destination = 'destination.txt';

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        assert.equal(
          reqOpts.json.destination.contentType,
          mime.contentType(destination)
        );
        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should throw if content type cannot be determined', function() {
      var error =
        'A content type could not be detected for the destination file.';

      assert.throws(function() {
        bucket.combine(['1', '2'], 'destination');
      }, new RegExp(error));
    });

    it('should make correct API request', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = bucket.file('destination.txt');

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        var expectedUri = format('{base}/{bucket}/o/{file}/compose', {
          base: 'https://www.googleapis.com/storage/v1/b',
          bucket: destination.bucket.name,
          file: encodeURIComponent(destination.name)
        });

        assert.equal(reqOpts.uri, expectedUri);
        assert.deepEqual(reqOpts.json, {
          destination: { contentType: mime.contentType(destination.name) },
          sourceObjects: [{ name: sources[0].name }, { name: sources[1].name }]
        });
        done();
      };

      bucket.combine(sources, destination);
    });

    it('should encode the destination file name', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = 'needs encoding.jpg';

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        assert.equal(reqOpts.uri.indexOf(destination), -1);
        done();
      };

      bucket.combine(sources, destination);
    });

    it('should send a source generation value if available', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      sources[0].metadata = { generation: 1 };
      sources[1].metadata = { generation: 2 };

      var destination = bucket.file('destination.txt');

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts) {
        assert.deepEqual(reqOpts.json.sourceObjects, [
          { name: sources[0].name, generation: sources[0].metadata.generation },
          { name: sources[1].name, generation: sources[1].metadata.generation }
        ]);

        done();
      };

      bucket.combine(sources, destination);
    });

    it('should execute the callback', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = 'destination.txt';

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts, callback) {
        callback();
      };

      bucket.combine(sources, destination, done);
    });

    it('should execute the callback with an error', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = 'destination.txt';

      var error = new Error('Error.');

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts, callback) {
        callback(error);
      };

      bucket.combine(sources, destination, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute the callback with apiResponse', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = 'destination.txt';
      var resp = { success: true };

      bucket.storage.makeAuthenticatedRequest_ = function(reqOpts, callback) {
        callback(null, resp);
      };

      bucket.combine(sources, destination, function(err, obj, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should delete the bucket', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'DELETE');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, true);
        done();
      };
      bucket.delete();
    });

    it('should execute callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      bucket.delete(done);
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      bucket.delete(function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('deleteFiles', function() {
    it('should get files from the bucket', function(done) {
      var query = { a: 'b', c: 'd' };

      bucket.getFiles = function(query_) {
        assert.deepEqual(query_, query);
        done();
      };

      bucket.deleteFiles(query, assert.ifError);
    });

    it('should process 10 files at a time', function(done) {
      eachLimitOverride = function(arr, limit) {
        assert.equal(limit, 10);
        done();
      };

      bucket.getFiles = function(query, callback) {
        callback(null, []);
      };

      bucket.deleteFiles({}, assert.ifError);
    });

    it('should delete the files', function(done) {
      var timesCalled = 0;

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('delete', function(callback) {
        timesCalled++;
        callback();
      }));

      bucket.getFiles = function(query, callback) {
        callback(null, files);
      };

      bucket.deleteFiles({}, function(err) {
        assert.ifError(err);
        assert.equal(timesCalled, files.length);
        done();
      });
    });

    it('should execute callback with error from getting files', function(done) {
      var error = new Error('Error.');

      bucket.getFiles = function(query, callback) {
        callback(error);
      };

      bucket.deleteFiles({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with error from deleting file', function(done) {
      var error = new Error('Error.');

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('delete', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(query, callback) {
        callback(null, files);
      };

      bucket.deleteFiles({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with queued errors', function(done) {
      var error = new Error('Error.');

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('delete', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(query, callback) {
        callback(null, files);
      };

      bucket.deleteFiles({ force: true }, function(errs) {
        assert.strictEqual(errs[0], error);
        assert.strictEqual(errs[1], error);
        done();
      });
    });
  });

  describe('file', function() {
    var FILE_NAME = 'remote-file-name.jpg';
    var file;
    var options = { a: 'b', c: 'd' };

    beforeEach(function() {
      file = bucket.file(FILE_NAME, options);
    });

    it('should return a File object', function() {
      assert(file instanceof FakeFile);
    });

    it('should pass bucket to File object', function() {
      assert.deepEqual(file.calledWith_[0], bucket);
    });

    it('should pass filename to File object', function() {
      assert.equal(file.calledWith_[1], FILE_NAME);
    });

    it('should pass configuration object to File', function() {
      assert.deepEqual(file.calledWith_[2], options);
    });
  });

  describe('getFiles', function() {
    it('should get files without a query', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/o');
        assert.deepEqual(query, {});
        assert.strictEqual(body, true);
        done();
      };
      bucket.getFiles(util.noop);
    });

    it('should get files with a query', function(done) {
      var token = 'next-page-token';
      bucket.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, { maxResults: 5, pageToken: token });
        done();
      };
      bucket.getFiles({ maxResults: 5, pageToken: token }, util.noop);
    });

    it('should return nextQuery if more results exist', function() {
      var token = 'next-page-token';
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { nextPageToken: token, items: [] });
      };
      bucket.getFiles({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.equal(nextQuery.pageToken, token);
        assert.strictEqual(nextQuery.maxResults, 5);
      });
    });

    it('should return null nextQuery if there are no more results', function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [] });
      };
      bucket.getFiles({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return File objects', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {
          items: [{ name: 'fake-file-name', generation: 1 }]
        });
      };
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert(files[0] instanceof FakeFile);
        assert.equal(typeof files[0].calledWith_[2].generation, 'undefined');
        done();
      });
    });

    it('should return versioned Files if queried for versions', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {
          items: [{ name: 'fake-file-name', generation: 1 }]
        });
      };

      bucket.getFiles({ versions: true }, function(err, files) {
        assert.ifError(err);
        assert(files[0] instanceof FakeFile);
        assert.equal(files[0].calledWith_[2].generation, 1);
        done();
      });
    });

    it('should return apiResponse in callback', function(done) {
      var resp = { items: [{ name: 'fake-file-name' }] };
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      bucket.getFiles(function(err, files, nextQuery, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      bucket.getFiles(function(err, files, nextQuery, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(files, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should populate returned File object with metadata', function(done) {
      var fileMetadata = {
        name: 'filename',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata'
        }
      };
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [fileMetadata] });
      };
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert.deepEqual(files[0].metadata, fileMetadata);
        done();
      });
    });
  });

  describe('getMetadata', function() {
    var metadata = { a: 'b', c: 'd' };

    it('should get the metadata of a bucket', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, true);
        done();
      };
      bucket.getMetadata();
    });

    it('should execute callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      bucket.getMetadata(done);
    });

    it('should update metadata property on object', function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      assert.deepEqual(bucket.metadata, {});
      bucket.getMetadata(function(err, newMetadata) {
        assert.deepEqual(newMetadata, metadata);
      });
      assert.deepEqual(bucket.metadata, metadata);
    });

    it('should pass metadata to callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      bucket.getMetadata(function(err, fileMetadata) {
        assert.deepEqual(fileMetadata, metadata);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = metadata;
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      bucket.getMetadata(function(err, fileMetadata, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      bucket.getMetadata(function(err, metadata, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, null);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });
  });

  describe('makePublic', function() {
    beforeEach(function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
    });

    it('should set ACL, default ACL, and publicize files', function(done) {
      var didSetAcl = false;
      var didSetDefaultAcl = false;
      var didMakeFilesPublic = false;

      bucket.acl.add = function(opts, callback) {
        assert.equal(opts.entity, 'allUsers');
        assert.equal(opts.role, 'READER');
        didSetAcl = true;
        callback();
      };

      bucket.acl.default.add = function(opts, callback) {
        assert.equal(opts.entity, 'allUsers');
        assert.equal(opts.role, 'READER');
        didSetDefaultAcl = true;
        callback();
      };

      bucket.makeAllFilesPublicPrivate_ = function(opts, callback) {
        assert.strictEqual(opts.public, true);
        assert.strictEqual(opts.force, true);
        didMakeFilesPublic = true;
        callback();
      };

      bucket.makePublic({
        includeFiles: true,
        force: true
      }, function(err) {
        assert.ifError(err);
        assert(didSetAcl);
        assert(didSetDefaultAcl);
        assert(didMakeFilesPublic);
        done();
      });
    });

    it('should not make files public by default', function(done) {
      bucket.acl.add = function(opts, callback) {
        callback();
      };

      bucket.acl.default.add = function(opts, callback) {
        callback();
      };

      bucket.makeAllFilesPublicPrivate_ = function() {
        throw new Error('Please, no. I do not want to be called.');
      };

      bucket.makePublic(done);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      bucket.acl.add = function(opts, callback) {
        callback(error);
      };

      bucket.makePublic(function(err) {
        assert.equal(err, error);
        done();
      });
    });
  });

  describe('makePrivate', function() {
    it('should set predefinedAcl & privatize files', function(done) {
      var didSetPredefinedAcl = false;
      var didMakeFilesPrivate = false;

      bucket.makeReq_ = function(method, path, query, body, callback) {
        // Correct request.
        assert.equal(method, 'PATCH');
        assert.equal(path, '');
        assert.deepEqual(query, { predefinedAcl: 'projectPrivate' });
        assert.deepEqual(body, { acl: null });

        didSetPredefinedAcl = true;
        callback();
      };

      bucket.makeAllFilesPublicPrivate_ = function(opts, callback) {
        assert.strictEqual(opts.private, true);
        assert.strictEqual(opts.force, true);
        didMakeFilesPrivate = true;
        callback();
      };

      bucket.makePrivate({ includeFiles: true, force: true }, function(err) {
        assert.ifError(err);
        assert(didSetPredefinedAcl);
        assert(didMakeFilesPrivate);
        done();
      });
    });

    it('should not make files private by default', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };

      bucket.makeAllFilesPublicPrivate_ = function() {
        throw new Error('Please, no. I do not want to be called.');
      };

      bucket.makePrivate(done);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };

      bucket.makePrivate(function(err) {
        assert.equal(err, error);
        done();
      });
    });
  });

  describe('setMetadata', function() {
    var metadata = { fake: 'metadata' };

    it('should set metadata', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PATCH');
        assert.equal(path, '');
        assert.deepEqual(body, metadata);
        done();
      };
      bucket.setMetadata(metadata);
    });

    it('should execute callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      bucket.setMetadata(metadata, done);
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      bucket.setMetadata(metadata, function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      bucket.setMetadata(metadata, function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should update internal metadata property', function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      bucket.setMetadata(metadata, function() {
        assert.deepEqual(bucket.metadata, metadata);
      });
    });
  });

  describe('upload', function() {
    var basename = 'proto_query.json';
    var filepath = 'test/testdata/' + basename;
    var textFilepath = 'test/testdata/textfile.txt';
    var metadata = { a: 'b', c: 'd' };

    beforeEach(function() {
      bucket.file = function(name, metadata) {
        return new FakeFile(bucket, name, metadata);
      };
    });

    it('should accept a path & cb', function(done) {
      bucket.upload(filepath, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, basename);
        done();
      });
    });

    it('should accept a path, metadata, & cb', function(done) {
      var options = { metadata: metadata };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.deepEqual(file.metadata, metadata);
        done();
      });
    });

    it('should accept a path, a string dest, & cb', function(done) {
      var newFileName = 'new-file-name.png';
      var options = { destination: newFileName };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, newFileName);
        done();
      });
    });

    it('should accept a path, a string dest, metadata, & cb', function(done) {
      var newFileName = 'new-file-name.png';
      var options = { destination: newFileName, metadata: metadata };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, newFileName);
        assert.deepEqual(file.metadata, metadata);
        done();
      });
    });

    it('should accept a path, a File dest, & cb', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = function() {
        return true;
      };
      var options = { destination: fakeFile };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert(file.isSameFile());
        done();
      });
    });

    it('should accept a path, a File dest, metadata, & cb', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = function() {
        return true;
      };
      var options = { destination: fakeFile, metadata: metadata };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert(file.isSameFile());
        assert.deepEqual(file.metadata, metadata);
        done();
      });
    });

    it('should guess at the content type', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          var expectedContentType = 'application/json; charset=utf-8';
          assert.equal(options.metadata.contentType, expectedContentType);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should guess at the charset', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          var expectedContentType = 'text/plain; charset=utf-8';
          assert.equal(options.metadata.contentType, expectedContentType);
          done();
        });
        return ws;
      };
      bucket.upload(textFilepath, options, assert.ifError);
    });

    it('should allow overriding content type', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var metadata = { contentType: 'made-up-content-type' };
      var options = { destination: fakeFile, metadata: metadata };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.equal(options.metadata.contentType,  metadata.contentType);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should allow specifying options.gzip', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile, gzip: true };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.strictEqual(options.gzip, true);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should allow specifying options.resumable', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile, resumable: false };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.strictEqual(options.resumable, false);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should execute callback on error', function(done) {
      var error = new Error('Error.');
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile };
      fakeFile.createWriteStream = function() {
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('error', error);
          ws.end();
        });
        return ws;
      };
      bucket.upload(filepath, options, function(err) {
        assert.equal(err, error);
        done();
      });
    });
  });

  describe('makeAllFilesPublicPrivate_', function() {
    it('should get all files from the bucket', function(done) {
      bucket.getFiles = function() {
        done();
      };

      bucket.makeAllFilesPublicPrivate_({}, assert.ifError);
    });

    it('should process 10 files at a time', function(done) {
      eachLimitOverride = function(arr, limit) {
        assert.equal(limit, 10);
        done();
      };

      bucket.getFiles = function(callback) {
        callback(null, []);
      };

      bucket.makeAllFilesPublicPrivate_({}, assert.ifError);
    });

    it('should make files public', function(done) {
      var timesCalled = 0;

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('makePublic', function(callback) {
        timesCalled++;
        callback();
      }));

      bucket.getFiles = function(callback) {
        callback(null, files);
      };

      bucket.makeAllFilesPublicPrivate_({ public: true }, function(err) {
        assert.ifError(err);
        assert.equal(timesCalled, files.length);
        done();
      });
    });

    it('should make files private', function(done) {
      var timesCalled = 0;

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('makePrivate', function(callback) {
        timesCalled++;
        callback();
      }));

      bucket.getFiles = function(callback) {
        callback(null, files);
      };

      bucket.makeAllFilesPublicPrivate_({ private: true }, function(err) {
        assert.ifError(err);
        assert.equal(timesCalled, files.length);
        done();
      });
    });

    it('should execute callback with error from getting files', function(done) {
      var error = new Error('Error.');

      bucket.getFiles = function(callback) {
        callback(error);
      };

      bucket.makeAllFilesPublicPrivate_({}, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute callback with error from changing file', function(done) {
      var error = new Error('Error.');

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('makePublic', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(callback) {
        callback(null, files);
      };

      bucket.makeAllFilesPublicPrivate_({ public: true }, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute callback with queued errors', function(done) {
      var error = new Error('Error.');

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('makePublic', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(callback) {
        callback(null, files);
      };

      bucket.makeAllFilesPublicPrivate_({
        public: true,
        force: true
      }, function(errs) {
        assert.deepEqual(errs, [error, error]);
        done();
      });
    });

    it('should execute callback with files changed', function(done) {
      var error = new Error('Error.');

      var successFiles = [
        bucket.file('1'),
        bucket.file('2')
      ].map(propAssign('makePublic', function(callback) {
        callback();
      }));

      var errorFiles = [
        bucket.file('3'),
        bucket.file('4')
      ].map(propAssign('makePublic', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(callback) {
        callback(null, successFiles.concat(errorFiles));
      };

      bucket.makeAllFilesPublicPrivate_({
        public: true,
        force: true
      }, function(errs, files) {
        assert.deepEqual(errs, [error, error]);
        assert.deepEqual(files, successFiles);
        done();
      });
    });
  });

  describe('makeReq_', function() {
    var method = 'POST';
    var path = '/path';
    var query = { a: 'b', c: { d: 'e' } };
    var body = { hi: 'there' };

    it('should make correct request', function(done) {
      bucket.storage.makeAuthenticatedRequest_ = function(request) {
        var basePath = 'https://www.googleapis.com/storage/v1/b';
        assert.equal(request.method, method);
        assert.equal(request.uri, basePath + '/' + bucket.name + path);
        assert.deepEqual(request.qs, query);
        assert.deepEqual(request.json, body);
        done();
      };
      bucket.makeReq_(method, path, query, body, util.noop);
    });

    it('should execute callback', function(done) {
      bucket.storage.makeAuthenticatedRequest_ = function(request, callback) {
        callback();
      };
      bucket.makeReq_(method, path, query, body, done);
    });
  });
});
