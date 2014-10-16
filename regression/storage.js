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

/*global describe, it, before, after */

'use strict';

var assert = require('assert');
var async = require('async');
var crypto = require('crypto');
var fs = require('fs');
var request = require('request');
var tmp = require('tmp');

var env = require('./env.js');
var storage = require('../lib/storage')(env);

var files = {
  logo: {
    path: 'regression/data/CloudPlatform_128px_Retina.png'
  },
  big: {
    path: 'regression/data/five-mb-file.zip'
  }
};

function setHash(obj, file, done) {
  var hash = crypto.createHash('md5');
  fs.createReadStream(obj[file].path)
    .on('data', hash.update.bind(hash))
    .on('end', function() {
      obj[file].hash = hash.digest('base64');
      done();
    });
}

function deleteBucketsAndFiles(callback) {
  storage.getBuckets(function(err, buckets) {
    if (err) {
      callback(err);
      return;
    }
    async.map(buckets, function(bucket, next) {
      deleteFiles(bucket, function() {
        bucket.delete(next);
      });
    }, callback);
  });
}

function deleteFiles(bucket, callback) {
  bucket.getFiles(function(err, files) {
    if (err) {
      callback(err);
      return;
    }
    async.map(files, function(file, next) {
      file.delete(next);
    }, callback);
  });
}

describe('storage', function() {
  var bucket;

  before(function(done) {
    deleteBucketsAndFiles(function() {
      storage.createBucket('new' + Date.now(), function(err, newBucket) {
        if (err) {
          done(err);
          return;
        }
        bucket = newBucket;
        done();
      });
    });
  });

  after(deleteBucketsAndFiles);

  describe('creating a bucket', function() {
    it('should create a bucket', function(done) {
      storage.createBucket('a-new-bucket', function(err, bucket) {
        assert.ifError(err);
        bucket.delete(done);
      });
    });
  });

  describe('getting buckets', function() {
    it('should get buckets', function(done) {
      var bucketsToCreate = [
        'new' + Date.now(),
        'newer' + Date.now(),
        'newest' + Date.now()
      ];
      async.map(
        bucketsToCreate,
        storage.createBucket.bind(storage),
        function(err) {
          assert.ifError(err);
          storage.getBuckets(function(err, buckets) {
            assert.equal(
              buckets.filter(function(bucket) {
                return bucketsToCreate.indexOf(bucket.name) > -1;
              }).length,
              bucketsToCreate.length
            );
            done();
          });
        });
    });
  });

  describe('write, read, and remove files', function() {
    before(function(done) {
      var doneCalled = 0;
      Object.keys(files).forEach(function(file) {
        setHash(files, file, function() {
          if (++doneCalled === Object.keys(files).length) {
            done();
          }
        });
      });
    });

    describe('stream write', function() {
      it('should stream write, then remove large file (5mb)', function(done) {
        var file = bucket.file('LargeFile');
        fs.createReadStream(files.big.path)
          .pipe(file.createWriteStream())
          .on('error', done)
          .on('complete', function(fileObject) {
            assert.equal(fileObject.md5Hash, files.big.hash);
            file.delete(done);
          });
      });

      it('should write metadata', function(done) {
        var myMetadata = { contentType: 'image/png' };
        bucket.upload(files.logo.path, myMetadata, function(err, file) {
          assert.ifError(err);
          file.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.equal(metadata.contentType, myMetadata.contentType);
            file.delete(done);
          });
        });
      });

      it('should write/read/remove from a buffer', function(done) {
        tmp.setGracefulCleanup();
        tmp.file(function _tempFileCreated(err, tmpFilePath) {
          var file = bucket.file('MyBuffer');
          var fileContent = 'Hello World';
          assert.ifError(err);
          var writable = file.createWriteStream();
          writable.write(fileContent);
          writable.end();
          writable.on('complete', function() {
            file.createReadStream()
              .pipe(fs.createWriteStream(tmpFilePath))
              .on('error', done)
              .on('finish', function() {
                file.delete(function(err) {
                  assert.ifError(err);
                  fs.readFile(tmpFilePath, function(err, data) {
                    assert.equal(data, fileContent);
                    done();
                  });
                });
              });
          });
        });
      });
    });

    it('should copy an existing file', function(done) {
      bucket.upload(files.logo.path, 'CloudLogo', function(err, file) {
        assert.ifError(err);
        file.copy('CloudLogoCopy', function(err, copiedFile) {
          assert.ifError(err);
          async.parallel([
            file.delete.bind(file),
            copiedFile.delete.bind(copiedFile)
          ], done);
        });
      });
    });
  });

  describe('list files', function() {
    var filenames = ['CloudLogo1', 'CloudLogo2', 'CloudLogo3'];

    before(function(done) {
      deleteFiles(bucket, function(err) {
        if (err) {
          done(err);
          return;
        }
        var file = bucket.file(filenames[0]);
        fs.createReadStream(files.logo.path)
          .pipe(file.createWriteStream())
          .on('error', done)
          .on('complete', function() {
            file.copy(filenames[1], function(err, copiedFile) {
              assert.ifError(err);
              copiedFile.copy(filenames[2], done);
            });
          });
      });
    });

    after(function(done) {
      async.parallel(
        filenames.map(function(filename) {
          return function(callback) {
            bucket.file(filename).delete(callback);
          };
        }), done);
    });

    it('should get files', function(done) {
      bucket.getFiles(function(err, files, nextQuery) {
        assert.ifError(err);
        assert.equal(files.length, filenames.length);
        assert.equal(nextQuery, null);
        done();
      });
    });

    it('should paginate the list', function(done) {
      var query = { maxResults: filenames.length - 1 };
      bucket.getFiles(query, function(err, files, nextQuery) {
        assert.ifError(err);
        assert.equal(files.length, filenames.length - 1);
        assert(nextQuery);
        bucket.getFiles(nextQuery, function(err, files) {
          assert.ifError(err);
          assert.equal(files.length, 1);
          done();
        });
      });
    });
  });

  describe('sign urls', function() {
    var localFile = fs.readFileSync(files.logo.path);
    var file;

    before(function(done) {
      file = bucket.file('LogoToSign.jpg');
      fs.createReadStream(files.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('complete', done.bind(null, null));
    });

    it('should create a signed read url', function(done) {
      file.getSignedUrl({
        action: 'read',
        expires: Math.round(Date.now() / 1000) + 5
      }, function(err, signedReadUrl) {
        assert.ifError(err);
        request.get(signedReadUrl, function(err, resp, body) {
          assert.equal(body, localFile);
          file.delete(done);
        });
      });
    });

    it('should create a signed delete url', function(done) {
      file.getSignedUrl({
        action: 'delete',
        expires: Math.round(Date.now() / 1000) + 283473274
      }, function(err, signedDeleteUrl) {
        assert.ifError(err);
        request.del(signedDeleteUrl, function() {
          file.getMetadata(function(err) {
            assert.equal(err.code, 404);
            done();
          });
        });
      });
    });
  });
});
