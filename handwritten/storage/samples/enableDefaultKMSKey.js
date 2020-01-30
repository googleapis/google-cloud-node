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

/**
 * This application demonstrates how to perform basic operations on buckets with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(
  bucketName = 'my-bucket',
  defaultKmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_ASIA
) {
  // [START storage_set_bucket_default_kms_key]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const defaultKmsKeyName = 'KMS key resource id, e.g. my-key';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function enableDefaultKMSKey() {
    await storage.bucket(bucketName).setMetadata({
      encryption: {
        defaultKmsKeyName,
      },
    });

    console.log(
      `Default KMS key for ${bucketName} was set to ${defaultKmsKeyName}.`
    );
  }

  enableDefaultKMSKey().catch(console.error);
  // [END storage_set_bucket_default_kms_key]
}

main(...process.argv.slice(2));
