/**
 * Copyright 2019 Google LLC
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

import * as assert from 'assert';
import * as crypto from 'crypto';
import * as fs from 'fs';
import fetch from 'node-fetch';
const normalizeNewline = require('normalize-newline');
import pLimit from 'p-limit';
import {promisify} from 'util';
import * as path from 'path';
import * as through from 'through2';
import * as tmp from 'tmp';
import * as uuid from 'uuid';
import {
  util,
  ApiError,
  InstanceResponseCallback,
  BodyResponseCallback,
  MetadataResponse,
  Metadata,
} from '@google-cloud/common';
import {
  Storage,
  Bucket,
  File,
  AccessControlObject,
  Notification,
  GetNotificationOptions,
  DeleteBucketCallback,
  CreateNotificationOptions,
  BucketExistsOptions,
  BucketExistsCallback,
  GetBucketOptions,
  GetBucketCallback,
  GetNotificationsCallback,
  MakeBucketPrivateOptions,
  MakeBucketPrivateCallback,
  SetBucketMetadataOptions,
  SetBucketMetadataCallback,
  DeleteFileCallback,
  SaveCallback,
  DownloadOptions,
  DownloadCallback,
  FileExistsOptions,
  FileExistsCallback,
  CreateReadStreamOptions,
  CreateResumableUploadOptions,
  GetFileOptions,
  GetFileCallback,
  SetStorageClassOptions,
  SetStorageClassCallback,
  UploadOptions,
  UploadCallback,
  CopyOptions,
  CopyCallback,
  GetFileMetadataOptions,
  GetFileMetadataCallback,
  MakeFilePrivateOptions,
  MakeFilePrivateCallback,
  SetFileMetadataOptions,
  SetFileMetadataCallback,
  AddAclOptions,
  AddAclCallback,
  UpdateAclCallback,
  UpdateAclOptions,
  GetAclOptions,
  GetAclCallback,
  RemoveAclOptions,
  RemoveAclCallback,
  GetPolicyOptions,
  GetPolicyCallback,
  SetPolicyCallback,
  TestIamPermissionsOptions,
  TestIamPermissionsCallback,
  GetNotificationCallback,
  GetNotificationMetadataOptions,
  GetNotificationMetadataCallback,
  DeleteNotificationOptions,
  DeleteNotificationCallback,
  Iam,
} from '../src';
import * as nock from 'nock';

interface ErrorCallbackFunction {
  (err: Error | null): void;
}
const {PubSub} = require('@google-cloud/pubsub');

// When set to true, skips all tests that is not compatible for
// running inside VPCSC.
const RUNNING_IN_VPCSC = !!process.env['GOOGLE_CLOUD_TESTS_IN_VPCSC'];

// block all attempts to chat with the metadata server (kokoro runs on GCE)
nock('http://metadata.google.internal')
  .get(url => true)
  .replyWithError({code: 'ENOTFOUND'})
  .persist();

describe('storage', () => {
  const USER_ACCOUNT = 'user-spsawchuk@gmail.com';
  const TESTS_PREFIX = `storage-tests-${shortUUID()}-`;
  const RETENTION_DURATION_SECONDS = 10;

  const storage = new Storage({});
  const bucket = storage.bucket(generateName());

  const pubsub = new PubSub({
    projectId: process.env.PROJECT_ID,
  });
  // tslint:disable-next-line no-any
  let topic: any;
  // tslint:disable-next-line no-any
  const FILES: {[index: string]: any} = {
    logo: {
      path: path.join(
        __dirname,
        '../../system-test/data/CloudPlatform_128px_Retina.png'
      ),
    },
    big: {
      path: path.join(__dirname, '../../system-test/data/three-mb-file.tif'),
      hash: undefined,
    },
    html: {
      path: path.join(__dirname, '../../system-test/data/long-html-file.html'),
    },
    gzip: {
      path: path.join(
        __dirname,
        '../../system-test/data/long-html-file.html.gz'
      ),
    },
  };

  before(() => {
    return bucket
      .create()
      .then(() => {
        return pubsub.createTopic(generateName());
      })
      .then(data => {
        topic = data[0];
        return topic.iam.setPolicy({
          bindings: [
            {
              role: 'roles/pubsub.editor',
              members: ['allUsers'],
            },
          ],
        });
      });
  });

  after(() => {
    return Promise.all([deleteAllBucketsAsync(), deleteAllTopicsAsync()]);
  });

  describe('without authentication', () => {
    let privateBucket: Bucket;
    let privateFile: File;
    let storageWithoutAuth: Storage;

    let GOOGLE_APPLICATION_CREDENTIALS: string | undefined;

    before(done => {
      privateBucket = bucket; // `bucket` was created in the global `before`
      privateFile = privateBucket.file('file-name');

      privateFile.save('data', err => {
        if (err) {
          done(err);
          return;
        }

        // CI authentication is done with ADC. Cache it here, restore it `after`
        GOOGLE_APPLICATION_CREDENTIALS =
          process.env.GOOGLE_APPLICATION_CREDENTIALS;
        delete process.env.GOOGLE_APPLICATION_CREDENTIALS;
        delete require.cache[require.resolve('../src')];

        const {Storage} = require('../src');
        storageWithoutAuth = new Storage();
        done();
      });
    });

    after(() => {
      process.env.GOOGLE_APPLICATION_CREDENTIALS = GOOGLE_APPLICATION_CREDENTIALS;
    });

    describe('public data', () => {
      before(function() {
        if (RUNNING_IN_VPCSC) this.skip();
      });

      let bucket: Bucket;

      before(() => {
        bucket = storageWithoutAuth.bucket('gcp-public-data-landsat');
      });

      it('should list and download a file', async () => {
        const [files] = await bucket.getFiles({autoPaginate: false});
        const file = files[0];
        const [isPublic] = await file.isPublic();
        assert.strictEqual(isPublic, true);
        assert.doesNotReject(file.download());
      });
    });

    describe('private data', () => {
      let bucket: Bucket;
      let file: File;

      before(() => {
        bucket = storageWithoutAuth.bucket(privateBucket.id!);
        file = bucket.file(privateFile.id!);
      });

      it('should not download a file', async () => {
        const [isPublic] = await file.isPublic();
        assert.strictEqual(isPublic, false);
        assert.rejects(
          file.download(),
          (err: Error) =>
            err.message.indexOf('does not have storage.objects.get') > -1
        );
      });

      it('should not upload a file', done => {
        file.save('new data', err => {
          assert(
            err!.message.indexOf('Could not load the default credentials') > -1
          );
          done();
        });
      });
    });
  });

  describe('acls', () => {
    describe('buckets', () => {
      it('should get access controls', done => {
        bucket.acl.get((err, accessControls) => {
          assert.ifError(err);
          assert(Array.isArray(accessControls));
          done();
        });
      });

      it('should add entity to default access controls', done => {
        bucket.acl.default.add(
          {
            entity: USER_ACCOUNT,
            role: storage.acl.OWNER_ROLE,
          },
          (err, accessControl) => {
            assert.ifError(err);
            assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);

            bucket.acl.default.get(
              {
                entity: USER_ACCOUNT,
              },
              (err, accessControl) => {
                assert.ifError(err);
                assert.strictEqual(
                  (accessControl as AccessControlObject)!.role,
                  storage.acl.OWNER_ROLE
                );

                bucket.acl.default.update(
                  {
                    entity: USER_ACCOUNT,
                    role: storage.acl.READER_ROLE,
                  },
                  (err, accessControl) => {
                    assert.ifError(err);
                    assert.strictEqual(
                      (accessControl as AccessControlObject).role,
                      storage.acl.READER_ROLE
                    );

                    bucket.acl.default.delete({entity: USER_ACCOUNT}, done);
                  }
                );
              }
            );
          }
        );
      });

      it('should get default access controls', done => {
        bucket.acl.default.get((err, accessControls) => {
          assert.ifError(err);
          assert(Array.isArray(accessControls));
          done();
        });
      });

      it('should grant an account access', done => {
        bucket.acl.add(
          {
            entity: USER_ACCOUNT,
            role: storage.acl.OWNER_ROLE,
          },
          (err, accessControl) => {
            assert.ifError(err);
            assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);

            const opts = {entity: USER_ACCOUNT};

            bucket.acl.get(opts, (err, accessControl) => {
              assert.ifError(err);
              assert.strictEqual(
                (accessControl as AccessControlObject).role,
                storage.acl.OWNER_ROLE
              );

              bucket.acl.delete(opts, done);
            });
          }
        );
      });

      it('should update an account', done => {
        bucket.acl.add(
          {
            entity: USER_ACCOUNT,
            role: storage.acl.OWNER_ROLE,
          },
          (err, accessControl) => {
            assert.ifError(err);
            assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);

            bucket.acl.update(
              {
                entity: USER_ACCOUNT,
                role: storage.acl.WRITER_ROLE,
              },
              (err, accessControl) => {
                assert.ifError(err);
                assert.strictEqual(
                  accessControl!.role,
                  storage.acl.WRITER_ROLE
                );

                bucket.acl.delete({entity: USER_ACCOUNT}, done);
              }
            );
          }
        );
      });

      it('should make a bucket public', done => {
        bucket.makePublic(err => {
          assert.ifError(err);
          bucket.acl.get({entity: 'allUsers'}, (err, aclObject) => {
            assert.ifError(err);
            assert.deepStrictEqual(aclObject, {
              entity: 'allUsers',
              role: 'READER',
            });
            bucket.acl.delete({entity: 'allUsers'}, done);
          });
        });
      });

      it('should make files public', async () => {
        await Promise.all(
          ['a', 'b', 'c'].map(text => createFileWithContentPromise(text))
        );

        await bucket.makePublic({includeFiles: true});
        const [files] = await bucket.getFiles();
        const resps = await Promise.all(
          files.map(file => isFilePublicAsync(file))
        );
        resps.forEach(resp => assert.strictEqual(resp, true));
        await Promise.all([
          bucket.acl.default.delete({entity: 'allUsers'}),
          bucket.deleteFiles(),
        ]);
      });

      it('should make a bucket private', done => {
        bucket.makePublic(err => {
          assert.ifError(err);
          bucket.makePrivate(err => {
            assert.ifError(err);
            bucket.acl.get({entity: 'allUsers'}, (err, aclObject) => {
              assert.strictEqual((err as ApiError).code, 404);
              assert.strictEqual(err!.message, 'Not Found');
              assert.strictEqual(aclObject, null);
              done();
            });
          });
        });
      });

      it('should make files private', async () => {
        await Promise.all(
          ['a', 'b', 'c'].map(text => createFileWithContentPromise(text))
        );

        await bucket.makePrivate({includeFiles: true});
        const [files] = await bucket.getFiles();
        const resps = await Promise.all(
          files.map(file => isFilePublicAsync(file))
        );
        resps.forEach(resp => {
          assert.strictEqual(resp, false);
        });
        await bucket.deleteFiles();
      });
    });

    describe('files', () => {
      let file: File;

      beforeEach(done => {
        const options = {
          destination: generateName() + '.png',
        };

        bucket.upload(FILES.logo.path, options, (err, f) => {
          assert.ifError(err);
          file = f!;
          done();
        });
      });

      afterEach(done => {
        file.delete(done);
      });

      it('should get access controls', done => {
        // tslint:disable-next-line no-any
        file.acl.get(done as any, (err, accessControls) => {
          assert.ifError(err);
          assert(Array.isArray(accessControls));
          done();
        });
      });

      it('should not expose default api', () => {
        // tslint:disable-next-line no-any
        assert.strictEqual(typeof (file as any).default, 'undefined');
      });

      it('should grant an account access', done => {
        file.acl.add(
          {
            entity: USER_ACCOUNT,
            role: storage.acl.OWNER_ROLE,
          },
          (err, accessControl) => {
            assert.ifError(err);
            assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);

            file.acl.get({entity: USER_ACCOUNT}, (err, accessControl) => {
              assert.ifError(err);
              assert.strictEqual(
                (accessControl as AccessControlObject).role,
                storage.acl.OWNER_ROLE
              );

              file.acl.delete({entity: USER_ACCOUNT}, done);
            });
          }
        );
      });

      it('should update an account', done => {
        file.acl.add(
          {
            entity: USER_ACCOUNT,
            role: storage.acl.OWNER_ROLE,
          },
          (err, accessControl) => {
            assert.ifError(err);
            assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);

            file.acl.update(
              {
                entity: USER_ACCOUNT,
                role: storage.acl.READER_ROLE,
              },
              (err, accessControl) => {
                assert.ifError(err);

                assert.strictEqual(
                  accessControl!.role,
                  storage.acl.READER_ROLE
                );

                file.acl.delete({entity: USER_ACCOUNT}, done);
              }
            );
          }
        );
      });

      it('should make a file public', done => {
        file.makePublic(err => {
          assert.ifError(err);
          file.acl.get({entity: 'allUsers'}, (err, aclObject) => {
            assert.ifError(err);
            assert.deepStrictEqual(aclObject, {
              entity: 'allUsers',
              role: 'READER',
            });
            file.acl.delete({entity: 'allUsers'}, done);
          });
        });
      });

      it('should make a file private', done => {
        file.makePublic(err => {
          assert.ifError(err);
          file.makePrivate(err => {
            assert.ifError(err);
            file.acl.get(
              {entity: 'allUsers'},
              (err: ApiError | null, aclObject) => {
                assert.strictEqual(err!.code, 404);
                assert.strictEqual(err!.message, 'Not Found');
                assert.strictEqual(aclObject, null);
                done();
              }
            );
          });
        });
      });

      it('should set custom encryption during the upload', done => {
        const key = '12345678901234567890123456789012';
        bucket.upload(
          FILES.big.path,
          {
            encryptionKey: key,
            resumable: false,
          },
          (err, file) => {
            assert.ifError(err);

            file!.getMetadata((err: ApiError | null, metadata: Metadata) => {
              assert.ifError(err);
              assert.strictEqual(
                metadata.customerEncryption.encryptionAlgorithm,
                'AES256'
              );
              done();
            });
          }
        );
      });

      it('should set custom encryption in a resumable upload', done => {
        const key = crypto.randomBytes(32);

        bucket.upload(
          FILES.big.path,
          {
            encryptionKey: key,
            resumable: true,
          },
          (err, file) => {
            assert.ifError(err);

            file!.getMetadata((err: ApiError | null, metadata: Metadata) => {
              assert.ifError(err);
              assert.strictEqual(
                metadata.customerEncryption.encryptionAlgorithm,
                'AES256'
              );
              done();
            });
          }
        );
      });

      it('should make a file public during the upload', done => {
        bucket.upload(
          FILES.big.path,
          {
            resumable: false,
            public: true,
          },
          (err, file) => {
            assert.ifError(err);

            file!.acl.get({entity: 'allUsers'}, (err, aclObject) => {
              assert.ifError(err);
              assert.deepStrictEqual(aclObject, {
                entity: 'allUsers',
                role: 'READER',
              });
              done();
            });
          }
        );
      });

      it('should make a file public from a resumable upload', done => {
        bucket.upload(
          FILES.big.path,
          {
            resumable: true,
            public: true,
          },
          (err, file) => {
            assert.ifError(err);

            file!.acl.get({entity: 'allUsers'}, (err, aclObject) => {
              assert.ifError(err);
              assert.deepStrictEqual(aclObject, {
                entity: 'allUsers',
                role: 'READER',
              });
              done();
            });
          }
        );
      });

      it('should make a file private from a resumable upload', done => {
        bucket.upload(
          FILES.big.path,
          {
            resumable: true,
            private: true,
          },
          (err, file) => {
            assert.ifError(err);

            file!.acl.get({entity: 'allUsers'}, (err, aclObject) => {
              assert.strictEqual((err as ApiError)!.code, 404);
              assert.strictEqual(err!.message, 'Not Found');
              assert.strictEqual(aclObject, null);
              done();
            });
          }
        );
      });
    });
  });

  describe('iam', () => {
    let PROJECT_ID: string;

    before(done => {
      storage.authClient.getProjectId((err, projectId) => {
        if (err) {
          done(err);
          return;
        }
        PROJECT_ID = projectId!;
        done();
      });
    });

    describe('buckets', () => {
      let bucket: Bucket;

      before(() => {
        bucket = storage.bucket(generateName());
        return bucket.create();
      });

      it('should get a policy', done => {
        bucket.iam.getPolicy((err, policy) => {
          assert.ifError(err);
          assert.deepStrictEqual(policy!.bindings, [
            {
              members: [
                'projectEditor:' + PROJECT_ID,
                'projectOwner:' + PROJECT_ID,
              ],
              role: 'roles/storage.legacyBucketOwner',
            },
            {
              members: ['projectViewer:' + PROJECT_ID],
              role: 'roles/storage.legacyBucketReader',
            },
          ]);

          done();
        });
      });

      it('should set a policy', done => {
        bucket.iam.getPolicy((err, policy) => {
          assert.ifError(err);
          policy!.bindings.push({
            role: 'roles/storage.legacyBucketReader',
            members: ['allUsers'],
          });

          bucket.iam.setPolicy(policy!, (err, newPolicy) => {
            assert.ifError(err);

            const legacyBucketReaderBinding = newPolicy!.bindings.filter(
              binding => {
                return binding.role === 'roles/storage.legacyBucketReader';
              }
            )[0];

            assert(legacyBucketReaderBinding.members.includes('allUsers'));

            done();
          });
        });
      });

      it('should test the iam permissions', done => {
        const testPermissions = [
          'storage.buckets.get',
          'storage.buckets.getIamPolicy',
        ];

        bucket.iam.testPermissions(testPermissions, (err, permissions) => {
          assert.ifError(err);

          assert.deepStrictEqual(permissions, {
            'storage.buckets.get': true,
            'storage.buckets.getIamPolicy': true,
          });

          done();
        });
      });
    });
  });

  describe('bucket policy only', () => {
    let bucket: Bucket;

    const customAcl = {
      entity: USER_ACCOUNT,
      role: storage.acl.OWNER_ROLE,
    };

    const createBucket = () => {
      bucket = storage.bucket(generateName());
      return bucket.create();
    };

    const setBucketPolicyOnly = (bucket: Bucket, enabled: boolean) =>
      bucket.setMetadata({
        iamConfiguration: {
          bucketPolicyOnly: {
            enabled,
          },
        },
      });

    describe('files', () => {
      before(createBucket);

      it('can be written to the bucket by project owner w/o configuration', async () => {
        await setBucketPolicyOnly(bucket, true);
        const file = bucket.file('file');
        return assert.doesNotReject(() => file.save('data'));
      });
    });

    describe('disables file ACL', () => {
      let file: File;

      const validateBucketPolicyOnlyEnabledError = (err: ApiError) => {
        assert(err.message.match(/Bucket Policy Only is enabled/));
        assert.strictEqual(err.code, 400);
        return true;
      };

      before(async () => {
        await createBucket();
        await setBucketPolicyOnly(bucket, true);

        file = bucket.file('file');
        await file.save('data');
      });

      it('should fail to get file ACL', () => {
        return assert.rejects(
          () => file.acl.get(),
          validateBucketPolicyOnlyEnabledError
        );
      });

      it('should fail to update file ACL', () => {
        return assert.rejects(
          () => file.acl.update(customAcl),
          validateBucketPolicyOnlyEnabledError
        );
      });
    });

    describe('preserves bucket/file ACL over bucket policy only on/off', () => {
      beforeEach(createBucket);

      it('should preserve default bucket ACL', async () => {
        await bucket.acl.default.update(customAcl);
        const [aclBefore] = await bucket.acl.default.get();

        await setBucketPolicyOnly(bucket, true);
        await setBucketPolicyOnly(bucket, false);

        const [aclAfter] = await bucket.acl.default.get();
        assert.deepStrictEqual(aclAfter, aclBefore);
      });

      it('should preserve file ACL', async () => {
        const file = bucket.file('file');
        await file.save('data');

        await file.acl.update(customAcl);
        const [aclBefore] = await file.acl.get();

        await setBucketPolicyOnly(bucket, true);
        await setBucketPolicyOnly(bucket, false);

        const [aclAfter] = await file.acl.get();
        assert.deepStrictEqual(aclAfter, aclBefore);
      });
    });
  });

  describe('unicode validation', () => {
    before(function() {
      if (RUNNING_IN_VPCSC) this.skip();
    });

    let bucket: Bucket;

    before(() => {
      bucket = storage.bucket('storage-library-test-bucket');
    });

    // Normalization form C: a single character for e-acute;
    // URL should end with Cafe%CC%81
    it('should not perform normalization form C', () => {
      const name = 'Caf\u00e9';
      const file = bucket.file(name);

      const expectedContents = 'Normalization Form C';

      return file
        .get()
        .then(data => {
          const receivedFile = data[0];
          assert.strictEqual(receivedFile.name, name);
          return receivedFile.download();
        })
        .then(contents => {
          assert.strictEqual(contents.toString(), expectedContents);
        });
    });

    // Normalization form D: an ASCII character followed by U+0301 combining
    // character; URL should end with Caf%C3%A9
    it('should not perform normalization form D', () => {
      const name = 'Cafe\u0301';
      const file = bucket.file(name);

      const expectedContents = 'Normalization Form D';

      return file
        .get()
        .then(data => {
          const receivedFile = data[0];
          assert.strictEqual(receivedFile.name, name);
          return receivedFile.download();
        })
        .then(contents => {
          assert.strictEqual(contents.toString(), expectedContents);
        });
    });
  });

  describe('getting buckets', () => {
    const bucketsToCreate = [generateName(), generateName()];

    before(async () => {
      await Promise.all(bucketsToCreate.map(b => storage.createBucket(b)));
    });

    after(async () => {
      await Promise.all(
        bucketsToCreate.map(bucket => storage.bucket(bucket).delete())
      );
    });

    it('should get buckets', done => {
      storage.getBuckets((err, buckets) => {
        const createdBuckets = buckets.filter(bucket => {
          return bucketsToCreate.indexOf(bucket.name) > -1;
        });

        assert.strictEqual(createdBuckets.length, bucketsToCreate.length);
        done();
      });
    });

    it('should get buckets as a stream', done => {
      let bucketEmitted = false;

      storage
        .getBucketsStream()
        .on('error', done)
        .on('data', bucket => {
          bucketEmitted = bucket instanceof Bucket;
        })
        .on('end', () => {
          assert.strictEqual(bucketEmitted, true);
          done();
        });
    });
  });

  describe('bucket metadata', () => {
    it('should allow setting metadata on a bucket', done => {
      const metadata = {
        website: {
          mainPageSuffix: 'http://fakeuri',
          notFoundPage: 'http://fakeuri/404.html',
        },
      };

      bucket.setMetadata(metadata, (err: ApiError | null, meta: Metadata) => {
        assert.ifError(err);
        assert.deepStrictEqual(meta.website, metadata.website);
        done();
      });
    });

    it('should allow changing the storage class', async () => {
      const bucket = storage.bucket(generateName());
      await bucket.create();
      let [metadata] = await bucket.getMetadata();
      assert.strictEqual(metadata.storageClass, 'STANDARD');
      await bucket.setStorageClass('multi-regional');
      [metadata] = await bucket.getMetadata();
      assert.strictEqual(metadata.storageClass, 'MULTI_REGIONAL');
    });

    describe('locationType', () => {
      const types = ['multi-region', 'region', 'dual-region'];

      beforeEach(() => {
        delete bucket.metadata;
      });

      it('should be available from getting a bucket', async () => {
        const [metadata] = await bucket.getMetadata();
        assert(types.includes(metadata.locationType));
      });

      it('should be available from creating a bucket', async () => {
        const [bucket] = await storage.createBucket(generateName());
        assert(types.includes(bucket.metadata.locationType));
        return bucket.delete();
      });

      it('should be available from listing buckets', async () => {
        const [buckets] = await storage.getBuckets();

        assert(buckets.length > 0);

        buckets.forEach(bucket => {
          assert(types.includes(bucket.metadata.locationType));
        });
      });

      it('should be available from setting retention policy', async () => {
        await bucket.setRetentionPeriod(RETENTION_DURATION_SECONDS);
        assert(types.includes(bucket.metadata.locationType));
        await bucket.removeRetentionPeriod();
      });

      it('should be available from updating a bucket', async () => {
        await bucket.setLabels({a: 'b'});
        assert(types.includes(bucket.metadata.locationType));
      });
    });

    describe('labels', () => {
      const LABELS = {
        label: 'labelvalue', // no caps or spaces allowed (?)
        labeltwo: 'labelvaluetwo',
      };

      beforeEach(done => {
        bucket.deleteLabels(done);
      });

      it('should set labels', done => {
        bucket.setLabels(LABELS, err => {
          assert.ifError(err);

          bucket.getLabels((err, labels) => {
            assert.ifError(err);
            assert.deepStrictEqual(labels, LABELS);
            done();
          });
        });
      });

      it('should update labels', done => {
        const newLabels = {
          siblinglabel: 'labelvalue',
        };

        bucket.setLabels(LABELS, err => {
          assert.ifError(err);

          bucket.setLabels(newLabels, err => {
            assert.ifError(err);

            bucket.getLabels((err, labels) => {
              assert.ifError(err);
              assert.deepStrictEqual(
                labels,
                Object.assign({}, LABELS, newLabels)
              );
              done();
            });
          });
        });
      });

      it('should delete a single label', done => {
        if (Object.keys(LABELS).length <= 1) {
          done(new Error('Maintainer Error: `LABELS` needs 2 labels.'));
          return;
        }

        const labelKeyToDelete = Object.keys(LABELS)[0];

        bucket.setLabels(LABELS, err => {
          assert.ifError(err);

          bucket.deleteLabels(labelKeyToDelete, err => {
            assert.ifError(err);

            bucket.getLabels((err, labels) => {
              assert.ifError(err);

              const expectedLabels = Object.assign({}, LABELS);
              delete (expectedLabels as {[index: string]: {}})[
                labelKeyToDelete
              ];

              assert.deepStrictEqual(labels, expectedLabels);

              done();
            });
          });
        });
      });

      it('should delete all labels', done => {
        bucket.deleteLabels(err => {
          assert.ifError(err);

          bucket.getLabels((err, labels) => {
            assert.ifError(err);
            assert.deepStrictEqual(labels, {});
            done();
          });
        });
      });
    });
  });

  describe('bucket object lifecycle management', () => {
    it('should add a rule', done => {
      bucket.addLifecycleRule(
        {
          action: 'delete',
          condition: {
            age: 30,
            isLive: true,
          },
        },
        err => {
          assert.ifError(err);

          const rules = [].slice.call(bucket.metadata.lifecycle.rule);

          assert.deepStrictEqual(rules.pop(), {
            action: {
              type: 'Delete',
            },
            condition: {
              age: 30,
              isLive: true,
            },
          });

          done();
        }
      );
    });

    it('should work with dates', done => {
      bucket.addLifecycleRule(
        {
          action: 'delete',
          condition: {
            createdBefore: new Date('2018'),
          },
        },
        err => {
          assert.ifError(err);

          const rules = [].slice.call(bucket.metadata.lifecycle.rule);

          assert.deepStrictEqual(rules.pop(), {
            action: {
              type: 'Delete',
            },
            condition: {
              createdBefore: '2018-01-01',
            },
          });

          done();
        }
      );
    });

    it('should append a new rule', async () => {
      const numExistingRules =
        (bucket.metadata.lifecycle && bucket.metadata.lifecycle.rule.length) ||
        0;

      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          age: 30,
          isLive: true,
        },
      });
      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          age: 60,
          isLive: true,
        },
      });
      assert.strictEqual(
        bucket.metadata.lifecycle.rule.length,
        numExistingRules + 2
      );
    });

    it('should remove all existing rules', done => {
      bucket.setMetadata(
        {
          lifecycle: null,
        },
        (err: ApiError) => {
          assert.ifError(err);
          assert.strictEqual(bucket.metadata.lifecycle, undefined);
          done();
        }
      );
    });
  });

  describe('bucket retention policies', () => {
    describe('bucket', () => {
      it('should create a bucket with a retention policy', async () => {
        const bucket = storage.bucket(generateName());
        await storage.createBucket(bucket.name, {
          retentionPolicy: {
            retentionPeriod: RETENTION_DURATION_SECONDS,
          },
        });
        await bucket.getMetadata();
        assert.strictEqual(
          bucket.metadata.retentionPolicy.retentionPeriod,
          `${RETENTION_DURATION_SECONDS}`
        );
      });

      it('should set a retention policy', async () => {
        const bucket = storage.bucket(generateName());
        await bucket.create();
        await bucket.setRetentionPeriod(RETENTION_DURATION_SECONDS);
        await bucket.getMetadata();
        assert.strictEqual(
          bucket.metadata.retentionPolicy.retentionPeriod,
          `${RETENTION_DURATION_SECONDS}`
        );
      });

      it('should lock the retention period', async () => {
        const bucket = storage.bucket(generateName());
        await bucket.create();
        await bucket.setRetentionPeriod(RETENTION_DURATION_SECONDS);
        await bucket.getMetadata();

        await bucket.lock(bucket.metadata.metageneration);
        await assert.rejects(
          bucket.setRetentionPeriod(RETENTION_DURATION_SECONDS / 2),
          (err: ApiError) => {
            return err.code === 403;
          }
        );
      });

      it('should remove a retention period', async () => {
        const bucket = storage.bucket(generateName());
        await bucket.create();
        await bucket.setRetentionPeriod(RETENTION_DURATION_SECONDS);
        await bucket.getMetadata();
        assert.strictEqual(
          bucket.metadata.retentionPolicy.retentionPeriod,
          `${RETENTION_DURATION_SECONDS}`
        );

        await bucket.removeRetentionPeriod();
        await bucket.getMetadata();
        assert.strictEqual(bucket.metadata.retentionPolicy, undefined);
      });
    });

    describe('file', () => {
      const BUCKET = storage.bucket(generateName());
      const FILE = BUCKET.file(generateName());

      const BUCKET_RETENTION_PERIOD = 1;
      before(done => {
        BUCKET.create(
          {
            retentionPolicy: {
              retentionPeriod: BUCKET_RETENTION_PERIOD,
            },
          },
          err => {
            if (err) {
              done(err);
              return;
            }

            FILE.save('data', done);
          }
        );
      });

      afterEach(() => {
        return FILE.setMetadata({temporaryHold: null, eventBasedHold: null});
      });

      after(done => {
        setTimeout(() => FILE.delete(done), BUCKET_RETENTION_PERIOD * 1000);
      });

      it('should set and release an event-based hold', async () => {
        await FILE.setMetadata({eventBasedHold: true});
        assert.strictEqual(FILE.metadata.eventBasedHold, true);
        await FILE.setMetadata({eventBasedHold: false});
        assert.strictEqual(FILE.metadata.eventBasedHold, false);
      });

      it('should set and release a temporary hold', async () => {
        await FILE.setMetadata({temporaryHold: true});
        assert.strictEqual(FILE.metadata.temporaryHold, true);
        await FILE.setMetadata({temporaryHold: false});
        assert.strictEqual(FILE.metadata.temporaryHold, false);
      });

      it('should get an expiration date', done => {
        FILE.getExpirationDate((err, expirationDate) => {
          assert.ifError(err);
          assert(expirationDate instanceof Date);
          done();
        });
      });
    });

    describe('operations on held objects', () => {
      const BUCKET = storage.bucket(generateName());
      const FILES: File[] = [];

      const RETENTION_PERIOD_SECONDS = 5; // Each test has this much time!

      function createFile(callback: GetFileCallback) {
        const file = BUCKET.file(generateName());
        FILES.push(file);

        file.save('data', err => {
          if (err) {
            callback(err);
            return;
          }

          callback(null, file);
        });
      }

      async function deleteFilesAsync() {
        await new Promise(resolve =>
          setTimeout(resolve, RETENTION_PERIOD_SECONDS * 1000)
        );
        return Promise.all(
          FILES.map(async file => {
            await file.setMetadata({temporaryHold: null});
            return file.delete();
          })
        );
      }

      before(done => {
        BUCKET.create(
          {
            retentionPolicy: {
              retentionPeriod: RETENTION_PERIOD_SECONDS,
            },
          },
          done
        );
      });

      after(() => {
        return deleteFilesAsync();
      });

      it('should block an overwrite request', done => {
        createFile((err, file) => {
          assert.ifError(err);

          file!.save('new data', err => {
            assert.strictEqual((err as ApiError).code, 403);
            done();
          });
        });
      });

      it('should block a delete request', done => {
        createFile((err, file) => {
          assert.ifError(err);

          file!.delete((err: ApiError) => {
            assert.strictEqual(err.code, 403);
            done();
          });
        });
      });
    });
  });

  describe('requester pays', () => {
    const HAS_2ND_PROJECT =
      process.env.GCN_STORAGE_2ND_PROJECT_ID !== undefined;
    let bucket: Bucket;

    before(done => {
      bucket = storage.bucket(generateName());

      bucket.create(
        {
          requesterPays: true,
        },
        done
      );
    });

    after(done => {
      bucket.delete(done);
    });

    it('should have enabled requesterPays functionality', done => {
      bucket.getMetadata((err: ApiError | null, metadata: Metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata.billing.requesterPays, true);
        done();
      });
    });

    // These tests will verify that the requesterPays functionality works from
    // the perspective of another project.
    (HAS_2ND_PROJECT ? describe : describe.skip)('existing bucket', () => {
      const storageNonWhitelist = new Storage({
        projectId: process.env.GCN_STORAGE_2ND_PROJECT_ID,
        keyFilename: process.env.GCN_STORAGE_2ND_PROJECT_KEY,
      });
      // the source bucket, which will have requesterPays enabled.
      let bucket: Bucket;
      // the bucket object from the requesting user.
      let bucketNonWhitelist: Bucket;

      function isRequesterPaysEnabled(
        callback: (err: Error | null, isEnabled?: boolean) => void
      ) {
        bucket.getMetadata((err: ApiError | null, metadata: Metadata) => {
          if (err) {
            callback(err);
            return;
          }

          const billing = metadata.billing || {};
          callback(null, !!billing && billing.requesterPays === true);
        });
      }

      before(done => {
        bucket = storage.bucket(generateName());
        bucketNonWhitelist = storageNonWhitelist.bucket(bucket.name);
        bucket.create(done);
      });

      it('should enable requesterPays', done => {
        isRequesterPaysEnabled((err, isEnabled) => {
          assert.ifError(err);
          assert.strictEqual(isEnabled, false);

          bucket.enableRequesterPays(err => {
            assert.ifError(err);

            isRequesterPaysEnabled((err, isEnabled) => {
              assert.ifError(err);
              assert.strictEqual(isEnabled, true);
              done();
            });
          });
        });
      });

      it('should disable requesterPays', done => {
        bucket.enableRequesterPays(err => {
          assert.ifError(err);

          isRequesterPaysEnabled((err, isEnabled) => {
            assert.ifError(err);
            assert.strictEqual(isEnabled, true);

            bucket.disableRequesterPays(err => {
              assert.ifError(err);

              isRequesterPaysEnabled((err, isEnabled) => {
                assert.ifError(err);
                assert.strictEqual(isEnabled, false);
                done();
              });
            });
          });
        });
      });

      describe('methods that accept userProject', () => {
        let file: File;
        let notification: Notification;
        let topicName: string;

        const USER_PROJECT_OPTIONS = {
          userProject: process.env.GCN_STORAGE_2ND_PROJECT_ID,
        };

        // This acts as a test for the following methods:
        //
        // - file.save()
        //   -> file.createWriteStream()
        before(() => {
          file = bucketNonWhitelist.file(generateName());

          return bucket
            .enableRequesterPays()
            .then(() => bucket.iam.getPolicy())
            .then(data => {
              const policy = data[0];

              // Allow an absolute or relative path (from project root)
              // for the key file.
              let key2 = process.env.GCN_STORAGE_2ND_PROJECT_KEY;
              if (key2 && key2.charAt(0) === '.') {
                key2 = `${__dirname}/../../${key2}`;
              }

              // Get the service account for the "second" account (the
              // one that will read the requester pays file).
              const clientEmail = require(key2!).client_email;

              policy.bindings.push({
                role: 'roles/storage.admin',
                members: [`serviceAccount:${clientEmail}`],
              });

              return bucket.iam.setPolicy(policy);
            })
            .then(() => file.save('abc', USER_PROJECT_OPTIONS))
            .then(() => topic.getMetadata())
            .then(data => {
              topicName = data[0].name;
            });
        });

        // This acts as a test for the following methods:
        //
        //  - bucket.delete({ userProject: ... })
        //    -> bucket.deleteFiles({ userProject: ... })
        //       -> bucket.getFiles({ userProject: ... })
        //          -> file.delete({ userProject: ... })
        after(done => {
          deleteBucket(bucketNonWhitelist, USER_PROJECT_OPTIONS, done);
        });

        beforeEach(() => {
          bucketNonWhitelist = storageNonWhitelist.bucket(bucket.name);
          file = bucketNonWhitelist.file(file.name);
        });

        function doubleTest(testFunction: Function) {
          const failureMessage =
            'Bucket is requester pays bucket but no user project provided.';

          return (done: Function) => {
            testFunction({}, (err: Error) => {
              assert(err.message.indexOf(failureMessage) > -1);
              testFunction(USER_PROJECT_OPTIONS, done);
            });
          };
        }

        it('bucket#combine', async () => {
          const files = [
            {file: bucketNonWhitelist.file('file-one.txt'), contents: '123'},
            {file: bucketNonWhitelist.file('file-two.txt'), contents: '456'},
          ];

          await Promise.all(files.map(file => createFileAsync(file)));

          const sourceFiles = files.map(x => x.file);
          const destinationFile = bucketNonWhitelist.file('file-one-n-two.txt');
          await bucketNonWhitelist.combine(
            sourceFiles,
            destinationFile,
            USER_PROJECT_OPTIONS
          );

          // tslint:disable-next-line no-any
          function createFileAsync(fileObject: any) {
            return fileObject.file.save(
              fileObject.contents,
              USER_PROJECT_OPTIONS
            );
          }
        });

        it(
          'bucket#createNotification',
          doubleTest(
            (
              options: CreateNotificationOptions,
              done: ErrorCallbackFunction
            ) => {
              bucketNonWhitelist.createNotification(
                topicName,
                options,
                (err, _notification) => {
                  notification = _notification!;
                  done(err);
                }
              );
            }
          )
        );

        it(
          'bucket#exists',
          doubleTest(
            (options: BucketExistsOptions, done: BucketExistsCallback) => {
              bucketNonWhitelist.exists(options, done);
            }
          )
        );

        it(
          'bucket#get',
          doubleTest((options: GetBucketOptions, done: GetBucketCallback) => {
            // tslint:disable-next-line no-any
            bucketNonWhitelist.get(options, done as any);
          })
        );

        it(
          'bucket#getMetadata',
          doubleTest((options: GetBucketOptions, done: GetBucketCallback) => {
            // tslint:disable-next-line no-any
            bucketNonWhitelist.get(options, done as any);
          })
        );

        it(
          'bucket#getNotifications',
          doubleTest(
            (
              options: GetNotificationOptions,
              done: GetNotificationsCallback
            ) => {
              bucketNonWhitelist.getNotifications(options, done);
            }
          )
        );

        it(
          'bucket#makePrivate',
          doubleTest(
            (
              options: MakeBucketPrivateOptions,
              done: MakeBucketPrivateCallback
            ) => {
              bucketNonWhitelist.makePrivate(options, done);
            }
          )
        );

        it(
          'bucket#setMetadata',
          doubleTest(
            (
              options: SetBucketMetadataOptions,
              done: SetBucketMetadataCallback
            ) => {
              bucketNonWhitelist.setMetadata(
                {newMetadata: true},
                options,
                done
              );
            }
          )
        );

        it(
          'bucket#setStorageClass',
          doubleTest(
            (
              options: SetStorageClassOptions,
              done: SetStorageClassCallback
            ) => {
              bucketNonWhitelist.setStorageClass(
                'multi-regional',
                options,
                done
              );
            }
          )
        );

        it(
          'bucket#upload',
          doubleTest((options: UploadOptions, done: UploadCallback) => {
            bucketNonWhitelist.upload(FILES.big.path, options, done);
          })
        );

        it(
          'file#copy',
          doubleTest((options: CopyOptions, done: CopyCallback) => {
            file.copy('new-file.txt', options, done);
          })
        );

        it(
          'file#createReadStream',
          doubleTest(
            (options: CreateReadStreamOptions, done: (err: Error) => void) => {
              file
                .createReadStream(options)
                .on('error', done)
                .on('end', done)
                .on('data', util.noop);
            }
          )
        );

        it(
          'file#createResumableUpload',
          doubleTest(
            (
              options: CreateResumableUploadOptions,
              done: (err: Error) => void
            ) => {
              file.createResumableUpload(options, (err, uri) => {
                if (err) {
                  done(err);
                  return;
                }

                file
                  .createWriteStream({uri})
                  .on('error', done)
                  .on('finish', done)
                  .end('Test data');
              });
            }
          )
        );

        it(
          'file#download',
          doubleTest((options: DownloadOptions, done: DownloadCallback) => {
            file.download(options, done);
          })
        );

        it(
          'file#exists',
          doubleTest((options: FileExistsOptions, done: FileExistsCallback) => {
            file.exists(options, done);
          })
        );

        it(
          'file#get',
          doubleTest((options: GetFileOptions, done: GetFileCallback) => {
            file.get(options, (err: ApiError | null) => {
              done(err);
            });
          })
        );

        it(
          'file#getMetadata',
          doubleTest(
            (
              options: GetFileMetadataOptions,
              done: GetFileMetadataCallback
            ) => {
              file.getMetadata(options, done);
            }
          )
        );

        it(
          'file#makePrivate',
          doubleTest(
            (
              options: MakeFilePrivateOptions,
              done: MakeFilePrivateCallback
            ) => {
              file.makePrivate(options, done);
            }
          )
        );

        it(
          'file#move',
          doubleTest((options: GetFileOptions, done: SaveCallback) => {
            const newFile = bucketNonWhitelist.file(generateName());

            file.move(newFile, options, err => {
              if (err) {
                done(err);
                return;
              }

              // Re-create the file. The tests need it.
              file.save('newcontent', options, done);
            });
          })
        );

        it(
          'file#setMetadata',
          doubleTest(
            (
              options: SetFileMetadataOptions,
              done: SetFileMetadataCallback
            ) => {
              file.setMetadata({newMetadata: true}, options, done);
            }
          )
        );

        it(
          'file#setStorageClass',
          doubleTest(
            (
              options: SetStorageClassOptions,
              done: SetStorageClassCallback
            ) => {
              file.setStorageClass('multi-regional', options, done);
            }
          )
        );

        it(
          'acl#add',
          doubleTest((options: AddAclOptions, done: AddAclCallback) => {
            options = Object.assign(
              {
                entity: USER_ACCOUNT,
                role: storage.acl.OWNER_ROLE,
              },
              options
            );

            bucketNonWhitelist.acl.add(options, done);
          })
        );

        it(
          'acl#update',
          doubleTest((options: UpdateAclOptions, done: UpdateAclCallback) => {
            options = Object.assign(
              {
                entity: USER_ACCOUNT,
                role: storage.acl.WRITER_ROLE,
              },
              options
            );

            bucketNonWhitelist.acl.update(options, done);
          })
        );

        it(
          'acl#get',
          doubleTest((options: GetAclOptions, done: GetAclCallback) => {
            options = Object.assign(
              {
                entity: USER_ACCOUNT,
              },
              options
            );

            bucketNonWhitelist.acl.get(options, done);
          })
        );

        it(
          'acl#delete',
          doubleTest((options: RemoveAclOptions, done: RemoveAclCallback) => {
            options = Object.assign(
              {
                entity: USER_ACCOUNT,
              },
              options
            );

            bucketNonWhitelist.acl.delete(options, done);
          })
        );

        it(
          'iam#getPolicy',
          doubleTest((options: GetPolicyOptions, done: GetPolicyCallback) => {
            bucketNonWhitelist.iam.getPolicy(options, done);
          })
        );

        it(
          'iam#setPolicy',
          doubleTest((options: GetPolicyOptions, done: SetPolicyCallback) => {
            bucket.iam.getPolicy((err, policy) => {
              if (err) {
                done(err);
                return;
              }

              policy!.bindings.push({
                role: 'roles/storage.objectViewer',
                members: ['allUsers'],
              });

              bucketNonWhitelist.iam.setPolicy(policy!, options, done);
            });
          })
        );

        it(
          'iam#testPermissions',
          doubleTest(
            (
              options: TestIamPermissionsOptions,
              done: TestIamPermissionsCallback
            ) => {
              const tests = ['storage.buckets.delete'];
              bucketNonWhitelist.iam.testPermissions(tests, options, done);
            }
          )
        );

        it(
          'notification#get',
          doubleTest(
            (
              options: GetNotificationOptions,
              done: GetNotificationCallback
            ) => {
              if (!notification) {
                throw new Error('Notification was not successfully created.');
              }

              notification.get(options, done);
            }
          )
        );

        it(
          'notification#getMetadata',
          doubleTest(
            (
              options: GetNotificationMetadataOptions,
              done: GetNotificationMetadataCallback
            ) => {
              if (!notification) {
                throw new Error('Notification was not successfully created.');
              }
              notification.getMetadata(options, done);
            }
          )
        );

        it(
          'notification#delete',
          doubleTest(
            (
              options: DeleteNotificationOptions,
              done: DeleteNotificationCallback
            ) => {
              if (!notification) {
                throw new Error('Notification was not successfully created.');
              }
              notification.delete(options, done);
            }
          )
        );
      });
    });
  });

  describe('write, read, and remove files', () => {
    before(async () => {
      function setHash(filesKey: string) {
        const file = FILES[filesKey];
        const hash = crypto.createHash('md5');

        return new Promise(resolve =>
          fs
            .createReadStream(file.path)
            .on('data', hash.update.bind(hash))
            .on('end', () => {
              file.hash = hash.digest('base64');
              resolve();
            })
        );
      }
      await Promise.all(Object.keys(FILES).map(key => setHash(key)));
    });

    it('should read/write from/to a file in a directory', done => {
      const file = bucket.file('directory/file');
      const contents = 'test';

      const writeStream = file.createWriteStream({resumable: false});
      writeStream.write(contents);
      writeStream.end();

      writeStream.on('error', done);
      writeStream.on('finish', () => {
        let data = Buffer.from('', 'utf8');

        file
          .createReadStream()
          .on('error', done)
          .on('data', (chunk: Buffer) => {
            data = Buffer.concat([data, chunk]);
          })
          .on('end', () => {
            assert.strictEqual(data.toString(), contents);
            done();
          });
      });
    });

    it('should not push data when a file cannot be read', done => {
      const file = bucket.file('non-existing-file');
      let dataEmitted = false;

      file
        .createReadStream()
        .on('data', () => {
          dataEmitted = true;
        })
        .on('error', err => {
          assert.strictEqual(dataEmitted, false);
          assert.strictEqual((err as ApiError).code, 404);
          done();
        });
    });

    it('should thow orignal error message on non JSON response on large metadata', async () => {
      const largeCustomMeta = (size: number) => {
        let str = '';
        for (let i = 0; i < size; i++) {
          str += 'a';
        }
        return str;
      };

      const file = bucket.file('large-metadata-error-test');
      // Save file with metadata size more then 2MB.
      await assert.rejects(
        async () => {
          await file.save('test', {
            resumable: false,
            metadata: {
              metadata: {
                custom: largeCustomMeta(2.1e6),
              },
            },
          });
        },
        {
          message: 'Cannot parse response as JSON: Metadata part is too large.',
        }
      );
    });

    it('should read a byte range from a file', done => {
      bucket.upload(FILES.big.path, (err: Error | null, file?: File | null) => {
        assert.ifError(err);

        const fileSize = file!.metadata.size;
        const byteRange = {
          start: Math.floor((fileSize * 1) / 3),
          end: Math.floor((fileSize * 2) / 3),
        };
        const expectedContentSize = byteRange.start + 1;

        let sizeStreamed = 0;
        file!
          .createReadStream(byteRange)
          .on('data', chunk => {
            sizeStreamed += chunk.length;
          })
          .on('error', done)
          .on('end', () => {
            assert.strictEqual(sizeStreamed, expectedContentSize);
            file!.delete(done);
          });
      });
    });

    it('should support readable[Symbol.asyncIterator]()', async () => {
      const fileContents = fs.readFileSync(FILES.big.path);

      const [file] = await bucket.upload(FILES.big.path);
      const stream = file.createReadStream();
      const chunks: Buffer[] = [];
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
      const remoteContents = Buffer.concat(chunks).toString();
      assert.strictEqual(String(fileContents), String(remoteContents));
    });

    it('should download a file to memory', done => {
      const fileContents = fs.readFileSync(FILES.big.path);
      bucket.upload(FILES.big.path, (err: Error | null, file?: File | null) => {
        assert.ifError(err);
        file!.download((err, remoteContents) => {
          assert.ifError(err);
          assert.strictEqual(String(fileContents), String(remoteContents));
          done();
        });
      });
    });

    it('should handle non-network errors', done => {
      const file = bucket.file('hi.jpg');
      file.download(err => {
        assert.strictEqual((err as ApiError).code, 404);
        done();
      });
    });

    it('should gzip a file on the fly and download it', done => {
      const options = {
        gzip: true,
      };
      const expectedContents = fs.readFileSync(FILES.html.path, 'utf-8');
      bucket.upload(FILES.html.path, options, (err, file) => {
        assert.ifError(err);
        file!.download((err, contents) => {
          assert.ifError(err);
          assert.strictEqual(contents.toString(), expectedContents);
          file!.delete(done);
        });
      });
    });

    it('should upload a gzipped file and download it', done => {
      const options = {
        metadata: {
          contentEncoding: 'gzip',
          contentType: 'text/html',
        },
      };

      const expectedContents = normalizeNewline(
        fs.readFileSync(FILES.html.path, 'utf-8')
      );

      bucket.upload(FILES.gzip.path, options, (err, file) => {
        assert.ifError(err);

        // Sometimes this file is not found immediately; include some
        // retry to attempt to make the test less flaky.
        let attempt = 0;
        const downloadCallback = (err: Error | null, contents: {}) => {
          // If we got an error, gracefully retry a few times.
          if (err) {
            attempt += 1;
            if (attempt >= 5) {
              return assert.ifError(err);
            }
            return file!.download(downloadCallback);
          }

          // Ensure the contents match.
          assert.strictEqual(contents.toString(), expectedContents);
          file!.delete(done);
        };
        file!.download(downloadCallback);
      });
    });

    describe('simple write', () => {
      it('should save arbitrary data', done => {
        const file = bucket.file('TestFile');
        const data = 'hello';
        file!.save(data, err => {
          assert.ifError(err);
          file!.download((err, contents) => {
            assert.strictEqual(contents.toString(), data);
            done();
          });
        });
      });
    });

    describe('stream write', () => {
      it('should stream write, then remove file (3mb)', done => {
        const file = bucket.file('LargeFile');
        fs.createReadStream(FILES.big.path)
          .pipe(file!.createWriteStream({resumable: false}))
          .on('error', done)
          .on('finish', () => {
            assert.strictEqual(file.metadata.md5Hash, FILES.big.hash);
            file.delete(done);
          });
      });

      it('should write metadata', done => {
        const options = {
          metadata: {contentType: 'image/png'},
          resumable: false,
        };
        bucket.upload(FILES.logo.path, options, (err, file) => {
          assert.ifError(err);
          file!.getMetadata((err: ApiError | null, metadata: Metadata) => {
            assert.ifError(err);
            assert.strictEqual(
              metadata.contentType,
              options.metadata.contentType
            );
            file!.delete(done);
          });
        });
      });

      it('should resume an upload after an interruption', done => {
        fs.stat(FILES.big.path, (err, metadata) => {
          assert.ifError(err);

          // Use a random name to force an empty ConfigStore cache.
          const file = bucket.file(generateName());
          const fileSize = metadata.size;
          upload({interrupt: true}, err => {
            assert.strictEqual(err!.message, 'Interrupted.');
            upload({interrupt: false}, err => {
              assert.ifError(err);
              assert.strictEqual(Number(file.metadata.size), fileSize);
              file.delete(done);
            });
          });

          // tslint:disable-next-line no-any
          function upload(opts: any, callback: ErrorCallbackFunction) {
            const ws = file.createWriteStream();
            let sizeStreamed = 0;

            fs.createReadStream(FILES.big.path)
              .pipe(
                through(function(chunk, enc, next) {
                  sizeStreamed += chunk.length;

                  if (opts.interrupt && sizeStreamed >= fileSize / 2) {
                    // stop sending data half way through.
                    this.push(chunk);
                    this.destroy();
                    process.nextTick(() => {
                      ws.destroy(new Error('Interrupted.'));
                    });
                  } else {
                    this.push(chunk);
                    next();
                  }
                })
              )
              .pipe(ws)
              .on('error', callback)
              .on('finish', callback);
          }
        });
      });

      it('should write/read/remove from a buffer', done => {
        tmp.setGracefulCleanup();
        tmp.file(function _tempFileCreated(err, tmpFilePath) {
          assert.ifError(err);

          const file = bucket.file('MyBuffer');
          const fileContent = 'Hello World';

          const writable = file.createWriteStream();

          writable.write(fileContent);
          writable.end();

          writable.on('finish', () => {
            file
              .createReadStream()
              .on('error', done)
              .pipe(fs.createWriteStream(tmpFilePath))
              .on('error', done)
              .on('finish', () => {
                file.delete((err: ApiError | null) => {
                  assert.ifError(err);

                  fs.readFile(tmpFilePath, (err, data) => {
                    assert.strictEqual(data.toString(), fileContent);
                    done();
                  });
                });
              });
          });
        });
      });
    });

    describe('customer-supplied encryption keys', () => {
      const encryptionKey = crypto.randomBytes(32);

      const file = bucket.file('encrypted-file', {
        encryptionKey,
      });
      const unencryptedFile = bucket.file(file.name);

      before(done => {
        file.save('secret data', {resumable: false}, done);
      });

      it('should not get the hashes from the unencrypted file', done => {
        unencryptedFile.getMetadata(
          (err: ApiError | null, metadata: Metadata) => {
            assert.ifError(err);
            assert.strictEqual(metadata.crc32c, undefined);
            done();
          }
        );
      });

      it('should get the hashes from the encrypted file', done => {
        file.getMetadata((err: ApiError | null, metadata: Metadata) => {
          assert.ifError(err);
          assert.notStrictEqual(metadata.crc32c, undefined);
          done();
        });
      });

      it('should not download from the unencrypted file', done => {
        unencryptedFile.download(err => {
          if (!err) {
            done(new Error('Expected an error.'));
            return;
          }

          assert(
            err!.message.indexOf(
              [
                'The target object is encrypted by a',
                'customer-supplied encryption key.',
              ].join(' ')
            ) > -1
          );
          done();
        });
      });

      it('should download from the encrytped file', done => {
        file.download((err, contents) => {
          assert.ifError(err);
          assert.strictEqual(contents.toString(), 'secret data');
          done();
        });
      });

      it('should rotate encryption keys', done => {
        const newEncryptionKey = crypto.randomBytes(32);

        file.rotateEncryptionKey(newEncryptionKey, err => {
          assert.ifError(err);
          file.download((err, contents) => {
            assert.ifError(err);
            assert.strictEqual(contents.toString(), 'secret data');
            done();
          });
        });
      });
    });

    describe('kms keys', () => {
      const FILE_CONTENTS = 'secret data';

      const BUCKET_LOCATION = 'us';
      let PROJECT_ID: string;
      let SERVICE_ACCOUNT_EMAIL: string;

      const keyRingId = generateName();
      const cryptoKeyId = generateName();

      const request = promisify(storage.request).bind(storage);

      let bucket: Bucket;
      let kmsKeyName: string;
      let keyRingsBaseUrl: string;

      function setProjectId(projectId: string) {
        PROJECT_ID = projectId;
        keyRingsBaseUrl = `https://cloudkms.googleapis.com/v1/projects/${PROJECT_ID}/locations/${BUCKET_LOCATION}/keyRings`;
        kmsKeyName = generateKmsKeyName(cryptoKeyId);
      }

      function generateKmsKeyName(cryptoKeyId: string) {
        return `projects/${PROJECT_ID}/locations/${BUCKET_LOCATION}/keyRings/${keyRingId}/cryptoKeys/${cryptoKeyId}`;
      }

      async function createCryptoKeyAsync(cryptoKeyId: string) {
        // createCryptoKeyId
        await request({
          method: 'POST',
          uri: `${keyRingsBaseUrl}/${keyRingId}/cryptoKeys`,
          qs: {cryptoKeyId},
          json: {purpose: 'ENCRYPT_DECRYPT'},
        });

        // getServiceAccountEmail
        if (!SERVICE_ACCOUNT_EMAIL) {
          const [serviceAccount] = await storage.getServiceAccount();
          SERVICE_ACCOUNT_EMAIL = serviceAccount!.emailAddress!;
        }

        await request({
          method: 'POST',
          uri: `${keyRingsBaseUrl}/${keyRingId}/cryptoKeys/${cryptoKeyId}:setIamPolicy`,
          json: {
            policy: {
              bindings: [
                {
                  role: 'roles/cloudkms.cryptoKeyEncrypterDecrypter',
                  members: `serviceAccount:${SERVICE_ACCOUNT_EMAIL}`,
                },
              ],
            },
          },
        });
      }

      before(async () => {
        bucket = storage.bucket(generateName());

        setProjectId(await storage.authClient.getProjectId());
        await bucket.create({location: BUCKET_LOCATION});

        // create keyRing
        await request({
          method: 'POST',
          uri: keyRingsBaseUrl,
          qs: {keyRingId},
        });

        await createCryptoKeyAsync(cryptoKeyId);
      });

      describe('files', () => {
        let file: File;

        before(done => {
          file = bucket.file('kms-encrypted-file', {kmsKeyName});
          file.save(FILE_CONTENTS, {resumable: false}, done);
        });

        it('should have set kmsKeyName on created file', done => {
          file.getMetadata((err: ApiError | null, metadata: Metadata) => {
            assert.ifError(err);

            // Strip the project ID, as it could be the placeholder locally, but
            // the real value upstream.
            const projectIdRegExp = /^.+\/locations/;
            const actualKmsKeyName = metadata.kmsKeyName.replace(
              projectIdRegExp,
              ''
            );
            let expectedKmsKeyName = kmsKeyName.replace(projectIdRegExp, '');

            // Upstream attaches a version.
            expectedKmsKeyName = `${expectedKmsKeyName}/cryptoKeyVersions/1`;

            assert.strictEqual(actualKmsKeyName, expectedKmsKeyName);

            done();
          });
        });

        it('should set kmsKeyName on resumable uploaded file', done => {
          const file = bucket.file('resumable-file', {kmsKeyName});

          file.save(FILE_CONTENTS, {resumable: true}, err => {
            assert.ifError(err);

            file.getMetadata((err: ApiError | null, metadata: Metadata) => {
              assert.ifError(err);

              // Strip the project ID, as it could be the placeholder locally,
              // but the real value upstream.
              const projectIdRegExp = /^.+\/locations/;
              const actualKmsKeyName = metadata.kmsKeyName.replace(
                projectIdRegExp,
                ''
              );
              let expectedKmsKeyName = kmsKeyName.replace(projectIdRegExp, '');

              // Upstream attaches a version.
              expectedKmsKeyName = `${expectedKmsKeyName}/cryptoKeyVersions/1`;

              assert.strictEqual(actualKmsKeyName, expectedKmsKeyName);

              done();
            });
          });
        });

        it('should rotate encryption keys', async () => {
          const cryptoKeyId = generateName();
          const newKmsKeyName = generateKmsKeyName(cryptoKeyId);

          await createCryptoKeyAsync(cryptoKeyId);
          await file.rotateEncryptionKey({kmsKeyName: newKmsKeyName});
          const [contents] = await file.download();
          assert.strictEqual(contents.toString(), FILE_CONTENTS);
        });

        it('should convert CSEK to KMS key', done => {
          const encryptionKey = crypto.randomBytes(32);

          const file = bucket.file('encrypted-file', {encryptionKey});

          file.save(FILE_CONTENTS, {resumable: false}, err => {
            assert.ifError(err);

            file.rotateEncryptionKey({kmsKeyName}, err => {
              assert.ifError(err);

              file.download((err, contents) => {
                assert.ifError(err);
                assert.strictEqual(contents.toString(), 'secret data');
                done();
              });
            });
          });
        });
      });

      describe('buckets', () => {
        let bucket: Bucket;

        before(async () => {
          bucket = storage.bucket(generateName(), {kmsKeyName});
          await bucket.create();
          await bucket.setMetadata({
            encryption: {
              defaultKmsKeyName: kmsKeyName,
            },
          });
        });

        after(done => {
          bucket.setMetadata(
            {
              encryption: null,
            },
            done
          );
        });

        it('should have set defaultKmsKeyName on created bucket', done => {
          bucket.getMetadata((err: ApiError | null, metadata: Metadata) => {
            assert.ifError(err);

            // Strip the project ID, as it could be the placeholder locally, but
            // the real value upstream.
            const projectIdRegExp = /^.+\/locations/;
            const actualKmsKeyName = metadata.encryption.defaultKmsKeyName.replace(
              projectIdRegExp,
              ''
            );
            const expectedKmsKeyName = kmsKeyName.replace(projectIdRegExp, '');

            assert.strictEqual(actualKmsKeyName, expectedKmsKeyName);

            done();
          });
        });

        it('should update the defaultKmsKeyName', async () => {
          const cryptoKeyId = generateName();
          const newKmsKeyName = generateKmsKeyName(cryptoKeyId);

          await createCryptoKeyAsync(cryptoKeyId);
          await bucket.setMetadata({
            encryption: {
              defaultKmsKeyName: newKmsKeyName,
            },
          });
        });

        it('should insert an object that inherits the kms key name', done => {
          const file = bucket.file('kms-encrypted-file');

          bucket.getMetadata((err: ApiError | null, metadata: Metadata) => {
            assert.ifError(err);

            const defaultKmsKeyName = metadata.encryption.defaultKmsKeyName;

            file.save(FILE_CONTENTS, {resumable: false}, err => {
              assert.ifError(err);

              // Strip the project ID, as it could be the placeholder locally,
              // but the real value upstream.
              const projectIdRegExp = /^.+\/locations/;
              const actualKmsKeyName = file.metadata.kmsKeyName.replace(
                projectIdRegExp,
                ''
              );
              let expectedKmsKeyName = defaultKmsKeyName.replace(
                projectIdRegExp,
                ''
              );

              // Upstream attaches a version.
              expectedKmsKeyName = `${expectedKmsKeyName}/cryptoKeyVersions/1`;

              assert.strictEqual(actualKmsKeyName, expectedKmsKeyName);

              done();
            });
          });
        });
      });
    });

    it('should copy an existing file', async () => {
      const opts = {destination: 'CloudLogo'};
      const [file] = await bucket.upload(FILES.logo.path, opts);
      const [copiedFile] = await file.copy('CloudLogoCopy');
      await Promise.all([file.delete, copiedFile.delete()]);
    });

    it('should copy a large file', async () => {
      const otherBucket = storage.bucket(generateName());
      const file = bucket.file('Big');
      const copiedFile = otherBucket.file(file.name);
      await bucket.upload(FILES.logo.path, {destination: file});
      await otherBucket.create({
        location: 'ASIA-EAST1',
        dra: true,
      });
      await file.copy(copiedFile);
      await copiedFile.delete();
      await otherBucket.delete();
      await file.delete();
    });

    it('should copy to another bucket given a gs:// URL', done => {
      const opts = {destination: 'CloudLogo'};
      bucket.upload(FILES.logo.path, opts, (err, file) => {
        assert.ifError(err);

        const otherBucket = storage.bucket(generateName());
        otherBucket.create((err: Error) => {
          assert.ifError(err);

          const destPath = 'gs://' + otherBucket.name + '/CloudLogoCopy';
          file!.copy(destPath, err => {
            assert.ifError(err);

            otherBucket.getFiles((err, files) => {
              assert.ifError(err);

              assert.strictEqual(files!.length, 1);
              const newFile = files![0];

              assert.strictEqual(newFile.name, 'CloudLogoCopy');

              done();
            });
          });
        });
      });
    });

    it('should allow changing the storage class', async () => {
      const file = bucket.file(generateName());
      await bucket.upload(FILES.logo.path, {destination: file});
      await file.setStorageClass('standard');
      const [metadata] = await file.getMetadata();
      assert.strictEqual(metadata.storageClass, 'STANDARD');
    });
  });

  describe('channels', () => {
    it('should create a channel', done => {
      const config = {
        address: 'https://yahoo.com',
      };

      bucket.createChannel('new-channel', config, (err: Error | null) => {
        // Actually creating a channel is pretty complicated. This will at least
        // let us know we hit the right endpoint and it received "yahoo.com".
        assert(err!.message.includes(config.address));
        done();
      });
    });

    it('should stop a channel', done => {
      // We can't actually create a channel. But we can test to see that we're
      // reaching the right endpoint with the API request.
      const channel = storage.channel('id', 'resource-id');
      channel.stop(err => {
        assert.strictEqual((err as ApiError).code, 404);
        assert.strictEqual(err!.message.indexOf("Channel 'id' not found"), 0);
        done();
      });
    });
  });

  describe('combine files', () => {
    it('should combine multiple files into one', async () => {
      const files = [
        {file: bucket.file('file-one.txt'), contents: '123'},
        {file: bucket.file('file-two.txt'), contents: '456'},
      ];

      await Promise.all(files.map(file => createFileAsync(file)));

      const sourceFiles = files.map(x => x.file);
      let destinationFile = bucket.file('file-one-and-two.txt');

      [destinationFile] = await bucket.combine(sourceFiles, destinationFile);
      const [contents] = await destinationFile.download();
      assert.strictEqual(
        contents.toString(),
        files.map(x => x.contents).join('')
      );

      await Promise.all(
        sourceFiles.concat([destinationFile]).map(file => deleteFileAsync(file))
      );
    });
  });

  describe('HMAC keys', () => {
    // This is generally a valid service account for a project.
    const ALTERNATE_SERVICE_ACCOUNT = `${process.env.PROJECT_ID}@appspot.gserviceaccount.com`;
    const SERVICE_ACCOUNT =
      process.env.HMAC_KEY_TEST_SERVICE_ACCOUNT || ALTERNATE_SERVICE_ACCOUNT;
    const HMAC_PROJECT = process.env.HMAC_KEY_TEST_SERVICE_ACCOUNT
      ? process.env.HMAC_PROJECT
      : process.env.PROJECT_ID;
    // Second service account to test listing HMAC keys from different accounts.
    const SECOND_SERVICE_ACCOUNT =
      process.env.HMAC_KEY_TEST_SECOND_SERVICE_ACCOUNT;

    let accessId: string;

    before(async () => {
      await deleteHmacKeys(SERVICE_ACCOUNT, HMAC_PROJECT!);
    });

    after(async () => {
      await deleteHmacKeys(SERVICE_ACCOUNT, HMAC_PROJECT!);
    });

    it('should create an HMAC key for a service account', async () => {
      const [hmacKey, secret] = await storage.createHmacKey(SERVICE_ACCOUNT, {
        projectId: HMAC_PROJECT,
      });
      // We should always get a 40 character secret, which is valid base64.
      assert.strictEqual(secret.length, 40);
      accessId = hmacKey.id!;
      const metadata = hmacKey.metadata!;
      assert.strictEqual(metadata.accessId, accessId);
      assert.strictEqual(metadata.state, 'ACTIVE');
      assert.strictEqual(metadata.projectId, HMAC_PROJECT);
      assert.strictEqual(metadata.serviceAccountEmail, SERVICE_ACCOUNT);
      assert(typeof metadata.etag === 'string');
      assert(typeof metadata.timeCreated === 'string');
      assert(typeof metadata.updated === 'string');
    });

    it('should get metadata for an HMAC key', async () => {
      const hmacKey = storage.hmacKey(accessId, {projectId: HMAC_PROJECT});
      const [metadata] = await hmacKey.getMetadata();
      assert.strictEqual(metadata.accessId, accessId);
    });

    it('should show up from getHmacKeys() without serviceAccountEmail param', async () => {
      const [hmacKeys] = await storage.getHmacKeys({projectId: HMAC_PROJECT});
      assert(hmacKeys.length > 0);
      assert(
        hmacKeys.some(hmacKey => hmacKey.id === accessId),
        'created HMAC key not found from getHmacKeys result'
      );
    });

    it('should make the key INACTIVE', async () => {
      const hmacKey = storage.hmacKey(accessId, {projectId: HMAC_PROJECT});
      let [metadata] = await hmacKey.setMetadata({state: 'INACTIVE'});
      assert.strictEqual(metadata.state, 'INACTIVE');

      [metadata] = await hmacKey.getMetadata();
      assert.strictEqual(metadata.state, 'INACTIVE');
    });

    it('should delete the key', async () => {
      const hmacKey = storage.hmacKey(accessId, {projectId: HMAC_PROJECT});
      await hmacKey.delete();
      const [metadata] = await hmacKey.getMetadata();
      assert.strictEqual(metadata.state, 'DELETED');
      assert.strictEqual(hmacKey.metadata!.state, 'DELETED');
    });

    it('deleted key should not show up from getHmacKeys() by default', async () => {
      const [hmacKeys] = await storage.getHmacKeys({
        serviceAccountEmail: SERVICE_ACCOUNT,
        projectId: HMAC_PROJECT,
      });
      assert(Array.isArray(hmacKeys));
      assert(
        !hmacKeys.some(hmacKey => hmacKey.id === accessId),
        'deleted HMAC key is found from getHmacKeys result'
      );
    });

    describe('second service account', () => {
      before(async function() {
        if (!SECOND_SERVICE_ACCOUNT) {
          this.skip();
          return;
        }
        await deleteHmacKeys(SECOND_SERVICE_ACCOUNT, HMAC_PROJECT!);
      });

      it('should create key for a second service account', async () => {
        const _ = await storage.createHmacKey(SECOND_SERVICE_ACCOUNT!, {
          projectId: HMAC_PROJECT,
        });
      });

      it('get HMAC keys for both service accounts', async () => {
        // Create a key for the first service account
        const _ = await storage.createHmacKey(SERVICE_ACCOUNT!, {
          projectId: HMAC_PROJECT,
        });

        const [hmacKeys] = await storage.getHmacKeys({projectId: HMAC_PROJECT});
        assert(
          hmacKeys.some(
            hmacKey => hmacKey.metadata!.serviceAccountEmail === SERVICE_ACCOUNT
          ),
          `Expected at least 1 key for service account: ${SERVICE_ACCOUNT}`
        );
        assert(
          hmacKeys.some(
            hmacKey =>
              hmacKey.metadata!.serviceAccountEmail === SECOND_SERVICE_ACCOUNT
          ),
          `Expected at least 1 key for service account: ${SECOND_SERVICE_ACCOUNT}`
        );
      });

      it('filter by service account email', async () => {
        const [hmacKeys] = await storage.getHmacKeys({
          serviceAccountEmail: SECOND_SERVICE_ACCOUNT,
          projectId: HMAC_PROJECT,
        });
        assert(
          hmacKeys.every(
            hmacKey =>
              hmacKey.metadata!.serviceAccountEmail === SECOND_SERVICE_ACCOUNT
          ),
          'HMAC key belonging to other service accounts unexpected'
        );
      });
    });
  });

  describe('list files', () => {
    const DIRECTORY_NAME = 'directory-name';

    const NEW_FILES = [
      bucket.file('CloudLogo1'),
      bucket.file('CloudLogo2'),
      bucket.file('CloudLogo3'),
      bucket.file(`${DIRECTORY_NAME}/CloudLogo4`),
      bucket.file(`${DIRECTORY_NAME}/CloudLogo5`),
      bucket.file(`${DIRECTORY_NAME}/inner/CloudLogo6`),
    ];

    before(async () => {
      await bucket.deleteFiles();
      const originalFile = NEW_FILES[0];
      const cloneFiles = NEW_FILES.slice(1);
      await bucket.upload(FILES.logo.path, {
        destination: originalFile,
      });
      await Promise.all(cloneFiles.map(f => originalFile.copy(f)));
    });

    after(async () => {
      await Promise.all(NEW_FILES.map(file => deleteFileAsync(file)));
    });

    it('should get files', done => {
      bucket.getFiles((err, files) => {
        assert.ifError(err);
        assert.strictEqual(files!.length, NEW_FILES.length);
        done();
      });
    });

    it('should get files as a stream', done => {
      let numFilesEmitted = 0;

      bucket
        .getFilesStream()
        .on('error', done)
        .on('data', () => {
          numFilesEmitted++;
        })
        .on('end', () => {
          assert.strictEqual(numFilesEmitted, NEW_FILES.length);
          done();
        });
    });

    it('should get files from a directory', done => {
      bucket.getFiles({directory: DIRECTORY_NAME}, (err, files) => {
        assert.ifError(err);
        assert.strictEqual(files!.length, 3);
        done();
      });
    });

    it('should get files from a directory as a stream', done => {
      let numFilesEmitted = 0;

      bucket
        .getFilesStream({directory: DIRECTORY_NAME})
        .on('error', done)
        .on('data', () => {
          numFilesEmitted++;
        })
        .on('end', () => {
          assert.strictEqual(numFilesEmitted, 3);
          done();
        });
    });

    it('should paginate the list', done => {
      const query = {
        maxResults: NEW_FILES.length - 1,
      };

      bucket.getFiles(query, (err, files, nextQuery) => {
        assert.ifError(err);
        assert.strictEqual(files!.length, NEW_FILES.length - 1);
        assert(nextQuery);
        bucket.getFiles(nextQuery!, (err, files) => {
          assert.ifError(err);
          assert.strictEqual(files!.length, 1);
          done();
        });
      });
    });
  });

  describe('file generations', () => {
    const bucketWithVersioning = storage.bucket(generateName());

    before(done => {
      bucketWithVersioning.create(
        {
          versioning: {
            enabled: true,
          },
        },
        done
      );
    });

    after(done => {
      bucketWithVersioning.deleteFiles(
        {
          versions: true,
        },
        err => {
          if (err) {
            done(err);
            return;
          }
          bucketWithVersioning.delete(done);
        }
      );
    });

    it('should overwrite file, then get older version', done => {
      const versionedFile = bucketWithVersioning.file(generateName());

      versionedFile.save('a', err => {
        assert.ifError(err);

        versionedFile.getMetadata(
          (err: ApiError | null, metadata: Metadata) => {
            assert.ifError(err);

            const initialGeneration = metadata.generation;

            versionedFile.save('b', err => {
              assert.ifError(err);

              const firstGenFile = bucketWithVersioning.file(
                versionedFile.name,
                {
                  generation: initialGeneration,
                }
              );

              firstGenFile.download((err, contents) => {
                assert.ifError(err);
                assert.strictEqual(contents.toString(), 'a');
                done();
              });
            });
          }
        );
      });
    });

    it('should get all files scoped to their version', async () => {
      const filesToCreate = [
        {file: bucketWithVersioning.file('file-one.txt'), contents: '123'},
        {file: bucketWithVersioning.file('file-one.txt'), contents: '456'},
      ];

      await Promise.all(filesToCreate.map(file => createFileAsync(file)));

      const [files] = await bucketWithVersioning.getFiles({versions: true});
      assert.strictEqual(files![0].name, files![1].name);
      assert.notStrictEqual(
        files![0].metadata.generation,
        files![1].metadata.generation
      );
    });

    it('should throw an error Precondition Failed on overwrite with version 0, then save file with and without resumable', async () => {
      const fileName = `test-${Date.now()}.txt`;

      await bucketWithVersioning
        .file(fileName)
        .save('hello1', {resumable: false});
      await assert.rejects(
        async () => {
          await bucketWithVersioning
            .file(fileName, {generation: 0})
            .save('hello2');
        },
        {
          code: 412,
          message: 'Precondition Failed',
        }
      );
      await bucketWithVersioning
        .file(fileName)
        .save('hello3', {resumable: false});
      await bucketWithVersioning.file(fileName).save('hello4');
    });
  });

  describe('v2 signed urls', () => {
    const localFile = fs.readFileSync(FILES.logo.path);
    let file: File;

    beforeEach(done => {
      file = bucket.file('LogoToSign.jpg');
      fs.createReadStream(FILES.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('finish', done.bind(null, null));
    });

    it('should create a signed read url', async () => {
      const [signedReadUrl] = await file.getSignedUrl({
        version: 'v2',
        action: 'read',
        expires: Date.now() + 5000,
      });

      const res = await fetch(signedReadUrl);
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
      await file.delete();
    });

    it('should create a signed delete url', async () => {
      const [signedDeleteUrl] = await file.getSignedUrl({
        version: 'v2',
        action: 'delete',
        expires: Date.now() + 5000,
      });

      await fetch(signedDeleteUrl, {method: 'DELETE'});
      assert.rejects(
        () => file.getMetadata(),
        (err: ApiError) => err.code === 404
      );
    });

    it('should work with multi-valued extension headers', async () => {
      const HEADERS = {
        'x-goog-custom-header': ['value1', 'value2'],
      };
      const [signedReadUrl] = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5000,
        extensionHeaders: HEADERS,
      });

      const res = await fetch(signedReadUrl, {
        headers: {'x-goog-custom-header': 'value1,value2'},
      });
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
    });
  });

  describe('v4 signed urls', () => {
    const localFile = fs.readFileSync(FILES.logo.path);
    let file: File;

    before(done => {
      file = bucket.file('LogoToSign.jpg');
      fs.createReadStream(FILES.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('finish', done.bind(null, null));
    });

    it('should create a signed read url', async () => {
      const [signedReadUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 5000,
      });

      const res = await fetch(signedReadUrl);
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
      await file.delete();
    });

    it('should create a signed delete url', async () => {
      const [signedDeleteUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'delete',
        expires: Date.now() + 5000,
      });
      await fetch(signedDeleteUrl!, {method: 'DELETE'});
      assert.rejects(
        () => file.getMetadata(),
        (err: ApiError) => err.code === 404
      );
    });
  });

  describe('sign policy', () => {
    let file: File;

    before(done => {
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

    it('should create a policy', done => {
      const expires = new Date('10-25-2022');
      const expectedExpiration = new Date(expires).toISOString();

      const options = {
        equals: ['$Content-Type', 'image/jpeg'],
        expires,
        contentLengthRange: {
          min: 0,
          max: 1024,
        },
      };

      file.getSignedPolicy(options, (err, policy) => {
        assert.ifError(err);

        let policyJson;

        try {
          policyJson = JSON.parse(policy!.string);
        } catch (e) {
          done(e);
          return;
        }

        assert.strictEqual(policyJson.expiration, expectedExpiration);
        done();
      });
    });
  });

  describe('notifications', () => {
    let notification: Notification;
    // tslint:disable-next-line no-any
    let subscription: any;

    before(() => {
      return bucket
        .createNotification(topic, {
          eventTypes: ['OBJECT_FINALIZE'],
        })
        .then(data => {
          notification = data[0];
          subscription = topic.subscription(generateName());

          return subscription.create();
        });
    });

    after(() => {
      return (
        subscription
          .delete()
          .then(() => {
            return bucket.getNotifications();
          })
          // tslint:disable-next-line no-any
          .then((data: any) => {
            return Promise.all(
              // tslint:disable-next-line no-any
              data[0].map((notification: any) => {
                return notification.delete();
              })
            );
          })
      );
    });

    it('should get an existing notification', done => {
      notification.get(err => {
        assert.ifError(err);
        assert(Object.keys(notification.metadata).length > 0);
        done();
      });
    });

    it('should get a notifications metadata', done => {
      notification.getMetadata((err: ApiError | null, metadata: Metadata) => {
        assert.ifError(err);
        assert(metadata !== null && typeof metadata === 'object');
        done();
      });
    });

    it('should tell us if a notification exists', done => {
      notification.exists((err: ApiError | null, exists: boolean) => {
        assert.ifError(err);
        assert(exists);
        done();
      });
    });

    it('should tell us if a notification does not exist', done => {
      const notification = bucket.notification('123');

      notification.exists((err: ApiError | null, exists: boolean) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should get a list of notifications', done => {
      bucket.getNotifications((err, notifications) => {
        assert.ifError(err);
        assert.strictEqual(notifications!.length, 1);
        done();
      });
    });

    it('should emit events to a subscription', done => {
      // tslint:disable-next-line no-any
      subscription.on('error', done).on('message', (message: any) => {
        const attrs = message.attributes;
        assert.strictEqual(attrs.eventType, 'OBJECT_FINALIZE');
        done();
      });

      bucket.upload(FILES.logo.path, (err: Error | null) => {
        if (err) {
          done(err);
        }
      });
    });

    it('should delete a notification', () => {
      let notificationCount = 0;
      let notification: Notification;

      return bucket
        .createNotification(topic, {
          eventTypes: ['OBJECT_DELETE'],
        })
        .then(data => {
          notification = data[0];
          return bucket.getNotifications();
        })
        .then(data => {
          notificationCount = data[0].length;
          return notification.delete();
        })
        .then(() => {
          return bucket.getNotifications();
        })
        .then(data => {
          assert.strictEqual(data[0].length, notificationCount - 1);
        });
    });
  });

  async function deleteBucketAsync(bucket: Bucket, options?: {}) {
    // After files are deleted, eventual consistency may require a bit of a
    // delay to ensure that the bucket recognizes that the files don't exist
    // anymore.
    const CONSISTENCY_DELAY_MS = 250;

    options = Object.assign({}, options, {
      versions: true,
    });

    await bucket.deleteFiles(options);
    await new Promise(resolve => setTimeout(resolve, CONSISTENCY_DELAY_MS));
    await bucket.delete();
  }

  function deleteBucket(
    bucket: Bucket,
    options: {},
    callback: DeleteBucketCallback
  ): void;
  function deleteBucket(bucket: Bucket, callback: DeleteBucketCallback): void;
  function deleteBucket(
    bucket: Bucket,
    optsOrCb: {} | DeleteBucketCallback,
    callback?: DeleteBucketCallback
  ) {
    let options = typeof optsOrCb === 'object' ? optsOrCb : {};
    callback =
      typeof optsOrCb === 'function'
        ? (optsOrCb as DeleteBucketCallback)
        : callback;

    // After files are deleted, eventual consistency may require a bit of a
    // delay to ensure that the bucket recognizes that the files don't exist
    // anymore.
    const CONSISTENCY_DELAY_MS = 250;

    options = Object.assign({}, options, {
      versions: true,
    });

    bucket.deleteFiles(options, err => {
      if (err) {
        callback!(err as Error);
        return;
      }

      setTimeout(() => {
        bucket.delete(options, callback!);
      }, CONSISTENCY_DELAY_MS);
    });
  }

  function deleteFileAsync(file: File) {
    return file.delete();
  }

  // tslint:disable-next-line no-any
  function deleteTopicAsync(topic: any) {
    return topic.delete();
  }

  function shortUUID() {
    return uuid
      .v1()
      .split('-')
      .shift();
  }

  function generateName() {
    return TESTS_PREFIX + shortUUID();
  }

  async function deleteAllBucketsAsync() {
    const [buckets] = await storage.getBuckets({prefix: TESTS_PREFIX});
    const limit = pLimit(10);
    await new Promise(resolve =>
      setTimeout(resolve, RETENTION_DURATION_SECONDS * 1000)
    );
    return Promise.all(
      buckets.map(bucket => limit(() => deleteBucketAsync(bucket)))
    );
  }

  async function deleteAllTopicsAsync() {
    const [topics] = await pubsub.getTopics();
    // tslint:disable-next-line no-any
    const filteredTopics = (topics as any[]).filter(topic => {
      return topic.name.indexOf(TESTS_PREFIX) > -1;
    });
    const limit = pLimit(10);
    return Promise.all(
      filteredTopics.map(topic => limit(() => deleteTopicAsync(topic)))
    );
  }

  async function isFilePublicAsync(file: File) {
    try {
      const [aclObject] = await file.acl.get({entity: 'allUsers'});
      if (
        (aclObject as AccessControlObject).entity === 'allUsers' &&
        (aclObject as AccessControlObject).role === 'READER'
      ) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      if (error.code === 404) {
        return false;
      } else {
        throw error;
      }
    }
  }

  async function deleteHmacKeys(
    serviceAccountEmail: string,
    projectId: string
  ) {
    const [hmacKeys] = await storage.getHmacKeys({
      serviceAccountEmail,
      projectId,
    });
    const limit = pLimit(10);
    await Promise.all(
      hmacKeys.map(hmacKey =>
        limit(async () => {
          if (hmacKey.metadata!.state === 'ACTIVE') {
            await hmacKey.setMetadata({state: 'INACTIVE'});
          }
          await hmacKey.delete();
        })
      )
    );
  }

  // tslint:disable-next-line no-any
  function createFileAsync(fileObject: any) {
    return fileObject.file.save(fileObject.contents);
  }

  function createFileWithContentPromise(content: string) {
    return bucket.file(`${generateName()}.txt`).save(content);
  }
});
