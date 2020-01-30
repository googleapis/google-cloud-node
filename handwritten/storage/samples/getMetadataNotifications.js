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
 * This application demonstrates how to perform basic operations on files with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(bucketName = 'my-bucket', notificationId = '1') {
  // [START storage_notifications_get_metadata]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const notificationId = 'ID of notification to get, e.g. 1';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function getMetadata() {
    // Get the notification metadata
    const [metadata] = await storage
      .bucket(bucketName)
      .notification(notificationId)
      .getMetadata();

    console.log(`ID: ${metadata.id}`);
    console.log(`Topic: ${metadata.topic}`);
    console.log(`Event Types: ${metadata.event_types}`);
    console.log(`Custom Attributes: ${metadata.custom_attributes}`);
    console.log(`Payload Format: ${metadata.payload_format}`);
    console.log(`Object Name Prefix: ${metadata.object_name_prefix}`);
    console.log(`Etag: ${metadata.etag}`);
    console.log(`Self Link: ${metadata.selfLink}`);
    console.log(`Kind: ${metadata.kind}`);
  }

  getMetadata().catch(console.error);
  // [END storage_notifications_get_metadata]
}
main(...process.argv.slice(2));
