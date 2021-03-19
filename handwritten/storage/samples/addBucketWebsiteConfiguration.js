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

'use strict';

// sample-metadata:
//   title: Bucket Website Configuration.
//   description: Bucket Website Configuration.
//   usage: node addBucketWebsiteConfiguration.js <BUCKET_NAME> <MAIN_PAGE_SUFFIX> <NOT_FOUND_PAGE>

function main(
  bucketName = 'my-bucket',
  mainPageSuffix = 'http://example.com',
  notFoundPage = 'http://example.com/404.html'
) {
  // [START storage_define_bucket_website_configuration]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The name of the main page
  // const mainPageSuffix = 'http://example.com';

  // The Name of a 404 page
  // const notFoundPage = 'http://example.com/404.html';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function addBucketWebsiteConfiguration() {
    await storage.bucket(bucketName).setMetadata({
      website: {
        mainPageSuffix,
        notFoundPage,
      },
    });

    console.log(
      `Static website bucket ${bucketName} is set up to use ${mainPageSuffix} as the index page and ${notFoundPage} as the 404 page`
    );
  }

  addBucketWebsiteConfiguration().catch(console.error);
  // [END storage_define_bucket_website_configuration]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
