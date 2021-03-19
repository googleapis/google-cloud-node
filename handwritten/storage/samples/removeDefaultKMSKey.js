// Copyright 2021 Google LLC
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
//   title: Remove Default KMS Key.
//   description: Remove Default KMS Key.
//   usage: node removeDefaultKMSKey.js <BUCKET_NAME>

function main(bucketName = 'my-bucket') {
  // [START storage_bucket_delete_default_kms_key]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeDefaultKMSKey() {
    await storage.bucket(bucketName).setMetadata({
      encryption: {
        defaultKmsKeyName: null,
      },
    });

    console.log(`Default KMS key was removed from ${bucketName}`);
  }

  removeDefaultKMSKey().catch(console.error);
  // [END storage_bucket_delete_default_kms_key]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
