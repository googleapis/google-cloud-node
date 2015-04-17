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

var assert = require('assert');
var async = require('async');
var extend = require('extend');
var fs = require('fs');
var globby = require('globby');
var mime = require('mime-types');
var path = require('path');
var mockery = require('mockery');
var request = require('request');
var stream = require('stream');
var util = require('../../lib/common/util.js');

function FakeFile(bucket, name, metadata) {
  this.bucket = bucket;
  this.name = name;
  this.metadata = metadata || {};
  this.createWriteStream = function(options) {
    this.metadata = options.metadata;
    var ws = new stream.Writable();
    ws.write = function() {
      ws.emit('complete');
      ws.end();
    };
    return ws;
  };
}

var request_Cached = request;
var request_Override;

function fakeRequest() {
  return (request_Override || request_Cached).apply(null, arguments);
}

var eachLimit_Override;
var parallelLimit_Override;

var fakeAsync = extend({}, async);
fakeAsync.eachLimit = function() {
  (eachLimit_Override || async.eachLimit).apply(null, arguments);
};
fakeAsync.parallelLimit = function() {
  (parallelLimit_Override || async.parallelLimit).apply(null, arguments);
};

var globby_Override;

function fakeGlobby() {
  return (globby_Override || globby).apply(null, arguments);
}

var stat_Override;

var fakeFs = extend({}, fs);
fakeFs.stat = function() {
  return (stat_Override || fakeFs.stat).apply(null, arguments);
};

