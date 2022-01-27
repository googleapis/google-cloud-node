// Copyright 2021 Google LLC
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

function main(
  bucketName = 'my-bucket',
  contents = 'these are my file contents',
  destFileName = 'file.txt'
) {
  // [START storage_upload_without_authentication]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The contents that you want to upload
  // const contents = 'these are my contents';

  // The new ID for your GCS file
  // const destFileName = 'your-new-file-name';

  // Imports the Google Cloud Node.js client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function uploadWithoutAuthentication() {
    const file = storage.bucket(bucketName).file(destFileName);

    // Returns an authenticated endpoint to which
    // you can make requests without credentials.
    const [location] = await file.createResumableUpload(); //auth required

    // Passes the location to file.save so you don't need to
    // authenticate this call
    await file.save(contents, {
      uri: location,
      resumable: true,
      validation: false,
    });

    console.log(`${destFileName} uploaded to ${bucketName}`);
  }

  uploadWithoutAuthentication().catch(console.error);
  // [END storage_upload_without_authentication]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
