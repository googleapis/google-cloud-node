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

function main(
  bucketName = 'my-bucket',
  fileName = 'test.txt',
  generationMatchPrecondition = 0
) {
  // [START storage_set_event_based_hold]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of your GCS file
  // const fileName = 'your-file-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function setEventBasedHold() {
    // Optional: set a generation-match precondition to avoid potential race
    // conditions and data corruptions. The request to upload is aborted if the
    // object's generation number does not match your precondition.
    const options = {
      ifGenerationMatch: generationMatchPrecondition,
    };

    // Set event-based hold
    await storage.bucket(bucketName).file(fileName).setMetadata(
      {
        eventBasedHold: true,
      },
      options
    );
    console.log(`Event-based hold was set for ${fileName}.`);
  }

  setEventBasedHold().catch(console.error);
  // [END storage_set_event_based_hold]
}
main(...process.argv.slice(2));
