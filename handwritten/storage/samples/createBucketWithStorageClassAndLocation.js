/**
 * Copyright 2020 Google LLC
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
//   title: Create Bucket With Storage Class and Location.
//   description: Create Bucket With Storage Class and Location.
//   usage: node createBucketWithStorageClassAndLocation.js <BUCKET_NAME> <CLASS_NAME> <LOCATION>

function main(
  bucketName = 'my-bucket',
  storageClass = 'coldline',
  location = 'ASIA'
) {
  // [START storage_create_bucket_class_location]
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const storageClass = 'Name of a storage class, e.g. coldline';
  // const location = 'Name of a location, e.g. ASIA';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  // The bucket in the sample below will be created in the project asscociated with this client.
  // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html
  const storage = new Storage();

  async function createBucketWithStorageClassAndLocation() {
    // For default values see: https://cloud.google.com/storage/docs/locations and
    // https://cloud.google.com/storage/docs/storage-classes

    const [bucket] = await storage.createBucket(bucketName, {
      location,
      [storageClass]: true,
    });

    console.log(
      `${bucket.name} created with ${storageClass} class in ${location}.`
    );
  }

  createBucketWithStorageClassAndLocation();
  // [END storage_create_bucket_class_location]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
