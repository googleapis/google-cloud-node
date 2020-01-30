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
 * This application demonstrates how to use Bucket Lock operations on buckets
 * and objects using the Google Cloud Storage API.
 *
 * For more information read the documentation
 * at https://cloud.google.com/storage/docs/bucket-lock
 */

function main(bucketName = 'my-bucket') {
  // [START storage_lock_retention_policy]

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function lockRetentionPolicy() {
    // get_bucket gets the current metageneration value for the bucket,
    // required by lock_retention_policy.
    const [unlockedMetadata] = await storage.bucket(bucketName).getMetadata();
    // Warning: Once a retention policy is locked it cannot be unlocked
    // and retention period can only be increased.
    const [lockedMetadata] = await storage
      .bucket(bucketName)
      .lock(unlockedMetadata.metageneration);
    console.log(`Retention policy for ${bucketName} is now locked.`);
    console.log(
      `Retention policy effective as of ${lockedMetadata.retentionPolicy.effectiveTime}`
    );

    return lockedMetadata;
  }

  lockRetentionPolicy().catch(console.error);
  // [END storage_lock_retention_policy]
}
main(...process.argv.slice(2));
