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
var crypto = require('crypto');
var extend = require('extend');
var fs = require('fs');
var normalizeNewline = require('normalize-newline');
var path = require('path');
var prop = require('propprop');
var request = require('request');
var through = require('through2');
var tmp = require('tmp');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');

var Storage = require('../');
var Bucket = Storage.Bucket;
var File = Storage.File;

describe('storage', function() {
  var IS_CI = env.projectId === 'long-door-651';
  var TESTS_PREFIX = 'gcloud-test-';

  var storage = new Storage(env);
  var bucket = storage.bucket(generateName());

  var FILES = {
    logo: {
      path: path.join(__dirname, 'data/CloudPlatform_128px_Retina.png')
    },
    big: {
      path: path.join(__dirname, 'data/three-mb-file.tif')
    },
    html: {
      path: path.join(__dirname, 'data/long-html-file.html')
    },
    gzip: {
      path: path.join(__dirname, 'data/long-html-file.html.gz')
    }
  };

  before(function(done) {
    bucket.create(done);
  });

  after(function(done) {
    if (IS_CI) {
      // The system tests account is unable to delete files.
      // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
      done();
      return;
    }

    storage.getBuckets({
      prefix: TESTS_PREFIX
    }, function(err, buckets) {
      if (err) {
        done(err);
        return;
      }

      function deleteBucket(bucket, callback) {
        // After files are deleted, eventual consistency may require a bit of a
        // delay to ensure that the bucket recognizes that the files don't exist
        // anymore.
        var CONSISTENCY_DELAY_MS = 250;

        bucket.deleteFiles({
          versions: true
        }, function(err) {
          if (err) {
            callback(err);
            return;
          }

          setTimeout(function() {
            bucket.delete(callback);
          }, CONSISTENCY_DELAY_MS);
        });
      }

      async.eachLimit(buckets, 10, deleteBucket, done);
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
          writeToFile(bucket.file(generateName() + '.txt'), content, callback);
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
          writeToFile(bucket.file(generateName() + '.txt'), content, callback);
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
          destination: generateName() + '.png'
        };

        bucket.upload(FILES.logo.path, options, function(err, f) {
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

      it('should set custom encryption during the upload', function(done) {
        var key = crypto.randomBytes(32);

        bucket.upload(FILES.big.path, {
          encryptionKey: key,
          resumable: false
        }, function(err, file) {
          assert.ifError(err);

          file.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(
              metadata.customerEncryption.encryptionAlgorithm,
              'AES256'
            );
            done();
          });
        });
      });

      it('should set custom encryption in a resumable upload', function(done) {
        var key = crypto.randomBytes(32);

        bucket.upload(FILES.big.path, {
          encryptionKey: key,
          resumable: true
        }, function(err, file) {
          assert.ifError(err);

          file.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(
              metadata.customerEncryption.encryptionAlgorithm,
              'AES256'
            );
            done();
          });
        });
      });

      it('should make a file public during the upload', function(done) {
        bucket.upload(FILES.big.path, {
          resumable: false,
          public: true
        }, function(err, file) {
          assert.ifError(err);

          file.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
            assert.ifError(err);
            assert.deepEqual(aclObject, {
              entity: 'allUsers',
              role: 'READER'
            });
            done();
          });
        });
      });

      it('should make a file public from a resumable upload', function(done) {
        bucket.upload(FILES.big.path, {
          resumable: true,
          public: true
        }, function(err, file) {
          assert.ifError(err);

          file.acl.get({ entity: 'allUsers' }, function(err, aclObject) {
            assert.ifError(err);
            assert.deepEqual(aclObject, {
              entity: 'allUsers',
              role: 'READER'
            });
            done();
          });
        });
      });

      it('should make a file private from a resumable upload', function(done) {
        bucket.upload(FILES.big.path, {
          resumable: true,
          private: true
        }, function(err, file) {
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

  describe('iam', function() {
    var PROJECT_ID;

    before(function(done) {
      storage.authClient.getProjectId(function(err, projectId) {
        if (err) {
          done(err);
          return;
        }

        PROJECT_ID = projectId;
        done();
      });
    });

    describe('buckets', function() {
      it('should get a policy', function(done) {
        bucket.iam.getPolicy(function(err, policy) {
          assert.ifError(err);

          assert.deepEqual(policy.bindings, [
            {
              members: [
                'projectEditor:' + PROJECT_ID,
                'projectOwner:' + PROJECT_ID
              ],
              role: 'roles/storage.legacyBucketOwner'
            },
            {
              members: [
                'projectViewer:' + PROJECT_ID
              ],
              role: 'roles/storage.legacyBucketReader'
            }
          ]);

          done();
        });
      });

      it('should set a policy', function(done) {
        var policy = {
          bindings: [
            {
              role: 'roles/storage.legacyBucketReader',
              members: [
                'allUsers'
              ]
            }
          ]
        };

        bucket.iam.setPolicy(policy, function(err, newPolicy) {
          assert.ifError(err);
          assert.deepEqual(newPolicy.bindings, policy.bindings);
          done();
        });
      });

      it('should test the iam permissions', function(done) {
        var testPermissions = [
          'storage.buckets.get',

          // Unable to test.
          // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
          // 'storage.buckets.getIamPolicy'
        ];

        bucket.iam.testPermissions(testPermissions, function(err, permissions) {
          assert.ifError(err);

          assert.deepEqual(permissions, {
            'storage.buckets.get': true
          });

          done();
        });
      });
    });
  });

  describe('getting buckets', function() {
    var bucketsToCreate = [
      generateName(),
      generateName()
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

      storage.getBucketsStream()
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
      if (IS_CI) {
        // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
        this.skip();
        return;
      }

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

    describe('labels', function() {
      var LABELS = {
        label: 'labelvalue', // no caps or spaces allowed (?)
        labeltwo: 'labelvaluetwo'
      };

      beforeEach(function(done) {
        bucket.deleteLabels(done);
      });

      it('should set labels', function(done) {
        bucket.setLabels(LABELS, function(err) {
          assert.ifError(err);

          bucket.getLabels(function(err, labels) {
            assert.ifError(err);
            assert.deepStrictEqual(labels, LABELS);
            done();
          });
        });
      });

      it('should update labels', function(done) {
        var newLabels = {
          siblinglabel: 'labelvalue'
        };

        bucket.setLabels(LABELS, function(err) {
          assert.ifError(err);

          bucket.setLabels(newLabels, function(err) {
            assert.ifError(err);

            bucket.getLabels(function(err, labels) {
              assert.ifError(err);
              assert.deepStrictEqual(labels, extend({}, LABELS, newLabels));
              done();
            });
          });
        });
      });

      it('should delete a single label', function(done) {
        if (LABELS.length <= 1) {
          done(new Error('Maintainer Error: `LABELS` needs 2 labels.'));
          return;
        }

        var labelKeyToDelete = Object.keys(LABELS)[0];

        bucket.setLabels(LABELS, function(err) {
          assert.ifError(err);

          bucket.deleteLabels(labelKeyToDelete, function(err) {
            assert.ifError(err);

            bucket.getLabels(function(err, labels) {
              assert.ifError(err);

              var expectedLabels = extend({}, LABELS);
              delete expectedLabels[labelKeyToDelete];

              assert.deepStrictEqual(labels, expectedLabels);

              done();
            });
          });
        });
      });

      it('should delete all labels', function(done) {
        bucket.deleteLabels(function(err) {
          assert.ifError(err);

          bucket.getLabels(function(err, labels) {
            assert.ifError(err);
            assert.deepStrictEqual(labels, {});
            done();
          });
        });
      });
    });
  });

  // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
  (IS_CI ? describe.skip : describe)('write/read/remove files', function() {
    before(function(done) {
      function setHash(filesKey, done) {
        var file = FILES[filesKey];
        var hash = crypto.createHash('md5');

        fs.createReadStream(file.path)
          .on('data', hash.update.bind(hash))
          .on('end', function() {
            file.hash = hash.digest('base64');
            done();
          });
      }

      async.each(Object.keys(FILES), setHash, done);
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
      bucket.upload(FILES.big.path, function(err, file) {
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
      var fileContents = fs.readFileSync(FILES.big.path);

      bucket.upload(FILES.big.path, function(err, file) {
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

      var expectedContents = fs.readFileSync(FILES.html.path, 'utf-8');

      bucket.upload(FILES.html.path, options, function(err, file) {
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

      var expectedContents = normalizeNewline(
        fs.readFileSync(FILES.html.path, 'utf-8')
      );

      bucket.upload(FILES.gzip.path, options, function(err, file) {
        assert.ifError(err);

        file.download(function(err, contents) {
          assert.ifError(err);
          assert.strictEqual(contents.toString(), expectedContents);
          file.delete(done);
        });
      });
    });

    describe('simple write', function() {
      it('should save arbitrary data', function(done) {
        var file = bucket.file('TestFile');
        var data = 'hello';

        file.save(data, function(err) {
          assert.ifError(err);

          file.download(function(err, contents) {
            assert.strictEqual(contents.toString(), data);
            done();
          });
        });
      });
    });

    describe('stream write', function() {
      it('should stream write, then remove file (3mb)', function(done) {
        var file = bucket.file('LargeFile');
        fs.createReadStream(FILES.big.path)
          .pipe(file.createWriteStream({ resumable: false }))
          .on('error', done)
          .on('finish', function() {
            assert.equal(file.metadata.md5Hash, FILES.big.hash);
            file.delete(done);
          });
      });

      it('should write metadata', function(done) {
        var options = {
          metadata: { contentType: 'image/png' },
          resumable: false
        };

        bucket.upload(FILES.logo.path, options, function(err, file) {
          assert.ifError(err);

          file.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.equal(metadata.contentType, options.metadata.contentType);
            file.delete(done);
          });
        });
      });

      it('should resume an upload after an interruption', function(done) {
        fs.stat(FILES.big.path, function(err, metadata) {
          assert.ifError(err);

          // Use a random name to force an empty ConfigStore cache.
          var file = bucket.file(generateName());
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

            fs.createReadStream(FILES.big.path)
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

    describe('customer-supplied encryption keys', function() {
      var encryptionKey = crypto.randomBytes(32);

      var file = bucket.file('encrypted-file', {
        encryptionKey: encryptionKey
      });
      var unencryptedFile = bucket.file(file.name);

      before(function(done) {
        file.save('secret data', { resumable: false }, done);
      });

      it('should not get the hashes from the unencrypted file', function(done) {
        unencryptedFile.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata.crc32c, undefined);
          done();
        });
      });

      it('should get the hashes from the encrypted file', function(done) {
        file.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.notStrictEqual(metadata.crc32c, undefined);
          done();
        });
      });

      it('should not download from the unencrypted file', function(done) {
        unencryptedFile.download(function(err) {
          assert.strictEqual(err.message, 'Bad Request');
          done();
        });
      });

      it('should download from the encrytped file', function(done) {
        file.download(function(err, contents) {
          assert.ifError(err);
          assert.strictEqual(contents.toString(), 'secret data');
          done();
        });
      });
    });

    it('should copy an existing file', function(done) {
      var opts = { destination: 'CloudLogo' };
      bucket.upload(FILES.logo.path, opts, function(err, file) {
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

    it('should copy a large file', function(done) {
      var otherBucket = storage.bucket(generateName());
      var file = bucket.file('Big');
      var copiedFile = otherBucket.file(file.name);

      async.series([
        function(callback) {
          var opts = { destination: file };
          bucket.upload(FILES.logo.path, opts, callback);
        },
        function(callback) {
          otherBucket.create({
            location: 'ASIA-EAST1',
            dra: true
          }, callback);
        },
        function(callback) {
          file.copy(copiedFile, callback);
        }
      ], function(err) {
        assert.ifError(err);
        async.series([
          copiedFile.delete.bind(copiedFile),
          otherBucket.delete.bind(otherBucket),
          file.delete.bind(file)
        ], done);
      });
    });

    it('should copy to another bucket given a gs:// URL', function(done) {
      var opts = { destination: 'CloudLogo' };
      bucket.upload(FILES.logo.path, opts, function(err, file) {
        assert.ifError(err);

        var otherBucket = storage.bucket(generateName());
        otherBucket.create(function(err) {
          assert.ifError(err);

          var destPath = 'gs://' + otherBucket.name + '/CloudLogoCopy';
          file.copy(destPath, function(err) {
            assert.ifError(err);

            otherBucket.getFiles(function(err, files) {
              assert.ifError(err);

              assert.strictEqual(files.length, 1);
              var newFile = files[0];

              assert.strictEqual(newFile.name, 'CloudLogoCopy');

              done();
            });
          });
        });
      });
    });

    it('should allow changing the storage class', function(done) {
      var file = bucket.file(generateName());

      async.series([
        function(next) {
          bucket.upload(FILES.logo.path, { destination: file }, next);
        },

        function(next) {
          file.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(metadata.storageClass, 'STANDARD');
            next();
          });
        },

        function(next) {
          file.setStorageClass('multi-regional', next);
        }
      ], function(err) {
        assert.ifError(err);

        file.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata.storageClass, 'MULTI_REGIONAL');
          done();
        });
      });
    });
  });

  describe('channels', function() {
    it('should create a channel', function(done) {
      var config = {
        address: 'https://yahoo.com'
      };

      bucket.createChannel('new-channel', config, function(err) {
        // Actually creating a channel is pretty complicated. This will at least
        // let us know we hit the right endpoint and it received "yahoo.com".
        assert.strictEqual(
          err.message,
          'Unauthorized WebHook callback channel: ' + config.address
        );

        done();
      });
    });

    it('should stop a channel', function(done) {
      // We can't actually create a channel. But we can test to see that we're
      // reaching the right endpoint with the API request.
      var channel = storage.channel('id', 'resource-id');
      channel.stop(function(err) {
        assert.strictEqual(err.code, 404);
        assert.strictEqual(err.message.indexOf('Channel \'id\' not found'), 0);
        done();
      });
    });
  });

  // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
  (IS_CI ? describe.skip : describe)('combine files', function() {
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

  // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
  (IS_CI ? describe.skip : describe)('list files', function() {
    var NEW_FILES = [
      bucket.file('CloudLogo1'),
      bucket.file('CloudLogo2'),
      bucket.file('CloudLogo3')
    ];

    before(function(done) {
      bucket.deleteFiles(function(err) {
        assert.ifError(err);

        var originalFile = NEW_FILES[0];
        var copiedFile1 = NEW_FILES[1];
        var copiedFile2 = NEW_FILES[2];

        fs.createReadStream(FILES.logo.path)
          .pipe(originalFile.createWriteStream())
          .on('error', done)
          .on('finish', function() {
            originalFile.copy(copiedFile1, function(err) {
              assert.ifError(err);
              copiedFile1.copy(copiedFile2, done);
            });
          });
      });
    });

    after(function(done) {
      async.each(NEW_FILES, deleteFile, done);
    });

    it('should get files', function(done) {
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert.equal(files.length, NEW_FILES.length);
        done();
      });
    });

    it('should get files as a stream', function(done) {
      var fileEmitted = false;

      bucket.getFilesStream()
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
        maxResults: NEW_FILES.length - 1
      };

      bucket.getFiles(query, function(err, files, nextQuery) {
        assert.ifError(err);
        assert.equal(files.length, NEW_FILES.length - 1);
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
    var bucketWithVersioning = storage.bucket(generateName());

    before(function(done) {
      bucketWithVersioning.create({
        versioning: {
          enabled: true
        }
      }, done);
    });

    after(function(done) {
      bucketWithVersioning.deleteFiles({
        versions: true
      }, function(err) {
        if (err) {
          done(err);
          return;
        }

        bucketWithVersioning.delete(done);
      });
    });

    it('should overwrite file, then get older version', function(done) {
      var versionedFile = bucketWithVersioning.file(generateName());

      writeToFile(versionedFile, 'a', function(err) {
        assert.ifError(err);

        versionedFile.getMetadata(function(err, metadata) {
          assert.ifError(err);

          var initialGeneration = metadata.generation;

          writeToFile(versionedFile, 'b', function(err) {
            assert.ifError(err);

            var firstGenFile = bucketWithVersioning.file(versionedFile.name, {
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
        { file: bucketWithVersioning.file('file-one.txt'), contents: '123' },
        { file: bucketWithVersioning.file('file-one.txt'), contents: '456' }
      ];

      async.each(filesToCreate, createFile, function(err) {
        assert.ifError(err);

        bucketWithVersioning.getFiles({ versions: true }, function(err, files) {
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

  (IS_CI ? describe.skip : describe)('sign urls', function() {
    var localFile = fs.readFileSync(FILES.logo.path);
    var file;

    before(function(done) {
      if (!env.credentials && !env.keyFilename) {
        this.skip();
        return;
      }

      file = bucket.file('LogoToSign.jpg');
      fs.createReadStream(FILES.logo.path)
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

  // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/2224
  (IS_CI ? describe.skip : describe)('sign policy', function() {
    var file;

    before(function(done) {
      if (!env.credentials && !env.keyFilename) {
        this.skip();
        return;
      }

      file = bucket.file('LogoToSign.jpg');
      fs.createReadStream(FILES.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('finish', done.bind(null, null));
    });

    beforeEach(function() {
      if (!storage.projectId) {
        this.skip();
      }
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

  function deleteFile(file, callback) {
    file.delete(callback);
  }

  function generateName() {
    return TESTS_PREFIX + uuid.v1();
  }

  function writeToFile(file, contents, callback) {
    var writeStream = file.createWriteStream();
    writeStream.once('error', callback);
    writeStream.once('finish', callback.bind(null, null));
    writeStream.end(contents);
  }
});
