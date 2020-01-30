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

function main(bucketName = 'my-bucket', filename = 'test.txt') {
  // [START storage_generate_upload_signed_url_v4]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function generateV4UploadSignedUrl() {
    // These options will allow temporary uploading of the file with outgoing
    // Content-Type: application/octet-stream header.
    const options = {
      version: 'v4',
      action: 'write',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      contentType: 'application/octet-stream',
    };

    // Get a v4 signed URL for uploading file
    const [url] = await storage
      .bucket(bucketName)
      .file(filename)
      .getSignedUrl(options);

    console.log('Generated PUT signed URL:');
    console.log(url);
    console.log('You can use this URL with any user agent, for example:');
    console.log(
      "curl -X PUT -H 'Content-Type: application/octet-stream' " +
        `--upload-file my-file '${url}'`
    );
  }

  generateV4UploadSignedUrl().catch(console.error);
  // [END storage_generate_upload_signed_url_v4]
}
main(...process.argv.slice(2));
