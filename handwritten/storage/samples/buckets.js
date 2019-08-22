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

/**
 * This application demonstrates how to perform basic operations on buckets with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

'use strict';

async function createBucket(bucketName) {
  // [START storage_create_bucket]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Creates a new bucket in the Asia region with the coldline default storage
  // class. Leave the second argument blank for default settings.
  //
  // For default values see: https://cloud.google.com/storage/docs/locations and
  // https://cloud.google.com/storage/docs/storage-classes
  await storage.createBucket(bucketName, {
    location: 'ASIA',
    storageClass: 'COLDLINE',
  });

  console.log(`Bucket ${bucketName} created.`);
  // [END storage_create_bucket]
}

async function listBuckets() {
  // [START storage_list_buckets]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Lists all buckets in the current project
  const [buckets] = await storage.getBuckets();
  console.log('Buckets:');
  buckets.forEach(bucket => {
    console.log(bucket.name);
  });
  // [END storage_list_buckets]
}

async function deleteBucket(bucketName) {
  // [START storage_delete_bucket]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Deletes the bucket
  await storage.bucket(bucketName).delete();

  console.log(`Bucket ${bucketName} deleted.`);
  // [END storage_delete_bucket]
}

async function enableDefaultKMSKey(bucketName, defaultKmsKeyName) {
  // [START storage_set_bucket_default_kms_key]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const defaultKmsKeyName = 'KMS key resource id, e.g. my-key';

  // Enables a default KMS key for the bucket
  await storage.bucket(bucketName).setMetadata({
    encryption: {
      defaultKmsKeyName,
    },
  });

  console.log(
    `Default KMS key for ${bucketName} was set to ${defaultKmsKeyName}.`
  );
  // [END storage_set_bucket_default_kms_key]
}

async function enableBucketPolicyOnly(bucketName) {
  // [START storage_enable_bucket_policy_only]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Enables Bucket Policy Only for the bucket
  await storage.bucket(bucketName).setMetadata({
    iamConfiguration: {
      bucketPolicyOnly: {
        enabled: true,
      },
    },
  });

  console.log(`Bucket Policy Only was enabled for ${bucketName}.`);
  // [END storage_enable_bucket_policy_only]
}

async function disableBucketPolicyOnly(bucketName) {
  // [START storage_disable_bucket_policy_only]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Disables Bucket Policy Only for the bucket
  await storage.bucket(bucketName).setMetadata({
    iamConfiguration: {
      bucketPolicyOnly: {
        enabled: false,
      },
    },
  });

  console.log(`Bucket Policy Only was disabled for ${bucketName}.`);
  // [END storage_disable_bucket_policy_only]
}

async function getBucketPolicyOnly(bucketName) {
  // [START storage_get_bucket_policy_only]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Gets Bucket Metadata and checks if BucketPolicyOnly is enabled.
  const [metadata] = await storage.bucket(bucketName).getMetadata();

  if (metadata.iamConfiguration) {
    const bucketPolicyOnly = metadata.iamConfiguration.bucketPolicyOnly;
    console.log(`Bucket Policy Only is enabled for ${bucketName}.`);
    console.log(`Bucket will be locked on ${bucketPolicyOnly.lockedTime}.`);
  } else {
    console.log(`Bucket Policy Only is not enabled for ${bucketName}.`);
  }
  // [END storage_get_bucket_policy_only]
}

require(`yargs`)
  .demand(1)
  .command(`create <bucket>`, `Creates a new bucket.`, {}, opts =>
    createBucket(opts.bucket)
  )
  .command(`list`, `Lists all buckets in the current project.`, {}, listBuckets)
  .command(
    `enable-default-kms-key <bucket> <defaultKmsKeyName>`,
    `Sets the default KMS key for the specified bucket.`,
    {},
    opts => enableDefaultKMSKey(opts.bucket, opts.defaultKmsKeyName)
  )
  .command(
    `enable-bucket-policy-only <bucket>`,
    `Enables Bucket Policy Only for the specified bucket.`,
    {},
    opts => enableBucketPolicyOnly(opts.bucket)
  )
  .command(
    `disable-bucket-policy-only <bucket>`,
    `Disables Bucket Policy Only for the specified bucket.`,
    {},
    opts => disableBucketPolicyOnly(opts.bucket)
  )
  .command(
    `get-bucket-policy-only <bucket>`,
    `Get Bucket Policy Only metadata for the specified bucket.`,
    {},
    opts => getBucketPolicyOnly(opts.bucket)
  )
  .command(`delete <bucket>`, `Deletes a bucket.`, {}, opts =>
    deleteBucket(opts.bucket)
  )
  .example(
    `node $0 create my-bucket`,
    `Creates a new bucket named "my-bucket".`
  )
  .example(`node $0 list`, `Lists all buckets in the current project.`)
  .example(
    `node $0 enable-default-kms-key my-bucket my-key`,
    `Sets the default KMS key for my-bucket.`
  )
  .example(
    `node $0 enable-bucket-policy-only my-bucket`,
    `Enables Bucket Policy Only for my-bucket.`
  )
  .example(
    `node $0 disable-bucket-policy-only my-bucket`,
    `Disables Bucket Policy Only for my-bucket.`
  )
  .example(
    `node $0 get-bucket-policy-only my-bucket`,
    `Get Bucket Policy Only metadata for my-bucket.`
  )
  .example(`node $0 delete my-bucket`, `Deletes a bucket named "my-bucket".`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/storage/docs`)
  .help()
  .strict().argv;
