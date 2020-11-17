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
/* eslint-disable no-unused-vars */

function main(bucketName = 'my-bucket') {
  // [START storage_list_files]
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function listFilesPaginated() {
    const bucket = storage.bucket(bucketName);
    const [files, queryForPage2] = await bucket.getFiles({autoPaginate: false});

    console.log('Files:');
    files.forEach(file => {
      console.log(file.name);
    });

    // Page through the next set of results using "queryForPage2"
    if (queryForPage2 !== null) {
      const [files, queryForPage3] = await bucket.getFiles(queryForPage2);

      console.log('Files:');
      files.forEach(file => {
        console.log(file.name);
      });

      // If necessary, continue cursoring using "queryForPage3"
    }
  }

  listFilesPaginated().catch(console.error);
  // [END storage_list_files]
}
main(...process.argv.slice(2));
