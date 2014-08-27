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

/*global describe, it, before, after, beforeEach */

'use strict';

var assert = require('assert');
var async = require('async');
var crypto = require('crypto');
var fs = require('fs');
var request = require('request');
var tmp = require('tmp');

var env = require('./env.js');
var gcloud = require('../lib');

var bucket = new gcloud.storage.Bucket(env);

var files = {
  logo: {
    path: 'regression/data/CloudPlatform_128px_Retina.png'
  },
  big: {
    path: 'regression/data/five-mb-file.zip'
  }
};

function setHash(obj, file, done) {
  var md5sum = crypto.createHash('md5');
  fs.createReadStream(obj[file].path)
      .on('data', function(d) {
        md5sum.update(d);
      })
      .on('end', function() {
        obj[file].hash = md5sum.digest('base64');
        done();
      });
}

describe('storage', function() {
  describe('write, read, and remove files', function() {
    before(function(done) {
      var doneCalled = 0;
      Object.keys(files).forEach(function(file) {
        setHash(files, file, function() {
          if (++doneCalled === 2) {
            done();
          }
        });
      });
    });

    describe('stream write', function() {
      it('should stream write, then remove large file (5mb)', function(done) {
        var fileName = 'LargeFile';

        fs.createReadStream(files.big.path)
            .pipe(bucket.createWriteStream(fileName))
            .on('error', done)
            .on('complete', function(fileObject) {
              assert.equal(fileObject.md5Hash, files.big.hash);
              bucket.remove(fileName, done);
            });
      });

      it('should write and read metadata', function(done) {
        var fileName = 'CloudLogo';
        var myMetadata = { contentType: 'image/png' };

        fs.createReadStream(files.logo.path)
            .pipe(bucket.createWriteStream(fileName, myMetadata))
            .on('error', done)
            .on('complete', function() {
              bucket.stat(fileName, function(err, metadata) {
                assert.ifError(err);
                assert.equal(metadata.contentType, myMetadata.contentType);
                bucket.remove(fileName, function(err) {
                  assert.ifError(err);
                  done();
                });
              });
            });
      });

      it('should write/read/remove from a buffer', function(done) {
        var fileName = 'MyBuffer';
        var fileContent =  'Hello World';
        tmp.setGracefulCleanup();
        tmp.file(function _tempFileCreated(err, path) {
          assert.ifError(err);
          bucket.write(fileName, fileContent, function(err, fileObject) {
            assert.ifError(err);
            assert(fileObject);
            bucket.createReadStream(fileName)
                .pipe(fs.createWriteStream(path))
                .on('error', done)
                .on('finish', function() {
                  bucket.remove(fileName, function(err) {
                    assert.ifError(err);
                    fs.readFile(path, function(err, data) {
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
      var fileName = 'CloudLogo';
      var copyName = 'CloudLogoCopy';

      fs.createReadStream(files.logo.path)
          .pipe(bucket.createWriteStream(fileName))
          .on('error', done)
          .on('complete', function() {
            bucket.copy(fileName, { name: copyName }, function(err) {
              assert.ifError(err);
              async.parallel([
                bucket.remove.bind(bucket, fileName),
                bucket.remove.bind(bucket, copyName)
              ], done);
            });
          });
    });
  });

  describe('list files', function() {
    var filenames = ['CloudLogo1', 'CloudLogo2', 'CloudLogo3'];

    before(function(done) {
      fs.createReadStream(files.logo.path)
          .pipe(bucket.createWriteStream(filenames[0]))
          .on('error', done)
          .on('complete', function() {
            bucket.copy(filenames[0], { name: filenames[1] }, function(err) {
              assert.ifError(err);
              bucket.copy(filenames[0], { name: filenames[2] }, function(err) {
                assert.ifError(err);
                done();
              });
            });
          });
    });

    it('should list files', function(done) {
      bucket.list(function(err, files, nextQuery) {
        assert.ifError(err);
        assert.equal(files.length, 3);
        assert.equal(nextQuery, null);
        done();
      });
    });

    it('should paginate the list', function(done) {
      bucket.list({ maxResults: 2 }, function(err, files, nextQuery) {
        assert.ifError(err);
        assert.equal(files.length, 2);
        assert(nextQuery);
        bucket.list(nextQuery, function(err, files) {
          assert.ifError(err);
          assert(files);
          done();
        });
      });
    });

    after(function(done) {
      async.parallel(
        filenames.map(function(filename) {
          return function(callback) {
            bucket.remove(filename, callback);
          };
        }), done);
    });
  });

  describe('sign urls', function() {
    var fileName = 'LogoToSign.jpg';

    beforeEach(function(done) {
      fs.createReadStream(files.logo.path)
          .pipe(bucket.createWriteStream(fileName))
          .on('error', done)
          .on('complete', done.bind(null, null));
    });

    it('should create a signed read url', function(done) {
      var signedReadUrl = bucket.getSignedUrl({
          action: 'read',
          expires: Math.round(Date.now() / 1000) + 5,
          resource: fileName
        });
      var localFile = fs.readFileSync(files.logo.path);
      request.get(signedReadUrl, function(err, resp, body) {
        assert.equal(body, localFile);
        bucket.remove(fileName, done);
      });
    });

    it('should create a signed delete url', function(done) {
      var signedDeleteUrl = bucket.getSignedUrl({
          action: 'delete',
          expires: Math.round(Date.now() / 1000) + 5,
          resource: fileName
        });
      request.del(signedDeleteUrl, function(err, resp) {
        assert.equal(resp.statusCode, 204);
        bucket.stat(fileName, function(err) {
          assert.equal(err.code, 404);
          done();
        });
      });
    });

    it('should allow control of expiration', function(done) {
      var offsetSeconds = 5;
      var signedReadUrl = bucket.getSignedUrl({
          action: 'read',
          expires: Math.round(Date.now() / 1000) + offsetSeconds,
          resource: fileName
        });
      var localFile = fs.readFileSync(files.logo.path);
      request.get(signedReadUrl, function(err, resp, body) {
        assert.equal(body, localFile);
      });
      setTimeout(function() {
        request.get(signedReadUrl, function(err, resp) {
          assert.equal(resp.statusCode, 400);
          bucket.remove(fileName, done);
        });
      }, (offsetSeconds + 1) * 1000);
    });
  });
});
