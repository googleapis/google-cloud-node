/**
 * Copyright 2024 Google LLC
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

// sample-metadata:
//   title: Create a hierarchical namespace enabled bucket
//   description: Create a hierarchical namespace enabled bucket.
//   usage: node createBucketWithHierarchicalNamespace.js <BUCKET_NAME>

function main(bucketName = 'my-bucket') {
  // [START storage_create_bucket_hierarchical_namespace]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  // The bucket in the sample below will be created in the project associated with this client.
  // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html
  const storage = new Storage();

  async function createBucketWithHierarchicalNamespace() {
    const [bucket] = await storage.createBucket(bucketName, {
      iamConfiguration: {
        uniformBucketLevelAccess: {
          enabled: true,
        },
      },
      hierarchicalNamespace: {
        enabled: true,
      },
    });

    console.log(
      `Created '${bucket.name}' with hierarchical namespace enabled.`
    );
  }

  createBucketWithHierarchicalNamespace().catch(console.error);
  // [END storage_create_bucket_hierarchical_namespace]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
