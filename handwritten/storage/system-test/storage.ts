// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it, before, beforeEach, after, afterEach} from 'mocha';
import * as crypto from 'crypto';
import * as fs from 'fs';
import fetch from 'node-fetch';
import * as FormData from 'form-data';
import pLimit = require('p-limit');
import {promisify} from 'util';
import * as path from 'path';
import * as tmp from 'tmp';
import * as uuid from 'uuid';
import {ApiError} from '../src/nodejs-common';
import {
  Storage,
  Bucket,
  File,
  AccessControlObject,
  Notification,
  DeleteBucketCallback,
  CRC32C,
  UploadOptions,
} from '../src';
import * as nock from 'nock';
import {Transform} from 'stream';
import {gzipSync} from 'zlib';

interface ErrorCallbackFunction {
  (err: Error | null): void;
}
import {PubSub} from '@google-cloud/pubsub';
import {LifecycleRule} from '../src/bucket';
import {IdempotencyStrategy} from '../src/storage';

class HTTPError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

// When set to true, skips all tests that is not compatible for
// running inside VPCSC.
const RUNNING_IN_VPCSC = !!process.env['GOOGLE_CLOUD_TESTS_IN_VPCSC'];

const UNIFORM_ACCESS_TIMEOUT = 60 * 1000; // 60s see: https://cloud.google.com/storage/docs/consistency#eventually_consistent_operations
const UNIFORM_ACCESS_WAIT_TIME = 5 * 1000; // 5s

// block all attempts to chat with the metadata server (kokoro runs on GCE)
nock('http://metadata.google.internal')
  .get(() => true)
  .replyWithError({code: 'ENOTFOUND'})
  .persist();

