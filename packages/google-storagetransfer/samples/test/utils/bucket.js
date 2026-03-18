/**
 * Copyright 2022 Google LLC
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

// eslint-disable-next-line no-unused-vars
const {Storage, Bucket} = require('@google-cloud/storage');
const {
  StorageTransferServiceClient,
} = require('@google-cloud/storage-transfer');
const AWS = require('aws-sdk');
const uuid = require('uuid');

class BucketManager {
  constructor() {
    this.client = new StorageTransferServiceClient();
    this.s3 = new AWS.S3({apiVersion: '2006-03-01'});
    this.storage = new Storage();

    /**
     * The GCP Project ID. Cached after initial request
     */
    this._cachedProjectId = '';

    /**
     * @type {Bucket[]}
     */
    this.gcsBuckets = [];
    /**
     * @type {string[]}
     */
    this.s3Buckets = [];
  }

  async getProjectId() {
    if (!this._cachedProjectId) {
      this._cachedProjectId = await this.storage.getProjectId();
    }

    return this._cachedProjectId;
  }

  /**
   * Generates a unique name for GCS and S3 buckets.
   *
   * @returns {string} Name of bucket
   */
  static generateBucketName() {
    return `nodejs-sts-samples-${uuid.v4()}`;
  }

  /**
   * Configures permissions for STS to read/write to the bucket.
   *
   * @param {Bucket} bucket
   * @param {number} waitForPropagation the time in milliseconds, if any, to wait
   *   for the policy to propigate (default 7 minutes). See for details:
   *   - https://cloud.google.com/iam/docs/faq#access_revoke
   *   - https://cloud.google.com/iam/docs/policies#structure
   */
  async grantSTSPermissions(bucket, waitForPropagation = 7 * 60 * 1000) {
    const [serviceAccount] = await this.client.getGoogleServiceAccount({
      projectId: await this.getProjectId(),
    });

    const member = `serviceAccount:${serviceAccount.accountEmail}`;

    const objectViewer = 'roles/storage.objectViewer';
    const bucketReader = 'roles/storage.legacyBucketReader';
    const bucketWriter = 'roles/storage.legacyBucketWriter';
    const members = [member];

    const [policy] = await bucket.iam.getPolicy({requestedPolicyVersion: 3});

    policy.bindings.push({
      role: objectViewer,
      members: members,
    });

    policy.bindings.push({
      role: bucketReader,
      members: members,
    });

    policy.bindings.push({
      role: bucketWriter,
      members: members,
    });

    await bucket.iam.setPolicy(policy);

    if (waitForPropagation) {
      const limit = Date.now() + waitForPropagation;

      let hasObjectViewer = false;
      let hasBucketReader = false;
      let hasBucketWriter = false;

      let attempts = 0;

      // Using do/while to ensure this runs at least once
      do {
        const [policy] = await bucket.iam.getPolicy({
          requestedPolicyVersion: 3,
        });

        for (const item of policy.bindings) {
          if (item.members.includes(member)) {
            switch (item.role) {
              case objectViewer:
                hasObjectViewer = true;
                break;
              case bucketReader:
                hasBucketReader = true;
                break;
              case bucketWriter:
                hasBucketWriter = true;
                break;
            }
          }
        }

        if (!hasObjectViewer || !hasBucketReader || !hasBucketWriter) {
          await Promise(resolve => setTimeout(resolve, 1000 * ++attempts));
        } else {
          break;
        }
      } while (Date.now() < limit);

      if (!hasObjectViewer || !hasBucketReader || !hasBucketWriter) {
        throw new RangeError(
          `'${member}' is missing the required permissions for bucket '${bucket.name()}'`
        );
      }
    }
  }

  /**
   * Generates a unique GCS bucket for testing.
   * Configures STS read/write perms on the bucket.
   *
   * Is cached for easy clean-up via {#deleteBuckets}.
   *
   * @returns
   */
  async generateGCSBucket() {
    const name = await BucketManager.generateBucketName();
    const bucket = this.storage.bucket(name);
    this.gcsBuckets.push(bucket);

    await bucket.create();
    await this.grantSTSPermissions(bucket);

    return bucket;
  }

  /**
   * Generates a unique GCS bucket for testing.
   * Configures STS read/write perms on the bucket.
   *
   * Is cached for easy clean-up via {#deleteBuckets}.
   *
   * @returns
   */

  async generateS3Bucket() {
    const name = await BucketManager.generateBucketName();

    await new Promise((resolve, reject) => {
      this.s3.createBucket({Bucket: name}, (error, data) => {
        if (error) return reject(error);

        resolve(data);
      });
    });

    this.s3Buckets.push(name);

    return name;
  }

  /**
   * Deletes generated GCS & S3 test buckets.
   */
  async deleteBuckets() {
    for (const bucket of this.gcsBuckets) {
      try {
        await bucket.delete();
      } catch (e) {
        console.error(e);
      }
    }

    for (const bucket of this.s3Buckets) {
      try {
        await new Promise((resolve, reject) => {
          this.s3.deleteBucket({Bucket: bucket}, (error, data) => {
            if (error) return reject(error);

            resolve(data);
          });
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
}

module.exports = {BucketManager};