describe('Bucket', function() {
  var Bucket;
  var BUCKET_NAME = 'test-bucket';
  var bucket;
  var options = {
    makeAuthorizedRequest_: function(req, callback) {
      callback(null, req);
    }
  };

  before(function() {
    mockery.registerMock('./file.js', FakeFile);
    mockery.registerMock('async', fakeAsync);
    mockery.registerMock('fs', fakeFs);
    mockery.registerMock('globby', fakeGlobby);
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
    request_Override = null;
    eachLimit_Override = null;
    parallelLimit_Override = null;
    stat_Override = null;
    bucket = new Bucket(options, BUCKET_NAME);
  });

  describe('initialization', function() {
    it('should re-use provided connection', function() {
      assert.deepEqual(bucket.authorizeReq_, options.authorizeReq_);
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
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
        bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
          assert(reqOpts.uri.indexOf(bucket.name + '/o/destination.txt') > -1);
          next();
        };

        bucket.combine(['1', '2'], destination);
      }, done);
    });

    it('should use content type from the destination metadata', function(done) {
      var destination = 'destination.txt';

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
        var expectedUri = util.format('{base}/{bucket}/o/{file}/compose', {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts, callback) {
        callback();
      };

      bucket.combine(sources, destination, done);
    });

    it('should execute the callback with an error', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = 'destination.txt';

      var error = new Error('Error.');

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts, callback) {
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

      bucket.storage.makeAuthorizedRequest_ = function(reqOpts, callback) {
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

  describe('file', function() {
    var FILE_NAME = 'remote-file-name.jpg';
    var file;
    var metadata = { a: 'b' };

    beforeEach(function() {
      file = bucket.file(FILE_NAME, metadata);
    });

    it('should return a File object', function() {
      assert(file instanceof FakeFile);
    });

    it('should pass filename to File object', function() {
      assert.equal(file.name, FILE_NAME);
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
        callback(null, { items: [{ name: 'fake-file-name' }] });
      };
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert(files[0] instanceof FakeFile);
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
    var globPattern = '/Users/stephen/Photos/zoo/**/*.jpg';

    beforeEach(function() {
      bucket.uploadFile = util.noop;
    });

    it('should extend provided glob options', function(done) {
      var globOptions = { a: 'b', c: 'd' };
      var options = { globOptions: globOptions };
      var expectedGlobOptions = extend({}, globOptions, { nodir: true });

      globby_Override = function(pattern, opts) {
        assert.deepEqual(opts, expectedGlobOptions);
        done();
      };

      bucket.upload(globPattern, options, assert.ifError);
    });

    it('should always ignore directory paths in glob options', function(done) {
      var globOptions = { a: 'b', c: 'd', nodir: false };
      var options = { globOptions: globOptions };

      globby_Override = function(pattern, opts) {
        assert.strictEqual(opts.nodir, true);
        done();
      };

      bucket.upload(globPattern, options, assert.ifError);
    });

    it('should execute callback with error from globby', function(done) {
      var error = new Error('Error.');

      globby_Override = function(pattern, opts, callback) {
        callback(error);
      };

      bucket.upload(globPattern, {}, function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should upload limited to 5 files in parallel', function(done) {
      globby_Override = function(pattern, opts, callback) {
        callback(null, []);
      };

      parallelLimit_Override = function(fns, limit) {
        assert.equal(limit, 5);
        done();
      };

      bucket.upload(globPattern, {}, assert.ifError);
    });

    describe('file processing', function() {
      var filePath = '/Users/stephen/Photos/zoo/a-monkey.jpg';

      beforeEach(function() {
        globby_Override = function(pattern, opts, callback) {
          callback(null, [filePath]);
        };
      });

      it('should use a basePath to determine the filename', function(done) {
        var basePath = path.resolve(filePath, '..');
        var expectedFileName = path.relative(basePath, filePath);
        var options = { basePath: basePath };

        parallelLimit_Override = function(fns) {
          var processFileFn = fns[0];
          processFileFn(assert.ifError);
        };

        bucket.uploadFile = function(uploadFilePath, opts) {
          assert.equal(opts.destination, expectedFileName);
          done();
        };

        bucket.upload(globPattern, options, assert.ifError);
      });

      it('should use the basename to determine the filename', function(done) {
        parallelLimit_Override = function(fns) {
          var processFileFn = fns[0];
          processFileFn(assert.ifError);
        };

        bucket.uploadFile = function(uploadFilePath, opts) {
          assert.equal(opts.destination, path.basename(filePath));
          done();
        };

        bucket.upload(globPattern, {}, assert.ifError);
      });

      it('should pass correct arguments to uploadFile', function(done) {
        var options = { a: 'b', c: 'd' };
        var expectedOptions = extend({}, options, {
          destination: path.basename(filePath)
        });

        parallelLimit_Override = function(fns) {
          var processFileFn = fns[0];
          processFileFn(assert.ifError);
        };

        bucket.uploadFile = function(uploadFilePath, opts) {
          assert.equal(uploadFilePath, filePath);
          assert.deepEqual(opts, expectedOptions);
          done();
        };

        bucket.upload(globPattern, options, assert.ifError);
      });


      it('should stop processing files after error', function(done) {
        var error = new Error('Error.');

        bucket.uploadFile = function(uploadFilePath, opts, callback) {
          callback(error);
        };

        parallelLimit_Override = function(fns) {
          var processFileFn = fns[0];

          processFileFn(function(err) {
            assert.deepEqual(err, error);
            done();
          });
        };

        bucket.upload(globPattern, {}, assert.ifError);
      });

      it('should continue processing files if in force mode', function(done) {
        var options = { force: true };
        var error = new Error('Error.');

        bucket.uploadFile = function(uploadFilePath, opts, callback) {
          callback(error);
        };

        parallelLimit_Override = function(fns) {
          var processFileFn = fns[0];

          processFileFn(function(err) {
            assert.strictEqual(err, null);
            done();
          });
        };

        bucket.upload(globPattern, options, assert.ifError);
      });

      it('should execute callback with all errors and files', function(done) {
        var options = { force: true };
        var error = new Error('Error.');
        var filePaths = [filePath, filePath];
        var file = new FakeFile(bucket, filePath);

        globby_Override = function(pattern, opts, callback) {
          callback(null, filePaths);
        };

        var filesProcessed = 0;
        bucket.uploadFile = function(uploadFilePath, opts, callback) {
          filesProcessed++;

          if (filesProcessed === 1) {
            callback(error);
          } else if (filesProcessed === 2) {
            callback(null, file);
          }
        };

        bucket.upload(globPattern, options, function(errors, files) {
          assert.equal(errors.length, 1);
          assert.equal(files.length, 1);

          assert.deepEqual(errors[0], error);
          assert.deepEqual(files[0], file);

          done();
        });
      });
    });
  });

  describe('uploadDirectory', function() {
    var directoryPath = '/Users/stephen/Photos/zoo';

    beforeEach(function() {
      bucket.upload = util.noop;
    });

    it('should assign a basepath if one is not given', function(done) {
      bucket.upload = function(pattern, options) {
        assert.equal(options.basePath, directoryPath);
        done();
      };

      bucket.uploadDirectory(directoryPath, {}, assert.ifError);
    });

    it('should not override a given basepath', function(done) {
      var options = { basePath: path.resolve(directoryPath, '..') };

      bucket.upload = function(pattern, opts) {
        assert.equal(opts.basePath, options.basePath);
        done();
      };

      bucket.uploadDirectory(directoryPath, options, assert.ifError);
    });

    it('should call upload with self and children pattern', function(done) {
      bucket.upload = function(pattern) {
        assert.equal(pattern, path.join(directoryPath, '**/*'));
        done();
      };

      bucket.uploadDirectory(directoryPath, {}, assert.ifError);
    });

    it('should call upload with all arguments', function(done) {
      var options = { a: 'b', c: 'd' };

      bucket.upload = function(pattern, opts, callback) {
        assert.equal(pattern, path.join(directoryPath, '**/*'));
        assert.deepEqual(opts, options);
        callback();
      };

      bucket.uploadDirectory(directoryPath, options, done);
    });
  });

  describe('uploadFile', function() {
    var filePath = 'file-path.txt';
    var RESUMABLE_THRESHOLD = 5000000;

    beforeEach(function() {
      bucket.uploadFile_ = util.noop;
    });

    describe('resumable undefined', function() {
      describe('size unknown', function() {
        it('should stat file, assign size & re-attempt upload', function(done) {
          var size = 1000;
          var options = { a: 'b', c: 'd' };

          stat_Override = function(statFilePath, callback) {
            assert.equal(statFilePath, filePath);

            // Should call `uploadFile` again.
            bucket.uploadFile = function(uploadFilePath, opts, callback) {
              assert.equal(uploadFilePath, filePath);
              assert.equal(opts.size, size);
              assert.deepEqual(opts, options);
              callback();
            };

            callback(null, { size: size });
          };

          bucket.uploadFile(filePath, options, done);
        });

        it('return stat error to callback', function(done) {
          var error = new Error('Error.');

          stat_Override = function(statFilePath, callback) {
            callback(error);
          };

          bucket.uploadFile(filePath, {}, function(err) {
            assert.deepEqual(err, error);
            done();
          });
        });
      });

      describe('size known', function() {
        beforeEach(function() {
          stat_Override = function() {
            throw new Error('`stat` should not be called.');
          };
        });

        it('should set resumable false <= 5MB', function(done) {
          var options = { size: RESUMABLE_THRESHOLD };

          bucket.uploadFile_ = function(filePath, opts) {
            assert.strictEqual(opts.resumable, false);
            done();
          };

          bucket.uploadFile(filePath, options, assert.ifError);
        });

        it('should set resumable true > 5MB', function(done) {
          var options = { size: RESUMABLE_THRESHOLD + 1 };

          bucket.uploadFile_ = function(filePath, opts) {
            assert.strictEqual(opts.resumable, true);
            done();
          };

          bucket.uploadFile(filePath, options, assert.ifError);
        });
      });
    });

    describe('resumable defined', function() {
      it('should not stat file if resumable is specified', function(done) {
        var options = { resumable: true };

        stat_Override = function() {
          throw new Error('`stat` should not be called.');
        };

        bucket.uploadFile_ = function(filePath, opts) {
          assert.strictEqual(opts.resumable, options.resumable);
          done();
        };

        bucket.uploadFile(filePath, options, assert.ifError);
      });
    });

    it('should create a File from a string destination', function(done) {
      var options = { destination: 'a-new-file.txt', resumable: true };

      bucket.file = function(name) {
        assert.equal(name, options.destination);
        setImmediate(done);
        return {};
      };

      bucket.uploadFile(filePath, options, assert.ifError);
    });

    it('should name the file its basename if no destination', function(done) {
      var baseName = 'a-new-file.txt';
      var options = { resumable: true };

      bucket.file = function(name) {
        assert.equal(name, baseName);
        setImmediate(done);
        return {};
      };

      bucket.uploadFile('a/filepath/to/' + baseName, options, assert.ifError);
    });

    it('should pass all arguments to uploadFile_', function(done) {
      var options = { a: 'b', c: 'd', resumable: true };

      bucket.uploadFile_ = function(uploadFilePath, opts, callback) {
        assert.equal(uploadFilePath, filePath);
        assert.deepEqual(options, opts);
        callback();
      };

      bucket.uploadFile(filePath, options, done);
    });
  });

  describe('uploadFile_', function() {
    var basename = 'proto_query.json';
    var filepath = 'test/testdata/' + basename;
    var textFilepath = 'test/testdata/textfile.txt';

    var destinationFile;

    beforeEach(function() {
      destinationFile = new FakeFile(bucket, 'file-name');
    });

    it('should guess at the content type', function(done) {
      var options = { destination: destinationFile };

      destinationFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;

        setImmediate(function() {
          var expectedContentType = 'application/json; charset=utf-8';
          assert.equal(options.metadata.contentType, expectedContentType);
          done();
        });

        return ws;
      };

      bucket.uploadFile_(filepath, options, assert.ifError);
    });

    it('should guess at the charset', function(done) {
      var options = { destination: destinationFile };

      destinationFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;

        setImmediate(function() {
          var expectedContentType = 'text/plain; charset=utf-8';
          assert.equal(options.metadata.contentType, expectedContentType);
          done();
        });

        return ws;
      };

      bucket.uploadFile_(textFilepath, options, assert.ifError);
    });

    it('should allow overriding content type', function(done) {
      var metadata = { contentType: 'made-up-content-type' };
      var options = { destination: destinationFile, metadata: metadata };

      destinationFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;

        setImmediate(function() {
          assert.equal(options.metadata.contentType,  metadata.contentType);
          done();
        });

        return ws;
      };

      bucket.uploadFile_(filepath, options, assert.ifError);
    });

    it('should allow specifying options.resumable', function(done) {
      var options = { destination: destinationFile, resumable: false };

      destinationFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;

        setImmediate(function() {
          assert.strictEqual(options.resumable, false);
          done();
        });

        return ws;
      };

      bucket.uploadFile_(filepath, options, assert.ifError);
    });

    it('should execute callback on error', function(done) {
      var error = new Error('Error.');
      var options = { destination: destinationFile };

      destinationFile.createWriteStream = function() {
        var ws = new stream.Writable();

        setImmediate(function() {
          ws.emit('error', error);
          ws.end();
        });

        return ws;
      };

      bucket.uploadFile_(filepath, options, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return destination File on complete', function(done) {
      var options = { destination: destinationFile };

      destinationFile.createWriteStream = function() {
        var ws = new stream.Writable();

        setImmediate(function() {
          ws.emit('complete');
          ws.end();
        });

        return ws;
      };

      bucket.uploadFile_(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.deepEqual(file, destinationFile);
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
      eachLimit_Override = function(arr, limit) {
        assert.equal(limit, 10);
        done();
      };

      bucket.getFiles = function(query, callback) {
        callback(null, []);
      };

      bucket.makeAllFilesPublicPrivate_({}, assert.ifError);
    });

    it('should make files public', function(done) {
      var timesCalled = 0;

      var files = [
        bucket.file('1'),
        bucket.file('2')
      ].map(util.propAssign('makePublic', function(callback) {
        timesCalled++;
        callback();
      }));

      bucket.getFiles = function(query, callback) {
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
      ].map(util.propAssign('makePrivate', function(callback) {
        timesCalled++;
        callback();
      }));

      bucket.getFiles = function(query, callback) {
        callback(null, files);
      };

      bucket.makeAllFilesPublicPrivate_({ private: true }, function(err) {
        assert.ifError(err);
        assert.equal(timesCalled, files.length);
        done();
      });
    });

    it('should get more files if more exist', function(done) {
      var fakeNextQuery = { a: 'b', c: 'd' };

      bucket.getFiles = function(query, callback) {
        if (Object.keys(query).length === 0) {
          // First time through, return a `nextQuery` value.
          callback(null, [], fakeNextQuery);
        } else {
          // Second time through.
          assert.deepEqual(query, fakeNextQuery);
          done();
        }
      };

      bucket.makeAllFilesPublicPrivate_({}, assert.ifError);
    });

    it('should execute callback with error from getting files', function(done) {
      var error = new Error('Error.');

      bucket.getFiles = function(query, callback) {
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
      ].map(util.propAssign('makePublic', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(query, callback) {
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
      ].map(util.propAssign('makePublic', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(query, callback) {
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
      ].map(util.propAssign('makePublic', function(callback) {
        callback();
      }));

      var errorFiles = [
        bucket.file('3'),
        bucket.file('4')
      ].map(util.propAssign('makePublic', function(callback) {
        callback(error);
      }));

      bucket.getFiles = function(query, callback) {
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
      bucket.storage.makeAuthorizedRequest_ = function(request) {
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
      bucket.storage.makeAuthorizedRequest_ = function(request, callback) {
        callback();
      };
      bucket.makeReq_(method, path, query, body, done);
    });
  });
});
