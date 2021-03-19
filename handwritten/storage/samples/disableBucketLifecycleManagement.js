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
 * This application demonstrates how to disable Object Lifecycle Management for
 * a bucket.
 *
 * For more information, see the documentation at https://cloud.google.com/storage/docs/lifecycle.
 */

function main(bucketName = 'my-bucket') {
  // [START storage_disable_bucket_lifecycle_management]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function disableBucketLifecycleManagement() {
    await storage.bucket(bucketName).setMetadata({lifecycle: null});

    console.log(`Lifecycle management is disabled for bucket ${bucketName}`);
  }

  disableBucketLifecycleManagement().catch(console.error);
  // [END storage_disable_bucket_lifecycle_management]
}

main(...process.argv.slice(2));
