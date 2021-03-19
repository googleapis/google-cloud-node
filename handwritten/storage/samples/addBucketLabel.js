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
//   title: Storage Add Bucket Label.
//   description: Adds bucket label.
//   usage: node addBucketLabel.js <BUCKET_NAME> <LABEL_KEY> <LABEL_VALUE>

function main(
  bucketName = 'my-bucket',
  labelKey = 'labelone',
  labelValue = 'labelonevalue'
) {
  // [START storage_add_bucket_label]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The key of the label to add
  // const labelKey = 'label-key-to-add';

  // The value of the label to add
  // const labelValue = 'label-value-to-add';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  const labels = {
    [labelKey]: labelValue,
  };

  async function addBucketLabel() {
    await storage.bucket(bucketName).setLabels(labels);
    console.log(`Added label to bucket ${bucketName}`);
  }

  addBucketLabel().catch(console.error);
  // [END storage_add_bucket_label]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
