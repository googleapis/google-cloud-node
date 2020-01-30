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
  // [START storage_remove_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeRetentionPolicy() {
    const [metadata] = await storage.bucket(bucketName).getMetadata();
    if (metadata.retentionPolicy && metadata.retentionPolicy.isLocked) {
      console.log(
        'Unable to remove retention period as retention policy is locked.'
      );
      return null;
    } else {
      const results = await storage.bucket(bucketName).removeRetentionPeriod();
      console.log(`Removed bucket ${bucketName} retention policy.`);
      return results;
    }
  }

  removeRetentionPolicy().catch(console.error);
  // [END storage_remove_retention_policy]
}
main(...process.argv.slice(2));
