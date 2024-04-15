/**
 * Copyright 2024 Google LLC
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

// sample-metadata:
//   title: Set the object retention policy of a File.
//   description: Set the object retention policy of a File.
//   usage: node setObjectRetentionPolicy.js <BUCKET_NAME>

function main(
  bucketName = 'my-bucket',
  destFileName = 'file.txt',
  contents = 'this is the file content'
) {
  // [START storage_set_object_retention_policy]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The new ID for your GCS file
  // const destFileName = 'your-new-file-name';

  // The content to be uploaded in the GCS file
  // const contents = 'your file content';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  // The bucket in the sample below will be created in the project associated with this client.
  // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html
  const storage = new Storage();

  async function setObjectRetentionPolicy() {
    // Get a reference to the bucket
    const myBucket = storage.bucket(bucketName);

    // Create a reference to a file object
    const file = myBucket.file(destFileName);

    // Save the file data
    await file.save(contents);

    // Set the retention policy for the file
    const retentionDate = new Date();
    retentionDate.setDate(retentionDate.getDate() + 10);
    const [metadata] = await file.setMetadata({
      retention: {
        mode: 'Unlocked',
        retainUntilTime: retentionDate.toISOString(),
      },
    });

    console.log(
      `Retention policy for file ${file.name} was set to: ${metadata.retention.mode}`
    );

    // To modify an existing policy on an unlocked file object, pass in the override parameter
    const newRetentionDate = new Date();
    retentionDate.setDate(retentionDate.getDate() + 9);
    [metdata] = await file.setMetadata({
      retention: {retainUntilTime: newRetentionDate},
      overrideUnlockedRetention: true,
    });

    console.log(
      `Retention policy for file ${file.name} was updated to: ${metadata.retention.retainUntilTime}`
    );
  }

  setObjectRetentionPolicy().catch(console.error);
  // [END storage_set_object_retention_policy]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
