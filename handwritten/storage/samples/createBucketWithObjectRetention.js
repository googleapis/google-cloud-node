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

// sample-metadata:
//   title: Create a Bucket with object retention enabled.
//   description: Create a Bucket with object retention enabled.
//   usage: node createBucketWithObjectRetention.js <BUCKET_NAME>

function main(bucketName = 'my-bucket') {
  // [START storage_create_bucket_with_object_retention]
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

  async function createBucketWithObjectRetention() {
    const [bucket] = await storage.createBucket(bucketName, {
      enableObjectRetention: true,
    });

    console.log(
      `Created '${bucket.name}' with object retention enabled setting: ${bucket.metadata.objectRetention.mode}`,
    );
  }

  createBucketWithObjectRetention().catch(console.error);
  // [END storage_create_bucket_with_object_retention]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