describe('storage', () => {
  const USER_ACCOUNT = 'user-spsawchuk@gmail.com';
  const TESTS_PREFIX = `storage-tests-${shortUUID()}-`;
  const RETENTION_DURATION_SECONDS = 10;

  const storage = new Storage({
    retryOptions: {
      idempotencyStrategy: IdempotencyStrategy.RetryAlways,
    },
  });
  const bucket = storage.bucket(generateName());

  const pubsub = new PubSub({
    projectId: process.env.PROJECT_ID,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let topic: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    empty: {
      path: path.join(__dirname, '../../system-test/data/empty-file.txt'),
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let GOOGLE_CLOUD_PROJECT: string | undefined;

    before(async () => {
      // CI authentication is done with ADC. Cache it here, restore it `after`
      GOOGLE_APPLICATION_CREDENTIALS =
        process.env.GOOGLE_APPLICATION_CREDENTIALS;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      GOOGLE_CLOUD_PROJECT = process.env.GOOGLE_CLOUD_PROJECT;

      privateBucket = bucket; // `bucket` was created in the global `before`
      privateFile = privateBucket.file('file-name');
      await privateFile.save('data');
    });

    beforeEach(() => {
      delete process.env.GOOGLE_APPLICATION_CREDENTIALS;
      delete process.env.GOOGLE_CLOUD_PROJECT;
      delete require.cache[require.resolve('../src')];

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const {Storage} = require('../src');
      storageWithoutAuth = new Storage({
        retryOptions: {
          idempotencyStrategy: IdempotencyStrategy.RetryAlways,
          retryDelayMultiplier: 3,
        },
      });
    });

    after(() => {
      process.env.GOOGLE_APPLICATION_CREDENTIALS =
        GOOGLE_APPLICATION_CREDENTIALS;
      process.env.GOOGLE_CLOUD_PROJECT = GOOGLE_APPLICATION_CREDENTIALS;
    });

    describe('public data', () => {
      before(function () {
        if (RUNNING_IN_VPCSC) this.skip();
      });

      let bucket: Bucket;

      beforeEach(() => {
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

      beforeEach(() => {
        bucket = storageWithoutAuth.bucket(privateBucket.id!);
        file = bucket.file(privateFile.id!);
      });

      it('should not download a file', async () => {
        const [isPublic] = await file.isPublic();
        assert.strictEqual(isPublic, false);
        await assert.rejects(
          file.download(),
          (err: Error) =>
            err.message.indexOf('does not have storage.objects.get') > -1
        );
      });

      it('should not upload a file', async () => {
        try {
          await file.save('new data');
        } catch (e) {
          const allowedErrorMessages = [
            /Could not load the default credentials/,
            /does not have storage\.objects\.create access/,
          ];
          assert(
            allowedErrorMessages.some(msg => msg.test((e as Error).message))
          );
        }
      });
    });
  });

  describe('acls', () => {
    describe('buckets', () => {
      // Some bucket update operations have a rate limit.
      // Introduce a delay between tests to avoid getting an error.
      beforeEach(done => {
        setTimeout(done, 1000);
      });

      it('should get access controls', async () => {
        const accessControls = await bucket.acl.get();
        assert(Array.isArray(accessControls));
      });

      it('should add entity to default access controls', async () => {
        const [accessControl] = await bucket.acl.default.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE,
        });
        assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);

        const [updatedAccessControl] = await bucket.acl.default.update({
          entity: USER_ACCOUNT,
          role: storage.acl.READER_ROLE,
        });
        assert.strictEqual(updatedAccessControl.role, storage.acl.READER_ROLE);
        await bucket.acl.default.delete({entity: USER_ACCOUNT});
      });

      it('should get default access controls', async () => {
        const accessControls = await bucket.acl.default.get();
        assert(Array.isArray(accessControls));
      });

      it('should grant an account access', async () => {
        const [accessControl] = await bucket.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE,
        });
        assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);
        const opts = {entity: USER_ACCOUNT};
        const [accessControlGet] = await bucket.acl.get(opts);
        assert.strictEqual(
          (accessControlGet as AccessControlObject).role,
          storage.acl.OWNER_ROLE
        );
        await bucket.acl.delete(opts);
      });

      it('should update an account', async () => {
        const [accessControl] = await bucket.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE,
        });
        assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);
        const [updatedAcl] = await bucket.acl.update({
          entity: USER_ACCOUNT,
          role: storage.acl.WRITER_ROLE,
        });
        assert.strictEqual(updatedAcl!.role, storage.acl.WRITER_ROLE);
        await bucket.acl.delete({entity: USER_ACCOUNT});
      });

      it('should make a bucket public', async () => {
        await bucket.makePublic();
        const [aclObject] = await bucket.acl.get({entity: 'allUsers'});
        assert.deepStrictEqual(aclObject, {
          entity: 'allUsers',
          role: 'READER',
        });
        await bucket.acl.delete({entity: 'allUsers'});
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

      it('should make a bucket private', async () => {
        try {
          await bucket.makePublic();
          await bucket.makePrivate();
          assert.rejects(bucket.acl.get({entity: 'allUsers'}), err => {
            assert.strictEqual((err as ApiError).code, 404);
            assert.strictEqual((err as ApiError).errors![0].reason, 'notFound');
          });
        } catch (err) {
          assert.ifError(err);
        }
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

      beforeEach(async () => {
        const options = {
          destination: generateName() + '.png',
        };
        [file] = await bucket.upload(FILES.logo.path, options);
      });

      afterEach(async () => {
        await file.delete();
      });

      it('should get access controls', async () => {
        const [accessControls] = await file.acl.get();
        assert(Array.isArray(accessControls));
      });

      it('should not expose default api', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual(typeof (file as any).default, 'undefined');
      });

      it('should grant an account access', async () => {
        const [accessControl] = await file.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE,
        });
        assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);
        const [accessControlGet] = await file.acl.get({entity: USER_ACCOUNT});
        assert.strictEqual(
          (accessControlGet as AccessControlObject).role,
          storage.acl.OWNER_ROLE
        );
        await file.acl.delete({entity: USER_ACCOUNT});
      });

      it('should update an account', async () => {
        const [accessControl] = await file.acl.add({
          entity: USER_ACCOUNT,
          role: storage.acl.OWNER_ROLE,
        });
        assert.strictEqual(accessControl!.role, storage.acl.OWNER_ROLE);
        const [accessControlUpdate] = await file.acl.update({
          entity: USER_ACCOUNT,
          role: storage.acl.READER_ROLE,
        });
        assert.strictEqual(accessControlUpdate!.role, storage.acl.READER_ROLE);
        await file.acl.delete({entity: USER_ACCOUNT});
      });

      it('should make a file public', async () => {
        await file.makePublic();
        const [aclObject] = await file.acl.get({entity: 'allUsers'});
        assert.deepStrictEqual(aclObject, {
          entity: 'allUsers',
          role: 'READER',
        });
        await file.acl.delete({entity: 'allUsers'});
      });

      it('should make a file private', async () => {
        const validateMakeFilePrivateRejects = (err: ApiError) => {
          assert.strictEqual(err.code, 404);
          assert.strictEqual(err!.errors![0].reason, 'notFound');
          return true;
        };
        assert.doesNotReject(file.makePublic());
        assert.doesNotReject(file.makePrivate());
        assert.rejects(
          file.acl.get({entity: 'allUsers'}),
          validateMakeFilePrivateRejects
        );
      });

      it('should set custom encryption during the upload', async () => {
        const key = '12345678901234567890123456789012';
        const [file] = await bucket.upload(FILES.big.path, {
          encryptionKey: key,
          resumable: false,
        });
        const [metadata] = await file.getMetadata();
        assert.strictEqual(
          metadata.customerEncryption.encryptionAlgorithm,
          'AES256'
        );
      });

      it('should set custom encryption in a resumable upload', async () => {
        const key = crypto.randomBytes(32);
        const [file] = await bucket.upload(FILES.big.path, {
          encryptionKey: key,
          resumable: true,
        });
        const [metadata] = await file.getMetadata();
        assert.strictEqual(
          metadata.customerEncryption.encryptionAlgorithm,
          'AES256'
        );
      });

      it('should make a file public during the upload', async () => {
        const [file] = await bucket.upload(FILES.big.path, {
          resumable: false,
          public: true,
        });

        const [aclObject] = await file.acl.get({entity: 'allUsers'});
        assert.deepStrictEqual(aclObject, {
          entity: 'allUsers',
          role: 'READER',
        });
      });

      it('should make a file public from a resumable upload', async () => {
        const [file] = await bucket.upload(FILES.big.path, {
          resumable: true,
          public: true,
        });
        const [aclObject] = await file.acl.get({entity: 'allUsers'});
        assert.deepStrictEqual(aclObject, {
          entity: 'allUsers',
          role: 'READER',
        });
      });

      it('should make a file private from a resumable upload', async () => {
        const validateMakeFilePrivateRejects = (err: ApiError) => {
          assert.strictEqual((err as ApiError)!.code, 404);
          assert.strictEqual((err as ApiError).errors![0].reason, 'notFound');
          return true;
        };
        assert.doesNotReject(
          bucket.upload(FILES.big.path, {
            resumable: true,
            private: true,
          })
        );
        assert.rejects(
          file.acl.get({entity: 'allUsers'}),
          validateMakeFilePrivateRejects
        );
      });
    });
  });

  describe('iam', () => {
    let PROJECT_ID: string;

    before(async () => {
      PROJECT_ID = await storage.authClient.getProjectId();
    });

    describe('buckets', () => {
      let bucket: Bucket;

      before(() => {
        bucket = storage.bucket(generateName());
        return bucket.create();
      });

      it('should get a policy', async () => {
        const [policy] = await bucket.iam.getPolicy();
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
      });

      it('should set a policy', async () => {
        const [policy] = await bucket.iam.getPolicy();
        policy!.bindings.push({
          role: 'roles/storage.legacyBucketReader',
          members: ['allUsers'],
        });
        const [newPolicy] = await bucket.iam.setPolicy(policy);
        const legacyBucketReaderBinding = newPolicy!.bindings.filter(
          binding => {
            return binding.role === 'roles/storage.legacyBucketReader';
          }
        )[0];
        assert(legacyBucketReaderBinding.members.includes('allUsers'));
      });

      it('should get-modify-set a conditional policy', async () => {
        // Uniform-bucket-level-access is required to use IAM Conditions.
        await bucket.setMetadata({
          iamConfiguration: {
            uniformBucketLevelAccess: {
              enabled: true,
            },
          },
        });

        const [policy] = await bucket.iam.getPolicy();

        const serviceAccount = (await storage.authClient.getCredentials())
          .client_email;
        const conditionalBinding = {
          role: 'roles/storage.objectViewer',
          members: [`serviceAccount:${serviceAccount}`],
          condition: {
            title: 'always-true',
            description: 'this condition is always effective',
            expression: 'true',
          },
        };

        policy.version = 3;
        policy.bindings.push(conditionalBinding);

        await bucket.iam.setPolicy(policy);

        const [newPolicy] = await bucket.iam.getPolicy({
          requestedPolicyVersion: 3,
        });
        assert.deepStrictEqual(newPolicy.bindings, policy.bindings);
      });

      it('should test the iam permissions', async () => {
        const testPermissions = [
          'storage.buckets.get',
          'storage.buckets.getIamPolicy',
        ];
        const [permissions] = await bucket.iam.testPermissions(testPermissions);
        assert.deepStrictEqual(permissions, {
          'storage.buckets.get': true,
          'storage.buckets.getIamPolicy': true,
        });
      });
    });
  });

  describe('public access prevention', () => {
    let bucket: Bucket;

    const PUBLIC_ACCESS_PREVENTION_INHERITED = 'inherited';
    const PUBLIC_ACCESS_PREVENTION_ENFORCED = 'enforced';

    const createBucket = () => {
      bucket = storage.bucket(generateName());
      return bucket.create();
    };

    const setPublicAccessPrevention = (
      bucket: Bucket,
      configuration: string
    ) => {
      return bucket.setMetadata({
        iamConfiguration: {
          publicAccessPrevention: configuration,
        },
      });
    };

    const validateUnexpectedPublicAccessPreventionValueError = (
      err: ApiError
    ) => {
      assert.strictEqual(err.code, 400);
      return true;
    };

    const validateConfiguringPublicAccessWhenPAPEnforcedError = (
      err: ApiError
    ) => {
      assert.strictEqual(err.code, 412);
      return true;
    };

    beforeEach(createBucket);

    it('inserts a bucket with enforced public access prevention', async () => {
      await setPublicAccessPrevention(
        bucket,
        PUBLIC_ACCESS_PREVENTION_ENFORCED
      );
      const [bucketMetadata] = await bucket.getMetadata();
      const publicAccessPreventionStatus =
        bucketMetadata.iamConfiguration.publicAccessPrevention;
      return assert.strictEqual(
        publicAccessPreventionStatus,
        PUBLIC_ACCESS_PREVENTION_ENFORCED
      );
    });

    describe('enforced public access prevention behavior', () => {
      let bucket: Bucket;
      let file: File;

      before(async () => {
        bucket = storage.bucket(generateName());
        await bucket.create();

        const name = 'enforcedPAPBucketFile';
        const contents =
          'Enforced public access prevention bucket file contents';
        file = bucket.file(name);
        await file.save(contents);

        await setPublicAccessPrevention(
          bucket,
          PUBLIC_ACCESS_PREVENTION_ENFORCED
        );
      });

      it('bucket cannot be made public', async () => {
        return assert.rejects(
          () => bucket.makePublic(),
          validateConfiguringPublicAccessWhenPAPEnforcedError
        );
      });

      it('object cannot be made public via ACL', async () => {
        return assert.rejects(
          () => file.makePublic(),
          validateConfiguringPublicAccessWhenPAPEnforcedError
        );
      });
    });

    it('inserts a bucket with inherited public access prevention', async () => {
      await setPublicAccessPrevention(
        bucket,
        PUBLIC_ACCESS_PREVENTION_INHERITED
      );
      const [bucketMetadata] = await bucket.getMetadata();
      const publicAccessPreventionStatus =
        bucketMetadata.iamConfiguration.publicAccessPrevention;
      return assert.strictEqual(
        publicAccessPreventionStatus,
        PUBLIC_ACCESS_PREVENTION_INHERITED
      );
    });

    it('makes public a bucket with inherited public access prevention', async () => {
      await setPublicAccessPrevention(
        bucket,
        PUBLIC_ACCESS_PREVENTION_INHERITED
      );
      return assert.ok(() => bucket.makePublic());
    });

    it('should fail to insert a bucket with unexpected public access prevention value', async () => {
      await assert.rejects(
        () => setPublicAccessPrevention(bucket, 'unexpected value'),
        validateUnexpectedPublicAccessPreventionValueError
      );
    });

    it('UBLA modification on PAP bucket does not affect pap setting', async () => {
      const [bucketMetadata] = await bucket.getMetadata();
      const publicAccessPreventionStatus =
        bucketMetadata.iamConfiguration.publicAccessPrevention;
      await bucket.setMetadata({
        iamConfiguration: {
          uniformBucketLevelAccess: {
            enabled: true,
          },
        },
      });
      const [updatedBucketMetadata] = await bucket.getMetadata();
      return assert.strictEqual(
        updatedBucketMetadata.iamConfiguration.publicAccessPrevention,
        publicAccessPreventionStatus
      );
    });

    it('PAP modification on UBLA bucket should not affect UBLA setting', async () => {
      await bucket.setMetadata({
        iamConfiguration: {
          uniformBucketLevelAccess: {
            enabled: true,
          },
        },
      });
      const [bucketMetadata] = await bucket.getMetadata();
      const ublaSetting =
        bucketMetadata.iamConfiguration.uniformBucketLevelAccess.enabled;
      await setPublicAccessPrevention(
        bucket,
        PUBLIC_ACCESS_PREVENTION_INHERITED
      );
      const [updatedBucketMetadata] = await bucket.getMetadata();
      return assert.strictEqual(
        updatedBucketMetadata.iamConfiguration.uniformBucketLevelAccess.enabled,
        ublaSetting
      );
    });
  });

  describe('turbo replication', () => {
    let bucket: Bucket;

    const RPO_ASYNC_TURBO = 'ASYNC_TURBO';
    const RPO_DEFAULT = 'DEFAULT';

    const createBucket = () => {
      bucket = storage.bucket(generateName());
      return bucket.create({location: 'NAM4'});
    };

    const setTurboReplication = (
      bucket: Bucket,
      turboReplicationConfiguration: string
    ) => {
      return bucket.setMetadata({
        rpo: turboReplicationConfiguration,
      });
    };

    beforeEach(createBucket);

    it("sets bucket's RPO to ASYNC_TURBO", async () => {
      await setTurboReplication(bucket, RPO_ASYNC_TURBO);
      const [bucketMetadata] = await bucket.getMetadata();
      return assert.strictEqual(bucketMetadata.rpo, RPO_ASYNC_TURBO);
    });

    it("sets a bucket's RPO to DEFAULT", async () => {
      await setTurboReplication(bucket, RPO_DEFAULT);
      const [bucketMetadata] = await bucket.getMetadata();
      return assert.strictEqual(bucketMetadata.rpo, RPO_DEFAULT);
    });
  });

  describe('dual-region', () => {
    let bucket: Bucket;

    const LOCATION = 'US';
    const REGION1 = 'US-EAST1';
    const REGION2 = 'US-WEST1';

    beforeEach(() => {
      bucket = storage.bucket(generateName());
    });

    it('creates a dual-region bucket', async () => {
      await bucket.create({
        location: LOCATION,
        customPlacementConfig: {
          dataLocations: [REGION1, REGION2],
        },
      });

      const [exists] = await bucket.exists();
      assert.strictEqual(exists, true);

      const [bucketMetadata] = await bucket.getMetadata();

      assert.strictEqual(bucketMetadata.location, LOCATION);

      assert(bucketMetadata.customPlacementConfig);
      assert(Array.isArray(bucketMetadata.customPlacementConfig.dataLocations));

      const dataLocations = bucketMetadata.customPlacementConfig.dataLocations;

      assert(dataLocations.includes(REGION1));
      assert(dataLocations.includes(REGION2));

      assert.strictEqual(bucketMetadata.locationType, 'dual-region');
    });
  });

  describe('uniform bucket-level access', () => {
    let bucket: Bucket;

    const customAcl = {
      entity: USER_ACCOUNT,
      role: storage.acl.OWNER_ROLE,
    };

    const createBucket = () => {
      bucket = storage.bucket(generateName());
      return bucket.create();
    };

    const setUniformBucketLevelAccess = (bucket: Bucket, enabled: boolean) => {
      return bucket.setMetadata({
        iamConfiguration: {
          uniformBucketLevelAccess: {
            enabled,
          },
        },
      });
    };

    describe('files', () => {
      before(createBucket);

      it('can be written to the bucket by project owner w/o configuration', async () => {
        await setUniformBucketLevelAccess(bucket, true);
        const file = bucket.file(`file-${uuid.v4()}`);
        return assert.doesNotReject(() => file.save('data'));
      });
    });

    describe('disables file ACL', () => {
      let file: File;

      const validateUniformBucketLevelAccessEnabledError = (err: ApiError) => {
        assert.strictEqual(err.code, 400);
        return true;
      };

      before(async () => {
        await createBucket();
        await setUniformBucketLevelAccess(bucket, true);

        file = bucket.file(`file-${uuid.v4()}`);
        await file.save('data', {resumable: false});
      });

      it('should fail to get file ACL', async () => {
        // Setting uniform bucket level access is eventually consistent and may take up to a minute to be reflected
        for (;;) {
          try {
            await file.acl.get();
            await new Promise(res => setTimeout(res, UNIFORM_ACCESS_WAIT_TIME));
          } catch (err) {
            assert(
              validateUniformBucketLevelAccessEnabledError(err as ApiError)
            );
            break;
          }
        }
      }).timeout(UNIFORM_ACCESS_TIMEOUT);

      it('should fail to update file ACL', async () => {
        // Setting uniform bucket level access is eventually consistent and may take up to a minute to be reflected
        for (;;) {
          try {
            await file.acl.update(customAcl);
            await new Promise(res => setTimeout(res, UNIFORM_ACCESS_WAIT_TIME));
          } catch (err) {
            assert(
              validateUniformBucketLevelAccessEnabledError(err as ApiError)
            );
            break;
          }
        }
      }).timeout(UNIFORM_ACCESS_TIMEOUT);
    });

    describe('preserves bucket/file ACL over uniform bucket-level access on/off', () => {
      beforeEach(createBucket);

      it('should preserve default bucket ACL', async () => {
        await bucket.acl.default.update(customAcl);
        const [aclBefore] = await bucket.acl.default.get();

        await setUniformBucketLevelAccess(bucket, true);
        await setUniformBucketLevelAccess(bucket, false);

        // Setting uniform bucket level access is eventually consistent and may take up to a minute to be reflected
        for (;;) {
          try {
            const [aclAfter] = await bucket.acl.default.get();
            assert.deepStrictEqual(aclAfter, aclBefore);
            break;
          } catch {
            await new Promise(res => setTimeout(res, UNIFORM_ACCESS_WAIT_TIME));
          }
        }
      }).timeout(UNIFORM_ACCESS_TIMEOUT);

      it('should preserve file ACL', async () => {
        const file = bucket.file(`file-${uuid.v4()}`);
        await file.save('data', {resumable: false});

        await file.acl.update(customAcl);
        const [aclBefore] = await file.acl.get();

        await setUniformBucketLevelAccess(bucket, true);
        await setUniformBucketLevelAccess(bucket, false);

        // Setting uniform bucket level access is eventually consistent and may take up to a minute to be reflected
        for (;;) {
          try {
            const [aclAfter] = await file.acl.get();
            assert.deepStrictEqual(aclAfter, aclBefore);
            break;
          } catch {
            await new Promise(res => setTimeout(res, UNIFORM_ACCESS_WAIT_TIME));
          }
        }
      }).timeout(UNIFORM_ACCESS_TIMEOUT);
    });
  });

  describe('unicode validation', () => {
    before(function () {
      if (RUNNING_IN_VPCSC) this.skip();
    });

    let bucket: Bucket;

    before(async () => {
      [bucket] = await storage.createBucket(generateName());
    });

    // Normalization form C: a single character for e-acute;
    // URL should end with Cafe%CC%81
    it('should not perform normalization form C', async () => {
      const name = 'Caf\u00e9';
      const expectedContents = 'Normalization Form C';

      const file = bucket.file(name);
      await file.save(expectedContents);

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
    it('should not perform normalization form D', async () => {
      const name = 'Cafe\u0301';
      const expectedContents = 'Normalization Form D';

      const file = bucket.file(name);
      await file.save(expectedContents);

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

    it('should get buckets', async () => {
      const [buckets] = await storage.getBuckets();
      const createdBuckets = buckets.filter(bucket => {
        return bucketsToCreate.indexOf(bucket.name) > -1;
      });
      assert.strictEqual(createdBuckets.length, bucketsToCreate.length);
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
    it('should allow setting metadata on a bucket', async () => {
      const metadata = {
        website: {
          mainPageSuffix: 'http://fakeuri',
          notFoundPage: 'http://fakeuri/404.html',
        },
      };
      const [meta] = await bucket.setMetadata(metadata);
      assert.deepStrictEqual(meta.website, metadata.website);
    });

    it('should allow changing the storage class', async () => {
      const bucket = storage.bucket(generateName());
      await bucket.create();
      let [metadata] = await bucket.getMetadata();
      assert.strictEqual(metadata.storageClass, 'STANDARD');
      await bucket.setStorageClass('coldline');
      [metadata] = await bucket.getMetadata();
      assert.strictEqual(metadata.storageClass, 'COLDLINE');
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

      beforeEach(async () => {
        await bucket.deleteLabels();
      });

      it('should set labels', async () => {
        await bucket.setLabels(LABELS);
        const [labels] = await bucket.getLabels();
        assert.deepStrictEqual(labels, LABELS);
      });

      it('should update labels', async () => {
        const newLabels = {
          siblinglabel: 'labelvalue',
        };
        await bucket.setLabels(LABELS);
        await bucket.setLabels(newLabels);
        const [labels] = await bucket.getLabels();
        assert.deepStrictEqual(labels, Object.assign({}, LABELS, newLabels));
      });

      it('should delete a single label', async () => {
        if (Object.keys(LABELS).length <= 1) {
          throw new Error('Maintainer Error: `LABELS` needs 2 labels.');
        }

        const labelKeyToDelete = Object.keys(LABELS)[0];
        await bucket.setLabels(LABELS);
        await bucket.deleteLabels(labelKeyToDelete);
        const [labels] = await bucket.getLabels();
        const expectedLabels = Object.assign({}, LABELS);
        delete (expectedLabels as {[index: string]: {}})[labelKeyToDelete];

        assert.deepStrictEqual(labels, expectedLabels);
      });

      it('should delete all labels', async () => {
        await bucket.deleteLabels();
        const [labels] = await bucket.getLabels();
        assert.deepStrictEqual(labels, {});
      });
    });
  });

  describe('bucket object lifecycle management', () => {
    it('should add a rule', async () => {
      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          age: 30,
          isLive: true,
        },
      });
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
        action: 'setStorageClass',
        condition: {
          age: 60,
          isLive: true,
        },
        storageClass: 'coldline',
      });
      assert.strictEqual(
        bucket.metadata.lifecycle.rule.length,
        numExistingRules + 2
      );
    });

    it('should add a prefix rule', async () => {
      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          matchesPrefix: [TESTS_PREFIX],
        },
      });

      assert(
        bucket.metadata.lifecycle.rule.some(
          (rule: LifecycleRule) =>
            typeof rule.action === 'object' &&
            rule.action.type === 'Delete' &&
            typeof rule.condition.matchesPrefix === 'object' &&
            (rule.condition.matchesPrefix as string[]).length === 1 &&
            Array.isArray(rule.condition.matchesPrefix)
        )
      );
    });

    it('should add a suffix rule', async () => {
      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          matchesSuffix: [TESTS_PREFIX, 'test_suffix'],
        },
      });

      assert(
        bucket.metadata.lifecycle.rule.some(
          (rule: LifecycleRule) =>
            typeof rule.action === 'object' &&
            rule.action.type === 'Delete' &&
            Array.isArray(rule.condition.matchesPrefix)
        )
      );
    });

    it('should convert a rule with createdBefore to a date in string', async () => {
      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          createdBefore: new Date('2018'),
        },
      });
      const rules = [].slice.call(bucket.metadata.lifecycle.rule);
      assert.deepStrictEqual(rules.pop(), {
        action: {
          type: 'Delete',
        },
        condition: {
          createdBefore: '2018-01-01',
        },
      });
    });

    it('should add a noncurrent time rule', async () => {
      const NONCURRENT_TIME_BEFORE = '2020-01-01';

      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          noncurrentTimeBefore: new Date(NONCURRENT_TIME_BEFORE),
          daysSinceNoncurrentTime: 100,
        },
      });

      assert(
        bucket.metadata.lifecycle.rule.some(
          (rule: LifecycleRule) =>
            typeof rule.action === 'object' &&
            rule.action.type === 'Delete' &&
            rule.condition.noncurrentTimeBefore === NONCURRENT_TIME_BEFORE &&
            rule.condition.daysSinceNoncurrentTime === 100
        )
      );
    });

    it('should add a custom time rule', async () => {
      const CUSTOM_TIME_BEFORE = '2020-01-01';

      await bucket.addLifecycleRule({
        action: 'delete',
        condition: {
          customTimeBefore: new Date(CUSTOM_TIME_BEFORE),
          daysSinceCustomTime: 100,
        },
      });

      assert(
        bucket.metadata.lifecycle.rule.some(
          (rule: LifecycleRule) =>
            typeof rule.action === 'object' &&
            rule.action.type === 'Delete' &&
            rule.condition.customTimeBefore === CUSTOM_TIME_BEFORE &&
            rule.condition.daysSinceCustomTime === 100
        )
      );
    });

    it('should remove all existing rules', async () => {
      await bucket.setMetadata({
        lifecycle: null,
      });

      assert.strictEqual(bucket.metadata.lifecycle, undefined);
    });
  });

  describe('cors configuration', () => {
    const corsEntry = [
      {
        maxAgeSeconds: 1600,
      },
      {
        maxAgeSeconds: 3600,
        method: ['GET', 'POST'],
        origin: ['*'],
        responseHeader: ['Content-Type', 'Access-Control-Allow-Origin'],
      },
    ];

    describe('bucket', () => {
      it('should create a bucket with a CORS configuration when passed in', async () => {
        const bucket = storage.bucket(generateName());
        await storage.createBucket(bucket.name, {
          cors: corsEntry,
        });

        await bucket.getMetadata();
        assert.deepStrictEqual(bucket.metadata.cors, corsEntry);
      });

      it('should set a CORS configuration', async () => {
        const bucket = storage.bucket(generateName());
        await bucket.create();
        await bucket.setCorsConfiguration(corsEntry);
        await bucket.getMetadata();
        assert.deepStrictEqual(bucket.metadata.cors, corsEntry);
      });

      it('should remove a CORS configuration', async () => {
        const bucket = storage.bucket(generateName());
        await bucket.create();
        await bucket.setCorsConfiguration(corsEntry);
        await bucket.getMetadata();
        assert.deepStrictEqual(bucket.metadata.cors, corsEntry);

        // And now test the removing
        await bucket.setCorsConfiguration([]);
        assert.ok(!bucket.metadata.cors);
      });
    });
  });

  describe('bucket versioning', () => {
    describe('bucket', () => {
      it('should create a bucket with versioning enabled', async () => {
        const bucket = storage.bucket(generateName());
        await storage.createBucket(bucket.name, {
          versioning: {
            enabled: true,
          },
        });
        await bucket.getMetadata();
        assert.strictEqual(bucket.metadata.versioning.enabled, true);
      });

      it('should by default create a bucket without versioning set', async () => {
        const bucket = storage.bucket(generateName());
        await storage.createBucket(bucket.name);
        await bucket.getMetadata();
        assert.strictEqual(bucket.metadata.versioning, undefined);
      });
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
      before(async () => {
        await BUCKET.create({
          retentionPolicy: {
            retentionPeriod: BUCKET_RETENTION_PERIOD,
          },
        });
        await FILE.save('data');
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

      it('should get an expiration date', async () => {
        const [expirationDate] = await FILE.getExpirationDate();
        assert(expirationDate instanceof Date);
      });
    });

    describe('operations on held objects', () => {
      const BUCKET = storage.bucket(generateName());
      const FILES: File[] = [];

      const RETENTION_PERIOD_SECONDS = 5; // Each test has this much time!

      async function createFile(): Promise<File> {
        const file = BUCKET.file(generateName());
        FILES.push(file);
        await file.save('data');
        return file;
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

      before(async () => {
        await BUCKET.create({
          retentionPolicy: {
            retentionPeriod: RETENTION_PERIOD_SECONDS,
          },
        });
      });

      after(() => {
        return deleteFilesAsync();
      });

      it('should block an overwrite request', async () => {
        const file = await createFile();
        assert.rejects(file.save('new data'), (err: ApiError) => {
          assert.strictEqual(err.code, 403);
        });
      });

      it('should block a delete request', async () => {
        const file = await createFile();
        assert.rejects(file.delete(), (err: ApiError) => {
          assert.strictEqual(err.code, 403);
        });
      });
    });
  });

  describe('bucket logging', () => {
    const PREFIX = 'sys-test';

    it('should enable logging on current bucket by default', async () => {
      const [metadata] = await bucket.enableLogging({prefix: PREFIX});
      assert.deepStrictEqual(metadata.logging, {
        logBucket: bucket.id,
        logObjectPrefix: PREFIX,
      });
    });

    it('should enable logging on another bucket', async () => {
      const bucketForLogging = storage.bucket(generateName());
      await bucketForLogging.create();

      const [metadata] = await bucket.enableLogging({
        bucket: bucketForLogging,
        prefix: PREFIX,
      });
      assert.deepStrictEqual(metadata.logging, {
        logBucket: bucketForLogging.id,
        logObjectPrefix: PREFIX,
      });
    });
  });

  describe('requester pays', () => {
    const HAS_2ND_PROJECT =
      process.env.GCN_STORAGE_2ND_PROJECT_ID !== undefined;
    let bucket: Bucket;

    before(async () => {
      bucket = storage.bucket(generateName());

      await bucket.create({
        requesterPays: true,
      });
    });

    after(async () => {
      await bucket.delete();
    });

    it('should have enabled requesterPays functionality', async () => {
      const [metadata] = await bucket.getMetadata();
      assert.strictEqual(metadata.billing.requesterPays, true);
    });

    // These tests will verify that the requesterPays functionality works from
    // the perspective of another project.
    (HAS_2ND_PROJECT ? describe : describe.skip)('existing bucket', () => {
      const storageNonAllowList = new Storage({
        projectId: process.env.GCN_STORAGE_2ND_PROJECT_ID,
        keyFilename: process.env.GCN_STORAGE_2ND_PROJECT_KEY,
        retryOptions: {
          idempotencyStrategy: IdempotencyStrategy.RetryAlways,
          retryDelayMultiplier: 3,
        },
      });
      // the source bucket, which will have requesterPays enabled.
      let bucket: Bucket;
      // the bucket object from the requesting user.
      let bucketNonAllowList: Bucket;

      async function isRequesterPaysEnabled(): Promise<boolean> {
        const [metadata] = await bucket.getMetadata();
        const billing = metadata.billing || {};
        return !!billing && billing.requesterPays === true;
      }

      before(async () => {
        bucket = storage.bucket(generateName());
        bucketNonAllowList = storageNonAllowList.bucket(bucket.name);
        await bucket.create();
      });

      it('should enable requesterPays', async () => {
        let isEnabled = await isRequesterPaysEnabled();
        assert.strictEqual(isEnabled, false);
        await bucket.enableRequesterPays();
        isEnabled = await isRequesterPaysEnabled();
        assert.strictEqual(isEnabled, true);
      });

      it('should disable requesterPays', async () => {
        await bucket.enableRequesterPays();
        let isEnabled = await isRequesterPaysEnabled();
        assert.strictEqual(isEnabled, true);
        await bucket.disableRequesterPays();
        isEnabled = await isRequesterPaysEnabled();
        assert.strictEqual(isEnabled, false);
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
          file = bucketNonAllowList.file(generateName());

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
          deleteBucket(bucketNonAllowList, USER_PROJECT_OPTIONS, done);
        });

        beforeEach(() => {
          bucketNonAllowList = storageNonAllowList.bucket(bucket.name);
          file = bucketNonAllowList.file(file.name);
        });

        /**
         * A type for requester pays functions. The `options` parameter
         *
         * Using `typeof USER_PROJECT_OPTIONS` ensures the function should
         * support requester pays options, otherwise will fail early at build-
         * time rather than runtime.
         */
        type requesterPaysFunction<
          T = {} | typeof USER_PROJECT_OPTIONS,
          R = {} | void
        > = (options: T) => Promise<R>;

        /**
         * Accepts a function and runs 2 tests - a test where the requester pays
         * option is absent and another where it is present:
         * - The missing requester pays test will assert the expected error
         * - The added request pays test will return the function's result
         *
         * @param testFunction The function/method to test.
         * @returns The result of the successful request pays operation.
         */
        async function requesterPaysDoubleTest<F extends requesterPaysFunction>(
          testFunction: F
        ): Promise<ReturnType<F>> {
          const failureMessage =
            'Bucket is a requester pays bucket but no user project provided.';

          let expectedError: unknown = null;

          try {
            // Should raise an error on requester pays bucket
            await testFunction({});
          } catch (e) {
            expectedError = e;
          }

          assert(expectedError instanceof Error);
          assert(
            expectedError.message.includes(failureMessage),
            `Expected '${expectedError.message}' to include '${failureMessage}'`
          );

          // Validate the desired functionality
          const results = await testFunction(USER_PROJECT_OPTIONS);
          return results as ReturnType<F>;
        }

        it('bucket#combine', async () => {
          const files = [
            {file: bucketNonAllowList.file('file-one.txt'), contents: '123'},
            {file: bucketNonAllowList.file('file-two.txt'), contents: '456'},
          ];

          await Promise.all(files.map(file => createFileAsync(file)));

          const sourceFiles = files.map(x => x.file);
          const destinationFile = bucketNonAllowList.file('file-one-n-two.txt');
          await bucketNonAllowList.combine(
            sourceFiles,
            destinationFile,
            USER_PROJECT_OPTIONS
          );

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function createFileAsync(fileObject: any) {
            return fileObject.file.save(
              fileObject.contents,
              USER_PROJECT_OPTIONS
            );
          }
        });

        it('bucket#createNotification', async () => {
          const [notif] = await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.createNotification(topicName, options);
          });

          notification = notif;
        });

        it('bucket#exists', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.exists(options);
          });
        });

        it('bucket#get', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.get(options);
          });
        });

        it('bucket#getMetadata', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.getMetadata(options);
          });
        });

        it('bucket#getNotifications', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.getNotifications(options);
          });
        });

        it('bucket#makePrivate', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.makePrivate(options);
          });
        });

        it('bucket#setMetadata', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.setMetadata({newMetadata: true}, options);
          });
        });

        it('bucket#setStorageClass', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.setStorageClass(
              'multi-regional',
              options
            );
          });
        });

        it('bucket#upload', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.upload(FILES.big.path, options);
          });
        });

        it('file#copy', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.copy('new-file.txt', options);
          });
        });

        it('file#createReadStream', async () => {
          await requesterPaysDoubleTest(async options => {
            await new Promise((resolve, reject) => {
              return file
                .createReadStream(options)
                .on('error', reject)
                .on('end', resolve)
                .on('data', () => {});
            });
          });
        });

        it('file#createResumableUpload', async () => {
          await requesterPaysDoubleTest(async options => {
            const [uri] = await file.createResumableUpload(options);

            await new Promise((resolve, reject) => {
              return file
                .createWriteStream({uri})
                .on('error', reject)
                .on('finish', resolve)
                .end('Test data');
            });
          });
        });

        it('file#download', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.download(options);
          });
        });

        it('file#exists', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.exists(options);
          });
        });

        it('file#get', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.get(options);
          });
        });

        it('file#getMetadata', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.getMetadata(options);
          });
        });

        it('file#makePrivate', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.makePrivate(options);
          });
        });

        it('file#move', async () => {
          await requesterPaysDoubleTest(async options => {
            const newFile = bucketNonAllowList.file(generateName());

            await file.move(newFile, options);

            // Re-create the file. The tests need it.
            await file.save('newcontent', options);
          });
        });

        it('file#rename', async () => {
          await requesterPaysDoubleTest(async options => {
            const newFile = bucketNonAllowList.file(generateName());

            await file.rename(newFile, options);

            // Re-create the file. The tests need it.
            await file.save('newcontent', options);
          });
        });

        it('file#setMetadata', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.setMetadata({newMetadata: true}, options);
          });
        });

        it('file#setStorageClass', async () => {
          await requesterPaysDoubleTest(async options => {
            return file.setStorageClass('multi-regional', options);
          });
        });

        it('acl#add', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.acl.add({
              entity: USER_ACCOUNT,
              role: storage.acl.OWNER_ROLE,
              ...options,
            });
          });
        });

        it('acl#update', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.acl.update({
              entity: USER_ACCOUNT,
              role: storage.acl.WRITER_ROLE,
              ...options,
            });
          });
        });

        it('acl#get', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.acl.get({
              entity: USER_ACCOUNT,
              ...options,
            });
          });
        });

        it('acl#delete', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.acl.delete({
              entity: USER_ACCOUNT,
              ...options,
            });
          });
        });

        it('iam#getPolicy', async () => {
          await requesterPaysDoubleTest(async options => {
            return bucketNonAllowList.iam.getPolicy(options);
          });
        });

        it('iam#setPolicy', async () => {
          await requesterPaysDoubleTest(async options => {
            const [policy] = await bucket.iam.getPolicy();

            policy.bindings.push({
              role: 'roles/storage.objectViewer',
              members: ['allUsers'],
            });

            return bucketNonAllowList.iam.setPolicy(policy, options);
          });
        });

        it('iam#testPermissions', async () => {
          await requesterPaysDoubleTest(async options => {
            const tests = ['storage.buckets.delete'];

            return bucketNonAllowList.iam.testPermissions(tests, options);
          });
        });

        it('notification#get', async () => {
          await requesterPaysDoubleTest(async options => {
            return notification.get(options);
          });
        });

        it('notification#getMetadata', async () => {
          await requesterPaysDoubleTest(async options => {
            return notification.getMetadata(options);
          });
        });

        it('notification#delete', async () => {
          await requesterPaysDoubleTest(async options => {
            return notification.delete(options);
          });
        });
      });
    });
  });

  describe('write, read, and remove files', () => {
    const FILE_DOWNLOAD_START_BYTE = 0;
    const FILE_DOWNLOAD_END_BYTE = 20;

    before(async () => {
      function setHash(filesKey: string) {
        const file = FILES[filesKey];
        const hash = crypto.createHash('md5');

        return new Promise<void>(resolve =>
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

    it('should throw original error message on non JSON response on large metadata', async () => {
      const largeCustomMeta = (size: number) => {
        let str = '';
        for (let i = 0; i < size; i++) {
          str += 'a';
        }
        return str;
      };

      const file = bucket.file('large-metadata-error-test');
      await assert.rejects(
        file.save('test', {
          resumable: false,
          metadata: {
            metadata: {
              custom: largeCustomMeta(2.1e6),
            },
          },
        }),
        /Metadata part is too large/
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

    it('should download a file to memory', async () => {
      const fileContents = fs.readFileSync(FILES.big.path);
      const [file] = await bucket.upload(FILES.big.path);
      const [remoteContents] = await file.download();
      assert.strictEqual(String(fileContents), String(remoteContents));
    });

    it('should download an entire file if range `start:0` is provided', async () => {
      const fileContents = fs.readFileSync(FILES.big.path);
      const [file] = await bucket.upload(FILES.big.path);
      const [result] = await file.download({start: 0});

      assert.strictEqual(result.toString(), fileContents.toString());
    });

    it('should download an empty file', async () => {
      const fileContents = fs.readFileSync(FILES.empty.path);
      const [file] = await bucket.upload(FILES.empty.path);
      const [remoteContents] = await file.download();
      assert.strictEqual(String(fileContents), String(remoteContents));
    });

    it('should download the specified bytes of a file', async () => {
      const fileContents = fs.readFileSync(FILES.big.path);
      const [file] = await bucket.upload(FILES.big.path);
      const [remoteContents] = await file!.download({
        start: FILE_DOWNLOAD_START_BYTE,
        end: FILE_DOWNLOAD_END_BYTE,
      });
      assert.strictEqual(
        String(fileContents).slice(0, 20),
        String(remoteContents)
      );
    });

    it('should handle non-network errors', async () => {
      const file = bucket.file('hi.jpg');
      assert.rejects(file.download(), (err: ApiError) => {
        assert.strictEqual((err as ApiError).code, 404);
      });
    });

    it('should gzip a file on the fly and download it', async () => {
      const options = {
        gzip: true,
      };
      const expectedContents = fs.readFileSync(FILES.html.path, 'utf-8');
      const [file] = await bucket.upload(FILES.html.path, options);
      const [contents] = await file.download();
      assert.strictEqual(contents.toString(), expectedContents);
      await file.delete();
    });

    it('should upload a gzipped file and download it', async () => {
      const options = {
        metadata: {
          contentEncoding: 'gzip',
          contentType: 'text/html',
        },
      };

      const expectedContents = fs.readFileSync(FILES.html.path, 'utf-8');

      // Prepare temporary gzip file for upload
      tmp.setGracefulCleanup();
      const {name: tmpGzFilePath} = tmp.fileSync({postfix: '.gz'});
      fs.writeFileSync(tmpGzFilePath, gzipSync(expectedContents));

      const file: File = await new Promise((resolve, reject) => {
        bucket.upload(tmpGzFilePath, options, (err, file) => {
          if (err || !file) return reject(err);
          resolve(file);
        });
      });

      const contents: Buffer = await new Promise((resolve, reject) => {
        return file.download((error, content) => {
          if (error) return reject(error);
          resolve(content);
        });
      });

      assert.strictEqual(contents.toString(), expectedContents);
      await file.delete();
    });

    it('should skip validation if file is served decompressed', async () => {
      const filename = 'logo-gzipped.png';
      await bucket.upload(FILES.logo.path, {destination: filename, gzip: true});

      tmp.setGracefulCleanup();
      const {name: tmpFilePath} = tmp.fileSync();

      const file = bucket.file(filename);

      await new Promise((resolve, reject) => {
        file
          .createReadStream()
          .on('error', reject)
          .on('response', raw => {
            assert.strictEqual(
              raw.toJSON().headers['content-encoding'],
              undefined
            );
          })
          .pipe(fs.createWriteStream(tmpFilePath))
          .on('error', reject)
          .on('finish', resolve);
      });

      await file.delete();
    });

    describe('simple write', () => {
      it('should save arbitrary data', async () => {
        const file = bucket.file('TestFile');
        const data = 'hello';
        await file!.save(data);
        const [contents] = await file!.download();
        assert.strictEqual(contents.toString(), data);
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

      it('should write metadata', async () => {
        const options = {
          metadata: {contentType: 'image/png'},
          resumable: false,
        };
        const [file] = await bucket.upload(FILES.logo.path, options);
        const [metadata] = await file.getMetadata();
        assert.strictEqual(metadata.contentType, options.metadata.contentType);
        await file.delete();
      });

      it('should resume an upload after an interruption', done => {
        fs.stat(FILES.big.path, (err, metadata) => {
          assert.ifError(err);

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

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function upload(opts: any, callback: ErrorCallbackFunction) {
            const ws = file.createWriteStream();
            let sizeStreamed = 0;

            const streamTransform = new Transform({
              transform(chunk, enc, next) {
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
              },
            });
            fs.createReadStream(FILES.big.path)
              .pipe(streamTransform)
              .pipe(ws)
              .on('error', callback)
              .on('finish', callback);
          }
        });
      });

      it('should write/read/remove from a buffer', done => {
        tmp.setGracefulCleanup();
        tmp.file((err, tmpFilePath) => {
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

      before(async () => {
        await file.save('secret data', {resumable: false});
      });

      it('should not get the hashes from the unencrypted file', async () => {
        const [metadata] = await unencryptedFile.getMetadata();
        assert.strictEqual(metadata.crc32c, undefined);
      });

      it('should get the hashes from the encrypted file', async () => {
        const [metadata] = await file.getMetadata();
        assert.notStrictEqual(metadata.crc32c, undefined);
      });

      it('should not download from the unencrypted file', async () => {
        assert.rejects(unencryptedFile.download(), (err: ApiError) => {
          assert(
            err!.message.indexOf(
              [
                'The target object is encrypted by a',
                'customer-supplied encryption key.',
              ].join(' ')
            ) > -1
          );
        });
      });

      it('should download from the encrytped file', async () => {
        const [contents] = await file.download();
        assert.strictEqual(contents.toString(), 'secret data');
      });

      it('should rotate encryption keys', async () => {
        const newEncryptionKey = crypto.randomBytes(32);
        await file.rotateEncryptionKey(newEncryptionKey);
        const [contents] = await file.download();
        assert.strictEqual(contents.toString(), 'secret data');
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

        before(async () => {
          file = bucket.file('kms-encrypted-file', {kmsKeyName});
          await file.save(FILE_CONTENTS, {resumable: false});
        });

        it('should have set kmsKeyName on created file', async () => {
          const [metadata] = await file.getMetadata();

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
        });

        it('should set kmsKeyName on resumable uploaded file', async () => {
          const file = bucket.file('resumable-file', {kmsKeyName});
          await file.save(FILE_CONTENTS, {resumable: true});
          const [metadata] = await file.getMetadata();

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
        });

        it('should rotate encryption keys', async () => {
          const cryptoKeyId = generateName();
          const newKmsKeyName = generateKmsKeyName(cryptoKeyId);

          await createCryptoKeyAsync(cryptoKeyId);
          await file.rotateEncryptionKey({kmsKeyName: newKmsKeyName});
          const [contents] = await file.download();
          assert.strictEqual(contents.toString(), FILE_CONTENTS);
        });

        it('should convert CSEK to KMS key', async () => {
          const encryptionKey = crypto.randomBytes(32);
          const file = bucket.file('encrypted-file', {encryptionKey});
          await file.save(FILE_CONTENTS, {resumable: false});
          await file.rotateEncryptionKey({kmsKeyName});
          const [contents] = await file.download();
          assert.strictEqual(contents.toString(), 'secret data');
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

        after(async () => {
          await bucket.setMetadata({
            encryption: null,
          });
        });

        it('should have set defaultKmsKeyName on created bucket', async () => {
          const [metadata] = await bucket.getMetadata();
          // Strip the project ID, as it could be the placeholder locally, but
          // the real value upstream.
          const projectIdRegExp = /^.+\/locations/;
          const actualKmsKeyName =
            metadata.encryption.defaultKmsKeyName.replace(projectIdRegExp, '');
          const expectedKmsKeyName = kmsKeyName.replace(projectIdRegExp, '');
          assert.strictEqual(actualKmsKeyName, expectedKmsKeyName);
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

        it('should insert an object that inherits the kms key name', async () => {
          const file = bucket.file('kms-encrypted-file');
          const [metadata] = await bucket.getMetadata();
          const defaultKmsKeyName = metadata.encryption.defaultKmsKeyName;
          await file.save(FILE_CONTENTS, {resumable: false});

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
        });
      });
    });

    it('should copy an existing file', async () => {
      const opts = {destination: 'CloudLogo'};
      const [file] = await bucket.upload(FILES.logo.path, opts);
      const [copiedFile] = await file.copy('CloudLogoCopy');
      await Promise.all([file.delete, copiedFile.delete()]);
    });

    it('should copy an existing file and overwrite custom metadata', async () => {
      const opts = {
        destination: 'CloudLogo',
        metadata: {
          metadata: {
            originalProperty: 'true',
          },
        },
      };
      const [file] = await bucket.upload(FILES.logo.path, opts);
      const copyOpts = {metadata: {newProperty: 'true'}};
      const [copiedFile] = await file.copy('CloudLogoCopy', copyOpts);
      const [metadata] = await copiedFile.getMetadata();
      assert.strictEqual(
        typeof metadata.metadata.originalProperty,
        'undefined'
      );
      assert.strictEqual(metadata.metadata.newProperty, 'true');
      await Promise.all([file.delete, copiedFile.delete()]);
    });

    it('should copy an existing file and overwrite metadata', async () => {
      const opts = {
        destination: 'CloudLogo',
      };
      const CACHE_CONTROL = 'private';
      const CONTENT_ENCODING = 'gzip';
      const CONTENT_TYPE = 'text/plain';
      const [file] = await bucket.upload(FILES.logo.path, opts);
      const copyOpts = {
        cacheControl: CACHE_CONTROL,
        contentEncoding: CONTENT_ENCODING,
        contentType: CONTENT_TYPE,
      };
      const [copiedFile] = await file.copy('CloudLogoCopy', copyOpts);
      const [metadata] = await copiedFile.getMetadata();
      assert.strictEqual(metadata.contentEncoding, CONTENT_ENCODING);
      assert.strictEqual(metadata.cacheControl, CACHE_CONTROL);
      assert.strictEqual(metadata.contentType, CONTENT_TYPE);
      await Promise.all([file.delete, copiedFile.delete()]);
    });

    it('should respect predefined Acl at file#copy', async () => {
      const opts = {destination: 'CloudLogo'};
      const [file] = await bucket.upload(FILES.logo.path, opts);
      const copyOpts = {predefinedAcl: 'publicRead'};
      const [copiedFile] = await file.copy('CloudLogoCopy', copyOpts);
      const publicAcl = await isFilePublicAsync(copiedFile);
      assert.strictEqual(publicAcl, true);
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

    it('should copy to another bucket given a gs:// URL', async () => {
      const opts = {destination: 'CloudLogo'};
      const [file] = await bucket.upload(FILES.logo.path, opts);
      const otherBucket = storage.bucket(generateName());
      await otherBucket.create();
      const destPath = 'gs://' + otherBucket.name + '/CloudLogoCopy';
      await file!.copy(destPath);
      const [files] = await otherBucket.getFiles();
      assert.strictEqual(files!.length, 1);
      const newFile = files![0];
      assert.strictEqual(newFile.name, 'CloudLogoCopy');
    });

    it('should allow changing the storage class', async () => {
      const file = bucket.file(generateName());
      await bucket.upload(FILES.logo.path, {destination: file});
      await file.setStorageClass('standard');
      const [metadata] = await file.getMetadata();
      assert.strictEqual(metadata.storageClass, 'STANDARD');
    });
  });

  describe('resumable upload', () => {
    describe('multi-chunk upload', () => {
      describe('upload configurations', () => {
        const filePath: string = FILES.big.path;
        const fileSize = fs.statSync(filePath).size;
        let crc32c: string;

        before(async () => {
          // get a CRC32C value from the file
          crc32c = await new Promise((resolve, reject) => {
            const crc32c = new CRC32C();

            fs.createReadStream(filePath)
              .on('data', (d: Buffer) => crc32c.update(d))
              .on('end', () => resolve(crc32c.toString()))
              .on('error', reject);
          });
        });

        async function uploadAndVerify(
          file: File,
          options: Omit<UploadOptions, 'destination'>
        ) {
          await bucket.upload(filePath, {
            destination: file,
            ...options,
          });

          const [metadata] = await file.getMetadata();

          // assert we uploaded the expected data
          assert.equal(metadata.crc32c, crc32c);
        }

        it('should support uploads where `contentLength < chunkSize`', async () => {
          const file = bucket.file(generateName());

          const metadata = {contentLength: fileSize};
          // off by +1 to ensure `contentLength < chunkSize`
          const chunkSize = fileSize + 1;

          await uploadAndVerify(file, {chunkSize, metadata});
        });

        it('should support uploads where `contentLength % chunkSize != 0`', async () => {
          const file = bucket.file(generateName());

          const metadata = {contentLength: fileSize};
          // off by -1 to ensure `contentLength % chunkSize != 0`
          const chunkSize = fileSize - 1;

          await uploadAndVerify(file, {chunkSize, metadata});
        });

        it('should support uploads where `fileSize % chunkSize != 0` && `!contentLength`', async () => {
          const file = bucket.file(generateName());
          // off by +1 to ensure `fileSize % chunkSize != 0`
          const chunkSize = fileSize + 1;

          await uploadAndVerify(file, {chunkSize});
        });

        it('should support uploads where `fileSize < chunkSize && `!contentLength`', async () => {
          const file = bucket.file(generateName());
          // off by `* 2 +1` to ensure `fileSize < chunkSize`
          const chunkSize = fileSize * 2 + 1;

          await uploadAndVerify(file, {chunkSize});
        });

        it('should support uploads where `fileSize > chunkSize` && `!contentLength`', async () => {
          const file = bucket.file(generateName());
          // off by -1 to ensure `fileSize > chunkSize`
          const chunkSize = fileSize - 1;

          await uploadAndVerify(file, {chunkSize});
        });
      });
    });
  });

  describe('bucket upload with progress', () => {
    it('show bytes sent with resumable upload', async () => {
      const fileSize = fs.statSync(FILES.big.path).size;
      let called = false;
      function onUploadProgress(evt: {bytesWritten: number}) {
        called = true;
        assert.strictEqual(typeof evt.bytesWritten, 'number');
        assert.ok(evt.bytesWritten >= 0 && evt.bytesWritten <= fileSize);
      }

      await bucket.upload(FILES.big.path, {
        resumable: true,
        onUploadProgress,
      });

      assert.strictEqual(called, true);
    });

    it('show bytes sent with simple upload', async () => {
      const fileSize = fs.statSync(FILES.big.path).size;
      let called = false;
      function onUploadProgress(evt: {bytesWritten: number}) {
        called = true;
        assert.strictEqual(typeof evt.bytesWritten, 'number');
        assert.ok(evt.bytesWritten >= 0 && evt.bytesWritten <= fileSize);
      }
      await bucket.upload(FILES.big.path, {
        resumable: false,
        onUploadProgress,
      });

      assert.strictEqual(called, true);
    });
  });

  describe('channels', () => {
    it('should stop a channel', async () => {
      // We can't actually create a channel. But we can test to see that we're
      // reaching the right endpoint with the API request.
      const channel = storage.channel('id', 'resource-id');
      assert.rejects(channel.stop(), (err: ApiError) => {
        assert.strictEqual((err as ApiError).code, 404);
        assert.strictEqual(err!.message.indexOf("Channel 'id' not found"), 0);
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

    const delay = async (test: Mocha.Context, accessId: string) => {
      const retries = test.currentRetry();
      if (retries === 0) return; // no retry on the first failure.
      // see: https://cloud.google.com/storage/docs/exponential-backoff:
      const ms = Math.pow(2, retries) * 500 + Math.random() * 1000;
      return new Promise(done => {
        console.info(
          `retrying "${test.title}" with accessId ${accessId} in ${ms}ms`
        );
        setTimeout(done, ms);
      });
    };

    before(async () => {
      await deleteStaleHmacKeys(SERVICE_ACCOUNT, HMAC_PROJECT!);
      if (SECOND_SERVICE_ACCOUNT) {
        await deleteStaleHmacKeys(SECOND_SERVICE_ACCOUNT, HMAC_PROJECT!);
      }
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

    it('should get metadata for an HMAC key', async function () {
      this.retries(3);
      delay(this, accessId);
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
      let accessId: string;

      before(function () {
        if (!SECOND_SERVICE_ACCOUNT) {
          this.skip();
        }
      });

      after(async () => {
        const hmacKey = storage.hmacKey(accessId, {projectId: HMAC_PROJECT});
        await hmacKey.setMetadata({state: 'INACTIVE'});
        await hmacKey.delete();
      });

      it('should create key for a second service account', async () => {
        const [hmacKey] = await storage.createHmacKey(SECOND_SERVICE_ACCOUNT!, {
          projectId: HMAC_PROJECT,
        });
        accessId = hmacKey.id!;
      });

      it('get HMAC keys for both service accounts', async () => {
        // Create a key for the first service account
        await storage.createHmacKey(SERVICE_ACCOUNT!, {
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

    it('should get files', async () => {
      const [files] = await bucket.getFiles();
      assert.strictEqual(files!.length, NEW_FILES.length);
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

    it('should paginate the list', async () => {
      const query = {
        maxResults: NEW_FILES.length - 1,
      };

      const [files, nextQuery] = await bucket.getFiles(query);

      assert.strictEqual(files!.length, NEW_FILES.length - 1);
      assert(nextQuery);
      const [nextFiles] = await bucket.getFiles(nextQuery);
      assert.strictEqual(nextFiles!.length, 1);
    });
  });

  describe('offset', () => {
    const NEW_FILES = [
      bucket.file('startOffset_file1'),
      bucket.file('startOffset_file2'),
      bucket.file('file3_endOffset'),
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

    it('should get files with offset', async () => {
      // Listing files with startOffset.
      const [filesWithStartOffset] = await bucket.getFiles({
        startOffset: 'startOffset',
      });
      assert.strictEqual(filesWithStartOffset!.length, 2);

      // Listing files with endOffset.
      const [filesWithEndOffset] = await bucket.getFiles({
        endOffset: 'set',
      });
      assert.strictEqual(filesWithEndOffset!.length, 1);

      // Listing files with startOffset and endOffset.
      const [filesWithStartAndEndOffset] = await bucket.getFiles({
        startOffset: 'startOffset',
        endOffset: 'endOffset',
      });
      assert.strictEqual(filesWithStartAndEndOffset!.length, 0);
    });
  });

  describe('file generations', () => {
    const bucketWithVersioning = storage.bucket(generateName());

    before(async () => {
      await bucketWithVersioning.create({
        versioning: {
          enabled: true,
        },
      });
    });

    after(async () => {
      await bucketWithVersioning.deleteFiles({
        versions: true,
      });
      await bucketWithVersioning.delete();
    });

    it('should overwrite file, then get older version', async () => {
      const versionedFile = bucketWithVersioning.file(generateName());
      await versionedFile.save('a');
      const [metadata] = await versionedFile.getMetadata();
      const initialGeneration = metadata.generation;
      await versionedFile.save('b');
      const firstGenFile = bucketWithVersioning.file(versionedFile.name, {
        generation: initialGeneration,
      });
      const [contents] = await firstGenFile.download();
      assert.strictEqual(contents.toString(), 'a');
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
        bucketWithVersioning.file(fileName, {generation: 0}).save('hello2'),
        (err: ApiError) => {
          assert.strictEqual(err.code, 412);
          assert.strictEqual(err.errors![0].reason, 'conditionNotMet');
          return true;
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

    before(done => {
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

    it('should create a signed delete url', async () => {
      await file.delete();
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
  });

  describe('v2 signed url with special characters in file name', () => {
    const localFile = fs.readFileSync(FILES.logo.path);
    let file: File;

    before(done => {
      file = bucket.file("special/azAZ!*'()*%/file.jpg");
      fs.createReadStream(FILES.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('finish', done.bind(null, null));
    });

    after(() => file.delete());

    it('should create a signed read url and fetch a file', async () => {
      const [signedUrl] = await file.getSignedUrl({
        version: 'v2',
        action: 'read',
        expires: Date.now() + 5000,
      });

      const res = await fetch(signedUrl);
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
    });

    it('should create a signed read url with accessibleAt in the past', async () => {
      const [signedReadUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        accessibleAt: Date.now() - 5000,
        expires: Date.now() + 5000,
      });

      const res = await fetch(signedReadUrl);
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
    });

    it('should create a signed read url with accessibleAt in the future', async () => {
      const accessibleAtDate = new Date();
      const accessibleAtMinutes = accessibleAtDate.getMinutes();
      const expiresDate = new Date();
      const expiresMinutes = expiresDate.getMinutes();
      const [signedReadUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        accessibleAt: accessibleAtDate.setMinutes(accessibleAtMinutes + 60),
        expires: expiresDate.setMinutes(expiresMinutes + 90),
      });
      const res = await fetch(signedReadUrl);
      assert.strictEqual(res.status, 403);
    });

    it('should work with special characters in extension headers', async () => {
      const HEADERS = {
        'x-goog-custom-header': ['value1', "azAZ!*'()*%"],
      };
      const [signedReadUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 5000,
        extensionHeaders: HEADERS,
      });

      const res = await fetch(signedReadUrl, {
        headers: {'x-goog-custom-header': "value1,azAZ!*'()*%"},
      });
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
    });

    it('should create a virtual-hosted style URL', async () => {
      const [signedUrl] = await file.getSignedUrl({
        virtualHostedStyle: true,
        version: 'v4',
        action: 'read',
        expires: Date.now() + 5000,
      });

      const res = await fetch(signedUrl);
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
    });

    it('should create a signed delete url', async () => {
      const [signedDeleteUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'delete',
        expires: Date.now() + 5000,
      });
      await fetch(signedDeleteUrl!, {method: 'DELETE'});
      const [exists] = await file.exists();
      assert.strictEqual(exists, false);
    });

    it('should create a signed list bucket url', async () => {
      const [signedUrl] = await bucket.getSignedUrl({
        version: 'v4',
        action: 'list',
        expires: Date.now() + 5000,
      });
      const res = await fetch(signedUrl!, {method: 'GET'});
      const body = await res.text();
      assert.strictEqual(res.status, 200);
      assert(body.includes('ListBucketResult'));
    });
  });

  describe('v4 signed url with special characters in file name', () => {
    const localFile = fs.readFileSync(FILES.logo.path);
    let file: File;

    before(done => {
      file = bucket.file("special/azAZ!*'()*%/file.jpg");
      fs.createReadStream(FILES.logo.path)
        .pipe(file.createWriteStream())
        .on('error', done)
        .on('finish', done.bind(null, null));
    });

    after(async () => file.delete());

    it('should create a signed read url and fetch a file', async () => {
      const [signedUrl] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 5000,
      });

      const res = await fetch(signedUrl);
      const body = await res.text();
      assert.strictEqual(body, localFile.toString());
    });
  });

  describe('sign policy', () => {
    let file: File;

    before(() => {
      file = bucket.file('LogoToSign.jpg');
    });

    beforeEach(function () {
      if (!storage.projectId) {
        this.skip();
      }
    });

    it('should create a V2 policy', async () => {
      const expires = Date.now() + 60 * 1000; // one minute
      const expectedExpiration = new Date(expires).toISOString();

      const options = {
        equals: ['$Content-Type', 'image/jpeg'],
        expires,
        contentLengthRange: {
          min: 0,
          max: 1024,
        },
      };

      const [policy] = await file.generateSignedPostPolicyV2(options);

      const policyJson = JSON.parse(policy!.string);
      assert.strictEqual(policyJson.expiration, expectedExpiration);
    });

    it('should create a V4 policy', async () => {
      const expires = Date.now() + 60 * 1000; // one minute
      const options = {
        expires,
        contentLengthRange: {
          min: 0,
          max: 50000,
        },
        fields: {'x-goog-meta-test': 'data'},
      };

      const [policy] = await file.generateSignedPostPolicyV4(options);
      const form = new FormData();
      for (const [key, value] of Object.entries(policy.fields)) {
        form.append(key, value);
      }

      const CONTENT = 'my-content';

      form.append('file', CONTENT);
      const res = await fetch(policy.url, {method: 'POST', body: form});
      assert.strictEqual(res.status, 204);

      const [buf] = await file.download();
      assert.strictEqual(buf.toString(), CONTENT);
    });
  });

  describe('notifications', () => {
    let notification: Notification;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .then((data: any) => {
            return Promise.all(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data[0].map((notification: any) => {
                return notification.delete();
              })
            );
          })
      );
    });

    it('should get an existing notification', async () => {
      await notification.get();
      assert(Object.keys(notification.metadata).length > 0);
    });

    it('should get a notifications metadata', async () => {
      const [metadata] = await notification.getMetadata();
      assert(metadata !== null && typeof metadata === 'object');
    });

    it('should tell us if a notification exists', async () => {
      const [exists] = await notification.exists();
      assert(exists);
    });

    it('should tell us if a notification does not exist', async () => {
      const notification = bucket.notification('123');
      const [exists] = await notification.exists();
      assert.strictEqual(exists, false);
    });

    it('should get a list of notifications', async () => {
      const [notifications] = await bucket.getNotifications();
      assert.strictEqual(notifications!.length, 1);
    });

    it('should emit events to a subscription', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  describe('CRC32C', () => {
    const KNOWN_INPUT_TO_CRC32C = {
      /** empty string (i.e. nothing to 'update') */
      '': 'AAAAAA==',
      /** known case #1 - validated from actual GCS object upload + metadata retrieval */
      data: 'rth90Q==',
      /** known case #2 - validated from actual GCS object upload + metadata retrieval */
      'some text\n': 'DkjKuA==',
      /** arbitrary large string */
      ['a'.repeat(2 ** 16)]: 'TpXtPw==',
    } as const;

    it('should generate the appropriate hashes', async () => {
      const file = bucket.file('crc32c-test-file');

      for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
        const buffer = Buffer.from(input);
        const crc32c = new CRC32C();

        await file.save(buffer);
        crc32c.update(buffer);

        const [metadata] = await file.getMetadata();

        assert.equal(metadata.crc32c, expected);
        assert(crc32c.validate(metadata.crc32c));
      }
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function deleteTopicAsync(topic: any) {
    return topic.delete();
  }

  function shortUUID() {
    return uuid.v1().split('-').shift();
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      const err = error as HTTPError;
      if (err.code === 404) {
        return false;
      } else {
        throw error;
      }
    }
  }

  async function deleteStaleHmacKeys(
    serviceAccountEmail: string,
    projectId: string
  ) {
    const old = new Date();
    old.setHours(old.getHours() - 1);
    const [hmacKeys] = await storage.getHmacKeys({
      serviceAccountEmail,
      projectId,
    });

    const limit = pLimit(10);
    await Promise.all(
      hmacKeys
        .filter(hmacKey => {
          const hmacKeyCreated = new Date(hmacKey.metadata!.timeCreated!);
          return hmacKey.metadata!.state !== 'DELETED' && hmacKeyCreated < old;
        })
        .map(hmacKey =>
          limit(async () => {
            await hmacKey.setMetadata({state: 'INACTIVE'});
            await hmacKey.delete();
          })
        )
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createFileAsync(fileObject: any) {
    return fileObject.file.save(fileObject.contents);
  }

  function createFileWithContentPromise(content: string) {
    return bucket.file(`${generateName()}.txt`).save(content);
  }
});
