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

function main(bucketName = 'my-bucket', fileName = 'test.txt') {
  // [START storage_get_metadata]
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

  async function getMetadata() {
    // Gets the metadata for the file
    const [metadata] = await storage
      .bucket(bucketName)
      .file(fileName)
      .getMetadata();

    console.log(`Bucket: ${metadata.bucket}`);
    console.log(`CacheControl: ${metadata.cacheControl}`);
    console.log(`ComponentCount: ${metadata.componentCount}`);
    console.log(`ContentDisposition: ${metadata.contentDisposition}`);
    console.log(`ContentEncoding: ${metadata.contentEncoding}`);
    console.log(`ContentLanguage: ${metadata.contentLanguage}`);
    console.log(`ContentType: ${metadata.contentType}`);
    console.log(`CustomTime: ${metadata.customTime}`);
    console.log(`Crc32c: ${metadata.crc32c}`);
    console.log(`ETag: ${metadata.etag}`);
    console.log(`Generation: ${metadata.generation}`);
    console.log(`Id: ${metadata.id}`);
    console.log(`KmsKeyName: ${metadata.kmsKeyName}`);
    console.log(`Md5Hash: ${metadata.md5Hash}`);
    console.log(`MediaLink: ${metadata.mediaLink}`);
    console.log(`Metageneration: ${metadata.metageneration}`);
    console.log(`Name: ${metadata.name}`);
    console.log(`Size: ${metadata.size}`);
    console.log(`StorageClass: ${metadata.storageClass}`);
    console.log(`TimeCreated: ${new Date(metadata.timeCreated)}`);
    console.log(`Last Metadata Update: ${new Date(metadata.updated)}`);
    console.log(`TurboReplication: ${metadata.rpo}`);
    console.log(
      `temporaryHold: ${metadata.temporaryHold ? 'enabled' : 'disabled'}`
    );
    console.log(
      `eventBasedHold: ${metadata.eventBasedHold ? 'enabled' : 'disabled'}`
    );
    if (metadata.retentionExpirationTime) {
      console.log(
        `retentionExpirationTime: ${new Date(metadata.retentionExpirationTime)}`
      );
    }
    if (metadata.metadata) {
      console.log('\n\n\nUser metadata:');
      for (const key in metadata.metadata) {
        console.log(`${key}=${metadata.metadata[key]}`);
      }
    }
  }

  getMetadata().catch(console.error);
  // [END storage_get_metadata]
}
main(...process.argv.slice(2));
