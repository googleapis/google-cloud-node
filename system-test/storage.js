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
var Bucket = require('../lib/storage/bucket.js');
var crypto = require('crypto');
var File = require('../lib/storage/file.js');
var fs = require('fs');
var prop = require('propprop');
var request = require('request');
var through = require('through2');
var tmp = require('tmp');
var uuid = require('node-uuid');

var env = require('./env.js');
var gcloud = require('../lib')(env);
var storage = gcloud.storage();

var BUCKET_NAME = generateBucketName();

var files = {
  logo: {
    path: 'system-test/data/CloudPlatform_128px_Retina.png'
  },
  big: {
    path: 'system-test/data/three-mb-file.tif'
  },
  html: {
    path: 'system-test/data/long-html-file.html'
  },
  gzip: {
    path: 'system-test/data/long-html-file.html.gz'
  }
};

function deleteFile(file, callback) {
  file.delete(callback);
}

function writeToFile(file, contents, callback) {
  var writeStream = file.createWriteStream();
  writeStream.once('error', callback);
  writeStream.once('finish', callback.bind(null, null));
  writeStream.end(contents);
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
    bucket.deleteFiles(function(err) {
      assert.ifError(err);
      bucket.delete(done);
    });
  });

  describe('acls', function() {
    var USER_ACCOUNT = 'user-spsawchuk@gmail.com';

    describe('buckets', function() {
      it('should get access controls', function(done) {
        bucket.acl.get(function(err, accessControls) {
          assert.ifError(err);
          assert(Array.isArray(accessControls));
          done();
        });
      });

      it('should add entity to default access controls', function(done) {
        bucket.acl.default.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE
        }, function(err, accessControl) {
          assert.ifError(err);
          assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

          bucket.acl.default.get({
            entity: USER_ACCOUNT
          }, function(err, accessControl) {
            assert.ifError(err);
            assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

            bucket.acl.default.update({
              entity: USER_ACCOUNT,
              role: storage.acl.READER_ROLE
            }, function(err, accessControl) {
              assert.ifError(err);
              assert.equal(accessControl.role, storage.acl.READER_ROLE);

              bucket.acl.default.delete({ entity: USER_ACCOUNT }, done);
            });
          });
        });
      });

      it('should get default access controls', function(done) {
        bucket.acl.default.get(function(err, accessControls) {
          assert.ifError(err);
          assert(Array.isArray(accessControls));
          done();
        });
      });

      it('should grant an account access', function(done) {
        bucket.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE
        }, function(err, accessControl) {
          assert.ifError(err);
          assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

          var opts = { entity: USER_ACCOUNT };

          bucket.acl.get(opts, function(err, accessControl) {
            assert.ifError(err);
            assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

            bucket.acl.delete(opts, done);
          });
        });
      });

      it('should update an account', function(done) {
        bucket.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE
        }, function(err, accessControl) {
          assert.ifError(err);
          assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

          bucket.acl.update({
            entity: USER_ACCOUNT,
            role: storage.acl.WRITER_ROLE
          }, function(err, accessControl) {
            assert.ifError(err);
            assert.equal(accessControl.role, storage.acl.WRITER_ROLE);

            bucket.acl.delete({ entity: USER_ACCOUNT }, done);
          });
        });
      });

      it('should make a bucket public', function(done) {
        bucket.makePublic(function(err) {
          assert.ifError(err);
          bucket.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
            assert.ifError(err);
            assert.deepEqual(aclObject, { entity: 'allUsers', role: 'READER' });
            bucket.acl.delete({ entity: 'allUsers' }, done);
          });
        });
      });

      it('should make files public', function(done) {
        async.each(['a', 'b', 'c'], createFileWithContent, function(err) {
          assert.ifError(err);

          bucket.makePublic({ includeFiles: true }, function(err) {
            assert.ifError(err);

            bucket.getFiles(function(err, files) {
              assert.ifError(err);

              async.each(files, isFilePublic, function(err) {
                assert.ifError(err);

                async.parallel([
                  function(next) {
                    bucket.acl.default.delete({ entity: 'allUsers' }, next);
                  },
                  function(next) {
                    bucket.deleteFiles(next);
                  }
                ], done);
              });
            });
          });
        });

        function createFileWithContent(content, callback) {
          writeToFile(bucket.file(uuid() + '.txt'), content, callback);
        }

        function isFilePublic(file, callback) {
          file.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
            if (err) {
              callback(err);
              return;
            }

            if (aclObject.entity === 'allUsers' &&
                aclObject.role === 'READER') {
              callback();
            } else {
              callback(new Error('File is not public.'));
            }
          });
        }
      });

      it('should make a bucket private', function(done) {
        bucket.makePublic(function(err) {
          assert.ifError(err);
          bucket.makePrivate(function(err) {
            assert.ifError(err);
            bucket.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
              assert.equal(err.code, 404);
              assert.equal(err.message, 'Not Found');
              assert.equal(aclObject, null);
              done();
            });
          });
        });
      });

      it('should make files private', function(done) {
        async.each(['a', 'b', 'c'], createFileWithContent, function(err) {
          assert.ifError(err);

          bucket.makePrivate({ includeFiles: true }, function(err) {
            assert.ifError(err);

            bucket.getFiles(function(err, files) {
              assert.ifError(err);

              async.each(files, isFilePrivate, function(err) {
                assert.ifError(err);

                bucket.deleteFiles(done);
              });
            });
          });
        });

        function createFileWithContent(content, callback) {
          writeToFile(bucket.file(uuid() + '.txt'), content, callback);
        }

        function isFilePrivate(file, callback) {
          file.acl.get({ entity: 'allUsers' }, function(err) {
            if (err && err.code === 404) {
              callback();
            } else {
              callback(new Error('File is not private.'));
            }
          });
        }
      });
    });

    describe('files', function() {
      var file;

      beforeEach(function(done) {
        var options = {
          destination: uuid.v1() + '.png'
        };
        bucket.upload(files.logo.path, options, function(err, f) {
          assert.ifError(err);
          file = f;
          done();
        });
      });

      afterEach(function(done) {
        file.delete(done);
      });

      it('should get access controls', function(done) {
        file.acl.get(done, function(err, accessControls) {
          assert.ifError(err);
          assert(Array.isArray(accessControls));
          done();
        });
      });

      it('should not expose default api', function() {
        assert.equal(typeof file.default, 'undefined');
      });

      it('should grant an account access', function(done) {
        file.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE
        }, function(err, accessControl) {
          assert.ifError(err);
          assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

          file.acl.get({ entity: USER_ACCOUNT }, function(err, accessControl) {
            assert.ifError(err);
            assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

            file.acl.delete({ entity: USER_ACCOUNT }, done);
          });
        });
      });

      it('should update an account', function(done) {
        file.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE
        }, function(err, accessControl) {
          assert.ifError(err);
          assert.equal(accessControl.role, storage.acl.OWNER_ROLE);

          file.acl.update({
            entity: USER_ACCOUNT,
            role: storage.acl.READER_ROLE
          }, function(err, accessControl) {
            assert.ifError(err);

            assert.equal(accessControl.role, storage.acl.READER_ROLE);

            file.acl.delete({ entity: USER_ACCOUNT }, done);
          });
        });
      });

      it('should make a file public', function(done) {
        file.makePublic(function(err) {
          assert.ifError(err);
          file.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
            assert.ifError(err);
            assert.deepEqual(aclObject, { entity: 'allUsers', role: 'READER' });
            file.acl.delete({ entity: 'allUsers' }, done);
          });
        });
      });

      it('should make a file private', function(done) {
        file.makePublic(function(err) {
          assert.ifError(err);
          file.makePrivate(function(err) {
            assert.ifError(err);
            file.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
              assert.equal(err.code, 404);
              assert.equal(err.message, 'Not Found');
              assert.equal(aclObject, null);
              done();
            });
          });
        });
      });
    });
  });

  describe('getting buckets', function() {
    var bucketsToCreate = [
      generateBucketName(), generateBucketName()
    ];

    before(function(done) {
      async.map(bucketsToCreate, storage.createBucket.bind(storage), done);
    });

    after(function(done) {
      async.series(bucketsToCreate.map(function(bucket) {
        return function(done) {
          storage.bucket(bucket).delete(done);
        };
      }), done);
    });

    it('should get buckets', function(done) {
      storage.getBuckets(function(err, buckets) {
        var createdBuckets = buckets.filter(function(bucket) {
          return bucketsToCreate.indexOf(bucket.name) > -1;
        });

        assert.equal(createdBuckets.length, bucketsToCreate.length);
        done();
      });
    });

    it('should get buckets as a stream', function(done) {
      var bucketEmitted = false;

      storage.getBuckets()
        .on('error', done)
        .on('data', function(bucket) {
          bucketEmitted = bucket instanceof Bucket;
        })
        .on('end', function() {
          assert.strictEqual(bucketEmitted, true);
          done();
        });
    });
  });

  describe('bucket metadata', function() {
    it('should allow setting metadata on a bucket', function(done) {
      var metadata = {
        website: {
          mainPageSuffix: 'http://fakeuri',
          notFoundPage: 'http://fakeuri/404.html'
        }
      };

      bucket.setMetadata(metadata, function(err, meta) {
        assert.ifError(err);
        assert.deepEqual(meta.website, metadata.website);
        done();
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

    it('should read/write from/to a file in a directory', function(done) {
      var file = bucket.file('directory/file');
      var contents = 'test';

      var writeStream = file.createWriteStream({ resumable: false });
      writeStream.write(contents);
      writeStream.end();

      writeStream.on('error', done);
      writeStream.on('finish', function() {
        var data = new Buffer('');

        file.createReadStream()
          .on('error', done)
          .on('data', function(chunk) {
            data = Buffer.concat([data, chunk]);
          })
          .on('end', function() {
            assert.equal(data.toString(), contents);
            done();
          });
      });
    });

    it('should not push data when a file cannot be read', function(done) {
      var file = bucket.file('non-existing-file');
      var dataEmitted = false;

      file.createReadStream()
        .on('data', function() {
          dataEmitted = true;
        })
        .on('error', function(err) {
          assert.strictEqual(dataEmitted, false);
          assert.strictEqual(err.code, 404);
          done();
        });
    });

    it('should read a byte range from a file', function(done) {
      bucket.upload(files.big.path, function(err, file) {
        assert.ifError(err);

        var fileSize = file.metadata.size;
        var byteRange = {
          start: Math.floor(fileSize * 1 / 3),
          end: Math.floor(fileSize * 2 / 3)
        };
        var expectedContentSize = byteRange.start + 1;

        var sizeStreamed = 0;
        file.createReadStream(byteRange)
          .on('data', function(chunk) {
            sizeStreamed += chunk.length;
          })
          .on('error', done)
          .on('end', function() {
            assert.equal(sizeStreamed, expectedContentSize);
            file.delete(done);
          });
      });
    });

    it('should download a file to memory', function(done) {
      var fileContents = fs.readFileSync(files.big.path);

      bucket.upload(files.big.path, function(err, file) {
        assert.ifError(err);

        file.download(function(err, remoteContents) {
          assert.ifError(err);
          assert.equal(String(fileContents), String(remoteContents));
          done();
        });
      });
    });

    it('should handle non-network errors', function(done) {
      var file = bucket.file('hi.jpg');
      file.download(function(err) {
        assert.strictEqual(err.code, 404);
        assert.strictEqual(err.message, 'Not Found');
        done();
      });
    });

    it('should gzip a file on the fly and download it', function(done) {
      var options = {
        gzip: true
      };

      var expectedContents = fs.readFileSync(files.html.path, 'utf-8');

      bucket.upload(files.html.path, options, function(err, file) {
        assert.ifError(err);

        file.download(function(err, contents) {
          assert.ifError(err);
          assert.strictEqual(contents.toString(), expectedContents);
          file.delete(done);
        });
      });
    });

    it('should upload a gzipped file and download it', function(done) {
      var options = {
        metadata: {
          contentEncoding: 'gzip'
        }
      };

      var expectedContents = fs.readFileSync(files.html.path, 'utf-8');

      bucket.upload(files.gzip.path, options, function(err, file) {
        assert.ifError(err);

        file.download(function(err, contents) {
          assert.ifError(err);
          assert.strictEqual(contents.toString(), expectedContents);
          file.delete(done);
        });
      });
    });

    describe('stream write', function() {
      it('should stream write, then remove file (3mb)', function(done) {
        var file = bucket.file('LargeFile');
        fs.createReadStream(files.big.path)
          .pipe(file.createWriteStream({ resumable: false }))
          .on('error', done)
          .on('finish', function() {
            assert.equal(file.metadata.md5Hash, files.big.hash);
            file.delete(done);
          });
      });

      it('should write metadata', function(done) {
        var options = {
          metadata: { contentType: 'image/png' },
          resumable: false
        };

        bucket.upload(files.logo.path, options, function(err, file) {
          assert.ifError(err);

          file.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.equal(metadata.contentType, options.metadata.contentType);
            file.delete(done);
          });
        });
      });

      it('should resume an upload after an interruption', function(done) {
        fs.stat(files.big.path, function(err, metadata) {
          assert.ifError(err);

          // Use a random name to force an empty ConfigStore cache.
          var file = bucket.file('LargeFile' + Date.now());
          var fileSize = metadata.size;

          upload({ interrupt: true }, function(err) {
            assert.strictEqual(err.message, 'Interrupted.');

            upload({ interrupt: false }, function(err) {
              assert.ifError(err);

              assert.equal(file.metadata.size, fileSize);
              file.delete(done);
            });
          });

          function upload(opts, callback) {
            var ws = file.createWriteStream();
            var sizeStreamed = 0;

            fs.createReadStream(files.big.path)
              .pipe(through(function(chunk, enc, next) {
                sizeStreamed += chunk.length;

                if (opts.interrupt && sizeStreamed >= fileSize / 2) {
                  // stop sending data half way through.
                  this.push(chunk);
                  this.destroy();
                  ws.destroy(new Error('Interrupted.'));
                } else {
                  this.push(chunk);
                  next();
                }
              }))
              .pipe(ws)
              .on('error', callback)
              .on('finish', callback);
          }
        });
      });

      it('should write/read/remove from a buffer', function(done) {
        tmp.setGracefulCleanup();
        tmp.file(function _tempFileCreated(err, tmpFilePath) {
          assert.ifError(err);

          var file = bucket.file('MyBuffer');
          var fileContent = 'Hello World';

          var writable = file.createWriteStream();

          writable.write(fileContent);
          writable.end();

          writable.on('finish', function() {
            file.createReadStream()
              .on('error', done)
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

  describe('combine files', function() {
    it('should combine multiple files into one', function(done) {
      var files = [
        { file: bucket.file('file-one.txt'), contents: '123' },
        { file: bucket.file('file-two.txt'), contents: '456' }
      ];

      async.each(files, createFile, function(err) {
        assert.ifError(err);

        var sourceFiles = files.map(prop('file'));
        var destinationFile = bucket.file('file-one-and-two.txt');

        bucket.combine(sourceFiles, destinationFile, function(err) {
          assert.ifError(err);

          destinationFile.download(function(err, contents) {
            assert.ifError(err);

            assert.equal(contents, files.map(prop('contents')).join(''));

            async.each(sourceFiles.concat([destinationFile]), deleteFile, done);
          });
        });
      });

      function createFile(fileObject, callback) {
        writeToFile(fileObject.file, fileObject.contents, callback);
      }
    });
  });

  describe('list files', function() {
    var filenames = ['CloudLogo1', 'CloudLogo2', 'CloudLogo3'];

    before(function(done) {
      bucket.deleteFiles(function(err) {
        assert.ifError(err);

        var file = bucket.file(filenames[0]);
        fs.createReadStream(files.logo.path)
          .pipe(file.createWriteStream())
          .on('error', done)
          .on('finish', function() {
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
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert.equal(files.length, filenames.length);
        done();
      });
    });

    it('should get files as a stream', function(done) {
      var fileEmitted = false;

      bucket.getFiles()
        .on('error', done)
        .on('data', function(file) {
          fileEmitted = file instanceof File;
        })
        .on('end', function() {
          assert.strictEqual(fileEmitted, true);
          done();
        });
    });

    it('should paginate the list', function(done) {
      var query = {
        maxResults: filenames.length - 1
      };

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

  describe('file generations', function() {
    var VERSIONED_BUCKET_NAME = generateBucketName();
    var versionedBucket;

    before(function(done) {
      var opts = { versioning: { enabled: true } };

      storage.createBucket(VERSIONED_BUCKET_NAME, opts, function(err, bucket) {
        assert.ifError(err);
        versionedBucket = bucket;
        done();
      });
    });

    after(function(done) {
      versionedBucket.deleteFiles({ versions: true }, function(err) {
        if (err) {
          done(err);
          return;
        }

        versionedBucket.delete(done);
      });
    });

    it('should overwrite file, then get older version', function(done) {
      var VERSIONED_FILE_NAME = Date.now();
      var versionedFile = versionedBucket.file(VERSIONED_FILE_NAME);

      writeToFile(versionedFile, 'a', function(err) {
        assert.ifError(err);

        versionedFile.getMetadata(function(err, metadata) {
          assert.ifError(err);

          var initialGeneration = metadata.generation;

          writeToFile(versionedFile, 'b', function(err) {
            assert.ifError(err);

            var firstGenFile = versionedBucket.file(VERSIONED_FILE_NAME, {
              generation: initialGeneration
            });

            firstGenFile.download(function(err, contents) {
              assert.ifError(err);
              assert.equal(contents, 'a');
              done();
            });
          });
        });
      });
    });

    it('should get all files scoped to their version', function(done) {
      var filesToCreate = [
        { file: versionedBucket.file('file-one.txt'), contents: '123' },
        { file: versionedBucket.file('file-one.txt'), contents: '456' }
      ];

      async.each(filesToCreate, createFile, function(err) {
        assert.ifError(err);

        versionedBucket.getFiles({ versions: true }, function(err, files) {
          assert.ifError(err);

          // same file.
          assert.equal(files[0].name, files[1].name);

          // different generations.
          assert.notEqual(
            files[0].metadata.generation,
            files[1].metadata.generation
          );

          done();
        });
      });

      function createFile(fileObject, callback) {
        writeToFile(fileObject.file, fileObject.contents, callback);
      }
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
        .on('finish', done.bind(null, null));
    });

    it('should create a signed read url', function(done) {
      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5000
      }, function(err, signedReadUrl) {
        assert.ifError(err);
        request.get(signedReadUrl, function(err, resp, body) {
          assert.ifError(err);
          assert.equal(body, localFile);
          file.delete(done);
        });
      });
    });

    it('should create a signed delete url', function(done) {
      file.getSignedUrl({
        action: 'delete',
        expires: Date.now() + 5000
      }, function(err, signedDeleteUrl) {
        assert.ifError(err);
        request.del(signedDeleteUrl, function(err) {
          assert.ifError(err);
          file.getMetadata(function(err) {
            assert.equal(err.code, 404);
            done();
          });
        });
      });
    });
  });

  describe('sign policy', function() {
    var file;

    before(function(done) {
      file = bucket.file('LogoToSign.jpg');
      fs.createReadStream(files.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('finish', done.bind(null, null));
    });

    after(function(done) {
      file.delete(done);
    });

    it('should create a policy', function(done) {
      var expires = new Date('10-25-2022');
      var expectedExpiration = new Date(expires).toISOString();

      var options = {
        equals: ['$Content-Type', 'image/jpeg'],
        expires: expires,
        contentLengthRange: {
          min: 0,
          max: 1024
        }
      };

      file.getSignedPolicy(options, function(err, policy) {
        assert.ifError(err);

        var policyJson;

        try {
          policyJson = JSON.parse(policy.string);
        } catch (e) {
          done(e);
          return;
        }

        assert.strictEqual(policyJson.expiration, expectedExpiration);
        done();
      });
    });
  });
});
