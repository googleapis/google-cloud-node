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
var mime = require('mime-types');
var nodeutil = require('util');
var path = require('path');
var propAssign = require('prop-assign');
var proxyquire = require('proxyquire');
var request = require('request');
var ServiceObject = require('@google-cloud/common').ServiceObject;
var stream = require('stream');
var util = require('@google-cloud/common').util;

function FakeFile(bucket, name, options) {
  var self = this;

  this.calledWith_ = arguments;

  this.bucket = bucket;
  this.name = name;
  this.options = options;
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

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Bucket') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['file']);
  }
});

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Bucket') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Bucket');
    assert.deepEqual(methods, ['getFiles']);
    extended = true;
  },
  streamify: function(methodName) {
    return methodName;
  }
};

function FakeAcl() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeIam() {
  this.calledWith_ = arguments;
}

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Bucket', function() {
  var Bucket;
  var bucket;

  var STORAGE = {
    createBucket: util.noop
  };
  var BUCKET_NAME = 'test-bucket';

  before(function() {
    Bucket = proxyquire('../src/bucket.js', {
      async: fakeAsync,
      request: fakeRequest,
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        paginator: fakePaginator,
        util: fakeUtil
      },
      './acl.js': FakeAcl,
      './file.js': FakeFile,
      './iam.js': FakeIam
    });
  });

  beforeEach(function() {
    requestOverride = null;
    eachLimitOverride = null;
    bucket = new Bucket(STORAGE, BUCKET_NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(bucket.getFilesStream, 'getFiles');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the name', function() {
      assert.strictEqual(bucket.name, BUCKET_NAME);
    });

    it('should localize the storage instance', function() {
      assert.strictEqual(bucket.storage, STORAGE);
    });

    it('should create an ACL object', function() {
      FakeServiceObject.prototype.request = {
        bind: function(context) {
          return context;
        }
      };

      var bucket = new Bucket(STORAGE, BUCKET_NAME);
      assert.deepEqual(bucket.acl.calledWith_[0], {
        request: bucket,
        pathPrefix: '/acl'
      });
    });

    it('should create a default ACL object', function() {
      FakeServiceObject.prototype.request = {
        bind: function(context) {
          return context;
        }
      };

      var bucket = new Bucket(STORAGE, BUCKET_NAME);
      assert.deepEqual(bucket.acl.default.calledWith_[0], {
        request: bucket,
        pathPrefix: '/defaultObjectAcl'
      });
    });

    it('should inherit from ServiceObject', function(done) {
      var storageInstance = extend({}, STORAGE, {
        createBucket: {
          bind: function(context) {
            assert.strictEqual(context, storageInstance);
            done();
          }
        }
      });

      var bucket = new Bucket(storageInstance, BUCKET_NAME);
      assert(bucket instanceof ServiceObject);

      var calledWith = bucket.calledWith_[0];

      assert.strictEqual(calledWith.parent, storageInstance);
      assert.strictEqual(calledWith.baseUrl, '/b');
      assert.strictEqual(calledWith.id, BUCKET_NAME);
      assert.deepEqual(calledWith.methods, {
        create: true,
        delete: true,
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: true
      });
    });

    it('should localize an Iam instance', function() {
      assert(bucket.iam instanceof FakeIam);
      assert.deepStrictEqual(bucket.iam.calledWith_[0], bucket);
    });
  });

  describe('combine', function() {
    it('should throw if invalid sources are not provided', function() {
      assert.throws(function() {
        bucket.combine();
      }, /You must provide at least two source files\./);

      assert.throws(function() {
        bucket.combine(['1']);
      }, /You must provide at least two source files\./);
    });

    it('should throw if a destination is not provided', function() {
      assert.throws(function() {
        bucket.combine(['1', '2']);
      }, /A destination file must be specified\./);
    });

    it('should accept string or file input for sources', function(done) {
      var file1 = bucket.file('1.txt');
      var file2 = '2.txt';
      var destinationFileName = 'destination.txt';

      var originalFileMethod = bucket.file;
      bucket.file = function(name) {
        var file = originalFileMethod(name);

        if (name === '2.txt') {
          return file;
        }

        assert.strictEqual(name, destinationFileName);

        file.request = function(reqOpts) {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.uri, '/compose');
          assert.strictEqual(reqOpts.json.sourceObjects[0].name, file1.name);
          assert.strictEqual(reqOpts.json.sourceObjects[1].name, file2);

          done();
        };

        return file;
      };

      bucket.combine([file1, file2], destinationFileName);
    });

    it('should use content type from the destination metadata', function(done) {
      var destination = bucket.file('destination.txt');

      destination.request = function(reqOpts) {
        assert.strictEqual(
          reqOpts.json.destination.contentType,
          mime.contentType(destination.name)
        );

        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should use content type from the destination metadata', function(done) {
      var destination = bucket.file('destination.txt');
      destination.metadata = { contentType: 'content-type' };

      destination.request = function(reqOpts) {
        assert.strictEqual(
          reqOpts.json.destination.contentType,
          destination.metadata.contentType
        );

        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should detect dest content type if not in metadata', function(done) {
      var destination = bucket.file('destination.txt');

      destination.request = function(reqOpts) {
        assert.strictEqual(
          reqOpts.json.destination.contentType,
          mime.contentType(destination.name)
        );

        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should throw if content type cannot be determined', function() {
      assert.throws(function() {
        bucket.combine(['1', '2'], 'destination');
      }, /A content type could not be detected for the destination file\./);
    });

    it('should make correct API request', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = bucket.file('destination.txt');

      destination.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/compose');
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
      var destination = bucket.file('needs encoding.jpg');

      destination.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri.indexOf(destination), -1);
        done();
      };

      bucket.combine(sources, destination);
    });

    it('should send a source generation value if available', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      sources[0].metadata = { generation: 1 };
      sources[1].metadata = { generation: 2 };

      var destination = bucket.file('destination.txt');

      destination.request = function(reqOpts) {
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
      var destination = bucket.file('destination.txt');

      destination.request = function(reqOpts, callback) {
        callback();
      };

      bucket.combine(sources, destination, done);
    });

    it('should execute the callback with an error', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = bucket.file('destination.txt');

      var error = new Error('Error.');

      destination.request = function(reqOpts, callback) {
        callback(error);
      };

      bucket.combine(sources, destination, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute the callback with apiResponse', function(done) {
      var sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      var destination = bucket.file('destination.txt');
      var resp = { success: true };

      destination.request = function(reqOpts, callback) {
        callback(null, resp);
      };

      bucket.combine(sources, destination, function(err, obj, apiResponse) {
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('createChannel', function() {
    var ID = 'id';
    var CONFIG = {
      address: 'https://...'
    };

    it('should throw if an ID is not provided', function() {
      assert.throws(function() {
        bucket.createChannel();
      }, /An ID is required to create a channel\./);
    });

    it('should throw if an address is not provided', function() {
      assert.throws(function() {
        bucket.createChannel(ID, {});
      }, /An address is required to create a channel\./);
    });

    it('should make the correct request', function(done) {
      var config = extend({}, CONFIG, {
        a: 'b',
        c: 'd'
      });
      var originalConfig = extend({}, config);

      bucket.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/o/watch');

        var expectedJson = extend({}, config, {
          id: ID,
          type: 'web_hook'
        });
        assert.deepEqual(reqOpts.json, expectedJson);
        assert.deepEqual(config, originalConfig);

        done();
      };

      bucket.createChannel(ID, config, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        bucket.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        bucket.createChannel(ID, CONFIG, function(err, channel, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(channel, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        resourceId: 'resource-id'
      };

      beforeEach(function() {
        bucket.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec a callback with Channel & API response', function(done) {
        var channel = {};

        bucket.storage.channel = function(id, resourceId) {
          assert.strictEqual(id, ID);
          assert.strictEqual(resourceId, apiResponse.resourceId);

          return channel;
        };

        bucket.createChannel(ID, CONFIG, function(err, channel_, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(channel_, channel);
          assert.strictEqual(channel_.metadata, apiResponse);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('deleteFiles', function() {
    it('should accept only a callback', function(done) {
      bucket.getFiles = function(query, callback) {
        assert.deepEqual(query, {});
        callback(null, []);
      };

      bucket.deleteFiles(done);
    });

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

    it('should throw if no name is provided', function() {
      assert.throws(function() {
        bucket.file();
      }, /A file name must be specified\./);
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
      bucket.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/o');
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      bucket.getFiles(util.noop);
    });

    it('should get files with a query', function(done) {
      var token = 'next-page-token';
      bucket.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, { maxResults: 5, pageToken: token });
        done();
      };
      bucket.getFiles({ maxResults: 5, pageToken: token }, util.noop);
    });

    it('should return nextQuery if more results exist', function() {
      var token = 'next-page-token';
      bucket.request = function(reqOpts, callback) {
        callback(null, { nextPageToken: token, items: [] });
      };
      bucket.getFiles({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.equal(nextQuery.pageToken, token);
        assert.strictEqual(nextQuery.maxResults, 5);
      });
    });

    it('should return null nextQuery if there are no more results', function() {
      bucket.request = function(reqOpts, callback) {
        callback(null, { items: [] });
      };
      bucket.getFiles({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return File objects', function(done) {
      bucket.request = function(reqOpts, callback) {
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
      bucket.request = function(reqOpts, callback) {
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
      bucket.request = function(reqOpts, callback) {
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

      bucket.request = function(reqOpts, callback) {
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
      bucket.request = function(reqOpts, callback) {
        callback(null, { items: [fileMetadata] });
      };
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert.deepEqual(files[0].metadata, fileMetadata);
        done();
      });
    });
  });

  describe('makePrivate', function() {
    it('should set predefinedAcl & privatize files', function(done) {
      var didSetPredefinedAcl = false;
      var didMakeFilesPrivate = false;

      bucket.request = function(reqOpts, callback) {
        // Correct request.
        assert.equal(reqOpts.method, 'PATCH');
        assert.equal(reqOpts.uri, '');
        assert.deepEqual(reqOpts.qs, { predefinedAcl: 'projectPrivate' });
        assert.deepEqual(reqOpts.json, { acl: null });

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
      bucket.request = function(reqOpts, callback) {
        callback();
      };

      bucket.makeAllFilesPublicPrivate_ = function() {
        throw new Error('Please, no. I do not want to be called.');
      };

      bucket.makePrivate(done);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      bucket.request = function(reqOpts, callback) {
        callback(error);
      };

      bucket.makePrivate(function(err) {
        assert.equal(err, error);
        done();
      });
    });
  });

  describe('makePublic', function() {
    beforeEach(function() {
      bucket.request = function(reqOpts, callback) {
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

  describe('upload', function() {
    var basename = 'testfile.json';
    var filepath = path.join(__dirname, 'testdata/' + basename);
    var textFilepath = path.join(__dirname, 'testdata/textfile.txt');
    var metadata = {
      metadata: {
        a: 'b',
        c: 'd'
      }
    };

    beforeEach(function() {
      bucket.file = function(name, metadata) {
        return new FakeFile(bucket, name, metadata);
      };
    });

    it('should return early in snippet sandbox', function() {
      global.GCLOUD_SANDBOX_ENV = true;
      var returnValue = bucket.upload(filepath, assert.ifError);
      delete global.GCLOUD_SANDBOX_ENV;
      assert.strictEqual(returnValue, undefined);
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
      var options = {
        metadata: metadata,
        encryptionKey: 'key'
      };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.deepEqual(file.metadata, metadata);
        assert.strictEqual(file.options.encryptionKey, options.encryptionKey);
        done();
      });
    });

    it('should accept a path, a string dest, & cb', function(done) {
      var newFileName = 'new-file-name.png';
      var options = {
        destination: newFileName,
        encryptionKey: 'key'
      };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, newFileName);
        assert.strictEqual(file.options.encryptionKey, options.encryptionKey);
        done();
      });
    });

    it('should accept a path, a string dest, metadata, & cb', function(done) {
      var newFileName = 'new-file-name.png';
      var options = {
        destination: newFileName,
        metadata: metadata,
        encryptionKey: 'key'
      };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, newFileName);
        assert.deepEqual(file.metadata, metadata);
        assert.strictEqual(file.options.encryptionKey, options.encryptionKey);
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

    it('should execute callback with error if file not found', function(done) {
      bucket.upload('./not-real-file.json', function(err) {
        assert.strictEqual(err.code, 'ENOENT');
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

    it('should force a resumable upload', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile, resumable: true };
      fakeFile.createWriteStream = function(options_) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.strictEqual(options_.resumable, options.resumable);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
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

    it('should pass provided options to createWriteStream', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = {
        destination: fakeFile,
        a: 'b',
        c: 'd'
      };
      fakeFile.createWriteStream = function(options_) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.strictEqual(options_.a, options.a);
          assert.strictEqual(options_.c, options.c);
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
});
