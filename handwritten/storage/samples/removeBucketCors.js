// Copyright 2020 Google LLC
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

'use strict';

// sample-metadata:
//   title: Storage Remove Bucket Cors Configuration.
//   description: Removes bucket cors configuration.
//   usage: node removeBucketCors.js <BUCKET_NAME>

function main(bucketName = 'my-bucket') {
  // [START storage_remove_cors_configuration]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeBucketCors() {
    await storage.bucket(bucketName).setCorsConfiguration([]);

    console.log(`Removed CORS configuration from bucket ${bucketName}`);
  }

  removeBucketCors().catch(console.error);
  // [END storage_remove_cors_configuration]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
