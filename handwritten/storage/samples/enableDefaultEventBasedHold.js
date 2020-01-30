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
  // [START storage_enable_default_event_based_hold]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Enables a default event-based hold for the bucket.

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function enableDefaultEventBasedHold() {
    // Enables a default event-based hold for the bucket.
    await storage.bucket(bucketName).setMetadata({
      defaultEventBasedHold: true,
    });

    console.log(`Default event-based hold was enabled for ${bucketName}.`);
  }

  enableDefaultEventBasedHold().catch(console.error);
  // [END storage_enable_default_event_based_hold]
}
main(...process.argv.slice(2));
