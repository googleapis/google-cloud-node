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
//   title: Storage Remove Bucket Label.
//   description: Removes bucket label.
//   usage: node removeBucketLabel.js <BUCKET_NAME> JSON.stringify(['labelone','labelone'])

function main(bucketName = 'my-bucket', label_keys = ['label1', 'label2']) {
  // [START storage_remove_bucket_label]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const label_keys = 'List of label keys, e.g. ['label1','label2']';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeBucketLabel() {
    await storage.bucket(bucketName).deleteLabels(label_keys);
    console.log(`Removed labels from bucket ${bucketName}.`);
  }

  removeBucketLabel();
  // [END storage_remove_bucket_label]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
