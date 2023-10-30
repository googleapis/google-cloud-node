/**
 * Copyright 2022 Google LLC
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

function main(
  bucketName = 'my-bucket',
  toggle = true,
  terminalStorageClass = 'ARCHIVE'
) {
  // [START storage_set_autoclass]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The terminal storage class to be set on your GCS bucket. Valid values are NEARLINE and ARCHIVE.
  // const terminalStorageClass = 'NEARLINE';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function setAutoclass() {
    // Configure the Autoclass setting for a bucket.
    // terminalStorageClass field is optional and defaults to NEARLINE if not otherwise specified.
    // Valid terminalStorageClass values are NEARLINE and ARCHIVE.
    const [metadata] = await storage.bucket(bucketName).setMetadata({
      autoclass: {
        enabled: toggle,
        terminalStorageClass,
      },
    });

    console.log(
      `Autoclass terminal storage class is ${metadata.autoclass.terminalStorageClass}.`
    );
  }

  setAutoclass().catch(console.error);
  // [END storage_set_autoclass]
}

main(...process.argv.slice(2));
