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
var uuid = require('node-uuid');

var env = require('./env.js');
var storage = require('../lib/storage')(env);

var BUCKET_NAME = generateBucketName();

var files = {
  logo: {
    path: 'regression/data/CloudPlatform_128px_Retina.png'
  },
  big: {
    path: 'regression/data/five-mb-file.zip'
  }
};

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

function generateBucketName() {
  return 'gcloud-test-bucket-temp-' + uuid.v1();
}

function setHash(obj, file, done) {
  var hash = crypto.createHash('md5');
  fs.createReadStream(obj[file].path)
    .on('data', hash.update.bind(hash))
    .on('end', function() {
      obj[file].hash = hash.digest('base64');
      done();
    });
}

describe('storage', function() {
  var bucket;

  before(function(done) {
    storage.createBucket(BUCKET_NAME, function(err, newBucket) {
      assert.ifError(err);
      bucket = newBucket;
      done();
    });
  });

  after(function(done) {
    deleteFiles(bucket, function(err) {
      assert.ifError(err);
      bucket.delete(done);
    });
  });

  describe('getting buckets', function() {
    var bucketsToCreate = [
      generateBucketName(), generateBucketName(), generateBucketName()
    ];

    before(function(done) {
      async.map(bucketsToCreate, storage.createBucket.bind(storage), done);
    });

    after(function(done) {
      async.parallel(bucketsToCreate.map(function(bucket) {
        return function(done) {
          storage.bucket(bucket).delete(done);
        };
      }), done);
    });

    it('should get buckets', function(done) {
      storage.getBuckets(getBucketsHandler);

      var createdBuckets = [];
      var retries = 0;
      var MAX_RETRIES = 2;

      function getBucketsHandler(err, buckets, nextQuery) {
        buckets.forEach(function(bucket) {
          if (bucketsToCreate.indexOf(bucket.name) > -1) {
            createdBuckets.push(bucket);
          }
        });

        if (createdBuckets.length < bucketsToCreate.length && nextQuery) {
          retries++;

          if (retries <= MAX_RETRIES) {
            storage.getBuckets(nextQuery, getBucketsHandler);
            return;
          }
        }

        assert.equal(createdBuckets.length, bucketsToCreate.length);
        done();
      }
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

    it('should read/write from/to a file in a directory', function(done) {
      var file = bucket.file('directory/file');
      var contents = 'test';

      var writeStream = file.createWriteStream();
      writeStream.write(contents);
      writeStream.end();

      writeStream.on('error', done);
      writeStream.on('complete', function() {
        file.createReadStream()
          .on('data', function(chunk) {
            assert.equal(String(chunk), contents);
          })
          .on('error', done)
          .on('end', done);
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
